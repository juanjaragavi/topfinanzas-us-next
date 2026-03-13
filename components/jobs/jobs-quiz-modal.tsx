"use client";

import { useState, useEffect } from "react";

export interface JobsQuizQuestion {
  id: string;
  question: string;
  options: { label: string; emoji?: string; value: string }[];
}

export interface JobsQuizModalProps {
  questions: JobsQuizQuestion[];
  journeyId: string;
  themeColor: string;
  themeColorLight: string;
  loadingMessages?: string[];
  loadingDuration?: number;
}

type Phase = "quiz" | "loading" | "done";

const DEFAULT_LOADING_MESSAGES = [
  "Analyzing your responses...",
  "Searching for matching positions...",
  "Ranking your top opportunities...",
  "Your job matches are almost ready!",
];

// ─── Inline loading sub-component ──────────────────────────────────────────
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
    <div className="flex flex-col items-center justify-center py-12 px-6">
      <div
        className="relative h-16 w-16 rounded-full border-4 border-gray-200 mb-8 animate-spin"
        style={{ borderTopColor: themeColor }}
      />
      <p className="text-lg font-semibold text-gray-800 text-center mb-6 min-h-[28px]">
        {messages[stepIndex]}
      </p>
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

// ─── Main Modal Component ──────────────────────────────────────────────────
export default function JobsQuizModal({
  questions,
  journeyId,
  themeColor,
  themeColorLight,
  loadingMessages = DEFAULT_LOADING_MESSAGES,
  loadingDuration = 3500,
}: JobsQuizModalProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [phase, setPhase] = useState<Phase>("quiz");
  const [hoveredOptionIndex, setHoveredOptionIndex] = useState<number | null>(null);
  
  // Disable body scroll when modal is open
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

  if (phase === "done") {
    return null; // Quiz is complete, unmount to reveal promise page underneath
  }

  const handleOptionClick = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setPhase("loading");
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/60 backdrop-blur-sm p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="jobs-quiz-question-title"
    >
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-[380px] overflow-hidden flex flex-col max-h-[90vh]">
        {phase === "quiz" && (
          <div className="p-8 py-10 overflow-y-auto">
            {/* Question Text */}
            <h2 
              id="jobs-quiz-question-title"
              className="text-lg font-medium text-gray-700 text-center mb-8 leading-snug"
            >
              {questions[currentQuestion].question}
            </h2>

            {/* Options */}
            <div 
              className="flex flex-col gap-3" 
              id={`paso-${currentQuestion + 1}-${journeyId}`}
            >
              {questions[currentQuestion].options.map((option, idx) => {
                const isHovered = hoveredOptionIndex === idx;
                
                return (
                  <button
                    key={`${option.value}-${idx}`}
                    onClick={handleOptionClick}
                    onMouseEnter={() => setHoveredOptionIndex(idx)}
                    onMouseLeave={() => setHoveredOptionIndex(null)}
                    onFocus={() => setHoveredOptionIndex(idx)}
                    onBlur={() => setHoveredOptionIndex(null)}
                    className="w-full py-3.5 px-4 rounded-[10px] text-center transition-all duration-200 active:scale-[0.98] shadow-sm hover:shadow"
                    style={{
                      backgroundColor: themeColor,
                      color: "white",
                      opacity: isHovered ? 0.9 : 1,
                    }}
                  >
                    <span className="font-medium text-base tracking-wide leading-tight">
                      {option.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {phase === "loading" && (
          <JobsLoadingState
            messages={loadingMessages}
            themeColor={themeColor}
            duration={loadingDuration}
            onComplete={() => setPhase("done")}
          />
        )}
      </div>
    </div>
  );
}
