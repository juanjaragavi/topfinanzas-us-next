"use client";

import FinanceOfferwall from "@/lib/offerwall-for-finance";
import { FINANCE_QUIZ_CONFIGS } from "@/lib/finance-quiz-config";

/**
 * Finance quiz overlay for the Chase Sapphire Preferred benefits page.
 *
 * Mirrors the Jobs vertical pattern (components/jobs/quiz-overlays/jobs-quiz-01-overlay.tsx):
 * renders as a sibling fragment alongside the page content. The fixed-position
 * modal with backdrop-blur visually blurs the benefits content underneath.
 * On quiz completion the component unmounts, revealing the page.
 */
export default function FinanceQuizOverlay() {
  const config = FINANCE_QUIZ_CONFIGS.chaseSapphirePreferred;

  return (
    <FinanceOfferwall
      config={config}
      redirectUrl="/financial-solutions/chase-sapphire-preferred-credit-card-requirements"
    />
  );
}
