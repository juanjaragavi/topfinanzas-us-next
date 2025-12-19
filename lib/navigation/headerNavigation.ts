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
        text: "Financial Solutions", // Main MOFU category
        href: "/soluciones-financieras",
      },
      {
        text: "Cards", // Specific MOFU sub-category
        href: "/tarjetas", // Link to new dedicated page
      },
      {
        text: "Personal Loans", // Specific MOFU sub-category
        href: "/prestamos", // Link to new dedicated page
      },
      {
        text: "Personal Finance", // TOFU category
        href: "/finanzas-personales",
      },
      {
        text: "Card Finder", // Tool
        href: "/choose-the-perfect-card-for-you-1",
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
            href: "/finanzas-personales/best-personal-loans",
          },
          {
            text: cleanTitle("Rewards Credit Cards"),
            href: "/finanzas-personales/best-rewards-credit-cards",
          },
          {
            text: cleanTitle("Best Cashback Cards"),
            href: "/finanzas-personales/cashback-credit-cards",
          },
          {
            text: cleanTitle("Credit Cards: Types and Benefits"),
            href: "/finanzas-personales/credit-card-types-benefits",
          },
          {
            text: cleanTitle("Practical Guide to Getting Out of Debt"),
            href: "/finanzas-personales/getting-out-of-debt",
          },
          {
            text: "View more...",
            href: "/finanzas-personales",
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
            href: "/soluciones-financieras/barclaycard-avios-plus",
          },
          {
            text: cleanTitle("Curve Credit Card"),
            href: "/soluciones-financieras/curve-credit-card",
          },
          {
            text: cleanTitle("Halifax World Elite Mastercard"),
            href: "/soluciones-financieras/halifax-world-elite-mastercard",
          },
          {
            text: cleanTitle("Lloyds Bank Credit Card"),
            href: "/soluciones-financieras/lloyds-bank-credit-card",
          },
          {
            text: cleanTitle("Monzo Credit Card"),
            href: "/soluciones-financieras/monzo-credit-card",
          },
          {
            text: "View more...",
            href: "/soluciones-financieras",
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
            href: "/soluciones-financieras/barclays-personal-loan",
          },
          {
            text: cleanTitle("Capify Business Finance"),
            href: "/soluciones-financieras/capify-personal-loan",
          },
          {
            text: cleanTitle("Fleximize Business Loans"),
            href: "/soluciones-financieras/fleximize-personal-loan",
          },
          {
            text: cleanTitle("Funding Circle Business Loan"),
            href: "/soluciones-financieras/funding-circle-personal-loan",
          },
          {
            text: cleanTitle("Funding Options Marketplace"),
            href: "/soluciones-financieras/funding-options-personal-loan",
          },
          {
            text: "View more...",
            href: "/soluciones-financieras",
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
          href: "/finanzas-personales/best-personal-loans",
          image:
            "https://media.topfinanzas.com/images/best-personal-loans.webp",
          category: "Personal Finance",
          categoryHref: "/finanzas-personales",
        },
        {
          title: cleanTitle("Practical Guide to Getting Out of Debt"),
          href: "/finanzas-personales/getting-out-of-debt",
          image:
            "https://media.topfinanzas.com/images/uk/Top_Finance_how_to_get_out_of_debt.webp",
          category: "Personal Finance",
          categoryHref: "/finanzas-personales",
        },
        {
          title: cleanTitle("Barclaycard Avios Plus Card"),
          href: "/soluciones-financieras/barclaycard-avios-plus",
          image:
            "https://media.topfinanzas.com/images/barclaycard-avios-plus.webp",
          category: "Cards",
          categoryHref: "/soluciones-financieras",
        },
        {
          title: cleanTitle("HSBC Personal Loan"),
          href: "/soluciones-financieras/hsbc-personal-loan",
          image:
            "https://media.topfinanzas.com/images/uk/loans/718135900-fotosprestamo1hsbc-uk.webp",
          category: "Loans",
          categoryHref: "/soluciones-financieras",
        },
      ],
    },
  },
};
