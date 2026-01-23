import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

<<<<<<< Updated upstream:app/invit-credit-card-rec-uk/page.tsx
export default function InvitCreditCardRecUKPage() {
  const [openFaq, setOpenFaq] = useState<string | null>("benefits");

  const toggleFaq = (id: string) => {
    if (openFaq === id) {
      setOpenFaq(null);
    } else {
      setOpenFaq(id);
    }
  };
=======
export const metadata: Metadata = {
  title: "We’ve discovered a few cards for you | Top Finanzas US",
  description:
    "We’ve discovered a few cards that unlock remarkable boundaries for you. Select the limit option that aligns with your daily requirements.",
};
>>>>>>> Stashed changes:app/invit-credit-card-rec-us/page.tsx

export default function CreditCardLandingPage() {
  return (
    <main className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
      <div className="flex flex-col items-center text-center space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#2E74B5]">
          We’ve discovered a few cards that unlock remarkable boundaries for
          you.
        </h1>

<<<<<<< Updated upstream:app/invit-credit-card-rec-uk/page.tsx
      <article className="text-left bg-white py-8 md:py-12 w-11/12 mx-auto">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center text-[#1A9C8F] font-bold text-lg md:text-2xl leading-6 md:leading-8 mb-4">
              We’ve discovered a few cards that unlock remarkable boundaries for
              you.
            </h2>

            <p className="px-2 text-left text-sm text-gray-900 mb-2">
              We sifted through the latest UK offers to match you with cards
              that keep everyday spending flexible while stacking meaningful
              rewards.
            </p>
=======
        <div className="space-y-2">
          <p className="text-gray-600">
            Please select the limit option below that aligns with your daily
            requirements:
          </p>
          <p className="text-sm text-gray-400 uppercase tracking-wide">
            By Top Finance
          </p>
        </div>

        <div className="bg-[#f0f7ff] p-6 rounded-lg w-full">
          <p className="text-gray-700 font-medium mb-6">
            We have the best credit cards for your selection. Choose the one
            that suits your needs.
          </p>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
             <Link href="/financial-solutions" className="inline-flex items-center justify-center rounded-full bg-[#1e40af] hover:bg-[#1e3a8a] text-white py-2.5 px-6 text-sm font-medium transition-colors w-full">
               $1000 CREDIT CARD
             </Link>
             <Link href="/financial-solutions" className="inline-flex items-center justify-center rounded-full bg-[#1e40af] hover:bg-[#1e3a8a] text-white py-2.5 px-6 text-sm font-medium transition-colors w-full">
               $2500 CREDIT CARD
             </Link>
             <Link href="/financial-solutions" className="inline-flex items-center justify-center rounded-full bg-[#1e40af] hover:bg-[#1e3a8a] text-white py-2.5 px-6 text-sm font-medium transition-colors w-full">
               $5000 CREDIT CARD
             </Link>
             <Link href="/financial-solutions" className="inline-flex items-center justify-center rounded-full border border-[#1e40af] text-[#1e40af] hover:bg-[#f0f7ff] py-2.5 px-6 text-sm font-medium transition-colors w-full">
               MORE OPTIONS
             </Link>
           </div>
        </div>
>>>>>>> Stashed changes:app/invit-credit-card-rec-us/page.tsx

        <div className="space-y-4 text-left w-full max-w-3xl">
          <h3 className="text-2xl font-semibold text-[#2E74B5]">Well Done</h3>
          <p className="text-gray-700 leading-relaxed">
            Your card is prepared for you. Select the limit option that suits
            you best and begin enjoying perks like 0% APR, cashback, points, and
            more. If none of these options fits your preferences, we have
            additional alternatives available for your consideration.
          </p>
        </div>

<<<<<<< Updated upstream:app/invit-credit-card-rec-uk/page.tsx
            <p className="px-2 text-left text-sm text-gray-900 mb-2">
              Please select the limit option below that aligns with your daily
              requirements:
            </p>
            <p className="text-center text-xs text-gray-800 mb-6">
              By Top Finance
            </p>

            {/* Centered limit options (green buttons), per US layout */}
            <div className="grid grid-cols-1 gap-3 my-4">
              <Link href="/financial-solutions/curve-credit-card">
                <Button className="bg-[#1A9C8F] hover:bg-[#168B7F] text-white font-semibold py-4 my-1 w-full mx-auto rounded-xl">
                  £1000 CREDIT CARD
                </Button>
              </Link>
              <Link href="/financial-solutions/santander-uk-credit-card">
                <Button className="bg-[#1A9C8F] hover:bg-[#168B7F] text-white font-semibold py-4 my-1 w-full mx-auto rounded-xl">
                  £2500 CREDIT CARD
                </Button>
              </Link>
              <Link href="/financial-solutions/starling-bank-credit-card">
                <Button className="bg-[#1A9C8F] hover:bg-[#168B7F] text-white font-semibold py-4 my-1 w-full mx-auto rounded-xl">
                  £5000 CREDIT CARD
                </Button>
              </Link>
              <Link href="/financial-solutions/natwest-credit-card">
                <Button className="bg-[#1A9C8F] hover:bg-[#168B7F] text-white font-semibold py-4 my-1 w-full mx-auto rounded-xl">
                  MORE OPTIONS
                </Button>
              </Link>
            </div>

            {/* Well Done info panel + accept CTA (matching US layout) */}
            <section className="text-left mb-6">
              <div className="bg-gray-50 border border-gray-200 rounded-md px-4 py-6 relative">
                <div
                  className="absolute left-0 top-0 h-full w-1 bg-[#1A9C8F] rounded-l-md"
                  aria-hidden="true"
                />
                <h3 className="text-[#1A9C8F] text-xl font-semibold mb-2">
                  Well Done
                </h3>
                <p className="text-left text-md text-gray-900">
                  Your card is prepared for you. Select the limit option that
                  suits you best and begin enjoying perks like 0% APR, cashback,
                  points, and more. If none of these options fits your
                  preferences, we have additional alternatives available for
                  your consideration.
                </p>
              </div>
              <div className="mt-6">
                <Link href="/financial-solutions/barclaycard-avios-plus">
                  <Button className="bg-[#1A9C8F] hover:bg-[#168B7F] text-white font-semibold py-4 my-1 w-full mx-auto rounded-xl">
                    ACCEPT RECOMMENDATION
                  </Button>
                </Link>
              </div>
            </section>

            <div className="mb-6 border rounded">
              {/* FAQ Item 1: Benefits */}
              <button
                type="button"
                className="flex justify-between items-center w-full p-4 text-left cursor-pointer border-b"
                onClick={() => toggleFaq("benefits")}
                aria-expanded={openFaq === "benefits"}
              >
                <h3
                  className={`font-medium text-lg leading-5 ${
                    openFaq === "benefits" ? "text-[#1A9C8F]" : "text-sky-600"
                  }`}
                >
                  What are the benefits of a card with no annual fee?
                </h3>
                <span
                  className={`text-xl transition-transform ${
                    openFaq === "benefits" ? "transform rotate-180" : "" // Changed to rotate for better icon indication
                  } ${
                    openFaq === "benefits" ? "text-[#1A9C8F]" : "text-sky-700"
                  }`}
                  aria-hidden="true" // Hide decorative icon from screen readers
                >
                  ▼ {/* Use a consistent down arrow, rotation handled by CSS */}
                </span>
              </button>
              {openFaq === "benefits" && (
                <div className="p-4 text-gray-900" id="faq-benefits-content">
                  <p className="text-left">
                    A card with no annual fee helps you save on recurring costs
                    while enjoying key benefits such as cashback or points for
                    purchases.
                  </p>
                </div>
              )}

              {/* FAQ Item 2: Cashback */}
              <button
                type="button"
                className="flex justify-between items-center w-full p-4 text-left cursor-pointer border-b"
                onClick={() => toggleFaq("cashback")}
                aria-expanded={openFaq === "cashback"}
              >
                <h3
                  className={`font-medium text-lg leading-5 ${
                    openFaq === "cashback" ? "text-[#1A9C8F]" : "text-sky-600"
                  }`}
                >
                  How does cashback work?
                </h3>
                <span
                  className={`text-xl transition-transform ${
                    openFaq === "cashback" ? "transform rotate-180" : ""
                  } ${
                    openFaq === "cashback" ? "text-[#1A9C8F]" : "text-sky-700"
                  }`}
                  aria-hidden="true"
                >
                  ▼
                </span>
              </button>
              {openFaq === "cashback" && (
                <div className="p-4 text-gray-900" id="faq-cashback-content">
                  <p className="text-left">
                    You receive a percentage of your purchases as cash that you
                    can use to reduce balances or spend as you prefer.
                  </p>
                </div>
              )}

              {/* FAQ Item 3: Travelers */}
              <button
                type="button"
                className="flex justify-between items-center w-full p-4 text-left cursor-pointer border-b"
                onClick={() => toggleFaq("travelers")}
                aria-expanded={openFaq === "travelers"}
              >
                <h3
                  className={`font-medium text-lg leading-5 ${
                    openFaq === "travelers" ? "text-[#1A9C8F]" : "text-sky-600"
                  }`}
                >
                  What's the best option for travellers?
                </h3>
                <span
                  className={`text-xl transition-transform ${
                    openFaq === "travelers" ? "transform rotate-180" : ""
                  } ${
                    openFaq === "travelers" ? "text-[#1A9C8F]" : "text-sky-700"
                  }`}
                  aria-hidden="true"
                >
                  ▼
                </span>
              </button>
              {openFaq === "travelers" && (
                <div className="p-4 text-gray-900" id="faq-travelers-content">
                  <p className="text-left">
                    Cards with air miles accumulation or access to VIP lounges
                    are ideal for frequent travellers, allowing you to save on
                    flights and enjoy exclusive benefits.
                  </p>
                </div>
              )}

              {/* FAQ Item 4: Online */}
              <button
                type="button"
                className="flex justify-between items-center w-full p-4 text-left cursor-pointer"
                onClick={() => toggleFaq("online")}
                aria-expanded={openFaq === "online"}
              >
                <h3
                  className={`font-medium text-lg leading-6 ${
                    openFaq === "online" ? "text-[#1A9C8F]" : "text-sky-600"
                  }`}
                >
                  Is it safe to use credit cards online?
                </h3>
                <span
                  className={`text-xl transition-transform ${
                    openFaq === "online" ? "transform rotate-180" : ""
                  } ${
                    openFaq === "online" ? "text-[#1A9C8F]" : "text-sky-700"
                  }`}
                  aria-hidden="true"
                >
                  ▼
                </span>
              </button>
              {openFaq === "online" && (
                <div className="p-4 text-gray-900" id="faq-online-content">
                  <p className="text-left">
                    Yes, many cards offer advanced technology such as dynamic
                    CVV and instant alerts to protect your transactions.
                  </p>
                </div>
              )}
            </div>

            {/* Stay Tuned panel (matching US layout copy, UK spelling) */}
            <section className="text-left mb-6">
              <div className="bg-gray-50 border border-gray-200 rounded-md p-4 relative">
                <div
                  className="absolute left-0 top-0 h-full w-1 bg-[#1A9C8F] rounded-l-md"
                  aria-hidden="true"
                />
                <h3 className="text-gray-800 font-semibold mb-2 mt-4">
                  Stay Tuned
                </h3>
                <p className="text-left text-sm text-gray-900 mb-4">
                  If you're looking for additional assistance in boosting your
                  credit score or optimising your credit card usage while
                  avoiding banks capitalising on your situation, please explore
                  the information below as well. We offer valuable resources
                  tailored to your specific needs.
                </p>
              </div>
            </section>

            {/* Bottom promotional banner (HTML markup as requested) */}
            <div className="my-8 text-left sm:text-left">
              <div className="mx-auto w-full md:w-8/12 border rounded-xl p-4 bg-white">
                <div className="flex flex-col items-center text-center space-y-3">
                  <Image
                    src="https://media.topfinanzas.com/images/credit-card-varity.png"
                    alt="UK Credit Cards"
                    width={640}
                    height={360}
                    className="w-56 h-auto"
                  />
                  <p className="text-[#B45309] text-sm font-semibold">
                    🔔 Limited offer!
                  </p>
                  <h4 className="text-gray-900 font-bold">
                    CARD WITH NO ANNUAL FEE
                  </h4>
                  <p className="text-gray-800 text-sm">
                    The most requested among our readers! Check it out today...
                  </p>
                  <Link
                    href="/financial-solutions/lloyds-bank-credit-card"
                    className="w-full"
                  >
                    <Button className="bg-[#E11D48] hover:bg-[#BE123C] text-white font-semibold py-2 w-full rounded-md">
                      SEE HOW TO APPLY
                    </Button>
                  </Link>
                </div>
              </div>
=======
        <div className="space-y-4 text-left w-full max-w-3xl">
          <h4 className="text-xl font-semibold text-gray-800">Stay Tuned</h4>
          <p className="text-gray-700 leading-relaxed">
            If you&apos;re looking for additional assistance in boosting your
            credit score or optimizing your credit card usage while avoiding
            banks capitalizing on your situation, please explore the information
            below as well. We offer valuable resources tailored to your specific
            needs.
          </p>
        </div>

        <div className="relative w-full max-w-3xl h-[300px] md:h-[400px] my-8">
          <Image
            src="https://media.topfinanzas.com/images/credit-card-varity.png"
            alt="Credit Card Variety"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="bg-white border-2 border-[#ff9900] rounded-xl p-8 w-full max-w-3xl shadow-lg">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🔔</span>
              <h3 className="text-xl font-bold text-[#ff9900] uppercase">
                Limited offer!
              </h3>
>>>>>>> Stashed changes:app/invit-credit-card-rec-us/page.tsx
            </div>
            <h4 className="text-2xl font-bold text-gray-900 uppercase">
              CARD WITH NO ANNUAL FEE
            </h4>
            <p className="text-gray-700">
              The most requested among our readers! Check it out today...
            </p>
            <Link
              href="/financial-solutions"
              className="inline-flex items-center justify-center rounded-full transition-colors bg-[#ff9900] hover:bg-[#e68a00] text-black font-bold px-8 py-3 text-lg"
            >
              SEE HOW TO APPLY
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
