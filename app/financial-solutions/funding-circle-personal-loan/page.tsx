import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title: "Funding Circle Business Loan: Fast SME Financing - Top Finance UK",
    description:
      "Explore Funding Circle's business loans offering fast, flexible financing solutions designed specifically for UK Small and Medium-sized Enterprises (SMEs).",
    keywords:
      "Funding Circle, SME loan, business loan UK, fintech lending, small business finance, working capital loan, business expansion loan",
  };
}

export default function FundingCirclePersonalLoanPage() {
  // Note: While the CSV listed this under 'Personal Loan', Funding Circle primarily offers Business Loans.
  // The content reflects this focus on SME financing.
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12" data-category="loans">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-4xl font-bold text-gray-800 mb-4 leading-8">
              Funding Circle Business Loan: Fast, Flexible Finance for SMEs
            </h1>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 font-medium mb-8 leading-5 text-left">
                Funding Circle provides fast and flexible business loans
                tailored to the needs of UK SMEs, leveraging fintech innovation
                to streamline the borrowing process for growth, working capital,
                and more.
              </p>

              <div id="square01" data-topads data-topads-size="square"></div>

              <hr className="my-8" />

              <div className="space-y-2 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#004C59] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      SME Focused Financing:
                    </span>{" "}
                    Borrow from £10,000 to £500,000 specifically designed to
                    support business needs like expansion, inventory, or cash
                    flow management.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#004C59] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Fast Decisions & Funding:
                    </span>{" "}
                    Benefit from a quick online application process with
                    decisions often made within 24 hours and funds available
                    shortly after.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#004C59] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Flexible Repayment Terms:
                    </span>{" "}
                    Choose repayment periods typically ranging from 6 months to
                    6 years, allowing businesses to match payments with their
                    cash flow cycles.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#004C59] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">Transparent Pricing:</span>{" "}
                    Understand the costs upfront with clear interest rates and
                    fees, tailored to your business's risk profile. No hidden
                    charges.
                  </div>
                </div>
              </div>

              <div className="text-left my-8">
                <Link href="/financial-solutions/funding-circle-personal-loan-requirements">
                  <Button className="bg-[#004C59] hover:bg-teal-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/uk/loans/718136824-fotosprestamo-fundingcircle1uk.webp"
                  alt="Funding Circle Business Loan"
                  width={900}
                  height={507}
                  className="w-full h-auto rounded-xl"
                  priority={false}
                  fetchPriority="high"
                  quality={85}
                  loading="eager"
                />
              </div>

              <div className="my-6">
                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  Funding Circle is a leading global platform connecting small
                  businesses seeking finance with investors. Their business
                  loans are specifically designed to meet the unique challenges
                  and opportunities faced by UK SMEs, offering a faster, more
                  flexible alternative to traditional bank lending.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Fueling Business Growth
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  Funding Circle loans cater to a wide range of business needs.
                  Whether you require working capital to manage day-to-day
                  operations, funds for expansion projects, investment in new
                  equipment, hiring staff, or refinancing existing debt, their
                  platform provides tailored solutions. Loan amounts typically
                  range from £10,000 to £500,000, accommodating businesses at
                  various stages of growth.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Speed and Efficiency Through Fintech
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  Leveraging technology, Funding Circle offers a significantly
                  faster application and decision process compared to many
                  traditional lenders. Businesses can apply online in minutes,
                  and decisions are often provided within 24 hours. This speed
                  is crucial for SMEs needing quick access to capital to seize
                  opportunities or manage cash flow effectively.
                </p>

                <hr className="my-8" />

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Flexible Terms for Business Cycles
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  Understanding that business cash flow can fluctuate, Funding
                  Circle offers flexible repayment terms, typically from 6
                  months up to 6 years. This allows businesses to structure
                  repayments in a way that aligns with their operational cycles
                  and revenue streams. Interest rates are fixed for the loan
                  term, providing certainty for financial planning.
                </p>

                <div className="my-8" data-category="loans">
                  <Link href="/personal-finance/credit-card-types-benefits/">
                    <Image
                      src="https://media.topfinanzas.com/images/ads/Top-Blog-Credit-Cards.webp"
                      alt="Funding Circle Business Loan"
                      width={1000}
                      height={563}
                      className="mx-auto w-full md:w-8/12 h-auto rounded-xl"
                      loading="lazy"
                      quality={80}
                    />
                  </Link>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Additional Features:
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#004C59] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Dedicated Account Manager:
                      </span>{" "}
                      Businesses often receive support from a dedicated account
                      manager throughout the application process and loan term,
                      providing a personal point of contact.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#004C59] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        No Early Repayment Charges:
                      </span>{" "}
                      Funding Circle typically allows businesses to repay their
                      loan early without incurring penalties, offering valuable
                      flexibility if cash flow improves.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#004C59] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Transparent Fees:</span>{" "}
                      Costs are clearly outlined upfront, usually consisting of
                      the interest rate and a one-off completion fee. There are
                      no hidden charges.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#004C59] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Government Scheme Participation:
                      </span>{" "}
                      Funding Circle often participates in government-backed
                      loan schemes (like the Recovery Loan Scheme), potentially
                      offering additional benefits or guarantees.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Streamlined Application for Businesses
                </h2>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  The application process is designed with busy business owners
                  in mind:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#004C59] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Quick Online Application:
                      </span>{" "}
                      Apply online in about 10 minutes, providing key details
                      about your business, financials, and loan requirements.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#004C59] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Minimal Documentation:
                      </span>{" "}
                      Required documents typically include recent bank
                      statements and company accounts, often submittable
                      digitally.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#004C59] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Fast Decision Making:
                      </span>{" "}
                      Funding Circle's technology enables rapid credit
                      assessment, with decisions often made within 24 hours.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Supporting UK SMEs
                </h2>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  Funding Circle has established itself as a major player in the
                  SME lending market, providing a vital source of finance for
                  businesses that may find traditional bank lending processes
                  too slow or rigid. Their focus on technology allows them to
                  assess risk differently and serve a broad range of established
                  SMEs across various sectors.
                </p>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  For UK SMEs seeking fast, flexible, and transparent financing
                  options to support their growth and operational needs, Funding
                  Circle offers a compelling alternative finance solution.
                </p>

                <div className="text-left my-8">
                  <Link href="/financial-solutions/funding-circle-personal-loan-requirements">
                    <Button className="bg-[#004C59] hover:bg-teal-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                      View Requirements
                    </Button>
                  </Link>
                </div>

                {/* AI Content Disclaimer */}
                <AIContentDisclaimer />
              </div>
            </div>
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
