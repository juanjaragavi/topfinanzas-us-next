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
    "Benefits of the Wells Fargo Reflect® Card: Maximize your savings on interest",
  description:
    "Save big with 0% APR for 21 months on purchases and balance transfers. The Wells Fargo Reflect® Card makes managing debt simple and cost-effective—no annual fee required!",
};

export default function WellsFargoReflectBenefitsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <h1 className="text-3xl text-left md:text-4xl font-bold text-gray-800 mb-8 leading-8">
              Benefits of the Wells Fargo Reflect® Card:
              <br />
              Maximize your savings on interest
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
              If you're looking for a credit card that helps you avoid interest
              charges while paying off existing debt or financing major
              purchases, the Wells Fargo Reflect® Card stands out as an
              excellent choice. With its 0% APR introductory offer for 21 months
              on purchases and balance transfers, as well as useful financial
              tools and no annual fee, this card is designed to give you maximum
              financial flexibility. Below, we break down its most significant
              benefits and why it might be the right card for you.
            </p>

            {/* Key Benefits List */}
            <div className="space-y-2 my-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#A1212B] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">0% intro APR </span>
                  for 21 months on purchases and balance transfers.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#A1212B] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    No annual fee,{" "}
                  </span>
                  maximizing your savings.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#A1212B] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Up to $600 cell phone protection{" "}
                  </span>
                  when you pay your phone bill with the card.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#A1212B] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Access to tools{" "}
                  </span>
                  like Credit Close-Up® and personalized My Wells Fargo Deals.
                </p>
              </div>
            </div>

            {/* CTA 1 */}
            <div className="text-left my-8">
              <Link
                href="/financial-solutions/requirements-to-qualify-for-the-wells-fargo-reflect-card"
                className="w-full"
              >
                <Button className="w-full px-8 py-2 text-md bg-[#A1212B] hover:bg-[#851b23] text-white font-medium rounded-full">
                  How it works
                </Button>
              </Link>
            </div>

            {/* Hero Image */}
            <div className="my-8">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/benefits-of-the-wells-fargo-reflect-card.webp"
                alt="Wells Fargo Reflect Card Benefits"
                width={900}
                height={507}
                className="w-full rounded-xl"
                priority={false}
                quality={85}
                sizes="(max-width: 768px) 100vw, 900px"
                containerClassName="w-full"
              />
            </div>

            {/* Detailed Content */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Unmatched 0% Intro APR for 21 months
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              The most attractive feature of the Wells Fargo Reflect® Card is
              its extensive introductory 0% APR period, which covers both
              purchases and balance transfers:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-left text-gray-800 mb-4 text-md leading-5 font-light">
              <li>
                21 months of 0% APR on purchases from the date of account
                opening.
              </li>
              <li>
                21 months of 0% APR on balance transfers made within the first
                120 days of account opening.
              </li>
            </ul>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              After the promotional period ends, a variable APR of 17.49% to
              29.24% applies, based on your creditworthiness.
            </p>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              This long interest-free period makes the card ideal for:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-left text-gray-800 mb-4 text-md leading-5 font-light">
              <li>
                Consolidating and paying off higher-interest credit card debt.
              </li>
              <li>
                Financing significant expenses, such as home improvements,
                medical bills, or travel, without the burden of immediate
                interest charges.
              </li>
            </ul>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              <span className="font-bold">Important Note:</span> Balance
              transfers are subject to a fee of 5% or $5, whichever is greater,
              so it's important to calculate your savings against this cost.
            </p>

            {/* Ad Unit: square04 */}
            <div
              id="square04"
              className="w-full flex justify-center my-6"
              data-topads
              data-topads-size="square"
            ></div>

            <hr className="my-8" />

            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              No annual fee
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              The Wells Fargo Reflect® Card has no annual fee, which means you
              can take full advantage of its benefits without worrying about
              additional costs. This makes it an attractive option for
              budget-conscious individuals who prioritize saving while managing
              their finances.
            </p>

            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Cell phone protection
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              One of the standout perks of this card is its cell phone
              protection benefit. By paying your monthly cell phone bill with
              the Wells Fargo Reflect® Card, you'll receive:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-left text-gray-800 mb-4 text-md leading-5 font-light">
              <li>Coverage of up to $600 per claim against damage or theft.</li>
              <li>A $25 deductible per claim.</li>
            </ul>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              This benefit is especially valuable if you want peace of mind
              knowing your device is protected without needing to purchase
              additional insurance.
            </p>

            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Built-in financial tools
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              The Wells Fargo Reflect® Card includes tools and resources that
              make managing your finances more accessible and effective:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-left text-gray-800 mb-4 text-md leading-5 font-light">
              <li>
                <span className="font-bold">Credit Close-Up®:</span> Provides
                monthly updates on your FICO® Score, along with personalized
                credit insights. Monitoring your credit regularly can help you
                maintain or improve your financial health.
              </li>
              <li>
                <span className="font-bold">My Wells Fargo Deals:</span> Offers
                personalized deals at select merchants, allowing you to earn
                statement credits when you shop, dine, or enjoy experiences with
                your card.
              </li>
              <li>
                <span className="font-bold">Zero Liability Protection:</span>{" "}
                Ensures you won't be held responsible for unauthorized
                transactions, as long as they're reported promptly
              </li>
            </ul>

            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Roadside Dispatch® Service
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              The card also provides access to the Roadside Dispatch® network,
              a 24/7 referral service for emergency roadside assistance. Whether
              you need towing, a locksmith, or help with a flat tire, this
              feature can be a lifesaver during unexpected situations.
            </p>

            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Who is the Wells Fargo Reflect® Card ideal for?
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              This card is particularly well-suited for individuals who:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-left text-gray-800 mb-4 text-md leading-5 font-light">
              <li>
                <span className="font-bold">
                  Want to pay down high-interest debt:
                </span>{" "}
                The long 0% APR period makes it a powerful tool for
                consolidating balances and reducing overall interest payments.
              </li>
              <li>
                <span className="font-bold">Plan significant purchases:</span>{" "}
                If you're preparing for a large expense, such as a wedding,
                moving costs, or furniture, the 21-month interest-free period
                provides the flexibility to pay it off over time.
              </li>
              <li>
                <span className="font-bold">
                  Value cost-effective benefits:
                </span>{" "}
                With no annual fee and added perks like cell phone protection,
                this card delivers significant value without recurring charges.
              </li>
              <li>
                <span className="font-bold">
                  Prefer simplicity over rewards:
                </span>{" "}
                Since this card doesn't offer points or cash back, it's ideal
                for those who prioritize saving on interest rather than earning
                rewards.
              </li>
            </ul>

            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              How to maximize the benefits
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              To get the most out of the Wells Fargo Reflect® Card:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-left text-gray-800 mb-4 text-md leading-5 font-light">
              <li>
                <span className="font-bold">
                  Plan your balance transfers carefully:
                </span>{" "}
                Complete them within the first 120 days to lock in the 0% APR
                offer.
              </li>
              <li>
                <span className="font-bold">Set a payment schedule:</span> Use
                the 21-month window to pay down as much of your balance as
                possible before the variable APR kicks in.
              </li>
              <li>
                <span className="font-bold">
                  Use the cell phone protection benefit:
                </span>{" "}
                Pay your monthly phone bill with the card to take advantage of
                this valuable coverage.
              </li>
              <li>
                <span className="font-bold">Explore My Wells Fargo Deals:</span>{" "}
                Check regularly for merchant offers that can help you save or
                earn statement credits.
              </li>
            </ol>

            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Why choose the Wells Fargo Reflect® Card?
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              The Wells Fargo Reflect® Card is a standout choice for anyone
              seeking an unparalleled introductory APR offer and cost-effective
              financial flexibility. Whether you're managing debt, planning a
              major purchase, or simply looking for a reliable card with
              essential benefits, this card delivers substantial value without
              additional fees.
            </p>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              If your goal is to save on interest and take control of your
              financial future, the Wells Fargo Reflect® Card is worth
              considering.
            </p>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
