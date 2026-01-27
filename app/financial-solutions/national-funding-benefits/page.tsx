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
  title: "National Funding Benefits | TopFinanzas US",
  description:
    "As a small business owner, finding reliable and fast financing options can be one of the most challenging aspects of running your business. Discover the benefits of National Funding.",
};

export default function NationalFundingBenefitsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              National Funding Benefits
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
              As a small business owner, finding reliable and fast financing
              options can be one of the most challenging aspects of running your
              business.
            </p>

            {/* Key Benefits List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#223657] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  Fast approval to get funding within 24 hours.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#223657] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  Flexible financing options for every business need.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#223657] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  Transparent terms with no hidden fees.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#223657] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  Dedicated support for expert guidance throughout the process.
                </p>
              </div>
            </div>

            {/* CTA 1 */}
            <div className="flex justify-center mb-8">
              <Link
                href="/financial-solutions/requirements-for-national-funding-loans"
                className="w-full"
              >
                <Button className="w-full px-10 py-6 text-xl bg-[#223657] hover:bg-[#2c456b] text-white font-bold rounded-full shadow-md transition-all duration-200">
                  How it works
                </Button>
              </Link>
            </div>

            {/* Split Section */}
            <div className="grid md:grid-cols-2 gap-0 mb-10 items-stretch h-full">
              {/* Left: National Funding (Visual Placeholder) */}
              <div className="bg-gray-100 flex items-center justify-center p-8 min-h-[300px]">
                <p className="text-4xl font-bold text-gray-900 tracking-tight text-center">
                  National Funding
                </p>
              </div>
              {/* Right: Image */}
              <div className="relative min-h-[300px]">
                <ResponsiveImage
                  src="https://media.topfinanzas.com/images/national-funding-benefits.webp"
                  alt="National Funding Benefits"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

            {/* Why National Funding is a top choice for small businesses */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Why National Funding is a top choice for small businesses
            </h2>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Speed and simplicity
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              When it comes to financing, speed is often a game-changer.
              National Funding’s simple and fast application process makes it
              easy for businesses to access funds when they need them most.
              Their approval process is designed to save you time and provide
              quick access to capital, so you can take advantage of growth
              opportunities without delay.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Tailored solutions for your business needs
            </h3>
            <p className="text-gray-700 text-lg mb-8">
              Every business has unique financial needs, and National Funding
              recognizes this. Whether you’re a startup or an established
              company, their variety of loan products ensures that you can
              choose the right solution for your business. Their tailored
              approach means you’re not stuck with a one-size-fits-all solution,
              giving you the flexibility to make the best decisions for your
              business.
            </p>

            {/* Additional resources that set National Funding apart */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Additional resources that set National Funding apart
            </h2>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Expertise and guidance:
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              National Funding’s team of experts is more than just a resource
              for loans – they’re a valuable source of advice and support. With
              their deep understanding of small business challenges, they
              provide insights that help you make smarter financial decisions.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Enhancing business growth:
            </h3>
            <p className="text-gray-700 text-lg mb-8">
              National Funding is committed to helping businesses grow. They
              don’t just offer loans – they provide tools and support that help
              your business navigate growth challenges. Whether it’s hiring
              employees, upgrading equipment, or expanding operations, National
              Funding ensures that you have the resources to make strategic
              investments that propel your business forward.
            </p>

            {/* Your best loan */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Your best loan
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              National Funding is your trusted partner for all your business
              financing needs. With a fast approval process, flexible loan
              products, transparent terms, and dedicated customer support, they
              provide everything you need to unlock your business’s full
              potential. Ready to move your business to the next level? Explore
              National Funding’s offerings today and get the financial support
              you need to succeed!
            </p>

            {/* CTA 2 */}
            <div className="flex justify-center mb-8">
              <Link
                href="/financial-solutions/requirements-for-national-funding-loans"
                className="w-full"
              >
                <Button className="w-full px-10 py-6 text-xl bg-[#223657] hover:bg-[#2c456b] text-white font-bold rounded-full shadow-md transition-all duration-200">
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
