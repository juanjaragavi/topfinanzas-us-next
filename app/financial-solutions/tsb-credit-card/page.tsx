import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "TSB Credit Card: Practical Benefits for Everyday Banking - Top Finance UK",
    description:
      "The TSB Credit Card offers practical features, competitive rates, and straightforward benefits designed for everyday banking needs and financial management.",
    keywords:
      "TSB Credit Card, UK credit cards, everyday banking, cashback offers, balance transfers, TSB Bank, contactless payments",
  };
}

export default function TSBCreditCardPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-4xl font-bold text-gray-800 mb-4 leading-8">
              TSB Credit Card: Straightforward Banking for Everyday Life
            </h1>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 font-medium mb-8 leading-5 text-left">
                The TSB Credit Card delivers a straightforward approach to
                credit with practical features and competitive rates designed to
                support your everyday financial needs.
              </p>

              <div id="square01" data-topads data-topads-size="square"></div>

              <hr className="my-8" />

              <div className="space-y-2 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#0A4D8C] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Competitive Interest Rates:
                    </span>{" "}
                    Benefit from competitive standard interest rates and
                    promotional offers for eligible new customers.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#0A4D8C] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Balance Transfer Options:
                    </span>{" "}
                    Take advantage of balance transfer opportunities with
                    competitive rates to help manage existing credit card debt
                    more effectively.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#0A4D8C] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">Cashback Offers:</span>{" "}
                    Access targeted cashback deals at selected retailers through
                    TSB's cashback platform, helping you save on everyday
                    spending.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#0A4D8C] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">Mobile Banking App:</span>{" "}
                    Manage your account easily through TSB's mobile banking app
                    with features like transaction alerts, card freezing, and
                    spending summaries.
                  </div>
                </div>
              </div>

              <div className="text-left my-8">
                <Link href="/financial-solutions/tsb-credit-card-requirements">
                  <Button className="bg-[#0A4D8C] hover:bg-blue-900 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/uk/credit-cards/718645155-top_prestamos-y-tarjetas-uk_v1-06.webp"
                  alt="TSB Credit Card"
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
                  The TSB Credit Card represents a practical financial tool from
                  one of the UK's established high street banks. With its focus
                  on straightforward features and competitive rates, this card
                  is designed to complement your everyday banking needs without
                  unnecessary complexity.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Practical Financial Management
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  TSB's approach to credit cards emphasizes practical financial
                  management. The card offers competitive standard interest
                  rates, making it a reasonable option for everyday purchases
                  and ongoing balances. For new customers, promotional interest
                  rates may be available on purchases or balance transfers,
                  providing valuable flexibility when you need it most. These
                  features allow you to manage larger expenses or consolidate
                  existing credit card debt more effectively, potentially
                  reducing your interest payments and simplifying your financial
                  administration.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Targeted Rewards and Savings
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  Rather than a complex points system, TSB focuses on providing
                  targeted cashback offers through their dedicated platform.
                  These offers are typically aligned with everyday spending
                  categories, such as groceries, dining, and retail purchases.
                  By activating these offers and using your TSB Credit Card at
                  participating retailers, you can earn cashback that is
                  automatically credited to your account. This straightforward
                  approach ensures you receive tangible value from your regular
                  spending without navigating complicated redemption processes.
                </p>

                <hr className="my-8" />

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Security and Protection
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  Security is a priority with the TSB Credit Card. The card
                  benefits from advanced security features, including continuous
                  fraud monitoring and real-time transaction alerts. If
                  suspicious activity is detected on your account, you'll be
                  promptly notified, allowing for immediate action to prevent
                  unauthorized transactions. Additionally, TSB's fraud
                  protection policies mean you won't be liable for fraudulent
                  charges if you report them promptly, providing peace of mind
                  as you use your card for everyday purchases and online
                  shopping.
                </p>

                {/* Ad Block: Credit Cards */}
                <div className="my-8 text-left sm:text-left">
                  <Link href="/personal-finance/credit-card-types-benefits/">
                    <Image
                      src="https://media.topfinanzas.com/images/ads/Top-Blog-Credit-Cards.webp"
                      alt="TSB Credit Card"
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
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0A4D8C] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Digital Wallet Compatibility:
                      </span>{" "}
                      Add your TSB Credit Card to digital wallets like Apple Pay
                      and Google Pay for convenient contactless payments using
                      your smartphone or smartwatch, enhancing the speed and
                      security of everyday transactions.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0A4D8C] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Card Controls:</span> Use
                      the TSB mobile app to temporarily freeze your credit card
                      if it's misplaced, set transaction alerts, and monitor
                      your spending patterns, giving you greater control over
                      your account security and financial management.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0A4D8C] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Flexible Repayment Options:
                      </span>{" "}
                      Choose from various repayment methods, including direct
                      debit for the minimum payment, a fixed amount, or the full
                      balance, helping you manage your credit card payments
                      according to your financial situation.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0A4D8C] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Global Acceptance:</span>{" "}
                      Use your TSB Credit Card with confidence at millions of
                      locations worldwide through the Mastercard or Visa network
                      (depending on your specific card), ensuring payment
                      convenience both domestically and internationally.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Customer Support and Service
                </h2>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  TSB is committed to providing accessible customer support
                  through multiple channels:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0A4D8C] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Branch Network:</span>{" "}
                      Access in-person assistance at TSB's extensive network of
                      branches across the UK, allowing for face-to-face support
                      with credit card queries and account management.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0A4D8C] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Telephone Banking:</span>{" "}
                      Reach dedicated customer service representatives by phone
                      for assistance with your credit card account, including
                      balance inquiries, payment processing, and dispute
                      resolution.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0A4D8C] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Online and Mobile Support:
                      </span>{" "}
                      Access self-service options, secure messaging, and support
                      resources through TSB's online banking platform and mobile
                      app, providing convenient ways to manage your account and
                      resolve issues.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  A Balanced Everyday Financial Tool
                </h2>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  The TSB Credit Card stands out for its straightforward
                  approach to everyday banking. Without complex features or
                  premium price points, it delivers reliable functionality that
                  most consumers will find valuable in their daily financial
                  lives. The combination of competitive rates, targeted cashback
                  offers, and practical digital tools makes it a solid choice
                  for a wide range of financial needs.
                </p>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  Whether you're an existing TSB customer looking to expand your
                  banking relationship or someone seeking a straightforward
                  credit card from an established high street bank, the TSB
                  Credit Card offers a practical financial tool without
                  unnecessary complications. Its focus on everyday usability,
                  security, and accessible customer service creates a balanced
                  package that complements modern banking needs.
                </p>

                <div className="text-left my-8">
                  <Link href="/financial-solutions/tsb-credit-card-requirements">
                    <Button className="bg-[#0A4D8C] hover:bg-blue-900 text-white font-medium text-md py-2 px-8 rounded-full w-full">
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
