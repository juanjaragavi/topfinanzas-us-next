import type { Metadata } from "next";

// Metadata specifically for the /financial-solutions landing page
export const metadata: Metadata = {
  title: "Financial Solutions: Credit Cards & Loans | TopFinanzas US",
  description:
    "Explore guides and comparisons of credit cards and personal loans in the United States. Find requirements, benefits, and choose the right financial solution.",
  keywords:
    "financial solutions US, credit cards US, personal loans US, compare credit cards, compare loans, personal finance",
  openGraph: {
    title: "Financial Solutions: Credit Cards & Loans | TopFinanzas US",
    description:
      "Your guide to credit cards and personal loans in the United States. Compare options and find the best fit for you.",
    images: [
      {
        url: "https://media.topfinanzas.com/images/chase-sapphire-preferred-credit-card-benefits.webp",
        width: 1200, // Adjust if necessary
        height: 630, // Adjust if necessary
        alt: "Financial Solutions from TopFinanzas US",
      },
    ],
    type: "website",
    url: "https://us.topfinanzas.com/financial-solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Financial Solutions: Credit Cards & Loans | TopFinanzas US",
    description:
      "Your guide to credit cards and personal loans in the United States. Compare options and find the best fit for you.",
    images: [
      "https://media.topfinanzas.com/images/chase-sapphire-preferred-credit-card-benefits.webp",
    ],
  },
};
