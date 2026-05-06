# ActView Ads Quick Reference

## Import Statements

```tsx
// Ad placement components
import { ActView AdsSquare } from "@/components/ads/actview-placement";
import { ActView AdsLeaderboard } from "@/components/ads/actview-placement";
import { ActView AdsBanner } from "@/components/ads/actview-placement";
import ActView AdsPlacement from "@/components/ads/actview-placement";

// Manual control hook
import { useActView Ads } from "@/components/analytics/actview-spa-handler";
```

## Ad Placement Components

### Square Ad (300x250)

```tsx
<ActView AdsSquare id="av_top" />
<ActView AdsSquare id="av_content_1" className="my-custom-class" />
```

### Leaderboard Ad (728x90)

```tsx
<ActView AdsLeaderboard id="leaderboard01" />
```

### Banner Ad (320x50)

```tsx
<ActView AdsBanner id="banner01" />
```

### Custom Placement

```tsx
<ActView
  AdsPlacement
  id="custom-ad-01"
  size="square"
  className="my-class"
  minHeight="300px"
/>
```

## Manual SPA Trigger

```tsx
"use client";

import { useActView Ads } from "@/components/analytics/actview-spa-handler";

export default function MyComponent() {
  const { triggerSPA } = useActView Ads();

  const handleEvent = () => {
    const success = triggerSPA();
    console.log("SPA triggered:", success);
  };

  return <button onClick={handleEvent}>Trigger</button>;
}
```

## Configuration

Located in `/components/analytics/actview.tsx`:

```javascript
topAds.config = {
  domain: "us.topfinanzas.com",
  networkCode: "23062212598",
  autoStart: false,
  lazyLoad: "hard",
  refresh: {
    time: 30,
    status: "active",
    anchor: "active",
  },
  formats: {
    anchor: { status: "active", position: "bottom" },
    interstitial: { status: "active" },
    offerwall: {
      status: "active",
      logoUrl: "https://us.topfinanzas.com/apple-touch-icon.png",
      websiteName: "TopFinanzas US",
      cooldown: "12",
    },
  },
};
```

## Console Commands

```javascript
// Check if ActView Ads is loaded
window.topAds;

// Check if SPA function exists
typeof window.topAds.spa;

// Find all ad containers
document.querySelectorAll("[data-actview]");

// Manually trigger SPA
window.topAds.spa();

// Check performance
window.performance.getEntriesByName("actview-execution");
```

## Important Rules

1. **Unique IDs**: Each ad placement must have a unique ID
2. **Automatic**: SPA navigation is handled automatically
3. **No Duplicates**: Don't use the same ID twice on one page
4. **Wait for Load**: Ensure ActView Ads script is loaded before manual triggers

## Test Page

Visit `/utm-test` to see ActView Ads in action with console logs.

## Common Issues

| Issue              | Solution                                        |
| ------------------ | ----------------------------------------------- |
| Ads not showing    | Check console for errors, verify unique IDs     |
| SPA not working    | Check if script loaded, verify pathname changes |
| Script errors      | Check network tab, verify script URL            |
| Performance issues | Check timing with performance marks             |

## File Locations

- **Main component**: `/components/analytics/actview.tsx`
- **SPA handler**: `/components/analytics/actview-spa-handler.tsx`
- **Placements**: `/components/ads/actview-placement.tsx`
- **Layout integration**: `/app/layout.tsx`
- **Config file**: `/lib/documents/config.js`
- **Documentation**: `/docs/TOPADS_IMPLEMENTATION.md`
