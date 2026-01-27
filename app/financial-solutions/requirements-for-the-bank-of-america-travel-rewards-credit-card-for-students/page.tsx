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
    "Requirements for the Bank of America® Travel Rewards Credit Card for Students",
  description:
    "Essential steps to qualify for the perfect student credit card. Learn about the requirements and application process for the Bank of America® Travel Rewards Credit Card for Students.",
};

export default function BankOfAmericaStudentTravelCardRequirementsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Requirements for the Bank of America® Travel Rewards Credit Card
              for Students
            </h1>

            {/* Ad Unit: square03 */}
            <div
              id="square03"
              className="w-full flex justify-center my-6"
              data-topads
              data-topads-size="square"
            ></div>

            {/* Intro */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Essential steps to qualify for the perfect student credit card
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Are you a student looking to build your credit and gain financial
              independence? The Bank of America® Travel Rewards Credit Card for
              Students is a great starting point. But before applying, it’s
              crucial to understand the specific requirements to ensure a smooth
              application process.
            </p>

            {/* Requirements Section */}
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Requirements
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-10 items-center">
              <div className="w-full">
                <div className="bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center p-8 h-full min-h-[300px]">
                  <p className="text-2xl font-bold text-gray-800 tracking-tight text-center">
                    Bank of America
                  </p>
                </div>
              </div>
              <div>
                <div className="rounded-lg overflow-hidden mb-0">
                  <ResponsiveImage
                    src="https://media.topfinanzas.com/images/requirements-for-the-bank-of-america-travel-rewards-credit-card-for-students.webp"
                    alt="Requirements for the Bank of America® Travel Rewards Credit Card for Students"
                    width={800}
                    height={450}
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-10">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#14377D] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    Proof of student enrollment:
                  </span>{" "}
                  Provide documentation such as a valid student ID or enrollment
                  verification.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#14377D] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    Age requirement:
                  </span>{" "}
                  Applicants must be at least 18 years old (21 in some states
                  without a co-signer).
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#14377D] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    U.S. Citizenship or Residency:
                  </span>{" "}
                  You need a valid Social Security number or Individual Taxpayer
                  Identification Number (ITIN).
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#14377D] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    Stable income source:
                  </span>{" "}
                  Demonstrate the ability to repay charges, whether through a
                  part-time job, parental support, or financial aid.
                </p>
              </div>
            </div>

            {/* Banner 1 */}
            <div className="my-10 w-full rounded-xl overflow-hidden shadow-sm">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/banner-1-Top-Blog-Debt-management.webp"
                alt="Ready to tackle your debt?"
                width={1200}
                height={400}
              />
            </div>

            {/* The application process */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              The application process
            </h2>

            {/* Ad Unit: square04 */}
            <div
              id="square04"
              className="w-full flex justify-center my-6"
              data-topads
              data-topads-size="square"
            ></div>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Step 1: Gather your documentation
            </h3>
            <p className="text-gray-700 text-lg mb-4">
              Having your documents ready can streamline the process. Here’s
              what you’ll need:
            </p>

            <div className="space-y-4 mb-8 text-gray-700 text-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#14377D] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p>
                  <span className="font-bold text-gray-900">
                    Government-issued ID:
                  </span>{" "}
                  A driver’s license, state ID, or passport.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#14377D] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p>
                  <span className="font-bold text-gray-900">
                    Proof of Student Enrollment:
                  </span>{" "}
                  An acceptance letter, class schedule, or transcript.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#14377D] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p>
                  <span className="font-bold text-gray-900">
                    Proof of Income:
                  </span>{" "}
                  Pay stubs, bank statements, or a financial aid award letter.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Step 2: Apply online or in-branch
            </h3>
            <p className="text-gray-700 text-lg mb-4">
              Bank of America makes it easy to apply through their website or at
              a local branch. Follow these steps:
            </p>
            <div className="space-y-4 mb-8 text-gray-700 text-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#14377D] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p>
                  Visit the Bank of America® Travel Rewards Credit Card for
                  Students webpage.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#14377D] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p>Click “Apply Now” and fill out the application form.</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#14377D] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p>Upload required documents and verify your information.</p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Step 3: Wait for approval
            </h3>
            <p className="text-gray-700 text-lg mb-4">
              Once submitted, the approval process may take a few minutes to a
              few days. If additional verification is needed, you’ll be
              contacted.
            </p>

            {/* Banner 2 */}
            <div className="my-10 w-full rounded-xl overflow-hidden shadow-md">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/banner-2-Top-Blog-Personal-loans.webp"
                alt="Unlock your path to debt freedom"
                width={600}
                height={600}
              />
            </div>

            {/* Considerations before applying */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Considerations before applying
            </h2>

            <div className="space-y-3 mb-8 text-gray-700 text-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-2 mr-3">
                  <div className="h-2 w-2 rounded-full bg-[#14377D]"></div>
                </div>
                <p>
                  <span className="font-bold">
                    Understanding credit responsibility:
                  </span>{" "}
                  While applying for a credit card is exciting, it’s crucial to
                  use it wisely. Avoid overspending and always pay your balance
                  on time to avoid interest charges.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-2 mr-3">
                  <div className="h-2 w-2 rounded-full bg-[#14377D]"></div>
                </div>
                <p>
                  <span className="font-bold">
                    Annual percentage rate (APR):
                  </span>{" "}
                  The variable APR for purchases is 19.99% – 29.99%, based on
                  your creditworthiness. Be sure to understand how interest
                  works and aim to pay your statement balance in full each
                  month.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-2 mr-3">
                  <div className="h-2 w-2 rounded-full bg-[#14377D]"></div>
                </div>
                <p>
                  <span className="font-bold">
                    Eligibility for international students:
                  </span>{" "}
                  If you’re an international student, you’ll need an ITIN and
                  possibly a co-signer. Check with Bank of America for specific
                  requirements.
                </p>
              </div>
            </div>

            {/* Banner 3 */}
            <div className="my-10 w-full rounded-xl overflow-hidden shadow-sm">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/banner-3-Top-Blog-Credit-Cards.webp"
                alt="Looking for the Perfect Credit Card?"
                width={600}
                height={600}
              />
            </div>

            {/* Your best credit card */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Your best credit card
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              Meeting the requirements for the Bank of America® Travel Rewards
              Credit Card for Students is the first step toward establishing
              your financial independence. By preparing the necessary
              documentation and understanding the eligibility criteria, you can
              set yourself up for a successful application.
            </p>

            <div className="flex flex-col items-center justify-center space-y-4">
              <Link
                href="https://www.bankofamerica.com/credit-cards/products/student-rewards-credit-card/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto"
              >
                <Button className="w-full md:w-auto px-10 py-6 text-xl bg-[#14377D] hover:bg-[#0f2c68] text-white font-bold rounded-full shadow-lg transition-all duration-200 transform hover:scale-105">
                  See on official site*
                </Button>
              </Link>
              <p className="text-xs text-gray-500">
                *By clicking you will be redirected to an external site.
              </p>
            </div>

            <hr className="my-12 border-gray-200" />
            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
