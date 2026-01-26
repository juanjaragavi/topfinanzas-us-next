import ResponsiveImage from "@/components/ui/responsive-image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "John Lewis Partnership Card: Earn Rewards on Everyday Shopping - Top Finance UK",
    description:
      "The John Lewis Partnership Credit Card lets you earn valuable points on everyday purchases at John Lewis, Waitrose, and beyond. Enjoy double points for 60 days and exclusive cardholder offers. Representative 29.9% APR (variable).",
    keywords:
      "John Lewis Partnership Card, John Lewis credit card, Waitrose credit card, rewards credit card, UK credit cards, shopping rewards, loyalty points, John Lewis Finance",
  };
}

export default function JohnLewisPartnershipCardPage() {
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
              John Lewis Partnership Card: Turn Everyday Shopping into Rewards
            </h1>

            <div className="my-8 text-left sm:text-left">
              <p className="text-left text-lg text-gray-800 font-medium mb-8 leading-5">
                The John Lewis Partnership Credit Card transforms your everyday
                spending into valuable rewards, offering points on purchases at
                John Lewis, Waitrose, and beyond, with exclusive perks for
                cardholders.
              </p>

              <div id="square01" data-topads data-topads-size="square"></div>

              <hr className="my-8" />

              <div className="space-y-2 my-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#DFFF7B] flex items-center justify-center mr-3">
                    <span className="text-gray-800 font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Double Points Welcome Offer:
                    </span>{" "}
                    Enjoy 10 points for every £4 spent at John Lewis and
                    Waitrose for your first 60 days.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#DFFF7B] flex items-center justify-center mr-3">
                    <span className="text-gray-800 font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Ongoing Shopping Rewards:
                    </span>{" "}
                    Earn 5 points for every £4 spent at John Lewis and Waitrose
                    after the introductory period, plus 1 point per £10 spent
                    elsewhere.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#DFFF7B] flex items-center justify-center mr-3">
                    <span className="text-gray-800 font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">Automatic Vouchers:</span>{" "}
                    Receive £5 gift vouchers for every 500 points automatically,
                    sent up to 3 times a year to spend at John Lewis and
                    Waitrose.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#DFFF7B] flex items-center justify-center mr-3">
                    <span className="text-gray-800 font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Exclusive Cardholder Perks:
                    </span>{" "}
                    Access special offers, prize draws, and opportunities to
                    boost your points throughout the year.
                  </div>
                </div>
              </div>

              <div className="text-left my-8">
                <Link href="/financial-solutions/john-lewis-partnership-card-requirements">
                  <Button className="bg-[#DFFF7B] hover:bg-[#c9e86c] text-gray-800 font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <div className="my-8 text-left sm:text-left">
                <ResponsiveImage
                  src="https://media.topfinanzas.com/images/uk/john-lewis-partnership-card.webp"
                  alt="John Lewis Partnership Credit Card"
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
                  The John Lewis Partnership Credit Card is designed for regular
                  shoppers at John Lewis and Waitrose who want to maximize the
                  value of their everyday spending. By converting purchases into
                  valuable points that become gift vouchers, this card rewards
                  your loyalty while providing flexible credit facilities for
                  managing your shopping expenses. Whether you're updating your
                  wardrobe, purchasing homeware, or doing your weekly shop,
                  every transaction brings you closer to your next reward.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Start Strong with Double Points
                </h2>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  New cardholders benefit from an attractive welcome offer that
                  accelerates your points earning from day one. For the first 60
                  days after opening your account, you'll earn double points on
                  eligible purchases at John Lewis and Waitrose—equivalent to 10
                  points for every £4 spent. This introductory bonus allows you
                  to quickly accumulate points towards your first gift voucher,
                  making it an ideal time to plan larger purchases or stock up
                  on essentials at Waitrose.
                </p>

                <hr className="my-8" />

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Earn Points on Every Purchase
                </h2>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  After the initial double points period, the card continues to
                  reward your spending with a generous standard earn rate.
                  You'll collect 5 points for every £4 spent on eligible
                  purchases at John Lewis and Waitrose, ensuring your regular
                  shopping trips consistently contribute to your rewards
                  balance. Additionally, the card earns 1 point for every £10
                  spent elsewhere, meaning you can accumulate points even when
                  shopping at other retailers, paying bills, or making everyday
                  purchases outside the Partnership stores.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Automatic Gift Vouchers Made Simple
                </h2>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  One of the most convenient features of the John Lewis
                  Partnership Card is the automatic conversion of points into
                  gift vouchers. Every 500 points you earn is automatically
                  converted into a £5 gift voucher, which is sent to you up to
                  three times per year. These vouchers can be spent on anything
                  you like at John Lewis and Waitrose, from groceries and
                  fashion to electronics and homeware. There's no need to
                  remember to claim your rewards or navigate complex redemption
                  processes—your vouchers arrive automatically, ready to use.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Exclusive Cardholder Benefits
                </h2>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  Beyond the standard points earning structure, John Lewis
                  Partnership Card holders enjoy access to exclusive perks
                  throughout the year. These include special cardholder-only
                  offers that provide opportunities to earn bonus points on
                  specific purchases or product categories. You'll also be
                  entered into regular prize draws and have access to seasonal
                  promotions designed to boost your points balance. These
                  additional benefits add significant value to the card, making
                  it more than just a standard rewards credit card.
                </p>

                <div className="my-8 text-left sm:text-left">
                  <Link href="/personal-finance/best-rewards-credit-cards/">
                    <ResponsiveImage
                      src="https://media.topfinanzas.com/images/ads/Top-Blog-Credit-Cards.webp"
                      alt="Learn More About Rewards Credit Cards"
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
                        Best Rewards Credit Cards in the UK
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/personal-finance/credit-card-types-benefits/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Understanding Credit Card Types and Benefits
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/personal-finance/cashback-credit-cards/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Cashback Credit Cards Guide
                      </Link>
                    </li>
                  </ul>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Convenient Account Management
                </h2>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  Managing your John Lewis Partnership Credit Card is
                  straightforward thanks to the dedicated mobile app and online
                  account access. Through these platforms, you can track your
                  points balance in real-time, monitor your spending, view your
                  transaction history, and manage your monthly payments. The app
                  also supports secure mobile payments through Apple Wallet and
                  Google Wallet, allowing you to make contactless payments with
                  your smartphone while still earning points on every
                  transaction.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Security and Support Features
                </h2>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  Your financial security is protected through advanced fraud
                  monitoring systems that track your account for suspicious
                  activity 24/7. Should you need assistance, customer support is
                  readily available through secure online chat accessed via the
                  app or website, ensuring you can resolve queries quickly and
                  conveniently. The card also includes standard credit card
                  protections such as Section 75 coverage for eligible purchases
                  between £100 and £30,000, providing additional peace of mind
                  when making significant purchases.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Additional Features:
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#DFFF7B] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-800 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Mobile Payments:</span>{" "}
                      Add your card to Apple Wallet or Google Wallet for secure,
                      contactless payments wherever you shop, while continuing
                      to earn points.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#DFFF7B] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-800 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Points Calculator:</span>{" "}
                      Use the online points calculator to estimate how quickly
                      you can earn vouchers based on your typical spending
                      patterns.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#DFFF7B] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-800 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Flexible Payments:</span>{" "}
                      Choose to pay your balance in full each month to avoid
                      interest charges, or spread costs with minimum payments
                      when needed.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#DFFF7B] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-gray-800 font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Section 75 Protection:
                      </span>{" "}
                      Benefit from additional consumer protection on purchases
                      between £100 and £30,000 under Section 75 of the Consumer
                      Credit Act.
                    </div>
                  </div>
                </div>

                <div className="my-8 p-6 bg-amber-50 border-l-4 border-amber-500 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 text-left">
                    Important Information
                  </h3>
                  <div className="space-y-2 text-sm text-gray-700 text-left">
                    <p>
                      <strong>Representative Example:</strong> Representative
                      29.9% APR (variable), based on an assumed credit limit of
                      £1,200. Purchase rate: 29.95% p.a. (variable).
                    </p>
                    <p>
                      <strong>Eligibility:</strong> Credit subject to status.
                      18+ years. UK residents only. Terms and conditions apply.
                      New applicants must have 12 months of UK address history,
                      a UK mobile phone number, email address, and cannot have
                      held a Partnership Credit Card in the last 12 months.
                    </p>
                    <p>
                      <strong>Important:</strong> Missed or late payments may
                      result in additional charges and could affect your credit
                      rating. Always check the current terms, interest rates,
                      and fees on the John Lewis Finance website before
                      applying.
                    </p>
                    <p className="text-xs mt-4">
                      John Lewis Finance Limited is a credit broker, not a
                      lender, introducing the Partnership Credit Card under
                      exclusive arrangements with NewDay Ltd. NewDay Ltd is
                      authorized and regulated by the Financial Conduct
                      Authority (FRN: 690292).
                    </p>
                  </div>
                </div>

                <div className="text-left my-8">
                  <Link href="/financial-solutions/john-lewis-partnership-card-requirements">
                    <Button className="bg-[#DFFF7B] hover:bg-[#c9e86c] text-gray-800 font-medium text-md py-2 px-8 rounded-full w-full">
                      Check Eligibility Requirements
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <AIContentDisclaimer />
      <CompactFooter />
    </main>
  );
}
