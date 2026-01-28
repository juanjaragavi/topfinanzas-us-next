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
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
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
            <p className="text-lg text-gray-800 mb-6">
              Your passport to unparalleled rewards and travel perks.
            </p>

            {/* Key Benefits List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#056CA8] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
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
                <p className="text-gray-700 text-lg">
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
                <p className="text-gray-700 text-lg">
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
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    No foreign transaction fees:
                  </span>{" "}
                  ideal for international travel.
                </p>
              </div>
            </div>

            {/* CTA 1 */}
            <div className="flex justify-center mb-8">
              <Link
                href="/financial-solutions/chase-sapphire-preferred-credit-card-requirements"
                className="w-full"
              >
                <Button className="w-full px-10 py-6 text-xl bg-[#056CA8] hover:bg-[#034d7a] text-white font-bold rounded-full shadow-md transition-all duration-200">
                  How it Works
                </Button>
              </Link>
            </div>

            {/* Split Section */}
            <div className="grid md:grid-cols-2 gap-0 mb-10 items-stretch h-full">
              {/* Left: Branding */}
              <div className="bg-[#056CA8] flex items-center justify-center p-8 min-h-[300px]">
                <p className="text-4xl font-bold text-white tracking-tight text-center leading-snug">
                  Chase Sapphire <br /> Preferred
                </p>
              </div>
              {/* Right: Image */}
              <div className="relative min-h-[300px] bg-gray-100">
                <ResponsiveImage
                  src="https://media.topfinanzas.com/images/chase-sapphire-preferred-credit-card-benefits.webp"
                  alt="Chase Sapphire Preferred Benefits"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

            {/* Why choose Chase Sapphire Preferred? */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Why choose Chase Sapphire Preferred?
            </h2>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              A rewarding dining and travel experience
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              Dining out becomes more delightful when you earn 3x points on
              every meal. Additionally, your adventures are rewarded with 2x
              points on travel purchases, making this card an essential
              companion for foodies and globetrotters.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Unbeatable sign-up bonus
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              Meeting the initial spending requirement unlocks 60,000 bonus
              points—equivalent to $750 in travel when redeemed through Chase
              Ultimate Rewards. This is one of the most competitive bonuses in
              the market, giving you a head start on your next vacation.
            </p>

            {/* Redeem points for maximum value */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Redeem points for maximum value
            </h2>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Maximize your points
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              Using Chase Ultimate Rewards, points can be redeemed for travel,
              cash back, or even gift cards. However, the real value lies in
              redeeming for travel, where points are worth 25% more.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Zero foreign transaction fees
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              Take your card abroad without worrying about extra charges,
              ensuring that every dollar you spend earns points.
            </p>

            {/* Exceptional travel perks */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Exceptional travel perks
            </h2>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Protection for your journey
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              Trip cancellation/interruption insurance: Rest easy knowing
              you&apos;re covered for unforeseen circumstances. Auto rental
              collision damage waiver: Save on costly rental insurance fees with
              built-in coverage.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Flexible reward transfer options
            </h3>
            <p className="text-gray-700 text-lg mb-8">
              Transfer points to leading airline and hotel loyalty programs for
              added flexibility and value.
            </p>

            {/* Your best option */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Your best option
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              The Chase Sapphire Preferred Credit Card is a versatile and
              rewarding choice for anyone who values dining and travel
              experiences. Its robust sign-up bonus, flexible reward system, and
              travel protections make it a top pick in its category.
            </p>

            {/* CTA 2 */}
            <div className="flex justify-center mb-8">
              <Link
                href="/financial-solutions/chase-sapphire-preferred-credit-card-requirements"
                className="w-full"
              >
                <Button className="w-full px-10 py-6 text-xl bg-[#056CA8] hover:bg-[#034d7a] text-white font-bold rounded-full shadow-md transition-all duration-200">
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
