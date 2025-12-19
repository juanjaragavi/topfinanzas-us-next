import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { apiLogger } from "@/lib/logger";

// --- Simplified Logic for Debugging File Existence ---

// Function to scan a directory and check for metadata.ts existence
async function checkMetadataExistence(
  dirPath: string,
  categoryName: string,
): Promise<void> {
  // Changed return type
  const fullDirPath = path.join(process.cwd(), dirPath);
  apiLogger.debug("Checking metadata existence", { fullDirPath });

  try {
    const entries = await fs.readdir(fullDirPath, { withFileTypes: true });
    apiLogger.debug("Found entries in directory", {
      count: entries.length,
      dirPath,
    });

    for (const entry of entries) {
      if (entry.isDirectory()) {
        const slug = entry.name;
        apiLogger.debug("Processing directory entry", { slug });

        if (slug.endsWith("-requirements") || slug.endsWith("-application")) {
          apiLogger.debug("Skipping auxiliary directory", { slug });
          continue;
        }

        const metadataPath = path.join(fullDirPath, slug, "metadata.ts");
        try {
          await fs.access(metadataPath, fs.constants.F_OK); // Check if file exists and is accessible
          apiLogger.debug("Found metadata.ts", { slug, categoryName });
        } catch (accessError) {
          // Log only if it's not a 'Not Found' error, or specifically log 'Not Found'
          if (
            accessError instanceof Error &&
            (accessError as NodeJS.ErrnoException).code === "ENOENT"
          ) {
            apiLogger.warn("Metadata.ts not found", {
              slug,
              categoryName,
              metadataPath,
            });
          } else {
            apiLogger.error("Error accessing metadata.ts", accessError, {
              slug,
              categoryName,
            });
          }
        }
      } else {
        apiLogger.debug("Skipping non-directory entry", { name: entry.name });
      }
    }
  } catch (error) {
    apiLogger.error("Error reading directory", error, { fullDirPath });
  }
  apiLogger.debug("Finished scanning directory", { dirPath });
}

export async function GET() {
  try {
    apiLogger.debug(
      "API route /api/posts called (DEBUGGING - Checking Metadata Existence)",
    );

    // Run checks but don't collect posts for now
    await checkMetadataExistence("app/personal-finance", "Personal Finance");
    await checkMetadataExistence(
      "app/financial-solutions",
      "Financial Solutions",
    );

    // Return an empty array for now to prevent frontend errors,
    // focus is on checking the server logs for the existence messages.
    apiLogger.info(
      "API route finished checks. Returning empty array for debugging.",
    );
    return NextResponse.json([]);
  } catch (error) {
    apiLogger.error("Failed to get posts in API route", error);
    return NextResponse.json(
      { error: "Failed to load posts" },
      { status: 500 },
    );
  }
}
