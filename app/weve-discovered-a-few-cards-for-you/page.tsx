import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "We've discovered a few cards for you | Top Finanzas US",
  description:
    "We've discovered a few cards that unlock remarkable boundaries for you. Select the limit option that aligns with your daily requirements.",
};

export default function CreditCardLandingPage() {
  return (
    <main className="bg-[#F9FAFB] min-h-screen py-8 md:py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col items-center text-center space-y-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#3B82F6]">
            We&apos;ve discovered a few cards that unlock remarkable boundaries
            for you.
          </h1>

          <div className="space-y-2">
            <p className="text-gray-700 text-base md:text-lg">
              Please select the limit option below that aligns with your daily
              requirements:
            </p>
            <p className="text-sm text-gray-500 uppercase tracking-wide">
              By Top Finance
            </p>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-xl w-full shadow-md">
            <p className="text-gray-800 font-medium mb-6 text-sm md:text-base">
              We have the best credit cards for your selection. Choose the one
              that suits your needs.
            </p>
            <div className="space-y-3 max-w-2xl mx-auto">
              <Link
                href="/financial-solutions/benefits-of-the-capital-one-platinum-secured-credit-card"
                className="block w-full rounded-full bg-[#5B21B6] hover:bg-[#4C1D95] text-white py-3.5 px-6 text-base md:text-lg font-bold transition-colors"
              >
                $1000 CREDIT CARD
              </Link>
              <Link
                href="/financial-solutions/benefits-of-the-discover-it-cash-back"
                className="block w-full rounded-full bg-[#5B21B6] hover:bg-[#4C1D95] text-white py-3.5 px-6 text-base md:text-lg font-bold transition-colors"
              >
                $2500 CREDIT CARD
              </Link>
              <Link
                href="/financial-solutions/chase-sapphire-preferred-credit-card-benefits"
                className="block w-full rounded-full bg-[#5B21B6] hover:bg-[#4C1D95] text-white py-3.5 px-6 text-base md:text-lg font-bold transition-colors"
              >
                $5000 CREDIT CARD
              </Link>
              <Link
                href="/financial-solutions"
                className="block w-full rounded-full border-2 border-[#5B21B6] text-[#5B21B6] hover:bg-[#5B21B6] hover:text-white py-3.5 px-6 text-base md:text-lg font-bold transition-colors"
              >
                MORE OPTIONS
              </Link>
            </div>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-xl w-full shadow-md">
            <h3 className="text-2xl md:text-3xl font-bold text-[#3B82F6] mb-4">
              Well Done
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              Your card is prepared for you. Select the limit option that suits
              you best and begin enjoying perks like 0% APR, cashback, points,
              and more. If none of these options fits your preferences, we have
              additional alternatives available for your consideration.
            </p>
          </div>

          <Link
            href="/financial-solutions"
            className="inline-flex items-center justify-center rounded-full bg-[#5B21B6] hover:bg-[#4C1D95] text-white py-3.5 px-10 text-base md:text-lg font-bold transition-colors shadow-md"
          >
            ACCEPT RECOMMENDATION
          </Link>

          <div className="w-full max-w-3xl mt-8">
            <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
              ¿Tienes dudas? Aquí respondemos algunas comunes:
            </h4>
            <Accordion type="single" collapsible className="w-full space-y-2">
              <AccordionItem value="item-1" className="bg-white rounded-lg px-4 border-0">
                <AccordionTrigger className="text-left hover:no-underline py-4 text-sm md:text-base font-medium">
                  What is a credit card cash back statement credit?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-4 text-sm md:text-base">
                  A cashback statement credit is a refund applied directly to your
                  credit card account balance, reducing the amount you owe.
                  It&apos;s earned by making qualifying purchases with your
                  rewards credit card.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-lg px-4 border-0">
                <AccordionTrigger className="text-left hover:no-underline py-4 text-sm md:text-base font-medium">
                  How do I choose the right credit card for travel?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-4 text-sm md:text-base">
                  Consider cards that offer travel rewards, no foreign transaction
                  fees, airport lounge access, and travel insurance. Look for
                  sign-up bonuses that can be redeemed for flights or hotel stays.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-lg px-4 border-0">
                <AccordionTrigger className="text-left hover:no-underline py-4 text-sm md:text-base font-medium">
                  Can I transfer my credit card balance to another person&apos;s
                  card?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-4 text-sm md:text-base">
                  Generally, you cannot transfer your balance directly to another
                  person&apos;s card. However, that person can initiate a balance
                  transfer from their account to pay off your card, subject to
                  their issuer&apos;s policies.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-xl w-full shadow-md mt-8">
            <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Stay Tuned
            </h4>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-6">
              If you&apos;re looking for additional assistance in boosting your
              credit score or optimizing your credit card usage while avoiding
              banks capitalizing on your situation, please explore the
              information below as well. We offer valuable resources tailored to
              your specific needs.
            </p>

            <div className="relative w-full max-w-md mx-auto h-[250px] md:h-[300px]">
              <Image
                src="https://media.topfinanzas.com/images/credit-card-varity.png"
                alt="Credit Card Variety"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="bg-white border-2 border-[#FFA500] rounded-xl p-6 md:p-8 w-full shadow-lg">
            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🔔</span>
                <h3 className="text-lg md:text-xl font-bold text-[#FFA500] uppercase">
                  Limited offer!
                </h3>
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-gray-900 uppercase text-center">
                CARD WITH NO ANNUAL FEE
              </h4>
              <p className="text-gray-700 text-sm md:text-base text-center">
                The most requested among our readers! Check it out today...
              </p>
              <Link
                href="/financial-solutions"
                className="inline-flex items-center justify-center rounded-md transition-colors bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold px-8 py-3 text-base md:text-lg uppercase"
              >
                SEE HOW TO APPLY
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
