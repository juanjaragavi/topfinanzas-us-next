"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { FeaturedPostCard } from "@/components/ui/featured-post-card";
import { motion, AnimatePresence } from "framer-motion";
import { BlogLayout } from "@/components/mdx/blog-layout"; // Assuming this layout is suitable
import { Button } from "@/components/ui/button"; // For pagination

// Define the structure for each post item, adding category
interface PostItem {
  title: string;
  slug: string;
  description: string;
  image: string;
  category: "Personal Finance" | "Financial Solutions";
  categoryPath: string;
  date?: string; // Optional date
}

// Helper function to clean titles
const cleanTitle = (title: string): string => {
  return title.split("|")[0].split(":")[0].split(" - ")[0].trim();
};

export default function BlogArchivePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const postsPerPage = 9; // Display 9 posts per page (3x3 grid)

  // Categories for filtering
  const categories = {
    all: "All Articles",
    personalFinance: "Personal Finance",
    financialSolutions: "Financial Solutions",
    creditCards: "Credit Cards",
    loans: "Loans",
  };

  // Combine posts from both categories
  const allPosts: PostItem[] = [
    // Personal Finance - Latest Articles
    {
      title:
        "How to Track Your Spending for 30 Days and Know Where Your Money Goes | Top Finance US",
      slug: "how-to-track-your-spending-for-30-days",
      description:
        "Stop guessing about your finances. Learn a simple 30-day spending tracking method to discover where your money really goes and create lasting habits.",
      image:
        "https://media.topfinanzas.com/images/uk/how-to-track-your-spending-for-30-days.webp",
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "2 December 2025",
    },
    {
      title:
        "The Psychology of Spending: How to Stop Impulse Buys | Top Finance US",
      slug: "the-psychology-of-spending-how-to-stop-impulse-buys-and-start-mindful-saving",
      description:
        "Discover why we buy on impulse and learn practical strategies to master your money mindset. Start mindful saving today.",
      image:
        "https://media.topfinanzas.com/images/uk/the-psychology-of-spending-how-to-stop-impulse-buys-and-start-mindful-saving.webp",
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "25 November 2025",
    },
    {
      title:
        'Automate Your Wealth: "Set It and Forget It" Financial System | Top Finance US',
      slug: "automate-your-wealth",
      description:
        'Learn how to automate your finances with our "Set it and forget it" system. Save time, reduce stress, and build wealth effortlessly with practical tips.',
      image:
        "https://media.topfinanzas.com/images/uk/automate-your-wealth.webp",
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "19 November 2025",
    },
    {
      title:
        "Stop Living Paycheck to Paycheck: 3 Changes to Break the Cycle | Top Finance US",
      slug: "stop-living-paycheck-to-paycheck",
      description:
        "Escape the paycheck-to-paycheck cycle with three practical cash flow changes. Learn how families are building financial breathing room without dramatic sacrifices.",
      image:
        "https://media.topfinanzas.com/images/budgetbee/stop-living-paycheck-to-paycheck.webp",
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "13 November 2025",
    },
    {
      title:
        "Financial Health Check: Where Does Your Money Go? | Top Finance US",
      slug: "financial-health-check-where-does-your-money-go",
      description:
        "Discover where your money really goes with our quick financial health check. Learn simple tracking methods that reveal spending patterns.",
      image:
        "https://media.topfinanzas.com/images/uk/financial-health-check-money-tracking.webp",
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "5 November 2025",
    },
    {
      title:
        "The Hidden Costs of Homeownership That No One Tells You | Top Finance US",
      slug: "hidden-costs-of-homeownership",
      description:
        "Discover the unexpected expenses that surprise homeowners. From maintenance to insurance, learn to budget for hidden costs.",
      image:
        "https://media.topfinanzas.com/images/uk/hidden-costs-homeownership.webp",
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "28 October 2025",
    },
    // Financial Solutions - Credit Cards
    {
      title:
        "RBS Purchase & Balance Transfer Card: Save on Interest with 0% Offers | Top Finance US",
      slug: "rbs-purchase-balance-transfer-card",
      description:
        "The RBS Purchase & Balance Transfer Card offers 0% interest on purchases for up to 20 months and 0% on balance transfers for up to 18 months. No annual fee.",
      image:
        "https://media.topfinanzas.com/images/uk/rbs-purchase-balance-transfer-card.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "24 October 2025",
    },
    {
      title:
        "Bank of Scotland Credit Cards: Flexible Options for Every Need | Top Finance US",
      slug: "bank-of-scotland-credit-cards",
      description:
        "Discover Bank of Scotland credit cards with options for daily spending, balance transfers, large purchases, and credit building.",
      image:
        "https://media.topfinanzas.com/images/uk/bank-of-scotland-credit-cards.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "24 October 2025",
    },
    {
      title:
        "First Direct Credit Card: Simple Banking with Competitive Rates | Top Finance US",
      slug: "first-direct-credit-card",
      description:
        "Discover the First Direct 1st card with 0% interest on purchases for 12 months, competitive rates, no annual fee, and 24/7 customer service.",
      image:
        "https://media.topfinanzas.com/images/uk/first-direct-credit-card.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "24 October 2025",
    },
    {
      title:
        "The Co-operative Bank Credit Card: Ethical Banking with Cashback Rewards | Top Finance US",
      slug: "the-co-operative-bank-credit-card",
      description:
        "Discover the Co-operative Members card offering 0.5% cashback at Co-op stores and 0.3% everywhere else, with no annual fee.",
      image:
        "https://media.topfinanzas.com/images/uk/the-co-operative-bank-credit-card.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "24 October 2025",
    },
    {
      title:
        "M&S Rewards Credit Card: Earn Points on Every Purchase | Top Finance US",
      slug: "ms-rewards-credit-card",
      description:
        "Discover the M&S Rewards card that offers reward points on all your M&S spending and beyond, with exclusive member benefits.",
      image:
        "https://media.topfinanzas.com/images/uk/ms-rewards-credit-card.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "24 October 2025",
    },
    {
      title:
        "Tesco Bank Clubcard Credit Cards: Earn Points on Every Purchase | Top Finance US",
      slug: "tesco-bank-clubcard-credit-cards",
      description:
        "Discover Tesco Bank Clubcard cards with 0% intro rates, low APR options, and Clubcard points on your daily spending.",
      image:
        "https://media.topfinanzas.com/images/uk/tesco-bank-clubcard-credit-cards.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "24 October 2025",
    },
    {
      title:
        "American Express Preferred Rewards Gold: Exclusive Travel and Lifestyle Benefits | Top Finance US",
      slug: "american-express-preferred-rewards-gold-credit-card",
      description:
        "The American Express Gold card offers premium Membership Rewards points, comprehensive travel insurance, and exclusive lifestyle benefits.",
      image:
        "https://media.topfinanzas.com/images/uk/american-express-preferred-rewards-gold-credit-card.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "24 October 2025",
    },
    {
      title:
        "Nationwide Building Society Credit Card: Member Benefits and 0% Offers | Top Finance US",
      slug: "nationwide-building-society-credit-card",
      description:
        "The Nationwide Member card offers two 0% intro options: up to 24 months on balance transfers or 15 months on purchases.",
      image:
        "https://media.topfinanzas.com/images/uk/nationwide-building-society-credit-card.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "24 October 2025",
    },
    {
      title:
        "HSBC Rewards Credit Card: Earn Points on Every Purchase | Top Finance US",
      slug: "hsbc-rewards-credit-card",
      description:
        "The HSBC Rewards card offers points on your daily spending, 0% interest on purchases for 6 months, and a $25 welcome bonus.",
      image:
        "https://media.topfinanzas.com/images/uk/hsbc-rewards-credit-card.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "24 October 2025",
    },
    {
      title:
        "Ocean Credit Card: Check Your Eligibility in 60 Seconds | Top Finance US",
      slug: "ocean-credit-card",
      description:
        "The Ocean card offers credit limits from $200 to $8,000 with no annual fee. Check your eligibility with QuickCheck without affecting your credit history.",
      image: "https://media.topfinanzas.com/images/uk/ocean-credit-card.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "23 October 2025",
    },
    {
      title:
        "Fluid Credit Card: Reduce Your Costs with Balance Transfers | Top Finance US",
      slug: "fluid-credit-card",
      description:
        "The Fluid card offers 0% interest on balance transfers for 9 months, helping you save and pay off your debts faster.",
      image: "https://media.topfinanzas.com/images/uk/fluid-credit-card.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "23 October 2025",
    },
    {
      title:
        "John Lewis Partnership Card: Earn Rewards on Your Daily Shopping | Top Finance US",
      slug: "john-lewis-partnership-card",
      description:
        "The John Lewis Partnership card lets you earn valuable points on your daily shopping at John Lewis, Waitrose, and beyond.",
      image:
        "https://media.topfinanzas.com/images/uk/john-lewis-partnership-card.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "23 October 2025",
    },
    {
      title:
        "118 118 Money Credit Card: Build Your Credit with Confidence | Top Finance US",
      slug: "118-118-money-credit-card",
      description:
        "The 118 118 Money card offers guaranteed personalized credit limits and transparent terms to help you improve your credit history.",
      image:
        "https://media.topfinanzas.com/images/uk/118-118-money-credit-card.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "23 October 2025",
    },
    {
      title:
        "Vanquis Credit Card: Award-Winning Credit Building Solutions | Top Finance US",
      slug: "vanquis-credit-card",
      description:
        "Discover Vanquis cards with personalized limits and award-winning features for building credit, plus 0% balance transfers.",
      image: "https://media.topfinanzas.com/images/uk/vanquis-credit-card.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "23 October 2025",
    },
    {
      title:
        "Capital One Classic Credit Card: Build Your Credit History | Top Finance US",
      slug: "capital-one-uk-credit-card",
      description:
        "The Capital One Classic card helps you improve your credit with an initial limit of $200-$1,500, flexible payments, and no annual fee.",
      image:
        "https://media.topfinanzas.com/images/uk/capital-one-uk-credit-card.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "23 October 2025",
    },
    {
      title:
        "Aqua Credit Card: Improve Your Credit with Smart Features | Top Finance US",
      slug: "aqua-credit-card",
      description:
        "The Aqua card offers personalized limits, expert support tools, and 24/7 fraud protection for building credit safely.",
      image: "https://media.topfinanzas.com/images/uk/aqua-credit-card.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "23 October 2025",
    },
    {
      title:
        "Bip Credit Card: Digital Credit Under Your Control | Top Finance US",
      slug: "bip-credit-card",
      description:
        "Discover Bip: a credit solution with no physical card, no hidden fees, and instant balance updates.",
      image: "https://media.topfinanzas.com/images/uk/bip-credit-card.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "23 October 2025",
    },
    {
      title:
        "Yonder Credit Card: Epic Rewards with No Foreign Transaction Fees | Top Finance US",
      slug: "yonder-credit-card",
      description:
        "The free Yonder card gives you 1 point for every $1 spent with no foreign transaction fees, plus exclusive welcome offers.",
      image:
        "https://cdn.prod.website-files.com/6209512878b45f39119ebfb5/6839943447d06a3292522ecd_head-p-800.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "23 October 2025",
    },
    {
      title: "Zopa Credit Card: Award-Winning Card Management | Top Finance US",
      slug: "zopa-credit-card",
      description:
        "Discover the Zopa card with easy app management, Credit Cushion feature, no foreign fees, and award-winning service.",
      image: "https://media.topfinanzas.com/images/uk/zopa-credit-card.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "23 October 2025",
    },
    {
      title:
        "Marbles Credit Card: Stay in Control of Your Finances | Top Finance US",
      slug: "marbles-credit-card",
      description:
        "The Marbles card helps you manage your finances with a manageable limit, quick eligibility checker, and no annual fee.",
      image: "https://media.topfinanzas.com/images/uk/marbles-credit-card.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "23 October 2025",
    },
    // Personal Finance Posts
    {
      title:
        "Inflation-Proof Your Life: 7 Smart Moves When Prices Rise | Top Finance US",
      slug: "inflation-proof-your-life",
      description:
        "Discover seven practical strategies to protect your purchasing power during high inflation. Learn to eliminate spending leaks and build emergency funds.",
      image:
        "https://media.topfinanzas.com/images/inflation-proof-your-life-7-smart-money-moves.webp",
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "15 October 2025",
    },
    {
      title: "Best Personal Loans: Your Complete Guide | Top Finance US",
      slug: "best-personal-loans",
      description: "Complete guide to the best personal loans...",
      image: "https://media.topfinanzas.com/images/best-personal-loans.webp",
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "30 March 2025",
    },
    {
      title:
        "Best Rewards Credit Cards to Maximize Your Spending | Top Finance US",
      slug: "best-rewards-credit-cards",
      description: "Discover the best rewards credit cards...",
      image:
        "https://media.topfinanzas.com/images/uk/Top_Finance_uk_credit_cards.webp", // Placeholder
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "3 April 2025",
    },
    {
      title:
        "Best Cashback Credit Cards to Maximize Your Rewards | Top Finance US",
      slug: "cashback-credit-cards",
      description: "Discover the best cashback credit cards!...",
      image: "https://media.topfinanzas.com/images/uk/download-8-1.webp", // Placeholder
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "3 April 2025",
    },
    {
      title:
        "Credit Cards: Types, Benefits, and Keys to Financial Health | Top Finance US",
      slug: "credit-card-types-benefits",
      description: "Discover everything you need to know about credit cards...",
      image:
        "https://media.topfinanzas.com/images/uk/Top_Finanzas_Top_tarjeta_de_credito-1.webp", // Placeholder
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "3 April 2025",
    },
    {
      title: "Practical Guide to Getting Out of Debt | Top Finance US",
      slug: "getting-out-of-debt",
      description: "Feeling overwhelmed by debt? Get practical strategies...",
      image:
        "https://media.topfinanzas.com/images/uk/Top_Finance_how_to_get_out_of_debt.webp",
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "3 April 2025",
    },
    {
      title: "Best Credit Cards with No Annual Fee | Top Finance US",
      slug: "no-annual-fee-credit-cards",
      description: "Find the best credit cards without an annual fee...",
      image:
        "https://media.topfinanzas.com/images/uk/Top_Finance_credit_cards_without_annual_fee.webp", // Placeholder
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "3 April 2025",
    },
    {
      title: "Personal Loans: A Strategy for Managing Debt | Top Finance US",
      slug: "personal-loans-debt-strategy",
      description:
        "Discover how personal loans can help you consolidate debt...",
      image:
        "https://media.topfinanzas.com/images/uk/Top-Finances_personal_loans.webp", // Placeholder
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "3 April 2025",
    },
    {
      title:
        "5 Essential Tips for Choosing an Online Loan: Quick Guide | Top Finance US",
      slug: "tips-for-choosing-an-online-loan",
      description: "Navigate the world of online loans with confidence...",
      image:
        "https://media.topfinanzas.com/images/uk/choosing-online-loan-uk.webp",
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "30 March 2025",
    },
    {
      title: "Best Credit Cards with 0% Intro APR Offers | Top Finance US",
      slug: "top-credit-cards-0-intro-apr",
      description: "Compare the best credit cards offering 0% intro rates...",
      image: "https://media.topfinanzas.com/images/uk/APR.webp", // Placeholder
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "3 April 2025",
    },
    {
      title:
        "Understanding Credit Card Interest Rates: Consumer Guide | Top Finance US",
      slug: "understanding-credit-card-interest-rates",
      description: "Learn how credit card interest rates work...",
      image: "https://media.topfinanzas.com/images/uk/download-5-2.webp", // Placeholder
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "3 April 2025",
    },
    {
      title:
        "Side Hustle or Second Job? How to Choose the Right Income Booster",
      slug: "side-hustle-or-second-job",
      description:
        "With the rising cost of living, many are looking for ways to boost their income. Whether it's a traditional second job or a side hustle, choosing correctly is key.",
      image: "https://media.topfinanzas.com/images/side-hustle-second-job.webp",
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "27 August 2025",
    },
    {
      title:
        "Beyond Spreadsheets: Create a Budget You'll Actually Follow | Top Finance US",
      slug: "creating-a-budget-youll-actually-stick-to",
      description:
        "A modern budget guide covering the 50/30/20 rule, zero-based budgeting, and digital tools.",
      image: "https://media.topfinanzas.com/images/uk/modern-budget-guide.webp",
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "4 September 2025",
    },
    {
      title:
        "How to Ask for a Raise with Confidence (with Scripts and Prep Guide)",
      slug: "how-to-ask-for-a-raise",
      description:
        "Learn exactly what to say when asking for a raise. This guide includes preparation steps, conversation scripts, and salary research tips.",
      image:
        "https://media.topfinanzas.com/images/uk/how-to-ask-for-a-raise.webp",
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "3 October 2025",
    },
    {
      title:
        "What is 'Lifestyle Creep' and How is it Silently Draining Your Wallet?",
      slug: "what-is-lifestyle-creep",
      description:
        "Discover how gradually increasing your spending as you earn more can sabotage your financial goals and learn strategies to avoid it.",
      image:
        "https://media.topfinanzas.com/images/lifestyle-creep-personal-finance.webp",
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "9 October 2025",
    },
    {
      title:
        "Financial Uncoupling: A Compassionate Guide to Separating Finances During a Breakup",
      slug: "financial-uncoupling-separating-finances-during-breakup",
      description:
        "Practical guide on how to separate joint accounts, manage shared debts, and protect your credit after a relationship.",
      image:
        "https://media.topfinanzas.com/images/uk/financial-uncoupling-separating-finances-during-breakup.webp",
      category: "Personal Finance",
      categoryPath: "/personal-finance",
      date: "23 October 2025",
    },
    // Financial Solutions Posts (Add relevant ones)
    // Example: Add a few key ones, more can be added later
    {
      title: "Barclaycard Avios Plus Card: Premium Travel Rewards",
      slug: "barclaycard-avios-plus",
      description:
        "The Barclaycard Avios Plus card offers premium travel benefits...",
      image: "https://media.topfinanzas.com/images/barclaycard-avios-plus.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "4 April 2025", // Example date
    },
    {
      title:
        "HSBC Personal Loan: Flexible Financing from a Global Banking Leader",
      slug: "hsbc-personal-loan",
      description: "Discover HSBC personal loans with competitive rates...",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718135900-fotosprestamo1hsbc-uk.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "4 April 2025",
    },
    {
      title: "Curve Credit Card",
      slug: "curve-credit-card",
      description:
        "Discover the innovative Curve card that consolidates all your existing cards...",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/719907701-top_prestamos-y-tarjetas-uk_v1-22.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "2 April 2025",
    },
    {
      title: "Funding Circle Business Loan",
      slug: "funding-circle-personal-loan",
      description:
        "Explore Funding Circle business loans offering quick financing...",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718136824-fotosprestamo-fundingcircle1uk.webp",
      category: "Financial Solutions",
      categoryPath: "/financial-solutions",
      date: "4 April 2025",
    },
    // ... Add more posts from financial-solutions as needed
  ];

  // Sort posts by date (newest first). Supports ISO strings and "DD Month YYYY".
  const MONTHS: Record<string, number> = {
    january: 0,
    february: 1,
    march: 2,
    april: 3,
    may: 4,
    june: 5,
    july: 6,
    august: 7,
    september: 8,
    october: 9,
    november: 10,
    december: 11,
  };

  const parseDate = (value?: string): number => {
    if (!value) return 0;
    // ISO quick path
    if (/^\d{4}-\d{2}-\d{2}/.test(value) || value.includes("T")) {
      const t = Date.parse(value);
      return isNaN(t) ? 0 : t;
    }
    // "DD Month YYYY" (e.g., "3 April 2025")
    const m = value.trim().match(/^(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})$/);
    if (m) {
      const day = parseInt(m[1], 10);
      const monthName = m[2].toLowerCase();
      const year = parseInt(m[3], 10);
      const month = MONTHS[monthName];
      if (month != null) {
        return Date.UTC(year, month, day);
      }
    }
    const t = Date.parse(value);
    return isNaN(t) ? 0 : t;
  };

  const allPostsSorted: PostItem[] = [...allPosts].sort(
    (a, b) => parseDate(b.date) - parseDate(a.date),
  );

  // Filter posts based on active category
  const filterPosts = useCallback(() => {
    let filteredPosts = [...allPostsSorted];

    if (activeCategory === "personalFinance") {
      filteredPosts = allPostsSorted.filter(
        (post) => post.category === "Personal Finance",
      );
    } else if (activeCategory === "financialSolutions") {
      filteredPosts = allPostsSorted.filter(
        (post) => post.category === "Financial Solutions",
      );
    } else if (activeCategory === "creditCards") {
      filteredPosts = allPostsSorted.filter(
        (post) =>
          post.title.toLowerCase().includes("credit card") ||
          post.slug.toLowerCase().includes("credit-card") ||
          post.description.toLowerCase().includes("credit card"),
      );
    } else if (activeCategory === "loans") {
      filteredPosts = allPostsSorted.filter(
        (post) =>
          post.title.toLowerCase().includes("loan") ||
          post.slug.toLowerCase().includes("loan") ||
          post.description.toLowerCase().includes("loan"),
      );
    }

    return filteredPosts;
  }, [activeCategory, allPostsSorted]);

  // Get filtered posts
  const filteredPosts = filterPosts();

  // Reset to page 1 when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const content = (
    <div>
      <h1 className="text-4xl font-bold mb-6 text-gray-800">
        TopFinance US Blog
      </h1>
      <p className="text-lg text-gray-700 mb-8 leading-tight">
        Your source for personal finance information and financial solutions in
        the US.
      </p>

      {/* Category Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Link
          href="/personal-finance"
          className="block p-6 bg-blue-50 rounded-xl hover:shadow-md transition-shadow"
        >
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">
            Personal Finance Guides
          </h2>
          <p className="text-blue-700">
            Explore tips on budgeting, savings, debt management, credit cards,
            and more.
          </p>
        </Link>
        <Link
          href="/financial-solutions"
          className="block p-6 bg-green-50 rounded-xl hover:shadow-md transition-shadow"
        >
          <h2 className="text-2xl font-semibold text-green-800 mb-2">
            Financial Solutions
          </h2>
          <p className="text-green-700">
            Discover detailed reviews and comparisons of credit cards and loans
            available in the US.
          </p>
        </Link>
      </div>

      <h2 className="text-3xl font-bold mb-4">
        {activeCategory
          ? categories[activeCategory as keyof typeof categories]
          : "All Articles"}
      </h2>

      {/* Category filter buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        {Object.entries(categories).map(([key, value]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key === "all" ? null : key)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
              (key === "all" && !activeCategory) || activeCategory === key
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            data-category={key}
          >
            {value}
          </button>
        ))}
      </div>

      {/* Grid of posts with animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory || "all"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative"
        >
          {currentPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              className="relative"
              style={{ position: "relative" }}
              data-category={post.category.toLowerCase().replace(" ", "-")}
            >
              <FeaturedPostCard
                title={cleanTitle(post.title)}
                description={post.description}
                image={post.image}
                slug={post.slug}
                category={post.category}
                categorySlug={post.categoryPath}
                date={post.date}
                priority={index < 2}
                showBadge={true}
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-4 mt-12">
          <Button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            variant="secondary" // Changed from outline
          >
            Previous
          </Button>
          <span className="text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            variant="secondary" // Changed from outline
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );

  // The BlogLayout component might handle this automatically if set up,
  // otherwise, you might pass the imported metadata object.
  // For simplicity, assuming BlogLayout handles it or metadata is implicitly used.
  return (
    <BlogLayout
      metadata={{
        title: "Blog: Personal Finance and Financial Solutions | TopFinance US",
        description:
          "Your trusted source for personal finance, credit cards, and loans in the US. Learn to manage your money with our experts.",
      }}
    >
      {content}
    </BlogLayout>
  );
}
