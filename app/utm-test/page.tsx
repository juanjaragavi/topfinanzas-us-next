"use client";

import { useEffect, Suspense } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { testUtmPersistence } from "@/components/analytics/utm-test";
import { Button } from "@/components/ui/button";
import { utmLogger } from "@/lib/logger";
import { TopAdsSquare } from "@/components/ads/topads-placement";

// Client Component that uses useSearchParams
function UtmTestContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get the current URL with query parameters
  useEffect(() => {
    // Initial test on page load
    testUtmPersistence();
  }, []);

  // Function to create navigation links that preserve UTM parameters
  const navigateTo = (path: string) => {
    // Start with the basic path
    let url = path;

    // Get all current UTM parameters from the URL
    const utmParams = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_term",
      "utm_content",
    ];
    const params = new URLSearchParams();
    let hasUtm = false;

    utmParams.forEach((param) => {
      const value = searchParams.get(param);
      if (value) {
        params.append(param, value);
        hasUtm = true;
      }
    });

    // Append UTM parameters if any exist
    if (hasUtm) {
      url = `${path}?${params.toString()}`;
    }

    utmLogger.info(`Navigating to: ${url}`);
    router.push(url);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">UTM Parameter Test Page</h1>

      <p className="mb-4">
        This page tests whether UTM parameters are persisted across navigation.
        Check your browser console to see the logged UTM parameters.
      </p>

      {/* TopAds Test Placement 1 */}
      <TopAdsSquare id="square01" />

      <div className="flex flex-col gap-4">
        <p className="font-semibold">Navigate to different pages:</p>

        <div className="flex gap-4">
          <Button variant="secondary" onClick={() => navigateTo("/")}>
            Home Page
          </Button>

          <Button variant="secondary" onClick={() => navigateTo("/blog")}>
            Blog
          </Button>

          <Button
            variant="secondary"
            onClick={() => navigateTo("/choose-the-perfect-card-for-you-1")}
          >
            Card Recommender
          </Button>
        </div>

        <p className="mt-4 text-sm text-gray-600">
          Open your browser console (F12) to see the UTM parameter logs during
          navigation.
        </p>
      </div>

      {/* TopAds Test Placement 2 */}
      <TopAdsSquare id="square02" />

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">TopAds Test</h2>
        <p className="text-sm text-gray-700">
          This page also includes TopAds placements (square01 and square02) for
          testing. Open the browser console to see TopAds initialization and SPA
          navigation logs.
        </p>
      </div>
    </div>
  );
}

// Main page component with Suspense boundary
export default function UtmTestPage() {
  return (
    <Suspense
      fallback={
        <div className="container mx-auto px-4 py-8">
          Loading UTM test page...
        </div>
      }
    >
      <UtmTestContent />
    </Suspense>
  );
}
