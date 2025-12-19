# TopAds Quick Reference

## Import Statements

```tsx
// Ad placement components
import { TopAdsSquare } from "@/components/ads/topads-placement";
import { TopAdsLeaderboard } from "@/components/ads/topads-placement";
import { TopAdsBanner } from "@/components/ads/topads-placement";
import TopAdsPlacement from "@/components/ads/topads-placement";

// Manual control hook
import { useTopAds } from "@/components/analytics/topads-spa-handler";
```

## Ad Placement Components

### Square Ad (300x250)

```tsx
<TopAdsSquare id="square01" />
<TopAdsSquare id="square02" className="my-custom-class" />
```

### Leaderboard Ad (728x90)

```tsx
<TopAdsLeaderboard id="leaderboard01" />
```

### Banner Ad (320x50)

```tsx
<TopAdsBanner id="banner01" />
```

### Custom Placement

```tsx
<TopAdsPlacement
  id="custom-ad-01"
  size="square"
  className="my-class"
  minHeight="300px"
/>
```

## Manual SPA Trigger

```tsx
"use client";

import { useTopAds } from "@/components/analytics/topads-spa-handler";

export default function MyComponent() {
  const { triggerSPA } = useTopAds();

  const handleEvent = () => {
    const success = triggerSPA();
    console.log("SPA triggered:", success);
  };

  return <button onClick={handleEvent}>Trigger</button>;
}
```

## Configuration

Located in `/components/analytics/topads.tsx`:

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
// Check if TopAds is loaded
window.topAds;

// Check if SPA function exists
typeof window.topAds.spa;

// Find all ad containers
document.querySelectorAll("[data-topads]");

// Manually trigger SPA
window.topAds.spa();

// Check performance
window.performance.getEntriesByName("topads-execution");
```

## Important Rules

1. **Unique IDs**: Each ad placement must have a unique ID
2. **Automatic**: SPA navigation is handled automatically
3. **No Duplicates**: Don't use the same ID twice on one page
4. **Wait for Load**: Ensure TopAds script is loaded before manual triggers

## Test Page

Visit `/utm-test` to see TopAds in action with console logs.

## Common Issues

| Issue              | Solution                                        |
| ------------------ | ----------------------------------------------- |
| Ads not showing    | Check console for errors, verify unique IDs     |
| SPA not working    | Check if script loaded, verify pathname changes |
| Script errors      | Check network tab, verify script URL            |
| Performance issues | Check timing with performance marks             |

## File Locations

- **Main component**: `/components/analytics/topads.tsx`
- **SPA handler**: `/components/analytics/topads-spa-handler.tsx`
- **Placements**: `/components/ads/topads-placement.tsx`
- **Layout integration**: `/app/layout.tsx`
- **Config file**: `/lib/documents/config.js`
- **Documentation**: `/docs/TOPADS_IMPLEMENTATION.md`
