# Handoff Prompt: Financial Solutions Layout Fix

## Context

You're working on the TopFinanzas US Next.js project (`topfinanzas-us-next`). A critical UX issue has been identified in the Financial Solutions blog category where ad units appear immediately adjacent to promotional images/banners, creating visual clutter and poor user experience.

## Current State

- **Repository**: Clean working tree on `dev` branch
- **Last Commit**: 78cc07c (AdZep → TopAds migration complete)
- **Issue**: 40+ Financial Solutions pages have incorrect ad placement
- **Report**: Complete analysis in `docs/FINANCIAL_SOLUTIONS_LAYOUT_FIX_REPORT.md`

## Your Task

Fix ad unit placement in Financial Solutions blog posts to ensure proper content buffering between ads and promotional images.

### Critical Requirements

1. **No ads next to images**: There must be 2-3 content sections (H2/H3 + paragraphs) between any ad unit and promotional images/banners
2. **Add missing ad units**: Benefits pages need `square04` ad unit (currently missing on multiple pages)
3. **Follow the standard**: Use `.github/instructions/FINANCIAL_SOLUTIONS_LAYOUT_STANDARD.instructions.md` as the authority

### Example Fix Needed

**Current (Broken)** - `/app/financial-solutions/citi-simplicity-card-requirements/page.tsx` lines 125-145:

```tsx
<div id="square04" data-topads></div>;

{
  /* Promotional image TOO CLOSE! */
}
<Link href="/personal-finance/getting-out-of-debt...">
  <Image src="banner-1-Top-Blog..." />
</Link>;
```

**Required (Fixed)**:

```tsx
<div id="square04" data-topads></div>

{/* Add content buffer sections */}
<h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
  Why these requirements are important
</h2>
<p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
  Understanding the requirements helps you prepare better...
</p>

{/* More content sections... */}

{/* NOW promotional image is properly separated */}
<Link href="/personal-finance/getting-out-of-debt...">
  <Image src="banner-1-Top-Blog..." />
</Link>
```

### Step-by-Step Instructions

1. **Read the full report**: Open `docs/FINANCIAL_SOLUTIONS_LAYOUT_FIX_REPORT.md`
2. **Create feature branch**: `git checkout -b fix/financial-solutions-ad-placement`
3. **Audit files**: Run the audit commands in the report to identify all affected pages
4. **Fix in batches**: Edit 5-10 files at a time, commit after each batch
5. **Test locally**: `npm run dev` and check mobile viewport
6. **Build check**: `npm run build` to verify no TypeScript errors
7. **Commit changes**: Use conventional commit format
8. **Push and deploy**: Follow standard git workflow

### Files to Review

- ✅ **Report**: `docs/FINANCIAL_SOLUTIONS_LAYOUT_FIX_REPORT.md` (your primary reference)
- ✅ **Layout Standard**: `.github/instructions/FINANCIAL_SOLUTIONS_LAYOUT_STANDARD.instructions.md`
- ✅ **Project Rules**: `.github/instructions/project-rules.instructions.md`

### Success Criteria

- [ ] No ad units appear immediately next to images/banners/buttons
- [ ] All Benefits pages have both `square02` AND `square04` ad units
- [ ] All Requirements pages have both `square03` AND `square04` ad units
- [ ] Minimum 2-3 content sections between ads and promotional content
- [ ] Zero TypeScript compilation errors
- [ ] Visual testing passes on mobile and desktop viewports

### Estimated Time

4-6 hours (audit: 1h, implementation: 2-3h, testing: 1-2h)

### Priority

🔴 **CRITICAL** - Affects 40+ production pages and user experience

---

## Quick Start Command

```bash
# 1. Read the full report
cat docs/FINANCIAL_SOLUTIONS_LAYOUT_FIX_REPORT.md

# 2. Create feature branch
git checkout -b fix/financial-solutions-ad-placement

# 3. Find all affected Requirements pages
find app/financial-solutions -name "*requirements*" -name "page.tsx" -type f

# 4. Find all Benefits pages (check for missing square04)
find app/financial-solutions -name "*benefits*" -name "page.tsx" -type f

# 5. Start with the template/reference fix
code app/financial-solutions/citi-simplicity-card-requirements/page.tsx

# 6. Test your changes
npm run dev
# Visit: http://localhost:3040/financial-solutions/citi-simplicity-card-requirements

# 7. After batch completion
npm run build && git add . && git commit -m "fix: Add content buffer between ads and banners in [category]"
```

---

**Repository**: juanjaragavi/topfinanzas-us-next  
**Branch**: dev  
**Framework**: Next.js 15+ (App Router)  
**Ad System**: TopAds (proprietary)

**Questions?** Reference the comprehensive report in `docs/FINANCIAL_SOLUTIONS_LAYOUT_FIX_REPORT.md`

---

_Generated: February 12, 2026_  
_Status: Ready for implementation_
