import React from "react";
import { Metadata } from "next";
import ResponsiveImage from "@/components/ui/responsive-image";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Requirements to qualify for the Discover it® Cash Back",
  description:
    "Qualifying for the Discover it® Cash Back card requires good credit. Learn about the credit score, income, and history requirements.",
};

export default function DiscoverItCashBackRequirementsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <h1 className="text-3xl text-left md:text-4xl font-bold text-gray-800 mb-8 leading-8">
              Requirements to qualify for the Discover it® Cash Back
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
                    Discover it® Cash Back
                  </p>
                </div>
              </div>
              <div>
                <div className="rounded-lg overflow-hidden mb-0">
                  <ResponsiveImage
                    src="https://media.topfinanzas.com/images/requirements-to-qualify-for-the-discover-it-cash-back.webp"
                    alt="Discover it® Cash Back Requirements"
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
                  <div className="rounded-full bg-[#A0465C] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">Age:</span> Be at
                  least 18 years old (or 21 in Puerto Rico).
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#A0465C] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">Residency:</span> Be
                  a U.S. resident with a valid address.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#A0465C] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Social Security Number (SSN) or ITIN:
                  </span>{" "}
                  Required to verify your identity.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#A0465C] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Low credit utilization:
                  </span>{" "}
                  Keeping your usage below 30% of your credit limit signals
                  responsible credit behavior.
                </p>
              </div>
            </div>

            {/* Detailed Requirements Sections */}

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Recommended credit score: Good to excellent
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              To qualify for the Discover it® Cash Back, you'll generally need
              a credit score in the range of <strong>670 to 850</strong>.
            </p>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              <strong>Why does your credit score matter?</strong>
            </p>
            <ul className="list-decimal pl-5 space-y-2 mb-6 text-left text-gray-800 text-md leading-5 marker:text-[#A0465C] marker:font-bold">
              <li>
                A good score demonstrates responsible credit management and
                makes you a lower risk for lenders.
              </li>
              <li>
                Applicants with higher credit scores are more likely to secure
                the lower end of the card's variable APR.
              </li>
            </ul>

            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              <strong>Pro tip:</strong> If your credit score is below 670, work
              on improving it by:
            </p>
            <ul className="list-none space-y-2 mb-6">
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-[#A0465C] mr-2 flex-shrink-0" />
                <span className="text-left text-gray-800 text-md leading-5">
                  Making all payments on time.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-[#A0465C] mr-2 flex-shrink-0" />
                <span className="text-left text-gray-800 text-md leading-5">
                  Keeping your credit utilization below 30%.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-[#A0465C] mr-2 flex-shrink-0" />
                <span className="text-left text-gray-800 text-md leading-5">
                  Avoiding new credit applications until your score improves.
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
              Stable income and financial stability
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              While Discover does not require a minimum income, you must show
              that you can handle a new credit line. This involves reporting:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-6 text-left text-gray-800 text-md leading-5 marker:text-[#A0465C] marker:font-bold">
              <li>
                Your annual or monthly income, including all reliable sources.
              </li>
              <li>
                Your current financial obligations, such as rent, loans, or
                other credit cards.
              </li>
            </ul>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Discover assesses your <strong>debt-to-income (DTI) ratio</strong>
              , which compares your total monthly debt payments to your income.
              A DTI below 36% is generally favorable for approval.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Clean and consistent credit history
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              In addition to your score, Discover evaluates your credit history
              for signs of financial responsibility. This includes:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-8 text-left text-gray-800 text-md leading-5 marker:text-[#A0465C] marker:font-bold">
              <li>
                <strong>On-time payments:</strong> A strong track record of
                punctual payments boosts your chances.
              </li>
              <li>
                <strong>Length of credit history:</strong> Older accounts show
                stability, which can be a positive factor.
              </li>
              <li>
                <strong>Low credit utilization:</strong> Keeping your usage
                below 30% of your credit limit signals responsible credit
                behavior.
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

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Key considerations for approval
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Here are some important points to keep in mind:
            </p>
            <ol className="list-decimal pl-5 space-y-2 mb-6 text-left text-gray-800 text-md leading-5 marker:text-[#A0465C] marker:font-bold">
              <li>
                If you have opened a Discover card recently, you may not be
                eligible to apply for another card right away.
              </li>
              <li>
                Providing accurate and verifiable information during the
                application process is crucial.
              </li>
            </ol>
            <p className="text-left text-gray-800 text-md leading-5 italic mb-8">
              Discover may also perform a hard inquiry on your credit report as
              part of the approval process, which can temporarily impact your
              credit score.
            </p>

            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Who is this card ideal for?
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              The <strong>Discover it® Cash Back</strong> card is perfect for:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-8 text-left text-gray-800 text-md leading-5 marker:text-[#A0465C] marker:font-bold">
              <li>
                Shoppers with good credit who want to earn significant cash
                back.
              </li>
              <li>
                Budget-conscious individuals who prefer a card with no annual
                fee.
              </li>
              <li>
                Those looking for an intro APR period to finance purchases or
                consolidate debt.
              </li>
              <li>
                Strategic spenders who can adjust their habits to align with the
                card's rotating cash back categories.
              </li>
            </ul>

            {/* Banner 2 */}
            <div className="my-8 w-full rounded-xl overflow-hidden shadow-sm">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/banner-2-Top-Blog-Personal-loans.webp"
                alt="Personal Loans"
                width={1200}
                height={400}
              />
            </div>

            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              How to apply successfully
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              If you meet the above criteria, applying for the Discover it®
              Cash Back card is simple:
            </p>
            <ol className="list-decimal pl-5 space-y-2 mb-6 text-left text-gray-800 text-md leading-5 marker:text-[#A0465C] marker:font-bold">
              <li>Visit the official Discover it® Cash Back website.</li>
              <li>
                Fill out the application with your personal, financial, and
                contact information.
              </li>
              <li>
                Submit your application and receive a decision, often in less
                than a minute.
              </li>
            </ol>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              If approved, you can start using your digital card immediately and
              enjoy its benefits.
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

            {/* Is the Discover it® Cash Back right for you? / CTA */}
            <div className="my-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                Is the Discover it® Cash Back right for you?
              </h2>
              <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                Qualifying for the Discover it® Cash Back card requires good
                credit, stable finances, and a solid credit history. Meeting
                these requirements not only increases your chances of approval
                but also ensures you can fully enjoy the card's benefits,
                including cash back rewards, intro APR, and no annual fee.
              </p>
              <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                If you're ready to shop smart, earn rewards, and save money,
                this card could be the perfect fit for your financial goals.
              </p>

              <div className="flex justify-center">
                <a
                  href="https://www.discover.com/credit-cards/cash-back/it-card.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#A0465C] hover:bg-[#853a4d] text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform"
                >
                  Apply Now at Discover
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
