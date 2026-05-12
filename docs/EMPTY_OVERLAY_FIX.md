<!-- markdownlint-disable MD013 MD024 MD033 MD036 MD041 -->

# AdZep Empty Overlay Fix

## Problem Description

When users click on certain links or buttons, an empty blurred overlay appears instead of showing the interstitial ad unit with a 'Close' button. The console logs show:

```bash
Render ended: gpt_unit_/28062819508/uk_topfinanzas_com_mob_interstitial_0, isDisplay: false
Div de anuncio no encontrada para slotId uk_topfinanzas_com_mob_3
```

### Root Cause

1. **AdZep creates backdrop elements** when initializing interstitial ads
2. **Ad fails to render** due to:
   - Ad network rules (frequency capping, targeting)
   - Ad blockers
   - Network issues
   - No available ad inventory
3. **Backdrop remains visible** even though the ad unit didn't render (`isDisplay: false`)
4. **Empty blur overlay** blocks user interaction with the page

## Solution Overview

The fix consists of three layers:

### Layer 1: Enhanced CSS Rules (app/globals.css)

Added comprehensive CSS rules to hide backdrop elements that don't contain actual ad content:

```css
/* Hide backdrop elements that have no meaningful content */
body
  > div[style*="position: fixed"][style*="z-index"]:not(
    [id*="uk_topfinanzas"]
  ):not(:has(iframe)):not(:has(img)):not(:has([id^="google_ads"])) {
  opacity: 0 !important;
  pointer-events: none !important;
  transition: opacity 0.3s ease-out !important;
}

/* Additional protection for backdrops with blur effects */
body
  > div[style*="backdrop-filter"]:not([id*="uk_topfinanzas"]):not(
    :has(iframe)
  ):not(:has([id^="uk_topfinanzas_"])) {
  opacity: 0 !important;
  pointer-events: none !important;
  backdrop-filter: none !important;
}
```

**How it works:**

- Targets fixed-position elements with high z-index
- Excludes elements that contain iframes, images, or AdZep ad units
- Only hides elements that have no actual ad content
- Uses `:has()` CSS selector for content detection

### Layer 2: Active JavaScript Monitoring (AdZepBackdropCleaner)

Created a new component that actively monitors and removes orphaned backdrop elements:

**File:** `components/analytics/adzep-backdrop-cleaner.tsx`

**Key Features:**

1. **Content Detection**
   - Checks if backdrop contains iframes (common in ads)
   - Looks for AdZep ad unit containers
   - Verifies element has meaningful size
   - Identifies actual ad content vs empty overlays

2. **Backdrop Identification**
   - Detects fixed-position elements covering viewport
   - Checks for high z-index values
   - Identifies backdrop-filter/filter effects
   - Matches backdrop-related class names and IDs

3. **Automatic Cleanup**
   - Removes orphaned backdrops immediately
   - Restores body overflow when backdrops are removed
   - Clears aria-hidden attributes
   - Logs cleanup actions in development mode

4. **Continuous Monitoring**
   - MutationObserver watches for new backdrop elements
   - Periodic cleanup every 2 seconds
   - Route change triggers re-evaluation
   - Delayed cleanup allows ad content time to load

### Layer 3: Proper AdZep Activation

Verified that `window.AdZepActivateAds()` is being called correctly:

**AdZep Activation Flow:**

1. **Script Loading** (`components/analytics/adzep.tsx`)
   - Loads AdZep script with `afterInteractive` strategy
   - Performance monitoring for script load time
   - Error handling for script failures

2. **SPA Bridge** (`components/analytics/adzep-spa-bridge.tsx`)
   - Detects navigation changes
   - Waits for ad containers to mount
   - Calls activation with appropriate timeouts
   - Implements retry logic with backoff

3. **Activation Utility** (`lib/ads/activate-adzep.ts`)
   - Singleton pattern prevents duplicate calls
   - Waits for `window.AdZepActivateAds` function
   - Guards against overlapping activations
   - Comprehensive logging in development mode

## Files Modified

### 1. app/globals.css

- **Added:** Enhanced CSS rules for orphaned backdrop detection
- **Purpose:** Passive CSS layer to hide empty overlays

### 2. components/analytics/adzep-backdrop-cleaner.tsx

- **Status:** NEW FILE
- **Purpose:** Active JavaScript monitoring and cleanup
- **Lines:** ~220 lines

### 3. app/layout.tsx

- **Added:** Import and usage of `AdZepBackdropCleaner`
- **Integration:** Added to Suspense block with other analytics components

## Testing Instructions

### Development Mode Testing

1. **Enable Development Logging**

   ```bash
   # Already enabled in development mode
   pnpm dev
   ```

2. **Monitor Console Output**

   ```bash
   [AdZep Backdrop Cleaner] Removing orphaned backdrop: { id: "", className: "...", tagName: "DIV" }
   [AdZep Backdrop Cleaner] Cleaned up 1 orphaned backdrop(s) and restored body overflow
   [AdZep] Calling window.AdZepActivateAds()
   [AdZep] Activation successful
   ```

3. **Test Scenarios**
   - Navigate to pages with interstitial ad triggers
   - Click links/buttons that should show ads
   - Verify empty overlays are removed automatically
   - Check that legitimate ads still display properly

### Production Testing

1. **Deploy to Staging**

   ```bash
   pnpm build
   pnpm start
   ```

2. **Verify Behavior**
   - No empty blur overlays appear
   - Legitimate interstitial ads display properly
   - Close buttons on ads work correctly
   - Page content remains accessible

3. **Monitor Ad Performance**
   - Check AdZep dashboard for ad impressions
   - Verify click-through rates
   - Ensure revenue is not impacted

## How the Fix Works

### Scenario 1: Ad Renders Successfully

1. User clicks link/button
2. AdZep creates backdrop element
3. Ad content loads into backdrop
4. `hasAdContent()` returns true
5. Backdrop remains visible with ad
6. User can interact with ad or close it

### Scenario 2: Ad Fails to Render (FIXED)

1. User clicks link/button
2. AdZep creates backdrop element
3. Ad fails to render (no inventory, blocked, etc.)
4. `hasAdContent()` returns false
5. **NEW:** Backdrop is immediately removed by cleaner
6. **NEW:** Body overflow is restored
7. **NEW:** Page remains fully accessible

### Scenario 3: Delayed Ad Rendering

1. User clicks link/button
2. AdZep creates backdrop element
3. Cleaner detects empty backdrop
4. **NEW:** Waits 500ms for ad content to load
5. If content loads, backdrop remains
6. If no content, backdrop is removed

## Benefits

1. **User Experience**
   - No more empty blur overlays blocking content
   - Legitimate ads still display properly
   - Smooth page interactions maintained

2. **Revenue Protection**
   - Does not block actual ad units
   - Preserves AdZep functionality
   - Only removes orphaned elements

3. **Robustness**
   - Multi-layer approach (CSS + JS)
   - Handles various failure scenarios
   - Continuous monitoring prevents regression

4. **Developer Experience**
   - Comprehensive logging in development
   - Clear console messages for debugging
   - Easy to test and verify

## Troubleshooting

### If Empty Overlays Still Appear

1. **Check Console Logs**

   ```bash
   [AdZep Backdrop Cleaner] Removing orphaned backdrop: ...
   ```

   If you don't see cleanup logs, the cleaner might not be detecting the backdrop

2. **Inspect Backdrop Element**
   - Right-click on overlay → Inspect Element
   - Check element ID, class names, and inline styles
   - Verify it matches our detection patterns

3. **Adjust Detection Logic**
   If needed, update `isBackdropElement()` in `adzep-backdrop-cleaner.tsx`:

   ```typescript
   const hasBackdropName =
     htmlElement.className?.toLowerCase().includes("backdrop") ||
     htmlElement.id?.toLowerCase().includes("specific-pattern");
   ```

### If Legitimate Ads Are Being Removed

1. **Check Content Detection**
   Verify `hasAdContent()` properly detects your ad format:

   ```typescript
   // Add specific checks for your ad network
   if (element.querySelector("[data-your-ad-network]")) {
     return true;
   }
   ```

2. **Add Whitelisting**
   Exclude specific elements from removal:

   ```typescript
   if (child.hasAttribute("data-legitimate-ad")) {
     continue;
   }
   ```

## Related Documentation

- `/docs/BLUR_OVERLAY_FIX.md` - Previous overlay fix attempts
- `/.github/instructions/ADZEP_IMPLEMENTATION.instructions.md` - AdZep integration guide
- `/lib/documents/OVERLAY_COMPLETE_REMOVAL.md` - History of overlay issues
- `/lib/documents/INTERSTITIAL_BLOCKER_SUMMARY.md` - Previous interstitial blocker

## Maintenance Notes

- **CSS Rules:** Located in `app/globals.css` lines 300-320
- **Cleaner Component:** `components/analytics/adzep-backdrop-cleaner.tsx`
- **Layout Integration:** `app/layout.tsx` line 248
- **Cleanup Interval:** Currently set to 2000ms (2 seconds)
- **Content Detection Delay:** 500ms after backdrop creation

## Success Criteria

✅ Empty blur overlays are automatically removed
✅ Legitimate interstitial ads display properly
✅ Close buttons on ads are functional
✅ Page content remains accessible
✅ No negative impact on ad revenue
✅ Body overflow is properly restored
✅ Development logging provides clear feedback

---

**Implementation Date:** October 23, 2025
**Status:** Active
**Priority:** High (User Experience Critical)
