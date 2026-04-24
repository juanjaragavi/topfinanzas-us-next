"use client";

import { ReactNode } from "react";
import { AnimatePresence } from "framer-motion";

interface ChatContainerProps {
  children: ReactNode;
}

export function ChatContainer({ children }: ChatContainerProps) {
  return (
    <div className="w-full h-full sm:h-[90vh] sm:mt-[5vh] sm:rounded-3xl max-w-md bg-[#F0F2F5] flex flex-col shadow-2xl relative mx-auto overflow-hidden">
      {/* Header */}
      <div className="bg-white px-4 py-3 border-b border-gray-200 flex items-center justify-between shrink-0 shadow-sm z-10">
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <h2 className="font-semibold text-gray-900 text-[15px]">Top Finance Assistant</h2>
            <p className="text-xs text-green-500 font-medium">Online</p>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div 
        className="flex-1 overflow-y-auto p-4 flex flex-col gap-1 relative custom-scrollbar"
        style={{ backgroundColor: "#EFEAE2" }}
      >
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        <div className="relative z-10 w-full flex flex-col">
          <AnimatePresence initial={false}>
            {children}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
