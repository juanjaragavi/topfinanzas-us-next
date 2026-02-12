#!/usr/bin/env node

/**
 * Console Logger Migration Script
 *
 * This script helps migrate console statements to the new logger system.
 * It provides analysis and suggestions for migration.
 */

const fs = require("fs");
const path = require("path");
const glob = require("glob");

// Logger imports to suggest
const LOGGER_IMPORTS = {
  analytics: 'import { analyticsLogger } from "@/lib/logger";',
  api: 'import { apiLogger } from "@/lib/logger";',
  topads: 'import { topadsLogger } from "@/lib/logger";',
  utm: 'import { utmLogger } from "@/lib/logger";',
  form: 'import { formLogger } from "@/lib/logger";',
  validation: 'import { validationLogger } from "@/lib/logger";',
  default: 'import { logger } from "@/lib/logger";',
};

// Patterns to detect and their suggested loggers
const LOGGER_PATTERNS = [
  {
    pattern: /analytics|utm|gtm|gam|topads/i,
    logger: "analytics",
    namespace: "analyticsLogger",
  },
  { pattern: /api|route/i, logger: "api", namespace: "apiLogger" },
  { pattern: /topads/i, logger: "topads", namespace: "topadsLogger" },
  { pattern: /utm/i, logger: "utm", namespace: "utmLogger" },
  {
    pattern: /form|quiz|registration/i,
    logger: "form",
    namespace: "formLogger",
  },
  {
    pattern: /validation|validator/i,
    logger: "validation",
    namespace: "validationLogger",
  },
];

// Files to skip (test scripts, markdown, etc.)
const SKIP_PATTERNS = [
  "**/node_modules/**",
  "**/.next/**",
  "**/dist/**",
  "**/*.md",
  "**/scripts/test-*.js",
  "**/scripts/diagnose-*.js",
];

function suggestLogger(filePath) {
  const fileName = path.basename(filePath).toLowerCase();
  const dirName = path.dirname(filePath).toLowerCase();
  const fullPath = `${dirName}/${fileName}`;

  for (const { pattern, logger, namespace } of LOGGER_PATTERNS) {
    if (pattern.test(fullPath)) {
      return { logger, namespace, import: LOGGER_IMPORTS[logger] };
    }
  }

  return {
    logger: "default",
    namespace: "logger",
    import: LOGGER_IMPORTS.default,
  };
}

function analyzeFile(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");
  const lines = content.split("\n");

  const consoleStatements = [];
  lines.forEach((line, index) => {
    const match = line.match(/console\.(log|warn|error|info|debug)/g);
    if (match) {
      consoleStatements.push({
        line: index + 1,
        statement: line.trim(),
        type: match[0].split(".")[1],
      });
    }
  });

  return {
    filePath,
    count: consoleStatements.length,
    statements: consoleStatements,
    suggestion: suggestLogger(filePath),
  };
}

function generateMigrationGuide(analysis) {
  console.log("\n" + "=".repeat(80));
  console.log("  CONSOLE LOGGER MIGRATION ANALYSIS");
  console.log("=".repeat(80) + "\n");

  const filesByCategory = {
    analytics: [],
    api: [],
    forms: [],
    utilities: [],
    components: [],
  };

  analysis.forEach((file) => {
    if (file.filePath.includes("/analytics/"))
      filesByCategory.analytics.push(file);
    else if (file.filePath.includes("/api/")) filesByCategory.api.push(file);
    else if (file.filePath.includes("form")) filesByCategory.forms.push(file);
    else if (file.filePath.includes("/lib/"))
      filesByCategory.utilities.push(file);
    else filesByCategory.components.push(file);
  });

  let totalConsoleStatements = 0;

  Object.entries(filesByCategory).forEach(([category, files]) => {
    if (files.length === 0) return;

    console.log(`\n📁 ${category.toUpperCase()}`);
    console.log("-".repeat(80));

    files.forEach((file) => {
      totalConsoleStatements += file.count;
      console.log(`\n  📄 ${path.relative(process.cwd(), file.filePath)}`);
      console.log(`     Console statements: ${file.count}`);
      console.log(`     Suggested logger: ${file.suggestion.namespace}`);
      console.log(`     Import: ${file.suggestion.import}`);

      if (file.statements.length <= 5) {
        file.statements.forEach((stmt) => {
          console.log(
            `     Line ${stmt.line}: ${stmt.statement.substring(0, 80)}...`,
          );
        });
      }
    });
  });

  console.log("\n" + "=".repeat(80));
  console.log(`  SUMMARY`);
  console.log("=".repeat(80));
  console.log(`  Total files to migrate: ${analysis.length}`);
  console.log(`  Total console statements: ${totalConsoleStatements}`);
  console.log("=" + "=".repeat(80) + "\n");

  // Generate migration priority
  console.log("📋 MIGRATION PRIORITY:\n");
  console.log("1. ✅ COMPLETED:");
  console.log("   - lib/logger.ts");
  console.log("   - components/analytics/topads.tsx");
  console.log("   - components/analytics/topads-spa-handler.tsx");
  console.log("   - lib/ads/config.ts");
  console.log("   - app/api/sheets/route.ts");

  console.log("\n2. 🔴 HIGH PRIORITY (API Routes):");
  filesByCategory.api.forEach((file) => {
    console.log(
      `   - ${path.relative(process.cwd(), file.filePath)} (${file.count} statements)`,
    );
  });

  console.log("\n3. 🟡 MEDIUM PRIORITY (Forms & Analytics):");
  [...filesByCategory.forms, ...filesByCategory.analytics].forEach((file) => {
    console.log(
      `   - ${path.relative(process.cwd(), file.filePath)} (${file.count} statements)`,
    );
  });

  console.log("\n4. 🟢 LOW PRIORITY (Other Components):");
  [...filesByCategory.components, ...filesByCategory.utilities].forEach(
    (file) => {
      console.log(
        `   - ${path.relative(process.cwd(), file.filePath)} (${file.count} statements)`,
      );
    },
  );

  console.log("\n💡 TIP: Use the suggested logger imports for each file.");
  console.log(
    "📖 See docs/LOGGER_MIGRATION_GUIDE.md for detailed migration patterns.\n",
  );
}

// Main execution
console.log("🔍 Scanning TypeScript files for console statements...\n");

const files = glob.sync("**/*.{ts,tsx}", {
  ignore: SKIP_PATTERNS,
  cwd: process.cwd(),
  absolute: true,
});

const analysis = files
  .map(analyzeFile)
  .filter((result) => result.count > 0)
  .sort((a, b) => b.count - a.count);

generateMigrationGuide(analysis);
