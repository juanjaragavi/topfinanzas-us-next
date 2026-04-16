"use client";

import { useEffect } from "react";
import { logger } from "@/lib/logger";

interface TopAdsPlacementProps {
  /**
   * Unique ID for this ad placement (e.g., "square01", "square02").
   * Optional when `unitIndex` is provided.
   */
  id?: string;

  /**
   * 1-based index used to generate the ad container ID as `square0{unitIndex}`.
   * When provided, overrides `id`.
   */
  unitIndex?: number;

  /**
   * Ad size format
   * @default "square"
   */
  size?: "square" | "leaderboard" | "skyscraper" | "banner";

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Minimum height for the ad container
   */
  minHeight?: string;
}

/**
 * TopAds Ad Placement Component
 *
 * Renders a div that will be populated with TopAds advertisements.
 * The component automatically logs when it's mounted for debugging.
 *
 * @example
 * ```tsx
 * <TopAdsPlacement id="square01" size="square" />
 * <TopAdsPlacement id="square02" size="square" minHeight="250px" />
 * ```
 */
export default function TopAdsPlacement({
  id,
  unitIndex,
  size = "square",
  className = "",
  minHeight = "250px",
}: TopAdsPlacementProps) {
  const effectiveId = unitIndex != null ? `square0${unitIndex}` : id;

  useEffect(() => {
    if (!effectiveId) {
      logger.warn("[TopAds] No id or unitIndex provided — skipping mount");
      return;
    }

    logger.info(
      `[TopAds] Ad placement mounted: ${effectiveId} (${size})${
        unitIndex != null ? ` [unitIndex=${unitIndex}]` : ""
      }`,
    );

    // Log when the div is actually in the DOM
    const element = document.getElementById(effectiveId);
    if (element) {
      logger.info(`[TopAds] Ad container found in DOM: ${effectiveId}`);
    } else {
      logger.warn(`[TopAds] Ad container not found in DOM: ${effectiveId}`);
    }
  }, [effectiveId, size, unitIndex]);

  if (!effectiveId) return null;

  return (
    <div
      id={effectiveId}
      data-topads
      data-topads-size={size}
      className={`topads-placement ${className}`}
      style={{
        minHeight,
        display: "block",
        margin: "20px auto",
        textAlign: "center",
      }}
      aria-label={`Advertisement ${effectiveId}`}
    />
  );
}

/**
 * Square ad placement (300x250 or similar)
 */
export function TopAdsSquare({
  id,
  className,
}: {
  id: string;
  className?: string;
}) {
  return (
    <TopAdsPlacement
      id={id}
      size="square"
      className={className}
      minHeight="250px"
    />
  );
}

/**
 * Leaderboard ad placement (728x90 or similar)
 */
export function TopAdsLeaderboard({
  id,
  className,
}: {
  id: string;
  className?: string;
}) {
  return (
    <TopAdsPlacement
      id={id}
      size="leaderboard"
      className={className}
      minHeight="90px"
    />
  );
}

/**
 * Banner ad placement (320x50 or similar)
 */
export function TopAdsBanner({
  id,
  className,
}: {
  id: string;
  className?: string;
}) {
  return (
    <TopAdsPlacement
      id={id}
      size="banner"
      className={className}
      minHeight="50px"
    />
  );
}
