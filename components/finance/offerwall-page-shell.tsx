"use client";

import { useState, useEffect, type ReactNode } from "react";

/**
 * Prevents the visible FOUC (Flash of Unstyled Content) / CLS that occurs
 * on offerwall landing pages during hydration.
 *
 * Problem: Server-rendered page content paints immediately. The TopAds quiz
 * overlay needs client-side hydration + requestAnimationFrame + external
 * script discovery time before it can cover the page. During that gap the
 * user briefly sees the underlying page content shift/flash.
 *
 * Solution: Render an opaque white cover during SSR and the initial mount
 * phase. The cover sits at z-9990 (below TopAds overlays at z-9999) and
 * hides everything until the offerwall scaffold has had time to mount.
 * Page content renders at opacity 0 and transitions to visible once ready.
 */

interface OfferwallPageShellProps {
  children: ReactNode;
}

export default function OfferwallPageShell({
  children,
}: OfferwallPageShellProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Double-rAF ensures FinanceOfferwall's own rAF-deferred mount has
    // completed and TopAds has had at least one frame to discover the
    // data-topads-quiz scaffold and begin creating the quiz overlay.
    let cancelled = false;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!cancelled) setReady(true);
      });
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      {/* Opaque cover that matches the page background, preventing
          any flash of the underlying content.  z-index sits below
          TopAds overlays (z-[9999]) but above page content. */}
      {!ready && (
        <div
          aria-hidden="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9990,
            backgroundColor: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              border: "3px solid #e5e7eb",
              borderTopColor: "#1e40af",
              animation: "offerwall-shell-spin 0.7s linear infinite",
            }}
          />
          <style>
            {"@keyframes offerwall-shell-spin{to{transform:rotate(360deg)}}"}
          </style>
        </div>
      )}

      {/* Content starts hidden and fades in once the shell is ready.
          The DOM is present for SEO — only visibility is deferred. */}
      <div
        style={{
          opacity: ready ? 1 : 0,
          transition: ready ? "opacity 0.15s ease-in" : "none",
        }}
      >
        {children}
      </div>
    </>
  );
}
