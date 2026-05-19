"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { analyticsLogger } from "@/lib/logger";

// Define the UTM parameters we want to track
const UTM_PARAM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
];

// Global state to track user interactions and prevent interference
let userIsInteracting = false;
let interactionTimeout: NodeJS.Timeout | null = null;

// Valid UTM sources for intelligent validation (from Astro.js proven implementation)
const VALID_UTM_SOURCES = [
  "google",
  "bing",
  "yahoo",
  "facebook",
  "instagram",
  "twitter",
  "linkedin",
  "youtube",
  "tiktok",
  "pinterest",
  "reddit",
  "quora",
  "organic",
  "direct",
  "email",
  "newsletter",
  "referral",
  "affiliate",
  "display",
  "video",
  "social",
  "search",
  "cpc",
  "cpm",
  "banner",
  "retargeting",
  "remarketing",
  "adwords",
];

const UTM_SOURCE_PATTERN = /^[a-z0-9._-]{1,100}$/i;

// Google Ads campaign pattern validation
const GOOGLE_ADS_CAMPAIGN_PATTERN = /^[a-zA-Z0-9_-]+$/;

/**
 * Validates UTM source parameter
 * Based on proven Astro.js implementation
 */
function validateUtmSource(source: string): boolean {
  if (!source || typeof source !== "string") return false;

  const normalizedSource = source.toLowerCase().trim();
  if (!normalizedSource) {
    return false;
  }

  if (VALID_UTM_SOURCES.includes(normalizedSource)) {
    return true;
  }

  if (UTM_SOURCE_PATTERN.test(normalizedSource)) {
    analyticsLogger.debug(
      `UTM Persister: Accepting dynamic utm_source value: ${normalizedSource}`,
    );
    return true;
  }

  analyticsLogger.warn(
    `UTM Persister: Rejected utm_source value due to invalid characters: ${source}`,
  );
  return false;
}

/**
 * Validates Google Ads campaign parameter
 * Based on proven Astro.js implementation
 */
function validateGoogleAdsCampaign(campaign: string): boolean {
  if (!campaign || typeof campaign !== "string") return false;

  return GOOGLE_ADS_CAMPAIGN_PATTERN.test(campaign);
}

/**
 * Gets relevant UTM parameters with validation
 * Based on proven Astro.js implementation
 */
function getRelevantUtmParams(
  searchParams: URLSearchParams,
): Record<string, string> {
  const relevantParams: Record<string, string> = {};

  UTM_PARAM_KEYS.forEach((param) => {
    const value = searchParams.get(param);
    if (value) {
      // Apply validation for utm_source
      if (param === "utm_source") {
        if (validateUtmSource(value)) {
          relevantParams[param] = value.toLowerCase().trim();
        } else {
          analyticsLogger.warn(
            `UTM Persister: Invalid utm_source value: ${value}`,
          );
        }
      }
      // Apply validation for utm_campaign when source is Google
      else if (param === "utm_campaign") {
        const source = searchParams.get("utm_source");
        if (source === "google" || source === "bing") {
          if (validateGoogleAdsCampaign(value)) {
            relevantParams[param] = value;
          } else {
            analyticsLogger.warn(
              `UTM Persister: Invalid Google Ads campaign format: ${value}`,
            );
          }
        } else {
          relevantParams[param] = value;
        }
      }
      // Store other UTM parameters as-is
      else {
        relevantParams[param] = value;
      }
    }
  });

  return relevantParams;
}

export default function UtmPersister() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const urlReplacementTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Set up global interaction listeners to prevent URL modifications during clicks
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleInteractionStart = () => {
      userIsInteracting = true;
      if (interactionTimeout) {
        clearTimeout(interactionTimeout);
      }
      // Keep the flag true for a short period after interaction
      interactionTimeout = setTimeout(() => {
        userIsInteracting = false;
      }, 500);
    };

    // Listen for various interaction events
    document.addEventListener("mousedown", handleInteractionStart, {
      passive: true,
    });
    document.addEventListener("touchstart", handleInteractionStart, {
      passive: true,
    });
    document.addEventListener("keydown", handleInteractionStart, {
      passive: true,
    });

    return () => {
      document.removeEventListener("mousedown", handleInteractionStart);
      document.removeEventListener("touchstart", handleInteractionStart);
      document.removeEventListener("keydown", handleInteractionStart);
      if (interactionTimeout) {
        clearTimeout(interactionTimeout);
      }
    };
  }, []);

  // Store UTM parameters in sessionStorage when they appear in the URL
  useEffect(() => {
    // Only run in the browser
    if (typeof window === "undefined") return;

    // Log for debugging
    analyticsLogger.debug("UTM Persister: Checking URL for UTM parameters");

    // Get validated UTM parameters
    const validatedParams = getRelevantUtmParams(searchParams);
    const hasValidUtmParams = Object.keys(validatedParams).length > 0;

    if (hasValidUtmParams) {
      analyticsLogger.debug(
        "UTM Persister: Found valid UTM parameters in URL, storing to sessionStorage",
      );

      // Save validated UTM parameters to sessionStorage
      Object.entries(validatedParams).forEach(([param, value]) => {
        analyticsLogger.debug(`UTM Persister: Storing ${param}=${value}`);
        sessionStorage.setItem(param, value);
      });

      // Also store campaign context for Google Ads attribution
      const source = validatedParams.utm_source;
      const campaign = validatedParams.utm_campaign;

      if (source === "google" && campaign) {
        sessionStorage.setItem("google_ads_campaign_context", "true");
        analyticsLogger.debug(
          "UTM Persister: Google Ads campaign context stored",
        );
      }

      // Push UTM params to GTM dataLayer
      if (typeof window !== "undefined" && window.dataLayer) {
        const utmData: Record<string, string> = {};
        Object.entries(validatedParams).forEach(([param, value]) => {
          utmData[param] = value;
        });
        window.dataLayer.push({
          event: "utm_parameters_loaded",
          ...utmData,
        });
        analyticsLogger.debug(
          "UTM Persister: UTM parameters pushed to GTM dataLayer",
        );
      }
    }
  }, [searchParams]);

  // Append stored UTM parameters to the URL on navigation if they are missing
  useEffect(() => {
    // Only run in the browser
    if (typeof window === "undefined") return;

    // Don't run on initial render or when URL already has UTM params
    const urlHasUtmParams = UTM_PARAM_KEYS.some((param) =>
      searchParams.has(param),
    );
    if (urlHasUtmParams) return;

    // Check if we have any stored UTM parameters
    let hasStoredUtmParams = false;
    const storedUtmParams: Record<string, string> = {};

    UTM_PARAM_KEYS.forEach((param) => {
      const storedValue = sessionStorage.getItem(param);
      if (storedValue !== null && storedValue !== "") {
        storedUtmParams[param] = storedValue;
        hasStoredUtmParams = true;
      }
    });

    // If we have stored UTM parameters, add them to the URL
    if (hasStoredUtmParams) {
      analyticsLogger.debug(
        "UTM Persister: Adding stored UTM parameters to URL",
      );

      const currentParams = new URLSearchParams(searchParams.toString());

      // Add stored UTM parameters to current URL params
      Object.entries(storedUtmParams).forEach(([param, value]) => {
        currentParams.set(param, value);
      });

      // Create new URL with UTM parameters
      const newUrl = `${pathname}${
        currentParams.toString() ? `?${currentParams.toString()}` : ""
      }`;

      // CRITICAL FIX: Defer URL replacement to avoid interfering with click handlers
      // Clear any existing timeout
      if (urlReplacementTimeoutRef.current) {
        clearTimeout(urlReplacementTimeoutRef.current);
      }

      // Use requestIdleCallback or setTimeout to ensure clicks are processed first
      urlReplacementTimeoutRef.current = setTimeout(() => {
        // CRITICAL: Only replace URL if user is NOT currently interacting
        if (!userIsInteracting && document.visibilityState === "visible") {
          // Use replace to avoid adding to browser history
          router.replace(newUrl, { scroll: false });
        } else if (userIsInteracting) {
          // If user is interacting, retry after the interaction completes
          analyticsLogger.debug(
            "UTM Persister: Deferring URL update due to user interaction",
          );
          urlReplacementTimeoutRef.current = setTimeout(() => {
            if (!userIsInteracting && document.visibilityState === "visible") {
              router.replace(newUrl, { scroll: false });
            }
          }, 600);
        }
      }, 150); // Increased delay to ensure click events complete
    }

    // Cleanup timeout on unmount or when dependencies change
    return () => {
      if (urlReplacementTimeoutRef.current) {
        clearTimeout(urlReplacementTimeoutRef.current);
        urlReplacementTimeoutRef.current = null;
      }
    };
  }, [pathname, searchParams, router]);

  return null; // This component doesn't render anything
}
