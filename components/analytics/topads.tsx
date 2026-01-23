"use client";

import { useEffect } from "react";
import Script from "next/script";
import { logger } from "@/lib/logger";

/**
 * TopAds Integration Component
 *
 * Loads the TopAds advertising script with proper configuration.
 * This component should be included in the root layout.
 *
 * @see /lib/documents/config.js for configuration options
 */
export default function TopAds() {
  useEffect(() => {
    // Mark when TopAds component mounts
    if (typeof window !== "undefined" && window.performance) {
      window.performance.mark("topads-mount");
      logger.info("[TopAds] Component mounted");
    }
  }, []);

  return (
    <>
      {/* Load TopAds configuration script */}
      <Script
        id="topads-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.topAds = window.topAds || {};

            topAds.config = {
<<<<<<< Updated upstream
                domain: 'TOPFIN_UK',
=======
                domain: 'TOPFIN_US',
>>>>>>> Stashed changes
                networkCode: '23062212598',
                lazyLoad: 'soft',
                pageSetting: {
                    exclude: [
                        '/terms',
                        '/privacy-policy',
                        '/cookie-policy',
                        '/about-us',
                        '/contact-us',
                        '/quiz'
                    ]
                },
                formats: {
                    interstitial: {
                        status: 'active',
                        exclude: [],
                    },
                    offerwall: {
                        status: 'active',
<<<<<<< Updated upstream
                        logoUrl: 'https://media.topfinanzas.com/images/logo-english.webp',
                        websiteName: 'TopFinanzas UK',
=======
                        logoUrl: 'https://media.topfinanzas.com/images/logo-white.webp',
                        websiteName: 'TopFinanzas US',
>>>>>>> Stashed changes
                        cooldown: '12',
                        exclude: [
                            '/invit-credit-card-rec-us'
                        ],
                    },
                }
            };

            (function () {
                var w = window.top, d = w.document, h = d.head || d.getElementsByTagName("head")[0];
                var s = d.createElement("script");
                s.src = "https://topads.topnetworks.co/topAds.min.js";
                s.type = "text/javascript";
                s.defer = true;
                s.async = true;
                s.setAttribute("data-cfasync", "false");
                h.appendChild(s);
            })();
          `,
        }}
        onLoad={() => {
          logger.info("[TopAds] Configuration loaded");
        }}
        onError={(e) => {
          logger.error("[TopAds] Configuration load error:", e);
        }}
      />
    </>
  );
}
