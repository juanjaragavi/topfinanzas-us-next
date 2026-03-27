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

See [`.github/instructions/PUSH-AND-COMMIT.instructions.md`](.github/instructions/PUSH-AND-COMMIT.instructions.md).

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
See [`.github/instructions/FINANCIAL_SOLUTIONS_LAYOUT_STANDARD.instructions.md`](.github/instructions/FINANCIAL_SOLUTIONS_LAYOUT_STANDARD.instructions.md).
Reference template: `app/financial-solutions/citi-simplicity-card/`.

### 5. Blog posts — sync all `allPosts` arrays

Creating/updating/deleting a blog post requires updating `allPosts` in every blog listing `page.tsx`.
See [`.github/instructions/BLOG_POST_INTEGRATION.instructions.md`](.github/instructions/BLOG_POST_INTEGRATION.instructions.md).

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
