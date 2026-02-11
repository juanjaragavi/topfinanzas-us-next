"use client";

import Script from "next/script";
import { analyticsLogger } from "@/lib/logger";

const GOOGLE_ADS_ID = "AW-17359006951";

export default function GoogleAds() {
  return (
    <>
      {/* Google Ads gtag library */}
      <Script
        id="google-ads-gtag"
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
        strategy="afterInteractive"
      />

      {/* Google Ads configuration and initialization */}
      <Script
        id="google-ads-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // Configure Google Ads with enhanced conversions
            gtag('config', '${GOOGLE_ADS_ID}', {
              send_page_view: false,
              allow_enhanced_conversions: true
            });
            
            // Configure conversion tracking
            gtag('config', '${GOOGLE_ADS_ID}', {
              allow_enhanced_conversions: true,
              enhanced_conversions: true
            });
            
            // Function to send page view with UTM data if available
            function sendGoogleAdsPageView() {
              if (typeof window !== 'undefined' && window.sessionStorage) {
                const utmSource = sessionStorage.getItem('utm_source');
                const utmCampaign = sessionStorage.getItem('utm_campaign');
                const utmMedium = sessionStorage.getItem('utm_medium');
                const utmTerm = sessionStorage.getItem('utm_term');
                const utmContent = sessionStorage.getItem('utm_content');
                
                const eventData = {
                  page_title: document.title,
                  page_location: window.location.href
                };
                
                // Add UTM parameters if available
                if (utmSource) eventData.campaign_source = utmSource;
                if (utmCampaign) eventData.campaign_name = utmCampaign;
                if (utmMedium) eventData.campaign_medium = utmMedium;
                if (utmTerm) eventData.campaign_term = utmTerm;
                if (utmContent) eventData.campaign_content = utmContent;
                
                // Send page view event to Google Ads
                gtag('event', 'page_view', eventData);
                
                // If this is a Google Ads campaign, send additional tracking
                if (utmSource === 'google' && utmCampaign) {
                  gtag('event', 'google_ads_page_view', {
                    campaign_name: utmCampaign,
                    campaign_source: utmSource,
                    campaign_medium: utmMedium || 'cpc',
                    value: 1,
                    currency: 'USD'
                  });
                  console.debug('[Analytics] Google Ads: Enhanced page view with campaign data sent');
                }
              } else {
                // Fallback page view without UTM data
                gtag('event', 'page_view', {
                  page_title: document.title,
                  page_location: window.location.href
                });
              }
            }
            
            // Send initial page view
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', sendGoogleAdsPageView);
            } else {
              sendGoogleAdsPageView();
            }
            
            // Make gtag available globally for conversion tracking
            window.gtag = gtag;
            
            console.debug('[Analytics] Google Ads: Configuration loaded for ${GOOGLE_ADS_ID}');
          `,
        }}
      />
    </>
  );
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
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: `${GOOGLE_ADS_ID}/${conversionLabel}`,
      value: value,
      currency: currency,
    });
    analyticsLogger.debug(
      `Google Ads: Conversion tracked - ${conversionLabel}`,
      {
        value,
        currency,
      },
    );
  }
}

/**
 * Function to track custom events
 * Call this for tracking user interactions and custom events
 */
export function trackGoogleAdsEvent(
  eventName: string,
  parameters: Record<string, unknown> = {},
) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, {
      ...parameters,
      send_to: GOOGLE_ADS_ID,
    });
    analyticsLogger.debug(
      `Google Ads: Event tracked - ${eventName}`,
      parameters,
    );
  }
}
