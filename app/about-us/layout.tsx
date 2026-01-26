import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Top Finanzas US",
  description:
    "Learn about Top Finanzas, your trusted guide to personal finance management, financial freedom and prosperity in the United States.",
};

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
