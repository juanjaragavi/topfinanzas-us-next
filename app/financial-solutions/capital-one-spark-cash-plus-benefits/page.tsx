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
  title: "Capital One Spark Cash Plus Benefits",
  description:
    "Unleash unlimited rewards for your business with the Capital One Spark Cash Plus. Earn 2% cash back on every purchase.",
};

export default function CapitalOneSparkCashPlusBenefitsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Capital One Spark Cash Plus Benefits
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
              Unleash unlimited rewards for your business.
            </p>

            {/* Key Benefits List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#005B34] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    Unlimited 2% cash back on all purchase:
                  </span>{" "}
                  No categories, no restrictions—just pure, straightforward cash
                  rewards.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#005B34] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    $1,000 cash bonus:
                  </span>{" "}
                  Receive a generous welcome bonus after spending $50,000 in the
                  first 6 months.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#005B34] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    No pre-set spending limit:
                  </span>{" "}
                  Enjoy flexible purchasing power that adjusts based on your
                  spending habits.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#005B34] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    No Annual fee for employee cards:
                  </span>{" "}
                  Empower your team while consolidating rewards for the
                  business.
                </p>
              </div>
            </div>

            {/* CTA 1 */}
            <div className="flex justify-center mb-8">
              <Link
                href="/financial-solutions/capital-one-spark-cash-plus-requirements"
                className="w-full"
              >
                <Button className="w-full px-10 py-6 text-xl bg-[#005B34] hover:bg-[#004729] text-white font-bold rounded-full shadow-md transition-all duration-200">
                  How it works
                </Button>
              </Link>
            </div>

            {/* Featured Image */}
            <div className="mb-10 w-full rounded-xl overflow-hidden shadow-sm">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/capital-one-spark-cash-plus-benefits.webp"
                alt="Capital One Spark Cash Plus Benefits"
                width={1200}
                height={675}
                priority
              />
            </div>

            {/* Why the Spark Cash Plus Card stands out */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Why the Spark Cash Plus Card stands out
            </h2>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Unlimited rewards without the guesswork
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              Most cards offer perks, but their limitations can feel like a
              trap. The Spark Cash Plus eliminates guesswork with its
              straightforward 2% cash back on every dollar spent. This means you
              can focus on scaling your business without worrying whether
              purchases fit into specific categories. From office supplies to
              travel expenses, every transaction adds up to meaningful rewards.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              A bonus built for big spenders
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              Unlike cards that offer modest sign-up bonuses, the Spark Cash
              Plus caters to businesses with substantial expenses. By spending
              $50,000 within the first six months, you unlock a $1,000 cash
              bonus. For thriving businesses, this is an excellent way to boost
              liquidity or reinvest into growth.
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

            {/* Flexible spending for growing businesses */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Flexible spending for growing businesses
            </h2>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              No pre-set spending limit: Empowering large purchases
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              Whether you’re investing in bulk inventory, upgrading office
              equipment, or covering unexpected costs, the Spark Cash Plus
              offers flexibility unmatched by traditional credit cards. Without
              a pre-set spending limit, you have the freedom to make necessary
              purchases while maintaining your business momentum.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Pay in full monthly for financial discipline
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              This card operates as a charge card, requiring full monthly
              payments. While this ensures you avoid interest charges, it also
              promotes healthy financial discipline, helping businesses stay on
              top of their cash flow.
            </p>

            {/* Seamless expense management */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Seamless expense management
            </h2>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Free employee cards with consolidated rewards
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              Managing employee spending can be a headache, but with the Spark
              Cash Plus, you can issue cards to your team at no additional cost.
              Better yet, all purchases contribute to your central rewards
              balance, maximizing the benefits for the business.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Customizable spending controls
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              With employee cards come customizable spending limits, allowing
              you to set boundaries and monitor expenses in real time. This
              added layer of control ensures responsible spending while
              simplifying expense tracking.
            </p>

            {/* Is the Spark Cash Plus right for your business? */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Is the Spark Cash Plus right for your business?
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              The Capital One Spark Cash Plus card is ideal for businesses that:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-lg mb-6">
              <li>
                Spend heavily across diverse categories, such as marketing,
                travel, and equipment.
              </li>
              <li>Require flexibility in spending without pre-set limits.</li>
              <li>
                Want to maximize cash back rewards without the hassle of
                tracking categories.
              </li>
              <li>
                Need an easy way to manage employee spending while consolidating
                rewards.
              </li>
            </ul>

            {/* Conclusion */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Your best option
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              The Capital One Spark Cash Plus is more than just a credit
              card—it’s a strategic financial tool for modern businesses. With
              its simple yet powerful rewards structure, flexible spending
              options, and seamless management features, it offers unparalleled
              value for business owners looking to scale efficiently.
            </p>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
