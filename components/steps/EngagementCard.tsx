"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { QuizOption } from "@/components/steps/credit-card-rec-shared";
import {
  engagementContainerVariants,
  engagementItemVariants,
  getEngagementCtaVariants,
} from "@/components/steps/framer-variants";

export interface EngagementCardProps {
  title: string;
  subtitle: string;
  options: readonly QuizOption[];
  selectedId: string | null;
  onSelect: (optionId: string) => void;
  onOptionHover?: (optionId: string) => void;
  reduceMotion: boolean;
  className?: string;
}

/**
 * Motion-enhanced recommendation container with glassmorphism styling.
 * Provides high-contrast CTA buttons and subtle pulse feedback for priority action.
 */
export default function EngagementCard({
  title,
  subtitle,
  options,
  selectedId,
  onSelect,
  onOptionHover,
  reduceMotion,
  className,
}: EngagementCardProps) {
  const ctaVariants = getEngagementCtaVariants(reduceMotion);

  return (
    <motion.section
      variants={engagementContainerVariants}
      initial="hidden"
      animate="visible"
      className={cn(
        "rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-4 md:p-6 shadow-[0_18px_60px_rgba(15,23,42,0.35)]",
        className,
      )}
      aria-label="Credit card recommendation options"
    >
      <motion.div variants={engagementItemVariants} className="space-y-2">
        <h2 className="text-[20px] md:text-2xl font-bold leading-tight text-white">
          {title}
        </h2>
        <p className="text-sm md:text-base text-slate-100">{subtitle}</p>
      </motion.div>

      <motion.div variants={engagementItemVariants} className="mt-4 space-y-3">
        {options.map((option, index) => {
          const isSelected = selectedId === option.id;
          const isPrimary = index === 1;

          return (
            <motion.button
              key={option.id}
              type="button"
              aria-label={option.label}
              aria-pressed={isSelected}
              variants={ctaVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              onMouseEnter={() => onOptionHover?.(option.id)}
              onFocus={() => onOptionHover?.(option.id)}
              onClick={() => onSelect(option.id)}
              className={cn(
                "group relative w-full rounded-xl border px-4 py-3 text-left transition-colors duration-200",
                "bg-white/90 text-slate-900 border-white/80 hover:bg-white",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300",
                isSelected &&
                  "bg-emerald-500 text-white border-emerald-300 shadow-[0_0_0_1px_rgba(110,231,183,0.55),0_12px_30px_rgba(16,185,129,0.4)]",
                isPrimary && !isSelected && "ring-1 ring-emerald-200",
              )}
            >
              {isPrimary && !reduceMotion && !isSelected && (
                <motion.span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-xl border border-emerald-300"
                  animate={{ opacity: [0.2, 0.7, 0.2] }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              )}

              <span className="relative flex items-start gap-3">
                <span className="text-2xl leading-none" aria-hidden="true">
                  {option.emoji}
                </span>
                <span className="min-w-0">
                  <span className="block text-base font-bold leading-tight">
                    {option.label}
                  </span>
                  {option.description && (
                    <span
                      className={cn(
                        "mt-1 block text-xs leading-tight",
                        isSelected ? "text-emerald-100" : "text-slate-600",
                      )}
                    >
                      {option.description}
                    </span>
                  )}
                </span>
              </span>
            </motion.button>
          );
        })}
      </motion.div>
    </motion.section>
  );
}
