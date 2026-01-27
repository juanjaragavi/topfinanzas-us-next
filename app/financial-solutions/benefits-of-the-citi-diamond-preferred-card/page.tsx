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
  title:
    "Benefits of the Citi® Diamond Preferred® Card: The best choice for balance transfers",
  description:
    "Save big with 0% APR for 21 months on balance transfers. The Citi® Diamond Preferred® Card is your go-to tool to manage debt smarter—no annual fee!",
};

export default function CitiDiamondPreferredBenefitsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Benefits of the Citi® Diamond Preferred® Card: The best choice
              for balance transfers
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
              Save big with 0% APR for 21 months on balance transfers. The
              Citi® Diamond Preferred® Card is your go-to tool to manage debt
              smarter—no annual fee!
            </p>

            {/* Key Benefits List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#191B1A] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    0% intro APR for 21 months{" "}
                  </span>
                  on balance transfers (made in the first 4 months).
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#191B1A] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    0% intro APR for 12 months{" "}
                  </span>
                  on new purchases.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#191B1A] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    No annual fee{" "}
                  </span>
                  —save money while managing debt.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#191B1A] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    Free access to your FICO® Score{" "}
                  </span>
                  and exclusive Citi Entertainment® perks.
                </p>
              </div>
            </div>

            {/* CTA 1 */}
            <div className="flex justify-center mb-8">
              <Link
                href="/financial-solutions/requirements-to-qualify-for-the-citi-diamond-preferred-card"
                className="w-full"
              >
                <Button className="w-full px-10 py-6 text-xl bg-[#191B1A] hover:bg-[#2d302f] text-white font-bold rounded-full shadow-md transition-all duration-200">
                  How it works
                </Button>
              </Link>
            </div>

            <div className="mb-10 w-full relative h-[300px] sm:h-[400px]">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/benefits-of-the-citi-diamond-preferred-card.webp"
                alt="Benefits of the Citi® Diamond Preferred® Card"
                fill
                className="object-cover rounded-xl shadow-lg"
                priority
              />
            </div>

            <div className="prose max-w-none text-gray-700">
              <p className="text-lg text-gray-800 mb-6">
                If you’re looking for a straightforward credit card to help you
                manage existing debt or finance large purchases, the Citi®
                Diamond Preferred® Card could be the ideal option. With one of
                the longest 0% APR periods available for balance transfers, a 0%
                APR on purchases, and no annual fee, this card is tailored for
                individuals with excellent credit who want to save on interest
                and take control of their finances. Let’s explore the card’s top
                benefits and why it stands out in the market.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-6">
                Unmatched 0% Intro APR on balance transfers
              </h2>
              <p className="mb-4">
                The Citi® Diamond Preferred® Card offers one of the most
                competitive introductory APR offers for balance transfers:
              </p>
              <ul className="space-y-4 mb-6 list-none pl-0">
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-[#191B1A] mt-2.5 mr-3 flex-shrink-0"></div>
                  <p>
                    <strong>0% APR for 21 months</strong> on balance transfers
                    made within the first 4 months of account opening.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-[#191B1A] mt-2.5 mr-3 flex-shrink-0"></div>
                  <p>
                    After the introductory period, a variable APR of 17.49% to
                    28.24% applies, based on your creditworthiness.
                  </p>
                </li>
              </ul>
              <p className="mb-4">
                This extended period of nearly two years gives you significant
                breathing room to:
              </p>
              <ul className="space-y-4 mb-6 list-none pl-0">
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-[#191B1A] mt-2.5 mr-3 flex-shrink-0"></div>
                  <p>Consolidate high-interest credit card debt.</p>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-[#191B1A] mt-2.5 mr-3 flex-shrink-0"></div>
                  <p>
                    Focus on paying down the principal balance without worrying
                    about accumulating interest.
                  </p>
                </li>
              </ul>
              <p className="mb-6">
                It’s one of the longest 0% APR offers available, making it an
                exceptional tool for individuals serious about debt reduction.
              </p>
              <p className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#191B1A] italic mb-8">
                <strong>Important Note:</strong> A balance transfer fee
                applies—either $5 or 5% of the amount transferred, whichever is
                greater.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-6">
                0% Intro APR for 12 months on purchases
              </h2>
              <p className="mb-4">
                In addition to its long balance transfer period, the card also
                offers:
              </p>
              <ul className="space-y-4 mb-6 list-none pl-0">
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-[#191B1A] mt-2.5 mr-3 flex-shrink-0"></div>
                  <p>
                    <strong>0% APR for 12 months</strong> on new purchases.
                  </p>
                </li>
              </ul>
              <p className="mb-4">
                This feature is especially valuable if you’re planning a large
                purchase—like home renovations, travel, or a major appliance—and
                want the flexibility to pay it off interest-free over a year.
              </p>
              <p className="mb-8">
                Once the introductory 12-month period ends, the standard
                variable APR of 17.49% to 28.24% will apply, so it’s important
                to have a payment plan in place to make the most of this
                feature.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-6">
                No annual fee
              </h2>
              <p className="mb-4">
                With the Citi® Diamond Preferred® Card, you’ll enjoy all its
                benefits without the burden of an annual fee. This makes it a
                cost-effective choice for individuals who:
              </p>
              <ul className="space-y-4 mb-6 list-none pl-0">
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-[#191B1A] mt-2.5 mr-3 flex-shrink-0"></div>
                  <p>
                    Want to focus on paying down debt or financing large
                    expenses without added costs.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-[#191B1A] mt-2.5 mr-3 flex-shrink-0"></div>
                  <p>
                    Are looking for a reliable credit card for emergencies or
                    financial flexibility.
                  </p>
                </li>
              </ul>
              <p className="mb-8">
                The absence of annual fees ensures that every dollar you save on
                interest stays in your pocket.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-6">
                Citi’s exclusive tools and cardholder perks
              </h2>
              <p className="mb-4">
                Beyond its powerful APR offers, the Citi® Diamond Preferred®
                Card includes several features that add long-term value:
              </p>
              <ul className="space-y-4 mb-6 list-none pl-0">
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-[#191B1A] mt-2.5 mr-3 flex-shrink-0"></div>
                  <p>
                    <strong>Citi flex loan:</strong> Convert part of your credit
                    line into a fixed-rate loan with predictable monthly
                    payments. It’s a great way to manage unexpected expenses or
                    consolidate debt further.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-[#191B1A] mt-2.5 mr-3 flex-shrink-0"></div>
                  <p>
                    <strong>Citi Entertainment®:</strong> Enjoy exclusive
                    access to presale tickets and VIP experiences for concerts,
                    sporting events, and more. Whether you’re a music lover or a
                    sports fan, this perk adds extra value for cardholders.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-[#191B1A] mt-2.5 mr-3 flex-shrink-0"></div>
                  <p>
                    <strong>$0 Fraud liability:</strong> You’re protected
                    against unauthorized charges, so you can shop confidently
                    knowing you won’t be held responsible for fraudulent
                    transactions.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-[#191B1A] mt-2.5 mr-3 flex-shrink-0"></div>
                  <p>
                    <strong>Free access to your FICO® Score:</strong> Stay on
                    top of your credit health with complimentary access to your
                    FICO® Score through your online Citi account. Regular
                    monitoring helps you maintain or improve your credit score.
                  </p>
                </li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-6">
                Flexible payment options
              </h2>
              <p className="mb-4">
                The Citi® Diamond Preferred® Card also offers payment
                flexibility to help you manage your finances:
              </p>
              <ol className="space-y-4 mb-8 list-none pl-0 counter-reset-list">
                <li className="flex items-start">
                  <div
                    className="flex-shrink-0 h-6 w-6 rounded-full bg-[#191B1A] text-white flex items-center justify-center font-bold text-sm mr-3"
                    aria-hidden="true"
                  >
                    1
                  </div>
                  <p>
                    <strong>Choose Your Payment Due Date:</strong> You can
                    select a due date that works for your schedule—whether it’s
                    at the beginning, middle, or end of the month. This
                    flexibility makes it easier to plan your monthly budget.
                  </p>
                </li>
                <li className="flex items-start">
                  <div
                    className="flex-shrink-0 h-6 w-6 rounded-full bg-[#191B1A] text-white flex items-center justify-center font-bold text-sm mr-3"
                    aria-hidden="true"
                  >
                    2
                  </div>
                  <p>
                    <strong>Digital Wallet Compatibility:</strong> Use your card
                    with Apple Pay, Google Pay, or other digital wallets for
                    quick and secure transactions.
                  </p>
                </li>
                <li className="flex items-start">
                  <div
                    className="flex-shrink-0 h-6 w-6 rounded-full bg-[#191B1A] text-white flex items-center justify-center font-bold text-sm mr-3"
                    aria-hidden="true"
                  >
                    3
                  </div>
                  <p>
                    <strong>Contactless Payments:</strong> Tap your card to pay
                    safely and efficiently wherever contactless payment is
                    available.
                  </p>
                </li>
              </ol>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-6">
                Who should consider the Citi® Diamond Preferred® Card?
              </h2>
              <p className="mb-4">
                This card is ideal for individuals with good to excellent credit
                (FICO score of 670 or higher) who:
              </p>
              <ol className="space-y-4 mb-8 list-none pl-0">
                <li className="flex items-start">
                  <div
                    className="flex-shrink-0 h-6 w-6 rounded-full bg-[#191B1A] text-white flex items-center justify-center font-bold text-sm mr-3"
                    aria-hidden="true"
                  >
                    1
                  </div>
                  <p>
                    Want to consolidate and pay off existing credit card debt
                    with no interest for 21 months.
                  </p>
                </li>
                <li className="flex items-start">
                  <div
                    className="flex-shrink-0 h-6 w-6 rounded-full bg-[#191B1A] text-white flex items-center justify-center font-bold text-sm mr-3"
                    aria-hidden="true"
                  >
                    2
                  </div>
                  <p>
                    Plan to make a significant purchase and need 12 months of
                    interest-free financing.
                  </p>
                </li>
                <li className="flex items-start">
                  <div
                    className="flex-shrink-0 h-6 w-6 rounded-full bg-[#191B1A] text-white flex items-center justify-center font-bold text-sm mr-3"
                    aria-hidden="true"
                  >
                    3
                  </div>
                  <p>
                    Appreciate a card with no annual fee and tools to manage
                    finances effectively.
                  </p>
                </li>
              </ol>
              <p className="mb-8">
                If your goal is to pay down debt, manage large expenses, or
                simplify your financial strategy, this card offers the perfect
                combination of benefits.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-6">
                Final thoughts
              </h2>
              <p className="mb-6">
                The Citi® Diamond Preferred® Card is one of the most powerful
                tools for individuals looking to save on interest while managing
                debt or financing major purchases. With its industry-leading 0%
                APR for 21 months on balance transfers, a 12-month intro APR on
                purchases, and no annual fee, it provides incredible value for
                those with excellent credit.
              </p>
              <p className="mb-8">
                If you’re ready to take control of your finances and save on
                interest, the Citi® Diamond Preferred® Card is a smart choice
                that delivers flexibility and financial peace of mind.
              </p>
            </div>

            {/* CTA 2 (Bottom) */}
            <div className="flex justify-center mt-10 mb-8">
              <Link
                href="/financial-solutions/requirements-to-qualify-for-the-citi-diamond-preferred-card"
                className="w-full"
              >
                <Button className="w-full px-10 py-6 text-xl bg-[#191B1A] hover:bg-[#2d302f] text-white font-bold rounded-full shadow-md transition-all duration-200">
                  How it works
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <AIContentDisclaimer />
      <CompactFooter />
    </main>
  );
}
