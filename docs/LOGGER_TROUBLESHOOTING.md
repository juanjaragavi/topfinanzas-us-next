# Logger Troubleshooting Guide

## Common Issues and Solutions

### 1. Worker Thread Errors (RESOLVED ✅)

**Error Messages:**

```bash
Error: Cannot find module '/ROOT/node_modules/thread-stream/lib/worker.js'
uncaughtException: [Error: the worker thread exited]
Error: the worker has exited
```

**Cause:**
The `pino-pretty` transport uses worker threads which conflict with Next.js API routes and the App Router architecture.

**Solution:**
Remove `pino-pretty` transport from the logger configuration. Use synchronous JSON logging instead.

**Fixed in:** `/lib/logger.ts` (lines 64-72)

```typescript
// ❌ DON'T: This causes worker thread errors
if (isServer) {
  return pino({
    level: isDevelopment ? "debug" : "info",
    transport: isDevelopment
      ? {
          target: "pino-pretty", // ← Worker thread issue
          options: {
            colorize: true,
            translateTime: "HH:MM:ss",
          },
        }
      : undefined,
  });
}

// ✅ DO: Use synchronous logging
if (isServer) {
  return pino({
    level: isDevelopment ? "debug" : "info",
    // No transport - uses synchronous JSON output
    formatters: {
      level: (label) => {
        return { level: label };
      },
    },
  });
}
```

**Benefits of the fix:**

- ✅ No worker thread dependencies
- ✅ Compatible with Next.js 15 App Router
- ✅ Works in all Next.js environments (dev, build, production)
- ✅ JSON output is production-ready for log aggregation
- ✅ Faster and more reliable

---

### 2. Logger Not Producing Output

**Symptom:**
Logger calls don't produce any output in the console.

**Possible Causes:**

#### A. Logging Disabled in Production

By default, the logger is disabled in production environments.

**Check:**

```typescript
// In /lib/logger.ts
const shouldLog = isDevelopment || isTest || forceLogging;
```

**Solution:**
Set environment variable to enable logging in production:

```bash
NEXT_PUBLIC_ENABLE_LOGGING=true
```

#### B. Log Level Too High

If you're using `logger.debug()` but the level is set to `info`, debug messages won't appear.

**Solution:**
Check the log level configuration:

```typescript
// In /lib/logger.ts
return pino({
  level: isDevelopment ? "debug" : "info", // ← Check this
});
```

---

### 3. TypeScript Errors with Logger

**Error:**

```bash
Property 'debug' does not exist on type 'NoOpLogger | Logger'
```

**Cause:**
Type mismatch between Pino logger and NoOp logger interfaces.

**Solution:**
The logger interface in `/lib/logger.ts` already handles both types. Make sure you're importing from the correct location:

```typescript
// ✅ Correct
import { apiLogger } from "@/lib/logger";

// ❌ Wrong
import { logger } from "pino";
```

---

### 4. Cannot Find Module 'pino' or 'pino-pretty'

**Error:**

```bash
Cannot find module 'pino'
Cannot find module 'pino-pretty'
```

**Solution:**
Install the dependencies:

```bash
pnpm add pino
pnpm add -D pino-pretty  # Optional, not used in current config
```

**Note:** After the worker thread fix, `pino-pretty` is no longer required but can remain installed.

---

### 5. Logs Not Appearing in Development

**Symptom:**
Logger calls in development mode don't produce output.

**Check List:**

1. ✅ `NODE_ENV=development` is set
2. ✅ Logger is imported correctly: `import { logger } from "@/lib/logger"`
3. ✅ You're using the correct log level (e.g., `logger.info()` not `logger.trace()`)
4. ✅ The file is actually being executed (add a temporary `console.log` to verify)

**Debug:**

```typescript
// Temporary debugging
console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("isDevelopment:", isDevelopment);
console.log("shouldLog:", shouldLog);
```

---

### 6. Browser Console Shows [INFO] Instead of Structured Logs

**This is expected!**

In the browser, the logger uses a simplified client-side implementation with console fallbacks:

```typescript
// Browser output
[INFO] User action
[DEBUG] Form validation
[ERROR] API call failed
```

This is intentional because:

- Pino doesn't work natively in browsers
- Console is the appropriate browser logging mechanism
- Structured logging is for server-side only

---

### 7. API Routes Throwing Errors After Logger Integration

**Error:**

```bash
TypeError: logger.info is not a function
```

**Cause:**
Incorrect import or logger instance.

**Solution:**
Use the appropriate scoped logger:

```typescript
// ✅ For API routes
import { apiLogger } from "@/lib/logger";

export async function GET() {
  apiLogger.info("API route called");
}

// ❌ Don't use generic logger in API routes
import { logger } from "@/lib/logger"; // Less semantic
```

---

### 8. Logs Missing Context Information

**Symptom:**
Logs don't include the context object you passed.

**Common Mistake:**

```typescript
// ❌ Wrong argument order
logger.info({ userId: 123 }, "User logged in"); // Context first, message second (Pino style)

// ✅ Correct for our interface
logger.info("User logged in", { userId: 123 }); // Message first, context second
```

**Why?**
Our logger interface is designed to be more intuitive:

```typescript
info(message: string, context?: Record<string, any>): void;
```

---

### 9. Performance Issues with Logging

**Symptom:**
Application feels slower after adding logging.

**Check:**

1. **Production Environment**: Make sure logging is disabled (`NEXT_PUBLIC_ENABLE_LOGGING` should NOT be set)
2. **Log Level**: Don't use `trace` or `debug` in production
3. **Context Size**: Don't log huge objects

**Best Practice:**

```typescript
// ❌ Bad: Logging massive objects
apiLogger.info("Request received", { entireRequestBody: req.body });

// ✅ Good: Log only what's needed
apiLogger.info("Request received", {
  method: req.method,
  path: req.url,
  hasBody: !!req.body,
});
```

---

### 10. Build Warnings About Logger in Client Components

**Warning:**

```bash
Module not found: Can't resolve 'pino' in client components
```

**Cause:**
Using server-side logger in a client component.

**Solution:**
Make sure client components use the browser-compatible logger:

```typescript
"use client"; // ← Client component

import { logger } from "@/lib/logger"; // This is safe - has browser fallback

export default function MyComponent() {
  const handleClick = () => {
    logger.info("Button clicked"); // Works in browser
  };
}
```

The logger automatically uses console in the browser, so this is safe.

---

## Verification Commands

### Check for remaining console statements

```bash
bash ./scripts/migrate-to-logger.sh
```

### Analyze console usage

```bash
node scripts/analyze-console-usage.js
```

### Test build

```bash
pnpm build
```

### Check logs in production

```bash
NEXT_PUBLIC_ENABLE_LOGGING=true pnpm build
NEXT_PUBLIC_ENABLE_LOGGING=true npm start
```

---

## Getting Help

1. **Check documentation:**
   - `/docs/LOGGER_MIGRATION_GUIDE.md` - Complete usage guide
   - `/docs/LOGGER_QUICK_REFERENCE.md` - Quick reference
   - `/docs/MIGRATION_COMPLETE.md` - Migration status

2. **Review implementation:**
   - `/lib/logger.ts` - Core logger implementation

3. **Check examples:**
   - `/app/api/sheets/route.ts` - API route example
   - `/components/analytics/adzep.tsx` - Component example

---

## Summary of Current Configuration

✅ **Working Configuration:**

- Pino logger for server-side (Next.js API routes, server components)
- Console fallback for client-side (browser)
- Synchronous logging (no worker threads)
- JSON output (production-ready)
- Disabled by default in production
- Environment variable override available
- Full TypeScript support
- Zero overhead when disabled

❌ **Not Used:**

- `pino-pretty` transport (caused worker thread issues)
- Asynchronous logging
- Worker threads
- Pretty printing in development (uses JSON instead)

---

**Last Updated:** January 2025  
**Status:** Production-ready ✅
