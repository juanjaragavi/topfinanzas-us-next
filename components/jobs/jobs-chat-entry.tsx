"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

import { useTranslation } from "@/components/jobs/translation-provider";

export interface JobsChatQuestion {
  id: string;
  botMessage: string;
  options: { label: string; value: string }[];
}

export interface JobsChatEntryProps {
  botName: string;
  greeting: string;
  questions: JobsChatQuestion[];
  journeyId: string;
  themeColor: string;
  themeColorLight: string;
  successMessage: string;
  ctaButtonText: string;
  ctaSecondaryText?: string;
  redirectTo: string;
}

interface ChatBubble {
  type: "bot" | "user";
  text: string;
}

export default function JobsChatEntry({
  botName,
  greeting,
  questions,
  journeyId,
  themeColor,
  themeColorLight,
  successMessage,
  ctaButtonText,
  ctaSecondaryText = "See available positions now",
  redirectTo,
}: JobsChatEntryProps) {
  const router = useRouter();
  const t = useTranslation();
  const [messages, setMessages] = useState<ChatBubble[]>([]);
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
    [currentQuestion, questions, addBotMessage, successMessage],
  );

  const handleCta = useCallback(() => {
    router.push(redirectTo);
  }, [router, redirectTo]);

  return (
    <main
      className="flex min-h-screen flex-col bg-white"
      data-journey={journeyId}
    >

      {/* Hero */}
      <section
        className="py-6 md:py-10 text-white"
        style={{
          background: `linear-gradient(135deg, ${themeColor} 0%, ${themeColorLight} 100%)`,
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 bg-white/20">
            {t("chatEntry.badge", "JOBS")}
          </div>
          <h1 className="text-2xl md:text-3xl font-bold">
            {t("chatEntry.heroTitle", "Find Your Next Job Opportunity")}
          </h1>
          <p className="mt-2 text-white/80 text-sm md:text-base">
            {t("chatEntry.heroSubtitle", "Answer a few quick questions to see the best openings matched for you")}
          </p>
        </div>
      </section>

      {/* Chat Window */}
      <div className="flex-1 container mx-auto px-4 py-6 max-w-2xl">
        <div className="flex flex-col gap-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.type === "bot" ? "justify-start" : "justify-end"}`}
            >
              {msg.type === "bot" && (
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold mr-2 mt-1"
                  style={{ backgroundColor: themeColor }}
                >
                  💼
                </div>
              )}
              <div
                className={`max-w-xs md:max-w-sm px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                  msg.type === "bot"
                    ? "bg-gray-100 text-gray-800 rounded-tl-sm"
                    : "text-white rounded-tr-sm"
                }`}
                style={
                  msg.type === "user" ? { backgroundColor: themeColor } : {}
                }
              >
                {msg.text}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold mr-2"
                style={{ backgroundColor: themeColor }}
              >
                💼
              </div>
              <div className="bg-gray-100 px-4 py-3 rounded-2xl rounded-tl-sm flex gap-1 items-center">
                <span
                  className="w-2 h-2 rounded-full animate-bounce"
                  style={{ backgroundColor: themeColor, animationDelay: "0ms" }}
                />
                <span
                  className="w-2 h-2 rounded-full animate-bounce"
                  style={{
                    backgroundColor: themeColor,
                    animationDelay: "150ms",
                  }}
                />
                <span
                  className="w-2 h-2 rounded-full animate-bounce"
                  style={{
                    backgroundColor: themeColor,
                    animationDelay: "300ms",
                  }}
                />
              </div>
            </div>
          )}

          {showOptions && currentQuestion >= 0 && (
            <div className="flex flex-wrap gap-2 pl-10 mt-1">
              {questions[currentQuestion].options.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => handleAnswer(opt.label)}
                  className="px-4 py-2 rounded-full text-sm font-semibold border-2 transition-all duration-200 hover:text-white"
                  style={{
                    borderColor: themeColor,
                    color: themeColor,
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLButtonElement).style.backgroundColor =
                      themeColor;
                    (e.target as HTMLButtonElement).style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLButtonElement).style.backgroundColor =
                      "transparent";
                    (e.target as HTMLButtonElement).style.color = themeColor;
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          )}

          {showCta && (
            <div className="mt-4 space-y-3">
              <button
                type="button"
                onClick={handleCta}
                className="block w-full py-4 px-6 rounded-xl text-white font-bold text-lg text-center transition-all duration-200 hover:opacity-90 shadow-lg"
                style={{ backgroundColor: themeColor }}
              >
                {ctaButtonText} →
              </button>
              <p className="text-center text-xs text-gray-400">
                {ctaSecondaryText}
              </p>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>
      </div>

    </main>
  );
}
