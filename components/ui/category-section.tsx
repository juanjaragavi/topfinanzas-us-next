import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FeaturedPostCard } from "@/components/ui/featured-post-card";

interface CategoryPost {
  title: string;
  slug: string;
  category: string;
  categorySlug: string;
  image: string;
  description: string;
  date?: string;
  type?: string;
}

interface CategorySectionProps {
  title: string;
  posts: CategoryPost[];
  viewAllLink?: string;
}

export function CategorySection({
  title,
  posts,
  viewAllLink,
}: CategorySectionProps) {
  if (!posts || posts.length === 0) return null;

  const heroPost = posts[0];
  const listPosts = posts.slice(1, 4); // Take next 3 posts

  return (
    <div className="mb-16">
      <div className="flex justify-between items-end mb-6">
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        {viewAllLink && (
          <Link
            href={viewAllLink}
            className="text-gray-500 hover:text-blue-600 font-medium text-sm flex items-center mb-1"
          >
            {posts.length} posts
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column: Hero Post */}
        <div className="h-full">
          <FeaturedPostCard
            {...heroPost}
            orientation="vertical"
            imageHeight="h-64 md:h-80" // Taller image for hero
            showBadge={false} // Clean look per design
          />
        </div>

        {/* Right Column: List of posts */}
        <div className="flex flex-col space-y-4">
          {listPosts.map((post) => (
            <div
              key={post.slug}
              className="border-b border-gray-100 pb-4 last:border-0 last:pb-0"
            >
              {/* Mobile: Image + Text? Or just Text? Reference says "Compact vertical list"
                   Let's do Image (Left/Small) + Title for visual interest, or just Title based on "text titles with arrow icons".
                   "Render subsequent posts as a compact vertical list (text titles with arrow icons)" -> Just Text + Arrow.
               */}
              <Link
                href={`${post.categorySlug}/${post.slug}`}
                className="group block"
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-base font-bold text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2 pr-4">
                    {post.title}
                  </h3>
                  <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-blue-600 flex-shrink-0 mt-1 transition-colors" />
                </div>
                {post.date && (
                  <p className="text-sm text-gray-400 mt-1">{post.date}</p>
                )}
              </Link>
            </div>
          ))}

          {/* Fallback if only 1 post */}
          {listPosts.length === 0 && (
            <p className="text-gray-500 italic">
              More articles in this section coming soon.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
