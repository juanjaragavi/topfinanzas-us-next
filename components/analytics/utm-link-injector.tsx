"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { analyticsLogger } from "@/lib/logger";

/**
 * UTM Link Injector
 *
 * This component ensures UTM parameters are passed to all internal links
 * throughout the user's session. It intercepts link clicks and appends
 * stored UTM parameters to the href before navigation occurs.
 *
 * This approach avoids modifying hrefs on render (which caused double-click issues)
 * and instead adds parameters at click-time, ensuring a seamless user journey.
 */

const UTM_PARAM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
];

export default function UtmLinkInjector() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    /**
     * Adds stored UTM parameters to a URL
     */
    const addUtmParamsToUrl = (href: string): string => {
      try {
        const url = new URL(href, window.location.origin);

        // Only process internal links (same origin)
        if (url.origin !== window.location.origin) {
          return href;
        }

        // Check if URL already has UTM parameters
        const hasUtmParams = UTM_PARAM_KEYS.some((param) =>
          url.searchParams.has(param),
        );

        // If URL already has UTM params, don't override them
        if (hasUtmParams) {
          return href;
        }

        // Get stored UTM parameters from sessionStorage
        let hasStoredParams = false;
        UTM_PARAM_KEYS.forEach((param) => {
          const storedValue = sessionStorage.getItem(param);
          if (storedValue !== null && storedValue !== "") {
            url.searchParams.set(param, storedValue);
            hasStoredParams = true;
          }
        });

        // Only return modified URL if we actually added parameters
        if (hasStoredParams) {
          return url.toString();
        }

        return href;
      } catch (error) {
        // If URL parsing fails, return original href
        analyticsLogger.warn(
          "UTM Link Injector: Error processing URL:",
          { href, error },
        );
        return href;
      }
    };

    /**
     * Handle link clicks and inject UTM parameters
     */
    const handleLinkClick = (event: MouseEvent) => {
      // Find the closest anchor element
      const target = event.target as HTMLElement;
      const link = target.closest("a");

      if (!link || !link.href) {
        return;
      }

      // Skip external links, javascript: links, mailto:, tel:, etc.
      if (
        link.href.startsWith("javascript:") ||
        link.href.startsWith("mailto:") ||
        link.href.startsWith("tel:") ||
        link.href.startsWith("#") ||
        link.target === "_blank"
      ) {
        return;
      }

      // Check if this is an internal link
      try {
        const linkUrl = new URL(link.href);
        const currentOrigin = window.location.origin;

        // Only process internal links
        if (linkUrl.origin !== currentOrigin) {
          return;
        }

        // Add UTM parameters to the href
        const modifiedHref = addUtmParamsToUrl(link.href);

        // Only update if the href actually changed
        if (modifiedHref !== link.href) {
          // Update the href before the navigation happens
          link.href = modifiedHref;

          if (process.env.NODE_ENV === "development") {
            analyticsLogger.debug(
              "UTM Link Injector: Added UTM params to link",
              {
                original: link.href,
                modified: modifiedHref,
              },
            );
          }
        }
      } catch {
        // Skip if URL parsing fails
        return;
      }
    };

    // Add click event listener with capture phase to ensure we catch it early
    document.addEventListener("click", handleLinkClick, {
      capture: true,
      passive: true,
    });

    // Log when the injector is active (development only)
    if (process.env.NODE_ENV === "development") {
      const storedParams = UTM_PARAM_KEYS.filter(
        (param) => sessionStorage.getItem(param) !== null,
      );
      if (storedParams.length > 0) {
        analyticsLogger.debug(
          "UTM Link Injector: Active with params:",
          { params: storedParams.join(", ") },
        );
      }
    }

    return () => {
      document.removeEventListener("click", handleLinkClick, {
        capture: true,
      } as EventListenerOptions);
    };
  }, [pathname]); // Re-run when pathname changes to ensure fresh state

  return null; // This component doesn't render anything
}
