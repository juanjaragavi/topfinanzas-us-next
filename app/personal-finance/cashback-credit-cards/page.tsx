import { Header } from "@/components/layout/header"; // Add Header import
import { CompactFooter } from "@/components/layout/compact-footer"; // Add CompactFooter import
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import Image from "next/image"; // Add Image import
import Link from "next/link"; // Add Link import

export default function CashbackCreditCardsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-category="personal-finance"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-3xl font-bold text-gray-800 mb-4 leading-8">
              Best Cashback Credit Cards for Maximizing Your Rewards
            </h1>
            {/* Placeholder `<div>` for the Ad Unit 'square01' - centered and responsive */}
            <div id="square01" data-topads data-topads-size="square"></div>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 mb-8 leading-5">
                Discover the top cashback credit cards! Compare benefits like
                unlimited rewards, flexible redemption options, and introductory
                APR offers.
              </p>

              {/* TODO: Update image if needed */}
              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/uk/download-8-1.webp"
                  alt="Cashback Credit Cards" // Updated Alt Text
                  width={800}
                  height={450}
                  className="w-full h-auto rounded-xl"
                  priority={false}
                  fetchPriority="high"
                  quality={85}
                  loading="eager"
                />
              </div>

              <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                Cashback credit cards are an excellent way to make the most of
                your everyday spending by turning purchases into valuable
                rewards. Whether you’re looking for simple flat-rate cashback,
                customizable rewards tailored to your lifestyle, or a card that
                supports credit-building, these options offer significant value.
                With features like no annual fees, introductory APR offers, and
                flexible redemption options, the right cashback card can provide
                maximum value and financial flexibility. Explore the types of
                cashback credit cards available to find the one that best fits
                your spending habits and financial goals.
              </p>

              <section className="my-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Types of Cashback Credit Cards
                </h2>
                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  Cashback cards generally fall into a few categories:
                </p>
                <ul className="list-disc pl-6 mb-4 text-sm leading-5 font-light text-gray-800">
                  <li className="mb-2">
                    <strong>Flat-Rate Cashback Cards:</strong> These cards offer
                    a straightforward approach, providing a fixed percentage
                    (e.g., 1%, 1.5%, or even 2% on purchases and payments) back
                    on every purchase, regardless of the category. They are
                    simple to understand and require no effort to track
                    categories. Ideal for those who value simplicity and
                    consistent rewards across all spending.
                  </li>
                  <li className="mb-2">
                    <strong>Tiered/Category Cashback Cards:</strong> These cards
                    offer higher cashback rates (often 3% to 5%) in specific
                    spending categories, such as groceries, dining, fuel, or
                    travel. Some cards have rotating categories that change
                    quarterly, while others allow you to choose your bonus
                    categories. These cards can be highly rewarding if your
                    spending aligns well with the bonus categories, but require
                    more attention to maximize earnings.
                  </li>
                  <li className="mb-2">
                    <strong>Cards with Introductory Offers:</strong> Many
                    cashback cards, including flat-rate and category-based ones,
                    attract new customers with 0% introductory APR periods on
                    purchases or balance transfers. This can be valuable for
                    financing large purchases interest-free or consolidating
                    existing debt while still earning cashback rewards.
                  </li>
                </ul>
              </section>

              <section className="my-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Key Features to Compare
                </h2>
                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  When choosing a cashback card, consider these features:
                </p>
                <ul className="list-disc pl-6 mb-4 text-sm leading-5 font-light text-gray-800">
                  <li className="mb-2">
                    <strong>Cashback Rate:</strong> Compare the percentage
                    offered. Is it a flat rate or tiered? Do bonus categories
                    match your spending?
                  </li>
                  <li className="mb-2">
                    <strong>Annual Fee:</strong> Many excellent cashback cards
                    have no annual fee, maximizing your savings. If a card does
                    have a fee, ensure the rewards and benefits outweigh the
                    cost.
                  </li>
                  <li className="mb-2">
                    <strong>Welcome Bonus:</strong> Some cards offer a sign-up
                    bonus after meeting an initial spending requirement,
                    providing extra value upfront.
                  </li>
                  <li className="mb-2">
                    <strong>Redemption Options:</strong> How can you redeem your
                    cashback? Options often include statement credits, direct
                    bank deposits, gift cards, or travel rewards. Look for
                    flexibility and ease of redemption.
                  </li>
                  <li className="mb-2">
                    <strong>Introductory APR:</strong> If you plan to make a
                    large purchase or transfer a balance, look for cards with a
                    0% intro APR offer. Check the duration of the offer and the
                    standard APR that applies afterward.
                  </li>
                  <li className="mb-2">
                    <strong>Other Benefits:</strong> Consider additional perks
                    like purchase protection, travel insurance (less common on
                    cashback cards), or access to credit monitoring tools.
                  </li>
                </ul>
              </section>

              <section className="my-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Explore Specific Cashback Credit Card Offers
                </h2>
                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  Looking for specific cashback credit cards? Here are a few
                  options that offer compelling rewards:
                </p>
                <ul className="list-disc pl-6 mb-4 text-sm leading-5 font-light text-gray-800">
                  <li className="mb-2">
                    <Link
                      href="/financial-solutions/lloyds-bank-credit-card"
                      className="text-blue-600 hover:underline"
                    >
                      Lloyds Bank Credit Card:
                    </Link>{" "}
                    Offers cashback through its Everyday Offers program.
                  </li>
                  <li className="mb-2">
                    <Link
                      href="/financial-solutions/santander-uk-credit-card"
                      className="text-blue-600 hover:underline"
                    >
                      Santander UK All in One Credit Card:
                    </Link>{" "}
                    Known for its All in One cashback benefits.
                  </li>
                  <li className="mb-2">
                    <Link
                      href="/financial-solutions/natwest-credit-card"
                      className="text-blue-600 hover:underline"
                    >
                      NatWest Credit Card:
                    </Link>{" "}
                    Features the MyRewards program for earning cashback.
                  </li>
                </ul>
                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  To discover a broader range of credit cards, including various
                  cashback and rewards options, visit our{" "}
                  <Link
                    href="/financial-solutions"
                    className="text-blue-600 hover:underline"
                  >
                    Financial Solutions page
                  </Link>
                  .
                </p>
              </section>

              <section className="my-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Choosing the Right Cashback Card
                </h2>
                <ul className="list-disc pl-6 mb-4 text-sm leading-5 font-light text-gray-800">
                  <li className="mb-2">
                    <strong>For Simplicity Seekers:</strong> A flat-rate
                    cashback card offers consistent rewards with minimal effort.
                  </li>
                  <li className="mb-2">
                    <strong>For Strategic Spenders:</strong> If your spending is
                    concentrated in specific areas, a category cashback card can
                    yield higher returns, provided you track the categories.
                  </li>
                  <li className="mb-2">
                    <strong>For Debt Management:</strong> A card with a 0% intro
                    APR on balance transfers can help you save significantly on
                    interest while paying down debt.
                  </li>
                  <li className="mb-2">
                    <strong>For Students/Credit Builders:</strong> Look for
                    cashback cards specifically designed for students or those
                    building credit, which often have no annual fee and
                    accessible approval criteria.
                  </li>
                </ul>
              </section>

              <section className="my-6">
                {/* Placeholder `<div>` for the Ad Unit 'square02' - centered and responsive */}
                <div id="square02" data-topads data-topads-size="square"></div>

                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Unlock the Power of Cashback Rewards
                </h2>
                <p className="text-gray-800 mb-4 text-sm leading-5 font-light">
                  Choosing the right cashback credit card is a smart way to make
                  your everyday spending work for you. Whether you want
                  unlimited cashback, enhanced rewards in specific categories,
                  or the flexibility of a 0% intro APR, the right card can help
                  you maximize savings and financial freedom. With options that
                  combine cashback, travel perks, and cost-effective benefits,
                  you can turn routine purchases into valuable rewards. Take
                  control of your spending, explore the best options on our{" "}
                  <Link
                    href="/financial-solutions"
                    className="text-blue-600 hover:underline"
                  >
                    Financial Solutions section
                  </Link>
                  , and start earning today!
                </p>
              </section>

              {/* CTA Button */}
              <div className="mt-12 mb-6 text-center">
                <Link
                  href="/recomendador-de-tarjetas-de-credito-p1"
                  className="cta-button-orange"
                >
                  Explore Top Cashback Credit Cards
                </Link>
              </div>

              {/* AI Content Disclaimer */}
              <AIContentDisclaimer />
            </div>
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
