"use client";

import JobsChatEntry from "@/components/jobs/jobs-chat-entry";
import { JOBS_THEME } from "@/lib/jobs-config";

const QUESTIONS = [
  {
    id: "company",
    botMessage: "Which type of company would you most like to work at?",
    options: [
      { label: "Amazon or FedEx/UPS", value: "amazon-logistics" },
      { label: "Walmart or Target", value: "walmart-target" },
      { label: "CVS or a healthcare company", value: "cvs-health" },
      { label: "A government or federal agency", value: "government" },
    ],
  },
  {
    id: "experience",
    botMessage: "How much work experience do you have?",
    options: [
      { label: "No experience yet", value: "no-experience" },
      { label: "1–2 years", value: "entry-level" },
      { label: "3–5 years", value: "mid-level" },
      { label: "5+ years", value: "experienced" },
    ],
  },
];

export default function JobsChat02Page() {
  return (
    <JobsChatEntry
      journeyId="chat-jobs-02"
      botName="JobBot"
      greeting="Let me help you find the best job match based on your preferences. Answer two quick questions:"
      questions={QUESTIONS}
      themeColor={JOBS_THEME.color}
      themeColorLight={JOBS_THEME.colorLight}
      successMessage="Perfect! I found job openings that match your background and interests. These companies are actively hiring right now — positions fill up fast, so let's get you started!"
      ctaButtonText="See My Matched Job Openings"
      ctaSecondaryText="View available positions — updated daily"
      redirectTo="/jobs/jobs-promise-p2"
    />
  );
}
