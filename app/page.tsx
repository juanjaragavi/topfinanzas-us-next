import { Metadata } from "next";
import HomeClient from "./page-client";

const BASE_URL = "https://us.topfinanzas.com";

export const metadata: Metadata = {
  title: "Compare Credit Cards, Loans & Financial Solutions",
  description:
    "TopFinanzas US helps you compare the best credit cards, personal loans, and financial products. Expert guides, side-by-side comparisons, and unbiased advice to help you choose wisely.",
  openGraph: {
    title: "TopFinanzas US | Compare Credit Cards, Loans & Financial Solutions",
    description:
      "Compare the best US credit cards, personal loans, and financial products. Expert guides and unbiased advice to help you choose wisely.",
    url: BASE_URL,
    type: "website",
    siteName: "TopFinanzas US",
    images: [
      {
        url: "https://media.topfinanzas.com/images/placeholder-image.webp",
        width: 1200,
        height: 630,
        alt: "TopFinanzas US — Compare Credit Cards, Loans & Financial Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TopFinanzas US | Compare Credit Cards, Loans & Financial Solutions",
    description:
      "Compare the best US credit cards, personal loans, and financial products. Expert guides and unbiased advice.",
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      "en-US": BASE_URL,
    },
  },
};

export default function Home() {
  return <HomeClient />;
}
