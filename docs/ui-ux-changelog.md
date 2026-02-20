# UI/UX Changelog

This document reflects the current state of the application's UI, UX, and architecture following the migration to the Next.js App Router and the implementation of a modern design system.

## Component Changes

- **Shadcn/UI & Radix Primitives**: Replaced custom UI components with robust, accessible pieces from Shadcn/UI and Radix, including `Accordion`, `Carousel` (via `embla-carousel-react`), `Drawer`, `Alert Dialog`, and `Navigation Menu`.
- **Analytics & Advertising**: Integrated `TopAds` and `TopAdsSPAHandler` for non-intrusive, SPA-aware ad serving. Added `GoogleAdManager` and `AnalyticsValidationPanel` to the component tree. A special `AdAccessibilityFix` is used to prevent external ad scripts from improperly applying `aria-hidden` attributes to the body.
- **Forms**: Upgraded form handling to rely fully on `react-hook-form` paired with `zod` schema validation for reliable user inputs (especially multi-step forms).

## Layout and Routing

- **Next.js App Router**: Complete migration to the `app/` directory paradigm.
- **Structural Providers**: Global layouts now wrap the application in robust context providers: `SiteWrapper`, `NavigationProvider`, and `MobileMenuProvider`.
- **Routing**: Adopted localized US English routing conventions, supporting routes like `/about-us`, `contact-us`, `/personal-finance`, and over 80 specific product pages under `/financial-solutions/`.

## Design System Updates

- **Typography**: Local loading of Poppins font configures a fast, non-blocking primary font face (`var(--font-poppins)`).
- **Brand Colors**: Updated Tailwind configuration to define a primary green palette (`DEFAULT: #4ADE80`, `dark: #22C55E`) and a secondary indigo/purple (`DEFAULT: #4F46E5`, `dark: #4338CA`).
- **Animations**: Introduced custom keyframes via `tailwindcss-animate` that support modern micro-interactions (`fadeIn`, `slideUp`, `slideDown`).

## New Dependencies

- `@radix-ui/*`: The comprehensive suite of UI primitives for building accessible standard components.
- `lucide-react`: Lightweight vector icon replacement.
- `framer-motion`: Used throughout for complex transition logic and step-animations.
- `recharts`: Chart rendering for financial data visualization.
- `embla-carousel-react`: Carousel handler for components integrating swipe logic.
- `sonner`: Standardized toast notifications.

## Known Issues

- External ad scripts (from various ad networks) attempt to override core HTML/body attributes, currently requiring the `AdAccessibilityFix` component to actively monitor and correct `aria-hidden` states globally.
- Ensure any additions to the `financial-solutions` UI rely entirely on layout standards per `FINANCIAL_SOLUTIONS_LAYOUT_STANDARD.instructions.md`. No ad-hoc colored background boxes are allowed in these directories.
