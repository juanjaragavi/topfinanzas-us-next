"use client";

import { useEffect, useState } from "react";

/**
 * Question-less Jobs offerwall container.
 *
 * Renders just the `data-topads-quiz` scaffold with NO question children
 * so TopAds skips directly to the preloader and CTA button.
 * Deferred to client-side mount so the page content paints first.
 */

interface JobsOfferwallDirectProps {
  themeColor: string;
  loadingMessage: string;
  skipAds?: boolean;
}

export default function JobsOfferwallDirect({
  themeColor,
  loadingMessage,
  skipAds = false,
}: JobsOfferwallDirectProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Defer scaffold until after first paint so page content is visible
    // before TopAds creates its overlay
    requestAnimationFrame(() => setMounted(true));
  }, []);

  if (!mounted) return null;
  const texts = JSON.stringify({
    loading: loadingMessage,
    ctaTitle: "Found the best jobs 2026",
    ctaButton: "See Jobs Now",
    ctaDisclaimer: "To continue, it will be necessary to watch a short ad.",
  });

  return (
    <div
      data-topads-quiz=""
      data-quiz-accent={themeColor}
      data-topads-texts={texts}
      data-quiz-skip-ad={skipAds ? "true" : "false"}
      aria-hidden="true"
      style={{
        position: "fixed",
        width: "1px",
        height: "1px",
        padding: 0,
        margin: 0,
        overflow: "hidden",
        opacity: 0,
        pointerEvents: "none",
        whiteSpace: "nowrap",
        clipPath: "inset(50%)",
      }}
    />
  );
}
