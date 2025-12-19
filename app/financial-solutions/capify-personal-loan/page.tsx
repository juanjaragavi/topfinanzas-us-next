import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Capify: Fast Business Loans & Merchant Cash Advance for SMEs - Top Finance UK",
    description:
      "Explore Capify's financing solutions for UK SMEs, including flexible Business Loans and Merchant Cash Advances based on card sales.",
    keywords:
      "Capify, SME finance, business loan UK, merchant cash advance, MCA, fintech lending, small business funding, working capital",
  };
}

export default function CapifyPersonalLoanPage() {
  // Note: Capify provides business finance (MCA, Loans), not personal loans.
  // Content adjusted to reflect its actual service for SMEs.
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12" data-category="loans">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-4xl font-bold text-gray-800 mb-4 leading-8">
              Capify: Flexible Financing Solutions for UK Businesses
            </h1>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 font-medium mb-8 leading-5 text-left">
                Capify offers fast, accessible funding options tailored for UK
                SMEs, including innovative Merchant Cash Advances (MCAs) and
                flexible Business Loans designed to support growth and manage
                cash flow.
              </p>

              <div id="square01" data-topads data-topads-size="square"></div>

              <hr className="my-8" />

              <div className="space-y-2 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#00AEEF] flex items-center justify-center mr-3">
                    {" "}
                    {/* Using a generic blue, check Capify branding */}
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Merchant Cash Advance (MCA):
                    </span>{" "}
                    Access funds based on future card sales. Repayments are
                    flexible, adjusting automatically with your daily card
                    takings. Ideal for retail/hospitality.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#00AEEF] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">Business Loans:</span>{" "}
                    Secure fixed-term loans typically from £5,000 up to £500,000
                    for various business needs, with clear repayment schedules.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#00AEEF] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Fast Funding Decisions:
                    </span>{" "}
                    Benefit from a quick online application process with
                    decisions often made within 24-48 hours.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#00AEEF] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">High Approval Rates:</span>{" "}
                    Capify focuses on business performance and potential, often
                    leading to higher approval rates compared to traditional
                    banks, especially for businesses with fluctuating revenue.
                  </div>
                </div>
              </div>

              <div className="text-left my-8">
                <Link href="/financial-solutions/capify-personal-loan-requirements">
                  <Button className="bg-[#00AEEF] hover:bg-blue-700 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <hr className="my-8" />

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/uk/loans/718137374-fotosprestamo-capify1uk.webp"
                  alt="Capify Business Finance Solutions"
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
                  Capify is a global fintech lender specializing in providing
                  accessible and flexible finance solutions to small and
                  medium-sized businesses. In the UK, they are particularly
                  known for their Merchant Cash Advance (MCA) product alongside
                  more traditional business loans, catering to SMEs that may
                  find conventional bank lending challenging.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Merchant Cash Advance (MCA): Funding Based on Sales
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  Capify's MCA is an innovative funding solution ideal for
                  businesses that accept card payments (e.g., retail,
                  restaurants, hospitality). Instead of a fixed loan amount,
                  Capify provides an upfront cash sum in exchange for a
                  percentage of the business's future daily card sales.
                  Repayments are automatically deducted as a small percentage of
                  each card transaction until the agreed amount is repaid. This
                  means repayments flex with the business's revenue – higher
                  sales lead to faster repayment, while slower periods mean
                  lower repayments, easing cash flow pressure.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Flexible Business Loans
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  Alongside MCAs, Capify offers fixed-term business loans,
                  typically ranging from £5,000 to £500,000. These function more
                  like traditional loans with set repayment schedules (often
                  daily or weekly fixed payments) over terms usually ranging
                  from 6 to 18 months. These loans are suitable for specific
                  investments, expansion projects, or bridging larger financial
                  gaps where a fixed repayment structure is preferred.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Focus on Speed and Accessibility
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  Capify prioritizes a fast and simple application process.
                  Businesses can apply online quickly, and decisions are often
                  made within 24-48 hours. They focus on the business's recent
                  performance and potential rather than solely relying on
                  historical credit scores, which can make funding more
                  accessible for businesses with less traditional profiles or
                  those recovering from past challenges.
                </p>

                <div className="my-8" data-category="loans">
                  <Link href="/personal-finance/credit-card-types-benefits/">
                    <Image
                      src="https://media.topfinanzas.com/images/ads/Top-Blog-Credit-Cards.webp"
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
                  Key Features of Capify Finance:
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#00AEEF] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Flexible Repayments (MCA):
                      </span>{" "}
                      MCA repayments automatically adjust with daily card
                      turnover, aligning with business cash flow.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#00AEEF] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        High Approval Rates:
                      </span>{" "}
                      Focus on business performance often leads to higher
                      approval chances compared to traditional banks,
                      particularly for MCA products.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#00AEEF] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        No Assets Required (Typically):
                      </span>{" "}
                      Both MCA and business loans are often unsecured, meaning
                      business assets are not usually required as collateral.
                      Personal guarantees may be needed.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#00AEEF] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Dedicated Funding Specialists:
                      </span>{" "}
                      Businesses receive support from funding specialists to
                      guide them through the process and explain the options.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Streamlined Application Process
                </h2>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  Capify's application is designed for speed:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#00AEEF] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Quick Online Form:</span>{" "}
                      Start with a brief online application providing basic
                      business and contact information.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#00AEEF] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Document Submission:
                      </span>{" "}
                      Typically requires recent business bank statements and,
                      for MCA, merchant card processing statements.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#00AEEF] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Fast Underwriting & Decision:
                      </span>{" "}
                      Capify assesses the business's performance and provides a
                      funding decision quickly, often within 1-2 days.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Supporting Business Potential
                </h2>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  Capify provides a valuable alternative funding source for UK
                  SMEs, particularly those in retail, hospitality, or service
                  sectors with consistent card sales (for MCA) or established
                  businesses seeking fast, flexible loans. Their focus on recent
                  performance over historical credit scores can open doors for
                  businesses declined by traditional lenders.
                </p>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  For businesses needing quick access to working capital or
                  funding for specific projects, Capify's MCA and Business Loan
                  products offer accessible and adaptable solutions.
                </p>

                <div className="text-left my-8">
                  <Link href="/financial-solutions/capify-personal-loan-requirements">
                    <Button className="bg-[#00AEEF] hover:bg-blue-700 text-white font-medium text-md py-2 px-8 rounded-full w-full">
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
