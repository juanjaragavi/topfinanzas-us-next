"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { formLogger } from "@/lib/logger";
import FinanceOfferwallRuntime from "@/components/finance/finance-offerwall-runtime";
import OfferwallPageShell from "@/components/finance/offerwall-page-shell";
import { FINANCE_QUIZ_CONFIGS } from "@/lib/finance-quiz-config";
import {
  CREDIT_SCORE_OPTIONS,
  HeroBanner,
  TrustBar,
  QuizProgressBar,
  QuizOptionCard,
  AdSlot,
  BottomContent,
} from "@/components/steps/credit-card-rec-shared";

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const LOG_TAG = "CC-REC-3";
const STEP_QUESTION = "What's your credit score range?";
const STEP_SUBTITLE =
  "This helps us match cards you're most likely to be approved for.";

// ---------------------------------------------------------------------------
// Main page component — Step 1 of 3 (with preloader)
// ---------------------------------------------------------------------------

export default function InvitCreditCardRecUS3Page() {
  const offerwallQuiz = FINANCE_QUIZ_CONFIGS.creditCardRecommender3;
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const router = useRouter();
  const advanceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current);
    };
  }, []);

  const handleSelect = useCallback(
    (optionId: string) => {
      setSelectedId(optionId);

      formLogger.info(`[${LOG_TAG}] Step completed`, {
        step: 1,
        selection: optionId,
      });

      if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current);
      advanceTimerRef.current = setTimeout(() => {
        window.scrollTo(0, 0);
        router.push("/invit-credit-card-rec-us-4");
      }, 350);
    },
    [router],
  );

  return (
    <FinanceOfferwallRuntime quiz={offerwallQuiz}>
      <OfferwallPageShell>
        <div className="min-h-screen flex flex-col bg-white">
          <Header />
          <HeroBanner />
          <TrustBar />

          <main className="flex-grow">
            <div className="max-w-3xl mx-auto px-4 py-4 md:py-8">
              {/* TopAds ad unit — square01 */}
              <div className="flex justify-center mb-6">
                <AdSlot unitIndex={1} logTag={LOG_TAG} />
              </div>

              <QuizProgressBar currentStep={1} totalSteps={3} />

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                <div className="space-y-2">
                  <h2 className="text-[31px] md:text-2xl font-bold leading-[1.15] text-gray-900">
                    {STEP_QUESTION}
                  </h2>
                  <p className="text-[13px] leading-[1.35] md:text-base text-gray-500">
                    {STEP_SUBTITLE}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {CREDIT_SCORE_OPTIONS.map((option) => (
                    <QuizOptionCard
                      key={option.id}
                      option={option}
                      selected={selectedId === option.id}
                      onClick={() => handleSelect(option.id)}
                      layout="grid"
                    />
                  ))}
                </div>

                <p className="text-center text-xs text-gray-400 pt-1">
                  Tap an option to continue
                </p>
              </motion.div>

              <BottomContent />
            </div>
          </main>

          <Footer />
        </div>
      </OfferwallPageShell>
    </FinanceOfferwallRuntime>
  );
}
