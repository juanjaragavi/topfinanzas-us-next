import React from "react";
import { Metadata } from "next";
import ResponsiveImage from "@/components/ui/responsive-image";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title:
    "Requirements to Qualify for the American Express® Gold Card: What You Need to Know",
  description:
    "Unlock the Gold Standard: Great credit, steady income, and endless rewards await. See if the Amex Gold Card is for you!",
};

export default function AmexGoldRequirementsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Requirements to Qualify for the American Express® Gold Card: What
              You Need to Know
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
              Unlock the Gold Standard: Great credit, steady income, and endless
              rewards await. See if the Amex Gold Card is for you!
            </p>

            <p className="text-lg text-gray-700 mb-6">
              If you’re considering applying for the American Express® Gold
              Card, it’s important to ensure you meet the necessary requirements
              to obtain it. This card is designed for individuals with a strong
              credit history and offers ideal benefits for those looking to
              maximize their everyday purchases and enjoy dining and travel
              experiences.
            </p>

            {/* Featured Image */}
            <div className="mb-10 w-full rounded-xl overflow-hidden shadow-sm">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/requirements-to-qualify-for-the-american-express-gold-card.webp"
                alt="Requirements to Qualify for the American Express® Gold Card"
                width={1200}
                height={675}
                priority
              />
            </div>

            {/* Ad Unit: square04 (Inserted after 3rd paragraph block - roughly here or inside next section) */}
            {/* We have 2 paragraphs above. Let's put one more before the ad or put the ad inside the next section's flow */}

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Requirements
            </h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#C8B56A] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    Age of your credit accounts:{" "}
                  </span>
                  Having open accounts for several years reflects financial
                  stability.
                </p>
              </div>

              {/* Square04 could go here to be "after 3rd paragraph" if we count list items as blocks, or just insert it after this block */}
              <div
                id="square04"
                className="w-full flex justify-center my-6"
                data-topads
                data-topads-size="square"
              ></div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#C8B56A] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    On-time payments:{" "}
                  </span>
                  A history of timely payments demonstrates responsible credit
                  management.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#C8B56A] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    Low credit utilization:{" "}
                  </span>
                  Keep your credit utilization (the percentage of available
                  credit you’re using) below 30%.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#C8B56A] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    Financial history:{" "}
                  </span>
                  Your declared monthly or annual income and debt-to-income
                  ratio (your overall debt relative to your income).
                </p>
              </div>
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

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              No initial impact on your credit score
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              One major benefit of applying for the American Express® Gold Card
              is that you can check if you qualify without affecting your credit
              score. During pre-approval, American Express conducts a soft pull
              on your credit, meaning there’s no negative impact when checking
              your eligibility.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Only if you decide to accept the card after being approved will a
              hard inquiry be conducted, which may slightly impact your credit
              score.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ability to cover the annual fee
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              The American Express® Gold Card comes with a $325 annual fee,
              which may seem high at first glance. However, if you take full
              advantage of the credits and rewards, the benefits can easily
              offset the cost.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              It’s essential to assess whether your spending habits and
              financial capacity will allow you to maximize:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-[#C8B56A] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-lg">
                  The $120 in annual Uber Cash credits.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-[#C8B56A] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-lg">
                  The $120 in dining credits at select restaurants.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-[#C8B56A] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-lg">
                  Additional perks like the Resy Credit and Dunkin’ Credit.
                </span>
              </li>
            </ul>
            <p className="text-lg text-gray-700 mb-8">
              By using these benefits regularly, the total value of the credits
              can exceed the annual fee.
            </p>

            {/* Banner 2 */}
            <div className="my-10 w-full rounded-xl overflow-hidden shadow-sm">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/banner-2-Top-Blog-Personal-loans.webp"
                alt="Personal Loans"
                width={1200}
                height={400}
              />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Age and residency requirements
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              To apply for the American Express® Gold Card, you must meet the
              following basic criteria:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-[#C8B56A] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-lg">
                  Be 18 years or older.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-[#C8B56A] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-lg">
                  Reside in the United States.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-[#C8B56A] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-lg">
                  Have a valid Social Security Number (SSN) or ITIN.
                </span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              How to apply successfully
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              If you meet the above requirements, the application process is
              straightforward:
            </p>
            <ol className="space-y-4 mb-8 list-none pl-0">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#C8B56A] text-white flex items-center justify-center font-bold text-sm mr-3">
                  1
                </div>
                <p className="text-gray-700 text-lg">
                  Visit the official American Express website.
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#C8B56A] text-white flex items-center justify-center font-bold text-sm mr-3">
                  2
                </div>
                <p className="text-gray-700 text-lg">
                  Complete the application with your personal and financial
                  information.
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#C8B56A] text-white flex items-center justify-center font-bold text-sm mr-3">
                  3
                </div>
                <p className="text-gray-700 text-lg">
                  Check your eligibility without impacting your credit score.
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#C8B56A] text-white flex items-center justify-center font-bold text-sm mr-3">
                  4
                </div>
                <p className="text-gray-700 text-lg">
                  If approved, accept the card and enjoy its welcome benefits.
                </p>
              </li>
            </ol>

            {/* Banner 3 */}
            <div className="my-10 w-full rounded-xl overflow-hidden shadow-sm">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/banner-3-Top-Blog-Credit-Cards.webp"
                alt="Credit Cards"
                width={1200}
                height={400}
              />
            </div>

            <div className="bg-gray-50 rounded-xl p-8 mb-10 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Is the American Express® Gold Card right for you?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                If you have a strong credit score, stable income, and are ready
                to take advantage of the card’s unique benefits, the American
                Express® Gold Card is an excellent choice for earning rewards
                on restaurants and grocery purchases, saving with credits for
                Uber and Resy, and enjoying travel benefits.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Applying for the American Express® Gold Card is a simple
                process if you meet the key criteria. Before applying, evaluate
                your financial situation and ensure this card aligns with your
                needs and spending habits.
              </p>

              {/* Final CTA to External Application */}
              <div className="flex justify-center">
                <a
                  href="https://www.americanexpress.com/us/credit-cards/card/gold-card/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#C8B56A] hover:bg-[#b09e5a] text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform transform hover:scale-105 inline-flex items-center justify-center"
                >
                  Apply Now at American Express
                </a>
              </div>
            </div>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
