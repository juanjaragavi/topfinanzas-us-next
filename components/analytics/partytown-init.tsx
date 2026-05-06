"use client";

import { Partytown } from "@builder.io/partytown/react";

/**
 * PartytownInit — Web Worker script offloader
 *
 * Moves third-party analytics and ad scripts into a web worker,
 * eliminating their main-thread execution and drastically reducing
 * Total Blocking Time (TBT).
 *
 * Forwarded APIs:
 * - dataLayer.push  → GTM/GA4 events from main thread reach the worker
 * - gtag            → Google Ads / GA4 gtag() calls forwarded
 * - fbq             → Facebook Pixel events
 * - clarity         → Microsoft Clarity events
 */
export default function PartytownInit() {
  return (
    <Partytown
      forward={[
        "dataLayer.push",
        "gtag",
        "fbq",
        "clarity",
        "gtm_loaded",
        "utm_parameters_loaded",
      ]}
      resolveUrl={(url, location, type) => {
        // Keep same-origin and image requests on main thread
        if (type === "image") {
          return url;
        }
        // Force worker execution for known ad / analytics origins
        const partytownHosts = [
          "googletagmanager.com",
          "google-analytics.com",
          "googleadservices.com",
          "doubleclick.net",
          "googlesyndication.com",
          "connect.facebook.net",
          "facebook.com",
          "scripts.clarity.ms",
          "ads.gamadx.com",
          "fundingchoicesmessages.google.com",
        ];
        if (partytownHosts.some((host) => url.hostname.includes(host))) {
          return url;
        }
        // Let Partytown decide for everything else
        return url;
      }}
    />
  );
}
