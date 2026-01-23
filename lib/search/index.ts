export interface SearchResult {
  title: string;
  description: string;
  url: string;
  category: string;
}

// Hardcoded search index for demonstration purposes (replicating Content from page.tsx and menus)
// In a real implementation, this would be generated at build time.
const SEARCH_INDEX: SearchResult[] = [
  {
    title: "Tarjeta de Crédito Premium: Recompensas de Viaje Exclusivas",
    description:
      "La tarjeta ideal para viajeros frecuentes con beneficios premium...",
    url: "/financial-solutions/tarjeta-credito-viajes-premium",
    category: "Soluciones Financieras",
  },
  {
    title: "Préstamo Personal HSBC: Financiamiento Flexible (MX)",
    description:
      "Descubre los préstamos personales de HSBC con tasas competitivas...",
    url: "/financial-solutions/hsbc-prestamo-personal",
    category: "Soluciones Financieras",
  },
  {
    title: "Préstamo para Negocios Funding Circle",
    description: "Explora los préstamos para negocios de Funding Circle...",
    url: "/financial-solutions/prestamo-negocio-funding-circle",
    category: "Soluciones Financieras",
  },
  {
    title: "Las Mejores Tarjetas de Crédito con Recompensas",
    description: "Descubre las mejores tarjetas de crédito con recompensas...",
    url: "/personal-finance/mejores-tarjetas-recompensas",
    category: "Finanzas Personales",
  },
  {
    title: "Guía Práctica para Salir de Deudas",
    description:
      "¿Te sientes abrumado por las deudas? Obtén estrategias prácticas...",
    url: "/personal-finance/salir-de-deudas",
    category: "Finanzas Personales",
  },
  {
    title: "Mejores Tarjetas de Crédito con Meses Sin Intereses",
    description:
      "Compara las mejores tarjetas de crédito que ofrecen meses sin intereses...",
    url: "/personal-finance/tarjetas-meses-sin-intereses",
    category: "Finanzas Personales",
  },
  {
    title: "Mejores Préstamos Personales en México",
    description:
      "Guía completa de los mejores préstamos personales en México...",
    url: "/personal-finance/mejores-prestamos-personales",
    category: "Finanzas Personales",
  },
];

export function searchContent(query: string): SearchResult[] {
  if (!query) return [];
  const lowerQuery = query.toLowerCase();
  return SEARCH_INDEX.filter(
    (item) =>
      item.title.toLowerCase().includes(lowerQuery) ||
      item.description.toLowerCase().includes(lowerQuery) ||
      item.category.toLowerCase().includes(lowerQuery),
  );
}
