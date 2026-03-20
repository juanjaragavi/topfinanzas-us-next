"use client";

import { useEffect } from "react";

interface TopAdsQuizIdStamperProps {
  journeyId: string;
}

/**
 * Observes the TopAds-rendered quiz DOM and stamps a dynamic
 * `id="paso-{n}-{journeyId}"` on a wrapper around the stable
 * `div#quiz-answers` container each time the question changes.
 *
 * Structural clone of budgetbee-next/components/gaming/topads-quiz-id-stamper.tsx.
 * TopAds owns the quiz DOM (`#quiz-overlay > #quiz-container > …`),
 * so we use a MutationObserver to detect step transitions and apply
 * the paso id without mutating the container TopAds looks up by id.
 */
export default function TopAdsQuizIdStamper({
  journeyId,
}: TopAdsQuizIdStamperProps) {
  useEffect(() => {
    let step = 0;
    let lastQuestionText = "";

    function ensurePasoWrapper(answersDiv: HTMLElement) {
      const currentParent = answersDiv.parentElement;

      if (
        currentParent instanceof HTMLDivElement &&
        currentParent.dataset.topadsPasoWrapper === "true"
      ) {
        return currentParent;
      }

      const wrapper = document.createElement("div");
      wrapper.dataset.topadsPasoWrapper = "true";

      const parentNode = answersDiv.parentNode;
      if (!parentNode) {
        return null;
      }

      parentNode.insertBefore(wrapper, answersDiv);
      wrapper.appendChild(answersDiv);

      return wrapper;
    }

    function stampId() {
      const answersDiv = document.getElementById("quiz-answers");
      if (!answersDiv) return;

      const titleDiv = document.getElementById("quiz-question-title");
      const currentText = titleDiv?.textContent?.trim() ?? "";

      if (currentText && currentText !== lastQuestionText) {
        lastQuestionText = currentText;
        step += 1;
      }

      if (step > 0) {
        const wrapper = ensurePasoWrapper(answersDiv);
        if (!wrapper) {
          return;
        }

        const pasoId = `paso-${step}-${journeyId}`;
        wrapper.id = pasoId;
        answersDiv.dataset.pasoId = pasoId;
      }
    }

    // Initial stamp in case the quiz is already rendered
    stampId();

    const observer = new MutationObserver(() => {
      stampId();
    });

    // Observe the entire body for TopAds quiz injection and step changes
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => {
      observer.disconnect();
    };
  }, [journeyId]);

  return null;
}
