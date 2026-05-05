"use client";

import dynamic from "next/dynamic";

const GoogleTagManager = dynamic(
  () => import("@/components/analytics/gtm"),
  { ssr: false }
);
const TopAds = dynamic(() => import("@/components/analytics/topads"), {
  ssr: false,
});

export default function HeadScripts() {
  return (
    <>
      <GoogleTagManager />
      <TopAds />
    </>
  );
}
