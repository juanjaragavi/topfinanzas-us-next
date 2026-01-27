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
    "Benefits for the Bank of America® Travel Rewards Credit Card for Students",
  description:
    "The Bank of America® Travel Rewards Credit Card for Students is designed for young adventurers looking to make the most of their travel experiences.",
};

export default function BankOfAmericaStudentTravelCardBenefitsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Benefits for the Bank of America® Travel Rewards Credit Card for
              Students
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
              The Bank of America® Travel Rewards Credit Card for Students is
              designed for young adventurers looking to make the most of their
              travel experiences.
            </p>

            {/* Key Benefits List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#14377D] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    Unlimited 1.5 points per dollar on all purchases:
                  </span>{" "}
                  Earn travel rewards with every swipe.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#14377D] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    No foreign transaction fees:
                  </span>{" "}
                  Perfect for international students and travelers.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#14377D] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    Introductory APR offer:
                  </span>{" "}
                  Save money with a low introductory interest rate.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#14377D] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    Flexible redemption options:
                  </span>{" "}
                  Use points for travel expenses, including flights, hotels, and
                  car rentals.
                </p>
              </div>
            </div>

            {/* CTA 1 */}
            <div className="flex justify-center mb-8">
              <Link
                href="/financial-solutions/requirements-for-the-bank-of-america-travel-rewards-credit-card-for-students"
                className="w-full"
              >
                <Button className="w-full px-10 py-6 text-xl bg-[#14377D] hover:bg-[#0f2c68] text-white font-bold rounded-full shadow-md transition-all duration-200">
                  How it works
                </Button>
              </Link>
            </div>

            {/* Split Section */}
            <div className="grid md:grid-cols-2 gap-0 mb-10 items-stretch h-full">
              {/* Left: Brand Name */}
              <div className="bg-gray-100 flex items-center justify-center p-8 min-h-[300px]">
                <p className="text-2xl font-bold text-gray-900 tracking-tight text-center">
                  Bank of America
                </p>
              </div>
              {/* Right: Image */}
              <div className="relative min-h-[300px]">
                <ResponsiveImage
                  src="https://media.topfinanzas.com/images/benefits-for-the-bank-of-america-travel-rewards-credit-card-for-students.webp"
                  alt="Benefits for the Bank of America® Travel Rewards Credit Card for Students"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

            {/* Earning points on every purchase */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Earning points on every purchase
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              No need to worry about category restrictions. With this card,
              every purchase earns 1.5 points per dollar spent, allowing you to
              accumulate rewards effortlessly.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Maximizing everyday spending
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              From buying textbooks to booking trips home, every transaction
              contributes to your travel fund. It’s a seamless way to turn daily
              expenses into extraordinary experiences.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Travel-specific redemption
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Points can be redeemed for various travel-related expenses,
              including airfare, hotels, and car rentals. The flexibility
              ensures you can plan your adventures your way.
            </p>

            {/* Affordable travel for students */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Affordable travel for students
            </h2>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              No annual fee
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              This card’s no-annual-fee structure ensures students can enjoy
              benefits without the burden of extra costs.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Introductory APR
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              The low introductory APR makes it easier to manage expenses and
              plan trips without immediate financial strain.
            </p>

            {/* Perfect for international use */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Perfect for international use
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              With no foreign transaction fees, you can make purchases abroad
              without worrying about hidden charges. This feature is
              particularly useful for students studying or traveling overseas.
            </p>

            {/* Building credit history */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Building credit history
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              As a student, building a solid credit history is crucial. This
              card provides an excellent opportunity to establish and maintain
              good credit while enjoying perks.
            </p>

            {/* Additional perks */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Additional perks
            </h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#14377D] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    Travel Protections:
                  </span>{" "}
                  Includes coverage for trip cancellations and delays.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#14377D] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    Customer support:
                  </span>{" "}
                  24/7 access to assistance for travel-related issues.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#14377D] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    Access to financial tools:
                  </span>{" "}
                  Helps students learn and manage their finances effectively.
                </p>
              </div>
            </div>

            {/* Who is this card ideal for? */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Who is this card ideal for?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              This card is perfect for students who have a passion for travel
              and want to start building financial responsibility. Its
              flexibility and cost-effectiveness make it an excellent first
              credit card for young explorers.
            </p>

            {/* Closing thoughts */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Closing thoughts
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              The Bank of America® Travel Rewards Credit Card for Students is a
              smart choice for students who want to travel while staying
              financially savvy. It’s more than a card; it’s your passport to
              rewarding adventures.
            </p>

            <div className="flex justify-center mb-8">
              <Link
                href="/financial-solutions/requirements-for-the-bank-of-america-travel-rewards-credit-card-for-students"
                className="w-full md:w-auto"
              >
                <Button className="w-full md:w-auto px-10 py-6 text-xl bg-[#14377D] hover:bg-[#0f2c68] text-white font-bold rounded-full shadow-lg transition-all duration-200 transform hover:scale-105">
                  How it works
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
