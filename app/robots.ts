import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/choose-the-perfect-card-for-you-1",
          "/campaign-quiz-credit-card-recomender",
          "/campaign-quiz-credit-card-recomender-short",
          "/credit-card-recommender-p1",
          "/invit-credit-card-rec-us", // original remains disallowed
          "/invit-credit-card-rec-us-2", // original remains disallowed
          "/weve-discovered-a-few-cards-for-you",
          "/jobs/",
          "/download-financial-guide",
        ],
        // New SEO-optimized routes are NOT in this disallow list —
        // they inherit the top-level "allow: /" rule
      },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "YouBot", allow: "/" },
      { userAgent: "cohere-ai", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
    ],
    sitemap: "https://us.topfinanzas.com/sitemap.xml",
  };
}
