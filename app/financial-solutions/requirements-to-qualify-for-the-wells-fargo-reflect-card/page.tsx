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
  title: "Requirements to Qualify for the Wells Fargo Reflect® Card",
  description:
    "Good credit unlocks 21 months of 0% APR with the Wells Fargo Reflect® Card. Simplify your finances today!",
};

export default function WellsFargoReflectRequirementsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <h1 className="text-3xl text-left md:text-4xl font-bold text-gray-800 mb-8 leading-8">
              Requirements to Qualify for the Wells Fargo Reflect® Card
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
              Access 21 months of 0% APR
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              The Wells Fargo Reflect® Card is an excellent choice for those
              seeking a credit card with an extended 0% APR period on purchases
              and balance transfers. However, to take advantage of these
              benefits, you must meet specific requirements.
            </p>

            {/* Requirements Section */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Requirements
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8 items-center">
              <div className="w-full">
                <div className="my-4 overflow-hidden flex items-center justify-center p-8 h-full min-h-[300px]">
                  <p className="text-4xl font-bold text-gray-800 tracking-tight text-center">
                    Wells Fargo
                    <br />
                    Reflect® Card
                  </p>
                </div>
              </div>
              <div>
                <div className="rounded-lg overflow-hidden mb-0">
                  <ResponsiveImage
                    src="https://media.topfinanzas.com/images/requirements-to-qualify-for-the-wells-fargo-reflect-card.webp"
                    alt="Wells Fargo Reflect Card Requirements"
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
                  <div className="rounded-full bg-[#A1212B] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Age requirement:
                  </span>{" "}
                  Be at least 18 years old (21 in Puerto Rico).
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#A1212B] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">Residency:</span>{" "}
                  Live in the United States with a valid address.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#A1212B] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Social Security Number (SSN) or ITIN:
                  </span>{" "}
                  Required for application.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#A1212B] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Credit utilization:
                  </span>{" "}
                  Using less than 30% of your available credit shows good debt
                  management.
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

            {/* Recommended credit score */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Recommended credit score: Good to excellent
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              The Wells Fargo Reflect® Card is designed for individuals with a
              strong credit history, generally meaning a FICO score in the range
              of 670 to 850.
            </p>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Why does your credit score matter?
            </p>
            <ul className="list-disc pl-5 space-y-2 text-left text-gray-800 mb-4 text-md leading-5 font-light">
              <li>It demonstrates your ability to manage debt responsibly.</li>
              <li>
                A higher score increases your chances of approval and could
                qualify you for a lower variable APR after the introductory
                period.
              </li>
            </ul>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              If you're unsure about your score, use free tools to check it. To
              improve your score:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-left text-gray-800 mb-4 text-md leading-5 font-light">
              <li>Pay bills on time consistently.</li>
              <li>Keep your credit utilization below 30%.</li>
              <li>
                Avoid opening new credit accounts until you're ready to apply.
              </li>
            </ul>

            {/* Ad Unit: square04 */}
            <div
              id="square04"
              className="w-full flex justify-center my-6"
              data-topads
              data-topads-size="square"
            ></div>

            {/* Sufficient income */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Sufficient income and financial stability
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              While Wells Fargo does not specify a minimum income, they will
              assess your financial stability to ensure you can manage a credit
              line. Key factors include:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-left text-gray-800 mb-4 text-md leading-5 font-light">
              <li>Your reported monthly or annual income.</li>
              <li>
                Your debt-to-income (DTI) ratio: A DTI below 36% is generally
                favorable.
              </li>
            </ul>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Accurately reporting your income and obligations (such as rent,
              mortgage, loans, or other credit cards) will improve your
              application's chances.
            </p>

            {/* Clean and reliable credit history */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Clean and reliable credit history
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Wells Fargo will review the quality and consistency of your credit
              history, including:
            </p>
            <ol className="list-decimal pl-5 space-y-3 mb-8 text-left text-gray-800 text-md leading-5 marker:font-bold marker:text-gray-900">
              <li className="pl-2">
                <span className="font-bold text-gray-900">
                  On-time payments:
                </span>{" "}
                A strong history of timely payments is essential.
              </li>
              <li className="pl-2">
                <span className="font-bold text-gray-900">
                  Length of credit history:
                </span>{" "}
                Accounts open for several years indicate financial stability.
              </li>
              <li className="pl-2">
                <span className="font-bold text-gray-900">
                  Credit utilization:
                </span>{" "}
                Using less than 30% of your available credit shows good debt
                management.
              </li>
            </ol>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              A clean and well-maintained credit history signals to lenders that
              you can handle new credit responsibly.
            </p>

            {/* General eligibility and restrictions */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              General eligibility and restrictions
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              To apply for the Wells Fargo Reflect® Card, you need to meet
              basic criteria:
            </p>
            <ol className="list-decimal pl-5 space-y-3 mb-8 text-left text-gray-800 text-md leading-5 marker:font-bold marker:text-gray-900">
              <li className="pl-2">
                Age requirement: Be at least 18 years old (21 in Puerto Rico).
              </li>
              <li className="pl-2">
                Residency: Live in the United States with a valid address.
              </li>
              <li className="pl-2">
                Social Security Number (SSN) or ITIN: Required for application.
              </li>
            </ol>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              <span className="font-bold text-gray-900">
                Additional restrictions:
              </span>
            </p>
            <ul className="list-disc pl-5 space-y-2 text-left text-gray-800 mb-4 text-md leading-5 font-light">
              <li>
                You cannot have opened another Wells Fargo credit card within
                the past 6 months.
              </li>
              <li>
                You may not be eligible for the intro APR offer if you've
                received a similar benefit on the Wells Fargo Reflect® Card
                within the last 48 months.
              </li>
            </ul>

            {/* Balance transfer considerations */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Balance transfer considerations
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              If you plan to use the 0% APR introductory balance transfer offer,
              keep the following in mind:
            </p>
            <ol className="list-decimal pl-5 space-y-3 mb-8 text-left text-gray-800 text-md leading-5 marker:font-bold marker:text-gray-900">
              <li className="pl-2">
                Transfers must be completed within the first 120 days of account
                opening.
              </li>
              <li className="pl-2">
                A balance transfer fee applies: 5% or $5, whichever is greater.
              </li>
              <li className="pl-2">
                Transfers cannot be made from other Wells Fargo accounts.
              </li>
            </ol>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              To maximize this benefit, transfer balances as early as possible
              and aim to pay down the balance during the promotional period.
            </p>

            {/* Who should apply */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Who should apply for the Wells Fargo Reflect® Card?
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              This card is best suited for individuals who:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-left text-gray-800 mb-4 text-md leading-5 font-light">
              <li>Have good credit (670+).</li>
              <li>
                Want to consolidate high-interest debt with 21 months of 0% APR.
              </li>
              <li>
                Plan large purchases and need time to pay them off without
                interest.
              </li>
              <li>
                Appreciate low-cost benefits, such as cell phone protection,
                while avoiding an annual fee.
              </li>
            </ul>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              If you fit this profile, the Wells Fargo Reflect® Card offers a
              great solution to save on interest and manage your finances
              effectively.
            </p>

            {/* How to apply */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              How to apply successfully
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              If you meet the requirements, applying for the Wells Fargo
              Reflect® Card is straightforward:
            </p>
            <div className="space-y-2 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#A1212B] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Visit the official Wells Fargo Reflect® Card website.
                  </span>
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#A1212B] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Complete the application
                  </span>{" "}
                  with your personal and financial information.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#A1212B] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Submit your application
                  </span>{" "}
                  and await a decision—many are processed within minutes.
                </p>
              </div>
            </div>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Once approved, you can start enjoying the card's benefits,
              including the long 0% APR period.
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

            {/* Is this card right for you? */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Is the Wells Fargo Reflect® Card right for you?
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Qualifying for the Wells Fargo Reflect® Card requires a solid
              credit score, stable income, and reliable credit history. By
              meeting these requirements, you'll gain access to one of the best
              cards for avoiding interest, along with added benefits like cell
              phone protection and financial management tools.
            </p>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              If your goal is to reduce costs, gain extra time to pay off debt,
              or finance significant purchases, the Wells Fargo Reflect® Card
              could be the perfect financial tool for you.
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

            {/* Your best option (CTA) */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Your best option
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              The Wells Fargo Reflect® Card simplifies managing your debt with
              its long introductory APR period. Meet the requirements and access
              financial flexibility today.
            </p>

            <div className="flex justify-center mb-6">
              <Link
                href="https://creditcards.wellsfargo.com/reflect-visa-credit-card/"
                className="w-full"
                target="_blank"
                rel="noopener noreferrer"
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
