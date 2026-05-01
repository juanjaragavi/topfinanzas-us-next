import { Metadata } from "next";
import AboutUsClient from "./about-client";

export const metadata: Metadata = {
  title: "About Us | Top Finanzas US", // Replicating implied title or standard
  description:
    "TopFinanzas US is a personal finance comparison platform helping Americans find the best credit cards, loans, and financial products. Meet our team and mission.",
  alternates: {
    canonical: "/about-us",
    languages: {
      "en-US": "/about-us",
    },
  },
};

export default function AboutUsPage() {
  return <AboutUsClient />;
}
