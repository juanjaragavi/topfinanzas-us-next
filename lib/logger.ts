/**
 * Centralized Logging Utility for Next.js
 *
 * This logger replaces console.log/warn/error with a production-ready solution
 * that addresses security, performance, and maintainability concerns.
 *
 * Key Features:
 * - Environment-aware logging (disabled in production by default)
 * - Structured logging with context
 * - Log levels (trace, debug, info, warn, error, fatal)
 * - Type-safe with TypeScript
 * - Works in both browser and Node.js environments
 * - Zero overhead when disabled
 *
 * Based on research and best practices from:
 * - Midudev's video on console.log issues
 * - Pino documentation
 * - Next.js logging patterns
 */

import pino from "pino";

// Environment detection
const isServer = typeof window === "undefined";
const isDevelopment = process.env.NODE_ENV === "development";
const isTest = process.env.NODE_ENV === "test";

// Allow explicit logging in production via environment variable
const forceLogging = process.env.NEXT_PUBLIC_ENABLE_LOGGING === "true";

// Determine if logging should be enabled
const shouldLog = isDevelopment || isTest || forceLogging;

// Simple logger interface for when Pino is disabled
interface NoOpLogger {
  trace: (...args: unknown[]) => void;
  debug: (...args: unknown[]) => void;
  info: (...args: unknown[]) => void;
  warn: (...args: unknown[]) => void;
  error: (...args: unknown[]) => void;
  fatal: (...args: unknown[]) => void;
  child: (bindings?: Record<string, unknown>) => NoOpLogger | pino.Logger;
}

/**
 * Create a Pino logger instance with environment-specific configuration
 */
const createLogger = (): pino.Logger | NoOpLogger => {
  // If logging is disabled, return a no-op logger
  if (!shouldLog) {
    const noop = () => {};
    return {
      trace: noop,
      debug: noop,
      info: noop,
      warn: noop,
      error: noop,
      fatal: noop,
      child: () => createLogger(),
    };
  }

  // Server-side configuration
  if (isServer) {
    // Use synchronous logging without worker threads for Next.js compatibility
    // pino-pretty transport uses workers which causes issues in Next.js API routes
    return pino({
      level: isDevelopment ? "debug" : "info",
      // Don't use transport in Next.js - causes worker thread issues
      formatters: {
        level: (label) => {
          return { level: label };
        },
      },
    });
  }

  // Client-side configuration (browser)
  // Pino doesn't work well in browsers, so we create a compatible interface
  const clientLogger: NoOpLogger = {
    trace: (...args: unknown[]) => console.debug("[TRACE]", ...args),
    debug: (...args: unknown[]) => console.debug("[DEBUG]", ...args),
    info: (...args: unknown[]) => console.info("[INFO]", ...args),
    warn: (...args: unknown[]) => console.warn("[WARN]", ...args),
    error: (...args: unknown[]) => console.error("[ERROR]", ...args),
    fatal: (...args: unknown[]) => console.error("[FATAL]", ...args),
    child: () => createLogger(),
  };

  return clientLogger;
};

// Create the base logger instance
const baseLogger = createLogger();

/**
 * Logger interface with context support
 */
export interface Logger {
  trace(message: string, context?: Record<string, unknown>): void;
  debug(message: string, context?: Record<string, unknown>): void;
  info(message: string, context?: Record<string, unknown>): void;
  warn(message: string, context?: Record<string, unknown>): void;
  error(
    message: string,
    error?: Error | unknown,
    context?: Record<string, unknown>,
  ): void;
  fatal(
    message: string,
    error?: Error | unknown,
    context?: Record<string, unknown>,
  ): void;
}

/**
 * Create a scoped logger with a specific namespace
 * @param namespace - The namespace for this logger (e.g., 'Analytics', 'API')
 */
export function createScopedLogger(namespace: string): Logger {
  // Handle both Pino logger and NoOp logger
  const scopedLogger =
    "child" in baseLogger ? baseLogger.child({ namespace }) : baseLogger;

  return {
    trace(message: string, context?: Record<string, unknown>) {
      if ("trace" in scopedLogger) {
        scopedLogger.trace(context || {}, `[${namespace}] ${message}`);
      }
    },

    debug(message: string, context?: Record<string, unknown>) {
      if ("debug" in scopedLogger) {
        scopedLogger.debug(context || {}, `[${namespace}] ${message}`);
      }
    },

    info(message: string, context?: Record<string, unknown>) {
      if ("info" in scopedLogger) {
        scopedLogger.info(context || {}, `[${namespace}] ${message}`);
      }
    },

    warn(message: string, context?: Record<string, unknown>) {
      if ("warn" in scopedLogger) {
        scopedLogger.warn(context || {}, `[${namespace}] ${message}`);
      }
    },

    error(
      message: string,
      error?: Error | unknown,
      context?: Record<string, unknown>,
    ) {
      const errorContext = {
        ...context,
        error:
          error instanceof Error
            ? {
                message: error.message,
                stack: error.stack,
                name: error.name,
              }
            : error,
      };
      if ("error" in scopedLogger) {
        scopedLogger.error(errorContext, `[${namespace}] ${message}`);
      }
    },

    fatal(
      message: string,
      error?: Error | unknown,
      context?: Record<string, unknown>,
    ) {
      const errorContext = {
        ...context,
        error:
          error instanceof Error
            ? {
                message: error.message,
                stack: error.stack,
                name: error.name,
              }
            : error,
      };
      if ("fatal" in scopedLogger) {
        scopedLogger.fatal(errorContext, `[${namespace}] ${message}`);
      }
    },
  };
}

/**
 * Default logger instance
 * Use this for general logging or create scoped loggers for specific modules
 */
export const logger = createScopedLogger("App");

/**
 * Pre-configured loggers for common modules
 */
export const analyticsLogger = createScopedLogger("Analytics");
export const apiLogger = createScopedLogger("API");
export const topadsLogger = createScopedLogger("TopAds");
export const utmLogger = createScopedLogger("UTM");
export const formLogger = createScopedLogger("Form");
export const validationLogger = createScopedLogger("Validation");

/**
 * Utility to check if logging is enabled
 * Useful for conditional expensive logging operations
 */
export const isLoggingEnabled = shouldLog;

/**
 * Export the base logger for advanced use cases
 */
export { baseLogger };

/**
 * Migration helper: Console-compatible interface
 * Use this during migration if you need console-like behavior
 *
 * @deprecated Use the logger methods directly instead
 */
export const consoleLogger = {
  log: (...args: unknown[]) =>
    logger.info(args.map((a) => String(a)).join(" ")),
  debug: (...args: unknown[]) =>
    logger.debug(args.map((a) => String(a)).join(" ")),
  info: (...args: unknown[]) =>
    logger.info(args.map((a) => String(a)).join(" ")),
  warn: (...args: unknown[]) =>
    logger.warn(args.map((a) => String(a)).join(" ")),
  error: (...args: unknown[]) =>
    logger.error(args.map((a) => String(a)).join(" ")),
};

export default logger;
