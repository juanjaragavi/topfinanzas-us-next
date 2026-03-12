"use client";

import JobsQuizEntry from "@/components/jobs/jobs-quiz-entry";
import { useTranslation } from "@/components/jobs/translation-provider";
import { JOBS_THEME } from "@/lib/jobs-config";

export default function JobsQuiz01Page() {
  const t = useTranslation();

  const QUESTIONS = [
    {
      id: "availability",
      question: t("quiz01.q1.question", "What\u2019s your ideal work schedule?"),
      options: [
        { emoji: "🕗", label: t("quiz01.q1.opt1", "Full-time (40+ hrs/week)"), value: "full-time" },
        { emoji: "⏰", label: t("quiz01.q1.opt2", "Part-time (15\u201330 hrs/week)"), value: "part-time" },
        { emoji: "🏠", label: t("quiz01.q1.opt3", "Remote / work from home"), value: "remote" },
        { emoji: "📦", label: t("quiz01.q1.opt4", "Flexible / gig shifts"), value: "gig" },
      ],
    },
    {
      id: "priorities",
      question: t("quiz01.q2.question", "What matters most to you in a job?"),
      options: [
        { emoji: "🛡️", label: t("quiz01.q2.opt1", "Job stability & security"), value: "stability" },
        { emoji: "📈", label: t("quiz01.q2.opt2", "Pay growth & advancement"), value: "growth" },
        { emoji: "🗓️", label: t("quiz01.q2.opt3", "Schedule flexibility"), value: "flexibility" },
        { emoji: "🏥", label: t("quiz01.q2.opt4", "Benefits & health insurance"), value: "benefits" },
      ],
    },
  ];

  return (
    <JobsQuizEntry
      badge={t("quiz01.badge", "JOB MATCH QUIZ")}
      title={t("quiz01.title", "Find Your Best Job Match in 2026")}
      subtitle={t("quiz01.subtitle", "Answer 3 quick questions and we\u2019ll show you the best opportunities for your situation \u2014 no account required.")}
      questions={QUESTIONS}
      journeyId="quiz-jobs-01"
      themeColor={JOBS_THEME.color}
      themeColorLight={JOBS_THEME.colorLight}
      loadingMessages={[
        t("quiz01.loading1", "Analyzing your work preferences\u2026"),
        t("quiz01.loading2", "Finding openings that match your schedule\u2026"),
        t("quiz01.loading3", "Ranking your top salary matches\u2026"),
        t("quiz01.loading4", "Your job matches are almost ready!"),
      ]}
      loadingDuration={3500}
      ctaHeading={t("quiz01.ctaHeading", "We matched you with top opportunities for 2026!")}
      ctaBody={t("quiz01.ctaBody", "Based on your preferences, here are the best job search platforms and open positions for your profile right now.")}
      ctaButtonText={t("quiz01.ctaButton", "See My Job Matches \u2192")}
      ctaSecondaryText={t("quiz01.ctaSecondary", "Free results \u2014 no sign-up required")}
      ctaIcon="🎯"
      redirectTo="/jobs/jobs-promise-p1"
    />
  );
}
