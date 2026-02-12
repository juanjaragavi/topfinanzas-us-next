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
            <h1 className="text-3xl text-left md:text-4xl font-bold text-gray-800 mb-8 leading-8">
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
            <p className="text-left text-lg text-gray-800 font-medium mb-8 leading-5">
              Unlock luxury & rewards: Elevate every journey with exclusive
              perks, premium travel benefits, and accelerated rewards tailored
              for frequent travelers.
            </p>

            {/* Key Benefits List */}
            <div className="space-y-2 my-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#0A496C] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
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
                <p className="text-left text-gray-800 text-md leading-5">
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
                <p className="text-left text-gray-800 text-md leading-5">
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
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Complimentary lounge access:
                  </span>{" "}
                  Relax in luxury with unlimited access to Capital One Lounges
                  and Priority Pass™ locations worldwide.
                </p>
              </div>
            </div>

            {/* CTA 1 */}
            <div className="text-left my-8">
              <Link
                href="/financial-solutions/capital-one-venture-x-rewards-credit-card-requirements"
                className="w-full"
              >
                <Button className="w-full px-8 py-2 text-md bg-[#0A496C] hover:bg-[#073650] text-white font-medium rounded-full">
                  How it works
                </Button>
              </Link>
            </div>

            {/* Featured Image */}
            <div className="mb-8 w-full rounded-xl overflow-hidden shadow-sm">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/capital-one-venture-x-rewards-credit-card-benefits.webp"
                alt="Capital One Venture X Rewards Credit Card Benefits"
                width={1200}
                height={675}
                priority
              />
            </div>

            {/* Unparalleled benefits for travelers */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Unparalleled benefits for travelers
            </h2>

            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              Maximized earning potential
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              The Venture X card amplifies your earning power. Earn 10x miles on
              hotels and rental cars and 5x miles on flights booked through
              Capital One Travel. This tiered rewards structure ensures you're
              rewarded most for travel-related spending while still earning
              generously on everyday purchases.
            </p>

            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              Elite status perks
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Cardholders gain access to exclusive travel benefits, including
              complimentary lounge access, priority boarding, and concierge
              services. These perks elevate your travel experience, making every
              trip feel first-class.
            </p>

            {/* Designed for the adventurous */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Designed for the adventurous
            </h2>

            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              <span className="font-bold">Annual travel credits:</span> The $300
              annual travel credit can be used for any travel booked through
              Capital One Travel. Whether it's a weekend getaway or a business
              trip, you'll save instantly. This credit effectively offsets the
              card's annual fee, ensuring you get maximum value.
            </p>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              <span className="font-bold">
                Peace of mind with travel protections:
              </span>{" "}
              Travel insurance, rental car collision damage waivers, and lost
              luggage reimbursement ensure you're covered when plans go awry.
              These protections provide added security and confidence during
              your trips.
            </p>

            {/* A Card for the modern jetsetter */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              A Card for the modern jetsetter
            </h2>

            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              No foreign transaction fees
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Save money while spending abroad with no hidden costs. Every
              transaction is straightforward, allowing you to focus on enjoying
              your travels without worrying about extra charges.
            </p>

            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              Flexible redemption options
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Redeem miles your way, whether it's for flights, hotels, or
              statement credits. The ability to choose how you use your rewards
              ensures the card adapts to your needs.
            </p>

            {/* Added features that stand out */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Added features that stand out
            </h2>

            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              24/7 Customer support
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Enjoy access to round-the-clock customer support, ensuring your
              questions and concerns are addressed promptly, no matter where you
              are.
            </p>

            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              Streamlined digital tools
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              The Capital One mobile app offers seamless account management,
              allowing you to monitor transactions, redeem miles, and access
              benefits on the go.
            </p>

            {/* Conclusion */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              The best travel credit card
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
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
