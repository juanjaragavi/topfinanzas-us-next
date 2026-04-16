"use client";

import { OfferwallQuizScaffold } from "@/lib/offerwall-quiz-scaffold";
import type { JobsQuizConfig } from "@/lib/jobs-quiz-config";

interface JobsOfferwallProps {
  config: JobsQuizConfig;
}

export default function JobsOfferwall({ config }: JobsOfferwallProps) {
  return (
    <OfferwallQuizScaffold
      themeColor={config.themeColor}
      texts={{
        loading: config.loadingMessage,
        ctaTitle: "Found the best jobs 2026",
        ctaButton: "See Jobs Now",
        ctaDisclaimer: "To continue, it will be necessary to watch a short ad.",
      }}
      questions={config.questions}
      skipAds={config.skipAds}
    />
  );
}
