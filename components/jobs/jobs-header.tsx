"use client";

import Image from "next/image";

import { useTranslation } from "@/components/jobs/translation-provider";

export default function JobsHeader() {
  const t = useTranslation();
  const brandLabel = t("header.brand", "Opportunities");

  return (
    <header
      role="banner"
      className="bg-white border-b border-gray-100 py-3 px-4 sm:px-6"
    >
      <div className="flex items-center gap-3">
        <Image
          src="https://media.topfinanzas.com/images/favicon.png"
          alt="TopFinanzas"
          width={32}
          height={32}
          className="rounded"
          priority
        />
        <span className="text-[#1D4ED8] font-semibold text-lg tracking-tight">
          {brandLabel}
        </span>
      </div>
    </header>
  );
}
