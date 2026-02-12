import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export const metadata: Metadata = {
  title:
    "Capital One Venture X Rewards Card Requirements: Complete Guide - TopFinanzas US",
  description:
    "Learn about Capital One Venture X requirements, eligibility criteria, and how to apply for this premium travel rewards card.",
  keywords:
    "Capital One Venture X requirements, premium travel card eligibility, Venture X application, Capital One credit card",
};

export default function RequirementsCapitalOneVentureXPage() {
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
              Capital One Venture X Rewards Credit Card Requirements
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
                What you need for this premium travel rewards card
              </h2>

              <p className="text-lg text-gray-800 mb-8 leading-5 text-left">
                The Capital One Venture X is a premium travel rewards card that
                combines generous earning rates with luxury travel perks.
                Understanding the eligibility requirements will position you for
                the best chance of approval.
              </p>

              {/* ELEMENT 7: HERO IMAGE */}
              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/capital-one-venture-x-rewards-credit-card-requirements.webp"
                  alt="Capital One Venture X Rewards Credit Card Requirements"
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
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0A496C] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Excellent credit score:
                      </span>{" "}
                      A score of 740+ is recommended for this premium travel
                      card.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0A496C] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Stable income:</span>{" "}
                      Sufficient income to support premium travel spending and
                      the $395 annual fee.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0A496C] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Credit history:</span> A
                      well-established credit profile with responsible usage
                      patterns.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0A496C] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Low credit utilization:
                      </span>{" "}
                      Maintaining utilization below 30% demonstrates strong
                      financial management.
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
                  Credit score and approval odds
                </h3>
                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  The Venture X is Capital One&apos;s premium travel offering. A
                  score of 740+ positions you well for approval and access to
                  benefits like airport lounge membership and travel credits.
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
                  Income considerations
                </h3>
                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Capital One assesses your ability to manage a premium card.
                  While there&apos;s no published minimum income, higher
                  earnings improve your chances and ensure you can maximize the
                  card&apos;s benefits.
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
                  Strengthening your credit profile
                </h3>
                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  A diverse credit mix, long credit history, and low utilization
                  rate all contribute to a stronger application. Address any
                  negative marks well before applying.
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
                    Step 1: Check your credit profile
                  </span>
                  <br />
                  Review your credit score and report for any issues. Capital
                  One offers a pre-qualification tool that won&apos;t impact
                  your score.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  <span className="font-bold">
                    Step 2: Prepare your information
                  </span>
                  <br />
                  Gather your Social Security number, income details, and
                  employment information.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  <span className="font-bold">Step 3: Apply online</span>
                  <br />
                  Submit your application through the Capital One website.
                  Pre-qualified applicants have higher approval confidence.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  <span className="font-bold">Step 4: Activate your card</span>
                  <br />
                  Once approved, activate your card and start earning 2X miles
                  on every purchase plus 10X on hotels and rentals booked
                  through Capital One Travel.
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
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0A496C] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Use the pre-qualification tool:
                      </span>{" "}
                      Capital One lets you check your odds without a hard
                      inquiry — always start here.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0A496C] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Build your Capital One relationship:
                      </span>{" "}
                      Existing customers with good history may have an easier
                      path to approval.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#0A496C] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Plan for the annual fee:
                      </span>{" "}
                      The $395 fee is offset by $300 in annual travel credits,
                      making the effective cost just $95.
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
                  The Capital One Venture X delivers premium travel benefits at
                  a competitive price point. With unlimited 2X miles, airport
                  lounge access, and generous travel credits, it&apos;s an
                  excellent choice for travelers who want premium perks without
                  the ultra-premium price tag.
                </p>

                {/* ELEMENT 18: FINAL EXTERNAL CTA */}
                <div className="text-left my-8">
                  <Link
                    href="https://www.capitalone.com/credit-cards/venture-x/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-[#0A496C] hover:bg-[#083a57] text-white font-medium text-md py-2 px-8 rounded-full w-full">
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
