import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Virgin Money Credit Card: Innovative Rewards and Benefits - Top Finance UK",
    description:
      "The Virgin Money Credit Card offers innovative rewards, competitive rates, and distinctive benefits designed for modern consumers seeking both style and substance.",
    keywords:
      "Virgin Money Credit Card, UK credit cards, rewards cards, cashback, Virgin rewards, Virgin Red, travel perks, money transfer",
  };
}

export default function VirginMoneyCreditCardPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-4xl font-bold text-gray-800 mb-4 leading-8">
              Virgin Money Credit Card: Distinctive Banking with Style and
              Substance
            </h1>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 font-medium mb-8 leading-5 text-left">
                The Virgin Money Credit Card combines innovative features,
                exclusive rewards, and competitive rates with the distinctive
                style that defines the Virgin brand.
              </p>

              <div id="square01" data-topads data-topads-size="square"></div>

              <hr className="my-8" />

              <div className="space-y-2 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#CC0000] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">Virgin Red Points:</span>{" "}
                    Earn Virgin Red points on your spending that can be redeemed
                    for experiences, travel with Virgin Atlantic, retail
                    vouchers, and more.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#CC0000] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">Exclusive Offers:</span>{" "}
                    Access to exclusive Virgin Group discounts and priority
                    booking for Virgin experiences and events, from concert
                    tickets to holiday packages.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#CC0000] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Competitive Transfer Rates:
                    </span>{" "}
                    Take advantage of balance transfer and money transfer
                    opportunities with competitive promotional rates to help
                    manage existing debt or make large purchases.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#CC0000] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">Advanced Mobile App:</span>{" "}
                    Manage your account through Virgin Money's award-winning
                    mobile app, featuring spend tracking, card controls, and
                    digital wallet integration.
                  </div>
                </div>
              </div>

              <div className="text-left my-8">
                <Link href="/financial-solutions/virgin-money-credit-card-requirements">
                  <Button className="bg-[#CC0000] hover:bg-red-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/uk/credit-cards/718645561-top_prestamos-y-tarjetas-uk_v1-08.webp"
                  alt="Virgin Money Credit Card"
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
                  The Virgin Money Credit Card stands out in the UK banking
                  landscape with its distinctive approach that combines
                  practical financial benefits with the innovative style that
                  the Virgin brand is known for. This card is designed for
                  consumers who want their financial products to offer both
                  substance and personality.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Rewarding Your Loyalty
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  At the heart of the Virgin Money Credit Card's appeal is its
                  reward structure centered around the Virgin Red loyalty
                  program. Cardholders earn Virgin Red points on their everyday
                  spending, which can be redeemed across the Virgin Group's
                  diverse portfolio of companies and beyond. Whether you're
                  interested in flights with Virgin Atlantic, experience days,
                  retail vouchers, or charitable donations, the flexibility of
                  this rewards system allows you to choose benefits that align
                  with your lifestyle and preferences. This approach transforms
                  regular spending into opportunities for experiences and
                  benefits that extend beyond traditional cashback.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Exclusive Virgin Benefits
                </h2>

                <hr className="my-8" />

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  One of the unique advantages of the Virgin Money Credit Card
                  is access to exclusive offers and priority booking for Virgin
                  experiences and events. Cardholders can enjoy discounts across
                  Virgin companies, early access to concert tickets through
                  Virgin Red, and special rates on Virgin Holidays packages.
                  These benefits extend the card's value beyond everyday
                  purchases, creating a lifestyle proposition that resonates
                  particularly well with those who already engage with other
                  Virgin brands. The integration with the broader Virgin
                  ecosystem provides a level of added value that distinguishes
                  this card from more conventional banking products.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Practical Financial Features
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  While style and rewards are important aspects of the Virgin
                  Money Credit Card, it doesn't compromise on practical
                  financial features. The card offers competitive promotional
                  rates on balance transfers and money transfers, providing
                  valuable tools for managing existing credit card debt or
                  funding larger purchases. These features make the card a
                  practical choice for those looking to consolidate debt or
                  spread the cost of significant expenses. Additionally, the
                  absence of foreign transaction fees on selected card variants
                  provides substantial savings for international travelers or
                  those who regularly shop with overseas retailers.
                </p>

                {/* Ad Block: Credit Cards */}
                <div className="my-8 text-left sm:text-left">
                  <Link href="/personal-finance/credit-card-types-benefits/">
                    <Image
                      src="https://media.topfinanzas.com/images/ads/Top-Blog-Credit-Cards.webp"
                      alt="Virgin Money Credit Card"
                      width={1000}
                      height={563}
                      className="mx-auto w-full md:w-8/12 h-auto rounded-xl"
                      priority
                    />
                  </Link>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Additional Features:
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#CC0000] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Distinctive Card Design:
                      </span>{" "}
                      The Virgin Money Credit Card features eye-catching designs
                      that stand out from traditional banking cards, reflecting
                      the brand's innovative approach to financial services and
                      adding a touch of personality to your wallet.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#CC0000] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Digital Wallet Integration:
                      </span>{" "}
                      Seamlessly add your Virgin Money Credit Card to digital
                      wallets like Apple Pay, Google Pay, and Samsung Pay for
                      convenient and secure contactless payments using your
                      smartphone or smartwatch.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#CC0000] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Enhanced Security Features:
                      </span>{" "}
                      Benefit from advanced security measures including
                      real-time fraud monitoring, transaction notifications, and
                      the ability to freeze your card instantly through the
                      mobile app if it's lost or stolen.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#CC0000] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Fee-Free Currency Conversion:
                      </span>{" "}
                      Selected Virgin Money credit cards offer fee-free spending
                      abroad, with no foreign transaction fees charged on
                      purchases made in foreign currencies, providing
                      significant savings for international travelers.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Digital Banking Excellence
                </h2>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  Virgin Money's commitment to modern banking is evident in its
                  digital capabilities:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#CC0000] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Award-Winning Mobile App:
                      </span>{" "}
                      The Virgin Money app provides comprehensive account
                      management capabilities, including real-time balance
                      updates, spending categorization, and budgeting tools to
                      help you maintain control of your finances.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#CC0000] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Spend Tracking:</span>{" "}
                      Gain insights into your spending patterns with automated
                      categorization of transactions, helping you understand
                      where your money goes and identify opportunities to
                      optimize your finances.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#CC0000] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Instant Notifications:
                      </span>{" "}
                      Receive real-time alerts for transactions, payment
                      reminders, and account updates, enhancing security and
                      helping you stay on top of your credit card activity.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  A Different Kind of Banking
                </h2>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  The Virgin Money Credit Card represents the brand's
                  distinctive approach to banking that combines style,
                  innovation, and substance. It offers a compelling blend of
                  practical financial features and lifestyle benefits that
                  reflect Virgin's broader ethos. The integration with the
                  Virgin Red loyalty program adds a dimension of value that
                  extends beyond traditional banking relationships, creating
                  opportunities to turn everyday spending into memorable
                  experiences.
                </p>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  Whether you're attracted by the rewards, the exclusive Virgin
                  Group benefits, the competitive rates, or simply the
                  distinctive style, the Virgin Money Credit Card offers a
                  refreshing alternative to conventional banking products. It's
                  particularly well-suited to those who appreciate brands with
                  personality and who want their financial products to reflect
                  their lifestyle values while still delivering on practical
                  needs.
                </p>

                <div className="text-left my-8">
                  <Link href="/financial-solutions/virgin-money-credit-card-requirements">
                    <Button className="bg-[#CC0000] hover:bg-red-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
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
