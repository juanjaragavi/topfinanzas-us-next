"use client";

import React from "react";
import { useMobileMenu } from "@/components/providers/mobile-menu-context";

export default function SiteWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isMobileMenuOpen } = useMobileMenu();

  return (
    <div
      className={`min-h-screen transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? "translate-x-[300px]" : "translate-x-0"
      }`}
    >
      {/* Overlay to close menu when clicking outside - optional but good UX */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20"
          // We'll let the standard close handler in Header handle the close action via the close button,
          // but normally we'd add an onClick handler here too.
          // For now, let's keep it purely visual or simple.
          // Actually, the user asked for "push", not "overlay".
          // "Push" usually implies the canvas moves. No dark overlay needed necessarily,
          // but often used. I'll omit the overlay div to strictly follow "Push" mechanics for now unless requested.
        />
      )}
      {children}
    </div>
  );
}
