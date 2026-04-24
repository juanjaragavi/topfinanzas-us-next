"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChatContainer } from "@/components/finance/chat/ChatContainer";
import { MessageBubble } from "@/components/finance/chat/MessageBubble";

export default function FinanceChatIntroClient() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 500); // typing
    const timer2 = setTimeout(() => setStep(2), 1500); // msg 1
    const timer3 = setTimeout(() => setStep(3), 2000); // typing
    const timer4 = setTimeout(() => setStep(4), 3200); // msg 2
    const timer5 = setTimeout(() => setStep(5), 3700); // CTA

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, []);

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <main className="fixed inset-0 z-[9999] bg-black/10 sm:bg-gray-100 flex justify-center items-start overflow-hidden">
      <ChatContainer>
        {step === 1 && <MessageBubble type="typing" />}
        
        {step >= 2 && (
          <MessageBubble type="bot" text="Hi there! 👋 I'm here to help you find the best loan options tailored to your needs." timestamp={getCurrentTime()} showAvatar={true} />
        )}
        
        {step === 3 && <MessageBubble type="typing" showAvatar={false} />}
        
        {step >= 4 && (
          <MessageBubble type="bot" text="Answer a few quick questions in our chat to find your loan. Shall we begin?" timestamp={getCurrentTime()} showAvatar={false} />
        )}

        {step >= 5 && (
          <div className="flex flex-col gap-2 mt-2 items-end w-full max-w-[85%] md:max-w-md ml-auto">
            <Link
              href="https://route.topnetworks.co/api/redirect/5458f64e-5e61-4da4-9102-584dc7f3f1e0"
              className="w-full px-5 py-3 rounded-2xl text-[15px] leading-tight font-semibold text-center transition-all duration-200 text-white shadow-sm hover:-translate-y-0.5 active:translate-y-0 bg-[#3B82F6] border border-blue-600/25 hover:bg-[#2563EB]"
            >
              Let&apos;s do it! 🚀
            </Link>
          </div>
        )}
      </ChatContainer>
    </main>
  );
}
