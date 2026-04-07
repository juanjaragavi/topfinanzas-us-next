"use client";

import { OfferwallDirectScaffold } from "@/lib/offerwall-quiz-scaffold";

interface FinanceOfferwallDirectProps {
  themeColor: string;
  loadingMessage: string;
  skipAds?: boolean;
}

export default function FinanceOfferwallDirect({
  themeColor,
  loadingMessage,
  skipAds = false,
}: FinanceOfferwallDirectProps) {
  return (
    <OfferwallDirectScaffold
      themeColor={themeColor}
      texts={{
        loading: loadingMessage,
        ctaTitle: "Found the best credit cards 2026",
        ctaButton: "See Cards Now",
        ctaDisclaimer: "To continue, it will be necessary to watch a short ad.",
      }}
      skipAds={skipAds}
    />
  );
}
