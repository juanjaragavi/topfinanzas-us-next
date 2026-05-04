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

export interface MegaMenuColumn {
  title: string;
  items: NavigationItem[];
}

export interface MegaMenu {
  columns: MegaMenuColumn[];
  featuredArticles?: FeaturedArticle[];
}

export interface MainNavItem {
  id: string;
  text: string;
  href: string;
  megaMenu: MegaMenu;
}

// Helper function to clean titles (remove potential pipe and extra text)
const cleanTitle = (title: string): string => {
  return title.split("|")[0].split(":")[0].split(" - ")[0].trim();
};

export const headerNavigation = {
  /** Main navigation items */
  mainNavItems: [
    {
      id: "financial-solutions",
      text: "Financial Solutions",
      href: "/financial-solutions",
      megaMenu: {
        columns: [
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
              },
            ],
          },
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
              },
            ],
          },
        ],
        featuredArticles: [
          {
            title:
              "What Are the Best Secured Credit Cards for Building Credit?",
            href: "/personal-finance/what-are-the-best-secured-credit-cards-for-building-credit",
            image:
              "https://media.topfinanzas.com/images/what-are-the-best-secured-credit-cards-for-building-credit.webp",
          },
          {
            title: "Top Credit Cards to Maximize Your Black Friday Savings",
            href: "/personal-finance/top-credit-cards-to-maximize-your-black-friday-savings",
            image:
              "https://media.topfinanzas.com/images/top-credit-cards-to-maximize-your-black-friday-savings.webp",
          },
        ],
      },
    },
    {
      id: "personal-finance",
      text: "Personal Finance",
      href: "/personal-finance",
      megaMenu: {
        columns: [
          {
            title: "Personal Finance Guides",
            items: [
              {
                text: cleanTitle("Best 0% APR Balance Transfer Cards"),
                href: "/personal-finance/best-0-apr-balance-transfer-cards-a-guide-to-managing-debt",
              },
              {
                text: cleanTitle("Beat Inflation with Your Cashback"),
                href: "/personal-finance/beat-inflation-with-your-cashback",
              },
              {
                text: cleanTitle(
                  "Maximize Your FICO Score with Multiple Cards",
                ),
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
              },
            ],
          },
        ],
        featuredArticles: [
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
        ],
      },
    },
  ],
};
