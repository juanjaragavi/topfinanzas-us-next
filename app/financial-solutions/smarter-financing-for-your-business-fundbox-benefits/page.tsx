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
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
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
            <p className="text-lg text-gray-800 mb-6">
              Simplifying cash flow management for modern businesses. Fundbox
              offers flexible lines of credit to keep your operations moving.
            </p>

            {/* Key Benefits List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-sky-300 p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
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
                <p className="text-gray-700 text-lg">
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
                <p className="text-gray-700 text-lg">
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
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    Streamlined Integrations:
                  </span>{" "}
                  Connect your business accounts for an effortless funding
                  experience.
                </p>
              </div>
            </div>

            {/* CTA 1 */}
            <div className="flex justify-center mb-8">
              <Link
                href="/financial-solutions/fundbox-loan-requirements"
                className="w-full"
              >
                <Button className="w-full px-10 py-6 text-xl bg-sky-300 hover:bg-sky-400 text-white font-bold rounded-full shadow-md transition-all duration-200">
                  How it works
                </Button>
              </Link>
            </div>

            {/* Split Section */}
            <div className="grid md:grid-cols-2 gap-0 mb-10 items-stretch h-full">
              {/* Left: Fundbox (Visual Placeholder) */}
              <div className="bg-sky-50 flex items-center justify-center p-8 min-h-[300px]">
                <p className="text-4xl font-bold text-gray-900 tracking-tight">
                  Fundbox
                </p>
              </div>
              {/* Right: Image */}
              <div className="relative min-h-[300px]">
                <ResponsiveImage
                  src="https://media.topfinanzas.com/images/smarter-financing-for-your-business-fundbox-benefits.webp"
                  alt="Fundbox Benefits"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

            {/* Why Fundbox? */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Why Fundbox?
            </h2>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Designed for small business owners
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              Fundbox caters to businesses in various industries, providing
              accessible financing solutions tailored to your operations.
              Whether you’re a freelancer or a small business owner, Fundbox
              adapts to your unique needs.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Data-driven decisions
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              With advanced algorithms, Fundbox evaluates your business’s
              performance to offer personalized credit options. This innovative
              approach ensures fair and efficient credit decisions.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Seamless integration
            </h3>
            <p className="text-gray-700 text-lg mb-8">
              Fundbox integrates with popular accounting and invoicing software,
              making it easy to manage your finances and access funding.
            </p>

            {/* How to use Fundbox */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              How to use Fundbox
            </h2>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Bridge cash flow gaps
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              Use your line of credit for payroll, inventory, or unexpected
              expenses without disrupting daily operations. Fundbox ensures you
              can cover costs while waiting for customer payments.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Invest in growth
            </h3>
            <p className="text-gray-700 text-lg mb-8">
              Fund strategic initiatives like marketing campaigns or equipment
              upgrades with confidence. With Fundbox, you can take calculated
              risks that drive long-term success.
            </p>

            {/* Success stories */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Success stories
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              Fundbox has helped businesses across industries achieve their
              goals. From tech startups to local retailers, their clients
              benefit from fast, reliable, and flexible financing.
            </p>

            {/* Your best option */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Your best option
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              Fundbox&apos;s fast and flexible financing empowers businesses to
              thrive in a competitive market. Its transparent pricing and
              user-friendly interface make it a go-to solution for small
              business owners seeking financial stability and growth
              opportunities.
            </p>

            {/* CTA 2 */}
            <div className="flex justify-center mb-8">
              <Link
                href="/financial-solutions/fundbox-loan-requirements"
                className="w-full"
              >
                <Button className="w-full px-10 py-6 text-xl bg-sky-300 hover:bg-sky-400 text-white font-bold rounded-full shadow-md transition-all duration-200">
                  How it works
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
