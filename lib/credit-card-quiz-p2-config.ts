import { ChatQuestion } from "@/components/finance/finance-chat-offerwall";

export const CREDIT_CARD_QUIZ_P2_QUESTIONS: ChatQuestion[] = [
  {
    id: "q1",
    botMessage: "What's your main goal?",
    options: [
      { label: "Build credit", value: "build-credit" },
      { label: "Earn rewards", value: "travel" },
      { label: "Get cashback", value: "cashback" },
    ],
  },
  {
    id: "q2",
    botMessage: "What's your credit score?",
    options: [
      { label: "Excellent (720+)", value: "excellent" },
      { label: "Good (690-719)", value: "good" },
      { label: "Fair or below", value: "fair" },
    ],
  },
];
