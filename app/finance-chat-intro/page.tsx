"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTopAds } from "@/components/analytics/topads-spa-handler";

export default function FinanceChatIntroPage() {
  const router = useRouter();
  const { triggerSPA } = useTopAds();

  const handleStart = () => {
    router.push("/finance-quiz-recommender-p2");
  };

  useEffect(() => {
    triggerSPA();
  }, [triggerSPA]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA]">
      <main className="flex-grow flex flex-col items-center justify-start pt-24 p-6">
        <div className="mb-10 text-center w-full max-w-sm">
          <h1 className="text-[17px] font-semibold text-gray-800 mb-6 px-2 leading-snug">
            Answer a few questions in our chat to find your loan. It&apos;s very
            quick!
          </h1>
          <div className="relative flex items-center justify-center w-full">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#FDBA74]"></div>
            </div>
            <div className="relative bg-[#F8F9FA] px-2 text-[#F59E0B]">
              <svg
                className="w-5 h-5 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 w-full max-w-sm flex flex-col items-center pb-10">
          <h2 className="text-[15px] font-medium text-gray-900 mb-5">
            Shall we begin?
          </h2>
          <button
            type="button"
            onClick={handleStart}
            className="block w-full rounded-2xl bg-[#3B82F6] hover:bg-[#2563EB] text-white py-3.5 px-6 text-[15px] font-bold shadow-[0_4px_0_0_#9ca3af] hover:shadow-[0_2px_0_0_#9ca3af] hover:translate-y-[2px] active:translate-y-[4px] active:shadow-none transition-all text-center"
          >
            Let&apos;s do it!
          </button>
        </div>
      </main>
    </div>
  );
}
