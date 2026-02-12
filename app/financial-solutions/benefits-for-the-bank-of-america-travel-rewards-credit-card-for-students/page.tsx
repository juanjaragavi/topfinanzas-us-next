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
            <h1 className="text-3xl text-left md:text-4xl font-bold text-gray-800 mb-8 leading-8">
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
            <p className="text-left text-lg text-gray-800 font-medium mb-8 leading-5">
              The Bank of America® Travel Rewards Credit Card for Students is
              designed for young adventurers looking to make the most of their
              travel experiences.
            </p>

            {/* Key Benefits List */}
            <div className="space-y-2 my-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#14377D] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
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
                <p className="text-left text-gray-800 text-md leading-5">
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
                <p className="text-left text-gray-800 text-md leading-5">
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
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Flexible redemption options:
                  </span>{" "}
                  Use points for travel expenses, including flights, hotels, and
                  car rentals.
                </p>
              </div>
            </div>

            {/* CTA 1 */}
            <div className="text-left my-8">
              <Link
                href="/financial-solutions/requirements-for-the-bank-of-america-travel-rewards-credit-card-for-students"
                className="w-full"
              >
                <Button className="w-full px-8 py-2 text-md bg-[#14377D] hover:bg-[#0f2c68] text-white font-medium rounded-full">
                  How it works
                </Button>
              </Link>
            </div>

            {/* Hero Image */}
            <div className="my-8">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/benefits-for-the-bank-of-america-travel-rewards-credit-card-for-students.webp"
                alt="Benefits for the Bank of America® Travel Rewards Credit Card for Students"
                width={900}
                height={507}
                className="w-full rounded-xl"
                priority={false}
                quality={85}
                sizes="(max-width: 768px) 100vw, 900px"
                containerClassName="w-full"
              />
            </div>

            {/* Earning points on every purchase */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Earning points on every purchase
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              No need to worry about category restrictions. With this card,
              every purchase earns 1.5 points per dollar spent, allowing you to
              accumulate rewards effortlessly.
            </p>

            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              Maximizing everyday spending
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              From buying textbooks to booking trips home, every transaction
              contributes to your travel fund. It's a seamless way to turn daily
              expenses into extraordinary experiences.
            </p>

            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              Travel-specific redemption
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Points can be redeemed for various travel-related expenses,
              including airfare, hotels, and car rentals. The flexibility
              ensures you can plan your adventures your way.
            </p>

            {/* Affordable travel for students */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Affordable travel for students
            </h2>

            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              No annual fee
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              This card's no-annual-fee structure ensures students can enjoy
              benefits without the burden of extra costs.
            </p>

            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              Introductory APR
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              The low introductory APR makes it easier to manage expenses and
              plan trips without immediate financial strain.
            </p>

            {/* Perfect for international use */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Perfect for international use
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              With no foreign transaction fees, you can make purchases abroad
              without worrying about hidden charges. This feature is
              particularly useful for students studying or traveling overseas.
            </p>

            {/* Building credit history */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Building credit history
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              As a student, building a solid credit history is crucial. This
              card provides an excellent opportunity to establish and maintain
              good credit while enjoying perks.
            </p>

            {/* Additional perks */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Additional perks
            </h2>
            <div className="space-y-2 my-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#14377D] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
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
                <p className="text-left text-gray-800 text-md leading-5">
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
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Access to financial tools:
                  </span>{" "}
                  Helps students learn and manage their finances effectively.
                </p>
              </div>
            </div>

            {/* Who is this card ideal for? */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Who is this card ideal for?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              This card is perfect for students who have a passion for travel
              and want to start building financial responsibility. Its
              flexibility and cost-effectiveness make it an excellent first
              credit card for young explorers.
            </p>

            {/* Closing thoughts */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Closing thoughts
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              The Bank of America® Travel Rewards Credit Card for Students is a
              smart choice for students who want to travel while staying
              financially savvy. It's more than a card; it's your passport to
              rewarding adventures.
            </p>

            <div className="text-left my-8">
              <Link
                href="/financial-solutions/requirements-for-the-bank-of-america-travel-rewards-credit-card-for-students"
                className="w-full md:w-auto"
              >
                <Button className="w-full md:w-auto px-8 py-2 text-md bg-[#14377D] hover:bg-[#0f2c68] text-white font-medium rounded-full">
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
