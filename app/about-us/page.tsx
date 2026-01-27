import { Metadata } from "next";
import AboutUsClient from "./about-client";

export const metadata: Metadata = {
  title: "About Us | Top Finanzas US", // Replicating implied title or standard
  description: "Learn more about Top Finanzas US, our mission, and our team.",
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
