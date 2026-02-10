"use client";

import Script from "next/script";
import { useEffect } from "react";
import { analyticsLogger } from "@/lib/logger";

const GTM_ID = "GTM-MR76NXR3"; // Default GTM ID

/**
 * Enhanced Google Tag Manager Script Component
 * - Integrates with UTM parameter tracking
 * - Coordinates with Google Ads conversion tracking
 * - Optimized loading strategy for Core Web Vitals
 */
export default function GoogleTagManager({ id = GTM_ID }: { id?: string }) {
  useEffect(() => {
    // Initialize additional GTM configuration after component mounts
    const initializeGTMExtras = () => {
      if (typeof window !== "undefined" && window.dataLayer) {
        window.dataLayer.push({
          event: "gtm_loaded",
          site_section: "us_topfinanzas",
          page_type: "general",
        });
        analyticsLogger.debug("GTM: Enhanced configuration loaded");
      } else {
        // Retry if dataLayer not ready yet
        setTimeout(initializeGTMExtras, 500);
      }
    };

    // Delay initialization to allow GTM script to load
    setTimeout(initializeGTMExtras, 2000);
  }, []);

  return (
    <>
      {/* Initialize dataLayer before GTM loads */}
      <Script
        id="gtm-datalayer-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            
            // Function to push UTM parameters to dataLayer
            function pushUTMToDataLayer() {
              if (typeof window !== 'undefined' && window.sessionStorage) {
                const utmData = {};
                const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
                
                utmParams.forEach(param => {
                  const value = sessionStorage.getItem(param);
                  if (value) {
                    utmData[param] = value;
                  }
                });
                
                if (Object.keys(utmData).length > 0) {
                  window.dataLayer.push({
                    event: 'utm_parameters_loaded',
                    ...utmData
                  });
                  analyticsLogger.debug('GTM: UTM parameters pushed to dataLayer', utmData);
                }
              }
            }
            
            // Push UTM data when available
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', pushUTMToDataLayer);
            } else {
              pushUTMToDataLayer();
            }
          `,
        }}
      />

      {/* Main GTM script */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${id}');`,
        }}
      />
    </>
  );
}
/**
 * Google Tag Manager noscript fallback
 * Enhanced with better accessibility and tracking
 */
export function GoogleTagManagerNoScript({ id = GTM_ID }: { id?: string }) {
  return (
    <noscript
      dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${id}"
height="0" width="0" style="display:none;visibility:hidden" title="Google Tag Manager"></iframe>`,
      }}
    />
  );
}

/**
 * Function to push custom events to GTM dataLayer
 * Use this from other components to track events
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
      value: value,
      currency: currency,
      timestamp: new Date().toISOString(),
    };

    // Include UTM data if available
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
