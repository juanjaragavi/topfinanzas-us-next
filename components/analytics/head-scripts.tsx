"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import PartytownInit from "./partytown-init";


export default function HeadScripts() {
  const pathname = usePathname();

  const normalizedPath =
    pathname && pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;

  const isActiveViewExcludedRoute =
    normalizedPath === "/" ||
    normalizedPath === "/about-us" ||
    normalizedPath === "/contact-us" ||
    normalizedPath === "/privacy-policy" ||
    normalizedPath === "/terms-conditions";

  return (
    <>
      <PartytownInit />
      {!isActiveViewExcludedRoute && (
        <>
          {/*<script
            dangerouslySetInnerHTML={{
              __html: `
                window.topAds = window.topAds || {};
                window.topAds.config = {
                  domain: "TOPFIN_US",
                  networkCode: "23062212598",
                  lazyLoad: "soft",
                  pageSetting: {
                    exclude: [
                      "/terms",
                      "/privacy-policy",
                      "/cookie-policy",
                      "/about-us",
                      "/contact-us",
                      "/quiz"
                    ]
                  },
                  formats: {
                    interstitial: {
                      status: "active",
                      exclude: []
                    },
                    offerwall: {
                      status: "active",
                      logoUrl: "https://media.topfinanzas.com/images/logo-english.webp",
                      websiteName: "TopFinanzas US",
                      cooldown: "12",
                      exclude: ["/invit-credit-card-rec-us"]
                    }
                  }
                };
                window.actviewAds = window.actviewAds || window.topAds;
                window.actviewAds.config = window.topAds.config;
              `,
            }}
          />*/}
          <link
            rel="preload"
            as="script"
            href="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
          />
          <script async src="https://scr.actview.net/ustopfinanzas.js"></script>
        </>
      )}
    </>
  );
}
