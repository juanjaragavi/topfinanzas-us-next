<!-- markdownlint-disable MD013 MD024 MD033 MD036 MD041 -->

# Blog Article Generation Request - TOFU Content

Generate a blog article following these rules:

**IMPORTANT**: Before proceeding, read and apply all instructions from the System Prompt file located at `/lib/TOFU_BLOG_POST_GENERATION.instructions.md` in the workspace. Follow all guidelines, structures, and compliance rules defined in that file.

<BlogArticleRequest>

## Article Classification

- **Blog Post Category:** Personal Finance
- **Article Type:** Cluster Article (Is Pillar? = No)
- **Pillar:** Money Management
- **Main Keyword:** personal finance
- **Tentative Title:** {title}
- **Content Focus:** Money Management
- **SEO Intent Type:** Informational
- **Funnel Stage:** TOFU (Top of Funnel)
- **Market:** United States
- **Language:** English (United States)

## Data Sources

**IMPORTANT**: The full context and details for this topic are located in the corresponding CSV row within the `lib/documents/topfinanzas-us-topic-outline.csv` file.

### Primary Data Source

**Topic Outline CSV**

- **Location**: `lib/documents/topfinanzas-us-topic-outline.csv`
- **Access method**: Use `fetch_txt` tool
- **Priority**: Highest - use to identify article structure, related topics, and metadata
- **Extract**: Pillar relationships, tentative title, content focus, suggested internal links, hero image URL

### Internal Linking Resource

**US Site Sitemap**

- **Location**: <https://us.topfinanzas.com/sitemap.xml>
- **Access method**: Use `fetch_txt` tool
- **Purpose**: Identify existing articles and pages for internal linking opportunities
- **Usage**: Add at least 3 relevant internal links per article using Next.js Link component

### Supportive References (Optional)

- CFPB (Consumer Financial Protection Bureau): <https://www.consumerfinance.gov/>
- Federal Reserve (consumer resources): <https://www.federalreserve.gov/consumerscommunities.htm>
- IRS (tax basics): <https://www.irs.gov/>

</BlogArticleRequest>

<Instructions>

1. **Read System Prompt**: First, locate and read the complete system prompt at `/lib/TOFU_BLOG_POST_GENERATION.instructions.md` to understand all requirements, structures, and compliance rules.

2. **Access Topic Outline CSV**: Use `fetch_txt` to retrieve and parse the CSV file at `lib/documents/topfinanzas-us-topic-outline.csv`. Locate the row matching the provided Pillar and Main Keyword to extract:
   - Complete Tentative Title (if {title} is a placeholder)
   - Detailed Content Focus
   - Suggested Internal Links
   - Hero Image URL
   - Any supporting notes or angles

3. **Retrieve US Sitemap**: Use `fetch_txt` to access <https://us.topfinanzas.com/sitemap.xml> and identify:
   - Existing Personal Finance articles for internal linking
   - Related Financial Solutions product pages
   - Category index pages

4. **Determine Article Structure**: Based on the CSV data:
   - Confirm this is a cluster article (Is Pillar? = No)
   - Target 800-1,000 words (TOFU funnel stage)
   - Plan 2-4 content sections with H2/H3 headings
   - Map at least 3 internal links to existing US pages

5. **Generate Content**: Create ONE complete Next.js page component (`.tsx`) with:
   - Production-ready TypeScript code
   - US English throughout
   - No misleading claims; no guaranteed outcomes; include clear disclosures where relevant
   - SEO metadata (title, description, keywords)
   - Hero image from CSV or CDN
   - Ad placeholders (`square01`, `square02`)
   - Internal links using Next.js `<Link>` component
   - CTA button with `className="cta-button-blue"`
   - `AIContentDisclaimer` component at the end

6. **Directory Placement**: Since Funnel Stage is TOFU, create the file at:
   - `/app/personal-finance/{slug}/page.tsx`
   - Derive slug from Tentative Title (lowercase, kebab-case)

7. **Integration Notes**: After generating the component, provide a brief checklist of required follow-up updates:
   - `app/blog/page.tsx` - add to allPosts array
   - `app/personal-finance/page.tsx` - add to category archive
   - `components/mdx/blog-layout.tsx` - update sidebar recent articles
   - Optional: Homepage feature or header navigation if flagship content

</Instructions>

<OutputRequired>

ONE complete Next.js page component:

- **File**: `/app/personal-finance/{slug}/page.tsx`
- **Format**: Production-ready TypeScript (.tsx)
- **Structure**: Matching existing Personal Finance articles
- **Content**: 800-1,000 words, entirely new and original
- **Compliance**: No personalized advice; balanced information; avoid guarantees
- **Links**: Minimum 3 internal links to live US pages
- **Components**: Header, CompactFooter, AIContentDisclaimer, ad placeholders
- **Metadata**: Complete generateMetadata() function with title, description, keywords

</OutputRequired>

<TemplateReferences>

Review these existing articles for structure and styling patterns:

- `/app/personal-finance/money-management-for-beginners/page.tsx`
- `/app/personal-finance/travel-credit-cards/page.tsx`
- `/app/personal-finance/side-hustle-or-second-job/page.tsx`

</TemplateReferences>
