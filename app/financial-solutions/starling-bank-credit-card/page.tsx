import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Starling Bank Credit Card: Digital Banking Excellence - Top Finance UK",
    description:
      "The Starling Bank Credit Card offers innovative digital features, transparent pricing, and exceptional customer service designed for modern, tech-savvy consumers.",
    keywords:
      "Starling Bank Credit Card, UK credit cards, digital banking, neobank, app-based banking, no foreign transaction fees, transparent fees, ethical banking",
  };
}

export default function StarlingBankCreditCardPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-4xl font-bold text-gray-800 mb-4 leading-8">
              Starling Bank Credit Card: Digital Banking with Purpose
            </h1>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 font-medium mb-8 leading-5 text-left">
                The Starling Bank Credit Card extends the award-winning digital
                bank's commitment to transparent, customer-first banking with a
                credit product that combines innovative features with ethical
                principles.
              </p>

              <div id="square01" data-topads data-topads-size="square"></div>

              <hr className="my-8" />

              <div className="space-y-2 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#250E62] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Fee-Free Global Transactions:
                    </span>{" "}
                    Enjoy no foreign transaction fees worldwide, making this an
                    ideal card for international travelers and online shoppers
                    purchasing from overseas retailers.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#250E62] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">Real-Time Insights:</span>{" "}
                    Access instant spending notifications, automatic
                    categorization, and detailed analytics to help you
                    understand and manage your finances more effectively.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#250E62] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Seamless Banking Integration:
                    </span>{" "}
                    Manage your credit card alongside your Starling current
                    account in a single, award-winning app for a unified view of
                    your finances and simplified payments.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#250E62] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Transparent and Fair Pricing:
                    </span>{" "}
                    Benefit from Starling's commitment to transparency with
                    competitive rates, no hidden fees, and clear terms that put
                    customer interests first.
                  </div>
                </div>
              </div>

              <div className="text-left my-8">
                <Link href="/financial-solutions/starling-bank-credit-card-requirements">
                  <Button className="bg-[#250E62] hover:bg-purple-900 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/uk/credit-cards/719907598-top_prestamos-y-tarjetas-uk_v1-20.webp"
                  alt="Starling Bank Credit Card"
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
                  The Starling Bank Credit Card is a natural extension of the
                  award-winning digital bank's approach to financial services.
                  As one of the UK's most respected neobanks, Starling has built
                  its reputation on challenging traditional banking models with
                  transparent, customer-focused alternatives. The Starling
                  Credit Card carries forward this mission, offering a credit
                  product that aligns with modern banking expectations while
                  maintaining ethical principles.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Ethical Approach to Credit
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  At the foundation of the Starling Credit Card is an ethical
                  approach to lending. Unlike some traditional credit cards that
                  profit from customer debt, Starling emphasizes responsible
                  borrowing through transparent terms, fair rates, and tools
                  that help customers manage their credit effectively. The card
                  lacks the complex fee structures often found in traditional
                  products, with no hidden charges or penalties designed to trap
                  customers in debt cycles. This ethical foundation aligns with
                  Starling's broader mission of building a bank that works in
                  the best interest of its customers, not against them.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Digital-First Experience
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  True to its neobank roots, Starling delivers a fully digital
                  credit card experience. From application to everyday use, the
                  entire process is managed through Starling's award-winning
                  app. Transactions appear instantly with clear merchant
                  information and automatic categorization, while real-time
                  spending notifications help you stay on top of your finances.
                  The app provides detailed insights into your spending
                  patterns, making it easier to understand where your money goes
                  and identify areas for potential savings. These digital tools
                  transform the credit card from a simple payment method into a
                  comprehensive financial management solution.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Seamless Banking Integration
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  For existing Starling customers, the credit card integrates
                  seamlessly with the bank's other products. The card appears
                  alongside your current account in the same app, creating a
                  unified view of your finances. This integration extends to
                  features like instant payments from your Starling current
                  account to your credit card, spending analysis that combines
                  transactions across all your Starling products, and a
                  consistent user experience throughout. This cohesive approach
                  reduces the fragmentation typically associated with managing
                  multiple financial products.
                </p>

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
                        href="/personal-finance/no-annual-fee-credit-cards/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Top No Annual Fee Cards
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
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#250E62] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Smart Security Controls:
                      </span>{" "}
                      Take control of your card security with features like
                      instant card freezing, location-based security that
                      automatically blocks suspicious transactions, and the
                      ability to disable specific transaction types like online
                      purchases or ATM withdrawals for enhanced protection.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#250E62] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Spending Insights:</span>{" "}
                      Access detailed breakdowns of your spending by category,
                      merchant, and time period, with personalized insights that
                      help you understand patterns and trends in your financial
                      behavior, making it easier to budget effectively and
                      identify saving opportunities.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#250E62] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Goals and Roundups:</span>{" "}
                      Integrate your credit card spending with Starling's
                      savings features, including the ability to round up
                      transactions to the nearest pound and transfer the
                      difference to a savings goal, helping you build savings
                      habits alongside your credit card use.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#250E62] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Digital Wallet Integration:
                      </span>{" "}
                      Add your Starling Credit Card to digital wallets like
                      Apple Pay and Google Pay for convenient contactless
                      payments, making everyday transactions faster and more
                      secure while reducing the need to carry physical cards.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Customer-First Support
                </h2>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  Starling's approach to customer service has won numerous
                  awards and continues with their credit card:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#250E62] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        24/7 In-App Support:
                      </span>{" "}
                      Access customer service directly through the Starling app
                      at any time, with a team of human agents ready to assist
                      with your credit card queries and issues, no matter when
                      they arise.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#250E62] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        UK-Based Customer Service:
                      </span>{" "}
                      Speak with Starling's UK-based customer service team who
                      are trained to provide knowledgeable and helpful
                      assistance, rather than reading from scripts or passing
                      you between departments.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#250E62] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Transparent Issue Resolution:
                      </span>{" "}
                      Benefit from Starling's commitment to clear communication
                      and fair dispute resolution if issues arise, with regular
                      updates on the status of your inquiry and transparent
                      explanations of outcomes.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Banking That Benefits Society
                </h2>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  Beyond its direct customer benefits, the Starling Credit Card
                  reflects the bank's broader commitment to responsible banking
                  practices. Starling is a certified B Corporation, meaning it
                  meets rigorous standards of social and environmental
                  performance, accountability, and transparency. By choosing a
                  Starling Credit Card, customers support a business model that
                  considers its impact on employees, customers, communities, and
                  the environment, not just shareholders.
                </p>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  Whether you're an existing Starling customer looking to expand
                  your relationship with the bank or someone seeking a more
                  ethical and transparent approach to credit, the Starling
                  Credit Card offers a compelling alternative to traditional
                  credit products. Its combination of competitive rates,
                  innovative digital features, and customer-first principles
                  creates a credit card that aligns with modern values while
                  delivering practical everyday benefits.
                </p>

                <div className="text-left my-8">
                  <Link href="/financial-solutions/starling-bank-credit-card-requirements">
                    <Button className="bg-[#250E62] hover:bg-purple-900 text-white font-medium text-md py-2 px-8 rounded-full w-full">
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
