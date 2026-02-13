import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export const metadata: Metadata = {
  title:
    "Bank of America Business Loans Requirements: Complete Guide - TopFinanzas US",
  description:
    "Learn about Bank of America business loan requirements, eligibility criteria, and how to apply. Discover financing options for your business.",
  keywords:
    "Bank of America business loans requirements, eligibility, application, business financing, credit line",
};

export default function RequirementsBofABusinessLoansPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col" data-category="loans">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* ELEMENT 3: H1 TITLE */}
            <h1 className="text-3xl text-left sm:text-left md:text-3xl font-bold text-gray-800 mb-4 leading-8">
              Bank of America Business Loans Requirements
            </h1>

            {/* ELEMENT 4: FIRST AD UNIT */}
            <div
              id="square03"
              className="w-full flex justify-center my-6"
              data-topads
              data-topads-size="square"
            ></div>

            <div className="my-8 text-left sm:text-left">
              {/* ELEMENT 5: OPENING PARAGRAPH */}
              <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                Is your business ready for financing?
              </h2>

              <p className="text-lg text-gray-800 mb-8 leading-5 text-left">
                Bank of America provides a range of business financing options
                for small to mid-sized businesses. Whether you need a credit
                line, term loan, or cash-secured option, understanding the
                requirements upfront will help you prepare a strong application.
              </p>

              {/* ELEMENT 6: HERO IMAGE */}
              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/bank-of-america-business-loans-requirements.webp"
                  alt="Bank of America Business Loans Requirements"
                  width={900}
                  height={507}
                  className="w-full h-auto rounded-xl"
                  priority={false}
                  fetchPriority="high"
                  quality={85}
                  loading="eager"
                />
              </div>

              <section className="my-6">
                {/* ELEMENT 7: REQUIREMENTS SECTION */}
                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Requirements
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#012169] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Credit score (FICO 700+):
                      </span>{" "}
                      A strong personal and business credit score is crucial for
                      approval.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#012169] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Time in business (2+ years):
                      </span>{" "}
                      Established businesses with at least two years of
                      operation demonstrate stability.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#012169] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Revenue ($100K+ annually):
                      </span>{" "}
                      Minimum annual revenue shows that your business generates
                      consistent income.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#012169] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Collateral:</span> Some
                      loan products may require business or personal assets as
                      collateral.
                    </div>
                  </div>
                </div>

                {/* ELEMENT 8: SECOND AD UNIT */}
                <div
                  id="square04"
                  className="w-full flex justify-center my-6"
                  data-topads
                  data-topads-size="square"
                ></div>

                {/* ELEMENT 9: WHY REQUIREMENTS MATTER */}
                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Understanding loan products
                </h2>

                <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
                  Business Advantage Credit Line
                </h3>
                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  A flexible revolving credit line from $10,000 to $100,000.
                  Draw funds as needed and only pay interest on what you use.
                  Ideal for managing cash flow fluctuations and short-term
                  operational expenses.
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
                  Business Advantage Term Loan
                </h3>
                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  A lump-sum loan from $10,000 to $100,000 with fixed monthly
                  payments over a set term. Best for planned investments such as
                  equipment purchases, expansion, or other specific business
                  needs.
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
                  Cash-Secured Business Credit Line
                </h3>
                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Secured by a Bank of America CD or savings account, this
                  option is ideal for businesses building credit or those that
                  may not qualify for unsecured financing. It helps establish
                  business credit while providing access to needed funds.
                </p>

                {/* ELEMENT 10: FIRST PROMOTIONAL IMAGE */}
                <div className="my-8 text-left sm:text-left">
                  <Link href="/personal-finance/getting-out-of-debt-a-practical-guide/">
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

                {/* ELEMENT 12: APPLICATION PROCESS */}
                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  How to apply
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  <span className="font-bold">
                    Step 1: Assess your eligibility
                  </span>
                  <br />
                  Review your credit score, time in business, and annual revenue
                  to determine which loan product best suits your needs.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  <span className="font-bold">
                    Step 2: Gather documentation
                  </span>
                  <br />
                  Prepare business tax returns, financial statements, bank
                  statements, and a business plan or description of how the
                  funds will be used.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  <span className="font-bold">
                    Step 3: Apply online or in branch
                  </span>
                  <br />
                  Start your application on the Bank of America website or visit
                  a local branch for personalized assistance from a business
                  lending specialist.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  <span className="font-bold">Step 4: Review and funding</span>
                  <br />
                  Once approved, review your loan terms carefully. Funding
                  timelines vary by product, but you can typically expect
                  disbursement within a few business days of approval.
                </p>

                {/* ELEMENT 11: SECOND PROMOTIONAL IMAGE */}
                <div className="my-8 text-left sm:text-left">
                  <Link href="/personal-finance/personal-loans-your-smart-strategy-for-financial-control/">
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

                {/* ELEMENT 13: TIPS FOR SUCCESS */}
                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Tips for a stronger application
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#012169] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Maintain clean credit:
                      </span>{" "}
                      Pay down existing debts and resolve any inaccuracies on
                      your credit reports before applying.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#012169] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Open a business checking account:
                      </span>{" "}
                      Having an existing relationship with Bank of America can
                      strengthen your application and may provide rate benefits.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#012169] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Prepare thorough documentation:
                      </span>{" "}
                      Complete and organized financial records demonstrate
                      professionalism and accelerate the review process.
                    </div>
                  </div>
                </div>

                {/* ELEMENT 14: THIRD PROMOTIONAL IMAGE */}
                <div className="my-8 text-left sm:text-left">
                  <Link href="/personal-finance/top-credit-cards-to-maximize-your-black-friday-savings/">
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

                {/* ELEMENT 15: YOUR BEST OPTION */}
                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Your best option
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Bank of America business loans offer competitive rates and
                  flexible terms for established businesses. Whether you need
                  revolving credit for day-to-day operations or a term loan for
                  specific investments, their range of products can be tailored
                  to your business needs.
                </p>

                {/* ELEMENT 16: FINAL EXTERNAL CTA */}
                <div className="text-left my-8">
                  <Link href="https://www.bankofamerica.com/smallbusiness/business-financing/">
                    <Button className="bg-[#012169] hover:bg-[#001545] text-white font-medium text-md py-2 px-8 rounded-full w-full">
                      See on official site*
                    </Button>
                  </Link>
                  <p className="text-sm text-gray-500 mt-3 text-center">
                    *By clicking you will be redirected to an external site.
                  </p>
                </div>
              </section>

              {/* ELEMENT 17: AI CONTENT DISCLAIMER */}
              <AIContentDisclaimer />
            </div>
          </div>
        </div>
      </article>

      {/* ELEMENT 18: FOOTER */}
      <CompactFooter />
    </main>
  );
}
