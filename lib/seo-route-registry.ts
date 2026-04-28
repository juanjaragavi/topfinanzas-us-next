import {
  creditCardsContent,
  loansContent,
  type FinancialContent,
} from "@/lib/data/us-financial-products";

export type RouteCategory =
  | "static"
  | "financial-solutions"
  | "personal-finance";
export type RouteContentType =
  | "webpage"
  | "collection"
  | "article"
  | "credit-card"
  | "loan"
  | "financial-product";

export type RouteSeoEntry = {
  pathname: string;
  title: string;
  description: string;
  image: string;
  category: RouteCategory;
  contentType: RouteContentType;
  date?: string;
};

const defaultImage =
  "https://media.topfinanzas.com/images/placeholder-image.webp";

const staticRoutes: RouteSeoEntry[] = [
  {
    pathname: "/",
    title: "Top Finance US | Choose wisely, live fully",
    description:
      "Leading financial guide in the US. Expert advice on credit cards, loans, and personal finance.",
    image: defaultImage,
    category: "static",
    contentType: "webpage",
  },
  {
    pathname: "/about-us",
    title: "About TopFinanzas US",
    description:
      "Learn about TopFinanzas US and our mission to help US readers compare financial products and make informed money decisions.",
    image: defaultImage,
    category: "static",
    contentType: "webpage",
  },
  {
    pathname: "/blog",
    title: "TopFinanzas US Blog: Credit Cards, Loans & Personal Finance",
    description:
      "Explore US-focused articles on credit cards, loans, budgeting, debt management, rewards, and financial education.",
    image: defaultImage,
    category: "static",
    contentType: "collection",
  },
  {
    pathname: "/contact-us",
    title: "Contact TopFinanzas US",
    description:
      "Contact TopFinanzas US with questions about credit card guides, loan comparisons, personal finance, and editorial content.",
    image: defaultImage,
    category: "static",
    contentType: "webpage",
  },
  {
    pathname: "/cookie-policy",
    title: "Cookie Policy",
    description:
      "Read the TopFinanzas US cookie policy to understand how cookies support analytics, advertising, and site functionality.",
    image: defaultImage,
    category: "static",
    contentType: "webpage",
  },
  {
    pathname: "/financial-solutions",
    title: "US Financial Solutions: Credit Cards & Loans",
    description:
      "Compare US credit cards, personal loans, card requirements, product benefits, and financial solution guides from TopFinanzas US.",
    image: defaultImage,
    category: "static",
    contentType: "collection",
  },
  {
    pathname: "/personal-finance",
    title: "Personal Finance Guides",
    description:
      "Read US personal finance guides about budgeting, credit cards, debt, savings, investing, and everyday money decisions.",
    image: defaultImage,
    category: "static",
    contentType: "collection",
  },
  {
    pathname: "/privacy-policy",
    title: "Privacy Policy",
    description:
      "Read the TopFinanzas US privacy policy and learn how personal information is collected, used, and protected.",
    image: defaultImage,
    category: "static",
    contentType: "webpage",
  },
  {
    pathname: "/terms-conditions",
    title: "Terms and Conditions",
    description:
      "Review the terms and conditions for using TopFinanzas US financial education content and comparison guides.",
    image: defaultImage,
    category: "static",
    contentType: "webpage",
  },
];

const personalFinanceRoutes: RouteSeoEntry[] = [
  {
    pathname:
      "/personal-finance/yours-mine-or-ours-how-to-strategically-combine-finances-after-marriage-or-moving-in",
    title:
      "Yours, Mine, or Ours? How to Strategically Combine Finances After Marriage (or Moving In)",
    description:
      "Moving in with a partner or getting married is a huge, exciting step. But what about your finances? This guide will walk you through how to tackle this conversation.",
    image:
      "https://media.topfinanzas.com/images/yours-mine-or-ours-how-to-strategically-combine-finances-after-marriage-or-moving-in.webp",
    category: "personal-finance",
    contentType: "article",
    date: "September 17, 2025",
  },
  {
    pathname:
      "/personal-finance/good-debt-vs-bad-debt-how-to-tell-the-difference",
    title: "Good Debt vs. Bad Debt: How to Tell the Difference",
    description:
      "If you’re just starting your career, the word “debt” probably sounds like a four-letter word. Learn the difference between useful borrowing and debt that can hold you back.",
    image:
      "https://media.topfinanzas.com/images/good-debt-vs-bad-debt-how-to-tell-the-difference.webp",
    category: "personal-finance",
    contentType: "article",
    date: "September 3, 2025",
  },
  {
    pathname:
      "/personal-finance/good-debt-vs-bad-debt-how-to-tell-the-difference-2",
    title: "The Magic of Compound Interest: How Your Money Can Grow Over Time",
    description:
      "Understanding compound interest is one of the most powerful steps in a personal finance journey, turning small consistent savings into long-term wealth.",
    image:
      "https://media.topfinanzas.com/images/good-debt-vs-bad-debt-how-to-tell-the-difference-2.webp",
    category: "personal-finance",
    contentType: "article",
    date: "September 5, 2025",
  },
  {
    pathname:
      "/personal-finance/investing-for-beginners-a-simple-guide-to-getting-started",
    title: "Investing for Beginners: A Simple Guide to Getting Started",
    description:
      "This guide breaks down the basics of investing into simple, actionable steps for taking control of personal finance and building long-term wealth.",
    image:
      "https://media.topfinanzas.com/images/investing-for-beginners-a-simple-guide-to-getting-started.webp",
    category: "personal-finance",
    contentType: "article",
    date: "September 10, 2025",
  },
  {
    pathname:
      "/personal-finance/a-savvy-travelers-guide-using-credit-card-points-for-thanksgiving-travel",
    title:
      "A Savvy Traveler's Guide: Using Credit Card Points for Thanksgiving Travel",
    description:
      "Master your travel rewards to save on Thanksgiving travel. Learn how to use credit card points strategically to book flights, hotels, and more without breaking your holiday budget.",
    image:
      "https://media.topfinanzas.com/images/a-savvy-travelers-guide-using-credit-card-points-for-thanksgiving-travel.webp",
    category: "personal-finance",
    contentType: "article",
    date: "September 10, 2025",
  },
  {
    pathname: "/personal-finance/beat-inflation-with-your-cashback",
    title: "Beat Inflation with Your Cashback",
    description:
      "Learn how to use cashback rewards strategically to fight inflation and keep more money in your pocket. Discover smart strategies to maximize your rewards.",
    image:
      "https://media.topfinanzas.com/images/beat-inflation-with-your-cashback.webp",
    category: "personal-finance",
    contentType: "article",
    date: "October 31, 2025",
  },
  {
    pathname:
      "/personal-finance/best-0-apr-balance-transfer-cards-a-guide-to-managing-debt",
    title: "Best 0% APR Balance Transfer Cards: A Guide to Managing Debt",
    description:
      "Learn how 0% APR balance transfer cards can help you manage and pay off credit card debt. Understand the pros, cons, and key strategies for success.",
    image:
      "https://media.topfinanzas.com/images/best-0-apr-balance-transfer-cards-a-guide-to-managing-debt.webp",
    category: "personal-finance",
    contentType: "article",
    date: "October 31, 2025",
  },
  {
    pathname:
      "/personal-finance/flat-rate-vs-bonus-categories-the-best-cashback-strategy-for-black-friday",
    title:
      "Flat-Rate vs. Bonus Categories: The Best Cashback Strategy for Black Friday",
    description:
      "Learn the key differences between flat-rate and bonus category cashback cards to maximize your Black Friday savings. Discover which strategy works best for your shopping style.",
    image:
      "https://media.topfinanzas.com/images/flat-rate-vs-bonus-categories-the-best-cashback-strategy-for-black-friday.webp",
    category: "personal-finance",
    contentType: "article",
    date: "October 10, 2025",
  },
  {
    pathname:
      "/personal-finance/guide-how-to-use-multiple-credit-cards-to-maximize-your-fico-score",
    title:
      "Guide: How to Use Multiple Credit Cards to Maximize Your FICO Score",
    description:
      "Discover how to use multiple credit cards strategically to maximize your FICO score. Learn about credit utilization, payment history, and best practices for managing multiple cards.",
    image:
      "https://media.topfinanzas.com/images/guide-how-to-use-multiple-credit-cards-to-maximize-your-fico-score.webp",
    category: "personal-finance",
    contentType: "article",
    date: "September 12, 2025",
  },
  {
    pathname:
      "/personal-finance/top-credit-cards-to-maximize-your-black-friday-savings",
    title: "Top Credit Cards to Maximize Your Black Friday Savings",
    description:
      "Using the right plastic can help you earn significant cash back, provide crucial purchase protections, and even give you interest-free time to pay off your haul.",
    image:
      "https://media.topfinanzas.com/images/top-credit-cards-to-maximize-your-black-friday-savings.webp",
    category: "personal-finance",
    contentType: "article",
    date: "September 23, 2025",
  },
  {
    pathname:
      "/personal-finance/what-are-the-best-secured-credit-cards-for-building-credit",
    title: "What Are the Best Secured Credit Cards for Building Credit?",
    description:
      "Learn how to find the best secured credit cards for building credit from scratch or repairing damaged credit. Discover what to look for and how to use them wisely.",
    image:
      "https://media.topfinanzas.com/images/what-are-the-best-secured-credit-cards-for-building-credit.webp",
    category: "personal-finance",
    contentType: "article",
    date: "October 31, 2025",
  },
  {
    pathname:
      "/personal-finance/why-a-0-intro-apr-card-is-your-best-bet-for-black-friday",
    title: "Why a 0% Intro APR Card Is Your Best Bet for Black Friday",
    description:
      "Learn why a 0% intro APR credit card is the smart choice for financing big-ticket Black Friday purchases. Discover the benefits and how to use it responsibly.",
    image:
      "https://media.topfinanzas.com/images/why-a-0-intro-apr-card-is-your-best-bet-for-black-friday.webp",
    category: "personal-finance",
    contentType: "article",
    date: "October 8, 2025",
  },
];

function financialProductToRoute(content: FinancialContent): RouteSeoEntry {
  return {
    pathname: `/financial-solutions/${content.slug}`,
    title: content.title,
    description: content.description,
    image: content.image,
    category: "financial-solutions",
    contentType: content.category === "Loans" ? "loan" : "credit-card",
    date: content.date,
  };
}

const financialSolutionRoutes = [
  ...creditCardsContent.map(financialProductToRoute),
  ...loansContent.map(financialProductToRoute),
];

export const ROUTE_SEO_REGISTRY: Record<string, RouteSeoEntry> = [
  ...staticRoutes,
  ...financialSolutionRoutes,
  ...personalFinanceRoutes,
].reduce<Record<string, RouteSeoEntry>>((registry, route) => {
  registry[route.pathname] = route;
  return registry;
}, {});
