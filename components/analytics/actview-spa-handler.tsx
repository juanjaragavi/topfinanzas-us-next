"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { logger } from "@/lib/logger";

const SQUARE_SLOT_IDS = ["av_content_1", "av_content_2", "av_top"] as const;

function normalizeSquareAdSlots(): number {
  if (typeof document === "undefined") {
    return 0;
  }

  let updatedCount = 0;

  SQUARE_SLOT_IDS.forEach((slotId) => {
    const element = document.getElementById(slotId);
    if (!element) {
      return;
    }

    if (element.getAttribute("data-actview-slot") !== "square") {
      element.setAttribute("data-actview-slot", "square");
      updatedCount += 1;
    }

    if (!element.hasAttribute("data-actview")) {
      element.setAttribute("data-actview", "");
      updatedCount += 1;
    }

    if (element.getAttribute("data-actview-size") !== "square") {
      element.setAttribute("data-actview-size", "square");
      updatedCount += 1;
    }
  });

  return updatedCount;
}

export default function ActViewSPAHandler() {
  const pathname = usePathname();
  const lastSPAPathnameRef = useRef<string | null>(null);
  const hasLoggedLocalhostNoticeRef = useRef(false);
  const timerIdsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const isFirstLoad = lastSPAPathnameRef.current === null;
    const hasPathChanged =
      !isFirstLoad && lastSPAPathnameRef.current !== pathname;

    if (!isFirstLoad && !hasPathChanged) {
      return;
    }

    lastSPAPathnameRef.current = pathname;

    const isLocalhost =
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1" ||
      window.location.hostname === "::1" ||
      window.location.hostname === "[::1]";

    if (isLocalhost && !hasLoggedLocalhostNoticeRef.current) {
      hasLoggedLocalhostNoticeRef.current = true;
      logger.warn(
        "[ActView] Running on localhost; some ad demand sources may not return creatives.",
      );
    }

    let cancelled = false;

    const triggerSpaRefresh = (attempt: number) => {
      if (cancelled) {
        return;
      }

      // Normalize ad slot attributes on each attempt — elements may not be in the
      // DOM yet on the first try (streaming/Suspense can delay page content).
      const updatedSlots = normalizeSquareAdSlots();

      try {
        if (typeof window.actviewAds?.spa === "function") {
          window.actviewAds.spa();
          logger.info("[ActView] Triggered actviewAds.spa()", {
            pathname,
            attempt,
            isFirstLoad,
            hasPathChanged,
            updatedSlots,
          });
          return;
        }

        if (attempt < 10) {
          const timerId = setTimeout(() => triggerSpaRefresh(attempt + 1), 250);
          timerIdsRef.current.push(timerId);
          return;
        }

        logger.warn("[ActView] actviewAds.spa() not available after retry window", {
          pathname,
          isFirstLoad,
          hasPathChanged,
          updatedSlots,
        });
      } catch (error) {
        logger.error("[ActView] Failed to trigger SPA ad refresh:", error);
      }
    };

    const initialDelay = isFirstLoad ? 300 : 0;
    const initialTimerId = setTimeout(() => triggerSpaRefresh(0), initialDelay);
    timerIdsRef.current.push(initialTimerId);

    return () => {
      cancelled = true;
      timerIdsRef.current.forEach((timerId) => clearTimeout(timerId));
      timerIdsRef.current = [];
    };
  }, [pathname]);

  return null;
}
