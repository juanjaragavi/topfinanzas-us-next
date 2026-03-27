"use client";

import { useEffect, useState } from "react";

interface JobsDeferredAdProps {
  type: "rewarded" | "square";
  id?: string;
  defer?: boolean;
  texts?: string;
  className?: string;
}

/**
 * JobsDeferredAd
 *
 * Renders ad slots that are always present in the DOM.
 * When `defer={true}`, slots are hidden (zero height, overflow hidden) until
 * the "jobsQuizDone" event fires. TopAds activation is handled separately by
 * the global SPA handler once the quiz completion event removes the page-level
 * exclusion and re-injects the vendor script.
 *
 * IMPORTANT: The slot div must exist in the DOM before topAds.spa() runs.
 * Conditional mounting (returning null until the event) causes TopAds to
 * scan an empty DOM and produce unfilled placements. This component avoids
 * that race condition by keeping the div mounted at all times.
 */
export default function JobsDeferredAd({
  type,
  id,
  defer = false,
  texts,
  className,
}: JobsDeferredAdProps) {
  const [revealed, setRevealed] = useState(!defer);

  useEffect(() => {
    if (!defer) return;

    const handler = () => {
      setRevealed(true);
    };

    window.addEventListener("jobsQuizDone", handler);
    return () => window.removeEventListener("jobsQuizDone", handler);
  }, [defer]);

  // Inline style toggling: slot is always in the DOM.
  // Hidden state: zero height, no overflow, no margin — invisible to TopAds
  // fill cycles that run before quiz completion.
  // Revealed state: natural block flow restored.
  const deferStyle: React.CSSProperties = revealed
    ? {}
    : { height: 0, overflow: "hidden", margin: 0, padding: 0 };

  if (type === "rewarded") {
    const rewardedProps = texts ? { "data-topads-texts": texts } : {};
    return (
      <div
        data-topads-rewarded
        {...rewardedProps}
        style={deferStyle}
        aria-hidden={!revealed}
      />
    );
  }

  return (
    <div
      id={id}
      data-topads
      data-topads-size="square"
      className={className ?? "items-center justify-center flex w-full my-8"}
      style={deferStyle}
      aria-hidden={!revealed}
    />
  );
}
