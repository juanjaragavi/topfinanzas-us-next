import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ResponsiveImage from "@/components/ui/responsive-image";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Wells Fargo Autograph Card Requirements",
  description:
    "The Wells Fargo Autograph Card offers versatile rewards for everyday spending. Understanding the qualifications is the first step.",
};

export default function RequirementsWellsFargoAutographPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <h1 className="text-3xl text-left md:text-4xl font-bold text-gray-800 mb-8 leading-8">
              Wells Fargo Autograph Card Requirements
            </h1>

            {/* Ad Unit: square03 */}
            <div
              id="square03"
              className="w-full flex justify-center my-6"
              data-topads
              data-topads-size="square"
            ></div>

            {/* Intro */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Qualifications for versatile rewards
            </h2>
            <p className="text-left text-lg text-gray-800 font-medium mb-8 leading-5">
              The Wells Fargo Autograph Card offers versatile rewards for
              everyday spending, making it a top choice for anyone seeking a
              balance of benefits and practicality. Understanding the
              qualifications and application process is the first step toward
              enjoying its perks.
            </p>

            {/* Ad Unit: square04 */}
            <div
              id="square04"
              className="w-full flex justify-center my-6"
              data-topads
              data-topads-size="square"
            ></div>

            {/* Requirements Section */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Requirements
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8 items-center">
              <div className="w-full h-full">
                <div className="bg-[#6C2156] rounded-lg overflow-hidden flex items-center justify-center p-8 h-full min-h-[300px]">
                  <p className="text-4xl font-bold text-white text-center tracking-tight leading-snug">
                    Wells Fargo <br /> Autograph Card
                  </p>
                </div>
              </div>
              <div className="w-full h-full">
                <div className="rounded-lg overflow-hidden h-full">
                  <ResponsiveImage
                    src="https://media.topfinanzas.com/images/wells-fargo-autograph-card-requirements.webp"
                    alt="Wells Fargo Autograph Card Requirements"
                    width={800}
                    height={600}
                    className="object-cover h-full w-full"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#6C2156] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Good credit score:
                  </span>{" "}
                  Typically 670 or higher.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#6C2156] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Proof of income:
                  </span>{" "}
                  Demonstrates your ability to manage payments responsibly.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#6C2156] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    U.S. citizenship or residency:
                  </span>{" "}
                  A valid Social Security Number and address are required.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="rounded-full bg-[#6C2156] p-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">Maximum age:</span>{" "}
                  Must be 18 years old or older.
                </p>
              </div>
            </div>

            {/* Banner 1 */}
            <div className="my-8 w-full rounded-xl overflow-hidden shadow-sm">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/banner-1-Top-Blog-Debt-management.webp"
                alt="Debt Management"
                width={1200}
                height={400}
              />
            </div>

            {/* Why the requirements matter */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Why the requirements matter
            </h2>

            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              Credit Score Standards
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              A credit score of 670 or higher signals responsible financial
              behavior, increasing your chances of approval and favorable terms.
            </p>

            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              Income Verification
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Proving steady income reassures lenders that you can meet your
              monthly payment obligations.
            </p>

            <h3 className="text-lg font-bold text-gray-800 mb-3 text-left">
              Identity and Residency Verification
            </h3>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              A valid Social Security Number and U.S. address are crucial for
              credit checks and preventing fraud.
            </p>

            {/* Banner 2 */}
            <div className="my-8 w-full rounded-xl overflow-hidden shadow-sm">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/banner-2-Top-Blog-Personal-loans.webp"
                alt="Personal Loans"
                width={1200}
                height={400}
              />
            </div>

            {/* Step-by-step application process */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Step-by-step application process
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="my-4">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Step 1: Gather Necessary Information
                </h3>
                <p className="text-left text-gray-800 text-md leading-5">
                  Have your SSN, proof of income, and identification documents
                  ready before you start.
                </p>
              </div>

              <div className="my-4">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Step 2: Complete the Application
                </h3>
                <p className="text-left text-gray-800 text-md leading-5">
                  Visit the Wells Fargo website to fill out the form with your
                  personal and financial details.
                </p>
              </div>

              <div className="my-4">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Step 3: Await Approval
                </h3>
                <p className="text-left text-gray-800 text-md leading-5">
                  Decisions are often instant, but in some cases, it may take
                  7–10 business days.
                </p>
              </div>
            </div>

            {/* Banner 3 */}
            <div className="my-8 w-full rounded-xl overflow-hidden shadow-sm">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/banner-3-Top-Blog-Credit-Cards.webp"
                alt="Credit Cards"
                width={1200}
                height={400}
              />
            </div>

            {/* Tips for Improving Approval Odds */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Tips for Improving Approval Odds
            </h2>

            <div className="space-y-2 my-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <CheckCircle className="h-6 w-6 text-[#6C2156]" />
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Check your credit report:
                  </span>{" "}
                  Look for errors and dispute them if necessary.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <CheckCircle className="h-6 w-6 text-[#6C2156]" />
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Pay down existing debt:
                  </span>{" "}
                  Lowering your credit utilization ratio can boost your score.
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <CheckCircle className="h-6 w-6 text-[#6C2156]" />
                </div>
                <p className="text-left text-gray-800 text-md leading-5">
                  <span className="font-bold text-gray-900">
                    Avoid multiple applications:
                  </span>{" "}
                  Applying for too many cards at once can negatively impact your
                  credit score.
                </p>
              </div>
            </div>

            {/* Benefits of prequalification */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Benefits of prequalification
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              Wells Fargo often offers a prequalification tool that allows you
              to gauge approval odds without impacting your credit score. Using
              this tool can save you from a hard inquiry if you're unsure about
              eligibility.
            </p>

            {/* Your best option */}
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
              Your best option
            </h2>
            <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
              The Wells Fargo Autograph Card combines flexibility and rewards,
              making it a strong contender for everyday use. By meeting the
              requirements and applying strategically, you can unlock its full
              potential.
            </p>

            {/* CTA */}
            <div className="flex flex-col items-center justify-center mb-8">
              <Link
                href="https://creditcards.wellsfargo.com/cards/autograph-visa-credit-card/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto"
              >
                <Button className="w-full md:w-auto px-8 py-2 text-md bg-[#6C2156] hover:bg-[#5a1b47] text-white font-medium rounded-full">
                  See on official site*
                </Button>
              </Link>
              <p className="text-sm text-gray-500 mt-3 text-center">
                *By clicking you will be redirected to an external site.
              </p>
            </div>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
