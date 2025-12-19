import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "iwoca Flexi-Loan: Fast Business Financing for SMEs - Top Finance UK",
    description:
      "Explore iwoca's Flexi-Loan, offering fast, flexible working capital solutions designed specifically for UK small and medium-sized businesses.",
    keywords:
      "iwoca, Flexi-Loan, SME loan, business finance UK, fintech lending, small business funding, working capital, flexible business loan",
  };
}

export default function IwocaPersonalLoanPage() {
  // Note: iwoca provides business finance (Flexi-Loan), not personal loans.
  // Content adjusted to reflect its actual service for SMEs.
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12" data-category="loans">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-4xl font-bold text-gray-800 mb-4 leading-8">
              iwoca Flexi-Loan: Fast, Flexible Funding for UK Businesses
            </h1>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 font-medium mb-8 leading-5 text-left">
                iwoca offers innovative business finance solutions, including
                the Flexi-Loan, designed to provide UK SMEs with quick access to
                working capital through a simple, technology-driven process.
              </p>

              <div id="square01" data-topads data-topads-size="square"></div>

              <hr className="my-8" />

              <div className="space-y-2 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-red-400 flex items-center justify-center mr-3">
                    {" "}
                    {/* iwoca Teal */}
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">Fast Access to Funds:</span>{" "}
                    Apply online in minutes, receive decisions quickly (often
                    within hours), and access funds typically within 24 hours of
                    approval.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-red-400 flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">Flexible Borrowing:</span>{" "}
                    Borrow from £1,000 up to £500,000 with the Flexi-Loan,
                    designed for working capital needs, stock purchase, or
                    bridging cash flow gaps.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-red-400 flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Pay Only for What You Use:
                    </span>{" "}
                    With the Flexi-Loan, draw down funds as needed up to your
                    approved limit and only pay interest on the amount borrowed.
                    Repay early with no fees.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-red-400 flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Simple, Transparent Pricing:
                    </span>{" "}
                    Clear interest rates tailored to your business profile, with
                    no hidden fees or complex charges.
                  </div>
                </div>
              </div>

              <div className="text-left my-8">
                <Link href="/financial-solutions/iwoca-personal-loan-requirements">
                  <Button className="bg-red-400 hover:bg-teal-600 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/uk/loans/718137033-fotosprestamo-iwoca1uk.webp"
                  alt="iwoca Business Finance"
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
                  iwoca is a prominent European fintech lender focused on
                  providing flexible finance to small and medium-sized
                  businesses. Their flagship product, the Flexi-Loan, is
                  designed to address the short-term working capital needs often
                  unmet by traditional banking products, offering speed,
                  flexibility, and simplicity.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Addressing SME Working Capital Needs
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  The iwoca Flexi-Loan functions like a credit line, allowing
                  businesses to access funds up to an approved limit (£1,000 to
                  £500,000) whenever needed. This is ideal for managing cash
                  flow fluctuations, purchasing inventory, bridging payment
                  gaps, or seizing short-term opportunities. Unlike traditional
                  term loans, businesses only pay interest on the funds they
                  actually draw down, making it a cost-effective solution for
                  managing variable capital requirements.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Speed and Simplicity via Technology
                </h2>

                <hr className="my-8" />

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  iwoca leverages technology to offer a fast and streamlined
                  experience. Businesses can apply online in minutes, often by
                  securely linking their business bank accounts or accounting
                  software. This allows iwoca's algorithms to quickly assess
                  creditworthiness and affordability, leading to decisions often
                  made within hours. Approved funds can typically be accessed
                  within 24 hours.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Flexible Repayment Structure
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  The Flexi-Loan typically has a term of up to 12 or 24 months,
                  but one of its key features is the flexibility in repayment.
                  Businesses can repay the borrowed amount early at any time
                  without incurring any fees or penalties. This allows companies
                  to minimize interest costs if their cash flow improves sooner
                  than expected.
                </p>

                <div className="my-8 text-left sm:text-left">
                  <Link href="/personal-finance/credit-card-types-benefits/">
                    <Image
                      src="https://media.topfinanzas.com/images/ads/Top-Blog-Credit-Cards.webp"
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
                  Additional Features:
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-red-400 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Top-Ups Available:</span>{" "}
                      Businesses with an existing Flexi-Loan can often apply for
                      top-ups if they need additional funds, subject to
                      reassessment.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-red-400 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Transparent Pricing:
                      </span>{" "}
                      iwoca provides clear, upfront information about interest
                      rates (tailored to the business) and any applicable fees.
                      There are no hidden charges.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-red-400 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Dedicated Account Management:
                      </span>{" "}
                      Businesses often have access to a dedicated account
                      manager for support and assistance throughout the
                      relationship.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-red-400 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Integration Capabilities:
                      </span>{" "}
                      Ability to link with major accounting software and
                      business bank accounts streamlines the application and
                      monitoring process.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Streamlined Application for Businesses
                </h2>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  The application process is designed for busy SMEs:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-red-400 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Quick Online Form:</span>{" "}
                      Complete the application online in minutes, providing
                      basic business details and funding needs.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-red-400 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Secure Data Linking:
                      </span>{" "}
                      Option to securely link business bank accounts or
                      accounting software (like Xero, QuickBooks) for faster
                      assessment. Alternatively, upload bank statements and
                      accounts.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-red-400 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Rapid Decision & Offer:
                      </span>{" "}
                      iwoca's technology allows for fast credit decisions, often
                      within hours. Approved businesses receive a clear offer
                      detailing the credit limit, interest rate, and terms.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Supporting SME Agility
                </h2>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  iwoca positions itself as a partner for SMEs needing agile
                  financial support. The Flexi-Loan is particularly suited for
                  businesses with fluctuating working capital needs, seasonal
                  variations, or those needing quick funds to capitalize on
                  opportunities. Its structure provides more flexibility than a
                  traditional fixed-term loan.
                </p>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  For UK SMEs seeking fast, flexible, and transparent
                  short-to-medium term financing, especially for working
                  capital, iwoca's Flexi-Loan offers a strong fintech
                  alternative to traditional bank overdrafts or loans.
                </p>

                <div className="text-left my-8">
                  <Link href="/financial-solutions/iwoca-personal-loan-requirements">
                    <Button className="bg-red-400 hover:bg-teal-600 text-white font-medium text-md py-2 px-8 rounded-full w-full">
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
