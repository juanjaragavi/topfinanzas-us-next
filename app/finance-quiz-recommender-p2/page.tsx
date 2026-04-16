import { Metadata } from "next";
import { FinanceChatOfferwall } from "@/components/finance/finance-chat-offerwall";
import { FINANCE_QUIZ_P2_QUESTIONS } from "@/lib/finance-quiz-p2-config";

export const metadata: Metadata = {
  title:
    "We've discovered a few cards that unlock remarkable boundaries for you | Top Finanzas US",
  description:
    "Find the perfect credit card tailored to your needs with our smart assistant. Select the options that suit you best.",
  keywords:
    "credit cards US, credit card recommender, card comparison USA, cashback, rewards, points, no annual fee, 0% APR",
};

const REDIRECT_URL =
  "https://route.topnetworks.co/api/redirect/d0dc0c93-d1fa-4f5f-8fb4-ff7753eb3f20";

export default function FinanceQuizRecommenderP2Page() {
  return (
    <FinanceChatOfferwall
      botName="Top Finance Assistant"
      greeting="Hi! I'll help you find top US credit cards."
      questions={FINANCE_QUIZ_P2_QUESTIONS}
      theme="green" // Green theme
      successMessage="I found some fantastic matches for you!"
      ctaButtonText="Show My Options"
      ctaSecondaryText="Click to view your top suggestions."
      redirectTo={REDIRECT_URL}
      adStepIndex={1} // Inject ad after first question
    />
  );
}
