/**
 * Question-less Finance offerwall container.
 *
 * Renders just the `data-topads-quiz` scaffold with NO question children
 * so TopAds skips directly to the preloader and CTA button.
 * Designed for pages that need the offerwall without any quiz interaction.
 */

interface FinanceOfferwallDirectProps {
  themeColor: string;
  loadingMessage: string;
  skipAds?: boolean;
}

export default function FinanceOfferwallDirect({
  themeColor,
  loadingMessage,
  skipAds = false,
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
    />
  );
}
