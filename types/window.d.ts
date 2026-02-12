import type {
  GoogletagNamespace,
  GoogletagSlot,
} from "@/components/analytics/gam";
import type AnalyticsValidator from "@/lib/analytics-validator";

export type DataLayerEntry = Record<string, unknown> | unknown[];

declare global {
  interface Window {
    analyticsValidator?: AnalyticsValidator;
    google_tag_manager?: Record<string, unknown>;
    dataLayer?: DataLayerEntry[];
    gtag?: (...args: unknown[]) => void;
    googletag?: GoogletagNamespace;
    gamSlots?: Record<string, GoogletagSlot>;
    defineGAMAdSlots?: () => void;
  }
}

export {};
