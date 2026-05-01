import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { BlogPost } from "@/components/mdx/blog-post";
import { useMDXComponents as getMDXComponents } from "@/mdx-components";
import { Metadata } from "next";
import {
  generateBreadcrumbSchema,
  generateFinancialProductSchema,
  getRouteSeo,
} from "@/lib/seo";

const CATEGORY = "financial-solutions";

export async function generateStaticParams() {
  const posts = getAllPosts(CATEGORY);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(CATEGORY, slug);

  if (!post) {
    return {
      title: "Page Not Found",
    };
  }

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      images: post.frontmatter.featuredImage
        ? [post.frontmatter.featuredImage]
        : [],
      url: `https://us.topfinanzas.com/${CATEGORY}/${slug}`,
      type: "article",
      ...(post.frontmatter.date
        ? {
            publishedTime: new Date(post.frontmatter.date).toISOString(),
            modifiedTime: new Date(post.frontmatter.date).toISOString(),
          }
        : {}),
    },
    alternates: {
      canonical: `https://us.topfinanzas.com/${CATEGORY}/${slug}`,
      languages: {
        "en-US": `https://us.topfinanzas.com/${CATEGORY}/${slug}`,
      },
    },
  };
}

export default async function FinancialSolutionsPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(CATEGORY, slug);

  if (!post) {
    return notFound();
  }

  // Get shared components
  const components = getMDXComponents({});

  // Build structured data from frontmatter
  const routeSeo = getRouteSeo(`/${CATEGORY}/${slug}`);

  const schemas = [
    generateBreadcrumbSchema(routeSeo),
    generateFinancialProductSchema(routeSeo),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemas).replace(/</g, "\\u003c"),
        }}
      />
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <BlogPost metadata={post.frontmatter as any}>
        <MDXRemote source={post.content} components={components} />
      </BlogPost>
    </>
  );
}
