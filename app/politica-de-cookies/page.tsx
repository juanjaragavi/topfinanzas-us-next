import fs from "fs";
import path from "path";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { compileMDX } from "next-mdx-remote/rsc";
import { useMDXComponents as getMDXComponents } from "@/mdx-components";
import { logger } from "@/lib/logger";

export const metadata = {
  title: "Política de Cookies - TopFinanzas MX",
  description:
    "Obtén más información sobre cómo TopFinanzas MX utiliza cookies y tecnologías similares en nuestro sitio web.",
};

export default async function CookiePolicyPage() {
  // Read the MDX file
  const filePath = path.join(
    process.cwd(),
    "content/legal/politica-de-cookies.mdx", // Updated path
  );
  let source = "# Política de Cookies\n\nContenido no encontrado.";

  try {
    if (fs.existsSync(filePath)) {
      source = fs.readFileSync(filePath, "utf8");
    }
  } catch (error) {
    logger.error("Error loading cookie policy file:", error); // Updated error message
    source =
      "# Error al cargar el contenido\n\nLo sentimos, hubo un error al cargar este contenido.";
  }

  // Compile MDX content, properly handling frontmatter
  const { content } = await compileMDX({
    source,
    components: getMDXComponents({}),
    options: { parseFrontmatter: true },
  });

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-sm p-8 max-w-4xl mx-auto">
          <div className="article-container prose max-w-none prose-h1:text-h1 prose-h2:text-h2 prose-h3:text-h3 prose-p:text-body prose-li:text-list prose-a:text-link">
            {content}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
