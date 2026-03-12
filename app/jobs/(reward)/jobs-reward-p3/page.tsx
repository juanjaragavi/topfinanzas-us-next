import JobsRewardTemplate from "@/components/layout/jobs-reward-template";
import {
  JOBS_THEME,
  JOBS_IMAGES,
  JOBS_RELATED_ARTICLES,
  makeJobsSearchCtaBanner,
  makeLinkedInCard,
  makeGlassdoorCard,
} from "@/lib/jobs-config";

export function generateMetadata() {
  return {
    title:
      "LinkedIn Jobs 2026 — How to Use LinkedIn to Get Hired Faster — TopFinanzas",
    description:
      "LinkedIn is the most powerful job search tool for professional, corporate, and mid-career roles. Learn how to optimize your profile and use LinkedIn Jobs to get 5x more interview callbacks in 2026.",
    keywords:
      "linkedin jobs 2026, linkedin job search tips, linkedin easy apply, glassdoor reviews, professional job apps",
  };
}

export default function JobsRewardP3() {
  return (
    <JobsRewardTemplate
      themeColor={JOBS_THEME.color}
      themeColorDark={JOBS_THEME.colorDark}
      badge="PROFESSIONAL JOB SEARCH"
      title="LinkedIn Jobs 2026 — How to Use It to Get Hired 5x Faster"
      subtitle="LinkedIn isn't just a professional network — it's the most powerful hiring machine in the world for professional and mid-career roles. Combine LinkedIn's job board with Glassdoor's research tools and you'll know more about any employer than 90% of your competition."
      heroImage={{
        src: JOBS_IMAGES.hero,
        alt: "Professional using LinkedIn on laptop and smartphone",
      }}
      introParagraphs={[
        "Over 100 million jobs have been applied to on LinkedIn in the past year alone. For professional roles — admin, marketing, IT, healthcare management, finance, logistics coordination, HR, or customer success — LinkedIn is where employers go first to post and where they spend the most time screening candidates.",
        "The key to LinkedIn success isn't just applying — it's building a profile that works while you sleep. A fully completed LinkedIn profile with keywords makes you 40x more likely to be found by a recruiter. Pair that with active job searching via LinkedIn Easy Apply, and you dramatically shorten your time to hire.",
      ]}
      trustSignals={[
        "LinkedIn: 1B+ professionals, 20M+ job listings, used in 200 countries",
        "Glassdoor: 60M+ company reviews and salary data from verified employees",
        "LinkedIn Easy Apply: Submit your profile to 1,000s of employers in seconds",
        "87% of recruiters use LinkedIn to evaluate candidates before interviews",
      ]}
      methods={[
        makeLinkedInCard(JOBS_THEME.color),
        makeGlassdoorCard(JOBS_THEME.color),
      ]}
      closingParagraphs={[
        "Before applying to any company, spend 5 minutes on Glassdoor: read the most recent 15–20 reviews, check the salary range for your role, and look at the interview questions. This lets you walk into interviews far better prepared than any other candidate — and it helps you avoid companies with patterns of negative reviews.",
        "LinkedIn and Glassdoor are a powerful combination: LinkedIn helps you get the interview, and Glassdoor helps you ace it. Both are free. Build your LinkedIn profile today, set up alerts, and start researching your target companies on Glassdoor before your first application.",
      ]}
      relatedArticles={JOBS_RELATED_ARTICLES}
      ctaBanner={makeJobsSearchCtaBanner()}
    />
  );
}
