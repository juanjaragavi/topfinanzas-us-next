import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ResponsiveImage from "@/components/ui/responsive-image";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Citi Simplicity Card Benefits",
  description:
    "Say goodbye to late fees and hello to financial freedom. The Citi Simplicity Card offers no late fees, no annual fee, and a lengthy 0% intro APR period.",
};

export default function CitiSimplicityCardBenefitsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Citi Simplicity Card Benefits
            </h1>

            {/* Ad Unit: square02 */}
            <div
              id="square02"
              className="w-full flex justify-center my-6"
              data-topads
              data-topads-size="square"
            ></div>

            {/* Intro */}
            <p className="text-lg text-gray-800 mb-6">
              Say goodbye to late fees and hello to financial freedom.
            </p>

            {/* Key Benefits List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#07296B] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    No late fees, ever:
                  </span>{" "}
                  Forget about unexpected penalties.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#07296B] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    Lengthy 0% intro APR period:
                  </span>{" "}
                  Enjoy 0% APR for 21 months.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#07296B] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    No annual fee:
                  </span>{" "}
                  Save more with no yearly cost.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#07296B] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    Simple, transparent terms:
                  </span>{" "}
                  Straightforward benefits without the fine print.
                </p>
              </div>
            </div>

            {/* CTA 1 */}
            <div className="flex justify-center mb-8">
              <Link
                href="/financial-solutions/citi-simplicity-card-requirements"
                className="w-full"
              >
                <Button className="w-full px-10 py-6 text-xl bg-[#07296B] hover:bg-[#051e4d] text-white font-bold rounded-full shadow-md transition-all duration-200">
                  How it Works
                </Button>
              </Link>
            </div>

            {/* Split Section */}
            <div className="grid md:grid-cols-2 gap-0 mb-10 items-stretch h-full">
              {/* Left: Branding */}
              <div className="bg-[#07296B] flex items-center justify-center p-8 min-h-[300px]">
                <p className="text-4xl font-bold text-white tracking-tight text-center">
                  Citi Simplicity <br /> Card
                </p>
              </div>
              {/* Right: Image */}
              <div className="relative min-h-[300px] bg-gray-100">
                <ResponsiveImage
                  src="https://media.topfinanzas.com/images/citi-simplicity-card-benefits.webp"
                  alt="Citi Simplicity Card Benefits"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

            {/* Why the Citi Simplicity Card stands out */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Why the Citi Simplicity Card stands out
            </h2>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Perfect for balance transfers
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              If you’re managing credit card debt, the Citi Simplicity Card
              offers one of the longest 0% intro APR periods in the industry.
              This feature provides breathing room to pay off your balance
              without accumulating interest.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Stress-Free payments
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              Late payments can be costly and stressful. The Citi Simplicity
              Card eliminates late fees entirely, giving you peace of mind.
            </p>

            {/* How this card helps you save */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              How this card helps you save
            </h2>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Zero annual fee
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              Unlike many competitors, Citi Simplicity comes with no annual fee,
              maximizing your savings year after year.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              No penalty APR
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              Even if you miss a payment, your APR won’t skyrocket—a rare
              feature among credit cards.
            </p>

            {/* When to consider the Citi Simplicity Card */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              When to consider the Citi Simplicity Card
            </h2>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Ideal for debt consolidation
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              This card is a powerful tool for consolidating high-interest debt.
              Use its 0% intro APR period strategically to pay down balances and
              regain control of your finances.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Great for avoiding fees
            </h3>
            <p className="text-gray-700 text-lg mb-8">
              If you prioritize simplicity and predictability, the lack of fees
              and penalties makes this card an excellent choice.
            </p>

            {/* The best option */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              The best option
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              The Citi Simplicity Card lives up to its name, offering
              transparent terms and valuable features like a lengthy 0% intro
              APR period and no late fees. It’s perfect for anyone looking to
              manage debt or streamline their financial journey.
            </p>

            {/* CTA 2 */}
            <div className="flex justify-center mb-8">
              <Link
                href="/financial-solutions/citi-simplicity-card-requirements"
                className="w-full"
              >
                <Button className="w-full px-10 py-6 text-xl bg-[#07296B] hover:bg-[#051e4d] text-white font-bold rounded-full shadow-md transition-all duration-200">
                  How it Works
                </Button>
              </Link>
            </div>

            <hr className="my-12 border-gray-200" />
            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
