export interface SearchItem {
  id: string; // Unique ID, can be the href
  title: string;
  description: string;
  href: string;
  image?: string; // Optional image URL
}

// Manually populate with some initial data based on project structure
// In a real application, this might be generated at build time
export const searchIndex: SearchItem[] = [
  {
    id: "/personal-finance/the-debt-detox-choosing-between-the-snowball-and-avalanche-payoff-methods",
    href: "/personal-finance/the-debt-detox-choosing-between-the-snowball-and-avalanche-payoff-methods",
    title:
      "The Debt Detox: Choosing Between the Snowball and Avalanche Payoff Methods | Top Finance US",
    description:
      "Choosing between debt snowball and debt avalanche comes down to behavior versus math. Compare both payoff methods and build a realistic debt plan.",
    image:
      "https://media.topfinanzas.com/images/the-debt-detox-choosing-between-the-snowball-and-avalanche-payoff-methods.webp",
  },
  {
    id: "/personal-finance/building-your-financial-safety-net-how-to-save-your-first-1000-stress-free",
    href: "/personal-finance/building-your-financial-safety-net-how-to-save-your-first-1000-stress-free",
    title:
      "Building Your Financial Safety Net: How to Save Your First $1,000 (Stress-Free) | Top Finance US",
    description:
      "Saving your first $1,000 emergency fund is the single most impactful financial move you can make. Here's a practical, stress-free plan to get there fast.",
    image:
      "https://media.topfinanzas.com/images/building-your-financial-safety-net-how-to-save-your-first-1000-stress-free.webp",
  },
  {
    id: "/personal-finance/the-30-day-spending-challenge-uncovering-your-hidden-money-habits",
    href: "/personal-finance/the-30-day-spending-challenge-uncovering-your-hidden-money-habits",
    title:
      "The 30-Day Spending Challenge: Uncovering Your Hidden Money Habits | Top Finance US",
    description:
      "Take the 30-day spending challenge and discover hidden money habits draining your budget with a practical framework for US households.",
    image:
      "https://media.topfinanzas.com/images/the-30-day-spending-challenge-uncovering-your-hidden-money-habits.webp",
  },
  {
    id: "/personal-finance/the-financial-integration-roadmap-a-step-by-step-guide-for-newlyweds-and-long-term-partners",
    href: "/personal-finance/the-financial-integration-roadmap-a-step-by-step-guide-for-newlyweds-and-long-term-partners",
    title: "The Financial Integration Roadmap | Top Finance US",
    description:
      "A step-by-step guide for newlyweds and long-term partners on merging finances, setting joint goals, and navigating shared expenses together.",
    image:
      "https://media.topfinanzas.com/images/financial-integration-roadmap-newlyweds-partners.webp",
  },
  {
    id: "/personal-finance/best-0-apr-balance-transfer-cards-a-guide-to-managing-debt",
    href: "/personal-finance/best-0-apr-balance-transfer-cards-a-guide-to-managing-debt",
    title: "Best 0% APR Balance Transfer Cards: A Guide to Managing Debt",
    description:
      "Comprehensive guide to the top 0% APR balance transfer credit cards in the US, including rates, terms, and how to use them to manage debt effectively.",
  },
  {
    id: "/personal-finance/what-are-the-best-secured-credit-cards-for-building-credit",
    href: "/personal-finance/what-are-the-best-secured-credit-cards-for-building-credit",
    title: "What Are the Best Secured Credit Cards for Building Credit?",
    description:
      "Discover the best secured credit cards in the US for building or rebuilding your credit score.",
  },
  {
    id: "/personal-finance/beat-inflation-with-your-cashback",
    href: "/personal-finance/beat-inflation-with-your-cashback",
    title: "Beat Inflation with Your Cashback",
    description:
      "Learn how to use cashback credit cards to offset the impact of inflation on your everyday spending.",
  },
  {
    id: "/about-us",
    href: "/about-us",
    title: "About TopFinanzas US",
    description:
      "Learn more about TopFinanzas US, our mission, values, and the team dedicated to providing clear financial guidance.",
  },
  // Add more entries for other pages/posts here...
  // e.g., financial solutions, blog posts, etc.
];

// Function to potentially fetch/generate this index dynamically if needed later
export const getSearchIndex = (): SearchItem[] => {
  // For now, just returns the hardcoded index
  return searchIndex;
};
