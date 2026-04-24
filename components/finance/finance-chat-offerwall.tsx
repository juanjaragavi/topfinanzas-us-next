"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useTopAds } from "@/components/analytics/topads-spa-handler";
import { TopAdsSquare } from "@/components/ads/topads-placement";
import { ChatContainer } from "@/components/finance/chat/ChatContainer";
import { MessageBubble } from "@/components/finance/chat/MessageBubble";

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
  theme,
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
  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const optionGroupId =
    currentQuestion === 0
      ? "preguntas-quiz-finanzas-1"
      : currentQuestion === 1
        ? "preguntas-quiz-finanzas-2"
        : undefined;
  const optionButtonWidthCh =
    visibleOptions.reduce(
      (max, option) => Math.max(max, option.label.length),
      0,
    ) + 4;

  return (
    <main className="fixed inset-0 z-[9999] bg-black/10 sm:bg-gray-100 flex justify-center items-start overflow-hidden">
      <ChatContainer>
        {messages.map((msg, i) => {
          if (msg.type === "ad") {
            return (
              <MessageBubble key={i} type="ad">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-2 w-full max-w-sm">
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider block text-center mb-2">
                    Advertisement
                  </span>
                  <TopAdsSquare
                    id="square01"
                    className="min-h-[250px] mx-auto"
                  />
                </div>
              </MessageBubble>
            );
          }
          return (
            <MessageBubble 
              key={i} 
              type={msg.type} 
              text={msg.text} 
              timestamp={getCurrentTime()}
              showAvatar={msg.type === "bot" && (i === 0 || messages[i-1]?.type !== "bot")} 
              theme={theme}
            />
          );
        })}

        {isTyping && <MessageBubble key="typing-indicator" type="typing" showAvatar={messages.length === 0 || messages[messages.length - 1]?.type !== "bot"} />}

        {showOptions && currentQuestion >= 0 && (
          <motion.div
            key="options-container"
            layout
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
            id={optionGroupId}
            className="flex flex-col gap-2 mt-2 items-end w-full max-w-[85%] md:max-w-md ml-auto"
          >
            {visibleOptions.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => handleAnswer(opt.label)}
                style={{
                  width: `clamp(220px, ${optionButtonWidthCh}ch, 100%)`,
                }}
                className={`w-full px-5 py-3 rounded-2xl text-[15px] leading-tight font-semibold text-center transition-all duration-200 text-white shadow-sm hover:-translate-y-0.5 active:translate-y-0 ${
                  theme === "green" 
                    ? "bg-[#10B981] border border-emerald-600/25 hover:bg-[#059669]" 
                    : "bg-[#3B82F6] border border-blue-600/25 hover:bg-[#2563EB]"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </motion.div>
        )}

        {showCta && (
          <motion.div 
            key="cta-container" 
            layout
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
            className="mt-4 w-full"
          >
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
              <h3 className="font-bold text-gray-900 text-lg mb-2">
                Results Ready 🎯
              </h3>
              <p className="text-sm text-gray-600 mb-4">{ctaSecondaryText}</p>
              <button
                type="button"
                onClick={handleCta}
                className={`block w-full py-3.5 px-6 rounded-xl text-white font-semibold text-base text-center transition-all shadow-sm hover:-translate-y-0.5 active:translate-y-0 ${
                  theme === "green" ? "bg-[#10B981] hover:bg-[#059669]" : "bg-[#3B82F6] hover:bg-[#2563EB]"
                }`}
              >
                {ctaButtonText} →
              </button>
            </div>
          </motion.div>
        )}

        <div ref={chatEndRef} />
      </ChatContainer>
    </main>
  );
}
