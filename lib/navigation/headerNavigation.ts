/**
 * Navigation items for the header component
 * Localized for the UK market
 * Easily modifiable by LLM agents to update site navigation
 */

export interface NavigationItem {
  text: string;
  href: string;
  isEmphasis?: boolean; // Optional flag for "Show more..."
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
  /** Main navigation items */
  mainNavItems: [
    {
      text: "CARD FINDER",
      href: "/choose-the-perfect-card-for-you-1",
    },
    {
      text: "BLOG",
      href: "/blog",
    },
    {
      text: "ABOUT US",
      href: "/about-us",
    },
    {
      text: "CONTACT US",
      href: "/contact-us",
    },
  ],

  /** Categories dropdown */
  categoryDropdown: {
    text: "CATEGORIES",
    items: [
      {
        text: "Personal Finance", // TOFU category
        href: "/personal-finance",
      },
      {
        text: "Financial Solutions", // Main MOFU category
        href: "/financial-solutions",
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
            text: cleanTitle("Best Personal Loans"),
            href: "/personal-finance/best-personal-loans",
          },
          {
            text: cleanTitle("Rewards Credit Cards"),
            href: "/personal-finance/best-rewards-credit-cards",
          },
          {
            text: cleanTitle("Best Cashback Cards"),
            href: "/personal-finance/cashback-credit-cards",
          },
          {
            text: cleanTitle("Credit Cards: Types and Benefits"),
            href: "/personal-finance/credit-card-types-benefits",
          },
          {
            text: cleanTitle("Practical Guide to Getting Out of Debt"),
            href: "/personal-finance/getting-out-of-debt",
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
            text: cleanTitle("Barclaycard Avios Plus"),
            href: "/financial-solutions/barclaycard-avios-plus",
          },
          {
            text: cleanTitle("Curve Credit Card"),
            href: "/financial-solutions/curve-credit-card",
          },
          {
            text: cleanTitle("Halifax World Elite Mastercard"),
            href: "/financial-solutions/halifax-world-elite-mastercard",
          },
          {
            text: cleanTitle("Lloyds Bank Credit Card"),
            href: "/financial-solutions/lloyds-bank-credit-card",
          },
          {
            text: cleanTitle("Monzo Credit Card"),
            href: "/financial-solutions/monzo-credit-card",
          },
          {
            text: "View more...",
            href: "/financial-solutions",
            isEmphasis: true,
          }, // Link to category archive
        ],
      },
      // Column 3: Financial Solutions - Loans (Top 5 + Show more)
      {
        title: "Loans",
        items: [
          {
            text: cleanTitle("Barclays Personal Loan"),
            href: "/financial-solutions/barclays-personal-loan",
          },
          {
            text: cleanTitle("Capify Business Finance"),
            href: "/financial-solutions/capify-personal-loan",
          },
          {
            text: cleanTitle("Fleximize Business Loans"),
            href: "/financial-solutions/fleximize-personal-loan",
          },
          {
            text: cleanTitle("Funding Circle Business Loan"),
            href: "/financial-solutions/funding-circle-personal-loan",
          },
          {
            text: cleanTitle("Funding Options Marketplace"),
            href: "/financial-solutions/funding-options-personal-loan",
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
          title: cleanTitle("Best Personal Loans"),
          href: "/personal-finance/best-personal-loans",
          image:
            "https://media.topfinanzas.com/images/best-personal-loans.webp",
          category: "Personal Finance",
          categoryHref: "/personal-finance",
        },
        {
          title: cleanTitle("Practical Guide to Getting Out of Debt"),
          href: "/personal-finance/getting-out-of-debt",
          image:
            "https://media.topfinanzas.com/images/uk/Top_Finance_how_to_get_out_of_debt.webp",
          category: "Personal Finance",
          categoryHref: "/personal-finance",
        },
        {
          title: cleanTitle("Barclaycard Avios Plus Card"),
          href: "/financial-solutions/barclaycard-avios-plus",
          image:
            "https://media.topfinanzas.com/images/barclaycard-avios-plus.webp",
          category: "Cards",
          categoryHref: "/financial-solutions",
        },
        {
          title: cleanTitle("HSBC Personal Loan"),
          href: "/financial-solutions/hsbc-personal-loan",
          image:
            "https://media.topfinanzas.com/images/uk/loans/718135900-fotosprestamo1hsbc-uk.webp",
          category: "Loans",
          categoryHref: "/financial-solutions",
        },
      ],
    },
  },
};
