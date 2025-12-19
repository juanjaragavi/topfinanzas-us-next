import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "MarketFinance Requirements: Business Loan & Invoice Finance Guide - Top Finance UK",
    description:
      "Learn about MarketFinance eligibility criteria for UK SMEs seeking business loans or invoice finance, the application process, and required information.",
    keywords:
      "MarketFinance requirements, SME finance eligibility, business loan criteria UK, invoice finance requirements, fintech lending application, MarketFinance documentation",
  };
}

export default function MarketFinancePersonalLoanRequirementsPage() {
  // Note: Adjusting component name and content for MarketFinance's Business Finance focus
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12" data-category="loans">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-3xl font-bold text-gray-800 mb-4 leading-8">
              Requirements for MarketFinance Business Solutions
            </h1>

            <div id="square01" data-topads data-topads-size="square"></div>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 mb-8 leading-5 text-left">
                MarketFinance offers fast business loans and invoice finance.
                Understanding their eligibility criteria helps UK SMEs access
                the right funding.
              </p>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/uk/loans/718137317-fotosprestamo-fundingchange1uk.webp"
                  alt="MarketFinance Requirements"
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
                  General Eligibility Criteria for SMEs
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#003DA5] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Business Type:</span>{" "}
                      Primarily serves Limited Companies and LLPs registered in
                      the UK.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#003DA5] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Trading History:</span>{" "}
                      Businesses typically need a minimum trading history, often
                      at least 12 months, with established revenue streams.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#003DA5] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Turnover:</span> Minimum
                      annual turnover requirements apply, often starting from
                      £100,000, varying by product (e.g., invoice finance vs.
                      loans).
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#003DA5] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Creditworthiness:</span>{" "}
                      MarketFinance assesses the business's financial health and
                      credit history, as well as potentially the directors'
                      credit profiles.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#003DA5] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Invoice Finance Specifics:
                      </span>{" "}
                      For invoice finance, businesses must issue invoices to
                      other businesses (B2B) with standard payment terms.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Information & Documentation Needed:
                </h2>

                <div id="square02" data-topads data-topads-size="square"></div>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  The online application is streamlined, but be prepared to
                  provide:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#003DA5] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Company Information:
                      </span>{" "}
                      Registered name, company number, address, director
                      details.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#003DA5] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Financial Data:</span>{" "}
                      Option to securely link accounting software (Xero, Sage,
                      QuickBooks etc.) or business bank accounts via Open
                      Banking for faster assessment. Alternatively, upload
                      recent management accounts, filed accounts, and bank
                      statements.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#003DA5] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Invoice Details (for Invoice Finance):
                      </span>{" "}
                      Information about your sales ledger, customer payment
                      terms, and examples of invoices may be required.
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#003DA5] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Loan Purpose (for Business Loans):
                      </span>{" "}
                      Clear details on how the loan funds will be utilized.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Application Process
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  MarketFinance offers a fast, technology-driven application:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#003DA5] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        1. Online Application:
                      </span>{" "}
                      Complete a short online form on the MarketFinance website,
                      indicating the type of finance needed and basic business
                      details.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#003DA5] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        2. Data Connection/Upload:
                      </span>{" "}
                      Securely link your business bank account or accounting
                      software, or upload necessary financial documents.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#003DA5] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        3. Rapid Assessment:
                      </span>{" "}
                      MarketFinance's platform analyzes the provided data
                      quickly to assess eligibility and determine potential
                      offers.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#003DA5] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        4. Decision & Offer:
                      </span>{" "}
                      Receive a decision, often within 24-48 hours. Approved
                      businesses get a clear offer outlining terms, rates, and
                      fees.
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#003DA5] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">5. Funding:</span> Upon
                      acceptance and final checks, funds are transferred quickly
                      – often within 24 hours for invoice finance drawdowns or a
                      few days for loans.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Finance Terms and Conditions
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Key terms vary between Business Loans and Invoice Finance:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#003DA5] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Business Loans:</span>{" "}
                      Amounts £10k-£500k, terms 1-4 years, fixed interest rates
                      + potential arrangement fee. Early repayment options may
                      be available (check terms).
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#003DA5] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Invoice Finance:</span>{" "}
                      Advance up to 90% of invoice value. Fees typically include
                      a discount charge (interest on funds advanced) and a
                      service fee. Flexible drawdown and repayment linked to
                      invoice payments.
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#003DA5] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Security:</span> Business
                      loans are typically unsecured but may require personal
                      guarantees. Invoice finance is secured against the
                      business's sales ledger (invoices).
                    </div>
                  </div>
                </div>

                <div className="my-8 text-left sm:text-left">
                  <Link href="/personal-finance/best-personal-loans">
                    <Image
                      src="https://media.topfinanzas.com/images/ads/Top-Blog-Personal-loans-1.webp"
                      alt="MarketFinance Business Finance"
                      width={1000}
                      height={563}
                      className="mx-auto w-full md:w-8/12 h-auto rounded-xl"
                      loading="lazy"
                      quality={80}
                    />
                  </Link>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Who Is MarketFinance Best For?
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  MarketFinance solutions are particularly suitable for:
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
                  B2B Businesses needing cash flow:
                </h3>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Companies that invoice other businesses and face delays in
                  payment can use invoice finance to bridge cash flow gaps
                  quickly and reliably.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  <span className="font-bold">Learn more:</span>{" "}
                  <Link
                    href="/personal-finance/best-personal-loans" // Replaced dead link
                    className="text-blue-600 underline"
                  >
                    Understanding invoice finance for SMEs
                  </Link>
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
                  Established SMEs seeking growth capital:
                </h3>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Businesses with a solid trading history looking for fast,
                  unsecured loans to fund expansion, new projects, or
                  investments.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  <span className="font-bold">Learn more:</span>{" "}
                  <Link
                    href="/personal-finance/best-personal-loans" // Replaced dead link
                    className="text-blue-600 underline"
                  >
                    Funding strategies for SME growth
                  </Link>
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
                  Companies using modern accounting software:
                </h3>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Businesses using platforms like Xero, Sage, or QuickBooks can
                  benefit from seamless data integration, speeding up the
                  application and ongoing management.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  <span className="font-bold">Learn more:</span>{" "}
                  <Link
                    href="/personal-finance/tips-for-choosing-an-online-loan" // Replaced dead link
                    className="text-blue-600 underline"
                  >
                    Benefits of accounting software integration for finance
                  </Link>
                </p>

                <div className="my-8 text-left sm:text-left">
                  <Link href="/personal-finance/getting-out-of-debt">
                    <Image
                      src="https://media.topfinanzas.com/images/ads/Top-Blog-Debt-management-1.webp"
                      alt="MarketFinance Business Finance"
                      width={1000}
                      height={563}
                      className="mx-auto w-full md:w-8/12 h-auto rounded-xl"
                      loading="lazy"
                      quality={80}
                    />
                  </Link>
                </div>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  To enhance your chances of approval with MarketFinance:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#003DA5] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Utilize Data Linking:
                      </span>{" "}
                      Connecting your bank accounts and accounting software
                      provides the richest data for assessment and typically
                      leads to the fastest decisions.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#003DA5] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Maintain Good Financial Records:
                      </span>{" "}
                      Ensure your accounts and bank statements are accurate,
                      up-to-date, and clearly reflect your business's
                      performance.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#003DA5] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Check Business Credit Health:
                      </span>{" "}
                      Review your business credit report and address any issues
                      before applying.
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#003DA5] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Be Clear on Funding Use:
                      </span>{" "}
                      Articulate clearly how the requested finance (loan or
                      invoice finance facility) will be used to support or grow
                      the business.
                    </div>
                  </div>
                </div>

                <div className="text-left my-8">
                  <Link href="https://marketfinance.com/" target="_blank">
                    <Button className="bg-[#003DA5] hover:bg-blue-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                      Visit MarketFinance Website
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
