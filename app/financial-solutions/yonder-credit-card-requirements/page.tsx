import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export function generateMetadata() {
  return {
    title:
      "Yonder Credit Card Requirements: Everything You Need to Know - Top Finance UK",
    description:
      "Understand the eligibility criteria, documentation, and application process for the Yonder Free Credit Card to maximize your chances of approval.",
    keywords:
      "Yonder Credit Card requirements, UK credit card application, Yonder eligibility, credit score requirements, free credit card application",
  };
}

export default function YonderCreditCardRequirementsPage() {
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
              Requirements for the Yonder Free Credit Card
            </h1>

            <div id="square01" data-topads data-topads-size="square"></div>

            <div className="my-8 text-left sm:text-left">
              <p className="text-lg text-gray-800 mb-8 leading-5 text-left">
                The Yonder Free Credit Card offers a modern rewards experience
                with no annual fee, making it accessible to those seeking
                flexible rewards without ongoing costs. Understanding the
                requirements ensures you're prepared for a successful
                application.
              </p>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://cdn.prod.website-files.com/6209512878b45f39119ebfb5/68370925fafdda1dee1f4104_img-p-800.webp"
                  alt="Yonder app showing balance"
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
                  How to Qualify for the Yonder Free Credit Card
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e88267] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Age Requirement:</span>{" "}
                      You must be at least 18 years old to apply for the Yonder
                      Free Credit Card. This is a legal requirement for credit
                      card applications in the UK, ensuring applicants have the
                      legal capacity to enter into credit agreements.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e88267] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">UK Residency:</span> You
                      must be a permanent UK resident with a valid UK address.
                      This allows Yonder to verify your identity and comply with
                      UK financial regulations.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e88267] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Credit Assessment:</span>{" "}
                      Yonder will assess your creditworthiness through a credit
                      check. You can check your eligibility without impacting
                      your credit score through their soft check process. Once
                      you choose to proceed with a full application, a hard
                      credit check will be performed.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e88267] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Affordability Assessment:
                      </span>{" "}
                      Yonder will review your income and existing financial
                      commitments to ensure the credit line is affordable for
                      your circumstances. This responsible lending practice
                      protects both you and the lender.
                    </div>
                  </div>
                </div>

                <div id="square02" data-topads data-topads-size="square"></div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Required Documentation:
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e88267] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Proof of Identity:</span>{" "}
                      You'll need a valid form of identification such as a UK
                      passport, driving licence, or national identity card. This
                      helps Yonder verify your identity and comply with
                      anti-money laundering regulations.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e88267] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Proof of Address:</span>{" "}
                      Recent documents (typically no older than 3 months) such
                      as utility bills, council tax statements, or bank
                      statements that confirm your current UK address.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e88267] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Financial Information:
                      </span>{" "}
                      Details about your employment status, income, and existing
                      financial commitments. This information helps Yonder
                      assess affordability and determine your appropriate credit
                      limit.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e88267] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        UK Bank Account Details:
                      </span>{" "}
                      A valid UK bank account for direct debit setup. This is
                      essential for making monthly payments on your credit card
                      balance.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Understanding the Costs
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  The Yonder Free Credit Card offers a straightforward fee
                  structure with no annual fee, making it accessible for
                  everyday use:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e88267] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Annual Fee:</span> £0. The
                      Yonder Free Credit Card has no monthly or annual fees,
                      making it one of the more accessible rewards credit cards
                      in the UK market.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e88267] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Representative APR:</span>{" "}
                      32.0% (variable) based on a £1,200 credit limit. The
                      purchase rate is 31.93% (variable). You can avoid interest
                      charges entirely by paying your balance in full each month
                      within the 15-day interest-free period.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e88267] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Foreign Transaction Fees:
                      </span>{" "}
                      £0. Yonder charges no fees for spending abroad, making it
                      an excellent choice for international travellers or online
                      shopping from foreign retailers.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e88267] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Cash Withdrawals:</span>{" "}
                      Cash advances are available but may incur fees and higher
                      interest rates. It's generally advisable to avoid using
                      credit cards for cash withdrawals due to these additional
                      costs.
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6">
                  <h3 className="text-md font-semibold text-gray-800 mb-3 text-left">
                    Representative Example:
                  </h3>
                  <p className="text-sm text-gray-700 mb-2 text-left leading-5">
                    Representative 32.0% APR (variable) based on a £1,200 credit
                    limit with a purchase rate of 31.93% (variable).
                  </p>
                  <p className="text-sm text-gray-600 italic text-left leading-5">
                    If you maintain a balance on your card, interest will be
                    charged on the outstanding amount. However, by paying your
                    full balance within the 15-day interest-free period each
                    month, you can avoid all interest charges and maximize the
                    value of your rewards.
                  </p>
                </div>

                <div className="my-8 text-left sm:text-left">
                  <Link href="/personal-finance/understanding-credit-card-interest-rates/">
                    <Image
                      src="https://media.topfinanzas.com/images/ads/Top-Blog-Credit-Cards.webp"
                      alt="Understanding Credit Card Interest Rates"
                      width={1000}
                      height={563}
                      className="mx-auto w-full md:w-8/12 h-auto rounded-xl"
                      loading="lazy"
                      quality={80}
                    />
                  </Link>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Benefits and Features
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e88267] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Flexible Rewards:</span>{" "}
                      Earn 1 point for every £1 spent and redeem your points for
                      dining, shopping, entertainment, travel, and more. The
                      redemption options change monthly, providing fresh choices
                      that align with your lifestyle.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e88267] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Welcome Offer:</span> New
                      members receive £10 off their first eligible purchase,
                      plus 1,000 bonus points when you spend £1,000 within your
                      first 30 days, giving your rewards balance an immediate
                      boost.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e88267] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Award-Winning App Features:
                      </span>{" "}
                      Manage your account through Yonder's highly rated app,
                      which includes top-notch in-app customer support, detailed
                      spend breakdowns, flexible recurring payment management,
                      and the ability to split bills with friends.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e88267] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold">➔</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Section 75 Protection:
                      </span>{" "}
                      Benefit from Section 75 Purchase Protection on eligible
                      purchases over £100, providing valuable consumer
                      protection for larger transactions.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Application Process
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  Applying for the Yonder Free Credit Card is straightforward
                  and can be completed through their mobile app or website:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e88267] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-xs">1</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Check Eligibility (Soft Check):
                      </span>{" "}
                      Begin with Yonder's eligibility checker, which uses a soft
                      credit search that won't impact your credit score. This
                      initial check takes just a few minutes and gives you an
                      indication of your likelihood of approval.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e88267] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-xs">2</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Complete Application:
                      </span>{" "}
                      If you're likely to be approved, you can proceed with the
                      full application. You'll need to provide personal details,
                      employment information, and financial information to
                      support your application.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e88267] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-xs">3</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Identity Verification:
                      </span>{" "}
                      Yonder will verify your identity using the documentation
                      you provide. This process is typically quick and can often
                      be completed digitally through the app.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e88267] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-xs">4</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">Credit Assessment:</span>{" "}
                      Once you proceed with the full application, Yonder will
                      conduct a hard credit check and assess your affordability.
                      This determines your credit limit, which can be up to
                      £10,000.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e88267] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-xs">5</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Application Decision:
                      </span>{" "}
                      You'll typically receive a decision quickly, often within
                      minutes. If approved, your Yonder card will be posted to
                      your registered address, usually arriving within 5-7
                      working days.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 size-5 rounded-full bg-[#e88267] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-xs">6</span>
                    </div>
                    <div className="text-sm leading-5 text-left">
                      <span className="font-semibold">
                        Activate and Start Earning:
                      </span>{" "}
                      Once your card arrives, activate it through the Yonder app
                      and start earning points on your everyday purchases
                      immediately.
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-800 mb-4 text-left">
                  Who Is the Yonder Free Credit Card Best For?
                </h2>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  The Yonder Free Credit Card is particularly well-suited for
                  several types of consumers:
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
                  Frequent International Travellers:
                </h3>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  With no foreign transaction fees and the ability to earn
                  points on every purchase, this card is ideal for those who
                  travel abroad regularly or make frequent international online
                  purchases. The ability to redeem points for flights and
                  airport lounge access further enhances its value for
                  travellers.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  <span className="font-bold">Learn more:</span>{" "}
                  <Link
                    href="/personal-finance/best-rewards-credit-cards/"
                    className="text-blue-600 underline"
                  >
                    Maximizing travel rewards with credit cards
                  </Link>
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
                  Digital-First Consumers:
                </h3>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  If you prefer managing your finances through a mobile app
                  rather than traditional banking channels, Yonder's
                  award-winning app provides an exceptional user experience with
                  innovative features like bill splitting, points sharing, and
                  detailed spend breakdowns.
                </p>

                <p className="text-gray-800 mb-4 text-sm leading-5 text-left">
                  <span className="font-bold">Learn more:</span>{" "}
                  <Link
                    href="/personal-finance/credit-card-types-benefits/"
                    className="text-blue-600 underline"
                  >
                    Understanding different credit card types
                  </Link>
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
                  Rewards Seekers on a Budget:
                </h3>

                <p className="text-gray-800 mb-4 text-sm leading-5 font-light text-left">
                  The absence of an annual fee makes this card accessible to
                  those who want to earn rewards without committing to ongoing
                  fees. As long as you pay your balance in full each month, you
                  can enjoy the benefits of a rewards program without any
                  additional costs.
                </p>

                <div className="my-8 text-left sm:text-left">
                  <Link href="/personal-finance/best-rewards-credit-cards/">
                    <Image
                      src="https://media.topfinanzas.com/images/ads/Top-Blog-Credit-Cards.webp"
                      alt="Best Rewards Credit Cards Guide"
                      width={1000}
                      height={563}
                      className="mx-auto w-full md:w-8/12 h-auto rounded-xl"
                      loading="lazy"
                      quality={80}
                    />
                  </Link>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
                  Frequently Asked Questions
                </h2>

                <div className="space-y-4 my-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      Is this an actual credit card?
                    </h3>
                    <p className="text-sm text-gray-700 text-left leading-5">
                      Yes. The Yonder credit card works just like other credit
                      cards you might have used. You spend with your credit
                      line, then pay Yonder back each month. It runs on the
                      Mastercard network, ensuring acceptance at over 44 million
                      locations worldwide.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      Does applying impact my credit score?
                    </h3>
                    <p className="text-sm text-gray-700 text-left leading-5">
                      You can check if you're eligible without impacting your
                      score through Yonder's soft credit check. Once you choose
                      to apply, Yonder will perform a hard check on your credit
                      profile, which may temporarily affect your credit score.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      Is Yonder a bank?
                    </h3>
                    <p className="text-sm text-gray-700 text-left leading-5">
                      No, but Yonder is a regulated financial institution
                      authorized by the Financial Conduct Authority. They
                      partner with a bank so any money you hold with them is
                      FSCS Protected, providing security for your funds.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2 text-left">
                      What is the new member welcome offer?
                    </h3>
                    <p className="text-sm text-gray-700 text-left leading-5">
                      New Yonder members get £10 off their first eligible
                      purchase, whether on debit or credit. Additionally, credit
                      card members receive 1,000 bonus points when they spend
                      £1,000 within their first 30 days. Terms apply—see the
                      full terms on Yonder's website.
                    </p>
                  </div>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6">
                  <p className="text-sm text-gray-700 text-left leading-5">
                    <span className="font-semibold">Important:</span> Credit is
                    subject to status and affordability. Yonder is a trading
                    name of Yonder Technology Ltd, company number 12739942,
                    authorized and regulated by the Financial Conduct Authority
                    (FCA) under firm reference 946219. The Card is issued by
                    Transact Payments Limited pursuant to licence by Mastercard
                    International. Mastercard is a registered trademark and the
                    circles design is a trademark of Mastercard International
                    Incorporated. This information is for guidance only and does
                    not constitute financial advice. Always consider your own
                    circumstances and seek independent financial advice if
                    needed before applying for credit products.
                  </p>
                </div>

                <div className="text-left my-8">
                  <a
                    href="https://www.yonder.com/credit-cards/free-credit-card"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-[#e88267] hover:bg-orange-700 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                      Apply Now at Yonder Official Website
                    </Button>
                  </a>
                </div>
              </section>
              {/* AI Content Disclaimer */}
              <AIContentDisclaimer />
            </div>
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
