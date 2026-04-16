"use client";

import JobsChatEntry from "@/components/jobs/jobs-chat-entry";
import { useTranslation } from "@/components/jobs/translation-provider";
import { JOBS_THEME } from "@/lib/jobs-config";

export default function JobsChat02Page() {
  const t = useTranslation();

  const QUESTIONS = [
    {
      id: "company",
      botMessage: t(
        "chat02.q1.botMessage",
        "Which type of company would you most like to work at?",
      ),
      options: [
        {
          label: t("chat02.q1.opt1", "Amazon or FedEx/UPS"),
          value: "amazon-logistics",
        },
        {
          label: t("chat02.q1.opt2", "Walmart or Target"),
          value: "walmart-target",
        },
        {
          label: t("chat02.q1.opt3", "CVS or a healthcare company"),
          value: "cvs-health",
        },
        {
          label: t("chat02.q1.opt4", "A government or federal agency"),
          value: "government",
        },
      ],
    },
    {
      id: "experience",
      botMessage: t(
        "chat02.q2.botMessage",
        "How much work experience do you have?",
      ),
      options: [
        {
          label: t("chat02.q2.opt1", "No experience yet"),
          value: "no-experience",
        },
        { label: t("chat02.q2.opt2", "2 years"), value: "entry-level" },
        { label: t("chat02.q2.opt3", "5 years"), value: "mid-level" },
        { label: t("chat02.q2.opt4", "5+ years"), value: "experienced" },
      ],
    },
  ];

  return (
    <JobsChatEntry
      journeyId="chat-jobs-02"
      botName="JobBot"
      greeting={t(
        "chat02.greeting",
        "Let me help you find the best job match based on your preferences. Answer two quick questions:",
      )}
      questions={QUESTIONS}
      themeColor={JOBS_THEME.color}
      themeColorLight={JOBS_THEME.colorLight}
      successMessage={t(
        "chat02.successMessage",
        "Perfect! I found job openings that match your background and interests. These companies are actively hiring right now  2014 positions fill up fast, so let 2019s get you started!",
      )}
      ctaButtonText={t("chat02.ctaButton", "See My Matched Job Openings")}
      ctaSecondaryText={t(
        "chat02.ctaSecondary",
        "View available positions  2014 updated daily",
      )}
      redirectTo="/jobs/jobs-promise-p2"
    />
  );
}
