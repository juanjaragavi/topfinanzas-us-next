import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ResponsiveImage from "@/components/ui/responsive-image";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Titanium Rewards Visa Signature credit card requirements",
  description:
    "The Titanium Rewards Visa Signature Card by Andrews Federal Credit Union offers exceptional rewards on everyday spending categories.",
};

export default function RequirementsTitaniumRewardsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Titanium Rewards Visa Signature credit card requirements
            </h1>

            {/* Ad Unit: square03 */}
            <div
              id="square03"
              className="w-full flex justify-center my-6"
              data-topads
              data-topads-size="square"
            ></div>

            {/* Intro */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              The requirements for superior rewards
            </h2>
            <p className="text-lg text-gray-800 mb-6">
              The Titanium Rewards Visa Signature Card by Andrews Federal Credit
              Union offers exceptional rewards on everyday spending categories.
              Before applying, it’s crucial to understand the qualifications and
              steps to secure this powerful rewards card.
            </p>

            {/* Ad Unit: square04 */}
            <div
              id="square04"
              className="w-full flex justify-center my-6"
              data-topads
              data-topads-size="square"
            ></div>

            {/* Requirements Section */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Requirements
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-10 items-center">
              <div className="w-full h-full">
                <div className="bg-[#303A4D] rounded-lg overflow-hidden flex items-center justify-center p-8 h-full min-h-[300px]">
                  <p className="text-4xl font-bold text-white text-center tracking-tight leading-snug">
                    Titanium Rewards <br /> Visa Signature
                  </p>
                </div>
              </div>
              <div className="w-full h-full">
                <div className="rounded-lg overflow-hidden h-full">
                  <ResponsiveImage
                    src="https://media.topfinanzas.com/images/titanium-rewards-visa-signature-credit-card-requirements.webp"
                    alt="Titanium Rewards Visa Signature Credit Card Requirements"
                    width={800}
                    height={600}
                    className="object-cover h-full w-full"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-10">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#303A4D] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">Credit score:</span>{" "}
                  A score of 700 or higher is recommended for best approval
                  odds.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#303A4D] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    Membership eligibility:
                  </span>{" "}
                  Applicants must join Andrews Federal Credit Union, often
                  requiring affiliation with specific organizations or
                  communities.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#303A4D] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    Proof of income:
                  </span>{" "}
                  Indicates financial stability and repayment ability.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#303A4D] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    Age and residency requirements:
                  </span>{" "}
                  Must be 18 years or older and reside in the U.S.
                </p>
              </div>
            </div>

            {/* Banner 1 */}
            <div className="my-10 w-full rounded-xl overflow-hidden shadow-sm">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/banner-1-Top-Blog-Debt-management.webp"
                alt="Debt Management"
                width={1200}
                height={400}
              />
            </div>

            {/* Key insights on requirements */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Key insights on requirements
            </h2>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Importance of credit score
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              The Titanium Rewards card is designed for individuals with
              excellent credit. A score above 700 ensures access to its premium
              benefits and competitive interest rates.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Andrews Federal membership
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              Membership is a prerequisite for application. Eligibility can be
              established through military affiliation, employer ties, or by
              joining certain partner organizations.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Income proof and financial stability
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              Applicants need to demonstrate consistent income to qualify.
              Providing evidence of employment or other income sources
              strengthens your case.
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

            {/* How to apply */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              How to apply
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#303A4D]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Step 1: Become a Member of Andrews Federal Credit Union
                </h3>
                <p className="text-gray-700 text-lg">
                  Visit the Andrews Federal website to join. If you’re not
                  affiliated with a qualifying organization, you may join by
                  contributing to a partnered association.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#303A4D]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Step 2: Submit Your Application
                </h3>
                <p className="text-gray-700 text-lg">
                  Once a member, apply for the Titanium Rewards Visa Signature
                  Card. Include your SSN, income details, and proof of
                  identification.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#303A4D]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Step 3: Review and Decision
                </h3>
                <p className="text-gray-700 text-lg">
                  Approval timelines vary but are generally completed within a
                  week. Prepare for potential follow-ups if additional
                  documentation is required.
                </p>
              </div>
            </div>

            {/* Optimizing your application */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Optimizing your application
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <CheckCircle className="h-6 w-6 text-[#303A4D]" />
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    Increase your credit score:
                  </span>{" "}
                  Reduce outstanding debt and make timely payments.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <CheckCircle className="h-6 w-6 text-[#303A4D]" />
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    Verify membership requirements:
                  </span>{" "}
                  Ensure you qualify to join the credit union.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <CheckCircle className="h-6 w-6 text-[#303A4D]" />
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    Provide comprehensive documentation:
                  </span>{" "}
                  Double-check details to avoid delays.
                </p>
              </div>
            </div>

            {/* Banner 3 */}
            <div className="my-10 w-full rounded-xl overflow-hidden shadow-sm">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/banner-3-Top-Blog-Credit-Cards.webp"
                alt="Credit Cards"
                width={1200}
                height={400}
              />
            </div>

            {/* Advantages of membership-based cards */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Advantages of membership-based cards
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              Exclusive to credit union members, the Titanium Rewards card
              offers perks that often outshine traditional credit cards. Enjoy
              lower fees, personalized customer service, and higher reward
              rates.
            </p>

            {/* Your best option */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Your best option
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              The Titanium Rewards Visa Signature Card is your ticket to
              unmatched rewards and credit union benefits. By preparing
              thoroughly and meeting the outlined requirements, you’ll maximize
              your chances of approval and enjoy its exceptional rewards.
            </p>

            {/* CTA */}
            <div className="flex flex-col items-center justify-center mb-8">
              <Link
                href="https://www.andrewsfcu.org/Cards/Personal-Credit-Cards/Rewards-Cards/Titanium-Rewards-Visa-Signature-Credit-Card"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto"
              >
                <Button className="w-full md:w-auto px-12 py-6 text-xl bg-[#303A4D] hover:bg-[#252d3a] text-white font-bold rounded-full shadow-md transition-all duration-200">
                  See on official site*
                </Button>
              </Link>
              <p className="text-sm text-gray-500 mt-3 text-center">
                *By clicking you will be redirected to an external site.
              </p>
            </div>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
