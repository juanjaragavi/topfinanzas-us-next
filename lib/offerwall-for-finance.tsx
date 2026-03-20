"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

import type { FinanceQuizConfig } from "@/lib/finance-quiz-config";
import { FINANCE_DELAYED_ADS_EVENT } from "@/lib/finance-quiz-config";

/* ═══════════════════════════════════════════════════════════════════════════
 * Types
 * ═══════════════════════════════════════════════════════════════════════════ */

type Phase = "quiz" | "loading" | "cta" | "done";

interface FinanceOfferwallProps {
  config: FinanceQuizConfig;
  /** URL to navigate to when the user completes the CTA action */
  redirectUrl?: string;
}

/* ═══════════════════════════════════════════════════════════════════════════
 * Inline Loading Sub-Component
 *
 * Mirrors the BudgetBee FakeLoadingState pattern: spinner + rotating
 * messages + linear progress bar with percentage counter.
 * ═══════════════════════════════════════════════════════════════════════════ */

function FinanceLoadingState({
  messages,
  themeColor,
  duration,
  onComplete,
}: {
  messages: string[];
  themeColor: string;
  duration: number;
  onComplete: () => void;
}) {
  const [stepIndex, setStepIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const initializedRef = useRef(false);
  const completeFiredRef = useRef(false);

  /* ── Single-init guard: prevents StrictMode double-mount from spawning
   *    duplicate intervals. The first mount claims the ref; the second
   *    mount (StrictMode re-mount) sees it as true and skips. ── */
  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;

    const stepInterval = duration / messages.length;
    const stepTimer = setInterval(() => {
      setStepIndex((prev) => {
        const next = prev + 1;
        if (next >= messages.length) {
          clearInterval(stepTimer);
          return prev;
        }
        return next;
      });
    }, stepInterval);

    const tick = 50;
    const increment = (tick / duration) * 100;
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return Math.min(prev + increment, 100);
      });
    }, tick);

    return () => {
      clearInterval(stepTimer);
      clearInterval(progressTimer);
    };
  }, [duration, messages.length]);

  useEffect(() => {
    if (progress >= 100 && !completeFiredRef.current) {
      completeFiredRef.current = true;
      const t = setTimeout(onComplete, 400);
      return () => clearTimeout(t);
    }
  }, [progress, onComplete]);

  return (
    <div className="flex flex-col items-center justify-center px-6 py-12">
      {/* Spinner */}
      <div
        className="relative mb-8 h-16 w-16 animate-spin rounded-full border-4 border-gray-200"
        style={{ borderTopColor: themeColor }}
      />

      {/* Message */}
      <p className="mb-6 min-h-[28px] text-center text-lg font-semibold text-gray-800">
        {messages[stepIndex]}
      </p>

      {/* Progress bar */}
      <div className="h-2.5 w-full max-w-xs overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-full rounded-full transition-all duration-200 ease-out"
          style={{ width: `${progress}%`, backgroundColor: themeColor }}
        />
      </div>

      <p className="mt-3 text-sm text-gray-500">
        {Math.round(progress)}% complete
      </p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
 * Finance Offerwall Modal
 *
 * Three-phase state machine identical to BudgetBee's GamingQuizEntry:
 *   1. quiz   – sequential questions with progress bar
 *   2. loading – fake search animation with rotating domain-specific copy
 *   3. cta    – reward gate with primary action button
 *
 * On CTA click the modal dispatches `FINANCE_DELAYED_ADS_EVENT` for the
 * ad-activation pipeline, then unmounts (phase → done).
 * ═══════════════════════════════════════════════════════════════════════════ */

export default function FinanceOfferwall({
  config,
  redirectUrl,
}: FinanceOfferwallProps) {
  const pathname = usePathname();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [phase, setPhase] = useState<Phase>("quiz");
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const {
    questions,
    journeyId,
    themeColor,
    themeColorLight,
    loadingMessages,
    loadingDuration,
    ctaTitle,
    ctaButtonLabel,
    ctaDisclaimer,
  } = config;

  /* ── Body scroll lock while modal is visible ── */
  useEffect(() => {
    if (phase !== "done") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  /* ── Unmount when complete ── */
  if (phase === "done") {
    return null;
  }

  const handleOptionClick = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setPhase("loading");
    }
  };

  const handleLoadingComplete = () => {
    setPhase("cta");
  };

  const handleCtaClick = () => {
    setPhase("done");

    // Dispatch delayed-ads activation event (same pattern as jobs vertical)
    window.dispatchEvent(new CustomEvent("financeQuizDone"));
    window.dispatchEvent(
      new CustomEvent(FINANCE_DELAYED_ADS_EVENT, {
        detail: { path: pathname, journeyId },
      }),
    );

    // Redirect to requirements page if specified
    if (redirectUrl) {
      window.location.href = redirectUrl;
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/60 backdrop-blur-sm p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="finance-quiz-question-title"
    >
      <div className="flex w-full max-w-[380px] max-h-[90vh] flex-col overflow-hidden rounded-2xl bg-white shadow-xl">
        {/* ── Phase 1: Quiz ── */}
        {phase === "quiz" && (
          <>
            {/* Progress bar */}
            <div
              className="h-1.5 w-full shrink-0"
              style={{ backgroundColor: `${themeColorLight}40` }}
            >
              <div
                className="h-full transition-all duration-300 ease-out"
                style={{
                  width: `${progress}%`,
                  backgroundColor: themeColor,
                }}
              />
            </div>

            <div className="flex-1 overflow-y-auto p-8 py-10">
              <h2
                id="finance-quiz-question-title"
                className="mb-8 text-center text-lg font-medium leading-snug text-gray-700"
              >
                {questions[currentQuestion].question}
              </h2>

              <div
                className="flex flex-col gap-3"
                id={`paso-${currentQuestion + 1}-${journeyId}`}
              >
                {questions[currentQuestion].options.map((option, idx) => {
                  const isHovered = hoveredIdx === idx;

                  return (
                    <button
                      key={`${option.value}-${idx}`}
                      type="button"
                      onClick={handleOptionClick}
                      onMouseEnter={() => setHoveredIdx(idx)}
                      onMouseLeave={() => setHoveredIdx(null)}
                      onFocus={() => setHoveredIdx(idx)}
                      onBlur={() => setHoveredIdx(null)}
                      className="w-full rounded-[10px] px-4 py-3.5 text-center shadow-sm transition-all duration-200 hover:shadow active:scale-[0.98]"
                      style={{
                        backgroundColor: themeColor,
                        color: "white",
                        opacity: isHovered ? 0.9 : 1,
                        boxShadow: `0 8px 20px ${themeColor}33`,
                      }}
                    >
                      <span className="text-base font-medium leading-tight tracking-wide">
                        {option.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </>
        )}

        {/* ── Phase 2: Fake Loading ── */}
        {phase === "loading" && (
          <>
            {/* Full progress bar */}
            <div
              className="h-1.5 w-full shrink-0"
              style={{ backgroundColor: `${themeColorLight}40` }}
            >
              <div
                className="h-full"
                style={{ width: "100%", backgroundColor: themeColor }}
              />
            </div>

            <FinanceLoadingState
              messages={loadingMessages}
              themeColor={themeColor}
              duration={loadingDuration}
              onComplete={handleLoadingComplete}
            />
          </>
        )}

        {/* ── Phase 3: CTA Reward Gate ── */}
        {phase === "cta" && (
          <>
            {/* Full progress bar */}
            <div
              className="h-1.5 w-full shrink-0"
              style={{ backgroundColor: `${themeColorLight}40` }}
            >
              <div
                className="h-full"
                style={{ width: "100%", backgroundColor: themeColor }}
              />
            </div>

            <div className="p-8 py-10">
              <h2
                id="finance-quiz-question-title"
                className="mb-6 text-center text-xl font-semibold leading-snug text-gray-900"
              >
                {ctaTitle}
              </h2>

              <button
                type="button"
                onClick={handleCtaClick}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = themeColorLight;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = themeColor;
                }}
                onFocus={(e) => {
                  e.currentTarget.style.backgroundColor = themeColorLight;
                }}
                onBlur={(e) => {
                  e.currentTarget.style.backgroundColor = themeColor;
                }}
                className="w-full rounded-2xl px-4 py-3.5 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:translate-y-0"
                style={{
                  backgroundColor: themeColor,
                  boxShadow: `0 12px 24px ${themeColor}33`,
                }}
              >
                {ctaButtonLabel}
              </button>

              <p className="mt-3 text-center text-xs leading-relaxed text-slate-500">
                {ctaDisclaimer}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
