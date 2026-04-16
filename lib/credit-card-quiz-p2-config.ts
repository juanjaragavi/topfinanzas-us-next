import { ChatQuestion } from "@/components/finance/finance-chat-offerwall";

export const CREDIT_CARD_QUIZ_P2_QUESTIONS: ChatQuestion[] = [
  {
    id: "q1",
    botMessage: "What's the main goal for your new card?",
    options: [
      { label: "Build credit", value: "build-credit" },
      { label: "Earn rewards", value: "travel" },
      { label: "Cash back", value: "cashback" },
    ],
  },
  {
    id: "q2",
    botMessage: "Great! What's your estimated credit score?",
    options: [
      { label: "Excellent (720+)", value: "excellent" },
      { label: "Good/Fair (630-719)", value: "good" },
      { label: "Poor/None (< 630)", value: "poor" },
    ],
  },
];
