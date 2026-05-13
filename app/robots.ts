import { MetadataRoute } from "next";
import { SEO_SITE } from "@/lib/seo";

const disallowedRoutes = ["/api/", "/admin/", "/uncategorized/"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: disallowedRoutes,
      },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "Anthropic-AI", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "YouBot", allow: "/" },
      { userAgent: "cohere-ai", allow: "/" },
      { userAgent: "CCBot", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
    ],
    sitemap: `${SEO_SITE.baseUrl}/sitemap.xml`,
  };
}
