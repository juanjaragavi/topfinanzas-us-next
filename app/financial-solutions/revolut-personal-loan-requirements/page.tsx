import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Revolut Personal Loan Requirements: Fintech Application Guide - Top Finance UK",
    description:
      "Learn about Revolut Personal Loan eligibility criteria, the fully digital application process, and required information for approval.",
    keywords:
      "Revolut Personal Loan requirements, UK fintech loan application, loan eligibility, Revolut loan criteria, personal loan documentation, Revolut app",
  };
}

export default function RevolutPersonalLoanRequirementsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12" data-category="loans">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-3xl font-bold text-gray-800 mb-4 leading-8">
              Requirements for Revolut Personal Loans
            </h1>

            <div id="square01" data-topads data-topads-size="square"></div>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 mb-8 leading-5 text-left">
                Revolut Personal Loans offer a fast, app-based borrowing
                experience. Understanding the eligibility criteria and digital
                application process is key for existing Revolut users.
              </p>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/uk/loans/718136531-fotosprestamo-revoult2uk.webp"
                  alt="Revolut Personal Loan Requirements"
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
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#191C33] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Existing Revolut Customer:
                      </span>{" "}
                      You must have an active and verified Revolut account to
                      apply for a personal loan. Loan availability may also
                      depend on your account usage and history.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#191C33] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Age requirement:</span>{" "}
                      You must be at least 18 years old.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#191C33] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Residency:</span> You must
                      be a legal resident of a country where Revolut offers
                      personal loans (primarily UK and select EEA countries).
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#191C33] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Income and Affordability:
                      </span>{" "}
                      You need to demonstrate sufficient regular income to
                      afford the loan repayments. Revolut may assess this using
                      your account activity and information provided during the
                      application.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#191C33] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Credit History:</span>{" "}
                      Revolut will perform a credit check. A good credit history
                      improves your chances of approval and securing a favorable
                      rate, although Revolut may also consider your internal
                      customer data.
                    </div>
                  </div>
                </div>

                <div id="square02" data-topads data-topads-size="square"></div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Required Information (In-App):
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  The application is fully digital within the Revolut app.
                  You'll typically need to provide or confirm:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#191C33] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Loan Purpose:</span>{" "}
                      Specify the reason for the loan (e.g., debt consolidation,
                      home improvement, car purchase).
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#191C33] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Employment Details:</span>{" "}
                      Information about your employment status, employer, and
                      job title.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#191C33] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Income Information:</span>{" "}
                      Details of your regular income and potentially
                      confirmation of monthly expenses or existing debts.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#191C33] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Consent for Credit Check:
                      </span>{" "}
                      You will need to provide consent for Revolut to perform a
                      credit check with credit reference agencies.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Digital Application Process
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Revolut's loan application is designed for speed and
                  convenience within their app:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#191C33] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">In-App Access:</span>{" "}
                      Navigate to the 'Credit' or 'Loans' section within the
                      Revolut app to check eligibility and start the
                      application.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#191C33] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Quick Form Completion:
                      </span>{" "}
                      The application form is typically short, leveraging
                      information already held in your Revolut profile. You'll
                      confirm details and provide specifics about the loan
                      request.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#191C33] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Fast Decision:</span>{" "}
                      Revolut uses automated systems and potentially your
                      account data to provide a quick lending decision, often
                      within minutes or hours.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#191C33] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Instant Funding (if approved):
                      </span>{" "}
                      Once approved and the digital agreement is signed within
                      the app, funds are typically credited instantly to your
                      Revolut account.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Loan Terms and Conditions
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Key terms associated with Revolut Personal Loans:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#191C33] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Representative APR:</span>{" "}
                      Revolut's representative APR typically starts from around
                      4.9%. The actual rate offered is personalized based on
                      your profile, credit check, and potentially your Revolut
                      usage history.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#191C33] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Loan Amounts:</span>{" "}
                      Typically borrow between £1,000 and £25,000, subject to
                      eligibility.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#191C33] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Repayment Terms:</span>{" "}
                      Choose repayment periods usually from 1 to 5 years (12 to
                      60 months).
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#191C33] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Early Repayment:</span>{" "}
                      Revolut generally allows early repayment, often without
                      significant penalties, offering good flexibility. Always
                      check the specific terms in your loan agreement.
                    </div>
                  </div>
                </div>

                <div className="my-8 text-left sm:text-left">
                  <Link href="/personal-finance/best-personal-loans">
                    <Image
                      src="https://media.topfinanzas.com/images/ads/Top-Blog-Personal-loans-1.webp"
                      alt="Revolut Personal Loan"
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
                  Revolut Personal Loans are particularly suitable for:
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
                  Existing Revolut users:
                </h3>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  The seamless in-app application and management process makes
                  it highly convenient for those already using Revolut for their
                  day-to-day banking. Your existing relationship may also
                  influence eligibility and rates.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  <span className="font-bold">Learn more:</span>{" "}
                  <Link
                    href="/personal-finance/tips-for-choosing-an-online-loan" // Replaced dead link
                    className="text-blue-600 underline"
                  >
                    Benefits of integrated fintech ecosystems
                  </Link>
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
                  Tech-savvy borrowers:
                </h3>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Individuals comfortable with managing their finances entirely
                  through a mobile app and who value speed and digital
                  convenience will appreciate Revolut's approach.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  <span className="font-bold">Learn more:</span>{" "}
                  <Link
                    href="/personal-finance/tips-for-choosing-an-online-loan" // Replaced dead link
                    className="text-blue-600 underline"
                  >
                    Trends in digital lending
                  </Link>
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
                  Those needing quick access to funds:
                </h3>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  The fast application, decision, and funding process makes
                  Revolut loans suitable for situations where quick access to
                  borrowed funds is important.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  <span className="font-bold">Learn more:</span>{" "}
                  <Link
                    href="/personal-finance/tips-for-choosing-an-online-loan" // Replaced dead link
                    className="text-blue-600 underline"
                  >
                    Comparing fast loan options
                  </Link>
                </p>

                <div className="my-8 text-left sm:text-left">
                  <Link href="/personal-finance/getting-out-of-debt">
                    <Image
                      src="https://media.topfinanzas.com/images/ads/Top-Blog-Debt-management-1.webp"
                      alt="Revolut Personal Loan"
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
                  To enhance your chances of approval for a Revolut Personal
                  Loan:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#191C33] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Maintain a healthy Revolut account:
                      </span>{" "}
                      Regular activity, responsible usage, and potentially
                      holding a paid subscription plan might positively
                      influence Revolut's internal assessment.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#191C33] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Check your credit score:
                      </span>{" "}
                      While Revolut uses its own data, your traditional credit
                      score remains important. Ensure your credit report is
                      accurate before applying.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#191C33] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Ensure profile information is up-to-date:
                      </span>{" "}
                      Make sure your personal and employment details within the
                      Revolut app are current before starting the loan
                      application.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#191C33] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Be realistic about affordability:
                      </span>{" "}
                      Only apply for an amount you can comfortably repay based
                      on your income and expenses. Revolut's affordability
                      checks are designed to prevent over-borrowing.
                    </div>
                  </div>
                </div>

                <div className="text-left my-8">
                  <Link href="https://www.revolut.com/personal-loans/">
                    <Button className="bg-[#191C33] hover:bg-blue-900 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                      Visit Official Website (Check Availability)
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
