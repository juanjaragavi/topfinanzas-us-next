"use client";

import JobsQuizEntry from "@/components/jobs/jobs-quiz-entry";
import { JOBS_THEME } from "@/lib/jobs-config";

const QUESTIONS = [
  {
    id: "availability",
    question: "What's your ideal work schedule?",
    options: [
      { emoji: "🕗", label: "Full-time (40+ hrs/week)", value: "full-time" },
      { emoji: "⏰", label: "Part-time (15–30 hrs/week)", value: "part-time" },
      { emoji: "🏠", label: "Remote / work from home", value: "remote" },
      { emoji: "📦", label: "Flexible / gig shifts", value: "gig" },
    ],
  },
  {
    id: "priorities",
    question: "What matters most to you in a job?",
    options: [
      { emoji: "🛡️", label: "Job stability & security", value: "stability" },
      { emoji: "📈", label: "Pay growth & advancement", value: "growth" },
      { emoji: "🗓️", label: "Schedule flexibility", value: "flexibility" },
      { emoji: "🏥", label: "Benefits & health insurance", value: "benefits" },
    ],
  },
];

export default function JobsQuiz01Page() {
  return (
    <JobsQuizEntry
      badge="JOB MATCH QUIZ"
      title="Find Your Best Job Match in 2026"
      subtitle="Answer 3 quick questions and we'll show you the best opportunities for your situation — no account required."
      questions={QUESTIONS}
      journeyId="quiz-jobs-01"
      themeColor={JOBS_THEME.color}
      themeColorLight={JOBS_THEME.colorLight}
      loadingMessages={[
        "Analyzing your work preferences…",
        "Finding openings that match your schedule…",
        "Ranking your top salary matches…",
        "Your job matches are almost ready!",
      ]}
      loadingDuration={3500}
      ctaHeading="We matched you with top opportunities for 2026!"
      ctaBody="Based on your preferences, here are the best job search platforms and open positions for your profile right now."
      ctaButtonText="See My Job Matches →"
      ctaSecondaryText="Free results — no sign-up required"
      ctaIcon="🎯"
      redirectTo="/jobs/jobs-promise-p1"
    />
  );
}
