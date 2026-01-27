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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const allLoansContent: any[] = [
    {
      title: "American Express Platinum Card Requirements",
      slug: "american-express-platinum-card-requirements",
      description:
        "The Platinum Card from American Express offers outstanding perks. Check credit score, income, and residency requirements to qualify.",
      image:
        "https://media.topfinanzas.com/images/american-express-platinum-card-requirements.webp",
      date: "October 31, 2025",
      type: "traditional",
      category: "Credit Cards",
    },
    {
      title: "Ink Business Unlimited Credit Card Benefits",
      slug: "ink-business-unlimited-credit-card-benefits",
      description:
        "With no annual fee and unlimited 1.5% cash back, Ink Business Unlimited is an essential tool for scaling your business.",
      image:
        "https://media.topfinanzas.com/images/ink-business-unlimited-credit-card-benefits.webp",
      date: "January 28, 2026",
      type: "traditional",
      category: "Credit Cards",
    },
    {
      title: "Ink Business Unlimited® Credit Card Requirements",
      slug: "ink-business-unlimited-credit-card-requirements",
      description:
        "Need to qualify for Ink Business Unlimited? Check credit score needs, business proof, and income requirements to unlock unlimited cash back.",
      image:
        "https://media.topfinanzas.com/images/ink-business-unlimited-credit-card-requirements.webp",
      date: "January 27, 2026",
      type: "traditional",
      category: "Credit Cards",
    },
    {
      title: "Discover the Benefits of the American Express® Gold Card",
      slug: "benefits-of-the-american-express-gold-card",
      description:
        "Maximize rewards on dining, travel, and daily spending. Turn expenses into experiences with the Amex Gold Card. Unlock its benefits today!",
      image:
        "https://media.topfinanzas.com/images/benefits-of-the-american-express-gold-card.webp",
      date: "October 31, 2025",
      type: "traditional",
      category: "Credit Cards",
    },
    {
      title:
        "Requirements to Qualify for the American Express® Gold Card: What You Need to Know",
      slug: "requirements-to-qualify-for-the-american-express-gold-card",
      description:
        "Unlock the Gold Standard: Great credit, steady income, and endless rewards await. See if the Amex Gold Card is for you!",
      image:
        "https://media.topfinanzas.com/images/requirements-to-qualify-for-the-american-express-gold-card.webp",
      date: "January 27, 2026",
      type: "traditional",
      category: "Credit Cards",
    },
    {
      title:
        "Benefits of the Citi® Diamond Preferred® Card: The best choice for balance transfers",
      slug: "benefits-of-the-citi-diamond-preferred-card",
      description:
        "Save big with 0% APR for 21 months on balance transfers. The Citi® Diamond Preferred® Card is your go-to tool to manage debt smarter—no annual fee!",
      image:
        "https://media.topfinanzas.com/images/benefits-of-the-citi-diamond-preferred-card.webp",
      date: "October 31, 2025",
      type: "traditional",
      category: "Credit Cards",
    },
    {
      title: "Requirements to Qualify for the Citi® Diamond Preferred® Card",
      slug: "requirements-to-qualify-for-the-citi-diamond-preferred-card",
      description:
        "Good credit, steady income, and a clean history—qualify for the Citi® Diamond Preferred® Card and enjoy 0% APR for 21 months.",
      image:
        "https://media.topfinanzas.com/images/requirements-to-qualify-for-the-citi-diamond-preferred-card.webp",
      date: "January 27, 2026",
      type: "traditional",
      category: "Credit Cards",
    },
    {
      title:
        "Benefits of the Wells Fargo Reflect® Card: Maximize your savings on interest",
      slug: "benefits-of-the-wells-fargo-reflect-card",
      description:
        "Save big with 0% APR for 21 months on purchases and balance transfers. The Wells Fargo Reflect® Card makes managing debt simple and cost-effective—no annual fee required!",
      image:
        "https://media.topfinanzas.com/images/benefits-of-the-wells-fargo-reflect-card.webp",
      date: "January 27, 2026",
      type: "tips",
      category: "Credit Cards",
    },
    {
      title: "Requirements to Qualify for the Wells Fargo Reflect® Card",
      slug: "requirements-to-qualify-for-the-wells-fargo-reflect-card",
      description:
        "Good credit unlocks 21 months of 0% APR with the Wells Fargo Reflect® Card. Simplify your finances today!",
      image:
        "https://media.topfinanzas.com/images/requirements-to-qualify-for-the-wells-fargo-reflect-card.webp",
      date: "January 27, 2026",
      type: "traditional",
      category: "Credit Cards",
    },
    {
      title: "Requirements to qualify for the Discover it® Cash Back",
      slug: "requirements-to-qualify-for-the-discover-it-cash-back",
      description:
        "Qualifying for the Discover it® Cash Back card requires good credit. Learn about the credit score, income, and history requirements.",
      image:
        "https://media.topfinanzas.com/images/requirements-to-qualify-for-the-discover-it-cash-back.webp",
      date: "January 27, 2026",
      type: "traditional",
      category: "Credit Cards",
    },
    {
      title:
        "Benefits of the Discover it® Cash Back: Smart rewards and savings",
      slug: "benefits-of-the-discover-it-cash-back",
      description:
        "The Discover it® Cash Back offers flexible rewards, 5% cash back in rotating categories, and no annual fee. Learn why it might be the perfect tool for you.",
      image:
        "https://media.topfinanzas.com/images/benefits-of-the-discover-it-cash-back.webp",
      date: "January 27, 2026",
      type: "tips",
      category: "Credit Cards",
    },
    {
      title:
        "Benefits Capital One Savor Cash Rewards Credit Card: Maximize Your Rewards",
      slug: "benefits-capital-one-savor-cash-rewards-credit-card",
      description:
        "A card designed for life’s tasty moments. Explore the unlimited cash back and travel perks of the Capital One Savor Card.",
      image:
        "https://media.topfinanzas.com/images/benefits-capital-one-savor-cash-rewards-credit-card.webp",
      date: "January 27, 2026",
      type: "tips",
      category: "Credit Cards",
    },
    {
      title: "Requirements for the Capital One Savor Cash Rewards Credit Card",
      slug: "requirements-for-the-capital-one-savor-cash-rewards-credit-card",
      description:
        "The Capital One Savor Card is targeted at individuals with excellent credit. Learn about the requirements, eligibility factors, and how to apply.",
      image:
        "https://media.topfinanzas.com/images/requirements-for-the-capital-one-savor-cash-rewards-credit-card.webp",
      date: "January 27, 2026",
      type: "traditional",
      category: "Credit Cards",
    },
    {
      title:
        "Benefits for the Bank of America® Travel Rewards Credit Card for Students",
      slug: "benefits-for-the-bank-of-america-travel-rewards-credit-card-for-students",
      description:
        "The Bank of America® Travel Rewards Credit Card for Students is designed for young adventurers looking to make the most of their travel experiences.",
      image:
        "https://media.topfinanzas.com/images/benefits-for-the-bank-of-america-travel-rewards-credit-card-for-students.webp",
      date: "October 31, 2025",
      type: "tips",
      category: "Credit Cards",
    },
    {
      title:
        "Requirements for the Bank of America® Travel Rewards Credit Card for Students",
      slug: "requirements-for-the-bank-of-america-travel-rewards-credit-card-for-students",
      description:
        "Essential steps to qualify for the perfect student credit card. Learn about the requirements and application process for the Bank of America® Travel Rewards Credit Card for Students.",
      image:
        "https://media.topfinanzas.com/images/requirements-for-the-bank-of-america-travel-rewards-credit-card-for-students.webp",
      date: "October 31, 2025",
      type: "traditional",
      category: "Credit Cards",
    },
    {
      title:
        "Benefits for the Bank of America® Unlimited Cash Rewards Credit Card for Students",
      slug: "benefits-for-the-bank-of-america-unlimited-cash-rewards-credit-card-for-students",
      description:
        "The Bank of America® Unlimited Cash Rewards Credit Card for Students is the ultimate tool for those looking to earn while they spend.",
      image:
        "https://media.topfinanzas.com/images/benefits-for-the-bank-of-america-unlimited-cash-rewards-credit-card-for-students.webp",
      date: "October 31, 2025",
      type: "tips",
      category: "Credit Cards",
    },
    {
      title:
        "Requirements for the Bank of America® Unlimited Cash Rewards Credit Card for Students",
      slug: "requirements-for-the-bank-of-america-unlimited-cash-rewards-credit-card-for-students",
      description:
        "A complete guide to meeting application requirements for U.S.-based students looking to build credit responsibly with Bank of America.",
      image:
        "https://media.topfinanzas.com/images/requirements-for-the-bank-of-america-unlimited-cash-rewards-credit-card-for-students.webp",
      date: "October 31, 2025",
      type: "traditional",
      category: "Loans",
    },
    {
      title: "Benefits QuickBridge Loans",
      slug: "benefits-quickbridge-loans",
      description:
        "QuickBridge Loans provide fast, flexible funding for small businesses to grow, manage cash flow, or invest—without the red tape.",
      image:
        "https://media.topfinanzas.com/images/benefits-quickbridge-loans.webp",
      date: "October 31, 2025",
      type: "traditional",
      category: "Loans",
    },
    {
      title: "QuickBridge Loans Requirements",
      slug: "quickbridge-loans-requirements",
      description:
        "A straightforward guide to securing your next business loan. Learn about QuickBridge Loans eligibility requirements and application process.",
      image:
        "https://media.topfinanzas.com/images/quickbridge-loans-requirements.webp",
      date: "October 31, 2025",
      type: "traditional",
      category: "Loans",
    },
    {
      title: "Bank of America Business Loans Requirements: Your Best Option",
      slug: "bank-of-america-business-loans-requirements",
      description:
        "Unlock the financing you need for your business with simple requirements. Learn about Bank of America's business loan eligibility and application process.",
      image:
        "https://media.topfinanzas.com/images/bank-of-america-business-loans-requirements.webp",
      date: "October 24, 2025",
      type: "traditional",
      category: "Loans",
    },
    {
      title: "Bank of America Business Loan Benefits",
      slug: "bank-of-america-business-loans-benefits",
      description:
        "Maximize your business potential with Bank of America. Discover tailored loans, credit lines, and rewards designed to fuel your growth.",
      image:
        "https://media.topfinanzas.com/images/bank-of-america-business-loans-benefits.webp",
      date: "October 31, 2025",
      type: "traditional",
      category: "Loans",
    },
    {
      title: "National Funding Benefits",
      slug: "national-funding-benefits",
      description:
        "As a small business owner, finding reliable and fast financing options can be one of the most challenging aspects of running your business. Discover the benefits of National Funding.",
      image:
        "https://media.topfinanzas.com/images/national-funding-benefits.webp",
      date: "October 24, 2025",
      type: "sme_fintech",
      category: "Loans",
    },
    {
      title: "Requirements for National Funding Loans",
      slug: "requirements-for-national-funding-loans",
      description:
        "Unlock your business potential with National Funding. Learn about the requirements, application journey, and eligibility factors for quick and flexible financing.",
      image:
        "https://media.topfinanzas.com/images/requirements-for-national-funding-loans.webp",
      date: "October 24, 2025",
      type: "sme_fintech",
      category: "Loans",
    },
    {
      title: "Smarter financing for your business: Fundbox benefits",
      slug: "smarter-financing-for-your-business-fundbox-benefits",
      description:
        "Simplifying cash flow management for modern businesses. Fundbox offers flexible lines of credit to keep your operations moving.",
      image:
        "https://media.topfinanzas.com/images/smarter-financing-for-your-business-fundbox-benefits.webp",
      date: "October 24, 2025",
      type: "sme_fintech",
      category: "Loans",
    },
    {
      title: "Fundbox Loan Requirements",
      slug: "fundbox-loan-requirements",
      description:
        "Fundbox offers small business owners an easy way to manage cash flow. Learn about the requirements, eligibility factors, and how to apply.",
      image:
        "https://media.topfinanzas.com/images/fundbox-loan-requirements.webp",
      date: "October 24, 2025",
      type: "sme_fintech",
      category: "Loans",
    },
  ];

  // List of credit card content with types
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const creditCardsContent: any[] = [];

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
                  categorySlug="/financial-solutions"
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
                  categorySlug="/financial-solutions"
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
