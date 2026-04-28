import { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
  other: {
    // LLM-Indexing Control
    robots: "noai, noimageai, indexifembedded",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
