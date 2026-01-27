import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

export interface Post {
  slug: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  frontmatter: Record<string, any>;
  content: string;
}

export function getPostBySlug(category: string, slug: string): Post | null {
  // Protect against directory traversal
  const safeSlug = slug.replace(/[^a-zA-Z0-9-_]/g, "");
  const safeCategory = category.replace(/[^a-zA-Z0-9-_]/g, "");

  const fullPath = path.join(CONTENT_DIR, safeCategory, `${safeSlug}.mdx`);

  try {
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug: safeSlug,
      frontmatter: data,
      content,
    };
  } catch (error) {
    console.error(`Error reading post ${category}/${slug}:`, error);
    return null;
  }
}

export function getAllPosts(category: string): Omit<Post, "content">[] {
  const categoryDir = path.join(CONTENT_DIR, category);

  try {
    if (!fs.existsSync(categoryDir)) return [];

    const files = fs.readdirSync(categoryDir);

    return files
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => {
        const slug = file.replace(/\.mdx$/, "");
        const fullPath = path.join(categoryDir, file);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data } = matter(fileContents);

        return { slug, frontmatter: data };
      });
  } catch (error) {
    console.error(`Error listing posts for ${category}:`, error);
    return [];
  }
}
