# Instruction Normalization & Cross-Project Replication Summary

**Date:** January 2025  
**Objective:** Normalize emphasis formatting in system instructions and replicate external CTA guidance to kardtrust project

---

## 1. Overview

Following the comprehensive bug fix that updated 20+ credit card requirements pages with external URLs, the next phase involved:

1. **Normalizing** the instruction formatting by removing excessive emphasis (CRITICAL, bold text)
2. **Replicating** the normalized instruction set to the kardtrust project (US market equivalent)

This ensures both UK and US projects have consistent, clear guidance for generating credit card product pages with proper external CTA implementation.

---

## 2. Changes to UK TopFinanzas Instructions

**File:** `/lib/CREDIT_CARD_PRODUCT_GENERATION.instructions.md`

### Line 127 - Page Structure

**Before:**

```
   - **Final CTA button (MUST link to official external bank/product URL, not internal benefits page)**
```

**After:**

```
   - Final CTA button (must link to official external bank/product URL, not internal benefits page)
```

### Lines 143-145 - Rules Section

**Before:**

```
- **CRITICAL: The final CTA button on the Requirements page MUST link to the official external bank/product URL...**
- **The CTA button MUST use text like "Apply Now"...**
- **The external CTA link MUST open in a new tab...**
```

**After:**

```
- The final CTA button on the Requirements page must link to the official external bank/product URL (provided in CSV or user request), not to the internal benefits page
- The CTA button should use text like "Apply Now", "Visit Official Website", or "Check Your Eligibility" to indicate it's an external link
- The external CTA link should open in a new tab using a standard HTML anchor tag with `target="_blank"` and `rel="noopener noreferrer"` attributes wrapping the Button component
```

### Lines 635-680 - OutputFormatting Section

**Before:**

```
### CRITICAL: External CTA Button

**The final CTA button on the Requirements page MUST link to the official external bank/product URL.**

**Key Points:**
- Must use `<a>` tag with `target="_blank"` and `rel="noopener noreferrer"`
```

**After:**

```
### External CTA Button on Requirements Page

The final CTA button on the Requirements page must link to the official external bank/product URL.

Implementation Requirements:
- Must use `<a>` tag with `target="_blank"` and `rel="noopener noreferrer"`
```

---

## 3. Changes to Kardtrust Instructions

**File:** `/lib/CREDIT_CARD_PRODUCT_GENERATION.instructions.md` (kardtrust project)

### Line 128 - Page Structure

**Added:**

```
   - Final CTA button (must link to official external bank/product URL, not internal benefits page)
```

### Lines 143-146 - Rules Section

**Added three new rules:**

```
- The final CTA button on the Requirements page must link to the official external bank/product URL (provided in CSV or user request), not to the internal benefits page
- The CTA button should use text like "Apply Now", "Visit Official Website", or "Check Your Eligibility" to indicate it's an external link
- The external CTA link should open in a new tab using a standard HTML anchor tag with `target="_blank"` and `rel="noopener noreferrer"` attributes wrapping the Button component
```

**Note:** Line 146 retains "Use US-specific terminology and comply with CFPB/FTC regulations" (vs UK's FCA)

### Lines 672+ - OutputFormatting Section

**Added complete External CTA Button section:**

```
### External CTA Button on Requirements Page

The final CTA button on the Requirements page must link to the official external bank/product URL.

Correct Implementation Example:

[TypeScript code example with external anchor tag]

Incorrect Implementation (Do Not Use):

[TypeScript code example with internal Link component]
```

---

## 4. Key Differences Between Projects

| Aspect               | UK TopFinanzas                     | Kardtrust                            |
| -------------------- | ---------------------------------- | ------------------------------------ |
| **Market**           | United Kingdom                     | United States                        |
| **Regulatory Body**  | FCA (Financial Conduct Authority)  | CFPB/FTC                             |
| **Ad Unit IDs**      | uk_topfinanzas_3, uk_topfinanzas_4 | kardtrust_ad_1, kardtrust_ad_2       |
| **Terminology**      | UK-specific (e.g., "credit card")  | US-specific (e.g., "APR")            |
| **Compliance Notes** | Lines reference FCA regulations    | Lines reference CFPB/FTC regulations |

**Identical Elements:**

- External CTA implementation logic
- Anchor tag attributes (`target="_blank"`, `rel="noopener noreferrer"`)
- Button text guidance ("Apply Now", "Visit Official Website", etc.)
- Code structure and component usage

---

## 5. Verification Results

### ✅ TopFinanzas US (topfinanzas-us-next)

- Line 127: Normalized formatting ✓
- Lines 143-146: Three CTA rules added with normalized language ✓
- Lines 635-680: External CTA Button section normalized ✓
- No bold/CRITICAL emphasis remaining ✓

### ✅ Kardtrust

- Line 128: CTA requirement added to page structure ✓
- Lines 143-146: Three CTA rules added (matching UK version) ✓
- Lines 672+: Complete External CTA Button section with code examples ✓
- No duplicate lines in Rules section ✓
- US-specific compliance notes retained ✓

---

## 6. Impact Assessment

### Production Bug Fix

**Status:** ✅ Complete  
**Files Modified:** 20 credit card requirements pages  
**Pattern Applied:** Replaced internal `<Link>` components with external `<a>` tags

**Example Pages:**

- zopa-credit-card-requirements
- rbs-purchase-balance-transfer-card-requirements
- capital-one-uk-credit-card-requirements
- (17 additional pages)

### System Instructions Update

**Status:** ✅ Complete  
**Projects Updated:** topfinanzas-us-next, kardtrust  
**Pattern Applied:** Normalized emphasis, added explicit external CTA guidance

**Key Benefits:**

1. **Clarity:** Removed confusing bold/CRITICAL formatting that made instructions hard to read
2. **Consistency:** Both projects now have identical external CTA logic
3. **Maintainability:** Future LLM-generated pages will automatically use correct pattern
4. **Compliance:** US and UK regulatory requirements properly separated

---

## 7. Code Pattern Reference

### Correct External CTA Implementation

```typescript
// ✅ CORRECT - External link pattern
<div className="text-left my-8">
  <a
    href="https://www.bank-official-website.com/product-page"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button className="bg-[#BrandColor] hover:bg-[#HoverColor] text-white font-medium text-md py-2 px-8 rounded-full w-full">
      Apply Now at Official Website
    </Button>
  </a>
</div>
```

### Incorrect Internal Link Pattern

```typescript
// ❌ INCORRECT - Internal navigation (old pattern)
<div className="text-left my-8">
  <Link href="/soluciones-financieras/product-name">
    <Button className="bg-[#BrandColor] hover:bg-[#HoverColor] text-white font-medium text-md py-2 px-8 rounded-full w-full">
      View Card Benefits
    </Button>
  </Link>
</div>
```

---

## 8. Next Steps for Maintenance

### For Future Credit Card Product Pages

1. **Always use external URLs** from CSV data or user-provided sources
2. **Reference the instructions** at `/lib/CREDIT_CARD_PRODUCT_GENERATION.instructions.md`
3. **Follow the code pattern** in the OutputFormatting section
4. **Test CTA buttons** to ensure they open in new tabs and link to official bank websites

### For System Instruction Updates

1. **Update both projects** (topfinanzas-us-next and kardtrust) when making changes
2. **Maintain normalized formatting** (avoid excessive bold/CRITICAL emphasis)
3. **Preserve market-specific differences** (ad unit IDs, terminology, compliance notes)
4. **Test with LLM generation** to ensure instructions produce correct output

---

## 9. Files Reference

### TopFinanzas US Project

- **Instructions:** `/lib/CREDIT_CARD_PRODUCT_GENERATION.instructions.md`
- **Requirements Pages:** `/app/soluciones-financieras/*-requirements/page.tsx` (20 files)
- **CSV Data Source:** Contains bank names and official URLs

### Kardtrust Project

- **Instructions:** `/lib/CREDIT_CARD_PRODUCT_GENERATION.instructions.md`
- **Pattern:** Same structure as UK version with US-specific compliance notes

---

## 10. Completion Checklist

- [x] Normalize formatting in topfinanzas-us-next instructions
- [x] Add External CTA guidance to topfinanzas-us-next Rules section
- [x] Add External CTA guidance to topfinanzas-us-next OutputFormatting section
- [x] Replicate page structure update to kardtrust (line 128)
- [x] Replicate Rules section updates to kardtrust (lines 143-146)
- [x] Replicate OutputFormatting section to kardtrust (lines 672+)
- [x] Remove duplicate lines from kardtrust
- [x] Verify both instruction files have matching patterns
- [x] Verify no bold/CRITICAL emphasis remains
- [x] Verify US-specific compliance notes preserved in kardtrust
- [x] Create comprehensive summary documentation

**Status:** ✅ All tasks complete

---

## Conclusion

The instruction normalization and cross-project replication is now complete. Both topfinanzas-us-next and kardtrust projects have:

1. ✅ Clean, readable instruction formatting
2. ✅ Explicit external CTA linking guidance
3. ✅ Consistent implementation patterns
4. ✅ Market-specific compliance notes preserved

Future LLM-generated credit card product pages will automatically include properly implemented external CTA buttons linking to official bank websites, preventing the production bug that required the initial fix of 20+ pages.
