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
  title: "The benefits of the Capital One Platinum Secured Credit Card",
  description:
    "If you're building or rebuilding your credit, the Capital One Platinum Secured Credit Card is your perfect ally.",
};

export default function BenefitsCapitalOnePlatinumSecuredPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <h1 className="text-3xl text-left md:text-4xl font-bold text-gray-800 mb-8 leading-8">
              The benefits of the Capital One Platinum Secured Credit Card
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
              If you're building or rebuilding your credit, the Capital One
              Platinum Secured Credit Card is your perfect ally.
            </h4>

            <div className="space-y-2 my-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <CheckCircle className="h-6 w-6 text-[#19263A]" />
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Low security deposit:
                  </span>{" "}
                  Get started with as little as $49.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <CheckCircle className="h-6 w-6 text-[#19263A]" />
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Credit line increases:
                  </span>{" "}
                  Earn a higher credit line with responsible usage.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <CheckCircle className="h-6 w-6 text-[#19263A]" />
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Credit-building opportunities:
                  </span>{" "}
                  Reports to all three major credit bureaus.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <CheckCircle className="h-6 w-6 text-[#19263A]" />
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">Online tools:</span>{" "}
                  Stay in control with Capital One's intuitive platform.
                </p>
              </div>
            </div>

            {/* CTA 1 */}
            <div className="flex justify-center mb-8">
              <Link
                href="/financial-solutions/requirements-of-the-capital-one-platinum-secured-credit-card"
                className="w-full md:w-auto"
              >
                <Button className="w-full md:w-auto px-8 py-2 text-md bg-[#19263A] hover:bg-[#111a28] text-white font-medium rounded-full">
                  How It Works
                </Button>
              </Link>
            </div>

            {/* Main Image */}
            <div className="mb-8 w-full rounded-xl overflow-hidden shadow-lg">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/benefits-of-the-capital-one-platinum-secured-credit-card.webp"
                alt="benefits of the Capital One Platinum Secured Credit Card"
                width={1200}
                height={630}
                priority
              />
            </div>

            {/* Affordable entry with low security deposits */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Affordable entry with low security deposits
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Unlike many secured cards, this one allows you to start with a
              deposit as low as $49. This affordability makes it accessible for
              a wide range of users who are serious about rebuilding their
              credit.
            </p>

            <h4 className="text-xl font-bold text-gray-800 mb-3">
              Flexible deposit options
            </h4>
            <p className="text-lg text-gray-700 mb-6">
              You can pay your security deposit in installments, making it even
              easier to get started.
            </p>

            <h4 className="text-xl font-bold text-gray-800 mb-3">
              Transitioning to unsecured credit
            </h4>
            <p className="text-lg text-gray-700 mb-6">
              As you demonstrate responsible use, you may become eligible for an
              upgrade to an unsecured card, eliminating the need for a deposit.
            </p>

            {/* Banner 1 */}
            <div className="my-8 w-full rounded-xl overflow-hidden shadow-sm">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/banner-1-Top-Blog-Debt-management.webp"
                alt="Debt Management"
                width={1200}
                height={400}
              />
            </div>

            {/* Unlock higher credit lines over time */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Unlock higher credit lines over time
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Responsible usage can lead to automatic credit line increases.
              This benefit not only enhances your financial flexibility but also
              positively impacts your credit score.
            </p>

            <h4 className="text-xl font-bold text-gray-800 mb-3">
              Stepping stones to financial freedom
            </h4>
            <p className="text-lg text-gray-700 mb-6">
              Higher credit lines make it easier to manage emergencies or larger
              purchases without maxing out your card.
            </p>

            {/* Banner 2 */}
            <div className="my-8 w-full rounded-xl overflow-hidden shadow-sm">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/banner-2-Top-Blog-Personal-loans.webp"
                alt="Personal Loans"
                width={1200}
                height={400}
              />
            </div>

            {/* Build credit with confidence */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Build credit with confidence
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              With reports sent to all three major credit bureaus, this card
              ensures your good payment history works in your favor. It's a
              reliable way to strengthen your credit profile.
            </p>

            <div className="space-y-2 my-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <CheckCircle className="h-6 w-6 text-[#19263A]" />
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Positive impact on creditworthiness:
                  </span>{" "}
                  Regular, on-time payments demonstrate financial
                  responsibility, boosting your eligibility for future financial
                  products.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <CheckCircle className="h-6 w-6 text-[#19263A]" />
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Simplified financial management online:
                  </span>{" "}
                  The Capital One app and website provide user-friendly tools to
                  monitor your account, set payment reminders, and access
                  detailed statements. This transparency helps you stay
                  organized.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <CheckCircle className="h-6 w-6 text-[#19263A]" />
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Empowering financial literacy:
                  </span>{" "}
                  The tools available help users understand their spending
                  habits, empowering smarter financial choices.
                </p>
              </div>
            </div>

            {/* A path to better credit */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              A path to better credit
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              The Capital One Platinum Secured Credit Card offers unparalleled
              benefits for credit-building at a low cost. Start your journey to
              financial freedom today.
            </p>

            {/* Final CTA */}
            <div className="text-left my-8">
              <Link
                href="/financial-solutions/requirements-of-the-capital-one-platinum-secured-credit-card"
                className="w-full md:w-auto"
              >
                <Button className="w-full md:w-auto px-8 py-2 text-md bg-[#19263A] hover:bg-[#111a28] text-white font-medium rounded-full">
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
