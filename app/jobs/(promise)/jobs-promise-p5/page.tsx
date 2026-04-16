import JobsPromiseTemplate from "@/components/layout/jobs-promise-template";
import {
  JOBS_THEME,
  JOBS_IMAGES,
  JOBS_RELATED_ARTICLES,
} from "@/lib/jobs-config";

export function generateMetadata() {
  return {
    title:
      "CVS Health Jobs 2026 — Healthcare Careers for Everyone — TopFinanzas",
    description:
      "CVS Health is one of the largest healthcare employers in the US, with jobs ranging from pharmacy tech to telehealth and clinical roles. Learn salaries, requirements, and how to apply in 2026.",
    keywords:
      "CVS health jobs 2026, CVS pharmacy technician, CVS careers, CVS application, pharmacy tech jobs, CVS hiring",
  };
}

export default function JobsPromiseP5() {
  return (
    <JobsPromiseTemplate
      themeColor={JOBS_THEME.color}
      themeColorDark={JOBS_THEME.colorDark}
      badge="CVS HEALTH JOBS"
      title="CVS Health Jobs 2026 — Healthcare Careers for Everyone"
      subtitle="CVS Health is America's largest pharmacy and healthcare company, employing over 300,000 people across pharmacy, retail, telehealth, and clinical operations. Whether you're looking for an entry-level retail role or a pharmacy career, CVS has a path for you in 2026."
      heroImage={{
        src: JOBS_IMAGES.cvs,
        alt: "CVS pharmacy and health clinic storefront",
      }}
      sections={[
        {
          heading: "Why CVS Health Is One of the Best US Healthcare Employers",
          paragraphs: [
            "CVS Health isn't just a pharmacy chain — it's a full healthcare company that includes CVS Pharmacy stores, Aetna insurance, MinuteClinic urgent care centers, and Signify Health home visits. This breadth means that employees can move across very different healthcare careers without ever leaving the company.",
            "In 2026, CVS Health is actively expanding its workforce, especially in pharmacy tech, care coordination, and telehealth support roles as America's population ages and demand for accessible healthcare rises. Starting pay ranges from $15/hour for retail associates to $22+/hour for certified pharmacy technicians.",
          ],
          image: {
            src: JOBS_IMAGES.cvs,
            alt: "CVS pharmacy interior with team member",
          },
        },
        {
          heading: "CVS Job Categories and Pay in 2026",
          paragraphs: [
            "CVS hires across several distinct business units. Here's what's available and what you can expect to earn:",
          ],
          bullets: [
            "Store Associate — Front-of-store cashier, stocking, and customer service; $15–17/hr",
            "Pharmacy Technician (non-certified) — Fills prescriptions under pharmacist supervision; $17–21/hr",
            "Pharmacy Technician (CPhT certified) — Higher-level tech duties; bonus-eligible; $21–26/hr",
            "MinuteClinic Medical Assistant — Clinical support at urgent care sites (certification required); $19–24/hr",
            "Telehealth Support Representative — Coordinate virtual care through CVS Health Virtual Care; $18–22/hr",
            "Pharmacy Supervisor / Store Manager — Salaried leadership roles; $55K–95K/year",
          ],
        },
        {
          heading: "Becoming a Pharmacy Technician at CVS: The Fast Track",
          level: "h3",
          paragraphs: [
            "Pharmacy technicians are the most in-demand role at CVS — and CVS actually offers a pathway to get certified while you work. Here's how it works:",
          ],
          bullets: [
            "CVS will hire you as an uncertified Pharmacy Technician Trainee (PTT) with no prior experience",
            "You'll receive on-the-job training for 90–120 days covering medication dispensing, insurance, HIPAA, and safety",
            "CVS reimburses the cost of the PTCB (Pharmacy Technician Certification Board) exam — typically $129",
            "After passing, you advance to Pharmacy Technician with a pay raise",
            "Many CVS technicians then advance to Senior Tech or Pharmacy Supervisor within 2–3 years",
            "CVS also offers tuition assistance for pharmacy school if you want to eventually become a pharmacist",
          ],
        },
        {
          heading: "CVS Application Process Step by Step",
          level: "h3",
          paragraphs: [
            "Applying to CVS is done entirely online, and most applicants hear back within 1–2 weeks for in-store roles. Here's the process:",
          ],
          bullets: [
            "Visit jobs.cvshealth.com and search by job type and location",
            "Create a CVS career account and complete the online application (15–25 minutes)",
            "For pharmacy roles, you'll answer situational judgment questions about handling medications and patients",
            "Submit application; a recruiter will contact you via phone or email within 1–2 weeks",
            "Interview: most store associate and tech interviews are 30 minutes with the pharmacy manager or store manager",
            "Background check and drug test required for all pharmacy-involved positions (typically 1–2 weeks)",
            "Start training: retail associates start within 1–2 weeks; pharmacy techs may have a longer 3–5 week onboarding",
          ],
        },
        {
          heading: "CVS Benefits, Perks, and Career Development",
          paragraphs: [
            "CVS offers a comprehensive benefits package that's especially strong for part-time workers in healthcare:",
          ],
          bullets: [
            "Medical, dental, and vision insurance for full-time and part-time employees (20+ hrs/week)",
            "401(k) with company match up to 5% after 1 year of service",
            "30% employee discount on all CVS store brand products",
            "Tuition assistance up to $3,000/year for job-related education",
            "Free ExtraCare membership and discounts on thousands of store products",
            "Paid time off starting from hire date; accrual rate increases with tenure",
          ],
        },
      ]}
      faqItems={[
        {
          id: "cx-pt-requirements",
          question: "Do I need experience to be a pharmacy technician at CVS?",
          answer:
            "No. CVS hires pharmacy technician trainees with no prior pharmacy experience. You must be at least 16 years old (18 in some states) and pass a background check. CVS provides all training and reimburses the cost of your PTCB certification exam once you're ready to take it.",
        },
        {
          id: "cvs-drug-test",
          question: "Does CVS drug test all employees?",
          answer:
            "CVS requires drug testing for positions that involve direct pharmacy operations (pharmacy technician, pharmacist) and some management roles. Store associates in front-of-store positions may not require a drug test depending on the location and state. Always confirm during your offer stage.",
        },
        {
          id: "cvs-shifts",
          question: "What are typical shift options at CVS?",
          answer:
            "CVS pharmacies are open 24 hours in many locations, which means shift options are very flexible. Store associate shifts typically run 6am–2pm, 10am–6pm, or 2pm–10pm. Pharmacy techs may work evening or overnight pharmacy shifts at 24-hour locations, which often include a shift differential (extra $1–2/hour).",
          showAdOnOpen: true,
          adSlotId: "square05",
        },
        {
          id: "cvs-vs-walgreens",
          question: "Should I apply to CVS or Walgreens?",
          answer:
            "Both are great options, but CVS is generally preferred by pharmacy techs who want a clearer advancement path and better corporate support. CVS's connection to Aetna and MinuteClinic also opens doors to healthcare career paths that Walgreens can't match. Pay is roughly comparable at both companies in most markets.",
        },
      ]}
      cta={{
        label: "Research CVS Culture on Glassdoor",
        href: "/jobs/jobs-reward-p5",
      }}
      extraCtas={[
        {
          label: "Browse Healthcare Jobs on Indeed",
          href: "/jobs/jobs-reward-p2",
        },
        {
          label: "See All Job Search Platforms",
          href: "/jobs/jobs-reward-p1",
        },
        {
          label: "Connect with CVS Recruiters on LinkedIn",
          href: "/jobs/jobs-reward-p3",
        },
      ]}
      relatedArticles={JOBS_RELATED_ARTICLES}
      closingParagraph="With its pharmacy-to-pharmacist advancement track, healthcare expansion, and competitive benefits for part-time workers, CVS Health offers one of the most accessible paths into a healthcare career in the US. Apply today through the job search platforms below."
    />
  );
}
