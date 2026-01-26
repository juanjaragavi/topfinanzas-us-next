import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title: "Curve Credit Card: All-In-One Financial Solution - Top Finance UK",
    description:
      "The Curve Credit Card offers a revolutionary 'all-in-one' approach, combining multiple cards in one, with advanced benefits like time-travel functionality and enhanced rewards.",
    keywords:
      "Curve Card, UK fintech, all-in-one card, card consolidation, Curve Flex, cashback, time travel banking, Go Back in Time, card management",
  };
}

export default function CurveCreditCardPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12" data-category="tarjetas">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-4xl font-bold text-gray-800 mb-4 leading-8">
              Curve Credit Card: Your Cards United in One Smart Solution
            </h1>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 font-medium mb-8 leading-5 text-left">
                The Curve Card revolutionizes how you use credit and debit cards
                by consolidating all your existing cards into a single smart
                card, while adding powerful features that transform your
                financial management.
              </p>

              <div id="square01" data-topads data-topads-size="square"></div>

              <hr className="my-8" />

              <div className="space-y-2 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#E33292] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">All Cards in One:</span>{" "}
                    Connect all your existing Mastercard and Visa cards to your
                    Curve Card, allowing you to carry just one card while still
                    accessing all your accounts.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#E33292] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">Time-Travel Banking:</span>{" "}
                    With Curve's unique "Go Back in Time" feature, move
                    transactions between your connected cards up to 30 days
                    after purchase, offering unprecedented payment flexibility.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#E33292] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">Enhanced Rewards:</span>{" "}
                    Earn rewards twice - first from your underlying card's
                    rewards program, then additional cashback from Curve on
                    selected retailers, amplifying your benefits.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#E33292] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Smart Financial Tools:
                    </span>{" "}
                    Access spending insights across all your cards in one place,
                    with real-time notifications, categorized spending, and
                    detailed analytics to optimize your finances.
                  </div>
                </div>
              </div>

              <div className="text-left my-8">
                <Link href="/financial-solutions/curve-credit-card-requirements">
                  <Button className="bg-[#E33292] hover:bg-pink-700 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <hr className="my-8" />

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/uk/credit-cards/719907701-top_prestamos-y-tarjetas-uk_v1-22.webp"
                  alt="Curve Credit Card"
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
                  The Curve Card represents a paradigm shift in personal finance
                  management. Unlike traditional credit cards issued by banks,
                  Curve offers a fundamentally different approach by acting as
                  an intermediary layer that sits between your existing payment
                  cards and merchants. This innovative model allows you to
                  consolidate all your cards into a single smart card,
                  simplifying your wallet while enhancing your financial
                  flexibility and control.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Unifying Your Financial Life
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  At its core, Curve addresses a common modern financial
                  challenge: managing multiple payment cards across different
                  banks and financial institutions. Instead of carrying several
                  physical cards, you can connect up to 30 Mastercard and Visa
                  cards to your Curve account. When making a payment, you simply
                  use your Curve Card and select which of your underlying cards
                  you want the transaction to be processed through. This
                  consolidation not only reduces physical wallet clutter but
                  also creates a central hub for tracking spending across all
                  your accounts, providing a comprehensive view of your finances
                  that traditional siloed banking can't match.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Time-Travel Banking
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  Curve's most distinctive innovation is its "Go Back in Time"
                  feature, which fundamentally rethinks the finality of
                  financial transactions. This functionality allows you to move
                  transactions between your connected cards up to 30 days after
                  the purchase was made. If you accidentally used your personal
                  card for a business expense, charged something to a card with
                  a high interest rate, or simply need to redistribute expenses
                  to manage your cash flow better, you can retroactively switch
                  which underlying card is charged. This unprecedented
                  flexibility transforms how you manage your money, turning
                  traditionally rigid financial transactions into adaptable
                  elements of your financial strategy.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Double-Dipping Rewards
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  With Curve, you can effectively "double-dip" on rewards and
                  benefits. When you make a purchase through Curve, you still
                  earn all the rewards, points, or cashback that your underlying
                  card offers. Additionally, Curve provides its own cashback
                  program for selected retailers, allowing you to earn rewards
                  twice on the same transaction. For travel enthusiasts,
                  business users, or anyone who maximizes credit card rewards,
                  this stacking effect can significantly enhance the value
                  derived from everyday spending, without requiring changes to
                  your existing financial products.
                </p>

                <div className="my-8 text-left sm:text-left">
                  <Link href="/personal-finance/credit-card-types-benefits/">
                    <Image
                      src="https://media.topfinanzas.com/images/ads/Top-Blog-Credit-Cards.webp"
                      alt="Barclays Personal Loan"
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
                        href="/personal-finance/cashback-credit-cards/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Best Cashback Credit Cards
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
                    <li>
                      <Link
                        href="/personal-finance/no-annual-fee-credit-cards/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Top No Annual Fee Cards
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/personal-finance/understanding-credit-card-interest-rates/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Understanding Interest Rates
                      </Link>
                    </li>
                  </ul>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Additional Features:
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#E33292] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Curve Flex:</span>{" "}
                      Transform any past purchase into installment plans with
                      Curve Flex, allowing you to spread the cost of purchases
                      after you've already made them. This feature provides
                      financial flexibility without needing to decide on
                      financing at the point of sale, essentially giving any of
                      your existing cards "buy now, pay later" functionality.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#E33292] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Fee-Free Foreign Spending:
                      </span>{" "}
                      Avoid foreign transaction fees when spending abroad with
                      competitive exchange rates (within monthly limits
                      depending on your subscription tier). This makes Curve an
                      excellent companion for international travelers who can
                      use it to eliminate fees on cards that would normally
                      charge for foreign transactions.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#E33292] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Enhanced Security:</span>{" "}
                      Benefit from advanced security features including instant
                      push notifications for all transactions, the ability to
                      lock your card instantly if lost, and the option to
                      disable specific transaction types like online purchases
                      or ATM withdrawals. Additionally, Curve provides an extra
                      layer of security for your underlying cards since
                      merchants only see Curve's details, not your actual card
                      information.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#E33292] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Anti-Embarrassment Mode:
                      </span>{" "}
                      Avoid declined transactions with Curve's unique
                      Anti-Embarrassment Mode, which automatically tries your
                      next preferred card if your primary choice is declined.
                      This feature ensures smooth transactions even if one of
                      your cards has insufficient funds or other issues.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Comprehensive Financial Insights
                </h2>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  Curve transforms financial management with comprehensive
                  spending analytics:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#E33292] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Unified Spending View:
                      </span>{" "}
                      See all your transactions across different cards in a
                      single feed, eliminating the need to log into multiple
                      banking apps to understand your overall spending patterns.
                      This consolidated view provides unprecedented clarity over
                      your financial activity.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#E33292] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Spending Categories:
                      </span>{" "}
                      Transactions are automatically categorized, allowing you
                      to see exactly where your money is going across categories
                      like dining, shopping, travel, and more. These insights
                      make budgeting more effective and help identify areas
                      where spending can be optimized.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#E33292] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Expense Tagging:</span>{" "}
                      For business users, Curve offers the ability to tag
                      transactions and add notes or receipt images, simplifying
                      expense tracking and reporting. This feature is
                      particularly valuable for freelancers and small business
                      owners who need to separate personal and business
                      expenses.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  A New Financial Layer
                </h2>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  What makes Curve truly revolutionary is that it doesn't
                  require you to change your existing financial relationships or
                  apply for new credit products. Instead, it works as an
                  additional layer that enhances the banking and credit card
                  relationships you already have. This approach means you can
                  benefit from Curve's innovations without going through credit
                  checks or application processes typically associated with new
                  financial products. For consumers who have carefully selected
                  their existing cards for specific benefits or who have
                  established credit histories with particular institutions,
                  Curve offers a way to enhance these existing relationships
                  rather than replace them.
                </p>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  Whether you're looking to simplify your wallet, maximize
                  rewards, gain better financial insights, or enjoy more
                  flexibility in how you manage transactions, the Curve Card
                  offers a unique combination of features not found in
                  traditional credit or debit cards. By reimagining the
                  relationship between consumers, their cards, and merchants,
                  Curve has created a financial tool that adapts to modern needs
                  while working seamlessly with the established financial
                  system.
                </p>

                <div className="text-left my-8">
                  <Link href="/financial-solutions/curve-credit-card-requirements">
                    <Button className="bg-[#E33292] hover:bg-pink-700 text-white font-medium text-md py-2 px-8 rounded-full w-full">
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
