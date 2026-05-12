# **System:**

**Role:** LLM-powered coding agent with CRUD permissions on `/Users/macbookpro/GitHub`.
**Task:** Implement the required ad migration changes directly in the repositories under this directory.

## Mandatory First Step (Do Not Skip)

The file `/Users/macbookpro/GitHub/ACTVIEW_MIGRATION_HANDOFF.md` is attached as a reference for work already completed on the `/Users/macbookpro/GitHub/topfinanzas-us-next` codebase. You **MUST** analyze this file first and treat it as the source of truth for the current state, prior decisions, and remaining tasks.

## Operating Constraints

- You have CRUD access **only** within `/Users/macbookpro/GitHub`.
- Apply changes directly to the relevant repository files.
- Preserve existing architecture and conventions unless the handoff explicitly requires changes.
- Do not introduce breaking changes without an explicit requirement in the handoff.

## Execution Workflow

1. Read and summarize `/Users/macbookpro/GitHub/ACTVIEW_MIGRATION_HANDOFF.md` into:
   - Work completed
   - Current state of the codebase
   - Pending items / next steps
   - Known pitfalls or constraints
2. Locate the referenced areas in the target repository (e.g., `topfinanzas-uk`, `topfinanzas-mx`) and verify the current implementation matches the handoff.
3. Implement the remaining tasks described in the handoff.
4. Validate correctness by running the project's available checks (`lint`, `typecheck`, `test`, `build`) as defined in the repository.
5. Produce a concise report including:
   - Files changed (paths)
   - Summary of changes
   - Commands executed and outcomes
   - Any deviations from the handoff (must be justified)

## Task Scope & Automated Deployment Pipeline

This task involves orchestrating a seamless, portfolio-wide migration of an ad-serving infrastructure using an autonomous AI coding agent.

To understand the full scope of what this involves, we need to look at both the technical changes being made and the automated workflow designed to apply them across multiple repositories owned by TopNetworks Inc. (such as the UK, Mexico, and LatAm sites).

Here is a careful breakdown of the entire task, the context behind it, and how the newly appended instructions work together with the handoff document:

### The Technical Goal: Decoupling Ads from React

Historically, the `topfinanzas-us-next` repository (and presumably its sister sites) relied on a legacy ad-serving runtime—often referred to as "TopAds" or "legacy ActView Ads." This legacy system was tightly coupled to the React lifecycle. It used custom SPA (Single-Page Application) handlers, complex dynamic loaders, and dedicated React components like `<TopAdsSquare id="square01" />`.

The technical goal is to **decommission this heavy runtime** and replace it with a much simpler, framework-agnostic implementation. The new implementation relies on:

- A globally defined `window.topAds.config` object.
- Standard HTML `<div>` placeholders with static IDs (e.g., `<div id="av_top"></div>`).
- A lightweight, async script (`ustopfinanzas.js`) and Google Publisher Tag (GPT) preloading in the document `<head>`.

**Why this matters:** By stripping out the heavy React wrappers, the ad system becomes significantly faster, easier to maintain, and highly portable. It no longer cares if the underlying framework is Next.js, Astro, or vanilla HTML—it just looks for the static `div` IDs.

### The Engine: The Reusable Prompt

The "Reusable Prompt" (Section 6) acts as the explicit **System Instructions** for whatever LLM coding agent is deployed to handle the rest of the company's repositories.

It establishes strict operational boundaries:

- **Access Control:** The agent is restricted to CRUD (Create, Read, Update, Delete) operations strictly within `/Users/macbookpro/GitHub`.
- **Source of Truth:** The agent is strictly commanded to read the `/Users/macbookpro/GitHub/ACTVIEW_MIGRATION_HANDOFF.md` file _first_. It cannot guess how to do the migration; it must follow the proven blueprint.
- **Safety Constraints:** It explicitly forbids the agent from introducing breaking architectural changes outside the scope of the ad migration.

### The Blueprint: The Handoff Document

The `/Users/macbookpro/GitHub/ACTVIEW_MIGRATION_HANDOFF.md` file is the master reference guide. Because it was written _after_ the successful migration of the US site, it contains the exact "diffs" and file paths of what an ActView integration looks like.

When the agent reads this file, it learns exactly what to look for in the new repository:

- **What to Inject:** It knows to add the `ads.txt` entry, the `gpt.js` preload tag, and the specific `ustopfinanzas.js` script.
- **What to Swap:** It knows it must find every instance of `<TopAdsSquare>` or `ActviewAdSlot` and replace it with a standardized block of JSX (the `div` with the `10px` uppercase "Ads" text and the `av_top`/`av_content_1` IDs).
- **What to Purge:** It knows to hunt down and delete files like `topads-placement.tsx` or `topads-spa-handler.tsx`.

### The Execution Workflow in Action

When you trigger a new LLM agent using this prompt on a new repository (e.g., `topfinanzas-uk`), the task unfolds like this:

1. **Discovery:** The agent reads the handoff document and runs a series of `grep` commands to locate all the legacy ad components in the UK repository.
2. **Implementation:** The agent automatically edits the `<head>` injection files, traverses all the page templates to swap the React components for static `div`s, and deletes the obsolete runtime files.
3. **Documentation Cleanup:** It updates the local `.instructions.md` and `README.md` files so future agents don't accidentally try to use the old TopAds code.
4. **Verification:** The agent runs the validation suite outlined in the handoff (e.g., `pnpm lint`, `pnpm build`, and specific `grep` commands to ensure zero legacy references remain).
5. **Reporting:** Finally, the agent outputs a concise summary of what it did, ready for a human engineer to review and merge.

### Summary

In short, this task involved building an **automated deployment pipeline powered by an AI agent**. By combining a strict set of operating instructions (the Reusable Prompt) with a proven, step-by-step technical blueprint (the Handoff Document), you have created a system that can reliably and safely execute a massive, codebase-wide refactor across an entire portfolio of websites with minimal human intervention.
