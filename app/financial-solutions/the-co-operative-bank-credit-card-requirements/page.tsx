import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import ResponsiveImage from "@/components/ui/responsive-image";

export function generateMetadata() {
  return {
    title:
      "The Co-operative Bank Credit Card Requirements: Everything You Need to Know - Top Finance UK",
    description:
      "Understand the eligibility criteria, documentation, and application process for The Co-operative Members Credit Card. Learn about income requirements, membership details, and costs.",
    keywords:
      "Co-operative Bank credit card requirements, Co-op Members credit card eligibility, credit card application, UK credit card requirements, Co-op membership, cashback card application",
  };
}

export default function CooperativeBankCreditCardRequirementsPage() {
  return (
    <main
      className="bg-white min-h-screen flex flex-col"
      data-category="tarjetas"
    >
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-3xl font-bold text-gray-800 mb-4 leading-8">
              Requirements for The Co-operative Bank Credit Card
            </h1>

            <div id="square01" data-topads data-topads-size="square"></div>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 mb-8 leading-5 text-left">
                The Co-operative Members Credit Card is an exclusive cashback
                credit card available only to Co-op Members, offering ethical
                banking combined with practical rewards on everyday spending.
              </p>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/uk/the-co-operative-bank-credit-card-requirements.webp"
                  alt="The Co-operative Bank Credit Card Requirements"
                  width={900}
                  height={507}
                  className="w-full h-auto rounded-xl"
                  priority={false}
                  quality={85}
                />
              </div>

              <section className="my-6">
                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  How to Qualify for The Co-operative Members Credit Card
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#007db8] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Age and Residency:</span>{" "}
                      You must be at least 18 years old and a UK resident. This
                      ensures applicants have the legal capacity for financial
                      commitments and that the bank can operate within UK
                      regulatory frameworks.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#007db8] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Income Requirement:</span>{" "}
                      A minimum annual income of £10,000 is required, making
                      this card accessible to a wide range of applicants
                      including part-time workers, self-employed individuals,
                      and retirees.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#007db8] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Co-op Membership:</span>{" "}
                      You must be a Co-op Member to apply. If you're not already
                      a member, you can join for just £1 through the Co-op
                      Membership website. Your membership number (starting
                      633174) will be required during the application process.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#007db8] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Employment Status:</span>{" "}
                      You must be employed full-time, part-time, self-employed,
                      or retired. This flexible requirement makes the card
                      available to various employment situations.
                    </div>
                  </div>
                </div>

                <div id="square02" data-topads data-topads-size="square"></div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Credit History Requirements:
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  The Co-operative Bank maintains specific credit history
                  standards to ensure responsible lending. You must not have:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#007db8] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Defaults or CCJs:</span>{" "}
                      No Defaults or County Court Judgements (CCJs) registered
                      in the past six years. This demonstrates a history of
                      meeting financial obligations.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#007db8] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        IVAs or Trust Deeds:
                      </span>{" "}
                      No Individual Voluntary Arrangements (IVAs) or Trust Deeds
                      entered into within the past six years, showing stable
                      financial management.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#007db8] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Bankruptcy:</span> Not
                      been declared bankrupt within the past six years,
                      indicating financial stability and recovery from previous
                      difficulties.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#007db8] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Recent Arrears:</span> Not
                      be in arrears or have missed more than two payments on any
                      credit agreement in the past six months, demonstrating
                      current financial responsibility.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Required Documentation:
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  To complete your application, you'll need to provide the
                  following information and documents:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#007db8] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Proof of Identity:</span>{" "}
                      A valid passport, UK driving licence, or national identity
                      card to verify your identity.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#007db8] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Income and Outgoings:
                      </span>{" "}
                      Details of your monthly income and regular outgoings to
                      assess affordability and determine appropriate credit
                      limits.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#007db8] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Address History:</span>{" "}
                      Any previous addresses from the last three years, helping
                      verify your residency and stability.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#007db8] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Bank Account Details:
                      </span>{" "}
                      The account number and sort code for your main bank
                      account, which will be used for setting up payments.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#007db8] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Co-op Membership Number:
                      </span>{" "}
                      Your Co-op Membership number (starting with 633174), which
                      verifies your membership status and enables cashback
                      features.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Understanding the Costs
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  It's essential to understand all costs associated with The
                  Co-operative Members Credit Card to make an informed decision:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#007db8] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">No Annual Fee:</span> This
                      card has no annual fee, making it a cost-effective choice
                      for everyday spending and long-term use.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#007db8] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Interest Rates:</span>{" "}
                      18.2% APR (variable) on purchases and balance transfers,
                      with 27.9% APR on cash withdrawals, which is higher to
                      discourage cash advances.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#007db8] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Cash Withdrawals:</span> A
                      fee of 3% of the amount withdrawn (minimum £3) applies to
                      cash advances, making this option suitable only for
                      emergencies.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#007db8] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Late Payments:</span> £10
                      fee for each late or missed payment, emphasising the
                      importance of maintaining regular payments.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#007db8] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Over-Limit Charges:</span>{" "}
                      £10 when you exceed your credit limit, then £10 each month
                      until your balance is brought back within the agreed
                      limit.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#007db8] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Foreign Transactions:
                      </span>{" "}
                      2.75% currency conversion fee for purchases or withdrawals
                      in foreign currencies, plus an additional 3% for cash
                      withdrawals abroad.
                    </div>
                  </div>
                </div>

                <div className="my-8 text-left sm:text-left">
                  <Link href="/personal-finance/credit-card-types-benefits/">
                    <ResponsiveImage
                      src="https://media.topfinanzas.com/images/ads/Top-Blog-Credit-Cards.webp"
                      alt="Learn More About Credit Cards"
                      width={1000}
                      height={563}
                      className="rounded-xl"
                      containerClassName="mx-auto w-full md:w-8/12"
                      quality={80}
                      sizes="(max-width: 768px) 100vw, 800px"
                      crossOrigin="anonymous"
                    />
                  </Link>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Benefits and Features
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  The Co-operative Members Credit Card offers several attractive
                  features beyond the eligibility requirements:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#007db8] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Dual Cashback Rates:
                      </span>{" "}
                      Earn 0.5% cashback at Co-op food stores and 0.3% on all
                      other purchases where Visa is accepted, maximizing your
                      rewards on everyday spending.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#007db8] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        No Balance Transfer Fee:
                      </span>{" "}
                      Transfer existing credit card balances without paying a
                      balance transfer fee, though interest at 18.2% APR will
                      apply to transferred balances.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#007db8] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Ethical Banking:</span>{" "}
                      Support the UK's original ethical bank with a customer-led
                      Ethical Policy that has guided responsible banking
                      decisions since 1992.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#007db8] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Digital Payment Integration:
                      </span>{" "}
                      Compatible with Apple Pay, Google Pay, and Samsung Wallet
                      for convenient contactless payments using your smartphone
                      or smartwatch.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Application Process
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Applying for The Co-operative Members Credit Card is
                  straightforward and typically takes around 10 minutes online:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#007db8] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Become a Co-op Member:
                      </span>{" "}
                      If you're not already a member, join The Co-op for just £1
                      through their membership website to obtain your membership
                      number.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#007db8] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Check Your Eligibility:
                      </span>{" "}
                      Review the eligibility criteria to ensure you meet all
                      requirements, including age, residency, income, and credit
                      history standards.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#007db8] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Gather Your Information:
                      </span>{" "}
                      Prepare all required documentation including your Co-op
                      membership number, income details, address history, and
                      bank account information.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#007db8] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Complete the Online Application:
                      </span>{" "}
                      Fill in the application form on The Co-operative Bank's
                      website. You can save your progress and return to it if
                      needed.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#007db8] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">5</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Credit Assessment:</span>{" "}
                      The Co-operative Bank will conduct a credit check and
                      assess your personal circumstances to determine your
                      eligibility and appropriate credit limit.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#007db8] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">6</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Receive Decision:</span>{" "}
                      You'll typically receive a decision quickly, and if
                      approved, your card will be posted to you within a few
                      working days.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Frequently Asked Questions
                </h2>

                <div className="space-y-6 my-8">
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Do I need to be a Co-op Member to apply?
                    </h3>
                    <p className="text-sm text-gray-700 leading-5">
                      Yes, Co-op Membership is mandatory for this card. However,
                      becoming a member is simple and costs just £1. You can
                      join online through The Co-op Membership website before
                      starting your credit card application.
                    </p>
                  </div>

                  <div className="text-left">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      What credit limit can I expect?
                    </h3>
                    <p className="text-sm text-gray-700 leading-5">
                      Credit limits range from a minimum of £500 to a maximum
                      determined by your personal circumstances and
                      affordability assessment. The Co-operative Bank will
                      assess your income, outgoings, and credit history to
                      determine an appropriate limit for your situation.
                    </p>
                  </div>

                  <div className="text-left">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      How long does the application take?
                    </h3>
                    <p className="text-sm text-gray-700 leading-5">
                      The online application typically takes around 10 minutes
                      to complete if you have all your information ready. You
                      can save your progress and return to the application later
                      if needed. Decisions are usually made quickly, often
                      within minutes of submission.
                    </p>
                  </div>

                  <div className="text-left">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Will applying affect my credit score?
                    </h3>
                    <p className="text-sm text-gray-700 leading-5">
                      Yes, The Co-operative Bank will conduct a credit check as
                      part of the application process, which will be recorded on
                      your credit file. However, requesting a specific credit
                      amount will not affect your credit score or the bank's
                      decision.
                    </p>
                  </div>

                  <div className="text-left">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Can I add additional cardholders?
                    </h3>
                    <p className="text-sm text-gray-700 leading-5">
                      Yes, you can add additional cardholders to your account.
                      Additional cardholders must be 18 or over and UK
                      residents. Make sure you have their consent before adding
                      them to your application.
                    </p>
                  </div>
                </div>

                <div className="my-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 text-left">
                  <p className="text-sm text-gray-800 leading-5">
                    <strong>Important Disclaimer:</strong> Your application is
                    subject to status and based on a credit check and assessment
                    of your personal circumstances. The Co-operative Bank
                    reserves the right to decline applications that do not meet
                    their lending criteria. Missing payments or exceeding your
                    credit limit can have serious consequences, including
                    additional charges and negative impacts on your credit
                    rating. You should only borrow what you can afford to repay.
                    This information is for general guidance only and does not
                    constitute financial advice. Consider seeking independent
                    financial advice before applying for any credit product.
                  </p>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Representative Example
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  <strong>18.2% APR representative (variable).</strong> Based on
                  an assumed credit limit of £1,200 and a purchase rate of 18.2%
                  per annum (variable). This means that if you borrow £1,200 and
                  make no additional purchases or payments, you would be charged
                  interest at 18.2% per annum on the outstanding balance. The
                  actual rate you receive may vary depending on your personal
                  circumstances and creditworthiness.
                </p>

                <div className="text-left my-8">
                  <a
                    href="https://www.co-operativebank.co.uk/products/credit-cards/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-[#007db8] hover:bg-blue-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                      Apply Now at Co-operative Bank Official Website
                    </Button>
                  </a>
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
