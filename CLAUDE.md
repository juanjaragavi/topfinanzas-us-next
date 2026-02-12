# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Identity

**TopFinanzas US Next** - A Next.js 15+ financial comparison platform for the US market, migrating from the legacy WordPress site (<https://us.topfinanzas.com>). The project focuses on credit cards, personal loans, and financial guidance with comprehensive analytics tracking and multi-step user flows.

## Development Commands

### Core Development

```bash
npm run dev      # Development server on port 3040 with Turbopack
npm run build    # Production build
npm run start    # Production server on port 3040
npm run lint     # ESLint
npm run format   # Prettier formatting
```

### Testing Scripts

```bash
npm run test:brevo        # Test Brevo new contact integration
npm run test:brevo-direct # Direct Brevo API test
npm run test:brevo-api    # Full Brevo integration test
```

### Git Workflow

**CRITICAL**: Use the automated workflow script instead of manual git commands:

```bash
bash ./scripts/git-workflow.sh
```

This script:

- Reads commit message from `/lib/documents/commit-message.txt`
- Auto-commits to dev/main/backup branches
- Handles merge conflicts automatically
- Never bypass this script for commits/deployments

## High-Level Architecture

### Framework & Routing

- **Next.js 15+ App Router** with TypeScript (strict mode) and Tailwind CSS
- Server Components by default; client components marked with `"use client"`
- Port 3040 (not standard 3000)
- MDX support configured but currently unused (content is hardcoded)
- Turbopack for fast development builds
- Standalone output mode for Vercel/Docker deployment

### Content Architecture

This is a financial comparison site migrating from WordPress to Next.js. Content follows three distinct patterns:

1. **Financial Solutions** (`/app/financial-solutions/`)
   - 80+ credit card and loan pages as individual React components
   - Each card has two routes: `[card-name]-benefits` and `[card-name]-requirements`
   - Content is hardcoded in page.tsx files (no database/CMS)
   - Images served from `media.topfinanzas.com`

2. **Blog & Personal Finance** (`/app/blog/`, `/app/personal-finance/`)
   - Hardcoded arrays of post metadata with pagination
   - 60+ posts with title, slug, description, category, date
   - Uses Framer Motion for animations
   - No actual MDX files yet (prepared for future migration)

3. **Search System** (`/lib/search-index.ts`)
   - In-memory search with ~400 hardcoded items
   - Token-based relevance scoring across title/description/category
   - API endpoint at `/api/search`

### Analytics Stack

Heavy multi-layer analytics implementation:

- **Google Tag Manager** - Core analytics
- **Google Ads** - Conversion tracking
- **TopAds** - Proprietary ad network with SPA navigation support
- **UTM Tracking** - Captured and persisted throughout user journey
- All analytics components in `/components/analytics/`

**TopAds Critical Pattern**:

- SPA navigation handled automatically via `TopAdsSPAHandler` calling `window.topAds.spa()`
- Use `useTopAds()` hook for programmatic SPA activation only when needed
- Configuration: domain `TOPFIN_US`, networkCode `23062212598`, lazyLoad `soft`
- See `.github/copilot-instructions.md` for full implementation details

### API Routes

Located in `/app/api/` with Next.js App Router pattern:

| Route            | Purpose                   | Integration        |
| ---------------- | ------------------------- | ------------------ |
| `/api/contact`   | Contact form submission   | Brevo (Sendinblue) |
| `/api/subscribe` | Newsletter subscription   | Brevo              |
| `/api/sheets`    | Google Sheets integration | Google Sheets API  |
| `/api/search`    | Content search            | In-memory index    |

**Brevo Integration Pattern**:

```typescript
// Captures UTM params and adds to Brevo contact attributes
// Creates contact, adds to lists [9, 5], stores message as note
```

### Key Architectural Decisions

1. **No Database/CMS** - All content lives in code as React components or hardcoded data
2. **Static-First** - Uses SSR with Metadata exports, no ISR configured
3. **Image Optimization** - Remote patterns configured for multiple CDNs, 1-year cache TTL, AVIF/WebP format
4. **Standalone Build** - Configured for Vercel/Docker deployment
5. **Strict TypeScript** - Path alias `@/` for root imports, no `any` types without justification
6. **Centralized Logging** - Pino logger replaces console.log for production-ready logging (see `lib/logger.ts`)
7. **Security Headers** - X-Frame-Options, CSP, and other OWASP headers configured

### Component Patterns

**Shadcn/UI + Radix Primitives**:

```tsx
// Standard forwarded ref pattern
const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
  ({ className, ...props }, ref) => (
    <div className={cn("base-styles", className)} ref={ref} {...props} />
  ),
);
Component.displayName = "Component";
```

**Import Pattern**:

```tsx
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
```

**Client Component Islands**:

```tsx
"use client";
// Use for state management, animations, event handlers
```

### Multi-Step Forms

Located in `/components/steps/` and `/components/forms/`:

- React Hook Form for state management
- Zod for validation
- Custom `ProgressIndicator` and `OptionButton` components
- Always call `window.scrollTo(0, 0)` on step changes

### US Market Specifics

- Currency: USD ($) formatting
- Dates: MM/DD/YYYY (en-US)
- Avoid UK-only (FCA) or Mexico-only (CAT/CONDUSEF/PROFECO) regulatory terms
- Focus: Credit cards, personal loans, financial guidance

## Environment Setup

1. Copy `.env.example` to `.env.production`
2. Required variables:
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL` and `GOOGLE_PRIVATE_KEY` for Sheets API
   - Brevo API credentials for contact/newsletter forms
   - Kit.com API for newsletter integration
3. Production env files stored in `/opt/app/` with restricted permissions
4. Never commit secrets to repository

## Code Quality Standards

### TypeScript

- Strict mode enabled
- Path aliases: `@/` for root imports
- No `any` types without justification
- Proper React component typing with interfaces
- Follow import organization order:
  1. React imports
  2. Next.js imports
  3. Third-party imports
  4. Local imports

### Styling

- Mobile-first Tailwind approach
- Use `cn()` utility for class merging (from `@/lib/utils`)
- Custom text sizing with `getTextClass()` utility
- Local Poppins font (WOFF2) in `/public/fonts/`
- NO colored background boxes in financial solutions pages
- Consistent spacing and responsive design

### File Naming

- Components: `kebab-case.tsx` (e.g., `credit-card-form.tsx`)
- API routes: `route.ts` in App Router structure
- Utilities: Descriptive names in `/lib/utils/`
- Instruction files: `*.instructions.md` for procedural guides

### Logging Standards

**CRITICAL**: Never use `console.log()`, `console.warn()`, or `console.error()` directly:

```typescript
// ❌ WRONG
console.log("User data:", userData);

// ✅ CORRECT
import { logger } from "@/lib/logger";
logger.info({ userData }, "User data retrieved");
```

- Import from `@/lib/logger`
- Use appropriate levels: `trace`, `debug`, `info`, `warn`, `error`, `fatal`
- Structured logging with context objects
- Auto-disabled in production (unless `NEXT_PUBLIC_ENABLE_LOGGING=true`)
- See `lib/logger.ts` for full implementation

## Important Files & Directories

```
/app/                               # App Router pages and layouts
  /api/                             # API endpoints (Brevo, search, sheets)
  /financial-solutions/             # 80+ credit card/loan pages
  layout.tsx                        # Root layout with analytics

/components/
  /ui/                              # Shadcn/Radix base components
  /analytics/                       # GTM, Google Ads, TopAds
  /layout/                          # Header, footer, site wrapper
  /forms/                           # Contact, subscription forms

/lib/
  search-index.ts                   # In-memory search (~400 items)
  mdx.ts                            # MDX parser (prepared, unused)
  constants.ts                      # Brand constants, UTM params
  logger.ts                         # Pino logging
  /navigation/                      # Header/footer nav config

/scripts/
  git-workflow.sh                   # Automated commit/push script

/.github/
  copilot-instructions.md           # Full project documentation
  /instructions/                    # Detailed implementation guides
    - BLOG_POST_INTEGRATION.instructions.md
    - PUSH-AND-COMMIT.instructions.md
    - project-rules.instructions.md
```

## Instruction Files System

**CRITICAL**: Always check `.github/instructions/` before making changes. These files contain project-specific implementation details that override general best practices:

### Core Project Rules

- **`project-rules.instructions.md`**: Core architecture and standards (applyTo: `**`)
  - Framework configuration (Next.js 14+, TypeScript, Tailwind)
  - Directory organization and file structure
  - Code quality standards and ESLint/Prettier config
  - US market localization requirements
  - Performance optimization strategies
  - Security guidelines and best practices

### Implementation Guides

- **`ADZEP_IMPLEMENTATION.instructions.md`**: ~~Removed~~ (AdZep replaced by TopAds)
  - TopAds integration now handled via `topads.tsx` and `topads-spa-handler.tsx`

- **`BLOG_POST_INTEGRATION.instructions.md`**: Blog content workflow
  - Multi-location sync requirements
  - allPosts array management
  - Personal Finance/Financial Solutions category rules
  - Homepage and sidebar integration

- **`FINANCIAL_SOLUTIONS_LAYOUT_STANDARD.instructions.md`**: **MANDATORY** layout for all product pages
  - Benefits and Requirements page separation
  - Exact element ordering (validated against GA/Google Ads)
  - Image component specifications (`ResponsiveImage` vs `Image`)
  - Ad unit placement (`square03`, `square04`)
  - NO colored background boxes, grid layouts, or bullet lists
  - Template reference: `/app/financial-solutions/citi-simplicity-card/`
  - **ANY deviation negatively impacts SEO and conversion rates**

- **`PUSH-AND-COMMIT.instructions.md`**: Git workflow procedures
  - Automated multi-branch deployment
  - Commit message standards
  - Merge conflict handling

### Content Generation Templates

- **`lib/CREDIT_CARD_PRODUCT_GENERATION.instructions.md`**: Credit card page creation
- **`lib/TOFU_BLOG_POST_GENERATION.instructions.md`**: Blog post templates

## Common Gotchas

1. **Port 3040** - Not standard 3000
2. **Git Workflow** - Never bypass `git-workflow.sh` script; reads commit from `/lib/documents/commit-message.txt`
3. **Analytics Order** - GTM must load before TopAds in layout
4. **Form Navigation** - Always scroll to top on step changes (`window.scrollTo(0, 0)`)
5. **MDX Support** - Configured but unused; content is hardcoded
6. **TopAds Activation** - SPA navigation handled automatically via `TopAdsSPAHandler`
7. **Search Index** - Requires rebuild/redeploy for content changes (~400 items in memory)
8. **Image Sources** - Multiple CDN patterns configured in next.config.mjs
9. **Console Logging** - NEVER use `console.log()`; always use `logger` from `@/lib/logger`
10. **Financial Solutions Layout** - MUST follow exact layout standard (non-negotiable, SEO-critical)
11. **Blog Post Sync** - Creating/updating blog posts requires updates across multiple `allPosts` arrays
12. **US Market Focus** - Avoid UK (FCA) or Mexico (CAT/CONDUSEF/PROFECO) regulatory terms unless explicitly needed

## Testing Patterns

- No formal test framework currently configured
- Manual testing recommended for:
  - Component behavior and user interactions
  - Custom hooks functionality
  - API route responses
  - Form validation and multi-step flows
- Brevo integration tests via Node.js scripts:
  - `npm run test:brevo` - New contact integration test
  - `npm run test:brevo-direct` - Direct API test
  - `npm run test:brevo-api` - Full integration test
- Development testing panel for TopAds via browser DevTools
- Analytics tracking verification through browser DevTools

## Deployment

- Target: Vercel deployment
- Build output: Standalone mode
- Image optimization: AVIF/WebP with 1-year cache
- Compression enabled globally
- Security headers configured (X-Frame-Options, CSP, etc.)
- Environment files in production: `/opt/app/` with restricted permissions
- CDN optimization for static assets and images

## Best Practices & Workflow

### Before Making Changes

1. **Read instruction files first** - Check `.github/instructions/` for project-specific rules
2. **Review existing patterns** - Look at similar components/pages for consistency
3. **Check Financial Solutions standard** - If working on product pages, read the layout standard
4. **Verify US market requirements** - Ensure terminology, currency, and compliance are US-focused

### During Development

1. **Use the logger** - Never use `console.log()`, always import from `@/lib/logger`
2. **Follow TypeScript strictly** - No `any` types without justification
3. **Mobile-first approach** - Test responsive design from smallest to largest screens
4. **Maintain accessibility** - Include proper ARIA labels and keyboard navigation
5. **Optimize performance** - Use `next/image`, lazy loading, and code splitting appropriately

### When Creating Content

1. **Financial Solutions pages** - Follow the mandatory layout standard exactly (template: barclaycard-avios-plus)
2. **Blog posts** - Update all `allPosts` arrays across blog listing pages
3. **Search index** - Update `search-index.ts` for new discoverable content
4. **Analytics tracking** - Ensure GTM events are properly configured

### Git Workflow

1. **Use the automated script** - `bash ./scripts/git-workflow.sh`
2. **Write commit message** - Update `/lib/documents/commit-message.txt` first
3. **Never bypass** - Script handles dev/main/backup branches automatically
4. **Conventional commits** - Use structured commit message format

### Code Review Checklist

- [ ] TypeScript strict mode compliance
- [ ] No `console.log()` statements
- [ ] Mobile-first responsive design
- [ ] Accessibility attributes present
- [ ] Images optimized with `next/image`
- [ ] Analytics tracking implemented
- [ ] US market terminology used
- [ ] Instruction files followed
- [ ] Search index updated (if applicable)
- [ ] Blog arrays synced (if applicable)

## Additional Resources

### Documentation Structure

```
/docs/                          # Implementation guides and summaries
/.github/instructions/          # Project-specific rules (YAML frontmatter)
/.github/agents/                # Pre-configured Claude Code agents
CLAUDE.md                       # This file - Claude Code guidance
GEMINI.md                       # Gemini AI guidance
WARP.md                         # Warp terminal/IDE guidance
README.md                       # Project overview and setup
```

### Key Reference Files

- **Architecture**: `.github/instructions/project-rules.instructions.md`
- **Analytics**: TopAds integration via `topads.tsx` and `topads-spa-handler.tsx`
- **Content**: `.github/instructions/BLOG_POST_INTEGRATION.instructions.md`
- **Product Pages**: `.github/instructions/FINANCIAL_SOLUTIONS_LAYOUT_STANDARD.instructions.md`
- **Git**: `.github/instructions/PUSH-AND-COMMIT.instructions.md`
- **Logging**: `lib/logger.ts`
- **Search**: `lib/search-index.ts`
- **Constants**: `lib/constants.ts`

---

**Last Updated**: 2026-01-30

For questions or clarifications about this project, refer to the instruction files in `.github/instructions/` or consult the project documentation in `/docs/`.
