import React from "react";
import { Metadata } from "next";
import ResponsiveImage from "@/components/ui/responsive-image";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Capital One Spark Cash Plus Requirements",
  description:
    "Power your business with unlimited cash back. Check credit score, business revenue, and entity requirements for the Spark Cash Plus.",
};

export default function CapitalOneSparkCashPlusRequirementsPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <h1 className="text-3xl text-left md:text-4xl font-bold text-gray-800 mb-8 leading-8">
              Capital One Spark Cash Plus Requirements
            </h1>

            {/* Ad Unit: square03 */}
            <div
              id="square03"
              className="w-full flex justify-center my-6"
              data-topads
              data-topads-size="square"
            ></div>

            {/* Intro */}
            <p className="text-left text-lg text-gray-800 font-medium mb-8 leading-5">
              Small business owners, meet your perfect financial ally. The
              Capital One Spark Cash Plus Card is designed to maximize your
              business&apos;s earning potential.
            </p>

            <p className="text-lg text-gray-700 mb-6">
              With unlimited 2% cash back on every purchase and no preset
              spending limit, this card offers the flexibility high-spending
              businesses need. However, as an exclusive charge card product, it
              comes with specific qualification criteria.
            </p>

            {/* Featured Image */}
            <div className="mb-8 w-full rounded-xl overflow-hidden shadow-sm">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/capital-one-spark-cash-plus-requirements.webp"
                alt="Capital One Spark Cash Plus Requirements"
                width={1200}
                height={675}
                priority
              />
            </div>

            <p className="text-lg text-gray-700 mb-6">
              Before applying, it is crucial to understand whether your business
              profile aligns with Capital One&apos;s requirements.
            </p>

            {/* Ad Unit: square04 (Placed after approx 3rd paragraph block) */}
            <div
              id="square04"
              className="w-full flex justify-center my-6"
              data-topads
              data-topads-size="square"
            ></div>

            {/* Banner 1 */}
            <div className="my-8 w-full rounded-xl overflow-hidden shadow-sm">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/banner-1-Top-Blog-Debt-management.webp"
                alt="Debt Management"
                width={1200}
                height={400}
              />
            </div>

            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Requirements
            </h2>
            <div className="space-y-2 my-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#005B34] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Strong personal and business credit score:
                  </span>{" "}
                  Capital One typically requires a good to excellent personal
                  credit score (above <span className="font-bold">700</span>) to
                  qualify for the Spark Cash Plus. Additionally, your business
                  creditworthiness may also be considered.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#005B34] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Established business with revenue:
                  </span>{" "}
                  This card is designed for small to medium-sized businesses
                  with a history of revenue generation. Startups with little or
                  no revenue may find it challenging to qualify.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#005B34] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Legal business entity:
                  </span>{" "}
                  Your business must be a registered entity, such as a sole
                  proprietorship, LLC, partnership, or corporation. You will
                  need to provide your Employer Identification Number (EIN) or
                  Social Security Number (SSN) if applying as a sole proprietor.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#005B34] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Ability to pay in full each month:
                  </span>{" "}
                  The Spark Cash Plus is a charge card, meaning it does not
                  allow you to carry a balance. Your business must be capable of
                  paying the full statement balance each month to avoid
                  penalties.
                </p>
              </div>
            </div>

            {/* Banner 2 */}
            <div className="my-8 w-full rounded-xl overflow-hidden shadow-sm">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/banner-2-Top-Blog-Personal-loans.webp"
                alt="Personal Loans"
                width={1200}
                height={400}
              />
            </div>

            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              How to apply for the Capital One Spark Cash Plus Card
            </h2>
            <div className="space-y-2 my-8">
              <p className="text-left text-gray-800 text-md leading-5">
                Applying for the Capital One Spark Cash Plus is a
                straightforward process that involves a few key steps:
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-[#005B34] mr-3 mt-1 flex-shrink-0 fill-current" />
                  <p className="text-left text-gray-800 text-md leading-5">
                    <span className="font-bold">
                      Gather Necessary Information:
                    </span>{" "}
                    You will need your legal business name and address, business
                    structure, EIN or SSN, and estimated annual revenue.
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-[#005B34] mr-3 mt-1 flex-shrink-0 fill-current" />
                  <p className="text-left text-gray-800 text-md leading-5">
                    <span className="font-bold">
                      Visit the Capital One Website:
                    </span>{" "}
                    Go to the official Capital One page for the Spark Cash Plus
                    card.
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-[#005B34] mr-3 mt-1 flex-shrink-0 fill-current" />
                  <p className="text-left text-gray-800 text-md leading-5">
                    <span className="font-bold">
                      Fill Out the Application Form:
                    </span>{" "}
                    Complete all required fields with accurate business and
                    personal financial information.
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-[#005B34] mr-3 mt-1 flex-shrink-0 fill-current" />
                  <p className="text-left text-gray-800 text-md leading-5">
                    <span className="font-bold">Submit Your Application:</span>{" "}
                    Review your details and submit for processing to receive
                    your decision.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Considerations before applying
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-left text-gray-800 mb-4 text-md leading-5 font-light">
              <li>The annual fee is $150.</li>
              <li>Late payments can result in penalties.</li>
              <li>
                This is a charge card, not a credit card (must pay in full each
                month).
              </li>
            </ul>

            {/* Banner 3 */}
            <div className="my-8 w-full rounded-xl overflow-hidden shadow-sm">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/banner-3-Top-Blog-Credit-Cards.webp"
                alt="Credit Cards"
                width={1200}
                height={400}
              />
            </div>

            <div className="text-left my-8">
              <a
                href="https://www.capitalone.com/small-business/credit-cards/spark-cash-plus/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#005B34] hover:bg-[#004729] text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform"
              >
                Apply Now at Capital One
              </a>
            </div>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
