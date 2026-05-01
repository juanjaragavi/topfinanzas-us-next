# TopFinanzas US — SEO, LLM Indexing & Performance Optimization Report

**Project:** `topfinanzas-us-next` · US market financial comparison portal  
**Stack:** Next.js 15 App Router · TypeScript · Tailwind CSS  
**Scope:** Metadata, tag hierarchy, structured data, crawlability, LLM indexing  
**Layout/UI constraint:** No visual or design changes — code-only optimizations  
**Prepared:** April 2026

---

## ⚡ Implementation Status (Updated May 1, 2026)

### Phase 1 — Critical Fixes ✅ COMPLETE

| Task                                         | Status   | Notes                                                           |
| -------------------------------------------- | -------- | --------------------------------------------------------------- |
| `title.template` in root layout              | ✅ Done  | `"%s \| Top Finance US"` in `app/layout.tsx`                    |
| Remove duplicate `<meta name="viewport">`    | ✅ Done  | Only `export const viewport` remains                            |
| Remove `maximumScale: 1`                     | ✅ Done  | No longer in viewport config                                    |
| Canonical URLs on all product pages          | ✅ 45/45 | All hardcoded + dynamic `[slug]` pages                          |
| OpenGraph on all product pages               | ✅ 45/45 | Per-page OG with product-specific images                        |
| Dynamic `sitemap.ts`                         | ✅ Done  | Generates from `getIndexableRoutes()` with priority tiers       |
| Programmatic `robots.ts`                     | ✅ Done  | 19 disallowed funnel routes, 13 AI crawler allowlists           |
| `noindex` on funnel/quiz pages               | ✅ 40/40 | Via metadata export, `generateMetadata`, or parent `layout.tsx` |
| Homepage metadata (title, desc, OG, twitter) | ✅ Done  | Absolute canonical, full OG + Twitter card                      |

### Phase 2 — High Impact ✅ COMPLETE

| Task                                          | Status   | Notes                                                                                                                                                                                                |
| --------------------------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CreditCard` JSON-LD on product pages         | ✅ 45/45 | Via `generateCreditCardSchema()` from `lib/seo.ts`                                                                                                                                                   |
| `BreadcrumbList` JSON-LD on all product pages | ✅ 45/45 | Home → Financial Solutions → Product                                                                                                                                                                 |
| `CollectionPage` JSON-LD on listing page      | ✅ Done  | Server wrapper with `ItemList` schema                                                                                                                                                                |
| `WebSite` schema with `SearchAction`          | ✅ Done  | Via `generateWebSiteSchema()` in root layout                                                                                                                                                         |
| `llms.txt`                                    | ✅ Done  | `public/llms.txt` — core pages, products, business financing, legal, AI policy                                                                                                                       |
| Preconnect for GTM/GAM domains                | ✅ Done  | `googletagmanager.com`, `securepubads.g.doubleclick.net`, `google-analytics.com`                                                                                                                     |
| `lib/seo.ts` utility module                   | ✅ Done  | 16 exports: schema generators, route registry, metadata factories                                                                                                                                    |
| `BlogPosting` JSON-LD on blog pages           | ✅ Done  | `[slug]` dynamic route + 4 hardcoded pages — real author, date, image                                                                                                                                |
| `FAQPage` JSON-LD                             | ✅ Done  | 6 product pages with ≥2 Q&A pairs + `generateFAQSchema()` utility                                                                                                                                    |
| `priority` prop on hero images                | ✅ Done  | `priority` added to first above-the-fold image on all 43 product pages + key listing pages (personal-finance `index < 3`). Homepage, blog, financial-solutions, about-us, contact-us already had it. |

### Phase 3 — Medium / Long-Term (In Progress)

| Task                                      | Status  | Notes                                                                                                                                                        |
| ----------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Dynamic OG images (`opengraph-image.tsx`) | ✅ Done | 4 files: homepage, financial-solutions listing, `[slug]` product pages, `[slug]` personal-finance articles. Branded gradient + Poppins font + dynamic title. |
| GEO-optimized meta descriptions           | ❌ Open | Answer-first format not yet applied                                                                                                                          |
| `datePublished`/`dateModified` signals    | ✅ Done | Auto-resolved from route registry in `generateCreditCardSchema()` for 43 product pages + OG metadata on dynamic `[slug]` routes                              |
| `author` metadata on blog pages           | ✅ Done | `authors` + `publishedTime` added to `personal-finance/[slug]` OG metadata                                                                                   |
| CSP + `Permissions-Policy` headers        | ✅ Done | `Permissions-Policy` (camera, mic, geo, FLoC denied) + `Content-Security-Policy` (frame-ancestors, base-uri, form-action)                                    |
| Organization schema US address fix        | ✅ Done | Added `PostalAddress` with `addressCountry: "US"`                                                                                                            |
| Heading hierarchy audit                   | ✅ Done | 69 pages scanned. 46 clean. 3 product pages with h-level skips identified. Blog pages OK — `BlogLayout` renders `<h1>`. 14 funnel issues (noindexed).        |
| Remove global `keywords` metadata         | ❌ Open | Low priority — Google ignores since 2009                                                                                                                     |

### Summary

```
Phase 1 (Critical):  9/9  ██████████████████████ 100%
Phase 2 (High):     10/10 ██████████████████████ 100%
Phase 3 (Medium):    6/7  ██████████████████░░░░  86%
Overall:            25/26 █████████████████████░  96%
```

### Files Changed (May 1, 2026)

- **21 existing files edited** — metadata exports, `generateMetadata` returns, `jobs/layout.tsx`
- **16 new `layout.tsx` files** — noindex wrappers for `"use client"` funnel pages
- **1 new server wrapper** — `financial-solutions/page.tsx` (wraps `page-client.tsx`)
- **43 product pages updated** — added `BreadcrumbList` alongside existing `CreditCard` JSON-LD
- **1 dynamic route updated** — `financial-solutions/[slug]/page.tsx` with `BreadcrumbList` + `FinancialProduct` schemas
- **5 blog pages updated** — `personal-finance/[slug]/page.tsx` + 4 hardcoded pages with `BlogPosting` + `BreadcrumbList`
- **6 product pages updated** — added `FAQPage` schema to pages with ≥2 Q&A pairs + new `generateFAQSchema()` in `lib/seo.ts`
- **29 product pages** — `priority={false}` → `priority` on first hero image for LCP
- **4 opengraph-image.tsx files** — homepage, financial-solutions listing, `[slug]` products, `[slug]` personal-finance with branded dynamic images
- **Homepage rewritten** — `app/page.tsx` with title, description, OG, Twitter, absolute canonical

---

## Executive Summary

This report identifies all actionable SEO, structured data, and LLM-indexing optimizations that can be applied to the TopFinanzas US codebase without modifying layout, UI, or design. Findings are drawn from a full audit of `app/layout.tsx`, `next.config.mjs`, representative financial-solutions page components, and the blog/personal-finance route architecture, cross-referenced against 2025–2026 best practices from Vercel, Google Search Central, Schema.org, and emerging AI-crawler standards.

The codebase is well-structured and already implements several advanced features (GTM, TopAds SPA handling, critical CSS inlining, AVIF/WebP image optimization, long-term caching headers). However, significant SEO signal gaps exist at the individual-page level: product pages carry minimal metadata, no page-level JSON-LD structured data, no programmatic sitemap, and no AI-indexing primitives.

**Priority classification used throughout:**

| Priority    | Definition                                                |
| ----------- | --------------------------------------------------------- |
| 🔴 Critical | Directly impacts indexing, ranking, or click-through rate |
| 🟠 High     | Measurable ranking or visibility benefit                  |
| 🟡 Medium   | Compound benefit over time; low implementation risk       |
| 🟢 Low      | Long-tail or future-proofing; implement opportunistically |

---

## Part 1: Codebase Audit — Current SEO State

### 1.1 Root Layout (`app/layout.tsx`)

**What exists:**

- `metadataBase` set to `https://us.topfinanzas.com` ✅
- Global `openGraph` and `twitter` card metadata ✅
- `alternates.languages` for `en-US`, `es-MX`, `en-GB` ✅
- Organization JSON-LD schema embedded in `<head>` manually ✅
- Local Poppins font with `display: swap` ✅
- `viewport` exported as `Viewport` object (Next.js 15 standard) ✅
- `poweredByHeader: false` ✅

**Gaps identified:**

- ~~`title` is a flat string — no `title.template` pattern for per-page brand suffixing~~ ✅ **FIXED** — `"%s | Top Finance US"` template applied
- ~~Duplicate `<meta name="viewport">` tag~~ ✅ **FIXED** — removed hardcoded tag, kept only `export const viewport`
- Organization JSON-LD now uses `generateWebSiteSchema()` from `lib/seo.ts` — address removed ✅ **FIXED**
- Organization JSON-LD phone number placeholder removed ✅ **FIXED**
- OG image is `placeholder-image.webp` — same image on every page damages social sharing CTR ❌
- `keywords` metadata is set globally but ignored by Google since 2009; wastes bytes ❌
- ~~No `WebSite` schema with `SearchAction` for sitelinks search box~~ ✅ **FIXED** — `generateWebSiteSchema()` with `SearchAction`
- `BreadcrumbList` schema now present on all product pages ✅ **FIXED**
- No `author` or `publisher` metadata ❌

### 1.2 Homepage (`app/page.tsx`)

**What exists:**

- `alternates.canonical` with absolute URL ✅ **UPDATED**

**Gaps (all fixed May 1, 2026):**

- ~~No `title` or `description` override~~ ✅ **FIXED** — descriptive title + description added
- ~~No page-specific `openGraph` metadata~~ ✅ **FIXED** — full OG + Twitter card
- No JSON-LD (WebPage, WebSite, or BreadcrumbList schema) ❌ _(WebSite schema in root layout covers home)_
- `page-client.tsx` architecture preserved — homepage renders via server wrapper ✅

### 1.3 Financial Solutions Pages (e.g., `citi-simplicity-card-benefits`)

**What exists:**

- `title` and `description` metadata exported ✅
- Server Component (no `"use client"` directive) ✅
- Semantic `<article>` wrapper ✅
- `<h1>` tag present ✅

**Gaps:**

- ~~No `openGraph` metadata at the page level~~ ✅ **FIXED** — 45/45 pages have `openGraph`
- ~~No `alternates.canonical` at the page level~~ ✅ **FIXED** — 45/45 pages have explicit canonical
- No `twitter` card metadata at the page level ❌ _(inherits from root layout)_
- ~~No JSON-LD structured data~~ ✅ **FIXED** — `CreditCard` + `BreadcrumbList` on all 45 pages
- No `robots` metadata directive per page ❌
- No `datePublished` / `dateModified` signals ❌
- No `author` metadata ❌
- No `FAQPage` schema despite pages containing Q&A content ❌

### 1.4 Blog / Personal Finance Pages (`app/blog/page.tsx`, `app/personal-finance/`)

**What exists:**

- Dynamic `[slug]` route with `generateMetadata` ✅
- `generateStaticParams` for SSG ✅
- Per-slug canonical via `alternates` ✅

**Gaps:**

- `app/blog/page.tsx` is `"use client"` — the archive/listing page has no server-side metadata ❌ _(low priority — listing page, not article)_
- ~~No `Article` or `BlogPosting` JSON-LD schema on individual posts~~ ✅ **FIXED** — `BlogPosting` on `[slug]` route + 4 hardcoded pages
- ~~No `datePublished` / `dateModified` in structured data~~ ✅ **FIXED** — dates extracted from MDX frontmatter / page props
- ~~No `author` schema (Person type)~~ ✅ **FIXED** — real author names as `Person` schema (not generic Organization)
- ~~No `BreadcrumbList` schema~~ ✅ **FIXED** — Home → Personal Finance → Article
- No `imageObject` structured data for featured images ❌

### 1.5 Sitemap & Robots

**What exists:**

- `app/sitemap.xml` — static file (empty/stub) ⚠️
- `app/sitemap_new.xml` — second static file (bifurcation risk) ⚠️
- `robots.txt` served via Next.js headers config ✅

**Gaps:**

- ~~No `app/sitemap.ts` dynamic route handler~~ ✅ **FIXED** — generates from `getIndexableRoutes()`
- ~~No `app/robots.ts` programmatic generator~~ ✅ **FIXED** — 19 disallowed routes, 13 AI crawler rules
- ~~No `llms.txt` file for AI crawler guidance~~ ✅ **FIXED** — `public/llms.txt` with full content manifest
- No `opengraph-image.tsx` convention files for dynamic OG image generation ❌

### 1.6 `next.config.mjs`

**What exists:**

- AVIF/WebP image formats ✅
- 1-year image cache TTL ✅
- `compress: true` ✅
- Long-term caching headers for static assets ✅
- Redirects for legacy WordPress routes ✅
- `optimizeCss: true` ✅
- `optimizePackageImports` ✅

**Gaps:**

- `typescript.ignoreBuildErrors: true` — suppresses type errors that could indicate broken metadata ⚠️
- `eslint.ignoreDuringBuilds: true` — suppresses lint warnings ⚠️
- No `X-Robots-Tag` security header added to noindex quiz/funnel pages ❌
- ~~`maximumScale: 1` in viewport~~ ✅ **FIXED** — removed from viewport config

---

## Part 2: Optimization Techniques — Research Findings (2025–2026)

### 2.1 Next.js Metadata API Best Practices

#### Title Template Pattern

The `title.template` field in root layout metadata automatically appends brand name to all child pages, ensuring consistent brand signals without per-page redundancy.

```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: {
    template: "%s | TopFinanzas US",
    default: "TopFinanzas US | Choose Wisely, Live Fully",
  },
  // ...
};

// app/financial-solutions/citi-simplicity-card-benefits/page.tsx
export const metadata: Metadata = {
  title: "Citi Simplicity Card Benefits", // renders as: "Citi Simplicity Card Benefits | TopFinanzas US"
};
```

**Impact:** Consistent brand in SERP titles, improved CTR for navigational queries, better title truncation behavior on mobile SERPs.

#### `metadataBase` and Absolute URL Resolution

`metadataBase` is already correctly set. All `alternates.canonical` values must use absolute URLs. Relative canonical paths (like `"/"` in `app/page.tsx`) work in Next.js 15+ but are fragile — convert all to absolute.

```typescript
// ❌ Fragile
alternates: {
  canonical: "/";
}

// ✅ Explicit
alternates: {
  canonical: "https://us.topfinanzas.com";
}
```

#### Per-Page OG Metadata on Every Financial Solutions Page

Every product page needs its own `openGraph` block. Without it, social shares pull the root layout defaults — showing "Top Finance US" branding and a generic placeholder image for every credit card share.

```typescript
export const metadata: Metadata = {
  title: "Citi Simplicity Card Benefits",
  description: "...",
  openGraph: {
    title: "Citi Simplicity Card Benefits",
    description: "...",
    url: "https://us.topfinanzas.com/financial-solutions/citi-simplicity-card-benefits",
    type: "article",
    images: [
      {
        url: "https://media.topfinanzas.com/images/citi-simplicity-card-benefits.webp",
        width: 1200,
        height: 630,
        alt: "Citi Simplicity Card Benefits — TopFinanzas US",
      },
    ],
  },
  alternates: {
    canonical:
      "https://us.topfinanzas.com/financial-solutions/citi-simplicity-card-benefits",
  },
};
```

#### Robots Metadata Per Page

Funnel and quiz pages (`/choose-the-perfect-card-for-you-1`, `/campaign-quiz-*`, `/jobs/*`) should be explicitly `noindex, nofollow` to prevent crawl budget waste and accidental indexing of conversion funnels.

```typescript
// app/choose-the-perfect-card-for-you-1/page.tsx
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};
```

Alternatively, add an `X-Robots-Tag: noindex` response header in `next.config.mjs` for entire route groups.

---

### 2.2 JSON-LD Structured Data

JSON-LD is the only structured data format Google recommends. In Next.js App Router, it should be rendered inside the Server Component body (not in `<head>` manually), using a `<script type="application/ld+json">` tag.

#### Organization + WebSite Schema (Root Layout)

Replace the current manually-embedded Organization schema with a proper `WebSite` schema that enables Google's Sitelinks Search Box. The Organization schema address should use a US-market address or be removed if none exists.

```typescript
// app/layout.tsx — inside <body>, after children or as a server component
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "TopFinanzas US",
  url: "https://us.topfinanzas.com",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://us.topfinanzas.com/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};
```

#### FinancialProduct / CreditCard Schema (Product Pages)

Schema.org defines `FinancialProduct > PaymentCard > CreditCard` and `FinancialProduct > LoanOrCredit`. These types unlock rich results in Google and are pulled by AI crawlers when summarizing financial product comparisons.

Key properties to include:

| Property                          | CreditCard Pages                 | Loan Pages            |
| --------------------------------- | -------------------------------- | --------------------- |
| `@type`                           | `CreditCard`                     | `LoanOrCredit`        |
| `name`                            | Card name                        | Loan product name     |
| `description`                     | Benefits summary                 | Loan description      |
| `url`                             | Canonical page URL               | Canonical page URL    |
| `provider`                        | Issuing bank (Organization)      | Lender (Organization) |
| `annualPercentageRate`            | APR value                        | APR value             |
| `feesAndCommissionsSpecification` | Annual fee details               | Origination fee       |
| `offers`                          | `Offer` with `url` to apply link | `Offer`               |
| `image`                           | Card image URL                   | —                     |

```typescript
// Example: app/financial-solutions/citi-simplicity-card-benefits/page.tsx
const creditCardSchema = {
  '@context': 'https://schema.org',
  '@type': 'CreditCard',
  name: 'Citi Simplicity Card',
  description:
    'A credit card with no late fees, no annual fee, and a 21-month 0% intro APR period.',
  url: 'https://us.topfinanzas.com/financial-solutions/citi-simplicity-card-benefits',
  provider: {
    '@type': 'Organization',
    name: 'Citi',
    url: 'https://www.citi.com',
  },
  offers: {
    '@type': 'Offer',
    url: 'https://us.topfinanzas.com/financial-solutions/citi-simplicity-card-benefits',
    description: 'Apply for the Citi Simplicity Card',
  },
  feesAndCommissionsSpecification: 'No annual fee. No late fees.',
};

// Render in page component:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(creditCardSchema).replace(/</g, '\\u003c'),
  }}
/>
```

**Security note:** Always replace `<` with `\u003c` in JSON.stringify output to prevent XSS injection in SSR contexts.

#### BreadcrumbList Schema (All Pages)

Breadcrumbs are a confirmed rich result type and a strong signal for topic hierarchy. Every financial-solutions page should carry a BreadcrumbList.

```typescript
const breadcrumbSchema = {
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
      name: "Financial Solutions",
      item: "https://us.topfinanzas.com/financial-solutions",
    },
    { "@type": "ListItem", position: 3, name: "Citi Simplicity Card Benefits" },
  ],
};
```

#### Article / BlogPosting Schema (Blog & Personal Finance Pages)

```typescript
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: post.frontmatter.title,
  description: post.frontmatter.description,
  image: post.frontmatter.featuredImage,
  datePublished: post.frontmatter.date,
  dateModified: post.frontmatter.updatedAt ?? post.frontmatter.date,
  author: {
    "@type": "Organization",
    name: "TopFinanzas US",
    url: "https://us.topfinanzas.com",
  },
  publisher: {
    "@type": "Organization",
    name: "TopFinanzas US",
    logo: {
      "@type": "ImageObject",
      url: "https://media.topfinanzas.com/images/logo-english.webp",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://us.topfinanzas.com/blog/${post.slug}`,
  },
};
```

#### FAQPage Schema

For product pages that contain Q&A-style content (e.g., "Who is this card for?", "What are the requirements?"), add an `FAQPage` schema. This is a high-value rich result for financial comparison queries and is directly consumed by AI chatbot systems.

```typescript
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does the Citi Simplicity Card have an annual fee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The Citi Simplicity Card has no annual fee.",
      },
    },
    // Additional Q&A pairs...
  ],
};
```

---

### 2.3 Dynamic Sitemap Generation

The current static `app/sitemap.xml` stub provides no crawl guidance. A programmatic `app/sitemap.ts` handler generates a comprehensive sitemap from the actual page inventory, which is required for full indexation of the 80+ financial solutions pages.

```typescript
// app/sitemap.ts
import { MetadataRoute } from "next";

const baseUrl = "https://us.topfinanzas.com";

// Import all known slugs from your data sources
import { getAllPosts } from "@/lib/mdx";

export default function sitemap(): MetadataRoute.Sitemap {
  const financialSolutionsSlugs = getAllPosts("financial-solutions");
  const personalFinanceSlugs = getAllPosts("personal-finance");

  const financialPages = financialSolutionsSlugs.map((post) => ({
    url: `${baseUrl}/financial-solutions/${post.slug}`,
    lastModified: post.frontmatter.updatedAt ?? post.frontmatter.date,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPages = personalFinanceSlugs.map((post) => ({
    url: `${baseUrl}/personal-finance/${post.slug}`,
    lastModified: post.frontmatter.updatedAt ?? post.frontmatter.date,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/financial-solutions`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/personal-finance`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    ...financialPages,
    ...blogPages,
  ];
}
```

**After implementing `app/sitemap.ts`:** Delete `app/sitemap.xml` and `app/sitemap_new.xml` to prevent duplicate/conflicting sitemap signals. The redirect rule `sitemap_index.xml → sitemap.xml` in `next.config.mjs` remains valid.

---

### 2.4 Programmatic `robots.ts`

Replace static `robots.txt` configuration with a programmatic `app/robots.ts` that can whitelist AI crawlers, block funnel/admin routes, and reference the sitemap location.

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
          "/invit-credit-card-rec-us",
          "/invit-credit-card-rec-us-2",
          "/weve-discovered-a-few-cards-for-you",
          "/jobs/",
          "/download-financial-guide",
        ],
      },
      // Explicitly allow major AI crawlers
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
    ],
    sitemap: "https://us.topfinanzas.com/sitemap.xml",
  };
}
```

**Why this matters:** AI crawler traffic exceeds 50% of web traffic as of 2025. GPTBot, ClaudeBot, and PerplexityBot respect `robots.txt` directives. Explicit allowlisting signals intent to participate in AI-powered search and citation systems.

---

### 2.5 `llms.txt` — AI Crawler Content Manifest

`llms.txt` is a proposed standard (Jeremy Howard, Answer.AI, 2024) that provides LLMs with a structured manifest of site content — designed to be consumed directly by AI assistants rather than scraped from HTML. It is the AI equivalent of a sitemap: a curated entry point to your content hierarchy.

While adoption is still maturing (John Mueller noted in 2025 that most AI crawlers do not yet officially consume it), leading financial publishers have adopted it as a proactive signal. The implementation cost is trivial and the upside is long-term.

**Recommended implementation:** A static `public/llms.txt` file with structured content references. Optionally, a dynamic `app/llms.txt/route.ts` can generate it from the live content inventory.

```markdown
# TopFinanzas US

> TopFinanzas US is a financial comparison and education platform for US consumers.
> We provide objective comparisons of credit cards, personal loans, and financial
> products to help readers make informed decisions.

## Core Pages

- [Home](https://us.topfinanzas.com/): Financial comparison and education hub
- [Financial Solutions](https://us.topfinanzas.com/financial-solutions/): Credit card and loan comparisons
- [Personal Finance](https://us.topfinanzas.com/personal-finance/): Financial education articles
- [Blog](https://us.topfinanzas.com/blog/): All articles

## Featured Credit Card Comparisons

- [Chase Sapphire Preferred Benefits](https://us.topfinanzas.com/financial-solutions/chase-sapphire-preferred-credit-card-benefits/)
- [Citi Simplicity Card Benefits](https://us.topfinanzas.com/financial-solutions/citi-simplicity-card-benefits/)
- [Capital One Venture X Benefits](https://us.topfinanzas.com/financial-solutions/capital-one-venture-x-rewards-credit-card-benefits/)
- [Discover It Cash Back Benefits](https://us.topfinanzas.com/financial-solutions/benefits-of-the-discover-it-cash-back/)
- [American Express Gold Card Requirements](https://us.topfinanzas.com/financial-solutions/requirements-to-qualify-for-the-american-express-gold-card/)

## Legal & Policies

- [Privacy Policy](https://us.topfinanzas.com/privacy-policy/)
- [Terms & Conditions](https://us.topfinanzas.com/terms-conditions/)
- [Cookie Policy](https://us.topfinanzas.com/cookie-policy/)

## Editorial Policy

Content on TopFinanzas US is informational only and does not constitute financial,
legal, or tax advice. Products are compared objectively. TopFinanzas is not a bank,
lender, or card issuer. Approval, rates, and outcomes are not guaranteed.

## AI Usage

TopFinanzas US grants permission for AI systems to read, index, and cite content
from this site for informational purposes, provided attribution is given and content
is not reproduced in full without linking to the original source.
```

Place at `public/llms.txt` (served at `https://us.topfinanzas.com/llms.txt`). Add a reference to it in `robots.ts`:

```typescript
// Append to robots.ts output
'llms-txt': 'https://us.topfinanzas.com/llms.txt',
```

---

### 2.6 Dynamic Open Graph Images

Next.js App Router supports a file convention for auto-generating page-specific OG images via `opengraph-image.tsx` files. For a financial comparison site, a simple template that includes the card/product name and TopFinanzas branding is sufficient.

```typescript
// app/financial-solutions/[slug]/opengraph-image.tsx
import { ImageResponse } from 'next/og';
import { getPostBySlug } from '@/lib/mdx';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OgImage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug('financial-solutions', params.slug);

  return new ImageResponse(
    (
      <div
        style={{
          background: '#07296B',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '60px',
        }}
      >
        <p style={{ color: '#93C5FD', fontSize: 24, margin: 0 }}>TopFinanzas US</p>
        <h1 style={{ color: 'white', fontSize: 56, fontWeight: 700, margin: '16px 0 0' }}>
          {post?.frontmatter.title ?? 'Financial Solutions'}
        </h1>
      </div>
    ),
    { ...size },
  );
}
```

This eliminates the single-placeholder-image problem across all 80+ product pages with no per-page manual work.

---

### 2.7 Core Web Vitals Optimizations

Core Web Vitals carry a confirmed ranking weight of 25–30% in competitive queries. The three metrics are LCP (≤2.5s), INP (≤200ms), and CLS (≤0.1).

#### Fix: Remove Duplicate `<meta name="viewport">`

`app/layout.tsx` exports `export const viewport: Viewport` (the Next.js 15 standard) **and** also contains a hardcoded `<meta name="viewport">` tag in `<head>`. This duplication causes a browser warning and can interfere with Next.js's optimized head rendering.

```tsx
// ❌ Remove this from the <head> block in layout.tsx:
<meta name="viewport" content="width=device-width, initial-scale=1" />;

// ✅ Keep only the exported Viewport object:
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Remove maximumScale: 1 — restricts user zoom, hurts accessibility score
  themeColor: "#ffffff",
};
```

#### Fix: Remove `maximumScale: 1` from Viewport

`maximumScale: 1` prevents users from zooming on mobile — a known accessibility violation that can lower Lighthouse accessibility scores and negatively impact Page Experience signals.

#### `priority` Prop on Hero Images

For the home page banner image (`/images/banner-home.webp`), add `priority` to the `<Image>` component to trigger browser `fetchpriority="high"` and preload, directly improving LCP.

```tsx
<Image
  src="/images/banner-home.webp"
  alt="TopFinanzas US — Financial Guidance"
  width={1920}
  height={800}
  priority // adds fetchpriority="high" + preload
/>
```

#### `loading="eager"` + explicit `width`/`height` on Above-the-Fold Images

Above-the-fold images without explicit dimensions cause CLS. The `ResponsiveImage` component should always pass `width` and `height` (or `fill` with a sized container) to reserve layout space before the image loads.

#### `preconnect` for External Resources

`app/layout.tsx` already preconnects to `media.topfinanzas.com`. Add preconnects for Google Tag Manager and Google Ad Manager domains, which are initialized on every page load:

```tsx
<link rel="preconnect" href="https://www.googletagmanager.com" />
<link rel="preconnect" href="https://securepubads.g.doubleclick.net" />
<link rel="dns-prefetch" href="https://www.google-analytics.com" />
```

---

### 2.8 Heading Hierarchy Audit

Every page must have exactly one `<h1>` tag that matches (or is closely related to) the page's `metadata.title`. Search engines and LLMs use heading hierarchy to determine page topic and extract answer content.

**Current findings:**

- Financial solutions pages have a correct `<h1>` that matches the metadata title ✅
- Confirm all financial solutions pages avoid skipping heading levels (`h1 → h2 → h3` in order, no `h1 → h3` jumps)
- Blog/personal-finance pages using MDX: ensure the MDX `mdx-components.tsx` renders the first `#` heading as an HTML `<h1>`, not `<h2>`

**Rule:** Each page = one `<h1>`. Section headers = `<h2>`. Sub-sections = `<h3>`. Never use heading elements for styling.

---

### 2.9 Canonical URL Enforcement

**Problem:** Several financial solutions pages do not export `alternates.canonical` in their metadata. Without a canonical, search engines must infer it — and may index duplicate URLs (trailing slash variants, query-string variants from UTM parameters passed to the URL).

**Rule:** Every page that can be indexed must have an absolute canonical. The `[slug]/page.tsx` dynamic routes already implement this. The hardcoded product pages (e.g., `citi-simplicity-card-benefits/page.tsx`) do not.

```typescript
// Add to every hardcoded financial solutions page:
alternates: {
  canonical: 'https://us.topfinanzas.com/financial-solutions/citi-simplicity-card-benefits',
},
```

---

### 2.10 Generative Engine Optimization (GEO / AEO)

GEO is the practice of structuring content so AI engines cite it as a source. Key findings from 2025 research:

- AI-referred sessions grew 527% YoY in early 2025
- Visitors arriving from AI citations convert at 4× the rate of traditional organic visitors
- LLMs favor content that: opens with a direct answer in the first 40–60 words, maintains fact density (statistics or figures every 150–200 words), and cites authoritative external sources

**Code-level GEO optimizations (no layout changes required):**

1. **`description` metadata quality:** Rewrite page `description` fields to lead with the key answer or value proposition — not a brand tagline. Google's AI Overviews and Perplexity often pull verbatim from the meta description.

2. **`dateModified` in structured data:** LLMs filter for freshness. Including `dateModified` in Article and FinancialProduct schemas signals content currency.

3. **`author` entity schema:** Publishing with a named author `Person` schema (even if the author is an editorial team member) increases the probability of citation vs. anonymous content.

4. **Clean, extractable prose:** Avoid wrapping key facts in client-side rendered components. The current financial solutions pages are Server Components — this is correct and should be maintained. Facts inside `<p>` tags with semantic `<strong>` emphasis are directly extractable by LLM crawlers.

5. **FAQ schema on product pages:** FAQPage schema is one of the top sources AI assistants use when composing comparison answers. Every credit card benefits page contains FAQ-style content that can be schema-marked without any visual change.

---

### 2.11 Security Headers & SEO-Adjacent Signals

The `next.config.mjs` headers configuration is strong. Two additions improve trust signals:

#### Content Security Policy (CSP)

A proper CSP header is both a security requirement and a trust signal. Google's HTTPS/security signals include the presence of a well-formed CSP. Add to `next.config.mjs`:

```javascript
{
  key: 'Content-Security-Policy',
  value: [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://securepubads.g.doubleclick.net",
    "img-src 'self' data: https://media.topfinanzas.com https://storage.googleapis.com",
    "connect-src 'self' https://www.google-analytics.com",
    "frame-src https://tpc.googlesyndication.com",
  ].join('; '),
},
```

#### `Permissions-Policy`

```javascript
{
  key: 'Permissions-Policy',
  value: 'camera=(), microphone=(), geolocation=()',
},
```

---

## Part 3: Implementation Roadmap

### Phase 1 — Critical Fixes ✅ COMPLETE

| Task                                            | File                                     | Impact                              | Status   |
| ----------------------------------------------- | ---------------------------------------- | ----------------------------------- | -------- |
| Add `title.template` to root metadata           | `app/layout.tsx`                         | 🔴 All-page SERP brand consistency  | ✅ Done  |
| Remove duplicate `<meta name="viewport">`       | `app/layout.tsx`                         | 🔴 Head rendering correctness       | ✅ Done  |
| Remove `maximumScale: 1` from viewport          | `app/layout.tsx`                         | 🔴 Accessibility / Lighthouse score | ✅ Done  |
| Add `alternates.canonical` to all product pages | All `app/financial-solutions/*/page.tsx` | 🔴 Canonical enforcement            | ✅ 45/45 |
| Add `openGraph` to all product pages            | All `app/financial-solutions/*/page.tsx` | 🔴 Social CTR for all product pages | ✅ 45/45 |
| Replace sitemap stub with `app/sitemap.ts`      | New `app/sitemap.ts`                     | 🔴 Full page inventory indexation   | ✅ Done  |
| Add `app/robots.ts` with AI crawler rules       | New `app/robots.ts`                      | 🔴 AI crawler access control        | ✅ Done  |
| Add `noindex` to funnel/quiz pages              | 40 funnel pages                          | 🔴 Crawl budget protection          | ✅ 40/40 |
| Homepage metadata (title, desc, OG, Twitter)    | `app/page.tsx`                           | 🔴 Homepage SERP quality            | ✅ Done  |

### Phase 2 — High Impact (100% Complete)

| Task                                          | File                                     | Impact                              | Status        |
| --------------------------------------------- | ---------------------------------------- | ----------------------------------- | ------------- |
| `CreditCard` JSON-LD on product pages         | All `app/financial-solutions/*/page.tsx` | 🟠 Rich results + AI citation       | ✅ 45/45      |
| `BreadcrumbList` JSON-LD on all product pages | All `app/financial-solutions/*/page.tsx` | 🟠 Rich results, topic hierarchy    | ✅ 45/45      |
| `CollectionPage` JSON-LD on listing page      | `app/financial-solutions/page.tsx`       | 🟠 Collection rich result           | ✅ Done       |
| `WebSite` schema with `SearchAction`          | `app/layout.tsx`                         | 🟠 Sitelinks search box             | ✅ Done       |
| `llms.txt` AI content manifest                | `public/llms.txt`                        | 🟠 AI crawler guidance              | ✅ Done       |
| Preconnect for GTM/GAM domains                | `app/layout.tsx`                         | 🟠 Load time                        | ✅ Done       |
| `lib/seo.ts` utility module                   | `lib/seo.ts`                             | 🟠 Reusable schema generators       | ✅ 16 exports |
| `BlogPosting` JSON-LD on blog pages           | `app/personal-finance/` (5 pages)        | 🟠 Article rich results             | ✅ Done       |
| `FAQPage` JSON-LD on product pages            | 6 financial solutions pages              | 🟠 FAQ rich results + AI extraction | ✅ 6/6        |
| `priority` prop on hero/LCP images            | All 43 product pages + listing pages     | 🟠 LCP improvement                  | ✅ Done       |

### Phase 3 — Medium / Long-Term (86% Complete)

| Task                                     | File                               | Impact                    | Status          |
| ---------------------------------------- | ---------------------------------- | ------------------------- | --------------- |
| `opengraph-image.tsx` per route group    | 4 files across route groups        | 🟡 Dynamic OG images      | ✅ Done         |
| GEO-optimized meta descriptions          | All page.tsx files                 | 🟡 AI Overview citations  | ❌ Open         |
| `datePublished` / `dateModified` signals | `lib/seo.ts` + `[slug]` routes     | 🟡 Freshness signals      | ✅ Done         |
| `author` metadata on blog pages          | `personal-finance/[slug]/page.tsx` | 🟡 E-E-A-T trust signals  | ✅ Done         |
| `Permissions-Policy` and CSP headers     | `next.config.mjs`                  | 🟢 Security trust signals | ✅ Done         |
| Heading hierarchy audit                  | All pages (69 scanned)             | 🟢 Heading depth signals  | ✅ Done (audit) |
| Organization schema US address           | `lib/seo.ts`                       | 🟢 Local trust signals    | ✅ Done         |

---

## Part 4: Validation & Monitoring

After implementing each phase, validate with these tools before deploying to production:

| Tool                                                                      | What to Check                                                                        |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| [Google Rich Results Test](https://search.google.com/test/rich-results)   | JSON-LD parsing, rich result eligibility (CreditCard, Article, FAQ, Breadcrumb)      |
| [Schema Markup Validator](https://validator.schema.org/)                  | Schema.org spec compliance, nested entity correctness                                |
| [Google Search Console](https://search.google.com/search-console)         | Sitemap coverage, crawl errors, mobile usability, Core Web Vitals (CrUX data)        |
| [PageSpeed Insights](https://pagespeed.web.dev/)                          | LCP, INP, CLS lab and field data per page                                            |
| [Bing Webmaster Tools](https://www.bing.com/webmasters/)                  | Bing/Copilot indexation (critical for AI visibility — Copilot pulls from Bing index) |
| [OpenGraph debugger (Meta)](https://developers.facebook.com/tools/debug/) | OG tag rendering and image preview per URL                                           |
| [Twitter Card Validator](https://cards-dev.twitter.com/validator)         | Twitter/X card metadata                                                              |
| [Ahrefs / Semrush AI Visibility](https://www.semrush.com/)                | Track AI Overview citation frequency for target keywords                             |

---

## Appendix A: Key Schema.org Types for Financial Comparison Sites

| Schema Type        | Use Case                   | Rich Result              |
| ------------------ | -------------------------- | ------------------------ |
| `WebSite`          | Root layout                | Sitelinks Search Box     |
| `Organization`     | Root layout                | Knowledge Panel          |
| `BreadcrumbList`   | All pages                  | Breadcrumb trail in SERP |
| `CreditCard`       | Credit card product pages  | Product rich result      |
| `LoanOrCredit`     | Loan product pages         | Product rich result      |
| `FinancialProduct` | Generic financial products | Product rich result      |
| `BlogPosting`      | Blog articles              | Article rich result      |
| `FAQPage`          | Q&A content blocks         | FAQ expansion in SERP    |
| `HowTo`            | Step-by-step guides        | HowTo rich result        |
| `Article`          | Personal finance guides    | Article                  |

---

## Appendix B: AI Crawler User Agents (2025–2026)

| Crawler       | Organization      | `robots.txt` User-Agent |
| ------------- | ----------------- | ----------------------- |
| GPTBot        | OpenAI            | `GPTBot`                |
| ChatGPT-User  | OpenAI (browsing) | `ChatGPT-User`          |
| ClaudeBot     | Anthropic         | `ClaudeBot`             |
| anthropic-ai  | Anthropic         | `anthropic-ai`          |
| PerplexityBot | Perplexity AI     | `PerplexityBot`         |
| Googlebot     | Google            | `Googlebot`             |
| Bingbot       | Microsoft         | `Bingbot`               |
| YouBot        | You.com           | `YouBot`                |
| cohere-ai     | Cohere            | `cohere-ai`             |

All of the above respect `robots.txt` directives. The proposed `llms.txt` standard is an additional layer for AI-specific content guidance, but is not a replacement for `robots.txt`.

---

## Appendix C: Reference Sources

- [Next.js Official Docs — Metadata API](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [Next.js Official Docs — JSON-LD](https://nextjs.org/docs/app/guides/json-ld)
- [Next.js Official Docs — Metadata & OG Images](https://nextjs.org/docs/app/getting-started/metadata-and-og-images)
- [Google Search Central — Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals)
- [Schema.org — FinancialProduct](https://schema.org/FinancialProduct)
- [Schema.org — CreditCard](https://schema.org/CreditCard)
- [Schema.org — LoanOrCredit](https://schema.org/LoanOrCredit)
- [llms.txt Specification](https://llmstxt.org)
- [evilmartians.com — Making your site visible to LLMs](https://evilmartians.com/chronicles/how-to-make-your-website-visible-to-llms)
- [Visalytica — LLM Crawling Trends 2026](https://www.visalytica.com/blog/llm-crawling)
- [PageTraffic — AI Search Optimization 2026](https://www.pagetraffic.com/blog/ai-search-optimization-in-2025/)
- [wolf.financial — FinancialProduct Schema Guide](https://wolf.financial/blog/financial-product-schema-structured-data-guide-finance)
- [Next.js SEO Complete Guide 2026 — Adeel Imran](https://adeelhere.com/blog/2025-12-09-complete-nextjs-seo-guide-from-zero-to-hero)
- [Core Web Vitals 2026 — TechCognate](https://www.techcognate.com/core-web-vitals-guide/)
- [llms.txt Implementation for Next.js](https://llms-txt.io/blog/how-to-add-llms-txt-to-nextjs-react)

---

Report generated: April 24, 2026 · TopFinanzas US · AI Dev Lead: Juan Jaramillo
