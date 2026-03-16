"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import { useTranslation } from "@/components/jobs/translation-provider";

const SESSION_DISMISS_KEY = "jobs_floating_cta_dismissed";

interface JobsFloatingCtaProps {
  headline?: string;
  ctaLabel?: string;
  ctaHref?: string;
  thumbnailSrc?: string;
  thumbnailAlt?: string;
}

export default function JobsFloatingCta({
  headline,
  ctaLabel,
  ctaHref = "/jobs/jobs-reward-p1",
  thumbnailSrc = "https://media.topfinanzas.com/images/jobs/jobs-hero.webp",
  thumbnailAlt,
}: JobsFloatingCtaProps) {
  const t = useTranslation();
  const resolvedHeadline =
    headline ?? t("floatingCta.headline", "Great benefits & flexibility!");
  const resolvedCtaLabel =
    ctaLabel ?? t("floatingCta.ctaLabel", "See Jobs Now \u2192");
  const resolvedAlt =
    thumbnailAlt ??
    t("floatingCta.thumbnailAlt", "Job opportunities at top US companies");
  const dismissLabel = t(
    "floatingCta.dismiss",
    "Dismiss job opportunities widget",
  );
  const redirectText = t(
    "floatingCta.redirect",
    "You will be redirected to another site",
  );
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Respect session-scoped dismissal
    if (sessionStorage.getItem(SESSION_DISMISS_KEY)) {
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount in case the page is already scrolled past 50%
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem(SESSION_DISMISS_KEY, "1");
  };

  if (!isVisible) return null;

  return (
    <div
      role="complementary"
      aria-label="Job opportunities quick-access widget"
      className="fixed bottom-4 right-4 z-50 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
    >
      {/* Dismiss button */}
      <button
        type="button"
        onClick={handleDismiss}
        aria-label={dismissLabel}
        className="absolute top-2 right-2 z-10 w-6 h-6 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 text-xs font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300"
      >
        ✕
      </button>

      {/* Thumbnail image */}
      <div className="relative w-full h-28 overflow-hidden">
        <Image
          src={thumbnailSrc}
          alt={resolvedAlt}
          fill
          className="object-cover"
          sizes="256px"
        />
      </div>

      {/* Text + CTA */}
      <div className="p-3 text-center">
        <p className="text-sm font-semibold text-gray-800 mb-2 leading-tight">
          {resolvedHeadline}
        </p>
        <a
          href={ctaHref}
          aria-label={resolvedCtaLabel}
          className="block w-full py-2 px-3 bg-[#1D4ED8] hover:bg-[#1E3A8A] text-white text-sm font-bold rounded-lg text-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] focus:ring-offset-2"
        >
          {resolvedCtaLabel}
        </a>
        <p className="text-xs text-gray-400 mt-1">{redirectText}</p>
      </div>
    </div>
  );
}
