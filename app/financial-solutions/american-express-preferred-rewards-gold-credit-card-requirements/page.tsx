import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import { Check } from "lucide-react";

export function generateMetadata() {
  return {
    title:
      "American Express Preferred Rewards Gold Credit Card Requirements: Everything You Need to Know - Top Finance UK",
    description:
      "Discover the eligibility requirements, application process, and documentation needed for the American Express Gold Card. Learn about income requirements, credit checks, and approval criteria.",
    keywords:
      "Amex Gold requirements, American Express eligibility, credit card application UK, Amex approval criteria, Gold Card qualifications, credit check, income requirements",
  };
}

export default function AmexGoldRequirementsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12" data-category="credit-cards">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-4xl font-bold text-gray-800 mb-4 leading-8">
              Requirements for the American Express Preferred Rewards Gold
              Credit Card
            </h1>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 font-medium mb-8 leading-5 text-left">
                Understanding the eligibility criteria and application
                requirements for the American Express Preferred Rewards Gold
                Credit Card helps ensure a smooth application process and
                increases your chances of approval for this premium credit card.
              </p>

              <div id="square02" data-topads data-topads-size="square"></div>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/uk/american-express-preferred-rewards-gold-credit-card-requirements.webp"
                  alt="American Express Preferred Rewards Gold Credit Card Requirements"
                  width={900}
                  height={507}
                  className="w-full h-auto rounded-xl"
                  priority={false}
                  fetchPriority="high"
                  quality={85}
                  loading="eager"
                />
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6 mt-12 text-left">
                How to Qualify for the Amex Gold Card
              </h2>

              <p className="text-gray-800 mb-6 text-md leading-5 font-light text-left">
                The American Express Preferred Rewards Gold Credit Card is a
                premium product with specific eligibility criteria designed to
                ensure applicants can responsibly manage this high-value credit
                facility. To be considered for this card, you'll need to meet
                several fundamental requirements that American Express uses to
                assess applications.
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-800 mb-2 text-left flex items-center">
                    <Check className="size-5 text-green-600 mr-2 flex-shrink-0" />
                    Age Requirement
                  </h3>
                  <p className="text-gray-700 text-sm ml-7 text-left">
                    You must be at least 18 years old to apply for the American
                    Express Gold Card. This is a legal requirement for entering
                    into credit agreements in the UK. American Express will
                    verify your age as part of the application process using
                    identity documentation and credit reference agency data.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-800 mb-2 text-left flex items-center">
                    <Check className="size-5 text-green-600 mr-2 flex-shrink-0" />
                    US Residency Status
                  </h3>
                  <p className="text-gray-700 text-sm ml-7 text-left">
                    Applicants must be permanent US residents with a fixed US
                    address. Proof of US residency will be verified through
                    credit checks and may require additional documentation.
                    Temporary residents, students on short-term visas, or those
                    who have recently moved to the US may find approval
                    challenging.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-800 mb-2 text-left flex items-center">
                    <Check className="size-5 text-green-600 mr-2 flex-shrink-0" />
                    US Bank Account
                  </h3>
                  <p className="text-gray-700 text-sm ml-7 text-left">
                    You must hold an active US bank account in your own name.
                    This account will be used for payments towards your card
                    balance. American Express requires a US-based banking
                    relationship to facilitate secure payment collection and
                    ensure compliance with US financial regulations.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-800 mb-2 text-left flex items-center">
                    <Check className="size-5 text-green-600 mr-2 flex-shrink-0" />
                    Credit History Assessment
                  </h3>
                  <p className="text-gray-700 text-sm ml-7 text-left">
                    American Express will conduct a comprehensive credit check
                    with major credit bureaus. A good to excellent credit score
                    significantly improves approval chances. Your credit file
                    should demonstrate responsible credit management, including
                    timely payments on existing credit commitments, low credit
                    utilization, and no recent judgments, liens, or
                    bankruptcies.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-800 mb-2 text-left flex items-center">
                    <Check className="size-5 text-green-600 mr-2 flex-shrink-0" />
                    Income and Affordability Verification
                  </h3>
                  <p className="text-gray-700 text-sm ml-7 text-left">
                    While American Express doesn't publicly specify a minimum
                    income requirement, as a premium card, the Gold Card
                    typically requires evidence of substantial, stable income.
                    American Express will assess your affordability, considering
                    your income, existing credit commitments, household
                    expenses, and financial obligations to ensure you can manage
                    the card responsibly, including the £140 annual fee.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-800 mb-2 text-left flex items-center">
                    <Check className="size-5 text-green-600 mr-2 flex-shrink-0" />
                    Welcome Bonus Eligibility
                  </h3>
                  <p className="text-gray-700 text-sm ml-7 text-left">
                    You will not be eligible for any Welcome Bonus award if you
                    currently hold or have held any personal American Express
                    Card within the previous 24 months (terms vary by offer).
                    This restriction applies to all personal Amex cards, not
                    just the Gold Card. Supplementary cardholders on someone
                    else's account are not affected by this restriction if
                    applying for their own card.
                  </p>
                </div>
              </div>

              <div id="square02" data-topads data-topads-size="square"></div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6 mt-12 text-left">
                Required Documentation for Your Application
              </h2>

              <p className="text-gray-800 mb-6 text-md leading-5 font-light text-left">
                When applying for the American Express Preferred Rewards Gold
                Credit Card, having the necessary information and documentation
                readily available will help expedite the application process.
                The application typically takes less than 10 minutes to complete
                when you have all required information prepared.
              </p>

              <div className="grid md:grid-cols-3 gap-6 my-8">
                <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-800 mb-4 text-left">
                    Personal Information
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start text-left">
                      <span className="text-[#180053] mr-2">•</span>
                      <span>Full legal name</span>
                    </li>
                    <li className="flex items-start text-left">
                      <span className="text-[#180053] mr-2">•</span>
                      <span>Date of birth</span>
                    </li>
                    <li className="flex items-start text-left">
                      <span className="text-[#180053] mr-2">•</span>
                      <span>Current UK address (3+ years)</span>
                    </li>
                    <li className="flex items-start text-left">
                      <span className="text-[#180053] mr-2">•</span>
                      <span>Previous addresses if needed</span>
                    </li>
                    <li className="flex items-start text-left">
                      <span className="text-[#180053] mr-2">•</span>
                      <span>Contact telephone number</span>
                    </li>
                    <li className="flex items-start text-left">
                      <span className="text-[#180053] mr-2">•</span>
                      <span>Email address</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-800 mb-4 text-left">
                    Financial Information
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start text-left">
                      <span className="text-[#180053] mr-2">•</span>
                      <span>Annual gross income</span>
                    </li>
                    <li className="flex items-start text-left">
                      <span className="text-[#180053] mr-2">•</span>
                      <span>Employment status</span>
                    </li>
                    <li className="flex items-start text-left">
                      <span className="text-[#180053] mr-2">•</span>
                      <span>Employer details</span>
                    </li>
                    <li className="flex items-start text-left">
                      <span className="text-[#180053] mr-2">•</span>
                      <span>Residential status (own/rent/mortgage)</span>
                    </li>
                    <li className="flex items-start text-left">
                      <span className="text-[#180053] mr-2">•</span>
                      <span>Monthly housing costs</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-800 mb-4 text-left">
                    Banking Details
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start text-left">
                      <span className="text-[#180053] mr-2">•</span>
                      <span>UK bank account number</span>
                    </li>
                    <li className="flex items-start text-left">
                      <span className="text-[#180053] mr-2">•</span>
                      <span>Sort code</span>
                    </li>
                    <li className="flex items-start text-left">
                      <span className="text-[#180053] mr-2">•</span>
                      <span>Bank name and branch</span>
                    </li>
                    <li className="flex items-start text-left">
                      <span className="text-[#180053] mr-2">•</span>
                      <span>Account holder name</span>
                    </li>
                    <li className="flex items-start text-left">
                      <span className="text-[#180053] mr-2">•</span>
                      <span>Length of time with bank</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6 mt-12 text-left">
                Understanding the Costs and Charges
              </h2>

              <p className="text-gray-800 mb-6 text-md leading-5 font-light text-left">
                The American Express Preferred Rewards Gold Credit Card comes
                with specific costs that you should understand before applying.
                Transparency about fees and charges helps you make an informed
                decision about whether this premium card aligns with your
                financial circumstances and spending patterns.
              </p>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
                <h3 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Annual Fee
                </h3>
                <p className="text-gray-700 text-sm mb-4 text-left">
                  The card carries an annual fee of £140, charged to your
                  account once per year. This fee provides access to all the
                  premium benefits including comprehensive travel insurance,
                  purchase protection, extended warranty, and the Membership
                  Rewards program. The first annual fee is typically charged
                  shortly after your account is opened, with subsequent fees
                  charged on your anniversary date.
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-4 mt-6 text-left">
                  Representative APR
                </h3>
                <p className="text-gray-700 text-sm mb-4 text-left">
                  The representative APR is 24.9% variable. This rate applies to
                  any balance you carry beyond the payment due date. If you pay
                  your balance in full each month by the due date, you will not
                  incur any interest charges on purchases. The interest rate is
                  variable, meaning American Express can adjust it in response
                  to changes in the Prime Rate or for other commercial reasons,
                  with appropriate notice provided.
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-4 mt-6 text-left">
                  Cash Advances
                </h3>
                <p className="text-gray-700 text-sm mb-4 text-left">
                  Cash withdrawals using your Gold Card incur both an immediate
                  cash advance fee (typically 3% of the amount withdrawn with a
                  minimum fee) and a higher interest rate that begins accruing
                  immediately from the date of the withdrawal. There is no
                  interest-free period on cash advances. For this reason, cash
                  withdrawals should be avoided except in genuine emergencies,
                  and alternative methods of accessing cash should be
                  considered.
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-4 mt-6 text-left">
                  Late Payment Fees
                </h3>
                <p className="text-gray-700 text-sm mb-4 text-left">
                  If you fail to make at least the minimum payment by the due
                  date, American Express will charge a late payment fee of up to
                  £12. Repeated late payments can also result in penalty
                  interest rates and may negatively impact your credit score,
                  making it more difficult to access credit in the future.
                  Setting up AutoPay for at least the minimum payment helps
                  avoid late fees and protects your credit rating.
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-4 mt-6 text-left">
                  Foreign Transaction Fees
                </h3>
                <p className="text-gray-700 text-sm text-left">
                  The American Express Gold Card offers competitive foreign
                  exchange rates and does not charge foreign transaction fees on
                  purchases made in foreign currencies. This makes the card
                  particularly attractive for international travel, as you'll
                  benefit from American Express's wholesale exchange rates
                  without additional fees that many other UK credit cards
                  impose. Combined with the included travel insurance, this
                  makes the Gold Card an excellent companion for overseas trips.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
                <h3 className="text-md font-bold text-gray-800 mb-4 text-left">
                  Related Articles You May Find Useful
                </h3>
                <div className="space-y-3">
                  <Link
                    href="/personal-finance/credit-card-types-benefits"
                    className="block text-blue-700 hover:text-blue-900 hover:underline text-left"
                  >
                    ➔ Understanding Different Credit Card Types and Benefits
                  </Link>
                  <Link
                    href="/personal-finance/understanding-credit-card-interest-rates"
                    className="block text-blue-700 hover:text-blue-900 hover:underline text-left"
                  >
                    ➔ Understanding Credit Card Interest Rates and APR
                  </Link>
                  <Link
                    href="/personal-finance/getting-out-of-debt"
                    className="block text-blue-700 hover:text-blue-900 hover:underline text-left"
                  >
                    ➔ Strategies for Getting Out of Debt
                  </Link>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6 mt-12 text-left">
                Key Benefits and Features Summary
              </h2>

              <p className="text-gray-800 mb-6 text-md leading-5 font-light text-left">
                Before applying, it's valuable to review the comprehensive
                benefits package that comes with the American Express Preferred
                Rewards Gold Credit Card to ensure it aligns with your lifestyle
                and spending patterns.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white border-2 border-[#180053] rounded-lg p-6">
                  <div className="flex items-center mb-3">
                    <Check className="size-6 text-[#180053] mr-3 flex-shrink-0" />
                    <h3 className="font-bold text-gray-800 text-left">
                      Membership Rewards Points
                    </h3>
                  </div>
                  <p className="text-gray-700 text-sm text-left">
                    Earn valuable points on every purchase that never expire.
                    Redeem for flights, hotels, shopping, statement credits, or
                    transfer to airline and hotel partners including British
                    Airways, Virgin Atlantic, and Hilton.
                  </p>
                </div>

                <div className="bg-white border-2 border-[#180053] rounded-lg p-6">
                  <div className="flex items-center mb-3">
                    <Check className="size-6 text-[#180053] mr-3 flex-shrink-0" />
                    <h3 className="font-bold text-gray-800 text-left">
                      Worldwide Travel Insurance
                    </h3>
                  </div>
                  <p className="text-gray-700 text-sm text-left">
                    Comprehensive travel insurance covering medical expenses,
                    trip cancellation, baggage delay, and emergency assistance
                    when you pay for your trip with the card.
                  </p>
                </div>

                <div className="bg-white border-2 border-[#180053] rounded-lg p-6">
                  <div className="flex items-center mb-3">
                    <Check className="size-6 text-[#180053] mr-3 flex-shrink-0" />
                    <h3 className="font-bold text-gray-800 text-left">
                      Purchase Protection
                    </h3>
                  </div>
                  <p className="text-gray-700 text-sm text-left">
                    Up to 90 days of purchase protection covering accidental
                    damage, theft, or loss for items bought with your card, with
                    cover up to £40,000 per item and £100,000 annually.
                  </p>
                </div>

                <div className="bg-white border-2 border-[#180053] rounded-lg p-6">
                  <div className="flex items-center mb-3">
                    <Check className="size-6 text-[#180053] mr-3 flex-shrink-0" />
                    <h3 className="font-bold text-gray-800 text-left">
                      Extended Warranty Protection
                    </h3>
                  </div>
                  <p className="text-gray-700 text-sm text-left">
                    Automatic extension of manufacturers' warranties by up to 12
                    months on eligible purchases with original warranties of
                    five years or less, providing enhanced product protection.
                  </p>
                </div>

                <div className="bg-white border-2 border-[#180053] rounded-lg p-6">
                  <div className="flex items-center mb-3">
                    <Check className="size-6 text-[#180053] mr-3 flex-shrink-0" />
                    <h3 className="font-bold text-gray-800 text-left">
                      Exclusive Amex Offers
                    </h3>
                  </div>
                  <p className="text-gray-700 text-sm text-left">
                    Access to rotating promotions providing statement credits or
                    bonus points when you shop with participating retailers,
                    potentially saving hundreds of pounds annually.
                  </p>
                </div>

                <div className="bg-white border-2 border-[#180053] rounded-lg p-6">
                  <div className="flex items-center mb-3">
                    <Check className="size-6 text-[#180053] mr-3 flex-shrink-0" />
                    <h3 className="font-bold text-gray-800 text-left">
                      Entertainment Priority Access
                    </h3>
                  </div>
                  <p className="text-gray-700 text-sm text-left">
                    Priority booking for concerts, theatre, sporting events, and
                    exclusive dining experiences through the American Express
                    Entertainment portal.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6 mt-12 text-left">
                The Application Process: What to Expect
              </h2>

              <p className="text-gray-800 mb-6 text-md leading-5 font-light text-left">
                Understanding the application journey helps set realistic
                expectations and prepares you for each stage of the process.
                American Express has streamlined their application system to
                provide quick decisions in most cases.
              </p>

              <div className="space-y-6 my-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-10 rounded-full bg-[#180053] flex items-center justify-center text-white font-bold mr-4">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2 text-left">
                      Complete the Online Application
                    </h3>
                    <p className="text-gray-700 text-sm text-left">
                      Visit the American Express website and complete the online
                      application form. The process typically takes less than 10
                      minutes when you have all required information prepared.
                      You'll provide personal details, financial information,
                      and banking details. American Express uses secure
                      encryption to protect your data throughout the application
                      process.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-10 rounded-full bg-[#180053] flex items-center justify-center text-white font-bold mr-4">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2 text-left">
                      Instant Identity Verification
                    </h3>
                    <p className="text-gray-700 text-sm text-left">
                      American Express will verify your identity using
                      electronic checks against databases such as public records
                      and credit bureaus. This verification happens
                      automatically during your application. In some cases, you
                      may need to provide additional identification documents if
                      automatic verification isn't possible.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-10 rounded-full bg-[#180053] flex items-center justify-center text-white font-bold mr-4">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2 text-left">
                      Credit Assessment
                    </h3>
                    <p className="text-gray-700 text-sm text-left">
                      American Express will conduct a credit check with major
                      credit bureaus including Experian, Equifax, or TransUnion.
                      This hard search will be visible on your credit file and
                      may temporarily affect your credit score. They'll assess
                      your credit history, existing commitments, and overall
                      creditworthiness to determine if you meet their lending
                      criteria.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-10 rounded-full bg-[#180053] flex items-center justify-center text-white font-bold mr-4">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2 text-left">
                      Affordability Assessment
                    </h3>
                    <p className="text-gray-700 text-sm text-left">
                      American Express will evaluate whether you can afford the
                      card by considering your income, existing financial
                      commitments, and typical household expenses. This
                      assessment ensures responsible lending and helps prevent
                      you from taking on unmanageable debt. They may request
                      additional income documentation in some cases.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-10 rounded-full bg-[#180053] flex items-center justify-center text-white font-bold mr-4">
                    5
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2 text-left">
                      Receive Your Decision
                    </h3>
                    <p className="text-gray-700 text-sm text-left">
                      In many cases, you'll receive a decision within 60 seconds
                      of submitting your application. If approved, you'll be
                      informed of your credit limit and the next steps. Some
                      applications require manual review and may take several
                      working days. If declined, American Express will explain
                      the reasons for their decision, which may help you
                      understand what to improve before reapplying.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-10 rounded-full bg-[#180053] flex items-center justify-center text-white font-bold mr-4">
                    6
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2 text-left">
                      Activate Your Card
                    </h3>
                    <p className="text-gray-700 text-sm text-left">
                      If approved, your American Express Gold Card will arrive
                      by post within 7-10 working days. You'll need to activate
                      your card either online, through the Amex mobile app, or
                      by telephone before you can start using it. Once
                      activated, you can immediately begin earning Membership
                      Rewards points and accessing your benefits, including
                      downloading digital insurance documents.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6 mt-12 text-left">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4 my-8">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-800 mb-3 text-left">
                    What credit score do I need for the American Express Gold
                    Card?
                  </h3>
                  <p className="text-gray-700 text-sm text-left">
                    American Express doesn't publicly disclose specific credit
                    score requirements. However, as a premium card, the Gold
                    Card typically requires a good to excellent credit score
                    (generally 670 or higher on the Experian scale). Your
                    approval chances improve significantly with a strong credit
                    history demonstrating responsible credit management, low
                    credit utilisation, and no recent adverse credit events such
                    as defaults or CCJs.
                  </p>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-800 mb-3 text-left">
                    How long does the application process take?
                  </h3>
                  <p className="text-gray-700 text-sm text-left">
                    The online application form typically takes less than 10
                    minutes to complete. In many cases, American Express
                    provides an instant decision within 60 seconds of
                    submission. However, some applications require additional
                    verification or manual review, which can extend the decision
                    timeframe to several working days. If approved, your card
                    will arrive within 7-10 working days of approval.
                  </p>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-800 mb-3 text-left">
                    Can I get the Gold Card if I already have another Amex card?
                  </h3>
                  <p className="text-gray-700 text-sm text-left">
                    Yes, you can hold multiple American Express cards
                    simultaneously. However, be aware of the 24-month rule for
                    welcome bonuses: you won't be eligible for the welcome bonus
                    if you currently hold or have held any personal American
                    Express card within the previous 24 months. If you're
                    applying purely for the card's benefits without concern for
                    the welcome bonus, holding another Amex card shouldn't
                    prevent approval, provided you meet other eligibility
                    criteria.
                  </p>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-800 mb-3 text-left">
                    Does applying affect my credit score?
                  </h3>
                  <p className="text-gray-700 text-sm text-left">
                    Yes, applying for the American Express Gold Card will result
                    in a hard credit check that appears on your credit file and
                    may temporarily reduce your credit score by a few points.
                    This is standard practice for all credit card applications.
                    The impact is typically minimal and temporary, with scores
                    generally recovering within a few months, particularly if
                    you manage the card responsibly. Multiple applications
                    within a short period can have a more significant negative
                    impact, so avoid applying for several credit products
                    simultaneously.
                  </p>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-800 mb-3 text-left">
                    What happens if my application is declined?
                  </h3>
                  <p className="text-gray-700 text-sm text-left">
                    If American Express declines your application, they will
                    explain the reasons in their decision communication. Common
                    reasons include insufficient credit history, recent adverse
                    credit events, high existing debt levels, or not meeting
                    residency requirements. You can request a full explanation
                    of the decision and the credit bureau data used. Before
                    reapplying, address the issues that led to the decline. Wait
                    at least six months before submitting another application to
                    improve your chances of approval.
                  </p>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-800 mb-3 text-left">
                    Is there an annual fee waiver or discount available?
                  </h3>
                  <p className="text-gray-700 text-sm text-left">
                    The £140 annual fee is charged to all Gold Cardmembers.
                    American Express occasionally offers promotional periods
                    where the first year's fee may be waived or reduced for new
                    applicants, but these promotions are temporary and not
                    always available. Existing cardmembers who threaten to
                    cancel may occasionally be offered retention bonuses or fee
                    waivers, though this is at American Express's discretion and
                    not guaranteed. The comprehensive benefits package typically
                    justifies the annual fee for frequent travellers and those
                    who maximize the card's features.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8">
                <h3 className="text-md font-bold text-gray-800 mb-3 text-left">
                  Important Reminders Before Applying
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start text-left">
                    <span className="text-yellow-600 mr-2 flex-shrink-0">
                      ⚠
                    </span>
                    <span>
                      Credit is subject to status and affordability. You must be
                      aged 18 or over and a UK resident.
                    </span>
                  </li>
                  <li className="flex items-start text-left">
                    <span className="text-yellow-600 mr-2 flex-shrink-0">
                      ⚠
                    </span>
                    <span>
                      Missing payments could affect your credit rating and make
                      it more difficult to obtain credit in the future.
                    </span>
                  </li>
                  <li className="flex items-start text-left">
                    <span className="text-yellow-600 mr-2 flex-shrink-0">
                      ⚠
                    </span>
                    <span>
                      Applicants who hold or have held any personal American
                      Express Card in the past 24 months will not be eligible
                      for any welcome bonus award.
                    </span>
                  </li>
                  <li className="flex items-start text-left">
                    <span className="text-yellow-600 mr-2 flex-shrink-0">
                      ⚠
                    </span>
                    <span>
                      This information is for guidance only and does not
                      constitute financial advice. Seek independent financial
                      advice specific to your circumstances.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="text-left my-12">
                <a
                  href="https://www.americanexpress.com/en-gb/credit-cards/gold-credit-card/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-[#180053] hover:bg-purple-900 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    Apply Now at American Express Official Website
                  </Button>
                </a>
              </div>

              <AIContentDisclaimer />
            </div>
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
