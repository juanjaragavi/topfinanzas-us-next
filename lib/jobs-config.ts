import type { RelatedArticle } from "@/components/layout/jobs-promise-template";
import type { JobMethodCardProps } from "@/components/jobs/jobs-method-card";
import type { JobsCtaBannerProps } from "@/components/jobs/jobs-cta-banner";

/* ─── Theme ─── */

export const JOBS_THEME = {
  color: "#1D4ED8",
  colorLight: "#3B82F6",
  colorDark: "#1E3A8A",
} as const;

/* ─── Images ─── */

export const JOBS_IMAGES = {
  hero: "https://media.topfinanzas.com/images/jobs/jobs-hero.webp",
  amazon: "https://media.topfinanzas.com/images/jobs/amazon-jobs.webp",
  walmart: "https://media.topfinanzas.com/images/jobs/walmart-jobs.webp",
  target: "https://media.topfinanzas.com/images/jobs/target-jobs.webp",
  cvs: "https://media.topfinanzas.com/images/jobs/cvs-health-jobs.webp",
  ups: "https://media.topfinanzas.com/images/jobs/ups-jobs.webp",
  federal: "https://media.topfinanzas.com/images/jobs/federal-jobs.webp",
} as const;

export const APP_IMAGES = {
  indeed: "https://media.topfinanzas.com/images/jobs/apps/indeed.webp",
  zipRecruiter:
    "https://media.topfinanzas.com/images/jobs/apps/ziprecruiter.webp",
  linkedin: "https://media.topfinanzas.com/images/jobs/apps/linkedin.webp",
  snagajob: "https://media.topfinanzas.com/images/jobs/apps/snagajob.webp",
  glassdoor: "https://media.topfinanzas.com/images/jobs/apps/glassdoor.webp",
  usajobs: "https://media.topfinanzas.com/images/jobs/apps/usajobs.webp",
} as const;

/* ─── CTA Banner Configs ─── */

export function makeJobsSearchCtaBanner(): JobsCtaBannerProps {
  return {
    badge: "Top Job Apps",
    headline: "The Best Job Search Apps for Finding Work in 2026",
    body: "Use these verified job search platforms to apply to hundreds of openings in minutes — no fees, no gimmicks.",
    ctaLabel: "See the Best Job Apps",
    ctaHref: "/jobs/jobs-reward-p1",
    disclaimer:
      "Job matching results may vary. Always apply directly through employer sites.",
    themeColor: JOBS_THEME.color,
    themeColorDark: JOBS_THEME.colorDark,
  };
}

export function makeAmazonCtaBanner(): JobsCtaBannerProps {
  return {
    badge: "Amazon Careers",
    headline: "Apply to Amazon Jobs Today — No Degree Required",
    body: "Amazon hires thousands of workers every month for warehouse, delivery, and remote positions. See the current openings and apply now.",
    ctaLabel: "View Amazon Open Positions",
    ctaHref: "/jobs/jobs-reward-p2",
    disclaimer:
      "Job availability subject to location and demand. Apply through Amazon's official hiring portal.",
    themeColor: JOBS_THEME.color,
    themeColorDark: JOBS_THEME.colorDark,
  };
}

/* ─── Related Financial Articles ─── */

export const JOBS_RELATED_ARTICLES: RelatedArticle[] = [
  {
    title: "Good Debt vs. Bad Debt: How to Tell the Difference",
    href: "/personal-finance/good-debt-vs-bad-debt-how-to-tell-the-difference",
    description:
      "Learn how to differentiate between debt that builds wealth and debt that holds you back.",
  },
  {
    title: "Investing for Beginners: A Simple Guide to Getting Started",
    href: "/personal-finance/investing-for-beginners-a-simple-guide-to-getting-started",
    description:
      "Everything you need to know to start investing with your first paycheck.",
  },
  {
    title: "Best Cash Back Credit Cards",
    href: "/financial-solutions/benefits-capital-one-savor-cash-rewards-credit-card",
    description:
      "Maximize your new job income with credit cards that pay you back on every purchase.",
  },
  {
    title: "Managing Your Finances After a Job Change",
    href: "/personal-finance/yours-mine-or-ours-how-to-strategically-combine-finances-after-marriage-or-moving-in",
    description:
      "Smart financial moves to make when your income changes or you start a new role.",
  },
];

/* ─── Reusable Job Method Card Configs ─── */

export function makeIndeedCard(themeColor: string): JobMethodCardProps {
  return {
    name: "Indeed",
    icon: "🔍",
    description:
      "The #1 job search engine in the US with over 300 million monthly visitors. Search millions of job listings from thousands of websites in one place — warehouse, retail, remote, healthcare, and more.",
    badges: ["#1 Job Site", "Free to Use"],
    features: [
      "Search jobs by title, keyword, company, or location",
      "Apply directly on Indeed or be redirected to employer sites",
      "Free resume upload and instant matching to open roles",
      "Indeed Easy Apply: apply to hundreds of jobs with one click",
      "Salary comparison tools and company reviews built in",
    ],
    cta: {
      label: "Search Jobs on Indeed Now",
      href: "https://www.indeed.com/",
    },
    themeColor,
  };
}

export function makeZipRecruiterCard(themeColor: string): JobMethodCardProps {
  return {
    name: "ZipRecruiter",
    icon: "⚡",
    description:
      "ZipRecruiter's powerful AI matches your resume to the best open jobs and lets employers invite you to apply. Used by over 2.8 million businesses to find qualified candidates fast.",
    badges: ["AI-Matched", "Top-Rated"],
    features: [
      "One profile, thousands of job sites — apply once, be seen everywhere",
      "Employers actively invite you to apply based on your profile",
      "$0 cost: completely free for job seekers",
      "Instant job alerts by email or mobile for your target role",
      "Trusted by 90% of Fortune 100 companies for hiring",
    ],
    cta: {
      label: "Get Matched to Jobs on ZipRecruiter",
      href: "https://www.ziprecruiter.com/",
    },
    themeColor,
  };
}

export function makeLinkedInCard(themeColor: string): JobMethodCardProps {
  return {
    name: "LinkedIn Jobs",
    icon: "💼",
    description:
      "The world's largest professional network with over 20 million job listings at any time. Use LinkedIn to apply to jobs, connect with hiring managers directly, and build the professional reputation that gets you callbacks.",
    badges: ["Networking", "Professional"],
    features: [
      "Apply with your LinkedIn profile in seconds — no resume upload needed",
      "See mutual connections at companies you're applying to",
      "Get notified when hiring managers view your application",
      "LinkedIn Easy Apply: one-click application to thousands of roles",
      "Build connections with recruiters who post jobs directly on your feed",
    ],
    cta: {
      label: "Apply to Jobs on LinkedIn",
      href: "https://www.linkedin.com/jobs/",
    },
    themeColor,
  };
}

export function makeSnagajobCard(themeColor: string): JobMethodCardProps {
  return {
    name: "Snagajob",
    icon: "⏱️",
    description:
      "The leading platform for hourly and part-time work in the US. Whether you want a side hustle, seasonal position, or full-time hourly role at retail chains, restaurants, or warehouses — Snagajob connects you in minutes.",
    badges: ["Hourly Work", "Fast Hiring"],
    features: [
      "Specializes in hourly and part-time positions near you",
      "Partners with Target, Walmart, FedEx, Starbucks, and 500,000+ employers",
      "Apply in under 2 minutes with Snagajob's quick-apply feature",
      "Instantly connect with local employers looking to hire now",
      "Ideal for students, caregivers, and workers seeking flexible schedules",
    ],
    cta: {
      label: "Find Hourly Jobs on Snagajob",
      href: "https://www.snagajob.com/",
    },
    themeColor,
  };
}

export function makeGlassdoorCard(themeColor: string): JobMethodCardProps {
  return {
    name: "Glassdoor",
    icon: "🪟",
    description:
      "Research companies before you apply. Glassdoor combines job listings with millions of verified employee reviews, salary reports, and interview questions — so you know exactly what you're getting into.",
    badges: ["Company Reviews", "Salary Data"],
    features: [
      "Access millions of verified employee reviews about culture and management",
      "See real salary ranges for any job title before your interview",
      "Read interview questions submitted by real candidates at your target company",
      "Apply to jobs directly through Glassdoor's integrated job board",
      "Set job alerts for your target roles and locations",
    ],
    cta: {
      label: "Research and Apply on Glassdoor",
      href: "https://www.glassdoor.com/",
    },
    themeColor,
  };
}

export function makeUSAJobsCard(themeColor: string): JobMethodCardProps {
  return {
    name: "USAJobs.gov",
    icon: "🏛️",
    description:
      "The official job board of the US Federal Government. Federal positions offer exceptional benefits: pension plans, health insurance, job security, and competitive pay. Over 40,000 openings posted at any time across every agency.",
    badges: ["Federal Jobs", "Official Source"],
    features: [
      "Browse 40,000+ federal job openings updated daily",
      "Exceptional benefits: pension, health insurance, paid holidays",
      "Entry-level to senior roles in every field — IT, healthcare, admin, law",
      "Veteran preference hiring for former military members",
      "Job security and clear paths for advancement through GS pay grades",
    ],
    cta: {
      label: "Search Federal Jobs on USAJobs",
      href: "https://www.usajobs.gov/",
    },
    themeColor,
  };
}
