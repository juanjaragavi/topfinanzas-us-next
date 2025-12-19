---
description: "(US migration) Agent instructions for migrating the legacy WordPress site https://us.topfinanzas.com to this Next.js codebase. Focus: UI parity with legacy templates, US English localization, and US market adaptations."
tools:
  [
    "vscode",
    "execute",
    "read",
    "edit",
    "search",
    "web",
    "chrome-devtools/*",
    "context7/*",
    "agent",
    "github.vscode-pull-request-github/copilotCodingAgent",
    "github.vscode-pull-request-github/issue_fetch",
    "github.vscode-pull-request-github/suggest-fix",
    "github.vscode-pull-request-github/searchSyntax",
    "github.vscode-pull-request-github/doSearch",
    "github.vscode-pull-request-github/renderIssues",
    "github.vscode-pull-request-github/activePullRequest",
    "github.vscode-pull-request-github/openPullRequest",
    "todo",
  ]
---

# Next.js Project Configuration Rules for TopFinanzas US (Migration Agent)

## Project Overview

This Next.js project is the target for the **migration of the legacy WordPress site**:

- **Source (legacy)**: `https://us.topfinanzas.com` (WordPress)
- **Target (this repo)**: Next.js App Router + TypeScript

This repository was cloned from the recently migrated MX project (which itself came from the UK architecture), so some **hardcoded literals may still be mixed** (British English and Mexican Spanish). The legacy **US and MX templates share identical UI/UX**, which means the migration should prioritize **component reuse** and focus on **content localization + US market adaptations**.

## URL Rules (US)

- **Canonical base**: `https://us.topfinanzas.com`
- **Internal links**: Prefer relative links (`/path`) for in-app navigation.
- **Sitemap base**: Use `https://us.topfinanzas.com/` when constructing absolute sitemap URLs.

## Migration Workflow (Required)

When migrating a page from WordPress to Next.js:

1. **Match layout first**: Replicate structure and hierarchy (headings, sections, CTAs) to maintain UX parity.
2. **Extract US copy from the source**: Use `us.topfinanzas.com` as the authority for headings, microcopy, disclosures, and CTA text.
3. **Localize to US English (en-US)**:
   - Remove British spellings/terms (e.g., “authorised”, “whilst”) → US spellings (“authorized”, “while”).
   - Remove Mexico-specific Spanish copy unless the US source is Spanish (default: English).
4. **US market adaptation checks**:
   - Currency: `$` + USD context (avoid MXN/GBP assumptions).
   - Dates: prefer `MM/DD/YYYY` in UI unless the legacy US source uses another style.
   - Phone numbers: +1 formats where needed.
   - Regulatory language: avoid UK-only references (FCA) or Mexico-only references (CONDUSEF/PROFECO/CAT).
5. **Verify key interactions**: Ensure forms, routing, analytics hooks, and tracking behave the same after migration.

## Screenshot & Parity Guidance

When using screenshots for parity checks:

- Always capture screenshots from the **US WordPress source** (`us.topfinanzas.com`).
- Validate: hero content, CTA placement, headings, spacing, and any “trust” sections.
- If something is ambiguous, choose the simplest interpretation that preserves UX parity.

## System Architecture

### Core Technologies

- **Framework**: Next.js (App Router)
- **Language**: TypeScript with strict configuration
- **Styling**: Tailwind CSS + existing theme tokens
- **UI Components**: Shadcn/UI + Radix primitives
- **Analytics**: Google Tag Manager + AdZep integration

## US Market Specifics

### Localization

- **Language**: US English (en-US)
- **Currency**: USD (`$`)
- **Dates**: Prefer `MM/DD/YYYY`

### Compliance & Content Safety (General)

- Avoid UK-only regulatory language (FCA) and MX-only regulatory language (CONDUSEF/PROFECO/CAT).
- Avoid guaranteeing approvals, rates, or outcomes.
- Prefer disclosures that exist on the US WordPress source for that page.
