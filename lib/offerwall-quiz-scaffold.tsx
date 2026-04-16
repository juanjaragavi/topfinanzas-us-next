"use client";

import { useEffect, useState } from "react";

/* ─── Design-system constants (Iter. 2 — fintech button spec) ─── */

/** Primary accent — Brand Green (#10B981) */
const QUIZ_BUTTON_BG = "#10B981";
const QUIZ_BUTTON_COLOR = "#FFFFFF";
const QUIZ_BUTTON_FONT = "var(--font-inter), Inter, system-ui, sans-serif";
const QUIZ_BUTTON_FONT_SIZE = "14px";
const QUIZ_BUTTON_FONT_WEIGHT = 500;
/** Iter. 2: 12px radius */
const QUIZ_BUTTON_BORDER_RADIUS = "12px";
/** Iter. 2: 50px target height */
const QUIZ_BUTTON_MIN_HEIGHT = "50px";
/** Subtle depth shadow — matches Tailwind shadow-md */
const QUIZ_BUTTON_BOX_SHADOW =
  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)";

/* ─── Shared hidden-container styles ─── */

const HIDDEN_CONTAINER_STYLE: React.CSSProperties = {
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
};

const QUESTION_TEXT_STYLE: React.CSSProperties = {
  all: "unset",
  display: "block",
};

const ANSWER_BUTTON_STYLE: React.CSSProperties = {
  all: "unset",
  display: "block",
  backgroundColor: QUIZ_BUTTON_BG,
  color: QUIZ_BUTTON_COLOR,
  fontFamily: QUIZ_BUTTON_FONT,
  fontSize: QUIZ_BUTTON_FONT_SIZE,
  fontWeight: QUIZ_BUTTON_FONT_WEIGHT,
  borderRadius: QUIZ_BUTTON_BORDER_RADIUS,
  minHeight: QUIZ_BUTTON_MIN_HEIGHT,
  boxShadow: QUIZ_BUTTON_BOX_SHADOW,
};

/* ─── Public types ─── */

export interface OfferwallQuizOption {
  label: string;
  value: string;
}

export interface OfferwallQuizQuestion {
  id: string;
  question: string;
  options: OfferwallQuizOption[];
}

export interface OfferwallCtaTexts {
  loading: string;
  ctaTitle: string;
  ctaButton: string;
  ctaDisclaimer: string;
}

/* ─── Quiz scaffold (with questions) ─── */

interface OfferwallQuizScaffoldProps {
  themeColor: string;
  texts: OfferwallCtaTexts;
  questions: OfferwallQuizQuestion[];
  skipAds?: boolean;
}

/**
 * Hidden ad-unit container for TopAds quiz overlays.
 *
 * The TopAds external script discovers this DOM node via the
 * `data-topads-quiz` attribute, parses the question/answer markup,
 * and renders its own quiz modal overlay with the supplied accent
 * colour and copy strings. Deferred to client-side mount so the page
 * content paints first.
 *
 * Shared by both Jobs and Finance verticals — only the CTA copy and
 * question data differ.
 */
export function OfferwallQuizScaffold({
  themeColor,
  texts,
  questions,
  skipAds = false,
}: OfferwallQuizScaffoldProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true));
  }, []);

  if (!mounted) return null;

  return (
    <div
      data-topads-quiz=""
      data-quiz-accent={themeColor}
      data-topads-texts={JSON.stringify(texts)}
      data-quiz-skip-ad={skipAds ? "true" : "false"}
      aria-hidden="true"
      style={HIDDEN_CONTAINER_STYLE}
    >
      {questions.map((q) => (
        <div key={q.id} data-quiz-question="">
          <span data-question-text="" style={QUESTION_TEXT_STYLE}>
            {q.question}
          </span>
          {q.options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              data-answer=""
              style={ANSWER_BUTTON_STYLE}
            >
              {opt.label}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

/* ─── Direct scaffold (no questions) ─── */

interface OfferwallDirectScaffoldProps {
  themeColor: string;
  texts: OfferwallCtaTexts;
  skipAds?: boolean;
}

/**
 * Question-less offerwall container.
 *
 * Renders just the `data-topads-quiz` scaffold with NO question children
 * so TopAds skips directly to the preloader and CTA button.
 * Deferred to client-side mount so the page content paints first.
 *
 * Shared by both Jobs and Finance direct variants.
 */
export function OfferwallDirectScaffold({
  themeColor,
  texts,
  skipAds = false,
}: OfferwallDirectScaffoldProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true));
  }, []);

  if (!mounted) return null;

  return (
    <div
      data-topads-quiz=""
      data-quiz-accent={themeColor}
      data-topads-texts={JSON.stringify(texts)}
      data-quiz-skip-ad={skipAds ? "true" : "false"}
      aria-hidden="true"
      style={HIDDEN_CONTAINER_STYLE}
    />
  );
}
