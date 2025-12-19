import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Starling Bank Personal Loan Requirements: Application Guide - Top Finance UK",
    description:
      "Learn about Starling Bank Personal Loan eligibility criteria, the fully digital application process via the Starling app, and required information.",
    keywords:
      "Starling Bank Personal Loan requirements, UK neobank loan application, loan eligibility, Starling loan criteria, personal loan documentation, Starling app, ethical banking",
  };
}

export default function StarlingBankPersonalLoanRequirementsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12" data-category="loans">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-3xl font-bold text-gray-800 mb-4 leading-8">
              Requirements for Starling Bank Personal Loans
            </h1>

            <div id="square01" data-topads data-topads-size="square"></div>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 mb-8 leading-5 text-left">
                Starling Bank Personal Loans offer a simple, ethical, and
                app-based borrowing experience. Understanding the eligibility
                criteria is key for potential applicants.
              </p>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/uk/loans/718136707-fotosprestamo-starlinkbanck2uk.webp"
                  alt="Starling Bank Personal Loan Requirements"
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
                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Basic Eligibility Criteria
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#250E62] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Existing Starling Customer:
                      </span>{" "}
                      You generally need to have an active Starling Bank current
                      account (personal or sole trader) to apply for a personal
                      loan. Loan availability may depend on your account history
                      and usage.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#250E62] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Age requirement:</span>{" "}
                      You must be at least 18 years old.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#250E62] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">UK residency:</span> You
                      must be a UK resident with a UK address. Starling
                      typically requires applicants to have lived in the UK for
                      at least 3 years.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#250E62] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Income and Affordability:
                      </span>{" "}
                      You need to demonstrate sufficient regular income to
                      afford the loan repayments. Starling assesses
                      affordability based on your account activity and
                      information provided during the application.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#250E62] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Credit History:</span>{" "}
                      Starling will perform a credit check. A good credit
                      history improves your chances of approval and securing a
                      favorable rate. Your Starling account history may also be
                      considered.
                    </div>
                  </div>
                </div>

                <div id="square02" data-topads data-topads-size="square"></div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Required Information (In-App):
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  The application is fully digital within the Starling Bank app.
                  You'll typically need to provide or confirm:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#250E62] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Loan Amount and Term:
                      </span>{" "}
                      Specify how much you want to borrow and over what period
                      (typically 1-5 years).
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#250E62] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Loan Purpose:</span>{" "}
                      Indicate the reason for the loan (e.g., car purchase, home
                      improvements, debt consolidation).
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#250E62] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Employment and Income Details:
                      </span>{" "}
                      Confirm your employment status and provide details about
                      your regular income.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#250E62] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Affordability Information:
                      </span>{" "}
                      You may need to confirm details about your monthly
                      expenses or existing financial commitments.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#250E62] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Consent for Credit Check:
                      </span>{" "}
                      Provide consent for Starling to perform a credit check
                      with credit reference agencies.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Digital Application Process
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Starling's loan application is designed for simplicity and
                  speed within their app:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#250E62] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">In-App Access:</span>{" "}
                      Navigate to the 'Loans' or 'Borrowing' section within the
                      Starling Bank app to check eligibility and start the
                      application.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#250E62] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Quick Application Form:
                      </span>{" "}
                      The application form is typically short, leveraging your
                      existing Starling profile information for a faster
                      experience.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#250E62] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Fast Decision:</span>{" "}
                      Starling uses automated systems and potentially your
                      account data to provide a quick lending decision, often
                      within minutes.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#250E62] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Instant Funding (if approved):
                      </span>{" "}
                      Once approved and the digital agreement is signed within
                      the app, funds are typically credited instantly to your
                      Starling current account.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Loan Terms and Conditions
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Key terms associated with Starling Bank Personal Loans:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#250E62] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Representative APR:</span>{" "}
                      Starling's representative APR typically starts from around
                      4.5%. The actual rate is personalized based on your credit
                      profile and relationship with Starling.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#250E62] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Loan Amounts:</span>{" "}
                      Typically borrow between £1,000 and £25,000, subject to
                      eligibility.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#250E62] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Repayment Terms:</span>{" "}
                      Choose repayment periods usually from 1 to 5 years (12 to
                      60 months).
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#250E62] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Early Repayment:</span>{" "}
                      Starling Bank allows early repayment and overpayments
                      without charging any fees, offering excellent flexibility.
                    </div>
                  </div>
                </div>

                <div className="my-8 text-left sm:text-left">
                  <Link href="/personal-finance/best-personal-loans">
                    <Image
                      src="https://media.topfinanzas.com/images/ads/Top-Blog-Personal-loans-1.webp"
                      alt="Starling Bank Personal Loan"
                      width={1000}
                      height={563}
                      className="mx-auto w-full md:w-8/12 h-auto rounded-xl"
                      loading="lazy"
                      quality={80}
                    />
                  </Link>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Who Is This Loan Best For?
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Starling Bank Personal Loans are particularly suitable for:
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
                  Existing Starling customers:
                </h3>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  The seamless in-app experience and integration with their
                  current account make it highly convenient for those already
                  banking with Starling.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  <span className="font-bold">Learn more:</span>{" "}
                  <Link
                    href="/personal-finance/credit-card-types-benefits" // Replaced dead link
                    className="text-blue-600 underline"
                  >
                    Features of Starling Bank accounts
                  </Link>
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
                  Ethically-minded borrowers:
                </h3>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Individuals who prioritize ethical banking practices and
                  transparency will appreciate Starling's B Corp status and
                  straightforward approach to lending.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  <span className="font-bold">Learn more:</span>{" "}
                  <Link
                    href="/personal-finance/best-personal-loans" // Replaced dead link
                    className="text-blue-600 underline"
                  >
                    Choosing ethical financial products
                  </Link>
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
                  Digital banking enthusiasts:
                </h3>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Those who prefer managing finances entirely via a mobile app
                  and value a high-quality digital experience will find
                  Starling's loan offering appealing.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  <span className="font-bold">Learn more:</span>{" "}
                  <Link
                    href="/personal-finance/tips-for-choosing-an-online-loan" // Replaced dead link
                    className="text-blue-600 underline"
                  >
                    The future of digital banking apps
                  </Link>
                </p>

                <div className="my-8 text-left sm:text-left">
                  <Link href="/personal-finance/getting-out-of-debt">
                    <Image
                      src="https://media.topfinanzas.com/images/ads/Top-Blog-Debt-management-1.webp"
                      alt="Starling Bank Personal Loan"
                      width={1000}
                      height={563}
                      className="mx-auto w-full md:w-8/12 h-auto rounded-xl"
                      loading="lazy"
                      quality={80}
                    />
                  </Link>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Tips for a Successful Application
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  To enhance your chances of approval for a Starling Bank
                  Personal Loan:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#250E62] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Use your Starling account regularly:
                      </span>{" "}
                      Demonstrating responsible usage of your Starling current
                      account may positively influence eligibility and loan
                      offers.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#250E62] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Check your credit score:
                      </span>{" "}
                      Ensure your credit report is accurate and healthy, as this
                      remains a key factor in Starling's lending decisions.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#250E62] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Keep your Starling profile updated:
                      </span>{" "}
                      Ensure your personal details, address, and employment
                      information within the Starling app are current before
                      applying.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#250E62] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Demonstrate affordability:
                      </span>{" "}
                      Be prepared to confirm income and outgoings. Starling's
                      affordability checks are designed to ensure responsible
                      lending.
                    </div>
                  </div>
                </div>

                <div className="text-left my-8">
                  <Link href="https://www.starlingbank.com/loans/">
                    <Button className="bg-[#250E62] hover:bg-purple-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                      Visit Official Website (Check Availability in App)
                    </Button>
                  </Link>
                </div>

                {/* AI Content Disclaimer */}
                <AIContentDisclaimer />
              </section>
            </div>
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
