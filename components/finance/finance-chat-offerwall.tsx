"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useTopAds } from "@/components/analytics/topads-spa-handler";
import { TopAdsSquare } from "@/components/ads/topads-placement";

export interface ChatQuestion {
  id: string;
  botMessage: string;
  options: { label: string; value: string }[];
}

export interface FinanceChatOfferwallProps {
  botName?: string;
  greeting?: string;
  questions: ChatQuestion[];
  theme: "green" | "blue";
  successMessage?: string;
  ctaButtonText?: string;
  ctaSecondaryText?: string;
  redirectTo: string;
  adStepIndex?: number;
  finalAction?: "cta" | "auto-redirect";
  redirectTypingDelayMs?: number;
}

interface ChatBubble {
  type: "bot" | "user" | "ad";
  text?: string;
}

const MAX_OPTIONS_PER_NODE = 3;

export function FinanceChatOfferwall({
  botName = "Assistant",
  greeting = "Let's find the best options for you.",
  questions,
  theme: _theme,
  successMessage = "Great options found for you!",
  ctaButtonText = "Show My Options",
  ctaSecondaryText = "Tap above to see your matches.",
  redirectTo,
  adStepIndex = 1,
  finalAction = "cta",
  redirectTypingDelayMs = 300,
}: FinanceChatOfferwallProps) {
  const router = useRouter();
  const { triggerSPA } = useTopAds();
  const [messages, setMessages] = useState<ChatBubble[]>([]);

  const [currentQuestion, setCurrentQuestion] = useState(-1);
  const [isTyping, setIsTyping] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [showCta, setShowCta] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const initRef = useRef(false);

  const scrollToBottom = useCallback(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const navigateToTarget = useCallback(
    (target: string) => {
      const isExternal = /^https?:\/\//i.test(target);
      if (isExternal) {
        window.location.href = target;
        return;
      }
      router.push(target);
    },
    [router],
  );

  const addBotMessage = useCallback((text: string, delay = 1000) => {
    setIsTyping(true);
    setShowOptions(false);
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setMessages((prev) => [...prev, { type: "bot", text }]);
        setIsTyping(false);
        resolve();
      }, delay);
    });
  }, []);

  const addAdMessage = useCallback((delay = 800) => {
    setIsTyping(true);
    setShowOptions(false);
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setMessages((prev) => [...prev, { type: "ad" }]);
        setIsTyping(false);
        resolve();
      }, delay);
    });
  }, []);

  useEffect(() => {
    if (initRef.current) return;
    initRef.current = true;

    const init = async () => {
      await addBotMessage(`Hi! I'm ${botName}.`, 1100);
      await addBotMessage(greeting, 1500);
      if (questions.length > 0) {
        setCurrentQuestion(0);
        await addBotMessage(questions[0].botMessage, 1700);
        setShowOptions(true);
      }
    };
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, showOptions, showCta, scrollToBottom]);

  const handleAnswer = useCallback(
    async (label: string) => {
      setMessages((prev) => [...prev, { type: "user", text: label }]);
      setShowOptions(false);

      const nextIndex = currentQuestion + 1;

      if (currentQuestion === adStepIndex - 1) {
        await addAdMessage(800);
        setTimeout(() => {
          triggerSPA();
        }, 500);
      }

      if (nextIndex < questions.length) {
        setCurrentQuestion(nextIndex);
        await addBotMessage(questions[nextIndex].botMessage, 1700);
        setShowOptions(true);
      } else {
        setCurrentQuestion(-1);
        await addBotMessage(successMessage, 1500);

        if (finalAction === "auto-redirect") {
          setIsTyping(true);
          await new Promise<void>((resolve) => {
            setTimeout(() => {
              setIsTyping(false);
              resolve();
            }, redirectTypingDelayMs);
          });
          navigateToTarget(redirectTo);
          return;
        }

        setShowCta(true);
      }
    },
    [
      currentQuestion,
      questions,
      addBotMessage,
      addAdMessage,
      successMessage,
      adStepIndex,
      triggerSPA,
      finalAction,
      redirectTypingDelayMs,
      redirectTo,
      navigateToTarget,
    ],
  );

  const handleCta = useCallback(() => {
    navigateToTarget(redirectTo);
  }, [navigateToTarget, redirectTo]);

  const visibleOptions =
    currentQuestion >= 0
      ? questions[currentQuestion].options.slice(0, MAX_OPTIONS_PER_NODE)
      : [];

  return (
    <main className="fixed inset-0 z-[9999] bg-[#F8F9FA] sm:bg-gray-100 flex justify-center items-start overflow-hidden">
      <div className="w-full h-full max-w-md bg-white flex flex-col shadow-2xl relative">
        <div className="flex-1 p-4 md:p-6 overflow-y-auto bg-white flex flex-col gap-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
            >
              {msg.type === "ad" ? (
                <div className="w-full max-w-sm mx-auto my-4">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-2">
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider block text-center mb-2">
                      Advertisement
                    </span>
                    <TopAdsSquare
                      id="square01"
                      className="min-h-[250px] mx-auto"
                    />
                  </div>
                </div>
              ) : (
                <div
                  className={`max-w-[85%] md:max-w-sm px-4 py-3 text-[15px] leading-relaxed shadow-sm ${
                    msg.type === "bot"
                      ? "bg-[#F3F4F6] text-gray-800 rounded-3xl rounded-tl-sm border-none"
                      : "bg-[#10B981] text-white rounded-2xl shadow-3d border border-black/[.15]"
                  }`}
                >
                  {msg.text}
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-[#F3F4F6] px-4 py-3 rounded-3xl rounded-tl-sm flex gap-1.5 items-center shadow-sm h-10 border-none">
                <span
                  className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                  style={{ animationDelay: "0ms" }}
                />
                <span
                  className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                  style={{ animationDelay: "150ms" }}
                />
                <span
                  className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                  style={{ animationDelay: "300ms" }}
                />
              </div>
            </div>
          )}

          {showOptions && currentQuestion >= 0 && (
            <div className="flex flex-col gap-2 mt-1 items-end">
              {visibleOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => handleAnswer(opt.label)}
                  className="max-w-[85%] md:max-w-sm px-5 py-3 rounded-2xl text-[15px] font-semibold transition-all duration-200 bg-[#10B981] text-white shadow-3d border border-black/[.15] hover:bg-[#059669] hover:shadow-3d-hover hover:translate-y-[1px] active:shadow-3d-active active:translate-y-[3px]"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          )}

          {showCta && (
            <div className="mt-4 space-y-3 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
              <h3 className="font-bold text-gray-900 text-lg mb-2">
                Results Ready
              </h3>
              <p className="text-sm text-gray-600 mb-4">{ctaSecondaryText}</p>
              <button
                type="button"
                onClick={handleCta}
                className="block w-full py-4 px-6 rounded-2xl text-white font-bold text-lg text-center transition-all shadow-3d border border-black/[.15] hover:shadow-3d-hover hover:translate-y-[1px] active:shadow-3d-active active:translate-y-[3px] bg-[#10B981] hover:bg-[#059669]"
              >
                {ctaButtonText} →
              </button>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>
      </div>
    </main>
  );
}
