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
  title: "Requirements to Qualify for the Citi® Diamond Preferred® Card",
  description:
    "Good credit, steady income, and a clean history—qualify for the Citi® Diamond Preferred® Card and enjoy 0% APR for 21 months.",
};

export default function CitiDiamondPreferredRequirementsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <h1 className="text-3xl text-left md:text-4xl font-bold text-gray-800 mb-8 leading-8">
              Requirements to Qualify for the Citi® Diamond Preferred® Card
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
              Qualify for 0% APR
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              The Citi® Diamond Preferred® Card is a top option for managing
              existing debt thanks to its 0% APR for 21 months on balance
              transfers and 12 months on purchases. To help you determine if
              you're eligible, we break down the key requirements and steps you
              need to meet before applying.
            </p>

            {/* Requirements Section */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Requirements
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8 items-center">
              <div className="w-full">
                <div className="my-4 overflow-hidden flex items-center justify-center p-8 h-full min-h-[300px]">
                  <p className="text-4xl font-bold text-gray-800 tracking-tight text-center">
                    Citi® Diamond
                    <br />
                    Preferred® Card
                  </p>
                </div>
              </div>
              <div>
                <div className="rounded-lg overflow-hidden mb-0">
                  <ResponsiveImage
                    src="https://media.topfinanzas.com/images/requirements-to-qualify-for-the-citi-diamond-preferred-card.webp"
                    alt="Citi Diamond Preferred Card Requirements"
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
                  <div className="rounded-full bg-[#191B1A] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">Age:</span> Be at
                  least 18 years old.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#191B1A] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    On-time payments:
                  </span>{" "}
                  Late payments can hurt your application.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#191B1A] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Credit history length:
                  </span>{" "}
                  Accounts open for several years signal reliability.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#191B1A] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Low credit utilization:
                  </span>{" "}
                  Aim to use less than 30% of your total available credit.
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

            {/* Good to excellent credit score */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Good to excellent credit score
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              To qualify for this card, you'll need a FICO score of 670 or
              higher. This range—considered good to excellent credit—shows Citi
              that you're a responsible borrower.
            </p>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              If you're unsure about your credit score:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-left text-gray-800 mb-4 text-md leading-5 font-light">
              <li>Use free tools to check your current score.</li>
              <li>
                Work on improving it by making on-time payments and keeping
                credit utilization below 30%.
              </li>
            </ul>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              The better your score, the higher your chances of approval and the
              more favorable terms you may receive.
            </p>

            {/* Ad Unit: square04 */}
            <div
              id="square04"
              className="w-full flex justify-center my-6"
              data-topads
              data-topads-size="square"
            ></div>

            {/* Proof of income and financial stability */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Proof of income and financial stability
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Citi will evaluate your financial stability to ensure you can
              handle a new line of credit. They consider:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-left text-gray-800 mb-4 text-md leading-5 font-light">
              <li>Your monthly or annual income.</li>
              <li>Your debt-to-income ratio (DTI)—ideally below 36%.</li>
            </ul>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              A consistent income and low existing debt improve your chances of
              approval. Before applying, consider paying down balances to
              strengthen your application.
            </p>

            {/* Clean and reliable credit history */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Clean and reliable credit history
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Beyond your score, Citi reviews your overall credit history,
              focusing on:
            </p>
            <ol className="list-decimal pl-5 space-y-3 mb-8 text-left text-gray-800 text-md leading-5 marker:font-bold marker:text-gray-900">
              <li className="pl-2">
                <span className="font-bold text-gray-900">
                  On-time payments:
                </span>{" "}
                Late payments can hurt your application.
              </li>
              <li className="pl-2">
                <span className="font-bold text-gray-900">
                  Credit history length:
                </span>{" "}
                Accounts open for several years signal reliability.
              </li>
              <li className="pl-2">
                <span className="font-bold text-gray-900">
                  Low credit utilization:
                </span>{" "}
                Aim to use less than 30% of your total available credit.
              </li>
            </ol>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              A well-managed credit history tells lenders you're likely to
              handle new credit responsibly.
            </p>

            {/* Eligibility rules and restrictions */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Eligibility rules and restrictions
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Citi has specific restrictions that may affect your eligibility:
            </p>
            <ol className="list-decimal pl-5 space-y-3 mb-8 text-left text-gray-800 text-md leading-5 marker:font-bold marker:text-gray-900">
              <li className="pl-2">
                You can't apply if you've opened a Citi card in the last 6
                months.
              </li>
              <li className="pl-2">
                You won't qualify for the balance transfer offer if you've
                received the same benefit on the Citi® Diamond Preferred® Card
                within the last 48 months.
              </li>
            </ol>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Check your recent credit activity and Citi card history to ensure
              you meet these conditions.
            </p>

            {/* General requirements */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              General requirements
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              To apply for the Citi® Diamond Preferred® Card, you must:
            </p>
            <ol className="list-decimal pl-5 space-y-3 mb-8 text-left text-gray-800 text-md leading-5 marker:font-bold marker:text-gray-900">
              <li className="pl-2">Be at least 18 years old.</li>
              <li className="pl-2">
                Reside in the United States with a valid U.S. address.
              </li>
              <li className="pl-2">
                Have a Social Security Number (SSN) or ITIN.
              </li>
            </ol>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              These are standard requirements for most credit card applications.
            </p>

            {/* Balance transfer considerations */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Balance transfer considerations
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              The 0% APR for 21 months on balance transfers comes with a few
              requirements to keep in mind:
            </p>
            <ol className="list-decimal pl-5 space-y-3 mb-8 text-left text-gray-800 text-md leading-5 marker:font-bold marker:text-gray-900">
              <li className="pl-2">
                Transfers must be completed within the first 4 months of account
                opening.
              </li>
              <li className="pl-2">
                A balance transfer fee applies: either $5 or 5% of the amount
                transferred (whichever is greater).
              </li>
            </ol>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              To maximize this benefit, transfer your balances early and create
              a plan to pay off the debt within the promotional period.
            </p>

            {/* Who should apply? */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Who should apply?
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              The Citi® Diamond Preferred® Card is ideal for individuals who:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-left text-gray-800 mb-4 text-md leading-5 font-light">
              <li>Have a good to excellent credit score (670+).</li>
              <li>
                Want to consolidate high-interest debt with a 0% APR for 21
                months.
              </li>
              <li>
                Need a card for a large purchase with 0% APR for 12 months.
              </li>
              <li>Have a steady income and a low debt-to-income ratio.</li>
            </ul>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              If this sounds like you, this card can help you take control of
              your finances while avoiding high interest charges.
            </p>

            {/* Banner 2 */}
            <div className="my-8 w-full rounded-xl overflow-hidden shadow-md">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/banner-2-Top-Blog-Personal-loans.webp"
                alt="Unlock your path to debt freedom"
                width={600}
                height={600}
              />
            </div>

            {/* Bottom line */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Bottom line
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              The Citi® Diamond Preferred® Card is perfect for individuals
              with a strong credit profile who want to take advantage of one of
              the longest 0% APR periods on the market. By meeting the
              eligibility requirements—such as having good credit, stable
              income, and a clean credit history—you can unlock a powerful tool
              for managing debt and saving money.
            </p>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              If you're ready to simplify your finances and take the next step,
              this card could be the solution you've been looking for.
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

            {/* CTA */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Your best option
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              The Citi® Diamond Preferred® Card simplifies managing your debt
              with its long introductory APR period. Meet the requirements and
              access financial flexibility today.
            </p>

            <div className="flex justify-center mb-6">
              <Link
                href="https://www.citi.com/credit-cards/citi-diamond-preferred-credit-card"
                className="w-full"
              >
                <Button className="w-full px-8 py-2 text-md bg-[#98c5e9] hover:bg-[#8bb4d4] text-white font-medium rounded-full">
                  See on official site*
                </Button>
              </Link>
            </div>
            <p className="text-sm text-gray-600 text-center mb-8">
              *By clicking you will be redirected to an external site.
            </p>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
