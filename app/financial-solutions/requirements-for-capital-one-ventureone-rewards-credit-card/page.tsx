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
  title: "Requirements for Capital One VentureOne Rewards Credit Card",
  description:
    "Embark on a journey of rewards: Your path to simplicity and savings with the Capital One VentureOne Rewards Credit Card.",
};

export default function CapitalOneVentureOneRequirementsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Requirements for Capital One VentureOne Rewards Credit Card
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
              Embark on a journey of rewards: Your path to simplicity and
              savings
            </h2>
            <p className="text-lg text-gray-800 mb-6">
              Looking for a credit card that offers exceptional rewards without
              annual fees? The Capital One VentureOne Rewards Credit Card could
              be your ideal match.
            </p>

            {/* Ad Unit: square04 (After third paragraph logic approx) */}
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
                <div className="bg-[#19263A] rounded-lg overflow-hidden flex items-center justify-center p-8 h-full min-h-[300px]">
                  <p className="text-4xl font-bold text-white text-center tracking-tight leading-snug">
                    Capital One <br /> VentureOne
                  </p>
                </div>
              </div>
              <div className="w-full h-full">
                <div className="rounded-lg overflow-hidden h-full">
                  <ResponsiveImage
                    src="https://media.topfinanzas.com/images/requirements-for-capital-one-ventureone-rewards-credit-card.webp"
                    alt="Capital One VentureOne Rewards Credit Card Requirements"
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
                  <div className="rounded-full bg-[#19263A] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    Age requirement:
                  </span>{" "}
                  To apply, you must be at least 18 years old (or 19 in Alabama
                  and Nebraska).
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#19263A] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    Citizenship or residency:
                  </span>{" "}
                  Applicants must be U.S. citizens or permanent residents with a
                  valid Social Security Number (SSN) or Individual Taxpayer
                  Identification Number (ITIN).
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#19263A] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    Credit score guidelines:
                  </span>{" "}
                  A good to excellent credit score (typically 670 or higher) is
                  recommended for approval.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#19263A] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    Proof of income:
                  </span>{" "}
                  Recent pay stubs, tax returns, or bank statements.
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

            {/* Gathering the necessary documentation */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Gathering the necessary documentation
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#19263A]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Proof of identity
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#19263A] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Valid government-issued ID (e.g., driver’s license,
                      passport).
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#19263A] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">SSN or ITIN.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#19263A]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Proof of income
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#19263A] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Recent pay stubs, tax returns, or bank statements.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#19263A] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Self-employed applicants may need additional documentation
                      like a 1099 form.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#19263A] md:col-span-2">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Address verification
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#19263A] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Utility bill, lease agreement, or another document
                      confirming your current residence.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Banner 2 */}
            <div className="my-10 w-full rounded-xl overflow-hidden shadow-sm">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/banner-2-Top-Blog-Personal-loans.webp"
                alt="Personal Loans"
                width={1200}
                height={400}
              />
            </div>

            {/* The application process made simple */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              The application process made simple
            </h2>

            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Online application steps
            </h3>
            <ol className="list-decimal pl-5 space-y-3 mb-6 text-gray-700 text-lg">
              <li className="pl-2">
                Visit the Capital One VentureOne Rewards Credit Card page.
              </li>
              <li className="pl-2">
                Click “Apply Now” and complete the form with accurate details.
              </li>
              <li className="pl-2">
                Submit your application and wait for instant pre-approval or
                further verification.
              </li>
            </ol>

            <h3 className="text-xl font-bold text-gray-800 mb-4">
              What happens after submission?
            </h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-gray-200 p-1">
                    <ArrowRight className="h-4 w-4 text-[#19263A]" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  Approval notification typically arrives within seconds.
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-gray-200 p-1">
                    <ArrowRight className="h-4 w-4 text-[#19263A]" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  If additional documents are required, you will be contacted.
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-gray-200 p-1">
                    <ArrowRight className="h-4 w-4 text-[#19263A]" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  Receive your card within 7-10 business days if approved.
                </p>
              </li>
            </ul>

            {/* Banner 3 */}
            <div className="my-10 w-full rounded-xl overflow-hidden shadow-sm">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/banner-3-Top-Blog-Credit-Cards.webp"
                alt="Credit Cards"
                width={1200}
                height={400}
              />
            </div>

            {/* Tips for successful approval */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Tips for successful approval
            </h2>

            <div className="space-y-6 mb-8">
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">
                  Maintain a healthy credit score
                </h4>
                <p className="text-gray-700 text-lg">
                  Pay bills on time and keep credit utilization low.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">
                  Provide accurate information
                </h4>
                <p className="text-gray-700 text-lg">
                  Double-check all details before submitting your application to
                  avoid delays.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">
                  Stay within your credit limits
                </h4>
                <p className="text-gray-700 text-lg">
                  Ensure that existing credit usage does not exceed recommended
                  thresholds.
                </p>
              </div>
            </div>

            {/* Your best credit card option */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Your best credit card option
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              Securing the Capital One VentureOne Rewards Credit Card is a
              straightforward process as long as you meet the requirements and
              prepare necessary documentation. Take the next step toward earning
              rewards and simplifying your travel experiences by applying today.
            </p>

            {/* CTA */}
            <div className="flex flex-col items-center justify-center mb-8">
              <Link
                href="https://www.capitalone.com/credit-cards/ventureone/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto"
              >
                <Button className="w-full md:w-auto px-12 py-6 text-xl bg-[#19263A] hover:bg-[#111a28] text-white font-bold rounded-full shadow-md transition-all duration-200">
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
