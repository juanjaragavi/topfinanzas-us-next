---
name: topfinanzas-us-next-agent
description: Master skill for developing, maintaining, and understanding the TopFinanzas US codebase (us.topfinanzas.com). Captures the Next.js App Router architecture, strict US-specific conventions, monetization integrations, content update workflows, and Git deployment rules required to safely modify this property. Must be used when answering codebase queries or performing structural changes on topfinanzas-us-next.
---

# TopFinanzas US Codebase Guide

This skill encapsulates the full operational and architectural knowledge required to safely work within the `topfinanzas-us-next` repository. This repository powers `us.topfinanzas.com`, TopNetworks Inc.'s flagship US performance publishing and financial comparison platform.

## 1. TopNetworks Inc. Ecosystem & Orchestrator Linkage

TopFinanzas US is one node in the broader TopNetworks Inc. digital arbitrage portfolio, whose goal is to maintain a positive spread between paid traffic acquisition (Meta/Google Ads) and session monetization (CPA, AdZep, TopAds).

**Explicit Linkage to `topnetworks-sync-orchestrator`:**
This codebase is governed by the sync patterns established in `.agents/skills/topnetworks-sync-orchestrator/SKILL.md`. When making changes that involve cross-market shared components (UI components, generic hooks, layouts), refer to the orchestrator to decide if the change should be propagated to other repositories (e.g., UK, MX, BudgetBee).

- **Local Dev Loop**: All active feature development in this repo happens on the `dev` branch.
- **Deployment via Orchestrator**: You must prepare for deployment using `bash scripts/git-workflow.sh "<message>"` (which simultaneously commits, pushes, and synchronizes `dev` to `main`). After pushing, rely on the remote `deploy_update.sh` on the Ubuntu production server (where the app lives at `/var/www/html/topfinanzas-us-next`) to apply the changes.

## 2. System Architecture & Module Map

The project is built on **Next.js 15.4.10** with **React 19**, **TypeScript** (Strict), and **Tailwind CSS**. It is configured for a Vercel/Docker standalone output.

- **`/app/`**: Standard App Router hierarchy. Server Components are default. Port is **`3040`** locally.
- **`/app/financial-solutions/`**: Core monetization pages. Contains 80+ hardcoded React component pages for individual credit cards and personal loans.
- **`/app/blog/` & `/app/personal-finance/`**: Educational content (TOFU/MOFU) based on hardcoded arrays of metadata.
- **`/components/`**:
  - `ui/`: Radix primitives and Shadcn/UI elements.
  - `analytics/`: GTM, UTM trackers, and the proprietary `actview.tsx` setup.
  - `steps/` & `forms/`: Multi-step flows using `react-hook-form` and `zod`.
- **`/lib/`**: Utilities, search index, Pino logger (`logger.ts`), US-specific data (`us/`), and `constants.ts`.
- **`.github/instructions/`**: Project-specific rule documents overrides. (Read these before executing changes).

## 3. Data Flows & Key Integrations

This project does not use an external database or CMS for its core content.

- **Content**: 100% hardcoded in React files. Images are served from the external `media.topfinanzas.com` CDN.
- **Search System**: Powered by `/lib/search-index.ts`, containing an in-memory index of ~400 items. **Must be manually updated when new pages are added.**
- **Analytics & Ads (CRITICAL)**:
  - **Google Tag Manager**: Loads before AdZep in `app/layout.tsx`.
  - **ActView Ads / AdZep**: Proprietary programmatic display network auto-activated via `ActView AdsSPAHandler` calling `window.topAds.spa()` on route changes. **Do not manually call `window.topAds.spa()`**. Use the `useActView Ads()` hook only for programmatic activation.
- **API Routes (`/app/api/`)**:
  - `/api/contact` & `/api/subscribe`: Integrates with Brevo (Sendinblue). Captures UTM parameters from cookies and forwards them.
  - `/api/sheets`: Posts lead data to Google Sheets API using service account credentials.

## 4. Setup, Operational Workflows & Deployments

- **Local Dev Engine**: Run via `pnpm dev` which spawns Turbopack on `http://localhost:3040`.
- **Environment Variables**: Managed via `.env.production` on the production server (restricted permissions `/opt/app/`). `GOOGLE_SERVICE_ACCOUNT_EMAIL`, `GOOGLE_PRIVATE_KEY`, and Brevo keys are mandatory for full testing.
- See Section 6 for strict deployment, Git workflow, and logging constraints.

## 5. Common Change Recipes & Safe Modifications

### Adding a New Financial Product

1. Duplicate a template folder (e.g., `app/financial-solutions/citi-simplicity-card-benefits` and `-requirements`).
2. Adhere STRICTLY to the layout standard `.github/instructions/FINANCIAL_SOLUTIONS_LAYOUT_STANDARD.instructions.md` (which requires separating benefits/requirements pages, precise element ordering, avoiding colored grids/lists, and strict ad unit placement).
3. Update `lib/search-index.ts` with the new product metadata so the search bar can find it.
4. Ensure image references point to `https://media.topfinanzas.com`.

### Creating a New Blog Post

1. Add the component page to the appropriate path under `/app/blog/` or `/app/personal-finance/`.
2. Sync the new post's metadata object across **all `allPosts` arrays** located in the various blog `page.tsx` listing components. Reference `.github/instructions/BLOG_POST_INTEGRATION.instructions.md`.
3. Re-index the content in `/lib/search-index.ts`.

### Modifying Multi-step Forms

When working in `/components/steps/` or `/components/forms/`, ensure that advancing a step triggers `window.scrollTo(0, 0)`.

## 6. Project-Specific Conventions & Guardrails

To manage complexity and prevent errors, follow these prioritized constraints:

### 🔴 CRITICAL INVARIANTS (Never Violate)

- **Git & Deployment**: You **must** use `bash scripts/git-workflow.sh "<message>"` as your sole tool for commits and pushes. Never run raw `git commit` or `git push`. This script handles checks, formatting, and branch synchronization.
- **Analytics Load Order**: Google Tag Manager must load before AdZep in `app/layout.tsx`. Do not manually call `window.topAds.spa()`.
- **GTM Independence**: The US site exclusively uses Container ID `GTM-5568TKCX` hardcoded in `app/layout.tsx`. Do not extract this into a generalized cross-market component.
- **Financial Solutions UI Constraints**: You must strictly separate benefits and requirements pages, follow exact element ordering, use specific image components, avoid colored background boxes/grids, and place specific ad units in exact spots.
- **Logging Rule**: NEVER use `console.log`. Use `logger` imported from `@/lib/logger` (Pino implementation).

### 🟡 HIGH PRIORITY (Market Compliance)

- **Currency & Dates**: Must be USD (`$`) and use `MM/DD/YYYY`.
- **Regulatory Tone**: Avoid UK-specific terms (FCA) or Mexico-specific terms (CAT, CONDUSEF, PROFECO). Never guarantee loan approvals or interest rates; use appropriate disclosures.

### 🟢 RECOMMENDED PATTERNS (Code Style)

- **Component Declarations**: Use standard `function ComponentName() { ... }` or `React.forwardRef` rather than arrow functions for top-level component exports.
- **Forms**: When working in `/components/steps/` or `/components/forms/`, ensure that advancing a step triggers `window.scrollTo(0, 0)`.
