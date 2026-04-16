"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { formLogger } from "@/lib/logger";
import { pushGTMConversion } from "@/components/analytics/gtm";
import {
  MONTHLY_SPEND_OPTIONS,
  AFFILIATE_URL,
  GTM_CONVERSION_EVENT,
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

const LOG_TAG = "CC-REC-5";
const STEP_QUESTION = "How much do you spend monthly?";
const STEP_SUBTITLE =
  "This determines which reward tiers you'll actually benefit from.";

// ---------------------------------------------------------------------------
// Main page component — Step 3 of 3 (no preloader, final step)
// ---------------------------------------------------------------------------

export default function InvitCreditCardRecUS5Page() {
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
        step: 3,
        selection: optionId,
      });

      if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current);
      advanceTimerRef.current = setTimeout(() => {
        pushGTMConversion(GTM_CONVERSION_EVENT);
        formLogger.info(
          `[${LOG_TAG}] Quiz completed — redirecting to affiliate`,
          {
            selection: optionId,
          },
        );
        router.push(AFFILIATE_URL);
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
          <div className="max-w-3xl mx-auto px-4 py-3 md:py-8">
            {/* TopAds ad unit — square03 */}
            <div className="flex justify-center mb-4">
              <AdSlot unitIndex={3} logTag={LOG_TAG} />
            </div>

            <QuizProgressBar currentStep={3} totalSteps={3} />

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25 }}
              className="space-y-3"
            >
              <div className="space-y-2">
                <h2 className="text-[18px] md:text-2xl font-bold leading-[1.2] text-gray-900">
                  {STEP_QUESTION}
                </h2>
                <p className="text-xs leading-[1.3] md:text-base text-gray-500">
                  {STEP_SUBTITLE}
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {MONTHLY_SPEND_OPTIONS.map((option) => (
                  <QuizOptionCard
                    key={option.id}
                    option={option}
                    selected={selectedId === option.id}
                    onClick={() => handleSelect(option.id)}
                    layout="list"
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
    </>
  );
}
