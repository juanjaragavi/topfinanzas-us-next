import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Find Your Ideal Credit Card | Top Finanzas US",
  description:
    "Answer a few simple questions and we'll match you with the best card options for your financial profile.",
};

export default function FindYourCardPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12 max-w-4xl">
        <div className="flex flex-col items-center text-center space-y-8">
          <h1 className="text-3xl md:text-4xl font-bold text-black font-sans">
            Find Your Ideal Credit Card
          </h1>

          <div className="space-y-2">
            <p className="text-gray-600 text-lg">
              Answer a few simple questions and we'll match you with the best
              card options for your financial profile.
            </p>
            <p className="text-sm text-gray-400 uppercase tracking-wide">
              By Top Finance
            </p>
          </div>

          <div className="w-full max-w-2xl text-left mx-auto pt-4">
            <p className="text-[#1a365d] font-bold mb-4 text-xl">
              What benefits are you primarily looking for in a credit card?
            </p>
            <p className="text-gray-700 mb-8 text-lg">
              Select the option that best describes your needs:
            </p>

            <div className="flex flex-col space-y-4 w-full">
              <Link
                href="/financial-solutions/benefits-of-the-discover-it-cash-back"
                className="inline-flex items-center justify-center bg-[#3e6b89] hover:bg-[#2c4c61] text-white py-4 px-6 text-lg font-bold uppercase transition-colors w-full rounded shadow-sm"
              >
                RECOMMENDED CASHBACK CARDS
              </Link>
              <Link
                href="/financial-solutions/capital-one-venture-x-rewards-credit-card-benefits"
                className="inline-flex items-center justify-center bg-[#3e6b89] hover:bg-[#2c4c61] text-white py-4 px-6 text-lg font-bold uppercase transition-colors w-full rounded shadow-sm"
              >
                PREMIUM RECOMMENDATION
              </Link>
              <Link
                href="/financial-solutions/citi-simplicity-card-benefits"
                className="inline-flex items-center justify-center bg-[#3e6b89] hover:bg-[#2c4c61] text-white py-4 px-6 text-lg font-bold uppercase transition-colors w-full rounded shadow-sm"
              >
                NO COST CHOICE
              </Link>
            </div>
          </div>

          <div className="w-full text-left max-w-3xl mt-12">
            <h3 className="text-2xl font-bold text-black mb-6">
              Frequently Asked Questions About Credit Cards
            </h3>
            <div className="space-y-4">
              <details className="group border-b border-gray-200 pb-4">
                <summary className="cursor-pointer font-bold text-gray-900">
                  <div className="inline-flex w-full justify-between items-center align-top">
                    <span>What is a credit card cashback program?</span>
                    <span className="text-gray-400 font-bold ml-4">
                      <span className="group-open:hidden">+</span>
                      <span className="hidden group-open:inline">-</span>
                    </span>
                  </div>
                </summary>
                <div className="mt-2 text-gray-600 pl-4">
                  A cashback program refunds a small percentage of every
                  purchase you make with the card, typically between 1% and 5%
                  depending on the category.
                </div>
              </details>

              <details className="group border-b border-gray-200 pb-4">
                <summary className="cursor-pointer font-bold text-gray-900">
                  <div className="inline-flex w-full justify-between items-center align-top">
                    <span>How do I choose the best credit card for me?</span>
                    <span className="text-gray-400 font-bold ml-4">
                      <span className="group-open:hidden">+</span>
                      <span className="hidden group-open:inline">-</span>
                    </span>
                  </div>
                </summary>
                <div className="mt-2 text-gray-600 pl-4">
                  Consider your spending habits (travel, groceries, dining) and
                  financial goals (building credit, earning rewards, paying off
                  debt) to match with a card's benefits.
                </div>
              </details>

              <details className="group border-b border-gray-200 pb-4">
                <summary className="cursor-pointer font-bold text-gray-900">
                  <div className="inline-flex w-full justify-between items-center align-top">
                    <span>Can I get a credit card with bad credit?</span>
                    <span className="text-gray-400 font-bold ml-4">
                      <span className="group-open:hidden">+</span>
                      <span className="hidden group-open:inline">-</span>
                    </span>
                  </div>
                </summary>
                <div className="mt-2 text-gray-600 pl-4">
                  Yes, there are secured credit cards and cards designed
                  specifically for rebuilding credit that may be available to
                  you.
                </div>
              </details>

              <details className="group border-b border-gray-200 pb-4">
                <summary className="cursor-pointer font-bold text-gray-900">
                  <div className="inline-flex w-full justify-between items-center align-top">
                    <span>
                      What should I do if my credit card application is denied?
                    </span>
                    <span className="text-gray-400 font-bold ml-4">
                      <span className="group-open:hidden">+</span>
                      <span className="hidden group-open:inline">-</span>
                    </span>
                  </div>
                </summary>
                <div className="mt-2 text-gray-600 pl-4">
                  Review your credit report for errors, improve your credit
                  score by paying down debt, and consider applying for a secured
                  card or becoming an authorized user.
                </div>
              </details>
            </div>
          </div>

          <div className="w-full max-w-3xl mt-8">
            <blockquote className="border-l-4 border-[#2E74B5] bg-gray-50 p-6 text-left">
              <h4 className="text-xl font-bold text-black mb-4">
                Smart Credit Card Usage Tips
              </h4>
              <ul className="space-y-2 text-gray-700 list-disc pl-5">
                <li>
                  Always pay your full balance before the due date to avoid
                  interest charges.
                </li>
                <li>
                  Keep your credit utilization below 30% of your limit to
                  maintain a good credit score.
                </li>
                <li>
                  Regularly review your statements to catch any unauthorized
                  charges.
                </li>
                <li>
                  Take advantage of specific card benefits like 0% intro periods
                  or cash back offers.
                </li>
                <li>
                  Never use your credit card for cash advances, as they
                  typically incur high fees and interest rates.
                </li>
              </ul>
            </blockquote>
          </div>

          <div className="w-full max-w-2xl mt-12 mb-8">
            <div className="bg-[#1e3a8a] text-white rounded-xl p-8 shadow-lg text-center relative overflow-hidden">
              <div className="relative w-48 h-32 mx-auto mb-4">
                <Image
                  src="https://media.topfinanzas.com/images/credit-card-varity.png"
                  alt="Credit Card Options"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div className="flex items-center justify-center space-x-2 mb-2">
                <span className="text-xl">🔔</span>
                <h3 className="text-lg font-bold uppercase text-yellow-400">
                  Exclusive Offer!
                </h3>
              </div>

              <h4 className="text-2xl font-bold uppercase mb-2">
                NO ANNUAL FEE FOR LIFE
              </h4>
              <p className="text-gray-200 mb-6 text-sm">
                No opening or maintenance fees, fast approval, and exclusive
                benefits
              </p>

              <Link
                href="/financial-solutions/benefits-capital-one-ventureone-rewards"
                className="inline-block w-full rounded-full bg-white hover:bg-gray-100 text-[#1e3a8a] font-bold px-8 py-3 text-lg transition-colors uppercase"
              >
                APPLY NOW
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
