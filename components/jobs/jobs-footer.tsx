"use client";

import Image from "next/image";

import { useTranslation } from "@/components/jobs/translation-provider";

export default function JobsFooter() {
  const t = useTranslation();

  return (
    <footer
      role="contentinfo"
      className="bg-gray-100 border-t border-gray-200 py-8 px-4 sm:px-6"
    >
      <div className="max-w-4xl mx-auto">
        {/* Logo + brand lockup */}
        <div className="flex items-center gap-3 mb-6">
          <Image
            src="https://media.topfinanzas.com/images/favicon.png"
            alt="TopFinanzas"
            width={32}
            height={32}
            className="rounded"
          />
          <span className="text-[#1D4ED8] font-semibold text-lg tracking-tight">
            {t("footer.brand", "Opportunities")}
          </span>
        </div>

        {/* Legal disclosure sections */}
        <div className="space-y-4 text-sm text-gray-600">
          {/* Legal Notice */}
          <div>
            <p className="font-bold text-gray-800 text-xs uppercase tracking-wide mb-1">
              {t("footer.legalNotice.title", "Legal Notice")}
            </p>
            <p>
              {t("footer.legalNotice.body", "Under no circumstances will we require you to pay to unlock any type of product, including job listings, credit cards, loans, or any other offer. If this occurs, please contact us immediately. Always read the terms and conditions of the service provider you are contacting. We earn revenue through advertising and when we recommend some of the products presented on this site. All publications are based on quantitative and qualitative research, and our team strives to be as fair as possible when comparing competing options.")}
            </p>
          </div>

          {/* Advertiser Disclosure */}
          <div>
            <p className="font-bold text-gray-800 text-xs uppercase tracking-wide mb-1">
              {t("footer.advertiserDisclosure.title", "Advertiser Disclosure")}
            </p>
            <p>
              {t("footer.advertiserDisclosure.body", "We are an independent, objective, advertising-supported content site. To support our ability to provide free content to our users, the recommendations that appear on our site may come from companies from which we receive affiliate compensation. This compensation may affect how, where, and in what order offers appear on our site. Other factors, such as our own proprietary algorithms and data collected, may also affect how and where products/offers are placed on this site. We do not include all financial or employment offers available.")}
            </p>
          </div>

          {/* Editorial Note */}
          <div>
            <p className="font-bold text-gray-800 text-xs uppercase tracking-wide mb-1">
              {t("footer.editorialNote.title", "Editorial Note")}
            </p>
            <p>
              {t("footer.editorialNote.body", "The compensation we receive from our affiliated partners does not influence the recommendations or advice that our editorial team provides in our articles, or otherwise affect any of the site content. While we work hard to provide accurate and up-to-date information that we believe our users will find relevant, we do not guarantee that all information provided is complete, and make no representations or warranties in connection thereto, nor as to the accuracy or applicability thereof.")}
            </p>
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-500 pt-2 border-t border-gray-200">
            {t("footer.copyright", "A TOP NETWORKS INC. Product | \u00A9 Copyright Top Networks Inc. 2025")}
          </p>
        </div>
      </div>
    </footer>
  );
}
