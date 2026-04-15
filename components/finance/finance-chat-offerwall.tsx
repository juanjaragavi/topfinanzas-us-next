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
      await addBotMessage(`Hi! I'm ${botName}. ${greeting}`, 800);
      if (questions.length > 0) {
        setCurrentQuestion(0);
        await addBotMessage(questions[0].botMessage, 1000);
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
        await addAdMessage(800);
        setTimeout(() => {
          triggerSPA();
        }, 100);
      }

      if (nextIndex < questions.length) {
        setCurrentQuestion(nextIndex);
        await addBotMessage(questions[nextIndex].botMessage, 1200);
        setShowOptions(true);
      } else {
        setCurrentQuestion(-1);
        await addBotMessage(successMessage, 1000);
        setShowCta(true);
      }
    },
    [currentQuestion, questions, addBotMessage, addAdMessage, successMessage, adStepIndex, triggerSPA],
  );

  const handleCta = useCallback(() => {
    router.push(redirectTo);
  }, [router, redirectTo]);

  return (
    <main className="fixed inset-0 z-[9999] bg-white sm:bg-gray-100 flex justify-center items-start overflow-hidden">
      <div className="w-full h-full max-w-md bg-white flex flex-col shadow-2xl relative">
        {/* Header */}
        <div 
          className={`p-4 text-white text-center font-bold relative shadow-sm ${currentTheme.bg}`}
        >
        <div className="flex items-center justify-center gap-2">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-lg">
            🤖
          </div>
          <h2 className="text-lg">{botName}</h2>
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex-1 p-4 md:p-6 overflow-y-auto bg-gray-50 flex flex-col gap-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
          >
            {msg.type === "bot" && (
              <div
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold mr-2 mt-1 ${currentTheme.bg}`}
              >
                🤖
              </div>
            )}
            
            {msg.type === "ad" ? (
              <div className="w-full max-w-sm mx-auto my-4 bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 p-2">
                <span className="text-[10px] text-gray-400 uppercase tracking-wider block text-center mb-2">Advertisement</span>
                <TopAdsSquare id="square01" className="w-full min-h-[250px] flex items-center justify-center bg-gray-50 rounded" />
              </div>
            ) : (
              <div
                className={`max-w-[85%] md:max-w-sm px-4 py-3 text-[15px] leading-relaxed shadow-sm ${
                  msg.type === "bot"
                    ? "bg-gray-100 text-gray-800 rounded-2xl rounded-tl-sm border-none"
                    : `text-white rounded-2xl rounded-tr-sm ${currentTheme.bg}`
                }`}
              >
                {msg.text}
              </div>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div
              className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold mr-2 ${currentTheme.bg}`}
            >
              🤖
            </div>
            <div className="bg-gray-100 px-4 py-3 rounded-2xl rounded-tl-sm flex gap-1.5 items-center shadow-sm h-10 border-none">
              <span
                className={`w-2 h-2 rounded-full animate-bounce ${currentTheme.bg}`}
                style={{ animationDelay: "0ms" }}
              />
              <span
                className={`w-2 h-2 rounded-full animate-bounce ${currentTheme.bg}`}
                style={{ animationDelay: "150ms" }}
              />
              <span
                className={`w-2 h-2 rounded-full animate-bounce ${currentTheme.bg}`}
                style={{ animationDelay: "300ms" }}
              />
            </div>
          </div>
        )}

        {showOptions && currentQuestion >= 0 && (
          <div className="flex flex-col gap-2 pl-10 mt-1 max-w-sm">
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
      </div>
    </main>
  );
}
