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
  title: "Chase Sapphire Preferred Credit Card Benefits",
  description:
    "Unlock exceptional travel rewards with the Chase Sapphire Preferred Credit Card. Earn 3x points on dining, enjoy a 60,000-point sign-up bonus, and travel with built-in protections.",
};

export default function ChaseSapphirePreferredBenefitsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <h1 className="text-3xl text-left md:text-4xl font-bold text-gray-800 mb-8 leading-8">
              Chase Sapphire Preferred Credit Card Benefits
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
              Your passport to unparalleled rewards and travel perks.
            </p>

            {/* Key Benefits List */}
            <div className="space-y-2 my-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#056CA8] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Earn 3x points on dining and 2x on travel:
                  </span>{" "}
                  get rewarded for meals and trips.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#056CA8] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Generous sign-up bonus:
                  </span>{" "}
                  60,000 points after qualifying spend.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#056CA8] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Travel protection perks:
                  </span>{" "}
                  trip cancellation and purchase protection included.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#056CA8] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    No foreign transaction fees:
                  </span>{" "}
                  ideal for international travel.
                </p>
              </div>
            </div>

            {/* CTA 1 */}
            <div className="text-left my-8">
              <Link
                href="/financial-solutions/chase-sapphire-preferred-credit-card-requirements"
                className="w-full"
              >
                <Button className="w-full px-8 py-2 text-md bg-[#056CA8] hover:bg-[#034d7a] text-white font-medium rounded-full">
                  How it Works
                </Button>
              </Link>
            </div>

            {/* Hero Image */}
            <div className="my-8">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/chase-sapphire-preferred-credit-card-benefits.webp"
                alt="Chase Sapphire Preferred Credit Card Benefits"
                width={900}
                height={507}
                className="w-full rounded-xl"
                priority={false}
                quality={85}
                sizes="(max-width: 768px) 100vw, 900px"
                containerClassName="w-full"
              />
            </div>

            {/* Why choose Chase Sapphire Preferred? */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Why choose Chase Sapphire Preferred?
            </h2>

            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              A rewarding dining and travel experience
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Dining out becomes more delightful when you earn 3x points on
              every meal. Additionally, your adventures are rewarded with 2x
              points on travel purchases, making this card an essential
              companion for foodies and globetrotters.
            </p>

            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              Unbeatable sign-up bonus
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Meeting the initial spending requirement unlocks 60,000 bonus
              points—equivalent to $750 in travel when redeemed through Chase
              Ultimate Rewards. This is one of the most competitive bonuses in
              the market, giving you a head start on your next vacation.
            </p>

            {/* Ad Unit: square04 */}
            <div
              id="square04"
              className="w-full flex justify-center my-6"
              data-topads
              data-topads-size="square"
            ></div>

            <hr className="my-8" />

            {/* Redeem points for maximum value */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Redeem points for maximum value
            </h2>

            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              Maximize your points
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Using Chase Ultimate Rewards, points can be redeemed for travel,
              cash back, or even gift cards. However, the real value lies in
              redeeming for travel, where points are worth 25% more.
            </p>

            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              Zero foreign transaction fees
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Take your card abroad without worrying about extra charges,
              ensuring that every dollar you spend earns points.
            </p>

            {/* Exceptional travel perks */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Exceptional travel perks
            </h2>

            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              Protection for your journey
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Trip cancellation/interruption insurance: Rest easy knowing
              you&apos;re covered for unforeseen circumstances. Auto rental
              collision damage waiver: Save on costly rental insurance fees with
              built-in coverage.
            </p>

            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              Flexible reward transfer options
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Transfer points to leading airline and hotel loyalty programs for
              added flexibility and value.
            </p>

            {/* Your best option */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Your best option
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              The Chase Sapphire Preferred Credit Card is a versatile and
              rewarding choice for anyone who values dining and travel
              experiences. Its robust sign-up bonus, flexible reward system, and
              travel protections make it a top pick in its category.
            </p>

            {/* CTA 2 */}
            <div className="text-left my-8">
              <Link
                href="/financial-solutions/chase-sapphire-preferred-credit-card-requirements"
                className="w-full"
              >
                <Button className="w-full px-8 py-2 text-md bg-[#056CA8] hover:bg-[#034d7a] text-white font-medium rounded-full">
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
