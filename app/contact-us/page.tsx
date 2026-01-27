import { Metadata } from "next";
import ContactUsClient from "./contact-client";

export const metadata: Metadata = {
  title: "Contact Us | Top Finanzas US",
  description: "Get in touch with Top Finanzas US. We are here to help.",
  alternates: {
    canonical: "/contact-us",
    languages: {
      "en-US": "/contact-us",
    },
  },
};

export default function ContactUsPage() {
  return <ContactUsClient />;
}
