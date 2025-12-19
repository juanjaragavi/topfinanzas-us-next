import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Capify Finance Requirements: MCA & Business Loan Guide - Top Finance UK",
    description:
      "Learn about Capify's eligibility criteria for UK SMEs seeking Merchant Cash Advances or Business Loans, the application process, and required information.",
    keywords:
      "Capify requirements, SME finance eligibility, MCA criteria, business loan application UK, fintech lending requirements, Capify documentation",
  };
}

export default function CapifyPersonalLoanRequirementsPage() {
  // Note: Adjusting component name and content for Capify's Business Finance focus (MCA & Loans)
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12" data-category="loans">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-3xl font-bold text-gray-800 mb-4 leading-8">
              Requirements for Capify Business Finance (MCA & Loans)
            </h1>

            <div id="square02" data-topads data-topads-size="square"></div>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 mb-8 leading-5 text-left">
                Capify offers fast Merchant Cash Advances and Business Loans for
                UK SMEs. Understanding their eligibility helps businesses access
                funding quickly.
              </p>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/uk/loans/718137378-fotosprestamo-capify2uk.webp"
                  alt="Capify Finance Requirements"
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
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#00AEEF] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Business Location:</span>{" "}
                      Your business must be based and operating in the UK.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#00AEEF] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Trading History:</span>{" "}
                      Typically requires a minimum trading history, often 6-12
                      months, demonstrating business activity.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#00AEEF] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Turnover / Card Sales:
                      </span>{" "}
                      Minimum monthly turnover or card transaction volume is
                      required. For MCAs, a consistent level of card sales
                      (e.g., £5,000+ per month) is key. For loans, overall
                      turnover is assessed.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#00AEEF] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Business Structure:</span>{" "}
                      Capify serves various structures including Limited
                      Companies, Sole Traders, and Partnerships.
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#00AEEF] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Industry:</span> While
                      broad, certain industries (especially those with high card
                      transaction volumes like retail and hospitality) are
                      particularly well-suited for MCAs.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Information & Documentation Needed:
                </h2>
                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Capify aims for a simple process, typically requiring:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#00AEEF] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Basic Business Information:
                      </span>{" "}
                      Company name, address, contact details, director/owner
                      information.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#00AEEF] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Trading Information:
                      </span>{" "}
                      Recent business bank statements (usually 3-6 months) to
                      show turnover and cash flow.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#00AEEF] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Card Sales Data (for MCA):
                      </span>{" "}
                      Recent merchant processing statements (usually 4-6 months)
                      showing monthly card transaction volumes.
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#00AEEF] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Proof of Identity:</span>{" "}
                      Standard ID verification for the business
                      owner(s)/director(s).
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Application Process
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Capify's application process is designed for speed and
                  simplicity:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#00AEEF] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">1. Initial Enquiry:</span>{" "}
                      Start with a quick online form or phone call to provide
                      basic business details and funding needs.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#00AEEF] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        2. Document Submission:
                      </span>{" "}
                      Provide necessary documents like bank statements and
                      merchant statements, often submittable electronically.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#00AEEF] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        3. Underwriting & Decision:
                      </span>{" "}
                      Capify assesses the business's performance and
                      affordability quickly, often providing a decision within
                      24-48 hours.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#00AEEF] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">4. Offer & Funding:</span>{" "}
                      If approved, you receive a clear offer. Upon acceptance,
                      funds are typically transferred rapidly, often within the
                      same day or next day.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Finance Terms and Conditions
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Key terms differ between MCA and Business Loans:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#00AEEF] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Merchant Cash Advance (MCA):
                      </span>{" "}
                      Funding amount based on card sales (£5k - £500k+).
                      Repayment via a fixed percentage of daily card takings.
                      Total cost expressed as a factor rate (e.g., 1.2 means
                      repay £1.20 for every £1 borrowed). No fixed term.
                    </div>
                  </div>

                  <div
                    id="square02"
                    data-topads
                    data-topads-size="square"
                  ></div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#00AEEF] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Business Loans:</span>{" "}
                      Amounts typically £5k - £500k. Fixed repayment terms
                      (e.g., 6-18 months) with set daily or weekly payments.
                      Costs include interest and potentially an origination fee.
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#00AEEF] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Security:</span> Often
                      unsecured, but personal guarantees from directors/owners
                      are commonly required.
                    </div>
                  </div>
                </div>

                <div className="my-8" data-category="loans">
                  <Link href="/personal-finance/best-personal-loans">
                    <Image
                      src="https://media.topfinanzas.com/images/ads/Top-Blog-Personal-loans-1.webp"
                      alt="Capify Business Finance"
                      width={1000}
                      height={563}
                      className="mx-auto w-full md:w-8/12 h-auto rounded-xl"
                      loading="lazy"
                      quality={80}
                    />
                  </Link>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Who Is Capify Finance Best For?
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Capify's solutions are particularly well-suited for:
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
                  Retail, Hospitality & Service Businesses (MCA):
                </h3>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Businesses with consistent daily card sales find the MCA model
                  attractive due to its flexible repayment structure tied
                  directly to revenue.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  <span className="font-bold">Learn more:</span>{" "}
                  <Link
                    href="/personal-finance/best-personal-loans" // Replaced dead link
                    className="text-blue-600 underline"
                  >
                    Understanding Merchant Cash Advances
                  </Link>
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
                  SMEs Needing Fast Funding:
                </h3>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Companies requiring quick access to working capital for
                  opportunities or unexpected costs benefit from Capify's rapid
                  decision and funding times.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  <span className="font-bold">Learn more:</span>{" "}
                  <Link
                    href="/personal-finance/tips-for-choosing-an-online-loan" // Replaced dead link
                    className="text-blue-600 underline"
                  >
                    When speed matters in business finance
                  </Link>
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
                  Businesses with Less Traditional Profiles:
                </h3>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Capify's focus on recent performance can make them an option
                  for businesses that might struggle to meet the stricter
                  historical criteria of traditional banks.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  <span className="font-bold">Learn more:</span>{" "}
                  <Link
                    href="/personal-finance/best-personal-loans" // Replaced dead link
                    className="text-blue-600 underline"
                  >
                    How alternative lenders assess businesses
                  </Link>
                </p>

                <div className="my-8" data-category="loans">
                  <Link href="/personal-finance/getting-out-of-debt">
                    <Image
                      src="https://media.topfinanzas.com/images/ads/Top-Blog-Debt-management-1.webp"
                      alt="Capify Business Finance"
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
                  To enhance your chances of approval with Capify:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#00AEEF] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Provide Complete Statements:
                      </span>{" "}
                      Ensure you submit all requested bank and/or merchant
                      statements for the required period, as this is key to
                      their assessment.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#00AEEF] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Demonstrate Consistent Performance:
                      </span>{" "}
                      Highlight steady or growing turnover/card sales in your
                      recent statements.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#00AEEF] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Be Clear About Funding Use:
                      </span>{" "}
                      Explain how the funds will be used to benefit the business
                      (e.g., purchase stock, cover short-term costs, invest in
                      equipment).
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#00AEEF] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Understand the Costs:
                      </span>{" "}
                      Ensure you fully understand the factor rate (for MCA) or
                      interest rate and fees (for loans) and how repayments work
                      before accepting an offer.
                    </div>
                  </div>
                </div>

                <div className="text-left my-8">
                  <Link href="https://www.capify.co.uk/" target="_blank">
                    <Button className="bg-[#00AEEF] hover:bg-blue-700 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                      Visit Capify Website
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
