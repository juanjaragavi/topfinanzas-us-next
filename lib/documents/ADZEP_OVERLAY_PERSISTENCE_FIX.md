# AdZep Overlay Persistence Fix

## Issue Description

**Problem**: An empty overlay was appearing and persisting on credit card product articles (e.g., `/financial-solutions/santander-uk-credit-card`) shortly after page load. The overlay consisted of a small loading indicator positioned at the bottom-right of the page that wouldn't disappear.

**User Impact**:

- Visible loading indicator remained on screen indefinitely
- Created impression that page was still loading when content was ready
- Detracted from user experience on product pages

## Root Cause Analysis

### The Overlay System

The AdZep SPA Bridge uses an overlay system to prevent layout shifts while ad units initialize:

1. **Overlay Shows**: When navigating to article-like paths (including `/financial-solutions/*`)
2. **Ad Activation**: System attempts to activate AdZep and render ads
3. **Verification**: Checks if ad creatives have rendered
4. **Overlay Hides**: Should hide once ads render or after verification retries

### The Problems

1. **No Maximum Timeout**: Overlay had no absolute maximum display time
2. **Verification Dependency**: Overlay only hid if:
   - Ad creatives were detected (`hasRenderedCreative()` returned true)
   - OR verification retries were exhausted (4 retries × 1500ms = 6 seconds)
3. **Detection Issues**: If `hasRenderedCreative()` failed to detect ads, overlay could persist indefinitely
4. **Timeout Cleanup**: No cleanup of overlay timeout when manually hiding
5. **Visibility**: Overlay was too prominent (dark color, high opacity, fast animation)

### Why It Persisted

```bash
Page loads → showOverlay() called (line 71) →
AdZep activation starts →
Verification begins checking for rendered ads →
If hasRenderedCreative() doesn't detect ads properly →
Retries continue (up to 4x with 1500ms delays) →
If still not detected → overlay should hide but sometimes doesn't →
Result: Overlay stuck on screen
```

## Solution Implemented

### 1. Added Maximum Overlay Timeout

**File**: `/components/analytics/adzep-spa-bridge.tsx`

Added a 3-second absolute timeout that hides the overlay regardless of ad rendering status:

```typescript
// When showing overlay
overlayTimeout.current = window.setTimeout(() => {
  hideOverlay();
  if (process.env.NODE_ENV === "development") {
    console.log("[AdZep SPA Bridge] Overlay hidden by timeout (3s)");
  }
}, 3000);
```

**Rationale**:

- 3 seconds is enough time for ads to initialize
- Prevents overlay from persisting indefinitely
- Doesn't interfere with ad rendering (ads continue loading)
- User sees content quickly even if ad detection is slow

### 2. Improved Timeout Cleanup

**File**: `/components/analytics/adzep-spa-bridge.tsx`

Added proper cleanup of overlay timeout when hiding manually:

```typescript
// Clear the overlay timeout since we're hiding manually
if (overlayTimeout.current) {
  window.clearTimeout(overlayTimeout.current);
  overlayTimeout.current = null;
}
hideOverlay();
```

**Benefits**:

- Prevents multiple timeouts from running
- Cleaner state management
- Avoids race conditions between manual hide and timeout hide

### 3. Enhanced Overlay Subtlety

**File**: `/lib/ads/overlay.ts`

Made the overlay less intrusive:

```typescript
// Visual changes
dot.style.width = "8px";        // Smaller (was 10px)
dot.style.height = "8px";
dot.style.background = "#64748b"; // Lighter color (was #1e293b)
dot.style.opacity = "0.4";        // More subtle (was 0.6)
dot.style.animation = "adzep-blink 1.5s infinite"; // Slower (was 1s)

// Animation changes
@keyframes adzep-blink{
  0%,100%{opacity:.15}  // More subtle (was .2)
  50%{opacity:.5}       // Less prominent (was 1)
}
```

### 4. Added Smooth Fade Transitions

**File**: `/lib/ads/overlay.ts`

Implemented smooth fade-in and fade-out:

```typescript
// Setup
el.style.opacity = "0";
el.style.transition = "opacity 0.2s ease-in-out";

// Show with fade-in
showOverlay() {
  el.style.display = "flex";
  requestAnimationFrame(() => {
    el.style.opacity = "1";
  });
}

// Hide with fade-out
hideOverlay() {
  overlayEl.style.opacity = "0";
  setTimeout(() => {
    overlayEl.style.display = "none";
  }, 200);
}
```

### 5. Enhanced Debug Logging

Added development mode logging to track overlay behavior:

```typescript
console.log("[AdZep SPA Bridge] Overlay hidden by timeout (3s)");
console.log("[AdZep SPA Bridge] Overlay hidden - creatives detected");
console.log("[AdZep SPA Bridge] Overlay hidden - max retries reached");
```

## Technical Details

### Overlay Lifecycle (Before Fix)

```bash
Show → Wait for ad detection →
If detected: hide immediately ✓
If not detected after 4 retries (6s): hide ✓
If detection fails: STUCK ✗
```

### Overlay Lifecycle (After Fix)

```bash
Show → Start 3s timeout → Wait for ad detection →
Whichever comes first:
  - Ad detected → Clear timeout, hide immediately ✓
  - 4 retries done → Clear timeout, hide ✓
  - 3s timeout → Hide regardless ✓
Result: Always hides within 3 seconds maximum
```

### Timeout Priorities

1. **Ad detected**: Hides immediately when `hasRenderedCreative()` returns true
2. **Retries exhausted**: Hides after 4 verification attempts
3. **3-second timeout**: Guaranteed hide after 3 seconds regardless

The earliest of these three events will trigger the hide.

## Configuration Changes

### New Timeout Reference

Added to `AdZepSPABridge` component state:

```typescript
const overlayTimeout = useRef<number | null>(null);
```

### Updated Cleanup Function

```typescript
const clearPending = () => {
  if (pendingRetryTimeout.current) {
    window.clearTimeout(pendingRetryTimeout.current);
    pendingRetryTimeout.current = null;
  }
  // NEW: Also clear overlay timeout
  if (overlayTimeout.current) {
    window.clearTimeout(overlayTimeout.current);
    overlayTimeout.current = null;
  }
};
```

## Testing Checklist

### Product Pages (Financial Solutions)

- [x] Navigate to `/financial-solutions/santander-uk-credit-card`
- [x] Verify overlay appears briefly (< 3 seconds)
- [x] Verify overlay fades in smoothly
- [x] Verify overlay disappears within 3 seconds
- [x] Verify overlay fades out smoothly
- [x] Verify page is fully usable while/after overlay shows
- [x] Check console for hide reason (timeout/creatives/retries)

### Blog Articles

- [x] Navigate to blog post
- [x] Verify overlay behavior same as product pages
- [x] Verify doesn't interfere with reading

### Quiz Pages (Should Not Show Overlay)

- [x] Navigate to `/quiz`
- [x] Verify NO overlay appears (excluded path)
- [x] Verify quiz form works without interference

### Navigation Between Pages

- [x] Navigate from one financial-solutions page to another
- [x] Verify overlay shows and hides properly on each navigation
- [x] Verify no overlays stack or persist

### Performance

- [x] Check overlay doesn't cause layout shifts
- [x] Verify smooth transitions don't impact performance
- [x] Ensure timeouts are properly cleaned up

## Files Modified

1. **`/components/analytics/adzep-spa-bridge.tsx`**
   - Added `overlayTimeout` ref for maximum timeout tracking
   - Implemented 3-second maximum overlay timeout
   - Enhanced timeout cleanup in verification logic
   - Added development logging for overlay hide events

2. **`/lib/ads/overlay.ts`**
   - Made overlay more subtle (smaller, lighter, slower animation)
   - Added smooth fade-in/fade-out transitions
   - Improved visual design to be less intrusive

## Before vs After

### Before

```bash
Overlay shows → Waits indefinitely if detection fails →
User sees persistent loading indicator →
Negative UX impact
```

### After

```bash
Overlay shows → Fades in smoothly →
Hides within 3 seconds maximum →
Fades out smoothly →
Clean, polished UX
```

## Expected Console Output (Development)

**Normal case (ads detected quickly)**:

```bash
[AdZep SPA Bridge] Attempting activation {...}
[AdZep] Calling window.AdZepActivateAds()
[AdZep] Activation successful
[AdZep SPA Bridge] Overlay hidden - creatives detected
```

**Timeout case (ads slow or not detected)**:

```bash
[AdZep SPA Bridge] Attempting activation {...}
[AdZep] Calling window.AdZepActivateAds()
[AdZep SPA Bridge] Overlay hidden by timeout (3s)
```

**Retry exhaustion case**:

```bash
[AdZep SPA Bridge] Attempting activation {...}
[AdZep SPA Bridge] Overlay hidden - max retries reached
```

## Performance Impact

- **Overlay display time**: Max 3 seconds (down from potentially unlimited)
- **Animation overhead**: Minimal (CSS transitions)
- **Timeout management**: Negligible (single setTimeout per page load)
- **User perception**: Significantly improved (no stuck loading indicators)

## Benefits

1. **Guaranteed Cleanup**: Overlay always hides within 3 seconds
2. **Better UX**: Smoother, less intrusive overlay
3. **No Persistence Issues**: Can't get stuck on screen
4. **Proper Cleanup**: All timeouts properly cleared
5. **Better Debugging**: Console logs show why overlay hid
6. **Maintains Functionality**: Ads still load and render normally

## Related Fixes

- Previous fix: Quiz page overlay blocking (excluded `/quiz` paths)
- Previous fix: AdZep rendering improvements (container selectors, timeouts)
- This fix complements those by ensuring overlay doesn't persist

## Rollback Instructions

If issues arise:

```bash
git checkout dev -- components/analytics/adzep-spa-bridge.tsx
git checkout dev -- lib/ads/overlay.ts
```

## Notes

- 3-second timeout is configurable if needed
- Overlay still serves its purpose (preventing layout shifts)
- Ads continue to load even after overlay hides
- All changes are backward compatible
- No impact on ad rendering or activation
- Logging only in development mode
