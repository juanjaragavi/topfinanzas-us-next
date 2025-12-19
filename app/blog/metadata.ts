import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TopFinanzas US Blog: Personal Finance & Financial Solutions",
  description:
    "Explore articles on credit cards, loans, debt management, savings, and more financial topics relevant to the US market.",
  keywords:
    "US finance blog, personal finance US, credit cards US, loans US, debt management, financial advice US",
  openGraph: {
    title: "TopFinanzas US Blog: Personal Finance & Financial Solutions",
    description:
      "Explore articles on credit cards, loans, debt management, savings, and more financial topics relevant to the US market.",
    url: "https://us.topfinanzas.com/blog",
    type: "website",
    // Optional: Add a general blog image
    images: [
      {
        url: "https://media.topfinanzas.com/images/best-personal-loans.webp",
        width: 1200,
        height: 630,
        alt: "TopFinanzas US Blog",
      },
    ],
    // section: "Blog", // Removed as it's not valid for type 'website'
  },
  twitter: {
    card: "summary_large_image",
    title: "TopFinanzas US Blog: Personal Finance & Financial Solutions",
    description:
      "Explore articles on credit cards, loans, debt management, savings, and more financial topics relevant to the US market.",
    images: ["https://media.topfinanzas.com/images/best-personal-loans.webp"],
  },
};
