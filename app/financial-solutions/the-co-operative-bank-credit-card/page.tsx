import ResponsiveImage from "@/components/ui/responsive-image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "The Co-operative Bank Credit Card: Ethical Banking with Cashback Rewards - Top Finance UK",
    description:
      "Discover The Co-operative Members Credit Card offering 0.5% cashback at Co-op stores, 0.3% everywhere else, with no annual fee. Join the UK's original ethical bank today.",
    keywords:
      "Co-operative Bank credit card, Co-op Members credit card, cashback credit card, ethical credit card, UK credit cards, no annual fee credit card, Co-op cashback",
  };
}

export default function CooperativeBankCreditCardPage() {
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
              The Co-operative Bank Credit Card: Ethical Banking with Cashback
              Rewards
            </h1>

            <div className="my-8 text-left sm:text-left">
              <p className="text-left text-lg text-gray-800 font-medium mb-8 leading-5">
                The Co-operative Members Credit Card combines ethical banking
                principles with practical cashback rewards, offering Co-op
                Members a responsible way to manage spending while earning
                rewards on everyday purchases.
              </p>

              <div id="square01" data-topads data-topads-size="square"></div>

              <hr className="my-8" />

              <div className="space-y-2 my-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#007db8] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Enhanced Cashback Rewards:
                    </span>{" "}
                    Earn 0.5% cashback on purchases at Co-op food stores and
                    0.3% cashback everywhere else Visa is accepted.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#007db8] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">No Annual Fee:</span> Enjoy
                    all the benefits with absolutely no annual fee, making it an
                    affordable choice for everyday spending.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#007db8] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Ethical Banking Values:
                    </span>{" "}
                    Bank with the UK's original ethical bank, supporting values
                    and causes that matter to you since 1872.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#007db8] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Flexible Balance Transfers:
                    </span>{" "}
                    Transfer existing credit card balances with no balance
                    transfer fee at 18.2% APR.
                  </div>
                </div>
              </div>

              <div className="text-left my-8">
                <Link href="/financial-solutions/the-co-operative-bank-credit-card-requirements">
                  <Button className="bg-[#007db8] hover:bg-green-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <div className="my-8 text-left sm:text-left">
                <ResponsiveImage
                  src="https://media.topfinanzas.com/images/uk/the-co-operative-bank-credit-card.webp"
                  alt="The Co-operative Bank Credit Card"
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
                  The Co-operative Members Credit Card represents a unique
                  combination of ethical banking principles and practical
                  financial benefits. As a product from the UK's original
                  ethical bank, established in 1872, this credit card allows you
                  to align your spending with your values while earning cashback
                  rewards on everyday purchases. Exclusively available to Co-op
                  Members, this card demonstrates that responsible banking and
                  attractive rewards can go hand in hand.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Cashback Rewards That Make a Difference
                </h2>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  With The Co-operative Members Credit Card, every purchase
                  contributes to your cashback earnings. You'll receive 0.5%
                  cashback when shopping at Co-op food stores, rewarding your
                  loyalty to Co-op products. Additionally, you'll earn 0.3%
                  cashback on all other purchases wherever Visa is accepted,
                  ensuring that your everyday spending works harder for you.
                  This dual-rate cashback structure means you're constantly
                  earning rewards, whether you're doing your weekly food
                  shopping or making purchases online and in-store across the
                  UK.
                </p>

                <hr className="my-8" />

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Banking with Values and Ethics
                </h2>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  What truly sets The Co-operative Bank apart is its unwavering
                  commitment to ethical banking. Since creating the UK's first
                  customer-led Ethical Policy in 1992, the bank has given
                  customers a voice in how their money is used. Unlike many
                  traditional banks, The Co-operative Bank understands the power
                  your money holds in making positive differences to the planet,
                  its people, and our communities. When you use this credit
                  card, you're not just making purchases—you're supporting a
                  bank that stands up for causes that matter, from environmental
                  sustainability to social responsibility.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Transparent and Competitive Rates
                </h2>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  The Co-operative Members Credit Card offers a representative
                  APR of 18.2% (variable), which is competitive for a rewards
                  credit card in the UK market. This rate applies to both
                  purchases and balance transfers, providing consistency and
                  transparency in how interest is calculated. The card comes
                  with no annual fee and no balance transfer fee, making it an
                  excellent choice for those looking to consolidate existing
                  credit card debt or simply manage their spending more
                  effectively without incurring additional charges.
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
                        href="/personal-finance/best-rewards-credit-cards/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Maximizing Credit Card Rewards
                      </Link>
                    </li>
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
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#007db8] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Digital Wallet Integration:
                      </span>{" "}
                      Seamlessly works with Apple Pay, Google Pay, and Samsung
                      Wallet for convenient contactless payments on the go.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#007db8] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Flexible Credit Limits:
                      </span>{" "}
                      Minimum credit limit of £500 with maximum limits based on
                      affordability assessments tailored to your circumstances.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#007db8] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Online Account Management:
                      </span>{" "}
                      Access comprehensive online and mobile banking facilities
                      to manage your card, track spending, and view statements
                      24/7.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#007db8] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Enhanced Card Security:
                      </span>{" "}
                      Benefit from advanced fraud protection, secure online
                      payment verification, and 24/7 monitoring to keep your
                      account safe.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Exclusive Membership Benefits
                </h2>

                <p className="text-left text-gray-800 text-sm leading-5 mb-4">
                  As an exclusive offering for Co-op Members, this credit card
                  strengthens your relationship with The Co-operative Group.
                  Becoming a Co-op Member costs just £1 and opens the door to
                  this valuable credit card alongside other membership benefits
                  across Co-op services. The cashback you earn is automatically
                  credited to your account, making it effortless to benefit from
                  your everyday spending. Whether you're a regular Co-op shopper
                  or simply appreciate the ethical stance of The Co-operative
                  Bank, this membership requirement ensures that cardholders
                  share common values and support the Co-op community.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Representative Example and Important Information
                </h2>

                <p className="text-left text-gray-800 text-sm leading-5 mb-4">
                  <strong>Representative Example:</strong> 18.2% APR
                  representative (variable). Based on an assumed credit limit of
                  £1,200 and a purchase rate of 18.2% per annum (variable). This
                  means if you borrow £1,200 and make no additional purchases or
                  payments, you would be charged interest at 18.2% per annum on
                  the outstanding balance.
                </p>

                <p className="text-left text-gray-800 text-sm leading-5 mb-4">
                  Please note that approval is subject to status and based on a
                  credit check and assessment of your personal circumstances. A
                  minimum annual income of £10,000 is required, and you must be
                  a Co-op Member to apply. Cash withdrawals incur a fee of 3% of
                  the amount withdrawn (minimum £3), and cash withdrawals abroad
                  incur an additional 2.75% currency conversion fee. Missing
                  payments or exceeding your credit limit may result in charges
                  of £10 per occurrence.
                </p>

                <div className="my-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 text-left">
                  <p className="text-sm text-gray-800 leading-5">
                    <strong>Important:</strong> You should only apply for credit
                    that you can afford to repay. Making only minimum repayments
                    can lead to persistent debt and increased interest charges
                    over time. This information is for general guidance only and
                    does not constitute financial advice. You should consider
                    seeking independent financial advice before applying for any
                    credit product.
                  </p>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Why Choose The Co-operative Bank Credit Card?
                </h2>

                <p className="text-left text-gray-800 text-sm leading-5 mb-4">
                  The Co-operative Members Credit Card is more than just a
                  payment method—it's a statement about how you want to manage
                  your finances. By combining practical cashback rewards with
                  ethical banking principles, this card allows you to earn as
                  you spend while supporting a bank that prioritises people and
                  planet over profit. With no annual fee, competitive interest
                  rates, and the backing of the UK's original ethical bank, this
                  credit card offers a compelling alternative to traditional
                  credit cards. Whether you're consolidating existing debt with
                  fee-free balance transfers or simply looking for a responsible
                  way to manage everyday spending, The Co-operative Members
                  Credit Card delivers value, ethics, and flexibility in equal
                  measure.
                </p>

                <div className="text-left my-8">
                  <Link href="/financial-solutions/the-co-operative-bank-credit-card-requirements">
                    <Button className="bg-[#007db8] hover:bg-blue-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
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
