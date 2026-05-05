"use client";

import dynamic from "next/dynamic";
import PartytownInit from "./partytown-init";

const GoogleTagManagerPartytown = dynamic(
  () => import("./gtm-partytown").then((mod) => mod.default),
  { ssr: false }
);
const TopAds = dynamic(() => import("./topads"), {
  ssr: false,
});

export default function HeadScripts() {
  return (
    <>
      <PartytownInit />
      <GoogleTagManagerPartytown />
      <TopAds />
    </>
  );
}
