"use client";

import JobsChatEntry from "@/components/jobs/jobs-chat-entry";
import { useTranslation } from "@/components/jobs/translation-provider";
import { JOBS_THEME } from "@/lib/jobs-config";

export default function JobsChat01Page() {
  const t = useTranslation();

  const QUESTIONS = [
    {
      id: "work-type",
      botMessage: t(
        "chat01.q1.botMessage",
        "What type of work schedule are you looking for?",
      ),
      options: [
        {
          label: t("chat01.q1.opt1", "Full-time (40 hrs/week)"),
          value: "full-time",
        },
        {
          label: t("chat01.q1.opt2", "Part-time or seasonal"),
          value: "part-time",
        },
        {
          label: t("chat01.q1.opt3", "Remote / work from home"),
          value: "remote",
        },
        { label: t("chat01.q1.opt4", "Flexible / gig work"), value: "gig" },
      ],
    },
    {
      id: "industry",
      botMessage: t(
        "chat01.q2.botMessage",
        "Which type of work interests you most?",
      ),
      options: [
        {
          label: t("chat01.q2.opt1", "Warehouse & logistics"),
          value: "warehouse",
        },
        {
          label: t("chat01.q2.opt2", "Retail & customer service"),
          value: "retail",
        },
        {
          label: t("chat01.q2.opt3", "Healthcare & pharmacy"),
          value: "healthcare",
        },
        { label: t("chat01.q2.opt4", "Delivery & driving"), value: "delivery" },
      ],
    },
  ];

  return (
    <JobsChatEntry
      journeyId="chat-jobs-01"
      botName="JobBot"
      greeting={t(
        "chat01.greeting",
        "I help job seekers in the US find the best open positions near them. Let me ask you a couple of quick questions.",
      )}
      questions={QUESTIONS}
      themeColor={JOBS_THEME.color}
      themeColorLight={JOBS_THEME.colorLight}
      successMessage={t(
        "chat01.successMessage",
        "Great! Based on your answers, I found some excellent job opportunities that match your profile. Thousands of positions are available right now at top US companies \u2014 click below to see the best ones for you.",
      )}
      ctaButtonText={t("chat01.ctaButton", "Show Me the Best Jobs Now")}
      ctaSecondaryText={t(
        "chat01.ctaSecondary",
        "View matched opportunities \u2014 free, no sign-up required",
      )}
      redirectTo="/jobs/jobs-promise-p1"
    />
  );
}
