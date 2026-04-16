"use client";

import { OfferwallQuizScaffold } from "@/lib/offerwall-quiz-scaffold";
import type { FinanceQuizConfig } from "@/lib/finance-quiz-config";

interface FinanceOfferwallProps {
  config: FinanceQuizConfig;
}

export default function FinanceOfferwall({ config }: FinanceOfferwallProps) {
  return (
    <OfferwallQuizScaffold
      themeColor={config.themeColor}
      texts={{
        loading: config.loadingMessage,
        ctaTitle: "Found the best credit cards 2026",
        ctaButton: "See Cards Now",
        ctaDisclaimer: "To continue, it will be necessary to watch a short ad.",
      }}
      questions={config.questions}
      skipAds={config.skipAds}
    />
  );
}
