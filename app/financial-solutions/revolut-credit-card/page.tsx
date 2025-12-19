import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Revolut Credit Card: Global-First Fintech Solution - Top Finance UK",
    description:
      "The Revolut Credit Card offers multi-currency capabilities, powerful global features, and real-time control designed for international lifestyles and digital-first consumers.",
    keywords:
      "Revolut Credit Card, UK fintech, multi-currency card, global banking, Revolut, exchange rates, travel benefits, international spending",
  };
}

export default function RevolutCreditCardPage() {
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
              Revolut Credit Card: Global Banking Without Boundaries
            </h1>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 font-medium mb-8 leading-5 text-left">
                The Revolut Credit Card extends the company's innovative fintech
                approach to credit, offering a globally-minded card with
                multi-currency capabilities, competitive exchange rates, and
                real-time control.
              </p>

              <div id="square01" data-topads data-topads-size="square"></div>

              <hr className="my-8" />

              <div className="space-y-2 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#191C33] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Fee-Free Global Spending:
                    </span>{" "}
                    Make purchases worldwide with no foreign transaction fees
                    and benefit from Revolut's competitive interbank exchange
                    rates for truly global spending power.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#191C33] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Multi-Currency Capability:
                    </span>{" "}
                    Hold and spend in 30+ currencies directly from your credit
                    line, avoiding traditional currency conversion fees and
                    simplifying international finances.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#191C33] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Advanced Security Controls:
                    </span>{" "}
                    Take control of your card security with features like
                    location-based security, disposable virtual cards for online
                    shopping, and real-time transaction notifications.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#191C33] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">Cashback & Perks:</span>{" "}
                    Earn cashback on everyday spending and access special perks
                    like airport lounge access, travel insurance, and exclusive
                    merchant offers based on your subscription tier.
                  </div>
                </div>
              </div>

              <div className="text-left my-8">
                <Link href="/financial-solutions/revolut-credit-card-requirements">
                  <Button className="bg-[#191C33] hover:bg-blue-900 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/uk/credit-cards/718645626-top_prestamos-y-tarjetas-uk_v1-10.webp"
                  alt="Revolut Credit Card"
                  width={900}
                  height={507}
                  className="w-full h-auto rounded-xl"
                  loading="lazy"
                  quality={80}
                />
              </div>

              <div className="my-6">
                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  The Revolut Credit Card represents a natural extension of
                  Revolut's innovative approach to financial services. As one of
                  the world's fastest-growing fintech companies, Revolut has
                  built its reputation on breaking down financial barriers
                  across borders. The Revolut Credit Card carries this mission
                  forward, offering a globally-minded credit solution that works
                  seamlessly wherever you are.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Truly Global Spending Power
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  At the core of the Revolut Credit Card's appeal is its global
                  functionality. Unlike traditional credit cards that typically
                  charge around 3% for foreign transactions, the Revolut Credit
                  Card offers fee-free spending abroad in multiple currencies.
                  This is complemented by Revolut's competitive exchange rates,
                  which are typically much closer to the interbank rate than
                  those offered by traditional banks. For frequent travelers or
                  those who regularly make international purchases, these
                  savings can be substantial over time, effectively providing a
                  hidden discount on all your global transactions.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Multi-Currency Flexibility
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  The Revolut Credit Card takes international functionality a
                  step further with its multi-currency capability. Unlike
                  conventional credit cards that process all transactions in
                  your home currency, Revolut allows you to hold and spend in
                  over 30 currencies directly from your credit line. This
                  feature provides unprecedented flexibility for those who
                  travel frequently, work with international clients, or simply
                  shop from global retailers. By eliminating currency conversion
                  complexity and allowing you to spend in local currencies, the
                  Revolut Credit Card provides both convenience and potential
                  cost savings through better exchange rates.
                </p>

                <hr className="my-8" />

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Next-Generation Security
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  Security is reimagined with the Revolut Credit Card through a
                  suite of innovative features designed for the digital age. The
                  card offers location-based security that can match your card's
                  location with your phone's GPS to prevent fraud. For online
                  shopping, Revolut provides disposable virtual cards that
                  automatically change details after each transaction,
                  protecting you from data breaches. These advanced measures are
                  combined with instant transaction notifications and the
                  ability to freeze and unfreeze your card with a single tap,
                  putting security control literally at your fingertips.
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
                  <ul className="space-y-2 list-disc list-inside text-blue-700 text-left">
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
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#191C33] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Tiered Rewards System:
                      </span>{" "}
                      Access different levels of rewards and benefits based on
                      your Revolut subscription tier. Standard users enjoy basic
                      cashback while Premium and Metal customers unlock enhanced
                      rates and exclusive perks like airport lounge access,
                      comprehensive travel insurance, and priority customer
                      support.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#191C33] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Smart Analytics:</span>{" "}
                      Gain insights into your spending habits with automatically
                      categorized transactions, detailed spending breakdowns by
                      category and merchant, and personalized budgeting tools.
                      These analytics help you understand and optimize your
                      financial behavior in real-time.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#191C33] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Bill Split Function:
                      </span>{" "}
                      Easily split bills and expenses with friends directly
                      through the Revolut app, regardless of whether they're
                      Revolut users themselves. This social functionality
                      simplifies group payments for dining, travel, or shared
                      household expenses.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#191C33] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Global ATM Withdrawals:
                      </span>{" "}
                      Access cash worldwide with competitive ATM withdrawal
                      limits and favorable exchange rates. Premium and Metal
                      customers enjoy enhanced monthly allowances for fee-free
                      ATM withdrawals, providing additional flexibility when
                      traveling.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Seamless Digital Experience
                </h2>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  True to its fintech origins, Revolut provides a fully digital
                  experience:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#191C33] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Intuitive Mobile App:
                      </span>{" "}
                      Manage every aspect of your credit card through Revolut's
                      highly-rated mobile app, offering a clean interface, quick
                      access to key features, and comprehensive control over
                      your account settings and security preferences.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#191C33] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        In-App Customer Support:
                      </span>{" "}
                      Access customer service directly through the app via chat,
                      with premium tiers offering priority service for more
                      immediate assistance. This digital-first approach means
                      you can resolve issues without phone calls or branch
                      visits, regardless of your location.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#191C33] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Seamless Ecosystem Integration:
                      </span>{" "}
                      Experience smooth integration with Revolut's broader
                      financial ecosystem, including current accounts, savings
                      vaults, investments, cryptocurrency trading, and
                      international money transfers, creating a comprehensive
                      financial platform accessible from a single app.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Banking for a Borderless World
                </h2>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  The Revolut Credit Card embodies the company's mission to
                  build a financial platform without borders or boundaries. It's
                  designed for modern, globally-minded consumers who expect
                  their financial tools to work seamlessly wherever they are in
                  the world. By eliminating traditional friction points like
                  foreign transaction fees, currency conversion costs, and
                  geographic restrictions, Revolut has created a credit card
                  that truly reflects how people live, work, and travel in
                  today's interconnected world.
                </p>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  Whether you're a frequent international traveler, someone who
                  regularly shops from global retailers, or simply a consumer
                  who values innovative financial tools with transparent
                  pricing, the Revolut Credit Card offers a compelling
                  alternative to traditional credit products. Its combination of
                  global functionality, advanced security features, and
                  digital-first experience creates a card that's as comfortable
                  being used across borders as it is for everyday domestic
                  spending.
                </p>

                <div className="text-left my-8">
                  <Link href="/financial-solutions/revolut-credit-card-requirements">
                    <Button className="bg-[#191C33] hover:bg-blue-900 text-white font-medium text-md py-2 px-8 rounded-full w-full">
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
