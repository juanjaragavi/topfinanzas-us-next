# TopFinanzas US — Copilot Instructions

**Next.js 15.4.10 + React 19 + TypeScript (strict) + Tailwind CSS**
US financial comparison site migrating from `https://us.topfinanzas.com`.
Full architecture details: see [`CLAUDE.md`](../CLAUDE.md).

## Build & Test

```bash
npm run dev      # Turbopack dev server → http://localhost:3040
npm run build    # Production build (NODE_OPTIONS=--max-old-space-size=4096)
npm run start    # Production server → port 3040
npm run lint     # ESLint
npm run format   # Prettier

# Integration tests
npm run test:brevo
npm run test:activecampaign
```

> Port is **3040**, not 3000.

## Git Workflow (Non-Negotiable)

```bash
bash scripts/git-workflow.sh "<conventional commit message>"
```

Never use raw `git add/commit/push`. The script enforces TypeScript type-check, ESLint, Conventional Commits format, and pushes to dev/main/backup branches automatically. Available flags: `--branch`, `--force`, `--verify-build`, `--dry-run`.

See [`.github/instructions/PUSH-AND-COMMIT.instructions.md`](./instructions/PUSH-AND-COMMIT.instructions.md).

## Architecture

| Area             | Path                                     | Notes                                                              |
| ---------------- | ---------------------------------------- | ------------------------------------------------------------------ |
| Pages            | `app/`                                   | App Router; Server Components by default                           |
| UI primitives    | `components/ui/`                         | Shadcn/UI + Radix                                                  |
| Analytics        | `components/analytics/`                  | GTM → TopAds load order is critical                                |
| Multi-step forms | `components/steps/`, `components/forms/` | React Hook Form + Zod                                              |
| API routes       | `app/api/*/route.ts`                     | contact, subscribe, sheets, search, activecampaign, posts, authors |
| Search index     | `lib/search-index.ts`                    | ~400 hardcoded items; requires redeploy on update                  |
| Constants        | `lib/constants.ts`                       | Brand tokens, UTM params                                           |
| Logger           | `lib/logger.ts`                          | Pino-based; pre-scoped exports below                               |
| Nav config       | `lib/navigation/`                        | Header/footer data                                                 |
| US market data   | `lib/us/`                                | US-specific financial data                                         |

**Content architecture**: all content (80+ financial-solutions pages, 60+ blog posts) is hardcoded in React page files — no CMS or database.

## Conventions That Differ from Common Practice

### 1. Logging — Never use `console.log`

```typescript
import { logger, apiLogger, formLogger, topadsLogger } from "@/lib/logger";
// Pre-scoped: logger (App), apiLogger, analyticsLogger, topadsLogger,
//             utmLogger, formLogger, validationLogger
// Or scope your own: createScopedLogger("MyFeature")
logger.info({ userId }, "User loaded");
```

Logging is auto-disabled in production unless `NEXT_PUBLIC_ENABLE_LOGGING=true`.

### 2. Components — function declarations, not arrow functions

```tsx
import { cn } from "@/lib/utils";
export default function MyCard({ className }: { className?: string }) {
  return <div className={cn("base", className)} />;
}
```

### 3. TopAds — SPA navigation is automatic

Do **not** manually call `window.topAds.spa()`. `TopAdsSPAHandler` in `app/layout.tsx` handles all route changes via `usePathname()`. Use `useTopAds()` hook only for explicit programmatic activation.

### 4. Financial Solutions pages — mandatory layout

ALL pages under `app/financial-solutions/` must follow the exact layout standard. **Any deviation breaks SEO and conversion tracking.**
See [`.github/instructions/FINANCIAL_SOLUTIONS_LAYOUT_STANDARD.instructions.md`](./instructions/FINANCIAL_SOLUTIONS_LAYOUT_STANDARD.instructions.md).
Reference template: `app/financial-solutions/citi-simplicity-card/`.

### 5. Blog posts — sync all `allPosts` arrays

Creating/updating/deleting a blog post requires updating `allPosts` in every blog listing `page.tsx`.
See [`.github/instructions/BLOG_POST_INTEGRATION.instructions.md`](./instructions/BLOG_POST_INTEGRATION.instructions.md).

### 6. Form multi-step navigation

Always call `window.scrollTo(0, 0)` when advancing steps.

### 7. US market compliance

- Currency: USD (`$`), dates: MM/DD/YYYY
- No outcome guarantees; use disclosures
- Avoid UK-only (FCA) or MX-only (CAT/CONDUSEF/PROFECO) language

## Key Files

| File                      | Purpose                                                      |
| ------------------------- | ------------------------------------------------------------ |
| `app/layout.tsx`          | Root layout — analytics load order (GTM before TopAds)       |
| `lib/logger.ts`           | Logging — import from here, never use `console.*`            |
| `lib/search-index.ts`     | In-memory search; update when adding new pages               |
| `scripts/git-workflow.sh` | Only way to commit/push                                      |
| `.github/instructions/`   | Project-specific rules — read before modifying content pages |

## Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:

- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:

- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:

- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:

- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:

```text
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.
