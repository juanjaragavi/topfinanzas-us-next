"use client";

import { createContext, useContext, useCallback, type ReactNode } from "react";

/**
 * Server-side pre-translated string map (key → translated string).
 * Populated in the jobs layout Server Component and passed here as a prop.
 */
type TranslationMap = Record<string, string>;

const TranslationContext = createContext<TranslationMap>({});

interface TranslationProviderProps {
  translations: TranslationMap;
  children: ReactNode;
}

/**
 * Wraps `/app/jobs/` layouts to provide pre-translated strings to all
 * child components via `useTranslation()`.
 */
export function TranslationProvider({
  translations,
  children,
}: TranslationProviderProps) {
  return (
    <TranslationContext.Provider value={translations}>
      {children}
    </TranslationContext.Provider>
  );
}

/**
 * Returns a lookup function `t(key)` that resolves a translation key to
 * its translated string. Falls back to the original English value when
 * a key is missing from the pre-translated map.
 */
export function useTranslation(): (key: string, fallback?: string) => string {
  const map = useContext(TranslationContext);

  return useCallback(
    (key: string, fallback?: string): string => {
      return map[key] ?? fallback ?? key;
    },
    [map],
  );
}
