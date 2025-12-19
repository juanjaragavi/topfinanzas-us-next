import ResponsiveImage from "@/components/ui/responsive-image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Nationwide Building Society Credit Card: Member Benefits & 0% Offers - Top Finance UK",
    description:
      "Nationwide's Member Credit Card offers two introductory 0% options: up to 24 months on balance transfers or 15 months on purchases. Representative 24.9% APR (variable). Available exclusively to Nationwide members.",
    keywords:
      "Nationwide credit card, building society credit card, 0% balance transfer, 0% purchases, member credit card, balance transfer credit card, purchase credit card UK, Nationwide member benefits",
  };
}

export default function NationwideBuildingSocietyCreditCardPage() {
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
              Nationwide Building Society Credit Card: Exclusive Member Benefits
              with Extended 0% Offers
            </h1>

            <div className="my-8 text-left sm:text-left">
              <p className="text-left text-lg text-gray-800 font-medium mb-8 leading-5">
                Nationwide Building Society's Member Credit Card is exclusively
                available to existing customers with a savings account, current
                account, or mortgage, offering two compelling introductory 0%
                interest options designed to help you manage debt or spread the
                cost of larger purchases—all backed by one of the UK's most
                trusted financial institutions.
              </p>

              <div id="square01" data-topads data-topads-size="square"></div>

              <hr className="my-8" />

              <div className="space-y-2 my-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#011546] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      0% Balance Transfers for up to 24 Months:
                    </span>{" "}
                    Transfer existing credit card balances and pay absolutely no
                    interest for up to 24 months, giving you two full years to
                    pay off debt without accumulating additional interest
                    charges.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#011546] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      0% Purchases for up to 15 Months:
                    </span>{" "}
                    Choose the purchase option and enjoy 0% interest on all new
                    purchases for 15 months, allowing you to spread the cost of
                    essential items or larger investments interest-free.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#011546] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Section 75 Protection:
                    </span>{" "}
                    All purchases between £100 and £30,000 are protected under
                    Section 75 of the Consumer Credit Act, giving you additional
                    recourse if something goes wrong with a purchase.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#011546] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Member-Exclusive Product:
                    </span>{" "}
                    Available only to existing Nationwide members with a
                    qualifying account, reflecting the mutual ethos of putting
                    members first with preferential rates and terms.
                  </div>
                </div>
              </div>

              <div className="text-left my-8">
                <Link href="/financial-solutions/nationwide-building-society-credit-card-requirements">
                  <Button className="bg-[#011546] hover:bg-green-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <div className="my-8 text-left sm:text-left">
                <ResponsiveImage
                  src="https://media.topfinanzas.com/images/uk/nationwide-building-society-credit-card.webp"
                  alt="Nationwide Building Society Credit Card with 0% balance transfer and purchase options"
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
                  Nationwide Building Society understands that different members
                  have different financial priorities. That's why their Member
                  Credit Card comes with a choice between two compelling
                  introductory offers, allowing you to select the option that
                  best matches your circumstances.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Two Introductory Offers Tailored to Your Financial Needs
                </h2>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  The first option provides a balanced solution if you need to
                  both transfer existing debt and make new purchases. You'll
                  receive 0% interest on balance transfers for 15 months and 0%
                  interest on purchases for 15 months, providing comprehensive
                  support for managing both existing and new credit commitments.
                  Additionally, you'll benefit from 0% interest on purchases for
                  3 months, giving you immediate breathing space for essential
                  spending.
                </p>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  The second option offers an extended 0% interest period on
                  balance transfers for 24 months—one of the longest available
                  from a UK building society. This extended interest-free period
                  means you can focus every penny of your monthly payments on
                  reducing the actual debt rather than servicing interest
                  charges, potentially saving you hundreds of pounds over the
                  introductory period.
                </p>

                <hr className="my-8" />

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Why Choose a Building Society Credit Card?
                </h2>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  Unlike traditional banks, Nationwide is a mutual building
                  society owned by its members, not shareholders. This
                  fundamental difference means that Nationwide can focus on
                  providing value to members rather than maximising profits for
                  external investors. The Member Credit Card exemplifies this
                  philosophy with competitive introductory rates, transparent
                  terms, and no hidden fees that might surprise you down the
                  line.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Understanding Costs and Interest Rates
                </h2>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  After your introductory 0% period ends, the standard variable
                  purchase rate of 24.9% APR applies to any outstanding balance.
                  This representative rate is typical for UK credit cards and
                  applies to most approved applicants, though your specific rate
                  may vary based on your individual credit assessment. It's
                  important to understand that if you don't pay off your balance
                  in full each month after the introductory period, you'll be
                  charged interest on the outstanding amount.
                </p>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  Representative Example: 24.9% APR representative (variable).
                  Based on an assumed credit limit of £1,200 and a purchase rate
                  of 24.9% p.a. (variable).
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
                        Understanding Credit Card Types
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/personal-finance/understanding-credit-card-interest-rates/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Credit Card Interest Rates Explained
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/personal-finance/top-credit-cards-0-intro-apr/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Best 0% Intro APR Credit Cards
                      </Link>
                    </li>
                  </ul>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Additional Features:
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#011546] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Build Your Credit Score:
                      </span>{" "}
                      Using your Nationwide credit card responsibly and paying
                      off your balance on time each month can help you build a
                      positive credit history.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#011546] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Emergency Financial Safety Net:
                      </span>{" "}
                      Having a credit card available provides a financial
                      cushion for unexpected expenses or emergencies. Whether
                      it's an urgent home repair or an unexpected medical
                      expense, your Nationwide credit card can help you cover
                      costs quickly when you need it most.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#011546] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Responsible Lending:
                      </span>{" "}
                      Nationwide is committed to responsible lending and
                      encourages all members to use credit cards wisely. Before
                      deciding whether to pay off your balance in full each
                      month or spread payments over a longer period, carefully
                      consider your financial situation and ability to make
                      repayments.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#011546] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Commission-Free Spending Abroad:
                      </span>{" "}
                      Some Nationwide credit cards offer commission-free
                      spending abroad, meaning you won't be charged for using
                      your card internationally for purchases. However, be aware
                      that cash withdrawals may still incur fees, so it's best
                      to check your specific terms before travelling.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Is the Nationwide Credit Card Right for You?
                </h2>

                <p className="text-left text-gray-800 text-sm leading-5 mb-4">
                  The Nationwide Building Society Member Credit Card is an
                  excellent choice if you're an existing Nationwide member
                  looking for competitive introductory 0% offers backed by one
                  of the UK's most trusted financial institutions. It's
                  particularly suitable for existing Nationwide members who want
                  to consolidate high-interest debt through balance transfers,
                  members who need extended interest-free periods to spread the
                  cost of essential purchases, and customers who value the
                  mutual ethos and member-focused approach of a building society
                  over traditional banks.
                </p>

                <div className="text-left my-8">
                  <Link href="/financial-solutions/nationwide-building-society-credit-card-requirements">
                    <Button className="bg-[#011546] hover:bg-blue-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                      View Requirements
                    </Button>
                  </Link>
                </div>

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
