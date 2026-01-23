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
  title: "Find Your Ideal Credit Card | Top Finanzas US",
  description:
    "Answer a few simple questions and we'll match you with the best card options for your financial profile.",
};

export default function FindYourCardPage() {
  return (
    <main className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
      <div className="flex flex-col items-center text-center space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#2E74B5]">
          Find Your Ideal Credit Card
        </h1>

        <div className="space-y-2">
          <p className="text-gray-600 text-lg">
            Answer a few simple questions and we&apos;ll match you with the best
            card options for your financial profile.
          </p>
          <p className="text-sm text-gray-400 uppercase tracking-wide">
            By Top Finance
          </p>
        </div>

        <div className="bg-[#f0f7ff] p-6 rounded-lg w-full">
          <p className="text-gray-700 font-medium mb-6 text-xl">
            What benefits are you primarily looking for in a credit card?
          </p>
          <p className="text-gray-600 mb-6">
            Select the option that best describes your needs:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <Link
              href="/financial-solutions"
              className="inline-flex items-center justify-center rounded-full bg-[#1e40af] hover:bg-[#1e3a8a] text-white py-4 px-6 text-sm font-medium transition-colors w-full h-auto whitespace-normal text-center leading-tight"
            >
              RECOMMENDED CASHBACK CARDS
            </Link>
            <Link
              href="/financial-solutions"
              className="inline-flex items-center justify-center rounded-full bg-[#1e40af] hover:bg-[#1e3a8a] text-white py-4 px-6 text-sm font-medium transition-colors w-full h-auto whitespace-normal text-center leading-tight"
            >
              PREMIUM RECOMMENDATION
            </Link>
            <Link
              href="/financial-solutions"
              className="inline-flex items-center justify-center rounded-full bg-[#1e40af] hover:bg-[#1e3a8a] text-white py-4 px-6 text-sm font-medium transition-colors w-full h-auto whitespace-normal text-center leading-tight"
            >
              NO COST CHOICE
            </Link>
          </div>
        </div>

        <div className="w-full text-left max-w-3xl mt-12">
          <h3 className="text-2xl font-semibold text-[#2E74B5] mb-6">
            Frequently Asked Questions About Credit Cards
          </h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What is a credit card cashback program?
              </AccordionTrigger>
              <AccordionContent>
                A cashback program refunds a small percentage of every purchase
                you make with the card, typically between 1% and 5% depending on
                the category.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                How do I choose the best credit card for me?
              </AccordionTrigger>
              <AccordionContent>
                Consider your spending habits (travel, groceries, dining) and
                financial goals (building credit, earning rewards, paying off
                debt) to match with a card&apos;s benefits.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Can I get a credit card with bad credit?
              </AccordionTrigger>
              <AccordionContent>
                Yes, there are secured credit cards and cards designed
                specifically for rebuilding credit that may be available to you.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                What should I do if my credit card application is denied?
              </AccordionTrigger>
              <AccordionContent>
                Review your credit report for errors, improve your credit score
                by paying down debt, and consider applying for a secured card or
                becoming an authorized user.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="bg-white border text-left p-6 rounded-xl w-full max-w-3xl shadow-sm mt-8">
          <h4 className="text-xl font-bold text-[#2E74B5] mb-4">
            Smart Credit Card Usage Tips
          </h4>
          <ul className="space-y-2 text-gray-700 list-disc pl-5">
            <li>
              Always pay your full balance before the due date to avoid interest
              charges.
            </li>
            <li>
              Keep your credit utilization below 30% of your limit to maintain a
              good credit score.
            </li>
            <li>
              Regularly review your statements to catch any unauthorized
              charges.
            </li>
            <li>
              Take advantage of specific card benefits like 0% intro periods or
              cash back offers.
            </li>
            <li>
              Never use your credit card for cash advances, as they typically
              incur high fees and interest rates.
            </li>
          </ul>
        </div>

        <div className="relative w-full max-w-3xl h-[300px] md:h-[400px] my-8">
          <Image
            src="https://media.topfinanzas.com/images/credit-card-varity.png"
            alt="Credit Card Options"
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
                Exclusive Offer!
              </h3>
            </div>
            <h4 className="text-2xl font-bold text-gray-900 uppercase">
              NO ANNUAL FEE FOR LIFE
            </h4>
            <p className="text-gray-700">
              No opening or maintenance fees, fast approval, and exclusive
              benefits
            </p>
            <Link
              href="/financial-solutions"
              className="inline-flex items-center justify-center rounded-full transition-colors bg-[#ff9900] hover:bg-[#e68a00] text-black font-bold px-8 py-3 text-lg"
            >
              APPLY NOW
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
