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
  title: "Chase Sapphire Preferred Credit Card Requirements",
  description:
    "Discover the Chase Sapphire Preferred Credit Card requirements and application tips. Learn how to meet eligibility criteria and enjoy premium travel and dining rewards.",
};

export default function ChaseSapphirePreferredRequirementsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <h1 className="text-3xl text-left md:text-4xl font-bold text-gray-800 mb-8 leading-8">
              Chase Sapphire Preferred Credit Card Requirements
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
              Simple steps to enjoy premium perks
            </h2>
            <p className="text-left text-lg text-gray-800 font-medium mb-8 leading-5">
              The Chase Sapphire Preferred Credit Card is a gateway to premium
              travel and dining rewards. With its extensive benefits, it's no
              surprise that many aspire to own this card.
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
                <div className="bg-[#056CA8] rounded-lg overflow-hidden flex items-center justify-center p-8 h-full min-h-[300px]">
                  <p className="text-4xl font-bold text-white text-center tracking-tight leading-snug">
                    Chase Sapphire <br /> Preferred
                  </p>
                </div>
              </div>
              <div className="w-full h-full">
                <div className="rounded-lg overflow-hidden h-full">
                  <ResponsiveImage
                    src="https://media.topfinanzas.com/images/chase-sapphire-preferred-credit-card-requirements.webp"
                    alt="Chase Sapphire Preferred Requirements"
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
                  <div className="rounded-full bg-[#056CA8] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Minimum credit score:
                  </span>{" "}
                  690 or higher, categorized as good to excellent.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#056CA8] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    U.S. residency or valid Social Security Number (SSN):
                  </span>{" "}
                  Applicants must have a verifiable address in the U.S.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#056CA8] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Age requirement:
                  </span>{" "}
                  You must be at least 18 years old.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#056CA8] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Stable and sufficient income:
                  </span>{" "}
                  While Chase doesn&apos;t disclose specific income thresholds,
                  it&apos;s important to demonstrate you can cover credit
                  expenses.
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

            {/* What do these requirements mean? */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              What do these requirements mean?
            </h2>

            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              Why your credit score matters
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Your credit score reflects your reliability as a borrower. With a
              score of 690 or higher, you show that you&apos;re likely to pay
              off debts on time and avoid excessive credit utilization. For
              those close to the threshold, consider improving your score before
              applying.
            </p>

            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              Importance of residency and identification
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              U.S. residency and a valid SSN or ITIN prove your legal status and
              help Chase verify your identity. Without these, your application
              cannot proceed.
            </p>

            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              The role of income stability
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Income isn&apos;t just about earning a high salary—it&apos;s about
              consistency. Applicants should ensure their debt-to-income ratio
              is reasonable. This metric compares your monthly debt obligations
              to your gross income, giving lenders an idea of your financial
              health.
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

            {/* Application process */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Application process
            </h2>
            <p className="text-left text-lg text-gray-800 font-medium mb-8 leading-5">
              Applying for the Chase Sapphire Preferred Card is straightforward
              if you&apos;re prepared. Here&apos;s a breakdown of the steps:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="my-4">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Step 1: Prepare Your Documents
                </h3>
                <p className="text-left text-gray-800 text-md leading-5">
                  Gather essential documents like your SSN, proof of income (pay
                  stubs or tax returns), and a government-issued ID. These
                  ensure a smooth application process.
                </p>
              </div>

              <div className="my-4">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Step 2: Apply Online or In-Person
                </h3>
                <p className="text-left text-gray-800 text-md leading-5">
                  Visit the Chase website to fill out the application form.
                  Alternatively, you can apply in person at a Chase branch. The
                  application requires personal details (name, address, SSN) and
                  financial information (income and employment).
                </p>
              </div>

              <div className="my-4">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Step 3: Understand the Decision Process
                </h3>
                <p className="text-left text-gray-800 text-md leading-5">
                  While Chase often provides instant approval, some applications
                  require additional review. This may involve verifying your
                  credit history or income. Expect a decision within 7–10
                  business days in such cases.
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

            {/* Tips for a successful application */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Tips for a successful application
            </h2>

            <div className="space-y-2 my-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <CheckCircle className="h-6 w-6 text-[#056CA8]" />
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Review your credit report:
                  </span>{" "}
                  Correct any errors that might lower your score.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <CheckCircle className="h-6 w-6 text-[#056CA8]" />
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Limit new credit inquiries:
                  </span>{" "}
                  Avoid applying for other cards or loans right before
                  submitting your application.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <CheckCircle className="h-6 w-6 text-[#056CA8]" />
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Maintain low credit utilization:
                  </span>{" "}
                  Ideally, use less than 30% of your available credit.
                </p>
              </div>
            </div>

            {/* Your best option */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Your best option
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              The Chase Sapphire Preferred Credit Card is a valuable tool for
              frequent travelers and diners. By understanding the requirements
              and following the application steps carefully, you can increase
              your chances of approval and start enjoying the rewards this card
              offers.
            </p>

            {/* CTA */}
            <div className="flex flex-col items-center justify-center mb-8">
              <Link
                href="https://creditcards.chase.com/rewards-credit-cards/sapphire/preferred"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto"
              >
                <Button className="w-full md:w-auto px-8 py-2 text-md bg-[#056CA8] hover:bg-[#034d7a] text-white font-medium rounded-full">
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
