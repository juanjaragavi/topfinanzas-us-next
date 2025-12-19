# Quiz CTA External Redirect Implementation

## Summary

Changed the Quiz CTA button redirect from internal path `/recomendador-de-tarjetas-de-credito-p1` to external link router `https://linkly.link/2ERav` with full UTM parameter preservation.

## Date

October 17, 2025

## Changes Made

### 1. Created URL Builder Utility

**File:** `/lib/utils/url-builder.ts`

New utility module with two main functions:

#### `buildUrlWithUtmParams(baseUrl: string): string`

- Collects UTM parameters from sessionStorage
- Appends them to any URL (internal or external)
- Handles existing query parameters properly
- Returns clean URL if no UTM parameters exist

#### `redirectWithUtmParams(url: string): void`

- Convenience wrapper for redirecting to URLs
- Preserves UTM parameters automatically
- Uses `window.location.href` for external redirects

**UTM Parameters Preserved:**

- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_term`
- `utm_content`

### 2. Updated Credit Card Form Components

#### `/components/credit-card-form.tsx`

**Changes:**

1. Added import: `import { redirectWithUtmParams } from "@/lib/utils/url-builder";`
2. Updated duplicate submission redirect (line ~354):
   - **Before:** `router.push("/recomendador-de-tarjetas-de-credito-p1");`
   - **After:** `redirectWithUtmParams("https://linkly.link/2ERav");`
3. Updated successful submission redirect (line ~406):
   - **Before:** `router.push("/recomendador-de-tarjetas-de-credito-p1");`
   - **After:** `redirectWithUtmParams("https://linkly.link/2ERav");`

#### `/components/credit-card-form-to-product.tsx`

**Changes:**

1. Added import: `import { redirectWithUtmParams } from "@/lib/utils/url-builder";`
2. Updated duplicate submission redirect (line ~354):
   - **Before:** `router.push("/recomendador-de-tarjetas-de-credito-p1");`
   - **After:** `redirectWithUtmParams("https://linkly.link/2ERav");`
3. Updated successful submission redirect (line ~409):
   - **Before:** `router.push("/recomendador-de-tarjetas-de-credito-p1");`
   - **After:** `redirectWithUtmParams("https://linkly.link/2ERav");`

## Technical Implementation

### How UTM Preservation Works

1. **UTM Capture**: UTM parameters are captured on page load via `UTMTracker` component (already implemented)
2. **Storage**: Parameters stored in `sessionStorage` using keys from `UTM_PARAM_KEYS` constant
3. **Retrieval**: `buildUrlWithUtmParams()` reads all UTM values from sessionStorage
4. **URL Building**: Creates URLSearchParams and appends to destination URL
5. **Redirect**: Uses `window.location.href` for external navigation

### Example Flow

**User visits:**

```text
https://us.topfinanzas.com/quiz?utm_source=google&utm_campaign=credit_cards&utm_medium=cpc
```

**UTM parameters stored in sessionStorage:**

```javascript
{
  utm_source: "google",
  utm_campaign: "credit_cards",
  utm_medium: "cpc"
}
```

**On form submission, redirects to:**

```text
https://linkly.link/2ERav?utm_source=google&utm_campaign=credit_cards&utm_medium=cpc
```

## Benefits

1. **Full Attribution**: All campaign tracking parameters preserved through redirect
2. **Link Router Flexibility**: Linkly can update destination without code changes
3. **Analytics Continuity**: UTM parameters available at destination for tracking
4. **Clean Implementation**: Reusable utility for future external redirects
5. **Backward Compatible**: Gracefully handles missing UTM parameters

## Testing Checklist

- [ ] Quiz submission redirects to external link
- [ ] UTM parameters present in destination URL
- [ ] Works with partial UTM parameters (e.g., only source and medium)
- [ ] Works without any UTM parameters (clean redirect)
- [ ] Duplicate submission scenario preserves UTMs
- [ ] Successful submission scenario preserves UTMs
- [ ] Both `/quiz` and `/quiz-2` pages work correctly
- [ ] Analytics events still fire correctly
- [ ] Cookie persistence still functions

## Rollback Instructions

If issues arise, revert these files:

```bash
git checkout dev -- components/credit-card-form.tsx
git checkout dev -- components/credit-card-form-to-product.tsx
git checkout dev -- lib/utils/url-builder.ts
```

Or simply replace `redirectWithUtmParams("https://linkly.link/2ERav")` back to `router.push("/recomendador-de-tarjetas-de-credito-p1")` in both form files.

## Notes

- External redirects use `window.location.href` instead of Next.js router
- This is intentional for proper external navigation with UTM preservation
- Timeout delay (800ms) preserved for UX consistency
- Success/duplicate messages remain unchanged
- No impact on Google Sheets API or Kit.com subscription flow
- Conversion tracking events still fire before redirect

## Related Files (Not Modified)

- `/app/quiz/page.tsx` - Uses quiz form component
- `/app/quiz-2/page.tsx` - Uses quiz-to-product form component
- `/lib/constants.ts` - Contains UTM_PARAM_KEYS definition
- `/components/UTMTracker.tsx` - Handles initial UTM capture
- `/lib/navigation/recommender-lock.ts` - Internal redirect logic (not affected)

## Future Enhancements

Consider adding:

- Unit tests for `url-builder.ts` utility
- E2E tests for UTM parameter flow
- Logging/analytics for redirect URL debugging
- Support for additional tracking parameters (fbclid, gclid, etc.)
