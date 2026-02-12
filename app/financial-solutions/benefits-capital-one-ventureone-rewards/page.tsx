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
  title: "Benefits: VentureOne Rewards from Capital One",
  description:
    "Unlock simplicity & travel rewards: The Capital One VentureOne Card offers hassle-free perks with no annual fee—perfect for stress-free adventures!",
};

export default function BenefitsCapitalOneVentureOnePage() {
  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <h1 className="text-3xl text-left md:text-4xl font-bold text-gray-800 mb-8 leading-8">
              Benefits: VentureOne Rewards from Capital One
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
              Unlock simplicity & travel rewards: The Capital One VentureOne
              Card offers hassle-free perks with no annual fee—perfect for
              stress-free adventures!
            </p>

            {/* Key Benefits List */}
            <div className="space-y-2 my-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#19263A] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Earn 1.25x miles on every purchase:
                  </span>{" "}
                  Accumulate unlimited miles for every dollar spent, making
                  everyday purchases a pathway to your next adventure.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#19263A] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    No annual fee:
                  </span>{" "}
                  Enjoy all the benefits without worrying about recurring
                  charges eating into your savings.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#19263A] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    0% Introductory APR on purchases:
                  </span>{" "}
                  Take advantage of interest-free purchases for a set period.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#19263A] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Travel perks galore:
                  </span>{" "}
                  Redeem miles flexibly for flights, hotels, or travel expenses
                  with no blackout dates.
                </p>
              </div>
            </div>

            {/* CTA 1 */}
            <div className="text-left my-8">
              <Link
                href="/financial-solutions/requirements-for-capital-one-ventureone-rewards-credit-card"
                className="w-full"
              >
                <Button className="w-full px-8 py-2 text-md bg-[#19263A] hover:bg-[#111a28] text-white font-medium rounded-full">
                  How it works
                </Button>
              </Link>
            </div>

            {/* Featured Image */}
            <div className="mb-8 w-full rounded-xl overflow-hidden shadow-sm">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/benefits-capital-one-ventureone-rewards.webp"
                alt="Benefits: VentureOne Rewards from Capital One"
                width={1200}
                height={675}
                priority
              />
            </div>

            {/* Why choose the VentureOne Rewards Card? */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Why choose the VentureOne Rewards Card?
            </h2>

            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              Simplicity with every swipe
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              The VentureOne Rewards Card removes the guesswork. Whether you're
              grocery shopping or booking your next vacation, every dollar earns
              miles. You'll never need to worry about spending categories or
              limits.
            </p>

            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              Flexibility for the modern traveler
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Miles can be redeemed through the Capital One travel portal or as
              statement credits for past travel purchases. With no foreign
              transaction fees, this card ensures you'll save whether you're
              exploring locally or abroad.
            </p>

            {/* Designed for the budget-conscious explorer */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Designed for the budget-conscious explorer
            </h2>

            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              <span className="font-bold">No annual fee, no stress:</span> Many
              travel cards require annual fees, which can be a deterrent for
              casual travelers. The VentureOne Rewards Card offers premium
              benefits without the extra cost.
            </p>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              <span className="font-bold">
                Introductory APR for big purchases:
              </span>{" "}
              Planning a major expense? The 0% APR on purchases makes it easier
              to spread out payments without accruing interest.
            </p>

            {/* Making the most of your miles */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Making the most of your miles
            </h2>

            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              Partner airlines and hotels
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Capital One's travel partners expand your options, offering
              greater value when transferring miles to loyalty programs.
            </p>

            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              Booking made easy
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Use the Capital One travel portal for seamless booking experiences
              with competitive pricing.
            </p>

            {/* Your best option */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Your best option
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              For those who prioritize simplicity and value, the Capital One
              VentureOne Rewards Credit Card delivers. Earn, save, and
              travel—all with a card designed to fit your lifestyle.
            </p>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
