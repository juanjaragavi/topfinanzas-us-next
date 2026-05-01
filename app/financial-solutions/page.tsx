import FinancialSolutionsClient from "./page-client";
import {
  generateWebPageSchema,
  generateBreadcrumbSchema,
  getRouteSeo,
} from "@/lib/seo";

export default function FinancialSolutions() {
  const route = getRouteSeo("/financial-solutions");

  const collectionPageSchema = {
    ...generateWebPageSchema("/financial-solutions"),
    "@type": "CollectionPage",
    mainEntity: {
      "@type": "ItemList",
      name: "US Credit Cards & Loan Comparisons",
      description:
        "Side-by-side comparisons of US credit cards and personal loans — benefits, requirements, APR, fees, and rewards. Find the best financial product for your needs.",
      numberOfItems: 45,
      itemListOrder: "https://schema.org/ItemListUnordered",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            generateBreadcrumbSchema(route),
            collectionPageSchema,
          ]).replace(/</g, "\\u003c"),
        }}
      />
      <FinancialSolutionsClient />
    </>
  );
}
