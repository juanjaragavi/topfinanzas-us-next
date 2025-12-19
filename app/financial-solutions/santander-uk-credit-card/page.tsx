import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Santander UK Credit Card: Flexible Rewards and Benefits - Top Finance UK",
    description:
      "The Santander UK Credit Card offers competitive cashback, flexible features, and robust digital banking tools for your everyday spending and financial management.",
    keywords:
      "Santander UK Credit Card, cashback rewards, UK credit cards, everyday spending, Santander Bank, contactless payments, mobile banking",
  };
}

export default function SantanderUKCreditCardPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-4xl font-bold text-gray-800 mb-4 leading-8">
              Santander UK Credit Card: Smart Banking for Modern Life
            </h1>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 font-medium mb-8 leading-5 text-left">
                The Santander UK Credit Card combines competitive cashback
                opportunities with practical features designed to support your
                financial goals while rewarding your everyday spending.
              </p>

              <div id="square01" data-topads data-topads-size="square"></div>

              <hr className="my-8" />

              <div className="space-y-2 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#EC0000] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">Cashback Rewards:</span>{" "}
                    Earn up to 0.5% cashback on eligible purchases, with
                    enhanced rates for spending in selected retail partners.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#EC0000] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">Promotional Offers:</span>{" "}
                    Benefit from competitive introductory rates, including 0%
                    interest on purchases and balance transfers for new
                    customers (terms apply).
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#EC0000] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      No Foreign Transaction Fees:
                    </span>{" "}
                    On selected cards, avoid the typical 2.95% non-sterling
                    transaction fee when making purchases abroad or online in
                    foreign currencies.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#EC0000] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Digital Banking Excellence:
                    </span>{" "}
                    Manage your account through Santander's highly-rated mobile
                    banking app with real-time notifications and comprehensive
                    security features.
                  </div>
                </div>
              </div>

              <div className="text-left my-8">
                <Link href="/financial-solutions/santander-uk-credit-card-requirements">
                  <Button className="bg-[#EC0000] hover:bg-red-700 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/uk/credit-cards/718644935-top_prestamos-y-tarjetas-uk_v1-03.webp"
                  alt="Santander UK Credit Card"
                  width={900}
                  height={507}
                  className="w-full h-auto rounded-xl"
                  loading="eager"
                  priority
                />
              </div>

              <div className="my-6">
                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  The Santander UK Credit Card represents a versatile financial
                  tool from one of Europe's leading banking institutions. With a
                  focus on rewarding everyday spending while providing practical
                  financial flexibility, this card is designed to complement
                  modern lifestyles and diverse financial needs.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Rewarding Your Spending Habits
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  With the Santander UK Credit Card, your everyday purchases
                  become more valuable through the card's cashback program.
                  Cardholders can earn up to 0.5% cashback on eligible spending,
                  with the potential for enhanced rates when shopping with
                  selected retail partners. This cashback is automatically
                  credited to your account, providing a straightforward way to
                  get value from your regular expenditure without complicated
                  points systems. Whether you're grocery shopping, paying bills,
                  or making occasional larger purchases, your spending
                  consistently generates returns.
                </p>

                <hr className="my-8" />

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Flexible Financial Management
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  Santander understands that financial needs vary, which is why
                  their credit card offers competitive introductory rates that
                  can help in various situations. New customers may benefit from
                  0% interest periods on purchases, allowing you to spread the
                  cost of significant expenses without incurring interest
                  charges. Similarly, balance transfer offers provide an
                  opportunity to consolidate existing credit card debt,
                  potentially reducing your interest payments and simplifying
                  your financial management with a single monthly payment.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  International Spending Benefits
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  One of the standout features of selected Santander credit
                  cards is the absence of foreign transaction fees. While many
                  credit cards charge around 2.95% for purchases made in foreign
                  currencies, these Santander cards allow you to shop abroad or
                  with international retailers online without incurring
                  additional charges. This feature can lead to significant
                  savings for frequent travelers or those who regularly shop
                  with overseas retailers, making it a particularly valuable
                  benefit in an increasingly global marketplace.
                </p>

                {/* Related Articles Section */}
                <div className="my-8 p-6 bg-gray-50 rounded-xl border border-gray-200 text-left sm:text-left">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 text-left">
                    Learn More About Credit Cards:
                  </h3>
                  <ul className="space-y-2 list-disc list-inside text-blue-700 text-left">
                    <li className="text-left">
                      <Link
                        href="/personal-finance/cashback-credit-cards/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Best Cashback Credit Cards
                      </Link>
                    </li>
                    <li className="text-left">
                      <Link
                        href="/personal-finance/best-rewards-credit-cards/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Maximising Credit Card Rewards
                      </Link>
                    </li>
                    <li className="text-left">
                      <Link
                        href="/personal-finance/top-credit-cards-0-intro-apr/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Using 0% Intro APR Offers
                      </Link>
                    </li>
                    <li className="text-left">
                      <Link
                        href="/personal-finance/travel-credit-cards/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Top Travel Credit Cards
                      </Link>
                    </li>
                    <li className="text-left">
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
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#EC0000] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Advanced Security Protection:
                      </span>{" "}
                      The card is equipped with chip technology, continuous
                      fraud monitoring, and real-time transaction alerts to
                      protect against unauthorized use. Santander's fraud
                      detection systems work around the clock to identify
                      unusual patterns and potentially fraudulent transactions.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#EC0000] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Digital Wallet Compatibility:
                      </span>{" "}
                      Seamlessly integrate your Santander credit card with
                      digital wallet services like Apple Pay, Google Pay, and
                      Samsung Pay, enabling convenient and secure contactless
                      payments from your smartphone or wearable device.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#EC0000] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Spending Insights:</span>{" "}
                      The Santander mobile app provides detailed breakdowns of
                      your spending patterns, categorizing transactions to help
                      you understand where your money goes and identify
                      opportunities to optimize your finances.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#EC0000] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Global Acceptance:</span>{" "}
                      With Mastercard or Visa network backing (depending on your
                      specific card), the Santander UK Credit Card is accepted
                      at millions of locations worldwide, ensuring payment
                      convenience whether you're shopping locally or
                      internationally.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Enhanced Customer Experience
                </h2>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  Santander prioritizes customer experience through multiple
                  service channels and convenient account management options:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#EC0000] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Award-Winning Mobile App:
                      </span>{" "}
                      Santander's mobile banking application offers intuitive
                      card management, including the ability to temporarily
                      freeze your card if misplaced, set spending limits, and
                      receive instant transaction notifications.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#EC0000] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        24/7 Customer Support:
                      </span>{" "}
                      Access round-the-clock assistance for urgent card matters,
                      ensuring help is available whenever you need it,
                      regardless of time zones or travel situations.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  A Balanced Financial Tool
                </h2>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  The Santander UK Credit Card offers a balanced combination of
                  practical benefits, financial flexibility, and everyday
                  rewards. It's designed to appeal to a broad range of
                  customers, from those seeking simple cashback on their
                  spending to international travelers looking to avoid foreign
                  transaction fees. The card's promotional offers provide
                  valuable opportunities to manage larger purchases or existing
                  debt, while its digital features ensure convenient and secure
                  account management.
                </p>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  Whether you're an existing Santander customer looking to
                  expand your banking relationship or someone attracted by the
                  card's specific features, it offers a compelling package that
                  combines financial utility with tangible rewards. The
                  straightforward cashback system ensures you get value from
                  your spending without navigating complex redemption processes,
                  while the potential absence of foreign transaction fees
                  represents significant savings for international spenders.
                </p>

                <div className="text-left my-8">
                  <Link href="/financial-solutions/santander-uk-credit-card-requirements">
                    <Button className="bg-[#EC0000] hover:bg-red-700 text-white font-medium text-md py-2 px-8 rounded-full w-full">
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
