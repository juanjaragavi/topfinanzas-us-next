import { Metadata } from "next";
import { FinanceChatOfferwall } from "@/components/finance/finance-chat-offerwall";
import { FINANCE_QUIZ_P2_QUESTIONS } from "@/lib/finance-quiz-p2-config";

export const metadata: Metadata = {
  title:
    "We've discovered a few cards that unlock remarkable boundaries for you | Top Finanzas US",
  description:
    "Answer a few questions to find the best credit card for your spending habits and credit profile. Our quiz matches you with top-rated cards in under 2 minutes.",
  keywords:
    "credit cards US, credit card recommender, card comparison USA, cashback, rewards, points, no annual fee, 0% APR",
};

const REDIRECT_URL = "http://redirect.topfinanzas.com/experiment_chat_top_1";

export default function FinanceQuizRecommenderP2Page() {
  return (
    <FinanceChatOfferwall
      botName="Top Finance Assistant"
      greeting="Let's find the best card for you."
      questions={FINANCE_QUIZ_P2_QUESTIONS}
      theme="green"
      successMessage="I've found great matches for you! I am redirecting you right now..."
      ctaButtonText="Show My Options"
      ctaSecondaryText="Tap above to see your matches."
      redirectTo={REDIRECT_URL}
      adStepIndex={1} // Inject ad after first question
      finalAction="auto-redirect"
      redirectTypingDelayMs={800}
    />
  );
}
