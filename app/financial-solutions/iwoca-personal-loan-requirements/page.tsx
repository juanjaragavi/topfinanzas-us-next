import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "iwoca Flexi-Loan Requirements: SME Application Guide - Top Finance UK",
    description:
      "Learn about iwoca Flexi-Loan eligibility criteria for UK SMEs, the online application process, and required business information.",
    keywords:
      "iwoca requirements, Flexi-Loan eligibility, SME loan application UK, business finance criteria, fintech lending requirements, iwoca documentation",
  };
}

export default function IwocaPersonalLoanRequirementsPage() {
  // Note: Adjusting component name and content for iwoca's Business Flexi-Loan focus
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12" data-category="loans">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-3xl font-bold text-gray-800 mb-4 leading-8">
              Requirements for iwoca Flexi-Loans (Business Finance)
            </h1>

            <div id="square02" data-topads data-topads-size="square"></div>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 mb-8 leading-5 text-left">
                iwoca provides fast, flexible finance for UK SMEs. Understanding
                their eligibility criteria and application process helps
                businesses access working capital quickly.
              </p>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/uk/loans/718137037-fotosprestamo-iwoca2uk.webp"
                  alt="iwoca Flexi-Loan Requirements"
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
                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Basic Eligibility Criteria for SMEs
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-red-400 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Business Type:</span>{" "}
                      Available to Limited Companies and Limited Liability
                      Partnerships (LLPs) registered in the UK. Sole traders are
                      also eligible.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-red-400 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Trading History:</span>{" "}
                      Businesses typically need to have been trading for at
                      least 4 months. Newer businesses might be considered based
                      on other factors.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-red-400 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Turnover:</span> Minimum
                      annual turnover requirements apply, often starting around
                      £10,000, but this can vary. iwoca assesses overall
                      business health.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-red-400 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Creditworthiness:</span>{" "}
                      iwoca assesses the business's credit profile and
                      potentially the director's personal credit history. They
                      aim to look beyond just the credit score, considering
                      real-time business data.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-red-400 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">UK Based Operation:</span>{" "}
                      The business must be based and operating in the UK.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Information & Documentation Needed:
                </h2>
                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  iwoca's process is designed to be data-driven and minimize
                  paperwork:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-red-400 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Basic Business Details:
                      </span>{" "}
                      Company name, registration number (if applicable),
                      address, industry.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-red-400 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Funding Amount:</span> How
                      much finance you need (up to your approved limit for
                      Flexi-Loan).
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-red-400 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Data Linking (Preferred):
                      </span>{" "}
                      Securely link your business bank account(s) via Open
                      Banking and/or connect your accounting software (e.g.,
                      Xero, QuickBooks, Sage). This allows iwoca to quickly
                      assess your business performance.
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-red-400 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Manual Upload (Alternative):
                      </span>{" "}
                      If data linking isn't possible, you can typically upload
                      recent business bank statements (usually 3-6 months) and
                      potentially VAT returns or management accounts.
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-red-400 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Director/Owner Details:
                      </span>{" "}
                      Basic personal information for identity verification and
                      credit checks.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Application Process
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  iwoca's application process is fast and technology-led:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-red-400 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        1. Online Application:
                      </span>{" "}
                      Complete the simple online form on iwoca's website,
                      providing business details and funding needs. Takes
                      minutes.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-red-400 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        2. Link Data or Upload Docs:
                      </span>{" "}
                      Securely connect your bank accounts/accounting software or
                      upload required documents.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-red-400 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">3. Fast Assessment:</span>{" "}
                      iwoca's technology analyzes the data to assess
                      creditworthiness and affordability rapidly.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-red-400 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        4. Decision and Offer:
                      </span>{" "}
                      Receive a decision, often within hours. If approved, you
                      get a clear offer detailing the credit limit (for
                      Flexi-Loan), interest rate, and terms.
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-red-400 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">5. Access Funds:</span>{" "}
                      Once the agreement is signed digitally, you can draw down
                      funds from your Flexi-Loan limit as needed, typically
                      available within hours.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Loan Terms and Conditions
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Key terms for iwoca's Flexi-Loan:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-red-400 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Interest Rates:</span>{" "}
                      Rates are tailored to the business's risk profile and
                      typically quoted as a monthly interest rate. Interest is
                      only paid on the funds drawn down.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-red-400 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Loan Amounts (Credit Limit):
                      </span>{" "}
                      From £1,000 up to £500,000.
                    </div>
                  </div>

                  <div
                    id="square02"
                    data-topads
                    data-topads-size="square"
                  ></div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-red-400 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Repayment Terms:</span>{" "}
                      Typically up to 12 or 24 months for each drawdown, with
                      flexible repayment options (e.g., monthly payments).
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-red-400 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Fees:</span> iwoca is
                      transparent about fees. There are no arrangement fees or
                      early repayment penalties. Interest is the primary cost.
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-red-400 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Security:</span>{" "}
                      Flexi-Loans are typically unsecured, but personal
                      guarantees from directors may be required depending on the
                      amount and business circumstances.
                    </div>
                  </div>
                </div>

                <div className="my-8 text-left sm:text-left">
                  <Link href="/personal-finance/best-personal-loans">
                    <Image
                      src="https://media.topfinanzas.com/images/ads/Top-Blog-Personal-loans-1.webp"
                      alt="iwoca Business Finance"
                      width={1000}
                      height={563}
                      className="mx-auto w-full md:w-8/12 h-auto rounded-xl"
                      loading="lazy"
                      quality={80}
                    />
                  </Link>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Who Is This Finance Best For?
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  iwoca's Flexi-Loan is particularly suitable for:
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
                  SMEs needing flexible working capital:
                </h3>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Businesses that experience fluctuating cash flow needs and
                  require access to funds on demand, without committing to a
                  large fixed-term loan.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  <span className="font-bold">Learn more:</span>{" "}
                  <Link
                    href="/personal-finance/best-personal-loans" // Replaced dead link
                    className="text-blue-600 underline"
                  >
                    Managing cash flow effectively in SMEs
                  </Link>
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
                  Businesses requiring speed:
                </h3>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Companies needing quick decisions and fast access to funds to
                  cover immediate costs or seize time-sensitive opportunities.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  <span className="font-bold">Learn more:</span>{" "}
                  <Link
                    href="/personal-finance/tips-for-choosing-an-online-loan" // Replaced dead link
                    className="text-blue-600 underline"
                  >
                    Options for fast business funding
                  </Link>
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
                  Companies comfortable with technology:
                </h3>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Businesses that are happy to link bank accounts or accounting
                  software and manage their finance digitally.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  <span className="font-bold">Learn more:</span>{" "}
                  <Link
                    href="/personal-finance/best-personal-loans" // Replaced dead link
                    className="text-blue-600 underline"
                  >
                    The impact of fintech on SME lending
                  </Link>
                </p>

                <div className="my-8 text-left sm:text-left">
                  <Link href="/personal-finance/getting-out-of-debt">
                    <Image
                      src="https://media.topfinanzas.com/images/ads/Top-Blog-Debt-management-1.webp"
                      alt="iwoca Business Finance"
                      width={1000}
                      height={563}
                      className="mx-auto w-full md:w-8/12 h-auto rounded-xl"
                      loading="lazy"
                      quality={80}
                    />
                  </Link>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Tips for a Successful Application
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  To enhance your chances of approval for an iwoca Flexi-Loan:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-red-400 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Link Bank/Accounting Data:
                      </span>{" "}
                      Providing access via Open Banking or linking accounting
                      software gives iwoca the richest data for assessment and
                      often leads to faster decisions and potentially better
                      offers.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-red-400 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Ensure Data Accuracy:
                      </span>{" "}
                      Make sure the information in your linked accounts or
                      uploaded documents is accurate and up-to-date.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-red-400 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Check Business Credit:
                      </span>{" "}
                      Review your business credit report beforehand to
                      understand your profile and address any inaccuracies.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-red-400 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Be Clear on Purpose:
                      </span>{" "}
                      Even for a flexible facility, having a clear idea of how
                      you intend to use the funds helps iwoca understand your
                      business needs.
                    </div>
                  </div>
                </div>

                <div className="text-left my-8">
                  <Link href="https://www.iwoca.co.uk/flexi-loan">
                    <Button className="bg-red-400 hover:bg-teal-600 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                      Visit iwoca Website
                    </Button>
                  </Link>
                </div>

                {/* AI Content Disclaimer */}
                <AIContentDisclaimer />
              </section>
            </div>
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
