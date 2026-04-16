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
}

interface ChatBubble {
  type: "bot" | "user" | "ad";
  text?: string;
}

export function FinanceChatOfferwall({
  botName = "Assistant",
  greeting = "Hello! I'm here to help you find the best financial options.",
  questions,
  theme,
  successMessage = "I found some great options for you!",
  ctaButtonText = "Show My Options",
  ctaSecondaryText = "To view your suggested options, please click above.",
  redirectTo,
  adStepIndex = 1,
}: FinanceChatOfferwallProps) {
  const router = useRouter();
  const { triggerSPA } = useTopAds();
  const [messages, setMessages] = useState<ChatBubble[]>([]);

  const themeClasses = {
    green: {
      bg: "bg-[#10B981]",
      hoverBg: "hover:bg-[#059669]",
    },
    blue: {
      bg: "bg-[#3B82F6]",
      hoverBg: "hover:bg-[#2563EB]",
    },
  };

  const currentTheme = themeClasses[theme] || themeClasses.green;
  const [currentQuestion, setCurrentQuestion] = useState(-1);
  const [isTyping, setIsTyping] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [showCta, setShowCta] = useState(false);

  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const addBotMessage = useCallback((text: string, delay = 1200) => {
    return new Promise<void>((resolve) => {
      setIsTyping(true);
      setShowOptions(false);
      setTimeout(() => {
        setMessages((prev) => [...prev, { type: "bot", text }]);
        setIsTyping(false);
        resolve();
      }, delay);
    });
  }, []);

  const addAdMessage = useCallback((delay = 800) => {
    return new Promise<void>((resolve) => {
      setIsTyping(true);
      setShowOptions(false);
      setTimeout(() => {
        setMessages((prev) => [...prev, { type: "ad" }]);
        setIsTyping(false);
        resolve();
      }, delay);
    });
  }, []);

  useEffect(() => {
    const init = async () => {
      await new Promise((r) => setTimeout(r, 500)); // Initial thinking gap
      await addBotMessage(`Hi! I'm ${botName}. ${greeting}`, 1000);
      await new Promise((r) => setTimeout(r, 600)); // Gap before next message
      if (questions.length > 0) {
        setCurrentQuestion(0);
        await addBotMessage(questions[0].botMessage, 1200);
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

      // Inject Ad at specific step
      if (currentQuestion === adStepIndex - 1) {
        await new Promise((r) => setTimeout(r, 400));
        await addAdMessage(800);
        setTimeout(() => {
          triggerSPA();
        }, 500);
      }

      await new Promise((r) => setTimeout(r, 500)); // Human typing latency

      if (nextIndex < questions.length) {
        setCurrentQuestion(nextIndex);
        await addBotMessage(questions[nextIndex].botMessage, 1200);
        setShowOptions(true);
      } else {
        setCurrentQuestion(-1);
        await addBotMessage(successMessage, 1200);
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
    ],
  );

  const handleCta = useCallback(() => {
    router.push(redirectTo);
  }, [router, redirectTo]);

  return (
    <main className="fixed inset-0 z-[9999] bg-[#F8F9FA] sm:bg-gray-100 flex justify-center items-start overflow-hidden">
      <div className="w-full h-full max-w-md bg-white flex flex-col shadow-2xl relative">
        {
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
                        : `text-white rounded-3xl rounded-tr-sm ${currentTheme.bg}`
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
              <div className="flex flex-col items-end gap-2 mt-2 w-full">
                {questions[currentQuestion].options.slice(0, 3).map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => handleAnswer(opt.label)}
                    className={`self-end text-right w-auto px-5 py-3 text-[15px] font-semibold text-white shadow-sm transition-all duration-200 transform hover:-translate-y-0.5 rounded-3xl rounded-tr-sm max-w-[85%] md:max-w-sm ${currentTheme.bg} ${currentTheme.hoverBg}`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}

            {showCta && (
              <div className="mt-4 space-y-3 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  Your Results Are Ready
                </h3>
                <p className="text-sm text-gray-600 mb-4">{ctaSecondaryText}</p>
                <button
                  type="button"
                  onClick={handleCta}
                  className="block w-full rounded-2xl bg-[#3B82F6] hover:bg-[#2563EB] text-white py-3 px-6 text-base font-semibold transition-all text-center shadow-3d border border-black/[.15] hover:shadow-3d-hover hover:translate-y-[1px] active:shadow-3d-active active:translate-y-[3px]"
                >
                  {ctaButtonText} →
                </button>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>
        }
      </div>
    </main>
  );
}
