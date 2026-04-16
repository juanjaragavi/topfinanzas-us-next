import JobsRewardTemplate from "@/components/layout/jobs-reward-template";
import {
  JOBS_THEME,
  JOBS_IMAGES,
  JOBS_RELATED_ARTICLES,
  makeJobsSearchCtaBanner,
  makeGlassdoorCard,
  makeLinkedInCard,
} from "@/lib/jobs-config";

export function generateMetadata() {
  return {
    title:
      "Glassdoor 2026 — Research Companies and Find Better Jobs — TopFinanzas",
    description:
      "Glassdoor combines job listings with millions of verified employee reviews, salary data, and interview questions. Use it to research any company before you apply — and avoid bad surprises.",
    keywords:
      "glassdoor 2026, company reviews, salary research, interview questions, employer reviews job search",
  };
}

export default function JobsRewardP5() {
  return (
    <JobsRewardTemplate
      themeColor={JOBS_THEME.color}
      themeColorDark={JOBS_THEME.colorDark}
      backLink={{
        label: "CVS Health Jobs Guide — Roles, Pay & Application Tips",
        href: "/jobs/jobs-promise-p5",
      }}
      badge="RESEARCH + APPLY"
      title="Glassdoor 2026 — Use Real Employee Reviews to Find the Right Job"
      subtitle="Most job seekers apply blind. Glassdoor gives you verified insider data — real salaries, real interview questions, real company culture assessments — before you commit a single minute to applying. Pair it with LinkedIn and you'll interview more prepared than 95% of other applicants."
      heroImage={{
        src: JOBS_IMAGES.hero,
        alt: "Person reading company reviews and salary data on Glassdoor",
      }}
      introParagraphs={[
        "A job listing tells you almost nothing. It tells you the title and a polished description written by an HR department. What it doesn't tell you is whether the manager is disorganized, whether the pay is actually lower than the posted range, or whether most people quit within 6 months.",
        "Glassdoor fills that gap with data from over 60 million verified current and former employee reviews. It's the Yelp of the job market — and smart job seekers use it to filter out bad employers, research salary expectations, and prepare for interviews using real questions that companies ask.",
      ]}
      trustSignals={[
        "Glassdoor: 60M+ company reviews from verified employees worldwide",
        "120M+ salary data points across thousands of job titles and employers",
        "Millions of interview question submissions from real candidates",
        "LinkedIn: 1B+ professionals and 20M+ verified job listings",
      ]}
      methods={[
        makeGlassdoorCard(JOBS_THEME.color),
        makeLinkedInCard(JOBS_THEME.color),
      ]}
      closingParagraphs={[
        "How to use Glassdoor strategically: Before any job application, look up the company on Glassdoor and filter reviews to the last 12 months. Focus on the 3-star reviews — they tend to be the most balanced. Look at the CEO approval rating and whether management responds to reviews (a sign the company takes feedback seriously).",
        "For salary negotiations: Screenshot the salary data for your target role and location. Walk into every offer conversation knowing the market rate. Candidates who negotiate with actual data get an average of $5,000–$15,000 more per year than those who don't. Glassdoor gives you that data for free.",
      ]}
      relatedArticles={JOBS_RELATED_ARTICLES}
      ctaBanner={makeJobsSearchCtaBanner()}
    />
  );
}
