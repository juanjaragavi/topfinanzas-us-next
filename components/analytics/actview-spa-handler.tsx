"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { logger } from "@/lib/logger";

let lastSPAPathname: string | null = null;
const ACTVIEW_SCRIPT_URL = "https://scr.actview.net/ustopfinanzas.js";

export default function ActViewSPAHandler() {
  const pathname = usePathname();

  useEffect(() => {
    if (lastSPAPathname === null) {
      lastSPAPathname = pathname;
      return;
    }

    if (lastSPAPathname === pathname) {
      return;
    }

    lastSPAPathname = pathname;

    try {
      const existingScripts = document.querySelectorAll(
        `script[src="${ACTVIEW_SCRIPT_URL}"]`,
      );
      existingScripts.forEach((script) => script.remove());

      const script = document.createElement("script");
      script.src = ACTVIEW_SCRIPT_URL;
      script.type = "text/javascript";
      script.async = true;

      (document.head || document.getElementsByTagName("head")[0]).appendChild(
        script,
      );
      logger.info("[ActView] Re-injected external script for SPA navigation");
    } catch (error) {
      logger.error("[ActView] Failed to re-inject external script:", error);
    }
  }, [pathname]);

  return null;
}
