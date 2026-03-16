"use client";

import { analyticsLogger } from "@/lib/logger";

function pushGoogleAdsDataLayerEvent(
  eventName: string,
  parameters: Record<string, unknown>,
) {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...parameters,
    });
  }
}

export default function GoogleAds() {
  return null;
}

/**
 * Function to track conversion events
 * Call this from other components when conversion events occur
 */
export function trackGoogleAdsConversion(
  conversionLabel: string,
  value?: number,
  currency = "USD",
) {
  pushGoogleAdsDataLayerEvent("google_ads_conversion_requested", {
    conversion_label: conversionLabel,
    value,
    currency,
  });
  analyticsLogger.debug(
    `Google Ads: Conversion requested - ${conversionLabel}`,
    {
      value,
      currency,
    },
  );
}

/**
 * Function to track custom events
 * Call this for tracking user interactions and custom events
 */
export function trackGoogleAdsEvent(
  eventName: string,
  parameters: Record<string, unknown> = {},
) {
  pushGoogleAdsDataLayerEvent("google_ads_event_requested", {
    google_ads_event_name: eventName,
    ...parameters,
  });
  analyticsLogger.debug(
    `Google Ads: Event requested - ${eventName}`,
    parameters,
  );
}
