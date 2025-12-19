import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Lloyds Bank Credit Card: Flexible Everyday Rewards - Top Finance UK",
    description:
      "The Lloyds Bank Credit Card offers flexible rewards, competitive rates, and convenient features for everyday spending and financial management.",
    keywords:
      "Lloyds Bank Credit Card, UK credit cards, everyday spending, cashback rewards, Lloyds Bank, balance transfer, purchase card",
  };
}

export default function LloydsBankCreditCardPage() {
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
              Lloyds Bank Credit Card: Flexible Everyday Banking Solutions
            </h1>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 font-medium mb-8 leading-5 text-left">
                The Lloyds Bank Credit Card offers a balance of everyday value
                and flexibility, designed to support your daily spending while
                providing useful rewards and benefits.
              </p>

              <div id="square01" data-topads data-topads-size="square"></div>

              <hr className="my-8" />

              <div className="space-y-2 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#006A4D] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">Everyday Rewards:</span>{" "}
                    Earn cashback on selected purchases at participating
                    retailers through the Everyday Offers program.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#006A4D] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Balance Transfer Offers:
                    </span>{" "}
                    Enjoy competitive balance transfer rates to help manage
                    existing credit card debt more effectively.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#006A4D] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">Purchase Protection:</span>{" "}
                    Benefit from purchase protection on eligible items,
                    providing security for your shopping.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#006A4D] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">Mobile Banking:</span>{" "}
                    Manage your account seamlessly through the Lloyds Bank
                    mobile app with real-time notifications.
                  </div>
                </div>
              </div>

              <div className="text-left my-8">
                <Link href="/financial-solutions/lloyds-bank-credit-card-requirements">
                  <Button className="bg-[#006A4D] hover:bg-green-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/uk/credit-cards/719906900-top_prestamos-y-tarjetas-uk_v1-16.webp"
                  alt="Lloyds Bank Credit Card"
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
                  The Lloyds Bank Credit Card is designed to offer everyday
                  value to UK consumers, providing a reliable financial tool
                  that combines convenience, security, and rewards. As one of
                  the UK's oldest and most trusted banking institutions, Lloyds
                  Bank has created a credit card that reflects its commitment to
                  customer-focused banking solutions.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Everyday Rewards and Benefits
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  One of the most attractive features of the Lloyds Bank Credit
                  Card is its Everyday Offers program. This program allows
                  cardholders to earn cashback on purchases at participating
                  retailers, effectively providing a discount on your regular
                  shopping. The cashback is automatically credited to your
                  account, making it a hassle-free way to save money on everyday
                  expenses. The variety of participating retailers means you can
                  earn rewards across multiple spending categories, from
                  groceries to entertainment.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Effective Debt Management Tools
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  For those looking to manage existing credit card debt, the
                  Lloyds Bank Credit Card offers competitive balance transfer
                  rates. This feature allows you to transfer balances from other
                  credit cards to your Lloyds card, potentially at a lower
                  interest rate. This can be an effective way to consolidate
                  debt and reduce interest payments, making it easier to pay
                  down your balance over time. The card also offers flexibility
                  in repayment options, allowing you to set up direct debits for
                  either the minimum payment, a fixed amount, or the full
                  balance each month.
                </p>

                <hr className="my-8" />

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Security and Protection
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  Security is a priority with the Lloyds Bank Credit Card. The
                  card comes with advanced security features, including
                  real-time fraud monitoring that tracks unusual activity on
                  your account. If suspicious transactions are detected, you'll
                  be alerted immediately, helping to prevent fraud before it
                  becomes a major issue. Additionally, the card offers purchase
                  protection on eligible items, providing an extra layer of
                  security for your shopping. This protection can cover items
                  against damage or theft for a specified period after purchase,
                  giving you peace of mind when making significant purchases.
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
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#006A4D] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Mobile Banking Integration:
                      </span>{" "}
                      Seamlessly manage your credit card through the Lloyds Bank
                      mobile app, allowing you to check your balance, view
                      transactions, make payments, and receive real-time
                      notifications.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#006A4D] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Global Acceptance:</span>{" "}
                      Widely accepted worldwide through the Mastercard or Visa
                      network (depending on your specific card), ensuring you
                      can use your card confidently at millions of locations
                      globally.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#006A4D] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Contactless Technology:
                      </span>{" "}
                      Quick and convenient contactless payment capability for
                      purchases up to the current UK limit, making everyday
                      transactions faster and easier.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#006A4D] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Digital Wallet Compatibility:
                      </span>{" "}
                      Compatible with digital wallets like Apple Pay and Google
                      Pay, allowing for convenient and secure mobile payments.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Customer Support and Banking Experience
                </h2>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  Lloyds Bank is known for its comprehensive customer support,
                  which extends to its credit card services:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#006A4D] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        24/7 Customer Service:
                      </span>{" "}
                      Access to round-the-clock customer support for urgent card
                      issues, ensuring help is available whenever you need it.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#006A4D] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Branch Network Support:
                      </span>{" "}
                      Benefit from Lloyds Bank's extensive branch network across
                      the UK, providing in-person support when needed.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  A Reliable Everyday Financial Tool
                </h2>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  The Lloyds Bank Credit Card represents a balanced approach to
                  everyday financial management. It doesn't focus on flashy
                  premium benefits or complex rewards structures, but instead
                  delivers reliable, practical features that most consumers will
                  find useful in their daily lives. The combination of cashback
                  rewards, security features, and debt management tools makes it
                  a versatile option for a wide range of financial needs.
                </p>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  Whether you're looking to earn rewards on everyday spending,
                  manage existing credit card debt, or simply want a reliable
                  card from a trusted high street bank, the Lloyds Bank Credit
                  Card offers a straightforward and valuable solution. Its
                  integration with Lloyds' broader banking services also makes
                  it particularly convenient for existing Lloyds Bank customers,
                  allowing for seamless management alongside other accounts.
                </p>

                <div className="text-left my-8">
                  <Link href="/financial-solutions/lloyds-bank-credit-card-requirements">
                    <Button className="bg-[#006A4D] hover:bg-green-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
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
