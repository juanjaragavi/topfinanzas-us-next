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
  title: "Bank of America Business Loan Benefits | TopFinanzas US",
  description:
    "Maximize your business potential with Bank of America. Discover tailored loans, credit lines, and rewards designed to fuel your growth.",
};

export default function BankOfAmericaBenefitsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Bank of America Business Loan Benefits
            </h1>

            {/* Ad Unit: square02 */}
            <div
              id="square02"
              className="w-full flex justify-center my-6"
              data-topads
              data-topads-size="square"
            ></div>

            {/* Intro */}
            <p className="text-lg text-gray-800 mb-6">
              Maximize Your Business Potential with Bank of America Business
              Solutions.
            </p>

            {/* Key Benefits List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#012169] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    Fuel Your Growth:
                  </span>{" "}
                  Get business loans and credit lines that fit like a glove.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#012169] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    Manage with Ease:
                  </span>{" "}
                  Control your finances with simple online tools.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#012169] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    Turn Spending into Rewards:
                  </span>{" "}
                  Earn points, cash, or travel on every purchase.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#012169] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    Support on Demand:
                  </span>{" "}
                  Expert guidance, always just a call away.
                </p>
              </div>
            </div>

            {/* CTA 1 */}
            <div className="flex justify-center mb-8">
              <Link
                href="/financial-solutions/bank-of-america-business-loans-requirements"
                className="w-full md:w-auto"
              >
                <Button className="w-full md:w-auto px-10 py-6 text-xl bg-[#012169] hover:bg-[#1a3a70] text-white font-bold rounded-full shadow-md transition-all duration-200">
                  Learn about the requirements
                </Button>
              </Link>
            </div>

            {/* Split Section */}
            <div className="grid md:grid-cols-2 gap-0 mb-10 items-stretch h-full">
              {/* Left: Text Placeholder */}
              <div className="bg-gray-100 flex items-center justify-center p-8 min-h-[300px]">
                <p className="text-4xl font-bold text-gray-900 tracking-tight text-center">
                  Bank of
                  <br />
                  America
                </p>
              </div>
              {/* Right: Image */}
              <div className="relative min-h-[300px]">
                <ResponsiveImage
                  src="https://media.topfinanzas.com/images/bank-of-america-business-loans-benefits.webp"
                  alt="Bank of America benefits"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

            {/* Empower Your Business Today */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Empower Your Business Today
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              Bank of America Business solutions offer tailored services to
              elevate your business. Whether you’re a startup or an established
              company, this financial partner is designed to grow with you.
              Discover why thousands of business owners trust Bank of America to
              fuel their ambitions.
            </p>

            {/* Why choose Bank of America for Your Business? */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Why choose Bank of America for Your Business?
            </h2>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Unmatched Financing Options
            </h3>
            <p className="text-gray-700 text-lg mb-4">
              Bank of America understands the unique challenges businesses face.
              With flexible financing options, you can:
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-2 mr-3">
                  <div className="h-2 w-2 rounded-full bg-[#012169]"></div>
                </div>
                <p className="text-gray-700 text-lg">
                  Secure competitive business loans for expansion.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-2 mr-3">
                  <div className="h-2 w-2 rounded-full bg-[#012169]"></div>
                </div>
                <p className="text-gray-700 text-lg">
                  Access lines of credit to maintain cash flow.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-2 mr-3">
                  <div className="h-2 w-2 rounded-full bg-[#012169]"></div>
                </div>
                <p className="text-gray-700 text-lg">
                  Leverage equipment financing to upgrade your tools and
                  machinery.
                </p>
              </div>
            </div>
            <p className="text-gray-700 text-lg mb-6">
              These solutions are crafted to provide financial peace of mind so
              you can focus on running your business.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              User-Friendly Online Banking
            </h3>
            <p className="text-gray-700 text-lg mb-4">
              Efficiency is key when managing business finances. Bank of
              America’s online tools provide:
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-2 mr-3">
                  <div className="h-2 w-2 rounded-full bg-[#012169]"></div>
                </div>
                <p className="text-gray-700 text-lg">
                  Real-time account monitoring to stay updated.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-2 mr-3">
                  <div className="h-2 w-2 rounded-full bg-[#012169]"></div>
                </div>
                <p className="text-gray-700 text-lg">
                  Easy transfers between business and personal accounts.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-2 mr-3">
                  <div className="h-2 w-2 rounded-full bg-[#012169]"></div>
                </div>
                <p className="text-gray-700 text-lg">
                  Detailed financial reporting to track spending and optimize
                  budgets.
                </p>
              </div>
            </div>
            <p className="text-gray-700 text-lg mb-6">
              The mobile app ensures you’re always connected to your accounts,
              even on the go.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Rewarding your Business
            </h3>
            <p className="text-gray-700 text-lg mb-4">
              Every transaction counts with Bank of America’s reward programs.
              Tailored for businesses, these programs allow you to:
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-2 mr-3">
                  <div className="h-2 w-2 rounded-full bg-[#012169]"></div>
                </div>
                <p className="text-gray-700 text-lg">
                  Earn cash back on essential business purchases.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-2 mr-3">
                  <div className="h-2 w-2 rounded-full bg-[#012169]"></div>
                </div>
                <p className="text-gray-700 text-lg">
                  Accumulate travel points for team trips or conferences.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-2 mr-3">
                  <div className="h-2 w-2 rounded-full bg-[#012169]"></div>
                </div>
                <p className="text-gray-700 text-lg">
                  Redeem rewards for office supplies, gift cards, and more.
                </p>
              </div>
            </div>
            <p className="text-gray-700 text-lg mb-8">
              These benefits not only reduce expenses but also help reinvest in
              your company’s growth.
            </p>

            {/* Personalized Service for Your Business Goals */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Personalized Service for Your Business Goals
            </h2>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Dedicated Relationship Managers
            </h3>
            <p className="text-gray-700 text-lg mb-4">
              Bank of America assigns a dedicated relationship manager to your
              account. Their expertise ensures:
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-2 mr-3">
                  <div className="h-2 w-2 rounded-full bg-[#012169]"></div>
                </div>
                <p className="text-gray-700 text-lg">
                  Personalized advice for financial planning.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-2 mr-3">
                  <div className="h-2 w-2 rounded-full bg-[#012169]"></div>
                </div>
                <p className="text-gray-700 text-lg">
                  Quick resolutions to account-related issues.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-2 mr-3">
                  <div className="h-2 w-2 rounded-full bg-[#012169]"></div>
                </div>
                <p className="text-gray-700 text-lg">
                  Strategic insights to meet your business’s long-term goals.
                </p>
              </div>
            </div>
            <p className="text-gray-700 text-lg mb-6">
              This level of support means you’re never navigating your finances
              alone.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Small Business Assistance
            </h3>
            <p className="text-gray-700 text-lg mb-4">
              If you’re a small business owner, you’ll appreciate the added
              features tailored for your needs, such as:
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-2 mr-3">
                  <div className="h-2 w-2 rounded-full bg-[#012169]"></div>
                </div>
                <p className="text-gray-700 text-lg">
                  Tools to streamline payroll and employee management.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-2 mr-3">
                  <div className="h-2 w-2 rounded-full bg-[#012169]"></div>
                </div>
                <p className="text-gray-700 text-lg">
                  Access to workshops and seminars on financial literacy.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-2 mr-3">
                  <div className="h-2 w-2 rounded-full bg-[#012169]"></div>
                </div>
                <p className="text-gray-700 text-lg">
                  Business credit cards with low-interest rates and no annual
                  fees.
                </p>
              </div>
            </div>
            <p className="text-gray-700 text-lg mb-8">
              Bank of America is committed to empowering small businesses across
              the United States.
            </p>

            {/* Additional Features That Set Bank of America Apart */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Additional Features That Set Bank of America Apart
            </h2>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Streamlined Cash Management
            </h3>
            <p className="text-gray-700 text-lg mb-4">
              Efficient cash flow is essential for every business. With Bank of
              America, you can:
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-2 mr-3">
                  <div className="h-2 w-2 rounded-full bg-[#012169]"></div>
                </div>
                <p className="text-gray-700 text-lg">
                  Automate invoice processing to save time.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-2 mr-3">
                  <div className="h-2 w-2 rounded-full bg-[#012169]"></div>
                </div>
                <p className="text-gray-700 text-lg">
                  Reduce risks with fraud protection services.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-2 mr-3">
                  <div className="h-2 w-2 rounded-full bg-[#012169]"></div>
                </div>
                <p className="text-gray-700 text-lg">
                  Manage multiple accounts from a single dashboard.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Tailored Insurance Solutions
            </h3>
            <p className="text-gray-700 text-lg mb-4">
              Protecting your assets is crucial. Bank of America offers
              customized insurance plans, including:
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-2 mr-3">
                  <div className="h-2 w-2 rounded-full bg-[#012169]"></div>
                </div>
                <p className="text-gray-700 text-lg">
                  Liability coverage for unforeseen incidents.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-2 mr-3">
                  <div className="h-2 w-2 rounded-full bg-[#012169]"></div>
                </div>
                <p className="text-gray-700 text-lg">
                  Property insurance for your office or warehouse.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-2 mr-3">
                  <div className="h-2 w-2 rounded-full bg-[#012169]"></div>
                </div>
                <p className="text-gray-700 text-lg">
                  Employee benefit programs to retain top talent.
                </p>
              </div>
            </div>

            {/* Who Should Use Bank of America Business Solutions? */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Who Should Use Bank of America Business Solutions?
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              Bank of America is ideal for:
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-2 mr-3">
                  <div className="h-2 w-2 rounded-full bg-[#012169]"></div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold">Startups:</span> Take advantage of
                  competitive financing options to launch your business.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-2 mr-3">
                  <div className="h-2 w-2 rounded-full bg-[#012169]"></div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold">Established Businesses:</span>{" "}
                  Optimize cash flow and enhance growth with tailored tools.
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-2 mr-3">
                  <div className="h-2 w-2 rounded-full bg-[#012169]"></div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold">
                    Freelancers and Entrepreneurs:
                  </span>{" "}
                  Simplify income and expense tracking with comprehensive
                  banking solutions.
                </p>
              </div>
            </div>

            {/* Final Thoughts */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Final Thoughts
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              Bank of America Business solutions are designed to empower your
              entrepreneurial journey. With exceptional financial tools,
              dedicated support, and rewarding programs, it’s no wonder
              countless businesses rely on this trusted partner. Take the next
              step in growing your business today.
            </p>

            {/* CTA Final */}
            <div className="flex justify-center mb-8">
              <Link
                href="/financial-solutions/bank-of-america-business-loans-requirements"
                className="w-full md:w-auto"
              >
                <Button className="w-full md:w-auto px-10 py-6 text-xl bg-[#012169] hover:bg-[#1a3a70] text-white font-bold rounded-full shadow-md transition-all duration-200">
                  Learn about the requirements
                </Button>
              </Link>
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
