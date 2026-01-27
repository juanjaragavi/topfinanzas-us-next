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
  title: "Capital One Venture X Rewards Credit Card Benefits",
  description:
    "Unlock luxury & rewards: Elevate every journey with exclusive perks, premium travel benefits, and accelerated rewards tailored for frequent travelers.",
};

export default function CapitalOneVentureXBenefitsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Capital One Venture X Rewards Credit Card Benefits
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
              Unlock luxury & rewards: Elevate every journey with exclusive
              perks, premium travel benefits, and accelerated rewards tailored
              for frequent travelers.
            </p>

            {/* Key Benefits List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#0A496C] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    Earn 2x miles on every purchase:
                  </span>{" "}
                  From flights to groceries, every dollar counts toward your
                  next luxury escape. With no cap on rewards, your earning
                  potential is limitless.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#0A496C] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    Annual $300 travel credit:
                  </span>{" "}
                  Offset travel expenses instantly with an annual statement
                  credit for bookings made through the Capital One travel
                  portal.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#0A496C] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    10,000 Bonus miles each year:
                  </span>{" "}
                  Enjoy a yearly bonus to jumpstart your travel plans, adding
                  extra value to your card membership.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#0A496C] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    Complimentary lounge access:
                  </span>{" "}
                  Relax in luxury with unlimited access to Capital One Lounges
                  and Priority Pass™ locations worldwide.
                </p>
              </div>
            </div>

            {/* CTA 1 */}
            <div className="flex justify-center mb-8">
              <Link
                href="/financial-solutions/capital-one-venture-x-rewards-credit-card-requirements"
                className="w-full"
              >
                <Button className="w-full px-10 py-6 text-xl bg-[#0A496C] hover:bg-[#073650] text-white font-bold rounded-full shadow-md transition-all duration-200">
                  How it works
                </Button>
              </Link>
            </div>

            {/* Featured Image */}
            <div className="mb-10 w-full rounded-xl overflow-hidden shadow-sm">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/capital-one-venture-x-rewards-credit-card-benefits.webp"
                alt="Capital One Venture X Rewards Credit Card Benefits"
                width={1200}
                height={675}
                priority
              />
            </div>

            {/* Unparalleled benefits for travelers */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Unparalleled benefits for travelers
            </h2>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Maximized earning potential
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              The Venture X card amplifies your earning power. Earn 10x miles on
              hotels and rental cars and 5x miles on flights booked through
              Capital One Travel. This tiered rewards structure ensures you’re
              rewarded most for travel-related spending while still earning
              generously on everyday purchases.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Elite status perks
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              Cardholders gain access to exclusive travel benefits, including
              complimentary lounge access, priority boarding, and concierge
              services. These perks elevate your travel experience, making every
              trip feel first-class.
            </p>

            {/* Banner 1 (Placeholder) */}
            <div className="my-10 w-full rounded-xl overflow-hidden shadow-sm">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/banner-1-Top-Blog-Debt-management.webp"
                alt="Debt Management"
                width={1200}
                height={400}
              />
            </div>

            {/* Designed for the adventurous */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Designed for the adventurous
            </h2>

            <p className="text-gray-700 text-lg mb-6">
              <span className="font-bold">Annual travel credits:</span> The $300
              annual travel credit can be used for any travel booked through
              Capital One Travel. Whether it’s a weekend getaway or a business
              trip, you’ll save instantly. This credit effectively offsets the
              card’s annual fee, ensuring you get maximum value.
            </p>
            <p className="text-gray-700 text-lg mb-6">
              <span className="font-bold">
                Peace of mind with travel protections:
              </span>{" "}
              Travel insurance, rental car collision damage waivers, and lost
              luggage reimbursement ensure you’re covered when plans go awry.
              These protections provide added security and confidence during
              your trips.
            </p>

            {/* A Card for the modern jetsetter */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              A Card for the modern jetsetter
            </h2>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              No foreign transaction fees
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              Save money while spending abroad with no hidden costs. Every
              transaction is straightforward, allowing you to focus on enjoying
              your travels without worrying about extra charges.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Flexible redemption options
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              Redeem miles your way, whether it’s for flights, hotels, or
              statement credits. The ability to choose how you use your rewards
              ensures the card adapts to your needs.
            </p>

            {/* Added features that stand out */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Added features that stand out
            </h2>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              24/7 Customer support
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              Enjoy access to round-the-clock customer support, ensuring your
              questions and concerns are addressed promptly, no matter where you
              are.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Streamlined digital tools
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              The Capital One mobile app offers seamless account management,
              allowing you to monitor transactions, redeem miles, and access
              benefits on the go.
            </p>

            {/* Conclusion */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              The best travel credit card
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              The Capital One Venture X Rewards Credit Card is ideal for those
              who want to elevate their travel experiences. With premium perks
              and substantial earning potential, this card ensures every journey
              is exceptional.
            </p>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
