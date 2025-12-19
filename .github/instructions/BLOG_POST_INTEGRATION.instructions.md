# Blog Post Integration Instructions

## Overview

When creating new blog articles, they must be added to multiple locations across the site to ensure proper visibility and discoverability. This document outlines all the places where blog posts are displayed and need to be updated.

## Mandatory Listing Synchronization

Any time you create, update, or delete a blog post in the **Personal Finance** or **Financial Solutions** categories, you must immediately mirror that change across every `allPosts` array in the blog listing `page.tsx` files (`app/blog/page.tsx`, `app/personal-finance/page.tsx`, `app/financial-solutions/page.tsx`, and any other listing views). Add new entries for creations, adjust metadata for edits, and remove entries for deletions so the rendered listings always align with the current content set.

## Financial Solutions Layout Standard

**CRITICAL**: All Financial Solutions product pages (credit cards and personal loans) MUST follow the exact standardized layout documented in:

**`.github/instructions/FINANCIAL_SOLUTIONS_LAYOUT_STANDARD.instructions.md`**

This layout standard is **mandatory and non-negotiable**. It has been validated against Google Analytics and Google Ads performance metrics. Before creating or modifying any Financial Solutions page:

1. **Read the complete layout standard** at `.github/instructions/FINANCIAL_SOLUTIONS_LAYOUT_STANDARD.instructions.md`
2. **Follow the exact element order** for both Benefits and Requirements pages
3. **Use ONLY the components and patterns** defined in the standard
4. **Avoid all forbidden elements** (colored boxes, grid layouts, SVG icons, etc.)
5. **Validate compliance** using the checklist before publishing

### Key Layout Requirements

- Benefits and Requirements pages must be separate files
- Element ordering must match the standard exactly
- NO colored background boxes or special formatting
- NO grid layouts for related articles
- Use circular badges with arrows for all bullet points
- Benefits page uses `ResponsiveImage`, Requirements page uses `Image`
- Both pages must include the existing in-repo ad units (currently `uk_topfinanzas_3` and `uk_topfinanzas_4`)
- AI Content Disclaimer must appear before footer
- All text must use `text-left` alignment

**Template Reference**: Use an existing Financial Solutions page in this repo that already follows the standard (both Benefits and Requirements pages).

## Required Locations for Blog Post Integration

### 1. Main Blog Listing Page (`app/blog/page.tsx`)

**Location**: `allPosts` array (around line 44)

**Format**:

```typescript
{
  title: "Article Title | TopFinanzas US",
  slug: "article-slug", // Must match directory name
  description: "Article description/excerpt",
  image: "https://media.topfinanzas.com/images/article-image.webp",
  category: "Personal Finance" | "Financial Solutions",
  categoryPath: "/personal-finance" | "/financial-solutions",
  date: "Month DD, YYYY", // e.g., "August 27, 2025"
}
```

**Notes**:

- Articles are automatically sorted by date (newest first)
- Use current date to ensure new articles appear at the top
- Category determines which filter the article appears under

### 2. Category Archive Pages

#### Personal Finance Category (`app/personal-finance/page.tsx`)

**Location**: `allPosts` array (around line 32)

**Format**:

```typescript
{
  title: "Article Title | TopFinanzas US",
  slug: "article-slug",
  description: "Article description/excerpt",
  image: "https://media.topfinanzas.com/images/article-image.webp",
  date: "Month DD, YYYY",
  category: "guide" | "creditCards" | "loans" | "debt", // Category filter
}
```

**Notes**:

- **Required for Personal Finance articles**
- Articles sorted by date (newest first)
- Choose appropriate category filter: "guide", "creditCards", "loans", "debt"
- Must be added here for articles to appear in Personal Finance section

#### Financial Solutions Category (`app/financial-solutions/page.tsx`)

**Location**: If this page exists, follow similar pattern for Financial Solutions articles

### 3. Homepage Featured Section (`app/page.tsx`)

**Location**: Around line 268 in the `FeaturedPostCard` component

**Purpose**: Replace the main featured article on homepage

**Format**:

```typescript
<FeaturedPostCard
  title="Article Title"
  description="Article description"
  image="https://media.topfinanzas.com/images/article-image.webp"
  slug="article-slug"
  category="Personal Finance"
  categorySlug="/personal-finance"
  date="Month DD, YYYY"
  orientation="horizontal"
  priority={false}
/>
```

### 3. Blog Sidebar Recent Articles (`components/mdx/blog-layout.tsx`)

**Location**: Around line 63 in the `SidebarRecentArticles` component

**Purpose**: Shows recent articles in blog post sidebars

**Format**:

```typescript
{
  /* Article X */
}
<div className="flex items-center gap-3">
  <Image
    src="https://media.topfinanzas.com/images/article-image.webp"
    alt="Article Title"
    width={50}
    height={50}
    loading="lazy"
    priority={false}
    className="rounded-md object-cover"
    onError={(e) => {
      e.currentTarget.src =
        "https://media.topfinanzas.com/images/placeholder-image.webp";
    }}
  />
  <div>
    <Link
      href="/personal-finance/article-slug"
      className="text-sm font-medium hover:underline line-clamp-2"
    >
      Article Title
    </Link>
  </div>
</div>;
```

**Notes**:

- Add new articles at the top
- Remove oldest articles to maintain 4-5 recent articles
- Keep most engaging/popular articles

### 4. Header Navigation Featured Posts (`lib/navigation/headerNavigation.ts`)

**Location**: Around line 186 in the `featuredPosts` object

**Purpose**: Shows featured articles in the blog mega menu

**Format**:

```typescript
{
  title: cleanTitle("Article Title"),
  href: "/personal-finance/article-slug",
  image: "https://media.topfinanzas.com/images/article-image.webp",
  category: "Personal Finance",
  categoryHref: "/personal-finance",
}
```

**Notes**:

- Usually 4 featured posts total
- Mix of Personal Finance and Financial Solutions content
- Replace least performing or oldest articles

### 5. Personal Finance Category Navigation (`lib/navigation/headerNavigation.ts`)

**Location**: Around line 95 in the Personal Finance `items` array

**Purpose**: Shows top Personal Finance articles in header dropdown

**Format**:

```typescript
{
  text: cleanTitle("Article Title"),
  href: "/personal-finance/article-slug",
}
```

**Notes**:

- Only add if it's a top-performing Personal Finance article
- Maintain 5-6 items + "Show more..." link
- Remove least popular articles when adding new ones

## Step-by-Step Integration Process

### When Creating a New Blog Post (and Maintaining Existing Posts):

1. **Create the article file**: `/app/personal-finance/[slug]/page.tsx` or `/app/financial-solutions/[slug]/page.tsx`

2. **Update Blog Listing** (`app/blog/page.tsx`):
   - Add entry to `allPosts` array
   - Use current date to ensure it appears first

- Ensure slug matches directory name exactly; for edits, update the existing entry; for deletions, remove the entry entirely

3. **Update Category Archive** (Required for proper categorization):
   - **Personal Finance**: Add to `app/personal-finance/page.tsx` `allPosts` array
   - **Financial Solutions**: Add to `app/financial-solutions/page.tsx` if exists

- Choose appropriate category filter for filtering functionality; for edits, update the existing entry; for deletions, remove the entry entirely

4. **Consider Homepage Feature** (`app/page.tsx`):
   - If it's a major/important article, replace the featured post on homepage
   - Use horizontal orientation for homepage feature

5. **Update Sidebar Recent Articles** (`components/mdx/blog-layout.tsx`):
   - Add to top of recent articles list
   - Remove oldest article to maintain 4-5 items

6. **Optional Header Navigation Updates**:
   - **Featured Posts**: Add if it's a standout article
   - **Category Navigation**: Add if it becomes a top performer

### Image Requirements

- **Format**: WebP preferred for performance
- **Size**: Minimum 800x450 pixels (16:9 aspect ratio)
- **Location**: `https://media.topfinanzas.com/images/` domain
- **Naming**: Use descriptive, SEO-friendly names
- **Fallback**: Always include error handling for missing images

### URL Structure Requirements

- **Personal Finance**: `/personal-finance/[slug]`
- **Financial Solutions**: `/financial-solutions/[slug]`
- **Slug Format**: lowercase, hyphen-separated, no special characters
- **Consistency**: Slug must match directory name exactly

## Quality Control Checklist

Before publishing, verify:

- [ ] Article file created in correct category directory
- [ ] Added to blog listing with correct date
- [ ] Added to appropriate category archive page (Personal Finance/Financial Solutions)
- [ ] All URLs and slugs are consistent
- [ ] Images load correctly with proper fallbacks
- [ ] Article appears in blog filters correctly
- [ ] Article appears in category filters correctly
- [ ] Sidebar recent articles updated
- [ ] Consider homepage feature update
- [ ] Test all internal links work
- [ ] Verify responsive design on mobile

## Maintenance Notes

### Regular Updates Needed:

1. **Monthly**: Review and update featured posts in header navigation
2. **Bi-weekly**: Update homepage featured article if new high-quality content available
3. **Weekly**: Ensure blog sidebar shows most recent 4-5 articles
4. **As needed**: Update category navigation for consistently high-performing articles

### Performance Considerations:

- Keep blog listing manageable (avoid excessive entries)
- Use lazy loading for non-critical images
- Prioritize only hero/featured images
- Maintain image optimization (WebP format, appropriate sizing)

## Example: Latest Article Integration

**Article**: "Side Hustle or Second Job? How to Choose the Right Income Booster"

**Locations Updated**:

1. ✅ `app/blog/page.tsx` - Added to allPosts array
2. ✅ `app/personal-finance/page.tsx` - Added to Personal Finance category
3. 🔄 Consider for homepage feature
4. 🔄 Add to sidebar recent articles
5. 🔄 Consider for header featured posts

This systematic approach ensures new content is properly integrated across all site sections for maximum visibility and user engagement.
