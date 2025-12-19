# Next.js Project Configuration Rules for TopFinanzas US

## Project Overview

This Next.js project is the target for migrating the legacy WordPress site `https://us.topfinanzas.com` to a modern Next.js App Router architecture. The codebase was cloned from the recently migrated MX version (which itself was derived from the UK architecture), so you may still find mixed hardcoded literals (British English and Mexican Spanish). The legacy US and MX templates share identical UI/UX, enabling direct component reuse with a focus on US English localization and US market adaptations.

## Production URL Rules

- **Legacy Source URL**: `https://us.topfinanzas.com` (WordPress)
- **Target URL**: `https://us.topfinanzas.com` (Next.js deployment target)
- **Internal Links**: Prefer relative links (`/path`) within the Next.js app.
- **Sitemap**: Use `https://us.topfinanzas.com/` as the base URL.

## System Architecture

### Core Technologies

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript with strict configuration
- **Styling**: Tailwind CSS with custom theme
- **UI Components**: Shadcn/UI with Radix UI primitives
- **State Management**: React hooks and context
- **MDX Support**: Next.js MDX for blog content
- **Analytics**: Google Tag Manager + AdZep integration

### Key Dependencies

- **UI/UX**: Radix UI, Framer Motion, Lucide React
- **Forms**: React Hook Form with Zod validation
- **Email**: SendGrid and Nodemailer
- **Data**: Google Sheets API integration
- **Performance**: Sharp for image optimization

## File Structure Guidelines

### Directory Organization

```markdown
├── app/ # Next.js App Router pages
│ ├── (routes)/ # Route groups
│ ├── api/ # API routes
│ ├── globals.css # Global styles
│ └── layout.tsx # Root layout
├── components/ # React components
│ ├── analytics/ # Analytics components
│ ├── forms/ # Form components
│ ├── layout/ # Layout components
│ ├── mdx/ # MDX components
│ ├── providers/ # Context providers
│ ├── steps/ # Multi-step components
│ └── ui/ # Shadcn/UI components
├── hooks/ # Custom React hooks
├── lib/ # Utility functions
│ ├── contexts/ # React contexts
│ ├── data/ # Data utilities
│ ├── navigation/ # Navigation utilities
│ └── utils/ # Helper functions
├── public/ # Static assets
└── content/ # MDX content
```

## Development Rules

### 1. TypeScript Configuration

- **Strict Mode**: Always enabled
- **Path Aliases**: Use `@/` for root imports
- **Type Safety**: No `any` types without explicit reasoning
- **Component Types**: Use proper React component typing

### 2. Component Development

- **Functional Components**: Use function declarations
- **Hooks**: Follow React hooks rules
- **Props**: Use TypeScript interfaces
- **Styling**: Use Tailwind classes with `cn()` utility
- **Accessibility**: Include proper ARIA attributes

### 3. UI Component Standards

- **Shadcn/UI**: Use existing components when possible
- **Consistency**: Maintain design system patterns
- **Responsive**: Mobile-first approach
- **Performance**: Optimize for Core Web Vitals

### 4. API Development

- **Route Handlers**: Use App Router API routes
- **Validation**: Implement Zod schemas
- **Error Handling**: Consistent error responses
- **CORS**: Proper configuration for external requests

## Code Quality Standards

### 1. ESLint Configuration

- **Next.js Rules**: Follow Next.js ESLint config
- **TypeScript**: Strict TypeScript rules
- **React**: React-specific linting rules
- **Accessibility**: a11y linting enabled

### 2. Code Formatting

- **Prettier**: Consistent code formatting
- **Line Length**: 80 characters max
- **Semicolons**: Always use semicolons
- **Quotes**: Double quotes for strings

### 3. Import Organization

```typescript
// 1. React imports
import React from "react";
import { useState } from "react";

// 2. Next.js imports
import Link from "next/link";
import Image from "next/image";

// 3. Third-party imports
import { Button } from "@/components/ui/button";

// 4. Local imports
import { cn } from "@/lib/utils";
import { CustomComponent } from "./custom-component";
```

## Performance Optimization

### 1. Image Optimization

- **Next.js Image**: Use `next/image` component
- **WebP Format**: Prioritize WebP images
- **Responsive Images**: Use responsive sizing
- **Lazy Loading**: Enable by default

### 2. Code Splitting

- **Dynamic Imports**: Use for heavy components
- **Route-Based**: Automatic with App Router
- **Component-Based**: Manual splitting when needed

### 3. Caching Strategy

- **Static Assets**: Long-term caching
- **API Routes**: Appropriate cache headers
- **Dynamic Content**: Strategic ISR usage

## US Market Specifics

### 1. Localization

- **Language**: US English (en-US)
- **Currency**: USD (`$`) formatting
- **Date Format**: Prefer `MM/DD/YYYY` unless the US source dictates otherwise
- **Address Format**: US address conventions (Street, City, State, ZIP)

### 2. Localization Strategy (MANDATORY)

- **Source of truth**: Copy and structure come from the legacy US WordPress pages.
- **Routes**: Use US-appropriate slugs; do not introduce `/mx/` prefixes.
- **Refactoring scope**: Any renaming operation must include a site-wide search-and-replace to update imports, internal links, and routing references.

### 2. Financial Compliance (General)

- Avoid UK-only (FCA) and MX-only (CONDUSEF/PROFECO/CAT) regulatory references.
- Do not promise approvals, guaranteed rates, or outcomes.
- Use disclosures as shown on the US legacy source pages.

### 3. Content Guidelines

- Prefer US terminology and examples.
- Use US contact formats where applicable (e.g., +1 phone numbers).


## Analytics Integration

### 1. Google Tag Manager

- **Container ID**: US GTM container (environment-specific)
- **Event Tracking**: US user interactions
- **Conversion Tracking**: US-specific goals

### 2. AdZep Integration

- **Script Loading**: Optimized loading strategy
- **Function Calls**: Automatic activation
- **Performance**: Minimal impact
- **Debugging**: Development tools available

## Security Guidelines

### 1. Authentication

- **API Keys**: Environment variables only
- **Session Management**: Secure cookie handling
- **CSRF Protection**: Built-in Next.js protection

### 2. Data Protection

- **Input Validation**: Zod schema validation
- **Sanitization**: XSS prevention
- **HTTPS**: Enforce in production
- **Headers**: Security headers configured

## Testing Strategy

### 1. Unit Testing

- **Components**: Test component behavior
- **Hooks**: Test custom hooks
- **Utilities**: Test utility functions
- **API Routes**: Test API endpoints

### 2. Integration Testing

- **Form Flows**: Test complete form journeys
- **Navigation**: Test routing behavior
- **Analytics**: Test tracking implementation

## Deployment Guidelines

### 1. Environment Configuration

- **Development**: Local development setup
- **Staging**: Pre-production testing
- **Production**: Live environment

### 2. Build Optimization

- **Bundle Analysis**: Monitor bundle size
- **Performance**: Core Web Vitals tracking
- **Error Monitoring**: Production error tracking

### 3. CDN Configuration

- **Static Assets**: CDN optimization
- **Image Delivery**: Optimized image serving
- **Cache Strategy**: Appropriate cache headers

## Accessibility Standards

### 1. WCAG Compliance

- **Level AA**: Target compliance level
- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: Proper ARIA labels (Spanish).
- **Color Contrast**: Sufficient contrast ratios

### 2. Component Accessibility

- **Form Labels**: Proper label associations
- **Button States**: Clear interaction states
- **Focus Management**: Logical tab order
- **Error Messages**: Accessible error handling

## Content Management

### 1. MDX Content

- **Blog Posts**: Markdown with React components
- **Static Pages**: MDX for content pages
- **Component Usage**: Embedded React components
- **SEO**: Proper metadata for all content

### 2. Blog Content Synchronization (MANDATORY)

- When performing any create, update, or delete operation on blog posts in the **Personal Finance** or **Financial Solutions** categories, you must immediately propagate the change to every `allPosts` array in the associated `page.tsx` files that power blog listing pages. Keep the content and listing data in lockstep.

### 3. SEO Optimization

- **Meta Tags**: Comprehensive metadata
- **Schema Markup**: Structured data
- **Open Graph**: Social media optimization
- **Sitemap**: Dynamic sitemap generation

## Git Workflow

### 1. Branch Strategy

- **Main Branch**: Production-ready code
- **Dev Branch**: Development integration
- **Feature Branches**: Individual features
- **Backup Branch**: Automated backups

### 2. Commit Guidelines

- **Conventional Commits**: Structured commit messages
- **Small Commits**: Atomic changes
- **Documentation**: Update docs with changes
- **Testing**: Test before committing

### 3. Automated Workflows

- **Git Script**: Automated multi-branch deployment
- **Pre-commit**: Code quality checks
- **CI/CD**: Automated testing and deployment

## Monitoring and Maintenance

### 1. Performance Monitoring

- **Core Web Vitals**: Continuous monitoring
- **Error Tracking**: Production error monitoring
- **User Analytics**: US user behavior tracking
- **Conversion Tracking**: Financial product conversions

### 2. Maintenance Tasks

- **Dependency Updates**: Regular updates
- **Security Patches**: Timely security updates
- **Performance Audits**: Regular performance reviews
- **Content Updates**: US market updates

## Best Practices Summary

### 1. Code Quality

- Use TypeScript strictly
- Follow Next.js conventions
- Maintain consistent styling
- Implement proper error handling

### 2. Performance

- Optimize images and assets
- Use appropriate caching strategies
- Minimize bundle size
- Monitor Core Web Vitals

### 3. User Experience

- Mobile-first design
- Accessibility compliance
- Fast loading times
- Intuitive navigation

### 4. US Market Focus

- Use US terminology
- Avoid UK/MX-only regulatory references unless explicitly needed
- Target US user behavior
- Optimize for US search intent

This configuration ensures the Next.js project maintains high code quality, performance, and US-market relevance while providing an excellent user experience for US financial service seekers.

## Push and Commit Guidelines

### Trigger

This procedure is initiated when the user issues the prompt "Push and commit our latest changes." following a successful development cycle.

#### Steps

1. **Initialize Commit Message File**:
   Clear the contents of the @/lib/documents/commit-message.txt file.

2. **Verify Codebase Status**:
   Query the current status of the codebase using your `git_status` MCP server with the following request body:

   ```json
   {
       "repo_path": "/Users/macbookpro/GitHub/topfinanzas-us-next"
   }
   ```

3. **Formulate Commit Message**:
   Populate the @/lib/documents/commit-message.txt file with a message that accurately describes the latest modifications.

4. **Execute Workflow Script**:
   Run the `git workflow` automation script using the command:

   ```bash
   bash ./scripts/git-workflow.sh
   ```
