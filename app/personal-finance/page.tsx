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
        "From Allowances to Apps: Raising Financially Smart Kids in a Digital World | Top Finance US",
      slug: "raising-financially-smart-kids-in-a-digital-world",
      description:
        "Learn how to teach kids about money in the digital age — from allowances and savings jars to budgeting apps and debit cards designed for teens.",
      image:
        "https://media.topfinanzas.com/images/raising-financially-smart-kids-in-a-digital-world.webp",
      date: "May 4, 2026",
      category: "guide",
    },
    {
      title:
        "The Sandwich Generation: Balancing Your Kids' Future With Your Aging Parents' Needs | Top Finance US",
      slug: "the-sandwich-generation-balancing-your-kids-future-with-your-aging-parents-needs",
      description:
        "Caught between raising children and supporting aging parents? Learn practical financial strategies to manage competing priorities without sacrificing your own future.",
      image:
        "https://media.topfinanzas.com/images/the-sandwich-generation-balancing-your-kids-future-with-your-aging-parents-needs.webp",
      date: "May 4, 2026",
      category: "guide",
    },
    {
      title:
        "The Debt Detox: Choosing Between the Snowball and Avalanche Payoff Methods | Top Finance US",
      slug: "the-debt-detox-choosing-between-the-snowball-and-avalanche-payoff-methods",
      description:
        "Choosing between debt snowball and debt avalanche comes down to behavior versus math. Compare both payoff methods and build a realistic debt plan.",
      image:
        "https://media.topfinanzas.com/images/the-debt-detox-choosing-between-the-snowball-and-avalanche-payoff-methods.webp",
      date: "May 4, 2026",
      category: "debt",
    },
    {
      title:
        "The 30-Day Spending Challenge: Uncovering Your Hidden Money Habits | Top Finance US",
      slug: "the-30-day-spending-challenge-uncovering-your-hidden-money-habits",
      description:
        "Take the 30-day spending challenge and discover the hidden money habits draining your budget. A practical guide for Americans ready to take control of their finances.",
      image:
        "https://media.topfinanzas.com/images/the-30-day-spending-challenge-uncovering-your-hidden-money-habits.webp",
      date: "May 4, 2026",
      category: "guide",
    },
    {
      title:
        "Building Your Financial Safety Net: How to Save Your First $1,000 (Stress-Free) | Top Finance US",
      slug: "building-your-financial-safety-net-how-to-save-your-first-1000-stress-free",
      description:
        "Saving your first $1,000 emergency fund is the single most impactful financial move you can make. Here's a practical, stress-free plan to get there fast.",
      image:
        "https://media.topfinanzas.com/images/building-your-financial-safety-net-how-to-save-your-first-1000-stress-free.webp",
      date: "May 4, 2026",
      category: "guide",
    },
    {
      title:
        "Legacy Planning 101: How to Talk to Aging Parents About Their Finances and Wishes | Top Finance US",
      slug: "legacy-planning-how-to-talk-to-aging-parents-about-finances",
      description:
        "Learn how to approach the difficult conversation about legacy planning with your aging parents. Discover actionable steps to understand their financial wishes.",
      image:
        "https://media.topfinanzas.com/images/legacy-planning-how-to-talk-to-aging-parents-about-finances.webp",
      date: "May 4, 2026",
      category: "guide",
    },
    {
      title:
        "Micro-Investing for Big Dreams: How $5 a Day Changes Your Finances | Top Finance US",
      slug: "micro-investing-for-big-dreams-how-5-a-day-can-change-your-financial-trajectory",
      description:
        "Discover how micro-investing just $5 a day can transform your personal finances. Learn the basics, explore the power of compounding, and start building wealth today.",
      image:
        "https://media.topfinanzas.com/images/micro-investing-for-big-dreams-how-5-a-day-can-change-your-financial-trajectory.webp",
      date: "May 4, 2026",
      category: "guide",
    },
    {
      title: "The Financial Integration Roadmap | Top Finance US",
      slug: "the-financial-integration-roadmap-a-step-by-step-guide-for-newlyweds-and-long-term-partners",
      description:
        "A step-by-step guide for newlyweds and long-term partners on merging finances, setting joint goals, and navigating shared expenses together.",
      image:
        "https://media.topfinanzas.com/images/financial-integration-roadmap-newlyweds-partners.webp",
      date: "May 4, 2026",
      category: "guide",
    },
    {
      title:
        "Yours, Mine, or Ours? How to Strategically Combine Finances After Marriage (or Moving In)",
      slug: "yours-mine-or-ours-how-to-strategically-combine-finances-after-marriage-or-moving-in",
      description:
        "Practical personal finance guides for Americans — covering budgeting, debt management, investing basics, credit building, and strategies for couples merging finances.",
      image:
        "https://media.topfinanzas.com/images/yours-mine-or-ours-how-to-strategically-combine-finances-after-marriage-or-moving-in.webp",
      date: "September 17, 2025",
      category: "guide",
    },
    {
      title: "Good Debt vs. Bad Debt: How to Tell the Difference",
      slug: "good-debt-vs-bad-debt-how-to-tell-the-difference",
      description:
        "If you’re just starting your career, the word “debt” probably sounds like a four-letter word. We’re often taught that borrowing money is bad and should be avoided at all costs. While that’s good advice for avoiding financial trouble, it’s not the whole story.",
      image:
        "https://media.topfinanzas.com/images/good-debt-vs-bad-debt-how-to-tell-the-difference.webp",
      date: "September 3, 2025",
      category: "guide",
    },
    {
      title:
        "The Magic of Compound Interest: How Your Money Can Grow Over Time",
      slug: "good-debt-vs-bad-debt-how-to-tell-the-difference-2",
      description:
        "Understanding this single concept is one of the most powerful things you can do for your personal finance journey, turning small, consistent savings into significant wealth down the road.",
      image:
        "https://media.topfinanzas.com/images/good-debt-vs-bad-debt-how-to-tell-the-difference-2.webp",
      date: "September 5, 2025",
      category: "guide",
    },
    {
      title: "Investing for Beginners: A Simple Guide to Getting Started",
      slug: "investing-for-beginners-a-simple-guide-to-getting-started",
      description:
        "This guide will break down the basics of investing into simple, actionable steps. It’s a crucial part of taking control of your personal finance and building long-term wealth.",
      image:
        "https://media.topfinanzas.com/images/investing-for-beginners-a-simple-guide-to-getting-started.webp",
      date: "September 10, 2025",
      category: "guide",
    },
    {
      title:
        "A Savvy Traveler's Guide: Using Credit Card Points for Thanksgiving Travel",
      slug: "a-savvy-travelers-guide-using-credit-card-points-for-thanksgiving-travel",
      description:
        "Master your travel rewards to save on Thanksgiving travel. Learn how to use credit card points strategically to book flights, hotels, and more without breaking your holiday budget.",
      image:
        "https://media.topfinanzas.com/images/a-savvy-travelers-guide-using-credit-card-points-for-thanksgiving-travel.webp",
      date: "September 10, 2025",
      category: "guide",
    },
    {
      title:
        "Guide: How to Use Multiple Credit Cards to Maximize Your FICO Score",
      slug: "guide-how-to-use-multiple-credit-cards-to-maximize-your-fico-score",
      description:
        "Discover how to use multiple credit cards strategically to maximize your FICO score. Learn about credit utilization, payment history, and best practices for managing multiple cards.",
      image:
        "https://media.topfinanzas.com/images/guide-how-to-use-multiple-credit-cards-to-maximize-your-fico-score.webp",
      date: "September 12, 2025",
      category: "creditCards",
    },
    {
      title: "Top Credit Cards to Maximize Your Black Friday Savings",
      slug: "top-credit-cards-to-maximize-your-black-friday-savings",
      description:
        "Using the right plastic can help you earn significant cash back, provide crucial purchase protections, and even give you interest-free time to pay off your haul.",
      image:
        "https://media.topfinanzas.com/images/top-credit-cards-to-maximize-your-black-friday-savings.webp",
      date: "September 23, 2025",
      category: "creditCards",
    },
    {
      title: "Why a 0% Intro APR Card Is Your Best Bet for Black Friday",
      slug: "why-a-0-intro-apr-card-is-your-best-bet-for-black-friday",
      description:
        "Learn why a 0% intro APR credit card is the smart choice for financing big-ticket Black Friday purchases. Discover the benefits and how to use it responsibly.",
      image:
        "https://media.topfinanzas.com/images/why-a-0-intro-apr-card-is-your-best-bet-for-black-friday.webp",
      date: "October 8, 2025",
      category: "guide",
    },
    {
      title:
        "Flat-Rate vs. Bonus Categories: The Best Cashback Strategy for Black Friday",
      slug: "flat-rate-vs-bonus-categories-the-best-cashback-strategy-for-black-friday",
      description:
        "Learn the key differences between flat-rate and bonus category cashback cards to maximize your Black Friday savings. Discover which strategy works best for your shopping style.",
      image:
        "https://media.topfinanzas.com/images/flat-rate-vs-bonus-categories-the-best-cashback-strategy-for-black-friday.webp",
      date: "October 10, 2025",
      category: "guide",
    },
    {
      title: "Beat Inflation with Your Cashback",
      slug: "beat-inflation-with-your-cashback",
      description:
        "Learn how to use cashback rewards strategically to fight inflation and keep more money in your pocket. Discover smart strategies to maximize your rewards.",
      image:
        "https://media.topfinanzas.com/images/beat-inflation-with-your-cashback.webp",
      date: "October 31, 2025",
      category: "guide",
    },
    {
      title: "Best 0% APR Balance Transfer Cards: A Guide to Managing Debt",
      slug: "best-0-apr-balance-transfer-cards-a-guide-to-managing-debt",
      description:
        "Learn how 0% APR balance transfer cards can help you manage and pay off credit card debt. Understand the pros, cons, and key strategies for success.",
      image:
        "https://media.topfinanzas.com/images/best-0-apr-balance-transfer-cards-a-guide-to-managing-debt.webp",
      date: "October 31, 2025",
      category: "debt",
    },
    {
      title: "What Are the Best Secured Credit Cards for Building Credit?",
      slug: "what-are-the-best-secured-credit-cards-for-building-credit",
      description:
        "Learn how to find the best secured credit cards for building credit from scratch or repairing damaged credit. Discover what to look for and how to use them wisely.",
      image:
        "https://media.topfinanzas.com/images/what-are-the-best-secured-credit-cards-for-building-credit.webp",
      date: "October 31, 2025",
      category: "creditCards",
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
                  priority={index < 3}
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
    title: "Personal Finance Guides | Top Finance US",
    description:
      "Explore guides on credit cards, loans, debt management, and other personal finance topics in the US.",
  };

  return <BlogLayout metadata={pageMetadata}>{content}</BlogLayout>;
}
