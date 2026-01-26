import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Halifax World Elite Mastercard: Premier Banking Benefits - Top Finance UK",
    description:
      "The Halifax World Elite Mastercard offers exceptional travel perks, premium concierge services, and exclusive lifestyle benefits to elevate your financial experience.",
    keywords:
      "Halifax World Elite Mastercard, premium credit card, UK banking, travel perks, concierge services, cashback, airport lounge access, Halifax credit card",
  };
}

export default function HalifaxWorldEliteMastercardPage() {
  return (
    <main
      className="bg-white min-h-screen flex flex-col"
      data-category="tarjetas"
    >
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-4xl font-bold text-gray-800 mb-4 leading-8">
              Halifax World Elite Mastercard: Exceptional Premium Banking
              Benefits
            </h1>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 font-medium mb-8 leading-5 text-left">
                The Halifax World Elite Mastercard combines premium banking
                benefits with exclusive lifestyle perks, offering a
                comprehensive financial solution for discerning customers.
              </p>

              <div id="square01" data-topads data-topads-size="square"></div>

              <hr className="my-8" />

              <div className="space-y-2 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#004C9F] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">
                      Premium Travel Insurance:
                    </span>{" "}
                    Comprehensive worldwide travel cover for you and your family
                    members.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#004C9F] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">Lounge Access:</span> Free
                    access to over 1,000 airport lounges worldwide with
                    LoungeKey membership.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#004C9F] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">Concierge Service:</span>{" "}
                    24/7 personal assistant to help with reservations, travel
                    plans, and more.
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 size-5 rounded-full bg-[#004C9F] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">➔</span>
                  </div>
                  <div className="text-md leading-5 text-left">
                    <span className="font-semibold">Cashback Rewards:</span> Up
                    to 0.5% cashback on all purchases, with enhanced rates for
                    selected retailers.
                  </div>
                </div>
              </div>

              <div className="text-left my-8">
                <Link href="/financial-solutions/halifax-world-elite-mastercard-requirements">
                  <Button className="bg-[#004C9F] hover:bg-blue-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                    View Requirements
                  </Button>
                </Link>
              </div>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/uk/credit-cards/719906760-top_prestamos-y-tarjetas-uk_v1-14.webp"
                  alt="Halifax World Elite Mastercard"
                  width={900}
                  height={507}
                  className="w-full h-auto rounded-xl"
                  priority={false}
                  fetchPriority="high"
                  quality={85}
                  loading="eager"
                />
              </div>

              <div className="my-6">
                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  The Halifax World Elite Mastercard stands as a premium
                  financial product designed for clients seeking a superior
                  banking experience with exclusive benefits. This prestigious
                  card combines practical financial tools with luxury lifestyle
                  perks, making it an attractive option for those who want their
                  banking relationship to extend beyond basic transactions.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Elevate Your Travel Experience
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  Travel becomes more comfortable and convenient with the
                  Halifax World Elite Mastercard. The complimentary LoungeKey
                  membership grants you access to over 1,000 airport lounges
                  worldwide, providing a tranquil environment to relax, work, or
                  dine before your flight. This benefit alone can transform your
                  travel experience, offering a peaceful respite from crowded
                  terminals regardless of your ticket class.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Comprehensive Travel Protection
                </h2>

                <hr className="my-8" />

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  Your journeys are protected with the Halifax World Elite
                  Mastercard's extensive travel insurance package. This
                  comprehensive coverage includes medical emergencies, trip
                  cancellations, delayed baggage, and travel accidents for you
                  and your family members. This robust protection gives you
                  confidence to explore the world knowing you're covered against
                  unforeseen circumstances.
                </p>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Personalized Concierge Service
                </h2>

                <p className="text-gray-800 mb-4 text-md leading-5 font-light text-left">
                  The 24/7 concierge service acts as your personal assistant,
                  ready to help with restaurant reservations, travel
                  arrangements, event tickets, or special occasion planning.
                  This time-saving benefit ensures that your leisure and
                  entertainment needs are handled efficiently by professionals
                  who specialise in creating exceptional experiences.
                </p>

                <div className="my-8 text-left sm:text-left">
                  <Link href="/personal-finance/credit-card-types-benefits/">
                    <Image
                      src="https://media.topfinanzas.com/images/ads/Top-Blog-Credit-Cards.webp"
                      alt="Barclays Personal Loan"
                      width={1000}
                      height={563}
                      className="mx-auto w-full md:w-8/12 h-auto rounded-xl"
                      loading="lazy"
                      quality={80}
                    />
                  </Link>
                </div>

                {/* Related Articles Section */}
                <div className="my-8 p-6 bg-gray-50 rounded-xl border border-gray-200 text-left sm:text-left">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 text-left">
                    Learn More About Credit Cards:
                  </h3>
                  <ul className="space-y-2 list-disc list-inside text-blue-700 text-left">
                    <li>
                      <Link
                        href="/personal-finance/travel-credit-cards/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Top Travel Credit Cards
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/personal-finance/best-rewards-credit-cards/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Maximizing Credit Card Rewards
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/personal-finance/cashback-credit-cards/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Best Cashback Credit Cards
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/personal-finance/understanding-credit-card-interest-rates/"
                        className="hover:underline hover:text-blue-900 transition-colors"
                      >
                        Understanding Interest Rates
                      </Link>
                    </li>
                  </ul>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Additional Features:
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#004C9F] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Purchase Protection:
                      </span>{" "}
                      Coverage against loss, theft, or accidental damage for
                      eligible items purchased with your card within 90 days of
                      purchase.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#004C9F] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Extended Warranty:</span>{" "}
                      Doubles the manufacturer's warranty for eligible items,
                      providing additional protection for your valuable
                      purchases.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#004C9F] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Car Hire Benefits:</span>{" "}
                      Complimentary car hire insurance and special rates with
                      selected car rental partners worldwide.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#004C9F] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Mastercard Priceless Cities:
                      </span>{" "}
                      Exclusive access to unique experiences, events, and offers
                      in cities around the world through the Mastercard
                      Priceless program.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Security and Peace of Mind
                </h2>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  The Halifax World Elite Mastercard incorporates advanced
                  security features to protect your finances:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#004C9F] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        24/7 Fraud Monitoring:
                      </span>{" "}
                      Continuous surveillance of your account for suspicious
                      activities with immediate alert notifications.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#004C9F] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Zero Liability Protection:
                      </span>{" "}
                      You're not held responsible for unauthorized transactions
                      if you report them promptly.
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  A Premium Banking Experience
                </h2>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  The Halifax World Elite Mastercard represents more than just a
                  credit card; it's a comprehensive financial tool that enhances
                  your lifestyle and provides valuable protection. From making
                  everyday purchases more rewarding through cashback to ensuring
                  you travel in comfort and security, this premium card delivers
                  substantial value for cardholders who appreciate quality
                  service and exclusive benefits.
                </p>

                <p className="text-gray-800 text-sm leading-5 mb-4 text-left">
                  Whether you're a frequent traveller, a busy professional
                  seeking time-saving services, or someone who values premium
                  protection for their purchases and journeys, the Halifax World
                  Elite Mastercard offers a suite of benefits designed to meet
                  your sophisticated financial needs while enhancing your daily
                  life.
                </p>

                <div className="text-left my-8">
                  <Link href="/financial-solutions/halifax-world-elite-mastercard-requirements">
                    <Button className="bg-[#004C9F] hover:bg-blue-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                      View Requirements
                    </Button>
                  </Link>
                </div>

                {/* AI Content Disclaimer */}
                <AIContentDisclaimer />
              </div>
            </div>
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
