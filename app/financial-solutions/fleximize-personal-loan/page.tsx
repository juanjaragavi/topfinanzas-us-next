import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title: "Fleximize: Flexible Business Loans for UK SMEs - Top Finance UK",
    description:
      "Explore Fleximize's flexible business loans (Flexiloan & Flexiloan Lite) offering tailored repayment options and top-up facilities for UK SMEs.",
    keywords:
      "Fleximize, Flexiloan, SME loan, business finance UK, flexible business loan, fintech lending, working capital, growth funding",
  };
}

export default function FleximizePersonalLoanPage() {
  // Note: Fleximize provides business finance (Flexiloan), not personal loans.
  // Content adjusted to reflect its actual service for SMEs.
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12" data-category="loans">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-4xl font-bold text-gray-800 mb-4 leading-8">
              Fleximize: Truly Flexible Business Loans for SMEs
            </h1>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 font-medium mb-8 leading-5 text-left">
                Fleximize offers innovative and highly flexible business loans
                (Flexiloan and Flexiloan Lite) designed to adapt to the changing
                needs of UK SMEs, with features like repayment holidays and
                top-ups.
              </p>

              <div id="square01" data-topads data-topads-size="square"></div>

              <hr className="my-8" />

              <div className="space-y-2 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#6D2C91] flex items-center justify-center mr-3">
                    {" "}
                    {/* Fleximize Purple */}
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Highly Flexible Terms:
                    </span>{" "}
                    Borrow £5,000 to £500,000 with features like top-ups,
                    repayment holidays, and penalty-free early repayments
                    built-in.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#6D2C91] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">Two Core Products:</span>{" "}
                    Choose between the 'Flexiloan' for larger amounts/longer
                    terms and the 'Flexiloan Lite' for smaller, shorter-term
                    needs.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#6D2C91] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Relationship-Focused Lending:
                    </span>{" "}
                    Emphasis on building relationships, with dedicated managers
                    and a focus on understanding the business beyond just
                    algorithms.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#6D2C91] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Fast & Responsive Service:
                    </span>{" "}
                    Quick online application process with decisions often made
                    within 24 hours.
                  </div>
                </div>
              </div>

              <div className="text-left my-8">
                <Link href="/financial-solutions/fleximize-personal-loan-requirements">
                  <Button className="bg-[#6D2C91] hover:bg-purple-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <hr className="my-8" />

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/uk/loans/718137416-fotosprestamo-fleximize1uk.webp"
                  alt="Fleximize Business Loans"
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
                  Fleximize is a UK-based fintech lender dedicated to providing
                  genuinely flexible finance solutions for small and
                  medium-sized businesses. Their core products, the Flexiloan
                  and Flexiloan Lite, are designed to adapt to the dynamic
                  nature of SMEs, offering features often lacking in traditional
                  business loans.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Unparalleled Flexibility: Top-Ups & Holidays
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  What sets Fleximize apart is its built-in flexibility.
                  Businesses with a good repayment history can often access
                  top-ups to their existing loan amount without needing a full
                  re-application. Furthermore, Fleximize offers the possibility
                  of structured repayment holidays, allowing businesses to pause
                  payments during quieter periods or unexpected challenges
                  (interest still accrues). This adaptability is core to their
                  offering. They also allow penalty-free early repayments.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Tailored Loan Products: Flexiloan & Flexiloan Lite
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  Fleximize offers two main loan products to cater to different
                  needs:
                  <ul className="list-disc list-inside ml-4 my-2 text-left">
                    <li className="text-left">
                      <strong>Flexiloan:</strong> For established businesses
                      seeking larger amounts (£25,001 - £500,000) over longer
                      terms (up to 48 months), often requiring security.
                    </li>
                    <li className="text-left">
                      <strong>Flexiloan Lite:</strong> An unsecured option for
                      smaller, shorter-term needs (£5,000 - £25,000) over terms
                      typically up to 36 months.
                    </li>
                  </ul>
                  This dual offering allows them to serve a wider range of SMEs,
                  from those needing quick, smaller injections of capital to
                  those planning larger investments.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Relationship-Driven Approach
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  While leveraging technology for speed, Fleximize emphasizes a
                  relationship-based approach. Each applicant typically works
                  with a dedicated relationship manager who seeks to understand
                  the business's story, challenges, and potential beyond just
                  the numbers. This human touch can be beneficial for businesses
                  whose potential isn't fully captured by automated credit
                  scoring alone.
                </p>

                <div className="my-8" data-category="loans">
                  <Link href="/personal-finance/credit-card-types-benefits/">
                    <Image
                      src="https://media.topfinanzas.com/images/ads/Top-Blog-Credit-Cards.webp"
                      alt="Fleximize Business Loans"
                      width={1000}
                      height={563}
                      className="mx-auto w-full md:w-8/12 h-auto rounded-xl"
                      loading="lazy"
                      quality={80}
                    />
                  </Link>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Key Features of Fleximize Loans:
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#6D2C91] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Top-Up Facility:</span>{" "}
                      Access additional funds easily as your business grows or
                      needs change, without a complex re-application process
                      (subject to status).
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#6D2C91] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Repayment Holidays:</span>{" "}
                      Option to defer payments during challenging periods,
                      providing crucial breathing space for cash flow management
                      (interest accrues).
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#6D2C91] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Penalty-Free Early Repayment:
                      </span>{" "}
                      Settle your loan early or make overpayments anytime
                      without extra charges, saving on interest costs.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#6D2C91] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Transparent Pricing:
                      </span>{" "}
                      Clear, upfront information on interest rates and any
                      applicable fees, tailored to the business's risk profile.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Application Process
                </h2>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  Fleximize combines technology with a personal touch:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#6D2C91] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Online Application:</span>{" "}
                      Start with a straightforward online form providing
                      business details and funding needs.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#6D2C91] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Dedicated Relationship Manager:
                      </span>{" "}
                      You'll likely be assigned a manager to discuss your
                      application, understand your business, and guide you
                      through document submission (e.g., bank statements,
                      accounts).
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#6D2C91] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Fast Decision Making:
                      </span>{" "}
                      Decisions are typically made quickly, often within 24-48
                      hours, once all information is received.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Supporting SME Resilience and Growth
                </h2>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  Fleximize's focus on flexibility makes its loans particularly
                  suitable for businesses operating in dynamic markets or those
                  experiencing seasonal fluctuations. The ability to top-up
                  funds or take repayment holidays provides a level of
                  adaptability often missing from standard loan products,
                  helping SMEs navigate uncertainty and seize growth
                  opportunities.
                </p>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  For UK SMEs seeking more than just capital – a flexible
                  financial partner that understands business volatility –
                  Fleximize offers a compelling and supportive lending solution.
                </p>

                <div className="text-left my-8">
                  <Link href="/financial-solutions/fleximize-personal-loan-requirements">
                    <Button className="bg-[#6D2C91] hover:bg-purple-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
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
