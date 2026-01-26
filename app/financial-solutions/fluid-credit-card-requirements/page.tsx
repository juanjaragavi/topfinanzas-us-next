import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Fluid Credit Card Requirements: Everything You Need to Know - Top Finance UK",
    description:
      "Understand the eligibility criteria, documentation requirements, and application process for the Fluid Credit Card to maximize your chances of approval for 0% balance transfers.",
    keywords:
      "Fluid credit card requirements, Fluid credit card application, eligibility criteria, balance transfer requirements, UK credit cards, credit card approval, NewDay credit card",
  };
}

export default function FluidCreditCardRequirementsPage() {
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
              Requirements for the Fluid Credit Card
            </h1>

            <div id="square01" data-topads data-topads-size="square"></div>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 mb-8 leading-5 text-left">
                The Fluid Credit Card is designed for UK residents looking to
                reduce their credit card costs through balance transfers. Before
                applying, ensure you meet the eligibility criteria and
                understand the application requirements.
              </p>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/uk/fluid-credit-card-requirements.webp"
                  alt="Fluid Credit Card Requirements"
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
                  How to Qualify for the Fluid Credit Card
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  To be eligible for the Fluid Credit Card, you must meet
                  several fundamental requirements designed to ensure
                  responsible lending and regulatory compliance:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#642667] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Age Requirement:</span>{" "}
                      You must be at least 18 years old to apply for this credit
                      card, in accordance with UK consumer credit regulations.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#642667] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">UK Residency:</span> You
                      must have a permanent UK address. This requirement ensures
                      the lender can verify your identity and operate within UK
                      regulatory frameworks.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#642667] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">UK Bank Account:</span>{" "}
                      You must have a current UK bank or building society
                      account in your name. This is essential for making
                      payments and managing your credit card account.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#642667] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        No Bankruptcy Proceedings:
                      </span>{" "}
                      You must not currently have any bankruptcy proceedings
                      against you, ensuring you have the legal capacity to enter
                      into a credit agreement.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#642667] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Credit History:</span> A
                      reasonable credit history is required. The card provider
                      will conduct a credit check to assess your
                      creditworthiness and determine your credit limit.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Exclusion Criteria
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  You are not eligible for a Fluid Credit Card if you meet any
                  of the following conditions:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#642667] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">✗</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Recent Bankruptcy:</span>{" "}
                      If you have been declared bankrupt in the past 18 months,
                      you cannot apply for a Fluid card during this period.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#642667] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">✗</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Recent CCJ:</span> If you
                      have received a County Court Judgement (CCJ) in the past
                      12 months, you are not eligible to apply.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#642667] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">✗</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Existing Fluid Cardholder:
                      </span>{" "}
                      If you already have a Fluid card, you cannot apply for
                      another one.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#642667] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">✗</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Recent NewDay Cards:
                      </span>{" "}
                      If you have taken out a Marbles, Opus, or Aqua card (all
                      NewDay products) in the past 12 months, you are not
                      eligible for a Fluid card during this period.
                    </div>
                  </div>
                </div>

                <div id="square02" data-topads data-topads-size="square"></div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Required Documentation
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  When applying for the Fluid Credit Card, you'll typically need
                  to provide the following documentation to verify your identity
                  and financial circumstances:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#642667] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Proof of Identity:</span>{" "}
                      A valid form of photo identification such as a current UK
                      passport, UK driving licence (photocard), or biometric
                      residence permit.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#642667] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Proof of Address:</span>{" "}
                      Recent documents dated within the last three months, such
                      as utility bills (gas, electricity, water), council tax
                      statements, bank statements, or HMRC correspondence
                      showing your permanent UK address.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#642667] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Bank Account Details:
                      </span>{" "}
                      Details of your current UK bank or building society
                      account, including account number and sort code, for
                      setting up Direct Debits and managing payments.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#642667] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Financial Information:
                      </span>{" "}
                      Details about your employment status, income, and existing
                      financial commitments to assess affordability and
                      determine an appropriate credit limit.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Understanding the Costs
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Before applying for the Fluid Credit Card, it's essential to
                  understand the associated costs and interest rates:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#642667] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Representative APR:</span>{" "}
                      34.9% (variable). This includes a purchase interest rate
                      of 34.94% p.a. (variable) based on an assumed credit limit
                      of £1,200. The actual APR and credit limit you receive
                      will depend on your individual circumstances and
                      creditworthiness.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#642667] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Balance Transfer Offer:
                      </span>{" "}
                      0% interest on balance transfers for 9 months from account
                      opening, with a 3% balance transfer fee. This offer must
                      be used within the first 60 days of account opening. After
                      the 9-month promotional period, your standard purchase
                      rate will apply.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#642667] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Credit Limits:</span>{" "}
                      Initial credit limits range from £250 to £4,000, depending
                      on your credit assessment. The maximum balance you can
                      transfer cannot exceed 90% of your credit limit (including
                      the balance transfer fee).
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#642667] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Annual Fee:</span> The
                      Fluid Credit Card does not charge an annual fee, making it
                      an accessible option for those seeking balance transfer
                      facilities without additional yearly costs.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#642667] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Late Payment Charges:
                      </span>{" "}
                      Missing payments or exceeding your credit limit will
                      result in extra charges and you will forfeit the 0%
                      balance transfer offer. This could also make future credit
                      more difficult and expensive to obtain.
                    </div>
                  </div>
                </div>

                <div className="my-8 text-left sm:text-left">
                  <Link href="/personal-finance/getting-out-of-debt/">
                    <Image
                      src="https://media.topfinanzas.com/images/ads/Top-Blog-Credit-Cards.webp"
                      alt="Learn About Debt Management Strategies"
                      width={1000}
                      height={563}
                      className="w-full md:w-8/12 h-auto rounded-xl mx-auto"
                      quality={80}
                      loading="lazy"
                    />
                  </Link>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Benefits and Features Summary
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  The Fluid Credit Card offers several attractive features that
                  make it appealing for those looking to manage existing credit
                  card debt:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#642667] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Interest-Free Period:
                      </span>{" "}
                      Enjoy 9 months of 0% interest on balance transfers,
                      allowing more of your repayments to go towards clearing
                      your debt rather than paying interest charges.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#642667] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        FastCheck Eligibility:
                      </span>{" "}
                      Check your eligibility in just 60 seconds with no impact
                      on your credit rating, using a soft credit search that
                      won't appear on your credit file.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#642667] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Online Account Manager:
                      </span>{" "}
                      Manage your account 24/7 through a secure online portal,
                      with access to statements, balance information, payment
                      facilities, and credit health tools.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#642667] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Digital Wallet Support:
                      </span>{" "}
                      Add your Fluid card to Apple Pay or Google Pay for fast,
                      secure contactless payments online, in apps, or in-store.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#642667] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Savings Calculator:</span>{" "}
                      Use the online calculator to estimate how much you could
                      save by transferring your balance to Fluid, helping you
                      make an informed decision.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Application Process
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Applying for the Fluid Credit Card is straightforward. Follow
                  these steps to complete your application:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-6 rounded-full bg-[#642667] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-xs">1</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Use FastCheck Eligibility Tool:
                      </span>{" "}
                      Visit the Fluid website and use the FastCheck tool to see
                      if you're likely to be approved. This soft credit search
                      takes 60 seconds and won't affect your credit score.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-6 rounded-full bg-[#642667] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-xs">2</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Complete the Application Form:
                      </span>{" "}
                      Fill in the online application with your personal details,
                      contact information, employment status, income, and
                      existing financial commitments. Ensure all information is
                      accurate and up-to-date.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-6 rounded-full bg-[#642667] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-xs">3</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Credit Assessment:</span>{" "}
                      Once you submit your full application, NewDay Ltd will
                      conduct a comprehensive credit check to assess your
                      creditworthiness and determine your credit limit.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-6 rounded-full bg-[#642667] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-xs">4</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Receive Decision:</span>{" "}
                      Most applicants receive a decision quickly. If approved,
                      you'll be informed of your credit limit and can expect to
                      receive your Fluid card by post within 7-10 working days.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-6 rounded-full bg-[#642667] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-xs">5</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Activate and Transfer:
                      </span>{" "}
                      Once your card arrives, activate it and register for the
                      Online Account Manager. Remember to request any balance
                      transfers within the first 60 days to take advantage of
                      the 0% offer.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Frequently Asked Questions
                </h2>

                <div className="space-y-6 my-8">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      Will checking my eligibility affect my credit score?
                    </h3>
                    <p className="text-sm text-gray-700 text-left leading-5">
                      No. The FastCheck eligibility tool uses a soft credit
                      search that won't appear on your credit file and won't
                      impact your credit score. Only submitting a full
                      application results in a hard credit check.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      How long do I have to request a balance transfer?
                    </h3>
                    <p className="text-sm text-gray-700 text-left leading-5">
                      You must request any balance transfers within the first 60
                      days of opening your Fluid account to qualify for the 0%
                      interest offer for 9 months.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      What happens after the 9-month promotional period?
                    </h3>
                    <p className="text-sm text-gray-700 text-left leading-5">
                      After the 9-month 0% period ends, any remaining balance
                      will be subject to the standard purchase interest rate of
                      34.94% p.a. (variable). It's important to plan your
                      repayments to clear as much of the balance as possible
                      during the interest-free period.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      Can I apply if I have other NewDay cards?
                    </h3>
                    <p className="text-sm text-gray-700 text-left leading-5">
                      If you currently have a Fluid card, you cannot apply for
                      another. Additionally, if you've taken out a Marbles,
                      Opus, or Aqua card (all NewDay products) in the past 12
                      months, you're not eligible for a Fluid card during this
                      period.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      What is the maximum I can transfer?
                    </h3>
                    <p className="text-sm text-gray-700 text-left leading-5">
                      The maximum balance you can transfer cannot exceed 90% of
                      your credit limit, including the 3% balance transfer fee.
                      For example, with a £1,000 credit limit, you could
                      transfer up to approximately £873 after accounting for the
                      fee.
                    </p>
                  </div>
                </div>

                <div className="my-8 p-6 bg-amber-50 border-l-4 border-amber-500 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 text-left">
                    Important Disclaimers
                  </h3>
                  <div className="space-y-2 text-sm text-gray-700 text-left">
                    <p>
                      <strong>Representative Example:</strong> Representative
                      34.9% APR (variable). Interest rate for purchases: 34.94%
                      p.a. (variable), based on an assumed credit limit of
                      £1,200. The APR and credit limit applicable to your
                      account will depend on our assessment of your application.
                    </p>
                    <p>
                      <strong>Credit Subject to Status:</strong> Credit only
                      available to UK residents aged 18 and over, subject to
                      status. Terms and conditions apply.
                    </p>
                    <p>
                      <strong>Important Warning:</strong> If you don't make
                      repayments on time or stay within your credit limit, you
                      will pay extra charges, forfeit the 0% balance transfer
                      offer, and getting credit in the future may be harder and
                      more expensive. Only borrow what you can afford to repay.
                    </p>
                    <p>
                      <strong>Not Financial Advice:</strong> This information is
                      for educational purposes only and does not constitute
                      financial advice. Always review the current terms,
                      interest rates, fees, and eligibility criteria on the
                      Fluid official website before applying. Consider seeking
                      independent financial advice if you're unsure whether this
                      product suits your circumstances.
                    </p>
                    <p className="text-xs mt-4">
                      NewDay Ltd provides credit for the Fluid card. NewDay Ltd
                      (FRN: 690292) is authorized and regulated by the Financial
                      Conduct Authority. Fluid is a registered trade mark of
                      NewDay Cards Ltd.
                    </p>
                  </div>
                </div>

                <div className="text-left my-8">
                  <a
                    href="https://www.fluid.co.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-[#642667] hover:bg-[#4f1e52] text-white font-medium text-md py-2 px-8 rounded-full w-full">
                      Apply Now at Fluid Official Website
                    </Button>
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </article>

      <AIContentDisclaimer />
      <CompactFooter />
    </main>
  );
}
