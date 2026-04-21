"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { formLogger } from "@/lib/logger";
import FinanceOfferwallRuntime from "@/components/finance/finance-offerwall-runtime";
import OfferwallPageShell from "@/components/finance/offerwall-page-shell";
import { FINANCE_QUIZ_CONFIGS } from "@/lib/finance-quiz-config";
import { pushGTMConversion } from "@/components/analytics/gtm";
import EngagementCard from "@/components/steps/EngagementCard";
import {
  MONTHLY_SPEND_OPTIONS,
  AFFILIATE_URL,
  GTM_CONVERSION_EVENT,
  HeroBanner,
  TrustBar,
  QuizProgressBar,
  AdSlot,
  BottomContent,
} from "@/components/steps/credit-card-rec-shared";

const LOG_TAG = "CC-REC-9";
const STEP_QUESTION = "How much do you spend monthly?";
const STEP_SUBTITLE =
  "Pick your monthly rhythm and unlock a card recommendation tuned to your real spending.";

export default function InvitCreditCardRecUS9Page() {
  const offerwallQuiz = FINANCE_QUIZ_CONFIGS.creditCardRecommender9;
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [interactionCount, setInteractionCount] = useState(0);
  const router = useRouter();
  const reduceMotion = useReducedMotion();
  const advanceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current);
    };
  }, []);

  const engagementTier =
    interactionCount >= 8 ? "High" : interactionCount >= 4 ? "Medium" : "Low";

  const trackInteraction = useCallback(() => {
    setInteractionCount((previous) => previous + 1);
  }, []);

  const handleSelect = useCallback(
    (optionId: string) => {
      const tier =
        interactionCount >= 8
          ? "High"
          : interactionCount >= 4
            ? "Medium"
            : "Low";

      setSelectedId(optionId);
      trackInteraction();

      formLogger.info(`[${LOG_TAG}] Step completed`, {
        step: 3,
        selection: optionId,
        engagementTier: tier,
      });

      if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current);
      advanceTimerRef.current = setTimeout(() => {
        pushGTMConversion(GTM_CONVERSION_EVENT);
        formLogger.info(
          `[${LOG_TAG}] Quiz completed — redirecting to affiliate`,
          {
            selection: optionId,
            interactions: interactionCount + 1,
          },
        );
        router.push(AFFILIATE_URL);
      }, 350);
    },
    [interactionCount, router, trackInteraction],
  );

  return (
    <FinanceOfferwallRuntime quiz={offerwallQuiz}>
      <OfferwallPageShell>
        <div className="min-h-screen flex flex-col bg-slate-950 text-white">
          <Header />
          <HeroBanner />
          <TrustBar />

          <main className="relative flex-grow overflow-hidden">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-400/20 blur-3xl" />
              <div className="absolute bottom-10 left-0 h-40 w-40 rounded-full bg-cyan-300/15 blur-3xl" />
            </div>

            <div className="relative max-w-3xl mx-auto px-4 py-3 md:py-8">
              <div className="flex justify-center mb-4">
                <AdSlot unitIndex={3} logTag={LOG_TAG} />
              </div>

              <QuizProgressBar currentStep={3} totalSteps={3} />

              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between rounded-xl border border-white/15 bg-white/5 px-3 py-2">
                  <span className="text-xs md:text-sm text-slate-100">
                    Engagement score: {interactionCount}
                  </span>
                  <span className="text-xs md:text-sm font-semibold text-emerald-200">
                    Tier: {engagementTier}
                  </span>
                </div>

                <EngagementCard
                  title={STEP_QUESTION}
                  subtitle={STEP_SUBTITLE}
                  options={MONTHLY_SPEND_OPTIONS}
                  selectedId={selectedId}
                  onSelect={handleSelect}
                  onOptionHover={trackInteraction}
                  reduceMotion={!!reduceMotion}
                />

                <p className="text-center text-xs text-slate-300 pt-1">
                  Tap any option to continue
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
