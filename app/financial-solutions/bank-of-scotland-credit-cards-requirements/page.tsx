import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Bank of Scotland Credit Cards Requirements: Everything You Need to Know - Top Finance UK",
    description:
      "Understand the eligibility criteria, documentation, and application process for Bank of Scotland credit cards. Check eligibility online without affecting your credit score.",
    keywords:
      "Bank of Scotland credit card requirements, UK credit card application, eligibility checker, credit score requirements, One Check, balance transfer eligibility",
  };
}

export default function BankOfScotlandCreditCardsRequirementsPage() {
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
              Requirements for Bank of Scotland Credit Cards
            </h1>

            <div id="square01" data-topads data-topads-size="square"></div>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 mb-8 leading-5 text-left">
                Bank of Scotland offers a range of credit cards including
                Everyday Spending, Balance Transfer, Large Purchase, and Credit
                Builder options. Check your eligibility with One Check before
                applying—it won't affect your credit score.
              </p>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/uk/bank-of-scotland-credit-cards-requirements.webp"
                  alt="Bank of Scotland Credit Cards Requirements"
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
                  How to Qualify for Bank of Scotland Credit Cards
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0f70f0] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Age and residency:</span>{" "}
                      You must be at least 18 years old and a UK resident with a
                      permanent UK address. This is a legal requirement for all
                      credit agreements in the UK and allows Bank of Scotland to
                      verify your identity and conduct appropriate credit
                      checks.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0f70f0] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Credit history assessment:
                      </span>{" "}
                      Bank of Scotland assesses your credit history using UK
                      credit reference agencies. Different cards have different
                      credit requirements—Credit Builder cards are designed for
                      those with limited or poor credit history, while Balance
                      Transfer and Large Purchase cards typically require good
                      to excellent credit scores.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0f70f0] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Affordability checks:
                      </span>{" "}
                      Bank of Scotland conducts thorough affordability
                      assessments to ensure you can comfortably manage credit
                      card repayments alongside your other financial
                      commitments. This includes reviewing your income, existing
                      debts, regular outgoings, and overall financial stability.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0f70f0] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Card-specific requirements:
                      </span>{" "}
                      Each card type has particular eligibility criteria. Credit
                      Builder cards accept applicants with lower credit scores,
                      Balance Transfer cards require good credit and typically
                      need existing debt to transfer, while Everyday Spending
                      and Large Purchase cards require moderate to good credit
                      history.
                    </div>
                  </div>
                </div>

                <div id="square02" data-topads data-topads-size="square"></div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Required Documentation
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0f70f0] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Proof of Identity:</span>{" "}
                      Valid UK passport, UK photocard driving licence, or other
                      government-issued photo identification to confirm your
                      identity and comply with anti-money laundering
                      regulations.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0f70f0] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Proof of Address:</span>{" "}
                      Recent documents (within the last three months) such as
                      utility bills, council tax statements, bank statements, or
                      mortgage statements showing your current UK residential
                      address.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0f70f0] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Income Verification:
                      </span>{" "}
                      Recent payslips (typically last three months), P60 from
                      your employer, or bank statements showing regular income
                      deposits. Self-employed applicants may need to provide tax
                      returns or certified accounts demonstrating income.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0f70f0] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Employment Details:</span>{" "}
                      Information about your current employment status, employer
                      name, occupation, and length of employment to help assess
                      income stability and repayment capacity.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0f70f0] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Electoral Roll Registration:
                      </span>{" "}
                      Being registered on the UK electoral roll at your current
                      address significantly helps with identity verification and
                      can improve your credit score and application success
                      rate.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Understanding the Costs
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Bank of Scotland credit card costs vary depending on the card
                  type and your individual circumstances:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0f70f0] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Representative APR (variable):
                      </span>{" "}
                      APR rates vary by card type. Credit Builder cards
                      typically have higher APRs (often 30%+), Everyday Spending
                      cards offer competitive rates (typically 20-25% APR),
                      while Balance Transfer and Large Purchase cards feature 0%
                      introductory periods before reverting to standard rates.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0f70f0] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Balance Transfer Fees:
                      </span>{" "}
                      When transferring balances to a Bank of Scotland Balance
                      Transfer card, a fee typically applies (commonly 2-3% of
                      the amount transferred) with a minimum charge. Factor this
                      into your calculations when comparing the savings from the
                      0% promotional period.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0f70f0] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Annual Fees:</span> Bank
                      of Scotland credit cards typically don't charge annual
                      fees, making them cost-effective to hold. This means
                      you're not paying for the card itself—only interest on any
                      outstanding balance if you don't pay in full.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0f70f0] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Cash Withdrawal Charges:
                      </span>{" "}
                      Cash advances attract both a fee (typically 3% with a
                      minimum charge) and start accruing interest immediately at
                      a higher rate than purchases. Avoid using credit cards for
                      cash withdrawals whenever possible.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0f70f0] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Late Payment Fees:</span>{" "}
                      A fee (currently £12) applies if you miss a payment or
                      fail to pay the minimum amount by the due date. Late
                      payments also negatively affect your credit score and may
                      result in the loss of promotional interest rates.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0f70f0] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Foreign Transaction Fees:
                      </span>{" "}
                      A non-sterling transaction fee (typically 2.75-2.99%)
                      applies when using your card abroad or making purchases in
                      foreign currencies. Consider this if you travel frequently
                      or shop from overseas retailers.
                    </div>
                  </div>
                </div>

                <div className="my-8 text-left sm:text-left">
                  <Link href="/personal-finance/best-personal-loans">
                    <Image
                      src="https://media.topfinanzas.com/images/ads/Top-Blog-Personal-loans-1.webp"
                      alt="Explore Personal Loans"
                      width={1000}
                      height={563}
                      className="mx-auto w-full md:w-8/12 h-auto rounded-xl"
                      loading="lazy"
                      quality={80}
                    />
                  </Link>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Benefits and Features
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0f70f0] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        One Check Eligibility:
                      </span>{" "}
                      Check if you're likely to be approved and see your
                      estimated credit limit before applying. This soft search
                      doesn't affect your credit score and there's no obligation
                      to proceed if pre-approved.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0f70f0] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Section 75 Protection:
                      </span>{" "}
                      All purchases between £100 and £30,000 are protected under
                      the Consumer Credit Act, providing additional recourse if
                      goods or services don't arrive or aren't as described.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0f70f0] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Mobile Banking:</span>{" "}
                      Manage your account through the Bank of Scotland mobile
                      app with features including real-time notifications,
                      spending insights, card controls, and instant access to
                      statements and transactions.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0f70f0] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Fraud Protection Guarantee:
                      </span>{" "}
                      Comprehensive fraud protection with zero liability for
                      unauthorized transactions you don't make, plus real-time
                      transaction monitoring and secure 3D Secure verification
                      for online shopping.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Application Process
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Applying for a Bank of Scotland credit card follows a
                  straightforward process:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0f70f0] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-xs">1</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Use the One Check Eligibility Checker:
                      </span>{" "}
                      Begin by using the One Check service on the Bank of
                      Scotland website. Answer a few questions about your
                      circumstances to see if you're likely to be approved and
                      what credit limit you might receive. This takes about 60
                      seconds and uses only a soft search.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0f70f0] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-xs">2</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Choose Your Card Type:
                      </span>{" "}
                      Based on your eligibility check results and financial
                      needs, select the most appropriate card—Everyday Spending,
                      Balance Transfer, Large Purchase, or Credit Builder.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0f70f0] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-xs">3</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Complete the Application:
                      </span>{" "}
                      Fill in the online application form with your personal
                      details, employment information, income, and expenditure.
                      The form typically takes 10-15 minutes to complete. Ensure
                      all information is accurate.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0f70f0] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-xs">4</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Identity Verification:
                      </span>{" "}
                      Bank of Scotland will verify your identity electronically
                      where possible. Existing Bank of Scotland customers may
                      have a faster verification process as their details are
                      already on file.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0f70f0] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-xs">5</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Credit Assessment:</span>{" "}
                      A full credit check will be conducted with UK credit
                      reference agencies (Experian, Equifax, TransUnion). This
                      hard search will appear on your credit file and may
                      temporarily affect your score.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0f70f0] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-xs">6</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Receive Your Decision:
                      </span>{" "}
                      Most applicants receive an instant decision online. In
                      some cases, Bank of Scotland may need additional time to
                      review your application, which can take up to 7-10 working
                      days.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0f70f0] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-xs">7</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Card Arrival and Activation:
                      </span>{" "}
                      If approved, your credit card will arrive by post within
                      5-10 working days, with your PIN following separately for
                      security. Activate your card online, via the mobile app,
                      or by calling the number provided.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Frequently Asked Questions
                </h2>

                <div className="space-y-4 my-6">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      Which Bank of Scotland credit card should I choose?
                    </h3>
                    <p className="text-sm text-gray-700 leading-5 text-left">
                      The right card depends on your needs: Everyday Spending
                      cards suit regular purchases with low rates; Balance
                      Transfer cards help consolidate existing debts; Large
                      Purchase cards offer 0% periods for big buys; Credit
                      Builder cards are ideal if you're new to credit or
                      rebuilding your score.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      Will using One Check affect my credit score?
                    </h3>
                    <p className="text-sm text-gray-700 leading-5 text-left">
                      No. The One Check eligibility checker uses only a soft
                      search, which doesn't affect your credit score and isn't
                      visible to other lenders. Only a full application involves
                      a hard credit check that may temporarily impact your
                      score.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      Do I need to be an existing Bank of Scotland customer?
                    </h3>
                    <p className="text-sm text-gray-700 leading-5 text-left">
                      No, Bank of Scotland credit cards are available to both
                      existing customers and new applicants. However, existing
                      customers may experience a faster application process and
                      potentially benefit from relationship-based offers.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      What credit score do I need?
                    </h3>
                    <p className="text-sm text-gray-700 leading-5 text-left">
                      Credit score requirements vary by card type. Credit
                      Builder cards accept lower scores and limited credit
                      history, Everyday Spending cards require fair to good
                      credit, while Balance Transfer and Large Purchase cards
                      typically need good to excellent credit scores for the
                      best terms.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      How long do 0% introductory offers last?
                    </h3>
                    <p className="text-sm text-gray-700 leading-5 text-left">
                      Promotional periods vary and change regularly. Balance
                      Transfer cards typically offer 0% for 15-30+ months, while
                      Large Purchase cards often provide 0% for 6-15 months.
                      Check current offers on the Bank of Scotland website as
                      terms are subject to change.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      Can I manage my card through the mobile app?
                    </h3>
                    <p className="text-sm text-gray-700 leading-5 text-left">
                      Yes, the Bank of Scotland mobile banking app allows full
                      credit card management including viewing transactions,
                      making payments, checking balances, setting up alerts,
                      controlling spending limits, and temporarily locking your
                      card if needed.
                    </p>
                  </div>
                </div>

                <div className="my-8 text-left sm:text-left">
                  <Link href="/personal-finance/getting-out-of-debt">
                    <Image
                      src="https://media.topfinanzas.com/images/ads/Top-Blog-Debt-management-1.webp"
                      alt="Debt Management Resources"
                      width={1000}
                      height={563}
                      className="mx-auto w-full md:w-8/12 h-auto rounded-xl"
                      loading="lazy"
                      quality={80}
                    />
                  </Link>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Tips for a Successful Application
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  To maximize your chances of approval for a Bank of Scotland
                  credit card:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0f70f0] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Use One Check first:
                      </span>{" "}
                      Always use the eligibility checker before applying
                      formally to understand your chances without affecting your
                      credit score. This helps you avoid unsuccessful
                      applications that could harm your credit rating.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0f70f0] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Check your credit report:
                      </span>{" "}
                      Review your credit file for errors before applying and
                      address any issues. You can check your report for free
                      through services like ClearScore, Experian, or Credit
                      Karma.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0f70f0] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Register on the electoral roll:
                      </span>{" "}
                      Being registered at your current address helps lenders
                      verify your identity and can significantly improve your
                      credit score and application success rate.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0f70f0] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Choose the right card type:
                      </span>{" "}
                      Apply for a card that matches your credit profile. If you
                      have limited credit history, start with a Credit Builder
                      card rather than a premium Balance Transfer card.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0f70f0] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Be accurate and honest:
                      </span>{" "}
                      Provide accurate information in your application. Lenders
                      verify details, and inconsistencies can lead to rejection
                      or future account issues.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0f70f0] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Avoid multiple applications:
                      </span>{" "}
                      Don't apply for several credit cards in a short period, as
                      multiple hard searches can negatively impact your credit
                      score and concern lenders about your financial stability.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Important Information
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Credit is subject to status and affordability. You must be 18
                  or over and a UK resident. Representative APR varies depending
                  on the card type and your individual circumstances.
                  Promotional rates and offers are subject to change. Terms and
                  conditions apply. Bank of Scotland plc is registered in
                  Scotland (SC327000) with registered office at The Mound,
                  Edinburgh EH1 1YZ. Authorized by the Prudential Regulation
                  Authority and regulated by the Financial Conduct Authority and
                  the Prudential Regulation Authority under registration number
                  169628.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  This information is for general guidance only and does not
                  constitute financial advice. We recommend seeking independent
                  financial advice if you're unsure about whether a credit card
                  is suitable for your circumstances. Please visit the Bank of
                  Scotland website or use their One Check service for the most
                  current product information, rates, terms, and to check your
                  eligibility.
                </p>

                <div className="text-left my-8">
                  <a
                    href="https://www.bankofscotland.co.uk/creditcards.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-[#0f70f0] hover:bg-blue-700 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                      Apply Now at Bank of Scotland Official Website
                    </Button>
                  </a>
                </div>
              </section>

              {/* AI Content Disclaimer */}
              <AIContentDisclaimer />
            </div>
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
