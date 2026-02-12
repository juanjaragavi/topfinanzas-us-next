import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export const metadata: Metadata = {
  title:
    "Citi Simplicity Card Requirements: Everything You Need to Know - TopFinanzas US",
  description:
    "Zero fees, zero hassle—here's how to qualify for the Citi Simplicity Card. Learn about eligibility, application process, and tips for approval.",
  keywords:
    "Citi Simplicity Card requirements, eligibility, application, credit score, no late fees",
};

export default function CitiSimplicityCardRequirementsPage() {
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
              Citi Simplicity Card Requirements
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
                Zero fees, zero hassle—here&apos;s how to qualify
              </h2>

              <p className="text-lg text-gray-800 mb-8 leading-5 text-left">
                The Citi Simplicity Card is an excellent choice for those
                seeking convenience and cost-saving benefits. With its standout
                feature of no late fees or penalty rates, this card is ideal for
                simplifying credit management. To get started, understanding the
                requirements and application process is key.
              </p>

              {/* ELEMENT 6: HERO IMAGE */}
              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/citi-simplicity-card-requirements.webp"
                  alt="Citi Simplicity Card Requirements"
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
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#07296B] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Minimum credit score:
                      </span>{" "}
                      670 or higher, considered good credit.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#07296B] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Proof of U.S. residency:
                      </span>{" "}
                      A valid address and Social Security Number are required.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#07296B] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Minimum age:</span>{" "}
                      Applicants must be at least 18 years old.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#07296B] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Debt-to-income ratio (DTI):
                      </span>{" "}
                      A manageable ratio is essential for approval.
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
                  A credit score of 670 or higher demonstrates a track record of
                  on-time payments and responsible credit use. Lower scores
                  might result in rejection or require a higher interest rate.
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
                  Residency and identification verification
                </h3>
                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Citi relies on your address and SSN for credit checks and
                  identity validation. Ensure these details are accurate and
                  up-to-date.
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
                  Financial stability via DTI
                </h3>
                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Citi evaluates your income against your existing debts to
                  gauge your repayment capacity. Keeping your DTI ratio below
                  36% increases your likelihood of approval.
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

                {/* ELEMENT 12: APPLICATION PROCESS */}
                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Application Process
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  The Citi Simplicity application process is quick and
                  user-friendly when you&apos;re well-prepared.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  <span className="font-bold">
                    Step 1: Gather Your Documentation
                  </span>
                  <br />
                  Before applying, ensure you have your SSN, proof of income,
                  and identification documents at hand. Citi might request
                  additional information if your application is under review.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  <span className="font-bold">Step 2: Apply Online</span>
                  <br />
                  Visit the Citi website and complete the online application
                  form. Provide personal information, including your name,
                  address, income details, and contact information.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  <span className="font-bold">Step 3: Wait for Approval</span>
                  <br />
                  Citi typically processes applications quickly, with many
                  receiving instant decisions. If further review is needed,
                  you&apos;ll receive a response within 7–10 business days.
                </p>

                {/* ELEMENT 13: TIPS FOR SUCCESS */}
                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Tips for Success
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#07296B] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Check your credit report:
                      </span>{" "}
                      Resolve any discrepancies before applying.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#07296B] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Avoid excessive debt:
                      </span>{" "}
                      Pay down outstanding balances to improve your DTI.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#07296B] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Maintain consistent income:
                      </span>{" "}
                      Steady income reassures lenders of your financial
                      stability.
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
                  The Citi Simplicity Card offers exceptional benefits for
                  managing your finances without worrying about fees or
                  penalties. By meeting the requirements and carefully following
                  the application process, you&apos;ll be on your way to
                  enjoying the simplicity this card provides.
                </p>

                {/* ELEMENT 16: FINAL EXTERNAL CTA */}
                <div className="text-left my-8">
                  <Link
                    href="https://www.citi.com/credit-cards/citi-simplicity-credit-card"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-[#07296B] hover:bg-blue-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
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
