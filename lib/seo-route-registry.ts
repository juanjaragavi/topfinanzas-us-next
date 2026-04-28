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

export const ROUTE_SEO_REGISTRY: Record<string, RouteSeoEntry> = {
  "/": {
    pathname: "/",
    title: "TopFinanzas US | Your Guide to US Credit Cards & Loans",
    description:
      "Compare US credit cards, personal loans, and financial solutions with TopFinanzas US. Clear guides and tools for making smarter financial decisions.",
    image: "https://media.topfinanzas.com/images/placeholder-image.webp",
    category: "static",
    contentType: "webpage",
  },
  "/about-us": {
    pathname: "/about-us",
    title: "About TopFinanzas US",
    description:
      "Learn about TopFinanzas US and our mission to help US readers compare financial products and make better money decisions.",
    image: "https://media.topfinanzas.com/images/placeholder-image.webp",
    category: "static",
    contentType: "webpage",
  },
  "/blog": {
    pathname: "/blog",
    title: "TopFinanzas US Blog: Personal Finance & Financial Solutions",
    description:
      "Explore US-focused articles on credit cards, loans, debt management, budgeting, savings, and financial education.",
    image: "https://media.topfinanzas.com/images/placeholder-image.webp",
    category: "static",
    contentType: "collection",
  },
  "/contact-us": {
    pathname: "/contact-us",
    title: "Contact TopFinanzas US",
    description:
      "Contact TopFinanzas US with questions about credit card guides, loan comparisons, personal finance, and editorial content.",
    image: "https://media.topfinanzas.com/images/placeholder-image.webp",
    category: "static",
    contentType: "webpage",
  },
  "/cookie-policy": {
    pathname: "/cookie-policy",
    title: "Cookie Policy",
    description:
      "Read the TopFinanzas US cookie policy to understand how cookies support analytics, advertising, and site functionality.",
    image: "https://media.topfinanzas.com/images/placeholder-image.webp",
    category: "static",
    contentType: "webpage",
  },
  "/financial-solutions": {
    pathname: "/financial-solutions",
    title: "US Financial Solutions: Credit Cards & Loans",
    description:
      "Compare US credit cards, personal loans, eligibility requirements, product benefits, APRs, and financial solution guides.",
    image: "https://media.topfinanzas.com/images/placeholder-image.webp",
    category: "static",
    contentType: "collection",
  },
  "/personal-finance": {
    pathname: "/personal-finance",
    title: "Personal Finance Guides",
    description:
      "Read US personal finance guides about budgeting, credit cards, personal loans, debt, savings, and everyday money decisions.",
    image: "https://media.topfinanzas.com/images/placeholder-image.webp",
    category: "static",
    contentType: "collection",
  },
  "/privacy-policy": {
    pathname: "/privacy-policy",
    title: "Privacy Policy",
    description:
      "Read the TopFinanzas US privacy policy and learn how personal information is collected, used, and protected.",
    image: "https://media.topfinanzas.com/images/placeholder-image.webp",
    category: "static",
    contentType: "webpage",
  },
  "/terms-conditions": {
    pathname: "/terms-conditions",
    title: "Terms and Conditions",
    description:
      "Review the terms and conditions for using TopFinanzas US financial education content and comparison guides.",
    image: "https://media.topfinanzas.com/images/placeholder-image.webp",
    category: "static",
    contentType: "webpage",
  },

  // ─── Financial Solutions: American Express ────────────────────────────────
  "/financial-solutions/benefits-of-the-american-express-gold-card": {
    pathname: "/financial-solutions/benefits-of-the-american-express-gold-card",
    title: "Discover the Benefits of the American Express® Gold Card",
    description:
      "Explore the rewards, dining credits, and travel perks of the American Express Gold Card. Learn how Membership Rewards points can maximize your everyday spending.",
    image:
      "https://media.topfinanzas.com/images/benefits-of-the-american-express-gold-card.webp",
    category: "financial-solutions",
    contentType: "credit-card",
    date: "2025-10-28T00:00:00Z",
  },
  "/financial-solutions/requirements-to-qualify-for-the-american-express-gold-card":
    {
      pathname:
        "/financial-solutions/requirements-to-qualify-for-the-american-express-gold-card",
      title:
        "Requirements to Qualify for the American Express® Gold Card: What You Need to Know",
      description:
        "Unlock the Gold Standard: great credit, steady income, and endless rewards await. Discover the eligibility criteria and application process for the Amex Gold Card.",
      image:
        "https://media.topfinanzas.com/images/requirements-to-qualify-for-the-american-express-gold-card.webp",
      category: "financial-solutions",
      contentType: "credit-card",
      date: "2025-10-28T00:00:00Z",
    },
  "/financial-solutions/american-express-platinum-card-requirements": {
    pathname:
      "/financial-solutions/american-express-platinum-card-requirements",
    title:
      "American Express Platinum Card Requirements: Complete Guide - TopFinanzas US",
    description:
      "Learn about the Amex Platinum Card requirements, eligibility criteria, and how to apply for this premium rewards card.",
    image:
      "https://media.topfinanzas.com/images/american-express-platinum-card-requirements.webp",
    category: "financial-solutions",
    contentType: "credit-card",
    date: "2025-10-28T00:00:00Z",
  },

  // ─── Financial Solutions: Bank of America ─────────────────────────────────
  "/financial-solutions/bank-of-america-business-loans-benefits": {
    pathname: "/financial-solutions/bank-of-america-business-loans-benefits",
    title: "Bank of America Business Loan Benefits",
    description:
      "Discover the benefits of Bank of America business loans, including flexible financing options, competitive rates, and resources for growing your business.",
    image:
      "https://media.topfinanzas.com/images/bank-of-america-business-loans-benefits.webp",
    category: "financial-solutions",
    contentType: "loan",
    date: "2025-10-28T00:00:00Z",
  },
  "/financial-solutions/bank-of-america-business-loans-requirements": {
    pathname:
      "/financial-solutions/bank-of-america-business-loans-requirements",
    title: "Bank of America Business Loans Requirements: What You Need to Know",
    description:
      "Learn about Bank of America business loan eligibility criteria, required documentation, and the application process to maximize your chances of approval.",
    image:
      "https://media.topfinanzas.com/images/bank-of-america-business-loans-requirements.webp",
    category: "financial-solutions",
    contentType: "loan",
    date: "2025-10-28T00:00:00Z",
  },
  "/financial-solutions/benefits-for-the-bank-of-america-travel-rewards-credit-card-for-students":
    {
      pathname:
        "/financial-solutions/benefits-for-the-bank-of-america-travel-rewards-credit-card-for-students",
      title:
        "Bank of America Travel Rewards Credit Card for Students: Benefits Guide",
      description:
        "Explore the benefits of the Bank of America Travel Rewards Credit Card for Students — earn unlimited points on purchases with no annual fee and no foreign transaction fees.",
      image:
        "https://media.topfinanzas.com/images/benefits-for-the-bank-of-america-travel-rewards-credit-card-for-students.webp",
      category: "financial-solutions",
      contentType: "credit-card",
      date: "2025-10-28T00:00:00Z",
    },
  "/financial-solutions/requirements-for-the-bank-of-america-travel-rewards-credit-card-for-students":
    {
      pathname:
        "/financial-solutions/requirements-for-the-bank-of-america-travel-rewards-credit-card-for-students",
      title:
        "Requirements for the Bank of America Travel Rewards Credit Card for Students",
      description:
        "Learn about the eligibility requirements and application process for the Bank of America Travel Rewards Credit Card for Students.",
      image:
        "https://media.topfinanzas.com/images/requirements-for-the-bank-of-america-travel-rewards-credit-card-for-students.webp",
      category: "financial-solutions",
      contentType: "credit-card",
      date: "2025-10-28T00:00:00Z",
    },
  "/financial-solutions/benefits-for-the-bank-of-america-unlimited-cash-rewards-credit-card-for-students":
    {
      pathname:
        "/financial-solutions/benefits-for-the-bank-of-america-unlimited-cash-rewards-credit-card-for-students",
      title:
        "Bank of America Unlimited Cash Rewards Credit Card for Students: Benefits Guide",
      description:
        "Explore the benefits of the Bank of America Unlimited Cash Rewards Credit Card for Students — earn unlimited 1.5% cash back on all purchases with no annual fee.",
      image:
        "https://media.topfinanzas.com/images/benefits-for-the-bank-of-america-unlimited-cash-rewards-credit-card-for-students.webp",
      category: "financial-solutions",
      contentType: "credit-card",
      date: "2025-10-28T00:00:00Z",
    },
  "/financial-solutions/requirements-for-the-bank-of-america-unlimited-cash-rewards-credit-card-for-students":
    {
      pathname:
        "/financial-solutions/requirements-for-the-bank-of-america-unlimited-cash-rewards-credit-card-for-students",
      title:
        "Requirements for the Bank of America Unlimited Cash Rewards Credit Card for Students",
      description:
        "Learn about the eligibility requirements and application process for the Bank of America Unlimited Cash Rewards Credit Card for Students.",
      image:
        "https://media.topfinanzas.com/images/requirements-for-the-bank-of-america-unlimited-cash-rewards-credit-card-for-students.webp",
      category: "financial-solutions",
      contentType: "credit-card",
      date: "2025-10-28T00:00:00Z",
    },

  // ─── Financial Solutions: Capital One ─────────────────────────────────────
  "/financial-solutions/benefits-capital-one-savor-cash-rewards-credit-card": {
    pathname:
      "/financial-solutions/benefits-capital-one-savor-cash-rewards-credit-card",
    title: "Capital One Savor Cash Rewards Credit Card Benefits",
    description:
      "Discover the cash rewards, dining perks, and entertainment benefits of the Capital One Savor Cash Rewards Credit Card — earn unlimited 4% on dining and entertainment.",
    image:
      "https://media.topfinanzas.com/images/benefits-capital-one-savor-cash-rewards-credit-card.webp",
    category: "financial-solutions",
    contentType: "credit-card",
    date: "2025-10-28T00:00:00Z",
  },
  "/financial-solutions/requirements-for-the-capital-one-savor-cash-rewards-credit-card":
    {
      pathname:
        "/financial-solutions/requirements-for-the-capital-one-savor-cash-rewards-credit-card",
      title: "Requirements for the Capital One Savor Cash Rewards Credit Card",
      description:
        "Learn about the eligibility criteria and application requirements for the Capital One Savor Cash Rewards Credit Card.",
      image:
        "https://media.topfinanzas.com/images/requirements-for-the-capital-one-savor-cash-rewards-credit-card.webp",
      category: "financial-solutions",
      contentType: "credit-card",
      date: "2025-10-28T00:00:00Z",
    },
  "/financial-solutions/benefits-capital-one-ventureone-rewards": {
    pathname: "/financial-solutions/benefits-capital-one-ventureone-rewards",
    title: "Benefits: VentureOne Rewards from Capital One",
    description:
      "Explore the travel rewards and benefits of the Capital One VentureOne Rewards Credit Card — earn unlimited miles on every purchase with no annual fee.",
    image:
      "https://media.topfinanzas.com/images/benefits-capital-one-ventureone-rewards.webp",
    category: "financial-solutions",
    contentType: "credit-card",
    date: "2025-10-28T00:00:00Z",
  },
  "/financial-solutions/requirements-for-capital-one-ventureone-rewards-credit-card":
    {
      pathname:
        "/financial-solutions/requirements-for-capital-one-ventureone-rewards-credit-card",
      title: "Requirements for Capital One VentureOne Rewards Credit Card",
      description:
        "Learn about the eligibility criteria and application process for the Capital One VentureOne Rewards Credit Card.",
      image:
        "https://media.topfinanzas.com/images/requirements-for-capital-one-ventureone-rewards-credit-card.webp",
      category: "financial-solutions",
      contentType: "credit-card",
      date: "2025-10-28T00:00:00Z",
    },
  "/financial-solutions/benefits-of-the-capital-one-platinum-secured-credit-card":
    {
      pathname:
        "/financial-solutions/benefits-of-the-capital-one-platinum-secured-credit-card",
      title: "The Benefits of the Capital One Platinum Secured Credit Card",
      description:
        "Discover how the Capital One Platinum Secured Credit Card helps you build credit with responsible use, automatic credit limit reviews, and no annual fee.",
      image:
        "https://media.topfinanzas.com/images/benefits-of-the-capital-one-platinum-secured-credit-card.webp",
      category: "financial-solutions",
      contentType: "credit-card",
      date: "2025-10-28T00:00:00Z",
    },
  "/financial-solutions/requirements-of-the-capital-one-platinum-secured-credit-card":
    {
      pathname:
        "/financial-solutions/requirements-of-the-capital-one-platinum-secured-credit-card",
      title: "Requirements of the Capital One Platinum Secured Credit Card",
      description:
        "Learn about the eligibility requirements and application process for the Capital One Platinum Secured Credit Card.",
      image:
        "https://media.topfinanzas.com/images/requirements-of-the-capital-one-platinum-secured-credit-card.webp",
      category: "financial-solutions",
      contentType: "credit-card",
      date: "2025-10-28T00:00:00Z",
    },
  "/financial-solutions/capital-one-spark-cash-plus-benefits": {
    pathname: "/financial-solutions/capital-one-spark-cash-plus-benefits",
    title: "Capital One Spark Cash Plus Benefits",
    description:
      "Explore the unlimited 2% cash back on every purchase, no preset spending limit, and business benefits of the Capital One Spark Cash Plus card.",
    image:
      "https://media.topfinanzas.com/images/capital-one-spark-cash-plus-benefits.webp",
    category: "financial-solutions",
    contentType: "credit-card",
    date: "2025-10-28T00:00:00Z",
  },
  "/financial-solutions/capital-one-spark-cash-plus-requirements": {
    pathname: "/financial-solutions/capital-one-spark-cash-plus-requirements",
    title: "Capital One Spark Cash Plus Requirements",
    description:
      "Learn about the eligibility criteria and application process for the Capital One Spark Cash Plus business credit card.",
    image:
      "https://media.topfinanzas.com/images/capital-one-spark-cash-plus-requirements.webp",
    category: "financial-solutions",
    contentType: "credit-card",
    date: "2025-10-28T00:00:00Z",
  },
  "/financial-solutions/capital-one-venture-x-rewards-credit-card-benefits": {
    pathname:
      "/financial-solutions/capital-one-venture-x-rewards-credit-card-benefits",
    title: "Capital One Venture X Rewards Credit Card Benefits",
    description:
      "Discover the premium travel rewards, lounge access, and annual credits of the Capital One Venture X Rewards Credit Card — earn 10x miles on hotels and car rentals through Capital One Travel.",
    image:
      "https://media.topfinanzas.com/images/capital-one-venture-x-rewards-credit-card-benefits.webp",
    category: "financial-solutions",
    contentType: "credit-card",
    date: "2025-10-28T00:00:00Z",
  },
  "/financial-solutions/capital-one-venture-x-rewards-credit-card-requirements":
    {
      pathname:
        "/financial-solutions/capital-one-venture-x-rewards-credit-card-requirements",
      title: "Capital One Venture X Rewards Credit Card Requirements",
      description:
        "Learn about the eligibility criteria, income requirements, and application process for the Capital One Venture X Rewards Credit Card.",
      image:
        "https://media.topfinanzas.com/images/capital-one-venture-x-rewards-credit-card-requirements.webp",
      category: "financial-solutions",
      contentType: "credit-card",
      date: "2025-10-28T00:00:00Z",
    },

  // ─── Financial Solutions: Chase ───────────────────────────────────────────
  "/financial-solutions/chase-sapphire-preferred-credit-card-benefits": {
    pathname:
      "/financial-solutions/chase-sapphire-preferred-credit-card-benefits",
    title: "Chase Sapphire Preferred Credit Card Benefits",
    description:
      "Explore the travel rewards, dining perks, and point transfer options of the Chase Sapphire Preferred Credit Card — earn 3x on dining and 2x on all other travel.",
    image:
      "https://media.topfinanzas.com/images/chase-sapphire-preferred-credit-card-benefits.webp",
    category: "financial-solutions",
    contentType: "credit-card",
    date: "2025-10-28T00:00:00Z",
  },
  "/financial-solutions/chase-sapphire-preferred-credit-card-requirements": {
    pathname:
      "/financial-solutions/chase-sapphire-preferred-credit-card-requirements",
    title: "Chase Sapphire Preferred Credit Card Requirements",
    description:
      "Learn about the eligibility criteria, credit score requirements, and application process for the Chase Sapphire Preferred Credit Card.",
    image:
      "https://media.topfinanzas.com/images/chase-sapphire-preferred-credit-card-requirements.webp",
    category: "financial-solutions",
    contentType: "credit-card",
    date: "2025-10-28T00:00:00Z",
  },

  // ─── Financial Solutions: Citi ────────────────────────────────────────────
  "/financial-solutions/benefits-of-the-citi-diamond-preferred-card": {
    pathname:
      "/financial-solutions/benefits-of-the-citi-diamond-preferred-card",
    title: "Benefits of the Citi® Diamond Preferred® Card",
    description:
      "Discover the 0% intro APR on balance transfers and purchases, concierge service, and features of the Citi Diamond Preferred Card designed to help you manage debt.",
    image:
      "https://media.topfinanzas.com/images/benefits-of-the-citi-diamond-preferred-card.webp",
    category: "financial-solutions",
    contentType: "credit-card",
    date: "2025-10-28T00:00:00Z",
  },
  "/financial-solutions/requirements-to-qualify-for-the-citi-diamond-preferred-card":
    {
      pathname:
        "/financial-solutions/requirements-to-qualify-for-the-citi-diamond-preferred-card",
      title: "Requirements to Qualify for the Citi® Diamond Preferred® Card",
      description:
        "Learn about the eligibility criteria, credit score requirements, and application process for the Citi Diamond Preferred Card.",
      image:
        "https://media.topfinanzas.com/images/requirements-to-qualify-for-the-citi-diamond-preferred-card.webp",
      category: "financial-solutions",
      contentType: "credit-card",
      date: "2025-10-28T00:00:00Z",
    },
  "/financial-solutions/citi-simplicity-card-benefits": {
    pathname: "/financial-solutions/citi-simplicity-card-benefits",
    title: "Citi Simplicity Card Benefits",
    description:
      "Explore the 0% intro APR on balance transfers, no late fees, and flexible payment options of the Citi Simplicity Card — one of the most forgiving credit cards available.",
    image:
      "https://media.topfinanzas.com/images/citi-simplicity-card-benefits.webp",
    category: "financial-solutions",
    contentType: "credit-card",
    date: "2025-10-28T00:00:00Z",
  },
  "/financial-solutions/citi-simplicity-card-requirements": {
    pathname: "/financial-solutions/citi-simplicity-card-requirements",
    title: "Citi Simplicity Card Requirements",
    description:
      "Learn about the eligibility criteria and application process for the Citi Simplicity Card — a balance transfer and no-late-fee credit card.",
    image:
      "https://media.topfinanzas.com/images/citi-simplicity-card-requirements.webp",
    category: "financial-solutions",
    contentType: "credit-card",
    date: "2025-10-28T00:00:00Z",
  },

  // ─── Financial Solutions: Discover ────────────────────────────────────────
  "/financial-solutions/benefits-of-the-discover-it-cash-back": {
    pathname: "/financial-solutions/benefits-of-the-discover-it-cash-back",
    title: "Benefits of the Discover it® Cash Back: Smart Rewards and Savings",
    description:
      "Discover the 5% cash back on rotating categories, Cashback Match for new cardmembers, and no annual fee of the Discover it Cash Back card.",
    image:
      "https://media.topfinanzas.com/images/benefits-of-the-discover-it-cash-back.webp",
    category: "financial-solutions",
    contentType: "credit-card",
    date: "2025-10-28T00:00:00Z",
  },
  "/financial-solutions/requirements-to-qualify-for-the-discover-it-cash-back":
    {
      pathname:
        "/financial-solutions/requirements-to-qualify-for-the-discover-it-cash-back",
      title: "Requirements to Qualify for the Discover it® Cash Back",
      description:
        "Learn about the eligibility requirements and application process for the Discover it Cash Back credit card.",
      image:
        "https://media.topfinanzas.com/images/requirements-to-qualify-for-the-discover-it-cash-back.webp",
      category: "financial-solutions",
      contentType: "credit-card",
      date: "2025-10-28T00:00:00Z",
    },
  "/financial-solutions/benefits-of-the-discover-it-student-cash-back-card": {
    pathname:
      "/financial-solutions/benefits-of-the-discover-it-student-cash-back-card",
    title: "Benefits of the Discover it® Student Cash Back Card",
    description:
      "Explore the cash back rewards, Good Grades Reward, and credit-building features of the Discover it Student Cash Back Card — designed for college students.",
    image:
      "https://media.topfinanzas.com/images/benefits-of-the-discover-it-student-cash-back-card.webp",
    category: "financial-solutions",
    contentType: "credit-card",
    date: "2025-10-28T00:00:00Z",
  },
  "/financial-solutions/requirements-for-the-discover-it-student-cash-back-card":
    {
      pathname:
        "/financial-solutions/requirements-for-the-discover-it-student-cash-back-card",
      title: "Requirements for the Discover it® Student Cash Back Card",
      description:
        "Learn about the eligibility requirements and application process for the Discover it Student Cash Back Card.",
      image:
        "https://media.topfinanzas.com/images/requirements-for-the-discover-it-student-cash-back-card.webp",
      category: "financial-solutions",
      contentType: "credit-card",
      date: "2025-10-28T00:00:00Z",
    },

  // ─── Financial Solutions: Wells Fargo ────────────────────────────────────
  "/financial-solutions/benefits-of-the-wells-fargo-reflect-card": {
    pathname: "/financial-solutions/benefits-of-the-wells-fargo-reflect-card",
    title: "Benefits of the Wells Fargo Reflect® Card",
    description:
      "Discover the long 0% intro APR on purchases and balance transfers, cell phone protection, and features of the Wells Fargo Reflect Card.",
    image:
      "https://media.topfinanzas.com/images/benefits-of-the-wells-fargo-reflect-card.webp",
    category: "financial-solutions",
    contentType: "credit-card",
    date: "2025-10-28T00:00:00Z",
  },
  "/financial-solutions/requirements-to-qualify-for-the-wells-fargo-reflect-card":
    {
      pathname:
        "/financial-solutions/requirements-to-qualify-for-the-wells-fargo-reflect-card",
      title: "Requirements to Qualify for the Wells Fargo Reflect® Card",
      description:
        "Learn about the eligibility criteria and application process for the Wells Fargo Reflect Card.",
      image:
        "https://media.topfinanzas.com/images/requirements-to-qualify-for-the-wells-fargo-reflect-card.webp",
      category: "financial-solutions",
      contentType: "credit-card",
      date: "2025-10-28T00:00:00Z",
    },
  "/financial-solutions/wells-fargo-autograph-card-benefits": {
    pathname: "/financial-solutions/wells-fargo-autograph-card-benefits",
    title: "Wells Fargo Autograph Card Benefits: Maximize Your Rewards",
    description:
      "Explore the 3x points on restaurants, travel, gas stations, and streaming with the Wells Fargo Autograph Card — plus no annual fee and a generous welcome offer.",
    image:
      "https://media.topfinanzas.com/images/wells-fargo-autograph-card-benefits.webp",
    category: "financial-solutions",
    contentType: "credit-card",
    date: "2025-10-28T00:00:00Z",
  },
  "/financial-solutions/wells-fargo-autograph-card-requirements": {
    pathname: "/financial-solutions/wells-fargo-autograph-card-requirements",
    title: "Wells Fargo Autograph Card Requirements",
    description:
      "Learn about the eligibility criteria, credit score requirements, and application process for the Wells Fargo Autograph Card.",
    image:
      "https://media.topfinanzas.com/images/wells-fargo-autograph-card-requirements.webp",
    category: "financial-solutions",
    contentType: "credit-card",
    date: "2025-10-28T00:00:00Z",
  },

  // ─── Financial Solutions: Chase Ink Business ─────────────────────────────
  "/financial-solutions/ink-business-unlimited-credit-card-benefits": {
    pathname:
      "/financial-solutions/ink-business-unlimited-credit-card-benefits",
    title: "Ink Business Unlimited Credit Card Benefits",
    description:
      "Discover the unlimited 1.5% cash back on every purchase, welcome bonus, and employee card features of the Chase Ink Business Unlimited Credit Card.",
    image:
      "https://media.topfinanzas.com/images/ink-business-unlimited-credit-card-benefits.webp",
    category: "financial-solutions",
    contentType: "credit-card",
    date: "2025-10-28T00:00:00Z",
  },
  "/financial-solutions/ink-business-unlimited-credit-card-requirements": {
    pathname:
      "/financial-solutions/ink-business-unlimited-credit-card-requirements",
    title: "Ink Business Unlimited Credit Card Requirements",
    description:
      "Learn about the eligibility criteria, business requirements, and application process for the Chase Ink Business Unlimited Credit Card.",
    image:
      "https://media.topfinanzas.com/images/ink-business-unlimited-credit-card-requirements.webp",
    category: "financial-solutions",
    contentType: "credit-card",
    date: "2025-10-28T00:00:00Z",
  },

  // ─── Financial Solutions: Titanium Rewards ────────────────────────────────
  "/financial-solutions/titanium-rewards-visa-signature-credit-card-benefits": {
    pathname:
      "/financial-solutions/titanium-rewards-visa-signature-credit-card-benefits",
    title: "Titanium Rewards Visa Signature Credit Card Benefits",
    description:
      "Explore the premium rewards, travel benefits, and Visa Signature perks of the Titanium Rewards Visa Signature Credit Card.",
    image:
      "https://media.topfinanzas.com/images/titanium-rewards-visa-signature-credit-card-benefits.webp",
    category: "financial-solutions",
    contentType: "credit-card",
    date: "2025-10-28T00:00:00Z",
  },
  "/financial-solutions/titanium-rewards-visa-signature-credit-card-requirements":
    {
      pathname:
        "/financial-solutions/titanium-rewards-visa-signature-credit-card-requirements",
      title: "Titanium Rewards Visa Signature Credit Card Requirements",
      description:
        "Learn about the eligibility criteria and application process for the Titanium Rewards Visa Signature Credit Card.",
      image:
        "https://media.topfinanzas.com/images/titanium-rewards-visa-signature-credit-card-requirements.webp",
      category: "financial-solutions",
      contentType: "credit-card",
      date: "2025-10-28T00:00:00Z",
    },

  // ─── Financial Solutions: Business Loans ─────────────────────────────────
  "/financial-solutions/smarter-financing-for-your-business-fundbox-benefits": {
    pathname:
      "/financial-solutions/smarter-financing-for-your-business-fundbox-benefits",
    title: "Smarter Financing for Your Business: Fundbox Benefits",
    description:
      "Discover how Fundbox provides flexible revolving lines of credit and term loans for small businesses with fast approvals and transparent fees.",
    image:
      "https://media.topfinanzas.com/images/smarter-financing-for-your-business-fundbox-benefits.webp",
    category: "financial-solutions",
    contentType: "loan",
    date: "2025-10-28T00:00:00Z",
  },
  "/financial-solutions/fundbox-loan-requirements": {
    pathname: "/financial-solutions/fundbox-loan-requirements",
    title: "Fundbox Loan Requirements: Small Business Financing Guide",
    description:
      "Learn about Fundbox eligibility criteria for small business lines of credit and term loans, the application process, and required business information.",
    image:
      "https://media.topfinanzas.com/images/fundbox-loan-requirements.webp",
    category: "financial-solutions",
    contentType: "loan",
    date: "2025-10-28T00:00:00Z",
  },
  "/financial-solutions/benefits-quickbridge-loans": {
    pathname: "/financial-solutions/benefits-quickbridge-loans",
    title: "QuickBridge Loans Benefits",
    description:
      "Explore the fast funding, flexible repayment, and small business-friendly features of QuickBridge business loans.",
    image:
      "https://media.topfinanzas.com/images/benefits-quickbridge-loans.webp",
    category: "financial-solutions",
    contentType: "loan",
    date: "2025-10-28T00:00:00Z",
  },
  "/financial-solutions/quickbridge-loans-requirements": {
    pathname: "/financial-solutions/quickbridge-loans-requirements",
    title: "QuickBridge Loans Requirements: Business Financing Guide",
    description:
      "Learn about QuickBridge loan eligibility criteria, the fast online application process, and required documentation for small business funding.",
    image:
      "https://media.topfinanzas.com/images/quickbridge-loans-requirements.webp",
    category: "financial-solutions",
    contentType: "loan",
    date: "2025-10-28T00:00:00Z",
  },
  "/financial-solutions/national-funding-benefits": {
    pathname: "/financial-solutions/national-funding-benefits",
    title: "National Funding Benefits",
    description:
      "Discover the fast approvals, working capital solutions, and equipment financing benefits of National Funding for small and medium-sized US businesses.",
    image:
      "https://media.topfinanzas.com/images/national-funding-benefits.webp",
    category: "financial-solutions",
    contentType: "loan",
    date: "2025-10-28T00:00:00Z",
  },
  "/financial-solutions/requirements-for-national-funding-loans": {
    pathname: "/financial-solutions/requirements-for-national-funding-loans",
    title: "Requirements for National Funding Loans",
    description:
      "Learn about National Funding eligibility criteria, the application process, and documentation required to access business financing.",
    image:
      "https://media.topfinanzas.com/images/requirements-for-national-funding-loans.webp",
    category: "financial-solutions",
    contentType: "loan",
    date: "2025-10-28T00:00:00Z",
  },

  // ─── Personal Finance Articles ────────────────────────────────────────────
  "/personal-finance/good-debt-vs-bad-debt-how-to-tell-the-difference": {
    pathname:
      "/personal-finance/good-debt-vs-bad-debt-how-to-tell-the-difference",
    title: "Good Debt vs. Bad Debt: How to Tell the Difference",
    description:
      "If you're just starting your career, the word 'debt' probably sounds like a four-letter word. Learn the difference between debt that builds wealth and debt that holds you back.",
    image:
      "https://media.topfinanzas.com/images/good-debt-vs-bad-debt-how-to-tell-the-difference.webp",
    category: "personal-finance",
    contentType: "article",
    date: "2025-10-28T00:00:00Z",
  },
  "/personal-finance/good-debt-vs-bad-debt-how-to-tell-the-difference-2": {
    pathname:
      "/personal-finance/good-debt-vs-bad-debt-how-to-tell-the-difference-2",
    title: "Good Debt vs. Bad Debt: How to Tell the Difference (Part 2)",
    description:
      "Dive deeper into the distinction between productive and harmful debt. Learn practical strategies for evaluating borrowing decisions and building a stronger financial future.",
    image:
      "https://media.topfinanzas.com/images/good-debt-vs-bad-debt-how-to-tell-the-difference-2.webp",
    category: "personal-finance",
    contentType: "article",
    date: "2025-10-28T00:00:00Z",
  },
  "/personal-finance/investing-for-beginners-a-simple-guide-to-getting-started":
    {
      pathname:
        "/personal-finance/investing-for-beginners-a-simple-guide-to-getting-started",
      title: "Investing for Beginners: A Simple Guide to Getting Started",
      description:
        "This guide will break down the basics of investing into simple, actionable steps. It's a crucial part of taking control of your personal finance and building long-term wealth.",
      image:
        "https://media.topfinanzas.com/images/investing-for-beginners-a-simple-guide-to-getting-started.webp",
      category: "personal-finance",
      contentType: "article",
      date: "2025-10-28T00:00:00Z",
    },
  "/personal-finance/yours-mine-or-ours-how-to-strategically-combine-finances-after-marriage-or-moving-in":
    {
      pathname:
        "/personal-finance/yours-mine-or-ours-how-to-strategically-combine-finances-after-marriage-or-moving-in",
      title:
        "Yours, Mine, or Ours? How to Strategically Combine Finances After Marriage (or Moving In)",
      description:
        "A practical guide to navigating joint finances after marriage or moving in together. Explore three approaches to combining money and choose what works best for your relationship.",
      image:
        "https://media.topfinanzas.com/images/yours-mine-or-ours-how-to-strategically-combine-finances-after-marriage-or-moving-in.webp",
      category: "personal-finance",
      contentType: "article",
      date: "2025-10-28T00:00:00Z",
    },
};
