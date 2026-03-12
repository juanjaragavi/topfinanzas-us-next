import { createHash } from "crypto";

import { logger } from "@/lib/logger";

// ── In-memory translation cache (keyed by "{locale}:{sha256(text)}") ────────
const translationCache = new Map<string, string>();

// ── Singleton GCP client (stored on globalThis to survive HMR in dev) ───────
const _global = globalThis as typeof globalThis & {
  _translateClient?: InstanceType<
    typeof import("@google-cloud/translate").v3.TranslationServiceClient
  >;
};

async function getClient() {
  if (!_global._translateClient) {
    // Lazy-load @google-cloud/translate so gRPC is only imported when
    // translation is actually requested (non-English locale).
    const { TranslationServiceClient } = await import(
      "@google-cloud/translate"
    );
    // ADC (Application Default Credentials) picked up automatically from
    // `gcloud auth application-default login` locally and from the SA in prod.
    _global._translateClient = new TranslationServiceClient();
  }
  return _global._translateClient;
}

/**
 * Build a stable cache key for a given locale + text pair.
 */
function cacheKey(locale: string, text: string): string {
  const hash = createHash("sha256").update(text).digest("hex").slice(0, 16);
  return `${locale}:${hash}`;
}

/**
 * Parse the most-preferred BCP 47 locale from an `Accept-Language` header.
 *
 * Returns the two-letter primary language subtag (e.g. "pt", "es", "fr").
 * Falls back to `"en"` if the header is absent, empty, or unparseable.
 */
export function parseAcceptLanguage(header: string | null): string {
  if (!header) return "en";

  // Accept-Language values look like: "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7"
  // Split on commas, trim, then sort by quality factor descending.
  const locales = header
    .split(",")
    .map((part) => {
      const [tag, qPart] = part.trim().split(";");
      const q = qPart ? parseFloat(qPart.replace(/q\s*=\s*/, "")) : 1;
      return { tag: tag.trim(), q: Number.isFinite(q) ? q : 0 };
    })
    .sort((a, b) => b.q - a.q);

  if (locales.length === 0) return "en";

  // Extract the primary language subtag (before the first "-").
  const primary = locales[0].tag.split("-")[0].toLowerCase();
  return /^[a-z]{2,3}$/.test(primary) ? primary : "en";
}

/**
 * Translate an array of plain-text strings into `targetLocale` using the
 * GCP Cloud Translation API v3.
 *
 * - Returns original strings unchanged when `targetLocale === "en"`.
 * - Uses an in-memory cache to avoid duplicate API calls within the process.
 * - Degrades silently to the original English strings on any error.
 */
export async function translateText(
  texts: string[],
  targetLocale: string,
): Promise<string[]> {
  // Short-circuit: no translation needed for English.
  if (targetLocale === "en" || texts.length === 0) {
    return texts;
  }

  const projectId = process.env.GOOGLE_CLOUD_PROJECT;
  if (!projectId) {
    logger.warn("GOOGLE_CLOUD_PROJECT env var is missing — skipping translation");
    return texts;
  }

  // Separate texts that are already cached from those that need translation.
  const results: string[] = new Array(texts.length);
  const uncachedIndices: number[] = [];
  const uncachedTexts: string[] = [];

  for (let i = 0; i < texts.length; i++) {
    const key = cacheKey(targetLocale, texts[i]);
    const cached = translationCache.get(key);
    if (cached !== undefined) {
      results[i] = cached;
    } else {
      uncachedIndices.push(i);
      uncachedTexts.push(texts[i]);
    }
  }

  // If everything was cached, return immediately.
  if (uncachedTexts.length === 0) {
    return results;
  }

  try {
    const client = await getClient();
    const parent = `projects/${projectId}/locations/global`;

    // GCP API accepts batches up to 1024 segments. Chunk if necessary.
    const BATCH_SIZE = 1024;
    const translatedAll: string[] = [];

    for (let offset = 0; offset < uncachedTexts.length; offset += BATCH_SIZE) {
      const batch = uncachedTexts.slice(offset, offset + BATCH_SIZE);

      const [response] = await client.translateText({
        parent,
        contents: batch,
        mimeType: "text/plain",
        targetLanguageCode: targetLocale,
      });

      const translations = response.translations ?? [];
      for (const t of translations) {
        translatedAll.push(t.translatedText ?? "");
      }
    }

    // Populate results and cache.
    for (let j = 0; j < uncachedIndices.length; j++) {
      const translated = translatedAll[j] ?? texts[uncachedIndices[j]];
      const originalIdx = uncachedIndices[j];
      results[originalIdx] = translated;
      translationCache.set(
        cacheKey(targetLocale, texts[originalIdx]),
        translated,
      );
    }
  } catch (err: unknown) {
    // Degrade silently — fill in the original English text for any missing slots.
    logger.warn(
      "GCP Translation API call failed — falling back to English",
      { error: err instanceof Error ? err.message : String(err) },
    );
    for (const idx of uncachedIndices) {
      if (results[idx] === undefined) {
        results[idx] = texts[idx];
      }
    }
  }

  return results;
}
