import { DELAYED_FINANCE_AD_PATHS } from "@/lib/finance-quiz-config";

export const DELAYED_JOBS_AD_PATHS = [
  "/jobs/jobs-promise-p1",
  "/jobs/jobs-promise-p2",
] as const;

const BASE_TOPADS_EXCLUDED_PATHS = [
  "/about-us",
  "/contact-us",
  "/privacy-policy",
  "/terms-conditions",
  "/campaign-quiz-credit-card-recomender",
  "/campaign-quiz-credit-card-recomender-short",
] as const;

export const TOPADS_EXCLUDED_PATHS = [
  ...BASE_TOPADS_EXCLUDED_PATHS,
  ...DELAYED_JOBS_AD_PATHS,
  ...DELAYED_FINANCE_AD_PATHS,
];

export const JOBS_DELAYED_ADS_EVENT = "jobs:activate-delayed-ads";

export interface DelayedJobsAdsEventDetail {
  path?: string;
  journeyId?: string;
}

function normalizePath(path: string): string {
  if (!path || path === "/") {
    return "/";
  }

  return path.replace(/\/+$/, "");
}

export function isJobsDelayedAdPath(path: string): boolean {
  const normalizedPath = normalizePath(path);

  return DELAYED_JOBS_AD_PATHS.some(
    (delayedPath) => delayedPath === normalizedPath,
  );
}

export function isTopAdsExcludedPath(path: string): boolean {
  const normalizedPath = normalizePath(path);

  return TOPADS_EXCLUDED_PATHS.some(
    (excludedPath) =>
      normalizedPath === excludedPath ||
      normalizedPath.startsWith(`${excludedPath}/`),
  );
}

export function removePathFromTopAdsExclusions(
  excludedPaths: readonly string[],
  path: string,
): string[] {
  const normalizedPath = normalizePath(path);

  return excludedPaths.filter(
    (excludedPath) => normalizePath(excludedPath) !== normalizedPath,
  );
}
