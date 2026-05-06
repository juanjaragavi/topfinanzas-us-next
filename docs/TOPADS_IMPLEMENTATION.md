# ActView Ads Integration Documentation

## Overview

ActView Ads has been successfully integrated into the TopFinanzas US Next.js project. This implementation provides:

- Script loading with Next.js optimization
- Automatic SPA (Single Page Application) navigation handling
- Ad placement components for easy integration
- US-specific configuration
- Development logging and debugging

## Files Created/Modified

### New Files

1. **`/components/analytics/actview.tsx`**
   - Main ActView Ads component that loads the script
   - Handles configuration and script loading
   - Includes performance monitoring and error handling

2. **`/components/analytics/actview-spa-handler.tsx`**
   - Handles SPA navigation for Next.js routing
   - Triggers `topAds.spa()` on route changes
   - Includes custom hook `useActView Ads()` for manual control
   - Handles browser back/forward navigation

3. **`/components/ads/actview-placement.tsx`**
   - Reusable components for ad placements
   - Pre-configured components: `ActView AdsSquare`, `ActView AdsLeaderboard`, `ActView AdsBanner`
   - Automatic logging for debugging

### Modified Files

1. **`/app/layout.tsx`**
   - Added ActView Ads imports
   - Integrated `<ActView Ads />` in head section
   - Integrated `<ActView AdsSPAHandler />` in body section

2. **`/lib/documents/config.js`**

- Updated domain to "us.topfinanzas.com"
- Updated logo URL to US-specific path
- Updated website name to "TopFinanzas US"

3. **`/app/utm-test/page.tsx`** (example)
   - Added two test ad placements (av_top, av_content_1)
   - Demonstrates proper usage

## Implementation Details

### Step 1: Script Loading

The ActView Ads script is loaded in the `<head>` section of `/app/layout.tsx`:

```tsx
<ClientOnly>
  <GoogleTagManager />
  <GoogleAds />
  <GoogleAdManager />
  <AdZep />
  <ActView Ads /> {/* ← New */}
</ClientOnly>
```

The `ActView Ads` component:

- Loads configuration inline
- Loads the ActView Ads script from `//test-actview.tbytpm.easypanel.host/topAds.min.js`
- Uses `strategy="afterInteractive"` for optimal performance
- Includes error handling and performance monitoring

### Step 2: SPA Navigation Handling

The SPA handler is integrated in the body section:

```tsx
<NavigationProvider>
  <Suspense fallback={null}>
    <UtmPersister />
    <UtmLinkInjector />
    <AdZepSPABridge />
    <AdZepInterstitialBlocker />
    <AdZepAccessibilityFix />
    <AdZepBackdropCleaner />
    <ActView AdsSPAHandler /> {/* ← New */}
    {/* ... */}
  </Suspense>
  {children}
</NavigationProvider>
```

The `ActView AdsSPAHandler` component:

- Monitors route changes using `usePathname()`
- Calls `topAds.spa()` on every navigation
- Handles browser back/forward navigation
- Includes 100ms delay to ensure DOM is ready

### Step 3: Ad Placements

Ad placements are added using the provided components:

```tsx
import { ActView AdsSquare } from "@/components/ads/actview-placement";

// In your page component:
<ActView AdsSquare id="av_top" />
<ActView AdsSquare id="av_content_1" />
```

The generated HTML:

```html
<div
  id="av_top"
  data-actview
  data-actview-size="square"
  style="min-height: 250px; display: block; margin: 20px auto; text-align: center;"
  aria-label="Advertisement av_top"
></div>
```

## Configuration

### ActView Ads Config (in actview.tsx)

```javascript
topAds.config = {
  domain: "us.topfinanzas.com", // US-specific domain
  networkCode: "23062212598", // Your network code
  autoStart: false, // Manual control
  lazyLoad: "hard", // Performance optimization
  refresh: {
    time: 30, // Refresh interval (seconds)
    status: "active", // Enable refresh
    anchor: "active", // Enable anchor ads
  },
  formats: {
    anchor: {
      status: "active", // Enable anchor ads
      position: "bottom", // Bottom of viewport
    },
    interstitial: {
      status: "active", // Enable interstitials
      include: [], // All pages
      exclude: [], // No exclusions
    },
    offerwall: {
      status: "active", // Enable offerwall
      logoUrl: "https://us.topfinanzas.com/apple-touch-icon.png", // Site logo
      websiteName: "TopFinanzas US", // US branding
      cooldown: "12", // Hours between shows
      include: [], // All pages
      exclude: [], // No exclusions
    },
  },
};
```

## Usage Examples

### Basic Ad Placement

```tsx
import { ActView AdsSquare } from "@/components/ads/actview-placement";

export default function MyPage() {
  return (
    <div>
      <h1>My Page</h1>
      <ActView AdsSquare id="av_top" />

      {/* Your content */}

      <ActView AdsSquare id="av_content_1" />
    </div>
  );
}
```

### Different Ad Sizes

```tsx
import {
  ActView AdsSquare,
  ActView AdsLeaderboard,
  ActView AdsBanner,
} from "@/components/ads/actview-placement";

export default function MyPage() {
  return (
    <div>
      {/* Square ad (300x250) */}
      <ActView AdsSquare id="av_top" />

      {/* Leaderboard ad (728x90) */}
      <ActView AdsLeaderboard id="leaderboard01" />

      {/* Banner ad (320x50) */}
      <ActView AdsBanner id="banner01" />
    </div>
  );
}
```

### Custom Ad Placement

```tsx
import ActView AdsPlacement from "@/components/ads/actview-placement";

export default function MyPage() {
  return (
    <ActView AdsPlacement
      id="custom-ad-01"
      size="square"
      className="my-custom-class"
      minHeight="300px"
    />
  );
}
```

### Manual SPA Trigger

```tsx
"use client";

import { useActView Ads } from "@/components/analytics/actview-spa-handler";

export default function MyComponent() {
  const { triggerSPA } = useActView Ads();

  const handleCustomEvent = () => {
    // Your custom logic

    // Manually trigger ActView Ads SPA
    const success = triggerSPA();
    console.log("ActView Ads SPA triggered:", success);
  };

  return <button onClick={handleCustomEvent}>Custom Action</button>;
}
```

## How It Works

### 1. Initial Page Load

1. User visits the site
2. `ActView Ads` component loads in `<head>`
3. Configuration is set via inline script
4. ActView Ads main script is loaded
5. Ad placements are rendered in the DOM
6. ActView Ads SDK detects and fills ad containers

### 2. Navigation Between Pages

1. User clicks a link (Next.js Link or native)
2. Next.js changes the route
3. `ActView AdsSPAHandler` detects pathname change via `usePathname()`
4. After 100ms delay, `topAds.spa()` is called
5. ActView Ads SDK scans for new ad containers
6. New ads are loaded and displayed

### 3. Browser Navigation

1. User clicks back/forward button
2. `popstate` event is fired
3. `ActView AdsSPAHandler` detects the event
4. After 100ms delay, `topAds.spa()` is called
5. ActView Ads updates ads for the current page

## Development and Debugging

### Console Logging

The implementation includes comprehensive logging:

```javascript
// ActView Ads component mounted
[ActView Ads] Component mounted

// Configuration loaded
[ActView Ads] Configuration loaded

// Script loaded
[ActView Ads] Script loaded successfully

// Ad placement mounted
[ActView Ads] Ad placement mounted: av_top (square)
[ActView Ads] Ad container found in DOM: av_top

// SPA navigation
[ActView Ads] Triggering SPA navigation
[ActView Ads] Browser navigation detected
```

### Performance Monitoring

Performance marks are created for monitoring:

```javascript
// Check performance in console:
window.performance
  .getEntriesByType("mark")
  .filter((m) => m.name.includes("actview"));

// Get measure:
window.performance.getEntriesByName("actview-execution");
```

### Testing

To test the implementation:

1. **Visit the test page**: `/utm-test`
2. **Open browser console** (F12)
3. **Look for ActView Ads logs**:
   - Script loading confirmation
   - Ad placement detection
   - SPA navigation triggers

4. **Navigate between pages**:
   - Click navigation links
   - Use browser back/forward
   - Check console for SPA triggers

5. **Verify ad containers**:

   ```javascript
   // In browser console:
   document.querySelectorAll("[data-actview]");
   ```

6. **Check ActView Ads object**:

   ```javascript
   // In browser console:
   window.topAds;
   typeof window.topAds.spa; // Should be 'function'
   ```

## Important Notes

### Ad Placement IDs

- Each ad placement must have a **unique ID**
- Use descriptive IDs: `av_top`, `av_content_1`, `leaderboard01`, etc.
- **Don't repeat IDs** on the same page

### SPA Navigation

- The system **automatically handles** all navigation
- Manual triggering is **rarely needed**
- Use `useActView Ads()` hook only for custom events

### Performance

- Scripts load with `afterInteractive` strategy
- Minimal impact on page performance
- 100ms delay ensures DOM is ready

### US Market Specifics

- Domain: `us.topfinanzas.com`
- Branding: "TopFinanzas US"
- Logo: US apple-touch-icon.png

## Troubleshooting

### Ads Not Showing

1. **Check console** for errors
2. **Verify ad container IDs** are unique
3. **Check network tab** for script loading
4. **Verify ActView Ads object** exists: `window.topAds`
5. **Check if SPA function exists**: `typeof window.topAds.spa`

### SPA Not Triggering

1. **Check console** for navigation logs
2. **Verify pathname changes** are detected
3. **Check if ActView Ads script loaded** before navigation
4. **Try manual trigger** with `useActView Ads()` hook

### Script Loading Errors

1. **Check network connectivity**
2. **Verify script URL** in Network tab
3. **Check browser console** for specific errors
4. **Verify CORS/CSP** headers allow the script

## Integration Checklist

- [x] ActView Ads component created
- [x] SPA handler component created
- [x] Ad placement components created
- [x] Layout.tsx updated with ActView Ads
- [x] Layout.tsx updated with SPA handler
- [x] Config.js updated for UK market
- [x] Test page updated with examples
- [x] Documentation created
- [ ] Production testing
- [ ] Performance monitoring
- [ ] Ad delivery verification

## Next Steps

1. **Test on staging environment**
2. **Verify ads load correctly**
3. **Check SPA navigation works**
4. **Monitor performance impact**
5. **Add ad placements to key pages**:
   - Homepage
   - Credit card pages
   - Blog posts
   - Financial solutions pages
6. **Set up analytics tracking** for ad performance
7. **Configure ad refresh** settings if needed
8. **Test different ad formats** (anchor, interstitial, offerwall)

## Support

For ActView Ads-specific issues:

- Check ActView Ads documentation
- Contact ActView Ads support
- Review ActView Ads dashboard for delivery metrics

For integration issues:

- Review this documentation
- Check browser console logs
- Review component implementations
- Test on `/utm-test` page

---

**Implementation Date**: November 13, 2025  
**Project**: TopFinanzas US (us-topfinanzas-com)  
**Framework**: Next.js 15+ with App Router  
**TypeScript**: Enabled with strict mode
