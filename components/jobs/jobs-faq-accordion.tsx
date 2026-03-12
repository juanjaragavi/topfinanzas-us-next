"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export interface JobsFaqItem {
  id: string;
  question: string;
  answer: string;
  showAdOnOpen?: boolean;
  adSlotId?: string;
}

interface JobsFaqAccordionProps {
  items: JobsFaqItem[];
  themeColor: string;
  defaultOpenId?: string;
}

export default function JobsFaqAccordion({
  items,
  themeColor,
  defaultOpenId,
}: JobsFaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? null);

  const toggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <div className="rounded-xl border border-gray-200 overflow-hidden">
      {items.map((item, index) => {
        const isOpen = openId === item.id;
        const isLast = index === items.length - 1;
        return (
          <div key={item.id}>
            <button
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={`faq-jobs-${item.id}`}
              className={cn(
                "flex w-full items-center justify-between p-4 text-left transition-colors",
                !isLast && "border-b border-gray-200",
                isOpen ? "bg-gray-50" : "hover:bg-gray-50",
              )}
            >
              <span
                className="font-semibold text-lg leading-6 pr-4"
                style={{ color: isOpen ? themeColor : "#1f2937" }}
              >
                {item.question}
              </span>
              <span
                className={cn(
                  "text-xl transition-transform duration-200 flex-shrink-0",
                  isOpen && "rotate-180",
                )}
                style={{ color: isOpen ? themeColor : "#6b7280" }}
              >
                ▼
              </span>
            </button>
            {isOpen && (
              <div
                id={`faq-jobs-${item.id}`}
                className="border-t border-gray-200 p-4"
              >
                <p className="text-base leading-relaxed text-gray-700">
                  {item.answer}
                </p>
                {item.showAdOnOpen && item.adSlotId && (
                  <div
                    id={item.adSlotId}
                    data-topads
                    data-topads-size="square"
                    className="items-center justify-center flex w-full mt-4"
                  />
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
