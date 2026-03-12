"use client";

import { useTranslation } from "@/components/jobs/translation-provider";

/**
 * Translated copyright line used in chat and quiz sub-layouts.
 */
export default function JobsCopyright() {
  const t = useTranslation();
  const year = new Date().getFullYear();

  return (
    <p className="text-center text-xs text-gray-400 py-4">
      &copy; {year} {t("layout.copyright", "TopFinanzas. All rights reserved.")}
    </p>
  );
}
