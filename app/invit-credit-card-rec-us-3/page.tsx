"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import TopAdsPlacement from "@/components/ads/topads-placement";
import { useTopAds } from "@/components/analytics/topads-spa-handler";
import { formLogger } from "@/lib/logger";
import { pushGTMConversion } from "@/components/analytics/gtm";
import FinanceOfferwallRuntime from "@/components/finance/finance-offerwall-runtime";
import { FINANCE_QUIZ_CONFIGS } from "@/lib/finance-quiz-config";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface QuizOption {
  id: string;
  emoji: string;
  label: string;
  description?: string;
}

interface QuizStep {
  question: string;
  subtitle: string;
  options: readonly QuizOption[];
  columns: 2 | 1;
}

// ---------------------------------------------------------------------------
// Quiz data (immutable)
// ---------------------------------------------------------------------------

const CREDIT_SCORE_OPTIONS: readonly QuizOption[] = [
  { id: "excellent", emoji: "🚀", label: "Excellent", description: "750+" },
  { id: "good", emoji: "⭐", label: "Good", description: "700-749" },
  { id: "fair", emoji: "📈", label: "Fair", description: "650-699" },
  {
    id: "building",
    emoji: "🌱",
    label: "Building",
    description: "Below 650",
  },
] as const;

const SPENDING_CATEGORY_OPTIONS: readonly QuizOption[] = [
  {
    id: "dining",
    emoji: "🍔",
    label: "Dining & Delivery",
    description: "Restaurants, Uber Eats, DoorDash",
  },
  {
    id: "groceries",
    emoji: "🛒",
    label: "Groceries",
    description: "Supermarkets, Costco, Whole Foods",
  },
  {
    id: "gas",
    emoji: "⛽",
    label: "Gas & Transit",
    description: "Gas stations, rideshare, public transit",
  },
  {
    id: "online",
    emoji: "💻",
    label: "Online Shopping",
    description: "Amazon, subscriptions, streaming",
  },
  {
    id: "travel",
    emoji: "✈️",
    label: "Travel & Hotels",
    description: "Flights, Airbnb, car rentals",
  },
  {
    id: "bills",
    emoji: "🏠",
    label: "Bills & Utilities",
    description: "Rent, phone, insurance, internet",
  },
] as const;

const MONTHLY_SPEND_OPTIONS: readonly QuizOption[] = [
  {
    id: "under1000",
    emoji: "💵",
    label: "Under $1,000",
    description: "Best for no-fee cards with flat rewards",
  },
  {
    id: "1000-3000",
    emoji: "💶",
    label: "$1,000 - $3,000",
    description: "Sweet spot for category bonus cards",
  },
  {
    id: "3000-5000",
    emoji: "💳",
    label: "$3,000 - $5,000",
    description: "Premium cards start making sense here",
  },
  {
    id: "5000plus",
    emoji: "🤑",
    label: "$5,000+",
    description: "Maximize premium perks and sign-up bonuses",
  },
] as const;

const QUIZ_STEPS: readonly QuizStep[] = [
  {
    question: "What's your credit score range?",
    subtitle:
      "This helps us match cards you're most likely to be approved for.",
    options: CREDIT_SCORE_OPTIONS,
    columns: 2,
  },
  {
    question: "Where do you spend the most each month?",
    subtitle:
      "Cards offer bonus rewards in specific categories. We'll match you to the ones that maximize your return.",
    options: SPENDING_CATEGORY_OPTIONS,
    columns: 2,
  },
  {
    question: "How much do you spend monthly?",
    subtitle:
      "This determines which reward tiers you'll actually benefit from.",
    options: MONTHLY_SPEND_OPTIONS,
    columns: 1,
  },
] as const;

const AFFILIATE_URL =
  "https://route.topnetworks.co/api/redirect/58a90a39-9189-46f6-8f65-fcda695d2a28";

const GTM_CONVERSION_EVENT = "quiz_cc_recommender_completed";

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function HeroBanner() {
  return (
    <div className="w-full bg-[#2563EB] text-white py-8 md:py-12 px-4">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h1 className="text-2xl md:text-4xl font-bold leading-tight text-white">
          Find Your <span className="text-[#FBBF24]">Best Credit Card</span> in
          30 Seconds
        </h1>
        <p className="text-sm md:text-lg text-blue-100">
          Answer 3 quick questions. Get personalized recommendations
          <br className="hidden md:block" /> matched to your spending habits.
        </p>

        {/* Social proof stats */}
        <div className="flex justify-center gap-8 md:gap-16 pt-4">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-white">847K+</p>
            <p className="text-[10px] md:text-xs uppercase tracking-wider text-blue-200">
              Users Matched
            </p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-white">4.8/5</p>
            <p className="text-[10px] md:text-xs uppercase tracking-wider text-blue-200">
              Avg Rating
            </p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-white">50+</p>
            <p className="text-[10px] md:text-xs uppercase tracking-wider text-blue-200">
              Cards Analyzed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrustBar() {
  const [liveCount, setLiveCount] = useState(127);

  // Gentle random drift every 8 s
  useEffect(() => {
    const timer = setInterval(() => {
      setLiveCount((prev) => {
        const delta = Math.random() > 0.5 ? 1 : -1;
        return Math.max(100, Math.min(200, prev + delta));
      });
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-white border-b border-gray-200 py-2 px-4">
      <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-4 text-sm">
        <span className="text-yellow-500 font-medium">
          ★★★★★ Rated 4.8 by users
        </span>
        <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
          {liveCount} people taking the quiz right now
        </span>
      </div>
    </div>
  );
}

function QuizProgressBar({
  currentStep,
  totalSteps,
}: {
  currentStep: number;
  totalSteps: number;
}) {
  return (
    <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
      <span className="font-medium text-gray-700">Your Credit Card Match</span>
      <span>
        Step {currentStep} of {totalSteps}
      </span>
    </div>
  );
}

function QuizOptionCard({
  option,
  selected,
  onClick,
  layout,
}: {
  option: QuizOption;
  selected: boolean;
  onClick: () => void;
  layout: "grid" | "list";
}) {
  if (layout === "list") {
    return (
      <motion.button
        type="button"
        onClick={onClick}
        className={`flex items-center gap-4 w-full p-4 rounded-xl border-2 transition-all duration-200 text-left ${
          selected
            ? "border-[#2563EB] bg-blue-50 shadow-md"
            : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
        }`}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <span className="text-2xl flex-shrink-0">{option.emoji}</span>
        <div>
          <p className="font-bold text-gray-900">{option.label}</p>
          {option.description && (
            <p className="text-sm text-gray-500">{option.description}</p>
          )}
        </div>
      </motion.button>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={`flex flex-col items-center justify-center p-5 md:p-6 rounded-xl border-2 transition-all duration-200 ${
        selected
          ? "border-[#2563EB] bg-blue-50 shadow-md"
          : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="text-3xl md:text-4xl mb-2">{option.emoji}</span>
      <p className="font-bold text-gray-900 text-sm md:text-base">
        {option.label}
      </p>
      {option.description && (
        <p className="text-xs md:text-sm text-gray-500 mt-1">
          {option.description}
        </p>
      )}
    </motion.button>
  );
}

/**
 * Stable ad container that stays in the DOM across quiz steps.
 * Instead of unmounting / remounting (which causes "removeChild" errors
 * because GPT injects its own children), we keep a single div and call
 * `googletag.pubads().refresh([slot])` to load fresh creative.
 */
const AD_SLOT_ID = "quiz-rec3-ad";

function refreshGPTSlot(elementId: string, stepIndex: number) {
  if (typeof window === "undefined") return;

  const gt = (window as unknown as Record<string, unknown>).googletag as
    | {
        cmd: Array<() => void>;
        pubads: () => {
          getSlots: () => Array<{ getSlotElementId: () => string }>;
          refresh: (slots: unknown[]) => void;
        };
      }
    | undefined;

  if (!gt?.cmd) return;

  gt.cmd.push(() => {
    const slots = gt.pubads().getSlots();
    const target = slots.find((s) => s.getSlotElementId() === elementId);
    if (target) {
      gt.pubads().refresh([target]);
      formLogger.info("[CC-REC-3] GPT slot refreshed via pubads().refresh()", {
        elementId,
        step: stepIndex,
      });
    } else {
      formLogger.warn("[CC-REC-3] GPT slot not found for refresh", {
        elementId,
      });
    }
  });
}

function AdSlot({ step }: { step: number }) {
  const prevStep = useRef(step);

  useEffect(() => {
    if (step !== prevStep.current) {
      prevStep.current = step;
      refreshGPTSlot(AD_SLOT_ID, step);
    }
  }, [step]);

  return <TopAdsPlacement id={AD_SLOT_ID} size="square" minHeight="250px" />;
}

// ---------------------------------------------------------------------------
// Main page component
// ---------------------------------------------------------------------------

export default function InvitCreditCardRecUS3Page() {
  const offerwallQuiz = FINANCE_QUIZ_CONFIGS.creditCardRecommender3;
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<number, string>>({});
  const { triggerSPA } = useTopAds();
  const router = useRouter();
  const advanceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const step = QUIZ_STEPS[currentStep];
  const selectedId = selections[currentStep] ?? null;
  const isLastStep = currentStep === QUIZ_STEPS.length - 1;

  // Drives enter/exit animation without AnimatePresence
  const [visible, setVisible] = useState(true);

  // Clean up pending timer on unmount
  useEffect(() => {
    return () => {
      if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current);
    };
  }, []);

  const handleSelect = useCallback(
    (optionId: string) => {
      // Save selection immutably
      const updatedSelections = { ...selections, [currentStep]: optionId };
      setSelections(updatedSelections);

      formLogger.info("[CC-REC-3] Step completed", {
        step: currentStep + 1,
        selection: optionId,
      });

      // Brief delay so the user sees their selection highlight
      if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current);
      advanceTimerRef.current = setTimeout(() => {
        if (isLastStep) {
          pushGTMConversion(GTM_CONVERSION_EVENT);
          formLogger.info(
            "[CC-REC-3] Quiz completed — redirecting to affiliate",
            { selections: updatedSelections },
          );
          router.push(AFFILIATE_URL);
          return;
        }

        // Fade out → swap step → fade in
        setVisible(false);
        setTimeout(() => {
          window.scrollTo(0, 0);
          const nextStep = currentStep + 1;
          setCurrentStep(nextStep);
          setVisible(true);

          // Refresh the GPT ad slot with fresh creative
          setTimeout(() => {
            refreshGPTSlot(AD_SLOT_ID, nextStep);
            triggerSPA();
          }, 150);
        }, 250); // matches exit duration
      }, 350); // highlight delay
    },
    [currentStep, isLastStep, selections, triggerSPA, router],
  );

  // Determine layout mode for step options
  const layoutMode = step.columns === 1 ? "list" : "grid";

  return (
    <FinanceOfferwallRuntime quiz={offerwallQuiz}>
      <div className="min-h-screen flex flex-col bg-white">
        <Header />

        {/* Hero */}
        <HeroBanner />

        {/* Trust bar */}
        <TrustBar />

        <main className="flex-grow">
          <div className="max-w-3xl mx-auto px-4 py-6 md:py-10">
            {/* TopAds ad unit — hard-swapped outside AnimatePresence */}
            <div className="flex justify-center mb-6">
              <AdSlot step={currentStep} />
            </div>

            {/* Quiz progress */}
            <QuizProgressBar
              currentStep={currentStep + 1}
              totalSteps={QUIZ_STEPS.length}
            />

            {/* Quiz step content — state-driven animation (no AnimatePresence) */}
            <motion.div
              animate={visible ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 0.25 }}
              className="space-y-5"
            >
              {/* Question */}
              <div className="space-y-2">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                  {step.question}
                </h2>
                <p className="text-sm md:text-base text-gray-500">
                  {step.subtitle}
                </p>
              </div>

              {/* Options */}
              <div
                className={
                  layoutMode === "grid"
                    ? "grid grid-cols-2 gap-3 md:gap-4"
                    : "flex flex-col gap-3"
                }
              >
                {step.options.map((option) => (
                  <QuizOptionCard
                    key={option.id}
                    option={option}
                    selected={selectedId === option.id}
                    onClick={() => handleSelect(option.id)}
                    layout={layoutMode}
                  />
                ))}
              </div>

              {/* Selection hint */}
              <p className="text-center text-xs text-gray-400 pt-2">
                Tap an option to continue
              </p>
            </motion.div>

            {/* ── Shared bottom sections ── */}

            {/* FAQ Accordion */}
            <div className="w-full text-left mt-12">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    What is a credit card cash back statement credit?
                  </AccordionTrigger>
                  <AccordionContent>
                    It&apos;s a benefit where you receive money back as a credit
                    on your statement, lowering your overall balance.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    How do I choose the right credit card for travel?
                  </AccordionTrigger>
                  <AccordionContent>
                    Consider cards with no foreign fees, travel insurance, and
                    rewards on airline or hotel purchases.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    Can I transfer my credit card balance to another
                    person&apos;s card?
                  </AccordionTrigger>
                  <AccordionContent>
                    Balance transfers are typically only allowed between cards
                    under the same account holder.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Stay Tuned Section */}
            <div className="border-l-4 border-[#0056b3] p-6 text-left w-full mt-10 rounded-r-md">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Stay Tuned
              </h4>
              <p className="text-gray-700 leading-relaxed">
                If you&apos;re looking for additional assistance in boosting
                your credit score or optimizing your credit card usage while
                avoiding banks capitalizing on your situation, please explore
                the information below as well. We offer valuable resources
                tailored to your specific needs.
              </p>
            </div>

            {/* Limited Offer Card */}
            <div className="flex justify-center mt-10 mb-4">
              <div className="bg-white rounded-xl p-6 w-full max-w-xs shadow-md border border-gray-100">
                <div className="flex flex-col items-center space-y-3">
                  <div className="relative w-48 h-28">
                    <Image
                      src="https://media.topfinanzas.com/images/credit-card-varity.png"
                      alt="Credit Card Variety"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <span className="text-lg">🔔</span>
                    <h3 className="text-base font-bold text-[#EF4444] uppercase">
                      Limited offer!
                    </h3>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 uppercase text-center">
                    CARD WITH NO ANNUAL FEE
                  </h4>
                  <p className="text-sm text-gray-700 text-center">
                    The most requested among our readers! Check it out today...
                  </p>
                  <Link
                    href="/financial-solutions/benefits-of-the-wells-fargo-reflect-card"
                    className="inline-flex items-center justify-center rounded-lg transition-colors bg-[#EF4444] hover:bg-[#DC2626] text-white font-bold px-6 py-2.5 text-sm uppercase"
                  >
                    SEE HOW TO APPLY
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </FinanceOfferwallRuntime>
  );
}
