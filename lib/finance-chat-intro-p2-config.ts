import { ChatQuestion } from "@/components/finance/finance-chat-offerwall";

export const FINANCE_CHAT_INTRO_P2_QUESTIONS: ChatQuestion[] = [
  {
    id: "q1",
    botMessage: "Hi! To find your perfect match, are you looking for a personal or business credit card?",
    options: [
      { label: "Personal Use", value: "personal" },
      { label: "Business Use", value: "business" },
    ],
  },
  {
    id: "q2",
    botMessage: "Great! What's the main reason you're looking for a new card today?",
    options: [
      { label: "Earn Rewards & Cashback", value: "rewards" },
      { label: "Build or Rebuild Credit", value: "build-credit" },
      { label: "Balance Transfer (0% Intro APR)", value: "transfer" },
    ],
  },
];
