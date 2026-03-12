"use client";

import JobsQuizEntry from "@/components/jobs/jobs-quiz-entry";
import { JOBS_THEME } from "@/lib/jobs-config";

const QUESTIONS = [
  {
    id: "employer",
    question: "Which type of employer appeals to you most?",
    options: [
      { emoji: "🛒", label: "Large retail (Target, Walmart)", value: "retail" },
      {
        emoji: "📦",
        label: "E-commerce & warehouses (Amazon, UPS)",
        value: "ecommerce",
      },
      {
        emoji: "🏥",
        label: "Healthcare & pharmacy (CVS, hospitals)",
        value: "healthcare",
      },
      { emoji: "🏛️", label: "Government / public sector", value: "government" },
    ],
  },
  {
    id: "experience",
    question: "How much work experience do you have?",
    options: [
      {
        emoji: "🌱",
        label: "No experience — this is my first job",
        value: "none",
      },
      { emoji: "📋", label: "Less than 1 year", value: "under-1" },
      { emoji: "🔧", label: "1 – 3 years", value: "1-3" },
      { emoji: "⭐", label: "More than 3 years", value: "3plus" },
    ],
  },
];

export default function JobsQuiz02Page() {
  return (
    <JobsQuizEntry
      badge="EMPLOYER MATCH QUIZ"
      title="Find Your Perfect Employer in 2026"
      subtitle="Tell us what kind of work environment and employer you're looking for — we'll point you to the right companies hiring right now."
      questions={QUESTIONS}
      journeyId="quiz-jobs-02"
      themeColor={JOBS_THEME.color}
      themeColorLight={JOBS_THEME.colorLight}
      loadingMessages={[
        "Analyzing your employer preferences…",
        "Searching for companies hiring near you…",
        "Matching you to the best open positions…",
        "Your employer matches are almost ready!",
      ]}
      loadingDuration={3500}
      ctaHeading="We found the best employers for your profile!"
      ctaBody="Based on your answers, these companies are hiring right now and are a great fit for your experience and preferences."
      ctaButtonText="See My Employer Matches →"
      ctaSecondaryText="Free results — no sign-up required"
      ctaIcon="🏢"
      redirectTo="/jobs/jobs-promise-p2"
    />
  );
}
