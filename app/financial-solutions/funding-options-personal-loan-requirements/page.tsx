import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Funding Options Process & Eligibility: SME Finance Guide - Top Finance UK",
    description:
      "Learn how the Funding Options marketplace works, the general eligibility for UK SMEs, and the information needed to find business finance.",
    keywords:
      "Funding Options process, SME finance eligibility, business loan marketplace requirements, UK business funding criteria, alternative finance application",
  };
}

export default function FundingOptionsPersonalLoanRequirementsPage() {
  // Note: Adjusting component name and content for Business Finance Marketplace focus
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12" data-category="loans">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-3xl font-bold text-gray-800 mb-4 leading-8">
              Using Funding Options: Process & Eligibility for SMEs
            </h1>

            <div id="square01" data-topads data-topads-size="square"></div>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 mb-8 leading-5 text-left">
                Funding Options connects UK SMEs with numerous lenders.
                Understanding their process and general eligibility helps
                businesses navigate the platform effectively.
              </p>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/uk/loans/718138020-fotosprestamo-fundingoption2uk.webp"
                  alt="Funding Options Process"
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
                  General Eligibility to Use Funding Options
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  While specific lender criteria vary, businesses generally need
                  to meet these conditions to effectively use the Funding
                  Options platform:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FDB913] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-black font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">UK-Based Business:</span>{" "}
                      Your business must be registered and operating primarily
                      within the United Kingdom.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FDB913] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-black font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Trading History:</span>{" "}
                      Most lenders on the panel require a minimum trading
                      history, often at least 12 months, although some options
                      exist for newer businesses. A 2+ year history typically
                      opens up more possibilities.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FDB913] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-black font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Turnover Level:</span>{" "}
                      While thresholds vary by lender and product, having a
                      demonstrable annual turnover (e.g., £30,000+) generally
                      increases the range of available options.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FDB913] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-black font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Business Structure:</span>{" "}
                      The platform caters primarily to Limited Companies and
                      LLPs, but options may exist for Sole Traders and
                      Partnerships depending on the specific funding need.
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FDB913] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-black font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Funding Purpose:</span>{" "}
                      You need a clear business reason for seeking finance
                      (e.g., working capital, expansion, asset purchase,
                      bridging finance).
                    </div>
                  </div>
                </div>

                <div id="square02" data-topads data-topads-size="square"></div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Information Needed for the Platform:
                </h2>
                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  To effectively match you with lenders, Funding Options will
                  typically ask for:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FDB913] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-black font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Basic Company Information:
                      </span>{" "}
                      Registered name, company number, address, industry sector.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FDB913] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-black font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Funding Requirements:
                      </span>{" "}
                      How much finance you need, the preferred term, and the
                      specific purpose of the funds.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FDB913] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-black font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Financial Overview:</span>{" "}
                      Key financial details like annual turnover, net
                      profit/loss, and potentially information about assets or
                      existing debts.
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FDB913] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-black font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Director Details:</span>{" "}
                      Basic information about the company directors.
                    </div>
                  </div>
                </div>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Note: While Funding Options facilitates the initial matching,
                  individual lenders will have their own specific documentation
                  requirements if you proceed with a full application (e.g.,
                  detailed accounts, bank statements, business plans).
                </p>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  How the Funding Options Process Works
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Using the Funding Options marketplace involves these key
                  steps:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FDB913] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-black font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">1. Online Enquiry:</span>{" "}
                      Submit your business details and funding requirements
                      through their secure online form. This initial step does
                      not impact your credit score.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FDB913] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-black font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        2. Tech-Based Matching:
                      </span>{" "}
                      Funding Options' platform instantly analyzes your
                      information and matches it against the criteria of over
                      120 lenders on their panel.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FDB913] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-black font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        3. Review Potential Options:
                      </span>{" "}
                      You'll typically see a list of potential finance options
                      and lenders that match your needs, often with indicative
                      rates and terms, within minutes.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FDB913] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-black font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        4. Specialist Consultation:
                      </span>{" "}
                      A dedicated Business Finance Specialist will usually
                      contact you to discuss the options, understand your needs
                      further, and answer any questions.
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FDB913] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-black font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        5. Proceed with Lender:
                      </span>{" "}
                      If you choose to proceed with a specific lender, Funding
                      Options will facilitate the introduction and support you
                      through the lender's full application and underwriting
                      process.
                    </div>
                  </div>
                </div>

                <div className="my-8" data-category="loans">
                  <Link href="/personal-finance/best-personal-loans">
                    <Image
                      src="https://media.topfinanzas.com/images/ads/Top-Blog-Personal-loans-1.webp"
                      alt="Funding Options Business Finance"
                      width={1000}
                      height={563}
                      className="mx-auto w-full md:w-8/12 h-auto rounded-xl"
                      loading="lazy"
                      quality={80}
                    />
                  </Link>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Types of Finance Available
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Funding Options provides access to a diverse range of funding
                  types, including:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1 text-sm text-gray-700 mb-8 text-left">
                  <li className="text-left">Working Capital Loans</li>
                  <li className="text-left">Business Expansion Loans</li>
                  <li className="text-left">
                    Asset Finance (Leasing/Hire Purchase)
                  </li>
                  <li className="text-left">
                    Invoice Finance (Factoring/Discounting)
                  </li>
                  <li className="text-left">Revolving Credit Facilities</li>
                  <li className="text-left">Merchant Cash Advances</li>
                  <li className="text-left">Commercial Mortgages</li>
                  <li className="text-left">Bridging Loans</li>
                  <li className="text-left">VAT & Tax Loans</li>
                  <li className="text-left">
                    Recovery Loan Scheme (RLS) facilities (when available)
                  </li>
                </ul>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Who Should Use Funding Options?
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  This platform is particularly beneficial for:
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
                  SMEs seeking market comparison:
                </h3>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Businesses that want to efficiently compare multiple funding
                  offers without approaching numerous lenders individually.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  <span className="font-bold">Learn more:</span>{" "}
                  <Link
                    href="/personal-finance/best-personal-loans" // Replaced dead link
                    className="text-blue-600 underline"
                  >
                    How to compare business loan offers
                  </Link>
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
                  Businesses exploring alternative finance:
                </h3>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Companies looking beyond traditional bank loans to find
                  specialist or fintech lenders that might offer more suitable
                  or flexible terms.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  <span className="font-bold">Learn more:</span>{" "}
                  <Link
                    href="/personal-finance/best-personal-loans" // Replaced dead link
                    className="text-blue-600 underline"
                  >
                    The rise of alternative lending for SMEs
                  </Link>
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
                  Time-constrained business owners:
                </h3>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  The platform significantly reduces the time spent researching
                  and applying for finance, allowing owners to focus on running
                  their business.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  <span className="font-bold">Learn more:</span>{" "}
                  <Link
                    href="/personal-finance/tips-for-choosing-an-online-loan" // Replaced dead link
                    className="text-blue-600 underline"
                  >
                    Searching for business finance efficiently
                  </Link>
                </p>

                <div className="my-8" data-category="loans">
                  <Link href="/personal-finance/getting-out-of-debt">
                    <Image
                      src="https://media.topfinanzas.com/images/ads/Top-Blog-Debt-management-1.webp"
                      alt="Funding Options Business Finance"
                      width={1000}
                      height={563}
                      className="mx-auto w-full md:w-8/12 h-auto rounded-xl"
                      loading="lazy"
                      quality={80}
                    />
                  </Link>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Tips for Using Funding Options Effectively
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  To maximize your success with the platform:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FDB913] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-black font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Be Clear About Your Needs:
                      </span>{" "}
                      Have a precise understanding of how much funding you
                      require, for what purpose, and over what timeframe.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FDB913] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-black font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Have Financials Ready:
                      </span>{" "}
                      Although not always needed for the initial match, having
                      recent accounts and bank statements readily available will
                      speed up the process if you decide to proceed with a
                      lender.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FDB913] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-black font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Engage with the Specialist:
                      </span>{" "}
                      Utilize the expertise of the assigned Business Finance
                      Specialist to understand the nuances of different offers
                      and products.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FDB913] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-black font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Review Offers Carefully:
                      </span>{" "}
                      Compare not just the headline rate but also fees, terms,
                      security requirements, and repayment flexibility across
                      different lender offers.
                    </div>
                  </div>
                </div>

                <div className="text-left my-8">
                  <Link href="https://www.fundingoptions.com/" target="_blank">
                    <Button className="bg-[#FDB913] hover:bg-yellow-500 text-black font-medium text-md py-2 px-8 rounded-full w-full">
                      Visit Funding Options Website
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
