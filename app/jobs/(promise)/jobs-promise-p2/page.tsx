import JobsPromiseTemplate from "@/components/layout/jobs-promise-template";
import JobsQuiz02Overlay from "@/components/jobs/quiz-overlays/jobs-quiz-02-overlay";
import FinanceOfferwallDirect from "@/lib/offerwall-for-finance-direct";
import TopAdsQuizIdStamper from "@/components/finance/topads-quiz-id-stamper";
import {
  JOBS_THEME,
  JOBS_IMAGES,
  JOBS_RELATED_ARTICLES,
} from "@/lib/jobs-config";

export function generateMetadata() {
  return {
    title: "Amazon Jobs 2026 — How to Apply and Get Hired Fast — TopFinanzas",
    description:
      "Amazon is one of the largest employers in the US, hiring thousands every month. Learn about Amazon warehouse, delivery, and remote jobs — including pay, benefits, and how to apply.",
    keywords:
      "amazon jobs 2026, amazon warehouse jobs, amazon work from home, amazon application, amazon hiring process",
  };
}

export default function JobsPromiseP2() {
  return (
    <>
      <JobsQuiz02Overlay />
      <JobsPromiseTemplate
        deferAdsUntilUserInteraction={true}
        themeColor={JOBS_THEME.color}
        themeColorDark={JOBS_THEME.colorDark}
        badge="AMAZON JOBS"
        title="Amazon Jobs 2026 — How to Apply and Get Hired Fast"
        subtitle="Amazon is actively hiring in warehouses, delivery routes, and remote positions across the US. With starting pay of $18–22/hour and same-week hiring events, Amazon may be your fastest path to employment in 2026."
        heroImage={{
          src: JOBS_IMAGES.amazon,
          alt: "Amazon fulfillment center and delivery driver hiring",
        }}
        sections={[
          {
            heading: "Why Amazon Is One of the Best Places to Work in 2026",
            paragraphs: [
              "Amazon employs over 1.5 million people in the US, making it the second-largest private employer in the country. With consistent growth in cloud computing (AWS), advertising, and fulfillment, Amazon is one of the few large companies that is consistently adding headcount rather than reducing it.",
              "Beyond the scale, what sets Amazon apart for job seekers is speed: the company routinely runs hiring events where applicants receive conditional offers the same day they attend. For warehouse and fulfillment roles, the entire process from online application to first day can take as little as 5–7 business days.",
            ],
            image: {
              src: JOBS_IMAGES.amazon,
              alt: "Amazon warehouse operations",
            },
          },
          {
            heading: "The Main Categories of Amazon Jobs in 2026",
            paragraphs: [
              "Amazon's hiring falls into four major categories, each with distinct requirements, pay ranges, and working conditions. Understanding which category matches your situation will help you target your application correctly:",
            ],
            bullets: [
              "Fulfillment Associate (FC) — Pick, pack, and ship orders in massive warehouses; $18–22/hr; physical role, day/night shifts",
              "Amazon Delivery Driver (DSP) — Drive branded vans to deliver packages on fixed routes; $19–23/hr; fast hiring through Amazon Delivery Service Partners",
              "Amazon Flex Driver — Independent contractor delivering packages with your own car; earnings of $18–25/hr; flexible schedule",
              "Virtual Customer Service — Handle customer inquiries from home; $17–20/hr; requires reliable internet connection",
              "AWS & Tech Roles — Software engineers, cloud architects, and support technicians; salary range $80K–$200K+",
            ],
          },
          {
            heading: "How to Apply for Amazon Jobs Step by Step",
            level: "h3",
            paragraphs: [
              "Amazon's application process for warehouse and delivery roles is significantly streamlined compared to most large employers. The fastest path is through amazon.jobs, where you can filter by role type, location, and shift. Create a profile once and apply to multiple openings with a single click.",
            ],
            bullets: [
              "Step 1: Go to amazon.jobs and search for your city or nearest fulfillment center",
              "Step 2: Select a role that matches your availability (shifts vary: 10-hour days 4 days/week, etc.)",
              "Step 3: Complete the online application — job history, education, and a short assessment",
              "Step 4: Schedule a Virtual Job Tryout (online situational judgment test — takes ~30 minutes)",
              "Step 5: Attend an in-person or virtual hiring event — bring your valid ID and work authorization documents",
              "Step 6: Pass the background check and drug screening (usually completed within 2–5 business days)",
            ],
          },
          {
            heading: "Amazon Pay and Benefits in 2026",
            level: "h3",
            paragraphs: [
              "Amazon's starting wages are among the highest in the hourly employment sector. As of 2026, FC associates earn $18–22/hour depending on location, with additional pay for nights, weekends, and holidays. Delivery drivers earn more per hour on average.",
              "Beyond base pay, Amazon offers a benefits package that includes health insurance (medical, dental, vision) for full-time employees, 401(k) with company match, paid parental leave, and a tuition assistance program called Career Choice, which pre-pays 95% of tuition for in-demand fields.",
            ],
          },
          {
            heading:
              "What Makes People Leave Amazon — and What Makes Them Stay",
            paragraphs: [
              "Amazon warehouse work is physically demanding. Workers stand for long periods, walk 5–15 miles per shift, and must meet productivity quotas tracked by an automated system. The work can be repetitive, and shifts may involve heavy lifting up to 50 lbs. This is not the right fit for everyone.",
              "What keeps a large portion of Amazon workers is the predictability: fixed shifts, reliable paychecks, and clear performance expectations. Many employees also appreciate the advancement opportunities — Amazon regularly promotes from within, and associates who perform well can move into team lead or area manager roles within 12–18 months.",
            ],
          },
          {
            heading: "Amazon Hiring Events: How to Get a Same-Day Offer",
            level: "h3",
            paragraphs: [
              "Amazon periodically runs in-person hiring events at fulfillment centers where qualified applicants can receive a conditional offer the same day. These events are especially frequent in Q3–Q4 ahead of the holiday season and again in Q1 as Amazon ramps back up after returns processing.",
              "To qualify for a same-day offer event: apply online first and complete the Virtual Job Tryout, bring two forms of ID (driver's license + Social Security card or passport), and arrive early. The events fill up quickly. Check amazon.jobs and your local FC's social media for announcements.",
            ],
          },
        ]}
        faqItems={[
          {
            id: "criminal",
            question: "Can I get hired at Amazon with a criminal record?",
            answer:
              "Amazon considers applicants on a case-by-case basis. Minor or old offenses don't automatically disqualify you. However, theft, felony fraud, or violent crimes in the last 7 years are typically disqualifying. Amazon has Ban the Box policies in many states, meaning they won't ask about criminal history until after an offer is made. It's worth applying and seeing how your situation is evaluated.",
          },
          {
            id: "felx",
            question: "What's the difference between Amazon and Amazon Flex?",
            answer:
              "Amazon (fulfillment center jobs) means you're a direct Amazon employee with set schedules, benefits, and a predictable paycheck. Amazon Flex is an independent contractor program where you use your own vehicle to deliver packages in 2–4 hour blocks on a flexible schedule, similar to gig work. Flex pays slightly more per hour ($18–25+) but offers no benefits and income can be inconsistent.",
          },
          {
            id: "no-experience",
            question: "Do I need any experience or skills to work at Amazon?",
            answer:
              "No prior experience is required for warehouse and fulfillment roles. However, you must pass a background check, drug test (in applicable states), and be able to meet physical requirements (stand for extended periods, lift up to 49 lbs, work at a fast pace). Basic English reading comprehension is needed for safety signage and work orders.",
            showAdOnOpen: true,
            adSlotId: "square05",
          },
          {
            id: "remote-amazon",
            question: "What Amazon remote jobs are available in 2026?",
            answer:
              "Amazon regularly hires for Virtual Customer Service Associates (fully remote, $17–20/hr), AWS Technical Support (requires experience), and various corporate and marketing roles. Work-from-home opportunities fluctuate — check amazon.jobs and filter for 'Virtual Location' to see current openings. You'll need a quiet workspace and reliable high-speed internet.",
          },
        ]}
        cta={{
          label: "Apply to Amazon Jobs via Indeed",
          href: "/jobs/jobs-reward-p2",
        }}
        extraCtas={[
          { label: "See All Job Search Tools", href: "/jobs/jobs-reward-p1" },
          {
            label: "Check Amazon Jobs on LinkedIn",
            href: "/jobs/jobs-reward-p3",
          },
        ]}
        relatedArticles={JOBS_RELATED_ARTICLES}
        closingParagraph="Amazon is not for everyone, but for those who fit the role, it's one of the most reliable employers in America. Use the verified job search tools below to apply directly to Amazon and other top employers today."
      />
      <FinanceOfferwallDirect
        themeColor="#3B82F6"
        loadingMessage="Fetching Credit Card Options 2026"
        skipAds={false}
      />
      <TopAdsQuizIdStamper journeyId="quiz-finance-jobs-promise-p2" />
    </>
  );
}
