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
  title: "Discover the Benefits of the American Express® Gold Card",
  description:
    "Maximize rewards on dining, travel, and daily spending. Turn expenses into experiences with the Amex Gold Card. Unlock its benefits today!",
};

export default function AmexGoldBenefitsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Discover the Benefits of the American Express® Gold Card
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
              Maximize rewards on dining, travel, and daily spending. Turn
              expenses into experiences with the Amex Gold Card. Unlock its
              benefits today!
            </p>

            {/* Key Benefits List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#C8B56A] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  <span className="font-bold text-gray-900">
                    4X points on restaurants worldwide
                  </span>{" "}
                  and U.S. supermarkets (up to annual limits).
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
                    $120 in Uber Cash
                  </span>{" "}
                  for Uber Eats orders and rides within the U.S.
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
                    $120 dining credits
                  </span>{" "}
                  at select partners like Grubhub and The Cheesecake Factory.
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
                    No foreign transaction fees
                  </span>{" "}
                  – save on international purchases.
                </p>
              </div>
            </div>

            {/* CTA 1 */}
            <div className="flex justify-center mb-8">
              <Link
                href="/financial-solutions/requirements-to-qualify-for-the-american-express-gold-card"
                className="w-full"
              >
                <Button className="w-full px-10 py-6 text-xl bg-[#C8B56A] hover:bg-[#b09e5a] text-white font-bold rounded-full shadow-md transition-all duration-200">
                  How it works
                </Button>
              </Link>
            </div>

            <div className="mb-10 w-full relative h-[300px] sm:h-[400px]">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/benefits-of-the-american-express-gold-card.webp"
                alt="Discover the Benefits of the American Express® Gold Card"
                fill
                className="object-cover rounded-xl shadow-lg"
                priority
              />
            </div>

            <div className="prose max-w-none text-gray-700">
              <p className="text-lg text-gray-800 mb-6">
                The American Express® Gold Card stands out as a premium credit
                card in the personal finance world for offering generous
                rewards, especially designed for food lovers and frequent
                travelers. If you enjoy culinary experiences, want to save on
                everyday purchases, and effectively earn points, this card could
                be an excellent choice for you. Below, we explore its most
                notable benefits.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-6">
                Rewards on everyday spending
              </h2>
              <p className="mb-4">
                The American Express® Gold Card excels with its Membership
                Rewards® program, allowing you to earn points generously:
              </p>
              <ul className="space-y-4 mb-6 list-none pl-0">
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-[#C8B56A] mt-2.5 mr-3 flex-shrink-0"></div>
                  <p>
                    <strong>4X points at restaurants worldwide,</strong>{" "}
                    including takeout and delivery services, on up to $50,000 in
                    purchases per year. After that, you earn 1X point.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-[#C8B56A] mt-2.5 mr-3 flex-shrink-0"></div>
                  <p>
                    <strong>4X points at U.S. supermarkets,</strong> on up to
                    $25,000 annually—perfect for grocery shoppers.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-[#C8B56A] mt-2.5 mr-3 flex-shrink-0"></div>
                  <p>
                    <strong>3X points on flights</strong> booked directly with
                    airlines or through AmexTravel.com.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-[#C8B56A] mt-2.5 mr-3 flex-shrink-0"></div>
                  <p>
                    <strong>2X points on prepaid hotels</strong> and eligible
                    purchases booked through AmexTravel.com.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-[#C8B56A] mt-2.5 mr-3 flex-shrink-0"></div>
                  <p>
                    <strong>1X point</strong> on all other eligible purchases.
                  </p>
                </li>
              </ul>
              <p className="mb-6">
                With these categories, earning points on everyday spending
                becomes simple, helping you maximize purchases and redeem points
                for travel, shopping, and more.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-6">
                Exclusive dining benefits
              </h2>
              <p className="mb-4">
                If you consider yourself a foodie, this card offers unique
                credits and perks that can easily cover the annual fee:
              </p>
              <ul className="space-y-4 mb-6 list-none pl-0">
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-[#C8B56A] mt-2.5 mr-3 flex-shrink-0"></div>
                  <p>
                    <strong>$120 Uber Cash:</strong> By adding your card to your
                    Uber account, you’ll receive $10 monthly for Uber Eats
                    orders or rides within the U.S.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-[#C8B56A] mt-2.5 mr-3 flex-shrink-0"></div>
                  <p>
                    <strong>$120 dining credits:</strong> Earn up to $10 monthly
                    in credits when you pay with the card at Grubhub, The
                    Cheesecake Factory, Goldbelly, Wine.com, and Five Guys.
                    Enrollment required.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-[#C8B56A] mt-2.5 mr-3 flex-shrink-0"></div>
                  <p>
                    <strong>$100 Resy Credit:</strong> Receive up to $50
                    semi-annually when dining at U.S. Resy restaurants or making
                    other eligible Resy purchases. This is perfect if you enjoy
                    elegant dinners or reservations at select establishments.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-[#C8B56A] mt-2.5 mr-3 flex-shrink-0"></div>
                  <p>
                    <strong>$84 Dunkin’ Credit:</strong> Save up to $7 monthly
                    when using the card at Dunkin’ locations in the U.S. after
                    enrollment.
                  </p>
                </li>
              </ul>
              <p className="mb-6">
                Altogether, these perks add up to over $500 in annual credits,
                which can easily offset the $325 annual fee if used
                strategically.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-6">
                Travel and convenience benefits
              </h2>
              <p className="mb-4">
                The American Express® Gold Card is also a reliable travel
                companion:
              </p>
              <ul className="space-y-4 mb-6 list-none pl-0">
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-[#C8B56A] mt-2.5 mr-3 flex-shrink-0"></div>
                  <p>
                    <strong>No foreign transaction fees,</strong> helping you
                    save on international purchases.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-[#C8B56A] mt-2.5 mr-3 flex-shrink-0"></div>
                  <p>
                    <strong>Access to The Hotel Collection:</strong> Book two or
                    more nights at select hotels through AmexTravel.com and
                    receive a $100 credit for eligible charges like dining or
                    spa services.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-[#C8B56A] mt-2.5 mr-3 flex-shrink-0"></div>
                  <p>
                    <strong>Baggage protection:</strong> Coverage for lost,
                    damaged, or stolen luggage when you pay for your full fare
                    with the card.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-[#C8B56A] mt-2.5 mr-3 flex-shrink-0"></div>
                  <p>
                    <strong>Car rental insurance:</strong> Protects your rental
                    vehicle when you pay with your card and decline coverage at
                    the rental company counter.
                  </p>
                </li>
              </ul>
              <p className="mb-6">
                You’ll also gain access to tools like the Global Assist®
                Hotline, offering 24/7 emergency assistance when you’re more
                than 100 miles from home.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-6">
                Flexible payment options with Plan It® and pay over time
              </h2>
              <p className="mb-4">
                The card offers flexible payment solutions:
              </p>
              <ol className="space-y-4 mb-8 list-none pl-0 counter-reset-list">
                <li className="flex items-start">
                  <div
                    className="flex-shrink-0 h-6 w-6 rounded-full bg-[#C8B56A] text-white flex items-center justify-center font-bold text-sm mr-3"
                    aria-hidden="true"
                  >
                    1
                  </div>
                  <p>
                    <strong>Pay Over Time:</strong> Allows you to carry a
                    balance with interest on selected purchases.
                  </p>
                </li>
                <li className="flex items-start">
                  <div
                    className="flex-shrink-0 h-6 w-6 rounded-full bg-[#C8B56A] text-white flex items-center justify-center font-bold text-sm mr-3"
                    aria-hidden="true"
                  >
                    2
                  </div>
                  <p>
                    <strong>Plan It®:</strong> Split large purchases into fixed
                    monthly payments with a pre-set fee, reducing the pressure
                    of paying everything at once.
                  </p>
                </li>
              </ol>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-6">
                Why the American Express® Gold Card stands out
              </h2>
              <p className="mb-4">This card is ideal for:</p>
              <ol className="space-y-4 mb-8 list-none pl-0">
                <li className="flex items-start">
                  <div
                    className="flex-shrink-0 h-6 w-6 rounded-full bg-[#C8B56A] text-white flex items-center justify-center font-bold text-sm mr-3"
                    aria-hidden="true"
                  >
                    1
                  </div>
                  <p>
                    Individuals who frequently spend on restaurants and
                    groceries and want to earn rewards on everyday purchases.
                  </p>
                </li>
                <li className="flex items-start">
                  <div
                    className="flex-shrink-0 h-6 w-6 rounded-full bg-[#C8B56A] text-white flex items-center justify-center font-bold text-sm mr-3"
                    aria-hidden="true"
                  >
                    2
                  </div>
                  <p>
                    Frequent travelers looking to efficiently accumulate points
                    for flights and hotels.
                  </p>
                </li>
                <li className="flex items-start">
                  <div
                    className="flex-shrink-0 h-6 w-6 rounded-full bg-[#C8B56A] text-white flex items-center justify-center font-bold text-sm mr-3"
                    aria-hidden="true"
                  >
                    3
                  </div>
                  <p>
                    Food enthusiasts who want to enjoy exclusive dining credits
                    and premium culinary experiences.
                  </p>
                </li>
              </ol>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-6">
                Is the American Express® Gold Card right for you?
              </h2>
              <p className="mb-6">
                The American Express® Gold Card combines a solid rewards
                structure with dining and travel benefits, making it a unique
                card for those who value premium experiences. While its $325
                annual fee might seem high, the credits and rewards can easily
                offset the cost if fully utilized. If your spending habits align
                with its key categories, this card could be the perfect addition
                to your wallet.
              </p>
              <p className="mb-8">
                If you’re ready to maximize your purchases and enjoy exceptional
                culinary and travel experiences, consider the American Express®
                Gold Card as your next financial tool.
              </p>
            </div>

            {/* CTA 2 (Bottom) */}
            <div className="flex justify-center mt-10 mb-8">
              <Link
                href="/financial-solutions/requirements-to-qualify-for-the-american-express-gold-card"
                className="w-full"
              >
                <Button className="w-full px-10 py-6 text-xl bg-[#C8B56A] hover:bg-[#b09e5a] text-white font-bold rounded-full shadow-md transition-all duration-200">
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
