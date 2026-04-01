"use client";

import { useEffect, useState } from "react";
import type { JobsQuizConfig } from "@/lib/jobs-quiz-config";

/**
 * Hidden ad-unit container for the Jobs offerwall quiz.
 *
 * Structural clone of lib/offerwall-for-finance.tsx.
 * The TopAds external script discovers this DOM node via the
 * `data-topads-quiz` attribute, parses the question/answer markup,
 * and renders its own quiz modal overlay with the supplied accent
 * colour and copy strings. Deferred to client-side mount so the page
 * content paints first.
 */

interface JobsOfferwallProps {
  config: JobsQuizConfig;
}

export default function JobsOfferwall({ config }: JobsOfferwallProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Defer scaffold until after first paint so page content is visible
    // before TopAds creates its overlay
    requestAnimationFrame(() => setMounted(true));
  }, []);

  if (!mounted) return null;
  const texts = JSON.stringify({
    loading: config.loadingMessage,
    ctaTitle: "Found the best jobs 2026",
    ctaButton: "See Jobs Now",
    ctaDisclaimer: "To continue, it will be necessary to watch a short ad.",
  });

  return (
    <div
      data-topads-quiz=""
      data-quiz-accent={config.themeColor}
      data-topads-texts={texts}
      data-quiz-skip-ad={config.skipAds ? "true" : "false"}
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
    >
      {config.questions.map((q) => (
        <div key={q.id} data-quiz-question="">
          <span
            data-question-text=""
            style={{
              all: "unset",
              display: "block",
            }}
          >
            {q.question}
          </span>
          {q.options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              data-answer=""
              style={{
                all: "unset",
                display: "block",
                backgroundColor: "#10B981",
                color: "#FFFFFF",
              }}
            >
              {opt.label}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
