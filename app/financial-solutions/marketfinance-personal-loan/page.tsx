import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "MarketFinance: Business Loans & Invoice Finance for SMEs - Top Finance UK",
    description:
      "Explore MarketFinance's solutions for UK SMEs, including fast business loans and flexible invoice finance to improve cash flow and fund growth.",
    keywords:
      "MarketFinance, SME finance, business loan UK, invoice finance, fintech lending, cash flow solutions, working capital, business funding",
  };
}

export default function MarketFinancePersonalLoanPage() {
  // Note: MarketFinance provides business finance (loans, invoice finance), not personal loans.
  // Content adjusted to reflect its actual service for SMEs.
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12" data-category="loans">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-4xl font-bold text-gray-800 mb-4 leading-8">
              MarketFinance: Smart Business Finance Solutions for UK SMEs
            </h1>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 font-medium mb-8 leading-5 text-left">
                MarketFinance offers a range of fast, flexible finance options
                for UK businesses, including business loans and invoice finance,
                designed to unlock working capital and fuel growth.
              </p>

              <div id="square01" data-topads data-topads-size="square"></div>

              <hr className="my-8" />

              <div className="space-y-2 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#003DA5] flex items-center justify-center mr-3">
                    {" "}
                    {/* MarketFinance Blue */}
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">Invoice Finance:</span>{" "}
                    Unlock cash tied up in unpaid invoices, typically up to 90%
                    of the invoice value, often within 24 hours. Flexible
                    options available.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#003DA5] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">Business Loans:</span>{" "}
                    Access unsecured loans from £10,000 up to £500,000 for
                    growth, working capital, or other business needs, with fast
                    decisions.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#003DA5] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Fast & Simple Process:
                    </span>{" "}
                    Leverage technology for quick online applications, minimal
                    paperwork, and rapid funding decisions.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#003DA5] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">Transparent Pricing:</span>{" "}
                    Clear, upfront information on rates and fees tailored to
                    your business profile and the specific finance product.
                  </div>
                </div>
              </div>

              <div className="text-left my-8">
                <Link href="/financial-solutions/marketfinance-personal-loan-requirements">
                  <Button className="bg-[#003DA5] hover:bg-blue-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/uk/loans/718136896-fotosprestamo-fundingchange1uk.webp"
                  alt="MarketFinance Business Solutions"
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
                  MarketFinance (formerly MarketInvoice) is a leading UK fintech
                  company specializing in providing working capital solutions to
                  SMEs. They offer innovative products like invoice finance and
                  business loans, designed to help businesses manage cash flow,
                  invest in growth, and navigate operational challenges.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Unlocking Cash Flow with Invoice Finance
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  A core offering from MarketFinance is invoice finance. This
                  allows businesses to unlock the cash tied up in their
                  outstanding customer invoices, rather than waiting 30, 60, or
                  90+ days for payment. Businesses can typically receive up to
                  90% of the invoice value upfront, often within 24 hours. This
                  provides immediate working capital to cover expenses, pay
                  suppliers, or invest in new opportunities. MarketFinance
                  offers both selective invoice discounting (choose which
                  invoices to fund) and contract finance options.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Flexible Business Loans for Growth
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  MarketFinance also provides unsecured business loans,
                  typically ranging from £10,000 to £500,000. These loans can be
                  used for various purposes, including expansion projects,
                  purchasing equipment, hiring staff, marketing campaigns, or
                  general working capital. Repayment terms are usually flexible,
                  often spanning 1 to 4 years, with fixed interest rates
                  providing budget certainty.
                </p>

                <hr className="my-8" />

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Technology-Driven Speed and Simplicity
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  Leveraging fintech, MarketFinance offers a fast, streamlined
                  application process. Businesses can apply online, often
                  linking their accounting software (like Xero, Sage,
                  QuickBooks) or providing bank statements digitally. This
                  data-driven approach allows for quick credit assessments and
                  rapid funding decisions, often much faster than traditional
                  bank processes.
                </p>

                <div className="my-8 text-left sm:text-left">
                  <Link href="/personal-finance/credit-card-types-benefits/">
                    <Image
                      src="https://media.topfinanzas.com/images/ads/Top-Blog-Credit-Cards.webp"
                      alt="MarketFinance Business Finance"
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
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#003DA5] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Transparent Costs:</span>{" "}
                      MarketFinance provides clear pricing structures for both
                      loans (interest rate + potential arrangement fee) and
                      invoice finance (discount fee + service fee), ensuring
                      businesses understand the costs involved.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#003DA5] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Dedicated Support:</span>{" "}
                      Businesses often work with relationship managers who
                      understand their needs and can provide guidance on the
                      best finance solutions.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#003DA5] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Flexibility:</span>{" "}
                      Particularly with invoice finance, businesses can often
                      choose which invoices to fund, providing control over
                      their funding levels and costs. Business loans may also
                      offer early repayment options (check specific terms).
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#003DA5] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Focus on Established SMEs:
                      </span>{" "}
                      MarketFinance typically works with established businesses
                      with a proven trading history and consistent revenue
                      streams.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Streamlined Application for Businesses
                </h2>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  The application process is tailored for efficiency:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#003DA5] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Online Enquiry:</span>{" "}
                      Start with a quick online application, providing basic
                      business details and funding requirements.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#003DA5] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Data Integration:</span>{" "}
                      Securely link accounting software or provide bank
                      statements and financial accounts digitally for
                      assessment.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#003DA5] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Fast Assessment & Offer:
                      </span>{" "}
                      MarketFinance uses technology for rapid credit and risk
                      assessment, providing clear offers quickly if approved.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Powering Business Ambition
                </h2>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  MarketFinance plays a significant role in the alternative
                  finance market, offering crucial working capital and growth
                  funding to UK SMEs. Their focus on invoice finance provides a
                  valuable tool for businesses facing cash flow challenges due
                  to long payment terms from customers. Their business loans
                  offer a fast alternative to traditional bank lending for
                  investment and expansion.
                </p>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  For established UK SMEs seeking efficient, technology-driven
                  finance solutions, particularly for managing cash flow or
                  funding growth, MarketFinance offers tailored products
                  designed to meet their specific needs.
                </p>

                <div className="text-left my-8">
                  <Link href="/financial-solutions/marketfinance-personal-loan-requirements">
                    <Button className="bg-[#003DA5] hover:bg-blue-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
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
