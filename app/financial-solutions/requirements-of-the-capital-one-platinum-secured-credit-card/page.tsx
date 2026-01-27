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
  title: "Requirements of the Capital One Platinum Secured Credit Card",
  description:
    "A secured option to build credit effortlessly: The Capital One Platinum Secured Credit Card is designed for those starting their credit journey.",
};

export default function RequirementsCapitalOnePlatinumSecuredPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Requirements of the Capital One Platinum Secured Credit Card
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
              A secured option to build credit effortlessly
            </h2>
            <p className="text-lg text-gray-800 mb-6">
              With no annual fee and a low security deposit, the Capital One
              Platinum Secured Credit Card is designed for those starting their
              credit journey or rebuilding from setbacks.
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
                <div className="bg-[#19263A] rounded-lg overflow-hidden flex items-center justify-center p-8 h-full min-h-[300px]">
                  <p className="text-4xl font-bold text-white text-center tracking-tight leading-snug">
                    Capital One <br /> Platinum Secured
                  </p>
                </div>
              </div>
              <div className="w-full h-full">
                <div className="rounded-lg overflow-hidden h-full">
                  <ResponsiveImage
                    src="https://media.topfinanzas.com/images/requirements-of-the-capital-one-platinum-secured-credit-card.webp"
                    alt="Requirements of the Capital One Platinum Secured Credit Card"
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
                    Security deposit made easy:
                  </span>{" "}
                  Starting at $49.
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
                    Age requirements:
                  </span>{" "}
                  18+ (19 in some States).
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
                    Identification:
                  </span>{" "}
                  Valid SSN or ITIN.
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
                    Financial Income:
                  </span>{" "}
                  Steady income proof.
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

            {/* Key features of the Capital One Platinum Secured Card */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Key features of the Capital One Platinum Secured Card
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <CheckCircle className="h-6 w-6 text-[#19263A]" />
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    Low security deposit:
                  </span>{" "}
                  Depending on your creditworthiness, your deposit could be as
                  low as $49.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <CheckCircle className="h-6 w-6 text-[#19263A]" />
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    Opportunity to increase credit line:
                  </span>{" "}
                  Get access to a higher credit line by making your first five
                  monthly payments on time.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <CheckCircle className="h-6 w-6 text-[#19263A]" />
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    Simple account management:
                  </span>{" "}
                  Enjoy user-friendly tools to track spending and monitor credit
                  score improvements.
                </p>
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

            {/* Eligibility criteria explained */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Eligibility criteria explained
            </h2>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Age and residency
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              Applicants must meet the legal age requirement and live in the
              U.S. or a U.S. territory.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Security deposit
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              A refundable deposit is required, which determines your initial
              credit limit.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Income requirements
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              Show proof of income that demonstrates your ability to repay the
              card balance.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Identification documents
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              Provide a valid Social Security Number (SSN) or Individual
              Taxpayer Identification Number (ITIN).
            </p>

            {/* How to Apply */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              How to Apply
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#19263A]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Step 1 – Evaluate your credit needs
                </h3>
                <p className="text-gray-700 text-lg">
                  Decide if a secured card aligns with your financial goals.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#19263A]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Step 2 – Save for the deposit
                </h3>
                <p className="text-gray-700 text-lg">
                  Ensure you have sufficient funds for the required security
                  deposit.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#19263A]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Step 3 – Complete the application
                </h3>
                <p className="text-gray-700 text-lg">
                  Submit your application online with accurate personal and
                  financial details.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#19263A]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Step 4 – Make the deposit
                </h3>
                <p className="text-gray-700 text-lg">
                  Once approved, fund your security deposit to activate your
                  account.
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

            {/* Building credit with a secured card */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Building credit with a secured card
            </h2>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Pay on time
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              Timely payments boost your credit score and set you up for credit
              line increases.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Keep balances low
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              Maintain a low credit utilization rate to reflect responsible card
              usage.
            </p>

            {/* Who should apply? */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Who should apply?
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              This card is perfect for individuals with limited or no credit
              history and those seeking a simple, transparent way to improve
              their credit.
            </p>

            {/* Conclusion */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Conclusion
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              The Capital One Platinum Secured Credit Card is an excellent
              starting point for building credit. By meeting the requirements
              and using it wisely, you’ll be on the path to financial growth.
            </p>

            {/* CTA */}
            <div className="flex flex-col items-center justify-center mb-8">
              <Link
                href="https://www.capitalone.com/credit-cards/platinum-secured/"
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
