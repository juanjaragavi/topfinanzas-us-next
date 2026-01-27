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
  title: "Ink Business Unlimited Credit Card Benefits",
  description:
    "With no annual fee and unlimited 1.5% cash back, Ink Business Unlimited is an essential tool for scaling your business.",
};

export default function InkBusinessUnlimitedBenefitsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Ink Business Unlimited Credit Card Benefits
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
              With no annual fee and unlimited 1.5% cash back, it’s an essential
              tool for scaling your business.
            </p>

            {/* Key Benefits List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#3F444B] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    Unlimited cash back rewards:
                  </span>{" "}
                  Earn 1.5% cash back on every purchase, with no limits.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#3F444B] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    Sign-up bonus:
                  </span>{" "}
                  Get $900 cash back after spending $6,000 in the first three
                  months.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#3F444B] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    Business-focused tools:
                  </span>{" "}
                  Employee cards, customizable spending limits, and expense
                  tracking.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#3F444B] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    Travel and purchase protection:
                  </span>{" "}
                  Robust insurance coverage and travel perks.
                </p>
              </div>
            </div>

            {/* CTA 1 */}
            <div className="flex justify-center mb-8">
              <Link
                href="/financial-solutions/ink-business-unlimited-credit-card-requirements"
                className="w-full"
              >
                <Button className="w-full px-10 py-6 text-xl bg-[#3F444B] hover:bg-[#2c2f34] text-white font-bold rounded-full shadow-md transition-all duration-200">
                  How it works
                </Button>
              </Link>
            </div>

            {/* Featured Image */}
            <div className="mb-10 w-full rounded-xl overflow-hidden shadow-sm">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/ink-business-unlimited-credit-card-benefits.webp"
                alt="Ink Business Unlimited Credit Card Benefits"
                width={1200}
                height={675}
                priority
              />
            </div>

            {/* Rewarding every business expense */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Rewarding every business expense
            </h2>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Unlimited cash back
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              From office supplies to client dinners, earn unlimited 1.5% cash
              back on all purchases. Unlike tiered cards, there are no
              restrictions or rotating categories.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Generous sign-up bonus
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              Spend $6,000 in the first three months and enjoy $900 cash back.
              It’s a great way to boost your budget.
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

            {/* Business tools for seamless operations */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Business tools for seamless operations
            </h2>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Manage employee spending
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              Add employee cards at no extra cost, set spending limits, and
              track expenses in real-time. Simplify accounting and prevent
              overspending.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Integration with business software
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              Sync your card with popular accounting tools like QuickBooks®,
              making bookkeeping a breeze.
            </p>

            {/* Travel perks for growing businesses */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Travel perks for growing businesses
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              <span className="font-bold">Travel protections:</span> Enjoy
              primary car rental insurance, trip cancellation coverage, and lost
              luggage reimbursement. Whether for meetings or trade shows, travel
              with confidence.
            </p>
            <p className="text-gray-700 text-lg mb-6">
              <span className="font-bold">Ultimate rewards portal:</span> Redeem
              your cash back for travel, gift cards, or statement credits
              through Chase Ultimate Rewards®. Get more value for your business
              needs.
            </p>

            {/* Secure and reliable */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Secure and reliable
            </h2>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Fraud protection
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              Chase’s advanced fraud detection ensures your transactions are
              safe. Zero Liability Protection means you’re not responsible for
              unauthorized charges.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Purchase protections
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              Benefit from extended warranties, purchase protection, and return
              assistance. These perks safeguard your business investments.
            </p>

            {/* Conclusion */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Your best credit card
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              The Ink Business Unlimited® Credit Card is a must-have for
              entrepreneurs seeking simplicity and rewards. With unlimited cash
              back, business-focused tools, and travel perks, it empowers you to
              focus on growth while maximizing every dollar.
            </p>
            <p className="text-gray-700 text-lg mb-6">
              Ready to take your business to the next level?
            </p>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
