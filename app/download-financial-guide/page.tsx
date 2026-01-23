"use client";

import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Suspense } from "react";
import { CheckCircle } from "lucide-react";

function DownloadGuidePageContent() {
  const handleDownload = () => {
    window.open(
      "https://media.topfinanzas.com/documents/tips-financial-life-usa_compressed.pdf",
      "_blank",
    );
  };

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      {/* Hero Section with Couple Background */}
      <section className="relative bg-[#015ECC] text-white px-6 py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://media.topfinanzas.com/images/banner-home-mobile.webp"
            alt="Pareja trabajando en sus finanzas"
            fill
            className="object-cover object-center"
            priority
            unoptimized
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#015ECC]/90 to-[#015ECC]/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-sm leading-tight">
              Welcome to TopFinanzas
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-xl mb-6 drop-shadow-sm leading-relaxed">
              Experts in financial wellness for you and your family.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="text-left bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 leading-tight">
              Welcome to TOP!
            </h2>

            <p className="text-left text-base leading-7 text-gray-800 mb-6">
              We are experts in financial wellness advice for everyone. At
              TopFinanzas, we help you take control of your personal finances
              simply and effectively.
            </p>

            {/* Ad Container */}
            <div id="square01" data-topads data-topads-size="square"></div>

            <h3 className="text-lg font-bold text-gray-800 mt-8 mb-4">
              What do we do?
            </h3>

            <div className="space-y-3 mb-8">
              <div className="flex items-start">
                <CheckCircle className="text-[#71C96C] w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-gray-700">
                  We research products so you don't have to.
                </span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-[#71C96C] w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-gray-700">
                  We share tips for your financial well-being.
                </span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-[#71C96C] w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-gray-700">
                  We will never charge you a single cent.
                </span>
              </div>
            </div>

            {/* Download Section */}
            <div className="bg-gray-50 rounded-xl p-6 md:p-8 mb-8">
              <p className="text-center text-gray-800 font-medium mb-2">
                To start...
              </p>
              <p className="text-center text-gray-700 mb-4">
                Read our Financial Wellness Guide.
              </p>
              <p className="text-center text-gray-600 text-sm mb-6">
                Download it now and start taking control of your wealth 👇
              </p>

              <Button
                onClick={handleDownload}
                className="bg-[#80E67D] hover:bg-[#70D66D] text-white font-bold text-base py-4 w-full rounded-full inline-flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-center space-x-2">
                  <span>DOWNLOAD PDF NOW</span>
                  <div className="bg-white rounded-full w-5 h-5 flex items-center justify-center">
                    <span className="text-[#80E67D] text-sm font-bold">↓</span>
                  </div>
                </div>
              </Button>
            </div>

            <p className="text-center text-gray-600 text-sm mb-4">
              More tips are coming soon.
            </p>
            <p className="text-center text-gray-800 font-medium">
              We're glad to have you here!
            </p>
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}

export default function DownloadGuidePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DownloadGuidePageContent />
    </Suspense>
  );
}
