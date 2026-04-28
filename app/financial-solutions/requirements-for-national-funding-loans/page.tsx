import Image from "next/image";
import React from "react";
import { Metadata } from "next";
import { generateCreditCardSchema } from "@/lib/seo";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Requirements for National Funding Loans | TopFinanzas US",
  description:
    "Unlock your business potential with National Funding. Learn about the requirements, application journey, and eligibility factors for quick and flexible financing.",
  alternates: {
    canonical:
      "https://us.topfinanzas.com/financial-solutions/requirements-for-national-funding-loans",
  },
  openGraph: {
    title: "Requirements for National Funding Loans | TopFinanzas US",
    description:
      "Unlock your business potential with National Funding. Learn about the requirements, application journey, and eligibility factors for quick and flexible financing.",
    url: "https://us.topfinanzas.com/financial-solutions/requirements-for-national-funding-loans",
    type: "article",
    images: [
      {
        url: "https://media.topfinanzas.com/images/requirements-for-national-funding-loans.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function NationalFundingRequirementsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateCreditCardSchema({
              name: "Requirements for National Funding Loans | TopFinanzas US",
              description:
                "Unlock your business potential with National Funding. Learn about the requirements, application journey, and eligibility factors for quick and flexible financing.",
              url: "https://us.topfinanzas.com/financial-solutions/requirements-for-national-funding-loans",
              image:
                "https://media.topfinanzas.com/images/requirements-for-national-funding-loans.webp",
            }),
          ).replace(/</g, "\u003c"),
        }}
      />

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

            {/* ELEMENT 7: HERO IMAGE */}
            <div className="my-8 text-left sm:text-left">
              <Image
                src="https://media.topfinanzas.com/images/requirements-for-national-funding-loans.webp"
                alt="Requirements for National Funding Loans"
                width={900}
                height={507}
                className="w-full h-auto rounded-xl"
                priority={false}
                fetchPriority="high"
                quality={85}
                loading="eager"
              />
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

            {/* ELEMENT 12: FIRST PROMOTIONAL IMAGE */}
            <div className="my-8 text-left sm:text-left">
              <Link href="/personal-finance/best-0-apr-balance-transfer-cards-a-guide-to-managing-debt">
                <Image
                  src="https://media.topfinanzas.com/images/banner-1-Top-Blog-Debt-management.webp"
                  alt="Practical Guide to Getting Out of Debt"
                  width={1000}
                  height={563}
                  className="mx-auto w-full md:w-8/12 h-auto rounded-xl"
                  loading="lazy"
                  quality={80}
                />
              </Link>
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

            {/* ELEMENT 14: SECOND PROMOTIONAL IMAGE */}
            <div className="my-8 text-left sm:text-left">
              <Link href="/financial-solutions">
                <Image
                  src="https://media.topfinanzas.com/images/banner-2-Top-Blog-Personal-loans.webp"
                  alt="Personal Loans - Your Smart Strategy for Financial Control"
                  width={1000}
                  height={563}
                  className="mx-auto w-full md:w-8/12 h-auto rounded-xl"
                  loading="lazy"
                  quality={80}
                />
              </Link>
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

            {/* ELEMENT 16: THIRD PROMOTIONAL IMAGE */}
            <div className="my-8 text-left sm:text-left">
              <Link href="/personal-finance/top-credit-cards-to-maximize-your-black-friday-savings">
                <Image
                  src="https://media.topfinanzas.com/images/banner-3-Top-Blog-Credit-Cards.webp"
                  alt="Looking for the Perfect Credit Card?"
                  width={1000}
                  height={563}
                  className="mx-auto w-full md:w-8/12 h-auto rounded-xl"
                  loading="lazy"
                  quality={80}
                />
              </Link>
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
