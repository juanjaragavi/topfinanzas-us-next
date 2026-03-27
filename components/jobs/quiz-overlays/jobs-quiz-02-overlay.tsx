"use client";

import JobsQuizModal from "@/components/jobs/jobs-quiz-modal";
import { useTranslation } from "@/components/jobs/translation-provider";
import { JOBS_THEME } from "@/lib/jobs-config";

export default function JobsQuiz02Overlay() {
  const t = useTranslation();

  const QUESTIONS = [
    {
      id: "employer",
      question: t(
        "quiz02.q1.question",
        "Which type of employer appeals to you most?",
      ),
      options: [
        {
          emoji: "🛒",
          label: t("quiz02.q1.opt1", "Large retail (Target, Walmart)"),
          value: "retail",
        },
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
        {
          emoji: "🏛️",
          label: t("quiz02.q1.opt4", "Government / public sector"),
          value: "government",
        },
      ],
    },
    {
      id: "experience",
      question: t(
        "quiz02.q2.question",
        "How much work experience do you have?",
      ),
      options: [
        {
          emoji: "🌱",
          label: t("quiz02.q2.opt1", "No experience — this is my first job"),
          value: "none",
        },
        {
          emoji: "📋",
          label: t("quiz02.q2.opt2", "Less than 1 year"),
          value: "under-1",
        },
        {
          emoji: "🔧",
          label: t("quiz02.q2.opt3", "1 – 3 years"),
          value: "1-3",
        },
        {
          emoji: "⭐",
          label: t("quiz02.q2.opt4", "More than 3 years"),
          value: "3plus",
        },
      ],
    },
  ];

  return (
    <JobsQuizModal
      questions={QUESTIONS}
      journeyId="quiz-jobs-02"
      themeColor={JOBS_THEME.color}
      themeColorLight={JOBS_THEME.colorLight}
      loadingMessages={[
        t("quiz02.loading1", "Analyzing your employer preferences…"),
        t("quiz02.loading2", "Searching for companies hiring near you…"),
        t("quiz02.loading3", "Matching you to the best open positions…"),
        t("quiz02.loading4", "Your employer matches are almost ready!"),
      ]}
      loadingDuration={3500}
    />
  );
}
