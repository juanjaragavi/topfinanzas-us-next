/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://us.topfinanzas.com",
  generateRobotsTxt: true,
  exclude: [
    "/api/*",
    "/choose-the-perfect-card-for-you-1",
    "/campaign-quiz-*",
    "/invit-credit-card-rec-us*",
    "/jobs/*",
  ],
  robotsTxtOptions: {
    additionalPolicies: [
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
    ],
  },
};
