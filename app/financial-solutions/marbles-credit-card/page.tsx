import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Marbles Credit Card: Stay in Control of Your Finances - Top Finance UK",
    description:
      "The Marbles Credit Card helps you manage your finances with a manageable credit limit from £250 to £1,500, FastCheck eligibility checker, no annual fee, and flexible account management tools. Representative APR 34.9% (variable).",
    keywords:
      "Marbles Credit Card, credit building card, manageable credit limit, FastCheck, no annual fee, UK credit card, credit control tools, Digital Wallet compatible",
  };
}

export default function MarblesCreditCardPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12" data-category="tarjetas">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-4xl font-bold text-gray-800 mb-4 leading-8">
              Marbles Credit Card: The Advanced Card That Helps You Stay in
              Control
            </h1>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 font-medium mb-8 leading-5 text-left">
                The Marbles Credit Card is specifically designed to help you
                manage your finances with confidence, offering an easy-to-manage
                credit limit, innovative eligibility checking, and comprehensive
                account management tools—all with no annual fee.
              </p>

              <div id="square01" data-topads data-topads-size="square"></div>

              <hr className="my-8" />

              <div className="space-y-2 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#ec8117] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Manageable Credit Limit:
                    </span>{" "}
                    Start with a credit limit from £250 up to £1,500, designed
                    to keep your spending under control while allowing you to
                    build your credit history responsibly.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#ec8117] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      FastCheck Eligibility Checker:
                    </span>{" "}
                    Find out if you could be accepted before you apply with an
                    instant response and no impact on your credit rating,
                    helping you make informed decisions.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#ec8117] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Comprehensive Control Tools:
                    </span>{" "}
                    Manage your account online, receive text alerts when
                    approaching your credit limit, choose your repayment date,
                    and access UK-based customer support whenever you need help.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#ec8117] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Digital Wallet Compatible:
                    </span>{" "}
                    Add your Marbles card to Apple Pay or Google Pay for fast,
                    secure, and convenient contactless payments with your
                    smartphone or smartwatch.
                  </div>
                </div>
              </div>

              <div className="text-left my-8">
                <Link href="/financial-solutions/marbles-credit-card-requirements">
                  <Button className="bg-[#ec8117] hover:bg-orange-700 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <hr className="my-8" />

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/uk/marbles-credit-card.webp"
                  alt="Marbles Credit Card"
                  width={900}
                  height={507}
                  className="w-full h-auto rounded-xl"
                  priority={false}
                  fetchPriority="high"
                  quality={85}
                  loading="eager"
                />
              </div>

              <div className="my-6">
                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  The Marbles Credit Card stands out in the UK credit card
                  market by focusing on helping customers stay in control of
                  their finances. Whether you're building your credit history,
                  recovering from past financial difficulties, or simply seeking
                  a straightforward credit card with manageable limits, Marbles
                  offers a combination of innovative technology and practical
                  features designed to support your financial wellbeing.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  FastCheck: Know Before You Apply
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  One of Marbles' most valuable features is the FastCheck
                  eligibility checker, which allows you to see your chances of
                  acceptance before submitting a full application. This soft
                  search technology provides an instant response without
                  affecting your credit rating—a crucial advantage when you're
                  exploring your credit options. Traditional credit card
                  applications involve hard credit checks that can temporarily
                  lower your credit score, but Marbles' FastCheck system lets
                  you assess your eligibility risk-free. This means you can make
                  more informed decisions about whether to proceed with a full
                  application, helping you avoid unnecessary credit inquiries
                  that could impact your credit file.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Manageable Credit Limits for Financial Control
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  Marbles takes a responsible approach to credit by offering
                  manageable credit limits starting from £250 up to £1,500. This
                  range is specifically designed to help you maintain control
                  over your spending while still providing useful credit access
                  for everyday purchases, emergencies, or building your credit
                  history. Unlike cards with high credit limits that can tempt
                  overspending, Marbles' approach encourages financial
                  discipline and responsible credit use. Additionally, your
                  credit limit can be reviewed after three months, meaning you
                  could receive an increase on your fourth statement if you've
                  demonstrated responsible usage—rewarding good financial
                  behaviour while still maintaining sensible limits.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Comprehensive Account Management Tools
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  Marbles provides extensive tools to help you stay on top of
                  your account and avoid common credit card pitfalls. The online
                  account management system allows you to view transactions,
                  track your balance, and manage payments whenever and wherever
                  you want. You'll receive text alerts when you're approaching
                  your credit limit, helping you avoid declined transactions and
                  potential over-limit fees. The ability to choose your monthly
                  repayment date adds flexibility, allowing you to align
                  payments with your salary or other income to make budgeting
                  easier. You can even change your payment date up to twice a
                  year if your financial circumstances change, demonstrating
                  Marbles' commitment to adapting to your life rather than
                  forcing you into rigid structures.
                </p>

                <div className="my-8 text-left sm:text-left">
                  <Link href="/personal-finance/credit-card-types-benefits/">
                    <Image
                      src="https://media.topfinanzas.com/images/ads/Top-Blog-Credit-Cards.webp"
                      alt="Learn About Credit Cards"
                      width={1000}
                      height={563}
                      className="mx-auto w-full md:w-8/12 h-auto rounded-xl"
                      loading="lazy"
                      quality={80}
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
                        href="/personal-finance/understanding-credit-scores/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Understanding Credit Scores and How to Improve Them
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/personal-finance/credit-card-types-benefits/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Different Types of Credit Cards and Their Benefits
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
                        href="/personal-finance/avoiding-credit-card-fees/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        How to Avoid Common Credit Card Fees
                      </Link>
                    </li>
                  </ul>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Digital Wallet Integration
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  Marbles keeps pace with modern payment technology by offering
                  full compatibility with Apple Pay and Google Pay. Once you've
                  added your Marbles card to your digital wallet, you can make
                  fast and secure purchases online, through apps, or in-store
                  using just your smartphone or smartwatch. This contactless
                  payment method adds convenience to your daily transactions
                  while maintaining robust security features that protect your
                  card details from merchants and potential fraudsters.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Additional Features:
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#ec8117] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">No Annual Fee:</span>{" "}
                      Marbles doesn't charge an annual fee, meaning you won't
                      face ongoing costs simply for having the card. This makes
                      it more affordable than many other credit cards,
                      particularly important if you're managing your finances
                      carefully or rebuilding your credit.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#ec8117] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">eStatements:</span>{" "}
                      Receive electronic statements directly to your online
                      account, reducing paper clutter while ensuring you always
                      have access to your transaction history and spending
                      patterns.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#ec8117] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        UK-Based Customer Support:
                      </span>{" "}
                      Access assistance from Marbles' UK-based helpline,
                      providing support when you need help with your account,
                      have questions about features, or require assistance with
                      transactions.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#ec8117] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Credit Limit Reviews:
                      </span>{" "}
                      After demonstrating responsible credit use for three
                      months, you may be eligible for a credit limit increase,
                      rewarding positive financial behaviour while still
                      maintaining manageable limits.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Understanding the Costs
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  <span className="font-semibold">Representative APR:</span> The
                  Marbles Credit Card has a representative APR of 34.9%
                  (variable). This means that at least 51% of successful
                  applicants will receive this rate, though the actual APR
                  you're offered will depend on your individual circumstances
                  and credit assessment.
                </p>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  <span className="font-semibold">Representative Example:</span>{" "}
                  If you borrow £1,200 at a representative APR of 34.9%
                  (variable), and you make the minimum payment each month,
                  you'll pay interest charges. To minimize interest costs, aim
                  to pay more than the minimum payment whenever possible or pay
                  your balance in full each month.
                </p>

                <div className="my-8 p-6 bg-yellow-50 border-l-4 border-yellow-400">
                  <p className="text-sm text-gray-800 leading-5">
                    <span className="font-semibold">Important:</span> Failure to
                    make payments on time, or to stay within your credit limit,
                    will result in additional charges applying to your account
                    and could make obtaining credit more expensive or difficult
                    in future. Your credit rating may also be negatively
                    affected.
                  </p>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Who Is Marbles Best For?
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  The Marbles Credit Card is particularly well-suited for
                  individuals who want to maintain strict control over their
                  credit usage or who are working to build or rebuild their
                  credit history. The manageable credit limits prevent
                  overspending while still providing useful credit access, and
                  the comprehensive management tools help you stay on top of
                  your account. If you've had credit difficulties in the past,
                  are new to credit, or simply prefer a card with lower limits
                  and strong control features, Marbles offers a practical
                  solution designed with your financial wellbeing in mind.
                </p>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  The FastCheck eligibility checker is particularly valuable if
                  you're uncertain about your chances of approval, as it allows
                  you to assess your likelihood of acceptance without risking
                  damage to your credit score. Combined with the no annual fee
                  structure, flexible payment date options, and modern digital
                  wallet compatibility, Marbles provides a balanced package that
                  prioritises responsible credit use without sacrificing
                  convenience or functionality.
                </p>

                <div className="my-8 p-6 bg-gray-50 border border-gray-200 rounded-lg">
                  <p className="text-sm text-gray-700 leading-5 mb-3">
                    <span className="font-semibold">
                      Regulatory Information:
                    </span>{" "}
                    Credit is available to UK residents aged 18 and over,
                    subject to status. Terms and conditions apply. The APR
                    applicable to your account will depend on our assessment of
                    your application.
                  </p>
                  <p className="text-sm text-gray-700 leading-5">
                    Marbles is provided by NewDay Ltd. NewDay Ltd and NewDay
                    Cards Ltd are companies registered in England and Wales.
                    NewDay Ltd and NewDay Cards Ltd are authorized and regulated
                    by the Financial Conduct Authority. This information is for
                    general guidance only and does not constitute financial
                    advice. You should consider seeking independent financial
                    advice before making any credit decisions.
                  </p>
                </div>

                <div className="text-left my-8">
                  <Link href="/financial-solutions/marbles-credit-card-requirements">
                    <Button className="bg-[#ec8117] hover:bg-orange-700 text-white font-medium text-md py-2 px-8 rounded-full w-full">
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
