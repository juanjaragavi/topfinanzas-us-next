import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ResponsiveImage from "@/components/ui/responsive-image";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title:
    "Requirements for the Bank of America® Unlimited Cash Rewards Credit Card for Students",
  description:
    "A complete guide to meeting application requirements for U.S.-based students looking to build credit responsibly with Bank of America.",
};

export default function BankOfAmericaStudentCardRequirementsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <h1 className="text-3xl text-left md:text-4xl font-bold text-gray-800 mb-8 leading-8">
              Requirements for the Bank of America® Unlimited Cash Rewards
              Credit Card for Students
            </h1>

            {/* Ad Unit: square03 */}
            <div
              id="square03"
              className="w-full flex justify-center my-6"
              data-topads
              data-topads-size="square"
            ></div>

            {/* Intro */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              A complete guide to meeting application requirements for
              U.S.-based students
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Are you a student in the United States looking to build your
              credit responsibly? The Bank of America® Unlimited Cash Rewards
              credit card for Students could be your stepping stone to financial
              independence.
            </p>

            {/* Requirements Section */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Requirements
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8 items-center">
              <div className="w-full">
                <div className="my-4 overflow-hidden flex items-center justify-center p-8 h-full min-h-[300px]">
                  <p className="text-2xl font-bold text-gray-800 tracking-tight text-center">
                    Bank of America
                  </p>
                </div>
              </div>
              <div>
                <div className="rounded-lg overflow-hidden mb-0">
                  <ResponsiveImage
                    src="https://media.topfinanzas.com/images/requirements-for-the-bank-of-america-unlimited-cash-rewards-credit-card-for-students.webp"
                    alt="Requirements for the Bank of America® Unlimited Cash Rewards Credit Card for Students"
                    width={800}
                    height={450}
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#96979A] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Proof of enrollment:
                  </span>{" "}
                  Must provide evidence of being a current student.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#96979A] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Social Security Number:
                  </span>{" "}
                  Required for identity verification and credit checks.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#96979A] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Steady Income or financial support:
                  </span>{" "}
                  Demonstrate an ability to pay off the credit card balance.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#96979A] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">U.S. Address:</span>{" "}
                  A permanent address within the United States.
                </p>
              </div>
            </div>

            {/* Banner 1 */}
            <div className="my-8 w-full rounded-xl overflow-hidden shadow-sm">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/banner-1-Top-Blog-Debt-management.webp"
                alt="Ready to tackle your debt?"
                width={1200}
                height={400}
              />
            </div>

            {/* What you need to apply */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              What you need to apply
            </h2>

            {/* Ad Unit: square04 */}
            <div
              id="square04"
              className="w-full flex justify-center my-6"
              data-topads
              data-topads-size="square"
            ></div>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              1. Proof of enrollment in an accredited Institution
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              The Bank of America® Unlimited Cash Rewards credit card for
              Students is specifically designed for students. To qualify, you
              must provide documentation proving your enrollment in a recognized
              educational institution. Acceptable forms of proof include:
            </p>

            <div className="space-y-2 my-8 text-left text-gray-800 text-md leading-5">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#96979A] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p>A current student ID with valid expiration dates.</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#96979A] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p>An official transcript showing your active enrollment.</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#96979A] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p>
                  A letter of acceptance (if you're a new student) along with a
                  tuition payment receipt.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              2. Social Security Number (SSN)
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              A valid Social Security Number is non-negotiable when applying for
              any U.S. credit card. This number allows Bank of America to:
            </p>
            <div className="space-y-2 my-8 text-left text-gray-800 text-md leading-5">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#96979A] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p>Verify your identity.</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#96979A] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p>Access your credit report.</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#96979A] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p>
                  Conduct a background check to assess your creditworthiness.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              3. Evidence of income or financial support
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Even as a student, you must prove you can manage debt responsibly.
              While you don't need a high income, having a steady source of
              funds is critical. Acceptable forms of income or financial support
              include:
            </p>
            <div className="space-y-2 my-8 text-left text-gray-800 text-md leading-5">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#96979A] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p>Part-time job pay stubs.</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#96979A] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p>Proof of scholarships, grants, or financial aid.</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#96979A] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p>Documentation of support from a parent or guardian.</p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              4. A U.S. Mailing address
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Having a permanent U.S. address is a standard requirement for
              credit card applications. This address will be used for:
            </p>
            <div className="space-y-2 my-8 text-left text-gray-800 text-md leading-5">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#96979A] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p>Sending your credit card.</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#96979A] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p>Monthly billing statements.</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#96979A] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p>Important updates and communications from the bank</p>
              </div>
            </div>

            {/* Banner 2 */}
            <div className="my-8 w-full rounded-xl overflow-hidden shadow-md">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/banner-2-Top-Blog-Personal-loans.webp"
                alt="Unlock your path to debt freedom"
                width={600}
                height={600}
              />
            </div>

            {/* How to apply for the card */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              How to apply for the card
            </h2>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Step-by-step guide
            </h3>
            <div className="space-y-3 mb-8 text-left text-gray-800 text-md leading-5">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-2 mr-3">
                  <div className="h-2 w-2 rounded-full bg-[#96979A]"></div>
                </div>
                <p>
                  <span className="font-bold">Gather Documentation:</span>{" "}
                  Ensure you have your proof of enrollment, Social Security
                  Number, income verification, and U.S. mailing address ready.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-2 mr-3">
                  <div className="h-2 w-2 rounded-full bg-[#96979A]"></div>
                </div>
                <p>
                  <span className="font-bold">Visit the Bank's Website:</span>{" "}
                  Go to Bank of America's official site.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-2 mr-3">
                  <div className="h-2 w-2 rounded-full bg-[#96979A]"></div>
                </div>
                <p>
                  <span className="font-bold">
                    Fill Out the Application Form:
                  </span>{" "}
                  Provide accurate details about your education, income, and
                  contact information.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-2 mr-3">
                  <div className="h-2 w-2 rounded-full bg-[#96979A]"></div>
                </div>
                <p>
                  <span className="font-bold">Submit the Application:</span>{" "}
                  Double-check your information before hitting the submit
                  button.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-2 mr-3">
                  <div className="h-2 w-2 rounded-full bg-[#96979A]"></div>
                </div>
                <p>
                  <span className="font-bold">Await Approval:</span> Application
                  reviews typically take a few minutes to a few days. Be
                  prepared to provide additional documentation if requested.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Common pitfalls to avoid
            </h3>
            <div className="space-y-3 mb-8 text-left text-gray-800 text-md leading-5">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-2 mr-3">
                  <div className="h-2 w-2 rounded-full bg-[#96979A]"></div>
                </div>
                <p>
                  <span className="font-bold">
                    Submitting Incomplete Information:
                  </span>{" "}
                  Ensure all fields are filled out accurately.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-2 mr-3">
                  <div className="h-2 w-2 rounded-full bg-[#96979A]"></div>
                </div>
                <p>
                  <span className="font-bold">Ignoring Credit Checks:</span>{" "}
                  Even as a student, avoid applying if you've missed payments on
                  any existing loans or bills.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-2 mr-3">
                  <div className="h-2 w-2 rounded-full bg-[#96979A]"></div>
                </div>
                <p>
                  <span className="font-bold">
                    Applying Without Income Proof:
                  </span>{" "}
                  Be ready to demonstrate a source of funds, no matter how
                  small.
                </p>
              </div>
            </div>

            {/* Banner 3 */}
            <div className="my-8 w-full rounded-xl overflow-hidden shadow-sm">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/banner-3-Top-Blog-Credit-Cards.webp"
                alt="Looking for the Perfect Credit Card?"
                width={600}
                height={600}
              />
            </div>

            {/* Closing thoughts */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Closing thoughts
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              The Bank of America® Unlimited Cash Rewards credit card for
              Students is an excellent option for those ready to begin their
              credit journey. Meeting the outlined requirements is your first
              step toward approval. Take the time to gather all necessary
              documentation and verify your eligibility before applying.
            </p>

            <div className="flex flex-col items-center justify-center space-y-2">
              <Link
                href="https://www.bankofamerica.com/credit-cards/student-credit-cards/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto"
              >
                <Button className="w-full md:w-auto px-8 py-2 text-md bg-[#96979A] hover:bg-[#7d7e81] text-white font-medium rounded-full">
                  See on official site*
                </Button>
              </Link>
              <p className="text-xs text-gray-500">
                *By clicking you will be redirected to an external site.
              </p>
            </div>

            <hr className="my-8" />
            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
