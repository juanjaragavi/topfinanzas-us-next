import { Metadata } from "next";
import HomeClient from "./page-client";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
};

export default function Home() {
  return <HomeClient />;
}
