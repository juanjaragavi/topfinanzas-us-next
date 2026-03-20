/**
 * Finance vertical quiz configuration.
 *
 * Mirrors the Gaming vertical pattern (budgetbee-next/lib/gaming-quiz-config.ts).
 * The TopAds external script owns the quiz UI rendering; this config supplies
 * the data attributes injected via the hidden offerwall component.
 */

/* ─── Theme (vibrant orange per design spec) ─── */

export const FINANCE_QUIZ_THEME = {
  /** Primary accent — vibrant orange */
  color: "#FF8C00",
  /** Lighter hover variant */
  colorLight: "#FFA633",
  /** Dark gradient anchor */
  colorDark: "#CC7000",
} as const;

/* ─── Types (mirrors GamingQuizConfig from budgetbee-next) ─── */

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
  /** Single loading message shown during fake-search state */
  loadingMessage: string;
  questions: FinanceQuizQuestion[];
  /** When true, suppress ad activation on quiz completion */
  hideAds?: boolean;
}

/* ─── Delayed-ad paths (financial-solutions benefits pages with quiz) ─── */

export const DELAYED_FINANCE_AD_PATHS = [] as const;

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
    loadingMessage: "Fetching Credit Card Options\u2026",
    questions: [
      {
        id: "credit-limit",
        question: "Confirm Desired Credit Card Limit:",
        options: [
          { label: "$2500", value: "2500" },
          { label: "$5000", value: "5000" },
          { label: "$10000", value: "10000" },
          { label: "I need more", value: "more" },
        ],
      },
      {
        id: "preferred-benefit",
        question: "I would also like:",
        options: [
          { label: "Cashback", value: "cashback" },
          { label: "0 handling cost", value: "no-fee" },
          { label: "0% APR", value: "zero-apr" },
        ],
      },
    ],
  },
};
