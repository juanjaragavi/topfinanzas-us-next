"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const REDIRECT_URL =
  "https://route.topnetworks.co/api/redirect/d0dc0c93-d1fa-4f5f-8fb4-ff7753eb3f20";

const STEP_1_OPTIONS = ["$2500", "$5000", "$10000", "I need more"];
const STEP_2_OPTIONS = ["Cashback", "0 handling cost", "0% APR"];

export default function FinanceQuizRecommenderP1Page() {
  const [step, setStep] = useState(1);

  const handleStep1Select = () => {
    setStep(2);
    window.scrollTo(0, 0);
  };

  const handleStep2Select = () => {
    window.location.href = REDIRECT_URL;
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow relative">
        {/* ── Background: faux blog article ── */}
        <div
          className="blur-sm pointer-events-none select-none"
          aria-hidden="true"
        >
          <div className="container mx-auto px-4 py-8 max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1A2B3C] text-center mb-4">
              We&apos;ve discovered a few cards that unlock remarkable
              boundaries for you.
            </h1>
            <p className="text-sm text-gray-400 uppercase tracking-wide text-center mb-6">
              By Top Finance
            </p>
            <div className="relative w-full h-48 md:h-64 rounded-lg overflow-hidden mb-6">
              <Image
                src="https://media.topfinanzas.com/images/generated/1741659818958/sample_0.jpg"
                alt="Credit card article hero"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
                priority
              />
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Choosing the right credit card can feel overwhelming with so many
              options available. Whether you prioritize cashback rewards, travel
              perks, or a low APR, understanding your spending habits is the
              first step to making an informed decision.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Many consumers overlook the importance of matching their lifestyle
              with the right card benefits. A card with no annual fee might save
              you money upfront, while a premium rewards card could deliver far
              greater value if you travel frequently or spend heavily in bonus
              categories.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our recommender tool analyzes your preferences and financial goals
              to suggest the best credit card options available in the US
              market. Answer a few quick questions and discover cards tailored
              to your needs — from generous sign-up bonuses to long-term
              savings.
            </p>
            <div className="flex flex-col gap-3 w-full max-w-md mx-auto mt-8">
              <div className="block w-full rounded-lg bg-[#0056b3] text-white py-3 px-6 text-base font-semibold text-center">
                Up to 2% Cashback Credit Card
              </div>
              <div className="block w-full rounded-lg bg-[#0056b3] text-white py-3 px-6 text-base font-semibold text-center">
                No annual fee Credit Card
              </div>
              <div className="block w-full rounded-lg bg-[#0056b3] text-white py-3 px-6 text-base font-semibold text-center">
                No Credit Check Credit Card
              </div>
            </div>
          </div>
        </div>

        {/* ── Fixed full-screen overlay (covers header) ── */}
        <div className="fixed inset-0 bg-black/50 z-[9999]" />

        {/* ── Quiz modal ── */}
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step-1"
                id="paso-1-quiz-finance-01"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
              >
                {/* Progress bar */}
                <div className="flex h-2">
                  <div className="w-1/2 bg-[#10B981]" />
                  <div className="w-1/2 bg-gray-200" />
                </div>

                <div className="p-6 sm:p-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-6">
                    Confirm Desired Credit Card Limit:
                  </h2>

                  <div className="flex flex-col gap-3">
                    {STEP_1_OPTIONS.map((label) => (
                      <button
                        key={label}
                        type="button"
                        onClick={handleStep1Select}
                        className="w-full rounded-2xl bg-[#10B981] hover:bg-[#059669] active:bg-[#059669] text-white font-bold text-lg py-4 px-6 transition-all shadow-3d border border-black/[.15] hover:shadow-3d-hover hover:translate-y-[1px] active:shadow-3d-active active:translate-y-[3px]"
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step-2"
                id="paso-2-quiz-finance-01"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
              >
                {/* Progress bar */}
                <div className="flex h-2">
                  <div className="w-full bg-[#10B981]" />
                </div>

                <div className="p-6 sm:p-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-6">
                    I would also like:
                  </h2>

                  <div className="flex flex-col gap-3">
                    {STEP_2_OPTIONS.map((label) => (
                      <button
                        key={label}
                        type="button"
                        onClick={handleStep2Select}
                        className="w-full rounded-2xl bg-[#10B981] hover:bg-[#059669] active:bg-[#059669] text-white font-bold text-lg py-4 px-6 transition-all shadow-3d border border-black/[.15] hover:shadow-3d-hover hover:translate-y-[1px] active:shadow-3d-active active:translate-y-[3px]"
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </div>
  );
}
