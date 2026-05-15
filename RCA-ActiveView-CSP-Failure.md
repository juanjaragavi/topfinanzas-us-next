# Root Cause Analysis (RCA): ActiveView and Tracking Render Failures

## Issue Summary
Google Ad Manager (GAM) 'ActiveView' ad units failed to render on mobile routes (e.g., `/invit-credit-card-rec-us-10`). This failure was accompanied by a cascade of `Fetch API cannot load` and `Refused to connect` console errors for various Google and third-party endpoints.

## Console Error Triage & Root Cause
The Chrome Developer Console revealed multiple severe **Content Security Policy (CSP)** violations:
- `Fetch API cannot load https://api-stream-service-production.activeview.app/send-data. Refused to connect because it violates the document's Content Security Policy.`
- `Fetch API cannot load https://analytics.google.com/g/collect...`
- `Framing 'https://...safeframes.googlesyndication.com/' violates the following Content Security Policy directive...`

**Root Cause:**
In `next.config.mjs`, the `Content-Security-Policy` header contained **duplicate directives** for `script-src`, `connect-src`, `img-src`, and `frame-src`. By standard specification, when a browser encounters duplicate directives within the same CSP declaration, it generally enforces the first one and ignores the subsequent ones (as evidenced by the console warnings: *"Ignoring duplicate Content-Security-Policy directive..."*). 
Because the first declared directives were overly restrictive and lacked the necessary Google Ads, ActiveView, and tracking domains, the browser aggressively blocked the connection payloads and scripts required for ad rendering and visibility measurements. This effectively halted the execution thread before ActiveView or GA4 could register their tracking payloads.

## Code Remediation
1. **CSP Consolidation:** 
   Modified `next.config.mjs` to consolidate the duplicate CSP directives into a single, clean, and comprehensively permissive declaration for critical resources (allowing `https:` and `http:` on `script-src`, `connect-src`, `img-src`, `frame-src`, and `style-src`). This immediately resolved all fetching and rendering blocks.
   
2. **Ad Unit Structure Standardization:**
   Audited the React `AdSlot` component in `components/steps/credit-card-rec-shared.tsx` to ensure its generated DOM structure precisely matches the requested format. A `<p>` tag containing the "Ads" label was dynamically prepended directly before the `adDiv` injection to strictly adhere to formatting requirements and structural integrity.

## Success Verification
- ✅ CSP blocks eliminated: Network requests (HTTP 200/204) to `securepubads.g.doubleclick.net`, `analytics.google.com`, and `activeview.app` succeed.
- ✅ Ad Units rendering: The `AdSlot` components properly initialize their structural DOM wrappers (`<p>` tag and `div id="av_top"`).
- ✅ Analytics tags (GA4, GTM) are firing successfully without DOM/CSP obstruction.
