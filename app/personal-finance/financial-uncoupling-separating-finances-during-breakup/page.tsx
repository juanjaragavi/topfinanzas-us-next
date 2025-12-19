import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title:
      "Financial Uncoupling: A Compassionate Guide to Separating Finances During a Breakup - Top Finance UK",
    description:
      "Practical UK guidance on separating finances during a breakup. Learn how to untangle joint accounts, manage shared debts, protect your credit, and rebuild financial independence with clarity and confidence.",
    keywords:
      "personal finance, financial uncoupling, separating finances, breakup finances UK, joint account separation, shared debt breakup, divorce finances, financial independence after breakup",
  };
}

export default function FinancialUncouplingPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-category="personal-finance"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left md:text-3xl font-bold text-gray-800 mb-4 leading-8">
              Financial Uncoupling: A Compassionate Guide to Separating Finances
              During a Breakup
            </h1>

            {/* Ad unit placeholder (centered and responsive) */}
            <div id="square01" data-topads data-topads-size="square"></div>

            <p className="text-left text-lg text-gray-800 mb-6 leading-7">
              Ending a relationship is emotionally challenging — and when your
              finances are woven together, the practical side can feel just as
              overwhelming. Whether you're navigating a separation, divorce, or
              the end of a partnership, untangling joint accounts, shared debts,
              and everyday money commitments requires clarity, structure, and a
              calm plan. This UK‑focused guide walks you through the essential
              steps so you can protect your financial future and rebuild with
              confidence.
            </p>

            <div className="my-8">
              <Image
                src="https://media.topfinanzas.com/images/uk/financial-uncoupling-separating-finances-during-breakup.webp"
                alt="Person reviewing financial documents during separation to untangle joint finances in the UK"
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
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                What is financial uncoupling?
              </h2>
              <p className="text-gray-800 mb-4 text-sm leading-6 font-light">
                Financial uncoupling is the process of separating all shared
                money commitments, accounts, and responsibilities when a
                relationship ends. It covers joint bank accounts, shared credit
                cards, mortgages or tenancies, utility bills, subscriptions, and
                any debts you hold together. The goal is to create clear,
                independent financial positions so neither party carries
                unexpected liabilities or loses access to essential funds.
              </p>
              <p className="text-gray-800 mb-4 text-sm leading-6 font-light">
                In the UK, this process often runs alongside formal separation
                or divorce proceedings, but it applies equally to unmarried
                couples who've shared finances. Even informal arrangements — a
                joint account for household bills or a credit card in one
                person's name used by both — need careful unpicking.
              </p>
            </section>

            <section className="my-6">
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                Why separating finances matters
              </h2>
              <p className="text-gray-800 mb-4 text-sm leading-6 font-light">
                When your finances remain linked after a relationship ends,
                you're exposed to ongoing risk. A missed payment on a joint
                credit card or loan affects both credit files. An overdrawn
                joint account can leave you liable for charges. Continued
                financial entanglement can delay emotional closure and create
                unnecessary conflict.
              </p>
              <ul className="list-disc pl-6 mb-4 text-sm leading-6 font-light text-gray-800">
                <li className="mb-2">
                  <strong>Protect your credit:</strong> Joint debts mean shared
                  responsibility. One person's late payment damages both credit
                  scores.
                </li>
                <li className="mb-2">
                  <strong>Control your spending:</strong> Without clear
                  boundaries, unexpected withdrawals or charges can derail your
                  new budget.
                </li>
                <li className="mb-2">
                  <strong>Rebuild independence:</strong> Having your own
                  accounts and systems in place gives you a stable foundation to
                  move forward.
                </li>
                <li className="mb-2">
                  <strong>Avoid future disputes:</strong> Clear financial
                  separation reduces the chance of disagreements over money
                  months or years later.
                </li>
              </ul>
            </section>

            <section className="my-6">
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                Step 1: Gather your financial paperwork
              </h2>
              <p className="text-gray-800 mb-4 text-sm leading-6 font-light">
                Before you make any changes, build a complete picture. List
                every shared commitment, even small subscriptions or standing
                orders. This clarity prevents surprises later.
              </p>
              <h3 className="text-lg font-semibold text-gray-700 mb-2 mt-4">
                What to collect
              </h3>
              <ul className="list-disc pl-6 mb-4 text-sm leading-6 font-light text-gray-800">
                <li className="mb-2">
                  Recent statements for all joint bank accounts (current,
                  savings, ISAs).
                </li>
                <li className="mb-2">
                  Credit card statements where either of you is named or an
                  authorised user.
                </li>
                <li className="mb-2">
                  Mortgage or tenancy agreement documents.
                </li>
                <li className="mb-2">
                  Utility bills, council tax, insurance policies, phone
                  contracts, and subscription services.
                </li>
                <li className="mb-2">
                  Loan agreements (personal loans, car finance,
                  buy‑now‑pay‑later plans).
                </li>
                <li className="mb-2">
                  Any direct debits or standing orders linked to joint accounts.
                </li>
              </ul>
              <p className="text-gray-800 mb-4 text-sm leading-6 font-light">
                If you're struggling to track everything, request a copy of your
                credit report from Experian, Equifax, or TransUnion. This will
                show joint accounts and financial associations on your file.
              </p>
            </section>

            <section className="my-6">
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                Step 2: Agree a separation plan (or seek mediation)
              </h2>
              <p className="text-gray-800 mb-4 text-sm leading-6 font-light">
                Open communication is ideal, but not always possible. If you can
                discuss finances calmly with your former partner, agree on how
                to handle each shared commitment. If communication is difficult
                or emotions run high, consider using a mediator or solicitor to
                facilitate decisions.
              </p>
              <h3 className="text-lg font-semibold text-gray-700 mb-2 mt-4">
                Key questions to resolve
              </h3>
              <ul className="list-disc pl-6 mb-4 text-sm leading-6 font-light text-gray-800">
                <li className="mb-2">
                  Who will close or keep the joint bank account?
                </li>
                <li className="mb-2">
                  How will you split any remaining balance or overdraft?
                </li>
                <li className="mb-2">
                  Which bills will each person take sole responsibility for?
                </li>
                <li className="mb-2">
                  Who will continue living in a jointly rented or owned
                  property, or will you both move out?
                </li>
                <li className="mb-2">
                  How will shared debts be paid off — together or individually?
                </li>
              </ul>
              <p className="text-gray-800 mb-4 text-sm leading-6 font-light">
                Document your agreements in writing, even informally. If legal
                advice is needed, organisations like the Money and Pensions
                Service (MoneyHelper) offer free impartial guidance for UK
                residents.
              </p>
            </section>

            <section className="my-6">
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                Step 3: Close or separate joint accounts
              </h2>
              <p className="text-gray-800 mb-4 text-sm leading-6 font-light">
                Joint accounts are a primary financial link. If you both agree,
                close the account and open individual accounts at separate
                banks. If one person wants to keep the account, the other must
                formally request removal — most UK banks require both account
                holders to consent.
              </p>
              <h3 className="text-lg font-semibold text-gray-700 mb-2 mt-4">
                Practical steps
              </h3>
              <ol className="list-decimal pl-6 mb-4 text-sm leading-6 font-light text-gray-800">
                <li className="mb-2">
                  Transfer any remaining balance to separate accounts or use it
                  to clear shared debts.
                </li>
                <li className="mb-2">
                  Cancel all direct debits and standing orders from the joint
                  account.
                </li>
                <li className="mb-2">
                  Set up new direct debits from your individual account for
                  bills you're now responsible for.
                </li>
                <li className="mb-2">
                  Contact your bank to formally close the account or remove one
                  party. Request written confirmation.
                </li>
              </ol>
              <p className="text-gray-800 mb-4 text-sm leading-6 font-light">
                If the account is overdrawn, decide how you'll clear the
                balance. Both parties remain liable for overdrafts on joint
                accounts until the account is closed and the debt is settled.
              </p>
            </section>

            <section className="my-6">
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                Step 4: Untangle shared credit and debt
              </h2>
              <p className="text-gray-800 mb-4 text-sm leading-6 font-light">
                Joint credit cards, loans, or mortgages tie your credit files
                together. Even after separation, missed payments by one person
                affect both. Addressing these quickly protects your financial
                future.
              </p>
              <h3 className="text-lg font-semibold text-gray-700 mb-2 mt-4">
                Joint credit cards
              </h3>
              <p className="text-gray-800 mb-4 text-sm leading-6 font-light">
                Contact the card provider to close the account or remove one
                user. If there's an outstanding balance, agree who will pay it.
                If you can't pay immediately, consider a balance transfer to a
                0% intro APR card in one person's name to buy breathing room.
                Our guide to{" "}
                <Link
                  href="/personal-finance/top-credit-cards-0-intro-apr"
                  className="text-blue-600 hover:underline"
                >
                  0% intro APR cards
                </Link>{" "}
                explains how these work.
              </p>
              <h3 className="text-lg font-semibold text-gray-700 mb-2 mt-4">
                Personal loans
              </h3>
              <p className="text-gray-800 mb-4 text-sm leading-6 font-light">
                If you have a joint loan, both parties remain responsible until
                it's fully repaid. You can't simply remove one name. Options
                include paying off the loan together, refinancing into one
                person's name (if they qualify), or setting up a formal
                repayment agreement. If refinancing is necessary, review{" "}
                <Link
                  href="/personal-finance/best-personal-loans"
                  className="text-blue-600 hover:underline"
                >
                  UK personal loan options
                </Link>{" "}
                to find competitive rates.
              </p>
              <h3 className="text-lg font-semibold text-gray-700 mb-2 mt-4">
                Mortgages
              </h3>
              <p className="text-gray-800 mb-4 text-sm leading-6 font-light">
                Joint mortgages are complex. If one person stays in the
                property, they'll need to remortgage in their name alone
                (subject to affordability checks). If both leave, you may need
                to sell the property or agree on one party buying out the
                other's share. Speak to a mortgage adviser or solicitor for
                tailored guidance.
              </p>
            </section>

            <section className="my-6">
              {/* Ad unit placeholder (centered and responsive) */}
              <div id="square02" data-topads data-topads-size="square"></div>

              <h2 className="text-xl font-bold text-gray-800 mb-3">
                Step 5: Update utility bills and household commitments
              </h2>
              <p className="text-gray-800 mb-4 text-sm leading-6 font-light">
                Even if you're not jointly liable for utilities, bills in one
                person's name can create confusion. Transfer accounts into the
                appropriate person's name and cancel any you no longer need.
              </p>
              <ul className="list-disc pl-6 mb-4 text-sm leading-6 font-light text-gray-800">
                <li className="mb-2">
                  Contact energy, water, broadband, and phone providers to
                  update account holders.
                </li>
                <li className="mb-2">
                  Inform the council tax department of your change in
                  circumstances. If one person moves out, they may need to pay
                  council tax on their new property immediately.
                </li>
                <li className="mb-2">
                  Review subscriptions — streaming services, gym memberships,
                  insurance policies — and cancel or transfer them.
                </li>
              </ul>
            </section>

            <section className="my-6">
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                Step 6: Remove financial associations from your credit file
              </h2>
              <p className="text-gray-800 mb-4 text-sm leading-6 font-light">
                In the UK, when you open a joint account or apply for joint
                credit, lenders create a "financial association" between you and
                your partner. This link remains on your credit file even after
                you separate, and it can affect your ability to borrow in the
                future.
              </p>
              <p className="text-gray-800 mb-4 text-sm leading-6 font-light">
                Once all joint accounts and debts are closed, contact the main
                credit reference agencies (Experian, Equifax, TransUnion) and
                request a "notice of disassociation". This removes the financial
                link from your file. You'll need to provide evidence that all
                joint commitments have ended.
              </p>
            </section>

            <section className="my-6">
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                Step 7: Build your independent financial foundation
              </h2>
              <p className="text-gray-800 mb-4 text-sm leading-6 font-light">
                Once you've separated your finances, focus on rebuilding
                stability and confidence. This is your opportunity to create a
                system that truly fits your life.
              </p>
              <h3 className="text-lg font-semibold text-gray-700 mb-2 mt-4">
                Create a new budget
              </h3>
              <p className="text-gray-800 mb-4 text-sm leading-6 font-light">
                Your income and expenses have changed. Start fresh with a budget
                that reflects your new reality. Our guide to{" "}
                <Link
                  href="/personal-finance/creating-a-budget-youll-actually-stick-to"
                  className="text-blue-600 hover:underline"
                >
                  creating a budget you'll actually stick to
                </Link>{" "}
                offers simple frameworks that work.
              </p>
              <h3 className="text-lg font-semibold text-gray-700 mb-2 mt-4">
                Rebuild your emergency fund
              </h3>
              <p className="text-gray-800 mb-4 text-sm leading-6 font-light">
                Aim for at least 3 months' essential expenses in a separate
                savings account. Even £25–£50 a month builds confidence over
                time.
              </p>
              <h3 className="text-lg font-semibold text-gray-700 mb-2 mt-4">
                Protect your credit
              </h3>
              <p className="text-gray-800 mb-4 text-sm leading-6 font-light">
                Make all payments on time, keep balances low, and avoid applying
                for multiple new credit products in a short period. If you're
                rebuilding credit, read our guide to{" "}
                <Link
                  href="/personal-finance/understanding-credit-card-interest-rates"
                  className="text-blue-600 hover:underline"
                >
                  understanding credit card interest rates
                </Link>{" "}
                to make informed decisions.
              </p>
              <h3 className="text-lg font-semibold text-gray-700 mb-2 mt-4">
                Update your financial goals
              </h3>
              <p className="text-gray-800 mb-4 text-sm leading-6 font-light">
                Revisit what matters to you now. Whether it's saving for a
                deposit, clearing debt, or building a pension, set clear
                priorities. Our article on{" "}
                <Link
                  href="/personal-finance/setting-financial-goals"
                  className="text-blue-600 hover:underline"
                >
                  setting financial goals
                </Link>{" "}
                can help you plan with confidence.
              </p>
            </section>

            <section className="my-6">
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                Common pitfalls to avoid
              </h2>
              <ul className="list-disc pl-6 mb-4 text-sm leading-6 font-light text-gray-800">
                <li className="mb-2">
                  <strong>Delaying action:</strong> The longer joint accounts
                  stay open, the higher the risk of unexpected charges or
                  disputes.
                </li>
                <li className="mb-2">
                  <strong>Assuming verbal agreements are enough:</strong> Always
                  get financial decisions in writing, even informally.
                </li>
                <li className="mb-2">
                  <strong>Ignoring small commitments:</strong> Subscriptions,
                  phone contracts, and insurance policies add up. Cancel or
                  transfer everything.
                </li>
                <li className="mb-2">
                  <strong>Failing to remove financial associations:</strong>{" "}
                  This can affect your credit applications for years.
                </li>
                <li className="mb-2">
                  <strong>
                    Making major financial decisions under stress:
                  </strong>{" "}
                  If possible, wait until emotions settle before committing to
                  new debt or large purchases.
                </li>
              </ul>
            </section>

            <section className="my-6">
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                When to seek professional help
              </h2>
              <p className="text-gray-800 mb-4 text-sm leading-6 font-light">
                Financial uncoupling can become complicated, especially with
                mortgages, pensions, or significant shared debts. Consider
                professional support if:
              </p>
              <ul className="list-disc pl-6 mb-4 text-sm leading-6 font-light text-gray-800">
                <li className="mb-2">
                  You can't agree on how to divide assets or debts.
                </li>
                <li className="mb-2">
                  You're dealing with a joint mortgage or property ownership.
                </li>
                <li className="mb-2">
                  One person is refusing to cooperate on closing accounts.
                </li>
                <li className="mb-2">
                  You're worried about your credit or struggling with debt.
                </li>
              </ul>
              <p className="text-gray-800 mb-4 text-sm leading-6 font-light">
                Free, impartial guidance is available through MoneyHelper
                (backed by the government), Citizens Advice, and StepChange (for
                debt advice). If you need legal support, consult a family law
                solicitor who specialises in financial settlements.
              </p>
            </section>

            <section className="my-6">
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                A realistic UK example
              </h2>
              <p className="text-gray-800 mb-4 text-sm leading-6 font-light">
                Sarah and Tom shared a joint current account for household
                bills, a joint credit card with a £2,500 balance, and a rented
                flat in both names. When they separated, they agreed to close
                the joint account and split the balance equally. Sarah took over
                the tenancy and transferred utilities into her name. Tom paid
                off the credit card using a 0% balance transfer card, and they
                both requested disassociation from the credit agencies. Within
                three months, they had clean, independent financial positions
                and could move forward without ongoing liability.
              </p>
              <p className="text-gray-800 mb-4 text-sm leading-6 font-light">
                The process wasn't easy emotionally, but having a clear plan and
                sticking to practical steps made the financial side manageable.
              </p>
            </section>

            <section className="my-6">
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                Final thoughts
              </h2>
              <p className="text-gray-800 mb-4 text-sm leading-6 font-light">
                Financial uncoupling is a process, not a single event. It takes
                time, communication, and patience — but every step you take
                towards independence protects your future and gives you back
                control. You don't have to do everything at once. Start with one
                action this week: gather your paperwork, contact one bank, or
                set up your new budget. Small, consistent steps build momentum
                and clarity.
              </p>
              <p className="text-gray-800 mb-4 text-sm leading-6 font-light">
                Remember: this is not just about closing accounts or settling
                debts. It's about creating a stable foundation for the next
                chapter of your life. You deserve financial peace of mind, and
                with the right approach, you can achieve it.
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
      </article>

      <CompactFooter />
    </main>
  );
}
