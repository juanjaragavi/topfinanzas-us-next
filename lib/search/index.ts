import {
  loansContent,
  creditCardsContent,
  FinancialContent,
} from "@/lib/data/us-financial-products";

export interface SearchResult {
  title: string;
  description: string;
  url: string;
  category: string;
  categorySlug: string;
  image?: string;
  type: "credit-card" | "loan" | "article" | "page";
  date?: string;
}

// Map helper to convert FinancialContent to SearchResult
const mapContentToValues = (
  content: FinancialContent,
  type: "credit-card" | "loan",
): SearchResult => ({
  title: content.title,
  description: content.description,
  url: `/financial-solutions/${content.slug}`,
  category: "Financial Solutions",
  categorySlug: "financial-solutions",
  image: content.image,
  type: type,
  date: content.date,
});

const loansSearchItems = loansContent.map((item) =>
  mapContentToValues(item, "loan"),
);
const creditCardSearchItems = creditCardsContent.map((item) =>
  mapContentToValues(item, "credit-card"),
);

export const SEARCH_INDEX: SearchResult[] = [
  ...creditCardSearchItems,
  ...loansSearchItems,
];

export const searchContent = (
  query: string,
  limit: number = 10,
): SearchResult[] => {
  const lowerQuery = query.toLowerCase();
  return SEARCH_INDEX.filter(
    (item) =>
      item.title.toLowerCase().includes(lowerQuery) ||
      item.description.toLowerCase().includes(lowerQuery),
  ).slice(0, limit);
};
