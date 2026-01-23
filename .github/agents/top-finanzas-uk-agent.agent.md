---
description: "'top-finanzas-uk-agent' is an advanced world-class LLM-powered Coding Agent, which is the developer of the Next.js 15+ App Router financial comparison site for the UK market Top Finance UK, built with TypeScript and Tailwind CSS and located in the `/Users/macbookpro/GitHub/uk-topfinanzas-com/` directory. It features multi-step forms, comprehensive analytics tracking with AdZep and GTM, and integrates with Google Sheets API for data collection. The project adheres to UK financial regulations and FCA compliance."
tools:
  [
    "edit",
    "runNotebooks",
    "search",
    "new",
    "runCommands",
    "runTasks",
    "chrome-devtools/*",
    "context7/*",
    "Copilot Container Tools/*",
    "usages",
    "vscodeAPI",
    "problems",
    "changes",
    "testFailure",
    "openSimpleBrowser",
    "fetch",
    "githubRepo",
    "extensions",
    "todos",
    "runSubagent",
    "runTests",
  ]
---

# UK TopFinanzas Copilot Instructions

## Project Architecture

This is a **Next.js 15+ App Router** financial comparison site for the UK market, built with TypeScript and Tailwind CSS. The architecture centers around credit card/loan comparison tools with multi-step forms and comprehensive analytics tracking.

### Key System Components

- **Analytics Layer**: Dual analytics with GTM + AdZep integration at `/components/analytics/`
- **UI System**: Shadcn/UI + Radix primitives with custom variants in `/components/ui/`
- **Form Architecture**: Multi-step forms using React Hook Form + Zod in `/components/forms/` and `/components/steps/`
- **Content System**: MDX support for blog content in `/content/` with custom components
- **API Integration**: Google Sheets API for data collection at `/app/api/sheets/`
- **Environment Management**: Multiple env files (`.env`, `.env.production`, `.env.local`) with strict production controls

### Project-Specific Patterns

#### 1. Component Organization

```tsx
// Always use this import pattern with @/ alias
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Function component declarations (not arrow functions)
export default function ComponentName({ prop }: ComponentProps) {
  return <div className={cn("base-classes", className)} />;
}
```

#### 2. Analytics Integration

The project has sophisticated analytics with **automatic AdZep activation**:

- Script loads in `app/layout.tsx` with `AdZep` component
- Auto-activates on navigation via `AdZepNavigationHandler`
- Manual triggers available via `useAdZep()` hook
- Development testing panel with `AdZepTest` component

**Navigation Tracking**: AdZep integrates with Next.js navigation system properly:

- Router changes trigger AdZep activation using `usePathname()` hook
- Back/forward navigation is handled via `popstate` events
- Client-side navigation is properly tracked on every route change
- Initial page load activation is handled separately

#### 3. Multi-Step Form Pattern

```tsx
// Located in /components/steps/step{1,2,3}.tsx
export default function Step1({ formData, updateFormData }: StepProps) {
  return (
    <div className="space-y-4">
      <ProgressIndicator step={1} />
      <OptionButton /> {/* Custom UI component */}
    </div>
  );
}
```

#### 4. UK Market Specifics

- **Currency**: Always GBP (£) formatting
- **Compliance**: FCA regulatory requirements in financial content
- **Localization**: UK English (en-GB), DD/MM/YYYY dates
- **Business Context**: Credit cards, personal loans, financial guidance

## Development Workflows

### Build & Dev Commands

```bash
npm run dev      # Development server on port 3030 with Turbo
npm run build    # Production build
npm run start    # Production server on port 3030
```

### Git Workflow (Critical)

Use the **automated git workflow script** instead of manual commands:

```bash
# ALWAYS use this for commits/deployments
bash ./scripts/git-workflow.sh
```

- Auto-commits across dev/main/backup branches
- Reads commit message from `/lib/documents/commit-message.txt`
- Handles merge conflicts automatically
- Never commit directly without this script

### Environment Setup

- Copy `.env.example` to `.env.production`
- Production environment files stored in `/opt/app/` with strict permissions
- Google Sheets API requires `GOOGLE_SERVICE_ACCOUNT_EMAIL` and `GOOGLE_PRIVATE_KEY`
- AdZep integration requires UK-specific script URL
- Kit.com API integration for newsletter subscriptions
- Multiple environment files in use: `.env`, `.env.production`, `.env.local`

## Code Quality Standards

### TypeScript Rules

- **Strict mode enabled** - no `any` types without justification
- Use proper React component typing with interfaces
- Path aliases: `@/` for root imports

### UI Component Patterns

```tsx
// Shadcn/UI forwarded ref pattern
const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
  ({ className, ...props }, ref) => (
    <div className={cn("base-styles", className)} ref={ref} {...props} />
  ),
);
Component.displayName = "Component";
```

### Styling Conventions

- **Mobile-first** Tailwind approach
- Use `cn()` utility for class merging
- Custom text sizing with `getTextClass()` utility
- Consistent spacing and color tokens
- Local font loading (Poppins) to avoid external requests

## API Architecture

### Google Sheets Integration

```typescript
// Pattern in /app/api/sheets/route.ts
export async function POST(req: Request) {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  // Sheet handling logic...
}
```

### API Route Patterns

- All API routes use Next.js 14 App Router pattern: `app/api/*/route.ts`
- Environment variables for external integrations (Google Sheets, Kit.com, SendGrid)
- Consistent error handling and response formatting
- CORS configuration in `cors-config.json` for cross-origin requests

## Analytics & Performance

### AdZep Integration (Critical)

- **Never manually call** `window.AdZepActivateAds()` - handled automatically
- Use `useAdZep()` hook for programmatic activation only when needed
- Development mode includes comprehensive logging and test panel
- Script loads with `strategy="afterInteractive"` for performance

### Performance Monitoring

- Uses `window.performance.mark()` for custom metrics
- Local font loading (Poppins) to avoid external requests
- Image optimization with Next.js `Image` component

## Content & SEO

### MDX Content Structure

- Blog posts in `/content/` with frontmatter
- Custom MDX components for financial content
- UK regulatory compliance in financial product descriptions

### SEO Pattern

```typescript
// In page.tsx files
export const metadata: Metadata = {
  title: "UK-specific title",
  description: "FCA-compliant description",
  // UK-specific metadata
};
```

## Common Gotchas

1. **Port Configuration**: Development runs on port 3030, not 3000
2. **Analytics Order**: GTM loads before AdZep in layout
3. **Form Navigation**: Always call `window.scrollTo(0, 0)` on step changes
4. **UK Compliance**: Include regulatory disclaimers for financial products
5. **Git Workflow**: NEVER bypass the automated script for commits

## File Naming Conventions

- Components: `kebab-case.tsx` (e.g., `credit-card-form.tsx`)
- API routes: `route.ts` in app router structure
- Utilities: Descriptive names in `/lib/utils/`
- Constants: Centralized in `/lib/constants.ts`

This project prioritizes UK financial compliance, performance optimization, and comprehensive analytics tracking. Always consider FCA regulations when working with financial content.

## Instruction Files System

The project uses a comprehensive instruction system at `.github/instructions/` with specific rules for different scenarios:

- **`project-rules.instructions.md`**: Core project architecture and development standards
- **`ADZEP_IMPLEMENTATION.instructions.md`**: Complete AdZep analytics integration guide
- **`BLOG_POST_INTEGRATION.instructions.md`**: Blog content integration workflow
- **`PUSH-AND-COMMIT.instructions.md`**: Automated git workflow procedures

**Critical**: Always check and follow the instruction files before making changes. These contain project-specific implementation details and workflows that override general best practices.
