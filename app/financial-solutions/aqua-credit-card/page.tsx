import ResponsiveImage from "@/components/ui/responsive-image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Aqua Credit Card: Build Better Credit with Smart Features - Top Finance UK",
    description:
      "The Aqua Credit Card offers personalized credit limits, expert support tools, and 24/7 fraud protection to help you build better credit with confidence and security.",
    keywords:
      "Aqua Credit Card, credit building card, UK credit cards, bad credit card, improve credit score, Aqua Classic, credit builder",
  };
}

export default function AquaCreditCardPage() {
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
              Aqua Credit Card: Build Better Credit with Smart Features
            </h1>

            <div className="my-8 text-left sm:text-left">
              <p className="text-left text-lg text-gray-800 font-medium mb-8 leading-5">
                The Aqua Credit Card is designed to help hundreds of thousands
                of people improve their credit score with personalized limits,
                expert support, and comprehensive security features—all backed
                by an easy-to-use mobile app.
              </p>

              <div id="square01" data-topads data-topads-size="square"></div>

              <hr className="my-8" />

              <div className="space-y-2 my-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#7EDDDC] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Personalized Credit Limits:
                    </span>{" "}
                    Your credit limit adjusts as Aqua gets to know you and could
                    increase if you manage your account well.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#7EDDDC] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Expert Support and Tools:
                    </span>{" "}
                    Join hundreds of thousands of people improving their credit
                    score with support tools, including free credit score
                    updates in the Aqua app.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#7EDDDC] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">Safe and Secure:</span> With
                    24/7 fraud protection, Aqua helps you keep your account safe
                    and provides friendly support whenever you need it.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#7EDDDC] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">Quick Eligibility:</span>{" "}
                    Check your eligibility for Aqua in as little as 60 seconds
                    with no impact to your credit score.
                  </div>
                </div>
              </div>

              <div className="text-left my-8">
                <Link href="/financial-solutions/aqua-credit-card-requirements">
                  <Button className="bg-[#7EDDDC] hover:bg-[#5ECCCB] text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <div className="my-8 text-left sm:text-left">
                <ResponsiveImage
                  src="https://media.topfinanzas.com/images/uk/aqua-credit-card.webp"
                  alt="Aqua Credit Card - Build Better Credit"
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
                  The Aqua Credit Card has established itself as a trusted
                  credit-building solution for UK consumers looking to improve
                  or rebuild their credit score. Whether you're new to credit,
                  recovering from past financial difficulties, or simply seeking
                  to strengthen your credit profile, Aqua provides a supportive
                  pathway to better financial health. With its focus on
                  accessibility, personalized features, and comprehensive
                  security, this card is designed to help you succeed.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Smart Credit Building Features
                </h2>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  One of the standout features of the Aqua Credit Card is its
                  commitment to helping you build credit through intelligent,
                  personalized features. Unlike traditional cards with fixed
                  limits, Aqua adjusts your credit limit based on how well you
                  manage your account. This means that responsible use—such as
                  making regular payments and keeping your balance under
                  control—can lead to credit limit increases over time,
                  demonstrating to credit reference agencies that you're a
                  reliable borrower.
                </p>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  The Aqua app provides free credit score updates, allowing you
                  to track your progress as you build your credit. Understanding
                  your credit score and how your financial behavior affects it
                  is crucial for long-term financial success. Aqua empowers you
                  with this information, helping you make informed decisions
                  about your spending and repayment habits.
                </p>

                <hr className="my-8" />

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Understanding How Credit Cards Work
                </h2>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  Credit cards work by lending you up to a maximum amount known
                  as a credit limit. Your credit limit with Aqua is personalized
                  to your circumstances and it could grow over time if you
                  manage your account well. Whether you need to make payments
                  online, at the shops, or in your favorite restaurant, a credit
                  card offers a flexible way to borrow money as and when you
                  need it.
                </p>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  If you only use your account for purchases and pay back what
                  you borrow in full each month, you usually won't pay interest.
                  Alternatively, if you prefer, you can carry forward your
                  balance and pay interest each month. Bear in mind that you
                  must still pay at least your minimum monthly payment—and more
                  when you're able to—to keep your account in good standing and
                  continue building your credit.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Comprehensive Security and Fraud Protection
                </h2>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  Security is a top priority with the Aqua Credit Card. The card
                  comes with 24/7 fraud protection to help keep your account
                  safe from unauthorized transactions. Aqua's dedicated security
                  team monitors your account for suspicious activity, and if
                  anything unusual is detected, you'll be contacted immediately.
                  This proactive approach to security gives you peace of mind,
                  knowing that your finances are protected around the clock.
                </p>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  Additionally, Aqua's friendly support team is available
                  whenever you need assistance. Whether you have questions about
                  your account, need help with a transaction, or require support
                  with fraud concerns, you can reach out to Aqua's customer
                  service team for prompt and helpful assistance. This level of
                  support is particularly valuable for those who may be new to
                  credit cards or rebuilding their credit.
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
                    Learn More About Credit Building:
                  </h3>
                  <ul className="space-y-2 list-disc list-inside text-blue-700">
                    <li>
                      <Link
                        href="/personal-finance/best-rewards-credit-cards/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Understanding Credit Card Rewards
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/personal-finance/credit-card-types-benefits/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Types of Credit Cards and Their Benefits
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/personal-finance/getting-out-of-debt/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Managing Debt Effectively
                      </Link>
                    </li>
                  </ul>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Additional Features:
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#7EDDDC] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Digital Wallet Compatibility:
                      </span>{" "}
                      Use your Aqua card with Google Pay and Apple Pay for
                      convenient contactless payments from your mobile device.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#7EDDDC] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Easy Online Access:</span>{" "}
                      Manage your account on the go with the Aqua mobile app or
                      through the online portal for complete account control.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#7EDDDC] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Contactless Payments:
                      </span>{" "}
                      Quick and convenient contactless payment capability for
                      purchases up to the current UK limit.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#7EDDDC] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Worldwide Acceptance:
                      </span>{" "}
                      Use your Aqua card wherever Mastercard is accepted, giving
                      you financial flexibility both at home and abroad.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Quick and Easy Application Process
                </h2>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  Applying for an Aqua Credit Card is straightforward and
                  designed with convenience in mind. You can check your
                  eligibility in as little as 60 seconds with no impact on your
                  credit score. This soft credit check allows Aqua to assess
                  your application without affecting your credit file, giving
                  you the confidence to explore your options without risk.
                </p>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  If your application is approved and you've accepted the credit
                  limit offered, Aqua will post your new card to you. You could
                  be on your way to building better credit before you know it.
                  The entire process is user-friendly and transparent, ensuring
                  you understand each step along the way.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Who Should Consider the Aqua Credit Card?
                </h2>

                <p className="text-left text-gray-800 text-sm leading-5 mb-4">
                  The Aqua Credit Card is particularly well-suited for:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#7EDDDC] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Credit builders and rebuilders:
                      </span>{" "}
                      Whether you're new to credit or recovering from past
                      financial setbacks, Aqua provides the tools and support to
                      help you establish or rebuild your credit profile.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#7EDDDC] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Those seeking transparency:
                      </span>{" "}
                      With clear terms, free credit score updates, and
                      responsive customer support, Aqua prioritises transparency
                      and customer education.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#7EDDDC] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Security-conscious consumers:
                      </span>{" "}
                      If you value robust fraud protection and 24/7 security
                      monitoring, Aqua's comprehensive security features provide
                      peace of mind for your financial transactions.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Important Information to Consider
                </h2>

                <p className="text-left text-gray-800 text-sm leading-5 mb-4 font-light">
                  The Aqua Classic credit card has a representative APR of 34.9%
                  (variable). The APR applicable to your account will depend on
                  Aqua's assessment of your application. Credit is available
                  only to UK residents aged 18 and over, subject to status.
                  Terms apply.
                </p>

                <p className="text-left text-gray-800 text-sm leading-5 mb-4 font-light">
                  <span className="font-semibold">Representative Example:</span>{" "}
                  When you spend £1,200 at a purchase rate of 34.9% p.a.
                  (variable) and make no further purchases or cash withdrawals,
                  making the minimum monthly repayments would result in total
                  interest charges. It's important to pay more than the minimum
                  payment whenever possible to reduce the overall interest you
                  pay and to pay off your balance more quickly.
                </p>

                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg my-6">
                  <p className="text-sm text-gray-800 font-semibold mb-2">
                    Important Notice:
                  </p>
                  <p className="text-sm text-gray-700 leading-5">
                    You should always aim to repay more than the minimum payment
                    to reduce the amount of interest you pay and clear your
                    balance faster. Missing payments can negatively impact your
                    credit score and may result in additional charges.
                  </p>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Building Better Credit with Aqua
                </h2>

                <p className="text-left text-gray-800 text-sm leading-5 mb-4 font-light">
                  The Aqua Credit Card is more than just a payment tool—it's a
                  comprehensive credit-building solution backed by expert
                  support, smart technology, and robust security. Whether you're
                  starting your credit journey, rebuilding after financial
                  challenges, or simply looking to improve your credit profile,
                  Aqua provides the resources and flexibility you need to
                  succeed. With personalized credit limits that grow with you,
                  free credit score tracking, and responsive customer support,
                  you'll have everything you need to build better credit with
                  confidence.
                </p>

                <div className="text-left my-8">
                  <Link href="/financial-solutions/aqua-credit-card-requirements">
                    <Button className="bg-[#7EDDDC] hover:bg-[#5ECCCB] text-white font-medium text-md py-2 px-8 rounded-full w-full">
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
