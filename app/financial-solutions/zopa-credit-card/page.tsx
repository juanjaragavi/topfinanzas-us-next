import ResponsiveImage from "@/components/ui/responsive-image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title: "Zopa Credit Card: Award-Winning Card Management - Top Finance UK",
    description:
      "The Zopa Credit Card offers effortless card management through a simple app, with instant notifications, Credit Cushion feature, no foreign fees, and award-winning customer service.",
    keywords:
      "Zopa credit card, UK credit cards, card management app, Credit Cushion, no foreign fees, award-winning credit card, British Bank Awards",
  };
}

export default function ZopaCreditCardPage() {
  return (
    <main
      className="bg-white min-h-screen flex flex-col"
      data-category="credit-cards"
    >
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-4xl font-bold text-gray-800 mb-8 leading-8">
              Zopa Credit Card: Award-Winning Card Management
            </h1>

            <div className="my-8 text-left sm:text-left">
              <p className="text-left text-lg text-gray-800 font-medium mb-8 leading-5">
                The Zopa Credit Card puts you in complete control with an
                intuitive app, instant notifications, and innovative features
                like Credit Cushion – all backed by award-winning customer
                service that earned Zopa Best Credit Card Provider at the
                British Bank Awards 2024 & 2025.
              </p>

              <div id="square01" data-topads data-topads-size="square"></div>

              <hr className="my-8" />

              <div className="space-y-2 my-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#6CE6B5] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Simple App Management:
                    </span>{" "}
                    Manage your card effortlessly with instant access to your
                    PIN, statements, spending insights, and real-time balance
                    updates all in one convenient app.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#6CE6B5] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">Credit Cushion:</span> Set
                    aside a portion of your available credit balance for life's
                    unexpected moments, giving you peace of mind with dedicated
                    emergency funds always ready when you need them.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#6CE6B5] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">No Foreign Fees:</span> Use
                    your Zopa Credit Card abroad with confidence – no fees
                    charged for foreign transactions, making it an ideal travel
                    companion for your international adventures.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#6CE6B5] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Award-Winning Service:
                    </span>{" "}
                    Access helpful customer support from Zopa's experienced team
                    whenever you need assistance, backed by recognition as Best
                    Credit Card Provider for three consecutive years.
                  </div>
                </div>
              </div>

              <div className="text-left my-8">
                <Link href="/financial-solutions/zopa-credit-card-requirements">
                  <Button className="bg-[#6CE6B5] hover:bg-[#5BD5A4] text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <div className="my-8 text-left sm:text-left">
                <ResponsiveImage
                  src="https://media.topfinanzas.com/images/uk/zopa-credit-card.webp"
                  alt="Zopa Credit Card"
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
                  The Zopa Credit Card represents a fresh approach to credit
                  card banking, combining cutting-edge technology with customer
                  service excellence. As Britain's first peer-to-peer lender
                  turned bank, Zopa has brought its innovative spirit to the
                  credit card market, earning consecutive Best Credit Card
                  Provider awards at the British Bank Awards in 2021, 2024, and
                  2025. This recognition, voted for by customers themselves,
                  demonstrates Zopa's commitment to delivering exceptional value
                  and service.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Effortless Card Management at Your Fingertips
                </h2>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  Managing your Zopa Credit Card is refreshingly simple thanks
                  to the intuitive mobile app. View your PIN instantly whenever
                  needed – no more searching through paperwork or calling
                  customer service. Download statements with just a few taps,
                  track your spending with visual breakdowns, and receive
                  real-time balance updates after every transaction. The app
                  also features spending tracking that categorizes your
                  purchases, helping you understand your financial habits at a
                  glance.
                </p>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  Setting up automatic payments is straightforward, ensuring you
                  never miss a payment deadline. The app sends instant payment
                  notifications, so you're always aware of account activity. If
                  you spot any unusual transactions, you can instantly freeze
                  your card through the app, providing an important layer of
                  security and fraud protection. This comprehensive approach to
                  card management puts complete control in your hands, wherever
                  you are.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  The Credit Cushion: Your Financial Safety Net
                </h2>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  One of Zopa's most innovative features is the Credit Cushion,
                  a unique tool that helps you prepare for life's surprises.
                  This feature allows you to set aside a portion of your
                  available credit balance, keeping it separate from your
                  day-to-day spending limit. You choose the amount that works
                  for you, and Zopa keeps it reserved specifically for
                  emergencies or unexpected expenses.
                </p>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  The Credit Cushion gives you peace of mind knowing that you
                  have dedicated emergency funds available when truly needed,
                  whether it's an urgent car repair, unexpected medical expense,
                  or last-minute travel requirement. This thoughtful feature
                  helps you maintain better financial discipline by separating
                  your regular spending power from your emergency reserve,
                  reducing the temptation to dip into funds meant for
                  contingencies. It's financial planning made simple, built
                  right into your credit card.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Travel-Friendly with No Hidden Costs
                </h2>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  Planning international travel? The Zopa Credit Card makes an
                  excellent travel companion with its no-foreign-fee policy.
                  Unlike many credit cards that charge transaction fees when you
                  use them abroad, Zopa doesn't add any extra charges for
                  foreign purchases. Whether you're shopping in Paris, dining in
                  New York, or paying for accommodation in Tokyo, you'll only
                  pay the exchange rate without additional fees.
                </p>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  This transparent approach to international spending can save
                  you significant amounts on trips abroad, especially if you
                  travel frequently. Combined with the security features of
                  instant payment notifications and the ability to freeze your
                  card if needed, you can travel with confidence knowing your
                  finances are both protected and cost-effective. The app's
                  real-time updates mean you can track your overseas spending in
                  pounds sterling immediately, helping you stay within budget
                  while abroad.
                </p>

                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 my-8 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 text-left">
                    Related Financial Resources
                  </h3>
                  <div className="space-y-3">
                    <Link
                      href="/personal-finance/best-rewards-credit-cards"
                      className="block text-md text-[#6CE6B5] hover:text-[#5BD5A4] font-medium text-left"
                    >
                      → Best Rewards Credit Cards in the UK
                    </Link>
                    <Link
                      href="/personal-finance/credit-card-types-benefits"
                      className="block text-md text-[#6CE6B5] hover:text-[#5BD5A4] font-medium text-left"
                    >
                      → Understanding Credit Card Types and Benefits
                    </Link>
                    <Link
                      href="/recomendador-de-tarjetas-de-credito-p1"
                      className="block text-md text-[#6CE6B5] hover:text-[#5BD5A4] font-medium text-left"
                    >
                      → Find Your Perfect Credit Card Match
                    </Link>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Smart Features for Modern Banking
                </h2>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  Beyond the headline features, Zopa's credit card includes
                  numerous thoughtful touches that enhance the banking
                  experience. The to-do list feature when you first get your
                  card guides you through important setup actions like
                  establishing automatic payments and viewing your PIN, ensuring
                  you don't miss any crucial steps. Spending tracking provides
                  valuable insights into your financial patterns, helping you
                  make more informed decisions about your money.
                </p>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  The instant payment notifications mean you're always aware of
                  account activity, providing both convenience and security. If
                  you notice any suspicious transactions, the ability to
                  instantly freeze your card offers immediate protection. These
                  security features, combined with Zopa's fraud monitoring
                  systems, help safeguard your finances whilst giving you the
                  flexibility and convenience of modern digital banking.
                </p>

                <div className="space-y-2 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#6CE6B5] flex items-center justify-center mr-3">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-md leading-5 text-left">
                      <span className="font-semibold">
                        Instant Payment Notifications:
                      </span>{" "}
                      Stay in control with real-time alerts for every
                      transaction on your card.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#6CE6B5] flex items-center justify-center mr-3">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-md leading-5 text-left">
                      <span className="font-semibold">
                        Easy Debit Card Repayments:
                      </span>{" "}
                      Make repayments conveniently using your debit card or set
                      up automatic monthly payments in the app.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#6CE6B5] flex items-center justify-center mr-3">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-md leading-5 text-left">
                      <span className="font-semibold">
                        PIN at Your Fingertips:
                      </span>{" "}
                      Never worry about forgetting your PIN – view it securely
                      in the app whenever needed.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#6CE6B5] flex items-center justify-center mr-3">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-md leading-5 text-left">
                      <span className="font-semibold">Fraud Protection:</span>{" "}
                      Combat fraud by instantly freezing your card through the
                      app if you spot any unusual activity.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Award-Winning Customer Service
                </h2>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  What truly sets Zopa apart is its commitment to customer
                  service excellence, as evidenced by winning Best Credit Card
                  Provider at the British Bank Awards multiple times. These
                  awards are particularly meaningful because they're voted for
                  by actual customers, reflecting genuine satisfaction with
                  Zopa's service. The customer support team, described by Zopa
                  as "Helpful Humans," is available when you need them, ready to
                  assist with questions or concerns about your account.
                </p>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  This recognition underscores Zopa's philosophy of putting
                  customers first, combining innovative technology with personal
                  service. Whether you need help understanding a feature,
                  resolving a transaction query, or discussing your account,
                  Zopa's support team aims to provide clear, helpful assistance.
                  This balance of digital convenience and human support makes
                  Zopa an appealing choice for those who want modern banking
                  features without sacrificing quality customer service.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Understanding the Costs
                </h2>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  The Zopa Credit Card operates on a variable interest rate
                  structure, with rates starting from 29.2% APR. The
                  representative example shows a 34.9% representative APR
                  variable based on an assumed credit limit of £1,200, with a
                  34.9% p.a. variable purchase rate. It's important to note that
                  the actual rate and credit limit you receive will depend on
                  your individual financial circumstances and credit assessment.
                </p>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  Credit is subject to status, affordability, and applicable
                  terms and conditions. Zopa will conduct a credit check as part
                  of the application process, which may affect your credit
                  score. However, you can check your eligibility with no impact
                  to your credit score before making a full application. For
                  comprehensive information about costs, terms, and how this
                  card compares to other providers, review Zopa's Summary Box
                  document available on their website.
                </p>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8">
                  <h3 className="text-md font-bold text-gray-800 mb-3 text-left">
                    Important Information
                  </h3>
                  <p className="text-sm text-gray-700 mb-3 text-left leading-5">
                    <strong>Representative Example:</strong> 34.9%
                    representative APR variable based on an assumed credit limit
                    of £1,200. 34.9% p.a. variable purchase rate. Rates from
                    29.2%.
                  </p>
                  <p className="text-sm text-gray-700 mb-3 text-left leading-5">
                    Credit is subject to status, affordability, and applicable
                    terms and conditions. Your actual rate and credit limit will
                    depend on your individual circumstances and credit
                    assessment.
                  </p>
                  <p className="text-sm text-gray-700 text-left leading-5">
                    Zopa Bank Limited is authorised by the Prudential Regulation
                    Authority and regulated by the Financial Conduct Authority
                    and the Prudential Regulation Authority (Financial Services
                    Register number 800542).
                  </p>
                </div>

                <div className="text-left my-8">
                  <Link href="/financial-solutions/zopa-credit-card-requirements">
                    <Button className="bg-[#6CE6B5] hover:bg-[#5BD5A4] text-white font-medium text-md py-2 px-8 rounded-full w-full">
                      Check Eligibility Requirements
                    </Button>
                  </Link>
                </div>

                <p className="text-sm text-gray-600 italic text-left leading-5 my-6">
                  This information is for general guidance only and does not
                  constitute financial advice. We recommend seeking independent
                  financial advice before making any credit decisions. Always
                  review the complete terms and conditions provided by Zopa
                  before applying.
                </p>
              </div>

              <AIContentDisclaimer />
            </div>
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
