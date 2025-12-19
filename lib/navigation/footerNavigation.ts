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
      text: "Contáctanos",
      href: "/contactanos",
    },
    {
      text: "Nosotros",
      href: "/nosotros",
    },
  ],

  /** Categories section - Updated */
  categoryItems: [
    {
      text: "Finanzas personales",
      href: "/finanzas-personales",
    },
    {
      text: "Soluciones financieras",
      href: "/soluciones-financieras",
    },
    {
      text: "Finanzas para el hogar",
      href: "/finanzas-personales",
    },
    {
      text: "Finanzas para estudiantes",
      href: "/finanzas-personales",
    },
    {
      text: "Finanzas para pymes",
      href: "/finanzas-personales",
    },
  ],

  /** Popular Articles section - Empty for MX Layout as it's not shown */
  blogItems: [],

  /** Social media links */
  socialMedia: {
    title: "Síguenos en nuestra redes sociales",
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
      text: "Términos y condiciones",
      href: "/terminos-y-condiciones-de-uso",
    },
    {
      text: "Política de privacidad",
      href: "/politica-privacidad",
    },
    {
      text: "Política de Cookies",
      href: "/politica-de-cookies",
    },
  ],
};
