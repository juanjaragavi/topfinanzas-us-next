import type React from "react";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Suspense } from "react";
import fs from "fs";
import path from "path";
import "./globals.css";
import { logger } from "@/lib/logger";
import GoogleTagManager, {
  GoogleTagManagerNoScript,
} from "@/components/analytics/gtm";
import GoogleAds from "@/components/analytics/google-ads";
import GoogleAdManager from "@/components/analytics/gam";
import UtmPersister from "@/components/analytics/utm-persister";
import UtmLinkInjector from "@/components/analytics/utm-link-injector";
import UtmMonitor from "@/components/analytics/utm-monitor";
import AdZep from "@/components/analytics/adzep";
import AdZepTest from "@/components/analytics/adzep-test";
import AdZepSPABridge from "@/components/analytics/adzep-spa-bridge";
import AdZepInterstitialBlocker from "@/components/analytics/adzep-interstitial-blocker";
import AdZepAccessibilityFix from "@/components/analytics/adzep-accessibility-fix";
import AdZepBackdropCleaner from "@/components/analytics/adzep-backdrop-cleaner";
import AnalyticsValidationPanel from "@/components/analytics/validation-panel";
import TopAds from "@/components/analytics/topads";
import TopAdsSPAHandler from "@/components/analytics/topads-spa-handler";
import ResourceHints from "@/components/resource-hints";
import NavigationProvider from "@/components/providers/navigation-provider";
import { MobileMenuProvider } from "@/components/providers/mobile-menu-context";
import SiteWrapper from "@/components/layout/site-wrapper";
{
  /*import PreloaderProvider from "@/components/providers/preloader-provider";*/
}
import ClientOnly from "@/components/ClientOnly";

// Use local font to avoid external requests during build
// This improves build time and eliminates network dependency
// preload: false prevents browser warnings about unused preloaded fonts
const poppins = localFont({
  src: [
    {
      path: "../public/fonts/poppins-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/poppins-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/poppins-semibold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-poppins",
  preload: false, // Disable preloading to prevent "unused preload" warnings
  fallback: [
    "system-ui",
    "Segoe UI",
    "Roboto",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
});

// Define base URL for metadata
const baseUrl = "https://topfinanzas.com/mx";

// Temporarily disable AdZep script to isolate TopAds testing
const ENABLE_ADZEP = false;

// Read critical CSS at build time to inline it
let criticalCSS = "";
try {
  // Read the critical CSS file
  criticalCSS = fs.readFileSync(
    path.join(process.cwd(), "app/critical.css"),
    "utf8",
  );
} catch (e) {
  logger.error("Failed to read critical CSS", e);
}

// Add viewport configuration
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  // Updated Title and Description for MX focus
  title: "Top Finanzas México | Decide sabiamente, vive plenamente",
  description:
    "Guía financiera líder en México. Consejos expertos sobre tarjetas de crédito, préstamos y finanzas personales.",
  keywords:
    "tarjetas de crédito méxico, préstamos personales, comparar tarjetas, educación financiera, Top Finanzas México", // Updated keywords
  // Removed generator tag

  // Added Open Graph Metadata
  openGraph: {
    title: "Top Finanzas México | Decide sabiamente, vive plenamente",
    description:
      "Guía financiera líder en México. Consejos expertos sobre tarjetas de crédito, préstamos y finanzas personales.",
    url: baseUrl,
    siteName: "Top Finanzas MX",
    images: [
      {
        url: `https://media.topfinanzas.com/images/placeholder-image.webp`, // Using the provided image URL
        width: 900, // Assuming standard OG image width
        height: 600, // Assuming standard OG image height
        alt: "Top Finanzas MX - Guía Financiera", // Updated Alt Text
      },
    ],
    locale: "es_MX",
    type: "website",
  },

  // Added Twitter Card Metadata
  twitter: {
    card: "summary_large_image",
    title: "Top Finanzas México | Decide sabiamente, vive plenamente",
    description:
      "Guía financiera líder en México. Consejos expertos sobre tarjetas de crédito, préstamos y finanzas personales.",
    // siteId: "[Optional Twitter ID]",
    // creator: "[Optional Twitter Handle]",
    // creatorId: "[Optional Twitter ID]",
    images: [`https://media.topfinanzas.com/images/placeholder-image.webp`], // Using the provided image URL
  },

  // Use simplified favicon configuration
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest", // Use relative path for local manifest

  // Optional: Define metadataBase for resolving relative image URLs
  metadataBase: new URL(baseUrl),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-mx">
      <head>
        {/* Inline critical CSS for faster rendering */}
        <style
          dangerouslySetInnerHTML={{
            __html: criticalCSS,
          }}
        />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta
          httpEquiv="Cache-Control"
          content="public, max-age=31536000, immutable"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Preconnect to media domain to establish early connection */}
        <link
          rel="preconnect"
          href="https://media.topfinanzas.com"
          crossOrigin="anonymous"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Top Finanzas MX",
                url: baseUrl,
                logo: "https://media.topfinanzas.com/images/logo-spanish.webp", // Assuming spanish logo exists or using fallback
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "PANAMA, PANAMA CITY",
                  addressLocality: "AV. AQUILINO DE LA GUARDIA",
                  postalCode: "OCEAN BUSINESS PLAZA BUILDING, FLOOR 12",
                  addressCountry: "PA",
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+52-55-1234-5678", // MX Example Placeholder
                  contactType: "customer support",
                  email: "info@topfinanzas.com",
                },
                sameAs: [
                  "https://www.linkedin.com/company/top-networks-inc",
                  "https://www.instagram.com/topfinanzas/",
                ],
              },
              null,
              2,
            ),
          }}
        />

        <ClientOnly>
          <GoogleTagManager />
          <GoogleAds />
          <GoogleAdManager />
          {ENABLE_ADZEP && <AdZep />}
          <TopAds />
        </ClientOnly>

        <ResourceHints />

        {/* Explicit favicon and manifest links with proper MIME types */}
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          type="image/png"
        />
        <link
          rel="manifest"
          href="/site.webmanifest"
          type="application/manifest+json"
          crossOrigin="anonymous"
        />

        {/* Fallback api routes for browsers that might have issues with static files */}
        <link
          rel="alternate"
          href="/api/webmanifest"
          type="application/manifest+json"
        />
      </head>
      <body className={`${poppins.variable} font-sans text-left sm:text-left`}>
        <GoogleTagManagerNoScript />
        <MobileMenuProvider>
          {/*<PreloaderProvider
            defaultConfig={{
              duration: 4000,
              primaryColor: "#1e40af",
              secondaryColor: "#3b82f6",
              backgroundColor: "#ffffff",
              showLogo: true,
              showProgress: true,
            }}
            showOnNavigation={true}
          >*/}
          <NavigationProvider>
            <SiteWrapper>
              <Suspense fallback={null}>
                <UtmPersister />
                <UtmLinkInjector />
                {ENABLE_ADZEP && <AdZepSPABridge />}
                {ENABLE_ADZEP && <AdZepInterstitialBlocker />}
                <AdZepAccessibilityFix />{" "}
                {/* Always run - Google Ads vignette also sets aria-hidden on body */}
                {ENABLE_ADZEP && <AdZepBackdropCleaner />}
                <TopAdsSPAHandler />
                {process.env.NODE_ENV === "development" && <UtmMonitor />}
                {process.env.NODE_ENV === "development" && ENABLE_ADZEP && (
                  <AdZepTest />
                )}
                {process.env.NODE_ENV === "development" && (
                  <AnalyticsValidationPanel />
                )}
              </Suspense>
              {children}
            </SiteWrapper>
          </NavigationProvider>
          {/*</PreloaderProvider>*/}
        </MobileMenuProvider>
      </body>
    </html>
  );
}
