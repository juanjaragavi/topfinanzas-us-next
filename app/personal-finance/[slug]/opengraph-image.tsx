import { ImageResponse } from "next/og";
import { getPostBySlug, getAllPosts } from "@/lib/mdx";

export const alt = "Personal Finance — TopFinanzas US";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  const posts = getAllPosts("personal-finance");
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug("personal-finance", slug);

  const title =
    post?.frontmatter.title ??
    slug
      .split("-")
      .map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

  const author = post?.frontmatter.author ?? "TopFinanzas US";
  const date = post?.frontmatter.date ?? "";

  return new ImageResponse(
    <div
      style={{
        background:
          "linear-gradient(135deg, #1D4ED8 0%, #4338CA 60%, #4F46E5 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "60px 80px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "24px",
        }}
      >
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "12px",
            background: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "16px",
            fontSize: "24px",
            fontWeight: 700,
            color: "#4338CA",
          }}
        >
          TF
        </div>
        <p
          style={{
            color: "rgba(255,255,255,0.85)",
            fontSize: 22,
            fontFamily: "Poppins",
            margin: 0,
          }}
        >
          TopFinanzas US
        </p>
      </div>
      <p
        style={{
          color: "#C4B5FD",
          fontSize: 18,
          fontFamily: "Poppins",
          margin: "0 0 8px",
          textTransform: "uppercase",
          letterSpacing: "2px",
        }}
      >
        Personal Finance
      </p>
      <h1
        style={{
          color: "white",
          fontSize: title.length > 60 ? 36 : title.length > 40 ? 42 : 48,
          fontWeight: 700,
          fontFamily: "Poppins",
          lineHeight: 1.15,
          margin: "0 0 24px",
          maxWidth: "1000px",
        }}
      >
        {title}
      </h1>
      {(author || date) && (
        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: 18,
            fontFamily: "Poppins",
            margin: 0,
          }}
        >
          {author}
          {author && date ? " · " : ""}
          {date}
        </p>
      )}
    </div>,
    {
      ...size,
    },
  );
}
