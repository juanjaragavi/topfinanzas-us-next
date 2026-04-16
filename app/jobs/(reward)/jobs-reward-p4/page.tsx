import JobsRewardTemplate from "@/components/layout/jobs-reward-template";
import {
  JOBS_THEME,
  JOBS_IMAGES,
  JOBS_RELATED_ARTICLES,
  makeJobsSearchCtaBanner,
  makeSnagajobCard,
  makeIndeedCard,
} from "@/lib/jobs-config";

export function generateMetadata() {
  return {
    title:
      "Snagajob 2026 — Best App for Hourly and Part-Time Jobs Near You — TopFinanzas",
    description:
      "Snagajob is the #1 platform for hourly jobs, part-time work, and seasonal positions in the US. Find work at Target, Walmart, FedEx, restaurants, and more in minutes with quick-apply.",
    keywords:
      "snagajob 2026, hourly jobs app, part-time jobs near me, seasonal jobs, retail hiring app",
  };
}

export default function JobsRewardP4() {
  return (
    <JobsRewardTemplate
      themeColor={JOBS_THEME.color}
      themeColorDark={JOBS_THEME.colorDark}
      backLink={{
        label: "Target Jobs Guide — Roles, Pay & Application Tips",
        href: "/jobs/jobs-promise-p4",
      }}
      badge="HOURLY JOB PLATFORMS"
      title="Snagajob 2026 — The Fastest Way to Apply to Hourly Jobs Near You"
      subtitle="Snagajob is purpose-built for hourly work — retail, restaurant, warehouse, delivery, and seasonal positions. If you need a job quickly and can start working within the next 1–2 weeks, Snagajob gets you in front of employers faster than any other platform."
      heroImage={{
        src: JOBS_IMAGES.walmart,
        alt: "Hourly workers at retail store applying for jobs via mobile",
      }}
      introParagraphs={[
        "Not everyone is looking for a white-collar career track. Millions of Americans need solid, reliable hourly work — and they need it now. Snagajob fills exactly that gap. Unlike LinkedIn or ZipRecruiter which cater to professional roles, Snagajob specializes in the employers that hire the most hourly workers in America: Target, Walmart, FedEx, Starbucks, Pizza Hut, Home Depot, and thousands more.",
        "Snagajob's quick-apply feature lets you apply in under 2 minutes — significantly faster than the 15–25-minute applications on employer websites. That speed matters when popular positions fill up the same day they're posted.",
      ]}
      trustSignals={[
        "Snagajob: 500,000+ US employers and 100M+ workers served",
        "Partners with Target, Walmart, FedEx, and 499,000+ other employers",
        "Quick Apply: apply to hourly jobs in under 2 minutes",
        "Indeed: 300M monthly users and the broadest job coverage in the US",
      ]}
      methods={[
        makeSnagajobCard(JOBS_THEME.color),
        makeIndeedCard(JOBS_THEME.color),
      ]}
      closingParagraphs={[
        "One key strategy: use Snagajob to apply to immediate hourly openings, and set up Indeed alerts for higher-paying full-time positions at your target companies. Most people who use both platforms consistently land their first interview within 5–7 days.",
        "Don't overlook seasonal hiring through Snagajob — many Target, FedEx, and Walmart seasonal workers are kept on as permanent employees after peak season. Applying as early as September for holiday season roles significantly increases your odds of being retained in January. Start your Snagajob profile today — it takes about 5 minutes.",
      ]}
      relatedArticles={JOBS_RELATED_ARTICLES}
      ctaBanner={makeJobsSearchCtaBanner()}
    />
  );
}
