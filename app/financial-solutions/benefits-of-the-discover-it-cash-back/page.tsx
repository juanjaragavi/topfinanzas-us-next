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
  title: "Benefits of the Discover it® Cash Back: Smart rewards and savings",
  description:
    "The Discover it® Cash Back offers flexible rewards, 5% cash back in rotating categories, and no annual fee. Learn why it might be the perfect tool for you.",
};

export default function DiscoverItCashBackBenefitsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Benefits of the Discover it® Cash Back:
              <br />
              Smart rewards and savings
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
              The Discover it® Cash Back is a credit card designed to offer
              consumers flexible and high-value rewards. If you’re looking to
              maximize the return on your everyday purchases and enjoy an
              introductory interest-free period, this card might be the perfect
              tool for you. Below, we explore its key benefits and how it can
              help you optimize your finances.
            </p>

            {/* Key Benefits List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#A0465C] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">5% cash back </span>
                  in rotating categories (up to $1,500 quarterly).
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#A0465C] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    Cashback Match{" "}
                  </span>
                  doubles your first-year rewards.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#A0465C] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">0% intro APR </span>
                  for 15 months.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#A0465C] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    No annual fee{" "}
                  </span>
                  and accepted at 99% of U.S. merchants.
                </p>
              </div>
            </div>

            {/* CTA 1 */}
            <div className="flex justify-center mb-8">
              <Link
                href="/financial-solutions/requirements-to-qualify-for-the-discover-it-cash-back"
                className="w-full"
              >
                <Button className="w-full px-10 py-6 text-xl bg-[#A0465C] hover:bg-[#8e3e52] text-white font-bold rounded-full shadow-md transition-all duration-200">
                  How it works
                </Button>
              </Link>
            </div>

            {/* Split Section */}
            <div className="grid md:grid-cols-2 gap-0 mb-10 items-stretch h-full">
              {/* Left: Text Placeholder */}
              <div className="bg-[#FAEBEF] flex items-center justify-center p-8 min-h-[300px]">
                <p className="text-4xl font-bold text-gray-900 tracking-tight text-center">
                  Discover it®
                  <br />
                  Cash Back
                </p>
              </div>
              {/* Right: Image */}
              <div className="relative min-h-[300px]">
                <ResponsiveImage
                  src="https://media.topfinanzas.com/images/benefits-of-the-discover-it-cash-back.webp"
                  alt="Discover it® Cash Back Benefits"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

            {/* Detailed Content */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5% Cash Back in rotating categories
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              The Discover it® Cash Back rewards program lets you earn:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-lg mb-6">
              <li>
                <span className="font-bold">5% cash back</span> on purchases in
                specific categories that change each quarter. These categories
                often include popular places like Amazon.com, grocery stores,
                gas stations, and restaurants.
              </li>
              <li>
                This benefit applies to your first $1,500 in quarterly
                purchases, after which you’ll earn 1% cash back on all other
                purchases.
              </li>
            </ul>
            <p className="text-gray-700 text-lg mb-6">
              For example, during the fourth quarter of 2024, purchases made at
              Amazon.com and Target qualify for the 5% cash back. This makes it
              an excellent choice for holiday shopping and maximizing rewards.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Cashback match at the end of your first year
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              Discover offers a unique promotion for new cardholders called
              Cashback Match:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-lg mb-6">
              <li>
                At the end of your first year, Discover automatically matches
                all the cash back you’ve earned—with no limits.
              </li>
              <li>
                For example, if you’ve earned $200 in cash back, Discover will
                match it to total $400.
              </li>
            </ul>
            <p className="text-gray-700 text-lg mb-6">
              This benefit makes the Discover it® Cash Back stand out among
              no-annual-fee credit cards.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              0% Intro APR for 15 months
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              The card offers an introductory 0% APR for 15 months on:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-gray-700 text-lg mb-6">
              <li>Purchases made from the account opening date.</li>
              <li>
                Balance transfers initiated during the promotional period.
              </li>
            </ol>
            <p className="text-gray-700 text-lg mb-6">
              After the introductory period ends, a variable APR of 18.49% to
              27.49% applies, based on your creditworthiness.
            </p>
            <p className="text-gray-700 text-lg mb-6">
              This feature is perfect for financing significant purchases or
              consolidating existing debts without worrying about short-term
              interest.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              No annual fee and digital convenience
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              The Discover it® Cash Back has no annual fee, meaning you can
              enjoy its benefits without recurring costs. Additionally:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-lg mb-6">
              <li>
                You can start using your card digitally immediately after
                approval, even before receiving the physical card.
              </li>
              <li>
                It’s accepted at 99% of places nationwide that accept credit
                cards in the U.S.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Additional perks
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              The card includes extra features that enhance its value:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-lg mb-6">
              <li>
                <span className="font-bold">Online Privacy Protection:</span>{" "}
                Discover helps remove your personal information from select
                sites that sell data.
              </li>
              <li>
                <span className="font-bold">Freeze It®:</span> Instantly lock
                your card in case of loss or theft to prevent unauthorized
                transactions.
              </li>
              <li>
                <span className="font-bold">Free FICO® Score:</span> Monitor
                your credit score monthly without impacting your credit history.
              </li>
              <li>
                <span className="font-bold">
                  100% U.S.-based Customer Service:
                </span>{" "}
                Speak to real agents 24/7 for support.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Who is this card ideal for?
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              The Discover it® Cash Back is an excellent option for:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-gray-700 text-lg mb-6">
              <li>
                Strategic shoppers who adjust their spending to quarterly
                categories to maximize rewards.
              </li>
              <li>
                Holiday shoppers who frequently buy from Amazon.com and Target
                during the fourth quarter of the year.
              </li>
              <li>
                Individuals seeking a no-annual-fee card with a solid, adaptable
                rewards program.
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Why choose the Discover it® Cash Back?
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              With its 5% cash back program, unique Cashback Match offer, and no
              annual fee, the Discover it® Cash Back delivers unmatched value
              for those looking to maximize their rewards and save money.
            </p>
            <p className="text-gray-700 text-lg mb-6">
              If your goal is to make the most of your everyday purchases while
              earning straightforward, high-value rewards, this card can be a
              fantastic addition to your wallet.
            </p>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
