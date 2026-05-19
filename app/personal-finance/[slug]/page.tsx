import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { BlogPost } from "@/components/mdx/blog-post";
import { useMDXComponents as getMDXComponents } from "@/mdx-components";
import { Metadata } from "next";
import { SEO_SITE } from "@/lib/seo";

const CATEGORY = "personal-finance";

type ActiveViewSlot = "top" | "content_1" | "content_2";

const ACTIVE_VIEW_SLOT_TAGS: Record<ActiveViewSlot, string> = {
  top: '<InlineActiveViewAd slot="top" />',
  content_1: '<InlineActiveViewAd slot="content_1" />',
  content_2: '<InlineActiveViewAd slot="content_2" />',
};

function insertBeforeNthH2(
  content: string,
  nth: number,
  injection: string,
): string {
  const matches = [...content.matchAll(/^##\s+/gm)];
  if (matches.length < nth || matches[nth - 1].index === undefined) {
    return content;
  }

  const index = matches[nth - 1].index;
  return `${content.slice(0, index)}${injection}\n\n${content.slice(index)}`;
}

function injectActiveViewSlots(content: string): string {
  // Avoid duplicate ad slot injection for content already instrumented.
  if (
    content.includes('id="av_top"') ||
    content.includes('id="av_content_1"') ||
    content.includes('id="av_content_2"') ||
    content.includes("<InlineActiveViewAd")
  ) {
    return content;
  }

  let result = content;
  result = insertBeforeNthH2(result, 1, ACTIVE_VIEW_SLOT_TAGS.top);
  result = insertBeforeNthH2(result, 2, ACTIVE_VIEW_SLOT_TAGS.content_1);
  result = insertBeforeNthH2(result, 3, ACTIVE_VIEW_SLOT_TAGS.content_2);
  return result;
}

function InlineActiveViewAd({ slot }: { slot: ActiveViewSlot }) {
  const slotIdByType: Record<ActiveViewSlot, string> = {
    top: "av_top",
    content_1: "av_content_1",
    content_2: "av_content_2",
  };

  const slotId = slotIdByType[slot];

  return (
    <div id={`${slotId}_wrapper`} className="activeview-inline-wrapper">
      <div>
        <p
          className="activeview-inline-label"
          style={{
            fontSize: "10px",
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          Ads
        </p>
        <div
          id={slotId}
          suppressHydrationWarning
          className="activeview-inline-slot"
          data-actview
          data-actview-slot="square"
          data-actview-size="square"
        ></div>
      </div>
    </div>
  );
}

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
  const components = getMDXComponents({ InlineActiveViewAd });
  const contentWithAds = injectActiveViewSlots(post.content);

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
        <MDXRemote source={contentWithAds} components={components} />
      </BlogPost>
    </>
  );
}
