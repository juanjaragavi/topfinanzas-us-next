import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "RBS Purchase & Balance Transfer Card: Save on Interest with 0% Offers - Top Finance UK",
    description:
      "The RBS Purchase & Balance Transfer Card offers 0% interest on purchases for up to 20 months and 0% on balance transfers for up to 18 months. No annual fee. Representative 24.9% APR (variable).",
    keywords:
      "RBS credit card, purchase and balance transfer card, 0% interest, Royal Bank of Scotland, balance transfer, purchase offer, credit card UK, no annual fee, debt consolidation",
  };
}

export default function RBSPurchaseBalanceTransferCardPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12" data-category="tarjetas">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-4xl font-bold text-gray-800 mb-4 leading-8">
              RBS Purchase & Balance Transfer Card: Dual Benefits for Smart
              Financial Management
            </h1>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 font-medium mb-8 leading-5 text-left">
                The Royal Bank of Scotland Purchase & Balance Transfer Card
                combines two powerful offers in one: 0% interest on new
                purchases for up to 20 months and 0% interest on balance
                transfers for up to 18 months, providing exceptional value for
                those seeking to manage existing debt whilst making new
                purchases without interest charges.
              </p>

              <div id="square01" data-topads data-topads-size="square"></div>

              <hr className="my-8" />

              <div className="space-y-2 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#5a287d] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      0% Interest on Purchases:
                    </span>{" "}
                    Enjoy up to 20 months of 0% interest on new purchases from
                    account opening, giving you extended time to pay for larger
                    items without interest charges accumulating.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#5a287d] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      0% Interest on Balance Transfers:
                    </span>{" "}
                    Transfer existing credit card debt and benefit from up to 18
                    months of 0% interest, helping you clear your balance faster
                    with a competitive 2.99% transfer fee.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#5a287d] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">No Annual Fee:</span> The
                    card comes with no annual fee, maximizing your savings and
                    keeping costs transparent with no hidden charges for
                    maintaining your account.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#5a287d] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Eligibility Checker Available:
                    </span>{" "}
                    Check your eligibility online without impacting your credit
                    score, allowing you to see if you're likely to be approved
                    before making a formal application.
                  </div>
                </div>
              </div>

              <div className="text-left my-8">
                <Link href="/financial-solutions/rbs-purchase-balance-transfer-card-requirements">
                  <Button className="bg-[#5a287d] hover:bg-purple-900 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <hr className="my-8" />

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/uk/rbs-purchase-balance-transfer-card.webp"
                  alt="RBS Purchase & Balance Transfer Card"
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
                  The Royal Bank of Scotland Purchase & Balance Transfer Card
                  represents a versatile financial tool designed for consumers
                  seeking both debt consolidation and purchasing flexibility.
                  This dual-purpose card addresses two common financial needs:
                  the ability to make new purchases without incurring immediate
                  interest charges, and the opportunity to consolidate existing
                  credit card debt onto a single card with an extended
                  interest-free period. By combining these two features, RBS
                  offers a comprehensive solution for managing your credit more
                  effectively.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Extended Interest-Free Purchasing Power
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  With up to 20 months of 0% interest on new purchases starting
                  from account opening, this card provides exceptional value for
                  consumers planning significant purchases. Whether you're
                  buying household appliances, furnishing a new home,
                  undertaking essential repairs, or spreading the cost of
                  seasonal expenses, the extended interest-free period allows
                  you to budget more effectively. The 0% purchase offer begins
                  immediately upon account opening, providing instant value from
                  the moment your card is activated. This extended timeline
                  gives you flexibility to pay for purchases over many months
                  without the burden of interest charges accumulating on your
                  balance.
                </p>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  The purchasing flexibility this card offers is particularly
                  valuable during life events that require multiple expenses,
                  such as moving house, starting university, or preparing for a
                  major celebration. Rather than depleting your savings all at
                  once, you can spread costs across the promotional period
                  whilst maintaining your financial reserves for emergencies.
                  This approach to managing larger expenses can help maintain
                  better overall financial stability and preserve your emergency
                  funds.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Effective Balance Transfer Solution
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  The card's balance transfer feature provides up to 18 months
                  of 0% interest, with a competitive 2.99% transfer fee applied
                  to the amount you move. This represents a powerful tool for
                  debt consolidation, particularly if you're currently paying
                  standard interest rates on existing credit card balances.
                  Balance transfers must be completed within the first 3 months
                  of account opening to qualify for the 0% promotional rate, and
                  the interest-free period starts from the date your account is
                  opened, not from when you make the transfer.
                </p>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  You can transfer balances from most credit cards and store
                  cards, with the important exception of other NatWest Group
                  credit cards (including NatWest, Royal Bank of Scotland, and
                  Ulster Bank cards). The minimum transfer amount is £100, and
                  you can transfer up to 95% of your approved credit limit. This
                  ceiling ensures you maintain some available credit on the card
                  for potential emergencies whilst maximizing the debt you can
                  consolidate at the promotional rate.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Understanding the Representative Example
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  <strong>Representative 24.9% APR (variable).</strong>{" "}
                  Representative example: The assumed credit limit is £1,200
                  with a purchase rate of 24.9% p.a. (variable) and an annual
                  fee of £0. Your actual credit limit, APR, and 0% promotional
                  periods may differ based on RBS's credit assessment of your
                  individual circumstances. Your purchase and balance transfer
                  rate could be up to 29.9% p.a. (variable) depending on your
                  creditworthiness. Your 0% offer on purchases could be between
                  12 and 20 months, whilst your 0% offer on balance transfers
                  could be between 12 and 18 months.
                </p>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  It's important to understand that these promotional rates are
                  introductory offers. Once your 0% periods end, any remaining
                  balance will be subject to RBS's standard variable rates,
                  which could be significantly higher. Planning your repayments
                  to clear balances during the promotional periods maximizes the
                  value of these offers and minimizes the total interest you'll
                  pay over time.
                </p>

                <div className="my-8 text-left sm:text-left">
                  <Link href="/personal-finance/credit-card-types-benefits/">
                    <Image
                      src="https://media.topfinanzas.com/images/ads/Top-Blog-Credit-Cards.webp"
                      alt="Understanding Credit Card Types"
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
                    Related Financial Solutions:
                  </h3>
                  <ul className="space-y-2 list-disc list-inside text-blue-700">
                    <li>
                      <Link
                        href="/financial-solutions/bank-of-scotland-credit-cards"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Bank of Scotland Credit Cards
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/personal-finance/balance-transfer-credit-cards/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Balance Transfer Credit Cards Guide
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/personal-finance/understanding-credit-card-interest-rates/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Understanding Credit Card Interest Rates
                      </Link>
                    </li>
                  </ul>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Managing Your Card Effectively
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  To maximize the benefits of this card, it's essential to have
                  a clear repayment strategy before making purchases or
                  transferring balances. Calculate how much you need to repay
                  each month to clear your balance before the 0% promotional
                  periods end. For example, if you transfer £3,600 with an 18
                  month 0% period, you would need to repay £200 per month to
                  clear the balance before standard rates apply. Similarly, for
                  new purchases, divide your total spending by the number of
                  months remaining in your promotional period to determine your
                  monthly payment target.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Additional Features:
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#5a287d] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Secure Online Banking:
                      </span>{" "}
                      Manage your card account through RBS's award-winning
                      digital banking platform, with access to real-time balance
                      updates, transaction history, statement downloads, and
                      payment management tools 24/7.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#5a287d] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Mobile App Integration:
                      </span>{" "}
                      Access the Royal Bank mobile app for convenient card
                      management on the go, including instant spending
                      notifications, balance checks, payment scheduling, and
                      security features like temporary card freezing.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#5a287d] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Contactless Payments:
                      </span>{" "}
                      Your card comes with contactless payment technology,
                      enabling quick and secure transactions for purchases under
                      £100 without entering your PIN, whilst maintaining full
                      fraud protection.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#5a287d] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Fraud Protection:</span>{" "}
                      Benefit from comprehensive fraud monitoring and zero
                      liability for unauthorized transactions, with 24/7 support
                      available to report lost or stolen cards and immediate
                      card replacement services.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Is This Card Right for You?
                </h2>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  The RBS Purchase & Balance Transfer Card is particularly
                  suitable if you have existing credit card debt you wish to
                  consolidate whilst also needing flexibility for new purchases.
                  The combination of both promotional offers provides
                  comprehensive financial management capabilities in a single
                  product. However, this card is most beneficial if you have a
                  clear repayment plan to clear your balances before the
                  promotional periods end.
                </p>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  Before applying, consider your current financial situation and
                  spending plans. If you primarily need to consolidate existing
                  debt without planning significant new purchases, a dedicated
                  balance transfer card with a longer interest-free period might
                  offer better value. Conversely, if new purchases are your main
                  priority, a purchase-only card could provide a longer
                  promotional period. This dual-purpose card strikes a balance
                  between both needs, making it ideal for those requiring both
                  features.
                </p>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  <strong>Important:</strong> Credit is subject to status and
                  approval. You must be a UK resident aged 18 or over with a
                  regular income of at least £10,000 per year. The information
                  provided is for general guidance only and does not constitute
                  financial advice. Before applying, carefully review RBS's
                  terms and conditions and consider whether this product is
                  suitable for your circumstances. If you're unsure, seek
                  independent financial advice.
                </p>

                <div className="text-left my-8">
                  <Link href="/financial-solutions/rbs-purchase-balance-transfer-card-requirements">
                    <Button className="bg-[#5a287d] hover:bg-purple-900 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                      Check Requirements & Apply
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
