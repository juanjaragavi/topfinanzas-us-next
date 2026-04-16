"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { formLogger } from "@/lib/logger";
import {
  SPENDING_CATEGORY_OPTIONS,
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

const LOG_TAG = "CC-REC-4";
const STEP_QUESTION = "Where do you spend the most each month?";
const STEP_SUBTITLE =
  "Cards offer bonus rewards in specific categories. We'll match you to the ones that maximize your return.";

// ---------------------------------------------------------------------------
// Main page component — Step 2 of 3 (no preloader)
// ---------------------------------------------------------------------------

export default function InvitCreditCardRecUS4Page() {
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
        step: 2,
        selection: optionId,
      });

      if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current);
      advanceTimerRef.current = setTimeout(() => {
        window.scrollTo(0, 0);
        router.push("/invit-credit-card-rec-us-5");
      }, 350);
    },
    [router],
  );

  return (
    <>
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <HeroBanner />
        <TrustBar />

        <main className="flex-grow">
          <div className="max-w-3xl mx-auto px-4 py-6 md:py-10">
            {/* TopAds ad unit — square02 */}
            <div className="flex justify-center mb-6">
              <AdSlot unitIndex={2} logTag={LOG_TAG} />
            </div>

            <QuizProgressBar currentStep={2} totalSteps={3} />

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25 }}
              className="space-y-5"
            >
              <div className="space-y-2">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                  {STEP_QUESTION}
                </h2>
                <p className="text-sm md:text-base text-gray-500">
                  {STEP_SUBTITLE}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {SPENDING_CATEGORY_OPTIONS.map((option) => (
                  <QuizOptionCard
                    key={option.id}
                    option={option}
                    selected={selectedId === option.id}
                    onClick={() => handleSelect(option.id)}
                    layout="grid"
                  />
                ))}
              </div>

              <p className="text-center text-xs text-gray-400 pt-2">
                Tap an option to continue
              </p>
            </motion.div>

            <BottomContent />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
