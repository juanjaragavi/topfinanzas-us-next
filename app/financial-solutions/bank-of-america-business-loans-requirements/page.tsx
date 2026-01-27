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
  title: "Bank of America Business Loans Requirements | TopFinanzas US",
  description:
    "Unlock the financing you need for your business with simple requirements. Learn about Bank of America's business loan eligibility and application process.",
};

export default function BankOfAmericaLoansRequirementsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Bank of America Business Loans Requirements: Your Best Option
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
              Unlock the Financing You Need for Your Business with Simple
              Requirements
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Starting or expanding your business often requires financial
              support. Bank of America offers various business loans and credit
              lines with clear, achievable qualifications. Whether you’re
              looking for an unsecured line of credit or a secured business
              loan, understanding the requirements is essential to get started.
            </p>

            {/* Key Requirements Section */}
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Key Requirements:
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-10 items-center">
              <div className="w-full">
                <div className="bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center p-8 h-full min-h-[300px]">
                  <p className="text-4xl font-bold text-gray-800 tracking-tight text-center">
                    Bank of America
                  </p>
                </div>
              </div>
              <div>
                <div className="rounded-lg overflow-hidden mb-0">
                  <ResponsiveImage
                    src="https://media.topfinanzas.com/images/bank-of-america-business-loans-requirements.webp"
                    alt="Bank of America Business Loans Requirements"
                    width={800}
                    height={450}
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-10">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#012169] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    Minimum Personal Credit Score:
                  </span>{" "}
                  A FICO score above 700 is typically required.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#012169] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    Years in Business:
                  </span>{" "}
                  Most loan options require at least two years in business for
                  eligibility.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#012169] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    Annual Revenue:
                  </span>{" "}
                  A minimum of $100,000 in annual revenue is generally necessary
                  for approval.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#012169] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    Collateral or Security:
                  </span>{" "}
                  Some loan products, like the cash-secured credit line, require
                  a refundable security deposit.
                </p>
              </div>
            </div>

            {/* Banner 1 */}
            <div className="my-10 w-full rounded-xl overflow-hidden shadow-sm">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/banner-1-Top-Blog-Debt-management.webp"
                alt="Ready to tackle your debt?"
                width={1200}
                height={400}
              />
            </div>

            {/* What is the Business Advantage Credit Line? */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              What is the Business Advantage Credit Line?
            </h2>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Eligibility Requirements:
            </h3>
            <p className="text-gray-700 text-lg mb-4">
              For the unsecured Business Advantage Credit Line, the following
              are essential:
            </p>

            <div className="space-y-4 mb-4 text-gray-700 text-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#012169] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p>At least two years in business.</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#012169] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p>A FICO score of 700 or higher.</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#012169] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p>A minimum annual revenue of $100,000.</p>
              </div>
            </div>

            <p className="text-gray-700 text-lg mb-8">
              The Business Advantage Credit Line offers flexibility with
              competitive interest rates, allowing businesses to borrow funds
              whenever necessary. This makes it a great option for covering
              operational expenses or unexpected costs.
            </p>

            {/* Ad Unit: square04 */}
            <div
              id="square04"
              className="w-full flex justify-center my-6"
              data-topads
              data-topads-size="square"
            ></div>

            {/* How to Qualify for the Business Advantage Term Loan? */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              How to Qualify for the Business Advantage Term Loan?
            </h2>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Required Documentation & Eligibility:
            </h3>

            <div className="space-y-4 mb-4 text-gray-700 text-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#012169] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p>
                  <span className="font-bold text-gray-900">
                    Business Experience:
                  </span>{" "}
                  Must be in business for at least two years.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#012169] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p>
                  <span className="font-bold text-gray-900">
                    Personal Credit:
                  </span>{" "}
                  A 700 or higher FICO score is typically required.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#012169] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p>
                  <span className="font-bold text-gray-900">
                    Revenue Threshold:
                  </span>{" "}
                  A yearly revenue of $100,000.
                </p>
              </div>
            </div>

            <p className="text-gray-700 text-lg mb-8">
              The Business Advantage Term Loan provides lump-sum funding that is
              ideal for large purchases or business expansions. With fixed
              monthly payments, it is suitable for businesses that need a
              predictable repayment structure.
            </p>

            {/* Banner 2 */}
            <div className="my-10 w-full rounded-xl overflow-hidden shadow-md">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/banner-2-Top-Blog-Personal-loans.webp"
                alt="Unlock your path to debt freedom"
                width={600}
                height={600}
              />
            </div>

            {/* Cash-Secured Business Credit Line */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Cash-Secured Business Credit Line: A Flexible Financing Option
            </h2>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              What You Need to Apply:
            </h3>

            <div className="space-y-4 mb-4 text-gray-700 text-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#012169] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p>Six months in business.</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#012169] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p>Annual revenue of at least $50,000.</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#012169] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p>$1,000 refundable deposit.</p>
              </div>
            </div>

            <p className="text-gray-700 text-lg mb-10">
              This secured credit line allows businesses to start building their
              credit with a refundable deposit while enjoying the flexibility of
              using the line of credit whenever needed.
            </p>

            {/* Banner 3 */}
            <div className="my-10 w-full rounded-xl overflow-hidden shadow-sm">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/banner-3-Top-Blog-Credit-Cards.webp"
                alt="Looking for the Perfect Credit Card?"
                width={600}
                height={600}
              />
            </div>

            {/* Your best option */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Your best option
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              Bank of America’s business loans and financing options offer
              flexible terms tailored to different needs. By meeting the basic
              eligibility requirements, businesses can gain access to essential
              funds. The next step is evaluating your business’s needs to choose
              the right financing option. Ready to move forward? Start your
              application today!
            </p>

            <div className="flex flex-col items-center justify-center space-y-4">
              <Link
                href="https://www.bankofamerica.com/smallbusiness/business-financing/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto"
              >
                <Button className="w-full md:w-auto px-10 py-6 text-xl bg-[#012169] hover:bg-[#1a3a70] text-white font-bold rounded-full shadow-lg transition-all duration-200 transform hover:scale-105">
                  See on official site*
                </Button>
              </Link>
              <p className="text-xs text-gray-500">
                *By clicking you will be redirected to an external site.
              </p>
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
