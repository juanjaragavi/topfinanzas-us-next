import Link from "next/link";
import Image from "next/image";

import JobMethodCard, {
  type JobMethodCardProps,
} from "@/components/jobs/jobs-method-card";
import JobsCtaBanner, {
  type JobsCtaBannerProps,
} from "@/components/jobs/jobs-cta-banner";
import type { RelatedArticle } from "@/components/layout/jobs-promise-template";

export interface JobsRewardTemplateProps {
  themeColor: string;
  themeColorDark: string;
  badge: string;
  title: string;
  subtitle: string;
  heroImage?: { src: string; alt: string };
  introParagraphs: string[];
  trustSignals?: string[];
  methods: JobMethodCardProps[];
  closingParagraphs?: string[];
  relatedArticles: RelatedArticle[];
  ctaBanner?: JobsCtaBannerProps;
  /** Optional back-link to the corresponding Promise page */
  backLink?: { label: string; href: string };
}

export default function JobsRewardTemplate({
  themeColor,
  themeColorDark,
  badge,
  title,
  subtitle,
  heroImage,
  introParagraphs,
  trustSignals,
  methods,
  closingParagraphs,
  relatedArticles,
  ctaBanner,
  backLink,
}: JobsRewardTemplateProps) {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Hero */}
      <section
        className="relative text-white py-12 md:py-16"
        style={{
          background: `linear-gradient(135deg, ${themeColor} 0%, ${themeColorDark} 100%)`,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div
              className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
              style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
            >
              {badge}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-white">
              {title}
            </h1>
          </div>
        </div>
      </section>

      {/* Main content */}
      <article className="py-4 md:py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* ─── Ad Unit: square02 — Top of content, before subtitle ─── */}
            <div
              id="square02"
              data-topads
              data-topads-size="square"
              className="items-center justify-center flex w-full my-8"
            />

            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              {subtitle}
            </p>

            {/* Hero image */}
            {heroImage && (
              <div className="mb-8 rounded-xl overflow-hidden">
                <Image
                  src={heroImage.src}
                  alt={heroImage.alt}
                  width={900}
                  height={507}
                  sizes="(max-width: 900px) 100vw, 900px"
                  className="w-full h-auto"
                  priority
                />
              </div>
            )}

            {/* Intro paragraphs */}
            {introParagraphs.map((p, i) => (
              <p
                key={`intro-${i}`}
                className="text-gray-700 mb-4 leading-relaxed"
              >
                {p}
              </p>
            ))}

            {/* Trust signals */}
            {trustSignals && trustSignals.length > 0 && (
              <div
                className="my-6 p-6 rounded-xl border-2"
                style={{
                  borderColor: themeColor,
                  backgroundColor: `${themeColor}08`,
                }}
              >
                <ul className="space-y-2">
                  {trustSignals.map((signal, i) => (
                    <li key={`ts-${i}`} className="flex items-start gap-2">
                      <span
                        className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white mt-0.5"
                        style={{ backgroundColor: themeColor }}
                      >
                        ✓
                      </span>
                      <span className="text-gray-800 font-medium text-sm">
                        {signal}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              Below are the top job search platforms and resources used by
              thousands of successful job seekers every day.
            </p>

            {/* Method cards — ad slot inserted after first half */}
            <div className="space-y-6 mb-8">
              {methods.map((method, i) => (
                <div key={`method-wrapper-${i}`}>
                  <JobMethodCard {...method} />

                  {/* ─── Ad Unit: square03 — After first half of method cards ─── */}
                  {i === Math.ceil(methods.length / 2) - 1 && (
                    <>
                      <div
                        id="square03"
                        data-topads
                        data-topads-size="square"
                        className="items-center justify-center flex w-full my-8"
                      />
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        Looking for the fastest way to land interviews? Check
                        out this verified recommendation from our career team.
                      </p>
                      {ctaBanner && <JobsCtaBanner {...ctaBanner} />}
                    </>
                  )}
                </div>
              ))}
            </div>

            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              Keep reading for additional tips on getting the most out of these
              job search platforms.
            </p>

            {/* Closing paragraphs */}
            {closingParagraphs &&
              closingParagraphs.map((p, i) => (
                <p
                  key={`close-${i}`}
                  className="text-gray-700 mb-4 leading-relaxed"
                >
                  {p}
                </p>
              ))}

            {/* ─── Ad Unit: square04 — Before related content ─── */}
            <div
              id="square04"
              data-topads
              data-topads-size="square"
              className="items-center justify-center flex w-full my-8"
            />

            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              Check out these popular guides from our financial experts for more
              ways to save and earn with your new income.
            </p>

            {/* Back-link to corresponding Promise page */}
            {backLink && (
              <div className="my-8">
                <Link
                  href={backLink.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                  style={{ color: themeColor }}
                >
                  ← {backLink.label}
                </Link>
              </div>
            )}

            {/* Related Financial Articles */}
            {relatedArticles.length > 0 && (
              <section className="mt-8 pt-8 border-t border-gray-200">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  You May Also Be Interested In
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {relatedArticles.map((article) => (
                    <Link
                      key={article.href}
                      href={article.href}
                      className="block p-4 rounded-xl border border-gray-200 hover:shadow-md transition-shadow"
                    >
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {article.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {article.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </article>
    </main>
  );
}
