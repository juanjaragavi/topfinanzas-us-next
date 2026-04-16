import { Metadata } from "next";
import { FinanceChatOfferwall } from "@/components/finance/finance-chat-offerwall";
import { CREDIT_CARD_QUIZ_P2_QUESTIONS } from "@/lib/credit-card-quiz-p2-config";

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

export default function CreditCardRecommenderP2Page() {
  return (
    <FinanceChatOfferwall
      botName="Card Matcher"
      greeting="Welcome! Let's find your perfect credit card."
      questions={CREDIT_CARD_QUIZ_P2_QUESTIONS}
      theme="blue" // Blue theme
      successMessage="Great! Here are your top recommendations."
      ctaButtonText="View Recommendations"
      ctaSecondaryText="Click to see your top matches."
      redirectTo={REDIRECT_URL}
      adStepIndex={1} // Inject ad after first question
    />
  );
}
