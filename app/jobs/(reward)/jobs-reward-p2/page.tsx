import JobsRewardTemplate from "@/components/layout/jobs-reward-template";
import {
  JOBS_THEME,
  JOBS_IMAGES,
  JOBS_RELATED_ARTICLES,
  makeAmazonCtaBanner,
  makeIndeedCard,
  makeZipRecruiterCard,
} from "@/lib/jobs-config";

export function generateMetadata() {
  return {
    title:
      "Indeed vs ZipRecruiter 2026 — Best Apps for Warehouse & Retail Jobs — TopFinanzas",
    description:
      "Searching for Amazon, Walmart, Target, or retail jobs? Indeed and ZipRecruiter are the two best platforms for hourly and warehouse work in 2026. Compare features, salaries, and apply today.",
    keywords:
      "indeed 2026, ziprecruiter 2026, amazon job search, warehouse job apps, retail hiring apps",
  };
}

export default function JobsRewardP2() {
  return (
    <JobsRewardTemplate
      themeColor={JOBS_THEME.color}
      themeColorDark={JOBS_THEME.colorDark}
      backLink={{
        label: "Amazon Jobs Guide — Roles, Pay & Application Tips",
        href: "/jobs/jobs-promise-p2",
      }}
      badge="TOP HIRING PLATFORMS"
      title="Indeed & ZipRecruiter — Best Apps for Warehouse and Retail Jobs in 2026"
      subtitle="If you're searching for Amazon, Walmart, Target, UPS, or any other major US employer, Indeed and ZipRecruiter give you the fastest path from application to interview. Here's how to use each one effectively."
      heroImage={{
        src: JOBS_IMAGES.amazon,
        alt: "Job seekers searching and applying on indeed and ziprecruiter apps",
      }}
      introParagraphs={[
        "Amazon alone posts thousands of new job openings every single day — but navigating their internal system can be slow. Using Indeed or ZipRecruiter as your starting point means you can see Amazon, Walmart, Target, and UPS openings side by side, apply in seconds, and track multiple applications in one dashboard.",
        "Both platforms are 100% free for job seekers. Together, they cover more US warehouse, logistics, retail, and hourly job openings than any other source. Here's what makes each one ideal for this type of work.",
      ]}
      trustSignals={[
        "Amazon posts 10,000+ new US jobs on Indeed every week",
        "ZipRecruiter's AI matches you to relevant Amazon and Walmart postings automatically",
        "Walmart uses both Indeed and ZipRecruiter as primary external hiring channels",
        "90% of US employers with 50+ employees use Indeed for active hiring",
      ]}
      methods={[
        makeIndeedCard(JOBS_THEME.color),
        makeZipRecruiterCard(JOBS_THEME.color),
      ]}
      closingParagraphs={[
        "Pro tip: On Indeed, search 'Amazon' + your city and filter by 'Last 24 hours' to catch the freshest openings before other applicants. Indeed Easy Apply lets you submit in under 60 seconds — which matters for roles that can fill up in hours.",
        "On ZipRecruiter, a complete profile and accurate work history means Amazon and Walmart recruiters may actually invite you to apply — giving you an edge over candidates who haven't filled out their profile.",
      ]}
      relatedArticles={JOBS_RELATED_ARTICLES}
      ctaBanner={makeAmazonCtaBanner()}
    />
  );
}
