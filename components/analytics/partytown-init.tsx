"use client";

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
  return null;
}
