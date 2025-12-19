import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Monzo Credit Card: Digital-First Banking Solutions - Top Finance UK",
    description:
      "The Monzo Credit Card offers innovative digital features, real-time spending insights, and simplified financial management designed for the mobile-first generation.",
    keywords:
      "Monzo Credit Card, UK credit cards, digital banking, mobile-first banking, Monzo, neobank, spending insights, budgeting tools",
  };
}

export default function MonzoCreditCardPage() {
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
              Monzo Credit Card: Digital-First Banking for Modern Life
            </h1>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 font-medium mb-8 leading-5 text-left">
                The Monzo Credit Card embodies the innovative, digital-first
                approach that has made Monzo one of the UK's leading neobanks,
                combining powerful financial tools with an intuitive user
                experience.
              </p>

              <div id="square01" data-topads data-topads-size="square"></div>

              <hr className="my-8" />

              <div className="space-y-2 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#FF4D56] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Instant Notifications:
                    </span>{" "}
                    Receive real-time alerts for all transactions, helping you
                    track spending and quickly identify unauthorized charges the
                    moment they happen.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#FF4D56] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Smart Budgeting Tools:
                    </span>{" "}
                    Set spending budgets by category, monitor your progress in
                    real-time, and receive insights on your spending patterns to
                    help you manage your finances.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#FF4D56] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Seamless App Integration:
                    </span>{" "}
                    Manage your credit card alongside your Monzo current account
                    in a single, intuitive app, with unified spending insights
                    and simplified payments.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#FF4D56] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      No Foreign Transaction Fees:
                    </span>{" "}
                    Use your Monzo Credit Card abroad without incurring the
                    typical 2.95% foreign transaction fee, making it an
                    excellent choice for international travel and online
                    shopping.
                  </div>
                </div>
              </div>

              <div className="text-left my-8">
                <Link href="/financial-solutions/monzo-credit-card-requirements">
                  <Button className="bg-[#FF4D56] hover:bg-red-500 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/uk/credit-cards/719907302-top_prestamos-y-tarjetas-uk_v1-18.webp"
                  alt="Monzo Credit Card"
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
                  The Monzo Credit Card represents a natural extension of
                  Monzo's innovative approach to banking. As one of the UK's
                  most successful neobanks, Monzo has built its reputation on
                  reimagining financial services for the digital age. The Monzo
                  Credit Card carries forward this philosophy, offering a
                  seamless digital experience that integrates with the broader
                  Monzo ecosystem.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Real-Time Financial Management
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  At the core of the Monzo Credit Card experience is real-time
                  financial management. Transactions appear instantly in the
                  Monzo app, with immediate notifications helping you stay on
                  top of your spending. This real-time visibility is combined
                  with smart categorization of your expenses, automatically
                  sorting your purchases into categories like groceries, dining,
                  transport, and entertainment. This automatic organization
                  provides a clear picture of your spending patterns without
                  requiring manual input or effort, making financial management
                  effortless and efficient.
                </p>

                <hr className="my-8" />

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Intelligent Budgeting Features
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  The Monzo Credit Card integrates with the app's powerful
                  budgeting tools, allowing you to set spending budgets by
                  category and track your progress in real-time. This proactive
                  approach to budgeting helps prevent overspending, rather than
                  just reporting it after the fact. The app provides visual
                  representations of your spending, making it easy to understand
                  where your money is going and identify opportunities to adjust
                  your habits. Additionally, Monzo's spending insights feature
                  analyzes your transaction patterns to offer personalized
                  suggestions for optimizing your finances.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Seamless Integration with Monzo Ecosystem
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  One of the most valuable aspects of the Monzo Credit Card is
                  its integration with the broader Monzo ecosystem. For existing
                  Monzo current account holders, the credit card appears
                  alongside your other accounts in the same app, creating a
                  unified view of your finances. This integration extends to
                  features like instant payments from your Monzo current account
                  to your credit card, simplified spending analysis across all
                  your Monzo products, and consistent user experience
                  throughout. This cohesive approach reduces the fragmentation
                  typically associated with managing multiple financial
                  products.
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
                        href="/personal-finance/best-rewards-credit-cards/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Maximising Credit Card Rewards
                      </Link>
                    </li>
                    <li className="text-left">
                      <Link
                        href="/personal-finance/no-annual-fee-credit-cards/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Top No Annual Fee Cards
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
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FF4D56] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Advanced Security Controls:
                      </span>{" "}
                      Take advantage of enhanced security features including
                      instant card freezing, granular control over payment types
                      (like online transactions or ATM withdrawals), and
                      location-based security that can detect potentially
                      fraudulent transactions based on your phone's location.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FF4D56] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Virtual Card Option:
                      </span>{" "}
                      Access a virtual version of your credit card immediately
                      upon approval, allowing you to make online purchases
                      before your physical card arrives. This virtual card
                      integrates seamlessly with digital wallets like Apple Pay
                      and Google Pay.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FF4D56] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Spending Summary:</span>{" "}
                      Receive monthly and annual spending summaries that provide
                      comprehensive breakdowns of your expenditure, helping you
                      understand long-term financial patterns and make informed
                      decisions about your spending habits.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FF4D56] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Travel-Friendly Features:
                      </span>{" "}
                      Beyond the absence of foreign transaction fees, the Monzo
                      Credit Card offers competitive exchange rates for
                      international purchases, travel insurance options, and
                      global emergency assistance, making it an ideal companion
                      for frequent travelers.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Innovative Customer Support
                </h2>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  Monzo's approach to customer service aligns with its
                  digital-first philosophy:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FF4D56] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">In-App Support:</span>{" "}
                      Access customer support directly through the Monzo app
                      with their chat-based system, allowing you to resolve
                      issues without phone calls or branch visits. This
                      integration means support agents can see your transaction
                      history (with your permission), enabling more efficient
                      problem resolution.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FF4D56] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">24/7 Assistance:</span>{" "}
                      Benefit from round-the-clock customer support for urgent
                      matters, ensuring help is available whenever you need it,
                      regardless of time zone or location.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FF4D56] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Community Support:</span>{" "}
                      Access Monzo's active user community for peer-to-peer
                      assistance and feature discussions, complementing the
                      official support channels and providing alternative
                      perspectives on how to maximize your Monzo experience.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Banking Reimagined for Modern Life
                </h2>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  The Monzo Credit Card represents a step forward in the
                  evolution of credit products, reimagining this traditional
                  financial tool for the digital age. By leveraging technology
                  to provide real-time insights, automated financial management,
                  and enhanced security, Monzo has created a credit card that
                  aligns with the expectations and needs of today's consumers.
                  The seamless digital experience and integration with the
                  broader Monzo ecosystem make it particularly appealing for
                  those who value convenience, transparency, and innovative
                  financial tools.
                </p>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  Whether you're already a Monzo customer looking to expand your
                  relationship with the bank or someone seeking a more intuitive
                  and technology-driven approach to credit, the Monzo Credit
                  Card offers a compelling alternative to traditional credit
                  products. Its focus on proactive financial management,
                  combined with practical features like fee-free foreign
                  transactions and advanced security controls, creates a
                  balanced product that delivers both day-to-day utility and
                  long-term value.
                </p>

                <div className="text-left my-8">
                  <Link href="/financial-solutions/monzo-credit-card-requirements">
                    <Button className="bg-[#FF4D56] hover:bg-red-500 text-white font-medium text-md py-2 px-8 rounded-full w-full">
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
