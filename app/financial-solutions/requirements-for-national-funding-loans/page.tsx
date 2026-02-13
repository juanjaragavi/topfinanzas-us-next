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
  title: "Requirements for National Funding Loans | TopFinanzas US",
  description:
    "Unlock your business potential with National Funding. Learn about the requirements, application journey, and eligibility factors for quick and flexible financing.",
};

export default function NationalFundingRequirementsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <h1 className="text-3xl text-left md:text-4xl font-bold text-gray-800 mb-8 leading-8">
              Requirements for National Funding Loans
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
              Unlock your business potential: National Funding requirements
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              For business owners seeking quick and flexible financing, National
              Funding provides tailored solutions. Understanding their
              requirements can help you access funds efficiently.
            </p>

            {/* Requirements Section */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Requirements
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8 items-center">
              <div className="w-full">
                <div className="my-4 overflow-hidden flex items-center justify-center p-8 h-full min-h-[300px]">
                  <p className="text-4xl font-bold text-gray-800 tracking-tight text-center">
                    National Funding
                  </p>
                </div>
              </div>
              <div>
                <div className="rounded-lg overflow-hidden mb-0">
                  <ResponsiveImage
                    src="https://media.topfinanzas.com/images/requirements-for-national-funding-loans.webp"
                    alt="Requirements for National Funding Loans"
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
                  <div className="rounded-full bg-[#223657] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Minimum monthly revenue:
                  </span>{" "}
                  A consistent revenue of $12,000 or more.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#223657] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Operational history:
                  </span>{" "}
                  At least six months of business operations.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#223657] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Personal credit score:
                  </span>{" "}
                  A score of 600 or higher is preferred.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#223657] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Business bank statements:
                  </span>{" "}
                  Recent three months of bank statements to verify cash flow.
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

            {/* About National Funding */}
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              About National Funding
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              National Funding specializes in helping small and medium-sized
              businesses access capital quickly. With loans ranging from $5,000
              to $500,000, they cater to a diverse range of industries.
            </p>

            {/* Ad Unit: square04 */}
            <div
              id="square04"
              className="w-full flex justify-center my-6"
              data-topads
              data-topads-size="square"
            ></div>

            {/* Advantages of National Funding */}
            <h4 className="text-lg font-bold text-gray-900 mb-4">
              Advantages of National Funding
            </h4>
            <div className="space-y-2 mb-4 text-left text-gray-800 text-md leading-5">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#223657] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p>No collateral required.</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#223657] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p>Flexible repayment schedules.</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#223657] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p>Fast approval process, often within 24 hours.</p>
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

            {/* The loan application journey */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              The loan application journey
            </h2>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Preparing to apply
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Ensure your financial documents and business details are
              up-to-date. Proper preparation is key to a smooth application
              process.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Required documents
            </h3>
            <ol className="list-decimal pl-5 space-y-3 mb-8 text-left text-gray-800 text-md leading-5 marker:font-bold marker:text-gray-900">
              <li className="pl-2">Business tax ID.</li>
              <li className="pl-2">Valid business license.</li>
              <li className="pl-2">
                Personal identification of the business owner.
              </li>
              <li className="pl-2">
                Recent financial statements and tax returns.
              </li>
            </ol>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Online application submission
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Fill out the online form available on National Funding's website.
              The application is user-friendly, designed to be completed in
              under 10 minutes.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Approval and funding
            </h3>
            <p className="text-left text-gray-800 text-md leading-5 mb-8">
              Once submitted, your application undergoes a quick review. If
              approved, funds are typically disbursed within 24-48 hours, making
              it an excellent choice for urgent financial needs.
            </p>

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
              National Funding's streamlined process and minimal requirements
              make it an ideal solution for businesses in need of quick
              financing. By understanding their prerequisites, you can secure
              the funding necessary to take your business to new heights. Visit
              their website today and start your application with confidence.
            </p>

            <div className="flex flex-col items-center justify-center space-y-2">
              <Link
                href="https://www.nationalfunding.com/application/apply-now/"
                className="w-full md:w-auto"
              >
                <Button className="w-full md:w-auto px-8 py-2 text-md bg-[#223657] hover:bg-[#2c456b] text-white font-medium rounded-full">
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
