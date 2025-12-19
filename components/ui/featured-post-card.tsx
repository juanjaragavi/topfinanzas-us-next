import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export interface FeaturedPostCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
  category: string;
  categorySlug: string;
  date?: string;
  type?: string;
  priority?: boolean;
  imageHeight?: string;
  orientation?: "horizontal" | "vertical";
  showBadge?: boolean;
  variant?: "default" | "poster"; // Added variant
}

/**
 * A reusable component for displaying featured blog posts throughout the site
 */
export function FeaturedPostCard({
  title,
  description,
  image,
  slug,
  category,
  categorySlug,
  date,
  type,
  priority = false,
  imageHeight = "h-48",
  orientation = "vertical",
  showBadge = true,
  variant = "default", // Default to standard card
}: FeaturedPostCardProps) {
  // Determine the actual URL path
  const postUrl = `${categorySlug}/${slug}`;

  // CSS classes based on orientation and variant
  let containerClasses = "";
  if (variant === "poster") {
    containerClasses =
      "group relative w-full overflow-hidden rounded-none shadow-md h-[400px] md:h-[500px]";
  } else {
    containerClasses =
      orientation === "horizontal"
        ? "md:flex bg-white rounded-none shadow-md overflow-hidden"
        : "bg-white rounded-none shadow-md overflow-hidden flex flex-col h-full";
  }

  // Image container classes
  let imageContainerClasses = "";
  if (variant === "poster") {
    imageContainerClasses = "absolute inset-0 w-full h-full";
  } else {
    imageContainerClasses =
      orientation === "horizontal"
        ? "md:flex-shrink-0 relative h-64 md:h-auto md:w-48"
        : `relative ${imageHeight} w-full`;
  }

  // Content container classes
  let contentClasses = "";
  if (variant === "poster") {
    contentClasses =
      "absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white";
  } else {
    contentClasses =
      orientation === "horizontal"
        ? "p-6 md:p-8"
        : "p-6 flex flex-col flex-grow";
  }

  return (
    <div
      className={containerClasses}
      data-category={category.toLowerCase().replace(/\s+/g, "-")}
      data-post-type={type}
    >
      <div className={imageContainerClasses} style={{ position: "relative" }}>
        <Link href={postUrl} className="block h-full relative">
          <Image
            src={image}
            alt={title}
            fill
            priority={priority}
            style={{ objectFit: "cover" }}
            loading={priority ? "eager" : "lazy"}
            sizes={
              variant === "poster"
                ? "100vw"
                : orientation === "horizontal"
                  ? "(max-width: 768px) 100vw, 33vw"
                  : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            }
            quality={90} // Higher quality for hero/poster
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAAQAAAACQAAAwAAQUxQSBcAAAABD9D/ERFCyDa37d+ICPgXqjgjoqA+qgAAVlA4IDYAAACQAQCdASoKAAQAAkA4JZwAAPrHQAD++5AK1AA="
            unoptimized={false}
          />
          {/* Overlay for poster variant (optional extra darkening) */}
          {variant === "poster" && (
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
          )}

          {showBadge && type && (
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-2 py-1 uppercase z-10">
              {type}
            </div>
          )}
          {showBadge && !type && (
            <div
              className={`absolute top-4 left-4 z-10 ${variant === "poster" ? "top-auto bottom-[120px] md:bottom-[140px]" : ""}`}
            >
              {/* Note: positioning might need tweaking for poster */}
              <Badge
                className={`
                ${category === "Finanzas Personales" || category === "Personal Finance" ? "bg-blue-600" : ""}
                ${category === "Soluciones Financieras" || category === "Financial Solutions" ? "bg-green-600" : ""}
              `}
              >
                {category}
              </Badge>
            </div>
          )}
        </Link>
      </div>

      <div className={contentClasses}>
        {date && (
          <p
            className={`text-sm mb-2 text-left sm:text-left ${variant === "poster" ? "text-gray-200" : "text-gray-500"}`}
          >
            {date}
          </p>
        )}

        <Link
          href={postUrl}
          className={`block mt-1 font-bold transition-colors mb-2 line-clamp-2 text-left sm:text-left ${
            variant === "poster"
              ? "text-2xl md:text-4xl text-white hover:text-blue-200 leading-tight"
              : "text-base text-gray-900 hover:text-blue-600"
          }`}
        >
          {title}
        </Link>

        {/* Hide description in poster mode if preferred, or style it white. 
            Reference image shows just Title + Date/Author.
            We'll hide description for poster to match "clean" look or keep it short.
        */}
        {variant !== "poster" && (
          <p className="mt-2 text-gray-600 line-clamp-3 flex-grow text-left sm:text-left">
            {description}
          </p>
        )}

        {variant !== "poster" && (
          <div className="mt-4 text-left sm:text-left">
            <Link
              href={postUrl}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Read more →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
