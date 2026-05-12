# Logging System Implementation

## 📋 Overview

This directory contains documentation for the professional logging system that replaces `console.log` throughout the application with **Pino** - a production-ready logger.

## 🚀 Quick Start

```typescript
// Import the logger
import { logger, apiLogger, analyticsLogger } from "@/lib/logger";

// Use it
logger.info("Application started", { version: "1.0.0" });
apiLogger.error("API request failed", error, { endpoint: "/api/data" });
analyticsLogger.debug("Event tracked", { eventName: "click" });
```

## 📚 Documentation

### For Developers

1. **[Quick Reference](./LOGGER_QUICK_REFERENCE.md)** - Start here! Common patterns and imports
2. **[Migration Guide](./LOGGER_MIGRATION_GUIDE.md)** - Complete usage guide with examples
3. **[Implementation Summary](./CONSOLE_LOG_MIGRATION_SUMMARY.md)** - Technical details and rationale

### Key Files

- **Logger Implementation**: `/lib/logger.ts`
- **Analysis Tool**: `/scripts/analyze-console-usage.js`
- **Migration Helper**: `/scripts/migrate-to-logger.sh`

## ✨ Key Features

- ✅ **Environment-Aware**: Auto-disabled in production
- ✅ **Zero Overhead**: No performance impact when disabled
- ✅ **Type-Safe**: Full TypeScript support
- ✅ **Structured**: JSON logging with metadata
- ✅ **Scoped**: Pre-configured loggers for different modules
- ✅ **Secure**: No sensitive data exposure in production

## 🎯 Why We Migrated

### Problems with console.log

1. **Security**: Exposes sensitive data in browser DevTools
2. **Performance**: Blocks main thread, causes DevTools slowdown
3. **Maintenance**: No structure, filtering, or log levels

### Benefits of Pino

1. **Security**: Disabled in production by default
2. **Performance**: 5-10x faster, async, zero overhead when disabled
3. **Maintenance**: Structured logs, filterable, monitoring-ready

## 🔧 Configuration

```bash
# Development (default - logging enabled)
NODE_ENV=development

# Production (default - logging disabled)
NODE_ENV=production

# Force logging in production (debugging only)
NEXT_PUBLIC_ENABLE_LOGGING=true
```

## 📊 Migration Status

### ✅ Core Implementation Complete

- Logger system (`/lib/logger.ts`)
- Critical analytics files (AdZep, SPA bridge)
- Critical API route (`/app/api/sheets/route.ts`)
- Comprehensive documentation

### 🔄 Remaining Files

- ~40 TypeScript files with console statements
- Prioritized by: API routes > Forms > Analytics > Components
- Clear patterns and tools provided

## 🛠️ Tools Available

```bash
# Analyze console usage
node scripts/analyze-console-usage.js

# View migration status
bash scripts/migrate-to-logger.sh

# Test the build
pnpm build

# Test in development
pnpm dev
```

## 📖 Common Tasks

### Add Logger to New File

```typescript
// 1. Choose appropriate logger
import { apiLogger } from "@/lib/logger";

// 2. Replace console statements
// Before: console.log("User data:", data);
// After:
apiLogger.info("User data retrieved", { userId: data.id });
```

### Create Custom Logger

```typescript
import { createScopedLogger } from "@/lib/logger";

const paymentLogger = createScopedLogger("Payment");
paymentLogger.info("Payment processed", { amount: 100 });
```

### Check if Logging is Enabled

```typescript
import { isLoggingEnabled } from "@/lib/logger";

if (isLoggingEnabled) {
  // Only perform expensive logging operations if enabled
  const report = generateReport();
  logger.debug("Report generated", report);
}
```

## 🎓 Best Practices

1. **Use Scoped Loggers**: Better organization and context
2. **Include Metadata**: Always provide context objects
3. **Appropriate Levels**: debug < info < warn < error < fatal
4. **No Sensitive Data**: Never log passwords, tokens, or PII
5. **Structured Data**: Use objects, not concatenated strings

## 🧪 Testing

### Development Mode

```bash
pnpm dev
```

**Expected**: Colorized, formatted logs with namespaces

### Production Build

```bash
pnpm build
npm start
```

**Expected**: No log output, zero overhead

## 🔗 External Resources

- **Research**: [Midudev on console.log issues](https://youtu.be/GvqZuVgRKWw?si=o4Wh3rkjxe5MvVQE)
- **Pino Docs**: <https://getpino.io/>
- **Next.js Logging**: <https://nextjs.org/docs>

## 💡 Getting Help

1. Check the [Quick Reference](./LOGGER_QUICK_REFERENCE.md)
2. Review the [Migration Guide](./LOGGER_MIGRATION_GUIDE.md)
3. Look at migrated files as examples
4. Create an issue with specific questions

## ✅ Verification Checklist

After migrating a file:

- [ ] Appropriate scoped logger imported
- [ ] All console statements replaced
- [ ] Context objects used instead of string concatenation
- [ ] No sensitive data in logs
- [ ] File compiles without errors
- [ ] Logs appear correctly in development
- [ ] No logs in production build

## 📅 Last Updated

October 27, 2025

---

**Status**: Core implementation complete  
**Next Priority**: Complete API route migrations  
**Maintainer**: Development Team
