"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FeaturedPostsGrid } from "@/components/ui/featured-posts-grid";
import { FeaturedPostCard } from "@/components/ui/featured-post-card";
import { CategorySection } from "@/components/ui/category-section"; // Import new component
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import Image from "next/image";

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

// --- Hardcoded Post Data (Localized for MX) ---
// Using a subset of posts for the homepage, sorted by date descending
const allPosts: PostData[] = [
  {
    slug: "tarjeta-credito-viajes-premium", // Example slug
    frontmatter: {
      title: "Tarjeta de Crédito Premium: Recompensas de Viaje Exclusivas",
      description:
        "La tarjeta ideal para viajeros frecuentes con beneficios premium...",
      date: "2025-10-29T00:00:00Z", // Matching legacy date
      featuredImage:
        "https://media.topfinanzas.com/images/barclaycard-avios-plus.webp", // Keep image for layout
      categories: [
        { name: "Soluciones Financieras", slug: "financial-solutions" },
      ],
    },
    category: "Soluciones Financieras",
    categoryPath: "/financial-solutions",
  },
  {
    slug: "hsbc-prestamo-personal",
    frontmatter: {
      title:
        "Préstamo Personal HSBC: Financiamiento Flexible (MX)",
      description: "Descubre los préstamos personales de HSBC con tasas competitivas...",
      date: "2025-04-04T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/uk/loans/718135900-fotosprestamo1hsbc-uk.webp",
      categories: [
        { name: "Soluciones Financieras", slug: "financial-solutions" },
      ],
    },
    category: "Soluciones Financieras",
    categoryPath: "/financial-solutions",
  },
  {
    slug: "prestamo-negocio-funding-circle",
    frontmatter: {
      title: "Préstamo para Negocios Funding Circle",
      description:
        "Explora los préstamos para negocios de Funding Circle con financiamiento rápido y flexible...",
      date: "2025-04-04T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/uk/loans/718136824-fotosprestamo-fundingcircle1uk.webp",
      categories: [
        { name: "Soluciones Financieras", slug: "financial-solutions" },
      ],
    },
    category: "Soluciones Financieras",
    categoryPath: "/financial-solutions",
  },
  {
    slug: "mejores-tarjetas-recompensas",
    frontmatter: {
      title:
        "Las Mejores Tarjetas de Crédito con Recompensas | Top Finanzas MX",
      description: "Descubre las mejores tarjetas de crédito con recompensas para maximizar tus gastos...",
      date: "2025-04-03T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/uk/Top_Finance_uk_credit_cards.webp",
      categories: [{ name: "Finanzas Personales", slug: "personal-finance" }],
    },
    category: "Finanzas Personales",
    categoryPath: "/personal-finance",
  },
  {
    slug: "salir-de-deudas",
    frontmatter: {
      title: "Guía Práctica para Salir de Deudas | Top Finanzas MX",
      description: "¿Te sientes abrumado por las deudas? Obtén estrategias prácticas...",
      date: "2025-04-03T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/uk/Top_Finance_how_to_get_out_of_debt.webp",
      categories: [{ name: "Finanzas Personales", slug: "personal-finance" }],
    },
    category: "Finanzas Personales",
    categoryPath: "/personal-finance",
  },
  {
    slug: "tarjetas-meses-sin-intereses",
    frontmatter: {
      title:
        "Mejores Tarjetas de Crédito con Meses Sin Intereses | Top Finanzas MX",
      description:
        "Compara las mejores tarjetas de crédito que ofrecen meses sin intereses...",
      date: "2025-04-03T00:00:00Z",
      featuredImage: "https://media.topfinanzas.com/images/uk/APR.webp",
      categories: [{ name: "Finanzas Personales", slug: "personal-finance" }],
    },
    category: "Finanzas Personales",
    categoryPath: "/personal-finance",
  },
  {
    slug: "mejores-prestamos-personales",
    frontmatter: {
      title:
        "Mejores Préstamos Personales en México: Tu Guía Completa",
      description: "Guía completa de los mejores préstamos personales en México...",
      date: "2025-03-30T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/best-personal-loans.webp",
      categories: [{ name: "Finanzas Personales", slug: "personal-finance" }],
    },
    category: "Finanzas Personales",
    categoryPath: "/personal-finance",
  },
  {
    slug: "tips-elegir-prestamo-en-linea",
    frontmatter: {
      title:
        "5 Consejos Esenciales para Elegir un Préstamo en Línea | Top Finanzas MX",
      description: "Navega el mundo de los préstamos en línea con confianza...",
      date: "2025-03-30T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/uk/choosing-online-loan-uk.webp",
      categories: [{ name: "Finanzas Personales", slug: "personal-finance" }],
    },
    category: "Finanzas Personales",
    categoryPath: "/personal-finance",
  },
];

// Reuse posts to populate sections for demo purposes since we have limited hardcoded data
const savingsPosts = [...allPosts, ...allPosts].slice(0, 4).map(p => ({ ...p, category: "Smart Savings" }));
const debtPosts = [...allPosts, ...allPosts].slice(2, 6).map(p => ({ ...p, category: "Zero Debt" }));
const cardPosts = [...allPosts, ...allPosts].slice(4, 8).map(p => ({ ...p, category: "Choose your card" }));

// --- End of Hardcoded Data ---

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6; // Number of posts per page for homepage

  // Calculate paginated posts using useMemo
  const { paginatedPosts, totalPages } = useMemo(() => {
    // Sort posts by date descending (if date exists)
    const sortedPosts = [...allPosts].sort((a, b) => {
      const dateA = a.frontmatter.date
        ? new Date(a.frontmatter.date).getTime()
        : 0;
      const dateB = b.frontmatter.date
        ? new Date(b.frontmatter.date).getTime()
        : 0;
      return dateB - dateA; // Descending order
    });

    const calculatedTotalPages = Math.ceil(sortedPosts.length / postsPerPage);
    const startIndex = (currentPage - 1) * postsPerPage;
    const postsToDisplay = sortedPosts.slice(
      startIndex,
      startIndex + postsPerPage,
    );
    return { paginatedPosts: postsToDisplay, totalPages: calculatedTotalPages };
  }, [currentPage, postsPerPage]);

  // Convert posts to the format expected by FeaturedPostsGrid
  const featuredPostsData = useMemo(() => {
    return paginatedPosts.map((post) => ({
      title: cleanTitle(post.frontmatter.title),
      description: post.frontmatter.description,
      image:
        post.frontmatter.featuredImage ||
        "https://media.topfinanzas.com/images/placeholder.webp",
      slug: post.slug,
      category: post.category,
      categorySlug: post.categoryPath,
      date: post.frontmatter.date
        ? new Date(post.frontmatter.date).toLocaleDateString("es-MX", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
        : undefined,
      type: post.category === "Soluciones Financieras" ? "financial" : "personal",
    }));
  }, [paginatedPosts]);

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      {/* Hero Section - Desktop Parity Refactor */}
      <section className="relative w-full min-h-[400px] flex items-center py-12 md:py-0">
        <Image
          src="https://media.topfinanzas.com/images/bannerppal-1536x400-1.webp"
          alt="Top Finance Hero"
          fill
          className="object-cover object-[75%_center] md:object-center"
          priority
          quality={100}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-[600px] lg:max-w-[700px] pt-8 md:pt-0">
            <h1 className="text-white text-4xl md:text-5xl lg:text-[3.5rem] font-bold mb-6 leading-tight drop-shadow-sm">
              Welcome to <br />
              Top Finance
            </h1>
            <p className="text-white text-lg md:text-xl lg:text-[1.35rem] leading-relaxed font-medium drop-shadow-sm">
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

          {/* Latest Articles (Top 3) - Centered/Main */}
          {/* Latest Articles - Custom Layout: Hero (Poster) + 2 Standard Cards */}
          <div className="mb-16">
            {/* We know we have at least 3 posts sorted by date from previous steps */}
            {(() => {
              const sortedPosts = allPosts.sort((a, b) => {
                const dateA = a.frontmatter.date ? new Date(a.frontmatter.date).getTime() : 0;
                const dateB = b.frontmatter.date ? new Date(b.frontmatter.date).getTime() : 0;
                return dateB - dateA;
              }).slice(0, 3);

              const heroPost = sortedPosts[0];
              const subPosts = sortedPosts.slice(1, 3);

              const mapPost = (post: any) => ({
                title: cleanTitle(post.frontmatter.title),
                description: post.frontmatter.description,
                image: post.frontmatter.featuredImage || "https://media.topfinanzas.com/images/placeholder.webp",
                slug: post.slug,
                category: post.category,
                categorySlug: post.categoryPath,
                date: post.frontmatter.date
                  ? new Date(post.frontmatter.date).toLocaleDateString("es-MX", { year: "numeric", month: "long", day: "numeric" })
                  : undefined,
                type: post.category === "Soluciones Financieras" ? "financial" : "personal",
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
            title="Ahorro inteligente"
            posts={savingsPosts.map(p => ({
              title: cleanTitle(p.frontmatter.title),
              description: p.frontmatter.description,
              image: p.frontmatter.featuredImage || "https://media.topfinanzas.com/images/placeholder.webp",
              slug: p.slug,
              category: p.category,
              categorySlug: p.categoryPath,
              date: p.frontmatter.date ? new Date(p.frontmatter.date).toLocaleDateString("es-MX", { year: "numeric", month: "long", day: "numeric" }) : undefined,
              type: "financial"
            }))}
            viewAllLink="/ahorro"
          />

          <CategorySection
            title="Deuda cero"
            posts={debtPosts.map(p => ({
              title: cleanTitle(p.frontmatter.title),
              description: p.frontmatter.description,
              image: p.frontmatter.featuredImage || "https://media.topfinanzas.com/images/placeholder.webp",
              slug: p.slug,
              category: p.category,
              categorySlug: p.categoryPath,
              date: p.frontmatter.date ? new Date(p.frontmatter.date).toLocaleDateString("es-MX", { year: "numeric", month: "long", day: "numeric" }) : undefined,
              type: "personal"
            }))}
            viewAllLink="/deuda"
          />

          <CategorySection
            title="Elige tu tarjeta"
            posts={cardPosts.map(p => ({
              title: cleanTitle(p.frontmatter.title),
              description: p.frontmatter.description,
              image: p.frontmatter.featuredImage || "https://media.topfinanzas.com/images/placeholder.webp",
              slug: p.slug,
              category: p.category,
              categorySlug: p.categoryPath,
              date: p.frontmatter.date ? new Date(p.frontmatter.date).toLocaleDateString("es-MX", { year: "numeric", month: "long", day: "numeric" }) : undefined,
              type: "financial"
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
                  Anterior
                </Button>
                <span className="text-sm text-gray-700">
                  Página {currentPage} de {totalPages}
                </span>
                <Button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Siguiente
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
