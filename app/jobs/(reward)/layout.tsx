import type { ReactNode } from "react";
import JobsHeader from "@/components/jobs/jobs-header";
import JobsFooter from "@/components/jobs/jobs-footer";

export default function RewardLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JobsHeader />
      {children}
      <JobsFooter />
    </>
  );
}
