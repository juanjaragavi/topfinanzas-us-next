import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
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
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8 md:py-12 max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1A2B3C] mb-4">
            Find the Perfect Card for Your Financial Goals
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Answer a few quick questions and our smart assistant will recommend the best financial products tailored to your needs.
          </p>
        </div>

        <FinanceChatOfferwall
          botName="Top Finance Assistant"
          greeting="Hello! I'm here to help you find the best credit card options available in the US market."
          questions={FINANCE_QUIZ_P2_QUESTIONS}
          theme="green" // Green theme
          successMessage="I found some fantastic options that match your profile perfectly."
          ctaButtonText="Show My Options"
          ctaSecondaryText="To view your suggested cards please click above."
          redirectTo={REDIRECT_URL}
          adStepIndex={1} // Inject ad after first question
        />
      </main>

      <Footer />
    </div>
  );
}
