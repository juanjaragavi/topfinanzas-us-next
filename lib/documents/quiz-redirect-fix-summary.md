# Quiz Redirect Disable Implementation

## Overview

Disabled automatic redirect from quiz pages to credit card recommender pages when cookie validation is turned off, allowing for production testing with UTM parameters.

## Problem Statement

When users with UTM parameters completed the quiz form, they were automatically redirected to the credit card recommender landing page on subsequent visits, even when cookie validation was disabled. This prevented testing repeat form submissions in production.

## Solution

Added a validation check in both quiz pages (`/app/quiz/page.tsx` and `/app/quiz-2/page.tsx`) to respect the `NEXT_PUBLIC_COOKIE_VALIDATION_ENABLED` environment variable before executing redirects.

## Technical Changes

### Files Modified

1. **`/app/quiz/page.tsx`**
   - Added validation check before redirect logic
   - Checks `process.env.NEXT_PUBLIC_COOKIE_VALIDATION_ENABLED !== "false"`
   - Exits early if validation is disabled, preventing redirect

2. **`/app/quiz-2/page.tsx`**
   - Applied same validation check as quiz page
   - Ensures consistent behavior across both quiz variants

### Implementation Details

```typescript
useEffect(() => {
  // Check if cookie validation is enabled - only redirect if it is
  const validationEnabled =
    process.env.NEXT_PUBLIC_COOKIE_VALIDATION_ENABLED !== "false";

  if (!validationEnabled) {
    // Validation disabled - skip redirect to allow repeat submissions
    return;
  }

  // ... existing redirect logic
}, [router]);
```

## Behavior

### When `NEXT_PUBLIC_COOKIE_VALIDATION_ENABLED=false`

- ✅ No automatic redirect from quiz to recommender pages
- ✅ Users can resubmit forms multiple times
- ✅ Recommender lock is not enforced
- ✅ Ideal for testing with UTM parameters

### When `NEXT_PUBLIC_COOKIE_VALIDATION_ENABLED=true` (or not set)

- ✅ Normal redirect behavior preserved
- ✅ Users redirected to recommender after completing quiz
- ✅ Prevents duplicate form submissions
- ✅ Production behavior maintained

## Environment Configuration

The functionality is controlled by the environment variable in `.env`, `.env.production`, and `.env.local`:

```env
NEXT_PUBLIC_COOKIE_VALIDATION_ENABLED=false
```

## Consistency with Existing Patterns

This implementation mirrors the cookie persistence guard in `credit-card-form.tsx`:

```typescript
const persistRegistrationCookies = useCallback(() => {
  const cookieConfig = getCookieConfig();
  if (!cookieConfig.VALIDATION_ENABLED) {
    console.log(
      "[QUIZ] Cookie validation disabled; skipping cookie persistence",
    );
    return;
  }
  // ... cookie persistence logic
}, [formData.email, formData.firstName]);
```

Both guards now consistently respect the validation setting.

## Testing Scenarios

### Scenario 1: Testing with UTM Parameters (Validation Disabled)

1. User visits `/quiz?utm_source=google&utm_campaign=test`
2. User completes quiz form
3. User can revisit `/quiz?utm_source=google&utm_campaign=test`
4. **No redirect occurs** - form is available for resubmission

### Scenario 2: Production Use (Validation Enabled)

1. User visits `/quiz?utm_source=google&utm_campaign=prod`
2. User completes quiz form
3. User revisits `/quiz?utm_source=google&utm_campaign=prod`
4. **Redirect occurs** - user sent to `/recomendador-de-tarjetas-de-credito-p1?utm_source=google&utm_campaign=prod`

## Benefits

1. **Testing Flexibility**: Enables repeat submissions for testing without code changes
2. **UTM Preservation**: UTM parameters persist through the journey whether redirected or not
3. **Consistent Behavior**: Matches cookie persistence guard pattern
4. **Production Safety**: Normal redirect behavior maintained when validation is enabled
5. **No Breaking Changes**: Existing functionality preserved

## Related Components

- `lib/navigation/recommender-lock.ts` - Lock creation and persistence logic
- `hooks/use-recommender-page-guard.ts` - Recommender page guard hook
- `components/credit-card-form.tsx` - Cookie persistence guard
- Environment variables: `.env`, `.env.production`, `.env.local`

## Deployment Notes

- No database changes required
- Environment variable already set to `false` in all environments
- Changes are backward compatible
- Can be toggled without code deployment by changing environment variable

## Future Considerations

Consider adding:

- Admin panel toggle for validation setting
- Logging for redirect decisions in development mode
- Analytics tracking for redirect vs. non-redirect journeys
- A/B testing framework using this toggle
