/**
 * Single-question Finance offerwall container.
 *
 * Renders the `data-topads-quiz` scaffold with exactly one question so
 * TopAds shows a minimal quiz step before the preloader and CTA button.
 * Designed for pages that need a lightweight offerwall interaction.
 */

interface FinanceOfferwallDirectProps {
  themeColor: string;
  loadingMessage: string;
  skipAds?: boolean;
  question?: string;
  options?: { label: string; value: string }[];
}

export default function FinanceOfferwallDirect({
  themeColor,
  loadingMessage,
  skipAds = false,
  question = "Confirm Desired Credit Card Limit:",
  options = [
    { label: "$2500", value: "2500" },
    { label: "$5000", value: "5000" },
    { label: "$10000", value: "10000" },
    { label: "I need more", value: "more" },
  ],
}: FinanceOfferwallDirectProps) {
  const texts = JSON.stringify({
    loading: loadingMessage,
    ctaTitle: "Found the best credit cards\u2026",
    ctaButton: "See Cards Now",
    ctaDisclaimer: "To continue, it will be necessary to watch a short ad.",
  });

  return (
    <div
      data-topads-quiz=""
      data-quiz-accent={themeColor}
      data-topads-texts={texts}
      data-quiz-skip-ad={skipAds ? "true" : "false"}
      aria-hidden="true"
      style={{
        position: "fixed",
        width: "1px",
        height: "1px",
        padding: 0,
        margin: 0,
        overflow: "hidden",
        opacity: 0,
        pointerEvents: "none",
        whiteSpace: "nowrap",
        clipPath: "inset(50%)",
      }}
    >
      <div data-quiz-question="">
        <span
          data-question-text=""
          style={{ all: "unset", display: "block" }}
        >
          {question}
        </span>
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            data-answer=""
            style={{ all: "unset", display: "block" }}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
