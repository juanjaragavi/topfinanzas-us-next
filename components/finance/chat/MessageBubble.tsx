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
            className={`px-4 py-3 text-[15px] leading-relaxed shadow-sm relative ${
              isBot 
                ? "bg-white text-gray-800 rounded-2xl rounded-tl-sm border border-gray-100" 
                : `${userBg} text-white rounded-2xl rounded-tr-sm border ${userBorder}`
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
            
            {/* Tailwind tail simulator */}
            <div className={`absolute top-0 w-3 h-3 ${isBot ? "-left-1.5 bg-white border-l border-t border-gray-100" : `-right-1.5 ${userBg} border-r border-t ${userBorder}`}`} style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)", transform: isBot ? "rotate(0deg)" : "rotate(90deg)", borderTopLeftRadius: isBot ? "2px" : "0", borderTopRightRadius: isBot ? "0" : "2px" }} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
