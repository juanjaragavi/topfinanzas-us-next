"use client";

import JobsQuizEntry from "@/components/jobs/jobs-quiz-entry";
import { useTranslation } from "@/components/jobs/translation-provider";
import { JOBS_THEME } from "@/lib/jobs-config";

export default function JobsQuiz02Page() {
  const t = useTranslation();

  const QUESTIONS = [
    {
      id: "employer",
      question: t("quiz02.q1.question", "Which type of employer appeals to you most?"),
      options: [
        { emoji: "🛒", label: t("quiz02.q1.opt1", "Large retail (Target, Walmart)"), value: "retail" },
        {
          emoji: "📦",
          label: t("quiz02.q1.opt2", "E-commerce & warehouses (Amazon, UPS)"),
          value: "ecommerce",
        },
        {
          emoji: "🏥",
          label: t("quiz02.q1.opt3", "Healthcare & pharmacy (CVS, hospitals)"),
          value: "healthcare",
        },
        { emoji: "🏛️", label: t("quiz02.q1.opt4", "Government / public sector"), value: "government" },
      ],
    },
    {
      id: "experience",
      question: t("quiz02.q2.question", "How much work experience do you have?"),
      options: [
        {
          emoji: "🌱",
          label: t("quiz02.q2.opt1", "No experience \u2014 this is my first job"),
          value: "none",
        },
        { emoji: "📋", label: t("quiz02.q2.opt2", "Less than 1 year"), value: "under-1" },
        { emoji: "🔧", label: t("quiz02.q2.opt3", "1 \u2013 3 years"), value: "1-3" },
        { emoji: "⭐", label: t("quiz02.q2.opt4", "More than 3 years"), value: "3plus" },
      ],
    },
  ];

  return (
    <JobsQuizEntry
      badge={t("quiz02.badge", "EMPLOYER MATCH QUIZ")}
      title={t("quiz02.title", "Find Your Perfect Employer in 2026")}
      subtitle={t("quiz02.subtitle", "Tell us what kind of work environment and employer you\u2019re looking for \u2014 we\u2019ll point you to the right companies hiring right now.")}
      questions={QUESTIONS}
      journeyId="quiz-jobs-02"
      themeColor={JOBS_THEME.color}
      themeColorLight={JOBS_THEME.colorLight}
      loadingMessages={[
        t("quiz02.loading1", "Analyzing your employer preferences\u2026"),
        t("quiz02.loading2", "Searching for companies hiring near you\u2026"),
        t("quiz02.loading3", "Matching you to the best open positions\u2026"),
        t("quiz02.loading4", "Your employer matches are almost ready!"),
      ]}
      loadingDuration={3500}
      ctaHeading={t("quiz02.ctaHeading", "We found the best employers for your profile!")}
      ctaBody={t("quiz02.ctaBody", "Based on your answers, these companies are hiring right now and are a great fit for your experience and preferences.")}
      ctaButtonText={t("quiz02.ctaButton", "See My Employer Matches \u2192")}
      ctaSecondaryText={t("quiz02.ctaSecondary", "Free results \u2014 no sign-up required")}
      ctaIcon="🏢"
      redirectTo="/jobs/jobs-promise-p2"
    />
  );
}
