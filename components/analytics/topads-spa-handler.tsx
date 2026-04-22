"use client";

import { useEffect, useCallback } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { logger } from "@/lib/logger";
import {
  JOBS_DELAYED_ADS_EVENT,
  TOPADS_EXCLUDED_PATHS,
  isJobsDelayedAdPath,
  isTopAdsExcludedPath,
  removePathFromTopAdsExclusions,
  type DelayedJobsAdsEventDetail,
} from "@/lib/jobs-delayed-ads";

type TopAdsConfig = Record<string, unknown>;
type TopAdsPageSetting = {
  exclude?: string[];
};

/** Maximum ms to wait for window.topAds.spa to become available. */
const SPA_READY_TIMEOUT = 3000;
/** Interval between readiness checks. */
const SPA_POLL_INTERVAL = 150;
const TOPADS_SCRIPT_URL = "https://ads.gamadx.com/topAds.min.js";

/**
 * Module-level pathname tracker.
 *
 * Unlike `useRef`, this survives React Suspense unmount/remount cycles.
 * `TopAdsSPAHandler` uses `useSearchParams()` inside a `<Suspense>` boundary,
 * which may re-suspend during client-side navigation — unmounting and
 * remounting the component.  A `useRef` would re-initialise to the *new*
 * pathname on remount, causing the "same pathname" guard to skip and
 * `spa()` to never fire.  A module-level variable retains the *previous*
 * pathname across the full lifecycle.
 *
 * Initialised to `null` so the first effect execution records the pathname
 * and skips, letting TopAds' bootstrap script handle initial ad fill.
 */
let lastSPAPathname: string | null = null;

export function reinjectTopAdsScript(): void {
  try {
    const existingScripts = document.querySelectorAll(
      'script[src*="topAds.min.js"]',
    );
    existingScripts.forEach((script) => script.remove());

    const script = document.createElement("script");
    script.src = TOPADS_SCRIPT_URL;
    script.type = "text/javascript";
    script.async = true;
    script.defer = true;
    script.setAttribute("data-cfasync", "false");

    (document.head || document.getElementsByTagName("head")[0]).appendChild(
      script,
    );
    logger.info(
      "[TopAds] Re-injected external script for delayed/dynamic flow",
    );
  } catch (error) {
    logger.error("[TopAds] Failed to re-inject external script:", error);
  }
}

function removePathFromCurrentExclusions(path: string): void {
  if (typeof window === "undefined") {
    return;
  }

  window.topAds = window.topAds || {};

  const currentConfig = window.topAds.config ?? {};
  const currentPageSetting =
    (currentConfig as { pageSetting?: TopAdsPageSetting }).pageSetting ?? {};
  const currentExclude = Array.isArray(currentPageSetting.exclude)
    ? currentPageSetting.exclude
    : TOPADS_EXCLUDED_PATHS;

  window.topAds.config = {
    ...currentConfig,
    pageSetting: {
      ...currentPageSetting,
      exclude: removePathFromTopAdsExclusions(currentExclude, path),
    },
  } as TopAdsConfig;
}

function activateDelayedAds(path: string): void {
  removePathFromCurrentExclusions(path);

  document
    .querySelectorAll("[data-topads], [data-topads-rewarded]")
    .forEach((el) => {
      el.innerHTML = "";
    });

  let attempt = 0;
  const maxAttempts = 20;
  const pollInterval = 150;

  const pollForVisibleContainers = () => {
    attempt += 1;

    const containers = document.querySelectorAll(
      '[data-topads]:not([aria-hidden="true"]), [data-topads-rewarded]:not([aria-hidden="true"])',
    );

    if (containers.length > 0 || attempt >= maxAttempts) {
      reinjectTopAdsScript();
      return;
    }

    window.setTimeout(pollForVisibleContainers, pollInterval);
  };

  window.setTimeout(pollForVisibleContainers, pollInterval);
}

/**
 * TopAds SPA Navigation Handler
 *
 * Triggers TopAds SPA function on route changes in Next.js.
 * This ensures ads are properly loaded when navigating between pages.
 *
 * Usage: Include this component in the root layout within NavigationProvider
 */
export default function TopAdsSPAHandler() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const waitForTopAdsSPA = useCallback((): Promise<boolean> => {
    return new Promise((resolve) => {
      // Already available — resolve immediately.
      if (
        typeof window !== "undefined" &&
        window.topAds &&
        typeof window.topAds.spa === "function"
      ) {
        resolve(true);
        return;
      }

      const start = Date.now();
      const interval = setInterval(() => {
        if (
          typeof window !== "undefined" &&
          window.topAds &&
          typeof window.topAds.spa === "function"
        ) {
          clearInterval(interval);
          resolve(true);
        } else if (Date.now() - start >= SPA_READY_TIMEOUT) {
          clearInterval(interval);
          resolve(false);
        }
      }, SPA_POLL_INTERVAL);
    });
  }, []);

  useEffect(() => {
    // ── First-ever load: record pathname, let TopAds bootstrap handle ads ──
    if (lastSPAPathname === null) {
      lastSPAPathname = pathname;
      return;
    }

    // ── Same pathname: skip (handles Suspense remounts gracefully) ──
    if (lastSPAPathname === pathname) {
      return;
    }

    // Record the new pathname *before* the async operations so that rapid
    // navigations don't queue duplicate spa() calls.
    lastSPAPathname = pathname;

    if (isTopAdsExcludedPath(pathname)) {
      logger.info("[TopAds] Skipping excluded route", {
        to: pathname,
      });
      return;
    }

    let cancelled = false;

    logger.info("[TopAds] Route change detected", {
      to: pathname,
    });

    // Clear stale ad content from recycled DOM slots.
    // TopAds injects content via direct DOM manipulation that React doesn't
    // track.  When React reconciles pages that share the same template (e.g.
    // reward-p1 → reward-p2), the [data-topads] divs are at the same tree
    // position with the same IDs, so React reuses the DOM nodes — leaving
    // old ad content in place.  Clearing them ensures TopAds sees fresh
    // empty slots on the new page.
    document.querySelectorAll("[data-topads]").forEach((el) => {
      el.innerHTML = "";
    });
    document.querySelectorAll("[data-topads-rewarded]").forEach((el) => {
      el.innerHTML = "";
    });

    // Wait for TopAds to be ready rather than using a fixed timeout.
    waitForTopAdsSPA().then((ready) => {
      if (cancelled) return;

      if (ready) {
        // Delay the SPA trigger slightly to allow React to mount new components (like AdSlot)
        // and append their ad containers into the DOM. Without this delay, spa() fires before
        // the new ad slots exist, resulting in empty ads on SPA navigations.
        setTimeout(() => {
          if (cancelled) return;
          try {
            logger.info("[TopAds] Triggering SPA navigation");
            window.topAds!.spa!();
          } catch (error) {
            logger.error("[TopAds] Error triggering SPA:", error);
          }
        }, 150);
      } else {
        logger.warn(
          "[TopAds] topAds.spa() not available after timeout — skipping",
        );
      }
    });

    return () => {
      cancelled = true;
    };
  }, [pathname, searchParams, waitForTopAdsSPA]);

  useEffect(() => {
    const handleDelayedJobsActivation = (event: Event) => {
      const customEvent = event as CustomEvent<DelayedJobsAdsEventDetail>;
      const requestedPath = customEvent.detail?.path;

      if (!requestedPath || requestedPath !== pathname) {
        return;
      }

      if (!isJobsDelayedAdPath(requestedPath)) {
        return;
      }

      logger.info("[TopAds] Activating delayed Jobs ads", {
        path: requestedPath,
        journeyId: customEvent.detail?.journeyId,
      });

      activateDelayedAds(requestedPath);
    };

    window.addEventListener(
      JOBS_DELAYED_ADS_EVENT,
      handleDelayedJobsActivation as EventListener,
    );

    return () => {
      window.removeEventListener(
        JOBS_DELAYED_ADS_EVENT,
        handleDelayedJobsActivation as EventListener,
      );
    };
  }, [pathname]);

  return null; // This component doesn't render anything
}

// Custom hook for manual TopAds SPA triggering
export function useTopAds() {
  const pathname = usePathname();
  const canForceManualTopAds =
    pathname === "/finance-quiz-recommender-p2" ||
    pathname === "/finance-chat-intro-p2";

  const triggerSPA = () => {
    try {
      if (pathname && isTopAdsExcludedPath(pathname) && !canForceManualTopAds) {
        logger.info("[TopAds] Manual SPA trigger skipped on excluded route", {
          path: pathname,
        });
        return false;
      }

      logger.info(
        "[TopAds] Manual SPA trigger - Re-injecting script for dynamic element",
      );

      if (pathname) {
        removePathFromCurrentExclusions(pathname);
      }

      // Clear container first to ensure fresh fill
      document.querySelectorAll("[data-topads]").forEach((el) => {
        el.innerHTML = "";
      });

      reinjectTopAdsScript();
      return true;
    } catch (error) {
      logger.error("[TopAds] Error in manual SPA trigger:", error);
      return false;
    }
  };

  return { triggerSPA };
}

// Type declaration for TypeScript
declare global {
  interface Window {
    topAds?: {
      config?: TopAdsConfig;
      spa?: () => void;
    };
  }
}
