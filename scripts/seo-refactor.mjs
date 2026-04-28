import fs from 'fs';
import path from 'path';

const searchDir = path.join(process.cwd(), 'app', 'financial-solutions');

function processFile(filePath, slug) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Extract current Title and Description
  const titleMatch = content.match(/title:\s*['"](.*?)['"]/);
  const descMatch = content.match(/description:\s*['"](.*?)['"]/);
  if (!titleMatch || !descMatch) return;

  const title = titleMatch[1];
  const description = descMatch[1];

  // 1. Replace Metadata Block
  const metadataRegex = /export const metadata: Metadata = \{[\s\S]*?\};/;
  const newMetadata = `export const metadata: Metadata = {
  title: "${title}",
  description: "${description}",
  alternates: {
    canonical: "https://us.topfinanzas.com/financial-solutions/${slug}",
  },
  openGraph: {
    title: "${title}",
    description: "${description}",
    url: "https://us.topfinanzas.com/financial-solutions/${slug}",
    type: "article",
    images: [{ url: "https://media.topfinanzas.com/images/${slug}.webp", width: 1200, height: 630 }],
  },
};`;

  content = content.replace(metadataRegex, newMetadata);

  // 2. Inject JSON-LD Schema using lib/seo
  if (!content.includes('import { generateCreditCardSchema }')) {
    content = content.replace(
      'import { Metadata } from "next";',
      `import { Metadata } from "next";\nimport { generateCreditCardSchema } from "@/lib/seo";`
    );
  }

  const schemaScript = `
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateCreditCardSchema({
              name: "${title}",
              description: "${description}",
              url: "https://us.topfinanzas.com/financial-solutions/${slug}",
              image: "https://media.topfinanzas.com/images/${slug}.webp"
            })
          ).replace(/</g, '\\u003c'),
        }}
      />\n`;

  // Inject schema directly after the main <article> or <main> tag
  const mainRegex = /(<main[^>]*>|<article[^>]*>)/;
  content = content.replace(mainRegex, `$1${schemaScript}`);

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ SEO Injected: ${slug}`);
}

const folders = fs.readdirSync(searchDir);
folders.forEach(folder => {
  if (folder === '[slug]' || folder.includes('.')) return;
  const filePath = path.join(searchDir, folder, 'page.tsx');
  if (fs.existsSync(filePath)) processFile(filePath, folder);
});
