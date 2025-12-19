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
    id: "/personal-finance/best-personal-loans",
    href: "/personal-finance/best-personal-loans",
    title: "Best Personal Loans in the UK: Your Complete Guide",
    description:
      "Comprehensive guide to the UK's top personal loans, including rates, terms, and application requirements from leading lenders.",
    // image: "/path/to/image.jpg", // Add image later if available
  },
  {
    id: "/personal-finance/best-rewards-credit-cards",
    href: "/personal-finance/best-rewards-credit-cards",
    title: "Best Rewards Credit Cards in the UK (Updated)",
    description:
      "Discover the top rewards credit cards in the UK offering points, miles, and cashback for your spending habits.",
  },
  {
    id: "/personal-finance/cashback-credit-cards",
    href: "/personal-finance/cashback-credit-cards",
    title: "Top Cashback Credit Cards UK",
    description:
      "Find the best cashback credit cards in the UK. Compare offers and earn money back on your everyday purchases.",
  },
  {
    id: "/about-us",
    href: "/about-us",
    title: "About TopFinanzas UK",
    description:
      "Learn more about TopFinanzas UK, our mission, values, and the team dedicated to providing clear financial guidance.",
  },
  // Add more entries for other pages/posts here...
  // e.g., financial solutions, blog posts, etc.
];

// Function to potentially fetch/generate this index dynamically if needed later
export const getSearchIndex = (): SearchItem[] => {
  // For now, just returns the hardcoded index
  return searchIndex;
};
