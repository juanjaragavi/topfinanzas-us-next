import { Metadata } from "next";

import FinanceChatIntroClient from "./page-client";

export const metadata: Metadata = {
  title: "Find Your Ideal Loan | Top Finanzas US",
  description:
    "Answer a few quick questions in our chat to find the best loan options tailored to your needs.",
  keywords:
    "personal loan, loan recommender, loan comparison, best loans US, quick loan finder",
};

export default function FinanceChatIntroPage() {
  return <FinanceChatIntroClient />;
}
