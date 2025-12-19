"use client";

import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Bell } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Suspense } from "react";
import useRecommenderPageGuard from "@/hooks/use-recommender-page-guard";

function ChoosePerfectCardPageContent() {
  useRecommenderPageGuard();

  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      <Header />

      <div className="flex-grow container mx-auto px-4 py-8 md:py-12 max-w-3xl">
        
        {/* Hero Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Find Your Ideal Credit Card
          </h1>
          <p className="text-gray-700 text-lg mb-2">
            Answer a few simple questions and we'll match you with the best card options for your financial profile.
          </p>
          <p className="text-gray-500 text-sm">By Top Finance</p>
        </div>

        {/* Question Section */}
        <div className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 text-center">
            What benefits are you primarily looking for in a credit card?
          </h2>
          <p className="text-gray-700 mb-6 text-center">
            Select the option that best describes your needs:
          </p>

          <div className="space-y-4 max-w-md mx-auto">
            <Link href="/financial-solutions/barclaycard-avios-plus" className="block">
              <Button className="w-full bg-[#3B7CA8] hover:bg-[#326a90] text-white font-bold py-6 text-lg rounded-lg uppercase shadow-md">
                RECOMMENDED CASHBACK CARDS
              </Button>
            </Link>
            <Link href="/financial-solutions/barclaycard-avios-plus" className="block">
              <Button className="w-full bg-[#2C5282] hover:bg-[#23426a] text-white font-bold py-6 text-lg rounded-lg uppercase shadow-md">
                PREMIUM RECOMMENDATION
              </Button>
            </Link>
            <Link href="/financial-solutions/barclaycard-avios-plus" className="block">
              <Button className="w-full bg-[#4A5568] hover:bg-[#3c4554] text-white font-bold py-6 text-lg rounded-lg uppercase shadow-md">
                NO COST CHOICE
              </Button>
            </Link>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center md:text-left">
            Frequently Asked Questions About Credit Cards
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-semibold text-gray-900">
                What is a credit card cashback program?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                A cashback program is a type of rewards system where you receive a percentage of your purchases back as a statement credit, direct deposit, or other reward form. Typical rates range from 1-5% depending on the card and purchase category. Some cards offer flat-rate cash back on all purchases, while others provide higher percentages in specific categories like groceries, gas, or dining.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-semibold text-gray-900">
                How do I choose the best credit card for me?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                To choose the best credit card, consider your financial profile (income and credit score), spending habits (where you spend the most), and which benefits you value (cashback, travel rewards, no annual fee). Compare APRs, fees, included insurance benefits, and promotional offers. For beginners, no-annual-fee cards are typically recommended, while frequent travelers might benefit more from travel rewards cards.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-semibold text-gray-900">
                Can I get a credit card with bad credit?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                Yes, several credit cards are designed specifically for individuals with limited or damaged credit. Secured credit cards require a security deposit that typically becomes your credit limit. Store credit cards and certain unsecured cards for limited credit also have less stringent approval requirements. Using these responsibly by making on-time payments and keeping balances low can help improve your credit score over time.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-semibold text-gray-900">
                What should I do if my credit card application is denied?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                If your application is denied, first request a copy of the credit report used in the decision to identify potential issues. Wait at least 3-6 months before applying for another card, as multiple applications in a short period can negatively impact your credit score. In the meantime, consider secured cards or retail store cards with more flexible approval requirements. You can also improve your profile by paying down existing debts and establishing a history of on-time payments.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Tips Section */}
        <div className="bg-gray-100 rounded-lg p-6 mb-12 border-l-4 border-blue-800">
          <h3 className="text-xl font-bold text-blue-900 mb-4">
            Smart Credit Card Usage Tips
          </h3>
          <ul className="space-y-3 text-gray-800">
            <li className="flex items-start">
              <span className="mr-2 mt-1.5 h-1.5 w-1.5 bg-black rounded-full flex-shrink-0"></span>
              <span>Always pay your full balance before the due date to avoid interest charges.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1.5 h-1.5 w-1.5 bg-black rounded-full flex-shrink-0"></span>
              <span>Keep your credit utilization below 30% of your limit to maintain a good credit score.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1.5 h-1.5 w-1.5 bg-black rounded-full flex-shrink-0"></span>
              <span>Regularly review your statements to catch any unauthorized charges.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1.5 h-1.5 w-1.5 bg-black rounded-full flex-shrink-0"></span>
              <span>Take advantage of specific card benefits like 0% intro periods or cash back offers.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1.5 h-1.5 w-1.5 bg-black rounded-full flex-shrink-0"></span>
              <span>Never use your credit card for cash advances, as they typically incur high fees and interest rates.</span>
            </li>
          </ul>
        </div>

        {/* Banner Section */}
        <div className="bg-gradient-to-b from-[#4A6FA5] to-[#3B5C8D] rounded-xl p-6 text-center text-white shadow-lg relative overflow-hidden">
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-64 h-40 relative mb-4">
               <Image
                src="https://us.topfinanzas.com/wp-content/uploads/2025/04/credit-card-varity.png"
                alt="Credit Card Variety"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </div>
            
            <div className="flex items-center justify-center space-x-2 mb-2 text-yellow-400 font-bold text-lg">
              <Bell className="w-5 h-5 fill-current" />
              <span>Exclusive Offer!</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-extrabold mb-2 uppercase tracking-wide">
              NO ANNUAL FEE FOR LIFE
            </h3>
            
            <p className="text-blue-100 mb-6 max-w-md mx-auto">
              No opening or maintenance fees, fast approval, and exclusive benefits
            </p>
            
            <Link href="/financial-solutions/barclaycard-avios-plus" className="w-full max-w-xs">
              <Button className="w-full bg-white text-[#3B5C8D] hover:bg-gray-100 font-bold py-6 text-lg rounded-md uppercase">
                APPLY NOW
              </Button>
            </Link>
          </div>
        </div>

      </div>

      <CompactFooter />
    </main>
  );
}

export default function ChoosePerfectCardPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ChoosePerfectCardPageContent />
    </Suspense>
  );
}
