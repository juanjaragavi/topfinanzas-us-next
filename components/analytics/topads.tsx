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
 * Configuration based on TopAds Guide:
 * - domain: TOPFIN_US (ad unit prefix for US site)
 * - networkCode: Google Ad Manager network code
 * - lazyLoad: 'soft' (300% fetch margin, 150% render margin)
 * - pageSetting.exclude: Pages that should NOT display ads
 * - formats: Interstitial and Offerwall configurations
 *
 * @see /lib/documents/topAdsGuide.pdf for full configuration options
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
                domain: 'TOPFIN_US',
                networkCode: '23062212598',
                lazyLoad: 'soft',
                pageSetting: {
                    exclude: [
                        '/',
                        '/terms',
                        '/privacy-policy',
                        '/cookie-policy',
                        '/about-us',
                        '/contact-us',
                        '/quiz',
                        '/quiz-2',
                        '/campaign-quiz-credit-card-recommender',
                        '/campaign-quiz-credit-card-recommender-short'
                    ]
                },
                formats: {
                    interstitial: {
                        status: 'active',
                        exclude: [
                            '/credit-card-recommender-p3',
                            '/campaign-quiz-credit-card-recommender',
                            '/campaign-quiz-credit-card-recommender-short'
                        ],
                    },
                    offerwall: {
                        status: 'active',
                        logoUrl: 'https://media.topfinanzas.com/images/logo-white.webp',
                        websiteName: 'TopFinanzas US',
                        cooldown: '12',
                        exclude: [
                            '/credit-card-recommender-p1/',
                            '/credit-card-recommender-p2',
                            '/credit-card-recommender-p3',
                            '/invit-credit-card-rec-us',
                            '/invit-credit-card-rec-us-2',
                            '/campaign-quiz-credit-card-recommender',
                            '/campaign-quiz-credit-card-recommender-short'
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
