"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";

// Dynamic imports for non-critical analytics components to reduce initial JS payload
const UtmPersister = dynamic(
  () => import("@/components/analytics/utm-persister"),
  { ssr: false }
);
const UtmLinkInjector = dynamic(
  () => import("@/components/analytics/utm-link-injector"),
  { ssr: false }
);
const UtmMonitor = dynamic(
  () => import("@/components/analytics/utm-monitor"),
  { ssr: false }
);
const AdAccessibilityFix = dynamic(
  () => import("@/components/analytics/ad-accessibility-fix"),
  { ssr: false }
);
const AnalyticsValidationPanel = dynamic(
  () => import("@/components/analytics/validation-panel"),
  { ssr: false }
);
const TopAdsSPAHandler = dynamic(
  () => import("@/components/analytics/topads-spa-handler"),
  { ssr: false }
);

export default function AnalyticsWrapper() {
  return (
    <Suspense fallback={null}>
      <UtmPersister />
      <UtmLinkInjector />
      <AdAccessibilityFix />
      <TopAdsSPAHandler />
      {process.env.NODE_ENV === "development" && <UtmMonitor />}
      {process.env.NODE_ENV === "development" && <AnalyticsValidationPanel />}
    </Suspense>
  );
}
