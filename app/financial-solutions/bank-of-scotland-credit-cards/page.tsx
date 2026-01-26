import ResponsiveImage from "@/components/ui/responsive-image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Bank of Scotland Credit Cards: Flexible Options for Every Need - Top Finance UK",
    description:
      "Discover Bank of Scotland credit cards with options for everyday spending, balance transfers, large purchases, and credit building. Check eligibility without affecting your credit score. Representative APR varies by card type.",
    keywords:
      "Bank of Scotland Credit Cards, UK credit cards, balance transfer, everyday spending card, credit builder card, large purchase card, eligibility checker",
  };
}

export default function BankOfScotlandCreditCardsPage() {
  return (
    <main
      className="bg-white min-h-screen flex flex-col"
      data-category="tarjetas"
    >
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-4xl font-bold text-gray-800 mb-8 leading-8">
              Bank of Scotland Credit Cards: Flexible Options for Every Need
            </h1>

            <div className="my-8 text-left sm:text-left">
              <p className="text-left text-lg text-gray-800 font-medium mb-8 leading-5">
                Bank of Scotland offers a comprehensive range of credit cards
                tailored to different financial needs, from everyday spending
                and balance transfers to large purchases and credit building,
                all backed by trusted Scottish banking heritage.
              </p>

              <div id="square01" data-topads data-topads-size="square"></div>

              <hr className="my-8" />

              <div className="space-y-2 my-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#0f70f0] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Four Card Types Available:
                    </span>{" "}
                    Choose from Everyday Spending, Balance Transfer, Large
                    Purchase, or Credit Builder cards to match your specific
                    financial goals and circumstances.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#0f70f0] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Pre-Approval Eligibility Checker:
                    </span>{" "}
                    Check if you're likely to be approved and see your estimated
                    credit limit before applying, with no impact on your credit
                    score and no obligation to proceed.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#0f70f0] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Section 75 Protection:
                    </span>{" "}
                    All purchases between £100 and £30,000 are protected under
                    the Consumer Credit Act, providing additional security and
                    peace of mind for larger transactions.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#0f70f0] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Mobile Banking Excellence:
                    </span>{" "}
                    Manage your credit card through Bank of Scotland's
                    award-winning mobile banking app with real-time
                    notifications and secure account management features.
                  </div>
                </div>
              </div>

              <div className="text-left my-8">
                <Link href="/financial-solutions/bank-of-scotland-credit-cards-requirements">
                  <Button className="bg-[#0f70f0] hover:bg-blue-700 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <div className="my-8 text-left sm:text-left">
                <ResponsiveImage
                  src="https://media.topfinanzas.com/images/uk/bank-of-scotland-credit-cards.webp"
                  alt="Bank of Scotland Credit Cards"
                  width={900}
                  height={507}
                  className="w-full rounded-xl"
                  priority={false}
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 900px"
                  containerClassName="w-full"
                />
              </div>

              <div className="my-6">
                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  As part of the Lloyds Banking Group and with centuries of
                  Scottish banking heritage, Bank of Scotland brings trusted
                  expertise to its range of credit cards. Whether you're looking
                  to manage everyday expenses, consolidate existing debts, make
                  a significant purchase, or build your credit history, Bank of
                  Scotland offers a card designed specifically for your needs.
                  With competitive rates, flexible features, and comprehensive
                  support, these cards help you take control of your finances
                  while benefiting from the security and reliability of one of
                  the UK's most established banking institutions.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Everyday Spending Credit Cards
                </h2>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  Bank of Scotland's Everyday Spending credit cards are designed
                  for regular purchases, offering low interest rates on
                  purchases that make day-to-day budgeting more manageable.
                  These cards are ideal for food shopping, fuel, bills, and
                  other routine expenses. By consolidating your everyday
                  spending onto one card, you can better track your expenditure
                  while benefiting from credit card protection and building a
                  positive credit history. The competitive purchase rates mean
                  you can use the card confidently for regular transactions, and
                  by paying off your balance in full each month, you can avoid
                  interest charges entirely while enjoying the convenience and
                  security that comes with credit card payments.
                </p>

                <hr className="my-8" />

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Balance Transfer Credit Cards
                </h2>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  If you're carrying balances on other credit cards or store
                  cards, Bank of Scotland's Balance Transfer credit cards could
                  help you save money on interest charges. These cards typically
                  offer promotional 0% interest periods on transferred balances,
                  allowing you to consolidate your debts in one place and focus
                  on paying down the principal without accumulating additional
                  interest. A balance transfer fee usually applies, but the
                  savings on interest during the promotional period often far
                  outweigh this cost. This option is particularly valuable if
                  you're paying high interest rates on existing credit card
                  debts, as it provides a clear timeframe to become debt-free
                  while minimizing the total amount you'll pay.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Large Purchase Credit Cards
                </h2>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  Planning a significant purchase such as home improvements,
                  furniture, or new appliances? Bank of Scotland's Large
                  Purchase credit cards offer introductory 0% interest periods
                  on purchases, allowing you to spread the cost over several
                  months without paying interest. This makes expensive but
                  necessary purchases more manageable by breaking them into
                  affordable monthly payments. You'll benefit from the Section
                  75 protection that comes with credit card purchases, providing
                  additional security for these important transactions. The
                  interest-free period gives you breathing room to pay off the
                  purchase before standard interest rates apply, helping you
                  budget effectively for larger expenses without depleting your
                  savings all at once.
                </p>

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
                        Understanding Different Credit Card Types
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/personal-finance/best-rewards-credit-cards/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Maximizing Credit Card Benefits
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/personal-finance/understanding-credit-card-interest-rates/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Understanding Interest Rates and Balance Transfers
                      </Link>
                    </li>
                  </ul>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Credit Builder Credit Cards
                </h2>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  For those new to credit or looking to rebuild their credit
                  history, Bank of Scotland's Credit Builder cards provide an
                  accessible way to demonstrate responsible borrowing. These
                  cards typically have lower credit limits and may carry higher
                  interest rates, but they're specifically designed for people
                  who might not qualify for standard credit cards. By using the
                  card regularly for small purchases and paying off the balance
                  in full each month, you can gradually improve your credit
                  score and build a positive credit history. Over time, this can
                  open doors to other credit products with better terms and
                  higher limits. The eligibility checker helps you understand if
                  you're likely to be approved before you apply, protecting your
                  credit score from unnecessary hard searches.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Digital Banking and Security Features
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0f70f0] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Mobile App Control:</span>{" "}
                      Manage your credit card through the Bank of Scotland
                      mobile banking app, which offers real-time transaction
                      notifications, spending insights, and instant access to
                      your account details wherever you are.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0f70f0] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Fraud Protection:</span>{" "}
                      Advanced security features including real-time transaction
                      monitoring, secure 3D Secure verification for online
                      purchases, and comprehensive fraud protection with zero
                      liability for unauthorized transactions.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0f70f0] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Contactless Payments:
                      </span>{" "}
                      Quick and convenient contactless payment capability for
                      purchases up to the UK contactless limit, with full
                      integration with Apple Pay, Google Pay, and Samsung Pay
                      for mobile payments.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0f70f0] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Spending Notifications:
                      </span>{" "}
                      Receive instant alerts whenever your card is used, helping
                      you track spending in real-time and quickly identify any
                      suspicious activity on your account.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0f70f0] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Card Controls and Limits:
                      </span>{" "}
                      Set your own spending limits, temporarily lock your card
                      if misplaced, and manage where your card can be used
                      through the mobile app for enhanced control and security.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  The One Check Eligibility Service
                </h2>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  One of the standout features of Bank of Scotland credit cards
                  is the One Check eligibility checker. This innovative service
                  allows you to see whether you're likely to be approved for a
                  credit card and provides an estimated credit limit—all before
                  you formally apply. Crucially, using the eligibility checker
                  performs only a soft search on your credit file, which doesn't
                  affect your credit score and isn't visible to other lenders.
                  This means you can explore your options and understand your
                  chances of approval without any negative impact on your credit
                  rating. The service is quick, taking just a few minutes to
                  complete, and there's absolutely no obligation to proceed with
                  an application if you're pre-approved. This transparent
                  approach helps you make informed decisions about credit
                  without unnecessary risk.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Flexible Account Management
                </h2>

                <p className="text-left text-gray-800 text-sm leading-5 mb-4 font-light">
                  Bank of Scotland understands that financial circumstances can
                  change, which is why they offer flexible ways to manage your
                  credit card account. You can make payments online, via the
                  mobile app, by telephone, by Direct Debit, or at any Bank of
                  Scotland branch. The minimum payment is clearly stated on your
                  statement, but you can always pay more to reduce interest
                  charges and pay off your balance faster. The mobile app
                  provides spending insights that help you understand where your
                  money goes, making it easier to budget effectively. If you
                  ever face financial difficulty, Bank of Scotland offers
                  support services to help you manage your credit card debt
                  responsibly, with options to temporarily reduce payments or
                  freeze interest in appropriate circumstances.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Why Choose Bank of Scotland Credit Cards?
                </h2>

                <p className="text-left text-gray-800 text-sm leading-5 mb-4 font-light">
                  Bank of Scotland combines over 320 years of banking expertise
                  with modern digital capabilities to deliver credit cards that
                  meet diverse financial needs. As part of the Lloyds Banking
                  Group, cardholders benefit from the resources and stability of
                  one of the UK's largest banking organizations while enjoying
                  the personal service and Scottish heritage that Bank of
                  Scotland is known for. The range of cards ensures there's an
                  option suitable for almost any financial situation, from
                  experienced credit users to those taking their first steps
                  with credit. With transparent eligibility checking,
                  comprehensive Section 75 protection, excellent mobile banking
                  facilities, and flexible account management options, Bank of
                  Scotland credit cards offer a reliable and straightforward way
                  to manage your finances effectively.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Important Information
                </h2>

                <p className="text-left text-gray-800 text-sm leading-5 mb-4 font-light">
                  Credit is subject to status and affordability. You must be 18
                  or over and a UK resident. Representative APR varies depending
                  on the card type and your individual circumstances. Balance
                  transfer and large purchase cards typically offer 0%
                  introductory periods with fees applicable. Everyday spending
                  and credit builder cards have standard purchase rates that
                  vary based on creditworthiness. Terms and conditions apply.
                  Bank of Scotland plc is registered in Scotland (SC327000) with
                  registered office at The Mound, Edinburgh EH1 1YZ. Authorized
                  by the Prudential Regulation Authority and regulated by the
                  Financial Conduct Authority and the Prudential Regulation
                  Authority under registration number 169628.
                </p>

                <p className="text-left text-gray-800 text-sm leading-5 mb-4 font-light">
                  This information is for general guidance only and does not
                  constitute financial advice. We recommend seeking independent
                  financial advice if you're unsure about whether a credit card
                  is suitable for your circumstances. Please visit the Bank of
                  Scotland website or contact their customer service team for
                  the most current product information, rates, and terms.
                </p>

                <div className="text-left my-8">
                  <Link href="/financial-solutions/bank-of-scotland-credit-cards-requirements">
                    <Button className="bg-[#0f70f0] hover:bg-blue-700 text-white font-medium text-md py-2 px-8 rounded-full w-full">
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
