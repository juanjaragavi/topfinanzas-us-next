import { Metadata } from "next";
import { FinanceChatOfferwall } from "@/components/finance/finance-chat-offerwall";
import { FINANCE_QUIZ_RECOMMENDER_P3_QUESTIONS } from "@/lib/finance-quiz-recommender-p3-config";

export const metadata: Metadata = {
  title: "Find Your Perfect Credit Card | Top Finanzas US",
  description:
    "Answer a few quick questions in our chat to find the best credit card options tailored to your needs.",
  keywords:
    "credit cards US, credit card recommender, card comparison USA, cashback, rewards, points, no annual fee",
};

export default function FinanceQuizRecommenderP3Page() {
  return (
    <FinanceChatOfferwall
      botName="Top Finance Assistant"
      greeting="Welcome! Let's find the best credit card for you."
      questions={FINANCE_QUIZ_RECOMMENDER_P3_QUESTIONS}
      theme="blue"
      successMessage="Perfect! I'm redirecting you to your personalized flow right now..."
      ctaButtonText="Continue"
      ctaSecondaryText="Tap above to proceed to your matches."
      redirectTo="/invit-credit-card-rec-us-12"
      adStepIndex={1} // Inject ad after first question
      finalAction="auto-redirect"
      redirectTypingDelayMs={800}
    />
  );
}
