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
  svgPath: string;
}

export interface ContactItem {
  type: "email" | "address";
  value: string;
  href?: string;
  svgPath: string;
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
      href: "/personal-finance",
    },
    {
      text: "Soluciones financieras",
      href: "/financial-solutions",
    },
    {
      text: "Finanzas para el hogar",
      href: "/home-finance", // Placeholder slug
    },
    {
      text: "Finanzas para estudiantes",
      href: "/student-finance", // Placeholder slug
    },
    {
      text: "Finanzas para pymes",
      href: "/sme-finance", // Placeholder slug
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
        svgPath:
          "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z", // Simple Facebook path
      },
      {
        platform: "YouTube",
        url: "https://www.youtube.com/@topfinanzas", // Placeholder
        ariaLabel: "YouTube",
        svgPath:
          "M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29.07 29.07 0 001 11.75a29.07 29.07 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29.07 29.07 0 00.46-5.33 29.07 29.07 0 00-.46-5.33zM9.75 15.02l5.75-3.27-5.75-3.27v6.54z", // YouTube path
      },
      {
        platform: "Instagram",
        url: "https://www.instagram.com/topfinanzas/",
        ariaLabel: "Instagram",
        svgPath:
          "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
      },
      {
        platform: "TikTok",
        url: "https://www.tiktok.com/@topfinanzas", // Placeholder
        ariaLabel: "TikTok",
        svgPath:
          "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.65-1.62-1.12-.01 2.95-.02 5.91-.02 8.87-.01 1.67-.32 3.32-1.21 4.75-2.02 3.2-6.09 4.36-9.58 2.72-3.49-1.64-5.07-5.83-3.63-9.37 1.44-3.54 5.46-5.18 8.97-3.66.44.19.86.43 1.25.71.01-1.4.02-2.8.03-4.21-.26-.13-.53-.24-.8-.34-2.26-.8-4.89-.31-6.72 1.27-2.9 2.5-3.08 7.37-.58 10.27 2.5 2.9 7.37 3.08 10.27.58 2.25-1.94 3.35-5.09 2.59-7.96-.28-1.04-.76-2.03-1.44-2.89v-4.04c1.64.01 3.28.01 4.92.02z", // Simple TikTok path
      },
    ],
  },

  /** Contact information */
  contactInfo: [
    {
      type: "email",
      value: "info@topfinanzas.com",
      href: "mailto:info@topfinanzas.com",
      svgPath:
        "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    },
    {
      type: "address",
      value:
        "PANAMA, PANAMA CITY, AV. AQUILINO DE LA GUARDIA, OCEAN BUSINESS PLAZA BUILDING, FLOOR 12",
      svgPath:
        "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z|M15 11a3 3 0 11-6 0 3 3 0 016 0z",
    },
  ],

  /** Legal links */
  legalLinks: [
    {
      text: "Términos y condiciones",
      href: "/terms",
    },
    {
      text: "Política de privacidad",
      href: "/privacy-policy",
    },
    {
      text: "Cookie Policy", // Keeping English if unsure or "Política de Cookies"
      href: "/cookie-policy",
    },
  ],
};
