// Central configuration for TopAds activation and ad container detection
// This module is imported by activation and overlay utilities.

export interface TopAdsConfig {
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
  // Activation default timeout for waiting topAds.spa to exist (ms)
  defaultActivationTimeoutMs: number;
  // Retry attempts and delay for waiting topAds.spa to exist
  defaultRetryAttempts: number;
  defaultRetryDelayMs: number;
  // Post-activation verification retries
  verifyRetries: number;
  verifyDelayMs: number;
  // Overlay grace period if no ad units exist (ms)
  overlayGraceMs: number;
}

export const topAdsConfig: TopAdsConfig = {
  // TopAds container patterns - square0N IDs with data-topads attributes
  containerSelectors: [
    // TopAds containers (square01, square02, square03, square04, etc.)
    "[data-topads]",
    "[id^='square0']",
    // Legacy containers (uk_topfinanzas_1, uk_topfinanzas_2, etc.)
    "[id^='uk_topfinanzas_']",
    // Generic patterns for future use
    "[data-ad-slot]",
    ".ad-slot",
    ".ad-unit",
    "#sidebar-ads",
    ".in-article-ad",
  ],
  articlePathPrefixes: ["/blog", "/financial-solutions", "/personal-finance"],
  // Pages where ads should NEVER be activated
  excludedPaths: ["/quiz", "/quiz-2"],
  // Timeout for initial load to ensure TopAds script is ready
  initialContainerWaitMs: 15000,
  navigationContainerWaitMs: 6000,
  defaultActivationTimeoutMs: 8000,
  defaultRetryAttempts: 3,
  defaultRetryDelayMs: 800,
  verifyRetries: 4,
  verifyDelayMs: 1500,
  overlayGraceMs: 2000,
};

export function isArticlePath(pathname: string | null | undefined): boolean {
  if (!pathname) return false;

  // Check if path matches article prefixes
  const matchesPrefix = topAdsConfig.articlePathPrefixes.some(
    (p) => pathname === p || pathname.startsWith(p + "/"),
  );

  if (!matchesPrefix) return false;

  // Exclude listing/archive pages (exact matches of prefixes)
  // These are category pages without ad containers
  const isListingPage = topAdsConfig.articlePathPrefixes.some(
    (p) => pathname === p,
  );

  // Only consider it an article path if it's NOT a listing page
  // i.e., it's a sub-path like /blog/article-slug or /personal-finance/article-slug
  return !isListingPage;
}

export function isExcludedPath(pathname: string | null | undefined): boolean {
  if (!pathname) return false;
  return topAdsConfig.excludedPaths.some(
    (p) => pathname === p || pathname.startsWith(p + "/"),
  );
}
