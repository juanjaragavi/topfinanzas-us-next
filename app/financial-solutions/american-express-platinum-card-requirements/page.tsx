import React from "react";
import { Metadata } from "next";
import ResponsiveImage from "@/components/ui/responsive-image";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "American Express Platinum Card Requirements",
  description:
    "The Platinum Card from American Express offers outstanding perks. Check credit score, income, and residency requirements to qualify.",
};

export default function AmexPlatinumRequirementsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              American Express Platinum Card Requirements
            </h1>

            {/* Ad Unit: square03 */}
            <div
              id="square03"
              className="w-full flex justify-center my-6"
              data-topads
              data-topads-size="square"
            ></div>

            {/* Intro */}
            <p className="text-lg text-gray-800 mb-6">
              The Platinum Card from American Express offers outstanding perks
              and exclusive benefits, but acquiring this prestigious card
              requires meeting specific qualifications and following certain
              steps.
            </p>

            {/* Featured Image */}
            <div className="mb-10 w-full rounded-xl overflow-hidden shadow-sm">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/american-express-platinum-card-requirements.webp"
                alt="American Express Platinum Card Requirements"
                width={1200}
                height={675}
                priority
              />
            </div>

            {/* Banner 1 */}
            <div className="my-10 w-full rounded-xl overflow-hidden shadow-sm">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/banner-1-Top-Blog-Debt-management.webp"
                alt="Debt Management"
                width={1200}
                height={400}
              />
            </div>

            {/* Ad Unit: square04 (Placed after visuals/intro flow) */}
            <div
              id="square04"
              className="w-full flex justify-center my-6"
              data-topads
              data-topads-size="square"
            ></div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Requirements
            </h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#D8D9DD] p-1">
                    <ArrowRight className="h-4 w-4 text-black" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">Age:</span> Must be
                  at least 18 years old.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#D8D9DD] p-1">
                    <ArrowRight className="h-4 w-4 text-black" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">Residency:</span>{" "}
                  Must be a U.S. citizen or legal resident (Green Card holder).
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#D8D9DD] p-1">
                    <ArrowRight className="h-4 w-4 text-black" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">Credit Score:</span>{" "}
                  Excellent score required, typically{" "}
                  <span className="font-bold">700 or higher</span>.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#D8D9DD] p-1">
                    <ArrowRight className="h-4 w-4 text-black" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">Income:</span> While
                  not officially specified, applicants typically need an income of{" "}
                  <span className="font-bold">$50,000 to $100,000+</span> per
                  year to qualify.
                </p>
              </div>
            </div>

            {/* Banner 2 */}
            <div className="my-10 w-full rounded-xl overflow-hidden shadow-sm">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/banner-2-Top-Blog-Personal-loans.webp"
                alt="Personal Loans"
                width={1200}
                height={400}
              />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              How to apply for the Platinum Card from American Express
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-gray-700 text-lg">
                Applying for the Platinum Card is a straightforward process that
                can be done online in just a few minutes.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-[#D8D9DD] mr-3 mt-1 flex-shrink-0 fill-current" />
                  <p className="text-gray-700 text-lg">
                    Visit the secure American Express website.
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-[#D8D9DD] mr-3 mt-1 flex-shrink-0 fill-current" />
                  <p className="text-gray-700 text-lg">
                    Fill out the application form with your personal and financial
                    information.
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-[#D8D9DD] mr-3 mt-1 flex-shrink-0 fill-current" />
                  <p className="text-gray-700 text-lg">
                    Review the terms and conditions carefully.
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-[#D8D9DD] mr-3 mt-1 flex-shrink-0 fill-current" />
                  <p className="text-gray-700 text-lg">
                    Submit your application and wait for a decision, which is
                    often instant.
                  </p>
                </div>
              </div>
            </div>

            {/* Banner 3 */}
            <div className="my-10 w-full rounded-xl overflow-hidden shadow-sm">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/banner-3-Top-Blog-Credit-Cards.webp"
                alt="Credit Cards"
                width={1200}
                height={400}
              />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              What to do after applying
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Once approved, you will receive your card in the mail. Activate it
              immediately and set up your online account to start managing your
              spending and rewards. Don&apos;t forget to explore the travel
              benefits andenroll in the various credits available to you.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Your best option
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              The Platinum Card is a valuable financial tool that requires
              applicants to meet high standards. Prospective cardholders can
              improve their approval odds by verifying their credit score and
              ensuring they meet income and residency criteria before applying.
            </p>

            <div className="flex justify-center mb-8">
              <a
                href="https://www.americanexpress.com/us/credit-cards/card/platinum/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#D8D9DD] hover:bg-gray-300 text-gray-900 font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform transform hover:scale-105 inline-flex items-center justify-center"
              >
                Apply Now at American Express
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
