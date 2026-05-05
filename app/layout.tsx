import type React from "react";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import fs from "fs";
import path from "path";
import "./globals.css";
import { logger } from "@/lib/logger";
import { GoogleTagManagerNoScript } from "@/components/analytics/gtm-partytown";
import HeadScripts from "@/components/analytics/head-scripts";
import AnalyticsWrapper from "@/components/analytics/analytics-wrapper";
import NavigationProvider from "@/components/providers/navigation-provider";
import { MobileMenuProvider } from "@/components/providers/mobile-menu-context";
import SiteWrapper from "@/components/layout/site-wrapper";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { generateWebSiteSchema } from "@/lib/seo";

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
  preload: true,
  fallback: [
    "system-ui",
    "Segoe UI",
    "Roboto",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
});

// Inter font for offerwall CTA buttons (design system spec)
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-inter",
  preload: false,
});

// Define base URL for metadata
const baseUrl = "https://us.topfinanzas.com";

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
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    template: "%s | Top Finance US",
    default: "Top Finance US | Choose wisely, live fully",
  },
  description:
    "Leading financial guide in the US. Expert advice on credit cards, loans, and personal finance.",
  keywords:
    "credit cards us, personal loans, compare cards, financial education, Top Finance US",

  openGraph: {
    title: "Top Finance US | Choose wisely, live fully",
    description:
      "Leading financial guide in the US. Expert advice on credit cards, loans, and personal finance.",
    url: baseUrl,
    siteName: "Top Finance US",
    images: [
      {
        url: `https://media.topfinanzas.com/images/placeholder-image.webp`,
        width: 1200,
        height: 630,
        alt: "Top Finance US - Financial Guide",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Top Finance US | Choose wisely, live fully",
    description:
      "Leading financial guide in the US. Expert advice on credit cards, loans, and personal finance.",
    images: [`https://media.topfinanzas.com/images/placeholder-image.webp`],
  },

  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest", // Use relative path for local manifest

  // Hreflang alternates
  alternates: {
    canonical: "https://us.topfinanzas.com",
    languages: {
      "en-US": "https://us.topfinanzas.com",
      "es-MX": "https://topfinanzas.com",
      "en-GB": "https://uk.topfinanzas.com",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-us">
      <head>
        {/* Inline critical CSS for faster rendering */}
        <style
          dangerouslySetInnerHTML={{
            __html: criticalCSS,
          }}
        />
        <meta name="referrer" content="strict-origin-when-cross-origin" />

        {/*
          Resource Hints — Optimized for Core Web Vitals
          Keep preconnect count ≤ 4 to avoid connection overhead (PSI warning).
          Only preconnect to origins that serve render-blocking or LCP-critical resources.
        */}
        {/* Image CDN — critical for LCP; every page loads hero images from here */}
        <link
          rel="preconnect"
          href="https://media.topfinanzas.com"
          crossOrigin="anonymous"
        />
        {/* GTM — loads early via lazyOnload but preconnect shaves DNS/TCP time */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        {/* Google Ads/Doubleclick — revenue-critical, preconnect helps ad fill speed */}
        <link
          rel="preconnect"
          href="https://securepubads.g.doubleclick.net"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://pagead2.googlesyndication.com"
          crossOrigin="anonymous"
        />
        {/* dns-prefetch only for lower-priority third parties */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://scripts.clarity.ms" />
        <link rel="dns-prefetch" href="https://ads.gamadx.com" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebSiteSchema()).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />

        <HeadScripts />

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
      <body
        className={`${poppins.variable} ${inter.variable} font-sans text-left sm:text-left`}
      >
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
            <MobileMenu />
            <SiteWrapper>
              <AnalyticsWrapper />
              {children}
            </SiteWrapper>
          </NavigationProvider>
          {/*</PreloaderProvider>*/}
        </MobileMenuProvider>
      </body>
    </html>
  );
}
