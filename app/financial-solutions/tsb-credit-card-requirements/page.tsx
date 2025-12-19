import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "TSB Credit Card Requirements: Application Guidelines - Top Finance UK",
    description:
      "Discover the eligibility criteria, application process, and documentation needed for the TSB Credit Card application to improve your chances of approval.",
    keywords:
      "TSB Credit Card requirements, UK credit card application, TSB eligibility, credit score requirements, UK banking applications",
  };
}

export default function TSBCreditCardRequirementsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-3xl font-bold text-gray-800 mb-4 leading-8">
              Requirements for the TSB Credit Card
            </h1>

            <div id="square01" data-topads data-topads-size="square"></div>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 mb-8 leading-5 text-left">
                The TSB Credit Card offers straightforward features with
                competitive rates and practical benefits designed for everyday
                banking needs.
              </p>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/uk/credit-cards/718645161-top_prestamos-y-tarjetas-uk_v1-07.webp"
                  alt="TSB Credit Card"
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
                  How to Qualify for the TSB Credit Card
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0A4D8C] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Age and residency:</span>{" "}
                      You must be at least 18 years old and a UK resident. This
                      ensures compliance with UK financial regulations and
                      confirms your eligibility for domestic financial products.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0A4D8C] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Income requirement:</span>{" "}
                      While TSB doesn't typically specify a minimum income
                      threshold, you'll need to demonstrate a regular income
                      sufficient to manage credit responsibly. Your income will
                      be assessed relative to your existing financial
                      commitments.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0A4D8C] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Banking relationship:
                      </span>{" "}
                      While not strictly required, having an existing
                      relationship with TSB (such as a current account) may
                      positively influence your application, as the bank will
                      have more information about your financial behavior.
                    </div>
                  </div>
                </div>

                <div id="square02" data-topads data-topads-size="square"></div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Required Documentation:
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0A4D8C] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Proof of Identity:</span>{" "}
                      A valid passport, driving licence, or other acceptable
                      government-issued ID to verify your identity in accordance
                      with anti-money laundering regulations.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0A4D8C] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Proof of Address:</span>{" "}
                      Recent utility bills, council tax statements, or bank
                      statements (typically no older than 3 months) to confirm
                      your current UK residential address. TSB may also verify
                      your address electronically using the electoral roll.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0A4D8C] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Employment Information:
                      </span>{" "}
                      Details about your current employment status, including
                      your employer's name and contact information, your role,
                      and length of employment to establish your income
                      stability.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0A4D8C] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Financial Details:</span>{" "}
                      Information about your income, existing financial
                      commitments, and monthly expenditures to assess your
                      ability to manage additional credit.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Application Process
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Understanding the TSB Credit Card application process can help
                  increase your chances of a successful application:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0A4D8C] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Online Application:</span>{" "}
                      The most convenient option is to apply through TSB's
                      website, which offers a streamlined process typically
                      taking about 10-15 minutes to complete. You'll usually
                      receive an initial decision immediately after submission.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0A4D8C] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        In-Branch Application:
                      </span>{" "}
                      For personalized assistance, you can visit any TSB branch
                      to apply in person with the help of a banking advisor who
                      can guide you through the process and answer any
                      questions.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0A4D8C] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Telephone Application:
                      </span>{" "}
                      You can also apply by phone, providing a middle ground
                      between online convenience and personalized assistance
                      without the need to visit a branch.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0A4D8C] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Credit Check:</span> As
                      part of the application process, TSB will conduct a credit
                      check using information from credit reference agencies.
                      This check leaves a footprint on your credit file, which
                      other lenders can see.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Understanding the Costs
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Before applying for the TSB Credit Card, it's important to
                  understand the associated costs:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0A4D8C] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Representative APR:</span>{" "}
                      The standard variable APR typically ranges from 19.9% to
                      27.9%, depending on your individual circumstances and the
                      specific card variant you're offered. New customers may be
                      eligible for promotional rates.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0A4D8C] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Annual Fee:</span> Most
                      TSB credit cards have no annual fee, making them
                      economical options for everyday banking customers.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0A4D8C] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Balance Transfer Fee:
                      </span>{" "}
                      When transferring balances from other credit cards, a fee
                      (typically between 2% and 3% of the amount transferred)
                      usually applies, even during promotional 0% interest
                      periods.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0A4D8C] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Foreign Transaction Fee:
                      </span>{" "}
                      A non-sterling transaction fee typically applies for
                      purchases and cash withdrawals made abroad, usually around
                      2.95% of the transaction value.
                    </div>
                  </div>
                </div>

                <div className="my-8 text-left sm:text-left">
                  <Link href="/personal-finance/best-personal-loans">
                    <Image
                      src="https://media.topfinanzas.com/images/ads/Top-Blog-Personal-loans-1.webp"
                      alt="TSB Credit Card"
                      width={1000}
                      height={563}
                      className="mx-auto w-full md:w-8/12 h-auto rounded-xl"
                      priority
                    />
                  </Link>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Key Benefits and Features
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0A4D8C] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Cashback Offers:</span>{" "}
                      Access targeted cashback deals at selected retailers
                      through TSB's cashback platform, providing tangible
                      rewards for your everyday spending without complex
                      redemption processes.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0A4D8C] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Digital Banking:</span>{" "}
                      Manage your account through TSB's mobile app and online
                      banking platform, with features like transaction
                      monitoring, spending insights, and card controls for
                      enhanced security and convenience.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0A4D8C] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Promotional Rates:</span>{" "}
                      New customers may benefit from promotional interest rates
                      on purchases or balance transfers, providing flexibility
                      for managing larger expenses or consolidating existing
                      credit card debt.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Who Is This Card Best For?
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  The TSB Credit Card is particularly suitable for several types
                  of customers:
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
                  Everyday banking customers:
                </h3>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  With its straightforward features and competitive rates, this
                  card is ideal for those seeking a reliable credit card for
                  everyday purchases without unnecessary complexity. It offers
                  practical functionality without the premium price point that
                  often accompanies more feature-rich cards.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  <span className="font-bold">Learn more:</span>{" "}
                  <Link
                    href="/personal-finance/cashback-credit-cards/" // Replaced dead link
                    className="text-blue-600 underline"
                  >
                    Essential features for everyday banking cards
                  </Link>
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
                  Existing TSB customers:
                </h3>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  If you already bank with TSB, this card offers seamless
                  integration with your existing accounts. You can view and
                  manage all your TSB products in one place, making it
                  convenient to track spending, make payments, and maintain a
                  comprehensive overview of your financial relationship with the
                  bank.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  <span className="font-bold">Learn more:</span>{" "}
                  <Link
                    href="/personal-finance/credit-card-types-benefits/" // Replaced dead link
                    className="text-blue-600 underline"
                  >
                    Benefits of consolidating your banking relationship
                  </Link>
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
                  Cashback seekers:
                </h3>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  TSB's cashback platform provides targeted offers at selected
                  retailers, allowing you to earn rewards on your everyday
                  spending. Unlike more complex rewards systems that require
                  point accumulation and redemption, TSB's approach provides
                  straightforward cashback that is automatically credited to
                  your account.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  <span className="font-bold">Learn more:</span>{" "}
                  <Link
                    href="/personal-finance/understanding-credit-card-interest-rates/" // Updated link
                    className="text-blue-600 underline"
                  >
                    Maximizing your returns with cashback credit cards
                  </Link>
                </p>

                <div className="my-8 text-left sm:text-left">
                  <Link href="/personal-finance/getting-out-of-debt">
                    <Image
                      src="https://media.topfinanzas.com/images/ads/Top-Blog-Debt-management-1.webp"
                      alt="TSB Credit Card"
                      width={1000}
                      height={563}
                      className="mx-auto w-full md:w-8/12 h-auto rounded-xl"
                      priority
                    />
                  </Link>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Is the TSB Credit Card Right for You?
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  When considering the TSB Credit Card, it's important to
                  evaluate how its features align with your financial needs and
                  spending habits. This card offers a straightforward approach
                  to credit with practical benefits and competitive rates,
                  making it suitable for everyday banking customers seeking
                  reliability without complexity. By understanding the
                  eligibility requirements and application process outlined
                  above, you can approach your application with confidence and
                  improve your chances of approval.
                </p>

                <div className="text-left my-8">
                  <Link href="https://www.tsb.co.uk/credit-cards/">
                    <Button className="bg-[#0A4D8C] hover:bg-blue-900 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                      Visit Official Website
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
