/**
 * Navigation items and content for the footer component
 * Localized for the UK market
 * Easily modifiable by LLM agents to update site footer content
 */

export interface FooterNavigationItem {
  text: string;
  href: string;
}

export interface SocialMediaItem {
  platform: string;
  url: string;
  ariaLabel: string;
}

export interface ContactItem {
  type: "email" | "address";
  value: string;
  href?: string;
}

export const footerNavigation = {
  /** Main navigation section */
  mainNavItems: [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "Contact Us",
      href: "/contact-us",
    },
    {
      text: "About Us",
      href: "/about-us",
    },
  ],

  /** Categories section - Updated */
  categoryItems: [
    {
      text: "Personal Finance",
      href: "/finanzas-personales",
    },
    {
      text: "Financial Solutions",
      href: "/soluciones-financieras",
    },
    {
      text: "Home Finance",
      href: "/finanzas-personales",
    },
    {
      text: "Student Finance",
      href: "/finanzas-personales",
    },
    {
      text: "SME Finance",
      href: "/finanzas-personales",
    },
  ],

  /** Popular Articles section - Empty for MX Layout as it's not shown */
  blogItems: [],

  /** Social media links */
  socialMedia: {
    title: "Follow us on social media",
    links: [
      {
        platform: "Facebook",
        url: "https://www.facebook.com/topfinanzas", // Placeholder
        ariaLabel: "Facebook",
      },
      {
        platform: "YouTube",
        url: "https://www.youtube.com/@topfinanzas", // Placeholder
        ariaLabel: "YouTube",
      },
      {
        platform: "Instagram",
        url: "https://www.instagram.com/topfinanzas/",
        ariaLabel: "Instagram",
      },
      {
        platform: "TikTok",
        url: "https://www.tiktok.com/@topfinanzas", // Placeholder
        ariaLabel: "TikTok",
      },
    ],
  },

  /** Contact information */
  contactInfo: [
    {
      type: "email",
      value: "info@topfinanzas.com",
      href: "mailto:info@topfinanzas.com",
    },
    {
      type: "address",
      value:
        "PANAMA, PANAMA CITY, AV. AQUILINO DE LA GUARDIA, OCEAN BUSINESS PLAZA BUILDING, FLOOR 12",
    },
  ],

  /** Legal links */
  legalLinks: [
    {
      text: "Terms and Conditions",
      href: "/terms-conditions",
    },
    {
      text: "Privacy Policy",
      href: "/privacy-policy",
    },
    {
      text: "Cookie Policy",
      href: "/cookie-policy",
    },
  ],
};
