import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read our latest articles on personal finance, credit cards, loans, and more to help you make informed financial decisions.",
  alternates: {
    canonical: "https://us.topfinanzas.com/blog",
  },
  openGraph: {
    title: "Blog | Top Finance US",
    description:
      "Read our latest articles on personal finance, credit cards, loans, and more to help you make informed financial decisions.",
    url: "https://us.topfinanzas.com/blog",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
