import type { ReactNode } from "react";

import { TranslationProvider } from "@/components/jobs/translation-provider";
import { logger } from "@/lib/logger";
import { jobsStrings } from "@/lib/translation/jobs-strings";

export default async function JobsLayout({
  children,
}: {
  children: ReactNode;
}) {
  let translations: Record<string, string> = { ...jobsStrings };

  try {
    // Dynamic imports keep the heavy @google-cloud/translate (gRPC) out of the
    // module-evaluation path, preventing listener leaks during HMR in dev.
    const { headers } = await import("next/headers");
    const { parseAcceptLanguage, translateText } = await import(
      "@/lib/translation/translate"
    );

    const headersList = await headers();
    const acceptLanguage = headersList.get("accept-language");
    const locale = parseAcceptLanguage(acceptLanguage);

    if (locale !== "en") {
      const keys = Object.keys(jobsStrings);
      const values = Object.values(jobsStrings);
      const translated = await translateText(values, locale);

      const map: Record<string, string> = {};
      for (let i = 0; i < keys.length; i++) {
        map[keys[i]] = translated[i];
      }
      translations = map;
    }
  } catch (err: unknown) {
    logger.warn("Jobs layout translation failed — falling back to English", {
      error: err instanceof Error ? err.message : String(err),
    });
  }

  return (
    <TranslationProvider translations={translations}>
      {children}
    </TranslationProvider>
  );
}
