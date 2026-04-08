import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";

import JobsFaqAccordion, {
  type JobsFaqItem,
} from "@/components/jobs/jobs-faq-accordion";
import JobsDeferredAd from "@/components/jobs/jobs-deferred-ad";

export interface JobsContentSection {
  heading: string;
  level?: "h2" | "h3";
  paragraphs: string[];
  bullets?: string[];
  image?: { src: string; alt: string };
}

export interface RelatedArticle {
  title: string;
  href: string;
  description: string;
}

export interface JobsPromiseTemplateProps {
  themeColor: string;
  themeColorDark: string;
  badge: string;
  title: string;
  subtitle: string;
  heroImage?: { src: string; alt: string };
  sections: JobsContentSection[];
  faqItems: JobsFaqItem[];
  cta: { label: string; href: string };
  extraCtas?: { label: string; href: string }[];
  relatedArticles: RelatedArticle[];
  closingParagraph?: string;
  /** Hides the rewarded ad overlay */
  hideRewardedAd?: boolean;
  /** Whether to defer ad rendering until a quiz completes */
  deferAdsUntilUserInteraction?: boolean;
}

export default function JobsPromiseTemplate({
  themeColor,
  themeColorDark,
  badge,
  title,
  subtitle,
  heroImage,
  sections,
  faqItems,
  cta,
  extraCtas,
  relatedArticles,
  closingParagraph,
  hideRewardedAd = false,
  deferAdsUntilUserInteraction = false,
}: JobsPromiseTemplateProps) {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* ─── Ad Unit: Rewarded (full-screen overlay, highest-value) ─── */}
      {!hideRewardedAd && (
        <JobsDeferredAd
          type="rewarded"
          defer={deferAdsUntilUserInteraction}
          texts='{"title":"Find Your Next Job","description":"Discover the best job opportunities available near you","CTA":"See Available Jobs","disclaimer":"To continue, it will be necessary to watch an ad."}'
        />
      )}

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
            {/* ─── Ad Unit: square02 — Very top of content, before subtitle ─── */}
            <JobsDeferredAd
              type="square"
              id="square02"
              defer={deferAdsUntilUserInteraction}
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

            {/* CTA buttons — top (SeuJobs pattern: up to 4 CTAs at mid-page) */}
            <div className="mb-8 space-y-3">
              <Link
                href={cta.href}
                className="block w-full py-4 px-6 rounded-2xl text-white font-bold text-lg text-center transition-all duration-200 hover:opacity-90 shadow-3d border border-black/[.15] hover:shadow-3d-hover hover:translate-y-[1px] active:shadow-3d-active active:translate-y-[3px]"
                style={{ backgroundColor: themeColor }}
              >
                {cta.label} →
              </Link>
              {extraCtas?.map((ec, i) => (
                <Link
                  key={`extra-cta-${i}`}
                  href={ec.href}
                  className="block w-full py-3 px-6 rounded-2xl font-semibold text-center transition-all duration-200 hover:opacity-90 shadow-3d border-2 hover:shadow-3d-hover hover:translate-y-[1px] active:shadow-3d-active active:translate-y-[3px]"
                  style={{
                    color: themeColor,
                    borderColor: themeColor,
                    backgroundColor: `${themeColor}08`,
                  }}
                >
                  {ec.label} →
                </Link>
              ))}
            </div>

            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              Continue reading to discover the most effective and verified job
              search strategies available today.
            </p>

            {/* Content sections */}
            {sections.map((section, i) => {
              const HeadingTag = section.level === "h3" ? "h3" : "h2";
              const headingClass =
                section.level === "h3"
                  ? "text-xl font-semibold text-gray-800 mb-3"
                  : "text-2xl font-bold text-gray-800 mb-4";

              return (
                <Fragment key={`section-${i}`}>
                  <section className="mb-8">
                    <HeadingTag className={headingClass}>
                      {section.heading}
                    </HeadingTag>

                    {section.paragraphs.map((p, j) => (
                      <p
                        key={`p-${i}-${j}`}
                        className="text-gray-700 mb-4 leading-relaxed"
                      >
                        {p}
                      </p>
                    ))}

                    {section.bullets && section.bullets.length > 0 && (
                      <ul className="space-y-2 mb-4">
                        {section.bullets.map((bullet, k) => (
                          <li
                            key={`b-${i}-${k}`}
                            className="flex items-start gap-2"
                          >
                            <span
                              className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white mt-0.5"
                              style={{ backgroundColor: themeColor }}
                            >
                              ✓
                            </span>
                            <span className="text-gray-700 text-sm">
                              {bullet}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.image && (
                      <div className="my-6 rounded-xl overflow-hidden">
                        <Image
                          src={section.image.src}
                          alt={section.image.alt}
                          width={600}
                          height={400}
                          sizes="(max-width: 600px) 100vw, 600px"
                          className="w-full h-auto"
                        />
                      </div>
                    )}
                  </section>

                  {/* ─── Ad Unit: square03 — Between sections 1 and 2 ─── */}
                  {i === 1 && (
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      Discover more job opportunities and application tips from
                      our career experts below.
                    </p>
                  )}
                  {i === 1 && (
                    <JobsDeferredAd
                      type="square"
                      id="square03"
                      defer={deferAdsUntilUserInteraction}
                    />
                  )}
                </Fragment>
              );
            })}

            {/* FAQ Section */}
            {faqItems.length > 0 && (
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Frequently Asked Questions
                </h2>
                <JobsFaqAccordion
                  items={faqItems}
                  themeColor={themeColor}
                  defaultOpenId={faqItems[0]?.id}
                  deferAds={deferAdsUntilUserInteraction}
                />
              </section>
            )}

            {closingParagraph && (
              <p className="text-gray-700 mb-8 leading-relaxed">
                {closingParagraph}
              </p>
            )}

            {/* CTA button — bottom (large, SeuJobs pattern: lower page position) */}
            <div className="mb-8">
              <Link
                href={cta.href}
                className="block w-full py-5 px-6 rounded-2xl text-white font-bold text-xl text-center transition-all duration-200 hover:opacity-90 shadow-3d border border-black/[.15] hover:shadow-3d-hover hover:translate-y-[1px] active:shadow-3d-active active:translate-y-[3px]"
                style={{ backgroundColor: themeColor }}
              >
                {cta.label} →
              </Link>
            </div>

            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              Explore the related resources below for more tips on your job
              search and financial planning.
            </p>

            {/* ─── Ad Unit: square04 — Before related content ─── */}
            <JobsDeferredAd
              type="square"
              id="square04"
              defer={deferAdsUntilUserInteraction}
            />

            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              Check out these popular guides from our financial experts for more
              ways to save and earn.
            </p>

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
