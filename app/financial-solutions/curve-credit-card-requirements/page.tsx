import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Curve Card Requirements: Application and Eligibility Guide - Top Finance UK",
    description:
      "Discover the eligibility criteria, application process, and requirements for the Curve Card to maximize your chances of approval.",
    keywords:
      "Curve Card requirements, UK fintech application, all-in-one card, credit card consolidation, Curve Flex, card eligibility, time travel banking",
  };
}

export default function CurveCreditCardRequirementsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12" data-category="tarjetas">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-3xl font-bold text-gray-800 mb-4 leading-8">
              Requirements for the Curve Card
            </h1>

            <div id="square01" data-topads data-topads-size="square"></div>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 mb-8 leading-5 text-left">
                The Curve Card revolutionizes how you manage your finances by
                consolidating all your payment cards into one smart card with
                powerful flexibility and enhanced features.
              </p>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/uk/credit-cards/719907706-top_prestamos-y-tarjetas-uk_v1-23.webp"
                  alt="Curve Credit Card"
                  width={900}
                  height={507}
                  className="w-full h-auto rounded-xl"
                  priority={false}
                  fetchPriority="high"
                  quality={85}
                  loading="eager"
                />
              </div>

              <section className="my-6">
                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  How to Qualify for the Curve Card
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#E33292] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Age requirement:</span>{" "}
                      You must be at least 18 years old to apply for a Curve
                      Card. This is a standard regulatory requirement for
                      financial products in the UK.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#E33292] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Residency:</span> You must
                      be a resident of one of the countries where Curve
                      operates, including the UK and most European Economic Area
                      (EEA) countries. Proof of address in an eligible country
                      is required during the application process.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#E33292] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Existing payment cards:
                      </span>{" "}
                      You need to have at least one Mastercard or Visa card
                      (debit or credit) from a UK or EEA bank to connect to your
                      Curve account. American Express cards are not currently
                      supported by Curve.
                    </div>
                  </div>

                  <div
                    id="square02"
                    data-topads
                    data-topads-size="square"
                  ></div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#E33292] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Smartphone requirement:
                      </span>{" "}
                      Since Curve is an app-based service, you'll need a
                      compatible iOS or Android smartphone to manage your Curve
                      account and connected cards.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Application Requirements:
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#E33292] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Curve App:</span> Download
                      the Curve App from the App Store (iOS) or Google Play
                      Store (Android) to begin the application process. All
                      account management will happen through this app.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#E33292] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Identity Verification:
                      </span>{" "}
                      Complete Curve's digital identity verification process,
                      which typically involves taking a photo of a valid
                      government-issued ID (passport, driving license) and a
                      selfie for biometric matching to confirm your identity.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#E33292] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Personal Information:
                      </span>{" "}
                      Provide basic personal details including your full name,
                      date of birth, email address, phone number, and
                      residential address for verification purposes and
                      communication.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#E33292] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Card Details:</span>{" "}
                      You'll need to add at least one Mastercard or Visa payment
                      card to your Curve account by providing the card details
                      and completing a verification process to confirm ownership
                      of each card you add.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Digital Application Process
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Curve's application process is entirely digital and typically
                  very quick:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#E33292] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        App Download and Setup:
                      </span>{" "}
                      Begin by downloading the Curve app from your device's app
                      store and creating an account with your email address and
                      a secure password. This serves as the foundation for your
                      Curve account.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#E33292] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Identity Verification:
                      </span>{" "}
                      Complete the in-app verification process by scanning your
                      ID document and taking a selfie. This typically takes just
                      a few minutes, with most users passing verification
                      instantly.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#E33292] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Card Selection:</span>{" "}
                      Choose your plan (Curve Standard, Black, or Metal) and
                      provide your delivery address for your physical Curve
                      Card. The card selection determines your fee structure and
                      available benefits.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#E33292] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Adding Payment Cards:
                      </span>{" "}
                      Connect your existing payment cards by entering their
                      details in the app. For security purposes, Curve will make
                      a small verification charge (usually £0.10 or equivalent)
                      to each card, which is immediately refunded.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#E33292] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Virtual Card Access:
                      </span>{" "}
                      Upon approval, you'll receive immediate access to a
                      virtual Curve Card in the app, allowing you to begin
                      making online purchases or add the card to your digital
                      wallet while waiting for your physical card to arrive.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Understanding the Costs
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Curve offers several tiers with different fee structures and
                  benefits:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#E33292] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Curve Standard:</span> The
                      entry-level tier is free with no monthly or annual fee.
                      Standard includes basic features like the ability to add
                      cards, "Go Back in Time" for up to 30 days, and fee-free
                      foreign spending up to £500 per month.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#E33292] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Curve Black:</span> This
                      mid-tier subscription costs approximately £9.99 per month
                      and includes increased limits (£15,000 fee-free foreign
                      spending per month), 1% cashback at selected retailers,
                      worldwide travel insurance, and other enhanced features.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#E33292] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Curve Metal:</span> The
                      premium tier costs approximately £14.99 per month and
                      includes all Black features plus unlimited fee-free
                      foreign spending, additional cashback options, airport
                      lounge access, rental car collision damage waiver
                      insurance, and a metal card.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#E33292] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Additional Fees:</span>{" "}
                      Beyond monthly subscription costs (if applicable), be
                      aware of potential fees for services like cash withdrawals
                      beyond monthly limits (2% of the amount), card replacement
                      (£5), and weekend foreign currency exchange (0.5% to 1.5%
                      markup).
                    </div>
                  </div>
                </div>

                {/* Ad Block 1: Personal Loans */}
                <div className="my-8 text-left sm:text-left">
                  <Link href="/personal-finance/best-personal-loans">
                    <Image
                      src="https://media.topfinanzas.com/images/ads/Top-Blog-Personal-loans-1.webp"
                      alt="Curve Credit Card"
                      width={1000}
                      height={563}
                      className="mx-auto w-full md:w-8/12 h-auto rounded-xl"
                      loading="lazy"
                      quality={80}
                    />
                  </Link>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Key Benefits and Features
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#E33292] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">All Cards in One:</span>{" "}
                      Connect up to 30 Mastercard and Visa cards to your Curve
                      account, allowing you to carry just one physical card
                      while maintaining access to all your payment options.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#E33292] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Go Back in Time:</span>{" "}
                      Curve's signature feature allows you to switch which card
                      is charged for a transaction up to 30 days after the
                      purchase, providing unprecedented payment flexibility.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#E33292] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Enhanced Security:</span>{" "}
                      Benefit from instant spending notifications, easy card
                      freezing, and the ability to disable specific transaction
                      types. Additionally, when you use Curve, merchants never
                      see your actual card details, adding an extra layer of
                      protection.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#E33292] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Fee-Free Foreign Spending:
                      </span>{" "}
                      All Curve plans include some amount of fee-free spending
                      in foreign currencies, with higher tiers offering
                      increased or unlimited allowances, making Curve
                      particularly valuable for travelers.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Who Is This Card Best For?
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  The Curve Card is particularly well-suited for several types
                  of users:
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
                  Multi-card users:
                </h3>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  If you use multiple credit and debit cards for different
                  purposes (personal, business, rewards maximization), Curve
                  simplifies your wallet and financial management by
                  consolidating these cards into a single physical card while
                  preserving all their specific benefits.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  <span className="font-bold">Learn more:</span>{" "}
                  <Link
                    href="/personal-finance/credit-card-types-benefits/" // Updated link
                    className="text-blue-600 underline"
                  >
                    Strategies for managing multiple payment cards
                  </Link>
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
                  International travelers:
                </h3>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  For those who frequently travel abroad, Curve's fee-free
                  foreign spending and competitive exchange rates provide
                  significant savings compared to most traditional cards. The
                  ability to use your regular cards internationally without
                  foreign transaction fees is particularly valuable.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  <span className="font-bold">Learn more:</span>{" "}
                  <Link
                    href="/personal-finance/understanding-credit-card-interest-rates/" // Updated link
                    className="text-blue-600 underline"
                  >
                    Top features of travel-friendly credit cards
                  </Link>
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
                  Rewards maximizers:
                </h3>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Curve's ability to add another layer of rewards on top of your
                  existing cards' benefits allows for "double-dipping" on
                  rewards programs. By strategically selecting which underlying
                  card to use for each purchase and earning Curve's cashback
                  simultaneously, you can maximize your returns on everyday
                  spending.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  <span className="font-bold">Learn more:</span>{" "}
                  <Link
                    href="/personal-finance/best-rewards-credit-cards/" // Replaced dead link
                    className="text-blue-600 underline"
                  >
                    Advanced techniques for maximizing credit card rewards
                  </Link>
                </p>

                {/* Ad Block 2: Debt Management */}
                <div className="my-8 text-left sm:text-left">
                  <Link href="/personal-finance/getting-out-of-debt">
                    <Image
                      src="https://media.topfinanzas.com/images/ads/Top-Blog-Debt-management-1.webp"
                      alt="Curve Credit Card"
                      width={1000}
                      height={563}
                      className="mx-auto w-full md:w-8/12 h-auto rounded-xl"
                      loading="lazy"
                      quality={80}
                    />
                  </Link>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Is the Curve Card Right for You?
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  When considering the Curve Card, it's important to evaluate
                  how its unique approach to payment cards aligns with your
                  financial needs and habits. Unlike traditional credit cards,
                  Curve doesn't offer credit itself but rather provides a layer
                  of innovation on top of your existing cards. This means its
                  value depends largely on how effectively you can utilize its
                  features to enhance your current financial setup. For those
                  who regularly use multiple cards, travel internationally, or
                  want to maximize rewards, Curve can deliver significant
                  benefits and convenience. However, users with simpler
                  financial needs or who primarily use a single card may find
                  less value in its more advanced features.
                </p>

                <div className="text-left my-8">
                  <Link href="https://www.curve.com/card/" target="_blank">
                    <Button className="bg-[#E33292] hover:bg-pink-700 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                      Visit Official Website
                    </Button>
                  </Link>
                </div>

                {/* AI Content Disclaimer */}
                <AIContentDisclaimer />
              </section>
            </div>
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
