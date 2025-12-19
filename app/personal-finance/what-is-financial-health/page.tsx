import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import Image from "next/image";
import Link from "next/link";

export default function WhatIsFinancialHealthPage() {
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
              What Is Financial Health? A Quick Guide to Checking Your Vitals
            </h1>
            {/* Placeholder `<div>` for the Ad Unit 'square01' - centered and responsive */}
            <div id="square01" data-topads data-topads-size="square"></div>

            <div className="my-8 text-left sm:text-left">
              <p className="text-left sm:text-left text-lg text-gray-800 mb-4 leading-5">
                Financial health is a simple idea: how well your money supports
                your life today and in the future. It’s not about being rich —
                it’s about feeling in control, handling surprises, and making
                steady progress towards your goals. This quick guide will help
                you understand what financial health looks like in the UK and
                how to check your money “vitals” in minutes.
              </p>

              {/* TODO: Update image if needed */}
              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/uk/what-is-financial-health.webp"
                  alt="Financial health illustration for UK households"
                  width={800}
                  height={450}
                  className="w-full h-auto rounded-xl"
                  priority={false}
                  fetchPriority="high"
                  quality={85}
                  loading="eager"
                />
              </div>

              <section className="my-6">
                <h2 className="text-left sm:text-left text-xl font-bold text-gray-800 mb-4">
                  What does “financial health” actually mean?
                </h2>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-5 font-light">
                  Think of financial health like a MOT for your money. When
                  things are healthy, your essential costs are covered, you can
                  deal with the unexpected, and you’re moving towards the
                  milestones that matter to you (like building savings, paying
                  down debt, or planning a holiday). Key parts include:
                </p>
                <ul className="list-disc pl-6 mb-4 text-sm leading-5 font-light text-gray-800">
                  <li className="mb-2">
                    Cash flow that balances — your income covers your regular
                    outgoings without constant stress.
                  </li>
                  <li className="mb-2">
                    A modest buffer — some savings for life’s surprises.
                  </li>
                  <li className="mb-2">
                    Manageable borrowing — any debt you have is under control,
                    with payments made on time.
                  </li>
                  <li className="mb-2">
                    Clear goals — you’re putting small, regular steps behind the
                    things you want to achieve.
                  </li>
                </ul>
              </section>

              <section className="my-6">
                <h2 className="text-left sm:text-left text-xl font-bold text-gray-800 mb-4">
                  Why it matters in the UK
                </h2>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-5 font-light">
                  In the UK, everyday costs, credit card interest, and rising
                  bills can quickly eat into your budget. Understanding how APR
                  works on cards and loans can help you avoid paying more than
                  you need to. If you’re exploring cards, our guide to{" "}
                  <Link
                    href="/personal-finance/understanding-credit-card-interest-rates"
                    className="text-blue-600 hover:underline"
                  >
                    credit card interest rates
                  </Link>{" "}
                  explains the basics and how to keep borrowing costs down.
                </p>
              </section>

              <section className="my-6">
                <h2 className="text-left sm:text-left text-xl font-bold text-gray-800 mb-4">
                  Check your money “vitals” in 5 steps
                </h2>

                <h3 className="text-left sm:text-left text-lg font-semibold text-gray-700 mb-2 mt-4">
                  1) Your monthly balance
                </h3>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-5 font-light">
                  Do you have something left after bills and essentials? Even a
                  small consistent surplus is a positive sign — it can go to
                  savings or paying debt down faster.
                </p>

                <h3 className="text-left sm:text-left text-lg font-semibold text-gray-700 mb-2 mt-4">
                  2) Your emergency buffer
                </h3>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-5 font-light">
                  Could you cover a surprise expense without borrowing? Building
                  a basic buffer helps you avoid high-cost credit when life
                  happens.
                </p>

                <h3 className="text-left sm:text-left text-lg font-semibold text-gray-700 mb-2 mt-4">
                  3) Your borrowing picture
                </h3>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-5 font-light">
                  Are payments affordable, and are you paying on time? Keeping
                  credit card balances low and paying on schedule supports your
                  overall financial health. If you’re tackling balances, see{" "}
                  <Link
                    href="/personal-finance/getting-out-of-debt"
                    className="text-blue-600 hover:underline"
                  >
                    our practical guide to getting out of debt
                  </Link>
                  .
                </p>

                <h3 className="text-left sm:text-left text-lg font-semibold text-gray-700 mb-2 mt-4">
                  4) Your savings habits
                </h3>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-5 font-light">
                  Do you save something most months? Automating a small transfer
                  on payday is one of the easiest wins for long‑term stability.
                </p>

                <h3 className="text-left sm:text-left text-lg font-semibold text-gray-700 mb-2 mt-4">
                  5) Your plan for the next 90 days
                </h3>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-5 font-light">
                  Health improves with routine. Pick one or two small actions
                  (reduce a bill, add £10/week to savings, make an extra payment
                  on a balance) and repeat them for the next three months.
                </p>
              </section>

              <section className="my-6">
                <h2 className="text-left sm:text-left text-xl font-bold text-gray-800 mb-4">
                  Quick self‑check checklist
                </h2>
                <ul className="list-disc pl-6 mb-4 text-sm leading-5 font-light text-gray-800">
                  <li className="mb-2">
                    I know my monthly essentials and totals
                  </li>
                  <li className="mb-2">I have a small emergency buffer</li>
                  <li className="mb-2">My repayments are on time</li>
                  <li className="mb-2">
                    I’m saving something regularly, even if it’s modest
                  </li>
                  <li className="mb-2">
                    I have one or two clear money goals for the next 90 days
                  </li>
                </ul>
              </section>

              <section className="my-6">
                <h2 className="text-left sm:text-left text-xl font-bold text-gray-800 mb-4">
                  Common mistakes that hold people back
                </h2>
                <ul className="list-disc pl-6 mb-4 text-sm leading-5 font-light text-gray-800">
                  <li className="mb-2">
                    Only paying the minimum on credit cards without a plan to
                    reduce balances
                  </li>
                  <li className="mb-2">
                    No simple budget — losing track of where money actually goes
                  </li>
                  <li className="mb-2">
                    Relying on high‑cost credit for small, predictable expenses
                  </li>
                  <li className="mb-2">
                    Waiting for a “perfect moment” to start saving or organising
                    — small steps now beat big steps later
                  </li>
                </ul>
              </section>

              <section className="my-6">
                {/* Placeholder `<div>` for the Ad Unit 'square02' - centered and responsive */}
                <div id="square02" data-topads data-topads-size="square"></div>

                <h2 className="text-left sm:text-left text-xl font-bold text-gray-800 mb-4">
                  First steps to improve your financial health
                </h2>
                <ul className="list-disc pl-6 mb-4 text-sm leading-5 font-light text-gray-800">
                  <li className="mb-2">
                    Spend 20 minutes listing bills and essentials — this becomes
                    your baseline budget
                  </li>
                  <li className="mb-2">
                    Automate a small payday transfer to savings — consistency is
                    more important than the amount
                  </li>
                  <li className="mb-2">
                    If you have card balances, consider a plan to reduce them
                    faster — our{" "}
                    <Link
                      href="/personal-finance/top-credit-cards-0-intro-apr"
                      className="text-blue-600 hover:underline"
                    >
                      guide to 0% intro APR offers
                    </Link>{" "}
                    explains how promotional periods work and what to watch out
                    for
                  </li>
                  <li className="mb-2">
                    Review your regular subscriptions and tariffs — a quick tidy
                    can free up money for savings
                  </li>
                  <li className="mb-2">
                    Learn the basics of cards and borrowing with{" "}
                    <Link
                      href="/personal-finance/credit-card-types-benefits"
                      className="text-blue-600 hover:underline"
                    >
                      our credit card types and benefits guide
                    </Link>
                  </li>
                </ul>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-5 font-light">
                  Financial health isn’t about perfection. It’s about small,
                  repeatable habits that make next month a little easier than
                  the last. Start with one change this week and build from
                  there.
                </p>
              </section>

              {/* CTA Button */}
              <div className="mt-12 mb-6 text-center">
                <Link href="/personal-finance" className="cta-button-blue">
                  Explore More Personal Finance Guides
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
