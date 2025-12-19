import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title:
      "How to Track Your Spending for 30 Days and Finally Know Where Your Money Goes | Top Finance UK",
    description:
      "Stop guessing about your finances. Learn a simple 30-day expense tracking method to discover where your money really goes and build lasting money management habits.",
    keywords:
      "track spending, expense tracking, money management, personal finance, budgeting UK, where does my money go, spending habits, 30 day challenge, financial awareness",
  };
}

export default function TrackSpending30DaysPage() {
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
              Stop Guessing: How to Track Your Spending for 30 Days and Finally
              Know Where Your Money Goes
            </h1>
            {/* Placeholder `<div>` for the Ad Unit 'square01' - centered and responsive */}
            <div id="square01" data-topads data-topads-size="square"></div>

            <div className="my-8 text-left sm:text-left">
              <p className="text-left sm:text-left text-lg text-gray-800 mb-4 leading-6">
                Ever reached the end of the month wondering where all your money
                went? You&apos;re not alone. According to research, many UK
                households struggle to account for a significant portion of
                their monthly spending. The solution isn&apos;t complicated
                budgets or expensive software — it&apos;s simply paying
                attention to where your money actually flows for 30 days.
              </p>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/uk/how-to-track-your-spending-for-30-days.webp"
                  alt="Person tracking their daily expenses in a notebook with receipts and a calculator on a desk"
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
                  Why 30 days is the magic number
                </h2>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  Tracking spending for a month captures your complete financial
                  picture. It includes your regular bills, weekly shops, monthly
                  subscriptions, and those unpredictable moments — a birthday
                  present here, an MOT expense there. A week is too short; three
                  months feels overwhelming. Thirty days is long enough to spot
                  patterns yet manageable enough to actually complete.
                </p>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  The goal isn&apos;t to judge yourself or feel guilty about
                  that coffee. It&apos;s to build awareness. Once you truly see
                  where your money goes, you can make informed choices about
                  what stays and what changes.
                </p>
              </section>

              <section className="my-6">
                <h2 className="text-left sm:text-left text-xl font-bold text-gray-800 mb-4">
                  Choosing your tracking method
                </h2>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  The best method is whichever one you&apos;ll actually use.
                  Here are the three most popular approaches:
                </p>

                <h3 className="text-left sm:text-left text-lg font-semibold text-gray-700 mb-2 mt-4">
                  1. The notes app approach
                </h3>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  Open your phone&apos;s notes app, create a new note titled
                  &quot;November Spending&quot; (or your current month), and jot
                  down every purchase as it happens. Include the amount, what
                  you bought, and where. This is brilliantly simple and always
                  accessible.
                </p>

                <h3 className="text-left sm:text-left text-lg font-semibold text-gray-700 mb-2 mt-4">
                  2. The spreadsheet method
                </h3>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  If you prefer columns and categories, a basic spreadsheet
                  (Google Sheets works well on mobile) lets you sort spending
                  into groups like groceries, transport, entertainment, and
                  essentials. At month&apos;s end, you can see totals at a
                  glance.
                </p>

                <h3 className="text-left sm:text-left text-lg font-semibold text-gray-700 mb-2 mt-4">
                  3. Banking app review
                </h3>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  Many UK bank apps now categorise transactions automatically.
                  If you pay for most things by card, reviewing your app weekly
                  can work — though cash spending gets missed. Some challenger
                  banks like Monzo and Starling excel at this, making it easy to
                  see spending patterns. For more on choosing the right tools,
                  see our guide to{" "}
                  <Link
                    href="/personal-finance/money-management-for-beginners"
                    className="text-blue-600 hover:underline"
                  >
                    money management for beginners
                  </Link>
                  .
                </p>
              </section>

              <section className="my-6">
                <h2 className="text-left sm:text-left text-xl font-bold text-gray-800 mb-4">
                  What to track (and what to watch for)
                </h2>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  Record every pound that leaves your account or wallet.
                  Everything. The £3.50 coffee, the £1.80 parking, the £8.99
                  streaming subscription you forgot about. Here&apos;s what
                  typically surprises people:
                </p>
                <ul className="list-disc pl-6 mb-4 text-sm leading-6 font-light text-gray-800">
                  <li className="mb-2">
                    <strong>Subscription stacking:</strong> Multiple streaming
                    services, gym memberships, app subscriptions, and delivery
                    passes can easily total £80-£150 monthly.
                  </li>
                  <li className="mb-2">
                    <strong>Convenience costs:</strong> Grabbing lunch out,
                    express delivery fees, and &quot;quick&quot; shop visits for
                    forgotten items add up faster than expected.
                  </li>
                  <li className="mb-2">
                    <strong>Forgotten direct debits:</strong> Insurance
                    auto-renewals, charity donations set up years ago, or
                    services you no longer use.
                  </li>
                  <li className="mb-2">
                    <strong>Treating yourself:</strong> Nothing wrong with
                    treats, but tracking shows whether they&apos;re occasional
                    or creeping toward daily.
                  </li>
                </ul>
              </section>

              <section className="my-6">
                <h2 className="text-left sm:text-left text-xl font-bold text-gray-800 mb-4">
                  Your 30-day tracking plan
                </h2>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  Here&apos;s a simple framework to make tracking sustainable:
                </p>
                <ul className="list-disc pl-6 mb-4 text-sm leading-6 font-light text-gray-800">
                  <li className="mb-2">
                    <strong>Days 1-7:</strong> Focus purely on recording.
                    Don&apos;t try to change anything yet — just observe and
                    write down every transaction.
                  </li>
                  <li className="mb-2">
                    <strong>Days 8-14:</strong> Start noticing patterns. Which
                    categories are bigger than expected? Where do impulse
                    purchases happen most?
                  </li>
                  <li className="mb-2">
                    <strong>Days 15-21:</strong> Begin gentle experiments. If
                    takeaway coffees are high, try bringing a flask two days a
                    week. Notice how it feels.
                  </li>
                  <li className="mb-2">
                    <strong>Days 22-30:</strong> Review and decide. What changes
                    felt sustainable? What wasn&apos;t worth the effort? Create
                    a simple plan for next month.
                  </li>
                </ul>
              </section>

              <section className="my-6">
                {/* Placeholder `<div>` for the Ad Unit 'square02' - centered and responsive */}
                <div id="square02" data-topads data-topads-size="square"></div>

                <h2 className="text-left sm:text-left text-xl font-bold text-gray-800 mb-4">
                  Turning awareness into action
                </h2>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  After 30 days, you&apos;ll have real data — not guesses. Use
                  this to make practical adjustments. Perhaps you&apos;ll cancel
                  one streaming service, batch your weekly shopping to avoid
                  impulse top-ups, or set a monthly limit for dining out.
                </p>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  Many people find that simply being aware naturally reduces
                  mindless spending. The act of writing &quot;£4.50 —
                  supermarket meal deal&quot; makes you pause before the next
                  purchase. For a deeper dive into building these habits, our
                  guide on{" "}
                  <Link
                    href="/personal-finance/creating-a-budget-youll-actually-stick-to"
                    className="text-blue-600 hover:underline"
                  >
                    creating a budget you&apos;ll actually stick to
                  </Link>{" "}
                  offers practical frameworks.
                </p>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  If tracking reveals you&apos;re carrying credit card balances,
                  understanding{" "}
                  <Link
                    href="/personal-finance/understanding-credit-card-interest-rates"
                    className="text-blue-600 hover:underline"
                  >
                    how credit card interest rates work
                  </Link>{" "}
                  can help you prioritise which debts to tackle first.
                </p>
              </section>

              <section className="my-6">
                <h2 className="text-left sm:text-left text-xl font-bold text-gray-800 mb-4">
                  Common obstacles and how to overcome them
                </h2>
                <ul className="list-disc pl-6 mb-4 text-sm leading-6 font-light text-gray-800">
                  <li className="mb-2">
                    <strong>&quot;I forgot to record something&quot;:</strong>{" "}
                    Check your banking app at the end of each day to catch
                    missed purchases. Set a phone reminder if helpful.
                  </li>
                  <li className="mb-2">
                    <strong>&quot;It feels too time-consuming&quot;:</strong>{" "}
                    Recording each purchase takes seconds. The weekly review
                    takes 10-15 minutes. That&apos;s less than one Netflix
                    episode.
                  </li>
                  <li className="mb-2">
                    <strong>
                      &quot;I don&apos;t want to see the truth&quot;:
                    </strong>{" "}
                    Knowledge is power. You cannot improve what you don&apos;t
                    measure. Most people feel relieved once they finally know.
                  </li>
                  <li className="mb-2">
                    <strong>
                      &quot;My partner won&apos;t track with me&quot;:
                    </strong>{" "}
                    Start with your own spending. Often, when one person gains
                    clarity, it inspires the other.
                  </li>
                </ul>
              </section>

              <section className="my-6">
                <h2 className="text-left sm:text-left text-xl font-bold text-gray-800 mb-4">
                  Your next steps
                </h2>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  Ready to start? Pick your tracking method today — notes app,
                  spreadsheet, or banking app review — and commit to 30 days.
                  Remember, this isn&apos;t about perfection. Miss a day? Pick
                  it back up the next. The goal is progress toward financial
                  awareness, not flawless record-keeping.
                </p>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  Once you complete your 30-day challenge, you&apos;ll have the
                  foundation for smarter{" "}
                  <Link
                    href="/personal-finance"
                    className="text-blue-600 hover:underline"
                  >
                    personal finance
                  </Link>{" "}
                  decisions — whether that&apos;s building savings, reducing
                  debt, or simply feeling more in control of where your money
                  goes each month.
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
