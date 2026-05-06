"use client";

import React from "react";

/**
 * ResourceHints component that adds preconnect and dns-prefetch
 * directives to improve performance for third-party resources.
 *
 * This helps establish early connections to external domains
 * that will be used later in the page load process.
 */
export default function ResourceHints() {
  return (
    <>
      {/* Add preconnect for Google Tag Manager - highest priority */}
      <link
        rel="preconnect"
        href="https://www.googletagmanager.com"
        crossOrigin="anonymous"
      />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

      {/* Add preconnect for CDN/media domains - high priority */}
      <link
        rel="preconnect"
        href="https://media.topfinanzas.com"
        crossOrigin="anonymous"
      />
      <link rel="dns-prefetch" href="https://media.topfinanzas.com" />

      {/* Add preconnect for potential Google services (analytics, fonts) - medium priority */}
      <link
        rel="preconnect"
        href="https://www.google-analytics.com"
        crossOrigin="anonymous"
      />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />

      {/* Add preconnect for potential social media embeds - lower priority */}
      <link
        rel="preconnect"
        href="https://platform.twitter.com"
        crossOrigin="anonymous"
      />
      <link rel="dns-prefetch" href="https://platform.twitter.com" />

      <link
        rel="preconnect"
        href="https://connect.facebook.net"
        crossOrigin="anonymous"
      />
      <link rel="dns-prefetch" href="https://connect.facebook.net" />

      <link rel="preconnect" href="https://scr.actview.net" />
      <link rel="dns-prefetch" href="https://scr.actview.net" />
    </>
  );
}
