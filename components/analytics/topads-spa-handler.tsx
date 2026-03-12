"use client";

import { useEffect, useRef, useCallback } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { logger } from "@/lib/logger";

type TopAdsConfig = Record<string, unknown>;

/** Maximum ms to wait for window.topAds.spa to become available. */
const SPA_READY_TIMEOUT = 3000;
/** Interval between readiness checks. */
const SPA_POLL_INTERVAL = 150;

/**
 * TopAds SPA Navigation Handler
 *
 * Triggers TopAds SPA function on route changes in Next.js.
 * This ensures ads are properly loaded when navigating between pages.
 *
 * The handler uses a **previous-pathname comparison** instead of a boolean
 * mount guard.  This is Suspense-safe: React may unmount/remount this
 * component when useSearchParams() suspends, which would reset a boolean
 * ref and cause a false-positive spa() call on the initial load.  By
 * comparing the stored pathname to the current one, the handler only fires
 * when the route has genuinely changed.
 *
 * Usage: Include this component in the root layout within NavigationProvider
 */
export default function TopAdsSPAHandler() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Store the pathname that TopAds is currently showing ads for.
  // Initialised to the pathname at mount time so the first effect
  // execution sees prev === current and correctly skips.
  const prevPathname = useRef(pathname);

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
    // ── Guard: only fire when the pathname has actually changed ──
    // On initial mount (or Suspense re-mount) prevPathname.current
    // equals pathname, so this branch is skipped — primary ads load
    // undisturbed.
    if (prevPathname.current === pathname) {
      return;
    }

    // Record the new pathname *before* the async wait so that rapid
    // navigations don't queue duplicate spa() calls.
    prevPathname.current = pathname;

    let cancelled = false;

    logger.info("[TopAds] Route change detected", {
      to: pathname,
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
