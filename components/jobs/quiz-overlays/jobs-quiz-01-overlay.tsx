"use client";

import JobsQuizModal from "@/components/jobs/jobs-quiz-modal";
import { useTranslation } from "@/components/jobs/translation-provider";
import { JOBS_THEME } from "@/lib/jobs-config";

export default function JobsQuiz01Overlay() {
  const t = useTranslation();

  const QUESTIONS = [
    {
      id: "availability",
      question: t("quiz01.q1.question", "What’s your ideal work schedule?"),
      options: [
        {
          emoji: "🕗",
          label: t("quiz01.q1.opt1", "Full-time (40+ hrs/week)"),
          value: "full-time",
        },
        {
          emoji: "⏰",
          label: t("quiz01.q1.opt2", "Part-time (15–30 hrs/week)"),
          value: "part-time",
        },
        {
          emoji: "🏠",
          label: t("quiz01.q1.opt3", "Remote / work from home"),
          value: "remote",
        },
        {
          emoji: "📦",
          label: t("quiz01.q1.opt4", "Flexible / gig shifts"),
          value: "gig",
        },
      ],
    },
    {
      id: "priorities",
      question: t("quiz01.q2.question", "What matters most to you in a job?"),
      options: [
        {
          emoji: "🛡️",
          label: t("quiz01.q2.opt1", "Job stability & security"),
          value: "stability",
        },
        {
          emoji: "📈",
          label: t("quiz01.q2.opt2", "Pay growth & advancement"),
          value: "growth",
        },
        {
          emoji: "🗓️",
          label: t("quiz01.q2.opt3", "Schedule flexibility"),
          value: "flexibility",
        },
        {
          emoji: "🏥",
          label: t("quiz01.q2.opt4", "Benefits & health insurance"),
          value: "benefits",
        },
      ],
    },
  ];

  return (
    <JobsQuizModal
      questions={QUESTIONS}
      journeyId="quiz-jobs-01"
      themeColor={JOBS_THEME.color}
      themeColorLight={JOBS_THEME.colorLight}
      loadingMessages={[
        t("quiz01.loading1", "Analyzing your work preferences…"),
        t("quiz01.loading2", "Finding openings that match your schedule…"),
        t("quiz01.loading3", "Ranking your top salary matches…"),
        t("quiz01.loading4", "Your job matches are almost ready!"),
      ]}
      loadingDuration={3500}
    />
  );
}
