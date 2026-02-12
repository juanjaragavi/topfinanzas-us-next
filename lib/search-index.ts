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
