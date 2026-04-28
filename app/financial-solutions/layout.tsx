import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financial Solutions",
  description:
    "Compare the best credit cards and personal loans in the US. Find the perfect financial solution for your needs.",
  alternates: {
    canonical: "https://us.topfinanzas.com/financial-solutions",
  },
  openGraph: {
    title: "Financial Solutions | Top Finance US",
    description:
      "Compare the best credit cards and personal loans in the US. Find the perfect financial solution for your needs.",
    url: "https://us.topfinanzas.com/financial-solutions",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
