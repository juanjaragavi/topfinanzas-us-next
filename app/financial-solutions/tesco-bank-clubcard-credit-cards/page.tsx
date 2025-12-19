import ResponsiveImage from "@/components/ui/responsive-image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Tesco Bank Clubcard Credit Cards: Earn Points on Every Purchase - Top Finance UK",
    description:
      "Discover Tesco Bank Clubcard Credit Cards offering 0% introductory rates, low APR options, and Clubcard points on everyday spending. Representative 24.9% APR (variable). Build credit whilst earning rewards.",
    keywords:
      "Tesco Bank Clubcard credit cards, Tesco credit card, Clubcard points, balance transfer credit card, 0% purchases, UK credit cards, low APR credit card, Foundation credit card",
  };
}

export default function TescoBankClubcardCreditCardsPage() {
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
              Tesco Bank Clubcard Credit Cards: Earn Rewards on Every Purchase
            </h1>

            <div className="my-8 text-left sm:text-left">
              <p className="text-left text-lg text-gray-800 font-medium mb-8 leading-5">
                Tesco Bank offers a comprehensive range of Clubcard Credit Cards
                designed to reward your everyday spending whilst providing
                flexible financial solutions, from 0% interest periods to
                credit-building options.
              </p>

              <div id="square01" data-topads data-topads-size="square"></div>

              <hr className="my-8" />

              <div className="space-y-2 my-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#00539f] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">Earn Clubcard Points:</span>{" "}
                    Collect Clubcard points on almost every purchase, turning
                    everyday spending into valuable vouchers for Tesco shopping,
                    fuel, and over 100 Reward Partners.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#00539f] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      0% Introductory Offers:
                    </span>{" "}
                    Choose from cards offering up to 34 months 0% on balance
                    transfers or 20 months 0% on purchases and balance transfers
                    combined.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#00539f] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">Low APR Alternative:</span>{" "}
                    Access competitive 10.9% APR representative (variable) with
                    the Low APR Credit Card for ongoing low-cost borrowing.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#00539f] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Credit Building Options:
                    </span>{" "}
                    The Foundation Credit Card helps build or rebuild your
                    credit score with starting limits from £200 and free access
                    to Tesco Bank CreditView for 3 years.
                  </div>
                </div>
              </div>

              <div className="text-left my-8">
                <Link href="/financial-solutions/tesco-bank-clubcard-credit-cards-requirements">
                  <Button className="bg-[#00539f] hover:bg-blue-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <div className="my-8 text-left sm:text-left">
                <ResponsiveImage
                  src="https://media.topfinanzas.com/images/uk/tesco-bank-clubcard-credit-cards.webp"
                  alt="Tesco Bank Clubcard Credit Cards"
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
                  Tesco Bank's Clubcard Credit Cards combine the convenience of
                  flexible credit with the tangible benefits of Tesco's renowned
                  loyalty scheme. Whether you're looking to consolidate existing
                  debts with lengthy 0% balance transfer periods, finance large
                  purchases with interest-free terms, or build your credit
                  history, there's a Clubcard Credit Card tailored to your
                  financial needs. Every eligible purchase earns Clubcard
                  points, which convert into vouchers at a rate of 100 points =
                  £1, redeemable in-store, at Tesco petrol stations, Esso sites
                  with Tesco Express, and through Tesco Reward Partners for even
                  greater value.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Balance Transfer and Purchase Options
                </h2>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  The Balance Transfer and Purchases Credit Card stands out with
                  its dual-purpose design, offering 0% interest guaranteed for
                  20 months on both purchases and balance transfers from account
                  opening. This makes it ideal for those wanting to consolidate
                  existing credit card debt (2.99% balance transfer fee applies)
                  whilst also having the flexibility to make new purchases
                  without interest charges. After the promotional period, the
                  representative APR of 24.9% (variable) applies on a typical
                  credit limit of £1,200.
                </p>

                <hr className="my-8" />

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  For those seeking maximum balance transfer duration, the
                  dedicated Balance Transfer Credit Card provides an impressive
                  0% interest guaranteed for 34 months on transferred balances
                  (3.45% fee), alongside 0% on money transfers for the first 9
                  months (3.99% fee). This extended promotional period allows
                  you to systematically pay down existing debt with a clear
                  repayment timeline, whilst still collecting Clubcard points on
                  all eligible spending.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  All Round Credit Card Flexibility
                </h2>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  The All Round Credit Card offers a balanced approach with 0%
                  interest guaranteed for 14 months on purchases, balance
                  transfers (2.49% fee), and money transfers (3.99% fee). This
                  versatile option suits those who want comprehensive 0%
                  coverage across all transaction types, providing breathing
                  room to manage finances without the burden of immediate
                  interest charges. The representative 24.9% APR (variable)
                  applies after the promotional period ends.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Low Fee Balance Transfer Solution
                </h2>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  If you're looking to minimise upfront costs when transferring
                  balances, the Low Fee Balance Transfer Credit Card offers 0%
                  interest guaranteed for 18 months with a notably low 0.99%
                  transfer fee. This significantly reduces the cost of
                  consolidating debt compared to standard balance transfer fees,
                  making it an economical choice for savvy borrowers. Money
                  transfers benefit from 0% interest for the first 9 months
                  (3.99% fee), and the representative APR is 24.9% (variable).
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
                    Discover More Credit Card Options:
                  </h3>
                  <ul className="space-y-2 list-disc list-inside text-blue-700">
                    <li>
                      <Link
                        href="/financial-solutions/barclaycard-avios-plus"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Barclaycard Avios Plus: Premium Travel Rewards
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/personal-finance/understanding-credit-card-interest-rates/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Understanding Credit Card Interest Rates
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/personal-finance/best-balance-transfer-credit-cards/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Guide to Balance Transfer Credit Cards
                      </Link>
                    </li>
                  </ul>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Low APR for Ongoing Borrowing
                </h2>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  The Low APR Credit Card delivers a competitive representative
                  rate of 10.9% APR (variable) on purchases, making it one of
                  the more affordable credit card options for those who
                  anticipate carrying a balance beyond introductory 0% periods.
                  This card is particularly suited to existing Tesco Bank
                  customers or those with strong credit histories, offering
                  long-term value whilst still earning Clubcard points on all
                  eligible spending.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Foundation Credit Card: Building Your Credit Future
                </h2>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  Designed specifically for those building or rebuilding credit,
                  the Foundation Credit Card offers starting credit limits
                  between £200 and £1,500 with monthly repayments from £25. A
                  standout feature is free access to Tesco Bank CreditView,
                  powered by TransUnion, for 3 years from account opening. This
                  service provides monthly credit score updates, helping you
                  track your progress as you establish a positive credit
                  history. The representative APR is 34.9% (variable), and
                  customers who manage their account responsibly may be
                  considered for regular optional credit limit increases.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Maximising Your Clubcard Points
                </h2>

                <p className="text-left text-gray-800 text-md leading-5 mb-4 font-light">
                  Beyond the core credit features, Tesco Bank Clubcard Credit
                  Cards transform everyday spending into tangible rewards:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#00539f] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">In-Store Rewards:</span>{" "}
                      Earn Clubcard points at Tesco stores, with 100 points
                      converting to £1 in vouchers for groceries and general
                      merchandise.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#00539f] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Fuel Savings:</span> Use
                      points for fuel at Tesco petrol stations and Esso sites
                      with Tesco Express, reducing your transport costs.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#00539f] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Enhanced Reward Value:
                      </span>{" "}
                      Exchange vouchers with over 100 Tesco Reward Partners for
                      2x more value on days out, dining, entertainment, and
                      travel experiences.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#00539f] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Digital Wallet Compatibility:
                      </span>{" "}
                      Use your Clubcard Credit Card with Apple Pay and Google
                      Pay whilst still collecting points on eligible
                      transactions.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Application and Eligibility Checking
                </h2>

                <p className="text-left text-gray-800 text-md leading-5 mb-4 font-light">
                  Tesco Bank provides an eligibility checker tool that allows
                  you to see if you're likely to be accepted for a Clubcard
                  Credit Card without affecting your credit score. This soft
                  search gives you confidence before making a formal
                  application. All cards are available to UK residents aged 18
                  and over, subject to status and credit approval.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Additional Card Features
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#00539f] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Contactless Payments:
                      </span>{" "}
                      Quick and convenient contactless technology for fast
                      transactions up to the current UK limit.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#00539f] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Online Management:</span>{" "}
                      Manage your account online and through the Tesco Bank
                      mobile app, with real-time transaction notifications and
                      balance tracking.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#00539f] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Security Features:</span>{" "}
                      Advanced fraud protection with 24/7 monitoring and secure
                      online payments through verified authentication.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#00539f] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Section 75 Protection:
                      </span>{" "}
                      Purchase protection for items costing between £100 and
                      £30,000, providing additional consumer safeguards.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Important Information
                </h2>

                <div className="bg-gray-50 border-l-4 border-[#00539f] p-4 my-6">
                  <p className="text-sm text-gray-800 mb-3 font-light leading-5">
                    <span className="font-semibold">
                      Representative Example:
                    </span>{" "}
                    Representative rate 24.9% APR (variable). Interest rate on
                    purchases 24.9% p.a. (variable). Based on a credit limit of
                    £1,200. Your APR and credit limit may vary depending on your
                    circumstances.
                  </p>
                  <p className="text-sm text-gray-800 mb-3 font-light leading-5">
                    Tesco Bank Credit Cards are provided by Tesco Bank, PO Box
                    344, Newcastle Upon Tyne, NE12 2GF. Tesco Bank is a trading
                    name of Barclays Bank UK PLC.
                  </p>
                  <p className="text-sm text-gray-800 font-light leading-5">
                    <span className="font-semibold">
                      Important information:
                    </span>{" "}
                    Credit is subject to status and affordability. Terms and
                    conditions apply. All applicants must be 18 or over and UK
                    residents. This information is for guidance purposes only
                    and does not constitute financial advice. We recommend
                    seeking independent financial advice before making credit
                    decisions. Your home may be at risk if you do not keep up
                    repayments on a mortgage or other loan secured on it.
                  </p>
                </div>

                <div className="text-left my-8">
                  <Link href="https://www.tescobank.com/credit-cards/">
                    <Button className="bg-[#00539f] hover:bg-blue-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                      Check Your Eligibility on Tesco Bank
                    </Button>
                  </Link>
                </div>
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
