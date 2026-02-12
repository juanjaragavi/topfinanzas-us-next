import React from "react";
import { Metadata } from "next";
import ResponsiveImage from "@/components/ui/responsive-image";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Requirements for the Capital One Savor Cash Rewards Credit Card",
  description:
    "The Capital One Savor Card is targeted at individuals with excellent credit. Learn about the requirements, eligibility factors, and how to apply.",
};

export default function CapitalOneSavorRequirementsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <h1 className="text-3xl text-left md:text-4xl font-bold text-gray-800 mb-8 leading-8">
              Requirements for the Capital One Savor Cash Rewards Credit Card
            </h1>

            {/* Ad Unit: square03 */}
            <div
              id="square03"
              className="w-full flex justify-center my-6"
              data-topads
              data-topads-size="square"
            ></div>

            {/* Intro/Summary Requirements */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Requirements
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8 items-center">
              <div className="w-full">
                <div className="my-4 overflow-hidden flex items-center justify-center p-8 h-full min-h-[300px]">
                  <p className="text-4xl font-bold text-gray-800 tracking-tight text-center">
                    Capital One Savor
                  </p>
                </div>
              </div>
              <div>
                <div className="rounded-lg overflow-hidden mb-0">
                  <ResponsiveImage
                    src="https://media.topfinanzas.com/images/requirements-for-the-capital-one-savor-cash-rewards-credit-card.webp"
                    alt="Capital One Savor Cash Rewards Credit Card Requirements"
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
                  <div className="rounded-full bg-[#AB5033] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  A strong credit score to demonstrate your financial
                  reliability.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#AB5033] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  Proof of stable income to ensure you can manage the card
                  responsibly.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#AB5033] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  Residency in the U.S. with a valid SSN or ITIN.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#AB5033] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  A clean financial history with no recent bankruptcies or
                  delinquencies.
                </p>
              </div>
            </div>

            {/* Detailed Requirements */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Detailed requirements to apply for the Capital One Savor Cash
              Rewards Credit Card
            </h2>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              1. Excellent credit score
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              The Capital One Savor Card is targeted at individuals with
              excellent credit. To qualify, you'll need:
            </p>
            <ul className="list-none space-y-2 mb-6">
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-[#AB5033] mr-2 flex-shrink-0" />
                <span className="text-left text-gray-800 text-md leading-5">
                  A credit score of 700 or higher.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-[#AB5033] mr-2 flex-shrink-0" />
                <span className="text-left text-gray-800 text-md leading-5">
                  A history of making timely payments on other credit accounts.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-[#AB5033] mr-2 flex-shrink-0" />
                <span className="text-left text-gray-800 text-md leading-5">
                  Low credit utilization, ideally under 30% of your total credit
                  limit.
                </span>
              </li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              2. Age and residency
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              To be eligible, you must:
            </p>
            <ul className="list-none space-y-2 mb-6">
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-[#AB5033] mr-2 flex-shrink-0" />
                <span className="text-left text-gray-800 text-md leading-5">
                  Be at least 18 years old (19 in some states).
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-[#AB5033] mr-2 flex-shrink-0" />
                <span className="text-left text-gray-800 text-md leading-5">
                  Reside in the United States and possess a valid Social
                  Security Number (SSN) or Individual Taxpayer Identification
                  Number (ITIN).
                </span>
              </li>
            </ul>

            {/* Ad Unit: square04 */}
            <div
              id="square04"
              className="w-full flex justify-center my-6"
              data-topads
              data-topads-size="square"
            ></div>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              3. Verifiable income
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Capital One requires proof that you have sufficient income to
              manage the card. This includes:
            </p>
            <ul className="list-none space-y-2 mb-6">
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-[#AB5033] mr-2 flex-shrink-0" />
                <span className="text-left text-gray-800 text-md leading-5">
                  A stable source of income, such as employment or
                  self-employment.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-[#AB5033] mr-2 flex-shrink-0" />
                <span className="text-left text-gray-800 text-md leading-5">
                  Income documentation, such as pay stubs or tax returns.
                </span>
              </li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              4. Clean financial history
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Your financial history should indicate responsible credit
              behavior, such as:
            </p>
            <ul className="list-none space-y-2 mb-8">
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-[#AB5033] mr-2 flex-shrink-0" />
                <span className="text-left text-gray-800 text-md leading-5">
                  No recent bankruptcies or defaults.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-[#AB5033] mr-2 flex-shrink-0" />
                <span className="text-left text-gray-800 text-md leading-5">
                  A positive track record with other credit products.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-[#AB5033] mr-2 flex-shrink-0" />
                <span className="text-left text-gray-800 text-md leading-5">
                  Avoiding multiple recent credit card applications, which can
                  lower your approval chances.
                </span>
              </li>
            </ul>

            {/* Banner 1 */}
            <div className="my-8 w-full rounded-xl overflow-hidden shadow-sm">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/banner-1-Top-Blog-Debt-management.webp"
                alt="Debt Management"
                width={1200}
                height={400}
              />
            </div>

            {/* Steps to Apply */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Steps to apply for the Capital One Savor Cash Rewards Credit Card
            </h2>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Step 1: Gather your documents
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              To ensure a smooth application process, have the following ready:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-6 text-left text-gray-800 text-md leading-5 marker:text-[#AB5033] marker:font-bold">
              <li>
                Government-issued identification (e.g., driver's license or
                passport).
              </li>
              <li>Proof of income (e.g., pay stubs or recent tax returns).</li>
              <li>Your SSN or ITIN.</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Step 2: Complete the online application
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Visit the official Capital One website to start your application.
              Be prepared to provide:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-6 text-left text-gray-800 text-md leading-5 marker:text-[#AB5033] marker:font-bold">
              <li>
                Personal details, including your name, address, and date of
                birth.
              </li>
              <li>Employment and income information.</li>
              <li>Housing costs (monthly rent or mortgage payments).</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Step 3: Wait for approval
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Capital One typically provides a decision within seconds. In some
              cases, additional verification may be required, extending the
              approval process to a few days.
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

            {/* Additional Considerations */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Additional considerations
            </h2>

            <h3 className="text-xl font-bold text-gray-900 mb-3">Annual fee</h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              The Capital One Savor Card has a $0 annual fee, so ensure that
              your financial situation allows for this expense.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Interest rates
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Be mindful of the card's variable APR. Paying your balance in full
              each month helps you avoid interest charges.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Responsible usage
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Proper credit card usage, such as making payments on time and
              maintaining low balances, can improve your credit score and
              financial health.
            </p>

            {/* Banner 3 */}
            <div className="my-8 w-full rounded-xl overflow-hidden shadow-sm">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/banner-3-Top-Blog-Credit-Cards.webp"
                alt="Credit Cards"
                width={1200}
                height={400}
              />
            </div>

            {/* Who should apply? */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Who should apply for the Capital One Savor Card?
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              The Capital One Savor Card is ideal for:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-8 text-left text-gray-800 text-md leading-5 marker:text-[#AB5033] marker:font-bold">
              <li>
                <strong>Individuals with excellent credit:</strong> Meeting the
                credit score requirement is essential.
              </li>
              <li>
                <strong>People with stable income:</strong> Ensure you can
                handle the card's spending and payment obligations.
              </li>
              <li>
                <strong>U.S. residents:</strong> This card is only available to
                those residing in the United States with valid identification.
              </li>
            </ul>

            {/* Your best option / CTA */}
            <div className="my-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                Your best option
              </h2>
              <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                Applying for the Capital One Savor Cash Rewards Credit Card is
                straightforward if you meet the outlined requirements. Ensuring
                that you have a strong credit history, stable income, and proper
                documentation will increase your chances of approval.
              </p>
              <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                Are you ready to apply? Start by gathering your documents and
                visiting the Capital One website to take the first step toward
                accessing one of the most rewarding cash-back credit cards
                available.
              </p>

              <div className="flex justify-center">
                <a
                  href="https://www.capitalone.com/credit-cards/savor/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#AB5033] hover:bg-[#8f432b] text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform"
                >
                  Apply Now at Capital One
                </a>
              </div>
            </div>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
