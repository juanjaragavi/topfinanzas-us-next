import type { ReactNode } from "react";
import JobsHeader from "@/components/jobs/jobs-header";
import JobsCopyright from "@/components/jobs/jobs-copyright";

export default function ChatLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JobsHeader />
      {children}
      <JobsCopyright />
    </>
  );
}
