import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "TSB Personal Loan: Simple and Straightforward Financing - Top Finance UK",
    description:
      "Explore TSB Personal Loans with competitive rates, flexible repayment options, and a focus on clear, simple banking solutions.",
    keywords:
      "TSB Personal Loan, UK loans, personal finance, debt consolidation, home improvement loan, flexible repayment, TSB banking, loan application",
  };
}

export default function TSBPersonalLoanPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12" data-category="loans">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-4xl font-bold text-gray-800 mb-4 leading-8">
              TSB Personal Loan: Simple, Fair Financing for Your Needs
            </h1>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 font-medium mb-8 leading-5 text-left">
                TSB Personal Loans offer clear terms, competitive rates, and a
                straightforward approach to borrowing, reflecting TSB's
                commitment to simple, community-focused banking.
              </p>

              <div className="space-y-2 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#0A4D8C] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Competitive Loan Rates:
                    </span>{" "}
                    Benefit from competitive APRs starting from 4.9%
                    representative (rates vary based on loan amount and
                    individual circumstances).
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#0A4D8C] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">Flexible Borrowing:</span>{" "}
                    Borrow between £1,000 and £25,000 to suit a variety of
                    needs, from consolidating debts to funding home improvements
                    or a new car.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#0A4D8C] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Adaptable Repayment Terms:
                    </span>{" "}
                    Choose repayment periods from 1 to 7 years, allowing you to
                    tailor monthly payments to fit your budget.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#0A4D8C] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Simple Application Process:
                    </span>{" "}
                    Apply easily online with a clear, straightforward process
                    and receive a quick decision, often with funds available the
                    next working day.
                  </div>
                </div>
              </div>

              <div className="text-left my-8">
                <Link href="/financial-solutions/tsb-personal-loan-requirements">
                  <Button className="bg-[#0A4D8C] hover:bg-blue-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/uk/loans/718136271-fotosprestamo-tbs1uk.webp"
                  alt="TSB Personal Loan"
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
                  TSB Personal Loans embody the bank's focus on straightforward,
                  community-based banking. With roots stretching back over 200
                  years, TSB aims to provide clear, fair financial products that
                  help local people and communities thrive. Their personal loans
                  reflect this ethos, offering simple terms and competitive
                  rates.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Financing for Everyday Life
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  Whether you need funds for home improvements, a new car,
                  consolidating existing debts, or covering unexpected expenses,
                  TSB Personal Loans offer a flexible solution. You can
                  typically borrow between £1,000 and £25,000, providing a range
                  suitable for various personal financing needs. TSB focuses on
                  providing loans that support tangible life goals for its
                  customers.
                </p>

                <div id="square01" data-topads data-topads-size="square"></div>

                <hr className="my-8" />

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Clear Terms and Competitive Rates
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  TSB offers competitive interest rates, with representative
                  APRs starting from 4.9% for loans between £7,500 and £15,000
                  (subject to status and loan amount). The bank prioritizes
                  clarity, ensuring loan terms are easy to understand with fixed
                  monthly payments throughout the repayment period. This
                  transparency helps borrowers budget effectively and avoid
                  surprises.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Flexible Repayment Tailored to You
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  TSB provides repayment terms ranging from 1 to 7 years,
                  allowing borrowers to choose a schedule that fits their
                  financial situation. This flexibility enables customers to
                  balance the size of their monthly payments with the total
                  interest paid over the loan's duration, ensuring the loan
                  remains affordable.
                </p>

                <div className="my-8 text-left sm:text-left">
                  <Link href="/personal-finance/credit-card-types-benefits/">
                    <Image
                      src="https://media.topfinanzas.com/images/ads/Top-Blog-Credit-Cards.webp"
                      alt="TSB Personal Loan"
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
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0A4D8C] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Early Repayment Flexibility:
                      </span>{" "}
                      TSB allows borrowers to make overpayments or settle their
                      loan early. An early settlement charge, typically
                      equivalent to one month's interest, may apply, but this
                      still offers flexibility for those wishing to clear their
                      debt ahead of schedule.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0A4D8C] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Potential Benefits for TSB Customers:
                      </span>{" "}
                      Existing TSB current account holders may find the
                      application process quicker and potentially benefit from
                      specific offers or rates available to established
                      customers.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0A4D8C] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Simple Loan Management:
                      </span>{" "}
                      Manage your loan easily through TSB's online banking or
                      mobile app, allowing you to check balances, view
                      statements, and manage payments conveniently.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0A4D8C] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Focus on Responsible Lending:
                      </span>{" "}
                      TSB emphasizes responsible lending practices, ensuring
                      loans are affordable and suitable for the borrower's
                      circumstances, aligning with their community banking
                      values.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Straightforward Application Process
                </h2>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  TSB aims for a simple and clear application journey:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0A4D8C] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Easy Online Application:
                      </span>{" "}
                      Apply online through the TSB website. The process is
                      designed to be user-friendly, typically taking around 15
                      minutes to complete.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0A4D8C] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Personalized Quote Tool:
                      </span>{" "}
                      Use TSB's loan calculator and personalized quote tool
                      before applying to get an indication of your likely rate
                      and monthly payments without affecting your credit score.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0A4D8C] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Quick Decision and Funding:
                      </span>{" "}
                      Receive a decision quickly, often within minutes for
                      online applications. Once approved and the agreement
                      signed, funds are typically available the next working
                      day.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  The TSB Approach
                </h2>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  Choosing a TSB Personal Loan aligns with supporting a bank
                  focused on serving local communities and providing
                  straightforward financial products. TSB's commitment to
                  simplicity means fewer complex terms and a clearer
                  understanding of your borrowing. While perhaps not offering
                  the extensive features of larger global banks, TSB provides a
                  reliable, customer-friendly loan option.
                </p>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  For borrowers who value clear terms, competitive rates, and a
                  bank with strong community roots, the TSB Personal Loan offers
                  a solid choice for financing various personal needs.
                </p>

                <div className="text-left my-8">
                  <Link href="/financial-solutions/tsb-personal-loan-requirements">
                    <Button className="bg-[#0A4D8C] hover:bg-blue-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
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
