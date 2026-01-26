import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Capital One UK Classic Card Requirements: Everything You Need to Know - Top Finance UK",
    description:
      "Discover the eligibility criteria, required documentation, and application process for the Capital One UK Classic Card. Get a decision in 60 seconds without affecting your credit score.",
    keywords:
      "Capital One UK requirements, Classic Card eligibility, UK credit card application, credit score requirements, QuickCheck, Capital One application process",
  };
}

export default function CapitalOneUKCreditCardRequirementsPage() {
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
              Requirements for the Capital One UK Classic Card
            </h1>

            <div id="square01" data-topads data-topads-size="square"></div>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 mb-8 leading-5 text-left">
                The Capital One UK Classic Card is designed to help you build or
                rebuild your credit score with flexible credit limits from £200
                to £1,500, no annual fee, and a straightforward application
                process with instant eligibility checking.
              </p>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/uk/capital-one-uk-credit-card-requirements.webp"
                  alt="Capital One UK Classic Card Requirements"
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
                  How to Qualify for the Capital One UK Classic Card
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Capital One has designed the Classic Card to be accessible to
                  a wide range of applicants, including those who may be
                  building or rebuilding their credit history. Here are the core
                  eligibility requirements:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#1E1F39] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Age Requirement:</span>{" "}
                      You must be at least 18 years old to apply for the Capital
                      One UK Classic Card. This ensures you have the legal
                      capacity to enter into a credit agreement.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#1E1F39] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">UK Residency:</span> You
                      must be a permanent UK resident with a valid UK address.
                      Capital One requires applicants to have been living at
                      their current address for at least three months, though
                      they'll accept your application if you can provide your
                      previous address details.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#1E1F39] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Credit History:</span>{" "}
                      Unlike many premium credit cards, the Capital One UK
                      Classic Card is specifically designed for people with
                      limited or imperfect credit histories. You don't need an
                      excellent credit score to qualify, making it an ideal
                      option for building or rebuilding credit.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#1E1F39] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Employment and Income:
                      </span>{" "}
                      While Capital One doesn't specify a minimum income
                      requirement for the Classic Card, you'll need to
                      demonstrate that you have sufficient income to manage
                      credit card repayments. This can include employment
                      income, self-employment income, benefits, or pension
                      income.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#1E1F39] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Bank Account:</span>{" "}
                      You'll need an active UK bank account in your name. This
                      is necessary for setting up payments and managing your
                      credit card account effectively.
                    </div>
                  </div>
                </div>

                <div id="square02" data-topads data-topads-size="square"></div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Required Documentation
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  When applying for the Capital One UK Classic Card, you may
                  need to provide the following documents to verify your
                  identity and address:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#1E1F39] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Proof of Identity:</span>{" "}
                      A valid UK passport, UK driving licence (full or
                      provisional), or national identity card. The document must
                      be current and not expired.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#1E1F39] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Proof of Address:</span>{" "}
                      Recent documents dated within the last three months, such
                      as utility bills (gas, electricity, water), council tax
                      statements, bank statements, or official letters from
                      government departments. Mobile phone bills and
                      correspondence from credit card companies are typically
                      not accepted.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#1E1F39] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Bank Details:</span> Your
                      UK bank account number and sort code for setting up Direct
                      Debit payments and receiving your credit card statements.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#1E1F39] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Employment Information:
                      </span>{" "}
                      Details about your current employment status, employer
                      name, and income. If you're self-employed, you may need to
                      provide additional information about your business and
                      income sources.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Understanding the Costs
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Before applying for the Capital One UK Classic Card, it's
                  essential to understand the associated costs and charges to
                  make an informed decision:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#1E1F39] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Annual Fee:</span> £0. The
                      Capital One UK Classic Card has no annual membership fee,
                      making it a cost-effective option for building credit
                      without ongoing charges.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#1E1F39] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Representative APR:</span>{" "}
                      34.9% APR (variable). This rate applies to purchases when
                      you carry a balance from month to month. The interest rate
                      on purchases is 34.94% p.a. (variable).
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#1E1F39] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Cash Withdrawal Fee:
                      </span>{" "}
                      A fee of 3% (minimum £3) applies to cash advances and
                      cash-like transactions. Additionally, interest is charged
                      on cash withdrawals from the date of the transaction, with
                      no interest-free period.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#1E1F39] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Late Payment Fee:</span>{" "}
                      £12 if you miss a payment or pay less than the minimum
                      payment due. Setting up a Direct Debit can help you avoid
                      this charge.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#1E1F39] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Foreign Transaction Fee:
                      </span>{" "}
                      2.95% handling charge on purchases made in foreign
                      currencies or with merchants based outside the UK.
                    </div>
                  </div>
                </div>

                <div className="my-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 text-left">
                  <p className="text-sm text-gray-800 leading-5">
                    <strong>Representative Example:</strong> Assuming a credit
                    limit of £1,200 and an interest rate on purchases of 34.94%
                    p.a. (variable), you will receive a 34.9% APR representative
                    (variable). If you pay off your full balance each month, you
                    won't pay any interest on purchases.
                  </p>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  The QuickCheck Eligibility Process
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  One of the most valuable features of applying for the Capital
                  One UK Classic Card is the QuickCheck eligibility checker.
                  This innovative tool allows you to find out if you're likely
                  to be approved before submitting a full application—and
                  crucially, without affecting your credit score.
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#1E1F39] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Step 1 - Provide Basic Details:
                      </span>{" "}
                      Enter your name, date of birth, address, and basic
                      financial information. This takes just a few minutes to
                      complete.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#1E1F39] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Step 2 - Soft Credit Check:
                      </span>{" "}
                      Capital One performs a soft search on your credit file,
                      which is visible only to you and doesn't leave a footprint
                      that other lenders can see.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#1E1F39] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Step 3 - Get Your Answer:
                      </span>{" "}
                      In 60 seconds or less, you'll receive a clear yes or no
                      answer about your eligibility. If you receive a "yes,"
                      you'll also see your likely credit limit.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#1E1F39] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Step 4 - Apply If Eligible:
                      </span>{" "}
                      If you're eligible and decide to proceed, you can complete
                      your full application in one tap. Only at this stage will
                      a hard credit search be conducted.
                    </div>
                  </div>
                </div>

                <div className="my-8 text-left sm:text-left">
                  <Link href="/personal-finance/credit-card-types-benefits/">
                    <Image
                      src="https://media.topfinanzas.com/images/ads/Top-Blog-Credit-Cards.webp"
                      alt="Learn More About Credit Cards"
                      width={1000}
                      height={563}
                      className="rounded-xl mx-auto"
                      style={{ maxWidth: "66.666%", height: "auto" }}
                      quality={80}
                      crossOrigin="anonymous"
                    />
                  </Link>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Benefits and Features Summary
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  The Capital One UK Classic Card offers several advantages that
                  make it particularly suitable for credit building:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#1E1F39] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Credit Building Focus:
                      </span>{" "}
                      Specifically designed to help you build or rebuild your
                      credit score through responsible use and timely payments.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#1E1F39] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Starting Credit Limit:
                      </span>{" "}
                      £200 to £1,500, with opportunities to increase your limit
                      up to twice per year based on responsible usage.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#1E1F39] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Award-Winning App:</span>{" "}
                      Manage your account, make payments, check your balance,
                      and view your PIN from your smartphone with the
                      highly-rated Capital One mobile app.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#1E1F39] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Contactless Payments:
                      </span>{" "}
                      Quick and convenient contactless technology for everyday
                      purchases up to the UK contactless limit.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#1E1F39] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Section 75 Protection:
                      </span>{" "}
                      Consumer protection on purchases between £100 and £30,000
                      under the Consumer Credit Act.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Application Process Step-by-Step
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Applying for the Capital One UK Classic Card is
                  straightforward and can be completed entirely online:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1E1F39] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Check Your Eligibility:
                      </span>{" "}
                      Start by using the QuickCheck tool on Capital One's
                      website. This soft search won't affect your credit score
                      and takes approximately 60 seconds.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1E1F39] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Review Your Offer:</span>{" "}
                      If you're eligible, you'll see your likely credit limit
                      and can review the full terms and conditions of the card
                      before deciding to proceed.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1E1F39] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Complete Your Application:
                      </span>{" "}
                      If you choose to apply, complete the full application
                      online. This typically takes 5-10 minutes and is when the
                      hard credit check will be performed.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1E1F39] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Await Your Decision:
                      </span>{" "}
                      You'll typically receive a decision immediately. In some
                      cases, Capital One may need to review your application
                      further, which can take a few working days.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1E1F39] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">5</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Receive Your Card:</span>{" "}
                      Once approved, your Capital One UK Classic Card will
                      arrive by post within 7 to 10 days. Your PIN will be sent
                      separately for security purposes.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1E1F39] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">6</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Activate and Start Using:
                      </span>{" "}
                      Activate your card online or via the mobile app, and
                      you're ready to start building your credit score with
                      responsible card usage.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Frequently Asked Questions
                </h2>

                <div className="space-y-6 my-8">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2 text-sm">
                      Will checking my eligibility affect my credit score?
                    </h3>
                    <p className="text-sm text-gray-700 leading-5 text-left">
                      No, using Capital One's QuickCheck eligibility tool
                      performs a soft search that won't affect your credit score
                      and isn't visible to other lenders. Only if you proceed
                      with a full application will a hard credit search be
                      conducted.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2 text-sm">
                      Can I get the Capital One UK Classic Card with bad credit?
                    </h3>
                    <p className="text-sm text-gray-700 leading-5 text-left">
                      The Capital One UK Classic Card is specifically designed
                      for people with limited or imperfect credit histories.
                      While Capital One considers various factors in their
                      lending decision, this card is more accessible than many
                      premium credit cards, making it a popular choice for
                      credit building.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2 text-sm">
                      How can I increase my credit limit?
                    </h3>
                    <p className="text-sm text-gray-700 leading-5 text-left">
                      You may be eligible for up to two credit limit increases
                      per year based on responsible usage and timely payments.
                      You can request an increase through your online account or
                      the mobile app, or Capital One may offer increases
                      automatically—but they'll always ask for your permission
                      before implementing any change.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2 text-sm">
                      What is the minimum payment each month?
                    </h3>
                    <p className="text-sm text-gray-700 leading-5 text-left">
                      Your minimum payment is typically 1% of your balance plus
                      any interest, fees, and charges that have been added, or
                      £5 (whichever is greater). However, paying only the
                      minimum means it will take longer to clear your balance
                      and you'll pay more interest overall. Where possible, pay
                      more than the minimum to reduce your balance faster.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2 text-sm">
                      Can I use my Capital One UK Classic Card abroad?
                    </h3>
                    <p className="text-sm text-gray-700 leading-5 text-left">
                      Yes, as a Mastercard, your Capital One UK Classic Card is
                      accepted worldwide. However, be aware that a 2.95% foreign
                      transaction fee applies to purchases made in foreign
                      currencies or with non-UK merchants, so it may not be the
                      most cost-effective option for extensive international
                      use.
                    </p>
                  </div>
                </div>

                <div className="my-8 p-6 bg-blue-50 border-l-4 border-blue-500 text-left">
                  <h3 className="font-semibold text-gray-800 mb-3 text-sm">
                    Important Regulatory Information
                  </h3>
                  <p className="text-sm text-gray-700 leading-5 mb-3">
                    <strong>FCA Regulation:</strong> Capital One (Europe) plc is
                    authorized by the Central Bank of Ireland and is regulated
                    in the UK by the Financial Conduct Authority (FCA) under
                    reference number 820137.
                  </p>
                  <p className="text-sm text-gray-700 leading-5 mb-3">
                    <strong>Warning:</strong> Not using your card responsibly
                    could hurt your credit rating, making it harder to get
                    credit in the future. Always ensure you can afford the
                    repayments before using credit.
                  </p>
                  <p className="text-sm text-gray-700 leading-5">
                    <strong>Disclaimer:</strong> This information is for general
                    guidance only and does not constitute financial advice. You
                    should seek independent financial advice before making
                    decisions about credit products. Terms and conditions apply.
                    Capital One reserves the right to decline applications.
                  </p>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Tips for a Successful Application
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#1E1F39] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Check Your Credit Report:
                      </span>{" "}
                      Before applying, review your credit report for any errors
                      or outdated information that could affect your
                      application. You can access your credit report for free
                      through services like ClearScore, Experian, or Equifax.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#1E1F39] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Register on the Electoral Roll:
                      </span>{" "}
                      Being registered to vote at your current address can
                      significantly improve your chances of approval, as it
                      helps lenders verify your identity and address.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#1E1F39] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Provide Accurate Information:
                      </span>{" "}
                      Ensure all the information you provide in your application
                      is accurate and up to date. Inconsistencies can delay your
                      application or result in rejection.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#1E1F39] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Avoid Multiple Applications:
                      </span>{" "}
                      Don't apply for multiple credit products within a short
                      timeframe, as this can negatively impact your credit score
                      and suggest financial difficulty to lenders.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#1E1F39] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Demonstrate Financial Stability:
                      </span>{" "}
                      While not always possible, staying at the same address and
                      in the same job for a reasonable period can improve your
                      application, as it demonstrates stability to the lender.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Ready to Build Your Credit?
                </h2>

                <p className="text-left text-gray-800 text-sm leading-5 mb-4">
                  The Capital One UK Classic Card provides a practical pathway
                  to building or rebuilding your credit score. With its
                  accessible eligibility criteria, innovative QuickCheck
                  technology that won't harm your credit score, no annual fee,
                  and comprehensive mobile app for easy account management, this
                  card offers a sensible solution for taking control of your
                  financial future.
                </p>

                <p className="text-left text-gray-800 text-sm leading-5 mb-4">
                  Remember that building credit takes time and requires
                  consistent, responsible behavior. By making at least your
                  minimum payments on time each month, keeping your credit
                  utilisation low, and using the card regularly (but not
                  excessively), you can gradually improve your credit score and
                  work towards accessing better credit products in the future.
                  The Capital One UK Classic Card is designed to support you on
                  this journey, with regular opportunities for credit limit
                  increases to recognize your progress.
                </p>

                <div className="text-left my-8">
                  <a
                    href="https://www.capitalone.co.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-[#1E1F39] hover:bg-blue-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                      Apply Now at Capital One Official Website
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
