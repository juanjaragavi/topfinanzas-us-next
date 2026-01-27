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
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
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

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <CheckCircle className="h-6 w-6 text-[#303A4D]" />
                </div>
                <p className="text-gray-700 text-lg">
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
                <p className="text-gray-700 text-lg">
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
                <p className="text-gray-700 text-lg">
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
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    Zero annual fee:
                  </span>{" "}
                  Keep all your rewards with no additional costs.
                </p>
              </div>
            </div>

            {/* CTA 1 */}
            <div className="flex justify-center mb-10">
              <Link
                href="/financial-solutions/titanium-rewards-visa-signature-credit-card-requirements"
                className="w-full md:w-auto"
              >
                <Button className="w-full md:w-auto px-12 py-6 text-xl bg-[#303A4D] hover:bg-[#252d3a] text-white font-bold rounded-full shadow-md transition-all duration-200">
                  How It Works
                </Button>
              </Link>
            </div>

            {/* Main Image */}
            <div className="mb-10 w-full rounded-xl overflow-hidden shadow-lg">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/titanium-rewards-visa-signature-credit-card-benefits.webp"
                alt="Titanium Rewards Visa Signature credit card benefits"
                width={1200}
                height={630}
                priority
              />
            </div>

            {/* Why choose the Titanium Rewards Visa Signature Card? */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Why choose the Titanium Rewards Visa Signature Card?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              The Titanium Rewards Visa Signature Credit Card is designed for
              those who want to earn more from their spending. Whether you’re
              refueling your car, stocking your pantry, or planning an
              international getaway, this card ensures every dollar works harder
              for you.
            </p>

            {/* Unbeatable rewards on everyday spending */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Unbeatable rewards on everyday spending
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Earning rewards shouldn’t be complicated. The Titanium Rewards
              Card offers:
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <CheckCircle className="h-6 w-6 text-[#303A4D]" />
                </div>
                <p className="text-gray-700 text-lg">
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
                <p className="text-gray-700 text-lg">
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
                <p className="text-gray-700 text-lg">
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

            {/* Banner 1 */}
            <div className="my-10 w-full rounded-xl overflow-hidden shadow-sm">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/banner-1-Top-Blog-Debt-management.webp"
                alt="Debt Management"
                width={1200}
                height={400}
              />
            </div>

            {/* Redeem points your way */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Redeem points your way
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Flexibility in rewards redemption is a key strength of the
              Titanium Rewards Visa Signature Card. Choose from a variety of
              options:
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <CheckCircle className="h-6 w-6 text-[#303A4D]" />
                </div>
                <p className="text-gray-700 text-lg">
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
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">Gift cards:</span>{" "}
                  Select from top brands in dining, shopping, and entertainment.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <CheckCircle className="h-6 w-6 text-[#303A4D]" />
                </div>
                <p className="text-gray-700 text-lg">
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Additional Features
            </h2>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              No foreign transaction fees
            </h3>
            <p className="text-lg text-gray-700 mb-8">
              For globetrotters, avoiding fees is a top priority. The Titanium
              Rewards Card eliminates foreign transaction fees, allowing you to
              use your card abroad without incurring extra charges. This is
              especially beneficial for frequent travelers who want to earn
              rewards on international spending.
            </p>

            {/* Banner 2 */}
            <div className="my-10 w-full rounded-xl overflow-hidden shadow-sm">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/banner-2-Top-Blog-Personal-loans.webp"
                alt="Personal Loans"
                width={1200}
                height={400}
              />
            </div>

            {/* Exclusive Visa Signature benefits */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Exclusive Visa Signature benefits
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Cardholders gain access to premium Visa Signature perks,
              including:
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <CheckCircle className="h-6 w-6 text-[#303A4D]" />
                </div>
                <p className="text-gray-700 text-lg">
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
                <p className="text-gray-700 text-lg">
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
                <p className="text-gray-700 text-lg">
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Who should get this card?
            </h2>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Ideal for families and frequent drivers
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              If your spending revolves around gas and groceries, the 5x and 3x
              reward categories make this card an excellent fit. Families and
              commuters will find the earning potential unmatched.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              A must-have for international travelers
            </h3>
            <p className="text-lg text-gray-700 mb-8">
              With no foreign transaction fees and travel-friendly rewards, this
              card is perfect for anyone who frequently travels abroad or plans
              their dream vacation.
            </p>

            {/* Banner 3 */}
            <div className="my-10 w-full rounded-xl overflow-hidden shadow-sm">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/banner-3-Top-Blog-Credit-Cards.webp"
                alt="Credit Cards"
                width={1200}
                height={400}
              />
            </div>

            {/* Your best option */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Your best option
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              The Titanium Rewards Visa Signature Credit Card is a powerhouse of
              rewards and benefits. Whether you’re earning 5x points on gas or
              enjoying exclusive Visa Signature perks, this card is tailored to
              enhance your financial journey.
            </p>

            {/* Final CTA */}
            <div className="flex justify-center mb-8">
              <Link
                href="/financial-solutions/titanium-rewards-visa-signature-credit-card-requirements"
                className="w-full md:w-auto"
              >
                <Button className="w-full md:w-auto px-12 py-6 text-xl bg-[#303A4D] hover:bg-[#252d3a] text-white font-bold rounded-full shadow-md transition-all duration-200">
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
