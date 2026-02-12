import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export const metadata: Metadata = {
  title:
    "American Express Platinum Card Requirements: Complete Guide - TopFinanzas US",
  description:
    "Learn about the Amex Platinum Card requirements, eligibility criteria, and how to apply for this premium rewards card.",
  keywords:
    "Amex Platinum requirements, American Express Platinum Card, premium credit card eligibility, Amex application",
};

export default function RequirementsAmexPlatinumPage() {
  return (
    <main
      className="bg-white min-h-screen flex flex-col"
      data-category="credit-cards"
    >
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* ELEMENT 3: H1 TITLE */}
            <h1 className="text-3xl text-left sm:text-left md:text-3xl font-bold text-gray-800 mb-4 leading-8">
              American Express Platinum Card Requirements
            </h1>

            {/* ELEMENT 4: FIRST AD UNIT */}
            <div
              id="square03"
              className="w-full flex justify-center my-6"
              data-topads
              data-topads-size="square"
            ></div>

            <div className="my-8 text-left sm:text-left">
              {/* ELEMENT 6: SUBTITLE + INTRO PARAGRAPH */}
              <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                What it takes to qualify for this elite travel card
              </h2>

              <p className="text-lg text-gray-800 mb-8 leading-5 text-left">
                The American Express Platinum Card is one of the most
                prestigious credit cards available. Knowing the eligibility
                requirements ahead of time will help you build the strongest
                possible application for this premium card.
              </p>

              {/* ELEMENT 7: HERO IMAGE */}
              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/american-express-platinum-card-requirements.webp"
                  alt="American Express Platinum Card Requirements"
                  width={900}
                  height={507}
                  className="w-full h-auto rounded-xl"
                  priority={false}
                  fetchPriority="high"
                  quality={85}
                  loading="eager"
                />
              </div>

              <section className="my-6">
                {/* ELEMENT 9: REQUIREMENTS SECTION */}
                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Requirements
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#1A1F71] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Excellent credit score:
                      </span>{" "}
                      A score of 720 or higher is strongly recommended for this
                      premium card.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#1A1F71] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">High income:</span>{" "}
                      American Express expects applicants to have substantial
                      income to support the $695 annual fee and premium
                      spending.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#1A1F71] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Clean credit history:
                      </span>{" "}
                      No recent bankruptcies, defaults, or significant
                      delinquencies.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#1A1F71] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Responsible credit utilization:
                      </span>{" "}
                      Low utilization across existing credit lines demonstrates
                      disciplined financial management.
                    </div>
                  </div>
                </div>

                {/* ELEMENT 10: SECOND AD UNIT */}
                <div
                  id="square04"
                  className="w-full flex justify-center my-6"
                  data-topads
                  data-topads-size="square"
                ></div>

                {/* ELEMENT 11: WHY REQUIREMENTS MATTER */}
                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Why these requirements matter
                </h2>

                <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
                  Credit score expectations
                </h3>
                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  The Platinum Card is designed for affluent consumers with
                  excellent credit. A score of 720+ reflects a strong track
                  record of financial responsibility and opens access to
                  exclusive benefits.
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
                  Income and spending capacity
                </h3>
                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  With a $695 annual fee, American Express wants to ensure
                  cardholders can maximize the card&apos;s premium benefits.
                  Higher income applicants typically get better approval odds.
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
                  Credit history depth
                </h3>
                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  A long, established credit history with diverse account types
                  and consistent on-time payments is viewed favorably. Amex may
                  also consider your existing relationship with the brand.
                </p>

                {/* ELEMENT 12: FIRST PROMOTIONAL IMAGE */}
                <div className="my-8 text-left sm:text-left">
                  <Link href="/personal-finance/getting-out-of-debt-a-practical-guide/">
                    <Image
                      src="https://media.topfinanzas.com/images/banner-1-Top-Blog-Debt-management.webp"
                      alt="Practical Guide to Getting Out of Debt"
                      width={1000}
                      height={563}
                      className="mx-auto w-full md:w-8/12 h-auto rounded-xl"
                      loading="lazy"
                      quality={80}
                    />
                  </Link>
                </div>

                {/* ELEMENT 13: APPLICATION PROCESS */}
                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  How to apply
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  <span className="font-bold">
                    Step 1: Verify your qualifications
                  </span>
                  <br />
                  Check that your credit score is 720+ and review your income
                  and credit history.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  <span className="font-bold">
                    Step 2: Prepare your information
                  </span>
                  <br />
                  Have your Social Security number, income details, employment
                  information, and monthly housing costs ready.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  <span className="font-bold">
                    Step 3: Submit your application
                  </span>
                  <br />
                  Apply directly through the American Express website for the
                  fastest processing.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  <span className="font-bold">
                    Step 4: Receive your decision
                  </span>
                  <br />
                  Many applicants receive instant decisions. If pending, Amex
                  may request additional documentation.
                </p>

                {/* ELEMENT 14: SECOND PROMOTIONAL IMAGE */}
                <div className="my-8 text-left sm:text-left">
                  <Link href="/personal-finance/personal-loans-your-smart-strategy-for-financial-control/">
                    <Image
                      src="https://media.topfinanzas.com/images/banner-2-Top-Blog-Personal-loans.webp"
                      alt="Personal Loans - Your Smart Strategy for Financial Control"
                      width={1000}
                      height={563}
                      className="mx-auto w-full md:w-8/12 h-auto rounded-xl"
                      loading="lazy"
                      quality={80}
                    />
                  </Link>
                </div>

                {/* ELEMENT 15: TIPS */}
                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Tips for a stronger application
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#1A1F71] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Maximize your Amex relationship:
                      </span>{" "}
                      Existing American Express cardholders with good payment
                      history have stronger approval chances.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#1A1F71] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Time your application wisely:
                      </span>{" "}
                      Apply when your credit score is at its highest and your
                      credit utilization is lowest.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#1A1F71] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Understand the commitment:
                      </span>{" "}
                      The $695 annual fee is significant — ensure you&apos;ll
                      use enough benefits to offset the cost.
                    </div>
                  </div>
                </div>

                {/* ELEMENT 16: THIRD PROMOTIONAL IMAGE */}
                <div className="my-8 text-left sm:text-left">
                  <Link href="/personal-finance/top-credit-cards-to-maximize-your-black-friday-savings/">
                    <Image
                      src="https://media.topfinanzas.com/images/banner-3-Top-Blog-Credit-Cards.webp"
                      alt="Looking for the Perfect Credit Card?"
                      width={1000}
                      height={563}
                      className="mx-auto w-full md:w-8/12 h-auto rounded-xl"
                      loading="lazy"
                      quality={80}
                    />
                  </Link>
                </div>

                {/* ELEMENT 17: YOUR BEST OPTION */}
                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Your best option
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  The American Express Platinum Card is the gold standard of
                  premium travel cards, offering unparalleled airport lounge
                  access, travel credits, and elite status benefits. If you have
                  excellent credit and the financial profile to support it, this
                  card delivers exceptional value for frequent travelers.
                </p>

                {/* ELEMENT 18: FINAL EXTERNAL CTA */}
                <div className="text-left my-8">
                  <Link
                    href="https://www.americanexpress.com/us/credit-cards/card/platinum/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-[#1A1F71] hover:bg-[#141960] text-white font-medium text-md py-2 px-8 rounded-full w-full">
                      See on official site*
                    </Button>
                  </Link>
                  <p className="text-sm text-gray-500 mt-3 text-center">
                    *By clicking you will be redirected to an external site.
                  </p>
                </div>
              </section>

              {/* ELEMENT 19: AI CONTENT DISCLAIMER */}
              <AIContentDisclaimer />
            </div>
          </div>
        </div>
      </article>

      {/* ELEMENT 20: FOOTER */}
      <CompactFooter />
    </main>
  );
}
