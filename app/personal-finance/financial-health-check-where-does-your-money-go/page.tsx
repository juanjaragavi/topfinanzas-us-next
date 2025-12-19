import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title:
      "The 5-Minute Financial Health Check: Where Does Your Money Go? - Top Finance UK",
    description:
      "Discover where your money really goes with our quick UK financial health check. Learn simple expense tracking methods that reveal spending patterns and help you take control in just minutes a day.",
    keywords:
      "personal finance, money management, expense tracking, financial health check, budgeting UK, track spending, money habits",
  };
}

export default function FinancialHealthCheckPage() {
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
              The 5-Minute Financial Health Check: Where Does Your Money Go?
            </h1>

            {/* Placeholder for Ad Unit 'square01' - centered and responsive */}
            <div id="square01" data-topads data-topads-size="square"></div>

            <div className="my-8 text-left sm:text-left">
              <p className="text-left sm:text-left text-lg text-gray-800 mb-4 leading-6">
                Ever reach the end of the month wondering where your salary
                went? You're not alone. Most UK households can't pinpoint more
                than 60% of their spending without checking bank statements. The
                good news: understanding your money flow doesn't require
                complicated spreadsheets or hours of work. A simple 5-minute
                weekly check-in can reveal patterns, plug leaks, and give you
                back control — starting today.
              </p>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/uk/financial-health-check-money-tracking.webp"
                  alt="UK personal finance tracking and budgeting tools for better money management"
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
                  Why tracking matters more than you think
                </h2>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  Before you can manage money effectively, you need visibility.
                  Tracking isn't about judgment or restriction — it's about
                  awareness. When you know where each pound goes, you can make
                  intentional choices rather than reacting to empty accounts at
                  month's end.
                </p>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  UK research shows the average person underestimates their
                  discretionary spending by 30–40%. Those "small" purchases —
                  meal deals, streaming subscriptions, contactless coffees —
                  quietly drain hundreds of pounds each month. A quick financial
                  health check surfaces these invisible leaks before they become
                  problems.
                </p>
              </section>

              <section className="my-6">
                <h2 className="text-left sm:text-left text-xl font-bold text-gray-800 mb-4">
                  The 5-minute method: three questions that tell you everything
                </h2>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  You don't need fancy software. Start with these three quick
                  checks each week:
                </p>
                <ol className="list-decimal pl-6 mb-4 text-sm leading-6 font-light text-gray-800">
                  <li className="mb-2">
                    <strong>What came in this week?</strong> Note your take-home
                    pay, side income, benefits, or any other money that landed
                    in your account. Write the total.
                  </li>
                  <li className="mb-2">
                    <strong>What went out?</strong> Check your bank app or
                    statements. List the big stuff first (rent, bills, debt
                    payments), then capture the rest — groceries, transport,
                    eating out, impulse buys. Use rough categories, not
                    penny-perfect detail.
                  </li>
                  <li className="mb-2">
                    <strong>Where's the gap?</strong> Subtract outgoings from
                    income. If you're negative, identify which category
                    surprised you. If you're positive, celebrate — and decide
                    where that surplus goes (savings, debt reduction, or planned
                    spending).
                  </li>
                </ol>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  That's it. Five minutes, once a week. Over a month, patterns
                  emerge: which categories consistently overshoot, which days
                  trigger impulse spending, and where small tweaks make the
                  biggest impact.
                </p>
              </section>

              <section className="my-6">
                <h2 className="text-left sm:text-left text-xl font-bold text-gray-800 mb-2">
                  Common spending traps UK households miss
                </h2>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  When you start tracking, these silent budget killers often
                  appear:
                </p>
                <ul className="list-disc pl-6 mb-4 text-sm leading-6 font-light text-gray-800">
                  <li className="mb-2">
                    <strong>Subscription creep:</strong> That £7.99 streaming
                    service you forgot about, plus two others you signed up for
                    "just one month." They auto-renew quietly and cost £200–£300
                    a year.
                  </li>
                  <li className="mb-2">
                    <strong>Contactless convenience:</strong> Tap-and-go
                    purchases feel painless but add up fast. £4 coffees, £3 meal
                    deals, £6 lunches — easily £50–£80 a week if unchecked.
                  </li>
                  <li className="mb-2">
                    <strong>Weekend splurges:</strong> Friday takeaways,
                    Saturday shopping, Sunday pub visits. These "treats" can
                    silently consume 20–30% of discretionary income.
                  </li>
                  <li className="mb-2">
                    <strong>Debt minimum payments:</strong> Paying only the
                    minimum on credit cards keeps balances high and interest
                    compounding. If you carry balances, understanding{" "}
                    <Link
                      href="/personal-finance/understanding-credit-card-interest-rates"
                      className="text-blue-600 hover:underline"
                    >
                      how credit card interest works
                    </Link>{" "}
                    helps you tackle them strategically.
                  </li>
                </ul>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  None of these are "bad" on their own — but if you're not
                  tracking, they become invisible drains that leave you short
                  each month.
                </p>
              </section>

              <section className="my-6">
                <h2 className="text-left sm:text-left text-xl font-bold text-gray-800 mb-2">
                  Simple tracking tools (pick what fits your life)
                </h2>
                <h3 className="text-left sm:text-left text-lg font-semibold text-gray-700 mb-2 mt-4">
                  Paper or notes app
                </h3>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  Old-school but effective. Jot down spending as it happens. At
                  week's end, tally by category. No logins, no syncing — just
                  pen and paper (or your phone's notes app).
                </p>
                <h3 className="text-left sm:text-left text-lg font-semibold text-gray-700 mb-2 mt-4">
                  Banking app categories
                </h3>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  Most UK banks (Monzo, Starling, Lloyds, NatWest)
                  auto-categorise transactions. Review weekly to spot trends.
                  Some let you set category budgets and alert you when you're
                  close to limits.
                </p>
                <h3 className="text-left sm:text-left text-lg font-semibold text-gray-700 mb-2 mt-4">
                  Dedicated budgeting apps
                </h3>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  Apps like Emma, Snoop, or Money Dashboard link all your
                  accounts for a complete picture. They track spending
                  automatically, flag unusual patterns, and help you set goals.
                  Great if you want deeper insights without manual entry.
                </p>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  The best tool is the one you'll actually use. Don't
                  overcomplicate — consistency beats perfection.
                </p>
              </section>

              <section className="my-6">
                <h2 className="text-left sm:text-left text-xl font-bold text-gray-800 mb-4">
                  What to do when you find the leaks
                </h2>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  Once you've tracked for a few weeks, patterns emerge. Here's
                  how to respond:
                </p>
                <ul className="list-disc pl-6 mb-4 text-sm leading-6 font-light text-gray-800">
                  <li className="mb-2">
                    <strong>Trim the obvious waste:</strong> Cancel unused
                    subscriptions, swap branded groceries for own-label, pack
                    lunch twice a week. Small cuts free up £50–£100 monthly
                    without lifestyle sacrifice.
                  </li>
                  <li className="mb-2">
                    <strong>Redirect windfalls wisely:</strong> Found £80 in
                    savings this month? Don't let it vanish into general
                    spending. Move it to an emergency buffer, clear
                    high-interest debt, or fund a specific goal. For more on
                    building sustainable money habits, see our guide on{" "}
                    <Link
                      href="/personal-finance/money-management-for-beginners"
                      className="text-blue-600 hover:underline"
                    >
                      money management for beginners
                    </Link>
                    .
                  </li>
                  <li className="mb-2">
                    <strong>Tackle high-cost debt first:</strong> If you're
                    carrying balances at 20%+ APR, consider a{" "}
                    <Link
                      href="/personal-finance/top-credit-cards-0-intro-apr"
                      className="text-blue-600 hover:underline"
                    >
                      0% balance transfer card
                    </Link>{" "}
                    or a consolidation loan to reduce interest and pay down
                    faster.
                  </li>
                  <li className="mb-2">
                    <strong>Automate the good stuff:</strong> Set up a standing
                    order on payday to move savings or extra debt payments
                    automatically. That way, your plan happens without relying
                    on willpower.
                  </li>
                </ul>
              </section>

              <section className="my-6">
                {/* Placeholder for Ad Unit 'square02' - centered and responsive */}
                <div id="square02" data-topads data-topads-size="square"></div>

                <h2 className="text-left sm:text-left text-xl font-bold text-gray-800 mb-4">
                  A real UK example
                </h2>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  Meet Sarah, a Manchester-based teacher earning £2,400 a month
                  after tax. She felt constantly skint but couldn't explain why.
                  After tracking for three weeks, she discovered:
                </p>
                <ul className="list-disc pl-6 mb-4 text-sm leading-6 font-light text-gray-800">
                  <li className="mb-2">
                    £85/month on four streaming subscriptions (she actively used
                    one)
                  </li>
                  <li className="mb-2">
                    £120/month on impulse clothing purchases (mostly online,
                    late-night browsing)
                  </li>
                  <li className="mb-2">
                    £60/month on work lunches she could easily pack at home
                  </li>
                </ul>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  Total: £265 monthly — over £3,000 a year. She kept one
                  streaming service, unsubscribed the rest, set a £40/month
                  clothing budget, and packed lunch three days a week. Within
                  two months, she'd cleared a persistent credit card balance and
                  started building a proper emergency fund. The tracking itself
                  took five minutes every Sunday evening.
                </p>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  The lesson: visibility creates choice. You can't fix patterns
                  you can't see.
                </p>
              </section>

              <section className="my-6">
                <h2 className="text-left sm:text-left text-xl font-bold text-gray-800 mb-4">
                  Your 5-minute action plan for this week
                </h2>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  Don't wait for the "perfect" system. Start now with these
                  quick wins:
                </p>
                <ol className="list-decimal pl-6 mb-6 text-sm leading-6 font-light text-gray-800">
                  <li className="mb-2">
                    <strong>Pick your tracking method:</strong> Notes app,
                    banking app categories, or a budgeting tool. Choose one and
                    commit to five minutes every Sunday.
                  </li>
                  <li className="mb-2">
                    <strong>Review last week's spending:</strong> Open your bank
                    app right now. Scan the last seven days and write down what
                    you spent by rough category (essentials, food, fun,
                    transport).
                  </li>
                  <li className="mb-2">
                    <strong>Spot one quick saving:</strong> Find one thing you
                    can trim this week — a subscription, a habit, a swappable
                    expense. Redirect those pounds to savings or debt.
                  </li>
                  <li className="mb-2">
                    <strong>Set a weekly reminder:</strong> Calendar a recurring
                    5-minute slot every Sunday evening. Make it routine, like
                    brushing your teeth.
                  </li>
                </ol>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  That's your financial health check. Simple, fast, and
                  powerful. After a month, you'll have clarity. After three
                  months, you'll wonder how you ever managed without it.
                </p>
              </section>

              <section className="my-6">
                <h2 className="text-left sm:text-left text-xl font-bold text-gray-800 mb-4">
                  Next steps and resources
                </h2>
                <ul className="list-disc pl-6 mb-6 text-sm leading-6 font-light text-gray-800">
                  <li className="mb-2">
                    Ready to build a full budget? Start with our{" "}
                    <Link
                      href="/personal-finance/money-management-for-beginners"
                      className="text-blue-600 hover:underline"
                    >
                      beginner's guide to money management
                    </Link>
                    .
                  </li>
                  <li className="mb-2">
                    Carrying debt? Learn{" "}
                    <Link
                      href="/personal-finance/getting-out-of-debt"
                      className="text-blue-600 hover:underline"
                    >
                      practical strategies for getting out of debt
                    </Link>{" "}
                    and regaining control.
                  </li>
                  <li className="mb-2">
                    Want to understand credit better? Explore the{" "}
                    <Link
                      href="/personal-finance/credit-card-types-benefits"
                      className="text-blue-600 hover:underline"
                    >
                      types and benefits of different credit cards
                    </Link>{" "}
                    so you choose products that work for you.
                  </li>
                  <li className="mb-2">
                    Browse more helpful guides in our{" "}
                    <Link
                      href="/personal-finance"
                      className="text-blue-600 hover:underline"
                    >
                      Personal Finance section
                    </Link>
                    .
                  </li>
                </ul>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  Final thought: financial health isn't about perfection or
                  restriction. It's about knowing where your money goes so you
                  can decide where it should go. Five minutes a week gives you
                  that power. Start this Sunday.
                </p>
              </section>

              <div className="mt-12 mb-6 text-center">
                <Link href="/personal-finance" className="cta-button-blue">
                  Explore More Personal Finance Guides
                </Link>
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
