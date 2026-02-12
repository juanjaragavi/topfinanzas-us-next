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
            <h1 className="text-3xl text-left md:text-4xl font-bold text-gray-800 mb-8 leading-8">
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
            <p className="text-left text-lg text-gray-800 font-medium mb-8 leading-5">
              Say goodbye to late fees and hello to financial freedom.
            </p>

            {/* Key Benefits List */}
            <div className="space-y-2 my-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#07296B] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
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
                <p className="text-left text-gray-800 text-md leading-5">
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
                <p className="text-left text-gray-800 text-md leading-5">
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
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Simple, transparent terms:
                  </span>{" "}
                  Straightforward benefits without the fine print.
                </p>
              </div>
            </div>

            {/* CTA 1 */}
            <div className="text-left my-8">
              <Link
                href="/financial-solutions/citi-simplicity-card-requirements"
                className="w-full"
              >
                <Button className="w-full px-8 py-2 text-md bg-[#07296B] hover:bg-[#051e4d] text-white font-medium rounded-full">
                  How it Works
                </Button>
              </Link>
            </div>

            {/* Hero Image */}
            <div className="my-8">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/citi-simplicity-card-benefits.webp"
                alt="Citi Simplicity Card Benefits"
                width={900}
                height={507}
                className="w-full rounded-xl"
                priority={false}
                quality={85}
                sizes="(max-width: 768px) 100vw, 900px"
                containerClassName="w-full"
              />
            </div>

            {/* Why the Citi Simplicity Card stands out */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Why the Citi Simplicity Card stands out
            </h2>

            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              Perfect for balance transfers
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              If you're managing credit card debt, the Citi Simplicity Card
              offers one of the longest 0% intro APR periods in the industry.
              This feature provides breathing room to pay off your balance
              without accumulating interest.
            </p>

            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              Stress-Free payments
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Late payments can be costly and stressful. The Citi Simplicity
              Card eliminates late fees entirely, giving you peace of mind.
            </p>

            {/* How this card helps you save */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              How this card helps you save
            </h2>

            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              Zero annual fee
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Unlike many competitors, Citi Simplicity comes with no annual fee,
              maximizing your savings year after year.
            </p>

            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              No penalty APR
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Even if you miss a payment, your APR won't skyrocket—a rare
              feature among credit cards.
            </p>

            {/* When to consider the Citi Simplicity Card */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              When to consider the Citi Simplicity Card
            </h2>

            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              Ideal for debt consolidation
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              This card is a powerful tool for consolidating high-interest debt.
              Use its 0% intro APR period strategically to pay down balances and
              regain control of your finances.
            </p>

            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              Great for avoiding fees
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              If you prioritize simplicity and predictability, the lack of fees
              and penalties makes this card an excellent choice.
            </p>

            {/* The best option */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              The best option
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              The Citi Simplicity Card lives up to its name, offering
              transparent terms and valuable features like a lengthy 0% intro
              APR period and no late fees. It's perfect for anyone looking to
              manage debt or streamline their financial journey.
            </p>

            {/* CTA 2 */}
            <div className="text-left my-8">
              <Link
                href="/financial-solutions/citi-simplicity-card-requirements"
                className="w-full"
              >
                <Button className="w-full px-8 py-2 text-md bg-[#07296B] hover:bg-[#051e4d] text-white font-medium rounded-full">
                  How it Works
                </Button>
              </Link>
            </div>

            <hr className="my-8" />
            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
