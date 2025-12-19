import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Top Finanzas UK",
  description:
    "Learn about Top Finanzas UK, your trusted guide to personal finance management, financial freedom and prosperity.",
};

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
