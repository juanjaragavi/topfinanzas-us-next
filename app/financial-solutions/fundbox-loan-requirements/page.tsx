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
  title: "Fundbox Loan Requirements - Quick and Flexible Funding",
  description:
    "Fundbox offers small business owners an easy way to manage cash flow. Learn about the requirements, eligibility factors, and how to apply.",
};

export default function FundboxLoanRequirementsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <h1 className="text-3xl text-left md:text-4xl font-bold text-gray-800 mb-8 leading-8">
              Fundbox Loan Requirements
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
              Quick and flexible funding for small businesses
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Fundbox offers small business owners an easy way to manage cash
              flow.
            </p>

            {/* Requirements Section */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Requirements
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8 items-center">
              <div className="w-full">
                <div className="my-4 overflow-hidden flex items-center justify-center p-8 h-full min-h-[300px]">
                  <p className="text-4xl font-bold text-gray-800 tracking-tight">
                    Fundbox
                  </p>
                </div>
              </div>
              <div>
                <div className="rounded-lg overflow-hidden mb-0">
                  <ResponsiveImage
                    src="https://media.topfinanzas.com/images/fundbox-loan-requirements.webp"
                    alt="Fundbox Loan Requirements"
                    width={800}
                    height={450}
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-sky-300 p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">Business Age:</span>{" "}
                  At least 6 months in operation.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-sky-300 p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Annual Revenue:
                  </span>{" "}
                  Minimum $50,000.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-sky-300 p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Business Account Connection:
                  </span>{" "}
                  Link your business bank account for transaction verification.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-sky-300 p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Personal Credit Check:
                  </span>{" "}
                  A score of 600 or higher is generally required.
                </p>
              </div>
            </div>

            {/* Banner 1 */}
            <div className="my-8 w-full rounded-xl overflow-hidden shadow-sm">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/banner-1-Top-Blog-Debt-management.webp"
                alt="Ready to tackle your debt?"
                width={1200}
                height={400}
              />
            </div>

            {/* Why fundbox? */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Why fundbox?
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Fundbox provides flexible credit options tailored to small
              businesses. Their platform is user-friendly and transparent.
            </p>

            {/* Ad Unit: square04 */}
            <div
              id="square04"
              className="w-full flex justify-center my-6"
              data-topads
              data-topads-size="square"
            ></div>

            {/* Eligibility factors */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Eligibility factors
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              To qualify, you must:
            </p>
            <ol className="list-decimal pl-5 space-y-3 mb-8 text-left text-gray-800 text-md leading-5 marker:font-bold marker:text-gray-900">
              <li className="pl-2">Operate within the U.S.</li>
              <li className="pl-2">
                Have consistent financial transactions in your account.
              </li>
            </ol>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Income and revenue proof
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Fundbox evaluates your business's cash flow to determine
              eligibility.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Personal credit considerations
            </h3>
            <p className="text-left text-gray-800 text-md leading-5 mb-8">
              While not the sole factor, your credit score impacts your approval
              chances and terms.
            </p>

            {/* How to apply */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              How to apply
            </h2>
            <div className="space-y-2 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-sky-300 p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Sign Up Online:
                  </span>{" "}
                  Create an account and connect your business bank details.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-sky-300 p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Provide Documentation:
                  </span>{" "}
                  Include business and personal financial records.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-sky-300 p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Approval Process:
                  </span>{" "}
                  Fundbox reviews your cash flow and credit.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-sky-300 p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">Access Funds:</span>{" "}
                  Once approved, draw funds as needed.
                </p>
              </div>
            </div>

            {/* Banner 2 */}
            <div className="my-8 w-full rounded-xl overflow-hidden shadow-md">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/banner-2-Top-Blog-Personal-loans.webp"
                alt="Unlock your path to debt freedom"
                width={600}
                height={600}
              />
            </div>

            {/* Pro tips */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Pro tips
            </h2>
            <ol className="list-decimal pl-5 space-y-3 mb-8 text-left text-gray-800 text-md leading-5 marker:font-bold marker:text-gray-900">
              <li className="pl-2">
                <span className="font-bold text-gray-900">
                  Maintain Cash Flow:
                </span>{" "}
                Ensure your business account shows consistent activity.
              </li>
              <li className="pl-2">
                <span className="font-bold text-gray-900">
                  Monitor Credit Health:
                </span>{" "}
                A higher score improves your loan terms.
              </li>
              <li className="pl-2">
                <span className="font-bold text-gray-900">
                  Keep Records Handy:
                </span>{" "}
                Organized documentation speeds up the process.
              </li>
            </ol>

            {/* Who benefits from Fundbox? */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Who benefits from Fundbox?
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Fundbox is ideal for small businesses needing:
            </p>
            <ol className="list-decimal pl-5 space-y-3 mb-8 text-left text-gray-800 text-md leading-5 marker:font-bold marker:text-gray-900">
              <li className="pl-2">Working capital</li>
              <li className="pl-2">Seasonal expense management</li>
              <li className="pl-2">Invoice financing</li>
            </ol>

            {/* Banner 3 */}
            <div className="my-8 w-full rounded-xl overflow-hidden shadow-sm">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/banner-3-Top-Blog-Credit-Cards.webp"
                alt="Looking for the Perfect Credit Card?"
                width={600}
                height={600}
              />
            </div>

            {/* Your best option */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Your best option
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Fundbox simplifies small business funding. Meet their requirements
              and access the financial support your business needs.
            </p>

            <div className="flex flex-col items-center justify-center space-y-2">
              <Link
                href="https://app.fundbox.com/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto"
              >
                <Button className="w-full md:w-auto px-8 py-2 text-md bg-sky-300 hover:bg-sky-400 text-white font-medium rounded-full">
                  See on official site*
                </Button>
              </Link>
              <p className="text-xs text-gray-500">
                *By clicking you will be redirected to an external site.
              </p>
            </div>

            <hr className="my-8" />
            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
