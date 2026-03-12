"use client";

import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";

import { useTranslation } from "@/components/jobs/translation-provider";

export interface JobsQuizQuestion {
  id: string;
  question: string;
  options: { label: string; emoji?: string; value: string }[];
}

export interface JobsQuizEntryProps {
  /** Badge shown in hero section */
  badge?: string;
  /** Title above the quiz card */
  title?: string;
  /** Subtitle below the title */
  subtitle?: string;
  /** Array of 2–4 quiz questions */
  questions: JobsQuizQuestion[];
  /** Journey ID for analytics tracking (e.g. "quiz-jobs-01") */
  journeyId: string;
  /** Base theme color hex */
  themeColor: string;
  /** Lighter shade for hover effects */
  themeColorLight: string;
  /** Cycling messages shown during the loading phase */
  loadingMessages?: string[];
  /** Duration of loading animation in ms */
  loadingDuration?: number;
  /** Heading shown in the CTA card */
  ctaHeading: string;
  /** Body copy shown under the CTA heading */
  ctaBody?: string;
  /** Primary CTA button label */
  ctaButtonText: string;
  /** Smaller secondary text below the CTA button */
  ctaSecondaryText?: string;
  /** Icon/emoji shown in the CTA card */
  ctaIcon?: string;
  /** Page to navigate to after CTA click */
  redirectTo: string;
}

type Phase = "quiz" | "loading" | "cta";

const DEFAULT_LOADING_MESSAGES = [
  "Analyzing your responses…",
  "Searching for matching positions…",
  "Ranking your top opportunities…",
  "Your job matches are almost ready!",
];

// ─── Inline fake loading sub-component ─────────────────────────────────────
function JobsLoadingState({
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

  useEffect(() => {
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
    return () => clearInterval(stepTimer);
  }, [duration, messages.length]);

  useEffect(() => {
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
    return () => clearInterval(progressTimer);
  }, [duration]);

  useEffect(() => {
    if (progress >= 100) {
      const t = setTimeout(onComplete, 400);
      return () => clearTimeout(t);
    }
  }, [progress, onComplete]);

  return (
    <div className="flex flex-col items-center justify-center py-14 px-6">
      {/* Spinner */}
      <div
        className="relative h-16 w-16 rounded-full border-4 border-gray-200 mb-8 animate-spin"
        style={{ borderTopColor: themeColor }}
      />

      {/* Cycling message */}
      <p className="text-lg font-semibold text-gray-800 text-center mb-6 min-h-[28px]">
        {messages[stepIndex]}
      </p>

      {/* Progress bar */}
      <div className="w-full max-w-xs h-2.5 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-200 ease-out"
          style={{ width: `${progress}%`, backgroundColor: themeColor }}
        />
      </div>
      <p className="text-sm text-gray-500 mt-3">
        {Math.round(progress)}% complete
      </p>
    </div>
  );
}

// ─── Main component ─────────────────────────────────────────────────────────
export default function JobsQuizEntry({
  badge = "JOB QUIZ",
  title,
  subtitle,
  questions,
  journeyId,
  themeColor,
  themeColorLight,
  loadingMessages = DEFAULT_LOADING_MESSAGES,
  loadingDuration = 3500,
  ctaHeading,
  ctaBody,
  ctaButtonText,
  ctaSecondaryText = "See available positions now",
  ctaIcon = "🎯",
  redirectTo,
}: JobsQuizEntryProps) {
  const router = useRouter();
  const t = useTranslation();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [phase, setPhase] = useState<Phase>("quiz");

  const progress =
    phase === "quiz" ? ((currentQuestion + 1) / questions.length) * 100 : 100;

  const handleAnswer = useCallback(() => {
    const nextIndex = currentQuestion + 1;
    if (nextIndex < questions.length) {
      setCurrentQuestion(nextIndex);
    } else if (phase === "quiz") {
      setPhase("loading");
    }
  }, [currentQuestion, questions.length, phase]);

  const handleLoadingComplete = useCallback(() => {
    setPhase((prev) => (prev === "loading" ? "cta" : prev));
  }, []);

  const handleCta = useCallback(() => {
    if (redirectTo.startsWith("http")) {
      window.location.href = redirectTo;
    } else {
      router.push(redirectTo);
    }
  }, [router, redirectTo]);

  const q = questions[currentQuestion];

  return (
    <main
      className="flex min-h-screen flex-col bg-gray-50"
      data-journey={journeyId}
    >

      {/* Hero banner */}
      <section
        className="py-6 md:py-10 text-white"
        style={{
          background: `linear-gradient(135deg, ${themeColor} 0%, ${themeColorLight} 100%)`,
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 bg-white/20 tracking-wide">
            {badge}
          </div>
          {title && (
            <h1 className="text-2xl md:text-3xl font-bold leading-tight">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="mt-2 text-white/80 text-sm md:text-base max-w-xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      </section>

      {/* Quiz area */}
      <div className="flex-1 flex items-start justify-center px-4 py-8">
        <div className="w-full max-w-lg">
          {/* Progress bar — visible during quiz phase */}
          {phase === "quiz" && (
            <div className="mb-6">
              <div className="flex justify-between text-xs text-gray-500 mb-1.5 font-medium">
                <span>
                  {t("quizEntry.questionOf", "Question {n} of {total}")
                    .replace("{n}", String(currentQuestion + 1))
                    .replace("{total}", String(questions.length))}
                </span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progress}%`, backgroundColor: themeColor }}
                />
              </div>
            </div>
          )}

          {/* Quiz card */}
          {phase === "quiz" && q && (
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 text-center mb-8 leading-snug">
                {q.question}
              </h2>

              <div
                id={`paso-${currentQuestion + 1}-${journeyId}`}
                className="flex flex-col gap-3"
              >
                {q.options.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={handleAnswer}
                    className="w-full flex items-center gap-3 py-4 px-5 rounded-xl text-white font-semibold text-base text-left transition-all duration-150 hover:scale-[1.02] active:scale-[0.98] shadow-sm"
                    style={{ backgroundColor: themeColor }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = themeColorLight)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = themeColor)
                    }
                  >
                    {option.emoji && (
                      <span className="text-xl flex-shrink-0">
                        {option.emoji}
                      </span>
                    )}
                    <span>{option.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Loading card */}
          {phase === "loading" && (
            <div className="bg-white rounded-2xl shadow-md">
              <JobsLoadingState
                messages={loadingMessages}
                themeColor={themeColor}
                duration={loadingDuration}
                onComplete={handleLoadingComplete}
              />
            </div>
          )}

          {/* CTA card */}
          {phase === "cta" && (
            <div
              id={`paso-cta-${journeyId}`}
              className="bg-white rounded-2xl shadow-md p-8 text-center"
            >
              {ctaIcon && (
                <div
                  className="inline-flex items-center justify-center w-20 h-20 rounded-2xl text-4xl mb-6"
                  style={{ backgroundColor: `${themeColor}18` }}
                >
                  {ctaIcon}
                </div>
              )}

              <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-snug">
                {ctaHeading}
              </h2>

              {ctaBody && (
                <p className="text-gray-500 text-sm mb-6 max-w-sm mx-auto">
                  {ctaBody}
                </p>
              )}

              <button
                type="button"
                onClick={handleCta}
                className="w-full py-4 px-6 rounded-xl text-white font-bold text-lg transition-all duration-150 hover:scale-[1.02] active:scale-[0.98] shadow-md mb-4"
                style={{ backgroundColor: themeColor }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = themeColorLight)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = themeColor)
                }
              >
                {ctaButtonText}
              </button>

              <p className="text-xs text-gray-400 mt-2">{ctaSecondaryText}</p>
            </div>
          )}
        </div>
      </div>

    </main>
  );
}
