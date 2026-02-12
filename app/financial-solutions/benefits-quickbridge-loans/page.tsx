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
  title: "Benefits QuickBridge Loans | TopFinanzas US",
  description:
    "QuickBridge Loans provide fast, flexible funding for small businesses to grow, manage cash flow, or invest—without the red tape.",
};

export default function BenefitsQuickBridgeLoansPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <h1 className="text-3xl text-left md:text-4xl font-bold text-gray-800 mb-8 leading-8">
              Benefits QuickBridge Loans
            </h1>

            {/* Ad Unit: square02 */}
            <div
              id="square02"
              className="w-full flex justify-center my-6"
              data-topads
              data-topads-size="square"
            ></div>

            {/* Intro */}
            <p className="text-left text-lg text-gray-800 font-medium mb-8 leading-5">
              QuickBridge Loans provide fast, flexible funding for small
              businesses to grow, manage cash flow, or invest—without the red
              tape.
            </p>

            {/* Key Benefits List */}
            <div className="space-y-2 my-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#F6303E] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Quick approvals:
                  </span>{" "}
                  Receive funding decisions in as little as 24 hours.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#F6303E] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Flexible repayment options:
                  </span>{" "}
                  Customizable terms designed to fit your cash flow.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#F6303E] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    No collateral required:
                  </span>{" "}
                  Access unsecured financing without risking assets.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#F6303E] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Personalized service:
                  </span>{" "}
                  Dedicated loan advisors to guide you at every step.
                </p>
              </div>
            </div>

            {/* CTA 1 */}
            <div className="text-left my-8">
              <Link
                href="/financial-solutions/quickbridge-loans-requirements"
                className="w-full md:w-auto"
              >
                <Button className="w-full md:w-auto px-8 py-2 text-md bg-[#F6303E] hover:bg-[#d6202e] text-white font-medium rounded-full">
                  How it works
                </Button>
              </Link>
            </div>

            {/* Hero Image */}
            <div className="my-8">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/benefits-quickbridge-loans.webp"
                alt="QuickBridge Loans Benefits"
                width={900}
                height={507}
                className="w-full rounded-xl"
                priority={false}
                quality={85}
                sizes="(max-width: 768px) 100vw, 900px"
                containerClassName="w-full"
              />
            </div>

            {/* Fast approvals to keep your business moving */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Fast approvals to keep your business moving
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              When your business needs funding, time is of the essence.
              QuickBridge understands this urgency and delivers financing
              decisions swiftly, often within a single day. This rapid approval
              process ensures that you can seize opportunities without delays,
              whether it's purchasing inventory, upgrading equipment, or
              expanding operations. Unlike traditional banks that can take weeks
              to process applications, QuickBridge simplifies the process,
              saving you time and stress.
            </p>

            {/* Why speed matters for business owners */}
            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              Why speed matters for business owners
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              For small businesses, timing is critical. An unexpected expense or
              a sudden growth opportunity doesn't wait for lengthy bank
              processes. QuickBridge loans ensure you have the funds when you
              need them most, empowering you to make agile decisions that drive
              growth.
            </p>

            {/* Flexible repayment options tailored to you */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Flexible repayment options tailored to you
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              One of the standout features of QuickBridge Loans is their
              flexible repayment plans. Unlike rigid loan structures offered by
              traditional lenders, QuickBridge works with you to design a
              repayment schedule that aligns with your business's cash flow.
              This ensures that repaying your loan doesn't strain your finances,
              allowing you to focus on growth and profitability.
            </p>

            {/* Custom solutions for every business */}
            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              Custom solutions for every business
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              No two businesses are the same, and QuickBridge embraces this
              reality. Whether you're a seasonal business experiencing
              fluctuating revenues or a startup in rapid growth mode, the loan
              terms are tailored to meet your unique needs.
            </p>

            {/* Unsecured loans with no collateral required */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Unsecured loans with no collateral required
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Many traditional lenders require collateral, which can be a
              significant barrier for small businesses. QuickBridge eliminates
              this hurdle by offering unsecured loans. This means you can access
              funding without risking valuable business or personal assets,
              providing peace of mind and reducing financial risk.
            </p>
            <div className="my-6">
              <p className="text-left text-gray-800 text-md leading-5">
                <span className="font-bold text-gray-900">
                  Accessible financing for new businesses:
                </span>{" "}
                If you're just starting out, securing a loan can be challenging
                without substantial assets. QuickBridge's unsecured loan options
                open doors for entrepreneurs, enabling them to access the
                capital needed to bring their visions to life.
              </p>
            </div>

            {/* Personalized support for every step */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Personalized support for every step
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Navigating the financing world can feel overwhelming, especially
              for small business owners juggling multiple responsibilities.
              QuickBridge provides dedicated loan advisors who guide you through
              the process, ensuring you make informed decisions. This
              personalized support sets them apart, creating a seamless and
              supportive borrowing experience.
            </p>
            <div className="my-8">
              <p className="text-left text-gray-800 text-md leading-5">
                <span className="font-bold text-gray-900">
                  Building long-term relationships:
                </span>{" "}
                QuickBridge isn't just about providing loans—they're about
                fostering partnerships. Their advisors take the time to
                understand your business, goals, and challenges, ensuring the
                financial solution you choose is the best fit for your needs.
              </p>
            </div>

            {/* Your best option */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Your best option
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              QuickBridge Loans are a lifeline for small business owners seeking
              fast, flexible, and secure funding solutions. With their
              streamlined approval process, tailored repayment options, and
              commitment to personalized service, QuickBridge stands out as a
              top choice for U.S. businesses ready to grow. Explore your options
              today and see how QuickBridge can help your business thrive.
            </p>

            {/* CTA Final */}
            <div className="text-left my-8">
              <Link
                href="/financial-solutions/quickbridge-loans-requirements"
                className="w-full md:w-auto"
              >
                <Button className="w-full md:w-auto px-8 py-2 text-md bg-[#F6303E] hover:bg-[#d6202e] text-white font-medium rounded-full">
                  How it works
                </Button>
              </Link>
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
