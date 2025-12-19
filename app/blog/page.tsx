"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { FeaturedPostCard } from "@/components/ui/featured-post-card";
import { motion, AnimatePresence } from "framer-motion";
import { BlogLayout } from "@/components/mdx/blog-layout"; // Assuming this layout is suitable
import { Button } from "@/components/ui/button"; // For pagination

// Define the structure for each post item, adding category
interface PostItem {
  title: string;
  slug: string;
  description: string;
  image: string;
  category: "Finanzas Personales" | "Soluciones Financieras";
  categoryPath: string;
  date?: string; // Optional date
}

// Helper function to clean titles
const cleanTitle = (title: string): string => {
  return title.split("|")[0].split(":")[0].split(" - ")[0].trim();
};

export default function BlogArchivePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const postsPerPage = 9; // Display 9 posts per page (3x3 grid)

  // Categories for filtering
  const categories = {
    all: "Todos los artículos",
    personalFinance: "Finanzas Personales",
    financialSolutions: "Soluciones Financieras",
    creditCards: "Tarjetas",
    loans: "Préstamos",
  };

  // Combine posts from both categories
  const allPosts: PostItem[] = [
    // Personal Finance - Latest Articles
    {
      title:
        "Cómo Rasterar tus Gastos por 30 Días y Saber a Dónde Va tu Dinero | Top Finanzas MX",
      slug: "how-to-track-your-spending-for-30-days",
      description:
        "Deja de adivinar sobre tus finanzas. Aprende un método sencillo de seguimiento de gastos de 30 días para descubrir a dónde va realmente tu dinero y crear hábitos duraderos.",
      image:
        "https://media.topfinanzas.com/images/uk/how-to-track-your-spending-for-30-days.webp",
      category: "Finanzas Personales",
      categoryPath: "/personal-finance",
      date: "2 December 2025",
    },
    {
      title:
        "La Psicología del Gasto: Cómo Detener las Compras Impulsivas | Top Finanzas MX",
      slug: "the-psychology-of-spending-how-to-stop-impulse-buys-and-start-mindful-saving",
      description:
        "Descubra por qué compramos por impulso y aprenda estrategias prácticas para dominar su mentalidad de dinero. Empiece a ahorrar de forma consciente hoy mismo.",
      image:
        "https://media.topfinanzas.com/images/uk/the-psychology-of-spending-how-to-stop-impulse-buys-and-start-mindful-saving.webp",
      category: "Finanzas Personales",
      categoryPath: "/personal-finance",
      date: "25 November 2025",
    },
    {
      title:
        'Automatiza tu Riqueza: Sistema de Finanzas "Configúralo y Olvídalo" | Top Finanzas MX',
      slug: "automate-your-wealth",
      description:
        'Aprenda cómo automatizar sus finanzas con nuestro sistema "Configúralo y olvídalo". Ahorre tiempo, reduzca el estrés y genere riqueza sin esfuerzo con consejos prácticos.',
      image:
        "https://media.topfinanzas.com/images/uk/automate-your-wealth.webp",
      category: "Finanzas Personales",
      categoryPath: "/personal-finance",
      date: "19 November 2025",
    },
    {
      title:
        "Deja de Vivir de Quincena en Quincena: 3 Cambios para Romper el Ciclo | Top Finanzas MX",
      slug: "stop-living-paycheck-to-paycheck",
      description:
        "Escapa del ciclo de vivir al día con tres cambios prácticos en el flujo de caja. Aprende cómo las familias están construyendo un respiro sin sacrificios dramáticos.",
      image:
        "https://media.topfinanzas.com/images/budgetbee/stop-living-paycheck-to-paycheck.webp",
      category: "Finanzas Personales",
      categoryPath: "/personal-finance",
      date: "13 November 2025",
    },
    {
      title:
        "Chequeo de Salud Financiera: ¿A Dónde se Va tu Dinero? | Top Finanzas MX",
      slug: "financial-health-check-where-does-your-money-go",
      description:
        "Descubra a dónde va realmente su dinero con nuestro rápido chequeo de salud financiera. Aprenda métodos sencillos de seguimiento que revelan patrones de gasto.",
      image:
        "https://media.topfinanzas.com/images/uk/financial-health-check-money-tracking.webp",
      category: "Finanzas Personales",
      categoryPath: "/personal-finance",
      date: "5 November 2025",
    },
    {
      title:
        "Los Costos Ocultos de Ser Propietario de una Vivienda que Nadie te Cuenta | Top Finanzas MX",
      slug: "hidden-costs-of-homeownership",
      description:
        "Descubra los gastos inesperados que sorprenden a los propietarios de viviendas. Desde el mantenimiento hasta los seguros, aprenda a presupuestar los costos ocultos.",
      image:
        "https://media.topfinanzas.com/images/uk/hidden-costs-homeownership.webp",
      category: "Finanzas Personales",
      categoryPath: "/personal-finance",
      date: "28 October 2025",
    },
    // Financial Solutions - Credit Cards
    {
      title:
        "Tarjeta RBS Purchase & Balance Transfer: Ahorra en Intereses con Ofertas al 0% | Top Finanzas MX",
      slug: "rbs-purchase-balance-transfer-card",
      description:
        "La tarjeta RBS Purchase & Balance Transfer ofrece 0% de interés en compras hasta por 20 meses y 0% en transferencias de saldo por hasta 18 meses. Sin anualidad.",
      image:
        "https://media.topfinanzas.com/images/uk/rbs-purchase-balance-transfer-card.webp",
      category: "Soluciones Financieras",
      categoryPath: "/financial-solutions",
      date: "24 October 2025",
    },
    {
      title:
        "Tarjetas de Crédito Bank of Scotland: Opciones Flexibles para cada Necesidad | Top Finanzas MX",
      slug: "bank-of-scotland-credit-cards",
      description:
        "Descubre las tarjetas de crédito de Bank of Scotland con opciones para gastos diarios, transferencias de saldo, compras grandes y construcción de crédito.",
      image:
        "https://media.topfinanzas.com/images/uk/bank-of-scotland-credit-cards.webp",
      category: "Soluciones Financieras",
      categoryPath: "/financial-solutions",
      date: "24 October 2025",
    },
    {
      title:
        "Tarjeta de Crédito First Direct: Banca Sencilla con Tasas Competitivas | Top Finanzas MX",
      slug: "first-direct-credit-card",
      description:
        "Descubre la tarjeta First Direct 1st con 0% de interés en compras por 12 meses, tasas competitivas, sin comisión anual y servicio al cliente 24/7.",
      image:
        "https://media.topfinanzas.com/images/uk/first-direct-credit-card.webp",
      category: "Soluciones Financieras",
      categoryPath: "/financial-solutions",
      date: "24 October 2025",
    },
    {
      title:
        "Tarjeta de Crédito The Co-operative Bank: Banca Ética con Recompensas de Cashback | Top Finanzas MX",
      slug: "the-co-operative-bank-credit-card",
      description:
        "Descubre la tarjeta Members de The Co-operative que ofrece 0.5% de cashback en tiendas Co-op y 0.3% en todos los demás lugares, sin anualidad.",
      image:
        "https://media.topfinanzas.com/images/uk/the-co-operative-bank-credit-card.webp",
      category: "Soluciones Financieras",
      categoryPath: "/financial-solutions",
      date: "24 October 2025",
    },
    {
      title:
        "Tarjeta de Crédito M&S Rewards: Gana Puntos en cada Compra | Top Finanzas MX",
      slug: "ms-rewards-credit-card",
      description:
        "Descubre la tarjeta M&S Rewards que ofrece puntos de recompensa en todos tus gastos en M&S y más allá, con beneficios exclusivos para miembros.",
      image:
        "https://media.topfinanzas.com/images/uk/ms-rewards-credit-card.webp",
      category: "Soluciones Financieras",
      categoryPath: "/financial-solutions",
      date: "24 October 2025",
    },
    {
      title:
        "Tarjetas de Crédito Tesco Bank Clubcard: Gana Puntos en cada Compra | Top Finanzas MX",
      slug: "tesco-bank-clubcard-credit-cards",
      description:
        "Descubre las tarjetas Tesco Bank Clubcard con tasas de introducción al 0%, opciones de CAT bajo y puntos Clubcard en tus gastos diarios.",
      image:
        "https://media.topfinanzas.com/images/uk/tesco-bank-clubcard-credit-cards.webp",
      category: "Soluciones Financieras",
      categoryPath: "/financial-solutions",
      date: "24 October 2025",
    },
    {
      title:
        "American Express Preferred Rewards Gold: Beneficios Exclusivos de Viaje y Estilo de Vida | Top Finanzas MX",
      slug: "american-express-preferred-rewards-gold-credit-card",
      description:
        "La tarjeta American Express Gold ofrece puntos Membership Rewards premium, seguro de viaje integral y beneficios exclusivos de estilo de vida.",
      image:
        "https://media.topfinanzas.com/images/uk/american-express-preferred-rewards-gold-credit-card.webp",
      category: "Soluciones Financieras",
      categoryPath: "/financial-solutions",
      date: "24 October 2025",
    },
    {
      title:
        "Tarjeta de Crédito Nationwide Building Society: Beneficios para Miembros y Ofertas al 0% | Top Finanzas MX",
      slug: "nationwide-building-society-credit-card",
      description:
        "La tarjeta Member de Nationwide ofrece dos opciones iniciales al 0%: hasta 24 meses en transferencias de saldo o 15 meses en compras.",
      image:
        "https://media.topfinanzas.com/images/uk/nationwide-building-society-credit-card.webp",
      category: "Soluciones Financieras",
      categoryPath: "/financial-solutions",
      date: "24 October 2025",
    },
    {
      title:
        "Tarjeta de Crédito HSBC Rewards: Gana Puntos en cada Compra | Top Finanzas MX",
      slug: "hsbc-rewards-credit-card",
      description:
        "La tarjeta HSBC Rewards ofrece puntos en tus gastos diarios, 0% de interés en compras por 6 meses y un bono de bienvenida de £25.",
      image:
        "https://media.topfinanzas.com/images/uk/hsbc-rewards-credit-card.webp",
      category: "Soluciones Financieras",
      categoryPath: "/financial-solutions",
      date: "24 October 2025",
    },
    {
      title:
        "Tarjeta de Crédito Ocean: Verifica tu Elegibilidad en 60 Segundos | Top Finanzas MX",
      slug: "ocean-credit-card",
      description:
        "La tarjeta Ocean ofrece límites de crédito desde £200 hasta £8,000 sin anualidad. Verifica tu elegibilidad con QuickCheck sin afectar tu historial.",
      image: "https://media.topfinanzas.com/images/uk/ocean-credit-card.webp",
      category: "Soluciones Financieras",
      categoryPath: "/financial-solutions",
      date: "23 October 2025",
    },
    {
      title:
        "Tarjeta de Crédito Fluid: Reduce tus Costos con Transferencias de Saldo | Top Finanzas MX",
      slug: "fluid-credit-card",
      description:
        "La tarjeta Fluid ofrece 0% de interés en transferencias de saldo por 9 meses, ayudándote a ahorrar y liquidar tus deudas más rápido.",
      image: "https://media.topfinanzas.com/images/uk/fluid-credit-card.webp",
      category: "Soluciones Financieras",
      categoryPath: "/financial-solutions",
      date: "23 October 2025",
    },
    {
      title:
        "Tarjeta John Lewis Partnership: Gana Recompensas en tus Compras Diarias | Top Finanzas MX",
      slug: "john-lewis-partnership-card",
      description:
        "La tarjeta John Lewis Partnership te permite ganar valiosos puntos en tus compras diarias en John Lewis, Waitrose y más allá.",
      image:
        "https://media.topfinanzas.com/images/uk/john-lewis-partnership-card.webp",
      category: "Soluciones Financieras",
      categoryPath: "/financial-solutions",
      date: "23 October 2025",
    },
    {
      title:
        "Tarjeta de Crédito 118 118 Money: Construye tu Crédito con Confianza | Top Finanzas MX",
      slug: "118-118-money-credit-card",
      description:
        "La tarjeta 118 118 Money ofrece límites de crédito personalizados garantizados y términos transparentes para ayudarte a mejorar tu historial.",
      image:
        "https://media.topfinanzas.com/images/uk/118-118-money-credit-card.webp",
      category: "Soluciones Financieras",
      categoryPath: "/financial-solutions",
      date: "23 October 2025",
    },
    {
      title:
        "Tarjeta de Crédito Vanquis: Soluciones Galardonadas para Construir Crédito | Top Finanzas MX",
      slug: "vanquis-credit-card",
      description:
        "Descubre las tarjetas Vanquis con límites personalizados y funciones galardonadas para construir crédito, además de transferencias de saldo al 0%.",
      image: "https://media.topfinanzas.com/images/uk/vanquis-credit-card.webp",
      category: "Soluciones Financieras",
      categoryPath: "/financial-solutions",
      date: "23 October 2025",
    },
    {
      title:
        "Tarjeta Capital One UK Classic: Construye tu Historial Crediticio | Top Finanzas MX",
      slug: "capital-one-uk-credit-card",
      description:
        "La tarjeta Capital One Classic te ayuda a mejorar tu crédito con un límite inicial de £200-£1,500, pagos flexibles y sin anualidad.",
      image:
        "https://media.topfinanzas.com/images/uk/capital-one-uk-credit-card.webp",
      category: "Soluciones Financieras",
      categoryPath: "/financial-solutions",
      date: "23 October 2025",
    },
    {
      title:
        "Tarjeta de Crédito Aqua: Mejora tu Crédito con Funciones Inteligentes | Top Finanzas MX",
      slug: "aqua-credit-card",
      description:
        "La tarjeta Aqua ofrece límites personalizados, herramientas de apoyo experto y protección contra fraude 24/7 para construir crédito con seguridad.",
      image: "https://media.topfinanzas.com/images/uk/aqua-credit-card.webp",
      category: "Soluciones Financieras",
      categoryPath: "/financial-solutions",
      date: "23 October 2025",
    },
    {
      title:
        "Tarjeta de Crédito Bip: Crédito Digital bajo tu Control | Top Finanzas MX",
      slug: "bip-credit-card",
      description:
        "Descubre Bip: una solución de crédito sin tarjeta física, sin comisiones ocultas y con actualizaciones de saldo al instante.",
      image: "https://media.topfinanzas.com/images/uk/bip-credit-card.webp",
      category: "Soluciones Financieras",
      categoryPath: "/financial-solutions",
      date: "23 October 2025",
    },
    {
      title:
        "Tarjeta de Crédito Yonder: Recompensas Épicas sin Comisiones en el Extranjero | Top Finanzas MX",
      slug: "yonder-credit-card",
      description:
        "La tarjeta gratuita Yonder otorga 1 punto por cada £1 gastada sin comisiones en el extranjero, además de ofertas de bienvenida exclusivas.",
      image:
        "https://cdn.prod.website-files.com/6209512878b45f39119ebfb5/6839943447d06a3292522ecd_head-p-800.webp",
      category: "Soluciones Financieras",
      categoryPath: "/financial-solutions",
      date: "23 October 2025",
    },
    {
      title:
        "Tarjeta de Crédito Zopa: Gestión de Tarjeta Galardonada | Top Finanzas MX",
      slug: "zopa-credit-card",
      description:
        "Descubre la tarjeta Zopa con gestión sencilla desde la app, función Credit Cushion, sin comisiones en el extranjero y servicio galardonado.",
      image: "https://media.topfinanzas.com/images/uk/zopa-credit-card.webp",
      category: "Soluciones Financieras",
      categoryPath: "/financial-solutions",
      date: "23 October 2025",
    },
    {
      title:
        "Tarjeta de Crédito Marbles: Mantén el Control de tus Finanzas | Top Finanzas MX",
      slug: "marbles-credit-card",
      description:
        "La tarjeta Marbles te ayuda a gestionar tus finanzas con un límite manejable, verificador de elegibilidad rápido y sin anualidad.",
      image: "https://media.topfinanzas.com/images/uk/marbles-credit-card.webp",
      category: "Soluciones Financieras",
      categoryPath: "/financial-solutions",
      date: "23 October 2025",
    },
    // Personal Finance Posts
    {
      title:
        "Protege tu Vida de la Inflación: 7 Movimientos Inteligentes cuando los Precios suben | Top Finanzas MX",
      slug: "inflation-proof-your-life",
      description:
        "Descubra siete estrategias prácticas para proteger su poder adquisitivo durante la alta inflación. Aprenda a eliminar fugas de gastos y construir fondos de emergencia.",
      image:
        "https://media.topfinanzas.com/images/inflation-proof-your-life-7-smart-money-moves.webp",
      category: "Finanzas Personales",
      categoryPath: "/personal-finance",
      date: "15 October 2025",
    },
    {
      title:
        "Los Mejores Préstamos Personales: Tu Guía Completa | Top Finanzas MX",
      slug: "best-personal-loans",
      description: "Guía completa sobre los mejores préstamos personales...",
      image: "https://media.topfinanzas.com/images/best-personal-loans.webp",
      category: "Finanzas Personales",
      categoryPath: "/personal-finance",
      date: "30 March 2025",
    },
    {
      title:
        "Mejores Tarjetas de Crédito con Recompensas para Maximizar tus Gastos | Top Finanzas MX",
      slug: "best-rewards-credit-cards",
      description:
        "Descubra las mejores tarjetas de crédito con recompensas...",
      image:
        "https://media.topfinanzas.com/images/uk/Top_Finance_uk_credit_cards.webp", // Placeholder
      category: "Finanzas Personales",
      categoryPath: "/personal-finance",
      date: "3 April 2025",
    },
    {
      title:
        "Mejores Tarjetas de Crédito con Cashback para Maximizar tus Recompensas | Top Finanzas MX",
      slug: "cashback-credit-cards",
      description: "¡Descubra las mejores tarjetas de crédito con cashback!...",
      image: "https://media.topfinanzas.com/images/uk/download-8-1.webp", // Placeholder
      category: "Finanzas Personales",
      categoryPath: "/personal-finance",
      date: "3 April 2025",
    },
    {
      title:
        "Tarjetas de Crédito: Tipos, Beneficios y Claves para la Salud Financiera | Top Finanzas MX",
      slug: "credit-card-types-benefits",
      description:
        "Descubra todo lo que necesita saber sobre las tarjetas de crédito...",
      image:
        "https://media.topfinanzas.com/images/uk/Top_Finanzas_Top_tarjeta_de_credito-1.webp", // Placeholder
      category: "Finanzas Personales",
      categoryPath: "/personal-finance",
      date: "3 April 2025",
    },
    {
      title: "Guía Práctica para Salir de Deudas | Top Finanzas MX",
      slug: "getting-out-of-debt",
      description:
        "¿Te sientes abrumado por las deudas? Obtén estrategias prácticas...",
      image:
        "https://media.topfinanzas.com/images/uk/Top_Finance_how_to_get_out_of_debt.webp",
      category: "Finanzas Personales",
      categoryPath: "/personal-finance",
      date: "3 April 2025",
    },
    {
      title: "Mejores Tarjetas de Crédito sin Comisión Anual | Top Finanzas MX",
      slug: "no-annual-fee-credit-cards",
      description: "Encuentra las mejores tarjetas de crédito sin anualidad...",
      image:
        "https://media.topfinanzas.com/images/uk/Top_Finance_credit_cards_without_annual_fee.webp", // Placeholder
      category: "Finanzas Personales",
      categoryPath: "/personal-finance",
      date: "3 April 2025",
    },
    {
      title:
        "Préstamos Personales: Una Estrategia para Gestionar Deudas | Top Finanzas MX",
      slug: "personal-loans-debt-strategy",
      description:
        "Descubra cómo los préstamos personales pueden ayudarle a consolidar deudas...",
      image:
        "https://media.topfinanzas.com/images/uk/Top-Finances_personal_loans.webp", // Placeholder
      category: "Finanzas Personales",
      categoryPath: "/personal-finance",
      date: "3 April 2025",
    },
    {
      title:
        "5 Consejos Esenciales para Elegir un Préstamo en Línea: Guía Rápida | Top Finanzas MX",
      slug: "tips-for-choosing-an-online-loan",
      description:
        "Navega por el mundo de los préstamos en línea con confianza...",
      image:
        "https://media.topfinanzas.com/images/uk/choosing-online-loan-uk.webp",
      category: "Finanzas Personales",
      categoryPath: "/personal-finance",
      date: "30 March 2025",
    },
    {
      title:
        "Mejores Tarjetas de Crédito con Ofertas de 0% de Introducción en el CAT | Top Finanzas MX",
      slug: "top-credit-cards-0-intro-apr",
      description:
        "Compara las mejores tarjetas de crédito que ofrecen tasas del 0%...",
      image: "https://media.topfinanzas.com/images/uk/APR.webp", // Placeholder
      category: "Finanzas Personales",
      categoryPath: "/personal-finance",
      date: "3 April 2025",
    },
    {
      title:
        "Entendiendo las Tasas de Interés de las Tarjetas de Crédito: Guía del Consumidor | Top Finanzas MX",
      slug: "understanding-credit-card-interest-rates",
      description:
        "Aprenda cómo funcionan las tasas de interés de las tarjetas...",
      image: "https://media.topfinanzas.com/images/uk/download-5-2.webp", // Placeholder
      category: "Finanzas Personales",
      categoryPath: "/personal-finance",
      date: "3 April 2025",
    },
    {
      title:
        "¿Side Hustle o Segundo Trabajo? Cómo Elegir el Impulsor de Ingresos Adecuado",
      slug: "side-hustle-or-second-job",
      description:
        "Con el aumento del costo de vida, muchos buscan formas de aumentar sus ingresos. Ya sea un segundo trabajo tradicional o un emprendimiento paralelo, elegir correctamente es clave.",
      image: "https://media.topfinanzas.com/images/side-hustle-second-job.webp",
      category: "Finanzas Personales",
      categoryPath: "/personal-finance",
      date: "27 August 2025",
    },
    {
      title:
        "Más allá de las Hojas de Cálculo: Crea un Presupuesto que Realmente Sigas | Top Finanzas MX",
      slug: "creating-a-budget-youll-actually-stick-to",
      description:
        "Una guía de presupuesto moderna que cubre la regla 50/30/20, presupuesto base cero y herramientas digitales.",
      image: "https://media.topfinanzas.com/images/uk/modern-budget-guide.webp",
      category: "Finanzas Personales",
      categoryPath: "/personal-finance",
      date: "4 September 2025",
    },
    {
      title:
        "Cómo Pedir un Aumento con Confianza (con Guiones y Guía de Preparación)",
      slug: "how-to-ask-for-a-raise",
      description:
        "Aprenda exactamente qué decir al pedir un aumento. Esta guía incluye pasos de preparación, guiones de conversación y consejos de investigación salarial.",
      image:
        "https://media.topfinanzas.com/images/uk/how-to-ask-for-a-raise.webp",
      category: "Finanzas Personales",
      categoryPath: "/personal-finance",
      date: "3 October 2025",
    },
    {
      title:
        "¿Qué es la 'Inflación del Estilo de Vida' y Cómo está Drenando tu Cartera en Silencio?",
      slug: "what-is-lifestyle-creep",
      description:
        "Descubra cómo el aumento gradual de sus gastos al ganar más dinero puede sabotear sus metas financieras y aprenda estrategias para evitarlo.",
      image:
        "https://media.topfinanzas.com/images/lifestyle-creep-personal-finance.webp",
      category: "Finanzas Personales",
      categoryPath: "/personal-finance",
      date: "9 October 2025",
    },
    {
      title:
        "Desvinculación Financiera: Una Guía Compasiva para Separar Finanzas durante una Ruptura",
      slug: "financial-uncoupling-separating-finances-during-breakup",
      description:
        "Guía práctica sobre cómo separar cuentas conjuntas, gestionar deudas compartidas y proteger su crédito después de una relación.",
      image:
        "https://media.topfinanzas.com/images/uk/financial-uncoupling-separating-finances-during-breakup.webp",
      category: "Finanzas Personales",
      categoryPath: "/personal-finance",
      date: "23 October 2025",
    },
    // Financial Solutions Posts (Add relevant ones)
    // Example: Add a few key ones, more can be added later
    {
      title: "Tarjeta Barclaycard Avios Plus: Recompensas de Viaje Premium",
      slug: "barclaycard-avios-plus",
      description:
        "La tarjeta Barclaycard Avios Plus ofrece beneficios de viaje premium...",
      image: "https://media.topfinanzas.com/images/barclaycard-avios-plus.webp",
      category: "Soluciones Financieras",
      categoryPath: "/financial-solutions",
      date: "4 April 2025", // Example date
    },
    {
      title:
        "Préstamo Personal HSBC: Financiamiento Flexible de un Líder Bancario Global",
      slug: "hsbc-personal-loan",
      description:
        "Descubre los préstamos personales de HSBC con tasas competitivas...",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718135900-fotosprestamo1hsbc-uk.webp",
      category: "Soluciones Financieras",
      categoryPath: "/financial-solutions",
      date: "4 April 2025",
    },
    {
      title: "Tarjeta de Crédito Curve",
      slug: "curve-credit-card",
      description:
        "Conoce la innovadora tarjeta Curve que consolida todas tus tarjetas actuales...",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/719907701-top_prestamos-y-tarjetas-uk_v1-22.webp",
      category: "Soluciones Financieras",
      categoryPath: "/financial-solutions",
      date: "2 April 2025",
    },
    {
      title: "Préstamo para Negocios Funding Circle",
      slug: "funding-circle-personal-loan",
      description:
        "Explora los préstamos para negocios de Funding Circle que ofrecen financiamiento rápido...",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718136824-fotosprestamo-fundingcircle1uk.webp",
      category: "Soluciones Financieras",
      categoryPath: "/financial-solutions",
      date: "4 April 2025",
    },
    // ... Add more posts from financial-solutions as needed
  ];

  // Sort posts by date (newest first). Supports ISO strings and "DD Month YYYY".
  const MONTHS: Record<string, number> = {
    january: 0,
    february: 1,
    march: 2,
    april: 3,
    may: 4,
    june: 5,
    july: 6,
    august: 7,
    september: 8,
    october: 9,
    november: 10,
    december: 11,
  };

  const parseDate = (value?: string): number => {
    if (!value) return 0;
    // ISO quick path
    if (/^\d{4}-\d{2}-\d{2}/.test(value) || value.includes("T")) {
      const t = Date.parse(value);
      return isNaN(t) ? 0 : t;
    }
    // "DD Month YYYY" (e.g., "3 April 2025")
    const m = value.trim().match(/^(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})$/);
    if (m) {
      const day = parseInt(m[1], 10);
      const monthName = m[2].toLowerCase();
      const year = parseInt(m[3], 10);
      const month = MONTHS[monthName];
      if (month != null) {
        return Date.UTC(year, month, day);
      }
    }
    const t = Date.parse(value);
    return isNaN(t) ? 0 : t;
  };

  const allPostsSorted: PostItem[] = [...allPosts].sort(
    (a, b) => parseDate(b.date) - parseDate(a.date),
  );

  // Filter posts based on active category
  const filterPosts = useCallback(() => {
    let filteredPosts = [...allPostsSorted];

    if (activeCategory === "personalFinance") {
      filteredPosts = allPostsSorted.filter(
        (post) => post.category === "Finanzas Personales",
      );
    } else if (activeCategory === "financialSolutions") {
      filteredPosts = allPostsSorted.filter(
        (post) => post.category === "Soluciones Financieras",
      );
    } else if (activeCategory === "creditCards") {
      filteredPosts = allPostsSorted.filter(
        (post) =>
          post.title.toLowerCase().includes("credit card") ||
          post.slug.toLowerCase().includes("credit-card") ||
          post.description.toLowerCase().includes("credit card"),
      );
    } else if (activeCategory === "loans") {
      filteredPosts = allPostsSorted.filter(
        (post) =>
          post.title.toLowerCase().includes("loan") ||
          post.slug.toLowerCase().includes("loan") ||
          post.description.toLowerCase().includes("loan"),
      );
    }

    return filteredPosts;
  }, [activeCategory, allPostsSorted]);

  // Get filtered posts
  const filteredPosts = filterPosts();

  // Reset to page 1 when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const content = (
    <div>
      <h1 className="text-4xl font-bold mb-6 text-gray-800">
        Blog de TopFinanzas MX
      </h1>
      <p className="text-lg text-gray-700 mb-8 leading-tight">
        Tu fuente de información sobre finanzas personales y soluciones
        financieras en México.
      </p>

      {/* Category Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Link
          href="/personal-finance"
          className="block p-6 bg-blue-50 rounded-xl hover:shadow-md transition-shadow"
        >
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">
            Guías de Finanzas Personales
          </h2>
          <p className="text-blue-700">
            Explora consejos sobre presupuesto, ahorro, gestión de deudas,
            tarjetas de crédito y más.
          </p>
        </Link>
        <Link
          href="/financial-solutions"
          className="block p-6 bg-green-50 rounded-xl hover:shadow-md transition-shadow"
        >
          <h2 className="text-2xl font-semibold text-green-800 mb-2">
            Soluciones Financieras
          </h2>
          <p className="text-green-700">
            Descubre reseñas detalladas y comparaciones de tarjetas de crédito y
            préstamos disponibles en México.
          </p>
        </Link>
      </div>

      <h2 className="text-3xl font-bold mb-4">
        {activeCategory
          ? categories[activeCategory as keyof typeof categories]
          : "Todos los artículos"}
      </h2>

      {/* Category filter buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        {Object.entries(categories).map(([key, value]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key === "all" ? null : key)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
              (key === "all" && !activeCategory) || activeCategory === key
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            data-category={key}
          >
            {value}
          </button>
        ))}
      </div>

      {/* Grid of posts with animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory || "all"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative"
        >
          {currentPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              className="relative"
              style={{ position: "relative" }}
              data-category={post.category.toLowerCase().replace(" ", "-")}
            >
              <FeaturedPostCard
                title={cleanTitle(post.title)}
                description={post.description}
                image={post.image}
                slug={post.slug}
                category={post.category}
                categorySlug={post.categoryPath}
                date={post.date}
                priority={index < 2}
                showBadge={true}
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-4 mt-12">
          <Button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            variant="secondary" // Changed from outline
          >
            Anterior
          </Button>
          <span className="text-sm text-gray-600">
            Página {currentPage} de {totalPages}
          </span>
          <Button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            variant="secondary" // Changed from outline
          >
            Siguiente
          </Button>
        </div>
      )}
    </div>
  );

  // The BlogLayout component might handle this automatically if set up,
  // otherwise, you might pass the imported metadata object.
  // For simplicity, assuming BlogLayout handles it or metadata is implicitly used.
  return (
    <BlogLayout
      metadata={{
        title:
          "Blog: Finanzas Personales y Soluciones Financieras | TopFinanzas MX",
        description:
          "Tu fuente de información confiable sobre finanzas personales, tarjetas de crédito y préstamos en México. Aprende a gestionar tu dinero con nuestros expertos.",
      }}
    >
      {content}
    </BlogLayout>
  );
}
