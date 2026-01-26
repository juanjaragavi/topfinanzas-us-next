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
  title:
    "We've discovered a few cards that unlock remarkable boundaries for you | Top Finanzas US",
  description:
    "We've discovered a few cards that unlock remarkable boundaries for you. Select the limit option that suits your daily requirements and begin enjoying perks like 0% APR, cashback, points, and more.",
};

export default function InvitCreditCardRecUSPage() {
  return (
    <main className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
      <div className="flex flex-col items-center text-center space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#2E74B5]">
          We&apos;ve discovered a few cards that unlock remarkable boundaries
          for you.
        </h1>

        <div className="space-y-2">
          <p className="text-gray-600">
            Please select the limit option below that aligns with your daily
            requirements:
          </p>
          <p className="text-sm text-gray-400 uppercase tracking-wide">
            By Top Finance
          </p>
        </div>

        <div className="bg-[#f0f7ff] p-6 rounded-lg w-full">
          <p className="text-gray-700 font-medium mb-6">
            We have the best credit cards for your selection. Choose the one
            that suits your needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <Link
              href="/financial-solutions"
              className="inline-flex items-center justify-center rounded-full bg-[#1e40af] hover:bg-[#1e3a8a] text-white py-2.5 px-6 text-sm font-medium transition-colors w-full"
            >
              $1000 CREDIT CARD
            </Link>
            <Link
              href="/financial-solutions"
              className="inline-flex items-center justify-center rounded-full bg-[#1e40af] hover:bg-[#1e3a8a] text-white py-2.5 px-6 text-sm font-medium transition-colors w-full"
            >
              $2500 CREDIT CARD
            </Link>
            <Link
              href="/financial-solutions"
              className="inline-flex items-center justify-center rounded-full bg-[#1e40af] hover:bg-[#1e3a8a] text-white py-2.5 px-6 text-sm font-medium transition-colors w-full"
            >
              $5000 CREDIT CARD
            </Link>
            <Link
              href="/financial-solutions"
              className="inline-flex items-center justify-center rounded-full border border-[#1e40af] text-[#1e40af] hover:bg-[#f0f7ff] py-2.5 px-6 text-sm font-medium transition-colors w-full"
            >
              MORE OPTIONS
            </Link>
          </div>
        </div>

        <div className="space-y-4 text-left w-full max-w-3xl">
          <h3 className="text-2xl font-semibold text-[#2E74B5]">Well Done</h3>
          <p className="text-gray-700 leading-relaxed">
            Your card is prepared for you. Select the limit option that suits
            you best and begin enjoying perks like 0% APR, cashback, points, and
            more. If none of these options fits your preferences, we have
            additional alternatives available for your consideration.
          </p>
        </div>

        <Link
          href="/financial-solutions"
          className="inline-flex items-center justify-center rounded-full bg-[#1e40af] hover:bg-[#1e3a8a] text-white py-3 px-8 text-base font-medium transition-colors"
        >
          ACCEPT RECOMMENDATION
        </Link>

        <div className="w-full text-left max-w-3xl mt-8">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What is a credit card cash back statement credit?
              </AccordionTrigger>
              <AccordionContent>
                A cashback statement credit is a refund applied directly to your
                credit card account balance, reducing the amount you owe. It's
                earned by making qualifying purchases with your rewards credit
                card.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                How do I choose the right credit card for travel?
              </AccordionTrigger>
              <AccordionContent>
                Consider cards that offer travel rewards, no foreign transaction
                fees, airport lounge access, and travel insurance. Look for
                sign-up bonuses that can be redeemed for flights or hotel stays.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Can I transfer my credit card balance to another person&apos;s
                card?
              </AccordionTrigger>
              <AccordionContent>
                Generally, you cannot transfer your balance directly to another
                person's card. However, that person can initiate a balance
                transfer from their account to pay off your card, subject to
                their issuer's policies.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="space-y-4 text-left w-full max-w-3xl">
          <h4 className="text-xl font-semibold text-gray-800">Stay Tuned</h4>
          <p className="text-gray-700 leading-relaxed">
            If you&apos;re looking for additional assistance in boosting your
            credit score or optimizing your credit card usage while avoiding
            banks capitalizing on your situation, please explore the information
            below as well. We offer valuable resources tailored to your specific
            needs.
          </p>
        </div>

        <div className="relative w-full max-w-3xl h-[300px] md:h-[400px] my-8">
          <Image
            src="https://media.topfinanzas.com/images/credit-card-varity.png"
            alt="Credit Card Variety"
            fill
            className="object-contain"
            priority
          />
        </div>

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
              href="/financial-solutions"
              className="inline-flex items-center justify-center rounded-full transition-colors bg-[#ff9900] hover:bg-[#e68a00] text-black font-bold px-8 py-3 text-lg"
            >
              SEE HOW TO APPLY
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
