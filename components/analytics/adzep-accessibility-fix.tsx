"use client";

import { useEffect } from "react";
import { analyticsLogger } from "@/lib/logger";

/**
 * AdZep Accessibility Fix
 *
 * Prevents ad scripts (AdZep, Google Ads Vignette, etc.) from setting
 * aria-hidden="true" on the <body> element, which blocks accessibility
 * for screen readers and triggers browser warnings.
 *
 * Chrome DevTools Error:
 * "Blocked aria-hidden on a <body> element because it would hide the entire
 * accessibility tree from assistive technology users."
 *
 * Source: :3030/#google_vignette (Google Ads Vignette interstitials)
 *
 * This component monitors the body element and removes the aria-hidden attribute
 * if any ad script tries to set it, ensuring the page remains accessible.
 */
export default function AdZepAccessibilityFix() {
  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") {
      return;
    }

    // Remove aria-hidden from body if it exists
    const removeAriaHidden = () => {
      if (document.body.hasAttribute("aria-hidden")) {
        document.body.removeAttribute("aria-hidden");

        if (process.env.NODE_ENV === "development") {
          analyticsLogger.info(
            "[AdZep Accessibility Fix] Removed aria-hidden from body element",
          );
        }
      }
    };

    // Initial check
    removeAriaHidden();

    // Watch for aria-hidden being added to body via MutationObserver
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "aria-hidden" &&
          mutation.target === document.body
        ) {
          removeAriaHidden();
        }
      });
    });

    // Observe body element for attribute changes
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["aria-hidden"],
    });

    // Also check periodically as a fallback (in case MutationObserver misses it)
    const intervalId = window.setInterval(removeAriaHidden, 1000);

    // Cleanup
    return () => {
      observer.disconnect();
      window.clearInterval(intervalId);
    };
  }, []);

  return null; // This component doesn't render anything
}
