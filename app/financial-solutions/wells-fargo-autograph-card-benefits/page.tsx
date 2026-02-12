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
  title: "Wells Fargo Autograph Card benefits: Maximize your rewards",
  description:
    "Unlock the full potential of your everyday spending with rewards that match your lifestyle. No annual fee and 3x points on popular categories.",
};

export default function WellsFargoAutographBenefitsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <h1 className="text-3xl text-left md:text-4xl font-bold text-gray-800 mb-8 leading-8">
              Wells Fargo Autograph Card benefits:
              <br />
              Maximize your rewards
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
              Unlock the full potential of your everyday spending with rewards
              that match your lifestyle.
            </p>

            {/* Key Benefits List */}
            <div className="space-y-2 my-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#6C2156] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Earn 3x points on popular categories:
                  </span>{" "}
                  Dining, travel, and more.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#6C2156] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    No annual fee:
                  </span>{" "}
                  Enjoy rewards and perks without added costs.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#6C2156] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Cell phone protection:
                  </span>{" "}
                  Up to $600 against theft or damage.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#6C2156] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Intro APR on purchases:
                  </span>{" "}
                  0% APR for 12 months.
                </p>
              </div>
            </div>

            {/* CTA 1 */}
            <div className="text-left my-8">
              <Link
                href="/financial-solutions/wells-fargo-autograph-card-requirements"
                className="w-full"
              >
                <Button className="w-full px-8 py-2 text-md bg-[#6C2156] hover:bg-[#5a1b47] text-white font-medium rounded-full">
                  How it works
                </Button>
              </Link>
            </div>

            {/* Hero Image */}
            <div className="my-8">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/wells-fargo-autograph-card-benefits.webp"
                alt="Wells Fargo Autograph Card Benefits"
                width={900}
                height={507}
                className="w-full rounded-xl"
                priority={false}
                quality={85}
                sizes="(max-width: 768px) 100vw, 900px"
                containerClassName="w-full"
              />
            </div>

            {/* Key Section 1 */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Why the Wells Fargo Autograph Card stands out
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Every credit card has its strengths, but the Wells Fargo Autograph
              Card offers a unique combination of rewards, affordability, and
              versatility. Let's break down why this card could be the perfect
              fit for your wallet.
            </p>

            {/* Ad Unit: square04 */}
            <div
              id="square04"
              className="w-full flex justify-center my-6"
              data-topads
              data-topads-size="square"
            ></div>

            <hr className="my-8" />

            {/* Key Section 2 */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Rewarding everyday spending
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Most people use their credit cards for daily purchases, so why not
              earn rewards on what you're already spending? The Wells Fargo
              Autograph Card allows you to earn triple points on categories that
              are part of your regular routine:
            </p>
            <ul className="text-left text-gray-800 mb-4 text-md leading-5 font-light space-y-2 list-none">
              <li>
                <span className="font-bold">Dining Out:</span> From quick
                lunches to fancy dinners, earn 3x points every time you eat out.
              </li>
              <li>
                <span className="font-bold">Travel:</span> Book flights, hotels,
                and rental cars while earning rewards to fund your next
                adventure.
              </li>
              <li>
                <span className="font-bold">Streaming Services:</span> Stay
                entertained and rewarded by paying for Netflix, Hulu, or
                Spotify.
              </li>
            </ul>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              These categories add up fast, giving you the ability to rack up
              points quickly without having to adjust your spending habits.
            </p>

            {/* Key Section 3 */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Flexible and valuable redemptions
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Earning points is only half the equation; redeeming them
              effectively is where the real value lies. Wells Fargo allows you
              to redeem your points in multiple ways:
            </p>
            <ul className="text-left text-gray-800 mb-4 text-md leading-5 font-light space-y-2 list-none">
              <li>
                <span className="font-bold">Cash back:</span> Get a direct
                statement credit or transfer funds to your Wells Fargo bank
                account.
              </li>
              <li>
                <span className="font-bold">Travel rewards:</span> Book flights,
                hotels, and vacation packages through the Wells Fargo Rewards
                platform.
              </li>
              <li>
                <span className="font-bold">Gift cards:</span> Choose from a
                wide range of gift cards for dining, shopping, and
                entertainment.
              </li>
            </ul>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              This flexibility ensures that your points are always useful, no
              matter your goals.
            </p>

            {/* Key Section 4 */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Additional features
            </h2>

            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              Save with a Generous Introductory APR
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              One of the standout benefits of this card is its 0% APR on
              purchases for the first 12 months. This is perfect for:
            </p>
            <ul className="text-left text-gray-800 mb-4 text-md leading-5 font-light space-y-2 list-none">
              <li>
                <span className="font-bold">Large purchases:</span> Spread the
                cost of expensive items without worrying about interest.
              </li>
              <li>
                <span className="font-bold">Special occasions:</span> Plan
                weddings, vacations, or major life events with financial
                flexibility.
              </li>
            </ul>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              After the promotional period, the regular APR applies, but the
              initial savings can help you budget better.
            </p>

            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              Built-In Security and Protections
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Security is essential in any credit card, and Wells Fargo ensures
              your peace of mind with features like:
            </p>
            <ul className="text-left text-gray-800 mb-4 text-md leading-5 font-light space-y-2 list-none">
              <li>
                <span className="font-bold">Zero Liability Protection:</span>{" "}
                Protects you from unauthorized transactions.
              </li>
              <li>
                <span className="font-bold">Cell Phone Protection:</span> Pay
                your monthly phone bill with the card, and you'll receive up to
                $600 in coverage against theft or damage.
              </li>
            </ul>

            {/* Key Section 5 */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Who should consider this card?
            </h2>

            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              Ideal for reward seekers on a budget
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              If you're someone who values rewards but doesn't want to pay an
              annual fee, the Wells Fargo Autograph Card is an excellent choice.
              The lack of fees ensures that you're keeping every dollar you earn
              in rewards.
            </p>

            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              A perfect companion for travelers
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Travelers benefit from no foreign transaction fees and triple
              points on travel and dining. Whether you're exploring new
              destinations or just enjoying a night out, this card keeps your
              expenses low while maximizing rewards.
            </p>

            {/* Key Section 6 */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Your best option
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              The Wells Fargo Autograph Card delivers on its promise of
              rewarding everyday purchases without burdening you with extra
              costs. Its versatile redemption options, extensive reward
              categories, and practical protections make it a great addition to
              your wallet.
            </p>

            {/* Ad Unit: square03 */}
            <div
              id="square03"
              className="w-full flex justify-center my-6"
              data-topads
              data-topads-size="square"
            ></div>

            <div className="mt-8">
              <AIContentDisclaimer />
            </div>
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
