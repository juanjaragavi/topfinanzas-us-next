"use client";

import { OfferwallDirectScaffold } from "@/lib/offerwall-quiz-scaffold";

interface JobsOfferwallDirectProps {
  themeColor: string;
  loadingMessage: string;
  skipAds?: boolean;
}

export default function JobsOfferwallDirect({
  themeColor,
  loadingMessage,
  skipAds = false,
}: JobsOfferwallDirectProps) {
  return (
    <OfferwallDirectScaffold
      themeColor={themeColor}
      texts={{
        loading: loadingMessage,
        ctaTitle: "Found the best jobs 2026",
        ctaButton: "See Jobs Now",
        ctaDisclaimer: "To continue, it will be necessary to watch a short ad.",
      }}
      skipAds={skipAds}
    />
  );
}
