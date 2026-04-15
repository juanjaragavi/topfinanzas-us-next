import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-blue-50 to-white">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8 md:py-12 max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1A2B3C] mb-4">
            Unlock the Best Credit Card For You
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Let our assistant guide you to the perfect card match with zero impact on your credit score.
          </p>
        </div>

        <FinanceChatOfferwall
          botName="Card Matcher"
          greeting="Welcome! Let's find a credit card that fits your lifestyle perfectly."
          questions={CREDIT_CARD_QUIZ_P2_QUESTIONS}
          theme="blue" // Blue theme
          successMessage="Great! Based on your answers, I have some excellent recommendations."
          ctaButtonText="View Recommendations"
          ctaSecondaryText="Click above to unlock your personalized card matches."
          redirectTo={REDIRECT_URL}
          adStepIndex={1} // Inject ad after first question
        />
      </main>

      <Footer />
    </div>
  );
}
