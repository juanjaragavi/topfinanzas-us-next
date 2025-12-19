import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "First Direct Credit Card Requirements: Everything You Need to Know - Top Finance UK",
    description:
      "Understand the eligibility criteria, documentation, and application process for the First Direct 1st Credit Card to maximise your chances of approval.",
    keywords:
      "First Direct Credit Card requirements, UK credit card application, First Direct eligibility, credit score requirements, 1st Credit Card application",
  };
}

export default function FirstDirectCreditCardRequirementsPage() {
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
              Requirements for the First Direct Credit Card
            </h1>

            <div id="square01" data-topads data-topads-size="square"></div>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 mb-8 leading-5 text-left">
                The First Direct 1st Credit Card offers straightforward credit
                card banking with competitive rates and no annual fee, backed by
                award-winning customer service available 24/7.
              </p>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/uk/first-direct-credit-card-requirements.webp"
                  alt="First Direct Credit Card Requirements"
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
                  How to Qualify for the First Direct Credit Card
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#121212] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Age and residency:</span>{" "}
                      You must be at least 18 years old and a UK resident with a
                      permanent UK address. This ensures applicants have the
                      legal capacity to enter into credit agreements and that
                      First Direct can verify your identity and credit history
                      through UK credit reference agencies.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#121212] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Credit history assessment:
                      </span>{" "}
                      First Direct will conduct a credit check when you apply.
                      Whilst there's no published minimum credit score, having a
                      good credit history with a track record of managing credit
                      responsibly will improve your chances of approval and may
                      secure you a better interest rate.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#121212] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Financial stability:
                      </span>{" "}
                      You'll need to demonstrate regular income and the ability
                      to make monthly repayments. First Direct assesses your
                      income, existing financial commitments, and overall
                      affordability to ensure you can comfortably manage the
                      credit card.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#121212] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Existing customer benefits:
                      </span>{" "}
                      Whilst you don't need to be an existing First Direct
                      customer to apply, current customers may benefit from
                      preferential rates and a smoother application process as
                      First Direct already has your banking information and
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
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#121212] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Proof of Identity:</span>{" "}
                      A valid passport, UK driving licence, or other
                      government-issued photo ID to confirm your identity.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#121212] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Proof of Address:</span>{" "}
                      Recent documents dated within the last three months, such
                      as utility bills, council tax statements, bank statements,
                      or mortgage statements showing your current UK residential
                      address.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#121212] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Income Verification:
                      </span>{" "}
                      Recent payslips (typically the last three months), P60 tax
                      form, or bank statements showing regular income deposits.
                      Self-employed applicants may need to provide tax returns
                      or certified accounts.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#121212] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Credit Check Authorisation:
                      </span>{" "}
                      You must authorise First Direct to perform a credit check
                      with UK credit reference agencies such as Experian,
                      Equifax, and TransUnion. This check will assess your
                      credit history and help determine your credit limit and
                      interest rate.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#121212] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Employment Information:
                      </span>{" "}
                      Details of your current employment status, employer name,
                      occupation, and length of employment to help assess your
                      financial stability and ability to make repayments.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Understanding the Costs
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  It's essential to understand the costs associated with the
                  First Direct 1st Credit Card to make an informed decision:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#121212] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Introductory Purchase Rate:
                      </span>{" "}
                      0% interest on purchases for the first 12 months from
                      account opening, allowing you to spread the cost of larger
                      purchases interest-free during this period.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#121212] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Standard APR:</span>{" "}
                      Representative 24.9% APR (variable) applies to purchases
                      after the 0% introductory period ends. Existing First
                      Direct customers may be offered lower rates depending on
                      their circumstances and credit profile.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#121212] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">No Annual Fee:</span> The
                      First Direct 1st Credit Card has no annual fee, making it
                      cost-effective to hold and use regularly without worrying
                      about ongoing charges.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#121212] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Cash Withdrawal Charges:
                      </span>{" "}
                      Cash advances attract a fee (typically 2.99% with a
                      minimum charge) and start accruing interest immediately at
                      the cash rate. Avoid using your credit card for cash
                      withdrawals where possible.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#121212] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Late Payment Charges:
                      </span>{" "}
                      A fee (currently £12) applies if you miss a payment or
                      don't pay at least the minimum amount due by the payment
                      due date. Late payments can also negatively affect your
                      credit score.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#121212] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Foreign Transaction Fees:
                      </span>{" "}
                      A non-sterling transaction fee (typically 2.99%) applies
                      when you use your card abroad or make purchases in foreign
                      currencies. Consider this if you travel frequently or shop
                      from overseas retailers.
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
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#121212] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        24/7 Award-Winning Service:
                      </span>{" "}
                      Access First Direct's renowned UK-based customer service
                      team any time of day or night. First Direct consistently
                      ranks highly for customer satisfaction and service
                      quality.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#121212] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Digital Banking:</span>{" "}
                      Manage your account through First Direct's highly-rated
                      mobile app and online banking platform, giving you
                      real-time access to your balance, transactions, and
                      statements.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#121212] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Security Features:</span>{" "}
                      Advanced fraud protection with real-time transaction
                      alerts, secure online shopping with 3D Secure
                      verification, and zero liability for unauthorised
                      transactions.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#121212] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Section 75 Protection:
                      </span>{" "}
                      Legal protection for purchases between £100 and £30,000
                      under the Consumer Credit Act, giving you additional
                      recourse if something goes wrong with a purchase.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Application Process
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Applying for the First Direct 1st Credit Card is
                  straightforward and can be completed entirely online:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#121212] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-xs">1</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Check Eligibility:</span>{" "}
                      Before applying, ensure you meet the basic eligibility
                      criteria. You can use First Direct's eligibility checker
                      to see if you're likely to be accepted without affecting
                      your credit score.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#121212] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-xs">2</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Complete Application:
                      </span>{" "}
                      Fill in the online application form with your personal
                      details, employment information, income details, and
                      financial commitments. The form typically takes 10-15
                      minutes to complete.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#121212] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-xs">3</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Identity Verification:
                      </span>{" "}
                      First Direct will verify your identity using electronic
                      checks. You may need to provide additional documentation
                      if electronic verification isn't possible.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#121212] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-xs">4</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Credit Assessment:</span>{" "}
                      First Direct will conduct a full credit check with UK
                      credit reference agencies. This will be visible on your
                      credit file and may temporarily affect your credit score.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#121212] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-xs">5</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Receive Decision:</span>{" "}
                      You'll typically receive an instant decision online. In
                      some cases, First Direct may need to review your
                      application manually, which can take up to 10 working
                      days.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#121212] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-xs">6</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Card Arrival and Activation:
                      </span>{" "}
                      If approved, your card will arrive by post within 5-10
                      working days. You'll receive your PIN separately for
                      security. Activate your card through online banking, the
                      mobile app, or by calling the activation number.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Frequently Asked Questions
                </h2>

                <div className="space-y-4 my-6">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      Do I need to be a First Direct customer to apply?
                    </h3>
                    <p className="text-sm text-gray-700 leading-5 text-left">
                      No, you don't need to be an existing First Direct customer
                      to apply for the 1st Credit Card. However, existing
                      customers may benefit from preferential rates and a
                      smoother application process.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      What credit score do I need?
                    </h3>
                    <p className="text-sm text-gray-700 leading-5 text-left">
                      First Direct doesn't publish a minimum credit score
                      requirement. However, having a good to excellent credit
                      history will improve your chances of approval and may help
                      you secure a better interest rate. Check your credit
                      report before applying to ensure it's accurate.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      Will applying affect my credit score?
                    </h3>
                    <p className="text-sm text-gray-700 leading-5 text-left">
                      Yes, a full credit card application involves a hard credit
                      check, which will be recorded on your credit file and may
                      temporarily lower your credit score. However, First Direct
                      offers an eligibility checker that uses a soft search,
                      which won't affect your credit score.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      How long does the 0% purchase period last?
                    </h3>
                    <p className="text-sm text-gray-700 leading-5 text-left">
                      The introductory 0% interest rate on purchases lasts for
                      12 months from the date your account is opened. After this
                      period, the standard purchase APR will apply to any
                      outstanding balance.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      What credit limit can I expect?
                    </h3>
                    <p className="text-sm text-gray-700 leading-5 text-left">
                      Your credit limit will be determined based on your credit
                      history, income, and affordability. First Direct will
                      inform you of your credit limit when your application is
                      approved. Limits typically range from £500 to £20,000 or
                      more for those with excellent credit profiles.
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
                  To maximise your chances of approval for the First Direct 1st
                  Credit Card:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#121212] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Check your credit report:
                      </span>{" "}
                      Review your credit report for errors and address any
                      issues before applying. You can check your report for free
                      through services like ClearScore, Experian, or Equifax.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#121212] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Register on the electoral roll:
                      </span>{" "}
                      Being on the electoral register at your current address
                      helps lenders verify your identity and can improve your
                      credit score.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#121212] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Avoid multiple applications:
                      </span>{" "}
                      Don't apply for multiple credit cards in a short period,
                      as this can negatively impact your credit score and may
                      concern lenders.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#121212] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Be accurate and honest:
                      </span>{" "}
                      Provide accurate information in your application. Lenders
                      will verify details, and inconsistencies can lead to
                      rejection or account closure.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#121212] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Consider your current debt levels:
                      </span>{" "}
                      Lenders look at your debt-to-income ratio. Paying down
                      existing debts before applying can improve your chances of
                      approval.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Important Information
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Credit is subject to status and affordability. Terms and
                  conditions apply. You must be 18 or over and a UK resident.
                  The representative APR of 24.9% (variable) applies to 51% or
                  more of successful applicants. Your actual rate will depend on
                  your individual circumstances and credit history. First Direct
                  is a division of HSBC UK Bank plc. HSBC UK Bank plc is
                  authorised by the Prudential Regulation Authority and
                  regulated by the Financial Conduct Authority and the
                  Prudential Regulation Authority.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  This information is for general guidance only and does not
                  constitute financial advice. We recommend seeking independent
                  financial advice if you're unsure about whether this product
                  is suitable for your circumstances. Please check the official
                  First Direct website or contact their customer service team
                  for the most current product information and terms.
                </p>

                <div className="text-left my-8">
                  <a
                    href="https://www.firstdirect.com/loans-and-cards/credit-cards/for-purchases/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-[#121212] hover:bg-gray-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                      Apply Now at First Direct Official Website
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
