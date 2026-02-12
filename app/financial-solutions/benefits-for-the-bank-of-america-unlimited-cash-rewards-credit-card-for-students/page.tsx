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
  title:
    "Benefits for the Bank of America® Unlimited Cash Rewards Credit Card for Students",
  description:
    "The Bank of America® Unlimited Cash Rewards Credit Card for Students is the ultimate tool for those looking to earn while they spend.",
};

export default function BankOfAmericaStudentCardBenefitsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <h1 className="text-3xl text-left md:text-4xl font-bold text-gray-800 mb-8 leading-8">
              Benefits for the Bank of America® Unlimited Cash Rewards Credit
              Card for Students
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
              The Bank of America® Unlimited Cash Rewards Credit Card for
              Students is the ultimate tool for those looking to earn while they
              spend.
            </p>

            {/* Key Benefits List */}
            <div className="space-y-2 my-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#96979A] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Unlimited 1.5% cash back on all purchases:
                  </span>{" "}
                  Earn as you spend with no caps or restrictions.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#96979A] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    No annual fee:
                  </span>{" "}
                  Enjoy premium benefits without the added cost.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#96979A] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Introductory APR offer:
                  </span>{" "}
                  Save on interest with a generous introductory rate.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#96979A] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Enhanced rewards for preferred members:
                  </span>{" "}
                  Boost your cashback rate by up to 25%.
                </p>
              </div>
            </div>

            {/* CTA 1 */}
            <div className="text-left my-8">
              <Link
                href="/financial-solutions/requirements-for-the-bank-of-america-unlimited-cash-rewards-credit-card-for-students"
                className="w-full"
              >
                <Button className="w-full px-8 py-2 text-md bg-[#96979A] hover:bg-[#7d7e81] text-white font-medium rounded-full">
                  How it works
                </Button>
              </Link>
            </div>

            {/* Hero Image */}
            <div className="my-8">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/benefits-for-the-bank-of-america-unlimited-cash-rewards-credit-card-for-students.webp"
                alt="Benefits for the Bank of America® Unlimited Cash Rewards Credit Card for Students"
                width={900}
                height={507}
                className="w-full rounded-xl"
                priority={false}
                quality={85}
                sizes="(max-width: 768px) 100vw, 900px"
                containerClassName="w-full"
              />
            </div>

            {/* Uncomplicated cash back */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Uncomplicated cash back
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              No need to track categories or spending limits. Every purchase
              earns 1.5% cashback, making it easy to maximize your rewards.
            </p>

            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              Everyday spending made rewarding
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              From coffee runs to tuition payments, your daily expenses
              contribute to your growing cashback balance.
            </p>

            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              Flexible redemption options
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Redeem your rewards for statement credits, direct deposits, or
              gift cards. The choice is yours.
            </p>

            {/* Cost-effective for students */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Cost-effective for students
            </h2>

            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              No annual fee
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              This card's fee-free structure makes it a budget-friendly option
              for students.
            </p>

            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              Introductory APR
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Take advantage of the low introductory APR to manage expenses more
              effectively.
            </p>

            {/* Additional benefits */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Additional benefits
            </h2>
            <div className="space-y-2 my-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#96979A] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Preferred rewards program:
                  </span>{" "}
                  Bank of America customers can enjoy enhanced cashback rates.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#96979A] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Financial education tools:
                  </span>{" "}
                  Access resources designed to help students build healthy
                  financial habits.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#96979A] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Security features:
                  </span>{" "}
                  Includes zero liability for unauthorized transactions and
                  advanced fraud monitoring.
                </p>
              </div>
            </div>

            {/* Building credit responsibly */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Building credit responsibly
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              This card helps students establish a strong credit history while
              offering a safety net with robust fraud protection and account
              monitoring features.
            </p>

            {/* Who is this card ideal for? */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Who is this card ideal for?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              This card is best suited for students who want simplicity and
              consistent rewards. It's perfect for those who value flexibility
              and want a straightforward way to earn cashback on all purchases.
            </p>

            {/* Closing thoughts */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Closing thoughts
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              The Bank of America® Unlimited Cash Rewards Credit Card for
              Students is a reliable, straightforward option for students eager
              to earn cash back on their everyday purchases.
            </p>

            <div className="text-left my-8">
              <Link
                href="/financial-solutions/requirements-for-the-bank-of-america-unlimited-cash-rewards-credit-card-for-students"
                className="w-full md:w-auto"
              >
                <Button className="w-full md:w-auto px-8 py-2 text-md bg-[#96979A] hover:bg-[#7d7e81] text-white font-medium rounded-full">
                  How it works
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
