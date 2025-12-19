import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title: "NatWest Credit Card: Versatile Banking Solutions - Top Finance UK",
    description:
      "The NatWest Credit Card offers flexible rewards, secure spending, and practical features designed to support your everyday financial needs.",
    keywords:
      "NatWest Credit Card, UK credit cards, everyday spending, rewards programme, NatWest Bank, secure banking, contactless payments",
  };
}

export default function NatWestCreditCardPage() {
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
              NatWest Credit Card: Versatile Banking for Your Lifestyle
            </h1>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 font-medium mb-8 leading-5 text-left">
                The NatWest Credit Card delivers a practical combination of
                rewards, security features, and financial flexibility designed
                to support your everyday spending and special purchases.
              </p>

              <div id="square01" data-topads data-topads-size="square"></div>

              <hr className="my-8" />

              <div className="space-y-2 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#42145F] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">MyRewards Programme:</span>{" "}
                    Earn rewards points on eligible purchases that can be
                    redeemed for cashback, retail vouchers, or experiences.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#42145F] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">Promotional Offers:</span>{" "}
                    Access to 0% interest periods on purchases and balance
                    transfers for new customers (terms apply).
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#42145F] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Advanced Security Features:
                    </span>{" "}
                    Enhanced fraud protection with real-time monitoring and
                    instant notifications for suspicious transactions.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#42145F] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">Digital Integration:</span>{" "}
                    Seamless management through the award-winning NatWest mobile
                    banking app with features like card freezing and spending
                    insights.
                  </div>
                </div>
              </div>

              <div className="text-left my-8">
                <Link href="/financial-solutions/natwest-credit-card-requirements">
                  <Button className="bg-[#42145F] hover:bg-purple-900 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/uk/credit-cards/718644866-top_prestamos-y-tarjetas-uk_v1_mesa-de-trabajo-1-copia.webp"
                  alt="NatWest Credit Card"
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
                  The NatWest Credit Card represents a practical financial tool
                  from one of the UK's established banking institutions.
                  Designed to complement your everyday banking needs, it
                  combines useful rewards with security features and convenient
                  digital management to offer a well-rounded credit card
                  experience.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Rewarding Your Spending
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  The NatWest MyRewards programme allows cardholders to earn
                  points on eligible purchases, creating value from your
                  everyday spending. These points can be accumulated and
                  redeemed in various ways, giving you the flexibility to choose
                  rewards that align with your preferences. Options include
                  cashback, which effectively provides a discount on your
                  overall spending, retail vouchers for popular high street and
                  online retailers, or unique experiences ranging from dining to
                  entertainment.
                </p>

                <hr className="my-8" />

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Financial Flexibility
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  NatWest often offers promotional interest rates for new
                  customers, which can provide valuable breathing room for
                  larger purchases or for managing existing credit card debt.
                  These may include 0% interest periods on purchases, allowing
                  you to spread the cost of significant expenses without
                  incurring interest charges, or balance transfer offers that
                  enable you to move balances from other credit cards to
                  potentially reduce interest payments. These features make the
                  NatWest Credit Card a versatile tool for various financial
                  situations.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Security and Protection
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  Security is paramount with the NatWest Credit Card. The card
                  is equipped with advanced fraud detection systems that monitor
                  your account for unusual activity, helping to identify and
                  prevent unauthorized transactions before they impact your
                  finances. If suspicious transactions are detected, you'll
                  receive instant notifications, allowing you to take immediate
                  action. Additionally, NatWest's commitment to customer
                  protection means you benefit from secure online shopping
                  features and chip technology for in-person transactions,
                  providing comprehensive security for all your purchasing
                  activities.
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
                        href="/personal-finance/best-rewards-credit-cards/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Maximising Credit Card Rewards
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
                        href="/personal-finance/top-credit-cards-0-intro-apr/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Using 0% Intro APR Offers
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
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#42145F] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Digital Wallet Integration:
                      </span>{" "}
                      The card can be added to digital wallets like Apple Pay
                      and Google Pay, enabling convenient and secure contactless
                      payments from your mobile device for both in-store and
                      online purchases.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#42145F] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Smart Spending Analytics:
                      </span>{" "}
                      Through the NatWest app, you can access detailed spending
                      insights, categorized breakdowns of your expenditure, and
                      budgeting tools to help manage your finances more
                      effectively.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#42145F] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Card Freezing:</span> If
                      your card is lost or stolen, you can instantly freeze it
                      through the mobile app, preventing unauthorized use while
                      you arrange a replacement, offering peace of mind during a
                      potentially stressful situation.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#42145F] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Global Acceptance:</span>{" "}
                      With Mastercard or Visa network backing (depending on your
                      specific card), the NatWest Credit Card is widely accepted
                      at millions of locations worldwide, providing convenience
                      when shopping both domestically and internationally.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Integrated Banking Experience
                </h2>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  For existing NatWest customers, the credit card offers
                  additional advantages through integration with your broader
                  banking relationship:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#42145F] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Consolidated Account View:
                      </span>{" "}
                      View and manage all your NatWest accounts, including your
                      credit card, in one place through online and mobile
                      banking, simplifying your financial administration.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#42145F] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Easy Payments:</span> Make
                      quick credit card payments directly from your NatWest
                      current account, with options for automatic payments to
                      ensure you never miss a due date.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  A Practical Financial Tool
                </h2>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  The NatWest Credit Card stands out for its practical approach
                  to everyday financial needs. It doesn't focus on extravagant
                  premium benefits but instead delivers reliable features that
                  most consumers will find genuinely useful in their daily
                  lives. From earning rewards on regular spending to managing
                  larger purchases with promotional rates, and from robust
                  security features to intuitive digital management, this card
                  provides a balanced solution for a wide range of financial
                  requirements.
                </p>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  Whether you're an existing NatWest customer looking to expand
                  your banking relationship or someone seeking a reliable credit
                  card from an established UK bank, the NatWest Credit Card
                  offers a straightforward and effective financial tool. Its
                  combination of rewards, security, and convenience makes it
                  particularly suitable for those who value practical benefits
                  without unnecessary complexity.
                </p>

                <div className="text-left my-8">
                  <Link href="/financial-solutions/natwest-credit-card-requirements">
                    <Button className="bg-[#42145F] hover:bg-purple-900 text-white font-medium text-md py-2 px-8 rounded-full w-full">
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
