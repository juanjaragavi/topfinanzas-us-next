# Advertisement Components

## Overview

This directory contains advertisement management components for the application, including TopAds integration and local advertisement content.

## Components

### TopAds Integration

#### `topads-placement.tsx`

Reusable components for TopAds ad placements with pre-configured variants:

- `TopAdsPlacement` - Generic component for custom ad placements
- `ActviewAdSlot` - Pre-configured square ad (300x250)
- `TopAdsLeaderboard` - Pre-configured leaderboard ad (728x90)
- `TopAdsBanner` - Pre-configured banner ad (320x50)

**Example Usage:**

```tsx
<div>
  <p
    style={{
      fontSize: "10px",
      textTransform: "uppercase",
      textAlign: "center",
    }}
  >
    Ads
  </p>
  <div id="av_top"></div>
</div>
```

**See:** `/docs/ACTVIEW_IMPLEMENTATION.md` for comprehensive documentation.

### Local Advertisement Components

Currently available components handle local advertisement content and management.

## Non-GAM Advertisement System

The application uses a local advertisement system defined in `/lib/ads/advertisements.ts` for managing promotional content without external ad networks.

### Local Advertisement Management

See `/lib/ads/advertisements.ts` for:

- Advertisement interface definitions
- Advertisement data management
- Filtering by format and status
- Random advertisement selection

## Implementation

Local advertisements are displayed through custom components that load static promotional content rather than external ad networks.

## Note

Google Ad Manager (GAM) components have been removed from this directory as part of the migration away from external ad networks.
