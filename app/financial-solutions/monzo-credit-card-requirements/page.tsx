import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Monzo Credit Card Requirements: Digital Application Guide - Top Finance UK",
    description:
      "Learn about the eligibility criteria, digital application process, and approval requirements for the Monzo Credit Card to maximize your chances of success.",
    keywords:
      "Monzo Credit Card requirements, UK neobank applications, Monzo eligibility, credit score requirements, digital credit card application, mobile banking",
  };
}

export default function MonzoCreditCardRequirementsPage() {
  return (
    <main
      className="bg-white min-h-screen flex flex-col"
      data-category="tarjetas"
    >
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-3xl font-bold text-gray-800 mb-4 leading-8">
              Requirements for the Monzo Credit Card
            </h1>

            <div id="square01" data-topads data-topads-size="square"></div>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 mb-8 leading-5 text-left">
                The Monzo Credit Card offers innovative digital tools, real-time
                spending insights, and seamless integration with the Monzo app
                for a next-generation banking experience.
              </p>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/uk/credit-cards/719907306-top_prestamos-y-tarjetas-uk_v1-19.webp"
                  alt="Monzo Credit Card"
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
                  How to Qualify for the Monzo Credit Card
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FF4D56] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Age and residency:</span>{" "}
                      You must be at least 18 years old and a UK resident with a
                      UK home address. As a digital bank, Monzo requires a valid
                      UK residence for account verification purposes.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FF4D56] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Monzo account:</span> You
                      typically need to have an existing Monzo current account
                      to apply for the Monzo Credit Card. This requirement
                      allows for the integrated experience that Monzo offers
                      across its product range.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FF4D56] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Credit history:</span>{" "}
                      Monzo will assess your credit history as part of the
                      application process. While a good credit score is
                      beneficial, Monzo considers various factors in their
                      decision, making their credit cards accessible to
                      different financial profiles.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FF4D56] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Financial stability:
                      </span>{" "}
                      You'll need to demonstrate sufficient regular income to
                      manage credit responsibly. Monzo may analyze your existing
                      Monzo account transaction history to assess your financial
                      behavior patterns.
                    </div>
                  </div>
                </div>

                <div id="square02" data-topads data-topads-size="square"></div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Digital Application Requirements:
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FF4D56] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Monzo App:</span> You must
                      have the Monzo app installed on a compatible smartphone to
                      apply for and manage your Monzo Credit Card. The app is
                      available for both iOS and Android devices.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FF4D56] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Digital Identity Verification:
                      </span>{" "}
                      If you're not already a Monzo customer, you'll need to
                      complete Monzo's digital identity verification process,
                      which typically involves taking a photo of a valid ID
                      document (passport, driving license) and a short video
                      selfie.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FF4D56] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Personal Information:
                      </span>{" "}
                      Basic personal details including your full name, date of
                      birth, email address, phone number, and current address
                      history (typically for the last 3 years).
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FF4D56] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Financial Information:
                      </span>{" "}
                      Details about your employment status, income, and existing
                      financial commitments to help Monzo assess your ability to
                      manage credit responsibly.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Digital Application Process
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Monzo's application process is designed to be quick,
                  transparent, and entirely digital:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FF4D56] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">In-App Application:</span>{" "}
                      For existing Monzo customers, the application process
                      takes place entirely within the Monzo app. You can apply
                      for a credit card directly from your account dashboard,
                      with much of your information pre-filled from your
                      existing Monzo profile.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FF4D56] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Streamlined Process:
                      </span>{" "}
                      The application typically takes just a few minutes to
                      complete, with a clear, step-by-step process that guides
                      you through providing the necessary information.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FF4D56] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Real-Time Decision:</span>{" "}
                      Many applicants receive an immediate decision on their
                      application. For those who require further review, Monzo
                      provides clear updates on the status of your application
                      through the app.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FF4D56] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Instant Virtual Card:
                      </span>{" "}
                      Upon approval, you'll typically have immediate access to a
                      virtual version of your credit card in the Monzo app,
                      allowing you to start using it for online purchases right
                      away, before your physical card arrives.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Understanding the Costs
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Before applying for the Monzo Credit Card, it's important to
                  understand the associated costs:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FF4D56] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Representative APR:</span>{" "}
                      The standard variable APR typically ranges from 19.9% to
                      34.9%, depending on your individual circumstances and
                      credit profile. Monzo's digital approach allows for
                      personalized rates based on your financial situation.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FF4D56] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Annual Fee:</span> The
                      standard Monzo Credit Card typically has no annual fee,
                      aligning with Monzo's commitment to transparent and
                      straightforward pricing.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FF4D56] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Cash Withdrawal Fee:
                      </span>{" "}
                      While cash withdrawals are available, they typically incur
                      a fee (around 3% of the withdrawal amount, with a minimum
                      of £3) and interest is charged from the date of
                      withdrawal.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FF4D56] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Foreign Transaction Fee:
                      </span>{" "}
                      A significant benefit of the Monzo Credit Card is that it
                      typically doesn't charge foreign transaction fees, making
                      it an excellent choice for international travelers and
                      online shoppers purchasing from overseas retailers.
                    </div>
                  </div>
                </div>

                <div className="my-8 text-left sm:text-left">
                  <Link href="/personal-finance/best-personal-loans">
                    <Image
                      src="https://media.topfinanzas.com/images/ads/Top-Blog-Personal-loans-1.webp"
                      alt="Monzo Credit Card"
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
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FF4D56] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Real-Time Notifications:
                      </span>{" "}
                      Instant alerts for every transaction help you stay on top
                      of your spending and quickly identify any unauthorized
                      charges, providing peace of mind and enhanced security.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FF4D56] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Smart Budgeting Tools:
                      </span>{" "}
                      Set spending budgets by category and track your progress
                      in real-time, helping you manage your finances proactively
                      and avoid overspending.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FF4D56] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Enhanced Security Controls:
                      </span>{" "}
                      Take advantage of advanced security features including
                      instant card freezing, granular payment controls, and
                      location-based security that helps prevent fraud.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#FF4D56] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Seamless App Integration:
                      </span>{" "}
                      Manage your credit card alongside other Monzo products in
                      a single app, with unified spending insights and
                      simplified payments between accounts.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Who Is This Card Best For?
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  The Monzo Credit Card is particularly well-suited for several
                  types of customers:
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
                  Digital-first consumers:
                </h3>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  If you prefer managing your finances through mobile apps
                  rather than branch visits or phone calls, the Monzo Credit
                  Card offers a seamless digital experience. The intuitive
                  interface, instant notifications, and comprehensive mobile
                  features make it ideal for those who value technology-driven
                  financial management.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  <span className="font-bold">Learn more:</span>{" "}
                  <Link
                    href="/personal-finance/credit-card-types-benefits/" // Replaced dead link
                    className="text-blue-600 underline"
                  >
                    The digital banking revolution
                  </Link>
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
                  Existing Monzo customers:
                </h3>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  For those who already use Monzo for their current account,
                  adding the credit card creates a unified financial ecosystem.
                  This integration allows for simplified money management,
                  comprehensive spending insights across all accounts, and a
                  consistent user experience.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  <span className="font-bold">Learn more:</span>{" "}
                  <Link
                    href="/personal-finance/understanding-credit-card-interest-rates/" // Updated link
                    className="text-blue-600 underline"
                  >
                    Benefits of a unified banking approach
                  </Link>
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
                  Budget-conscious consumers:
                </h3>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  The real-time notifications and budgeting tools make this card
                  excellent for those who want to maintain tight control over
                  their spending. The ability to set category budgets and
                  receive immediate updates on your spending progress helps
                  prevent overspending and encourages more mindful financial
                  habits.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  <span className="font-bold">Learn more:</span>{" "}
                  <Link
                    href="/personal-finance/getting-out-of-debt/" // Replaced dead link
                    className="text-blue-600 underline"
                  >
                    Effective digital budgeting strategies
                  </Link>
                </p>

                <div className="my-8 text-left sm:text-left">
                  <Link href="/personal-finance/getting-out-of-debt">
                    <Image
                      src="https://media.topfinanzas.com/images/ads/Top-Blog-Debt-management-1.webp"
                      alt="Monzo Credit Card"
                      width={1000}
                      height={563}
                      className="mx-auto w-full md:w-8/12 h-auto rounded-xl"
                      loading="lazy"
                      quality={80}
                    />
                  </Link>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Is the Monzo Credit Card Right for You?
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  When considering the Monzo Credit Card, it's essential to
                  evaluate how its digital-first approach aligns with your
                  financial management preferences. If you value real-time
                  insights, automated financial tools, and a seamless mobile
                  experience, this card offers significant advantages over
                  traditional credit products. The integration with the broader
                  Monzo ecosystem provides additional value for existing
                  customers, while the innovative security features and
                  budgeting tools offer benefits to anyone seeking a more modern
                  approach to managing credit.
                </p>

                <div className="text-left my-8">
                  <Link href="https://monzo.com/flex/" target="_blank">
                    <Button className="bg-[#FF4D56] hover:bg-red-500 text-white font-medium text-md py-2 px-8 rounded-full w-full">
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
