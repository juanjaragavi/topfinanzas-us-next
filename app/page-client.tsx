"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FeaturedPostCard } from "@/components/ui/featured-post-card";
import { CategorySection } from "@/components/ui/category-section";
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

// Dynamically import components that aren't needed for the initial render
const DynamicPagination = dynamic(
  () => import("@/components/ui/pagination").then((mod) => mod.Pagination),
  {
    ssr: false,
    loading: () => <div className="flex justify-center mt-8 h-10"></div>,
  },
);

// Interface for post frontmatter
interface PostFrontmatter {
  title: string;
  date?: string; // Made date optional
  categories?: Array<{ name: string; slug: string }>;
  featuredImage?: string;
  description: string;
  excerpt?: string;
  [key: string]: unknown;
}

// Interface for post data, matching the structure used in blog archive
interface PostData {
  slug: string;
  frontmatter: PostFrontmatter;
  category: string; // Added category field
  categoryPath: string;
}

// Helper function to clean titles (copied from blog archive)
const cleanTitle = (title: string): string => {
  // Added safety check for undefined/null title
  if (!title) return "Untitled Post";
  return title.split("|")[0].split(":")[0].split(" - ")[0].trim();
};

// --- Hardcoded Post Data (US Market) ---
// Using a subset of posts for the homepage, sorted by date descending
const allPosts: PostData[] = [
  {
    slug: "yours-mine-or-ours-how-to-strategically-combine-finances-after-marriage-or-moving-in",
    category: "Personal Finance",
    categoryPath: "personal-finance",
    frontmatter: {
      title:
        "Yours, Mine, or Ours? How to Strategically Combine Finances After Marriage (or Moving In)",
      date: "September 17, 2025",
      description:
        "Moving in with a partner or getting married is a huge, exciting step. But what about your finances? This guide will walk you through how to tackle this conversation.",
      featuredImage:
        "https://media.topfinanzas.com/images/yours-mine-or-ours-how-to-strategically-combine-finances-after-marriage-or-moving-in.webp",
      categories: [
        { name: "Personal Finance", slug: "personal-finance" },
        { name: "Finances for Everyone", slug: "finances-for-everyone" },
      ],
    },
  },
  {
    slug: "good-debt-vs-bad-debt-how-to-tell-the-difference",
    category: "Personal Finance",
    categoryPath: "personal-finance",
    frontmatter: {
      title: "Good Debt vs. Bad Debt: How to Tell the Difference",
      date: "September 3, 2025",
      description:
        "If you’re just starting your career, the word “debt” probably sounds like a four-letter word. We’re often taught that borrowing money is bad and should be avoided at all costs. While that’s good advice for avoiding financial trouble, it’s not the whole story.",
      featuredImage:
        "https://media.topfinanzas.com/images/good-debt-vs-bad-debt-how-to-tell-the-difference.webp",
      categories: [
        { name: "Personal Finance", slug: "personal-finance" },
        { name: "Finances for Everyone", slug: "finances-for-everyone" },
      ],
    },
  },
  {
    slug: "good-debt-vs-bad-debt-how-to-tell-the-difference-2",
    category: "Personal Finance",
    categoryPath: "personal-finance",
    frontmatter: {
      title:
        "The Magic of Compound Interest: How Your Money Can Grow Over Time",
      date: "September 5, 2025",
      description:
        "Understanding this single concept is one of the most powerful things you can do for your personal finance journey, turning small, consistent savings into significant wealth down the road.",
      featuredImage:
        "https://media.topfinanzas.com/images/good-debt-vs-bad-debt-how-to-tell-the-difference-2.webp",
      categories: [
        { name: "Personal Finance", slug: "personal-finance" },
        { name: "Uncategorized", slug: "uncategorized" },
      ],
    },
  },
  {
    slug: "investing-for-beginners-a-simple-guide-to-getting-started",
    category: "Personal Finance",
    categoryPath: "personal-finance",
    frontmatter: {
      title: "Investing for Beginners: A Simple Guide to Getting Started",
      date: "September 10, 2025",
      description:
        "This guide will break down the basics of investing into simple, actionable steps. It’s a crucial part of taking control of your personal finance and building long-term wealth.",
      featuredImage:
        "https://media.topfinanzas.com/images/investing-for-beginners-a-simple-guide-to-getting-started.webp",
      categories: [
        { name: "Personal Finance", slug: "personal-finance" },
        { name: "Finances for Everyone", slug: "finances-for-everyone" },
      ],
    },
  },
  {
    slug: "a-savvy-travelers-guide-using-credit-card-points-for-thanksgiving-travel",
    category: "Personal Finance",
    categoryPath: "personal-finance",
    frontmatter: {
      title:
        "A Savvy Traveler's Guide: Using Credit Card Points for Thanksgiving Travel",
      date: "September 10, 2025",
      description:
        "Master your travel rewards to save on Thanksgiving travel. Learn how to use credit card points strategically to book flights, hotels, and more without breaking your holiday budget.",
      featuredImage:
        "https://media.topfinanzas.com/images/a-savvy-travelers-guide-using-credit-card-points-for-thanksgiving-travel.webp",
      categories: [
        { name: "Personal Finance", slug: "personal-finance" },
        { name: "Financial Solutions", slug: "financial-solutions" },
      ],
    },
  },
  {
    slug: "guide-how-to-use-multiple-credit-cards-to-maximize-your-fico-score",
    category: "Personal Finance",
    categoryPath: "personal-finance",
    frontmatter: {
      title:
        "Guide: How to Use Multiple Credit Cards to Maximize Your FICO Score",
      date: "September 12, 2025",
      description:
        "Discover how to use multiple credit cards strategically to maximize your FICO score. Learn about credit utilization, payment history, and best practices for managing multiple cards.",
      featuredImage:
        "https://media.topfinanzas.com/images/guide-how-to-use-multiple-credit-cards-to-maximize-your-fico-score.webp",
      categories: [
        { name: "Personal Finance", slug: "personal-finance" },
        { name: "Financial Solutions", slug: "financial-solutions" },
      ],
    },
  },
  {
    slug: "top-credit-cards-to-maximize-your-black-friday-savings",
    category: "Personal Finance",
    categoryPath: "personal-finance",
    frontmatter: {
      title: "Top Credit Cards to Maximize Your Black Friday Savings",
      date: "September 23, 2025",
      description:
        "Using the right plastic can help you earn significant cash back, provide crucial purchase protections, and even give you interest-free time to pay off your haul.",
      featuredImage:
        "https://media.topfinanzas.com/images/top-credit-cards-to-maximize-your-black-friday-savings.webp",
      categories: [
        { name: "Personal Finance", slug: "personal-finance" },
        { name: "Financial Solutions", slug: "financial-solutions" },
      ],
    },
  },
  {
    slug: "why-a-0-intro-apr-card-is-your-best-bet-for-black-friday",
    category: "Personal Finance",
    categoryPath: "personal-finance",
    frontmatter: {
      title: "Why a 0% Intro APR Card Is Your Best Bet for Black Friday",
      date: "October 8, 2025",
      description:
        "Learn why a 0% intro APR credit card is the smart choice for financing big-ticket Black Friday purchases. Discover the benefits and how to use it responsibly.",
      featuredImage:
        "https://media.topfinanzas.com/images/why-a-0-intro-apr-card-is-your-best-bet-for-black-friday.webp",
      categories: [
        { name: "Personal Finance", slug: "personal-finance" },
        { name: "Uncategorized", slug: "uncategorized" },
      ],
    },
  },
  {
    slug: "flat-rate-vs-bonus-categories-the-best-cashback-strategy-for-black-friday",
    category: "Personal Finance",
    categoryPath: "personal-finance",
    frontmatter: {
      title:
        "Flat-Rate vs. Bonus Categories: The Best Cashback Strategy for Black Friday",
      date: "October 10, 2025",
      description:
        "Learn the key differences between flat-rate and bonus category cashback cards to maximize your Black Friday savings. Discover which strategy works best for your shopping style.",
      featuredImage:
        "https://media.topfinanzas.com/images/flat-rate-vs-bonus-categories-the-best-cashback-strategy-for-black-friday.webp",
      categories: [
        { name: "Personal Finance", slug: "personal-finance" },
        { name: "Uncategorized", slug: "uncategorized" },
      ],
    },
  },
  {
    slug: "beat-inflation-with-your-cashback",
    category: "Personal Finance",
    categoryPath: "personal-finance",
    frontmatter: {
      title: "Beat Inflation with Your Cashback",
      date: "October 31, 2025",
      description:
        "Learn how to use cashback rewards strategically to fight inflation and keep more money in your pocket. Discover smart strategies to maximize your rewards.",
      featuredImage:
        "https://media.topfinanzas.com/images/beat-inflation-with-your-cashback.webp",
      categories: [
        { name: "Personal Finance", slug: "personal-finance" },
        { name: "Financial Solutions", slug: "financial-solutions" },
      ],
    },
  },
  {
    slug: "best-0-apr-balance-transfer-cards-a-guide-to-managing-debt",
    category: "Personal Finance",
    categoryPath: "personal-finance",
    frontmatter: {
      title: "Best 0% APR Balance Transfer Cards: A Guide to Managing Debt",
      date: "October 31, 2025",
      description:
        "Learn how 0% APR balance transfer cards can help you manage and pay off credit card debt. Understand the pros, cons, and key strategies for success.",
      featuredImage:
        "https://media.topfinanzas.com/images/best-0-apr-balance-transfer-cards-a-guide-to-managing-debt.webp",
      categories: [
        { name: "Personal Finance", slug: "personal-finance" },
        { name: "Finances for Everyone", slug: "finances-for-everyone" },
      ],
    },
  },
  {
    slug: "what-are-the-best-secured-credit-cards-for-building-credit",
    category: "Personal Finance",
    categoryPath: "personal-finance",
    frontmatter: {
      title: "What Are the Best Secured Credit Cards for Building Credit?",
      date: "October 31, 2025",
      description:
        "Learn how to find the best secured credit cards for building credit from scratch or repairing damaged credit. Discover what to look for and how to use them wisely.",
      featuredImage:
        "https://media.topfinanzas.com/images/what-are-the-best-secured-credit-cards-for-building-credit.webp",
      categories: [
        { name: "Personal Finance", slug: "personal-finance" },
        { name: "Finances for Everyone", slug: "finances-for-everyone" },
      ],
    },
  },
];

// Reuse posts to populate sections for demo purposes since we have limited hardcoded data
const savingsPosts = [...allPosts, ...allPosts]
  .slice(0, 4)
  .map((p) => ({ ...p, category: "Smart Savings" }));
const debtPosts = [...allPosts, ...allPosts]
  .slice(2, 6)
  .map((p) => ({ ...p, category: "Zero Debt" }));
const cardPosts = [...allPosts, ...allPosts]
  .slice(4, 8)
  .map((p) => ({ ...p, category: "Choose Your Card" }));

// --- End of Hardcoded Data ---

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6; // Number of posts per page for homepage

  // Calculate total pages using useMemo
  const totalPages = useMemo(() => {
    return Math.ceil(allPosts.length / postsPerPage);
  }, [postsPerPage]);

  const homepagePosts = useMemo(() => {
    return [...allPosts]
      .sort((a, b) => {
        const dateA = a.frontmatter.date
          ? new Date(a.frontmatter.date).getTime()
          : 0;
        const dateB = b.frontmatter.date
          ? new Date(b.frontmatter.date).getTime()
          : 0;
        return dateB - dateA;
      })
      .slice(0, 3);
  }, []);

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      {/* Hero Section - Solid Background Color Matching Legacy US Site */}
      <section className="relative w-full min-h-[420px] md:min-h-[480px] flex items-center py-16 md:py-20 bg-[#1c5ad8]">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-[650px] lg:max-w-[750px]">
            <h1 className="text-white text-[2.75rem] md:text-[3.25rem] lg:text-[4rem] font-bold mb-8 leading-[1.15] tracking-tight">
              Welcome to <br />
              Top Finance
            </h1>
            <p className="text-white text-xl md:text-2xl lg:text-[1.625rem] leading-[1.5] font-medium">
              Where every financial decision expands your world.
              <br />
              Choose wisely, live fully.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Latest Posts Section - Primary Content Bridge */}
          <div className="mb-16">
            <div className="flex justify-between items-end mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Latest Posts
              </h2>
              <a
                href="/blog"
                className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center gap-1 transition-colors"
              >
                View All
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>

            {/* Latest 3 Posts - Hero (Poster) + 2 Standard Cards */}
            {(() => {
              if (homepagePosts.length === 0) {
                return (
                  <div className="text-gray-500 italic py-8">
                    Content coming soon...
                  </div>
                );
              }

              const heroPost = homepagePosts[0];
              const subPosts = homepagePosts.slice(1, 3);

              const mapPost = (post: PostData) => ({
                title: cleanTitle(post.frontmatter.title),
                description: post.frontmatter.description,
                image:
                  post.frontmatter.featuredImage ||
                  "https://media.topfinanzas.com/images/placeholder.webp",
                slug: post.slug,
                category: post.category,
                categorySlug: post.categoryPath,
                date: post.frontmatter.date
                  ? new Date(post.frontmatter.date).toLocaleDateString(
                    "en-US",
                    { year: "numeric", month: "long", day: "numeric" },
                  )
                  : undefined,
                type:
                  post.category === "Financial Solutions"
                    ? "financial"
                    : "personal",
              });

              return (
                <div className="flex flex-col gap-6">
                  {/* Hero Post */}
                  <div className="w-full">
                    <FeaturedPostCard
                      {...mapPost(heroPost)}
                      variant="poster"
                      orientation="vertical"
                      priority={true} // LCP candidate
                    />
                  </div>

                  {/* Sub Posts - 2 Columns */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {subPosts.map((post) => (
                      <FeaturedPostCard
                        key={post.slug}
                        {...mapPost(post)}
                        variant="default"
                        orientation="vertical" // Stacked cards for sub posts
                        imageHeight="h-56"
                      />
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>

          {/* Category Sections - Sharp Corners & Hero+List Layout */}

          <CategorySection
            title="Smart Savings"
            posts={savingsPosts.map((p) => ({
              title: cleanTitle(p.frontmatter.title),
              description: p.frontmatter.description,
              image:
                p.frontmatter.featuredImage ||
                "https://media.topfinanzas.com/images/placeholder.webp",
              slug: p.slug,
              category: p.category,
              categorySlug: p.categoryPath,
              date: p.frontmatter.date
                ? new Date(p.frontmatter.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
                : undefined,
              type: "financial",
            }))}
            viewAllLink="/savings"
          />

          <CategorySection
            title="Zero Debt"
            posts={debtPosts.map((p) => ({
              title: cleanTitle(p.frontmatter.title),
              description: p.frontmatter.description,
              image:
                p.frontmatter.featuredImage ||
                "https://media.topfinanzas.com/images/placeholder.webp",
              slug: p.slug,
              category: p.category,
              categorySlug: p.categoryPath,
              date: p.frontmatter.date
                ? new Date(p.frontmatter.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
                : undefined,
              type: "personal",
            }))}
            viewAllLink="/debt"
          />

          <CategorySection
            title="Choose Your Card"
            posts={cardPosts.map((p) => ({
              title: cleanTitle(p.frontmatter.title),
              description: p.frontmatter.description,
              image:
                p.frontmatter.featuredImage ||
                "https://media.topfinanzas.com/images/placeholder.webp",
              slug: p.slug,
              category: p.category,
              categorySlug: p.categoryPath,
              date: p.frontmatter.date
                ? new Date(p.frontmatter.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
                : undefined,
              type: "financial",
            }))}
            viewAllLink="/cards"
          />

          {/* Pagination Controls */}
          {totalPages > 1 &&
            (totalPages <= 3 ? (
              <div className="flex justify-center items-center space-x-4 mt-8">
                <Button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Previous
                </Button>
                <span className="text-sm text-gray-700">
                  Page {currentPage} of {totalPages}
                </span>
                <Button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Next
                </Button>
              </div>
            ) : (
              <DynamicPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
