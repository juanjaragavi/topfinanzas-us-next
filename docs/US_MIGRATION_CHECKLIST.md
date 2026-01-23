# US Project Migration Checklist

## Comparative Audit: `topfinanzas-mx-next` vs `topfinanzas-us-next`

**Reference Project**: `/Users/macbookpro/GitHub/topfinanzas-mx-next`  
**Target Project**: `/Users/macbookpro/GitHub/topfinanzas-us-next`  
**Date**: January 23, 2026

---

## Executive Summary

The MX project serves as the production-ready reference implementation. This audit identifies **critical gaps** in the US project that require immediate attention to achieve architectural parity.

### Overall Status

| Category                     | MX Status              | US Status                          | Priority    |
| ---------------------------- | ---------------------- | ---------------------------------- | ----------- |
| Core Layout                  | ✅ Production-ready    | ⚠️ Has merge conflicts             | 🔴 Critical |
| TopAds Configuration         | ✅ MX-localized        | ⚠️ Has merge conflicts (UK/US mix) | 🔴 Critical |
| Centralized Posts Data       | ✅ `lib/data/posts.ts` | ❌ Missing                         | 🔴 Critical |
| Category Page Protocol       | ✅ Dynamic filtering   | ❌ Hardcoded                       | 🟠 High     |
| SEO hreflang                 | ✅ Defined             | ✅ Present (needs verification)    | 🟡 Medium   |
| Logger System                | ✅ Migrated to Pino    | ✅ Migrated                        | ✅ Done     |
| Financial Solutions Standard | ✅ Documented          | ⚠️ Has UK references               | 🟠 High     |
| UI Components                | ✅ Complete            | ⚠️ Missing 2 components            | 🟡 Medium   |

---

## 🔴 CRITICAL ISSUES (Priority 1)

### 1. Merge Conflicts Throughout Codebase

**Impact**: Build failure, deployment blocked  
**Files Affected**: 36+ files with `<<<<<<<` markers

**Specific Files with Conflicts**:

- `/components/analytics/topads.tsx` - Contains UK/US domain conflict
- `/app/financial-solutions/118-118-money-credit-card/*.tsx`
- `/app/financial-solutions/american-express-preferred-rewards-gold-credit-card/*.tsx`
- `/app/invit-credit-card-rec-uk/page.tsx`
- `/app/personal-finance/page.tsx`

**Action Required**:

```bash
# Find and resolve all merge conflicts
grep -r "<<<<<<< " --include="*.tsx" --include="*.ts" . | head -50
```

### 2. TopAds Domain Configuration

**MX Configuration** (Correct Pattern):

```javascript
topAds.config = {
  domain: "TOPFIN_MX",
  networkCode: "23062212598",
  // ...
  formats: {
    offerwall: {
      logoUrl: "https://media.topfinanzas.com/images/logo200px.png",
      websiteName: "TopFinanzas MX",
    },
  },
};
```

**US Current State** (Has Conflict):

```javascript
<<<<<<< Updated upstream
  domain: 'TOPFIN_UK',
=======
  domain: 'TOPFIN_US',
>>>>>>> Stashed changes
```

**Required US Configuration**:

```javascript
topAds.config = {
  domain: "TOPFIN_US",
  networkCode: "23062212598", // Verify with TopAds team
  lazyLoad: "soft",
  pageSetting: {
    exclude: [
      "/",
      "/terms",
      "/privacy-policy",
      "/cookie-policy",
      "/about-us",
      "/contact-us",
      "/quiz",
    ],
  },
  formats: {
    interstitial: {
      status: "active",
      exclude: ["/credit-card-recommender-p3"],
    },
    offerwall: {
      status: "active",
      logoUrl: "https://media.topfinanzas.com/images/logo-white.webp",
      websiteName: "TopFinanzas US",
      cooldown: "12",
      exclude: ["/invit-credit-card-rec-us", "/invit-credit-card-rec-us-2"],
    },
  },
};
```

### 3. Missing Centralized Posts Data Structure

**MX Implementation**: `lib/data/posts.ts`

- Defines `PostItem` interface with `category`, `subCategory` fields
- Exports `ALL_POSTS` array for dynamic filtering
- Enables automatic category page updates

**US Gap**:

- Only has `lib/data/authors.json`
- No centralized post management
- Category pages likely hardcoded

**Action Required**:
Create `/lib/data/posts.ts`:

```typescript
export interface PostItem {
  title: string;
  slug: string;
  description: string;
  image: string;
  category: "Personal Finance" | "Financial Solutions" | "guide";
  categoryPath: string;
  date?: string;
  type?: string;
  subCategory?: "creditCards" | "loans";
}

export const ALL_POSTS: PostItem[] = [
  // Migrate all existing product entries here
];
```

---

## 🟠 HIGH PRIORITY ISSUES (Priority 2)

### 4. Category Page Update Protocol Missing

**MX Has**: `/docs/CATEGORY_PAGE_UPDATE_PROTOCOL.md`

- Documents dynamic filtering from `ALL_POSTS`
- Prohibits hardcoded product lists
- Ensures automatic synchronization

**US Gap**: No equivalent protocol or implementation

**Required Files**:

1. Create `docs/CATEGORY_PAGE_UPDATE_PROTOCOL.md`
2. Refactor `app/credit-cards/page.tsx` to use dynamic filtering
3. Refactor `app/personal-loans/page.tsx` to use dynamic filtering

**Pattern to Implement**:

```tsx
// app/credit-cards/page.tsx
import { ALL_POSTS } from "@/lib/data/posts";

const creditCardsContent = ALL_POSTS.filter(
  (post) =>
    post.category === "Financial Solutions" &&
    post.subCategory === "creditCards",
).map((post) => ({
  // ... map fields
}));
```

### 5. Financial Solutions Layout Standard - UK References

**Location**: `.github/instructions/FINANCIAL_SOLUTIONS_LAYOUT_STANDARD.instructions.md`

**Issues Found**:

- Still references "Top Finance UK" in metadata examples
- References "FCA compliance" (UK regulatory body)
- References `/financial-solutions/barclaycard-avios-plus/` (UK product)
- Ad unit IDs still reference `uk_topfinanzas_*`

**Required Updates**:

- Change "Top Finance UK" → "Top Finance US"
- Change "FCA compliance" → "Consumer Financial Protection Bureau (CFPB) compliance"
- Update template reference to US product
- Update ad unit IDs if different for US

### 6. Ad Unit ID Configuration

**MX Uses**: `uk_topfinanzas_*` (legacy naming from UK template)
**US Uses**: Same `uk_topfinanzas_*` IDs

**Decision Required**:

- Confirm if US should use different ad unit IDs
- If same IDs, document this in `lib/ads/config.ts`
- If different, update all product pages

**Files Requiring Update** (if IDs change):

- All files in `/app/financial-solutions/*/page.tsx`
- All files in `/app/personal-finance/*/page.tsx`
- `/lib/ads/config.ts` containerSelectors

### 7. Missing UI Components

**MX Has, US Missing**:

1. `components/ui/action-banner.tsx`
2. `components/ui/hero.tsx`

**Action Required**:

- Determine if these components are needed for US site
- If yes, port from MX project
- If no, document the decision

---

## 🟡 MEDIUM PRIORITY ISSUES (Priority 3)

### 8. Footer Navigation Localization Incomplete

**File**: `/lib/navigation/footerNavigation.ts`

**Issues**:

- `mainNavItems` still has Spanish "Contáctanos" and "Nosotros"
- `categoryItems` has Spanish labels
- `socialMedia.title` is in Spanish
- Some placeholder URLs (e.g., `/home-finance`, `/student-finance`, `/sme-finance`)

**Required Updates**:

```typescript
mainNavItems: [
  { text: "Home", href: "/" },
  { text: "Contact Us", href: "/contact-us" },
  { text: "About Us", href: "/about-us" },
],
categoryItems: [
  { text: "Personal Finance", href: "/personal-finance" },
  { text: "Financial Solutions", href: "/financial-solutions" },
  // ...
],
socialMedia: {
  title: "Follow us on social media",
  // ...
}
```

### 9. SEO hreflang Configuration

**US Layout Has** (Correct):

```typescript
alternates: {
  canonical: "https://us.topfinanzas.com",
  languages: {
    "en-US": "https://us.topfinanzas.com",
    "es-MX": "https://topfinanzas.com",
    "en-GB": "https://uk.topfinanzas.com",
  },
}
```

**Verification Needed**:

- Ensure all product pages inherit this configuration
- Verify dynamic pages generate correct alternates
- Check sitemap.xml includes hreflang annotations

### 10. Ad Path Configuration

**File**: `/lib/ads/config.ts`

**MX Configuration**:

```typescript
articlePathPrefixes: [
  "/blog",
  "/soluciones-financieras",
  "/finanzas-personales",
  "/tarjetas",
];
```

**US Current**:

```typescript
articlePathPrefixes: [
  "/blog",
  "/financial-solutions",
  "/personal-finance",
  "/credit-cards",
];
```

**Status**: ✅ Appears correct, verify all routes are included

### 11. Missing Documentation Files

**MX Has, US Missing**:

1. `docs/CATEGORY_PAGE_UPDATE_PROTOCOL.md`
2. `docs/FOOTER_QUIZ_LANDING_UPDATE.md`
3. `docs/FOOTER_STANDARDIZATION_SUMMARY.md`
4. `docs/FOOTER_TOP_LEVEL_AUDIT.md`
5. `docs/LINT_FIX_REPORT.md`
6. `docs/ORPHAN_AUDIT_REPORT.md`

**Action**: Create US equivalents as architecture stabilizes

---

## 🟢 COMPLETED / NO ACTION NEEDED

### Logger System ✅

- Both projects use Pino logger
- Migration documented in `docs/MIGRATION_COMPLETE.md`

### Base Layout Structure ✅

- `app/layout.tsx` has proper structure
- Analytics components in correct order
- Critical CSS inlining implemented

### Hooks Parity ✅

- Both have: `use-mobile.tsx`, `use-recommender-page-guard.ts`, `use-toast.ts`

### Next.js Configuration ✅

- Image optimization configured
- Remote patterns include all necessary domains
- MDX support enabled

---

## Migration Action Plan

### Phase 1: Critical Fixes (Week 1)

1. **Day 1-2**: Resolve all merge conflicts
   - Run `grep -r "<<<<<<< " --include="*.tsx" --include="*.ts" .`
   - Fix each file systematically
   - Verify build passes: `npm run build`

2. **Day 3-4**: Fix TopAds configuration
   - Update `/components/analytics/topads.tsx`
   - Remove UK references
   - Test ad delivery

3. **Day 5**: Create centralized posts data
   - Create `/lib/data/posts.ts`
   - Migrate all existing product data

### Phase 2: High Priority (Week 2)

4. **Day 1-2**: Implement category page protocol
   - Create `docs/CATEGORY_PAGE_UPDATE_PROTOCOL.md`
   - Refactor credit-cards and personal-loans pages

5. **Day 3-4**: Update Financial Solutions layout standard
   - Update `.github/instructions/FINANCIAL_SOLUTIONS_LAYOUT_STANDARD.instructions.md`
   - Change UK → US references

6. **Day 5**: Verify ad unit configuration
   - Confirm ad unit IDs with TopAds team
   - Update if necessary

### Phase 3: Medium Priority (Week 3)

7. **Day 1-2**: Footer navigation localization
   - Update all Spanish text to English
   - Fix placeholder URLs or document as intentional

8. **Day 3-4**: SEO verification
   - Audit hreflang implementation
   - Check sitemap generation

9. **Day 5**: Port missing UI components
   - Determine if `action-banner.tsx` and `hero.tsx` are needed
   - Port or document decision

**Phase 4: Documentation & Cleanup (Week 4)**

10. Create missing documentation files
11. Final testing and verification
12. Update this checklist with completion status

---

## Verification Commands

```bash
# Check for merge conflicts
grep -r "<<<<<<< " --include="*.tsx" --include="*.ts" . 2>/dev/null | wc -l

# Verify build
npm run build

# Check for UK references that should be US
grep -r "uk.topfinanzas" --include="*.tsx" --include="*.ts" . 2>/dev/null
grep -r "TOPFIN_UK" --include="*.tsx" --include="*.ts" . 2>/dev/null
grep -r "TopFinanzas UK" --include="*.tsx" --include="*.ts" . 2>/dev/null

# Find hardcoded product arrays in category pages
grep -A5 "const.*Content = \[" app/credit-cards/page.tsx
grep -A5 "const.*Content = \[" app/personal-loans/page.tsx
```

---

## Reference Files

| Purpose           | MX Location                                                                | US Location               |
| ----------------- | -------------------------------------------------------------------------- | ------------------------- |
| Project Rules     | `.github/instructions/project-rules.instructions.md`                       | Same                      |
| Layout Standard   | `.github/instructions/FINANCIAL_SOLUTIONS_LAYOUT_STANDARD.instructions.md` | Same (needs US updates)   |
| TopAds Config     | `components/analytics/topads.tsx`                                          | Same (has conflicts)      |
| Ad Config         | `lib/ads/config.ts`                                                        | Same                      |
| Posts Data        | `lib/data/posts.ts`                                                        | **MISSING**               |
| Footer Nav        | `lib/navigation/footerNavigation.ts`                                       | Same (needs localization) |
| Category Protocol | `docs/CATEGORY_PAGE_UPDATE_PROTOCOL.md`                                    | **MISSING**               |

---

**Document Prepared By**: GitHub Copilot  
**Last Updated**: January 23, 2026  
**Next Review**: After Phase 1 completion
