/**
 * Complete typed inventory of all translatable string literals shared across
 * `/app/jobs/**` route components.
 *
 * Keys are stable identifiers consumed by `useTranslation()`.
 * Values are the English source strings sent to GCP Cloud Translation API.
 *
 * NOTE: Currency values (e.g. "$18–22/hour"), proper nouns (Amazon, Walmart,
 * TopFinanzas, etc.), and URL slugs are intentionally excluded.
 */

export const jobsStrings: Record<string, string> = {
  // ── Header ─────────────────────────────────────────────────────────────
  "header.brand": "Opportunities",

  // ── Footer ─────────────────────────────────────────────────────────────
  "footer.brand": "Opportunities",
  "footer.legalNotice.title": "Legal Notice",
  "footer.legalNotice.body":
    "Under no circumstances will we require you to pay to unlock any type of product, including job listings, credit cards, loans, or any other offer. If this occurs, please contact us immediately. Always read the terms and conditions of the service provider you are contacting. We earn revenue through advertising and when we recommend some of the products presented on this site. All publications are based on quantitative and qualitative research, and our team strives to be as fair as possible when comparing competing options.",
  "footer.advertiserDisclosure.title": "Advertiser Disclosure",
  "footer.advertiserDisclosure.body":
    "We are an independent, objective, advertising-supported content site. To support our ability to provide free content to our users, the recommendations that appear on our site may come from companies from which we receive affiliate compensation. This compensation may affect how, where, and in what order offers appear on our site. Other factors, such as our own proprietary algorithms and data collected, may also affect how and where products/offers are placed on this site. We do not include all financial or employment offers available.",
  "footer.editorialNote.title": "Editorial Note",
  "footer.editorialNote.body":
    "The compensation we receive from our affiliated partners does not influence the recommendations or advice that our editorial team provides in our articles, or otherwise affect any of the site content. While we work hard to provide accurate and up-to-date information that we believe our users will find relevant, we do not guarantee that all information provided is complete, and make no representations or warranties in connection thereto, nor as to the accuracy or applicability thereof.",
  "footer.copyright":
    "A TOP NETWORKS INC. Product |  00A9 Copyright Top Networks Inc. 2025",

  // ── Floating CTA ───────────────────────────────────────────────────────
  "floatingCta.headline": "Great benefits & flexibility!",
  "floatingCta.ctaLabel": "See Jobs Now  2192",
  "floatingCta.dismiss": "Dismiss job opportunities widget",
  "floatingCta.redirect": "You will be redirected to another site",
  "floatingCta.thumbnailAlt": "Job opportunities at top US companies",

  // ── Chat Entry (hero section) ──────────────────────────────────────────
  "chatEntry.badge": "JOBS",
  "chatEntry.heroTitle": "Find Your Next Job Opportunity",
  "chatEntry.heroSubtitle":
    "Answer a few quick questions to see the best openings matched for you",
  "chatEntry.defaultSecondary": "See available positions now",

  // ── Chat 01 ────────────────────────────────────────────────────────────
  "chat01.greeting":
    "I help job seekers in the US find the best open positions near them. Let me ask you a couple of quick questions.",
  "chat01.q1.botMessage": "What type of work schedule are you looking for?",
  "chat01.q1.opt1": "Full-time (40 hrs/week)",
  "chat01.q1.opt2": "Part-time or seasonal",
  "chat01.q1.opt3": "Remote / work from home",
  "chat01.q1.opt4": "Flexible / gig work",
  "chat01.q2.botMessage": "Which type of work interests you most?",
  "chat01.q2.opt1": "Warehouse & logistics",
  "chat01.q2.opt2": "Retail & customer service",
  "chat01.q2.opt3": "Healthcare & pharmacy",
  "chat01.q2.opt4": "Delivery & driving",
  "chat01.successMessage":
    "Great! Based on your answers, I found some excellent job opportunities that match your profile. Thousands of positions are available right now at top US companies  2014 click below to see the best ones for you.",
  "chat01.ctaButton": "Show Me the Best Jobs Now",
  "chat01.ctaSecondary":
    "View matched opportunities  2014 free, no sign-up required",

  // ── Chat 02 ────────────────────────────────────────────────────────────
  "chat02.greeting":
    "Let me help you find the best job match based on your preferences. Answer two quick questions:",
  "chat02.q1.botMessage":
    "Which type of company would you most like to work at?",
  "chat02.q1.opt1": "Amazon or FedEx/UPS",
  "chat02.q1.opt2": "Walmart or Target",
  "chat02.q1.opt3": "CVS or a healthcare company",
  "chat02.q1.opt4": "A government or federal agency",
  "chat02.q2.botMessage": "How much work experience do you have?",
  "chat02.q2.opt1": "No experience yet",
  "chat02.q2.opt2": "2 years",
  "chat02.q2.opt3": "5 years",
  "chat02.q2.opt4": "5+ years",
  "chat02.successMessage":
    "Perfect! I found job openings that match your background and interests. These companies are actively hiring right now  2014 positions fill up fast, so let 2019s get you started!",
  "chat02.ctaButton": "See My Matched Job Openings",
  "chat02.ctaSecondary": "View available positions  2014 updated daily",

  // ── Quiz Entry (shared) ────────────────────────────────────────────────
  "quizEntry.defaultBadge": "JOB QUIZ",
  "quizEntry.questionOf": "Question {n} of {total}",
  "quizEntry.defaultSecondary": "See available positions now",
  "quizEntry.loadingMsg1": "Analyzing your responses 2026",
  "quizEntry.loadingMsg2": "Searching for matching positions 2026",
  "quizEntry.loadingMsg3": "Ranking your top opportunities 2026",
  "quizEntry.loadingMsg4": "Your job matches are almost ready!",
  "quizEntry.percentComplete": "{percent}% complete",

  // ── Quiz 01 ────────────────────────────────────────────────────────────
  "quiz01.badge": "JOB MATCH QUIZ",
  "quiz01.title": "Find Your Best Job Match in 2026",
  "quiz01.subtitle":
    "Answer 3 quick questions and we 2019ll show you the best opportunities for your situation  2014 no account required.",
  "quiz01.q1.question": "What 2019s your ideal work schedule?",
  "quiz01.q1.opt1": "Full-time (40+ hrs/week)",
  "quiz01.q1.opt2": "Part-time (30 hrs/week)",
  "quiz01.q1.opt3": "Remote / work from home",
  "quiz01.q1.opt4": "Flexible / gig shifts",
  "quiz01.q2.question": "What matters most to you in a job?",
  "quiz01.q2.opt1": "Job stability & security",
  "quiz01.q2.opt2": "Pay growth & advancement",
  "quiz01.q2.opt3": "Schedule flexibility",
  "quiz01.q2.opt4": "Benefits & health insurance",
  "quiz01.loading1": "Analyzing your work preferences 2026",
  "quiz01.loading2": "Finding openings that match your schedule 2026",
  "quiz01.loading3": "Ranking your top salary matches 2026",
  "quiz01.loading4": "Your job matches are almost ready!",
  "quiz01.ctaHeading": "We matched you with top opportunities for 2026!",
  "quiz01.ctaBody":
    "Based on your preferences, here are the best job search platforms and open positions for your profile right now.",
  "quiz01.ctaButton": "See My Job Matches  2192",
  "quiz01.ctaSecondary": "Free results  2014 no sign-up required",

  // ── Quiz 02 ────────────────────────────────────────────────────────────
  "quiz02.badge": "EMPLOYER MATCH QUIZ",
  "quiz02.title": "Find Your Perfect Employer in 2026",
  "quiz02.subtitle":
    "Tell us what kind of work environment and employer you 2019re looking for  2014 we 2019ll point you to the right companies hiring right now.",
  "quiz02.q1.question": "Which type of employer appeals to you most?",
  "quiz02.q1.opt1": "Large retail (Target, Walmart)",
  "quiz02.q1.opt2": "E-commerce & warehouses (Amazon, UPS)",
  "quiz02.q1.opt3": "Healthcare & pharmacy (CVS, hospitals)",
  "quiz02.q1.opt4": "Government / public sector",
  "quiz02.q2.question": "How much work experience do you have?",
  "quiz02.q2.opt1": "No experience  2014 this is my first job",
  "quiz02.q2.opt2": "Less than 1 year",
  "quiz02.q2.opt3": "1 to 3 years",
  "quiz02.q2.opt4": "More than 3 years",
  "quiz02.loading1": "Analyzing your employer preferences 2026",
  "quiz02.loading2": "Searching for companies hiring near you 2026",
  "quiz02.loading3": "Matching you to the best open positions 2026",
  "quiz02.loading4": "Your employer matches are almost ready!",
  "quiz02.ctaHeading": "We found the best employers for your profile!",
  "quiz02.ctaBody":
    "Based on your answers, these companies are hiring right now and are a great fit for your experience and preferences.",
  "quiz02.ctaButton": "See My Employer Matches  2192",
  "quiz02.ctaSecondary": "Free results  2014 no sign-up required",

  // ── Chat / Quiz sub-layout copyright ───────────────────────────────────
  "layout.copyright": "TopFinanzas. All rights reserved.",

  // ── Rewarded Ad Overlay Text (Promise Template) ────────────────────────
  "rewardedAd.title": "Find Your Next Job",
  "rewardedAd.description":
    "Discover the best job opportunities available near you",
  "rewardedAd.cta": "See Available Jobs",
  "rewardedAd.disclaimer": "To continue, it will be necessary to watch an ad.",
} as const;

export type JobsStringKey = keyof typeof jobsStrings;
