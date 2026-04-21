"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { formLogger } from "@/lib/logger";
import {
  CREDIT_SCORE_OPTIONS,
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

const LOG_TAG = "CC-REC-10-QUEST";
const STEP_QUESTION = "🔓 Unlock Credit Power!";
const STEP_SUBTITLE =
  "This helps us match cards you're most likely to be approved for.";

export default function InvitCreditCardRecUS10Page() {
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

      formLogger.info(`[${LOG_TAG}] Step completed`, {
        step: 10,
        selection: optionId,
        engagementLevel: nextEngagementLevel,
      });

      if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current);
      advanceTimerRef.current = setTimeout(() => {
        window.scrollTo(0, 0);
        router.push("/invit-credit-card-rec-us-11");
      }, 500);
    },
    [router, trackInteraction],
  );

  return (
    <>
      {showConfetti && <ConfettiCanvas />}
      <FloatingParticles />

      <div className="min-h-screen flex flex-col bg-gradient-to-br from-teal-950 via-emerald-900 to-cyan-900 text-white relative overflow-hidden">
          {/* Animated background gradient blobs */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-emerald-400/20 blur-3xl"
              animate={{
                x: [0, -50, 0],
                y: [0, 50, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-cyan-400/20 blur-3xl"
              animate={{
                x: [0, 50, 0],
                y: [0, -50, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-teal-400/10 blur-3xl" />
          </div>

          <Header />
          <HeroBanner compact />
          <TrustBar compact />

          <main className="relative flex-grow flex flex-col">
            <div className="max-w-3xl mx-auto w-full px-4 py-2 md:py-6 flex-grow flex flex-col">
              <div className="flex justify-center mb-3 md:mb-4">
                <AdSlot unitIndex={1} logTag={LOG_TAG} />
              </div>

              <QuizProgressBar
                currentStep={2}
                totalSteps={3}
                className="text-emerald-100/90"
                titleClassName="text-emerald-100"
                stepClassName="text-emerald-100/90"
              />

              {/* Quest Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-3 md:mb-5 space-y-2"
              >
                <h2 className="text-[24px] sm:text-[28px] md:text-4xl leading-[1.04] font-black tracking-tight whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-cyan-300 to-teal-300">
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
                  <div className="text-center text-base md:text-xl leading-tight font-bold text-white mb-0 px-4 py-1.5 rounded-lg border-2 border-emerald-400/50 bg-white/5 backdrop-blur-sm">
                    💳 Select Your Credit Tier
                  </div>
                </ShimmerText>

                {/* Colorful Credit Score Options */}
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {CREDIT_SCORE_OPTIONS.map((option, idx) => {
                    const colors = [
                      {
                        border: "border-emerald-400/50",
                        bg: "bg-emerald-500/10",
                        text: "text-emerald-300",
                        glow: "from-emerald-400 to-emerald-600",
                      },
                      {
                        border: "border-cyan-400/50",
                        bg: "bg-cyan-500/10",
                        text: "text-cyan-300",
                        glow: "from-cyan-400 to-cyan-600",
                      },
                      {
                        border: "border-teal-400/50",
                        bg: "bg-teal-500/10",
                        text: "text-teal-300",
                        glow: "from-teal-400 to-teal-600",
                      },
                      {
                        border: "border-green-400/50",
                        bg: "bg-green-500/10",
                        text: "text-green-300",
                        glow: "from-green-400 to-green-600",
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
                            <div className="w-4 h-4 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full" />
                          </motion.div>
                        )}
                      </motion.button>
                    );
                  })}
                </div>

                {/* Reward Badge - Shows when engagement is high */}
                {interactionCount >= 2 && (
                  <motion.div
                    className="flex justify-center mt-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                  >
                    <RewardBadge unlocked={interactionCount >= 2} />
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
                      🚀 Advance to Final Challenge
                    </GlowingButton>
                  </motion.div>
                )}

                {!selectedId && (
                  <p className="text-center text-[11px] md:text-sm text-emerald-200 pt-2">
                    🎮 Tap any tier to unlock • Hover to engage • Rewards await
                  </p>
                )}
              </motion.div>

              <BottomContent variant="dark" />
            </div>
          </main>

        <Footer />
      </div>
    </>
  );
}
