import type { ReactNode } from "react";
import JobsHeader from "@/components/jobs/jobs-header";
import JobsFooter from "@/components/jobs/jobs-footer";
import JobsFloatingCta from "@/components/jobs/jobs-floating-cta";

export default function PromiseLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JobsHeader />
      {children}
      <JobsFloatingCta />
      <JobsFooter />
    </>
  );
}
