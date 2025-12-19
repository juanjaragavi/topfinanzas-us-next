"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FeaturedPostCard } from "@/components/ui/featured-post-card";
import { CategorySection } from "@/components/ui/category-section"; // Import new component
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

// --- Hardcoded Post Data (Localized for US) ---
// Using a subset of posts for the homepage, sorted by date descending
const allPosts: PostData[] = [
  {
    slug: "barclaycard-avios-plus",
    frontmatter: {
      title: "Premium Credit Card: Exclusive Travel Rewards",
      description:
        "The ideal card for frequent travelers with premium benefits...",
      date: "2025-10-29T00:00:00Z", // Matching legacy date
      featuredImage:
        "https://media.topfinanzas.com/images/barclaycard-avios-plus.webp", // Keep image for layout
      categories: [
        { name: "Financial Solutions", slug: "soluciones-financieras" },
      ],
    },
    category: "Financial Solutions",
    categoryPath: "/soluciones-financieras",
  },
  {
    slug: "hsbc-personal-loan",
    frontmatter: {
      title: "HSBC Personal Loan: Flexible Financing",
      description: "Discover HSBC personal loans with competitive rates...",
      date: "2025-04-04T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/uk/loans/718135900-fotosprestamo1hsbc-uk.webp",
      categories: [
        { name: "Financial Solutions", slug: "soluciones-financieras" },
      ],
    },
    category: "Financial Solutions",
    categoryPath: "/soluciones-financieras",
  },
  {
    slug: "funding-circle-personal-loan",
    frontmatter: {
      title: "Funding Circle Business Loan",
      description:
        "Explore Funding Circle business loans with fast and flexible financing...",
      date: "2025-04-04T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/uk/loans/718136824-fotosprestamo-fundingcircle1uk.webp",
      categories: [
        { name: "Financial Solutions", slug: "soluciones-financieras" },
      ],
    },
    category: "Financial Solutions",
    categoryPath: "/soluciones-financieras",
  },
  {
    slug: "best-rewards-credit-cards",
    frontmatter: {
      title: "Best Rewards Credit Cards | Top Finanzas US",
      description:
        "Discover the best rewards credit cards to maximize your spending...",
      date: "2025-04-03T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/uk/Top_Finance_uk_credit_cards.webp",
      categories: [{ name: "Personal Finance", slug: "finanzas-personales" }],
    },
    category: "Personal Finance",
    categoryPath: "/finanzas-personales",
  },
  {
    slug: "getting-out-of-debt",
    frontmatter: {
      title: "Practical Guide to Getting Out of Debt | Top Finanzas US",
      description: "Feeling overwhelmed by debt? Get practical strategies...",
      date: "2025-04-03T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/uk/Top_Finance_how_to_get_out_of_debt.webp",
      categories: [{ name: "Personal Finance", slug: "finanzas-personales" }],
    },
    category: "Personal Finance",
    categoryPath: "/finanzas-personales",
  },
  {
    slug: "top-credit-cards-0-intro-apr",
    frontmatter: {
      title: "Best 0% Intro APR Credit Cards | Top Finanzas US",
      description: "Compare the best credit cards offering 0% intro APR...",
      date: "2025-04-03T00:00:00Z",
      featuredImage: "https://media.topfinanzas.com/images/uk/APR.webp",
      categories: [{ name: "Personal Finance", slug: "finanzas-personales" }],
    },
    category: "Personal Finance",
    categoryPath: "/finanzas-personales",
  },
  {
    slug: "best-personal-loans",
    frontmatter: {
      title: "Best Personal Loans in the US: Your Complete Guide",
      description: "Complete guide to the best personal loans in the US...",
      date: "2025-03-30T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/best-personal-loans.webp",
      categories: [{ name: "Personal Finance", slug: "finanzas-personales" }],
    },
    category: "Personal Finance",
    categoryPath: "/finanzas-personales",
  },
  {
    slug: "tips-for-choosing-an-online-loan",
    frontmatter: {
      title: "5 Essential Tips for Choosing an Online Loan | Top Finanzas US",
      description: "Navigate the world of online loans with confidence...",
      date: "2025-03-30T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/uk/choosing-online-loan-uk.webp",
      categories: [{ name: "Personal Finance", slug: "finanzas-personales" }],
    },
    category: "Personal Finance",
    categoryPath: "/finanzas-personales",
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

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      {/* Hero Section - Solid Brand Blue */}
      <section className="bg-[#015ECC] text-white px-6 py-24 md:py-32 lg:py-40">
        <div className="container mx-auto px-4 text-left">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 drop-shadow-sm leading-tight">
            Welcome to Top Finance
          </h1>
          <p className="text-white text-2xl md:text-xl lg:text-2xl max-w-3xl mb-8 md:mb-12 drop-shadow-sm leading-relaxed font-medium">
            Where every financial decision expands your world. <br />
            Choose wisely, live fully.
          </p>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Latest Articles (Top 3) - Centered/Main */}
          {/* Latest Articles - Custom Layout: Hero (Poster) + 2 Standard Cards */}
          <div className="mb-16">
            {/* We know we have at least 3 posts sorted by date from previous steps */}
            {(() => {
              const sortedPosts = allPosts
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

              const heroPost = sortedPosts[0];
              const subPosts = sortedPosts.slice(1, 3);

              const mapPost = (post: {
                frontmatter: PostFrontmatter;
                slug: string;
                category: string;
                categoryPath: string;
              }) => ({
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
                  post.category === "Soluciones Financieras"
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
            title="Finances for Everyone"
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
            viewAllLink="/ahorro"
          />

          <CategorySection
            title="Financial Solutions"
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
            viewAllLink="/deuda"
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
            viewAllLink="/tarjetas"
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
