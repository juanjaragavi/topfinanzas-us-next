import { ChatQuestion } from "@/components/finance/finance-chat-offerwall";

export const FINANCE_QUIZ_P2_QUESTIONS: ChatQuestion[] = [
  {
    id: "q1",
    botMessage: "First, what's your preferred credit limit?",
    options: [
      { label: "$2,500", value: "2500" },
      { label: "$5,000", value: "5000" },
      { label: "$10,000+", value: "10000" },
    ],
  },
  {
    id: "q2",
    botMessage: "Got it! Which benefit matters most to you?",
    options: [
      { label: "Cashback", value: "cashback" },
      { label: "No Annual Fee", value: "no-fee" },
      { label: "0% Intro APR", value: "zero-apr" },
    ],
  },
];
