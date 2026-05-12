# Logger Migration Guide

## Overview

This project has migrated from `console.log/warn/error` to a professional logging solution using **Pino** to address security, performance, and maintainability concerns.

## Why We Migrated

### Problems with console.log in Production

Based on research (including Midudev's analysis: <https://youtu.be/GvqZuVgRKWw?si=o4Wh3rkjxe5MvVQE>):

1. **Security Risks**
   - Exposes sensitive data in browser DevTools
   - Leaks API keys, tokens, and user information
   - Reveals business logic and application structure

2. **Performance Issues**
   - Synchronous and blocks main thread
   - Causes significant slowdown when DevTools is open
   - Memory leaks from circular references
   - Large object serialization impacts performance

3. **Maintainability Problems**
   - No log levels or filtering
   - Cannot be disabled without code changes
   - No structured logging
   - No centralized monitoring capabilities

## New Logging System

### Features

- **Environment-Aware**: Automatically disabled in production
- **Structured Logging**: JSON format with metadata
- **Log Levels**: trace, debug, info, warn, error, fatal
- **Type-Safe**: Full TypeScript support
- **Universal**: Works in both browser and Node.js
- **Zero Overhead**: No-op when disabled
- **Performance**: Pino is the fastest Node.js logger

### Installation

```bash
pnpm add pino pino-pretty
```

## Usage

### Basic Import

```typescript
import { logger } from "@/lib/logger";
```

### Log Levels

```typescript
// Trace - very detailed debugging
logger.trace("Detailed trace info", { variable: value });

// Debug - debugging information
logger.debug("Debug information", { state: currentState });

// Info - general information
logger.info("User logged in", { userId: "123" });

// Warn - warning messages
logger.warn("API rate limit approaching", { remaining: 10 });

// Error - error conditions
logger.error("Failed to save data", error, { userId: "123" });

// Fatal - critical errors
logger.fatal("Database connection lost", error);
```

### Scoped Loggers

Use pre-configured loggers for specific modules:

```typescript
import {
  analyticsLogger,
  apiLogger,
  adzepLogger,
  utmLogger,
  formLogger,
  validationLogger,
} from "@/lib/logger";

// In analytics components
analyticsLogger.info("Event tracked", { event: "page_view" });

// In API routes
apiLogger.error("API request failed", error, { endpoint: "/api/data" });

// In AdZep components
adzepLogger.debug("Activation triggered", { pathname });

// In UTM components
utmLogger.warn("Invalid UTM parameter", { param: "utm_source" });

// In form components
formLogger.info("Form submitted", { formId: "contact-form" });

// In validation
validationLogger.error("Validation failed", { field: "email" });
```

### Create Custom Scoped Loggers

```typescript
import { createScopedLogger } from "@/lib/logger";

const paymentLogger = createScopedLogger("Payment");
paymentLogger.info("Payment processed", { amount: 100, currency: "GBP" });
```

### Context and Metadata

Always include relevant context:

```typescript
// ✅ Good - with context
logger.info("User action completed", {
  userId: user.id,
  action: "update_profile",
  timestamp: Date.now(),
});

// ❌ Bad - no context
console.log("User did something");
```

### Error Logging

Properly log errors with stack traces:

```typescript
try {
  await riskyOperation();
} catch (error) {
  // The logger automatically extracts error message, stack, and name
  logger.error("Operation failed", error, {
    operation: "riskyOperation",
    userId: currentUser.id,
  });
}
```

## Migration Patterns

### Before (console.log)

```typescript
console.log("User logged in:", userId);
console.warn("Rate limit warning");
console.error("Failed to fetch data:", error);
```

### After (logger)

```typescript
import { logger } from "@/lib/logger";

logger.info("User logged in", { userId });
logger.warn("Rate limit warning", { remaining: 5 });
logger.error("Failed to fetch data", error, { endpoint: "/api/data" });
```

### Component Pattern

```typescript
// Before
"use client";
export default function MyComponent() {
  const handleClick = () => {
    console.log("Button clicked");
  };
}

// After
("use client");
import { logger } from "@/lib/logger";

export default function MyComponent() {
  const handleClick = () => {
    logger.debug("Button clicked", { component: "MyComponent" });
  };
}
```

### API Route Pattern

```typescript
// Before
export async function POST(request: Request) {
  console.log("API request received");
  try {
    // ... logic
    console.log("Success");
  } catch (error) {
    console.error("Error:", error);
  }
}

// After
import { apiLogger } from "@/lib/logger";

export async function POST(request: Request) {
  apiLogger.info("API request received", { endpoint: "/api/example" });
  try {
    // ... logic
    apiLogger.info("Request successful");
  } catch (error) {
    apiLogger.error("Request failed", error, { endpoint: "/api/example" });
  }
}
```

## Environment Configuration

### Development Mode

Logging is **enabled by default** in development:

- Pretty-printed output with colors
- All log levels visible
- Stack traces included

### Production Mode

Logging is **disabled by default** in production:

- Zero performance overhead
- No sensitive data exposure
- Can be enabled with environment variable

### Force Logging in Production

If you need logging in production (e.g., for debugging):

```bash
# .env.production
NEXT_PUBLIC_ENABLE_LOGGING=true
```

**Warning**: Only enable in production temporarily and ensure no sensitive data is logged.

## Conditional Expensive Logging

For expensive logging operations, check if logging is enabled:

```typescript
import { logger, isLoggingEnabled } from "@/lib/logger";

if (isLoggingEnabled) {
  // Only perform expensive operation if logging is on
  const expensiveData = generateComplexReport();
  logger.debug("Complex report", expensiveData);
}
```

## Migration Status

### ✅ Completed

- `lib/logger.ts` - Logger implementation
- `components/analytics/adzep.tsx`
- `components/analytics/adzep-spa-bridge.tsx`
- `lib/ads/activate-adzep.ts`

### 🔄 In Progress

- Analytics components (utm-persister, gtm, gam, etc.)
- Form components
- API routes
- Utility libraries

### ⏳ Pending

- Test scripts (intentionally left with console for debugging)
- Documentation files (not part of production bundle)

## Testing

### Development Testing

```bash
pnpm dev
```

Check console output - you should see formatted log messages with:

- Log level indicators
- Namespace/scope information
- Structured data
- Timestamps

### Production Build

```bash
pnpm build
pnpm start
```

Verify that:

- No log output appears (unless NEXT_PUBLIC_ENABLE_LOGGING=true)
- Application functions normally
- Performance is not impacted

## Best Practices

1. **Use Appropriate Log Levels**
   - `trace`: Very detailed debugging (rarely used)
   - `debug`: Development debugging
   - `info`: General operational information
   - `warn`: Warning conditions that should be reviewed
   - `error`: Error conditions that need attention
   - `fatal`: Critical errors requiring immediate action

2. **Include Context**
   - Always provide relevant metadata
   - Use structured data (objects) not strings
   - Include identifiers (userId, requestId, etc.)

3. **Avoid Sensitive Data**
   - Never log passwords, tokens, or API keys
   - Sanitize user data before logging
   - Be careful with PII (Personally Identifiable Information)

4. **Use Scoped Loggers**
   - Create module-specific loggers for better organization
   - Makes filtering and searching logs easier
   - Provides better context automatically

5. **Performance Considerations**
   - Don't log in tight loops
   - Use conditional logging for expensive operations
   - Remember logging is no-op in production by default

## Troubleshooting

### Logs Not Appearing in Development

Check:

1. `NODE_ENV=development` is set
2. Logger is imported correctly
3. Check browser console settings (filters)

### Logs Appearing in Production

Check:

1. `NEXT_PUBLIC_ENABLE_LOGGING` is not set to `true`
2. Build is production build (`pnpm build`)
3. Environment variables are correct

### TypeScript Errors

Make sure:

1. `@/lib/logger` path alias is configured
2. Types are properly imported
3. pino and pino-pretty are installed

## Additional Resources

- [Pino Documentation](https://getpino.io/)
- [Midudev Video on console.log Issues](https://youtu.be/GvqZuVgRKWw?si=o4Wh3rkjxe5MvVQE)
- [Next.js Logging Best Practices](https://nextjs.org/docs)

## Support

For questions or issues with the logger:

1. Check this documentation
2. Review `lib/logger.ts` for implementation details
3. Create an issue with examples and error messages
