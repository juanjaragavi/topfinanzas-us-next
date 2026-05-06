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
 * the "jobsQuizDone" event fires.
 *
 * IMPORTANT: The slot div must exist in the DOM before third-party ad scripts
 * evaluate the page.
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
  // Hidden state: zero height, no overflow, no margin — invisible until reveal.
  // fill cycles that run before quiz completion.
  // Revealed state: natural block flow restored.
  const deferStyle: React.CSSProperties = revealed
    ? {}
    : { height: 0, overflow: "hidden", margin: 0, padding: 0 };

  if (type === "rewarded") {
    const rewardedLabel = texts ?? "Ads";
    return (
      <div style={deferStyle} aria-hidden={!revealed}>
        <p
          style={{
            fontSize: "10px",
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          {rewardedLabel}
        </p>
        <div id="av_top"></div>
      </div>
    );
  }

  return (
    <div
      id={id}
      className={className ?? "items-center justify-center flex w-full my-8"}
      style={deferStyle}
      aria-hidden={!revealed}
    />
  );
}
