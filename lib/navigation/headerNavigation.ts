/**
 * Navigation items for the header component
 * Localized for the US market
 * Easily modifiable by LLM agents to update site navigation
 */

export interface NavigationItem {
  text: string;
  href: string;
  isEmphasis?: boolean; // Optional flag for "Show more..."
}

export interface FeaturedArticle {
  title: string;
  href: string;
  image: string;
}

export interface CategoryDropdown {
  text: string;
  items: NavigationItem[];
  featuredArticles?: FeaturedArticle[];
}

export interface DropdownItem {
  text: string;
  items: NavigationItem[];
}

export interface MegaMenuColumn {
  title: string;
  items: NavigationItem[];
}

export interface MegaMenu {
  title: string;
  columns: MegaMenuColumn[];
  featuredPosts?: {
    title: string;
    posts: Array<{
      title: string;
      href: string;
      image: string;
      category: string;
      categoryHref: string;
    }>;
  };
}

// Helper function to clean titles (remove potential pipe and extra text)
const cleanTitle = (title: string): string => {
  return title.split("|")[0].split(":")[0].split(" - ")[0].trim();
};

export const headerNavigation = {
  /** Main navigation items - Matching WordPress US structure */
  mainNavItems: [
    {
      text: "LOANS",
      href: "/financial-solutions",
    },
    {
      text: "CREDIT CARDS",
      href: "/financial-solutions",
    },
  ],

  /** Categories mega menu - Matching WordPress US structure */
  categoryDropdown: {
    text: "CATEGORIES",
    items: [
      {
        text: "Personal Finance",
        href: "/personal-finance",
      },
      {
        text: "Financial Solutions",
        href: "/financial-solutions",
      },
      {
        text: "Student Finances",
        href: "/personal-finance",
      },
      {
        text: "Choose Your Card",
        href: "/choose-the-perfect-card-for-you-1",
      },
      {
        text: "Loans and Credits",
        href: "/financial-solutions",
      },
    ],
    featuredArticles: [
      {
        title: "What Are the Best Secured Credit Cards for Building Credit?",
        href: "/personal-finance/what-are-the-best-secured-credit-cards-for-building-credit",
        image:
          "https://media.topfinanzas.com/images/what-are-the-best-secured-credit-cards-for-building-credit.webp",
      },
      {
        title:
          "Flat-Rate vs. Bonus Categories: The Best Cashback Strategy for Black Friday",
        href: "/personal-finance/flat-rate-vs-bonus-categories-the-best-cashback-strategy-for-black-friday",
        image:
          "https://media.topfinanzas.com/images/flat-rate-vs-bonus-categories-the-best-cashback-strategy-for-black-friday.webp",
      },
      {
        title: "Why a 0% Intro APR Card Is Your Best Bet for Black Friday",
        href: "/personal-finance/why-a-0-intro-apr-card-is-your-best-bet-for-black-friday",
        image:
          "https://media.topfinanzas.com/images/why-a-0-intro-apr-card-is-your-best-bet-for-black-friday.webp",
      },
      {
        title: "Top Credit Cards to Maximize Your Black Friday Savings",
        href: "/personal-finance/top-credit-cards-to-maximize-your-black-friday-savings",
        image:
          "https://media.topfinanzas.com/images/top-credit-cards-to-maximize-your-black-friday-savings.webp",
      },
    ],
  },

  /** Blog megamenu - Updated with limited items and "Show more..." */
  blogMegaMenu: {
    title: "BLOG",
    columns: [
      // Column 1: Personal Finance Guides (Top 5 + Show more)
      {
        title: "Personal Finance",
        items: [
          {
            text: cleanTitle("Best 0% APR Balance Transfer Cards"),
            href: "/personal-finance/best-0-apr-balance-transfer-cards-a-guide-to-managing-debt",
          },
          {
            text: cleanTitle("Best Secured Credit Cards for Building Credit"),
            href: "/personal-finance/what-are-the-best-secured-credit-cards-for-building-credit",
          },
          {
            text: cleanTitle("Beat Inflation with Your Cashback"),
            href: "/personal-finance/beat-inflation-with-your-cashback",
          },
          {
            text: cleanTitle("Maximize Your FICO Score with Multiple Cards"),
            href: "/personal-finance/guide-how-to-use-multiple-credit-cards-to-maximize-your-fico-score",
          },
          {
            text: cleanTitle("Investing for Beginners"),
            href: "/personal-finance/investing-for-beginners-a-simple-guide-to-getting-started",
          },
          {
            text: "View more...",
            href: "/personal-finance",
            isEmphasis: true,
          }, // Link to category archive
        ],
      },
      // Column 2: Financial Solutions - Credit Cards (Top 5 + Show more)
      {
        title: "Cards",
        items: [
          {
            text: cleanTitle("Chase Sapphire Preferred"),
            href: "/financial-solutions/chase-sapphire-preferred-credit-card-benefits",
          },
          {
            text: cleanTitle("Capital One Venture X Rewards"),
            href: "/financial-solutions/capital-one-venture-x-rewards-credit-card-benefits",
          },
          {
            text: cleanTitle("Discover it Cash Back"),
            href: "/financial-solutions/benefits-of-the-discover-it-cash-back",
          },
          {
            text: cleanTitle("Wells Fargo Autograph"),
            href: "/financial-solutions/wells-fargo-autograph-card-benefits",
          },
          {
            text: cleanTitle("American Express Gold Card"),
            href: "/financial-solutions/benefits-of-the-american-express-gold-card",
          },
          {
            text: "View more...",
            href: "/financial-solutions",
            isEmphasis: true,
          }, // Link to category archive
        ],
      },
      // Column 3: Financial Solutions - Loans (Top 4 + Show more)
      {
        title: "Loans",
        items: [
          {
            text: cleanTitle("QuickBridge Business Loans"),
            href: "/financial-solutions/benefits-quickbridge-loans",
          },
          {
            text: cleanTitle("Bank of America Business Loans"),
            href: "/financial-solutions/bank-of-america-business-loans-benefits",
          },
          {
            text: cleanTitle("National Funding Loans"),
            href: "/financial-solutions/national-funding-benefits",
          },
          {
            text: cleanTitle("Fundbox Business Financing"),
            href: "/financial-solutions/smarter-financing-for-your-business-fundbox-benefits",
          },
          {
            text: "View more...",
            href: "/financial-solutions",
            isEmphasis: true,
          }, // Link to category archive
        ],
      },
    ],
    // Featured Posts Section - Remains the same
    featuredPosts: {
      title: "Featured Articles",
      posts: [
        {
          title: cleanTitle("Chase Sapphire Preferred Credit Card"),
          href: "/financial-solutions/chase-sapphire-preferred-credit-card-benefits",
          image:
            "https://media.topfinanzas.com/images/chase-sapphire-preferred-credit-card-benefits.webp",
          category: "Cards",
          categoryHref: "/financial-solutions",
        },
        {
          title: cleanTitle("Best 0% APR Balance Transfer Cards"),
          href: "/personal-finance/best-0-apr-balance-transfer-cards-a-guide-to-managing-debt",
          image:
            "https://media.topfinanzas.com/images/best-0-apr-balance-transfer-cards-a-guide-to-managing-debt.webp",
          category: "Personal Finance",
          categoryHref: "/personal-finance",
        },
        {
          title: cleanTitle("Capital One Venture X Rewards Card"),
          href: "/financial-solutions/capital-one-venture-x-rewards-credit-card-benefits",
          image:
            "https://media.topfinanzas.com/images/capital-one-venture-x-rewards-credit-card-benefits.webp",
          category: "Cards",
          categoryHref: "/financial-solutions",
        },
        {
          title: cleanTitle("QuickBridge Business Loans"),
          href: "/financial-solutions/benefits-quickbridge-loans",
          image:
            "https://media.topfinanzas.com/images/benefits-quickbridge-loans.webp",
          category: "Loans",
          categoryHref: "/financial-solutions",
        },
      ],
    },
  },
};
