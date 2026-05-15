"use client";

import SharedCreditCardRecommender from "@/components/funnels/shared-credit-card-recommender";

const LOG_TAG = "CC-REC-10-QUEST";
const STEP_QUESTION = "🔓 Unlock Credit Power!";
const STEP_SUBTITLE =
  "This helps us match cards you're most likely to be approved for.";
const NEXT_ROUTE = "/invit-credit-card-rec-us-11";

export default function InvitCreditCardRecUS10Page() {
  return (
    <SharedCreditCardRecommender
      logTag={LOG_TAG}
      stepQuestion={STEP_QUESTION}
      stepSubtitle={STEP_SUBTITLE}
      nextRoute={NEXT_ROUTE}
      variant="quest"
    />
  );
}
