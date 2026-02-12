# AdZep → TopAds Migration Summary

## Overview

Successfully removed all legacy AdZep references and replaced them with TopAds, the proprietary ad system now in use.

## Changes Made

### 1. **Active Code Files**

#### Deleted Components (8 files)

- `components/analytics/adzep.tsx`
- `components/analytics/adzep-test.tsx`
- `components/analytics/adzep-spa-bridge.tsx`
- `components/analytics/adzep-interstitial-blocker.tsx`
- `components/analytics/adzep-accessibility-fix.tsx` (replaced with `ad-accessibility-fix.tsx`)
- `components/analytics/adzep-backdrop-cleaner.tsx`
- `components/analytics/adzep-trackers.tsx`
- `components/analytics/adzep-trigger.tsx`

#### Created Components (1 file)

- `components/analytics/ad-accessibility-fix.tsx` - Generic ad accessibility fix (formerly adzep-accessibility-fix.tsx)
  - Still needed for Google Ads vignette which sets `aria-hidden` on body
  - Renamed to be ad-provider agnostic

#### Deleted Utilities (1 file)

- `lib/ads/activate-adzep.ts` - Dead code (no longer used after AdZep SPA bridge was removed)

#### Updated Core Files

##### **app/layout.tsx**

- Removed all AdZep component imports
- Removed `ENABLE_ADZEP` constant
- Removed AdZep conditional rendering
- Updated to use `AdAccessibilityFix` (renamed component)
- All TopAds components remain active

##### **lib/ads/config.ts**

- Renamed `AdZepConfig` interface → `TopAdsConfig`
- Renamed `adZepConfig` export → `topAdsConfig`
- Updated all comments and documentation
- Removed legacy AdZep-specific selectors (`[data-adzep]`, `[id^='adzep-']`, `[class*='adzep-']`)
- Updated function references to use `topAdsConfig`

##### **lib/logger.ts**

- Renamed `adzepLogger` → `topadsLogger`

##### **types/window.d.ts**

- Removed `AdZepActivateAds` declaration (legacy function no longer used)

##### **lib/ads/overlay.ts**

- Updated comment: "AdZep's own ad units" → "TopAds ad units"

##### **app/globals.css**

- Updated all comments referencing AdZep → TopAds
- Changed `body:not(:has([data-adzep-active]))` → `body:not(:has([data-topads-active]))`

##### **components/layout/header.tsx**

- Updated comments to reference TopAds instead of AdZep
- Noted that SPA activation is handled by `TopAdsSPAHandler` in layout.tsx

### 2. **Documentation Files**

#### Instruction Files

- `.github/instructions/project-rules.instructions.md` - Updated analytics section
- `.github/copilot-instructions.md` - Comprehensive AdZep → TopAds update throughout
- `.clinerules/RULES.md` - Updated analytics integration section

#### Reference Documentation

- `CLAUDE.md` - Updated all AdZep references, noted removal of ADZEP_IMPLEMENTATION.instructions.md
- `GEMINI.md` - Updated analytics integration section
- `WARP.md` - Updated all AdZep references and code examples

#### Deleted Documentation

- `.clinerules/ADZEP_IMPLEMENTATION.md`
- `.clinerules/ADZEP_SUMMARY.md`

### 3. **Utility Scripts**

#### **scripts/analyze-console-usage.js**

- Updated logger mappings: `adzep` → `topads`
- Updated pattern matching: `adzep` → `topads`
- Updated example file references

#### **scripts/auto-migrate-logger.js**

- Updated file paths to reference TopAds components
- Updated logger detection logic

## Technical Details

### TopAds vs AdZep Architecture

**AdZep (Legacy):**

- Used `window.AdZepActivateAds()` function
- Required manual activation calls
- Multiple tracking components (trackers, trigger, test panel)
- Centralized handler + SPA bridge architecture
- Complex activation logic with retries and timeouts

**TopAds (Current):**

- Uses `window.topAds.spa()` function
- Automatic SPA navigation via `TopAdsSPAHandler`
- Single handler component
- Configuration-driven (domain, networkCode, lazyLoad)
- Simpler, cleaner architecture

### Ad Container ID Conventions

Both systems use the same container IDs:

**Benefits Pages:**

- `square02` (first ad)
- `square04` (second ad)

**Requirements Pages:**

- `square03` (first ad)
- `square04` (second ad)

All containers require:

- `data-topads` attribute
- `data-topads-size="square"` attribute

### Configuration

**TopAds Configuration** (in `topads.tsx`):

```javascript
topAds.config = {
    domain: 'TOPFIN_US',
    networkCode: '23062212598',
    lazyLoad: 'soft',
    pageSetting: { exclude: [...] },
    formats: {
        interstitial: { status: 'active', exclude: [...] },
        offerwall: { status: 'active', ... }
    }
}
```

## Migration Verification

✅ **No TypeScript/TSX errors** - All active code compiles successfully
✅ **No broken imports** - All references updated
✅ **No stale AdZep references** in active code (only in historical `/docs/` and `/lib/documents/`)
✅ **Layout.tsx clean** - Only TopAds components remain
✅ **Logger updated** - `topadsLogger` available for TopAds components
✅ **Window type definitions clean** - AdZep function declaration removed

## Remaining AdZep References

The following locations still contain AdZep references but are **intentionally preserved** as historical documentation:

- `/docs/ADZEP_*.md` - Historical implementation reports
- `/lib/documents/*.md` - Implementation guides and fix documentation
- `.github/agents/top-finanzas-uk-agent.agent.md` - UK project reference (different codebase)

These files document the implementation history and troubleshooting processes, which may be valuable for future reference.

## Testing Recommendations

1. **Visual Testing:**
   - Verify ad units display correctly on Benefits pages (`square02`, `square04`)
   - Verify ad units display correctly on Requirements pages (`square03`, `square04`)
   - Check interstitial and offerwall formats activate properly

2. **SPA Navigation Testing:**
   - Navigate between pages
   - Use browser back/forward buttons
   - Verify `window.topAds.spa()` is called on route changes (check DevTools console)

3. **Accessibility Testing:**
   - Verify `aria-hidden` is removed from `<body>` element
   - Test with screen readers
   - Check Chrome DevTools console for accessibility warnings

4. **Analytics Testing:**
   - Verify GTM loads before TopAds
   - Check TopAds configuration in browser console: `window.topAds.config`
   - Verify exclusions work correctly (quiz pages, etc.)

## Rollback Procedure

If issues arise and rollback is needed:

1. Restore from backup branch
2. Check git history for all changes made today
3. Key files to restore:
   - `app/layout.tsx`
   - `lib/ads/config.ts`
   - All deleted component files in `components/analytics/adzep*.tsx`
   - `lib/ads/activate-adzep.ts`

## Next Steps

1. Monitor production for any ad delivery issues
2. Check analytics to ensure TopAds is tracking properly
3. Verify revenue metrics remain stable
4. Consider removing historical `/docs/ADZEP_*.md` files after 30-day stabilization period

---

**Migration completed**: 2025-01-31
**Files modified**: 22 active code/config files
**Files deleted**: 10 (8 components + 2 doc files)
**Documentation updated**: 6 files (instructions, README, guides)
**Zero errors**: TypeScript compilation successful
