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
  title: "Smarter financing for your business: Fundbox benefits",
  description:
    "Simplifying cash flow management for modern businesses. Fundbox offers flexible lines of credit to keep your operations moving.",
};

export default function FundboxBenefitsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <h1 className="text-3xl text-left md:text-4xl font-bold text-gray-800 mb-8 leading-8">
              Smarter financing for your business:
              <br />
              Fundbox benefits
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
              Simplifying cash flow management for modern businesses. Fundbox
              offers flexible lines of credit to keep your operations moving.
            </p>

            {/* Key Benefits List */}
            <div className="space-y-2 my-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-sky-300 p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Fast Approval:
                  </span>
                  Get credit decisions in as little as 3 minutes.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-sky-300 p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    No Hidden Fees:
                  </span>{" "}
                  Pay only for what you use, with transparent pricing.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-sky-300 p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Credit Limit Adjustments:
                  </span>{" "}
                  Access up to $150,000 with regular reviews for potential
                  increases.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-sky-300 p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Streamlined Integrations:
                  </span>{" "}
                  Connect your business accounts for an effortless funding
                  experience.
                </p>
              </div>
            </div>

            {/* CTA 1 */}
            <div className="text-left my-8">
              <Link
                href="/financial-solutions/fundbox-loan-requirements"
                className="w-full"
              >
                <Button className="w-full px-8 py-2 text-md bg-sky-300 hover:bg-sky-400 text-white font-medium rounded-full">
                  How it works
                </Button>
              </Link>
            </div>

            {/* Hero Image */}
            <div className="my-8">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/smarter-financing-for-your-business-fundbox-benefits.webp"
                alt="Fundbox Benefits"
                width={900}
                height={507}
                className="w-full rounded-xl"
                priority={false}
                quality={85}
                sizes="(max-width: 768px) 100vw, 900px"
                containerClassName="w-full"
              />
            </div>

            {/* Why Fundbox? */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Why Fundbox?
            </h2>

            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              Designed for small business owners
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Fundbox caters to businesses in various industries, providing
              accessible financing solutions tailored to your operations.
              Whether you're a freelancer or a small business owner, Fundbox
              adapts to your unique needs.
            </p>

            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              Data-driven decisions
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              With advanced algorithms, Fundbox evaluates your business's
              performance to offer personalized credit options. This innovative
              approach ensures fair and efficient credit decisions.
            </p>

            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              Seamless integration
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Fundbox integrates with popular accounting and invoicing software,
              making it easy to manage your finances and access funding.
            </p>

            {/* How to use Fundbox */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              How to use Fundbox
            </h2>

            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              Bridge cash flow gaps
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Use your line of credit for payroll, inventory, or unexpected
              expenses without disrupting daily operations. Fundbox ensures you
              can cover costs while waiting for customer payments.
            </p>

            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              Invest in growth
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Fund strategic initiatives like marketing campaigns or equipment
              upgrades with confidence. With Fundbox, you can take calculated
              risks that drive long-term success.
            </p>

            {/* Success stories */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Success stories
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Fundbox has helped businesses across industries achieve their
              goals. From tech startups to local retailers, their clients
              benefit from fast, reliable, and flexible financing.
            </p>

            {/* Your best option */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Your best option
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Fundbox&apos;s fast and flexible financing empowers businesses to
              thrive in a competitive market. Its transparent pricing and
              user-friendly interface make it a go-to solution for small
              business owners seeking financial stability and growth
              opportunities.
            </p>

            {/* CTA 2 */}
            <div className="text-left my-8">
              <Link
                href="/financial-solutions/fundbox-loan-requirements"
                className="w-full"
              >
                <Button className="w-full px-8 py-2 text-md bg-sky-300 hover:bg-sky-400 text-white font-medium rounded-full">
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
