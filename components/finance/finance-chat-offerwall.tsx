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
  const [hasStarted, setHasStarted] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const addBotMessage = useCallback((text: string, delay = 1200) => {
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
    const init = async () => {
      await addBotMessage(`Hi! I'm ${botName}. ${greeting}`, 2000);
      if (questions.length > 0) {
        setCurrentQuestion(0);
        await addBotMessage(questions[0].botMessage, 2200);
        setShowOptions(true);
      }
    };
    if (hasStarted) {
      init();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasStarted]);

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
        await addAdMessage(800);
        setTimeout(() => {
          triggerSPA();
        }, 500);
      }

      if (nextIndex < questions.length) {
        setCurrentQuestion(nextIndex);
        await addBotMessage(questions[nextIndex].botMessage, 2400);
        setShowOptions(true);
      } else {
        setCurrentQuestion(-1);
        await addBotMessage(successMessage, 2200);
        setShowCta(true);
      }
    },
    [currentQuestion, questions, addBotMessage, addAdMessage, successMessage, adStepIndex, triggerSPA],
  );

  const handleCta = useCallback(() => {
    router.push(redirectTo);
  }, [router, redirectTo]);

  return (
    <main className="fixed inset-0 z-[9999] bg-[#F8F9FA] sm:bg-gray-100 flex justify-center items-start overflow-hidden">
      <div className="w-full h-full max-w-md bg-white flex flex-col shadow-2xl relative">
        {!hasStarted ? (
          <div className="flex flex-col items-center justify-center h-full p-6 bg-[#F8F9FA]">
            <h1 className="text-lg font-semibold text-center text-gray-700 mb-8 leading-snug">
              Answer a few questions in our chat to find your loan. It&apos;s very quick!
            </h1>
            
            <div className="w-full flex items-center justify-center mb-8 relative">
              <div className="w-full h-px bg-[#FDBA74] absolute top-1/2 left-0 -translate-y-1/2"></div>
              <div className="w-6 h-6 rounded-full bg-white border border-[#FDBA74] text-[#FDBA74] flex items-center justify-center relative z-10">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 w-full flex flex-col items-center">
              <h2 className="text-lg font-medium text-gray-900 mb-6">Shall we begin?</h2>
              <button
                type="button"
                onClick={() => setHasStarted(true)}
                className="w-full relative bg-[#FED7AA] hover:bg-[#FDBA74] text-[#9A3412] font-semibold py-3.5 rounded-lg transition-colors"
              >
                <div className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#F59E0B]"></div>
                Let&apos;s do it!
              </button>
            </div>
          </div>
        ) : (
          <div className="flex-1 p-4 md:p-6 overflow-y-auto bg-white flex flex-col gap-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.type === "ad" ? (
                  <div className="w-full max-w-sm mx-auto my-4">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-2">
                      <span className="text-[10px] text-gray-400 uppercase tracking-wider block text-center mb-2">Advertisement</span>
                      <TopAdsSquare id="square01" className="min-h-[250px] mx-auto" />
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
              <div className="flex flex-col gap-2 mt-1 max-w-sm">
                {questions[currentQuestion].options.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => handleAnswer(opt.label)}
                    className={`px-5 py-3.5 rounded-full text-[15px] font-semibold transition-all duration-200 text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ${currentTheme.bg} ${currentTheme.hoverBg}`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}

            {showCta && (
              <div className="mt-4 space-y-3 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Your Results Are Ready</h3>
                <p className="text-sm text-gray-600 mb-4">{ctaSecondaryText}</p>
                <button
                  type="button"
                  onClick={handleCta}
                  className={`block w-full py-4 px-6 rounded-full text-white font-bold text-lg text-center transition-all duration-200 hover:opacity-90 shadow-lg ${currentTheme.bg} ${currentTheme.hoverBg}`}
                >
                  {ctaButtonText} →
                </button>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>
        )}
      </div>
    </main>
  );
}
