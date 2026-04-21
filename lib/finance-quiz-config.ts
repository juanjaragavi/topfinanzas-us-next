/**
 * Finance vertical quiz configuration.
 *
 * Mirrors the Gaming vertical pattern (budgetbee-next/lib/gaming-quiz-config.ts).
 * The TopAds external script owns the quiz UI rendering; this config supplies
 * the data attributes injected via the hidden offerwall component.
 */

/* ─── Theme (Brand Green per fintech button spec) ─── */

export const FINANCE_QUIZ_THEME = {
  /** Primary accent — Brand Green */
  color: "#10B981",
  /** Lighter hover variant */
  colorLight: "#34D399",
  /** Dark gradient anchor */
  colorDark: "#059669",
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
  /** When true, the TopAds script skips ads during the quiz flow */
  skipAds?: boolean;
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
    loadingMessage: "Fetching Credit Card Options 2026",
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

  creditCardRecommender: {
    journeyId: "quiz-finance-cc-recommender-01",
    parentPath: "/invit-credit-card-rec-us",
    themeColor: FINANCE_QUIZ_THEME.color,
    themeColorLight: FINANCE_QUIZ_THEME.colorLight,
    loadingMessage: "Fetching Credit Card Options 2026",
    skipAds: false,
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

  creditCardRecommender2: {
    journeyId: "quiz-finance-cc-recommender-02",
    parentPath: "/invit-credit-card-rec-us-2",
    themeColor: FINANCE_QUIZ_THEME.color,
    themeColorLight: FINANCE_QUIZ_THEME.colorLight,
    loadingMessage: "Fetching Credit Card Options 2026",
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

  chooseThePerfectCard: {
    journeyId: "quiz-finance-perfect-card-01",
    parentPath: "/choose-the-perfect-card-for-you-1",
    themeColor: FINANCE_QUIZ_THEME.color,
    themeColorLight: FINANCE_QUIZ_THEME.colorLight,
    loadingMessage: "Fetching Credit Card Options 2026",
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
  creditCardRecommender3: {
    journeyId: "quiz-finance-cc-recommender-03",
    parentPath: "/invit-credit-card-rec-us-3",
    themeColor: FINANCE_QUIZ_THEME.color,
    themeColorLight: FINANCE_QUIZ_THEME.colorLight,
    loadingMessage: "Fetching Credit Card Options 2026",
    skipAds: false,
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

  creditCardRecommender4: {
    journeyId: "quiz-finance-cc-recommender-04",
    parentPath: "/invit-credit-card-rec-us-4",
    themeColor: FINANCE_QUIZ_THEME.color,
    themeColorLight: FINANCE_QUIZ_THEME.colorLight,
    loadingMessage: "Fetching Credit Card Options 2026",
    skipAds: false,
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

  creditCardRecommender5: {
    journeyId: "quiz-finance-cc-recommender-05",
    parentPath: "/invit-credit-card-rec-us-5",
    themeColor: FINANCE_QUIZ_THEME.color,
    themeColorLight: FINANCE_QUIZ_THEME.colorLight,
    loadingMessage: "Fetching Credit Card Options 2026",
    skipAds: false,
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

  creditCardRecommender6: {
    journeyId: "quiz-finance-cc-recommender-06",
    parentPath: "/invit-credit-card-rec-us-6",
    themeColor: FINANCE_QUIZ_THEME.color,
    themeColorLight: FINANCE_QUIZ_THEME.colorLight,
    loadingMessage: "Fetching Credit Card Options 2026",
    skipAds: false,
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

  creditCardRecommender7: {
    journeyId: "quiz-finance-cc-recommender-07",
    parentPath: "/invit-credit-card-rec-us-7",
    themeColor: FINANCE_QUIZ_THEME.color,
    themeColorLight: FINANCE_QUIZ_THEME.colorLight,
    loadingMessage: "Fetching Credit Card Options 2026",
    skipAds: false,
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

  creditCardRecommender8: {
    journeyId: "quiz-finance-cc-recommender-08",
    parentPath: "/invit-credit-card-rec-us-8",
    themeColor: FINANCE_QUIZ_THEME.color,
    themeColorLight: FINANCE_QUIZ_THEME.colorLight,
    loadingMessage: "Fetching Credit Card Options 2026",
    skipAds: false,
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

  creditCardRecommender9: {
    journeyId: "quiz-finance-cc-recommender-09",
    parentPath: "/invit-credit-card-rec-us-9",
    themeColor: FINANCE_QUIZ_THEME.color,
    themeColorLight: FINANCE_QUIZ_THEME.colorLight,
    loadingMessage: "Fetching Credit Card Options 2026",
    skipAds: false,
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

  creditCardRecommender10: {
    journeyId: "quiz-finance-cc-recommender-10",
    parentPath: "/invit-credit-card-rec-us-10",
    themeColor: FINANCE_QUIZ_THEME.color,
    themeColorLight: FINANCE_QUIZ_THEME.colorLight,
    loadingMessage: "Fetching Credit Card Options 2026",
    skipAds: false,
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

  creditCardRecommender11: {
    journeyId: "quiz-finance-cc-recommender-11",
    parentPath: "/invit-credit-card-rec-us-11",
    themeColor: FINANCE_QUIZ_THEME.color,
    themeColorLight: FINANCE_QUIZ_THEME.colorLight,
    loadingMessage: "Fetching Credit Card Options 2026",
    skipAds: false,
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

  creditCardRecommenderP1: {
    journeyId: "quiz-finance-cc-recommender-p1",
    parentPath: "/credit-card-recommender-p1",
    themeColor: FINANCE_QUIZ_THEME.color,
    themeColorLight: FINANCE_QUIZ_THEME.colorLight,
    loadingMessage: "Fetching Credit Card Options 2026",
    skipAds: true,
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

  jobsPromiseP1: {
    journeyId: "quiz-finance-jobs-promise-p1",
    parentPath: "/jobs/jobs-promise-p1",
    themeColor: FINANCE_QUIZ_THEME.color,
    themeColorLight: FINANCE_QUIZ_THEME.colorLight,
    loadingMessage: "Fetching Credit Card Options 2026",
    skipAds: false,
    questions: [
      {
        id: "credit-limit",
        question: "Select Your Ideal Credit Limit:",
        options: [
          { label: "$2,500", value: "2500" },
          { label: "$5,000", value: "5000" },
          { label: "$10,000", value: "10000" },
          { label: "Higher limit", value: "more" },
        ],
      },
      {
        id: "card-priority",
        question: "What's most important in a credit card?",
        options: [
          { label: "Cash back rewards", value: "cashback" },
          { label: "No annual fee", value: "no-fee" },
          { label: "0% intro APR", value: "zero-apr" },
        ],
      },
    ],
  },

  jobsPromiseP2: {
    journeyId: "quiz-finance-jobs-promise-p2",
    parentPath: "/jobs/jobs-promise-p2",
    themeColor: FINANCE_QUIZ_THEME.color,
    themeColorLight: FINANCE_QUIZ_THEME.colorLight,
    loadingMessage: "Fetching Credit Card Options 2026",
    skipAds: false,
    questions: [
      {
        id: "credit-limit",
        question: "Choose Your Preferred Credit Limit:",
        options: [
          { label: "$2,500", value: "2500" },
          { label: "$5,000", value: "5000" },
          { label: "$10,000", value: "10000" },
          { label: "I want more", value: "more" },
        ],
      },
      {
        id: "card-feature",
        question: "Which feature appeals to you most?",
        options: [
          { label: "Earning cash back", value: "cashback" },
          { label: "Zero fees", value: "no-fee" },
          { label: "Interest-free period", value: "zero-apr" },
        ],
      },
    ],
  },
};
