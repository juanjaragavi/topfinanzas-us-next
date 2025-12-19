import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "M&S Rewards Credit Card: Earn Points on Every Purchase - Top Finance UK",
    description:
      "Discover the M&S Rewards Credit Card offering reward points on all spending at M&S and beyond, exclusive member benefits, and competitive rates. Representative 23.9% APR (variable).",
    keywords:
      "M&S credit card, Marks and Spencer credit card, M&S Rewards, credit cards UK, rewards credit card, shopping credit card, retail credit card, M&S points",
  };
}

export default function MSRewardsCreditCardPage() {
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
              M&S Rewards Credit Card: Turn Your Shopping Into Valuable Points
            </h1>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 font-medium mb-8 leading-5 text-left">
                The M&S Rewards Credit Card is designed for shoppers who want to
                maximise value on their everyday spending whilst earning points
                at one of Britain's most trusted retailers. Whether you're
                purchasing clothing, homeware, or food, this card transforms
                every transaction into rewarding points that can be spent across
                the M&S family of brands.
              </p>

              <div id="square01" data-topads data-topads-size="square"></div>

              <hr className="my-8" />

              <div className="space-y-2 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#005640] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Earn Points Everywhere:
                    </span>{" "}
                    Collect reward points on every purchase you make, whether
                    shopping at M&S stores, online, or anywhere else that
                    accepts Mastercard, turning routine spending into tangible
                    benefits.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#005640] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Exclusive M&S Benefits:
                    </span>{" "}
                    Enjoy special cardholder privileges including early access
                    to sales, exclusive offers, and bonus point events
                    throughout the year at M&S stores and online.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#005640] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Competitive Interest Rates:
                    </span>{" "}
                    Benefit from competitive rates with a representative 23.9%
                    APR (variable), making this a sensible choice for managing
                    your everyday spending and building credit.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#005640] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">No Annual Fee:</span> Enjoy
                    all the benefits of the M&S Rewards Credit Card with no
                    annual fee to pay, ensuring your rewards aren't diminished
                    by unnecessary charges.
                  </div>
                </div>
              </div>

              <div className="text-left my-8">
                <Link href="/financial-solutions/ms-rewards-credit-card-requirements">
                  <Button className="bg-[#005640] hover:bg-[#003d2f] text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <hr className="my-8" />

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/uk/ms-rewards-credit-card.webp"
                  alt="M&S Rewards Credit Card"
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
                  The M&S Rewards Credit Card represents a compelling
                  proposition for regular M&S shoppers and anyone who
                  appreciates earning rewards on their everyday spending. As
                  part of the broader M&S Bank offering from one of Britain's
                  most established and trusted retailers, this card combines
                  practical financial benefits with the familiarity and
                  reliability of the Marks & Spencer brand. Unlike generic
                  rewards cards, the M&S Rewards Credit Card is specifically
                  designed to enhance your shopping experience whilst providing
                  the flexibility and convenience of a Mastercard accepted
                  worldwide.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  A Rewarding Approach to Everyday Spending
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  At the heart of the M&S Rewards Credit Card is a
                  straightforward rewards programme that transforms every
                  purchase into valuable points. Whether you're buying your
                  weekly food shop at M&S Food, refreshing your wardrobe with
                  M&S clothing, or purchasing items from any other retailer that
                  accepts Mastercard, you'll be earning points that accumulate
                  towards rewards you can actually use. This universal earning
                  capability means you're not limited to shopping only at M&S to
                  benefit from your card—though spending with M&S typically
                  offers enhanced earning rates that make your loyalty even more
                  rewarding.
                </p>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  The points you earn through the M&S Rewards Credit Card can be
                  redeemed for vouchers to spend across the entire M&S
                  ecosystem, including clothing, homeware, food, and even online
                  purchases. This flexibility ensures that your rewards align
                  with your lifestyle and shopping preferences, whether you're
                  planning a special occasion outfit, restocking your pantry, or
                  treating yourself to something from M&S's extensive homeware
                  collection. The redemption process is designed to be
                  straightforward and user-friendly, allowing you to convert
                  your accumulated points into tangible value without complex
                  terms or restrictions.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Exclusive Cardholder Benefits
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  Beyond the core rewards programme, M&S Rewards Credit Card
                  holders enjoy a range of exclusive benefits designed to
                  enhance your shopping experience. These typically include
                  early access to M&S sales, allowing you to browse and purchase
                  popular items before they're available to the general public—a
                  particularly valuable benefit during seasonal sales when the
                  best items can sell out quickly. Cardholders also receive
                  exclusive offers and promotions throughout the year, from
                  bonus point events to special discounts on selected products,
                  ensuring that your relationship with M&S continues to deliver
                  value well beyond your initial card application.
                </p>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  The card also integrates seamlessly with your M&S online
                  account, making it easy to track your points balance, view
                  your transaction history, and manage your rewards all in one
                  place. This digital integration reflects M&S Bank's commitment
                  to providing a modern, convenient banking experience that fits
                  with how customers actually shop and manage their finances in
                  2025. Whether you prefer shopping in-store or online, the M&S
                  Rewards Credit Card adapts to your preferences whilst ensuring
                  you never miss out on earning or redeeming your well-deserved
                  rewards.
                </p>

                <div className="my-8 text-left sm:text-left">
                  <Link href="/personal-finance/credit-card-types-benefits/">
                    <Image
                      src="https://media.topfinanzas.com/images/ads/Top-Blog-Credit-Cards.webp"
                      alt="Credit Card Guide"
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
                    Explore More Credit Card Options:
                  </h3>
                  <ul className="space-y-2 list-disc list-inside text-blue-700">
                    <li>
                      <Link
                        href="/financial-solutions/john-lewis-partnership-card"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        John Lewis Partnership Card
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/financial-solutions/tesco-bank-clubcard-credit-cards"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Tesco Clubcard Credit Card
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/personal-finance/best-rewards-credit-cards/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Best Rewards Credit Cards Guide
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/personal-finance/cashback-credit-cards/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Cashback Credit Cards Explained
                      </Link>
                    </li>
                  </ul>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Competitive Rates and Transparent Terms
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  The M&S Rewards Credit Card offers a representative APR of
                  23.9% (variable), which is competitive within the rewards
                  credit card market. This rate applies to both purchases and
                  balance transfers, providing clarity and consistency in how
                  interest is calculated. Whilst it's always wise to clear your
                  balance in full each month to avoid interest charges and
                  maximise the value of your rewards, M&S Bank's transparent
                  approach to fees and charges means you'll always understand
                  exactly what you're paying for if you do need to carry a
                  balance.
                </p>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  One of the most appealing aspects of the M&S Rewards Credit
                  Card is the absence of an annual fee. Many rewards credit
                  cards, particularly those offering premium benefits, charge
                  annual fees that can significantly erode the value of earned
                  rewards. By eliminating this cost, M&S ensures that every
                  point you earn translates directly into value without being
                  offset by recurring charges. This makes the card particularly
                  suitable for moderate spenders who want to enjoy rewards
                  without committing to high annual spending thresholds or
                  paying premium fees.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Additional Features:
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#005640] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Section 75 Protection:
                      </span>{" "}
                      Benefit from Section 75 of the Consumer Credit Act, which
                      provides protection for purchases between £100 and
                      £30,000. If the retailer goes out of business or fails to
                      deliver goods or services, you may be able to claim a
                      refund from M&S Bank, adding an extra layer of security to
                      your significant purchases.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#005640] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Contactless Payments:
                      </span>{" "}
                      Use contactless payment technology for quick and
                      convenient transactions up to the UK contactless limit,
                      perfect for everyday purchases at M&S Food, cafés, and
                      retail outlets across the country.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#005640] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Digital Wallet Integration:
                      </span>{" "}
                      Add your M&S Rewards Credit Card to Apple Pay, Google Pay,
                      or Samsung Pay for seamless mobile payments, allowing you
                      to shop and earn rewards without needing to carry your
                      physical card.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#005640] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Online Account Management:
                      </span>{" "}
                      Access your account 24/7 through M&S Bank's online banking
                      platform and mobile app, allowing you to check your
                      balance, view transactions, track your rewards points,
                      make payments, and manage your account settings from
                      anywhere at any time.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Building Credit with a Trusted Name
                </h2>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  Using the M&S Rewards Credit Card responsibly can help build
                  or maintain a strong credit history. By making regular
                  purchases and clearing your balance on time each month (or at
                  least making the minimum payment), you demonstrate to credit
                  reference agencies that you can manage credit responsibly.
                  This positive credit behaviour can improve your credit score
                  over time, making it easier to access other credit products
                  with favourable terms in the future, from mortgages to
                  personal loans.
                </p>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  M&S Bank, backed by the reputation and stability of Marks &
                  Spencer, offers the reassurance of dealing with an established
                  British institution. The bank is authorised and regulated by
                  the Financial Conduct Authority (FCA), ensuring that your card
                  and account are subject to the same regulatory protections as
                  any other mainstream UK credit card issuer. This combination
                  of reward-earning potential, competitive terms, and the
                  backing of a trusted British brand makes the M&S Rewards
                  Credit Card an appealing choice for those who value both
                  financial benefits and peace of mind.
                </p>

                <div className="my-8 p-6 bg-blue-50 border-l-4 border-[#005640] text-left">
                  <h3 className="text-md font-semibold text-gray-800 mb-2">
                    Representative Example
                  </h3>
                  <p className="text-sm text-gray-700 mb-2">
                    Representative 23.9% APR (variable)
                  </p>
                  <p className="text-xs text-gray-600 leading-5">
                    If you borrow £1,200 at a representative APR of 23.9%
                    (variable) and make monthly repayments over 12 months, you
                    would pay 12 monthly instalments of approximately £113.43.
                    The total amount repayable would be £1,361.16, which
                    includes interest of £161.16. This is a representative
                    example only. Your actual rate and repayments may vary based
                    on your individual circumstances and creditworthiness.
                  </p>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Who Should Consider the M&S Rewards Credit Card?
                </h2>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  This card is particularly well-suited to individuals who
                  regularly shop at M&S or who value the convenience of earning
                  rewards on all their spending. If you're someone who
                  appreciates quality products from a trusted British retailer
                  and wants your credit card to work harder for you, the M&S
                  Rewards Credit Card offers a practical and rewarding solution.
                  It's also an excellent choice for those who prefer simplicity
                  in their rewards programme—rather than navigating complex
                  tiered earning rates or category restrictions, you earn points
                  on everything, everywhere, making the card easy to understand
                  and use.
                </p>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  Whether you're new to credit cards or looking to add a rewards
                  card to your financial toolkit, the M&S Rewards Credit Card
                  combines competitive rates, valuable benefits, and the
                  reliability of an established British institution. By turning
                  your everyday spending into M&S rewards, you're not just
                  making purchases—you're building towards vouchers that can be
                  used for the things you love at one of Britain's favourite
                  retailers.
                </p>

                <div className="text-left my-8">
                  <Link href="/financial-solutions/ms-rewards-credit-card-requirements">
                    <Button className="bg-[#005640] hover:bg-[#003d2f] text-white font-medium text-md py-2 px-8 rounded-full w-full">
                      Check Eligibility Requirements
                    </Button>
                  </Link>
                </div>

                <div className="my-8 p-6 bg-yellow-50 border-l-4 border-yellow-400 text-left">
                  <p className="text-xs text-gray-700 leading-5">
                    <span className="font-semibold">
                      Important Information:
                    </span>{" "}
                    Credit is subject to status and affordability. Applicants
                    must be UK residents aged 18 or over. The representative APR
                    is 23.9% (variable). Credit cards should be used
                    responsibly. You should only borrow what you can afford to
                    repay. Missing payments or paying only the minimum amount
                    each month will increase the amount of interest you pay and
                    the time it takes to repay your balance. This information is
                    for guidance purposes only and does not constitute financial
                    advice. You should consider seeking independent financial
                    advice before applying for any credit product. M&S Bank is a
                    trading name of Marks & Spencer Financial Services plc.
                    Authorised by the Prudential Regulation Authority and
                    regulated by the Financial Conduct Authority and the
                    Prudential Regulation Authority.
                  </p>
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
