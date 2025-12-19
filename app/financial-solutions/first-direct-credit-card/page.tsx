import ResponsiveImage from "@/components/ui/responsive-image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "First Direct Credit Card: Straightforward Banking with Competitive Rates - Top Finance UK",
    description:
      "Discover the First Direct 1st Credit Card with 0% interest on purchases for the first 12 months, competitive rates, and the award-winning service First Direct is known for. Representative 24.9% APR (variable).",
    keywords:
      "First Direct Credit Card, 1st Credit Card, UK credit cards, 0% purchases, competitive APR, digital banking, First Direct",
  };
}

export default function FirstDirectCreditCardPage() {
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
              First Direct Credit Card: Straightforward Banking with Competitive
              Rates
            </h1>

            <div className="my-8 text-left sm:text-left">
              <p className="text-left text-lg text-gray-800 font-medium mb-8 leading-5">
                The First Direct 1st Credit Card combines the bank's renowned
                customer service with competitive credit card features,
                including 0% interest on purchases for 12 months and low ongoing
                rates for existing customers.
              </p>

              <div id="square01" data-topads data-topads-size="square"></div>

              <hr className="my-8" />

              <div className="space-y-2 my-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#121212] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Introductory 0% Purchase Rate:
                    </span>{" "}
                    Enjoy 0% interest on purchases for the first 12 months,
                    giving you time to spread the cost of larger purchases.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#121212] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Competitive Standard Rate:
                    </span>{" "}
                    Representative 24.9% APR (variable) applies after the
                    introductory period, with lower rates available for existing
                    First Direct customers.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#121212] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">No Annual Fee:</span> Keep
                    more of your money with no annual fee to pay, making this
                    card cost-effective for everyday use.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#121212] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      24/7 Award-Winning Service:
                    </span>{" "}
                    Access First Direct's renowned customer service team
                    whenever you need assistance, day or night.
                  </div>
                </div>
              </div>

              <div className="text-left my-8">
                <Link href="/financial-solutions/first-direct-credit-card-requirements">
                  <Button className="bg-[#121212] hover:bg-gray-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <div className="my-8 text-left sm:text-left">
                <ResponsiveImage
                  src="https://media.topfinanzas.com/images/uk/first-direct-credit-card.webp"
                  alt="First Direct Credit Card"
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
                  First Direct has built its reputation on straightforward
                  banking and exceptional customer service, and the 1st Credit
                  Card continues this tradition. Designed for customers who
                  value simplicity and transparency, this card offers a
                  competitive package without complicated rewards schemes or
                  hidden fees. Whether you're planning a significant purchase or
                  looking for a reliable everyday credit card, the First Direct
                  1st Credit Card delivers clarity and value.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Interest-Free Purchases for Your First Year
                </h2>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  The standout feature of the First Direct 1st Credit Card is
                  the generous 12-month 0% interest period on purchases. This
                  introductory offer allows you to spread the cost of essential
                  purchases—from home improvements to major appliances—without
                  paying interest during your first year. Whether you're
                  furnishing a new home, upgrading technology, or covering
                  unexpected expenses, this interest-free period provides
                  valuable financial flexibility. After the introductory period
                  ends, a competitive standard rate applies, with existing First
                  Direct customers often benefiting from preferential rates.
                </p>

                <hr className="my-8" />

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  No Annual Fee Means Better Value
                </h2>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  Unlike many credit cards that charge annual fees, the First
                  Direct 1st Credit Card comes with no annual fee whatsoever.
                  This means you keep more of your money and can use the card as
                  much or as little as suits your needs without worrying about
                  justifying an annual charge. For those who want a reliable
                  credit card without ongoing costs, this feature makes the
                  First Direct card an attractive proposition, particularly when
                  combined with its competitive interest rates and excellent
                  service standards.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Digital Banking Made Easy
                </h2>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  First Direct pioneered telephone and digital banking in the
                  UK, and this expertise is evident in the seamless management
                  of your credit card account. Through the award-winning First
                  Direct mobile app and online banking platform, you can monitor
                  your spending, make payments, check your balance, and manage
                  your account from anywhere at any time. The intuitive
                  interface makes it simple to stay on top of your finances,
                  with real-time transaction notifications keeping you informed
                  about every purchase. Security features including fingerprint
                  and face recognition ensure your account remains protected
                  whilst providing convenient access.
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
                        href="/personal-finance/credit-card-types-benefits/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Understanding Different Credit Card Types
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/personal-finance/best-rewards-credit-cards/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Maximising Credit Card Benefits
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/personal-finance/understanding-credit-card-interest-rates/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Understanding Interest Rates and APR
                      </Link>
                    </li>
                  </ul>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Legendary Customer Service
                </h2>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  First Direct consistently ranks as one of the UK's most
                  recommended banks, largely thanks to its outstanding customer
                  service. Available 24 hours a day, 365 days a year, First
                  Direct's UK-based customer service team is renowned for being
                  helpful, efficient, and genuinely interested in solving your
                  queries. Whether you need assistance with a transaction, want
                  to discuss your account, or have a question about your card,
                  you'll speak to a real person who can help—no complicated
                  phone menus or frustrating automated systems. This level of
                  service, combined with consistently quick answer times, means
                  you're never far from help when you need it.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Additional Features for Peace of Mind
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#121212] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Fraud Protection Guarantee:
                      </span>{" "}
                      Comprehensive protection against unauthorised
                      transactions, with zero liability for fraudulent purchases
                      you don't make.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#121212] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Contactless Payments:
                      </span>{" "}
                      Make quick, secure payments up to the UK contactless limit
                      with just a tap of your card.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#121212] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Digital Wallet Compatible:
                      </span>{" "}
                      Add your card to Apple Pay, Google Pay, or Samsung Pay for
                      secure mobile payments.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#121212] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Section 75 Protection:
                      </span>{" "}
                      Purchases between £100 and £30,000 are protected under the
                      Consumer Credit Act, providing additional security for
                      larger transactions.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#121212] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Online Shopping Protection:
                      </span>{" "}
                      Additional verification through 3D Secure helps protect
                      your online transactions from fraud.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Representative Example
                </h2>

                <p className="text-left text-gray-800 text-sm leading-5 mb-4 font-light">
                  Representative 24.9% APR (variable). Representative example:
                  If you borrow £1,200 at a purchase rate of 24.9% p.a.
                  (variable) and make 12 monthly payments of £112.01, you will
                  pay back £1,344.12 in total. The total cost of credit will be
                  £144.12. Interest is charged from the date of each transaction
                  unless you pay your balance in full within the interest-free
                  period or payment due date. After the 0% introductory period,
                  interest will be charged on outstanding balances.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Who Is This Card Right For?
                </h2>

                <p className="text-left text-gray-800 text-sm leading-5 mb-4 font-light">
                  The First Direct 1st Credit Card is particularly suitable for
                  those who value straightforward banking, excellent customer
                  service, and competitive rates without unnecessary
                  complications. It's ideal if you're planning a significant
                  purchase and want interest-free time to pay it off, or if
                  you're an existing First Direct customer looking to benefit
                  from potentially lower rates. The lack of an annual fee makes
                  it cost-effective for regular use, whilst the 24/7 customer
                  service provides peace of mind that help is always available
                  when you need it. This card suits customers who appreciate
                  First Direct's digital-first approach and want a reliable,
                  well-supported credit card that does exactly what it says on
                  the tin.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Important Information
                </h2>

                <p className="text-left text-gray-800 text-sm leading-5 mb-4 font-light">
                  Credit is subject to status and affordability. Terms and
                  conditions apply. You must be 18 or over and a UK resident.
                  First Direct is a division of HSBC UK Bank plc. HSBC UK Bank
                  plc is authorised by the Prudential Regulation Authority and
                  regulated by the Financial Conduct Authority and the
                  Prudential Regulation Authority. This information is for
                  general guidance only and does not constitute financial
                  advice. We recommend seeking independent financial advice if
                  you're unsure about whether this product is suitable for your
                  circumstances.
                </p>

                <div className="text-left my-8">
                  <Link href="/financial-solutions/first-direct-credit-card-requirements">
                    <Button className="bg-[#121212] hover:bg-gray-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
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
