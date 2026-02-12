import React from "react";
import { Metadata } from "next";
import ResponsiveImage from "@/components/ui/responsive-image";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Capital One Venture X Rewards Credit Card Requirements",
  description:
    "Elevate your travel experience with Venture X. Check credit score, income, and residency requirements to qualify for premium rewards.",
};

export default function CapitalOneVentureXRequirementsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <h1 className="text-3xl text-left md:text-4xl font-bold text-gray-800 mb-8 leading-8">
              Capital One Venture X Rewards Credit Card Requirements
            </h1>

            {/* Ad Unit: square03 */}
            <div
              id="square03"
              className="w-full flex justify-center my-6"
              data-topads
              data-topads-size="square"
            ></div>

            {/* Intro */}
            <p className="text-left text-lg text-gray-800 font-medium mb-8 leading-5">
              Elevate your travel experience with the Capital One Venture X
              Rewards Credit Card. Designed for avid travelers, this card
              unlocks exclusive perks and opportunities to make every journey
              memorable.
            </p>

            <p className="text-lg text-gray-700 mb-6">
              However, accessing these premium benefits requires meeting
              specific eligibility criteria. Understanding these requirements is
              the first step toward securing your Venture X card.
            </p>

            {/* Featured Image */}
            <div className="mb-8 w-full rounded-xl overflow-hidden shadow-sm">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/capital-one-venture-x-rewards-credit-card-requirements.webp"
                alt="Capital One Venture X Rewards Credit Card Requirements"
                width={1200}
                height={675}
                priority
              />
            </div>

            <p className="text-lg text-gray-700 mb-6">
              Before you apply, review the key qualifications needed to increase
              your chances of approval for this premium travel card.
            </p>

            {/* Ad Unit: square04 */}
            <div
              id="square04"
              className="w-full flex justify-center my-6"
              data-topads
              data-topads-size="square"
            ></div>

            {/* Banner 1 */}
            <div className="my-8 w-full rounded-xl overflow-hidden shadow-sm">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/banner-1-Top-Blog-Debt-management.webp"
                alt="Debt Management"
                width={1200}
                height={400}
              />
            </div>

            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Requirements
            </h2>
            <div className="space-y-2 my-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#0A496C] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">Age:</span> You must
                  be at least 18 years old (19 in Alabama and Nebraska).
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#0A496C] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">Residency:</span>{" "}
                  Must be a U.S. citizen or permanent resident with a valid
                  Social Security Number (SSN) or Individual Taxpayer
                  Identification Number (ITIN).
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#0A496C] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Excellent Credit:
                  </span>{" "}
                  Capital One typically requires excellent credit for this card.
                  A score of <span className="font-bold">740 or higher</span> is
                  recommended.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#0A496C] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900"> Income:</span>{" "}
                  Proof of stable income may be required to ensure you can
                  manage credit obligations effectively.
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

            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              How to apply for the Capital One Venture X Rewards Credit Card
            </h2>
            <div className="space-y-2 my-8">
              <p className="text-left text-gray-800 text-md leading-5">
                The application process is straightforward and secure:
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-[#0A496C] mr-3 mt-1 flex-shrink-0 fill-current" />
                  <p className="text-left text-gray-800 text-md leading-5">
                    <span className="font-bold">
                      Navigate to the Official Site:
                    </span>{" "}
                    Click the link below to visit the secure Capital One Venture
                    X page.
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-[#0A496C] mr-3 mt-1 flex-shrink-0 fill-current" />
                  <p className="text-left text-gray-800 text-md leading-5">
                    <span className="font-bold">Complete the Application:</span>{" "}
                    Provide your personal information, financial details, and
                    contact info.
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-[#0A496C] mr-3 mt-1 flex-shrink-0 fill-current" />
                  <p className="text-left text-gray-800 text-md leading-5">
                    <span className="font-bold">Submit for Review:</span> Submit
                    your application to receive an instant decision in most
                    cases.
                  </p>
                </div>
              </div>
            </div>

            {/* Banner 3 */}
            <div className="my-8 w-full rounded-xl overflow-hidden shadow-sm">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/banner-3-Top-Blog-Credit-Cards.webp"
                alt="Credit Cards"
                width={1200}
                height={400}
              />
            </div>

            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Start your journey
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Don&apos;t miss out on the premium travel benefits that await you.
              Verify your eligibility and apply today to start earning miles on
              every purchase.
            </p>

            <div className="text-left my-8">
              <a
                href="https://www.capitalone.com/credit-cards/venture-x/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0A496C] hover:bg-[#073650] text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform"
              >
                Apply Now at Capital One
              </a>
            </div>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
