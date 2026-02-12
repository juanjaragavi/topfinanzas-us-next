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
  title: "Benefits of the Discover it Student Cash Back Card",
  description:
    "The Discover it Student Cash Back Card is tailor-made for students who want to build credit and earn rewards simultaneously. Packed with features, it's the ideal companion for college life.",
};

export default function BenefitsDiscoverItStudentCashBackPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <h1 className="text-3xl text-left md:text-4xl font-bold text-gray-800 mb-8 leading-8">
              Benefits of the Discover it Student Cash Back Card
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
              The Discover it Student Cash Back Card is tailor-made for students
              who want to build credit and earn rewards simultaneously. Packed
              with features, it's the ideal companion for college life.
            </p>

            {/* Key Benefits List */}
            <div className="space-y-2 my-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#A8B0D7] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">5% Cash Back:</span>{" "}
                  Earn on rotating categories like gas, groceries, and Amazon.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#A8B0D7] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Unlimited cashback match:
                  </span>{" "}
                  Double your rewards in the first year.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#A8B0D7] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    No annual fee:
                  </span>{" "}
                  Keep more money in your pocket.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#A8B0D7] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Free credit monitoring:
                  </span>{" "}
                  Stay informed about your credit score.
                </p>
              </div>
            </div>

            {/* CTA 1 */}
            <div className="text-left my-8">
              <Link
                href="/financial-solutions/requirements-for-the-discover-it-student-cash-back-card"
                className="w-full"
              >
                <Button className="w-full px-8 py-2 text-md bg-[#A8B0D7] hover:bg-[#8e96bf] text-white font-medium rounded-full">
                  How it works
                </Button>
              </Link>
            </div>

            {/* Featured Image */}
            <div className="mb-8 w-full rounded-xl overflow-hidden shadow-sm">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/benefits-of-the-discover-it-student-cash-back-card.webp"
                alt="Benefits of the Discover it Student Cash Back Card"
                width={1200}
                height={675}
                priority
              />
            </div>

            {/* Maximize rewards with 5% Cash Back */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Maximize rewards with 5% Cash Back
            </h2>

            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Students can enjoy 5% cash back on everyday purchases in quarterly
              rotating categories. From dining to online shopping, you'll save
              on the things that matter most.
            </p>

            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              <span className="font-bold">Simplicity and savings:</span>{" "}
              Activate categories with ease and start earning rewards
              immediately. Every dollar spent takes you closer to a financial
              cushion.
            </p>

            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              <span className="font-bold">Practical examples of savings:</span>{" "}
              Imagine earning rewards on your textbook purchases or during
              holiday shopping. These perks add up, making a noticeable
              difference over time.
            </p>

            {/* First-year bonus: Unlimited cashback match */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              First-year bonus: Unlimited cashback match
            </h2>

            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Discover doubles all the cash back you've earned at the end of
              your first year, making it one of the most rewarding student cards
              on the market.
            </p>

            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              Maximizing rewards for students
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              By pairing everyday spending with cash-back bonuses, students can
              enjoy savings on everything from essentials to entertainment.
            </p>

            {/* A fee-free experience */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              A fee-free experience
            </h2>

            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              No annual fee means you can focus on building credit without the
              burden of additional costs. It's a student-friendly option for
              anyone looking to start their financial journey.
            </p>

            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              Focus on growth, not fees
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              With no hidden charges, students can concentrate on developing
              responsible financial habits.
            </p>

            {/* Free access to credit insights */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Free access to credit insights
            </h2>

            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              With free FICO credit score monitoring, you can track your
              progress and make informed financial decisions. Knowledge is
              power, and this feature ensures you're always in the know.
            </p>

            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              Staying ahead in credit building
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              The insights provided equip students to proactively manage their
              credit, avoiding pitfalls that could hinder future opportunities.
            </p>

            {/* The perfect partner for students */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              The perfect partner for students
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              The Discover it Student Cash Back Card combines rewards, savings,
              and tools to help students succeed financially.
            </p>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
