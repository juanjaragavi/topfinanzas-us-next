---
applyTo: "app/financial-solutions/**"
---

# Financial Solutions Layout Standard

## Overview

This document defines the **mandatory standardized layout** for all Credit Card and Personal Loan product pages in the Financial Solutions category (`/app/financial-solutions/`). This standard has been validated against Google Analytics and Google Ads performance metrics and must be strictly enforced for all existing and new product pages.

**Template Reference**: `/app/financial-solutions/barclaycard-avios-plus/` (Benefits page) and `/app/financial-solutions/barclaycard-avios-plus-requirements/` (Requirements page)

## Critical Rules

1. **NO DEVIATION**: All product pages must follow this exact structure
2. **NO EXTRA ELEMENTS**: Do not add colored boxes, cards, grids, or special formatting not specified here
3. **NO STYLING VARIATIONS**: Use only the specified Tailwind classes and component patterns
4. **CONSISTENT POSITIONING**: All elements must appear in the exact order specified
5. **NO CUSTOM COMPONENTS**: Only use the standard components listed in this document

## Page Pair Structure

Every financial product must have **TWO separate pages**:

1. **Benefits Page**: `/financial-solutions/{product-slug}/page.tsx`
2. **Requirements Page**: `/financial-solutions/{product-slug}-requirements/page.tsx`

---

## BENEFITS PAGE STRUCTURE

### 1. Required Imports

```typescript
import ResponsiveImage from "@/components/ui/responsive-image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
```

**MANDATORY**: Use `ResponsiveImage` for hero images, NOT `Image` from Next.js

### 2. Metadata Function

```typescript
export function generateMetadata() {
  return {
    title: "{Product Name}: {Value Proposition} - TopFinanzas US",
    description: "{Compelling 150-160 character description}",
    keywords: "{comma-separated keywords}",
  };
}
```

### 3. Main Component Structure (Exact Order)

```typescript
export default function ProductPage() {
  return (
    <main
      className="bg-white min-h-screen flex flex-col"
      data-category="credit-cards" // OR "loans" for loan products
    >
      {/* ELEMENT 1: HEADER */}
      <Header />

      {/* ELEMENT 2: ARTICLE WRAPPER */}
      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* ELEMENT 3: H1 TITLE */}
            <h1 className="text-3xl text-left sm:text-left md:text-4xl font-bold text-gray-800 mb-8 leading-8">
              {/* Product name with value proposition */}
            </h1>

            <div className="my-8 text-left sm:text-left">

              {/* ELEMENT 4: OPENING PARAGRAPH */}
              <p className="text-left text-lg text-gray-800 font-medium mb-8 leading-5">
                {/* Product overview and main selling point */}
              </p>

              {/* ELEMENT 5: FIRST AD UNIT */}
              <div
                id="uk_topfinanzas_3"
                className="items-center justify-center flex w-full my-8"
              >
                {/* Empty responsive, centered div */}
              </div>

              {/* ELEMENT 6: HORIZONTAL RULE */}
              <hr className="my-8" />

              {/* ELEMENT 7: KEY FEATURES LIST (4 bullet points) */}
              <div className="space-y-2 my-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[{BRAND_COLOR}] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">{Feature Title}:</span> {Feature description}
                  </div>
                </div>
                {/* Repeat for 4 features total */}
              </div>

              {/* ELEMENT 8: VIEW REQUIREMENTS BUTTON */}
              <div className="text-left my-8">
                <Link href="/financial-solutions/{product-slug}-requirements">
                  <Button className="bg-[{BRAND_COLOR}] hover:bg-green-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              {/* ELEMENT 9: HERO IMAGE */}
              <div className="my-8 text-left sm:text-left">
                <ResponsiveImage
                  src="{HERO_IMAGE_URL}"
                  alt="{Product Name}"
                  width={900}
                  height={507}
                  className="w-full rounded-xl"
                  priority={false}
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 900px"
                  containerClassName="w-full"
                />
              </div>

              {/* ELEMENT 10: CONTENT SECTION 1 */}
              <div className="my-6">
                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  {/* Detailed product description */}
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  {/* Section heading */}
                </h2>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  {/* Section content */}
                </p>

                {/* ELEMENT 11: SECOND AD UNIT */}
                <div
                  id="uk_topfinanzas_4"
                  className="items-center justify-center flex w-full my-8"
                >
                  {/* Empty responsive, centered div */}
                </div>

                {/* ELEMENT 12: HORIZONTAL RULE */}
                <hr className="my-8" />

                {/* ELEMENT 13: ADDITIONAL CONTENT SECTIONS */}
                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  {/* Another section heading */}
                </h2>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  {/* More content */}
                </p>

                {/* Continue with 2-4 more H2 sections */}

                {/* ELEMENT 14: PROMOTIONAL IMAGE WITH LINK */}
                <div className="my-8 text-left sm:text-left">
                  <Link href="/personal-finance/{related-article}/">
                    <ResponsiveImage
                      src="https://media.topfinanzas.com/images/ads/{promo-image}.webp"
                      alt="{Promo alt text}"
                      width={1000}
                      height={563}
                      className="rounded-xl"
                      containerClassName="mx-auto w-full md:w-8/12"
                      quality={80}
                      sizes="(max-width: 768px) 100vw, 800px"
                      crossOrigin="anonymous"
                    />
                  </Link>
                </div>

                {/* ELEMENT 15: RELATED ARTICLES BOX */}
                <div className="my-8 p-6 bg-gray-50 rounded-xl border border-gray-200 text-left sm:text-left">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 text-left">
                    Learn More About Credit Cards:
                  </h3>
                  <ul className="space-y-2 list-disc list-inside text-blue-700">
                    <li>
                      <Link
                        href="/personal-finance/{article-1}/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        {Article 1 Title}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/personal-finance/{article-2}/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        {Article 2 Title}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/personal-finance/{article-3}/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        {Article 3 Title}
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* ELEMENT 16: ADDITIONAL FEATURES SECTION */}
                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Additional Features:
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[{BRAND_COLOR}] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">{Feature}:</span> {Description}
                    </div>
                  </div>
                  {/* Repeat for 3-5 features */}
                </div>

                {/* ELEMENT 17: MORE CONTENT SECTIONS (Optional) */}
                {/* Add 1-2 more H2 sections if needed */}

                {/* ELEMENT 18: FINAL CTA BUTTON */}
                <div className="text-left my-8">
                  <Link href="/financial-solutions/{product-slug}-requirements">
                    <Button className="bg-[{BRAND_COLOR}] hover:bg-blue-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                      View Requirements
                    </Button>
                  </Link>
                </div>

                {/* ELEMENT 19: AI CONTENT DISCLAIMER */}
                <AIContentDisclaimer />
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* ELEMENT 20: FOOTER */}
      <CompactFooter />
    </main>
  );
}
```

---

## REQUIREMENTS PAGE STRUCTURE

### 1. Required Imports (Same as Benefits Page)

```typescript
import Image from "next/image"; // NOTE: Use Image, not ResponsiveImage for requirements pages
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
```

**IMPORTANT**: Requirements pages use `Image` from Next.js, NOT `ResponsiveImage`

### 2. Metadata Function

```typescript
export function generateMetadata() {
  return {
    title:
      "{Product Name} Requirements: Everything You Need to Know - TopFinanzas US",
    description: "{Eligibility and application information, 150-160 chars}",
    keywords:
      "{product name} requirements, eligibility, application, credit score",
  };
}
```

### 3. Main Component Structure (Exact Order)

```typescript
export default function ProductRequirementsPage() {
  return (
    <main
      className="bg-white min-h-screen flex flex-col"
      data-category="credit-cards" // OR "loans"
    >
      {/* ELEMENT 1: HEADER */}
      <Header />

      {/* ELEMENT 2: ARTICLE WRAPPER */}
      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* ELEMENT 3: H1 TITLE */}
            <h1 className="text-3xl text-left sm:text-left md:text-3xl font-bold text-gray-800 mb-4 leading-8">
              Requirements for the {Product Name}
            </h1>

            {/* ELEMENT 4: FIRST AD UNIT */}
            <div
              id="uk_topfinanzas_3"
              className="items-center justify-center flex w-full my-6"
            >
              {/* Empty responsive, centered div */}
            </div>

            <div className="my-8 text-left sm:text-left">

              {/* ELEMENT 5: OPENING PARAGRAPH */}
              <p className="text-lg text-gray-800 mb-8 leading-5 text-left">
                {/* Requirements overview */}
              </p>

              {/* ELEMENT 6: HERO IMAGE */}
              <div className="my-8 text-left sm:text-left">
                <Image
                  src="{REQUIREMENTS_IMAGE_URL}"
                  alt="{Product Name}"
                  width={900}
                  height={507}
                  className="w-full h-auto rounded-xl"
                  priority={false}
                  fetchPriority="high"
                  quality={85}
                  loading="eager"
                />
              </div>

              {/* ELEMENT 7: HOW TO QUALIFY SECTION */}
              <section className="my-6">
                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  How to Qualify for the {Product Name}
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[{BRAND_COLOR}] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">{Requirement Title}:</span> {Description}
                    </div>
                  </div>
                  {/* Repeat for all eligibility criteria */}
                </div>

                {/* ELEMENT 8: SECOND AD UNIT */}
                <div
                  id="uk_topfinanzas_4"
                  className="items-center justify-center flex w-full my-6"
                >
                  {/* Empty responsive, centered div */}
                </div>

                {/* ELEMENT 9: REQUIRED DOCUMENTATION SECTION */}
                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Required Documentation:
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[{BRAND_COLOR}] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">{Document Type}:</span> {Details}
                    </div>
                  </div>
                  {/* Repeat for all required documents */}
                </div>

                {/* ELEMENT 10: UNDERSTANDING COSTS SECTION */}
                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Understanding the Costs
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  {/* Costs overview */}
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[{BRAND_COLOR}] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">{Cost Item}:</span> {Details}
                    </div>
                  </div>
                  {/* Repeat for annual fees, APR, etc. */}
                </div>

                {/* ELEMENT 11: PROMOTIONAL IMAGE WITH LINK */}
                <div className="my-8 text-left sm:text-left">
                  <Link href="/personal-finance/{related-article}">
                    <Image
                      src="https://media.topfinanzas.com/images/ads/{promo-image}.webp"
                      alt="{Promo alt text}"
                      width={1000}
                      height={563}
                      className="mx-auto w-full md:w-8/12 h-auto rounded-xl"
                      loading="lazy"
                      quality={80}
                    />
                  </Link>
                </div>

                {/* ELEMENT 12: BENEFITS AND FEATURES SECTION */}
                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Benefits and Features
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[{BRAND_COLOR}] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">{Feature}:</span> {Description}
                    </div>
                  </div>
                  {/* Repeat for 3-4 benefits */}
                </div>

                {/* ELEMENT 13: WHO IS THIS FOR SECTION */}
                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Optimise Your Experience with the {Product Name}
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  {/* Target audience overview */}
                </p>

                {/* ELEMENT 14: TARGET AUDIENCE SUBSECTIONS */}
                <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
                  {Audience Type 1}:
                </h3>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  {/* Description */}
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  <span className="font-bold">Learn more:</span>{" "}
                  <Link
                    href="/personal-finance/{related-article}/"
                    className="text-blue-600 underline"
                  >
                    {Link text}
                  </Link>
                </p>

                {/* Repeat for 2-3 audience types */}

                {/* ELEMENT 15: SECOND PROMOTIONAL IMAGE */}
                <div className="my-8 text-left sm:text-left">
                  <Link href="/personal-finance/{related-article}">
                    <Image
                      src="https://media.topfinanzas.com/images/ads/{promo-image}.webp"
                      alt="{Promo alt text}"
                      width={1000}
                      height={563}
                      className="mx-auto w-full md:w-8/12 h-auto rounded-xl"
                      loading="lazy"
                      quality={80}
                    />
                  </Link>
                </div>

                {/* ELEMENT 16: IS THIS RIGHT FOR YOU SECTION */}
                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Is the {Product Name} Right for You?
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  {/* Final assessment content */}
                </p>

                {/* ELEMENT 17: FINAL EXTERNAL CTA BUTTON */}
                <div className="text-left my-8">
                  <Link href="{OFFICIAL_BANK_URL}">
                    <Button className="bg-[{BRAND_COLOR}] hover:bg-blue-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                      Visit Official Website
                    </Button>
                  </Link>
                </div>
              </section>

              {/* ELEMENT 18: AI CONTENT DISCLAIMER */}
              <AIContentDisclaimer />
            </div>
          </div>
        </div>
      </article>

      {/* ELEMENT 19: FOOTER */}
      <CompactFooter />
    </main>
  );
}
```

---

## FORBIDDEN ELEMENTS

The following elements are **STRICTLY PROHIBITED** and must be removed if found:

### ❌ NO Colored Background Boxes

```typescript
// FORBIDDEN - Do NOT use
<div className="bg-gray-50 border-l-4 border-[#011546] p-6 my-6">
<div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
<div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-6">
```

### ❌ NO Grid Layouts for Related Articles

```typescript
// FORBIDDEN - Do NOT use
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
```

**CORRECT**: Use the simple boxed list format shown in Element 15 of Benefits Page

### ❌ NO Special CTA Boxes

```typescript
// FORBIDDEN - Do NOT use
<div className="mt-8 p-6 bg-[#011546] text-white rounded-lg">
```

### ❌ NO SVG Icons in Content

```typescript
// FORBIDDEN - Do NOT use
<svg className="size-6 mr-2 text-yellow-600" fill="none" stroke="currentColor">
```

### ❌ NO Bullet Lists with <ul> Tags

```typescript
// FORBIDDEN - Do NOT use
<ul className="list-disc pl-6 mb-4 space-y-2">
  <li>List item</li>
</ul>
```

**CORRECT**: Use the bullet point format with circular badges and arrows (see Element 7 of Benefits Page)

### ❌ NO Representative Example Boxes

```typescript
// FORBIDDEN - Do NOT use
<div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
  <h3 className="text-lg font-semibold text-gray-800 mb-2 text-left">
    Representative Example
  </h3>
  <p className="text-md leading-5 text-left">
    <strong>24.9% APR representative (variable).</strong> Based on...
  </p>
</div>
```

**CORRECT**: Include representative examples in regular paragraph format within the "Understanding the Costs" section

---

## STYLING RULES

### Typography Classes (MANDATORY)

- **H1 Title**: `text-3xl text-left sm:text-left md:text-4xl font-bold text-gray-800 mb-8 leading-8`
- **H2 Headings**: `text-xl font-bold text-gray-800 mb-4 text-left`
- **H3 Subheadings** (Requirements page only): `text-lg font-bold text-gray-800 mb-3 text-left`
- **Opening Paragraph**: `text-left text-lg text-gray-800 font-medium mb-8 leading-5`
- **Body Paragraphs**: `text-left text-gray-800 mb-4 text-md leading-5 font-light`
- **Small Text** (features, details): `text-sm leading-5 text-left`

### Button Classes (MANDATORY)

```typescript
<Button className="bg-[{BRAND_COLOR}] hover:bg-blue-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
```

### Circular Badge Classes (MANDATORY)

```typescript
<div className="flex-shrink-0 size-5 rounded-full bg-[{BRAND_COLOR}] flex items-center justify-center mr-3">
  <span className="text-white font-bold">➔</span>
</div>
```

### Ad Container Classes (MANDATORY)

```typescript
<div
  id="uk_topfinanzas_3" // OR "uk_topfinanzas_4"
  className="items-center justify-center flex w-full my-8" // OR "my-6" for requirements
>
  {/* Empty responsive, centered div */}
</div>
```

---

## IMAGE HANDLING

### Benefits Page Hero Image

- **Component**: `ResponsiveImage` from `@/components/ui/responsive-image`
- **Width**: 900
- **Height**: 507
- **className**: `w-full rounded-xl`
- **containerClassName**: `w-full`
- **quality**: 85
- **sizes**: `(max-width: 768px) 100vw, 900px`

### Requirements Page Hero Image

- **Component**: `Image` from `next/image`
- **Width**: 900
- **Height**: 507
- **className**: `w-full h-auto rounded-xl`
- **quality**: 85
- **loading**: `eager`
- **fetchPriority**: `high`

### Promotional Images

- **Benefits Page**: Use `ResponsiveImage` with `containerClassName="mx-auto w-full md:w-8/12"`
- **Requirements Page**: Use `Image` with `className="mx-auto w-full md:w-8/12 h-auto rounded-xl"`
- **Width**: 1000
- **Height**: 563
- **quality**: 80
- **loading**: `lazy` (for promotional images)

---

## CONTENT GUIDELINES

### Section Order Priority

**Benefits Page**:

1. Product overview and key features (above the fold)
2. Primary benefits and value propositions
3. Detailed features and use cases
4. Related articles and resources
5. Additional features and considerations

**Requirements Page**:

1. Eligibility criteria (most important)
2. Required documentation
3. Costs and fees
4. Benefits summary
5. Target audience and fit assessment

### Internal Linking Requirements

- **Minimum**: 3 internal links per page
- **Link to**: Related product pages, educational articles, comparison guides
- **Format**: Use descriptive anchor text, NOT generic "click here"
- **Style**:
  - In Related Articles box: `text-blue-700 hover:underline hover:text-blue-900 transition-colors`
  - In body text: `text-blue-600 underline`

### US Disclosure Notes

- Include APR/fee disclosures in the Requirements page "Understanding the Costs" section (aligned with issuer terms)
- Add risk notes where appropriate (e.g., interest charges if balances aren’t paid in full)
- Use clear disclaimers such as "terms and conditions apply" and avoid implying guarantees
- Avoid absolute promises; use "may be eligible" instead of "you will qualify"

---

## VALIDATION CHECKLIST

Before publishing or committing any Financial Solutions page, verify:

- [ ] Uses ONLY components listed in "Required Imports"
- [ ] Elements appear in the exact order specified
- [ ] NO colored background boxes (gray-50, blue-50, yellow-50, etc.)
- [ ] NO grid layouts for related articles
- [ ] NO special CTA boxes with colored backgrounds
- [ ] NO SVG icons embedded in content
- [ ] NO `<ul>` tag bullet lists (use circular badges instead)
- [ ] Buttons use the specified brand color
- [ ] Circular badges use the specified brand color
- [ ] Both ad units (`uk_topfinanzas_3` and `uk_topfinanzas_4`) are present
- [ ] Hero image positioned correctly (after first CTA button on Benefits page)
- [ ] Benefits page uses `ResponsiveImage` for hero
- [ ] Requirements page uses `Image` for hero
- [ ] Final CTA on Requirements page links to official external URL
- [ ] AI Content Disclaimer appears before footer on both pages
- [ ] CompactFooter is the last element on both pages
- [ ] All text uses `text-left` alignment
- [ ] Internal links use correct styling
- [ ] Minimum 3 internal links included

---

## MIGRATION NOTES

When refactoring existing non-compliant pages:

1. **Remove all colored boxes** - Extract content and place in regular paragraph format
2. **Replace grid layouts** - Use the standard boxed list format for related articles
3. **Reposition hero images** - Move to correct position (after first CTA on Benefits page)
4. **Replace `<ul>` lists** - Convert to circular badge bullet point format
5. **Move AI Disclaimer** - Ensure it appears before footer
6. **Update button styling** - Apply brand color consistently
7. **Standardize typography** - Apply the mandatory typography classes
8. **Verify element order** - Ensure all sections appear in the correct sequence

---

## ENFORCEMENT

This layout standard is **non-negotiable** and has been validated against performance metrics. Any deviation from this standard:

- Negatively impacts SEO performance
- Reduces conversion rates
- Creates maintenance complexity
- Breaks analytics tracking

**All new pages** must follow this standard from creation.

**All existing pages** that deviate must be refactored to compliance.

**All LLMs and developers** must reference this document before creating or modifying Financial Solutions pages.
