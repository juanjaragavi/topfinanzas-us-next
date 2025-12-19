import ResponsiveImage from "@/components/ui/responsive-image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Capital One UK Classic Card: Build Your Credit Score - Top Finance UK",
    description:
      "The Capital One UK Classic Card helps you build your credit score with a starting credit limit of £200-£1,500, flexible payments, and no annual fee. Get a decision in 60 seconds.",
    keywords:
      "Capital One UK, Classic Card, credit builder card, UK credit cards, build credit score, no annual fee, QuickCheck eligibility",
  };
}

export default function CapitalOneUKCreditCardPage() {
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
              Capital One UK Classic Card: Build Your Credit Score with
              Confidence
            </h1>

            <div className="my-8 text-left sm:text-left">
              <p className="text-left text-lg text-gray-800 font-medium mb-8 leading-5">
                The Capital One UK Classic Card is designed to help you build or
                rebuild your credit score whilst managing everyday expenses with
                flexibility and control.
              </p>

              <div id="square01" data-topads data-topads-size="square"></div>

              <hr className="my-8" />

              <div className="space-y-2 my-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#1E1F39] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Credit Builder Solution:
                    </span>{" "}
                    Start with a credit limit of £200-£1,500 and build your
                    credit score over time through responsible use.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#1E1F39] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">No Annual Fee:</span> Enjoy
                    the benefits of a credit card without worrying about yearly
                    membership costs eating into your budget.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#1E1F39] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      QuickCheck Eligibility:
                    </span>{" "}
                    Get a straight yes or no answer in 60 seconds without
                    affecting your credit score.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#1E1F39] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Regular Credit Increases:
                    </span>{" "}
                    Qualify for up to two credit limit increases per year based
                    on responsible card usage and timely payments.
                  </div>
                </div>
              </div>

              <div className="text-left my-8">
                <Link href="/financial-solutions/capital-one-uk-credit-card-requirements">
                  <Button className="bg-[#1E1F39] hover:bg-green-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <div className="my-8 text-left sm:text-left">
                <ResponsiveImage
                  src="https://media.topfinanzas.com/images/uk/capital-one-uk-credit-card.webp"
                  alt="Capital One UK Classic Card"
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
                  The Capital One UK Classic Card serves as an excellent
                  financial tool for individuals looking to establish or improve
                  their credit history. With over 4 million customers trusting
                  Capital One in the UK, this card has helped countless people
                  take control of their financial futures. Whether you're new to
                  credit, rebuilding after financial difficulties, or simply
                  want a straightforward credit card without excessive fees, the
                  Classic Card offers a practical solution tailored to your
                  needs.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Build Your Credit Score Progressively
                </h2>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  One of the standout features of the Capital One UK Classic
                  Card is its focus on helping you build a positive credit
                  history. Your starting credit limit ranges from £200 to
                  £1,500, depending on your individual circumstances and
                  creditworthiness assessment. What makes this particularly
                  valuable is the opportunity to demonstrate responsible
                  financial behaviour and potentially receive up to two credit
                  limit increases per year—without having to submit additional
                  applications.
                </p>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  By using your card regularly and making at least your minimum
                  payments on time each month, you're actively building evidence
                  of responsible credit management. Capital One reports your
                  payment history to the UK's credit reference agencies, meaning
                  each on-time payment contributes positively to your credit
                  score. This progressive approach allows you to steadily
                  improve your creditworthiness, potentially opening doors to
                  better financial products in the future.
                </p>

                <hr className="my-8" />

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  QuickCheck Technology: Know Before You Apply
                </h2>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  One of the most innovative aspects of the Capital One UK
                  Classic Card application process is the QuickCheck eligibility
                  checker. Unlike traditional credit card applications that
                  require you to submit a full application before knowing
                  whether you'll be accepted, QuickCheck gives you a clear yes
                  or no answer in just 60 seconds—and crucially, without
                  affecting your credit score.
                </p>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  This soft search technology allows you to explore your options
                  confidently, knowing that checking your eligibility won't
                  leave a footprint on your credit file. Only if you receive a
                  "yes" and decide to proceed with the full application will a
                  hard credit search be conducted. This approach removes the
                  uncertainty and potential credit score damage that can come
                  from applying for multiple cards, giving you the information
                  you need to make an informed decision about whether this card
                  is right for you.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  No Annual Fee and Transparent Costs
                </h2>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  The Capital One UK Classic Card stands out for its
                  straightforward fee structure. With no annual membership fee,
                  you won't face unexpected yearly charges that can add up over
                  time. This makes the card particularly attractive for those
                  who are budget-conscious or building their credit without
                  wanting to commit to ongoing costs.
                </p>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  The card carries a representative APR of 34.9% (variable),
                  which is typical for credit builder cards designed for those
                  with limited or imperfect credit histories. It's important to
                  understand that this rate applies when you carry a balance
                  from month to month. However, if you pay off your full balance
                  by the payment due date each month, you won't pay any interest
                  on your purchases—effectively using the card as a free credit
                  building tool. This flexibility allows you to use the card in
                  a way that suits your financial situation whilst minimising
                  costs.
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

                {/* Related Articles Section */}
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
                        Understanding Credit Card Types and Benefits
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
                        href="/personal-finance/no-annual-fee-credit-cards/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Best No Annual Fee Credit Cards
                      </Link>
                    </li>
                  </ul>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Award-Winning Mobile App
                </h2>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  Managing your Capital One UK Classic Card is effortless thanks
                  to the award-winning Capital One mobile app. Available for
                  both iOS and Android devices, the app puts complete control of
                  your finances at your fingertips. You can check your balance,
                  view recent transactions, make payments, and even see your
                  PIN—all from the convenience of your smartphone, whether
                  you're at home or on the go.
                </p>

                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  The app also provides real-time transaction notifications,
                  helping you keep track of your spending and quickly identify
                  any unauthorised activity. This level of transparency and
                  control is invaluable for those working to build better
                  financial habits and maintain awareness of their credit usage.
                  The intuitive interface makes it simple to stay on top of your
                  payments and monitor your progress towards building a stronger
                  credit score.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Additional Features and Benefits:
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#1E1F39] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Flexible Credit Limits:
                      </span>{" "}
                      You have the power to request a credit limit increase when
                      you're ready, or reduce your limit if you need more
                      control over your spending. Capital One will never
                      increase your limit without your explicit permission.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#1E1F39] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Contactless Payments:
                      </span>{" "}
                      Enjoy the convenience of contactless technology for quick
                      and secure purchases up to the current UK contactless
                      limit, making everyday transactions faster and easier.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#1E1F39] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Mastercard Acceptance:
                      </span>{" "}
                      Your Capital One UK Classic Card is a Mastercard, accepted
                      at millions of locations worldwide, both in-store and
                      online, giving you payment flexibility wherever you go.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#1E1F39] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Section 75 Protection:
                      </span>{" "}
                      Purchases between £100 and £30,000 are protected under
                      Section 75 of the Consumer Credit Act, providing
                      additional peace of mind when making larger purchases.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#1E1F39] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Fast Card Delivery:</span>{" "}
                      Once approved, your new Capital One UK Classic Card
                      typically arrives within 7 to 10 days, allowing you to
                      start building your credit quickly.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Responsible Credit Management
                </h2>

                <p className="text-left text-gray-800 text-sm leading-5 mb-4">
                  Whilst the Capital One UK Classic Card offers excellent
                  opportunities to build your credit score, it's crucial to use
                  it responsibly. Capital One emphasises that not using your
                  card responsibly could hurt your credit rating, making it
                  harder to access credit in the future. This means:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#1E1F39] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Make Timely Payments:
                      </span>{" "}
                      Always pay at least the minimum payment by the due date.
                      Setting up a Direct Debit can help ensure you never miss a
                      payment.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#1E1F39] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Keep Balances Low:</span>{" "}
                      Try to use less than 30% of your available credit limit.
                      Lower credit utilisation typically has a positive impact
                      on your credit score.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#1E1F39] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Regular Monitoring:</span>{" "}
                      Use the mobile app to regularly check your transactions
                      and ensure your spending remains within your budget and
                      means to repay.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Important Information and Representative Example
                </h2>

                <p className="text-left text-gray-800 text-sm leading-5 mb-4">
                  <strong>Representative APR:</strong> 34.9% APR (variable).
                  Representative example: Assuming a credit limit of £1,200, the
                  interest rate on purchases is 34.94% p.a. (variable). This
                  gives you a representative APR of 34.9% (variable).
                </p>

                <p className="text-left text-gray-800 text-sm leading-5 mb-4">
                  <strong>Warning:</strong> Think carefully before securing
                  debts against your home. Your home may be repossessed if you
                  do not keep up repayments on a mortgage or any other debt
                  secured on it. This product is not secured against your home.
                </p>

                <p className="text-left text-gray-800 text-sm leading-5 mb-4">
                  <strong>Important Note:</strong> Not using your card
                  responsibly could hurt your credit rating, making it harder to
                  get credit in the future. The APR you're offered after
                  checking your eligibility is the rate you'll receive if
                  approved. Capital One will never increase your credit limit
                  without asking you first.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Is the Capital One UK Classic Card Right for You?
                </h2>

                <p className="text-left text-gray-800 text-sm leading-5 mb-4">
                  The Capital One UK Classic Card is particularly well-suited
                  for individuals who are looking to build or rebuild their
                  credit history, prefer straightforward fee structures without
                  annual charges, want to know their eligibility before
                  applying, and value having control over their credit limits
                  with the flexibility to request increases or decreases as
                  needed.
                </p>

                <p className="text-left text-gray-800 text-sm leading-5 mb-4">
                  With its focus on credit building, transparent pricing,
                  innovative QuickCheck technology, and excellent mobile app
                  experience, the Capital One UK Classic Card provides a
                  practical pathway to improved creditworthiness. By using the
                  card responsibly and making consistent, timely payments, you
                  can demonstrate positive financial behaviour and work towards
                  accessing better credit products in the future.
                </p>

                <div className="text-left my-8">
                  <Link href="/financial-solutions/capital-one-uk-credit-card-requirements">
                    <Button className="bg-[#1E1F39] hover:bg-blue-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
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
