import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Vanquis Credit Card: Build Your Credit Score with Award-Winning Support - Top Finance UK",
    description:
      "The Vanquis Credit Card offers personalized credit limits from £250-£7,000, award-winning credit building features, and 24/7 account management. Representative 37.9% APR (variable).",
    keywords:
      "Vanquis Credit Card, credit builder card, balance transfer card, UK credit card, build credit score, Vanquis Bank, credit limit increase, bad credit card, 0% balance transfer",
  };
}

export default function VanquisCreditCardPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12" data-category="tarjetas">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-4xl font-bold text-gray-800 mb-4 leading-8">
              Vanquis Credit Card: Award-Winning Credit Building and Balance
              Transfer Solutions
            </h1>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 font-medium mb-8 leading-5 text-left">
                As part of Vanquis Banking Group with over 140 years of
                experience helping people manage their money, Vanquis Credit
                Cards have been accepted by over 5 million customers. Offering
                two specialised cards – the Credit Builder Card and Balance
                Transfer Card – Vanquis provides award-winning solutions
                designed to build credit scores and manage existing debt
                effectively.
              </p>

              <div id="square01" data-topads data-topads-size="square"></div>

              <hr className="my-8" />

              <div className="space-y-2 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#201F68] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Award-Winning Credit Building:
                    </span>{" "}
                    Named Credit Builder Card Provider of the Year at Moneyfacts
                    Awards 2023, 2024, and 2025, plus Best Credit Builder Card
                    2023-2025, demonstrating consistent excellence in helping
                    customers improve their credit scores.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#201F68] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Personalized Credit Limits:
                    </span>{" "}
                    Credit Builder Card offers £250-£2,500 credit limits, while
                    the Balance Transfer Card provides £250-£7,000, all tailored
                    to your individual circumstances and affordability.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#201F68] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      0% Balance Transfer Offer:
                    </span>{" "}
                    The Balance Transfer Card offers 0% interest on balance
                    transfers for up to 19 months (subject to eligibility) on
                    transfers made within 60 days of account opening, with a
                    3.9% transfer fee.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#201F68] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Easy Account Management:
                    </span>{" "}
                    Access your account 24/7 through the Vanquis mobile app,
                    check balances, make payments, set up Direct Debits, and
                    track spending with real-time notifications and detailed
                    analytics.
                  </div>
                </div>
              </div>

              <div className="text-left my-8">
                <Link href="/financial-solutions/vanquis-credit-card-requirements">
                  <Button className="bg-[#201F68] hover:bg-[#1A1853] text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <hr className="my-8" />

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/uk/vanquis-credit-card.webp"
                  alt="Vanquis Credit Card"
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
                  Vanquis Bank has established itself as a leader in credit
                  building and financial inclusion, having helped over 5 million
                  customers access credit over the years. With a heritage dating
                  back over 140 years as part of Vanquis Banking Group, the bank
                  focuses on responsible lending, offering credit cards to those
                  who might find it difficult to access credit elsewhere,
                  including individuals looking to build or rebuild their credit
                  history.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Credit Builder Credit Card: Your Path to Better Credit
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  The Vanquis Credit Builder Card is specifically designed to
                  help you build or rebuild your credit score through
                  responsible card usage. Recognized with multiple industry
                  awards including Credit Builder Card Provider of the Year at
                  the prestigious Moneyfacts Awards for three consecutive years
                  (2023, 2024, and 2025), this card demonstrates Vanquis's
                  commitment to helping customers improve their financial
                  standing. The card works on a simple principle: by staying
                  within your personalized credit limit of £250-£2,500, paying
                  on time, and paying at least the minimum monthly amount, you
                  can demonstrate positive credit behaviour that's reported to
                  credit reference agencies, potentially improving your credit
                  score over time.
                </p>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  The Representative APR for the Credit Builder Card is 37.9%
                  (variable), though your actual APR and credit limit may vary
                  based on your individual circumstances. Vanquis is transparent
                  about only offering credit cards to people they believe can
                  afford the repayments, taking a responsible lending approach
                  that considers your financial situation holistically. This
                  card is particularly valuable for those with limited credit
                  history, past credit issues, or anyone looking to demonstrate
                  improved financial management to future lenders.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Balance Transfer Card: Consolidate and Save
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  For those managing existing credit card debt, the Vanquis
                  Balance Transfer Card offers a strategic solution with 0%
                  interest on balance transfers for up to 19 months (subject to
                  eligibility). This promotional period applies to balance
                  transfers made within 60 days of account opening, allowing you
                  to consolidate higher-interest debt from other cards and
                  potentially save significantly on interest charges while
                  paying down your balance. A 3.9% balance transfer fee applies
                  to transferred amounts, so if you transfer £900 (90% of a
                  £1,000 limit), a £35.10 fee would be added to your balance.
                </p>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  The Balance Transfer Card offers credit limits ranging from
                  £250 to £7,000, personalized based on your circumstances. The
                  Representative APR is 36.9% (variable), though your specific
                  APR, credit limit, and promotional offer may vary based on
                  your individual assessment. The minimum transfer amount is
                  £100, and you can transfer up to 90% of your credit limit.
                  After the promotional period ends, the standard variable
                  purchase rate applies to any remaining balance, making it
                  important to plan your repayment strategy during the
                  interest-free period.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  The Vanquis Mobile App: Banking at Your Fingertips
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  Both Vanquis Credit Cards are managed through the
                  comprehensive Vanquis mobile app, which puts complete account
                  control in your pocket. Available 24/7, the app allows you to
                  check your balance and available credit in real-time, view
                  detailed transaction history with categorized spending
                  insights, make payments at any time, and set up convenient
                  Direct Debit arrangements for automated monthly payments. You
                  can choose a payment date that suits your financial schedule,
                  helping ensure you never miss a payment – critical for
                  building a positive credit history.
                </p>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  The app provides up-to-date account information including your
                  current balance, minimum payment due, payment due date, and
                  available credit. Real-time notifications alert you to
                  transactions, payment confirmations, and important account
                  updates, helping you stay on top of your spending and quickly
                  identify any unauthorized activity. This level of transparency
                  and control makes it easier to manage your finances
                  responsibly and track your progress towards your financial
                  goals.
                </p>

                <div className="my-8 text-left sm:text-left">
                  <Link href="/personal-finance/credit-card-types-benefits/">
                    <Image
                      src="https://media.topfinanzas.com/images/ads/Top-Blog-Credit-Cards.webp"
                      alt="Credit Card Types and Benefits"
                      width={1000}
                      height={563}
                      className="mx-auto w-full md:w-8/12 h-auto rounded-xl"
                      loading="lazy"
                      quality={80}
                    />
                  </Link>
                </div>

                {/* Related Articles Section */}
                <div className="my-8 p-6 bg-gray-50 rounded-xl border border-gray-200 text-left sm:text-left">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 text-left">
                    Learn More About Credit Cards:
                  </h3>
                  <ul className="space-y-2 list-disc list-inside text-blue-700">
                    <li>
                      <Link
                        href="/personal-finance/credit-card-types-benefits/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Understanding Credit Card Types
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/personal-finance/getting-out-of-debt/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Getting Out of Debt: Practical Strategies
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/personal-finance/best-rewards-credit-cards/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Maximizing Credit Card Rewards
                      </Link>
                    </li>
                  </ul>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  How Vanquis Can Help Improve Your Credit Score
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  Improving your credit score with a Vanquis Credit Card depends
                  on demonstrating responsible credit management over time.
                  Vanquis reports your account activity to credit reference
                  agencies, meaning your positive behaviour can help build a
                  stronger credit profile. The three key principles for credit
                  building success are: staying within your credit limit, paying
                  on time every month, and paying at least the minimum monthly
                  amount (though paying more accelerates debt clearance and
                  score improvement).
                </p>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  The Vanquis app makes following these principles easier by
                  helping you track spending to avoid exceeding your limit, set
                  up Direct Debits to ensure you never miss a payment date, and
                  choose flexible payment options including minimum, fixed, or
                  full balance payments. By consistently demonstrating you can
                  manage credit responsibly, you provide evidence to future
                  lenders that you're a reliable borrower, potentially opening
                  doors to better credit products and interest rates over time.
                  Many customers start with a Vanquis card precisely because
                  traditional lenders have declined them, then use it as a
                  stepping stone to rebuild their creditworthiness.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Additional Features:
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#201F68] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Trusted Reputation:</span>{" "}
                      Vanquis has helped over 5 million customers access credit,
                      demonstrating extensive experience and a proven track
                      record in supporting customers with diverse financial
                      backgrounds. The bank's consistent recognition at industry
                      awards confirms its market-leading position.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#201F68] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Responsible Lending:
                      </span>{" "}
                      Vanquis only offers credit cards to people they believe
                      can afford the repayments, assessing your income and
                      outgoings to ensure the card is suitable for your
                      circumstances. This ethical approach protects customers
                      from taking on unaffordable debt.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#201F68] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Direct Debit Flexibility:
                      </span>{" "}
                      Set up Direct Debit payments through the app and choose a
                      payment date that aligns with your income schedule,
                      whether monthly salary or benefits payments. Select from
                      minimum payment, fixed amount, or full balance options to
                      suit your budget.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#201F68] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Spending Analytics:</span>{" "}
                      The Vanquis app provides detailed spending insights with
                      categorized transactions, helping you understand where
                      your money goes and identify opportunities to optimize
                      your budget. Real-time notifications keep you informed of
                      all account activity.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Important Information and Representative Example
                </h2>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  <strong>Credit Builder Card Representative Example:</strong>{" "}
                  Representative 37.9% APR (variable). Your APR and credit limit
                  may vary based on your circumstances. See the{" "}
                  <a
                    href="https://www.vanquis.com/legal/credit-card-summary/cb-d/"
                    className="text-blue-700 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    summary box
                  </a>{" "}
                  for more information.
                </p>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  <strong>Balance Transfer Card Representative Example:</strong>{" "}
                  Representative 36.9% APR (variable). 0% interest on balance
                  transfers for up to 19 months (subject to eligibility) on
                  transfers made within 60 days of account opening. Balance
                  transfer fee of up to 3.9%. Your APR, credit limit, and
                  promotional offer may vary based on your circumstances. See
                  the{" "}
                  <a
                    href="https://www.vanquis.com/legal/credit-card-summary/bt-d/"
                    className="text-blue-700 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    summary box
                  </a>{" "}
                  for more information.
                </p>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  <strong>Important:</strong> Credit is subject to status,
                  affordability, and credit checks. Credit is only available to
                  UK residents aged 18 and over. Vanquis Bank Limited is
                  authorized by the Prudential Regulation Authority and
                  regulated by the Financial Conduct Authority and the
                  Prudential Regulation Authority (Financial Services Register
                  number 221156). Terms and conditions apply.
                </p>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  <strong>Credit Building Advice:</strong> Staying within your
                  credit limit demonstrates financial discipline. Paying on time
                  every month is essential for building a positive credit
                  history. Paying more than the minimum amount – with a fixed
                  monthly payment or ideally the full balance – can help you
                  clear debt faster and potentially boost your credit score more
                  quickly.
                </p>

                <div className="p-4 bg-amber-50 border-l-4 border-amber-500 my-6">
                  <p className="text-sm text-gray-800 leading-5">
                    <strong>Disclaimer:</strong> This article is for
                    informational purposes only and does not constitute
                    financial advice. Always consider your personal
                    circumstances and seek independent financial advice before
                    applying for credit products. Borrowing costs money and you
                    must ensure any credit is affordable for your situation.
                    Missing payments can affect your credit rating and make it
                    more difficult to obtain credit in the future.
                  </p>
                </div>

                <div className="text-left my-8">
                  <Link href="/financial-solutions/vanquis-credit-card-requirements">
                    <Button className="bg-[#201F68] hover:bg-[#1A1853] text-white font-medium text-md py-2 px-8 rounded-full w-full">
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
