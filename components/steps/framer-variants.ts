import type { Variants } from "framer-motion";

export const engagementContainerVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.06,
    },
  },
};

export const engagementItemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
  },
};

/**
 * Returns motion variants for CTA buttons, honoring reduced-motion preferences.
 */
export function getEngagementCtaVariants(
  reduceMotion: boolean,
): Pick<Variants, "rest" | "hover" | "tap"> {
  if (reduceMotion) {
    return {
      rest: { scale: 1, y: 0 },
      hover: { scale: 1, y: 0 },
      tap: { scale: 1, y: 0 },
    };
  }

  return {
    rest: { scale: 1, y: 0 },
    hover: { scale: 1.015, y: -1 },
    tap: { scale: 0.99, y: 0 },
  };
}
