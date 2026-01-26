import React from "react";
import { FeaturedPostCard, FeaturedPostCardProps } from "./featured-post-card";
// Removed duplicate imports and framer-motion imports

export interface FeaturedPostsGridProps {
  posts: Array<Omit<FeaturedPostCardProps, "orientation" | "imageHeight">>;
  title?: string;
  description?: string;
  columns?: 1 | 2 | 3 | 4;
  filter?: string | null;
  showHeader?: boolean;
}

/**
 * A grid component for displaying featured blog posts
 */
export function FeaturedPostsGrid({
  posts,
  title = "Latest Articles",
  description,
  columns = 3,
  filter = null,
  showHeader = true,
}: FeaturedPostsGridProps) {
  // Filter posts if filter is provided
  const filteredPosts = filter
    ? posts.filter(
        (post) =>
          post.category.toLowerCase() === filter.toLowerCase() ||
          post.type?.toLowerCase() === filter.toLowerCase(),
      )
    : posts;

  // Determine the grid columns CSS based on the columns prop
  const gridColsClass = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <div className="my-8 text-left sm:text-left">
      {showHeader && (
        <div className="mb-8">
          <h2 className="text-3xl font-bold">{title}</h2>
          {description && <p className="text-gray-600 mt-2">{description}</p>}
        </div> // *** CORRECTLY CLOSES showHeader div ***
      )}

      {/* Completely removed AnimatePresence and motion.div for debugging */}
      <div
        key={filter || "all"} // Keep key for re-rendering on filter change
        className={`grid ${gridColsClass} gap-6`} // Basic grid styles
      >
        {filteredPosts.map((post) => (
          // No motion.div wrapper, just the card directly or a simple div if needed for key
          <div key={post.slug}>
            {" "}
            {/* Simple div wrapper for the key */}
            <FeaturedPostCard
              {...post}
              orientation="vertical"
              imageHeight="h-48"
              // Removed priority={index < 3} to avoid competing with LCP hero image
            />
          </div>
          // Removed the 'else' block as animateItems check is now redundant without motion
        ))}
      </div>
      {/* End of removed animation wrappers */}

      {filteredPosts.length === 0 && (
        <div className="text-left py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-500">No articles found.</p>
        </div>
      )}
    </div>
  );
}
