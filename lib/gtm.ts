import { analyticsLogger } from "@/lib/logger";

/**
 * Function to push custom events to GTM dataLayer
 */
export function pushGTMEvent(
  eventName: string,
  eventData: Record<string, unknown> = {},
) {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...eventData,
    });
    analyticsLogger.debug(`GTM: Event pushed - ${eventName}`, eventData);
  }
}

/**
 * Function to push conversion events that coordinate with Google Ads
 */
export function pushGTMConversion(
  conversionName: string,
  value?: number,
  currency = "USD",
) {
  if (typeof window !== "undefined" && window.dataLayer) {
    const conversionData: Record<string, unknown> = {
      event: "conversion",
      conversion_name: conversionName,
      value,
      currency,
      timestamp: new Date().toISOString(),
    };

    const utmSource = sessionStorage.getItem("utm_source");
    const utmCampaign = sessionStorage.getItem("utm_campaign");
    if (utmSource) conversionData.utm_source = utmSource;
    if (utmCampaign) conversionData.utm_campaign = utmCampaign;

    window.dataLayer.push(conversionData);
    analyticsLogger.debug(
      `GTM: Conversion tracked - ${conversionName}`,
      conversionData,
    );
  }
}
