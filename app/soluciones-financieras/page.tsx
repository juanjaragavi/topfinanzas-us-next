"use client";

import { BlogLayout } from "@/components/mdx/blog-layout";
import Link from "next/link";
import { FeaturedPostCard } from "@/components/ui/featured-post-card";
import { useState, useEffect } from "react";

export default function FinancialSolutionsPage() {
  // Category definitions
  const categories = {
    creditCards: "Credit Cards",
    loans: "Loans",
  };

  // Content type definitions
  const creditCardTypes = {
    all: "All",
    traditional: "Traditional Banks",
    neobank: "Neobanks",
    fintech: "Fintech Solutions",
  };

  // Loan type definitions
  const loanTypes = {
    all: "All",
    personal: "Personal Loans",
    sme_fintech: "SME Fintech",
    neobank: "Neobank Loans",
    marketplace: "Marketplaces",
    guide: "Guides",
  };

  // State for active category and filters with more reliable client-side initialization
  const [isClient, setIsClient] = useState(false);
  const [activeCategory, setActiveCategory] = useState("creditCards");
  const [activeCreditCardType, setActiveCreditCardType] = useState("all");
  const [activeLoanType, setActiveLoanType] = useState("all");

  // Force client-side state initialization to ensure React hydration
  useEffect(() => {
    // Mark as client-side rendered
    setIsClient(true);

    // Force re-render after mount to ensure hydration issues are resolved
    const timer = setTimeout(() => {
      setActiveCategory("creditCards");
      setActiveCreditCardType("all");
      setActiveLoanType("all");
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  // Avoid any rendering until client-side code is running
  // This prevents hydration issues in production
  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse bg-gray-200 rounded-xl p-8">
          <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-2/3"></div>
        </div>
      </div>
    );
  }

  // List of all loan content with types
  const allLoansContent = [
    // Personal Loans (Traditional Banks)
    {
      title: "HSBC Personal Loan",
      slug: "hsbc-personal-loan",
      description:
        "Discover HSBC personal loans with competitive rates, flexible repayment terms, and a quick application process.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718135900-fotosprestamo1hsbc-uk.webp",
      date: "4 April 2025",
      type: "personal",
    },
    {
      title: "Barclays Personal Loan",
      slug: "barclays-personal-loan",
      description:
        "Explore Barclays personal loans with competitive rates, flexible terms, and a streamlined application process.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718136012-fotosprestamo-barclays2uk.webp",
      date: "4 April 2025",
      type: "personal",
    },
    {
      title: "Lloyds Bank Personal Loan",
      slug: "lloyds-bank-personal-loan",
      description:
        "Explore Lloyds Bank personal loans with competitive rates, flexible repayment options, and reliable service.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718136057-fotosprestamo-lloyds1uk.webp",
      date: "4 April 2025",
      type: "personal",
    },
    {
      title: "NatWest Personal Loan",
      slug: "natwest-personal-loan",
      description:
        "Explore NatWest personal loans with competitive rates, flexible repayment terms, and a simple process.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718136156-fotosprestamo-nawest1uk.webp",
      date: "4 April 2025",
      type: "personal",
    },
    {
      title: "Santander UK Personal Loan",
      slug: "santander-uk-personal-loan",
      description:
        "Explore Santander UK personal loans with competitive rates, flexible repayment terms, and exclusive benefits.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718136214-fotosprestamo-santander1uk.webp",
      date: "4 April 2025",
      type: "personal",
    },
    {
      title: "TSB Personal Loan",
      slug: "tsb-personal-loan",
      description:
        "Explore TSB personal loans with competitive rates, flexible repayment options, and clear, simple banking.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718136271-fotosprestamo-tbs1uk.webp",
      date: "4 April 2025",
      type: "personal",
    },
    {
      title: "Virgin Money Personal Loan",
      slug: "virgin-money-personal-loan",
      description:
        "Explore Virgin Money personal loans with competitive rates, flexible terms, and exclusive benefits.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718136330-fotosprestamo-virginmoney1uk.webp",
      date: "4 April 2025",
      type: "personal",
    },
    {
      title: "Halifax Personal Loan",
      slug: "halifax-personal-loan",
      description:
        "Explore Halifax personal loans with competitive rates, flexible repayment options, and reliable service.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718136403-fotosprestamo-halifax1uk.webp",
      date: "4 April 2025",
      type: "personal",
    },
    {
      title: "Nationwide Personal Loan",
      slug: "nationwide-personal-loan",
      description:
        "Explore Nationwide personal loans with competitive rates, flexible terms, and member benefits.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718136476-fotosprestamo-nationwide1uk.webp",
      date: "4 April 2025",
      type: "personal",
    },
    // Personal Loans (Fintech/Neobank)
    {
      title: "Revolut Personal Loan",
      slug: "revolut-personal-loan",
      description:
        "Explore Revolut personal loans offering quick decisions, flexible terms, and in-app management.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718136529-fotosprestamo-revoult1uk.webp",
      date: "4 April 2025",
      type: "fintech", // Could also be 'personal' depending on desired filter logic
    },
    {
      title: "Monzo Personal Loan",
      slug: "monzo-personal-loan",
      description:
        "Explore Monzo personal loans offering quick decisions, clear terms, and in-app management.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718136607-fotosprestamo-monzo2uk.webp",
      date: "4 April 2025",
      type: "neobank", // Could also be 'personal'
    },
    {
      title: "Starling Bank Personal Loan",
      slug: "starling-bank-personal-loan",
      description:
        "Explore Starling Bank personal loans with competitive rates, clear terms, and app-based management.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718136704-fotosprestamo-starlinkbanck1uk.webp",
      date: "4 April 2025",
      type: "neobank", // Could also be 'personal'
    },
    // SME Fintech Loans
    {
      title: "Funding Circle Business Loan",
      slug: "funding-circle-personal-loan", // Keep slug as created
      description:
        "Explore Funding Circle business loans offering fast and flexible financing solutions.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718136824-fotosprestamo-fundingcircle1uk.webp",
      date: "4 April 2025",
      type: "sme_fintech",
    },
    {
      title: "Funding Options Marketplace",
      slug: "funding-options-personal-loan", // Keep slug as created
      description:
        "Explore Funding Options, a leading platform connecting SMEs with diverse financing solutions.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718138018-fotosprestamo-fundingoption1uk.webp",
      date: "4 April 2025",
      type: "marketplace", // Specific type for marketplaces
    },
    {
      title: "iwoca Flexi-Loan",
      slug: "iwoca-personal-loan", // Keep slug as created
      description:
        "Explore the iwoca Flexi-Loan, offering fast working capital solutions for SMEs.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718137033-fotosprestamo-iwoca1uk.webp",
      date: "4 April 2025",
      type: "sme_fintech",
    },
    {
      title: "MarketFinance Business Credit",
      slug: "marketfinance-personal-loan", // Keep slug as created
      description:
        "Explore MarketFinance solutions for SMEs, including fast loans and invoice factoring.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718137315-fotosprestamo-fundingchange2uk.webp",
      date: "4 April 2025",
      type: "sme_fintech",
    },
    {
      title: "Funding Xchange Platform",
      slug: "funding-xchange-personal-loan", // Keep slug as created
      description:
        "Explore Funding Xchange, a smart platform helping SMEs compare financing options.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718136896-fotosprestamo-fundingchange1uk.webp",
      date: "4 April 2025",
      type: "marketplace", // Specific type for marketplaces
    },
    {
      title: "Capify Financing",
      slug: "capify-personal-loan", // Keep slug as created
      description:
        "Explore Capify financing solutions for SMEs, including merchant cash advances and loans.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718137374-fotosprestamo-capify1uk.webp",
      date: "4 April 2025",
      type: "sme_fintech",
    },
    {
      title: "Fleximize Loans",
      slug: "fleximize-personal-loan", // Keep slug as created
      description:
        "Explore Fleximize flexible loans offering personalized repayment options for SMEs.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718137416-fotosprestamo-fleximize1uk.webp",
      date: "4 April 2025",
      type: "sme_fintech",
    },
  ];

  // List of credit card content with types
  const creditCardsContent = [
    {
      title: "RBS Purchase & Balance Transfer Card",
      slug: "rbs-purchase-balance-transfer-card",
      description:
        "The RBS Purchase & Balance Transfer card offers 0% interest on purchases for up to 20 months and 0% on balance transfers for up to 18 months. No annual fee.",
      image:
        "https://media.topfinanzas.com/images/uk/rbs-purchase-balance-transfer-card.webp",
      date: "24 October 2025",
      type: "traditional",
    },
    {
      title: "Bank of Scotland Credit Cards",
      slug: "bank-of-scotland-credit-cards",
      description:
        "Bank of Scotland offers cards for everyday spending, balance transfers, and credit building. Check your eligibility without affecting your credit score.",
      image:
        "https://media.topfinanzas.com/images/uk/bank-of-scotland-credit-cards.webp",
      date: "24 October 2025",
      type: "traditional",
    },
    {
      title: "First Direct Credit Card",
      slug: "first-direct-credit-card",
      description:
        "The First Direct 1st card offers 0% interest on purchases for 12 months, competitive rates with no annual fee, and award-winning 24/7 customer service.",
      image:
        "https://media.topfinanzas.com/images/uk/first-direct-credit-card.webp",
      date: "24 October 2025",
      type: "traditional",
    },
    {
      title: "The Co-operative Bank Credit Card",
      slug: "the-co-operative-bank-credit-card",
      description:
        "The Co-operative Members card offers 0.5% cashback at Co-op stores and 0.3% everywhere else, with no annual fee.",
      image:
        "https://media.topfinanzas.com/images/uk/the-co-operative-bank-credit-card.webp",
      date: "24 October 2025",
      type: "traditional",
    },
    {
      title: "M&S Rewards Credit Card",
      slug: "ms-rewards-credit-card",
      description:
        "The M&S Rewards card offers points on all your spending at M&S and beyond, exclusive member benefits, and competitive rates.",
      image:
        "https://media.topfinanzas.com/images/uk/ms-rewards-credit-card.webp",
      date: "24 October 2025",
      type: "traditional",
    },
    {
      title: "Tesco Bank Clubcard Credit Cards",
      slug: "tesco-bank-clubcard-credit-cards",
      description:
        "Discover Tesco Bank Clubcard cards with 0% rates, low APR options, and Clubcard points on your everyday spending.",
      image:
        "https://media.topfinanzas.com/images/uk/tesco-bank-clubcard-credit-cards.webp",
      date: "24 October 2025",
      type: "traditional",
    },
    {
      title: "American Express Preferred Rewards Gold",
      slug: "american-express-preferred-rewards-gold-credit-card",
      description:
        "The American Express Gold card offers premium Membership Rewards points, comprehensive travel insurance, and exclusive lifestyle benefits.",
      image:
        "https://media.topfinanzas.com/images/uk/american-express-preferred-rewards-gold-credit-card.webp",
      date: "24 October 2025",
      type: "traditional",
    },
    {
      title: "Nationwide Building Society Credit Card",
      slug: "nationwide-building-society-credit-card",
      description:
        "The Nationwide Member card offers two 0% options: up to 24 months on balance transfers or 15 months on purchases.",
      image:
        "https://media.topfinanzas.com/images/uk/nationwide-building-society-credit-card.webp",
      date: "24 October 2025",
      type: "traditional",
    },
    {
      title: "HSBC Rewards Credit Card",
      slug: "hsbc-rewards-credit-card",
      description:
        "The HSBC Rewards card offers points on your everyday spending, 0% interest on purchases for 6 months, and a welcome bonus.",
      image:
        "https://media.topfinanzas.com/images/uk/hsbc-rewards-credit-card.webp",
      date: "24 October 2025",
      type: "traditional",
    },
    {
      title: "Ocean Credit Card",
      slug: "ocean-credit-card",
      description:
        "The Ocean card offers flexible credit limits with no annual fee. Check your eligibility quickly without affecting your credit score.",
      image: "https://media.topfinanzas.com/images/uk/ocean-credit-card.webp",
      date: "23 October 2025",
      type: "fintech",
    },
    {
      title: "Fluid Credit Card",
      slug: "fluid-credit-card",
      description:
        "The Fluid card offers 0% interest on balance transfers for 9 months, helping you save and pay off debt faster.",
      image: "https://media.topfinanzas.com/images/uk/fluid-credit-card.webp",
      date: "23 October 2025",
      type: "fintech",
    },
    {
      title: "John Lewis Partnership Card",
      slug: "john-lewis-partnership-card",
      description:
        "The John Lewis Partnership card lets you earn valuable points on your everyday purchases at John Lewis, Waitrose, and beyond.",
      image:
        "https://media.topfinanzas.com/images/uk/john-lewis-partnership-card.webp",
      date: "23 October 2025",
      type: "traditional",
    },
    {
      title: "118 118 Money Credit Card",
      slug: "118-118-money-credit-card",
      description:
        "The 118 118 Money card offers personalized limits and clear terms to help you build or improve your credit history.",
      image:
        "https://media.topfinanzas.com/images/uk/118-118-money-credit-card.webp",
      date: "23 October 2025",
      type: "fintech",
    },
    {
      title: "Vanquis Credit Card",
      slug: "vanquis-credit-card",
      description:
        "Vanquis cards offer personalized limits and award-winning features for building credit, ideal for improving your profile.",
      image: "https://media.topfinanzas.com/images/uk/vanquis-credit-card.webp",
      date: "23 October 2025",
      type: "traditional",
    },
    {
      title: "Capital One UK Classic Card",
      slug: "capital-one-uk-credit-card",
      description:
        "The Capital One Classic card helps you improve your credit with a manageable initial limit, flexible payments, and no annual fee.",
      image:
        "https://media.topfinanzas.com/images/uk/capital-one-uk-credit-card.webp",
      date: "23 October 2025",
      type: "traditional",
    },
    {
      title: "Marbles Credit Card",
      slug: "marbles-credit-card",
      description:
        "The Marbles card helps you manage your finances with a manageable limit, fast eligibility checker, and flexible tools.",
      image: "https://media.topfinanzas.com/images/uk/marbles-credit-card.webp",
      date: "23 October 2025",
      type: "fintech",
    },
    {
      title: "Aqua Credit Card",
      slug: "aqua-credit-card",
      description:
        "The Aqua card offers personalized limits and 24/7 fraud protection to help you build credit with total confidence.",
      image: "https://media.topfinanzas.com/images/uk/aqua-credit-card.webp",
      date: "23 October 2025",
      type: "fintech",
    },
    {
      title: "Bip Credit Card",
      slug: "bip-credit-card",
      description:
        "Discover the Bip card: a digital credit solution with no physical card, no hidden fees, and total control from your phone.",
      image: "https://media.topfinanzas.com/images/uk/bip-credit-card.webp",
      date: "23 October 2025",
      type: "fintech",
    },
    {
      title: "Lloyds Bank Credit Card",
      slug: "lloyds-bank-credit-card",
      description:
        "Explore the Lloyds Bank card with competitive rates, no annual fee, and a daily cashback offers program.",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/719906900-top_prestamos-y-tarjetas-uk_v1-16.webp",
      date: "2 April 2025",
      type: "traditional",
    },
    {
      title: "NatWest Credit Card",
      slug: "natwest-credit-card",
      description:
        "Discover the NatWest card with MyRewards program, mobile integration, and flexible payment options for your spending.",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/718644866-top_prestamos-y-tarjetas-uk_v1_mesa-de-trabajo-1-copia.webp",
      date: "2 April 2025",
      type: "traditional",
    },
    {
      title: "Santander UK Credit Card",
      slug: "santander-uk-credit-card",
      description:
        "Meet the Santander UK card with All in One cashback, no foreign transaction fees, and balance transfer options.",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/718644935-top_prestamos-y-tarjetas-uk_v1-03.webp",
      date: "2 April 2025",
      type: "traditional",
    },
    {
      title: "TSB Credit Card",
      slug: "tsb-credit-card",
      description:
        "Explore the TSB card with everyday value, low fees, and full integration with TSB banking platforms.",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/718645155-top_prestamos-y-tarjetas-uk_v1-06.webp",
      date: "2 April 2025",
      type: "traditional",
    },
    {
      title: "Virgin Money Credit Card",
      slug: "virgin-money-credit-card",
      description:
        "Discover the Virgin Money card with exclusive rewards, Virgin points, and offers across the Virgin ecosystem.",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/718645561-top_prestamos-y-tarjetas-uk_v1-08.webp",
      date: "2 April 2025",
      type: "traditional",
    },
    {
      title: "Halifax World Elite MasterCard",
      slug: "halifax-world-elite-mastercard",
      description:
        "Explore the Halifax World Elite MasterCard, offering premium travel benefits, comprehensive insurance, and exclusive rewards.",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/719906760-top_prestamos-y-tarjetas-uk_v1-14.webp",
      date: "4 April 2025",
      type: "traditional",
    },
    {
      title: "Monzo Credit Card",
      slug: "monzo-credit-card",
      description:
        "Meet the Monzo card with real-time spending notifications, budgeting tools, and 100% digital management.",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/719907302-top_prestamos-y-tarjetas-uk_v1-18.webp",
      date: "2 April 2025",
      type: "neobank",
    },
    {
      title: "Revolut Credit Card",
      slug: "revolut-credit-card",
      description:
        "Explore the Revolut card with multi-currency capabilities, competitive rates, and total control for international lifestyles.",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/718645626-top_prestamos-y-tarjetas-uk_v1-10.webp",
      date: "2 April 2025",
      type: "fintech",
    },
    {
      title: "Starling Bank Credit Card",
      slug: "starling-bank-credit-card",
      description:
        "Discover the Starling Bank card with transparent pricing, ethical banking, and advanced digital features for your money.",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/719907598-top_prestamos-y-tarjetas-uk_v1-20.webp",
      date: "2 April 2025",
      type: "neobank",
    },
    {
      title: "Curve Credit Card",
      slug: "curve-credit-card",
      description:
        "Meet the innovative Curve card that consolidates all your cards into one with smart features and rewards.",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/719907701-top_prestamos-y-tarjetas-uk_v1-22.webp",
      date: "2 April 2025",
      type: "fintech",
    },
    {
      title: "Barclaycard Avios Plus Card",
      slug: "barclaycard-avios-plus",
      description:
        "The Barclaycard Avios Plus card offers premium travel benefits and generous Avios points to enhance your experience.",
      image: "https://media.topfinanzas.com/images/barclaycard-avios-plus.webp",
      date: "23 October 2025",
      type: "traditional",
    },
    {
      title: "Yonder Credit Card",
      slug: "yonder-credit-card",
      description:
        "The free Yonder card awards 1 point for every £1 spent with no foreign transaction fees and exclusive dining bonuses.",
      image:
        "https://cdn.prod.website-files.com/6209512878b45f39119ebfb5/6839943447d06a3292522ecd_head-p-800.webp",
      date: "23 October 2025",
      type: "fintech",
    },
    {
      title: "Zopa Credit Card",
      slug: "zopa-credit-card",
      description:
        "The Zopa card gives you total control with an intuitive app, instant notifications, and innovative features like Credit Cushion.",
      image: "https://media.topfinanzas.com/images/uk/zopa-credit-card.webp",
      date: "23 October 2025",
      type: "fintech",
    },
  ];

  // Date parsing utility function
  const parseDate = (dateString: string): number => {
    if (!dateString) return 0;
    const value = dateString.trim();
    const patterns = [
      /^(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})$/,
      /^([A-Za-z]+)\s+(\d{1,2}),?\s+(\d{4})$/,
      /^(\d{4})-(\d{2})-(\d{2})$/,
    ];
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    for (const pattern of patterns) {
      const match = value.match(pattern);
      if (match) {
        let day: number, month: number, year: number;
        if (pattern === patterns[0]) {
          day = parseInt(match[1], 10);
          month = monthNames.findIndex(
            (m) => m.toLowerCase() === match[2].toLowerCase(),
          );
          year = parseInt(match[3], 10);
        } else if (pattern === patterns[1]) {
          month = monthNames.findIndex(
            (m) => m.toLowerCase() === match[1].toLowerCase(),
          );
          day = parseInt(match[2], 10);
          year = parseInt(match[3], 10);
        } else {
          year = parseInt(match[1], 10);
          month = parseInt(match[2], 10) - 1;
          day = parseInt(match[3], 10);
        }
        if (month !== -1 && !isNaN(day) && !isNaN(year)) {
          return Date.UTC(year, month, day);
        }
      }
    }
    const t = Date.parse(value);
    return isNaN(t) ? 0 : t;
  };

  // Sort and filter content based on selected category and type
  const sortedCreditCards = [...creditCardsContent].sort(
    (a, b) => parseDate(b.date || "") - parseDate(a.date || ""),
  );

  const sortedLoans = [...allLoansContent].sort(
    (a, b) => parseDate(b.date || "") - parseDate(a.date || ""),
  );

  const filteredCreditCards =
    activeCreditCardType === "all"
      ? sortedCreditCards
      : sortedCreditCards.filter((card) => card.type === activeCreditCardType);

  const filteredLoans =
    activeLoanType === "all"
      ? sortedLoans
      : sortedLoans.filter((loan) => loan.type === activeLoanType);

  // Custom content for this category page
  const content = (
    <div>
      <h1 className="text-4xl font-bold mb-6 text-left sm:text-left">
        Financial Solutions
      </h1>

      <p className="text-lg text-gray-700 mb-8 leading-tight text-left sm:text-left">
        Find detailed information on the best credit cards available,
        application requirements, and comprehensive guides to help you choose
        the best option for your financial needs.
      </p>

      {/* Main category selector */}
      <div className="flex mb-8 border-b border-gray-200">
        {Object.entries(categories).map(([key, value]) => (
          <button
            key={key}
            onClick={() => {
              setActiveCategory(key);
              // Reset filters when changing main categories
              setActiveCreditCardType("all");
              setActiveLoanType("all");
            }}
            className={`px-6 py-3 font-medium text-md transition-colors focus:outline-none ${
              activeCategory === key
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            {value}
          </button>
        ))}
      </div>

      {activeCategory === "creditCards" && (
        <div className="mb-8">
          {/* Subcategory filter for credit cards */}
          <div className="flex flex-wrap gap-2 mb-6">
            {Object.entries(creditCardTypes).map(([key, value]) => (
              <button
                key={key}
                onClick={() => setActiveCreditCardType(key)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  activeCreditCardType === key
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {value}
              </button>
            ))}
          </div>

          {/* Credit cards grid with fixed positioning to accommodate Image components */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCreditCards.map((post) => (
              <div
                key={post.slug}
                className="relative"
                style={{ position: "relative" }}
              >
                <FeaturedPostCard
                  title={post.title}
                  description={post.description}
                  image={post.image}
                  slug={post.slug}
                  category="Financial Solutions"
                  categorySlug="/soluciones-financieras"
                  date={post.date}
                  type={post.type}
                  showBadge={true}
                  priority={
                    post.type === "traditional" &&
                    activeCreditCardType === "traditional"
                  }
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {activeCategory === "loans" && (
        <div className="mb-8">
          {/* Subcategory filter for loans */}
          <div className="flex flex-wrap gap-2 mb-6">
            {Object.entries(loanTypes).map(([key, value]) => (
              <button
                key={key}
                onClick={() => setActiveLoanType(key)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  activeLoanType === key
                    ? "bg-green-600 text-white" // Use a different color for loan filters
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {value}
              </button>
            ))}
          </div>

          {/* Loans grid with fixed positioning for Image components */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredLoans.map((post) => (
              <div
                key={post.slug}
                className="relative"
                style={{ position: "relative" }}
              >
                <FeaturedPostCard
                  title={post.title}
                  description={post.description}
                  image={post.image}
                  slug={post.slug}
                  category="Financial Solutions"
                  categorySlug="/soluciones-financieras"
                  date={post.date}
                  type={post.type}
                  showBadge={true}
                  priority={post.type === "guide" && activeLoanType === "guide"}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CTA section */}
      <div className="bg-blue-50 p-8 rounded-xl shadow-sm mb-10">
        <h2 className="text-2xl font-bold mb-4 text-left sm:text-left">
          Looking for the perfect card for you?
        </h2>
        <p className="text-gray-700 mb-6 text-left sm:text-left">
          Use our credit card recommender to find the option that best fits your
          financial profile and specific needs.
        </p>
        <Link
          href="/recomendador-de-tarjetas-de-credito-p1"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 inline-block transition-colors rounded-full"
        >
          Go to Recommender
        </Link>
      </div>
    </div>
  );

  return (
    <BlogLayout
      metadata={{
        title: "Financial Solutions - TopFinanzas US",
        description:
          "Discover information on the best credit cards, requirements, and comprehensive guides to choose the right option for your financial needs.",
      }}
    >
      {content}
    </BlogLayout>
  );
}
