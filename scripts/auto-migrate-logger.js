#!/usr/bin/env node

/**
 * Automated Console Logger Migration Script
 *
 * This script automatically migrates console.log/warn/error statements to the new logger system.
 * It handles the most common patterns and leaves complex cases for manual review.
 */

const fs = require("fs");
const path = require("path");

// Files to migrate (remaining from analysis)
const FILES_TO_MIGRATE = [
  // Lib utilities
  "lib/analytics-validator.ts",
  "lib/kit/convertkit-client.ts",
  "lib/navigation/recommender-lock.ts",
  "lib/utils/image-optimizer.ts",
  "lib/utils/generate-blur-placeholder.ts",

  // Analytics components
  "components/analytics/utm-persister.tsx",
  "components/analytics/utm-monitor.tsx",
  "components/analytics/gam.tsx",
  "components/analytics/gtm.tsx",
  "components/analytics/google-ads.tsx",
  "components/analytics/topads.tsx",
  "components/analytics/topads-spa-handler.tsx",
  "components/analytics/utm-link-injector.tsx",
  "components/analytics/validation-panel.tsx",
  "components/analytics/ad-accessibility-fix.tsx",

  // Form components
  "components/credit-card-form.tsx",
  "components/credit-card-form-to-product.tsx",
  "components/forms/credit-card-application-form.tsx",

  // UI components
  "components/ui/ai-content-disclaimer.tsx",
  "components/ui/search-results.tsx",
  "components/ui/optimized-image.tsx",
  "components/ui/responsive-image.tsx",
  "components/layout/header.tsx",
  "components/UTMTracker.tsx",
  "components/mdx/blog-layout.tsx",

  // Page components
  "app/layout.tsx",
  "app/contact-us/page.tsx",
  "app/cookie-policy/page.tsx",
  "app/privacy-policy/page.tsx",
  "app/terms/page.tsx",
  "app/utm-test/page.tsx",
];

// Logger mappings based on file patterns
const getLoggerImport = (filePath) => {
  if (filePath.includes("/analytics/")) return "analyticsLogger";
  if (filePath.includes("/api/")) return "apiLogger";
  if (filePath.includes("topads")) return "topadsLogger";
  if (filePath.includes("utm")) return "utmLogger";
  if (filePath.includes("form") || filePath.includes("quiz"))
    return "formLogger";
  if (filePath.includes("validation")) return "validationLogger";
  return "logger";
};

// Migration patterns
const MIGRATION_PATTERNS = [
  {
    // console.log("message", data) -> logger.info("message", { data })
    from: /console\.log\(([^,)]+),\s*({[^}]+})\)/g,
    to: (match, msg, data, logger) => `${logger}.info(${msg}, ${data})`,
  },
  {
    // console.log("message") -> logger.info("message")
    from: /console\.log\(([^)]+)\)/g,
    to: (match, msg, logger) => `${logger}.info(${msg})`,
  },
  {
    // console.error("message", error) -> logger.error("message", error)
    from: /console\.error\(([^,)]+),\s*([^)]+)\)/g,
    to: (match, msg, err, logger) => `${logger}.error(${msg}, ${err})`,
  },
  {
    // console.error("message") -> logger.error("message")
    from: /console\.error\(([^)]+)\)/g,
    to: (match, msg, logger) => `${logger}.error(${msg})`,
  },
  {
    // console.warn("message") -> logger.warn("message")
    from: /console\.warn\(([^)]+)\)/g,
    to: (match, msg, logger) => `${logger}.warn(${msg})`,
  },
  {
    // console.debug("message") -> logger.debug("message")
    from: /console\.debug\(([^)]+)\)/g,
    to: (match, msg, logger) => `${logger}.debug(${msg})`,
  },
  {
    // console.info("message") -> logger.info("message")
    from: /console\.info\(([^)]+)\)/g,
    to: (match, msg, logger) => `${logger}.info(${msg})`,
  },
];

function migrateFile(filePath) {
  const fullPath = path.join(process.cwd(), filePath);

  if (!fs.existsSync(fullPath)) {
    console.log(`⚠️  Skipping ${filePath} (not found)`);
    return { migrated: false, reason: "not-found" };
  }

  let content = fs.readFileSync(fullPath, "utf-8");
  const originalContent = content;

  // Determine appropriate logger
  const loggerName = getLoggerImport(filePath);
  const loggerImport = `import { ${loggerName} } from "@/lib/logger";`;

  // Check if already has logger import
  if (content.includes('from "@/lib/logger"')) {
    console.log(`✓ ${filePath} already migrated`);
    return { migrated: false, reason: "already-migrated" };
  }

  // Count console statements
  const consoleCount = (
    content.match(/console\.(log|warn|error|info|debug)/g) || []
  ).length;

  if (consoleCount === 0) {
    console.log(`✓ ${filePath} has no console statements`);
    return { migrated: false, reason: "no-console" };
  }

  // Apply migration patterns
  MIGRATION_PATTERNS.forEach((pattern) => {
    content = content.replace(pattern.from, (...args) => {
      // args: [fullMatch, ...captureGroups, offset, string]
      const captureGroups = args.slice(1, -2);
      return pattern.to(args[0], ...captureGroups, loggerName);
    });
  });

  // Add import after existing imports
  const importRegex = /^(import .*;\n)+/m;
  const match = content.match(importRegex);

  if (match) {
    const lastImport = match[0];
    content = content.replace(lastImport, lastImport + loggerImport + "\n");
  } else {
    // No imports found, add at top after any comments
    const firstLineRegex =
      /^(\/\*[\s\S]*?\*\/\n|\/\/.*\n|"use client";\n|'use client';\n)*/;
    const firstLineMatch = content.match(firstLineRegex);
    if (firstLineMatch) {
      content = content.replace(
        firstLineMatch[0],
        firstLineMatch[0] + "\n" + loggerImport + "\n",
      );
    } else {
      content = loggerImport + "\n\n" + content;
    }
  }

  // Check if content changed
  if (content === originalContent) {
    console.log(`⚠️  No changes made to ${filePath}`);
    return { migrated: false, reason: "no-changes" };
  }

  // Write migrated content
  fs.writeFileSync(fullPath, content, "utf-8");
  console.log(`✅ Migrated ${filePath} (${consoleCount} statements)`);

  return { migrated: true, statements: consoleCount };
}

// Main execution
console.log("🚀 Starting automated console logger migration...\n");

const results = {
  migrated: 0,
  skipped: 0,
  alreadyMigrated: 0,
  notFound: 0,
  totalStatements: 0,
};

FILES_TO_MIGRATE.forEach((file) => {
  const result = migrateFile(file);

  if (result.migrated) {
    results.migrated++;
    results.totalStatements += result.statements || 0;
  } else {
    results.skipped++;
    if (result.reason === "already-migrated") results.alreadyMigrated++;
    if (result.reason === "not-found") results.notFound++;
  }
});

console.log("\n" + "=".repeat(60));
console.log("📊 MIGRATION SUMMARY");
console.log("=".repeat(60));
console.log(`✅ Migrated: ${results.migrated} files`);
console.log(`📝 Total statements migrated: ${results.totalStatements}`);
console.log(`⏭️  Skipped: ${results.skipped} files`);
console.log(`   - Already migrated: ${results.alreadyMigrated}`);
console.log(`   - Not found: ${results.notFound}`);
console.log("=".repeat(60));
console.log("\n💡 Note: Complex patterns may need manual review.");
console.log("🔍 Run `npm run build` to check for any issues.\n");
