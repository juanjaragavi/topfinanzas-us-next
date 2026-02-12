import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ResponsiveImage from "@/components/ui/responsive-image";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Titanium Rewards Visa Signature credit card benefits",
  description:
    "Turn your everyday expenses into extraordinary rewards with unmatched earning potential.",
};

export default function BenefitsTitaniumRewardsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <h1 className="text-3xl text-left md:text-4xl font-bold text-gray-800 mb-8 leading-8">
              Titanium Rewards Visa Signature credit card benefits
            </h1>

            {/* Ad Unit: square02 */}
            <div
              id="square02"
              className="w-full flex justify-center my-6"
              data-topads
              data-topads-size="square"
            ></div>

            {/* Intro */}
            <h4 className="text-xl font-bold text-gray-800 mb-4">
              Turn your everyday expenses into extraordinary rewards with
              unmatched earning potential.
            </h4>

            <div className="space-y-2 my-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <CheckCircle className="h-6 w-6 text-[#303A4D]" />
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Earn 5x points on key categories:
                  </span>{" "}
                  Gas, groceries, and more.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <CheckCircle className="h-6 w-6 text-[#303A4D]" />
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    No foreign transaction fees:
                  </span>{" "}
                  Travel abroad without extra costs.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <CheckCircle className="h-6 w-6 text-[#303A4D]" />
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Exclusive visa signature benefits:
                  </span>{" "}
                  Enjoy concierge services and travel perks.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <CheckCircle className="h-6 w-6 text-[#303A4D]" />
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Zero annual fee:
                  </span>{" "}
                  Keep all your rewards with no additional costs.
                </p>
              </div>
            </div>

            {/* CTA 1 */}
            <div className="flex justify-center mb-8">
              <Link
                href="/financial-solutions/titanium-rewards-visa-signature-credit-card-requirements"
                className="w-full md:w-auto"
              >
                <Button className="w-full md:w-auto px-8 py-2 text-md bg-[#303A4D] hover:bg-[#252d3a] text-white font-medium rounded-full">
                  How It Works
                </Button>
              </Link>
            </div>

            {/* Main Image */}
            <div className="mb-8 w-full rounded-xl overflow-hidden shadow-lg">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/titanium-rewards-visa-signature-credit-card-benefits.webp"
                alt="Titanium Rewards Visa Signature credit card benefits"
                width={1200}
                height={630}
                priority
              />
            </div>

            {/* Why choose the Titanium Rewards Visa Signature Card? */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Why choose the Titanium Rewards Visa Signature Card?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              The Titanium Rewards Visa Signature Credit Card is designed for
              those who want to earn more from their spending. Whether you're
              refueling your car, stocking your pantry, or planning an
              international getaway, this card ensures every dollar works harder
              for you.
            </p>

            {/* Unbeatable rewards on everyday spending */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Unbeatable rewards on everyday spending
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Earning rewards shouldn't be complicated. The Titanium Rewards
              Card offers:
            </p>

            <div className="space-y-2 my-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <CheckCircle className="h-6 w-6 text-[#303A4D]" />
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    5x points on gas:
                  </span>{" "}
                  Perfect for frequent drivers or road trip enthusiasts.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <CheckCircle className="h-6 w-6 text-[#303A4D]" />
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    3x points on groceries:
                  </span>{" "}
                  Turn your weekly grocery trips into rewarding experiences.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <CheckCircle className="h-6 w-6 text-[#303A4D]" />
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    1x points on everything else:
                  </span>{" "}
                  Earn points no matter where or how you spend.
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-700 mb-6">
              With no rotating categories or spending limits, you can enjoy
              consistent rewards throughout the year.
            </p>

            {/* Redeem points your way */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Redeem points your way
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Flexibility in rewards redemption is a key strength of the
              Titanium Rewards Visa Signature Card. Choose from a variety of
              options:
            </p>

            <div className="space-y-2 my-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <CheckCircle className="h-6 w-6 text-[#303A4D]" />
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Travel rewards:
                  </span>{" "}
                  Use your points for flights, hotels, and car rentals.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <CheckCircle className="h-6 w-6 text-[#303A4D]" />
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">Gift cards:</span>{" "}
                  Select from top brands in dining, shopping, and entertainment.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <CheckCircle className="h-6 w-6 text-[#303A4D]" />
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Statement credits:
                  </span>{" "}
                  Apply points directly to your card balance for effortless
                  savings.
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-700 mb-6">
              This versatility ensures your rewards align with your unique
              lifestyle.
            </p>

            {/* Additional Features */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Additional Features
            </h2>

            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              No foreign transaction fees
            </h3>
            <p className="text-lg text-gray-700 mb-8">
              For globetrotters, avoiding fees is a top priority. The Titanium
              Rewards Card eliminates foreign transaction fees, allowing you to
              use your card abroad without incurring extra charges. This is
              especially beneficial for frequent travelers who want to earn
              rewards on international spending.
            </p>

            {/* Exclusive Visa Signature benefits */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Exclusive Visa Signature benefits
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Cardholders gain access to premium Visa Signature perks,
              including:
            </p>

            <div className="space-y-2 my-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <CheckCircle className="h-6 w-6 text-[#303A4D]" />
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    24/7 Concierge services:
                  </span>{" "}
                  Get assistance with travel plans, dining reservations, or
                  event tickets.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <CheckCircle className="h-6 w-6 text-[#303A4D]" />
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Special offers:
                  </span>{" "}
                  Enjoy discounts and upgrades at luxury hotels and resorts.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <CheckCircle className="h-6 w-6 text-[#303A4D]" />
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Purchase protections:
                  </span>{" "}
                  Safeguard your purchases with extended warranties and return
                  guarantees.
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-700 mb-6">
              These benefits add significant value, making the card more than
              just a rewards tool.
            </p>

            {/* Who should get this card? */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Who should get this card?
            </h2>

            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              Ideal for families and frequent drivers
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              If your spending revolves around gas and groceries, the 5x and 3x
              reward categories make this card an excellent fit. Families and
              commuters will find the earning potential unmatched.
            </p>

            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              A must-have for international travelers
            </h3>
            <p className="text-lg text-gray-700 mb-8">
              With no foreign transaction fees and travel-friendly rewards, this
              card is perfect for anyone who frequently travels abroad or plans
              their dream vacation.
            </p>

            {/* Your best option */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Your best option
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              The Titanium Rewards Visa Signature Credit Card is a powerhouse of
              rewards and benefits. Whether you're earning 5x points on gas or
              enjoying exclusive Visa Signature perks, this card is tailored to
              enhance your financial journey.
            </p>

            {/* Final CTA */}
            <div className="text-left my-8">
              <Link
                href="/financial-solutions/titanium-rewards-visa-signature-credit-card-requirements"
                className="w-full md:w-auto"
              >
                <Button className="w-full md:w-auto px-8 py-2 text-md bg-[#303A4D] hover:bg-[#252d3a] text-white font-medium rounded-full">
                  How It Works
                </Button>
              </Link>
            </div>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
