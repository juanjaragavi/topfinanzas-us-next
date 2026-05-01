import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { BlogPost } from "@/components/mdx/blog-post";
import { useMDXComponents as getMDXComponents } from "@/mdx-components";
import { Metadata } from "next";
import { SEO_SITE } from "@/lib/seo";

const CATEGORY = "personal-finance";

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
            authors: [
              post.frontmatter.author || "TopFinanzas US Editorial Team",
            ],
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

export default async function PersonalFinancePost({
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

  // Build BlogPosting JSON-LD from MDX frontmatter
  const canonical = `https://us.topfinanzas.com/${CATEGORY}/${slug}`;
  const fm = post.frontmatter;

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: fm.title,
    description: fm.description || fm.excerpt || "",
    image: fm.featuredImage || SEO_SITE.defaultImage,
    url: canonical,
    inLanguage: "en-US",
    datePublished: fm.date ? new Date(fm.date).toISOString() : undefined,
    dateModified: fm.date ? new Date(fm.date).toISOString() : undefined,
    author: {
      "@type": "Person",
      name: fm.author || "TopFinanzas US Editorial Team",
      ...(fm.authorImage ? { image: fm.authorImage } : {}),
    },
    publisher: {
      "@type": "Organization",
      name: SEO_SITE.name,
      logo: { "@type": "ImageObject", url: SEO_SITE.logo },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SEO_SITE.baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Personal Finance",
        item: `${SEO_SITE.baseUrl}/personal-finance`,
      },
      { "@type": "ListItem", position: 3, name: fm.title, item: canonical },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, blogPostingSchema]).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <BlogPost metadata={post.frontmatter as any}>
        <MDXRemote source={post.content} components={components} />
      </BlogPost>
    </>
  );
}
