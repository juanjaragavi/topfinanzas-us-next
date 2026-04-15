import { ChatQuestion } from "@/components/finance/finance-chat-offerwall";

export const CREDIT_CARD_QUIZ_P2_QUESTIONS: ChatQuestion[] = [
  {
    id: "q1",
    botMessage: "What is your main goal for a new credit card?",
    options: [
      { label: "Build or rebuild credit", value: "build-credit" },
      { label: "Earn travel rewards", value: "travel" },
      { label: "Get cash back on purchases", value: "cashback" },
      { label: "Transfer a balance", value: "balance-transfer" },
    ],
  },
  {
    id: "q2",
    botMessage: "Got it! Roughly what is your current credit score?",
    options: [
      { label: "Excellent (720+)", value: "excellent" },
      { label: "Good (690-719)", value: "good" },
      { label: "Fair (630-689)", value: "fair" },
      { label: "Poor or No Credit (Under 630)", value: "poor" },
    ],
  },
];
