"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

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

      {/* Hero Section - WordPress US Layout with Background Image */}
      <section className="relative w-full min-h-[400px] md:min-h-[450px] flex items-center overflow-hidden bg-[#3E73C4] md:bg-transparent">
        {/* Background Image - hidden on mobile to match WordPress */}
        <div className="absolute inset-0 hidden md:block">
          <Image
            src="https://media.topfinanzas.com/images/bannerppal-1536x400-1.webp"
            alt="Top Finance Hero"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-[500px]">
            <h1 className="text-white text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-bold mb-4 leading-[1.1] tracking-tight">
              Welcome to <br />
              Top Finance
            </h1>
            <p className="text-white text-lg md:text-xl leading-[1.5]">
              Where every financial decision expands your world.
              <br />
              Choose wisely, live fully.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts Section - Matching WordPress 3-Column Layout */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* 3 Featured Cards Grid - WordPress Style */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {homepagePosts.slice(0, 3).map((post, idx) => (
              <Link
                key={post.slug}
                href={`/${post.categoryPath}/${post.slug}`}
                className="group relative block overflow-hidden rounded-lg shadow-lg h-[350px] md:h-[400px]"
              >
                <Image
                  src={
                    post.frontmatter.featuredImage ||
                    "https://media.topfinanzas.com/images/placeholder.webp"
                  }
                  alt={post.frontmatter.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  priority={idx === 0}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl md:text-2xl font-bold leading-tight line-clamp-3">
                    {cleanTitle(post.frontmatter.title)}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          {/* Row of 3 Cards with descriptions - Secondary Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {allPosts.slice(3, 6).map((post) => (
              <div key={post.slug} className="bg-white">
                <Link
                  href={`/${post.categoryPath}/${post.slug}`}
                  className="block"
                >
                  <div className="relative h-48 overflow-hidden rounded-lg mb-4">
                    <Image
                      src={
                        post.frontmatter.featuredImage ||
                        "https://media.topfinanzas.com/images/placeholder.webp"
                      }
                      alt={post.frontmatter.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </Link>
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  <Link
                    href={`/${post.categoryPath}/${post.slug}`}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {cleanTitle(post.frontmatter.title)}
                  </Link>
                </h3>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span className="font-medium">DIANA BERRIO</span>
                  <span className="mx-2">—</span>
                  <span>{post.frontmatter.date}</span>
                </div>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {post.frontmatter.description}
                </p>
              </div>
            ))}
          </div>

          {/* Category Sections - WordPress 3-Column Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Choose Your Card Column */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-900">
                  Choose Your Card
                </h2>
                <span className="text-sm text-gray-500">78 posts</span>
              </div>
              <Link
                href={`/${cardPosts[0]?.categoryPath}/${cardPosts[0]?.slug}`}
                className="group relative block overflow-hidden rounded-lg shadow-lg h-[250px] mb-4"
              >
                <Image
                  src={
                    cardPosts[0]?.frontmatter.featuredImage ||
                    "https://media.topfinanzas.com/images/placeholder.webp"
                  }
                  alt={cardPosts[0]?.frontmatter.title || ""}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center text-xs text-gray-200 mb-2">
                    <span className="font-medium">DIANA BERRIO</span>
                    <span className="mx-2">—</span>
                    <span>{cardPosts[0]?.frontmatter.date}</span>
                  </div>
                  <h3 className="text-white text-lg font-bold leading-tight line-clamp-2">
                    {cleanTitle(cardPosts[0]?.frontmatter.title || "")}
                  </h3>
                </div>
              </Link>
              {/* Article List */}
              <div className="space-y-3">
                {cardPosts.slice(1, 5).map((post) => (
                  <Link
                    key={post.slug}
                    href={`/${post.categoryPath}/${post.slug}`}
                    className="group flex items-start gap-3"
                  >
                    <div className="relative w-16 h-12 flex-shrink-0 rounded overflow-hidden">
                      <Image
                        src={
                          post.frontmatter.featuredImage ||
                          "https://media.topfinanzas.com/images/placeholder.webp"
                        }
                        alt={post.frontmatter.title}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-gray-800 group-hover:text-blue-600 line-clamp-2 transition-colors">
                        {cleanTitle(post.frontmatter.title)}
                      </h4>
                      <p className="text-xs text-gray-400 mt-1">
                        {post.frontmatter.date}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Finances for Everyone Column */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-900">
                  Finances for Everyone
                </h2>
                <span className="text-sm text-gray-500">50 posts</span>
              </div>
              <Link
                href={`/${savingsPosts[0]?.categoryPath}/${savingsPosts[0]?.slug}`}
                className="group relative block overflow-hidden rounded-lg shadow-lg h-[250px] mb-4"
              >
                <Image
                  src={
                    savingsPosts[0]?.frontmatter.featuredImage ||
                    "https://media.topfinanzas.com/images/placeholder.webp"
                  }
                  alt={savingsPosts[0]?.frontmatter.title || ""}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center text-xs text-gray-200 mb-2">
                    <span className="font-medium">DIANA BERRIO</span>
                    <span className="mx-2">—</span>
                    <span>{savingsPosts[0]?.frontmatter.date}</span>
                  </div>
                  <h3 className="text-white text-lg font-bold leading-tight line-clamp-2">
                    {cleanTitle(savingsPosts[0]?.frontmatter.title || "")}
                  </h3>
                </div>
              </Link>
              {/* Article List */}
              <div className="space-y-3">
                {savingsPosts.slice(1, 5).map((post) => (
                  <Link
                    key={post.slug}
                    href={`/${post.categoryPath}/${post.slug}`}
                    className="group flex items-start gap-3"
                  >
                    <div className="relative w-16 h-12 flex-shrink-0 rounded overflow-hidden">
                      <Image
                        src={
                          post.frontmatter.featuredImage ||
                          "https://media.topfinanzas.com/images/placeholder.webp"
                        }
                        alt={post.frontmatter.title}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-gray-800 group-hover:text-blue-600 line-clamp-2 transition-colors">
                        {cleanTitle(post.frontmatter.title)}
                      </h4>
                      <p className="text-xs text-gray-400 mt-1">
                        {post.frontmatter.date}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Financial Solutions Column */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-900">
                  Financial Solutions
                </h2>
                <span className="text-sm text-gray-500">132 posts</span>
              </div>
              <Link
                href={`/${debtPosts[0]?.categoryPath}/${debtPosts[0]?.slug}`}
                className="group relative block overflow-hidden rounded-lg shadow-lg h-[250px] mb-4"
              >
                <Image
                  src={
                    debtPosts[0]?.frontmatter.featuredImage ||
                    "https://media.topfinanzas.com/images/placeholder.webp"
                  }
                  alt={debtPosts[0]?.frontmatter.title || ""}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center text-xs text-gray-200 mb-2">
                    <span className="font-medium">DIANA BERRIO</span>
                    <span className="mx-2">—</span>
                    <span>{debtPosts[0]?.frontmatter.date}</span>
                  </div>
                  <h3 className="text-white text-lg font-bold leading-tight line-clamp-2">
                    {cleanTitle(debtPosts[0]?.frontmatter.title || "")}
                  </h3>
                </div>
              </Link>
              {/* Article List */}
              <div className="space-y-3">
                {debtPosts.slice(1, 5).map((post) => (
                  <Link
                    key={post.slug}
                    href={`/${post.categoryPath}/${post.slug}`}
                    className="group flex items-start gap-3"
                  >
                    <div className="relative w-16 h-12 flex-shrink-0 rounded overflow-hidden">
                      <Image
                        src={
                          post.frontmatter.featuredImage ||
                          "https://media.topfinanzas.com/images/placeholder.webp"
                        }
                        alt={post.frontmatter.title}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-gray-800 group-hover:text-blue-600 line-clamp-2 transition-colors">
                        {cleanTitle(post.frontmatter.title)}
                      </h4>
                      <p className="text-xs text-gray-400 mt-1">
                        {post.frontmatter.date}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
