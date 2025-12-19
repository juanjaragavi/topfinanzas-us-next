import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "HSBC Rewards Credit Card: Earn Points on Every Purchase - Top Finance UK",
    description:
      "The HSBC Rewards Credit Card offers reward points on everyday spending, 0% interest on purchases for 6 months, and a £25 welcome bonus. Representative 26.9% APR (variable).",
    keywords:
      "HSBC Rewards Credit Card, credit card rewards, Mastercard rewards, cashback credit card, pay with points, HSBC credit card, balance transfer credit card, rewards programme UK",
  };
}

export default function HSBCRewardsCreditCardPage() {
  return (
    <main
      className="bg-white min-h-screen flex flex-col"
      data-category="tarjetas"
    >
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-4xl font-bold text-gray-800 mb-4 leading-8">
              HSBC Rewards Credit Card: Turn Every Purchase Into Points
            </h1>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 font-medium mb-8 leading-5 text-left">
                The HSBC Rewards Credit Card transforms your everyday spending
                into valuable reward points that you can redeem against future
                purchases wherever Mastercard is accepted, whether shopping
                online, in-store, or abroad—all with no annual fee.
              </p>

              <div id="square01" data-topads data-topads-size="square"></div>

              <hr className="my-8" />

              <div className="space-y-2 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#db0011] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      £25 Welcome Bonus (2,500 Points):
                    </span>{" "}
                    Receive 2,500 reward points worth £25 when you make your
                    first transaction, credited to your account up to 60 days
                    after your first spend.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#db0011] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Pay with Reward Points:
                    </span>{" "}
                    Use your earned reward points for everyday purchases
                    wherever your card is accepted through the Mastercard Pay
                    with Rewards app, whether shopping in-store or online.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#db0011] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      0% Interest on Purchases:
                    </span>{" "}
                    Enjoy 0% interest on purchases for 6 months from account
                    opening, giving you valuable breathing space to spread the
                    cost of larger purchases.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#db0011] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">0% Balance Transfers:</span>{" "}
                    Transfer existing credit card balances and pay 0% interest
                    for 6 months on balance transfers made within 60 days of
                    account opening. A 2.99% fee applies for each balance
                    transferred (minimum £5).
                  </div>
                </div>
              </div>

              <div className="text-left my-8">
                <Link href="/financial-solutions/hsbc-rewards-credit-card-requirements">
                  <Button className="bg-[#db0011] hover:bg-red-700 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <hr className="my-8" />

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/uk/hsbc-rewards-credit-card.webp"
                  alt="HSBC Rewards Credit Card"
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
                  The HSBC Rewards Credit Card is designed for everyday spenders
                  who want to maximise the value of their purchases through a
                  flexible rewards programme. As one of the UK's largest and
                  most established banks, HSBC brings its trusted financial
                  expertise to this rewards credit card, offering a
                  straightforward way to earn points on everything you buy and
                  redeem them directly against future purchases.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  How the HSBC Rewards Programme Works
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  With the HSBC Rewards Credit Card, you earn reward points on
                  every purchase you make, whether you're shopping at your local
                  supermarket, booking travel, dining out, or making online
                  purchases. The beauty of this rewards system lies in its
                  flexibility and simplicity—your points accumulate
                  automatically without the need to activate special categories
                  or track bonus periods. Once you've accumulated points, you
                  can redeem them instantly using the Mastercard Pay with
                  Rewards app, which allows you to offset purchases wherever
                  Mastercard is accepted. This innovative redemption method
                  means you're not limited to specific retailers or gift cards;
                  instead, you can use your points to reduce the cost of
                  everyday essentials, special treats, or even recurring bills.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Introductory Offers and Interest-Free Periods
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  New cardholders benefit from a generous welcome bonus of 2,500
                  points (worth £25) when they make their first transaction with
                  the card. These bonus points are awarded up to 60 days after
                  your first spend, giving your rewards balance an immediate
                  boost. Beyond the welcome offer, the card provides 0% interest
                  on purchases for the first 6 months from account opening,
                  making it an excellent option if you're planning a larger
                  purchase and want to spread the cost without incurring
                  interest charges. Additionally, you can take advantage of 0%
                  interest on balance transfers for 6 months when you transfer
                  existing credit card balances within the first 60 days of
                  account opening. This feature can help you consolidate debt
                  from higher-interest cards and save money whilst paying down
                  your balance. Note that a balance transfer fee of 2.99%
                  (minimum £5) applies to each transfer.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Worldwide Acceptance and Convenience
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  As a Mastercard, the HSBC Rewards Credit Card is accepted at
                  millions of locations worldwide, giving you the flexibility to
                  earn and use your card whether you're shopping in the UK or
                  travelling abroad. You can use your card for purchases online,
                  in physical stores, for contactless payments, and even for
                  recurring payments like subscriptions or utility bills—all
                  whilst earning rewards points. The card also offers the
                  convenience of chip-and-PIN technology for secure
                  transactions, as well as contactless payment options for quick
                  and easy purchases under £100. Manage your account easily
                  through HSBC's mobile banking app, where you can check your
                  balance, view transactions in real-time, track your rewards
                  points, make payments, and access account statements—all from
                  your smartphone.
                </p>

                <div className="my-8 text-left sm:text-left">
                  <Link href="/personal-finance/best-rewards-credit-cards/">
                    <Image
                      src="https://media.topfinanzas.com/images/ads/Top-Blog-Credit-Cards.webp"
                      alt="Best Rewards Credit Cards"
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
                        href="/personal-finance/best-rewards-credit-cards/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Best Rewards Credit Cards in the UK
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/personal-finance/cashback-credit-cards/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Top Cashback Credit Cards
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/personal-finance/credit-card-types-benefits/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Understanding Credit Card Types and Benefits
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/personal-finance/no-annual-fee-credit-cards/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Best No Annual Fee Credit Cards
                      </Link>
                    </li>
                  </ul>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Additional Features and Benefits:
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#db0011] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">No Annual Fee:</span> The
                      HSBC Rewards Credit Card comes with no annual fee,
                      allowing you to earn rewards without worrying about yearly
                      charges eating into the value you receive. This makes it a
                      cost-effective option for regular spenders who want to
                      maximise rewards.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#db0011] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        HSBC Mobile Banking Integration:
                      </span>{" "}
                      Manage your credit card seamlessly through HSBC's
                      award-winning mobile banking app. Check your balance, view
                      transactions, monitor your rewards points, set up payment
                      reminders, and make payments on the go with secure
                      biometric authentication.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#db0011] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Fraud Protection and Security:
                      </span>{" "}
                      Benefit from HSBC's comprehensive fraud monitoring systems
                      that watch for suspicious activity 24/7. You're protected
                      by the Mastercard Zero Liability policy, which means you
                      won't be held responsible for unauthorised transactions
                      made with your card, giving you peace of mind when
                      shopping online or abroad.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#db0011] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Flexible Repayment Options:
                      </span>{" "}
                      Choose how much to repay each month, with the flexibility
                      to pay off your full balance, a fixed amount, or the
                      minimum payment. Setting up a Direct Debit ensures you
                      never miss a payment and helps you maintain a positive
                      credit history.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#db0011] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Purchase Protection:
                      </span>{" "}
                      Enjoy added peace of mind knowing that eligible purchases
                      made with your HSBC Rewards Credit Card benefit from
                      Section 75 protection under the Consumer Credit Act. This
                      means HSBC shares equal responsibility with the retailer
                      for purchases between £100 and £30,000 if something goes
                      wrong.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#db0011] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Online Account Management:
                      </span>{" "}
                      Access your account 24/7 through HSBC's online banking
                      platform. View up-to-date statements, download transaction
                      history, update your contact details, manage Direct
                      Debits, and access customer support whenever you need it.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Understanding the Costs and Charges
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  It's important to understand the costs associated with the
                  HSBC Rewards Credit Card. The card has a representative APR of
                  26.9% (variable), which applies to purchases once your
                  introductory 0% interest period ends, as well as to cash
                  advances and balance transfers after their promotional
                  periods. If you pay off your balance in full each month, you
                  won't pay any interest on purchases, maximising the value of
                  your rewards. Cash withdrawals and balance transfers carry
                  additional fees, and it's worth noting that using your credit
                  card abroad may incur foreign transaction fees. Always check
                  the current fee schedule before using your card for cash
                  advances or international purchases to avoid unexpected
                  charges.
                </p>

                <div className="bg-gray-100 border-l-4 border-[#db0011] p-6 my-8">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 text-left">
                    Representative Example
                  </h3>
                  <div className="space-y-2 text-base text-gray-700 text-left">
                    <p>
                      <strong>Representative 26.9% APR (variable)</strong>
                    </p>
                    <p className="text-sm leading-6">
                      Based on an assumed credit limit of £1,200. The actual
                      rate you receive will depend on your individual
                      circumstances and credit history. Interest is charged on
                      purchases from the date of transaction if you do not pay
                      your balance in full each month.
                    </p>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Who Is This Card Best For?
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  The HSBC Rewards Credit Card is ideally suited for regular
                  spenders who pay off their balance in full each month and want
                  to earn something back on their everyday purchases. It's
                  particularly appealing to existing HSBC customers who value
                  having all their banking in one place, as well as to anyone
                  who appreciates the flexibility of redeeming rewards against
                  any purchase through the Mastercard Pay with Rewards app. The
                  introductory 0% periods on purchases and balance transfers
                  make it attractive for those planning larger purchases or
                  looking to consolidate existing credit card debt. However,
                  it's essential to use the card responsibly—the rewards value
                  can quickly be eroded by interest charges if you carry a
                  balance month to month. For those who can commit to paying in
                  full and want a straightforward rewards programme backed by a
                  major UK bank, the HSBC Rewards Credit Card offers excellent
                  value.
                </p>

                <div className="text-left my-8">
                  <Link href="/financial-solutions/hsbc-rewards-credit-card-requirements">
                    <Button className="bg-[#db0011] hover:bg-red-700 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                      Check Eligibility Requirements
                    </Button>
                  </Link>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8">
                  <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
                    Important Information
                  </h3>
                  <div className="space-y-2 text-sm text-gray-700 text-left">
                    <p>
                      <strong>Credit is subject to status</strong> and
                      affordability assessment. Applicants must be 18 or over
                      and permanent UK residents. Terms and conditions apply.
                    </p>
                    <p>
                      <strong>Representative 26.9% APR (variable).</strong> The
                      rate you receive will depend on your individual
                      circumstances.
                    </p>
                    <p>
                      <strong>Fees apply for foreign transactions.</strong>{" "}
                      Non-HSBC cash machines may also charge a fee. Check the
                      terms and conditions for full details.
                    </p>
                    <p>
                      This information is for guidance purposes only and does
                      not constitute financial advice. You should consider your
                      own circumstances and seek independent financial advice if
                      needed before applying for any credit product.
                    </p>
                  </div>
                </div>
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
