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

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface QuizOption {
  id: string;
  emoji: string;
  label: string;
  description?: string;
}

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

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

export function HeroBanner() {
  return (
    <div className="w-full bg-[#10B981] text-white py-3 md:py-7 px-4">
      <div className="max-w-3xl mx-auto text-center space-y-2.5 md:space-y-4">
        <h1 className="text-[21px] md:text-4xl font-bold leading-[1.15] text-white">
          Find Your <span className="text-[#A7F3D0]">Best Credit Card</span> in
          30 Seconds
        </h1>
        <p className="text-[12px] leading-[1.25] md:text-lg text-emerald-100">
          Answer 3 quick questions. Get personalized recommendations
          <br className="hidden md:block" /> matched to your spending habits.
        </p>

        {/* Social proof stats */}
        <div className="flex justify-center gap-4 md:gap-16 pt-0.5 md:pt-4">
          <div className="text-center">
            <p className="text-lg md:text-3xl font-bold leading-none text-white">
              847K+
            </p>
            <p className="text-[10px] md:text-xs uppercase tracking-wider text-emerald-200">
              Users Matched
            </p>
          </div>
          <div className="text-center">
            <p className="text-lg md:text-3xl font-bold leading-none text-white">
              4.8/5
            </p>
            <p className="text-[10px] md:text-xs uppercase tracking-wider text-emerald-200">
              Avg Rating
            </p>
          </div>
          <div className="text-center">
            <p className="text-lg md:text-3xl font-bold leading-none text-white">
              50+
            </p>
            <p className="text-[10px] md:text-xs uppercase tracking-wider text-emerald-200">
              Cards Analyzed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TrustBar() {
  const [liveCount, setLiveCount] = useState(127);

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
    <div className="w-full bg-white border-b border-gray-200 py-1 px-4">
      <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-2.5 text-xs md:text-sm">
        <span className="text-yellow-500 font-medium leading-none">
          ★★★★★ Rated 4.8 by users
        </span>
        <span className="bg-green-100 text-green-800 text-[11px] md:text-xs font-semibold px-3 py-1 rounded-full leading-none">
          {liveCount} people taking the quiz right now
        </span>
      </div>
    </div>
  );
}

export function QuizProgressBar({
  currentStep,
  totalSteps,
}: {
  currentStep: number;
  totalSteps: number;
}) {
  return (
    <div className="flex items-center justify-between text-xs md:text-sm text-gray-500 mb-3 md:mb-6">
      <span className="font-medium text-gray-700">Your Credit Card Match</span>
      <span>
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
        className={`flex items-center gap-3 w-full p-3.5 rounded-xl border-2 transition-all duration-200 text-left ${
          selected
            ? "border-[#10B981] bg-emerald-50 shadow-md"
            : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
        }`}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <span className="text-3xl leading-none flex-shrink-0">{option.emoji}</span>
        <div>
          <p className="font-bold text-gray-900 text-[15px] leading-tight">
            {option.label}
          </p>
          {option.description && (
            <p className="text-xs text-gray-500 leading-tight mt-1">
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
      className={`flex flex-col items-center justify-center p-3.5 md:p-5 rounded-xl border-2 transition-all duration-200 ${
        selected
          ? "border-[#10B981] bg-emerald-50 shadow-md"
          : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="text-[34px] md:text-4xl leading-none mb-1.5">{option.emoji}</span>
      <p className="font-bold text-gray-900 text-[15px] md:text-base leading-tight text-center">
        {option.label}
      </p>
      {option.description && (
        <p className="text-[11px] md:text-sm text-gray-500 mt-1 leading-tight text-center">
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

export function BottomContent() {
  return (
    <>
      {/* FAQ Accordion */}
      <div className="w-full text-left mt-12">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              What is a credit card cash back statement credit?
            </AccordionTrigger>
            <AccordionContent>
              It&apos;s a benefit where you receive money back as a credit on
              your statement, lowering your overall balance.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              How do I choose the right credit card for travel?
            </AccordionTrigger>
            <AccordionContent>
              Consider cards with no foreign fees, travel insurance, and rewards
              on airline or hotel purchases.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Can I transfer my credit card balance to another person&apos;s
              card?
            </AccordionTrigger>
            <AccordionContent>
              Balance transfers are typically only allowed between cards under
              the same account holder.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Stay Tuned Section */}
      <div className="border-l-4 border-[#0056b3] p-6 text-left w-full mt-10 rounded-r-md">
        <h4 className="text-xl font-semibold text-gray-800 mb-3">Stay Tuned</h4>
        <p className="text-gray-700 leading-relaxed">
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
