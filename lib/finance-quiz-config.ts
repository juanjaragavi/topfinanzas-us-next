/**
 * Finance vertical quiz configuration.
 *
 * Mirrors the Jobs vertical pattern (lib/jobs-config.ts + components/jobs/quiz-overlays)
 * adapted for credit-card intent collection on financial-solutions pages.
 */

/* ─── Theme (vibrant orange per design spec) ─── */

export const FINANCE_QUIZ_THEME = {
  /** Primary accent — vibrant orange (#FF8C00) */
  color: "#FF8C00",
  /** Lighter hover variant */
  colorLight: "#FFA633",
  /** Dark gradient anchor */
  colorDark: "#CC7000",
} as const;

/* ─── Types ─── */

export interface FinanceQuizOption {
  label: string;
  value: string;
}

export interface FinanceQuizQuestion {
  id: string;
  question: string;
  options: FinanceQuizOption[];
}

export interface FinanceQuizConfig {
  journeyId: string;
  parentPath: string;
  themeColor: string;
  themeColorLight: string;
  loadingMessages: string[];
  loadingDuration: number;
  ctaTitle: string;
  ctaButtonLabel: string;
  ctaDisclaimer: string;
  questions: FinanceQuizQuestion[];
}

/* ─── Delayed-ad paths (financial-solutions benefits pages with quiz) ─── */

export const DELAYED_FINANCE_AD_PATHS = [
  "/financial-solutions/chase-sapphire-preferred-credit-card-benefits",
] as const;

export const FINANCE_DELAYED_ADS_EVENT = "finance:activate-delayed-ads";

export interface DelayedFinanceAdsEventDetail {
  path?: string;
  journeyId?: string;
}

/* ─── Quiz Configurations ─── */

export const FINANCE_QUIZ_CONFIGS: Record<string, FinanceQuizConfig> = {
  chaseSapphirePreferred: {
    journeyId: "quiz-finance-chase-sapphire-01",
    parentPath:
      "/financial-solutions/chase-sapphire-preferred-credit-card-benefits",
    themeColor: FINANCE_QUIZ_THEME.color,
    themeColorLight: FINANCE_QUIZ_THEME.colorLight,
    loadingMessages: [
      "Loading the best recommendation for you\u2026",
      "Fetching Credit Card Options\u2026",
      "Comparing top offers for your profile\u2026",
      "Your results are almost ready!",
    ],
    loadingDuration: 3500,
    ctaTitle: "Exclusive benefits are waiting for you!",
    ctaButtonLabel: "Get Credit Card",
    ctaDisclaimer: "To continue, it will be necessary to watch a short ad.",
    questions: [
      {
        id: "credit-limit",
        question: "Do you need more limit on your Credit Card?",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ],
      },
      {
        id: "preferred-benefit",
        question: "Which benefit you prefer with your Credit Card?",
        options: [
          { label: "Cashback", value: "cashback" },
          { label: "Travel Miles", value: "travel-miles" },
          { label: "No handling fee", value: "no-fee" },
          { label: "Other", value: "other" },
        ],
      },
    ],
  },
} as const;
