import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export const metadata: Metadata = {
  title:
    "Wells Fargo Autograph Card Requirements: Complete Guide - TopFinanzas US",
  description:
    "Learn about Wells Fargo Autograph Card requirements, eligibility criteria, and how to apply for this popular no-annual-fee rewards card.",
  keywords:
    "Wells Fargo Autograph requirements, no annual fee credit card, rewards card eligibility, Wells Fargo application",
};

export default function RequirementsWellsFargoAutographPage() {
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
              Wells Fargo Autograph Card Requirements
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
                What you need to qualify for this popular rewards card
              </h2>

              <p className="text-lg text-gray-800 mb-8 leading-5 text-left">
                The Wells Fargo Autograph Card offers impressive rewards across
                multiple spending categories with no annual fee. Understanding
                the requirements will help you determine your eligibility and
                prepare a solid application.
              </p>

              {/* ELEMENT 7: HERO IMAGE */}
              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/wells-fargo-autograph-card-requirements.webp"
                  alt="Wells Fargo Autograph Card Requirements"
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
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#6C2156] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Good credit score:</span>{" "}
                      A score of 670+ is generally recommended for approval.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#6C2156] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Stable income:</span>{" "}
                      Consistent income to demonstrate repayment ability.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#6C2156] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Clean credit history:
                      </span>{" "}
                      No recent significant delinquencies or defaults.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#6C2156] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">U.S. residency:</span>{" "}
                      Must be a U.S. resident with a valid Social Security
                      number.
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
                  Credit score flexibility
                </h3>
                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  The Wells Fargo Autograph is more accessible than
                  ultra-premium cards. A good credit score of 670+ opens the
                  door to 3X rewards on popular categories like dining, travel,
                  and gas stations — all with no annual fee.
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
                  Income and repayment capacity
                </h3>
                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Wells Fargo evaluates your ability to manage credit
                  responsibly. Proof of stable employment or consistent income
                  strengthens your application.
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
                  Building toward approval
                </h3>
                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  If your credit score is borderline, focus on reducing
                  outstanding balances and ensuring all payments are current.
                  Even a few months of improvement can make the difference.
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
                  <span className="font-bold">Step 1: Review your credit</span>
                  <br />
                  Check your credit score and address any issues. Wells Fargo
                  prefers applicants with good to excellent credit.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  <span className="font-bold">
                    Step 2: Gather required information
                  </span>
                  <br />
                  Have your personal details, income, employment information,
                  and Social Security number ready.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  <span className="font-bold">
                    Step 3: Apply online or in branch
                  </span>
                  <br />
                  Submit your application through the Wells Fargo website or
                  visit a local branch for in-person assistance.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  <span className="font-bold">
                    Step 4: Start earning rewards
                  </span>
                  <br />
                  Once approved, activate your card and earn 3X points on
                  restaurants, travel, gas stations, transit, popular streaming
                  services, and phone plans.
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
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#6C2156] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Take advantage of no annual fee:
                      </span>{" "}
                      The Autograph offers premium category rewards without an
                      annual fee, making it low-risk to hold long-term.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#6C2156] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Check for pre-approval:
                      </span>{" "}
                      Wells Fargo may offer pre-qualified offers that indicate
                      higher approval likelihood.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#6C2156] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Consider the welcome bonus:
                      </span>{" "}
                      Meeting the initial spending requirement to earn the
                      sign-up bonus maximizes your first-year value.
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
                  The Wells Fargo Autograph Card is an outstanding no-annual-fee
                  rewards card that earns 3X points across multiple popular
                  spending categories. It&apos;s an excellent choice for
                  everyday spenders who want strong rewards without the
                  commitment of an annual fee.
                </p>

                {/* ELEMENT 18: FINAL EXTERNAL CTA */}
                <div className="text-left my-8">
                  <Link
                    href="https://creditcards.wellsfargo.com/cards/autograph-visa-credit-card/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-[#6C2156] hover:bg-[#571a46] text-white font-medium text-md py-2 px-8 rounded-full w-full">
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
