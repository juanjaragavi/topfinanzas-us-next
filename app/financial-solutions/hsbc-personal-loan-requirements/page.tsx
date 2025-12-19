import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "HSBC Personal Loan Requirements: Application Guide - Top Finance UK",
    description:
      "Learn about HSBC Personal Loan eligibility criteria, application process, and required documentation to maximize your chances of approval.",
    keywords:
      "HSBC Personal Loan requirements, UK loan application, loan eligibility, HSBC loan criteria, personal loan documentation, loan application process",
  };
}

export default function HSBCPersonalLoanRequirementsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12" data-category="loans">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-3xl font-bold text-gray-800 mb-4 leading-8">
              Requirements for HSBC Personal Loans
            </h1>

            <div id="square01" data-topads data-topads-size="square"></div>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 mb-8 leading-5 text-left">
                HSBC Personal Loans offer competitive rates, flexible terms, and
                efficient application processes. Understanding the eligibility
                criteria and requirements will help you prepare a successful
                application.
              </p>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/uk/loans/718135905-fotosprestamo2hsbc-uk.webp"
                  alt="HSBC Personal Loan Requirements"
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
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#DB0011] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Age requirement:</span>{" "}
                      You must be at least 18 years old to apply for an HSBC
                      Personal Loan. This is a standard regulatory requirement
                      for all financial products in the UK.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#DB0011] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">UK residency:</span> You
                      must be a UK resident with a permanent UK address. HSBC
                      typically requires applicants to have been resident in the
                      UK for at least 3 years, though there may be some
                      flexibility for existing customers.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#DB0011] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Income requirements:
                      </span>{" "}
                      You'll need to demonstrate a regular income sufficient to
                      cover the loan repayments comfortably. While HSBC doesn't
                      publish a specific minimum income threshold, they will
                      assess your income against your existing financial
                      commitments to ensure affordability.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#DB0011] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Credit history:</span> A
                      good credit history will improve your chances of approval
                      and help you secure more favorable rates. HSBC will
                      perform a credit check as part of the application process
                      to assess your past credit behavior.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#DB0011] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Bank account:</span> While
                      having an existing HSBC account may streamline the process
                      and potentially provide access to preferential rates, it's
                      not a strict requirement. Non-customers can also apply for
                      an HSBC Personal Loan, though they'll need to provide a UK
                      bank account for loan disbursement.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Required Documentation:
                </h2>

                <div id="square02" data-topads data-topads-size="square"></div>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#DB0011] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Proof of identity:</span>{" "}
                      A valid passport, UK driving license, or EU identity card
                      is typically required. For existing HSBC customers, this
                      step may be waived if your identity has already been
                      verified.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#DB0011] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Proof of address:</span>{" "}
                      Recent utility bills, council tax statements, or bank
                      statements (dated within the last 3 months) can serve as
                      proof of your current residence. Again, this requirement
                      may be simplified for existing customers.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#DB0011] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Income verification:
                      </span>{" "}
                      Recent payslips, employment contracts, tax returns (for
                      self-employed applicants), or pension statements may be
                      requested to verify your income claims. HSBC typically
                      looks at the last 3 months of income to establish a
                      pattern.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#DB0011] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Existing financial commitments:
                      </span>{" "}
                      You may need to provide details of your current financial
                      obligations, including other loans, mortgages, credit
                      cards, and regular expenditures. This information helps
                      HSBC assess your ability to manage additional debt
                      responsibly.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Application Process
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  HSBC offers multiple channels for loan applications, catering
                  to different preferences:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#DB0011] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Online Application:</span>{" "}
                      The most convenient option is applying through HSBC's
                      website or mobile banking app. The online process is
                      designed to be straightforward, with guided steps and
                      clear instructions. Existing customers can typically
                      complete the application in about 15 minutes, while new
                      customers may need a little longer to provide all required
                      information.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#DB0011] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Telephone Banking:</span>{" "}
                      HSBC also accepts loan applications through their
                      telephone banking service. This option provides personal
                      assistance throughout the application process and may be
                      preferred by those who appreciate verbal guidance.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#DB0011] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Branch Visit:</span> For
                      those who prefer face-to-face interactions, applications
                      can be submitted at any HSBC branch. This option allows
                      for immediate clarification of any questions and
                      personalized assistance with the application process.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#DB0011] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Application Timeline:
                      </span>{" "}
                      After submitting your application, you can typically
                      expect an initial decision within minutes for online
                      applications. If additional verification is required, the
                      process may take longer. Once approved, funds are usually
                      transferred to your account within 24 hours, often on the
                      same day for existing customers.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Loan Terms and Conditions
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Understanding the key terms and conditions of HSBC Personal
                  Loans can help you make informed decisions:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#DB0011] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Representative APR:</span>{" "}
                      HSBC's representative APR typically starts from 3.9% for
                      larger loans, though the exact rate offered to you will
                      depend on your personal circumstances, credit score, loan
                      amount, and repayment term. Smaller loans generally have
                      higher interest rates.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#DB0011] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Loan Amounts:</span> HSBC
                      offers personal loans ranging from £1,000 to £25,000. The
                      amount you can borrow will depend on your individual
                      financial circumstances, credit history, and ability to
                      repay.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#DB0011] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Repayment Terms:</span>{" "}
                      Repayment periods range from 1 to 8 years (12 to 96
                      months). Longer terms result in lower monthly payments but
                      higher total interest costs, while shorter terms mean
                      higher monthly payments but less interest overall.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#DB0011] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Early Repayment:</span>{" "}
                      HSBC allows early repayment without penalty, which can
                      save you money on interest if your financial situation
                      improves. You can make partial overpayments or repay the
                      loan in full at any time.
                    </div>
                  </div>
                </div>

                <div className="my-8 text-left sm:text-left">
                  <Link href="/personal-finance/best-personal-loans">
                    <Image
                      src="https://media.topfinanzas.com/images/ads/Top-Blog-Personal-loans-1.webp"
                      alt="HSBC Personal Loan"
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
                  HSBC Personal Loans are particularly well-suited for several
                  types of borrowers:
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
                  Home improvers:
                </h3>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  If you're planning renovations, extensions, or significant
                  home improvements, an HSBC Personal Loan offers the
                  flexibility to finance these projects at competitive rates.
                  With loan amounts up to £25,000, it can cover substantial work
                  while providing structured repayments to help you budget
                  effectively.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  <span className="font-bold">Learn more:</span>{" "}
                  <Link
                    href="/personal-finance/best-personal-loans" // Replaced dead link
                    className="text-blue-600 underline"
                  >
                    Smart ways to finance home improvements
                  </Link>
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
                  Debt consolidators:
                </h3>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  For those looking to simplify multiple debts into a single
                  monthly payment, HSBC's competitive rates can make it an
                  attractive option for debt consolidation. By replacing
                  higher-interest debts with a single HSBC loan, you may reduce
                  your overall interest costs and streamline your financial
                  management.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  <span className="font-bold">Learn more:</span>{" "}
                  <Link
                    href="/personal-finance/personal-loans-debt-strategy" // Replaced dead link
                    className="text-blue-600 underline"
                  >
                    Effective debt consolidation strategies
                  </Link>
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
                  Vehicle purchasers:
                </h3>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  When buying a new or used vehicle, an HSBC Personal Loan
                  provides transparency with fixed interest rates and consistent
                  monthly payments. Unlike some dealer financing options, there
                  are no hidden fees or complex terms, giving you clarity on the
                  total cost of your purchase.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  <span className="font-bold">Learn more:</span>{" "}
                  <Link
                    href="/personal-finance/best-personal-loans" // Replaced dead link
                    className="text-blue-600 underline"
                  >
                    Comparing car financing options
                  </Link>
                </p>

                <div className="my-8 text-left sm:text-left">
                  <Link href="/personal-finance/getting-out-of-debt">
                    <Image
                      src="https://media.topfinanzas.com/images/ads/Top-Blog-Debt-management-1.webp"
                      alt="HSBC Personal Loan"
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
                  To maximize your chances of approval for an HSBC Personal
                  Loan:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#DB0011] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Check your credit report before applying:
                      </span>{" "}
                      Review your credit report to ensure all information is
                      accurate and address any issues before submission. This
                      simple step can prevent unexpected rejections based on
                      incorrect information.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#DB0011] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Only borrow what you need:
                      </span>{" "}
                      Requesting an appropriate loan amount based on your actual
                      needs rather than the maximum available demonstrates
                      financial responsibility and may improve your chances of
                      approval.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#DB0011] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Have documentation ready:
                      </span>{" "}
                      Prepare all required documents in advance to streamline
                      the application process. Digital copies are useful for
                      online applications, while physical copies may be needed
                      for branch visits.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#DB0011] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Consider your timing:
                      </span>{" "}
                      Avoid applying for multiple credit products
                      simultaneously, as this can temporarily impact your credit
                      score. If you're planning other significant financial
                      applications (like a mortgage), consider the sequencing of
                      these applications.
                    </div>
                  </div>
                </div>

                <div className="text-left my-8">
                  <Link href="https://www.hsbc.co.uk/loans/products/personal/">
                    <Button className="bg-[#DB0011] hover:bg-red-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                      Visit Official Website
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
