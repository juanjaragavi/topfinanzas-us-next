import ResponsiveImage from "@/components/ui/responsive-image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Fluid Credit Card: Cut Your Credit Card Costs with Balance Transfers - Top Finance UK",
    description:
      "The Fluid Credit Card offers 0% interest on balance transfers for 9 months (3% fee), helping you save on interest charges and clear your credit card debt faster. Representative 34.9% APR (variable).",
    keywords:
      "Fluid credit card, balance transfer credit card, 0% balance transfer, UK credit cards, debt consolidation, NewDay credit card, cut credit costs",
  };
}

export default function FluidCreditCardPage() {
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
              Fluid Credit Card: Help Your Finances Flow with Smart Balance
              Transfers
            </h1>

            <div className="my-8 text-left sm:text-left">
              <p className="text-left text-lg text-gray-800 font-medium mb-8 leading-5">
                The Fluid Credit Card is designed to help you cut the cost of
                your monthly credit card bill by offering 0% interest on balance
                transfers for 9 months, giving you more time to clear your debt
                and get back on track.
              </p>

              <div id="square01" data-topads data-topads-size="square"></div>

              <hr className="my-8" />

              <div className="space-y-2 my-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#642667] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      0% Balance Transfer Offer:
                    </span>{" "}
                    Enjoy 0% interest on balance transfers for 9 months from
                    account opening (3% fee applies), helping you save on
                    interest charges while you clear your balance.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#642667] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      FastCheck Eligibility:
                    </span>{" "}
                    Check your eligibility in 60 seconds with no impact on your
                    credit rating, giving you confidence before you apply.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#642667] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Flexible Credit Limits:
                    </span>{" "}
                    Initial credit limits range from £250 to £4,000, tailored to
                    your individual circumstances and creditworthiness.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#642667] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Digital Wallet Compatible:
                    </span>{" "}
                    Add your Fluid card to Apple Pay or Google Pay for fast,
                    secure contactless payments online, in apps, or in-store.
                  </div>
                </div>
              </div>

              <div className="text-left my-8">
                <Link href="/financial-solutions/fluid-credit-card-requirements">
                  <Button className="bg-[#642667] hover:bg-[#4f1e52] text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <div className="my-8 text-left sm:text-left">
                <ResponsiveImage
                  src="https://media.topfinanzas.com/images/uk/fluid-credit-card.webp"
                  alt="Fluid Credit Card"
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
                  The Fluid Credit Card is specifically designed for UK
                  residents who want to take control of their credit card debt
                  and reduce the burden of high interest charges. When you're
                  struggling with a credit card balance where most of your
                  monthly repayments go towards interest rather than reducing
                  the principal amount, Fluid offers a practical solution. By
                  transferring your existing balance to a Fluid card, you can
                  take advantage of a 9-month interest-free period on the
                  transferred amount, allowing more of your repayments to go
                  towards clearing your debt and helping you get back on track
                  financially.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Save Money with 0% Balance Transfers
                </h2>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  The cornerstone benefit of the Fluid Credit Card is its 0%
                  interest rate on balance transfers for the first 9 months from
                  account opening. This promotional offer allows you to transfer
                  balances from other credit cards where you're currently paying
                  interest, and benefit from a substantial period without any
                  interest charges accruing on the transferred amount. A 3%
                  balance transfer fee applies to any amounts transferred, but
                  this is typically far less than the interest you would pay on
                  a standard credit card over the same period. This feature can
                  save you hundreds of pounds in interest charges, particularly
                  if you have a significant balance on high-APR credit cards.
                </p>

                <hr className="my-8" />

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Check Your Eligibility Without Affecting Your Credit Score
                </h2>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  Before committing to a full application, you can use Fluid's
                  FastCheck eligibility checker to see whether you're likely to
                  be approved for the card. This quick and easy process takes
                  just 60 seconds and uses a soft credit search, which means it
                  won't appear on your credit file and won't affect your credit
                  rating. This feature is particularly valuable as it allows you
                  to make an informed decision about applying without the risk
                  of a hard credit check impacting your score unnecessarily. The
                  FastCheck tool gives you confidence and transparency, helping
                  you avoid unsuccessful applications that could harm your
                  creditworthiness.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Calculate Your Potential Savings
                </h2>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  Fluid provides an interactive calculator on their website that
                  helps you understand exactly how much you could save by
                  transferring your balance. By entering your current balance,
                  your existing interest rate, and your planned monthly
                  repayment amount, you can see a clear illustration of the
                  potential interest savings compared to keeping your balance on
                  your current card. This transparency helps you make an
                  informed decision about whether a balance transfer to Fluid is
                  the right financial move for your circumstances. The
                  calculator demonstrates how the 0% promotional period allows
                  more of your money to go towards reducing your actual debt
                  rather than servicing interest charges.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Flexible Account Management
                </h2>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  Managing your Fluid Credit Card is straightforward thanks to
                  the comprehensive Online Account Manager, accessible 24/7 from
                  any device. Through this secure portal, you can view your
                  statements, track your balance and transactions, make
                  payments, set up and manage Direct Debits for automatic
                  payments, and update your personal details as needed. The
                  online platform also offers free text alerts to keep you
                  informed about important account activity, helping you stay on
                  top of your finances. You can also access online credit health
                  tools that provide insights into your creditworthiness and
                  offer guidance on improving your financial position over time.
                </p>

                <div className="my-8 text-left sm:text-left">
                  <Link href="/personal-finance/getting-out-of-debt/">
                    <ResponsiveImage
                      src="https://media.topfinanzas.com/images/ads/Top-Blog-Credit-Cards.webp"
                      alt="Learn More About Managing Credit Card Debt"
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
                        href="/personal-finance/getting-out-of-debt/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Effective Strategies for Getting Out of Debt
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
                        href="/personal-finance/best-rewards-credit-cards/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Best Rewards Credit Cards in the UK
                      </Link>
                    </li>
                  </ul>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Making Balance Transfers Simple
                </h2>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  To take advantage of the 0% balance transfer offer, you must
                  request the transfer within the first 60 days of opening your
                  Fluid account. The balance transfer process is straightforward
                  and can be initiated through the Online Account Manager or by
                  contacting Fluid's customer service team. You'll need to
                  provide details of the credit cards you wish to transfer
                  balances from, including account numbers and the amounts you
                  want to transfer. The maximum balance you can transfer cannot
                  exceed 90% of your credit limit (including the 3% balance
                  transfer fee), ensuring you maintain some available credit on
                  your Fluid card.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Additional Features:
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#642667] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Digital Wallet Integration:
                      </span>{" "}
                      Add your Fluid card to Apple Pay or Google Pay for fast,
                      secure contactless payments online, through apps, or
                      in-store, making everyday transactions quick and
                      convenient.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#642667] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Free Text Alerts:</span>{" "}
                      Stay informed about important account activity with
                      customizable text alerts, helping you monitor your
                      spending and avoid late payments.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#642667] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Credit Health Tools:
                      </span>{" "}
                      Access online tools that help you understand and improve
                      your credit health, providing valuable insights into your
                      financial wellbeing.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#642667] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Secure Online Access:
                      </span>{" "}
                      Manage your account securely 24/7 through the dedicated
                      Online Account Manager, with comprehensive security
                      features to protect your financial information.
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
                      34.9% APR (variable). Interest rate for purchases: 34.94%
                      p.a. (variable), based on an assumed credit limit of
                      £1,200. The APR and credit limit applicable to your
                      account will depend on our assessment of your application.
                    </p>
                    <p>
                      <strong>Balance Transfer Offer:</strong> 0% interest on
                      balance transfers for 9 months from account opening (3%
                      fee applies). Introductory balance transfer offers must be
                      made within the first 60 days of account opening for new
                      customers. After the promotional period ends, your
                      standard purchase rate will apply to any remaining
                      balance.
                    </p>
                    <p>
                      <strong>Eligibility:</strong> Credit only available to UK
                      residents aged 18 and over, subject to status. Terms and
                      conditions apply.
                    </p>
                    <p>
                      <strong>Important Warning:</strong> If you don't make
                      repayments on time or stay within your credit limit, you
                      will pay extra charges, forfeit the 0% offer, and getting
                      credit in the future may be harder and more expensive.
                      Only borrow what you can afford to repay.
                    </p>
                    <p className="text-xs mt-4">
                      NewDay Ltd provides credit for the Fluid card. Fluid is a
                      registered trade mark of NewDay Cards Ltd. NewDay Ltd is
                      authorized and regulated by the Financial Conduct
                      Authority (FRN: 690292).
                    </p>
                  </div>
                </div>

                <div className="text-left my-8">
                  <Link href="/financial-solutions/fluid-credit-card-requirements">
                    <Button className="bg-[#642667] hover:bg-[#4f1e52] text-white font-medium text-md py-2 px-8 rounded-full w-full">
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
