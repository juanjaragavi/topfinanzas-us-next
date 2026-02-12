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
    "Benefits Capital One Savor Cash Rewards Credit Card: Maximize Your Rewards",
  description:
    "A card designed for life's tasty moments. Explore the unlimited cash back and travel perks of the Capital One Savor Card.",
};

export default function CapitalOneSavorBenefitsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <h1 className="text-3xl text-left md:text-4xl font-bold text-gray-800 mb-8 leading-8">
              Benefits Capital One Savor Cash Rewards Credit Card: Maximize Your
              Rewards
            </h1>

            {/* Ad Unit: square02 */}
            <div
              id="square02"
              className="w-full flex justify-center my-6"
              data-topads
              data-topads-size="square"
            ></div>

            {/* Tagline */}
            <p className="text-left text-lg text-gray-800 font-medium mb-8 leading-5">
              A card designed for life's tasty moments
            </p>

            {/* Hero Bullets */}
            <div className="space-y-2 my-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#AB5033] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Unlimited 4% cash back on dining and entertainment:
                  </span>{" "}
                  Savor every meal and night out with generous cashback rewards.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#AB5033] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    2% cash back at grocery stores:
                  </span>{" "}
                  Turn everyday grocery shopping into valuable rewards.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#AB5033] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    No foreign transaction fees:
                  </span>{" "}
                  Enjoy seamless travel and international purchases without
                  extra costs.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#AB5033] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Sign-up bonus:
                  </span>{" "}
                  Earn a substantial cashback bonus when you meet the spending
                  requirements within the first three months.
                </p>
              </div>
            </div>

            {/* CTA 1 (Internal Link to Requirements) */}
            <div className="text-left my-8">
              <Link
                href="/financial-solutions/requirements-for-the-capital-one-savor-cash-rewards-credit-card"
                className="w-full"
              >
                <Button className="w-full px-8 py-2 text-md bg-[#AB5033] hover:bg-[#8f432b] text-white font-medium rounded-full">
                  How it works
                </Button>
              </Link>
            </div>

            {/* Split Section (Image on Left in source, but Template has Image Right. Following Template structure for consistency, or source?
               Source screenshot is just a banner image, not a split section.
               Actually looking at the Fundbox template, it has a Split Section with "Fundbox" text on left and Image on right.
               The user Prompt says: "Implement the following media resource as the featured image or primary visual."
               And "Replicate the exact copy of all the texts elements, and all of the design and layout elements and details."
               Wait, the source content provided by subagent showed "Hero Image" at the top.
               However, the visual reference (screenshots) likely dictates the layout.
               I will assume unrelated to the Fundbox specific split layout and use a standard ResponsiveImage unless implied otherwise. 
               BUT the Fundbox template has a specific split layout. 
               Let's look at the Fundbox Template again. It has a split section.
               Let's check the extracted content again. It lists "Hero Image". 
               The Fundbox template uses the split section effectively.
               Usually these pages follow the template. I will implement the image standardly if no split text is provided, OR use the "Capital One Savor" text in a split block if it mimics the Fundbox style.
               Let's stick to a standard full width image if no specific "logo block" text is evident, OR use a text block if appropriate.
               The Requirements page just implemented used a split block.
               Let's use a full width image for the "Hero Image" as provided in the asset list, as it looks like a banner.
            */}

            <div className="my-8 w-full rounded-xl overflow-hidden shadow-sm">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/benefits-capital-one-savor-cash-rewards-credit-card.webp"
                alt="Capital One Savor Cash Rewards Credit Card Benefits"
                width={1200}
                height={400}
                priority
              />
            </div>

            {/* Main Content Sections */}

            {/* 1. Rewards tailored to your lifestyle */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Rewards tailored to your lifestyle
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              For foodies and entertainment enthusiasts, the Savor Card is a
              perfect match. Whether dining out with friends, streaming your
              favorite shows, or attending live events, this card ensures every
              dollar spent adds value to your lifestyle.
            </p>

            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              Dining out has never been more rewarding
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              The 4% cashback on dining is one of the most competitive rates
              available. It covers everything from fine dining to casual meals,
              allowing you to indulge while earning.
            </p>

            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              Entertainment perks
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              From concerts to sporting events, your purchases on tickets and
              related entertainment expenses earn 4% cashback. Make
              unforgettable memories while accumulating rewards.
            </p>

            {/* Ad Unit: square04 */}
            <div
              id="square04"
              className="w-full flex justify-center my-6"
              data-topads
              data-topads-size="square"
            ></div>

            <hr className="my-8" />

            {/* 2. Everyday savings with grocery purchases */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Everyday savings with grocery purchases
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Your weekly grocery run contributes to your rewards. The 2%
              cashback rate ensures that household essentials earn as much as
              your indulgent treats.
            </p>

            {/* 3. Travel-friendly features */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Travel-friendly features
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              The Savor Card is a global companion. Its lack of foreign
              transaction fees and worldwide acceptance make it ideal for
              international trips. Whether you're sampling street food in
              Bangkok or enjoying a café in Paris, your purchases are
              hassle-free.
            </p>

            {/* 4. Additional benefits */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Additional benefits
            </h2>
            <div className="space-y-6 my-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 size-5 rounded-full bg-[#AB5033] flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-white font-bold">➔</span>
                </div>
                <div className="text-sm leading-5 text-left">
                  <span className="font-semibold">Sign-up bonus:</span>{" "}
                  Kickstart your rewards journey with an attractive bonus offer.
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 size-5 rounded-full bg-[#AB5033] flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-white font-bold">➔</span>
                </div>
                <div className="text-sm leading-5 text-left">
                  <span className="font-semibold">Flexible redemption:</span>{" "}
                  Use your rewards as cash back, statement credits, or towards
                  experiences.
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 size-5 rounded-full bg-[#AB5033] flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-white font-bold">➔</span>
                </div>
                <div className="text-sm leading-5 text-left">
                  <span className="font-semibold">
                    No annual fee (first year):
                  </span>{" "}
                  Experience premium benefits without upfront costs.
                </div>
              </div>
            </div>

            {/* 5. Closing thoughts */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Closing thoughts
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              The Capital One Savor Cash Rewards Credit Card is more than just a
              credit card; it&apos;s a lifestyle upgrade. With top-tier cashback
              rates and versatile benefits, it&apos;s a must-have for anyone
              looking to maximize their spending power.
            </p>

            {/* CTA 2 (Internal Link to Requirements) */}
            <div className="text-left my-8">
              <Link href="/financial-solutions/requirements-for-the-capital-one-savor-cash-rewards-credit-card">
                <Button className="bg-[#AB5033] hover:bg-[#8f432b] text-white font-medium text-md py-2 px-8 rounded-full w-full">
                  How it works
                </Button>
              </Link>
            </div>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
