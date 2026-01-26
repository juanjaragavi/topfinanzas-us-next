import ResponsiveImage from "@/components/ui/responsive-image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Yonder Credit Card: Epic Rewards with No Foreign Transaction Fees - Top Finance UK",
    description:
      "The Yonder Free Credit Card earns 1 point per £1 spent with no fees abroad, plus a £10 welcome offer and 1,000 bonus points when you spend £1,000 in 30 days.",
    keywords:
      "Yonder Credit Card, free credit card, rewards credit card, no foreign fees, Avios alternative, UK credit cards, travel rewards, points credit card",
  };
}

export default function YonderCreditCardPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col" data-category="cards">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-4xl font-bold text-gray-800 mb-8 leading-8">
              Yonder Credit Card: Earn Epic Rewards with Our Free Credit Card
            </h1>

            <div className="my-8 text-left sm:text-left">
              <p className="text-left text-lg text-gray-800 font-medium mb-8 leading-5">
                The Yonder Free Credit Card offers a modern approach to credit
                card rewards, combining generous points earning with an
                award-winning app and no fees on spending abroad—all without an
                annual fee.
              </p>

              <div id="square01" data-topads data-topads-size="square"></div>

              <hr className="my-8" />

              <div className="space-y-2 my-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#e88267] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">Welcome Offer:</span> Get
                    £10 off your first eligible purchase, plus 1,000 bonus
                    points when you spend £1,000 in your first 30 days.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#e88267] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">Earn Points Daily:</span>{" "}
                    Collect 1 point for every £1 you spend on everyday
                    purchases, turning routine spending into rewards.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#e88267] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">No Foreign Fees:</span>{" "}
                    Spend abroad with confidence—no foreign transaction fees on
                    international purchases or travel.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#e88267] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Award-Winning App Features:
                    </span>{" "}
                    Manage your account with top-notch in-app customer support,
                    spend breakdowns, and real-time notifications.
                  </div>
                </div>
              </div>

              <div className="text-left my-8">
                <Link href="/financial-solutions/yonder-credit-card-requirements">
                  <Button className="bg-[#e88267] hover:bg-orange-700 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <div className="my-8 text-left sm:text-left">
                <ResponsiveImage
                  src="https://cdn.prod.website-files.com/6209512878b45f39119ebfb5/6839943447d06a3292522ecd_head-p-800.webp"
                  alt="Yonder Free Credit Card on table"
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
                  The Yonder Free Credit Card represents a fresh approach to
                  credit card rewards in the UK market, designed for those who
                  want to earn meaningful rewards on everyday spending without
                  paying annual fees. With its modern app-based experience and
                  flexible rewards program, Yonder has quickly established
                  itself as an attractive alternative to traditional rewards
                  credit cards, particularly appealing to frequent travellers
                  and those who value digital-first banking experiences.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Turn Points into Experiences You'll Actually Love
                </h2>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  Unlike many traditional credit card rewards programs, Yonder
                  offers genuine flexibility in how you redeem your points. With
                  1 point earned for every £1 spent, you can turn your everyday
                  purchases into dining experiences, shopping vouchers,
                  entertainment tickets, travel bookings, and more. The
                  redemption options change monthly, ensuring fresh and relevant
                  choices that align with your lifestyle preferences rather than
                  forcing you into restrictive reward categories.
                </p>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  Based on maximum redemption rates with the Free Credit Card
                  (32.0% APR var.), if you spend £1,500 monthly, you could
                  potentially receive approximately £65 in dining rewards, £80
                  in shopping value, £90 in airport lounge access, £70 in
                  entertainment, £25 towards flights, or £15 in cashback
                  annually. Actual value varies by reward type and how you
                  choose to redeem, giving you control over maximizing the value
                  of your points.
                </p>

                <hr className="my-8" />

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Credit Line Up to £10,000
                </h2>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  Yonder offers credit limits up to £10,000, giving you
                  flexibility for larger purchases while still earning points on
                  every transaction. You'll benefit from a 15-day interest-free
                  period to pay back your balance each month, helping you manage
                  your finances effectively. The purchase rate is 31.93%
                  (variable) with a Representative APR of 32.0% (variable) based
                  on a £1,200 limit. As with all credit cards, it's important to
                  pay off your balance in full each month to avoid interest
                  charges and maximize the value of your rewards.
                </p>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6">
                  <h3 className="text-md font-semibold text-gray-800 mb-3 text-left">
                    Representative Example:
                  </h3>
                  <p className="text-sm text-gray-700 mb-2 text-left leading-5">
                    Representative 32.0% APR (variable) based on a £1,200 credit
                    limit. Purchase rate: 31.93% (variable).
                  </p>
                  <p className="text-sm text-gray-600 italic text-left leading-5">
                    If you borrow £1,200 at a purchase rate of 31.93% (variable)
                    and make minimum monthly payments, you'll pay interest on
                    the outstanding balance. Paying your balance in full each
                    month avoids interest charges.
                  </p>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Purchase Protection and Credit Building
                </h2>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  Yonder provides Section 75 Purchase Protection on purchases
                  over £100, giving you valuable consumer protection when making
                  larger transactions. This legal protection means that if
                  something goes wrong with a purchase—such as the retailer
                  going out of business or the goods not being delivered—you can
                  claim a refund from your credit card provider.
                </p>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  Additionally, responsible use of your Yonder Credit Card can
                  help improve your credit score. By making regular purchases
                  and paying off your balance on time, you demonstrate financial
                  responsibility to credit reference agencies, which can enhance
                  your creditworthiness for future financial products.
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
                        href="/personal-finance/best-rewards-credit-cards/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Maximizing Credit Card Rewards
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/personal-finance/understanding-credit-card-interest-rates/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Understanding Interest Rates
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/tarjetas"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Compare Top UK Credit Cards
                      </Link>
                    </li>
                  </ul>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Additional Features:
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e88267] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Airport Lounge Access:
                      </span>{" "}
                      Book airport lounges in the UK and around the world with
                      your Yonder card, transforming travel delays into
                      comfortable experiences.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e88267] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Use Points on Flights:
                      </span>{" "}
                      Redeem your accumulated points directly for flights,
                      turning everyday spending into travel opportunities.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e88267] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Flexible Recurring Payments:
                      </span>{" "}
                      Manage subscriptions and recurring bills with ease through
                      the Yonder app's intuitive payment management system.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e88267] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Split the Bill with Friends:
                      </span>{" "}
                      Yonder's innovative app features let you easily split
                      bills and send points to friends on Yonder, adding social
                      functionality to your credit card.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e88267] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Real-Time Notifications:
                      </span>{" "}
                      Stay informed about every transaction with instant
                      notifications, helping you monitor your spending and
                      detect any unauthorized activity immediately.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Award-Winning App Experience
                </h2>

                <p className="text-left text-gray-800 text-sm leading-5 mb-4">
                  Yonder's modern app provides features you'd expect from a
                  digital-first credit card provider, alongside innovative
                  capabilities that set it apart:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e88267] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Top-Notch Customer Support:
                      </span>{" "}
                      Access in-app customer support directly from your phone,
                      eliminating the need for lengthy phone calls or
                      frustrating automated systems.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e88267] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Spend Breakdowns:</span>{" "}
                      Understand your spending patterns with detailed breakdowns
                      by category, helping you make informed financial
                      decisions.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e88267] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Freeze and Replace Your Card:
                      </span>{" "}
                      Temporarily freeze your card if you've misplaced it, then
                      unfreeze it when found, or easily order a replacement—all
                      from the app.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e88267] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Swipe to Use Your Points:
                      </span>{" "}
                      The intuitive app interface makes redeeming your points as
                      simple as swiping, providing instant gratification for
                      your accumulated rewards.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  A Modern Credit Card for Today's Lifestyle
                </h2>

                <p className="text-left text-gray-800 text-sm leading-5 mb-4">
                  The Yonder Free Credit Card stands out in the UK credit card
                  market by combining the benefits of traditional rewards
                  programs with modern app-based functionality and no annual
                  fee. Whether you're a frequent traveller benefiting from no
                  foreign transaction fees, a rewards enthusiast earning points
                  on every purchase, or someone building their credit score
                  through responsible card use, Yonder offers a compelling
                  package that adapts to your lifestyle. The card's integration
                  with the Mastercard network ensures acceptance at over 44
                  million locations worldwide, while the app's innovative
                  features make managing your credit card genuinely convenient.
                </p>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6">
                  <p className="text-sm text-gray-700 text-left leading-5">
                    <span className="font-semibold">
                      Important Information:
                    </span>{" "}
                    Credit is subject to status and affordability. Yonder is a
                    trading name of Yonder Technology Ltd, company number
                    12739942, authorized and regulated by the Financial Conduct
                    Authority (FCA) under firm reference 946219. The Card is
                    issued by Transact Payments Limited pursuant to licence by
                    Mastercard International. This information is for guidance
                    only and does not constitute financial advice. You should
                    carefully consider whether this product is right for your
                    circumstances before applying.
                  </p>
                </div>

                <div className="text-left my-8">
                  <Link href="/financial-solutions/yonder-credit-card-requirements">
                    <Button className="bg-[#e88267] hover:bg-orange-700 text-white font-medium text-md py-2 px-8 rounded-full w-full">
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
