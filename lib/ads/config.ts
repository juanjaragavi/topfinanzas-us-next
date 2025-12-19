// Central configuration for AdZep activation and ad container detection
// This module is imported by activation and overlay utilities.

export interface AdZepConfig {
  // CSS selectors that indicate ad unit containers are present on the page
  containerSelectors: string[];
  // Path prefixes that usually represent article/content pages with ads
  articlePathPrefixes: string[];
  // Path prefixes where ads should NEVER be shown (quiz pages, registration flows, etc.)
  excludedPaths: string[];
  // Maximum time to wait for containers on initial load (ms)
  initialContainerWaitMs: number;
  // Maximum time to wait for containers on SPA navigations (ms)
  navigationContainerWaitMs: number;
  // Activation default timeout for waiting AdZepActivateAds to exist (ms)
  defaultActivationTimeoutMs: number;
  // Retry attempts and delay for waiting AdZepActivateAds to exist
  defaultRetryAttempts: number;
  defaultRetryDelayMs: number;
  // Post-activation verification retries
  verifyRetries: number;
  verifyDelayMs: number;
  // Overlay grace period if no ad units exist (ms)
  overlayGraceMs: number;
}

export const adZepConfig: AdZepConfig = {
  // Known AdZep container patterns - includes uk_topfinanzas_* IDs
  containerSelectors: [
    // Primary AdZep containers (uk_topfinanzas_1, uk_topfinanzas_2, etc.)
    "[id^='uk_topfinanzas_']",
    // Generic patterns for future use
    "[data-ad-slot]",
    "[data-adzep]",
    "[id^='adzep-']",
    "[class*='adzep-']",
    ".ad-slot",
    ".ad-unit",
    "#sidebar-ads",
    ".in-article-ad",
  ],
  articlePathPrefixes: [
    "/blog",
    "/financial-solutions",
    "/personal-finance",
    "/tarjetas",
  ],
  // Pages where ads should NEVER be activated
  excludedPaths: ["/quiz", "/quiz-2"],
  // Increased timeout for initial load to ensure AdZep script is ready
  initialContainerWaitMs: 15000, // Increased from 10000
  navigationContainerWaitMs: 6000, // Increased from 4000
  defaultActivationTimeoutMs: 8000, // Increased from 5000
  defaultRetryAttempts: 3, // Increased from 2
  defaultRetryDelayMs: 800, // Increased from 600
  verifyRetries: 4, // Increased from 3
  verifyDelayMs: 1500, // Increased from 1200
  overlayGraceMs: 2000, // Slightly increased from 1800
};

export function isArticlePath(pathname: string | null | undefined): boolean {
  if (!pathname) return false;

  // Check if path matches article prefixes
  const matchesPrefix = adZepConfig.articlePathPrefixes.some(
    (p) => pathname === p || pathname.startsWith(p + "/"),
  );

  if (!matchesPrefix) return false;

  // Exclude listing/archive pages (exact matches of prefixes)
  // These are category pages without ad containers
  const isListingPage = adZepConfig.articlePathPrefixes.some(
    (p) => pathname === p,
  );

  // Only consider it an article path if it's NOT a listing page
  // i.e., it's a sub-path like /blog/article-slug or /personal-finance/article-slug
  return !isListingPage;
}

export function isExcludedPath(pathname: string | null | undefined): boolean {
  if (!pathname) return false;
  return adZepConfig.excludedPaths.some(
    (p) => pathname === p || pathname.startsWith(p + "/"),
  );
}
