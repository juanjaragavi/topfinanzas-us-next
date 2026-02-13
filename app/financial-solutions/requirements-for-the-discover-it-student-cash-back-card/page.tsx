import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ResponsiveImage from "@/components/ui/responsive-image";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Requirements for the Discover it Student Cash Back Card",
  description:
    "A student's gateway to credit benefits: The Discover it Student Cash Back Card offers unmatched rewards for students looking to establish credit.",
};

export default function RequirementsDiscoverItStudentCashBackPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <h1 className="text-3xl text-left md:text-4xl font-bold text-gray-800 mb-8 leading-8">
              Requirements for the Discover it Student Cash Back Card
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
              A student's gateway to credit benefits
            </h2>
            <p className="text-left text-lg text-gray-800 font-medium mb-8 leading-5">
              The Discover it Student Cash Back Card offers unmatched rewards
              for students looking to establish credit.
            </p>

            {/* Ad Unit: square04 */}
            <div
              id="square04"
              className="w-full flex justify-center my-6"
              data-topads
              data-topads-size="square"
            ></div>

            {/* Requirements Section */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Requirements
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8 items-center">
              <div className="w-full h-full">
                <div className="bg-[#A8B0D7] rounded-lg overflow-hidden flex items-center justify-center p-8 h-full min-h-[300px]">
                  <p className="text-4xl font-bold text-white text-center tracking-tight leading-snug">
                    Discover it <br /> Student
                  </p>
                </div>
              </div>
              <div className="w-full h-full">
                <div className="rounded-lg overflow-hidden h-full">
                  <ResponsiveImage
                    src="https://media.topfinanzas.com/images/requirements-for-the-discover-it-student-cash-back-card.webp"
                    alt="Requirements for the Discover it Student Cash Back Card"
                    width={800}
                    height={600}
                    className="object-cover h-full w-full"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#A8B0D7] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">Activity:</span>{" "}
                  Enrollment in an accredited college or university.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#A8B0D7] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Financial income:
                  </span>{" "}
                  Proof of income or financial resources.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#A8B0D7] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">Age:</span> Minimum
                  age of 18 years.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#A8B0D7] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Personal identification:
                  </span>{" "}
                  Valid SSN.
                </p>
              </div>
            </div>

            {/* Banner 1 */}
            <div className="my-8 w-full rounded-xl overflow-hidden shadow-sm">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/banner-1-Top-Blog-Debt-management.webp"
                alt="Debt Management"
                width={1200}
                height={400}
              />
            </div>

            {/* Perks of the Discover it Student Cash Back Card */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Perks of the Discover it Student Cash Back Card
            </h2>

            <div className="space-y-2 my-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <CheckCircle className="h-6 w-6 text-[#A8B0D7]" />
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Generous cashback:
                  </span>{" "}
                  Earn 5% cashback on rotating categories and 1% on all other
                  purchases.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <CheckCircle className="h-6 w-6 text-[#A8B0D7]" />
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Introductory offers:
                  </span>{" "}
                  Enjoy a $0 annual fee and cashback matching for the first
                  year.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <CheckCircle className="h-6 w-6 text-[#A8B0D7]" />
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Credit monitoring tools:
                  </span>{" "}
                  Access free FICO scores to track your credit-building
                  progress.
                </p>
              </div>
            </div>

            {/* Eligibility requirements in depth */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Eligibility requirements in depth
            </h2>

            <div className="space-y-2 my-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#A8B0D7] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Enrollment verification:
                  </span>{" "}
                  You must be actively enrolled in a college or university to
                  apply.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#A8B0D7] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">Income proof:</span>{" "}
                  Demonstrate financial independence or a co-signer's backing to
                  qualify.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#A8B0D7] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">Minimum age:</span>{" "}
                  Applicants must meet the legal age of majority in their state
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#A8B0D7] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Identity documents:
                  </span>{" "}
                  Provide a valid Social Security Number for credit evaluation
                  purposes.
                </p>
              </div>
            </div>

            {/* Banner 2 */}
            <div className="my-8 w-full rounded-xl overflow-hidden shadow-sm">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/banner-2-Top-Blog-Personal-loans.webp"
                alt="Personal Loans"
                width={1200}
                height={400}
              />
            </div>

            {/* Steps to apply */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Steps to apply
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="my-4">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Step 1 – Verify enrollment
                </h3>
                <p className="text-left text-gray-800 text-md leading-5">
                  Have your school information and enrollment proof ready.
                </p>
              </div>

              <div className="my-4">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Step 2 – Prepare income details
                </h3>
                <p className="text-left text-gray-800 text-md leading-5">
                  Provide documentation such as pay stubs, scholarships, or
                  parental support.
                </p>
              </div>

              <div className="my-4">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Step 3 – Fill out the application
                </h3>
                <p className="text-left text-gray-800 text-md leading-5">
                  Submit your application through Discover's official website.
                </p>
              </div>

              <div className="my-4">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Step 4 – Wait for approval
                </h3>
                <p className="text-left text-gray-800 text-md leading-5">
                  Once processed, you'll receive a decision within a few days.
                </p>
              </div>
            </div>

            {/* How students can use credit wisely */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              How students can use credit wisely
            </h2>

            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              Build a budget
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Track expenses to avoid overspending and maintain healthy credit
              habits.
            </p>

            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              Pay the full balance
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Avoid interest charges by paying your bill in full each month.
            </p>

            {/* Banner 3 */}
            <div className="my-8 w-full rounded-xl overflow-hidden shadow-sm">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/banner-3-Top-Blog-Credit-Cards.webp"
                alt="Credit Cards"
                width={1200}
                height={400}
              />
            </div>

            {/* Why choose this card? */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Why choose this card?
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              This card is ideal for students who want to build credit while
              enjoying significant cashback rewards and financial tools.
            </p>

            {/* Conclusion */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Conclusion
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              The Discover it Student Cash Back Card is a fantastic option for
              students eager to establish credit. By meeting the requirements
              and managing it responsibly, you'll set yourself up for future
              financial success.
            </p>

            {/* CTA */}
            <div className="flex flex-col items-center justify-center mb-8">
              <Link
                href="https://www.discover.com/credit-cards/student-credit-card/it-card.html"
                className="w-full md:w-auto"
              >
                <Button className="w-full md:w-auto px-8 py-2 text-md bg-[#A8B0D7] hover:bg-[#8e96bf] text-white font-medium rounded-full">
                  See on official site*
                </Button>
              </Link>
              <p className="text-sm text-gray-500 mt-3 text-center">
                *By clicking you will be redirected to an external site.
              </p>
            </div>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
