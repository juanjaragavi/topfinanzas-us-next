import type { ReactNode } from "react";
import JobsHeader from "@/components/jobs/jobs-header";
import JobsCopyright from "@/components/jobs/jobs-copyright";

export default function QuizLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JobsHeader />
      {children}
      <JobsCopyright />
    </>
  );
}
