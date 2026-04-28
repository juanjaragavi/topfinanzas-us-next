import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal Finance",
  description:
    "Explore personal finance advice, from budgeting and saving to investing and debt management, tailored for the US market.",
  alternates: {
    canonical: "https://us.topfinanzas.com/personal-finance",
  },
  openGraph: {
    title: "Personal Finance | Top Finance US",
    description:
      "Explore personal finance advice, from budgeting and saving to investing and debt management, tailored for the US market.",
    url: "https://us.topfinanzas.com/personal-finance",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
