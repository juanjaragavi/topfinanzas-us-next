import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TopAdsSquare } from "@/components/ads/topads-placement";

export const metadata: Metadata = {
  title:
    "We've discovered a few cards that unlock remarkable boundaries for you | Top Finanzas US",
  description:
    "We've discovered a few cards that unlock remarkable boundaries for you. Select the limit option that suits your daily requirements and begin enjoying perks like 0% APR, cashback, points, and more.",
  keywords:
    "credit cards US, credit card recommender, card comparison USA, cashback, rewards, points, no annual fee, 0% APR, best credit cards, no credit check",
};

export default function InvitCreditCardRecUS2Page() {
  return (
    <main className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
      <div className="flex flex-col items-center text-center space-y-8">
        {/* Hero Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#2D7D6F]">
          We&apos;ve discovered a few cards that unlock remarkable boundaries
          for you.
        </h1>

        {/* Ad Placement - Top */}
        <TopAdsSquare id="square01" />

        {/* Subtitle */}
        <div className="space-y-2">
          <p className="text-gray-600">
            Please select the limit option below that aligns with your daily
            requirements:
          </p>
          <p className="text-sm text-gray-400 uppercase tracking-wide">
            By Top Finance
          </p>
        </div>

        {/* Card Selection CTA */}
        <div className="w-full">
          <p className="text-[#2D7D6F] font-medium italic mb-6 text-lg">
            We have the best credit cards for your selection. Choose the one
            that suits your needs.
          </p>
          <div className="flex flex-col gap-3 max-w-md mx-auto">
            <Link
              href="/financial-solutions/benefits-of-the-discover-it-cash-back"
              className="block w-full rounded-full bg-[#2D7D6F] hover:bg-[#246960] text-white py-3 px-6 text-base font-semibold transition-colors text-center"
            >
              Up to 2% Cashback Credit Card
            </Link>
            <Link
              href="/financial-solutions/citi-simplicity-card-benefits"
              className="block w-full rounded-full bg-[#2D7D6F] hover:bg-[#246960] text-white py-3 px-6 text-base font-semibold transition-colors text-center"
            >
              No annual fee Credit Card
            </Link>
            <Link
              href="/financial-solutions/benefits-of-the-capital-one-platinum-secured-credit-card"
              className="block w-full rounded-full bg-[#2D7D6F] hover:bg-[#246960] text-white py-3 px-6 text-base font-semibold transition-colors text-center"
            >
              No Credit Check Credit Card
            </Link>
            <Link
              href="/financial-solutions"
              className="block w-full rounded-full bg-[#2D7D6F] hover:bg-[#246960] text-white py-3 px-6 text-base font-semibold transition-colors text-center"
            >
              MORE OPTIONS
            </Link>
          </div>
        </div>

        {/* Well Done Section */}
        <div className="border-l-4 border-[#2D7D6F] pl-6 text-left w-full max-w-3xl">
          <h3 className="text-2xl font-semibold text-[#2D7D6F] mb-3">
            Well Done
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Your card is prepared for you. Select the limit option that suits
            you best and begin enjoying perks like 0% APR, cashback, points, and
            more. If none of these options fits your preferences, we have
            additional alternatives available for your consideration.
          </p>
        </div>

        {/* Accept Recommendation CTA */}
        <Link
          href="/financial-solutions/wells-fargo-autograph-card-benefits"
          className="inline-flex items-center justify-center rounded-full bg-[#2D7D6F] hover:bg-[#246960] text-white py-3 px-8 text-base font-bold uppercase tracking-wide transition-colors"
        >
          ACCEPT RECOMMENDATION
        </Link>

        {/* FAQ Accordion */}
        <div className="w-full text-left max-w-3xl mt-8">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What is a credit card cash back statement credit?
              </AccordionTrigger>
              <AccordionContent>
                It&apos;s a benefit where you receive money back as a credit on
                your statement, lowering your overall balance.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                How do I choose the right credit card for travel?
              </AccordionTrigger>
              <AccordionContent>
                Consider cards with no foreign fees, travel insurance, and
                rewards on airline or hotel purchases.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Can I transfer my credit card balance to another person&apos;s
                card?
              </AccordionTrigger>
              <AccordionContent>
                Balance transfers are typically only allowed between cards under
                the same account holder.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Stay Tuned Section */}
        <div className="border-l-4 border-[#2D7D6F] pl-6 text-left w-full max-w-3xl">
          <h4 className="text-xl font-semibold text-gray-800 mb-3">
            Stay Tuned
          </h4>
          <p className="text-gray-700 leading-relaxed">
            If you&apos;re looking for additional assistance in boosting your
            credit score or optimizing your credit card usage while avoiding
            banks capitalizing on your situation, please explore the information
            below as well. We offer valuable resources tailored to your specific
            needs.
          </p>
        </div>

        {/* Credit Card Image */}
        <div className="relative w-full max-w-3xl h-[300px] md:h-[400px] my-8">
          <Image
            src="https://media.topfinanzas.com/images/credit-card-varity.png"
            alt="Credit Card Variety"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Limited Offer Card */}
        <div className="bg-white border-2 border-[#ff9900] rounded-xl p-8 w-full max-w-3xl shadow-lg">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🔔</span>
              <h3 className="text-xl font-bold text-[#ff9900] uppercase">
                Limited offer!
              </h3>
            </div>
            <h4 className="text-2xl font-bold text-gray-900 uppercase">
              CARD WITH NO ANNUAL FEE
            </h4>
            <p className="text-gray-700">
              The most requested among our readers! Check it out today...
            </p>
            <Link
              href="/financial-solutions/benefits-of-the-wells-fargo-reflect-card"
              className="inline-flex items-center justify-center rounded-full transition-colors bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold px-8 py-3 text-lg uppercase"
            >
              SEE HOW TO APPLY
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
