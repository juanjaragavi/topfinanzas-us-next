"use client";

import Script from "next/script";
import { useEffect } from "react";
import { analyticsLogger } from "@/lib/logger";

const GAM_NETWORK_CODE = "21879825561";

type GoogletagSize = [number, number] | Array<[number, number]>;

interface GoogletagPubAdsService {
  enableSingleRequest: () => void;
  setTargeting: (key: string, value: string | string[]) => void;
  refresh: (slots?: GoogletagSlot[]) => void;
}

interface GoogletagSlot {
  addService: (service: GoogletagPubAdsService) => unknown;
}

interface GoogletagNamespace {
  cmd: Array<() => void>;
  pubads: () => GoogletagPubAdsService;
  enableServices: () => void;
  defineSlot: (
    adUnitPath: string,
    size: GoogletagSize,
    elementId: string,
  ) => GoogletagSlot;
  display: (id: string) => void;
}

export type { GoogletagNamespace, GoogletagSlot };

export default function GoogleAdManager() {
  useEffect(() => {
    // Initialize GAM after component mount
    if (typeof window !== "undefined") {
      // Define GPT command queue
      if (!window.googletag) {
        window.googletag = { cmd: [] } as unknown as GoogletagNamespace;
      } else if (!Array.isArray(window.googletag.cmd)) {
        window.googletag.cmd = [];
      }

      const googletag = window.googletag as unknown as GoogletagNamespace;

      analyticsLogger.debug(
        `GAM: Initializing Google Ad Manager with network code ${GAM_NETWORK_CODE}`,
      );

      // Wait for GPT script to load, then initialize
      const initializeGAM = () => {
        if (googletag && googletag.cmd) {
          googletag.cmd.push(() => {
            // Enable single request mode for better performance
            googletag.pubads().enableSingleRequest();

            // Enable services
            googletag.enableServices();

            // Set targeting based on UTM parameters if available
            const utmSource = sessionStorage.getItem("utm_source");
            const utmCampaign = sessionStorage.getItem("utm_campaign");
            const utmMedium = sessionStorage.getItem("utm_medium");

            if (utmSource) {
              googletag.pubads().setTargeting("utm_source", utmSource);
            }
            if (utmCampaign) {
              googletag.pubads().setTargeting("utm_campaign", utmCampaign);
            }
            if (utmMedium) {
              googletag.pubads().setTargeting("utm_medium", utmMedium);
            }

            // Set additional targeting for UK market
            googletag.pubads().setTargeting("country", "UK");
            googletag.pubads().setTargeting("language", "en");
            googletag.pubads().setTargeting("site", "topfinanzas_uk");

            analyticsLogger.debug(
              "GAM: Services enabled and targeting configured",
            );
          });
        } else {
          // Retry if script not loaded yet
          setTimeout(initializeGAM, 100);
        }
      };

      // Start initialization after a brief delay
      setTimeout(initializeGAM, 1000);
    }
  }, []);

  return (
    <>
      {/* Google Publisher Tag (GPT) library */}
      <Script
        id="gam-gpt"
        src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        strategy="afterInteractive"
        onLoad={() => {
          // Script has loaded, now it's safe to define ad slots
          if (typeof window !== "undefined" && window.defineGAMAdSlots) {
            window.defineGAMAdSlots();
          }
        }}
      />

      {/* GAM configuration script */}
      <Script
        id="gam-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.googletag = window.googletag || {cmd: []};
            
            // Define ad slots function
            window.defineGAMAdSlots = function() {
              // Check if GPT is fully loaded with proper methods
              if (!window.googletag || 
                  typeof window.googletag.defineSlot !== 'function' ||
                  typeof window.googletag.pubads !== 'function') {
                // Don't spam console, just wait silently
                return;
              }
              
              // Use the command queue to ensure execution happens after GPT is ready
              window.googletag.cmd.push(function() {
                try {
                  // Define common ad slots for UK TopFinanzas
                  
                  // Header banner slot
                  if (!window.gamSlots) window.gamSlots = {};
                  
                  if (!window.gamSlots.header) {
                    window.gamSlots.header = window.googletag.defineSlot(
                      '/${GAM_NETWORK_CODE}/uk_topfinanzas_header',
                      [[728, 90], [970, 90], [320, 50]],
                      'gam-header-ad'
                    ).addService(window.googletag.pubads());
                  }
                  
                  // Sidebar ad slot
                  if (!window.gamSlots.sidebar) {
                    window.gamSlots.sidebar = window.googletag.defineSlot(
                      '/${GAM_NETWORK_CODE}/uk_topfinanzas_sidebar',
                      [[300, 250], [336, 280], [300, 600]],
                      'gam-sidebar-ad'
                    ).addService(window.googletag.pubads());
                  }
                  
                  // Content ad slot
                  if (!window.gamSlots.content) {
                    window.gamSlots.content = window.googletag.defineSlot(
                      '/${GAM_NETWORK_CODE}/uk_topfinanzas_content',
                      [[728, 90], [300, 250], [336, 280]],
                      'gam-content-ad'
                    ).addService(window.googletag.pubads());
                  }
                  
                  // Footer ad slot
                  if (!window.gamSlots.footer) {
                    window.gamSlots.footer = window.googletag.defineSlot(
                      '/${GAM_NETWORK_CODE}/uk_topfinanzas_footer',
                      [[728, 90], [970, 90], [320, 50]],
                      'gam-footer-ad'
                    ).addService(window.googletag.pubads());
                  }
                  
                  analyticsLogger.debug('GAM: Ad slots defined for network ${GAM_NETWORK_CODE}');
                } catch (error) {
                  analyticsLogger.error('GAM: Error defining ad slots:', error);
                }
              });
            };
            
            // Don't execute immediately - wait for the script onLoad callback
            // which will call defineGAMAdSlots when GPT is ready
          `,
        }}
      />
    </>
  );
}

/**
 * GAM Ad Slot Component
 * Use this component to display ads in specific positions
 */
interface GAMAdSlotProps {
  slotId: string;
  sizes: Array<[number, number]>;
  className?: string;
  style?: React.CSSProperties;
}

export function GAMAdSlot({
  slotId,
  sizes,
  className = "",
  style = {},
}: GAMAdSlotProps) {
  useEffect(() => {
    if (typeof window !== "undefined" && window.googletag) {
      const googletag = window.googletag;
      googletag.cmd.push(() => {
        // Display the ad slot
        googletag.display(slotId);
        analyticsLogger.debug(`GAM: Displaying ad slot ${slotId}`);
      });
    }
  }, [slotId]);

  return (
    <div
      id={slotId}
      className={`gam-ad-slot ${className}`}
      style={{
        minHeight: sizes[0] ? `${sizes[0][1]}px` : "250px",
        minWidth: sizes[0] ? `${sizes[0][0]}px` : "300px",
        ...style,
      }}
      data-gam-slot={slotId}
    />
  );
}

/**
 * Function to refresh GAM ads
 * Call this when navigating between pages in SPA mode
 */
export function refreshGAMads(slotIds?: string[]) {
  if (typeof window !== "undefined" && window.googletag) {
    window.googletag.cmd.push(() => {
      const pubads = window.googletag?.pubads();
      if (!pubads) {
        return;
      }

      if (slotIds && slotIds.length > 0 && window.gamSlots) {
        // Refresh specific slots
        const slotsToRefresh = slotIds
          .map((id) => window.gamSlots?.[id])
          .filter((slot): slot is GoogletagSlot => Boolean(slot));

        if (slotsToRefresh.length > 0) {
          pubads.refresh(slotsToRefresh);
          analyticsLogger.debug("GAM: Refreshed specific ad slots", {
            slotIds,
          });
        }
      } else {
        // Refresh all slots
        pubads.refresh();
        analyticsLogger.debug("GAM: Refreshed all ad slots");
      }
    });
  }
}
