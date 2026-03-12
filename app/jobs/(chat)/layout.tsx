import type { ReactNode } from "react";
import JobsHeader from "@/components/jobs/jobs-header";

export default function ChatLayout({ children }: { children: ReactNode }) {
  const year = new Date().getFullYear();
  return (
    <>
      <JobsHeader />
      {children}
      <p className="text-center text-xs text-gray-400 py-4">
        &copy; {year} TopFinanzas. All rights reserved.
      </p>
    </>
  );
}
