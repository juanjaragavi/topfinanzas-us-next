import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import Image from "next/image";
import Link from "next/link";

export default function HowToAskForRaisePage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-category="personal-finance"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-3xl font-bold text-gray-800 mb-4 leading-8">
              How to Confidently Ask for a Raise (with Scripts and a Preparation
              Guide)
            </h1>
            {/* Placeholder `<div>` for the Ad Unit 'square01' - centered and responsive */}
            <div id="square01" data-topads data-topads-size="square"></div>

            <div className="my-8 text-left sm:text-left">
              <p className="text-left sm:text-left text-lg text-gray-800 mb-4 leading-6">
                Asking for a pay rise can feel awkward — even when you know you
                deserve it. Whether you've taken on new responsibilities,
                exceeded targets, or simply outgrown your current salary, the
                conversation doesn't have to be nerve-wracking. With the right
                preparation and a clear approach, you can present your case with
                confidence and professionalism. This guide walks you through
                exactly what to say, when to ask, and how to handle the
                response.
              </p>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://storage.googleapis.com/media-topfinanzas-com/images/uk/how-to-ask-for-a-raise.webp"
                  alt="Professional having a confident conversation with manager about salary increase"
                  width={800}
                  height={450}
                  className="w-full h-auto rounded-xl"
                  priority={false}
                  fetchPriority="high"
                  quality={85}
                  loading="eager"
                />
              </div>

              <section className="my-6">
                <h2 className="text-left sm:text-left text-xl font-bold text-gray-800 mb-4">
                  Why timing and preparation matter
                </h2>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  Most managers appreciate an advance request rather than a
                  surprise ambush. Schedule a meeting specifically for the
                  conversation — not during your annual review unless that's the
                  norm at your company. Aim for a time when budgets are being
                  set or after you've completed a significant project. Avoid
                  end-of-quarter pressure periods or immediately after
                  company-wide cost-cutting announcements.
                </p>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  Before the meeting, gather evidence of your contributions:
                  sales figures, completed projects, positive feedback from
                  clients or colleagues, and any extra duties you've taken on.
                  Focus on what you've delivered since your last pay adjustment,
                  not just how long you've been in the role.
                </p>
              </section>

              <section className="my-6">
                <h2 className="text-left sm:text-left text-xl font-bold text-gray-800 mb-4">
                  Research what you're worth
                </h2>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  UK salary benchmarks vary widely by region, sector, and
                  seniority. Use sites like Glassdoor, Reed, and Totaljobs to
                  see what similar roles pay in your area. If you're in London,
                  remember that salaries often include a weighting to reflect
                  higher living costs. Factor in your experience,
                  qualifications, and any specialist skills that add value.
                </p>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  Consider your total package too: pension contributions, annual
                  leave, flexible working, and training opportunities all have
                  financial value. If your employer can't stretch the base
                  salary, they may offer improvements in other areas that still
                  benefit your overall{" "}
                  <Link
                    href="/personal-finance/what-is-financial-health"
                    className="text-blue-600 hover:underline"
                  >
                    financial health
                  </Link>
                  .
                </p>
              </section>

              <section className="my-6">
                <h2 className="text-left sm:text-left text-xl font-bold text-gray-800 mb-4">
                  How to open the conversation
                </h2>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  Start with a clear, professional tone. Avoid apologising or
                  making it about personal expenses — keep the focus on your
                  value to the business. Here's a simple script to adapt:
                </p>
                <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4 rounded">
                  <p className="text-sm leading-6 font-light text-gray-800 italic">
                    "Thanks for taking the time to meet. I'd like to discuss my
                    current salary. Over the past [time period], I've taken on
                    [specific responsibilities], which has resulted in
                    [measurable outcomes]. Based on market research and the
                    level I'm operating at, I believe a salary of [amount or
                    range] reflects my contributions and is in line with
                    industry standards. I'd appreciate your thoughts on how we
                    can make that happen."
                  </p>
                </div>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  Keep it brief, factual, and confident. Pause after stating
                  your ask — don't rush to fill the silence. Let your manager
                  process and respond.
                </p>
              </section>

              <section className="my-6">
                <h2 className="text-left sm:text-left text-xl font-bold text-gray-800 mb-4">
                  What to do if they say yes (or no)
                </h2>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  If your manager agrees, confirm the details in writing: the
                  new amount, effective date, and any conditions attached.
                  Update your personal budget and review your{" "}
                  <Link
                    href="/personal-finance/setting-financial-goals"
                    className="text-blue-600 hover:underline"
                  >
                    financial goals
                  </Link>{" "}
                  to make sure the extra income works towards what matters to
                  you — whether that's clearing debt, building savings, or
                  improving your lifestyle.
                </p>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  If the answer is no, stay calm and ask why. It might be budget
                  constraints, timing, or performance expectations you weren't
                  aware of. Request a clear roadmap: what would need to change
                  for a pay rise to be considered in six months? Set a follow-up
                  date and document the discussion.
                </p>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  If you're repeatedly met with vague excuses and no action, it
                  may be time to quietly explore other opportunities. A
                  rejection today doesn't mean you're not valuable — it might
                  just mean your employer can't (or won't) meet your worth.
                  Building strong{" "}
                  <Link
                    href="/personal-finance/money-management-for-beginners"
                    className="text-blue-600 hover:underline"
                  >
                    money management habits
                  </Link>{" "}
                  now will give you the financial flexibility to make the best
                  move for your career.
                </p>
              </section>

              <section className="my-6">
                <h2 className="text-left sm:text-left text-xl font-bold text-gray-800 mb-2">
                  Preparation checklist before you ask
                </h2>
                <ul className="list-disc pl-6 mb-4 text-sm leading-6 font-light text-gray-800">
                  <li className="mb-2">
                    Research market salary ranges for your role and location
                  </li>
                  <li className="mb-2">
                    List specific achievements, projects, and measurable results
                  </li>
                  <li className="mb-2">
                    Note any expanded responsibilities or skills gained
                  </li>
                  <li className="mb-2">
                    Prepare your target figure and an acceptable range
                  </li>
                  <li className="mb-2">
                    Schedule a dedicated meeting — don't spring it on your
                    manager
                  </li>
                  <li className="mb-2">
                    Rehearse your opening statement until it feels natural
                  </li>
                  <li className="mb-2">
                    Plan your response to both "yes" and "not right now"
                  </li>
                </ul>
              </section>

              <section className="my-6">
                <h2 className="text-left sm:text-left text-xl font-bold text-gray-800 mb-4">
                  What comes next
                </h2>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  Whether you secure the pay rise or not, the experience builds
                  confidence for future negotiations. Document what worked, what
                  didn't, and any feedback you received. Keep updating your
                  evidence file so you're always ready for the next opportunity.
                </p>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  A successful salary conversation is just one part of building
                  long-term financial security. Stay on top of your personal
                  finances, track your progress, and make decisions that support
                  your goals — not just today's bills. You deserve to be paid
                  fairly for the value you bring, and approaching the
                  conversation with preparation and professionalism is the best
                  way to make that happen.
                </p>
              </section>
            </div>
          </div>
        </div>

        <AIContentDisclaimer />
      </article>

      <CompactFooter />
    </main>
  );
}
