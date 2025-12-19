# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

UK TopFinanzas is a Next.js 14+ financial services comparison website for the UK market, built with TypeScript and Tailwind CSS. The site specializes in credit card and personal loan comparison tools with sophisticated multi-step forms and comprehensive analytics tracking.

## Common Development Commands

### Development & Build

```bash
npm run dev      # Start development server on port 3040 with Turbo
npm run build    # Production build
npm run start    # Start production server on port 3040
npm run lint     # Run ESLint
```

### Git Workflow (CRITICAL)

**NEVER commit directly** - always use the automated workflow script:

```bash
bash ./scripts/git-workflow.sh  # Handles commits, merges to main/backup branches
```

- Reads commit message from `/lib/documents/commit-message.txt`
- Automatically handles merge conflicts
- Synchronizes dev/main/backup branches

### Branch Synchronization

```bash
bash ./scripts/sync-branches.sh  # Sync all branches with main
```

### Production Deployment (on server)

```bash
sudo bash ./scripts/deploy_update.sh  # Pull, build, and restart with PM2
```

### Cookie Validation Control

```bash
bash ./scripts/cookie-validation-control.sh {config|disable|enable|test|deploy}
```

## Architecture & Project Structure

### Core Technologies

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS with mobile-first approach
- **UI Components**: Shadcn/UI + Radix UI primitives
- **Forms**: React Hook Form + Zod validation
- **Analytics**: GTM + AdZep dual tracking system
- **Content**: MDX support for blog posts

### Directory Structure

```markdown
/app # Next.js App Router pages and API routes
/api # API endpoints (sheets, subscribe, search, etc.)
/blog # Blog pages and categories
/credit-card-recommender-p[1-3] # Multi-step form pages
/components
/analytics # AdZep and GTM tracking components
/forms # Form components with validation
/steps # Multi-step form step components (step1, step2, step3)
/ui # Shadcn/UI components
/layout # Page layouts (blog-layout, etc.)
/mdx # MDX rendering components
/lib
/documents # commit-message.txt for git workflow
/ads # Local advertisement management
/utils # Utility functions (cn, getTextClass, etc.)
/constants.ts # App-wide constants and strings
/content # MDX content files
/scripts # Deployment and workflow automation scripts
/public # Static assets (images, fonts, manifests)
```

### Key System Components

#### Analytics Layer (`/components/analytics/`)

- **AdZep Integration**: Automatically activates on navigation
- **GTM**: Loads before AdZep in layout
- **Development Tools**: AdZepTest component for testing
- **Usage**: `useAdZep()` hook for programmatic activation

#### Multi-Step Forms (`/components/steps/`)

- Three-step credit application flow
- State management through `formData` prop
- Progress indicators and validation
- Auto-scrolls to top on step changes

#### API Integration (`/app/api/`)

- **Google Sheets**: Form data collection endpoint
- **Email**: SendGrid integration for notifications
- **Search**: Vertex AI search functionality
- **Newsletter**: Kit.com subscription management

### Environment Configuration

#### Required Environment Variables

```bash
# API Keys (stored in .env.production or .env.local)
GOOGLE_SERVICE_ACCOUNT_EMAIL    # Google Sheets service account
GOOGLE_PRIVATE_KEY              # Google Sheets authentication
GOOGLE_SHEET_ID                 # Target spreadsheet ID
SENDGRID_API_KEY               # Email service
SENDER_EMAIL                   # System email sender
RECIPIENT_EMAIL                # Form submission recipient
KIT_API_KEY        # Kit.com newsletter

# Cookie Validation
NEXT_PUBLIC_COOKIE_VALIDATION_ENABLED  # true/false
NEXT_PUBLIC_COOKIE_SHORT_EXPIRATION    # days (default: 1)
```

**Production Note**: Environment files on server stored at `/opt/app/` with restricted permissions.

## UK Market Specific Requirements

### Compliance & Localization

- **Currency**: Always GBP (£) formatting with proper thousand separators
- **Date Format**: DD/MM/YYYY (UK standard)
- **Language**: en-GB localization
- **Regulatory**: FCA compliance for financial products
- **APR Display**: "24.9% APR (variable)" format
- **Required Terms**: "representative example" where regulations require

### Content Guidelines

- Include regulatory disclaimers for financial products
- Use UK-specific financial terminology
- Comply with FCA advertising standards
- Proper UK address and phone number formats
- When creating, updating, or deleting blog posts in the **Personal Finance** or **Financial Solutions** categories, immediately synchronize the corresponding entries in every `allPosts` array within the blog listing `page.tsx` files so the listings stay accurate.

## Development Patterns

### Component Pattern

```tsx
// Standard component structure with @/ imports
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function ComponentName({ className, ...props }: ComponentProps) {
  return <div className={cn("base-classes", className)} {...props} />;
}
```

### Shadcn/UI Forwarded Ref Pattern

```tsx
const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
  ({ className, ...props }, ref) => (
    <div className={cn("base-styles", className)} ref={ref} {...props} />
  ),
);
Component.displayName = "Component";
```

### Analytics Tracking

```tsx
// DO NOT manually call window.AdZepActivateAds()
// AdZep auto-activates via AdZepNavigationHandler

// For programmatic activation only when needed:
import { useAdZep } from "@/components/analytics/adzep-trigger";
const { activateAds } = useAdZep();
```

## Performance Optimizations

### Next.js Configuration

- Standalone output mode for production
- Image optimization with Next/Image component
- Local font loading (Poppins) to avoid external requests
- Aggressive caching headers for static assets (1 year TTL)
- Turbopack enabled for faster development builds

### Critical Performance Settings

- Port 3040 for both development and production
- PM2 process manager for production (`uk-topfinanzas-com` process name)
- Webpack build workers and parallel compilation enabled
- CSS optimization and package import optimization

## Testing & Debugging

### Analytics Testing

```bash
# Development mode includes comprehensive logging
# Check browser console for:
# - '[QUIZ] Cookie validation: [enabled/disabled]'
# - AdZep activation logs
# - GTM event tracking
```

### Form Testing

- Multi-step forms validate on each step
- Check `/app/api/sheets/` for Google Sheets integration
- Form data persists across steps via state management

## Common Issues & Solutions

1. **Port 3040 in use**: Kill existing process or use different port
2. **Git merge conflicts**: Script automatically resolves by keeping current changes
3. **AdZep not loading**: Check script order in layout.tsx (GTM must load first)
4. **Form submission failing**: Verify Google Sheets API credentials
5. **Cookie validation issues**: Use cookie-validation-control.sh to debug

## Deployment Checklist

1. Update commit message in `/lib/documents/commit-message.txt`
2. Run `bash ./scripts/git-workflow.sh` (never commit directly)
3. Verify environment variables in `.env.production`
4. On server: `sudo bash ./scripts/deploy_update.sh`
5. PM2 will automatically restart the application
6. Monitor logs: `pm2 logs uk-topfinanzas-com`

## Additional Resources

- **Copilot Instructions**: `.github/copilot-instructions.md` contains detailed architecture docs
- **Component Docs**: `components/README.md` and `components/ads/README.md`
- **Main README**: Project overview and basic setup instructions
