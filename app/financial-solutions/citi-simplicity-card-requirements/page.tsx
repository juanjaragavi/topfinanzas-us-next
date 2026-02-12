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
  title: "Citi Simplicity Card Requirements",
  description:
    "Zero fees, zero hassle—here's how to qualify. The Citi Simplicity Card is an excellent choice for those seeking convenience and cost-saving benefits.",
};

export default function CitiSimplicityCardRequirementsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <h1 className="text-3xl text-left md:text-4xl font-bold text-gray-800 mb-8 leading-8">
              Citi Simplicity Card Requirements
            </h1>

            {/* Ad Unit: square03 */}
            <div
              id="square03"
              className="w-full flex justify-center my-6"
              data-topads
              data-topads-size="square"
            ></div>

            {/* Intro */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Zero fees, zero hassle—here's how to qualify.
            </h2>
            <p className="text-left text-lg text-gray-800 font-medium mb-8 leading-5">
              The Citi Simplicity Card is an excellent choice for those seeking
              convenience and cost-saving benefits. With its standout feature of
              no late fees or penalty rates, this card is ideal for simplifying
              credit management.
            </p>

            {/* Ad Unit: square04 */}
            <div
              id="square04"
              className="w-full flex justify-center my-6"
              data-topads
              data-topads-size="square"
            ></div>

            {/* Requirements Section */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Requirements
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8 items-center">
              <div className="w-full h-full">
                <div className="bg-[#07296B] rounded-lg overflow-hidden flex items-center justify-center p-8 h-full min-h-[300px]">
                  <p className="text-4xl font-bold text-white text-center tracking-tight leading-snug">
                    Citi Simplicity <br /> Card
                  </p>
                </div>
              </div>
              <div className="w-full h-full">
                <div className="rounded-lg overflow-hidden h-full">
                  <ResponsiveImage
                    src="https://media.topfinanzas.com/images/citi-simplicity-card-requirements.webp"
                    alt="Citi Simplicity Card Requirements"
                    width={800}
                    height={600}
                    className="object-cover h-full w-full"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#07296B] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Minimum credit score:
                  </span>{" "}
                  670 or higher, considered good credit.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#07296B] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Proof of U.S. residency:
                  </span>{" "}
                  A valid address and Social Security Number are required.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#07296B] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">Minimum age:</span>{" "}
                  Applicants must be at least 18 years old.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#07296B] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Debt-to-income ratio (DTI):
                  </span>{" "}
                  A manageable ratio is essential for approval.
                </p>
              </div>
            </div>

            {/* Banner 1 */}
            <div className="my-8 w-full rounded-xl overflow-hidden shadow-sm">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/banner-1-Top-Blog-Debt-management.webp"
                alt="Debt Management"
                width={1200}
                height={400}
              />
            </div>

            {/* Understanding the qualifications */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Understanding the qualifications
            </h2>

            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              Why credit score matters
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              A score of 670 shows lenders that you manage credit responsibly,
              increasing your chances of approval and favorable terms.
            </p>

            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              Income verification
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              You must demonstrate a steady income to ensure you can meet
              monthly payment obligations.
            </p>

            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              Identity checks
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Providing a valid SSN and U.S. address helps verify your identity
              and prevents fraud.
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

            {/* Step-by-step application */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Step-by-step application
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="my-4">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Step 1: Check your credit score
                </h3>
                <p className="text-left text-gray-800 text-md leading-5">
                  Ensure your score meets the minimum requirement before
                  applying.
                </p>
              </div>

              <div className="my-4">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Step 2: Gather documents
                </h3>
                <p className="text-left text-gray-800 text-md leading-5">
                  Prepare your ID, SSN, and proof of income.
                </p>
              </div>

              <div className="my-4">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Step 3: Fill out the application
                </h3>
                <p className="text-left text-gray-800 text-md leading-5">
                  Provide accurate personal and financial details on the Citi
                  website.
                </p>
              </div>

              <div className="my-4">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Step 4: Wait for a decision
                </h3>
                <p className="text-left text-gray-800 text-md leading-5">
                  Approvals are often instant, but some cases may take a few
                  days.
                </p>
              </div>
            </div>

            {/* Banner 3 */}
            <div className="my-8 w-full rounded-xl overflow-hidden shadow-sm">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/banner-3-Top-Blog-Credit-Cards.webp"
                alt="Credit Cards"
                width={1200}
                height={400}
              />
            </div>

            {/* Tips for success */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Tips for success
            </h2>

            <div className="space-y-2 my-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <CheckCircle className="h-6 w-6 text-[#07296B]" />
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Pay down existing debt:
                  </span>{" "}
                  Lowering your credit utilization can boost your score.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <CheckCircle className="h-6 w-6 text-[#07296B]" />
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Review your credit report:
                  </span>{" "}
                  Dispute any errors that might negatively impact your
                  application.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <CheckCircle className="h-6 w-6 text-[#07296B]" />
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Consider prequalification:
                  </span>{" "}
                  Check for offers that don&apos;t affect your credit score.
                </p>
              </div>
            </div>

            {/* Why choose Citi Simplicity? */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Why choose Citi Simplicity?
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              This card stands out for its simplicity and lack of hidden fees.
              It&apos;s perfect for those who want a straightforward credit card
              experience without worrying about late payment penalties.
            </p>

            {/* Your best option */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Your best option
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              The Citi Simplicity Card is a reliable tool for building credit
              and managing expenses. By meeting the requirements and applying
              wisely, you can enjoy all the benefits it has to offer.
            </p>

            {/* CTA */}
            <div className="flex flex-col items-center justify-center mb-8">
              <Link
                href="https://www.citi.com/credit-cards/citi-simplicity-credit-card"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto"
              >
                <Button className="w-full md:w-auto px-8 py-2 text-md bg-[#07296B] hover:bg-[#051e4d] text-white font-medium rounded-full">
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
