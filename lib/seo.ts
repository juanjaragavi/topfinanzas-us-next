import type { Metadata } from "next";
import {
  ROUTE_SEO_REGISTRY,
  type RouteSeoEntry,
} from "@/lib/seo-route-registry";

export const SEO_SITE = {
  name: "TopFinanzas US",
  legalName: "TopNetworks Inc.",
  baseUrl: "https://us.topfinanzas.com",
  locale: "en_US",
  language: "en-US",
  defaultTitle: "TopFinanzas US | Your Guide to US Credit Cards & Loans",
  titleTemplate: "%s | TopFinanzas US",
  description:
    "Compare US credit cards, personal loans, and financial solutions with TopFinanzas US. Clear guides and tools for making smarter financial decisions.",
  defaultImage: "https://media.topfinanzas.com/images/placeholder-image.webp",
  logo: "https://media.topfinanzas.com/images/logo-english.webp",
  email: "info@topfinanzas.com",
  socialProfiles: [
    "https://www.linkedin.com/company/top-networks-inc",
    "https://www.instagram.com/topfinanzas/",
  ],
  disclosure:
    "TopFinanzas US provides general financial education and product information for US consumers. Content is not financial advice. Product rates, terms, and availability vary by lender, issuer, and individual creditworthiness. See card agreements and lender disclosures for full terms.",
} as const;

type SchemaValue = Record<string, unknown>;

export function absoluteUrl(pathname = "") {
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${SEO_SITE.baseUrl}${normalizedPath === "/" ? "" : normalizedPath}`;
}

export function stripBrandSuffix(title: string) {
  return title
    .replace(/\s*\|\s*TopFinanzas(?:\s*US)?\s*$/i, "")
    .replace(/\s*\|\s*Top\s*Finance(?:\s*US)?\s*$/i, "")
    .replace(/\s*-\s*TopFinanzas(?:\s*US)?\s*$/i, "")
    .replace(/\s*-\s*Top\s*Finance(?:\s*US)?\s*$/i, "")
    .trim();
}

function titleFromSlug(pathname: string) {
  const slug = pathname.split("/").filter(Boolean).pop() ?? "topfinanzas-us";
  return slug
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function inferCategory(pathname: string): RouteSeoEntry["category"] {
  if (pathname.startsWith("/financial-solutions/")) return "financial-solutions";
  if (pathname.startsWith("/personal-finance/")) return "personal-finance";
  return "static";
}

function inferContentType(
  pathname: string,
  title: string,
): RouteSeoEntry["contentType"] {
  const haystack = `${pathname} ${title}`.toLowerCase();

  if (pathname.startsWith("/personal-finance/")) return "article";
  if (
    haystack.includes("loan") ||
    haystack.includes("fundbox") ||
    haystack.includes("quickbridge") ||
    haystack.includes("national-funding") ||
    haystack.includes("national funding")
  ) {
    return "loan";
  }
  if (
    haystack.includes("card") ||
    haystack.includes("credit") ||
    haystack.includes("visa") ||
    haystack.includes("amex") ||
    haystack.includes("express")
  ) {
    return "credit-card";
  }

  return pathname.startsWith("/financial-solutions/")
    ? "financial-product"
    : "webpage";
}

export function getRouteSeo(pathname: string): RouteSeoEntry {
  const normalizedPath =
    pathname === ""
      ? "/"
      : pathname.startsWith("/")
        ? pathname
        : `/${pathname}`;
  const found = ROUTE_SEO_REGISTRY[normalizedPath];

  if (found) return found;

  const title = titleFromSlug(normalizedPath);

  return {
    pathname: normalizedPath,
    title,
    description: `${title} from TopFinanzas US: a clear US-focused guide for better financial decisions.`,
    image: SEO_SITE.defaultImage,
    category: inferCategory(normalizedPath),
    contentType: inferContentType(normalizedPath, title),
  };
}

export function createRouteMetadata(pathname: string): Metadata {
  const route = getRouteSeo(pathname);
  const canonical = absoluteUrl(route.pathname);
  const title = stripBrandSuffix(route.title);
  const image = route.image || SEO_SITE.defaultImage;
  const isArticle =
    route.contentType === "article" ||
    route.contentType === "credit-card" ||
    route.contentType === "loan" ||
    route.contentType === "financial-product";

  return {
    title: {
      absolute:
        route.pathname === "/"
          ? SEO_SITE.defaultTitle
          : `${title} | ${SEO_SITE.name}`,
    },
    description: route.description,
    alternates: {
      canonical,
      languages: {
        [SEO_SITE.language]: canonical,
        en: canonical,
        "en-GB": canonical.replace(
          "https://us.topfinanzas.com",
          "https://uk.topfinanzas.com",
        ),
        "es-MX": "https://topfinanzas.com",
        "x-default": canonical,
      },
    },
    openGraph: {
      title,
      description: route.description,
      url: canonical,
      siteName: SEO_SITE.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${title} — ${SEO_SITE.name}`,
        },
      ],
      locale: SEO_SITE.locale,
      type: isArticle ? "article" : "website",
      ...(isArticle && route.date
        ? {
            publishedTime: parseDate(route.date).toISOString(),
            modifiedTime: parseDate(route.date).toISOString(),
            authors: ["TopFinanzas US Editorial Team"],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: route.description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export function createNoIndexMetadata(
  title: string,
  description = "This TopFinanzas US page is not intended for search indexing.",
): Metadata {
  return {
    title: {
      absolute: `${stripBrandSuffix(title)} | ${SEO_SITE.name}`,
    },
    description,
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
      },
    },
  };
}

export function generateOrganizationSchema(): SchemaValue {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SEO_SITE.name,
    legalName: SEO_SITE.legalName,
    url: SEO_SITE.baseUrl,
    logo: SEO_SITE.logo,
    sameAs: SEO_SITE.socialProfiles,
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: SEO_SITE.email,
      availableLanguage: ["English", "en-US"],
    },
  };
}

export function generateWebSiteSchema(): SchemaValue {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SEO_SITE.name,
    url: SEO_SITE.baseUrl,
    inLanguage: SEO_SITE.language,
    publisher: {
      "@type": "Organization",
      name: SEO_SITE.name,
      logo: {
        "@type": "ImageObject",
        url: SEO_SITE.logo,
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SEO_SITE.baseUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateWebPageSchema(pathname: string): SchemaValue {
  const route = getRouteSeo(pathname);
  const title = stripBrandSuffix(route.title);
  const canonical = absoluteUrl(route.pathname);

  return {
    "@context": "https://schema.org",
    "@type": route.contentType === "collection" ? "CollectionPage" : "WebPage",
    name: title,
    description: route.description,
    url: canonical,
    inLanguage: SEO_SITE.language,
    isPartOf: {
      "@type": "WebSite",
      name: SEO_SITE.name,
      url: SEO_SITE.baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: SEO_SITE.name,
      logo: {
        "@type": "ImageObject",
        url: SEO_SITE.logo,
      },
    },
  };
}

export function generateBreadcrumbSchema(route: RouteSeoEntry): SchemaValue {
  const title = stripBrandSuffix(route.title);
  const itemListElement = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SEO_SITE.baseUrl,
    },
  ];

  if (route.category === "financial-solutions") {
    itemListElement.push({
      "@type": "ListItem",
      position: 2,
      name: "Financial Solutions",
      item: absoluteUrl("/financial-solutions"),
    });
  } else if (route.category === "personal-finance") {
    itemListElement.push({
      "@type": "ListItem",
      position: 2,
      name: "Personal Finance",
      item: absoluteUrl("/personal-finance"),
    });
  }

  if (route.pathname !== "/") {
    itemListElement.push({
      "@type": "ListItem",
      position: itemListElement.length + 1,
      name: title,
      item: absoluteUrl(route.pathname),
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };
}

export function generateArticleSchema(route: RouteSeoEntry): SchemaValue {
  const title = stripBrandSuffix(route.title);
  const canonical = absoluteUrl(route.pathname);
  const image = route.image || SEO_SITE.defaultImage;
  const date = parseDate(route.date);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: route.description,
    image,
    url: canonical,
    inLanguage: SEO_SITE.language,
    datePublished: date.toISOString(),
    dateModified: date.toISOString(),
    author: {
      "@type": "Organization",
      name: "TopFinanzas US Editorial Team",
      url: SEO_SITE.baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: SEO_SITE.name,
      logo: {
        "@type": "ImageObject",
        url: SEO_SITE.logo,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
  };
}

export function generateFinancialProductSchema(
  route: RouteSeoEntry,
): SchemaValue {
  const title = stripBrandSuffix(route.title);
  const canonical = absoluteUrl(route.pathname);
  const image = route.image || SEO_SITE.defaultImage;
  const schemaType =
    route.contentType === "credit-card"
      ? "CreditCard"
      : route.contentType === "loan"
        ? "LoanOrCredit"
        : "FinancialProduct";

  return {
    "@context": "https://schema.org",
    "@type": schemaType,
    name: title,
    description: route.description,
    url: canonical,
    image,
    category:
      route.contentType === "credit-card"
        ? "Credit card"
        : route.contentType === "loan"
          ? "Loan"
          : "Financial product",
    provider: {
      "@type": "Organization",
      name: SEO_SITE.name,
      url: SEO_SITE.baseUrl,
    },
    offers: {
      "@type": "Offer",
      url: canonical,
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      description: route.description,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
  };
}

export function createRouteStructuredData(pathname: string): SchemaValue[] {
  const route = getRouteSeo(pathname);

  if (route.category === "financial-solutions") {
    return [
      generateBreadcrumbSchema(route),
      generateFinancialProductSchema(route),
    ];
  }

  if (route.category === "personal-finance") {
    return [generateBreadcrumbSchema(route), generateArticleSchema(route)];
  }

  return [generateBreadcrumbSchema(route), generateWebPageSchema(pathname)];
}

export function getIndexableRoutes() {
  return Object.values(ROUTE_SEO_REGISTRY).filter((route) => {
    if (route.category === "financial-solutions") return true;
    if (route.category === "personal-finance") return true;
    return [
      "/",
      "/blog",
      "/financial-solutions",
      "/personal-finance",
      "/about-us",
      "/contact-us",
      "/privacy-policy",
      "/terms-conditions",
      "/cookie-policy",
    ].includes(route.pathname);
  });
}

export function parseDate(date?: string) {
  if (!date) return new Date("2025-10-28T00:00:00Z");
  const parsed = new Date(date);
  return Number.isNaN(parsed.getTime())
    ? new Date("2025-10-28T00:00:00Z")
    : parsed;
}
