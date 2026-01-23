"use client";

import { BlogLayout } from "@/components/mdx/blog-layout";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

// Define the structure for each post item
interface PostItem {
  title: string;
  slug: string;
  description: string;
  image: string;
  date?: string; // Optional date
  category: string; // Add category for filtering
}

// Define filter categories
const categories = {
  all: "All Posts",
  creditCards: "Credit Cards",
  loans: "Loans",
  debt: "Debt Management",
  guide: "Guides",
};

export default function PersonalFinanceArchivePage() {
  // State for active category filter - with client-side initialization via useEffect
  const [activeCategory, setActiveCategory] = useState("all");

  // Force client-side state initialization to ensure React hydration
  useEffect(() => {
    // Keep the default value but force client-side initialization
    setActiveCategory("all");
  }, []);
  // Array of all posts in this category
  const allPosts: PostItem[] = [
    {
      title:
        "How to Track Your Spending for 30 Days and Finally Know Where Your Money Goes | Top Finance UK",
      slug: "how-to-track-your-spending-for-30-days",
      description:
        "Stop guessing about your finances. Learn a simple 30-day expense tracking method to discover where your money really goes and build lasting money management habits.",
      image:
        "https://media.topfinanzas.com/images/uk/how-to-track-your-spending-for-30-days.webp",
      date: "2 December 2025",
      category: "guide",
    },
    {
      title:
        "The Psychology of Spending: How to Stop Impulse Buys | Top Finance UK",
      slug: "the-psychology-of-spending-how-to-stop-impulse-buys-and-start-mindful-saving",
      description:
        "Discover why we impulse buy and learn practical strategies to master your money mindset. Start mindful saving today with our expert guide.",
      image:
        "https://media.topfinanzas.com/images/uk/the-psychology-of-spending-how-to-stop-impulse-buys-and-start-mindful-saving.webp",
      date: "25 November 2025",
      category: "guide",
    },
    {
      title:
        'Automate Your Wealth: Setting Up the "Set It and Forget It" Finance System | Top Finance UK',
      slug: "automate-your-wealth",
      description:
        'Learn how to automate your finances in the UK with our "Set It and Forget It" system. Save time, reduce stress, and build wealth effortlessly with practical tips.',
      image:
        "https://media.topfinanzas.com/images/uk/automate-your-wealth.webp",
      date: "19 November 2025",
      category: "guide",
    },
    {
      title:
        "Stop Living Paycheck to Paycheck: 3 Shifts to Break the Cycle Today - Top Finance UK",
      slug: "stop-living-paycheck-to-paycheck",
      description:
        "Escape the paycheck-to-paycheck cycle with three practical cash flow shifts. Learn how UK families are building breathing room without dramatic sacrifices or extreme budgets.",
      image:
        "https://media.topfinanzas.com/images/budgetbee/stop-living-paycheck-to-paycheck.webp",
      date: "13 November 2025",
      category: "guide",
    },
    {
      title:
        "The 5-Minute Financial Health Check: Where Does Your Money Go? - Top Finance UK",
      slug: "financial-health-check-where-does-your-money-go",
      description:
        "Discover where your money really goes with our quick UK financial health check. Learn simple expense tracking methods that reveal spending patterns and help you take control in just minutes a day.",
      image:
        "https://media.topfinanzas.com/images/uk/financial-health-check-money-tracking.webp",
      date: "5 November 2025",
      category: "guide",
    },
    {
      title: "The Hidden Costs of Homeownership | Top Finanzas US",
      slug: "hidden-costs-of-homeownership",
      description:
        "Discover the unexpected expenses that catch UK homeowners off guard. From maintenance to insurance, learn how to budget for the hidden costs of owning a home.",
      image:
        "https://media.topfinanzas.com/images/uk/hidden-costs-homeownership.webp",
      date: "28 October 2025",
      category: "guide",
    },
    {
      title:
        "Inflation-Proof Your Life: 7 Smart Money Moves to Make When Prices Are High | Top Finance UK",
      slug: "inflation-proof-your-life",
      description:
        "Discover seven practical strategies to protect your purchasing power during high inflation. Learn how to cut invisible spending leaks, lock in fixed rates, build emergency buffers, and keep your personal finance on track when costs are rising.",
      image:
        "https://media.topfinanzas.com/images/inflation-proof-your-life-7-smart-money-moves.webp",
      date: "15 October 2025",
      category: "guide",
    },
    {
      title:
        "Best Personal Loans in the UK: Your Complete Guide | Top Finance UK",
      slug: "best-personal-loans",
      description:
        "Comprehensive guide to the UK's top personal loans, including rates, terms, and application requirements from leading lenders like Nationwide, Santander, and Barclays.",
      image: "https://media.topfinanzas.com/images/best-personal-loans.webp",
      date: "30 March 2025",
      category: "loans",
    },
    {
      title:
        "Top Rewards Credit Cards to Maximize Your Spending | Top Finance UK",
      slug: "best-rewards-credit-cards",
      description:
        "Discover the best rewards credit cards that turn your everyday spending into valuable perks. From cashback to points and miles, find the perfect card.",
      image:
        "https://media.topfinanzas.com/images/uk/Top_Finance_uk_credit_cards.webp",
      date: "3 April 2025",
      category: "creditCards",
    },
    {
      title:
        "Best Cashback Credit Cards for Maximizing Your Rewards | Top Finance UK",
      slug: "cashback-credit-cards",
      description:
        "Discover the top cashback credit cards! Compare benefits like unlimited rewards, flexible redemption options, and introductory APR offers.",
      image: "https://media.topfinanzas.com/images/uk/download-8-1.webp",
      date: "3 April 2025",
      category: "creditCards",
    },
    {
      title:
        "Credit Cards - Types, Benefits, and Keys to Financial Health | Top Finance UK",
      slug: "credit-card-types-benefits",
      description:
        "Discover everything you need to know about credit cards, from types and benefits to tips for responsible usage and maintaining healthy finances.",
      image:
        "https://media.topfinanzas.com/images/uk/Top_Finanzas_Top_tarjeta_de_credito-1.webp",
      date: "3 April 2025",
      category: "creditCards",
    },
    {
      title: "Practical Guide to Getting Out of Debt | Top Finance UK",
      slug: "getting-out-of-debt",
      description:
        "Feeling overwhelmed by debt? Get practical strategies for getting out of debt, building an emergency fund, and taking control of your finances.",
      image:
        "https://media.topfinanzas.com/images/uk/Top_Finance_how_to_get_out_of_debt.webp",
      date: "3 April 2025",
      category: "debt",
    },
    {
      title: "Top Credit Cards With No Annual Fees | Top Finance UK",
      slug: "no-annual-fee-credit-cards",
      description:
        "Find the best no annual fee credit cards with great cashback, rewards, and flexible benefits. Perfect for managing expenses while saving on fees.",
      image:
        "https://media.topfinanzas.com/images/uk/Top_Finance_credit_cards_without_annual_fee.webp",
      date: "3 April 2025",
      category: "creditCards",
    },
    {
      title: "Personal Loans - A Strategy for Managing Debt | Top Finance UK",
      slug: "personal-loans-debt-strategy",
      description:
        "Discover how personal loans can help you consolidate debt and manage your finances efficiently. Learn how to choose the right loan for your needs.",
      image:
        "https://media.topfinanzas.com/images/uk/Top-Finances_personal_loans.webp",
      date: "3 April 2025",
      category: "loans",
    },
    {
      title:
        "5 Essential Tips for Choosing an Online Loan: Quick Guide | Top Finance UK",
      slug: "tips-for-choosing-an-online-loan",
      description:
        "Navigate the world of online loans with confidence using these essential tips to find the best rates and terms for your financial needs.",
      image:
        "https://media.topfinanzas.com/images/uk/choosing-online-loan-uk.webp",
      date: "30 March 2025",
      category: "loans",
    },
    {
      title:
        "Best Credit Cards with 0% Intro APR Offers in the UK | Top Finance UK",
      slug: "top-credit-cards-0-intro-apr",
      description:
        "Compare the best credit cards offering 0% introductory APR on purchases and balance transfers in the UK. Save money on interest and manage debt effectively.",
      image: "https://media.topfinanzas.com/images/uk/APR.webp",
      date: "3 April 2025",
      category: "creditCards",
    },
    {
      title:
        "Understanding Credit Card Interest Rates - A Consumer Guide | Top Finance UK",
      slug: "understanding-credit-card-interest-rates",
      description:
        "Learn how credit card interest rates work, including APR calculations, and discover ways to manage and minimize your debt effectively.",
      image: "https://media.topfinanzas.com/images/uk/download-5-2.webp",
      date: "3 April 2025",
      category: "creditCards",
    },
    {
      title:
        "What Is Financial Health? A Quick Guide to Checking Your Vitals | Top Finance UK",
      slug: "what-is-financial-health",
      description:
        "A simple UK-focused guide to checking your money vitals—cash flow, savings, borrowing, and habits—plus quick steps to improve your financial health.",
      image:
        "https://media.topfinanzas.com/images/uk/what-is-financial-health.webp",
      date: "13 August 2025",
      category: "guide",
    },
    {
      title:
        "Money Management for Beginners: Where Do I Even Start? | Top Finance UK",
      slug: "money-management-for-beginners",
      description:
        "New to personal finance? Learn simple UK-based steps to budget, save, manage debt, and build steady money habits that stick.",
      image:
        "https://media.topfinanzas.com/images/uk/money-management-for-beginners.webp",
      date: "13 August 2025",
      category: "guide",
    },
    {
      title:
        "Setting Financial Goals: A Beginner's Guide to Personal Finance Planning | Top Finance UK",
      slug: "setting-financial-goals",
      description:
        "Learn how to set SMART financial goals, align your budget, and build habits that stick. A simple UK-focused personal finance guide for beginners.",
      image:
        "https://media.topfinanzas.com/images/uk/setting-financial-goals.webp",
      date: "15 August 2025",
      category: "guide",
    },
    {
      title:
        "Side Hustle or Second Job? How to Choose the Right Income Booster",
      slug: "side-hustle-or-second-job",
      description:
        "With rising living costs across the UK, many people are seeking ways to boost their income. Whether you're considering a traditional second job or exploring the world of side hustles, making the right choice can significantly impact your personal finance goals and lifestyle.",
      image: "https://media.topfinanzas.com/images/side-hustle-second-job.webp",
      date: "27 August 2025",
      category: "guide",
    },
    {
      title:
        "Beyond Spreadsheets: Create a Personal Finance Budget You'll Actually Stick To | Top Finance UK",
      slug: "creating-a-budget-youll-actually-stick-to",
      description:
        "A modern UK-friendly budgeting guide covering 50/30/20, zero‑based budgeting, digital pots, and a 7‑day quick start — built to help you actually stick to it.",
      image: "https://media.topfinanzas.com/images/uk/modern-budget-guide.webp",
      date: "4 September 2025",
      category: "guide",
    },
    {
      title:
        "What Is 'Lifestyle Creep' and How Is It Silently Draining Your Wallet? | Top Finance UK",
      slug: "what-is-lifestyle-creep",
      description:
        "Discover how lifestyle creep gradually increases your spending as your income grows, and learn practical strategies to prevent this silent wealth-drainer from sabotaging your personal finance goals whilst still enjoying life.",
      image:
        "https://media.topfinanzas.com/images/lifestyle-creep-personal-finance.webp",
      date: "9 October 2025",
      category: "guide",
    },
    {
      title:
        "Financial Uncoupling: A Compassionate Guide to Separating Finances During a Breakup | Top Finance UK",
      slug: "financial-uncoupling-separating-finances-during-breakup",
      description:
        "Practical UK guidance on untangling joint accounts, managing shared debts, protecting your credit, and rebuilding financial independence after a relationship ends.",
      image:
        "https://media.topfinanzas.com/images/uk/financial-uncoupling-separating-finances-during-breakup.webp",
      date: "23 October 2025",
      category: "guide",
    },
    // Add other posts here as needed
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

  // Sort posts by date (newest first)
  const sortedPosts = [...allPosts].sort(
    (a, b) => parseDate(b.date || "") - parseDate(a.date || ""),
  );

  // Filter posts based on the selected category
  const filteredPosts =
    activeCategory === "all"
      ? sortedPosts
      : sortedPosts.filter((post) => post.category === activeCategory);

  const content = (
    <div data-category="personal-finance">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">
        Personal Finance Guides
      </h1>
      <p className="text-lg text-gray-700 mb-8 leading-tight">
        Explore our guides on credit cards, loans, debt management, and other
        personal finance topics to help you make informed decisions.
      </p>

      {/* Category filter buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        {Object.entries(categories).map(([key, value]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
              activeCategory === key
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {value}
          </button>
        ))}
      </div>

      {/* Grid of filtered posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col relative"
            >
              <div
                className="relative h-48 w-full"
                style={{ position: "relative" }}
              >
                <Image
                  src={post.image}
                  alt={post.title.split("|")[0].trim()} // Cleaner alt text
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Basic responsive sizes
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://media.topfinanzas.com/images/placeholder-image.webp";
                  }} // Fallback image
                  priority={false}
                  fetchPriority="high"
                  quality={85}
                  loading="eager"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                {post.date && (
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                )}
                <Link
                  href={`/personal-finance/${post.slug}`}
                  className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors mb-2"
                >
                  {post.title.split("|")[0].trim()} {/* Show cleaner title */}
                </Link>
                <p className="text-sm text-gray-600 mb-4 flex-grow">
                  {post.description}
                </p>
                <div className="mt-auto">
                  <Link
                    href={`/personal-finance/${post.slug}`}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-left py-12">
            <p className="text-gray-500">No posts found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );

  // Metadata for the archive page itself
  const pageMetadata = {
    title: "Personal Finance Guides | Top Finance UK",
    description:
      "Explore guides on credit cards, loans, debt management, and other personal finance topics in the UK.",
  };

  return <BlogLayout metadata={pageMetadata}>{content}</BlogLayout>;
}
