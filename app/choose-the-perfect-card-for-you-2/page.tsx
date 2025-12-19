"use client";

import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState, Suspense } from "react";
import useRecommenderPageGuard from "@/hooks/use-recommender-page-guard";

function CreditCardRecommenderContent() {
  useRecommenderPageGuard();
  const [openFaq, setOpenFaq] = useState<string | null>("benefits");

  const toggleFaq = (id: string) => {
    if (openFaq === id) {
      setOpenFaq(null);
    } else {
      setOpenFaq(id);
    }
  };

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article className="text-left bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-xl md:text-3xl font-bold text-gray-800 mb-6 leading-tight">
              Discover Your Ideal Credit Card
            </h1>

            <div id="square01" data-topads data-topads-size="square"></div>

            <p className="text-left text-sm leading-6 text-gray-800 my-8">
              At <strong>TopFinanzas</strong>, we help you take control of your
              finances. We offer the best credit card analysis and
              recommendations so you can easily find the one that suits you
              best, maximize your rewards, organize your spending, and enjoy
              exclusive benefits. Explore our recommendations and find the card
              that fits you perfectly.
            </p>

            <div className="mt-8 mb-4">
              <Link href="/soluciones-financieras/barclaycard-avios-plus">
                <Button className="bg-[#80E67D] hover:bg-[#70D66D] text-white font-bold text-base py-3 w-full rounded-full inline-flex items-center justify-center">
                  <div className="flex items-center space-x-2">
                    <span>Accept Recommendation</span>
                    <div className="bg-white rounded-full w-5 h-5 flex items-center justify-center">
                      <span className="text-[#80E67D] text-sm font-bold">
                        ➔
                      </span>
                    </div>
                  </div>
                </Button>
              </Link>
            </div>

            <h2 className="text-lg leading-5 font-bold text-gray-800 mb-6 mt-12">
              Why Choose Our Credit Card Recommender?
            </h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="flex-shrink-0 rounded-full bg-[#71C96C] w-6 h-6 flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">➔</span>
                </div>
                <span className="font-bold text-sm sm:text-lg">
                  Personalized Options
                </span>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 rounded-full bg-[#71C96C] w-6 h-6 flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">➔</span>
                </div>
                <span className="font-bold text-sm sm:text-lg">
                  Completely Free
                </span>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 rounded-full bg-[#71C96C] w-6 h-6 flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">➔</span>
                </div>
                <span className="font-bold text-sm sm:text-lg">
                  Expert Advice
                </span>
              </div>
            </div>

            <p className="text-left text-sm leading-6 text-gray-800 mb-4">
              Our recommendations are designed to connect your financial goals
              with the cards that best suit your needs. From cashback to travel
              rewards, we give you clear and easy-to-understand options so you
              can make informed decisions.
            </p>

            <p className="text-left text-sm leading-6 text-gray-800 mb-10">
              With our guide, you will transform your credit card into a tool
              that simplifies your finances and helps you reach your goals
              without complications.
            </p>

            <div className="mt-8 mb-4">
              <Link href="/soluciones-financieras/barclaycard-avios-plus">
                <Button className="bg-[#80E67D] hover:bg-[#70D66D] text-white font-bold text-base py-3 w-full rounded-full inline-flex items-center justify-center">
                  <div className="flex items-center space-x-2">
                    <span>Our Top Recommendation</span>
                    <div className="bg-white rounded-full w-5 h-5 flex items-center justify-center">
                      <span className="text-[#80E67D] text-sm font-bold">
                        ➔
                      </span>
                    </div>
                  </div>
                </Button>
              </Link>
            </div>
            <p className="text-center text-sm mb-12">
              <Link
                className="text-[#2E74B5] font-medium"
                href="/soluciones-financieras/barclaycard-avios-plus-requisitos"
              >
                Learn How to Apply
              </Link>
            </p>

            <div className="mt-8 mb-6 border rounded-lg overflow-hidden">
              {/* FAQ Item 1: Benefits */}
              <button
                type="button"
                className="flex justify-between items-center w-full p-4 text-left cursor-pointer border-b hover:bg-gray-50 transition-colors"
                onClick={() => toggleFaq("benefits")}
                aria-expanded={openFaq === "benefits"}
              >
                <div className="flex items-center">
                  <span className="text-[#2E74B5] mr-3 font-bold text-xl">
                    {openFaq === "benefits" ? "−" : "+"}
                  </span>
                  <h3
                    className={`font-bold text-md leading-tight ${openFaq === "benefits" ? "text-[#2E74B5]" : "text-[#2E74B5]"}`}
                  >
                    What are the benefits of a no-annual-fee card?
                  </h3>
                </div>
              </button>
              {openFaq === "benefits" && (
                <div
                  className="p-4 text-gray-700 bg-gray-50"
                  id="faq-benefits-content"
                >
                  <p className="text-left text-sm">
                    A no-annual-fee card helps you save on recurring costs while
                    enjoying key benefits like cashback or points on your
                    purchases.
                  </p>
                </div>
              )}

              {/* FAQ Item 2: Cashback */}
              <button
                type="button"
                className="flex justify-between items-center w-full p-4 text-left cursor-pointer border-b hover:bg-gray-50 transition-colors"
                onClick={() => toggleFaq("cashback")}
                aria-expanded={openFaq === "cashback"}
              >
                <div className="flex items-center">
                  <span className="text-[#2E74B5] mr-3 font-bold text-xl">
                    {openFaq === "cashback" ? "−" : "+"}
                  </span>
                  <h3
                    className={`font-bold text-md leading-tight ${openFaq === "cashback" ? "text-[#2E74B5]" : "text-[#2E74B5]"}`}
                  >
                    How does cashback work?
                  </h3>
                </div>
              </button>
              {openFaq === "cashback" && (
                <div
                  className="p-4 text-gray-700 bg-gray-50"
                  id="faq-cashback-content"
                >
                  <p className="text-left text-sm">
                    You receive a percentage of your purchases back as cash that
                    you can use to reduce balances or spend however you prefer.
                  </p>
                </div>
              )}

              {/* FAQ Item 3: Travelers */}
              <button
                type="button"
                className="flex justify-between items-center w-full p-4 text-left cursor-pointer border-b hover:bg-gray-50 transition-colors"
                onClick={() => toggleFaq("travelers")}
                aria-expanded={openFaq === "travelers"}
              >
                <div className="flex items-center">
                  <span className="text-[#2E74B5] mr-3 font-bold text-xl">
                    {openFaq === "travelers" ? "−" : "+"}
                  </span>
                  <h3
                    className={`font-bold text-md leading-tight ${openFaq === "travelers" ? "text-[#2E74B5]" : "text-[#2E74B5]"}`}
                  >
                    What is the best option for travelers?
                  </h3>
                </div>
              </button>
              {openFaq === "travelers" && (
                <div
                  className="p-4 text-gray-700 bg-gray-50"
                  id="faq-travelers-content"
                >
                  <p className="text-left text-sm">
                    Cards that earn miles or offer VIP lounge access are ideal
                    for frequent travelers, allowing you to save on flights and
                    enjoy exclusive benefits.
                  </p>
                </div>
              )}

              {/* FAQ Item 4: Online */}
              <button
                type="button"
                className="flex justify-between items-center w-full p-4 text-left cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => toggleFaq("online")}
                aria-expanded={openFaq === "online"}
              >
                <div className="flex items-center">
                  <span className="text-[#2E74B5] mr-3 font-bold text-xl">
                    {openFaq === "online" ? "−" : "+"}
                  </span>
                  <h3
                    className={`font-bold text-md leading-tight ${openFaq === "online" ? "text-[#2E74B5]" : "text-[#2E74B5]"}`}
                  >
                    Is it safe to use credit cards online?
                  </h3>
                </div>
              </button>
              {openFaq === "online" && (
                <div
                  className="p-4 text-gray-700 bg-gray-50"
                  id="faq-online-content"
                >
                  <p className="text-left text-sm">
                    Yes, many cards offer advanced technology like dynamic CVV
                    and instant alerts to protect your transactions.
                  </p>
                </div>
              )}
            </div>

            <p className="text-left text-sm leading-6 text-gray-800 mb-12">
              Make your credit card an ally in reaching your financial goals.
              From cashback to travel rewards, choose an option that simplifies
              your life and maximizes your benefits. Explore our recommendations
              and find the card that best suits you.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
              Benefits Within Reach
            </h2>
            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="space-y-1">
                <h3 className="font-bold text-sm">
                  Rewards for your purchases:
                </h3>
                <p className="text-xs text-gray-600 leading-tight">
                  Earn points on every purchase, redeemable for a wide variety
                  of products and services.
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-sm">Advanced Security:</h3>
                <p className="text-xs text-gray-600 leading-tight">
                  Total protection for your online purchases with advanced
                  security features.
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-sm">Accessible to All:</h3>
                <p className="text-xs text-gray-600 leading-tight">
                  Competitive income requirements to enjoy all the benefits.
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-sm">Environmental Commitment:</h3>
                <p className="text-xs text-gray-600 leading-tight">
                  Cards made with recycled materials, helping the planet with
                  every purchase.
                </p>
              </div>
            </div>

            <div className="my-10">
              <Link href="/soluciones-financieras/barclaycard-avios-plus">
                <div className="relative w-full h-auto rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                  <Image
                    src="https://media.topfinanzas.com/images/Tobanner-02-1.webp"
                    alt="BBVA Tarjeta de Crédito Azul"
                    width={800}
                    height={450}
                    className="w-full h-auto block"
                    priority
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}

export default function CreditCardRecommenderPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CreditCardRecommenderContent />
    </Suspense>
  );
}
