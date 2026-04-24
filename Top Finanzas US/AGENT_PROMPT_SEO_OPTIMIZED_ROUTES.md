# Agent Prompt: Create SEO-Optimized A/B Clone Routes

**Project:** `topfinanzas-us-next` — `/Users/macbookpro/GitHub/topfinanzas-us-next`  
**Stack:** Next.js 15 App Router · TypeScript strict · Tailwind CSS  
**Prepared:** April 2026

---

## Objective

Clone two existing conversion-funnel routes and produce SEO/LLM-optimized counterparts for A/B testing. The originals remain untouched. All work is additive — no modifications to existing files except where explicitly instructed below.

**Source routes:**

| Original route dir                | Final URL                                               |
| --------------------------------- | ------------------------------------------------------- |
| `app/invit-credit-card-rec-us/`   | `https://us.topfinanzas.com/invit-credit-card-rec-us`   |
| `app/invit-credit-card-rec-us-2/` | `https://us.topfinanzas.com/invit-credit-card-rec-us-2` |

**Target routes:**

| New route dir                                   | Final URL                                                             |
| ----------------------------------------------- | --------------------------------------------------------------------- |
| `app/invit-credit-card-rec-us-seo-optimized/`   | `https://us.topfinanzas.com/invit-credit-card-rec-us-seo-optimized`   |
| `app/invit-credit-card-rec-us-2-seo-optimized/` | `https://us.topfinanzas.com/invit-credit-card-rec-us-2-seo-optimized` |

---

## Pre-Work: Read Project Instructions

Before writing a single line of code, read the following files in order:

1. `CLAUDE.md` — project-wide rules, logging standards, coding patterns, TypeScript requirements
2. `.github/instructions/project-rules.instructions.md` — architecture and standards
3. `.github/instructions/FINANCIAL_SOLUTIONS_LAYOUT_STANDARD.instructions.md` — layout rules (even if not directly applicable here, understand the conversion-critical constraints)

Understand the project's import ordering convention, `cn()` utility usage, `@/` path aliases, and the prohibition on `console.log()` before proceeding.

---

## Phase 1 — Audit the Source Routes

### Step 1.1 — Read all files in both source routes

Read every file inside both source directories recursively:

```
app/invit-credit-card-rec-us/
app/invit-credit-card-rec-us-2/
```

For each directory, identify and document:

- The `page.tsx` file: its exported `metadata` object (if any), its component tree, and any `"use client"` directives
- Every component imported from outside the route directory (i.e., from `@/components/`, `@/lib/`, or shared locations)
- Every component defined locally within the route directory (these will be cloned and renamed)
- Any JSON-LD structured data already present (expect none based on the audit report)
- The canonical URL value in `alternates.canonical` (if any)
- The `robots` metadata directive (if any)
- Any images loaded with `next/image` — note whether the LCP image uses the `priority` prop

### Step 1.2 — Identify locally-defined components

A locally-defined component is any `.tsx` or `.ts` file that lives inside `app/invit-credit-card-rec-us/` or `app/invit-credit-card-rec-us-2/` (i.e., co-located with the route, not imported from `@/components/`). These are the only files that will be cloned and renamed. Shared components in `@/components/` are NOT cloned.

---

## Phase 2 — Clone the Route Directories

### Step 2.1 — Clone route 1

Recursively copy the entire directory:

```
FROM: app/invit-credit-card-rec-us/
TO:   app/invit-credit-card-rec-us-seo-optimized/
```

Copy every file. Do not modify the originals.

### Step 2.2 — Clone route 2

```
FROM: app/invit-credit-card-rec-us-2/
TO:   app/invit-credit-card-rec-us-2-seo-optimized/
```

Copy every file. Do not modify the originals.

---

## Phase 3 — Rename Locally-Defined Components

This phase applies inside the **new cloned directories only**.

### Naming convention

For every locally-defined component file found in Phase 1.2, apply this transformation inside the cloned directories:

| Original filename    | New filename                       |
| -------------------- | ---------------------------------- |
| `some-component.tsx` | `some-component-seo-optimized.tsx` |
| `SomeComponent.tsx`  | `SomeComponentSeoOptimized.tsx`    |

For every exported component name and its display name:

| Original export                               | New export                                                            |
| --------------------------------------------- | --------------------------------------------------------------------- |
| `export function SomeComponent`               | `export function SomeComponentSeoOptimized`                           |
| `export default function SomeComponent`       | `export default function SomeComponentSeoOptimized`                   |
| `SomeComponent.displayName = "SomeComponent"` | `SomeComponentSeoOptimized.displayName = "SomeComponentSeoOptimized"` |

Update all import references inside the cloned route directory to point to the renamed files. Do not rename or re-export shared components imported from `@/components/` — those references remain unchanged.

---

## Phase 4 — Apply SEO and LLM Indexing Optimizations

Apply all of the following to each new route's `page.tsx`. This is the core of the task. All changes are metadata and structured data only — **zero visual or layout changes**.

### 4.1 — Metadata: title, description, canonical, openGraph, twitter, robots

Replace or augment the existing `metadata` export in each new route's `page.tsx` with a complete metadata object following the Next.js 15 `Metadata` type. Use this structure as the exact template:

```typescript
import { Metadata } from "next";

const BASE_URL = "https://us.topfinanzas.com";
const PAGE_SLUG = "invit-credit-card-rec-us-seo-optimized"; // adjust per route

export const metadata: Metadata = {
  title: "Find Your Best Credit Card Match", // GEO-optimized: answer-first, no brand suffix needed since root layout title.template handles it
  description:
    "Compare top US credit cards matched to your financial profile. See rewards, APR, fees, and approval requirements side by side — no application required.",
  alternates: {
    canonical: `${BASE_URL}/${PAGE_SLUG}`,
  },
  openGraph: {
    title: "Find Your Best Credit Card Match | TopFinanzas US",
    description:
      "Compare top US credit cards matched to your financial profile. See rewards, APR, fees, and approval requirements side by side — no application required.",
    url: `${BASE_URL}/${PAGE_SLUG}`,
    type: "website",
    siteName: "TopFinanzas US",
    images: [
      {
        url: "https://media.topfinanzas.com/images/topfinanzas-credit-card-comparison.webp",
        width: 1200,
        height: 630,
        alt: "TopFinanzas US — Credit Card Comparison Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Find Your Best Credit Card Match | TopFinanzas US",
    description:
      "Compare top US credit cards matched to your financial profile. See rewards, APR, fees, and approval requirements side by side.",
    images: [
      "https://media.topfinanzas.com/images/topfinanzas-credit-card-comparison.webp",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};
```

**Rules:**

- Adapt the `title`, `description`, `PAGE_SLUG`, and image `alt` text to accurately reflect each specific route's actual content and purpose. Read the original page content carefully before writing metadata — descriptions must reflect what the page actually contains.
- Both routes are recommender/comparison pages. Tailor descriptions so they are factually accurate to each route variant.
- Use the GEO principle: open the `description` with the direct value proposition in the first 20 words.
- All canonical URLs must be absolute (`https://us.topfinanzas.com/...`), not relative.
- Set `robots.index: true` on the SEO-optimized clones. The original routes remain disallowed per `robots.ts` convention; the new `-seo-optimized` routes are the indexable variants.
- Do not add a `keywords` field — it has been deprecated by Google since 2009.

### 4.2 — JSON-LD: WebPage Schema

Every page that is not a financial product detail page should carry a `WebPage` schema at minimum. Add this directly inside the Server Component return value, immediately before the closing tag of the outermost JSX element:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Find Your Best Credit Card Match", // match metadata.title
      description:
        "Compare top US credit cards matched to your financial profile.", // match metadata.description opening
      url: "https://us.topfinanzas.com/invit-credit-card-rec-us-seo-optimized",
      isPartOf: {
        "@type": "WebSite",
        name: "TopFinanzas US",
        url: "https://us.topfinanzas.com",
      },
      publisher: {
        "@type": "Organization",
        name: "TopFinanzas US",
        url: "https://us.topfinanzas.com",
        logo: {
          "@type": "ImageObject",
          url: "https://media.topfinanzas.com/images/logo-english.webp",
        },
      },
      inLanguage: "en-US",
      dateModified: new Date().toISOString().split("T")[0],
    }).replace(/</g, "\\u003c"),
  }}
/>
```

**Security requirement:** Always call `.replace(/</g, "\\u003c")` on `JSON.stringify` output to prevent XSS in SSR contexts. This is non-negotiable.

### 4.3 — JSON-LD: BreadcrumbList Schema

Append a `BreadcrumbList` schema immediately after the `WebPage` schema. The breadcrumb must reflect the actual navigation path to this page:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://us.topfinanzas.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Credit Card Recommender", // adapt to actual page title
          item: "https://us.topfinanzas.com/invit-credit-card-rec-us-seo-optimized",
        },
      ],
    }).replace(/</g, "\\u003c"),
  }}
/>
```

### 4.4 — JSON-LD: FAQPage Schema

If either route contains question-and-answer style content (e.g., "Which card is right for me?", "How does the recommender work?", eligibility questions, or comparison criteria explanations), add an `FAQPage` schema. Read the page content carefully to extract real Q&A pairs from the existing copy. Do not fabricate questions that are not represented in the page content.

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does the TopFinanzas credit card recommender work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The TopFinanzas recommender matches your financial profile — spending habits, credit score range, and goals — to the most suitable credit cards available in the US market. No application is required to see your matches.",
          },
        },
        // Add additional Q&A pairs extracted from actual page content
      ],
    }).replace(/</g, "\\u003c"),
  }}
/>
```

If no Q&A content exists on the page, omit the FAQPage schema entirely.

### 4.5 — LCP Image Priority

Locate any `<Image>` component rendered in the above-the-fold area of either page (typically the first visible image, hero banner, or card illustration). If it does not already have the `priority` prop, add it:

```tsx
// Before
<Image src="..." alt="..." width={...} height={...} />

// After
<Image src="..." alt="..." width={...} height={...} priority />
```

Apply only to images that are definitively above the fold on initial page load. Do not add `priority` to images below the fold.

---

## Phase 5 — Verify Component References in New Route page.tsx Files

After renaming locally-defined components in Phase 3, open the new `page.tsx` for each cloned route and verify:

1. All imports of locally-defined components point to the renamed `-seo-optimized` filenames.
2. All JSX usage references the renamed component function names (e.g., `<SomeComponentSeoOptimized />` not `<SomeComponent />`).
3. All imports from `@/components/`, `@/lib/`, or other shared paths remain unchanged — these are shared components and must not be duplicated.
4. The `page.tsx` is still a valid Server Component (no unintended `"use client"` directive at the page level).

---

## Phase 6 — TypeScript and Lint Compliance

### Step 6.1 — Run the linter

```bash
npm run lint
```

Fix all ESLint errors introduced by your changes. Do not suppress errors with `// eslint-disable` comments unless the rule being suppressed is already suppressed in the original source file for the same reason.

### Step 6.2 — Verify TypeScript

```bash
npx tsc --noEmit
```

All new files must pass TypeScript strict mode. No `any` types without explicit justification. If type errors exist, resolve them before proceeding.

### Step 6.3 — Run the dev server spot check

```bash
npm run dev
```

Verify:

- `http://localhost:3040/invit-credit-card-rec-us-seo-optimized` renders without runtime errors
- `http://localhost:3040/invit-credit-card-rec-us-2-seo-optimized` renders without runtime errors
- The original routes at `http://localhost:3040/invit-credit-card-rec-us` and `/invit-credit-card-rec-us-2` still render identically to before

---

## Phase 7 — robots.ts Update

The existing (or newly created) `app/robots.ts` programmatic handler must list the **original** routes in its `disallow` array and **allow** the new SEO-optimized routes. Locate `app/robots.ts`. If it does not exist yet, create it. Apply this pattern:

```typescript
// app/robots.ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/choose-the-perfect-card-for-you-1",
          "/campaign-quiz-credit-card-recomender",
          "/campaign-quiz-credit-card-recomender-short",
          "/credit-card-recommender-p1",
          "/invit-credit-card-rec-us", // original remains disallowed
          "/invit-credit-card-rec-us-2", // original remains disallowed
          "/weve-discovered-a-few-cards-for-you",
          "/jobs/",
          "/download-financial-guide",
        ],
        // New SEO-optimized routes are NOT in this disallow list —
        // they inherit the top-level "allow: /" rule
      },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "YouBot", allow: "/" },
      { userAgent: "cohere-ai", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
    ],
    sitemap: "https://us.topfinanzas.com/sitemap.xml",
  };
}
```

If `app/robots.ts` already exists with a different structure, preserve its existing disallow entries and add the missing AI crawler rules and sitemap reference. Do not remove any existing disallow entry.

If a static `app/robots.txt` exists alongside `app/robots.ts`, delete the static file — Next.js cannot serve both simultaneously and the dynamic handler takes precedence.

---

## Phase 8 — Commit

Write a commit message to `/lib/documents/commit-message.txt` using the conventional commit format:

```
feat(seo): add SEO/LLM-optimized A/B clones of invit-credit-card-rec-us routes

- Clone app/invit-credit-card-rec-us → app/invit-credit-card-rec-us-seo-optimized
- Clone app/invit-credit-card-rec-us-2 → app/invit-credit-card-rec-us-2-seo-optimized
- Add complete metadata (title, description, canonical, openGraph, twitter, robots)
- Add WebPage, BreadcrumbList, and FAQPage JSON-LD structured data
- Rename locally-defined components with -seo-optimized / SeoOptimized suffix
- Update robots.ts to allow new SEO routes, keep originals disallowed
- Set priority prop on LCP images in new routes
- Original routes unchanged; A/B test via ad campaign targeting
```

Then run the git workflow script:

```bash
bash scripts/git-workflow.sh "feat(seo): add SEO/LLM-optimized A/B clones of invit-credit-card-rec-us routes"
```

Do not run raw `git add`, `git commit`, or `git push` directly. Only `scripts/git-workflow.sh`.

---

## Constraints and Guardrails

- **No layout or visual changes.** Every pixel of the rendered page must be identical to the original route. SEO optimizations are purely in metadata, JSON-LD scripts, and `priority` props.
- **No console.log().** Use `import { logger } from "@/lib/logger"` if any runtime logging is required.
- **No modifications to original routes.** The A/B test depends on the originals remaining unchanged.
- **No new npm packages.** All implementations use Next.js built-ins (`Metadata`, `MetadataRoute`, `<script>` JSX).
- **No duplicate shared component copies.** Only locally-defined components within the source route directories get cloned and renamed.
- **XSS safety.** All `JSON.stringify()` output rendered in `dangerouslySetInnerHTML` must call `.replace(/</g, "\\u003c")`.
- **TypeScript strict mode.** No `any`, no type assertions without justification, no `@ts-ignore`.
- **Absolute canonical URLs.** All `alternates.canonical` and JSON-LD `url` values must start with `https://us.topfinanzas.com`.

---

## Expected Output Summary

| File                                                                                         | Action                                                           |
| -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| `app/invit-credit-card-rec-us-seo-optimized/page.tsx`                                        | Created — full metadata + JSON-LD                                |
| `app/invit-credit-card-rec-us-seo-optimized/[locally-defined-component]-seo-optimized.tsx`   | Created per locally-defined component found in source            |
| `app/invit-credit-card-rec-us-2-seo-optimized/page.tsx`                                      | Created — full metadata + JSON-LD                                |
| `app/invit-credit-card-rec-us-2-seo-optimized/[locally-defined-component]-seo-optimized.tsx` | Created per locally-defined component found in source            |
| `app/robots.ts`                                                                              | Created or updated — AI crawler allowlisting, SEO routes allowed |
| `app/invit-credit-card-rec-us/`                                                              | Unchanged                                                        |
| `app/invit-credit-card-rec-us-2/`                                                            | Unchanged                                                        |
| All `@/components/` shared components                                                        | Unchanged                                                        |
