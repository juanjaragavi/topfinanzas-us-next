"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { formLogger } from "@/lib/logger";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface QuizOption {
  id: string;
  emoji: string;
  label: string;
  description?: string;
}

export type QuizOptionCardVariant = "default" | "3d-blue";

// ---------------------------------------------------------------------------
// Quiz data (immutable)
// ---------------------------------------------------------------------------

export const CREDIT_SCORE_OPTIONS: readonly QuizOption[] = [
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

export const SPENDING_CATEGORY_OPTIONS: readonly QuizOption[] = [
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

export const MONTHLY_SPEND_OPTIONS: readonly QuizOption[] = [
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

export const AFFILIATE_URL =
  "https://route.topnetworks.co/api/redirect/58a90a39-9189-46f6-8f65-fcda695d2a28";

export const GTM_CONVERSION_EVENT = "quiz_cc_recommender_completed";

/** TopAds external script URL (must match the one loaded in layout). */
const TOPADS_SCRIPT_URL = "https://ads.gamadx.com/topAds.min.js";
const TRUST_BAR_STORAGE_KEY = "tf_quiz_live_count_state_v1";
const TRUST_BAR_INTERVALS_MS = [1000, 500, 1500] as const;

interface TrustBarPersistedState {
  count: number;
  intervalIndex: number;
  lastIncrementAt: number;
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

export function HeroBanner({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={cn(
        "w-full bg-[#10B981] text-white px-4",
        compact ? "py-2 md:py-5" : "py-3 md:py-7",
      )}
    >
      <div
        className={cn(
          "max-w-3xl mx-auto text-center",
          compact ? "space-y-2 md:space-y-3" : "space-y-2.5 md:space-y-4",
        )}
      >
        <h1
          className={cn(
            "font-bold text-white tracking-tight",
            compact
              ? "text-[15px] sm:text-[19px] md:text-3xl leading-[1.08]"
              : "text-[16px] sm:text-[21px] md:text-4xl leading-[1.15]",
          )}
        >
          Find Your <span className="text-[#A7F3D0]">Best Credit Card</span> in
          30 Seconds
        </h1>

        {/* Social proof stats */}
        <div
          className={cn(
            "flex justify-center",
            compact ? "gap-3 md:gap-12 pt-0" : "gap-4 md:gap-16 pt-0.5 md:pt-4",
          )}
        >
          <div className="text-center">
            <p
              className={cn(
                "font-bold leading-none text-white",
                compact ? "text-[11px] md:text-[21px]" : "text-[12px] md:text-[21px]",
              )}
            >
              847K+
            </p>
            <p
              className={cn(
                "uppercase tracking-wider text-emerald-200",
                compact ? "text-[6px] md:text-[8px]" : "text-[7px] md:text-[8px]",
              )}
            >
              Users Matched
            </p>
          </div>
          <div className="text-center">
            <p
              className={cn(
                "font-bold leading-none text-white",
                compact ? "text-[11px] md:text-[21px]" : "text-[12px] md:text-[21px]",
              )}
            >
              4.8/5
            </p>
            <p
              className={cn(
                "uppercase tracking-wider text-emerald-200",
                compact ? "text-[6px] md:text-[8px]" : "text-[7px] md:text-[8px]",
              )}
            >
              Avg Rating
            </p>
          </div>
          <div className="text-center">
            <p
              className={cn(
                "font-bold leading-none text-white",
                compact ? "text-[11px] md:text-[21px]" : "text-[12px] md:text-[21px]",
              )}
            >
              50+
            </p>
            <p
              className={cn(
                "uppercase tracking-wider text-emerald-200",
                compact ? "text-[6px] md:text-[8px]" : "text-[7px] md:text-[8px]",
              )}
            >
              Cards Analyzed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TrustBar({ compact = false }: { compact?: boolean }) {
  const [liveCount, setLiveCount] = useState(127);
  const [isPulsing, setIsPulsing] = useState(false);
  const countRef = useRef(127);
  const intervalIndexRef = useRef(0);
  const lastIncrementAtRef = useRef(0);
  const tickTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pulseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const persistState = () => {
      const nextState: TrustBarPersistedState = {
        count: countRef.current,
        intervalIndex: intervalIndexRef.current,
        lastIncrementAt: lastIncrementAtRef.current,
      };
      window.localStorage.setItem(
        TRUST_BAR_STORAGE_KEY,
        JSON.stringify(nextState),
      );
    };

    const triggerPulse = () => {
      setIsPulsing(true);
      if (pulseTimerRef.current) {
        clearTimeout(pulseTimerRef.current);
      }
      pulseTimerRef.current = setTimeout(() => {
        setIsPulsing(false);
      }, 180);
    };

    const now = Date.now();
    const rawState = window.localStorage.getItem(TRUST_BAR_STORAGE_KEY);

    if (rawState) {
      try {
        const parsed = JSON.parse(rawState) as TrustBarPersistedState;
        if (
          Number.isFinite(parsed.count) &&
          Number.isFinite(parsed.intervalIndex) &&
          Number.isFinite(parsed.lastIncrementAt)
        ) {
          countRef.current = Math.max(100, parsed.count);
          intervalIndexRef.current =
            parsed.intervalIndex % TRUST_BAR_INTERVALS_MS.length;
          lastIncrementAtRef.current = parsed.lastIncrementAt;
        }
      } catch {
        countRef.current = 127;
        intervalIndexRef.current = 0;
        lastIncrementAtRef.current = now;
      }
    }

    if (!lastIncrementAtRef.current) {
      lastIncrementAtRef.current = now;
      persistState();
    }

    let catchUpIncrements = 0;
    let guard = 0;
    while (guard < 500) {
      const currentInterval = TRUST_BAR_INTERVALS_MS[intervalIndexRef.current];
      if (now - lastIncrementAtRef.current < currentInterval) {
        break;
      }
      lastIncrementAtRef.current += currentInterval;
      intervalIndexRef.current =
        (intervalIndexRef.current + 1) % TRUST_BAR_INTERVALS_MS.length;
      countRef.current += 1;
      catchUpIncrements += 1;
      guard += 1;
    }

    setLiveCount(countRef.current);
    if (catchUpIncrements > 0) {
      triggerPulse();
      persistState();
    }

    const scheduleNextTick = () => {
      const interval = TRUST_BAR_INTERVALS_MS[intervalIndexRef.current];
      const elapsed = Date.now() - lastIncrementAtRef.current;
      const wait = Math.max(80, interval - elapsed);

      tickTimerRef.current = setTimeout(() => {
        countRef.current += 1;
        setLiveCount(countRef.current);
        triggerPulse();

        lastIncrementAtRef.current = Date.now();
        intervalIndexRef.current =
          (intervalIndexRef.current + 1) % TRUST_BAR_INTERVALS_MS.length;
        persistState();
        scheduleNextTick();
      }, wait);
    };

    scheduleNextTick();

    return () => {
      if (tickTimerRef.current) {
        clearTimeout(tickTimerRef.current);
      }
      if (pulseTimerRef.current) {
        clearTimeout(pulseTimerRef.current);
      }
    };
  }, []);

  return (
    <div
      className={cn(
        "w-full bg-white border-b border-gray-200 px-4",
        compact ? "py-0.5" : "py-1",
      )}
    >
      <div
        className={cn(
          "max-w-3xl mx-auto flex flex-wrap items-center justify-center",
          compact
            ? "gap-2 text-[11px] md:text-sm"
            : "gap-2.5 text-xs md:text-sm",
        )}
      >
        <span className="text-yellow-500 font-medium leading-none">
          ★★★★★ Rated 4.8 by users
        </span>
        <span
          className={cn(
            "bg-green-100 text-green-800 font-semibold rounded-full leading-none",
            compact
              ? "text-[10px] md:text-xs px-2.5 py-0.5"
              : "text-[11px] md:text-xs px-3 py-1",
          )}
        >
          <span
            className={cn(
              "inline-block transition-transform duration-150",
              isPulsing && "scale-105",
            )}
          >
            {liveCount}
          </span>{" "}
          people taking the quiz right now
        </span>
      </div>
    </div>
  );
}

export function QuizProgressBar({
  currentStep,
  totalSteps,
  className,
  titleClassName,
  stepClassName,
}: {
  currentStep: number;
  totalSteps: number;
  className?: string;
  titleClassName?: string;
  stepClassName?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-between text-[11px] md:text-sm mb-2 md:mb-4",
        className ?? "text-gray-500",
      )}
    >
      <span className={cn("font-medium", titleClassName ?? "text-gray-700")}>
        Your Credit Card Match
      </span>
      <span className={stepClassName}>
        Step {currentStep} of {totalSteps}
      </span>
    </div>
  );
}

export function QuizOptionCard({
  option,
  selected,
  onClick,
  layout,
  variant = "default",
}: {
  option: QuizOption;
  selected: boolean;
  onClick: () => void;
  layout: "grid" | "list";
  variant?: QuizOptionCardVariant;
}) {
  const isThreeDBlue = variant === "3d-blue";

  if (layout === "list") {
    return (
      <motion.button
        type="button"
        onClick={onClick}
        aria-pressed={selected}
        aria-label={option.label}
        className={`flex items-center gap-3 w-full p-3.5 rounded-xl border-2 transition-all duration-200 text-left ${
          isThreeDBlue
            ? selected
              ? "border-[#1E40AF] bg-[#2563EB] text-white shadow-[0_4px_0_0_#1E40AF]"
              : "border-[#2563EB] bg-[#3B82F6] text-white shadow-[0_4px_0_0_#1E40AF] hover:bg-[#2563EB] hover:translate-y-[1px] active:translate-y-[2px] active:shadow-none"
            : selected
              ? "border-[#10B981] bg-emerald-50 shadow-md"
              : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
        }`}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <span className="text-3xl leading-none flex-shrink-0">
          {option.emoji}
        </span>
        <div>
          <p
            className={`font-bold text-[15px] leading-tight ${
              isThreeDBlue ? "text-white" : "text-gray-900"
            }`}
          >
            {option.label}
          </p>
          {option.description && (
            <p
              className={`text-xs leading-tight mt-1 ${
                isThreeDBlue ? "text-blue-100" : "text-gray-500"
              }`}
            >
              {option.description}
            </p>
          )}
        </div>
      </motion.button>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      aria-label={option.label}
      className={`flex flex-col items-center justify-center p-3.5 md:p-5 rounded-xl border-2 transition-all duration-200 ${
        isThreeDBlue
          ? selected
            ? "border-[#1E40AF] bg-[#2563EB] text-white shadow-[0_4px_0_0_#1E40AF]"
            : "border-[#2563EB] bg-[#3B82F6] text-white shadow-[0_4px_0_0_#1E40AF] hover:bg-[#2563EB] hover:translate-y-[1px] active:translate-y-[2px] active:shadow-none"
          : selected
            ? "border-[#10B981] bg-emerald-50 shadow-md"
            : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="text-[34px] md:text-4xl leading-none mb-1.5">
        {option.emoji}
      </span>
      <p
        className={`font-bold text-[15px] md:text-base leading-tight text-center ${
          isThreeDBlue ? "text-white" : "text-gray-900"
        }`}
      >
        {option.label}
      </p>
      {option.description && (
        <p
          className={`text-[11px] md:text-sm mt-1 leading-tight text-center ${
            isThreeDBlue ? "text-blue-100" : "text-gray-500"
          }`}
        >
          {option.description}
        </p>
      )}
    </motion.button>
  );
}

/**
 * Imperative ad container that manages the inner ad div via DOM APIs.
 *
 * Ad scripts (TopAds / GPT) inject their own child nodes into the ad
 * container.  If React tries to unmount that container (e.g. via a `key`
 * swap) it calls `removeChild` on nodes the ad script has re‑parented,
 * causing a runtime crash.  By owning only a stable wrapper `<div>` in
 * React and creating / destroying the inner ad `<div>` imperatively we
 * avoid the conflict entirely.
 */
export function AdSlot({
  unitIndex,
  logTag,
}: {
  unitIndex: number;
  logTag: string;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isFirstMount = useRef(true);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    wrapper.innerHTML = "";

    const adId = `square0${unitIndex}`;
    const adDiv = document.createElement("div");
    adDiv.id = adId;
    adDiv.dataset.topads = "";
    adDiv.dataset.topadsSize = "square";
    adDiv.className = "topads-placement";
    adDiv.style.cssText =
      "min-height:250px;display:block;margin:20px auto;text-align:center";
    adDiv.setAttribute("aria-label", `Advertisement ${adId}`);
    wrapper.appendChild(adDiv);

    let reinitTimer: ReturnType<typeof setTimeout> | null = null;

    if (isFirstMount.current) {
      isFirstMount.current = false;
      formLogger.info(`[${logTag}] Ad container created (initial)`, {
        adId,
        unitIndex,
      });
    } else {
      formLogger.info(`[${logTag}] Ad container created (rotation)`, {
        adId,
        unitIndex,
      });

      reinitTimer = setTimeout(() => {
        try {
          document
            .querySelectorAll('script[src*="topAds.min.js"]')
            .forEach((s) => s.remove());

          const script = document.createElement("script");
          script.src = TOPADS_SCRIPT_URL;
          script.type = "text/javascript";
          script.async = true;
          script.defer = true;
          script.setAttribute("data-cfasync", "false");
          document.head.appendChild(script);

          formLogger.info(`[${logTag}] TopAds script re-injected`, { adId });
        } catch (err) {
          formLogger.error(
            `[${logTag}] Failed to re-inject TopAds script`,
            err,
          );
        }
      }, 100);
    }

    return () => {
      if (reinitTimer) clearTimeout(reinitTimer);
      wrapper.innerHTML = "";
    };
  }, [unitIndex, logTag]);

  return <div ref={wrapperRef} />;
}

export function BottomContent({
  variant = "default",
}: {
  variant?: "default" | "dark";
}) {
  const dark = variant === "dark";

  return (
    <>
      {/* FAQ Accordion */}
      <div className="w-full text-left mt-12">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem
            value="item-1"
            className={dark ? "border-white/35" : undefined}
          >
            <AccordionTrigger className={dark ? "text-white/95" : undefined}>
              What is a credit card cash back statement credit?
            </AccordionTrigger>
            <AccordionContent className={dark ? "text-white/80" : undefined}>
              It&apos;s a benefit where you receive money back as a credit on
              your statement, lowering your overall balance.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className={dark ? "border-white/35" : undefined}
          >
            <AccordionTrigger className={dark ? "text-white/95" : undefined}>
              How do I choose the right credit card for travel?
            </AccordionTrigger>
            <AccordionContent className={dark ? "text-white/80" : undefined}>
              Consider cards with no foreign fees, travel insurance, and rewards
              on airline or hotel purchases.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className={dark ? "border-white/35" : undefined}
          >
            <AccordionTrigger className={dark ? "text-white/95" : undefined}>
              Can I transfer my credit card balance to another person&apos;s
              card?
            </AccordionTrigger>
            <AccordionContent className={dark ? "text-white/80" : undefined}>
              Balance transfers are typically only allowed between cards under
              the same account holder.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Stay Tuned Section */}
      <div className="border-l-4 border-[#0056b3] p-6 text-left w-full mt-10 rounded-r-md">
        <h4
          className={cn(
            "text-xl font-semibold mb-3",
            dark ? "text-white" : "text-gray-800",
          )}
        >
          Stay Tuned
        </h4>
        <p
          className={cn(
            dark
              ? "text-white/85 leading-snug"
              : "text-gray-700 leading-relaxed",
          )}
        >
          If you&apos;re looking for additional assistance in boosting your
          credit score or optimizing your credit card usage while avoiding banks
          capitalizing on your situation, please explore the information below
          as well. We offer valuable resources tailored to your specific needs.
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
    </>
  );
}
