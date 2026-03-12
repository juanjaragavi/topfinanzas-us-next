"use client";

import JobsChatEntry from "@/components/jobs/jobs-chat-entry";
import { JOBS_THEME } from "@/lib/jobs-config";

const QUESTIONS = [
  {
    id: "work-type",
    botMessage: "What type of work schedule are you looking for?",
    options: [
      { label: "Full-time (40 hrs/week)", value: "full-time" },
      { label: "Part-time or seasonal", value: "part-time" },
      { label: "Remote / work from home", value: "remote" },
      { label: "Flexible / gig work", value: "gig" },
    ],
  },
  {
    id: "industry",
    botMessage: "Which type of work interests you most?",
    options: [
      { label: "Warehouse & logistics", value: "warehouse" },
      { label: "Retail & customer service", value: "retail" },
      { label: "Healthcare & pharmacy", value: "healthcare" },
      { label: "Delivery & driving", value: "delivery" },
    ],
  },
];

export default function JobsChat01Page() {
  return (
    <JobsChatEntry
      journeyId="chat-jobs-01"
      botName="JobBot"
      greeting="I help job seekers in the US find the best open positions near them. Let me ask you a couple of quick questions."
      questions={QUESTIONS}
      themeColor={JOBS_THEME.color}
      themeColorLight={JOBS_THEME.colorLight}
      successMessage="Great! Based on your answers, I found some excellent job opportunities that match your profile. Thousands of positions are available right now at top US companies — click below to see the best ones for you."
      ctaButtonText="Show Me the Best Jobs Now"
      ctaSecondaryText="View matched opportunities — free, no sign-up required"
      redirectTo="/jobs/jobs-promise-p1"
    />
  );
}
