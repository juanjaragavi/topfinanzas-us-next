import ResponsiveImage from "@/components/ui/responsive-image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Ocean Credit Card: Check Your Eligibility in 60 Seconds - Top Finance UK",
    description:
      "The Ocean Credit Card offers credit limits from £200 to £8,000 with no annual fee. Check your eligibility with QuickCheck without affecting your credit score. Representative 39.9% APR (variable).",
    keywords:
      "Ocean credit card, credit builder card, QuickCheck, bad credit credit card, UK credit cards, Ocean Finance, no annual fee credit card, credit score improvement",
  };
}

export default function OceanCreditCardPage() {
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
              Ocean Credit Card: Check If You'll Be Accepted Before You Apply
            </h1>

            <div className="my-8 text-left sm:text-left">
              <p className="text-left text-lg text-gray-800 font-medium mb-8 leading-5">
                The Ocean Credit Card from Ocean Finance is designed to help you
                build or rebuild your credit score while offering the
                convenience of a modern credit card. With QuickCheck technology,
                you can see if you'll be accepted within 60 seconds—without
                affecting your credit score.
              </p>

              <div id="square01" data-topads data-topads-size="square"></div>

              <hr className="my-8" />

              <div className="space-y-2 my-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#0a629c] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      QuickCheck Eligibility:
                    </span>{" "}
                    Get a yes or no in 60 seconds without impacting your credit
                    score—you're the only one who can see this on your credit
                    report.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#0a629c] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Generous Credit Limits:
                    </span>{" "}
                    Access credit limits ranging from £200 to £8,000, tailored
                    to your individual circumstances and credit history.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#0a629c] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">No Annual Fee:</span> Enjoy
                    the benefits of a credit card without the burden of an
                    annual fee, helping you keep costs down.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#0a629c] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Build Your Credit Score:
                    </span>{" "}
                    Use the card responsibly with regular on-time payments and
                    staying under your limit to potentially improve your credit
                    rating over time.
                  </div>
                </div>
              </div>

              <div className="my-8">
                <Button
                  href="/financial-solutions/ocean-credit-card-requirements"
                  className="bg-[#0a629c] hover:bg-[#084a75] text-white w-full sm:w-auto"
                >
                  View Requirements and Apply
                </Button>
              </div>

              <ResponsiveImage
                src="https://media.topfinanzas.com/images/uk/ocean-credit-card.webp"
                alt="Ocean Credit Card - Check your eligibility in 60 seconds"
                width={1200}
                height={600}
                className="w-full h-auto rounded-lg shadow-lg my-8"
              />
            </div>

            <section className="my-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-left">
                Why Choose the Ocean Credit Card?
              </h2>

              <p className="text-base leading-7 text-gray-700 mb-6 text-left">
                Ocean Finance has been helping UK consumers access credit since
                1991, with over 1.1 million people pre-approved for financial
                products. The Ocean Credit Card, powered by Capital One, is
                specifically designed for people who may have been declined
                elsewhere or who want to rebuild their credit history. Unlike
                many credit-building cards, Ocean considers all credit
                histories, making it an accessible option for a wide range of
                applicants.
              </p>

              <p className="text-base leading-7 text-gray-700 mb-6 text-left">
                What sets the Ocean Credit Card apart is the innovative
                QuickCheck system. This soft search technology allows you to
                check whether you'll be accepted before you formally apply,
                giving you confidence and avoiding unnecessary hard searches on
                your credit file. Within just 60 seconds, you'll know if you're
                likely to be approved, and this check is completely invisible to
                other lenders—it won't affect your credit score at all.
              </p>

              <p className="text-base leading-7 text-gray-700 mb-6 text-left">
                The card also comes with modern conveniences you'd expect from
                any credit card provider. You can manage your account through
                the Ocean mobile app, making payments and checking your balance
                on the go. The card is contactless enabled, allowing you to make
                quick payments up to £100 without entering your PIN. Plus,
                you'll receive free email and text alerts to help you keep track
                of your spending and avoid missing payments.
              </p>
            </section>

            <section className="my-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-left">
                Understanding the Interest Rates and Costs
              </h2>

              <p className="text-base leading-7 text-gray-700 mb-6 text-left">
                The Ocean Credit Card has a representative APR of 39.9%
                (variable), with a purchase rate of 39.94% APR (variable). This
                means that if you borrow money and don't pay it back in full
                each month, you'll pay interest on the outstanding balance. The
                rate you're offered will depend on your individual credit
                history and circumstances, with rates starting from 28.9% APR
                (variable) for those with stronger credit profiles.
              </p>

              <div className="bg-gray-50 border-l-4 border-[#0a629c] p-6 my-8">
                <h3 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Representative Example
                </h3>
                <div className="text-base text-gray-700 space-y-2 text-left">
                  <p>
                    <strong>Representative APR:</strong> 39.9% (variable)
                  </p>
                  <p>
                    <strong>Purchase Rate:</strong> 39.94% APR (variable)
                  </p>
                  <p>
                    <strong>Assumed Credit Limit:</strong> £1,200
                  </p>
                </div>
              </div>

              <p className="text-base leading-7 text-gray-700 mb-6 text-left">
                One of the card's key benefits is that there's no annual fee,
                meaning you won't be charged simply for having the card. This
                makes it more affordable than many alternatives, particularly
                for those building their credit who may not use the card
                frequently. You may also be eligible for 0% interest on balance
                transfers and purchases for the first 6 months, though balance
                transfers will be subject to a 2.9% fee.
              </p>

              <p className="text-base leading-7 text-gray-700 mb-6 text-left">
                To avoid interest charges altogether, aim to pay off your
                balance in full each month. If you can't clear the full amount,
                make at least the minimum payment shown on your statement to
                avoid late payment fees and damage to your credit score.
              </p>
            </section>

            <section className="my-12 bg-blue-50 p-6 rounded-lg">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 text-left">
                Related Credit Card Guides
              </h2>
              <div className="space-y-3 text-left">
                <Link
                  href="/financial-solutions/fluid-credit-card"
                  className="block text-[#0a629c] hover:underline font-medium"
                >
                  Fluid Credit Card: 0% Balance Transfer Credit Card
                </Link>
                <Link
                  href="/financial-solutions/john-lewis-partnership-card"
                  className="block text-[#0a629c] hover:underline font-medium"
                >
                  John Lewis Partnership Card: Earn Rewards While You Shop
                </Link>
              </div>
            </section>

            <section className="my-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-left">
                How to Use Your Ocean Credit Card Responsibly
              </h2>

              <p className="text-base leading-7 text-gray-700 mb-6 text-left">
                Using a credit card responsibly is essential, particularly if
                you're using it to rebuild your credit score. Here are some key
                tips to help you get the most from your Ocean Credit Card while
                protecting your financial health:
              </p>

              <div className="space-y-4 my-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#0a629c] flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div className="text-base leading-7 text-gray-700 text-left">
                    <span className="font-semibold">
                      Make payments on time:
                    </span>{" "}
                    Late payments can damage your credit score and incur
                    additional fees. Set up a Direct Debit to ensure you never
                    miss a payment.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#0a629c] flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div className="text-base leading-7 text-gray-700 text-left">
                    <span className="font-semibold">
                      Stay under your limit:
                    </span>{" "}
                    Using too much of your available credit can harm your credit
                    utilisation ratio. Aim to keep your balance below 30% of
                    your credit limit for the best impact on your credit score.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#0a629c] flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div className="text-base leading-7 text-gray-700 text-left">
                    <span className="font-semibold">
                      Pay more than the minimum:
                    </span>{" "}
                    While making the minimum payment keeps your account in good
                    standing, paying more reduces the interest you'll pay and
                    helps you clear debt faster.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#0a629c] flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div className="text-base leading-7 text-gray-700 text-left">
                    <span className="font-semibold">
                      Monitor your spending:
                    </span>{" "}
                    Use the free email and text alerts to keep track of your
                    transactions and balance. The mobile app also makes it easy
                    to check your spending in real time.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#0a629c] flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div className="text-base leading-7 text-gray-700 text-left">
                    <span className="font-semibold">Use it regularly:</span> To
                    build credit, you need to demonstrate that you can manage
                    credit responsibly. Using your card for small, regular
                    purchases and paying them off in full shows lenders you're a
                    reliable borrower.
                  </div>
                </div>
              </div>

              <p className="text-base leading-7 text-gray-700 mb-6 text-left">
                Remember: irresponsible use of credit can harm your credit
                score, making it harder and more expensive to borrow in the
                future. Only borrow what you can afford to repay, and always
                prioritise paying at least the minimum amount due each month.
              </p>
            </section>

            <section className="my-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-left">
                Building Your Credit Score with Ocean
              </h2>

              <p className="text-base leading-7 text-gray-700 mb-6 text-left">
                One of the main reasons people choose the Ocean Credit Card is
                to rebuild or establish their credit history. Whether you've had
                credit problems in the past, you're new to credit, or you simply
                want to improve your score, this card can help—if used
                correctly.
              </p>

              <p className="text-base leading-7 text-gray-700 mb-6 text-left">
                Credit reference agencies look at several factors when
                calculating your credit score, including your payment history,
                credit utilisation, length of credit history, and the mix of
                credit types you have. The Ocean Credit Card can positively
                influence several of these factors. By making regular, on-time
                payments, you demonstrate reliability. By keeping your balance
                well below your credit limit, you show you're not overly reliant
                on credit. And by maintaining the account over time, you build a
                longer credit history.
              </p>

              <p className="text-base leading-7 text-gray-700 mb-6 text-left">
                Improving your credit score doesn't happen overnight, but with
                consistent responsible use over six to twelve months, many
                cardholders see noticeable improvements. A better credit score
                can open doors to more competitive interest rates on loans,
                mortgages, and other forms of credit in the future, potentially
                saving you thousands of pounds over time.
              </p>

              <p className="text-base leading-7 text-gray-700 mb-6 text-left">
                Ocean Finance considers all credit histories when assessing
                applications, making this card accessible even if you've been
                declined elsewhere. However, it's important to understand that
                approval isn't guaranteed, and you must meet certain eligibility
                criteria.
              </p>
            </section>

            <section className="my-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-left">
                The Application Process: Quick and Simple
              </h2>

              <p className="text-base leading-7 text-gray-700 mb-6 text-left">
                Applying for the Ocean Credit Card is straightforward and can be
                completed entirely online. Here's how the process works:
              </p>

              <div className="space-y-6 my-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0a629c] flex items-center justify-center mr-4">
                    <span className="text-white text-lg font-bold">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 text-left">
                      Check Your Eligibility with QuickCheck
                    </h3>
                    <p className="text-base text-gray-700 text-left">
                      Complete the simple online form with your personal
                      details, address history, employment status, and income.
                      QuickCheck will give you a yes or no decision within 60
                      seconds, and this soft search won't affect your credit
                      score.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0a629c] flex items-center justify-center mr-4">
                    <span className="text-white text-lg font-bold">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 text-left">
                      Submit Your Full Application
                    </h3>
                    <p className="text-base text-gray-700 text-left">
                      If QuickCheck confirms you're likely to be accepted,
                      you'll be invited to complete the full application. This
                      takes just a few minutes and involves providing additional
                      information about your finances and agreeing to a hard
                      credit search.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0a629c] flex items-center justify-center mr-4">
                    <span className="text-white text-lg font-bold">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 text-left">
                      Receive Your Card
                    </h3>
                    <p className="text-base text-gray-700 text-left">
                      If your application is approved, you'll receive your Ocean
                      Credit Card within 10 working days. Once it arrives,
                      you'll need to activate it before you can start using it.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-base leading-7 text-gray-700 mb-6 text-left">
                To apply, you'll need to provide your name, date of birth,
                current address (and any previous addresses from the last 3
                years), employment status and gross income, and details of any
                dependants and additional household income. Having this
                information ready will make the application process smoother.
              </p>
            </section>

            <section className="my-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-left">
                Who Is the Ocean Credit Card Right For?
              </h2>

              <p className="text-base leading-7 text-gray-700 mb-6 text-left">
                The Ocean Credit Card is particularly well-suited for:
              </p>

              <div className="space-y-4 my-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#0a629c] flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div className="text-base leading-7 text-gray-700 text-left">
                    <span className="font-semibold">
                      People rebuilding their credit:
                    </span>{" "}
                    If you've had credit problems in the past—such as missed
                    payments, defaults, or CCJs—this card can help you
                    demonstrate improved financial management.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#0a629c] flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div className="text-base leading-7 text-gray-700 text-left">
                    <span className="font-semibold">Those new to credit:</span>{" "}
                    If you have little or no credit history, this card provides
                    an opportunity to start building a positive credit profile.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#0a629c] flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div className="text-base leading-7 text-gray-700 text-left">
                    <span className="font-semibold">
                      People who've been declined elsewhere:
                    </span>{" "}
                    Ocean considers all credit histories, making approval more
                    likely for those who've been turned down by mainstream
                    lenders.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#0a629c] flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div className="text-base leading-7 text-gray-700 text-left">
                    <span className="font-semibold">
                      Budget-conscious consumers:
                    </span>{" "}
                    With no annual fee and the ability to check eligibility
                    without affecting your credit score, this card is a low-risk
                    option for those watching their finances.
                  </div>
                </div>
              </div>

              <p className="text-base leading-7 text-gray-700 mb-6 text-left">
                However, this card may not be the best choice if you're looking
                for cashback or rewards, low APR rates for carrying balances, or
                lengthy 0% purchase or balance transfer periods. In those cases,
                a rewards card or a low-interest credit card from a major bank
                may be more suitable—though you'll typically need a good to
                excellent credit score to qualify for those products.
              </p>
            </section>

            <section className="my-12 bg-yellow-50 border-l-4 border-yellow-400 p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4 text-left">
                Important Information
              </h3>
              <div className="text-sm text-gray-700 space-y-3 text-left">
                <p>
                  Credit is provided by Capital One, with Ocean Finance acting
                  as a credit broker. Ocean Finance (Intelligent Lending Ltd) is
                  authorized and regulated by the Financial Conduct Authority
                  (FCA).
                </p>
                <p>
                  <strong>Representative APR:</strong> 39.9% (variable).
                  Representative example: Representative APR 39.9% (variable),
                  purchase rate 39.94% APR (variable), assumed credit limit
                  £1,200. The rate you are offered may differ based on your
                  individual circumstances and credit history, with rates
                  starting from 28.9% APR (variable).
                </p>
                <p>
                  <strong>Warning:</strong> Missing payments or making only
                  minimum payments can damage your credit score and increase the
                  total amount of interest you pay. Always borrow responsibly
                  and only what you can afford to repay.
                </p>
                <p>
                  This information is for general guidance only and does not
                  constitute financial advice. You should seek independent
                  financial advice before making any credit decisions.
                </p>
              </div>
            </section>

            <div className="my-12 text-center">
              <Button
                href="/financial-solutions/ocean-credit-card-requirements"
                className="bg-[#0a629c] hover:bg-[#084a75] text-white text-lg px-8 py-6"
              >
                Check Eligibility and Apply Now
              </Button>
              <p className="text-sm text-gray-600 mt-4">
                Checking won't affect your credit score
              </p>
            </div>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
