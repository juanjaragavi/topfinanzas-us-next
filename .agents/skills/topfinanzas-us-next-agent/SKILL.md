---
name: topfinanzas-us-next-agent
description: Comprehensive codebase guide and operational workflow skill for the TopFinanzas US (us.topfinanzas.com) Next.js 15 repository. Use for US-specific feature work, layout implementation, content pipeline management, and US compliance. Integrates with the topnetworks-sync-orchestrator.
---

# TopFinanzas US Codebase Guide

This skill governs development, feature additions, content generation, and compliance implementation within the `topfinanzas-us-next` repository.

## 1. Repository Context & Boundaries

- **Project Purpose**: Flagship US digital advertising arbitrage property (`us.topfinanzas.com`) targeting English-speaking US consumers with financial comparison tools, credit card reviews, and personal finance education.
- **Tech Stack**: Next.js 15.4 (App Router), TypeScript, React 19, Tailwind CSS v3.4, Shadcn/UI, Radix UI, MDX.
- **Infrastructure**: GCP Compute Engine (34.45.27.247), PM2, Apache reverse proxy. Port 3040.
- **Monetization**: AdZep, TopAds, and direct CPA partnerships (credit card / loan applications).
- **Compliance Rules**: Use US terminology and formats (USD, MM/DD/YYYY, ZIP codes, +1 phone numbers). Avoid UK FCA and MX CONDUSEF/PROFECO language. Do not promise approvals or guaranteed rates.

## 2. Integration with TopNetworks Orchestrator

This skill represents the US-local implementation arm of the TopNetworks ecosystem. It explicitly connects to and is governed by the orchestrator skill located at `/Users/macbookpro/GitHub/topfinanzas-us-next/.agents/skills/topnetworks-sync-orchestrator/SKILL.md`.

**Coordination Contract**:

- **US-Only Tasks**: (e.g., US-specific content, US GTM container `GTM-5568TKCX`, US `lib/data/posts.ts` edits, US legal pages) Use this skill to implement changes directly.
- **Multi-Repo/Shared Tasks**: When a task involves shared architecture, SEO registries, or UI components that apply across TopNetworks properties (UK, MX, BudgetBee), delegate the high-level planning to `topnetworks-sync-orchestrator`. Use this skill _only_ for the `topfinanzas-us-next` adaptation phase of that orchestrated task.
- **Invariants**: Keep the US codebase isolated regarding environment variables, GTM tags, and US compliance requirements, even when synchronizing shared components.

## 3. System Architecture & Module Map

- `app/`: Next.js App Router. Contains static pages, blog layouts, and interactive quizzes (e.g., `campaign-quiz-credit-card-recomender`).
- `app/financial-solutions/`: Contains bottom-of-funnel (BOFU) credit card and loan product pages.
- `app/api/`: Contains Route Handlers for integrations (SendGrid, ActiveCampaign, etc.).
- `components/`: UI components categorized into `ui/` (Shadcn), `layout/`, `forms/`, `steps/`, and `analytics/`.
- `lib/`: Core utilities including `logger.ts` (structured Pino logging), `seo.ts`, `seo-route-registry.ts`, `search-index.ts` (in-memory search), and data helpers.
- `content/`: MDX files containing the editorial content (TOFU/MOFU guides).
- `scripts/`: Operational scripts including `git-workflow.sh`, deploy helpers, and integration tests (e.g., ActiveCampaign, Brevo).
- `.github/instructions/`: Contains vital project rules and layout standards.

## 4. Operational Workflows & Invariants

### 4.1. Financial Solutions Pages (BOFU)

When creating or modifying credit card or personal loan product pages in `/app/financial-solutions/`:

- **Mandatory Standard**: You MUST adhere to `.github/instructions/FINANCIAL_SOLUTIONS_LAYOUT_STANDARD.instructions.md`.
- **Split Flow**: Every product requires TWO separate pages: a Benefits page (`{slug}/`) and a Requirements page (`{slug}-requirements/`).
- **Images**: Use `ResponsiveImage` on Benefits pages for hero images; use standard `Image` on Requirements pages.
- **Styling**: Do not add colored boxes, grids, or SVG icon bullets. Use circular badges with arrows for bullet points. Include `AIContentDisclaimer` before the footer.
- **Ads**: Ensure existing ad units remain intact in the specified layout.

### 4.2. Blog & Content Pipelines (TOFU/MOFU)

When adding, updating, or deleting blog posts or educational articles:

- Content is written in MDX and stored/configured properly.
- You MUST sync the `allPosts` array across all listing pages (e.g., `app/blog/page.tsx`, `app/personal-finance/page.tsx`, `app/financial-solutions/page.tsx`, search index).
- Consult `.github/instructions/BLOG_POST_INTEGRATION.instructions.md` and `lib/TOFU_BLOG_POST_GENERATION.instructions.md` for tone and structure.

### 4.3. Analytics and Advertising (AdZep)

- **GTM**: The US Google Tag Manager container (`GTM-5568TKCX`) is hardcoded in `app/layout.tsx`. Do NOT use third-party wrapper components for GTM.
- **AdZep Integration**: Never call `window.AdZepActivateAds()` manually. Rely on the `AdZepNavigationHandler` or `actview-spa-handler.tsx` to handle ad refreshes on SPA transitions.
- **UTM Tracking**: Follow the format `us_tf_[platform]_broad` for acquisition tracking.

### 4.4. Development & Deployment

- **Git Flow**: All local work occurs on `dev`. When ready, run `bash ./scripts/git-workflow.sh "<conventional commit message>"` to enforce TS strict mode, ESLint, and branch protection.
- **Logging**: Never use `console.log()` in production code. Use `import { logger } from "@/lib/logger";`.
- **Environment**: Never commit `.env` files or service account keys.
- **Dependencies**: Use `pnpm`. Strict TypeScript checking is enforced. Do not use `any` types without explicit reasoning.
