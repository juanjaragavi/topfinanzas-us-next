import JobsRewardTemplate from "@/components/layout/jobs-reward-template";
import {
  JOBS_THEME,
  JOBS_IMAGES,
  JOBS_RELATED_ARTICLES,
  makeJobsSearchCtaBanner,
  makeUSAJobsCard,
  makeLinkedInCard,
} from "@/lib/jobs-config";

export function generateMetadata() {
  return {
    title:
      "USAJobs.gov 2026 — How to Apply for Federal Government Jobs — TopFinanzas",
    description:
      "Federal government jobs offer unmatched job security, pension plans, and healthcare benefits. Learn how to navigate USAJobs.gov and apply for federal positions in 2026.",
    keywords:
      "usajobs 2026, federal government jobs, how to apply usajobs, government job security, federal benefits, GS pay scale",
  };
}

export default function JobsRewardP6() {
  return (
    <JobsRewardTemplate
      themeColor={JOBS_THEME.color}
      themeColorDark={JOBS_THEME.colorDark}
      badge="FEDERAL JOB SEARCH"
      title="USAJobs.gov 2026 — How to Apply for Federal Government Jobs (And Why You Should)"
      subtitle="Federal jobs offer what almost no private employer can match: a defined pension, rock-solid job security, generous paid leave, and health insurance that covers your whole family. USAJobs.gov is the exclusive portal for all US federal hiring — here's how to navigate it effectively."
      heroImage={{
        src: JOBS_IMAGES.federal,
        alt: "Federal government buildings and USAJobs application portal",
      }}
      introParagraphs={[
        "The US Federal Government employs over 2.8 million civilian workers — and it's one of the most stable, well-compensated employers in the country. Federal workers get 10 paid holidays per year (more in many agencies), 13–26 days of annual leave, competitive salaries through the GS Pay Scale, and access to the Federal Employees Retirement System (FERS) pension — a benefit that has largely disappeared from the private sector.",
        "The challenge with USAJobs is that federal applications are longer and more specific than private-sector ones. The platform rewards applicants who understand how to craft compelling federal resumes and properly self-assess against required qualifications. This guide shows you exactly how to navigate it.",
      ]}
      trustSignals={[
        "2.8M+ federal civilian employees across 450+ agencies",
        "40,000+ active job listings on USAJobs.gov at any given time",
        "GS pay scale: starting at $22,216 (GS-1) to $176,300+ (senior executive)",
        "FERS pension: federal workers eligible for pension + TSP (matching 401k) + Social Security",
      ]}
      methods={[
        makeUSAJobsCard(JOBS_THEME.color),
        makeLinkedInCard(JOBS_THEME.color),
      ]}
      closingParagraphs={[
        "Federal application tip: The most common reason applicants are rejected is failing the 'Specialized Experience' requirement. Read the job announcement carefully and mirror the exact language from the requirements section in your resume. Federal hiring managers use automated screening tools that score resumes against keywords — matching the language exactly is essential.",
        "Veteran's preference: If you have military service, you automatically receive preference points (5 or 10 points) that significantly boost your ranking in federal hiring. Make sure to claim your preference during the USAJobs application. LinkedIn can also help — many federal agencies and contractors post non-competitive positions on LinkedIn for candidates who may not find them through USAJobs alone.",
      ]}
      relatedArticles={JOBS_RELATED_ARTICLES}
      ctaBanner={makeJobsSearchCtaBanner()}
    />
  );
}
