"use client";

import { motion } from "framer-motion";
import { OperatorAvatar } from "./OperatorAvatar";
import React from "react";

export interface MessageBubbleProps {
  type: "bot" | "user" | "ad" | "typing";
  text?: string;
  timestamp?: string;
  children?: React.ReactNode;
  showAvatar?: boolean;
  theme?: "green" | "blue";
}

export function MessageBubble({ type, text, timestamp, children, showAvatar = true, theme = "green" }: MessageBubbleProps) {
  const isBot = type === "bot" || type === "typing";
  const isAd = type === "ad";

  const bubbleVariants = {
    initial: { opacity: 0, y: 10, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
  };

  const userBg = theme === "green" ? "bg-[#10B981]" : "bg-[#3B82F6]";
  const userBorder = theme === "green" ? "border-emerald-600/25" : "border-blue-600/25";
  const userTextTail = theme === "green" ? "text-emerald-100" : "text-blue-100";

  if (isAd) {
    return (
      <motion.div 
        variants={bubbleVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="w-full flex justify-center my-4"
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div 
      variants={bubbleVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`flex w-full ${isBot ? "justify-start" : "justify-end"} mb-4`}
    >
      <div className={`flex gap-2 max-w-[85%] md:max-w-md ${isBot ? "flex-row" : "flex-row-reverse"}`}>
        {isBot && (
          <div className="w-10 shrink-0">
            {showAvatar ? <OperatorAvatar /> : <div className="w-10 h-10" />}
          </div>
        )}
        
        <div className="flex flex-col gap-1">
          <div 
            className={`px-4 py-2.5 text-[15px] leading-relaxed relative ${
              isBot 
                ? "bg-white text-black rounded-[20px] shadow-[0_1px_2px_rgba(0,0,0,0.1)]" 
                : `${userBg} text-white rounded-[20px] shadow-[0_1px_2px_rgba(0,0,0,0.1)]`
            }`}
          >
            {type === "typing" ? (
              <div className="flex gap-1.5 items-center h-5 px-1">
                <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            ) : (
              <>
                <div className="break-words">{text}</div>
                {children}
                {timestamp && (
                  <div className={`text-[10px] mt-1 text-right ${isBot ? "text-gray-400" : userTextTail}`}>
                    {timestamp}
                  </div>
                )}
              </>
            )}
            
            {/* Tailwind tail simulator -> SVG iMessage tail */}
            {isBot ? (
              <svg viewBox="0 0 42 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 -left-2 w-4 h-4 text-white fill-current">
                <path d="M41.6 43.5C41.6 43.5 29.8 41.2 21.3 32C12.8 22.8 15.5 0 15.5 0H0C0 0 1.2 24.5 13.5 35.8C25.8 47.1 41.6 43.5 41.6 43.5Z" />
              </svg>
            ) : (
              <svg viewBox="0 0 42 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={`absolute bottom-0 -right-2 w-4 h-4 ${userTextTail.replace('text-', 'text-').replace('100', '500')} fill-current`} style={{ transform: "scaleX(-1)", color: theme === "green" ? "#10B981" : "#3B82F6" }}>
                <path d="M41.6 43.5C41.6 43.5 29.8 41.2 21.3 32C12.8 22.8 15.5 0 15.5 0H0C0 0 1.2 24.5 13.5 35.8C25.8 47.1 41.6 43.5 41.6 43.5Z" />
              </svg>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
