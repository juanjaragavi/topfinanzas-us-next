"use client";

import type { ReactNode } from "react";

import FinanceOfferwall from "@/lib/offerwall-for-finance";
import TopAdsQuizIdStamper from "@/components/finance/topads-quiz-id-stamper";
import type { FinanceQuizConfig } from "@/lib/finance-quiz-config";

/**
 * Client wrapper that renders the hidden offerwall data-topads-quiz div
 * alongside the page content. TopAds discovers this div during its normal
 * bootstrap (loaded via the root layout config script) and renders the
 * quiz overlay automatically.
 *
 * Mirrors budgetbee-next GamingOfferwallRuntime — no script re-injection
 * needed since the page is not in pageSetting.exclude.
 */

interface FinanceOfferwallRuntimeProps {
  quiz?: FinanceQuizConfig;
  children: ReactNode;
}

export default function FinanceOfferwallRuntime({
  quiz,
  children,
}: FinanceOfferwallRuntimeProps) {
  if (!quiz) {
    return <>{children}</>;
  }

  return (
    <>
      {children}
      <FinanceOfferwall config={quiz} />
      <TopAdsQuizIdStamper journeyId={quiz.journeyId} />
    </>
  );
}
