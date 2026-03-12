"use client";

import { useEffect, useCallback } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { logger } from "@/lib/logger";

type TopAdsConfig = Record<string, unknown>;

/** Maximum ms to wait for window.topAds.spa to become available. */
const SPA_READY_TIMEOUT = 3000;
/** Interval between readiness checks. */
const SPA_POLL_INTERVAL = 150;

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
        try {
          logger.info("[TopAds] Triggering SPA navigation");
          window.topAds!.spa!();
        } catch (error) {
          logger.error("[TopAds] Error triggering SPA:", error);
        }
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

  return null; // This component doesn't render anything
}

// Custom hook for manual TopAds SPA triggering
export function useTopAds() {
  const triggerSPA = () => {
    try {
      if (
        typeof window !== "undefined" &&
        window.topAds &&
        typeof window.topAds.spa === "function"
      ) {
        logger.info("[TopAds] Manual SPA trigger");
        window.topAds.spa();
        return true;
      }
      logger.warn("[TopAds] topAds.spa() not available");
      return false;
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
