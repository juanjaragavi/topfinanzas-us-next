import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Find Your Ideal Loan | Top Finanzas US",
  description:
    "Answer a few quick questions in our chat to find the best loan options tailored to your needs.",
  keywords:
    "personal loan, loan recommender, loan comparison, best loans US, quick loan finder",
};

export default function FinanceChatIntroPage() {
  return (
    <main className="fixed inset-0 z-[9999] bg-[#F8F9FA] sm:bg-gray-100 flex justify-center items-start overflow-hidden">
      <div className="w-full h-full max-w-md bg-[#F8F9FA] flex flex-col items-center justify-start pt-12 p-6 shadow-2xl relative">
        <h1 className="text-lg font-semibold text-center text-gray-700 mb-8 leading-snug">
          Answer a few questions in our chat to find your loan. It&apos;s very
          quick!
        </h1>

        <div className="w-full flex items-center justify-center mb-8 relative">
          <div className="w-full h-px bg-[#FDBA74] absolute top-1/2 left-0 -translate-y-1/2" />
          <div className="w-6 h-6 rounded-full bg-white border border-[#FDBA74] text-[#FDBA74] flex items-center justify-center relative z-10">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 w-full flex flex-col items-center">
          <h2 className="text-lg font-medium text-gray-900 mb-6">
            Shall we begin?
          </h2>
          <Link
            href="/finance-quiz-recommender-p2"
            className="block w-full rounded-2xl bg-[#3B82F6] hover:bg-[#2563EB] text-white py-3.5 px-6 text-base font-semibold transition-all text-center shadow-3d border border-black/[.15] hover:shadow-3d-hover hover:translate-y-[1px] active:shadow-3d-active active:translate-y-[3px]"
          >
            Let&apos;s do it!
          </Link>
        </div>
      </div>
    </main>
  );
}
