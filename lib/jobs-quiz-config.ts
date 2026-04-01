/**
 * Jobs vertical quiz configuration.
 *
 * Mirrors the Finance vertical pattern (lib/finance-quiz-config.ts).
 * The TopAds external script owns the quiz UI rendering; this config supplies
 * the data attributes injected via the hidden offerwall component.
 */

/* ─── Theme (matches JOBS_THEME from lib/jobs-config) ─── */

export const JOBS_QUIZ_THEME = {
  /** Primary accent — teal/green */
  color: "#10B981",
  /** Lighter hover variant */
  colorLight: "#34D399",
  /** Dark gradient anchor */
  colorDark: "#059669",
} as const;

/* ─── Types ─── */

export interface JobsQuizOption {
  label: string;
  value: string;
}

export interface JobsQuizQuestion {
  id: string;
  question: string;
  options: JobsQuizOption[];
}

export interface JobsQuizConfig {
  journeyId: string;
  parentPath: string;
  themeColor: string;
  themeColorLight: string;
  /** Single loading message shown during fake-search state */
  loadingMessage: string;
  questions: JobsQuizQuestion[];
  /** When true, suppress ad activation on quiz completion */
  hideAds?: boolean;
  /** When true, the TopAds script skips ads during the quiz flow */
  skipAds?: boolean;
}

/* ─── Quiz Configurations ─── */

export const JOBS_QUIZ_CONFIGS: Record<string, JobsQuizConfig> = {
  amexGoldJobs: {
    journeyId: "quiz-jobs-amex-gold-01",
    parentPath:
      "/financial-solutions/benefits-of-the-american-express-gold-card",
    themeColor: JOBS_QUIZ_THEME.color,
    themeColorLight: JOBS_QUIZ_THEME.colorLight,
    loadingMessage: "Finding Best Job Opportunities 2026",
    skipAds: false,
    questions: [
      {
        id: "work-schedule",
        question: "What's your ideal work schedule?",
        options: [
          { label: "Full-time (40+ hrs/week)", value: "full-time" },
          { label: "Part-time (15–30 hrs/week)", value: "part-time" },
          { label: "Remote / work from home", value: "remote" },
          { label: "Flexible / gig shifts", value: "gig" },
        ],
      },
      {
        id: "job-priorities",
        question: "What matters most to you in a job?",
        options: [
          { label: "Job stability & security", value: "stability" },
          { label: "Pay growth & advancement", value: "growth" },
          { label: "Schedule flexibility", value: "flexibility" },
          { label: "Benefits & health insurance", value: "benefits" },
        ],
      },
    ],
  },

  wellsFargoReflectJobs: {
    journeyId: "quiz-jobs-wells-fargo-reflect-01",
    parentPath: "/financial-solutions/benefits-of-the-wells-fargo-reflect-card",
    themeColor: JOBS_QUIZ_THEME.color,
    themeColorLight: JOBS_QUIZ_THEME.colorLight,
    loadingMessage: "Finding Best Job Opportunities 2026",
    skipAds: false,
    questions: [
      {
        id: "work-schedule",
        question: "What's your ideal work schedule?",
        options: [
          { label: "Full-time (40+ hrs/week)", value: "full-time" },
          { label: "Part-time (15–30 hrs/week)", value: "part-time" },
          { label: "Remote / work from home", value: "remote" },
          { label: "Flexible / gig shifts", value: "gig" },
        ],
      },
      {
        id: "job-priorities",
        question: "What matters most to you in a job?",
        options: [
          { label: "Job stability & security", value: "stability" },
          { label: "Pay growth & advancement", value: "growth" },
          { label: "Schedule flexibility", value: "flexibility" },
          { label: "Benefits & health insurance", value: "benefits" },
        ],
      },
    ],
  },
};
