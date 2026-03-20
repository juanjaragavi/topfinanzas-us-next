import type { FinanceQuizConfig } from "@/lib/finance-quiz-config";

/**
 * Hidden ad-unit container for the Finance offerwall quiz.
 *
 * Structural clone of budgetbee-next/lib/new-offerwall-for-gaming.tsx.
 * The TopAds external script discovers this DOM node via the
 * `data-topads-quiz` attribute, parses the question/answer markup,
 * and renders its own quiz modal overlay with the supplied accent
 * colour and copy strings. React never renders visible UI here.
 */

interface FinanceOfferwallProps {
  config: FinanceQuizConfig;
}

export default function FinanceOfferwall({ config }: FinanceOfferwallProps) {
  const texts = JSON.stringify({
    loading: config.loadingMessage,
    ctaTitle: "Found the best credit cards\u2026",
    ctaButton: "See Cards Now",
    ctaDisclaimer: "To continue, it will be necessary to watch a short ad.",
  });

  return (
    <div
      data-topads-quiz=""
      data-quiz-accent={config.themeColor}
      data-topads-texts={texts}
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
      {config.questions.map((q) => (
        <div key={q.id} data-quiz-question="">
          <span
            data-question-text=""
            style={{
              all: "unset",
              display: "block",
            }}
          >
            {q.question}
          </span>
          {q.options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              data-answer=""
              style={{
                all: "unset",
                display: "block",
              }}
            >
              {opt.label}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
