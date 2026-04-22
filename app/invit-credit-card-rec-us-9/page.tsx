"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { formLogger } from "@/lib/logger";
import FinanceOfferwallRuntime from "@/components/finance/finance-offerwall-runtime";
import OfferwallPageShell from "@/components/finance/offerwall-page-shell";
import { FINANCE_QUIZ_CONFIGS } from "@/lib/finance-quiz-config";
import {
  MONTHLY_SPEND_OPTIONS,
  HeroBanner,
  TrustBar,
  QuizProgressBar,
  AdSlot,
  BottomContent,
} from "@/components/steps/credit-card-rec-shared";
import {
  ConfettiCanvas,
  FloatingParticles,
  EngagementOrb,
  ShimmerText,
  RewardBadge,
  GlowingButton,
} from "@/components/steps/gamification-effects";
import { cn } from "@/lib/utils";
import {
  getQuestEngagementCount,
  incrementQuestEngagementCount,
} from "@/lib/credit-card-quest-engagement";

const LOG_TAG = "CC-REC-9-QUEST";
const STEP_QUESTION = "🎯 Complete Card Quest!";
const STEP_SUBTITLE =
  "You're almost there! Engage with this power challenge to unlock your ideal card match.";

export default function InvitCreditCardRecUS9Page() {
  const offerwallQuiz = FINANCE_QUIZ_CONFIGS.creditCardRecommender9;
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [interactionCount, setInteractionCount] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const router = useRouter();
  const advanceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setInteractionCount(getQuestEngagementCount());

    return () => {
      if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current);
    };
  }, []);

  const trackInteraction = useCallback(() => {
    const nextCount = incrementQuestEngagementCount();
    setInteractionCount(nextCount);
    return nextCount;
  }, []);

  const handleSelect = useCallback(
    (optionId: string) => {
      setSelectedId(optionId);
      setShowConfetti(true);
      const nextEngagementLevel = trackInteraction();

      formLogger.info(`[${LOG_TAG}] Quest completed`, {
        step: 9,
        selection: optionId,
        engagementLevel: nextEngagementLevel,
      });

      if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current);
      advanceTimerRef.current = setTimeout(() => {
        window.scrollTo(0, 0);
        router.push("/invit-credit-card-rec-us-10");
      }, 500);
    },
    [router, trackInteraction],
  );

  return (
    <FinanceOfferwallRuntime quiz={offerwallQuiz}>
      <OfferwallPageShell>
        {showConfetti && <ConfettiCanvas />}
        <FloatingParticles />

        <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-950 via-purple-900 to-pink-900 text-white relative overflow-hidden">
          {/* Animated background gradient blobs */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-cyan-400/20 blur-3xl"
              animate={{
                x: [0, 50, 0],
                y: [0, -50, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-pink-500/20 blur-3xl"
              animate={{
                x: [0, -50, 0],
                y: [0, 50, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-green-400/10 blur-3xl" />
          </div>

          <Header />
          <HeroBanner compact />
          <TrustBar compact />

          <main className="relative flex-grow flex flex-col">
            <div className="max-w-3xl mx-auto w-full px-4 py-2 md:py-6 flex-grow flex flex-col">
              <div className="flex justify-center mb-3 md:mb-4">
                <AdSlot unitIndex={3} logTag={LOG_TAG} />
              </div>

              <QuizProgressBar
                currentStep={1}
                totalSteps={3}
                className="text-violet-100/90"
                titleClassName="text-violet-100"
                stepClassName="text-violet-100/90"
              />

              {/* Quest Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-3 md:mb-5 space-y-2"
              >
                <h2 className="text-[24px] sm:text-[28px] md:text-4xl leading-[1.04] font-black tracking-tight whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-pink-400 to-green-400">
                  {STEP_QUESTION}
                </h2>
                <p className="text-xs md:text-base leading-snug text-gray-100 max-w-2xl mx-auto">
                  {STEP_SUBTITLE}
                </p>
              </motion.div>

              {/* Engagement Progress Orb */}
              <motion.div
                className="mb-2 md:mb-5 flex justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <EngagementOrb progress={interactionCount} size="sm" />
              </motion.div>

              {/* Quest Challenge Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex-grow flex flex-col justify-center space-y-3"
              >
                {/* Challenge Title with shimmer */}
                <ShimmerText>
                  <div className="text-center text-base md:text-xl leading-tight font-bold text-white mb-0 px-4 py-1.5 rounded-lg border-2 border-cyan-400/50 bg-white/5 backdrop-blur-sm">
                    💎 Select Your Spending Power Level
                  </div>
                </ShimmerText>

                {/* Colorful Spending Options */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  {MONTHLY_SPEND_OPTIONS.map((option, idx) => {
                    const colors = [
                      {
                        border: "border-cyan-400/50",
                        bg: "bg-cyan-500/10",
                        text: "text-cyan-400",
                        glow: "from-cyan-400 to-cyan-600",
                      },
                      {
                        border: "border-pink-400/50",
                        bg: "bg-pink-500/10",
                        text: "text-pink-400",
                        glow: "from-pink-400 to-pink-600",
                      },
                      {
                        border: "border-green-400/50",
                        bg: "bg-green-500/10",
                        text: "text-green-400",
                        glow: "from-green-400 to-green-600",
                      },
                      {
                        border: "border-yellow-400/50",
                        bg: "bg-yellow-500/10",
                        text: "text-yellow-400",
                        glow: "from-yellow-400 to-yellow-600",
                      },
                    ];

                    const color = colors[idx % colors.length];

                    return (
                      <motion.button
                        key={option.id}
                        onClick={() => handleSelect(option.id)}
                        onHoverStart={trackInteraction}
                        className={cn(
                          "relative p-3 md:p-4 rounded-2xl border-2 transition-all group overflow-hidden",
                          color.border,
                          color.bg,
                          selectedId === option.id &&
                            "ring-2 ring-offset-2 ring-white scale-105",
                        )}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        {/* Glowing background on hover */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${color.glow} opacity-0 group-hover:opacity-20 blur-xl transition-opacity`}
                        />

                        {/* Content */}
                        <div className="relative z-10 text-left space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-2xl">{option.emoji}</span>
                            <span className={cn("font-bold", color.text)}>
                              {option.label}
                            </span>
                          </div>
                          <p className="text-[11px] md:text-sm leading-snug text-gray-200">
                            {option.description}
                          </p>
                        </div>

                        {/* Selection indicator */}
                        {selectedId === option.id && (
                          <motion.div
                            className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                          >
                            <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full" />
                          </motion.div>
                        )}
                      </motion.button>
                    );
                  })}
                </div>

                {/* Reward Badge - Shows when engagement is high */}
                {interactionCount >= 3 && (
                  <motion.div
                    className="flex justify-center mt-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                  >
                    <RewardBadge unlocked={interactionCount >= 3} />
                  </motion.div>
                )}

                {/* Call-to-Action */}
                {selectedId && (
                  <motion.div
                    className="text-center mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <GlowingButton
                      onClick={() => handleSelect(selectedId)}
                      color="gold"
                    >
                      ✨ Unlock Your Match
                    </GlowingButton>
                  </motion.div>
                )}

                {!selectedId && (
                  <p className="text-center text-[11px] md:text-sm text-cyan-200 pt-2">
                    🎮 Tap any option to play • Hover to engage • Unlock the
                    treasure
                  </p>
                )}
              </motion.div>

              <BottomContent variant="dark" />
            </div>
          </main>

          <Footer />
        </div>
      </OfferwallPageShell>
    </FinanceOfferwallRuntime>
  );
}
