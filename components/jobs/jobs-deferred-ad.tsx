"use client";

import { useEffect, useState } from "react";

interface JobsDeferredAdProps {
  type: "rewarded" | "square";
  id?: string;
  defer?: boolean;
  texts?: string; // stringified JSON for rewarded
  className?: string; // used for square format
}

export default function JobsDeferredAd({ type, id, defer = false, texts, className }: JobsDeferredAdProps) {
  const [show, setShow] = useState(!defer);

  useEffect(() => {
    if (!defer) return;

    const handler = () => {
      setShow(true);
    };

    window.addEventListener("jobsQuizDone", handler);
    return () => window.removeEventListener("jobsQuizDone", handler);
  }, [defer]);

  if (!show) return null;

  if (type === "rewarded") {
    // If texts is provided, we need to pass it as string.
    const rewardedProps = texts ? { "data-topads-texts": texts } : {};
    return <div data-topads-rewarded {...rewardedProps} />;
  }

  return (
    <div
      id={id}
      data-topads
      data-topads-size="square"
      className={className || "items-center justify-center flex w-full my-8"}
    />
  );
}
