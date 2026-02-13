import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export const metadata: Metadata = {
  title:
    "Ink Business Unlimited Credit Card Requirements: Everything You Need to Know - TopFinanzas US",
  description:
    "Unlock generous cash-back rewards with the Ink Business Unlimited Card. Learn about credit score, business type, and income requirements.",
  keywords:
    "Ink Business Unlimited requirements, Chase business card, eligibility, application, credit score",
};

export default function InkBusinessUnlimitedRequirementsPage() {
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
              Ink Business Unlimited Credit Card Requirements
            </h1>

            {/* ELEMENT 4: FIRST AD UNIT */}
            <div
              id="square03"
              className="w-full flex justify-center my-6"
              data-topads
              data-topads-size="square"
            ></div>

            <div className="my-8 text-left sm:text-left">
              {/* ELEMENT 5: OPENING PARAGRAPH */}
              <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                Powerful cash-back rewards for business owners
              </h2>

              <p className="text-lg text-gray-800 mb-8 leading-5 text-left">
                Unlock generous cash-back rewards with the Ink Business
                Unlimited Card. The Ink Business Unlimited Credit Card from
                Chase is a powerful tool for business owners, offering generous
                cash-back rewards and benefits. However, to get approved, there
                are specific requirements and steps involved.
              </p>

              {/* ELEMENT 6: HERO IMAGE */}
              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/ink-business-unlimited-credit-card-requirements.webp"
                  alt="Ink Business Unlimited Credit Card Requirements"
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
                {/* ELEMENT 7: REQUIREMENTS SECTION */}
                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Requirements
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#3F444B] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Credit score:</span> A
                      credit score of 690 or higher is recommended.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#3F444B] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Business type:</span> You
                      can apply if your business is a sole proprietorship, LLC,
                      corporation, or partnership.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#3F444B] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Minimum annual business revenue:
                      </span>{" "}
                      While there&apos;s no specific income requirement,
                      businesses with a consistent revenue stream are preferred.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#3F444B] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        U.S. Citizenship or Legal Residency:
                      </span>{" "}
                      U.S. citizens or permanent residents (Green Card holders).
                    </div>
                  </div>
                </div>

                {/* ELEMENT 8: SECOND AD UNIT */}
                <div
                  id="square04"
                  className="w-full flex justify-center my-6"
                  data-topads
                  data-topads-size="square"
                ></div>

                {/* ELEMENT 9: WHY THESE REQUIREMENTS ARE IMPORTANT */}
                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Why these requirements are important
                </h2>

                <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
                  Credit score threshold
                </h3>
                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  A credit score of 690 or higher demonstrates responsible
                  credit use and on-time payment history. Chase uses this as a
                  key indicator of your ability to manage credit obligations
                  effectively.
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
                  Business structure verification
                </h3>
                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Chase requires verification of your business entity type and
                  EIN (or SSN for sole proprietors) to ensure legitimacy and
                  proper tax reporting compliance.
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
                  Revenue and financial stability
                </h3>
                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  While Chase doesn&apos;t specify exact revenue thresholds,
                  consistent business income demonstrates your ability to manage
                  credit responsibly and make timely payments.
                </p>

                {/* ELEMENT 10: FIRST PROMOTIONAL IMAGE */}
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

                {/* ELEMENT 12: APPLICATION PROCESS */}
                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  How to Apply
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Applying for the Ink Business Unlimited Credit Card is
                  straightforward when you&apos;re well-prepared.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  <span className="font-bold">
                    Step 1: Verify your credit score
                  </span>
                  <br />
                  Check your credit score before applying to ensure it meets the
                  required minimum of 690.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  <span className="font-bold">
                    Step 2: Prepare your business financial information
                  </span>
                  <br />
                  Gather documents such as tax returns, financial statements,
                  and proof of business income.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  <span className="font-bold">
                    Step 3: Complete the online application
                  </span>
                  <br />
                  Go to the Chase website and complete the application using
                  your business details and EIN (or SSN for sole proprietors).
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  <span className="font-bold">Step 4: Submit for review</span>
                  <br />
                  Chase typically provides an answer within minutes. In some
                  cases, additional review may take 7–10 business days.
                </p>

                {/* ELEMENT 11: SECOND PROMOTIONAL IMAGE */}
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

                {/* ELEMENT 13: TIPS FOR SUCCESS */}
                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  What to do after applying
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#3F444B] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Understand the card&apos;s features:
                      </span>{" "}
                      Enjoy unlimited 1.5% cash back on all purchases and free
                      employee cards.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#3F444B] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Know the fees:</span> The
                      card charges no annual fee.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#3F444B] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Maximize your rewards:
                      </span>{" "}
                      Use the card regularly for business purchases to earn
                      maximum cash back.
                    </div>
                  </div>
                </div>

                {/* ELEMENT 14: THIRD PROMOTIONAL IMAGE */}
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

                {/* ELEMENT 15: YOUR BEST OPTION */}
                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Your best option
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  The Ink Business Unlimited Credit Card is an excellent option
                  for business owners looking to earn cash back on all
                  purchases. By meeting the credit score, business type, and
                  income requirements, you can apply confidently and unlock the
                  card&apos;s valuable features.
                </p>

                {/* ELEMENT 16: FINAL EXTERNAL CTA */}
                <div className="text-left my-8">
                  <Link href="https://creditcards.chase.com/business-credit-cards/ink/unlimited">
                    <Button className="bg-[#3F444B] hover:bg-[#2c2f34] text-white font-medium text-md py-2 px-8 rounded-full w-full">
                      See on official site*
                    </Button>
                  </Link>
                  <p className="text-sm text-gray-500 mt-3 text-center">
                    *By clicking you will be redirected to an external site.
                  </p>
                </div>
              </section>

              {/* ELEMENT 17: AI CONTENT DISCLAIMER */}
              <AIContentDisclaimer />
            </div>
          </div>
        </div>
      </article>

      {/* ELEMENT 18: FOOTER */}
      <CompactFooter />
    </main>
  );
}
