import { MetadataRoute } from "next";
import {
  absoluteUrl,
  getIndexableRoutes,
  parseDate,
  SEO_SITE,
} from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return getIndexableRoutes().map((route) => ({
    url:
      route.pathname === "/" ? SEO_SITE.baseUrl : absoluteUrl(route.pathname),
    lastModified: route.category === "static" ? now : parseDate(route.date),
    changeFrequency:
      route.category === "static" ? ("weekly" as const) : ("monthly" as const),
    priority:
      route.pathname === "/"
        ? 1.0
        : route.pathname === "/financial-solutions" ||
            route.pathname === "/personal-finance"
          ? 0.9
          : route.category === "financial-solutions"
            ? 0.8
            : route.category === "personal-finance"
              ? 0.7
              : 0.4,
  }));
}
