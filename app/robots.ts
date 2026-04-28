import { MetadataRoute } from "next";
import { SEO_SITE } from "@/lib/seo";

const disallowedRoutes = [
  "/api/",
  "/admin/",
  "/campaign-quiz-credit-card-recomender",
  "/campaign-quiz-credit-card-recomender-short",
  "/choose-the-perfect-card-for-you-1",
  "/credit-card-recommender-p1",
  "/credit-card-recommender-p2",
  "/download-financial-guide",
  "/finance-chat-intro",
  "/finance-quiz-recommender-p1",
  "/finance-quiz-recommender-p2",
  "/invit-credit-card-rec-us",
  "/invit-credit-card-rec-us-2",
  "/invit-credit-card-rec-us-3",
  "/invit-credit-card-rec-us-4",
  "/invit-credit-card-rec-us-5",
  "/jobs",
  "/weve-discovered-a-few-cards-for-you",
];

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
