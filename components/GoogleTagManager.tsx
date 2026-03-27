"use client";

import Script from "next/script";
import { useEffect } from "react";

export const GTM_ID = "GTM-5568TKCX";

export default function GoogleTagManager() {
  // Mark GTM script execution for performance monitoring
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.performance?.mark("gtm-start");
    }
  }, []);

  return (
    <>
      {/* Google Tag Manager - Script with lazyOnload strategy */}
      <Script
        id="gtm-script"
        strategy="lazyOnload" // Changed from afterInteractive to lazyOnload
        onLoad={() => {
          // Mark GTM script loaded for performance monitoring
          if (typeof window !== "undefined") {
            window.performance?.mark("gtm-loaded");
            window.performance?.measure(
              "gtm-execution",
              "gtm-start",
              "gtm-loaded",
            );
          }
        }}
        dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){
            // Create a promise to track when GTM is fully loaded
            w.gtmLoaded = new Promise((resolve) => {
              w[l]=w[l]||[];
              w[l].push({
                'gtm.start': new Date().getTime(),
                event:'gtm.js',
                'gtm.load': function() { resolve(true); }
              });
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            });
          })(window,document,'script','dataLayer','${GTM_ID}');
          `,
        }}
      />
    </>
  );
}

export function GoogleTagManagerNoScript() {
  return (
    <>
      {/* Google Tag Manager - NoScript */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
    </>
  );
}
