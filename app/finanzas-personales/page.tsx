"use client";

import { BlogLayout } from "@/components/mdx/blog-layout";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

// Define the structure for each post item
interface PostItem {
  title: string;
  slug: string;
  description: string;
  image: string;
  date?: string; // Optional date
  category: string; // Add category for filtering
}

// Define filter categories
const categories = {
  all: "All",
  creditCards: "Credit Cards",
  loans: "Loans",
  debt: "Debt",
  guide: "Guides",
};

export default function PersonalFinanceArchivePage() {
  // State for active category filter - with client-side initialization via useEffect
  const [activeCategory, setActiveCategory] = useState("all");

  // Force client-side state initialization to ensure React hydration
  useEffect(() => {
    // Keep the default value but force client-side initialization
    setActiveCategory("all");
  }, []);
  // Array of all posts in this category
  const allPosts: PostItem[] = [
    {
      title:
        "How to Track Your Spending for 30 Days and Know Where Your Money Goes | Top Finanzas US",
      slug: "how-to-track-your-spending-for-30-days",
      description:
        "Stop guessing about your finances. Learn a simple 30-day expense tracking method to discover where your money really goes and create lasting habits.",
      image:
        "https://media.topfinanzas.com/images/uk/how-to-track-your-spending-for-30-days.webp",
      date: "2 December 2025",
      category: "guide",
    },
    {
      title:
        "The Psychology of Spending: How to Stop Impulse Buying | Top Finanzas US",
      slug: "the-psychology-of-spending-how-to-stop-impulse-buys-and-start-mindful-saving",
      description:
        "Discover why we impulse buy and learn practical strategies to master your money mindset. Start saving mindfully today.",
      image:
        "https://media.topfinanzas.com/images/uk/the-psychology-of-spending-how-to-stop-impulse-buys-and-start-mindful-saving.webp",
      date: "25 November 2025",
      category: "guide",
    },
    {
      title:
        "Automate Your Wealth: 'Set It and Forget It' Finance System | Top Finanzas US",
      slug: "automate-your-wealth",
      description:
        "Learn how to automate your finances with our 'Set it and forget it' system. Save time, reduce stress, and build wealth effortlessly.",
      image:
        "https://media.topfinanzas.com/images/uk/automate-your-wealth.webp",
      date: "19 November 2025",
      category: "guide",
    },
    {
      title:
        "Stop Living Paycheck to Paycheck: 3 Changes to Break the Cycle | Top Finanzas US",
      slug: "stop-living-paycheck-to-paycheck",
      description:
        "Escape the cycle of living paycheck to paycheck with three practical cash flow changes. Learn how families are building breathing room without dramatic sacrifices.",
      image:
        "https://media.topfinanzas.com/images/budgetbee/stop-living-paycheck-to-paycheck.webp",
      date: "13 November 2025",
      category: "guide",
    },
    {
      title:
        "Financial Health Check: Where Does Your Money Go? | Top Finanzas US",
      slug: "financial-health-check-where-does-your-money-go",
      description:
        "Discover where your money really goes with our quick financial health check. Learn simple tracking methods that reveal spending patterns.",
      image:
        "https://media.topfinanzas.com/images/uk/financial-health-check-money-tracking.webp",
      date: "5 November 2025",
      category: "guide",
    },
    {
      title:
        "The Hidden Costs of Homeownership | Top Finanzas US",
      slug: "hidden-costs-of-homeownership",
      description:
        "Discover the unexpected expenses that surprise homeowners. From maintenance to insurance, learn how to budget for hidden costs.",
      image:
        "https://media.topfinanzas.com/images/uk/hidden-costs-homeownership.webp",
      date: "28 October 2025",
      category: "guide",
    },
    {
      title:
        "Protege tu Vida de la Inflación: 7 Movimientos de Dinero Inteligentes | Top Finanzas MX",
      slug: "inflation-proof-your-life",
      description:
        "Descubra siete estrategias prácticas para proteger su poder adquisitivo durante la alta inflación. Aprenda a eliminar fugas de gastos y construir fondos de emergencia.",
      image:
        "https://media.topfinanzas.com/images/inflation-proof-your-life-7-smart-money-moves.webp",
      date: "15 October 2025",
      category: "guide",
    },
    {
      title:
        "Los Mejores Préstamos Personales: Tu Guía Completa | Top Finanzas MX",
      slug: "best-personal-loans",
      description:
        "Guía completa sobre los mejores préstamos personales, incluyendo tasas, plazos y requisitos de solicitud de los principales prestamistas.",
      image: "https://media.topfinanzas.com/images/best-personal-loans.webp",
      date: "30 March 2025",
      category: "loans",
    },
    {
      title: "Mejores Tarjetas de Crédito con Recompensas | Top Finanzas MX",
      slug: "best-rewards-credit-cards",
      description:
        "Descubra las mejores tarjetas de crédito con recompensas que convierten sus gastos diarios en valiosos beneficios, desde cashback hasta puntos.",
      image:
        "https://media.topfinanzas.com/images/uk/Top_Finance_uk_credit_cards.webp",
      date: "3 April 2025",
      category: "creditCards",
    },
    {
      title:
        "Mejores Tarjetas con Cashback para Maximizar tus Recompensas | Top Finanzas MX",
      slug: "cashback-credit-cards",
      description:
        "¡Descubra las mejores tarjetas de crédito con cashback! Compare beneficios como recompensas ilimitadas y opciones de canje flexibles.",
      image: "https://media.topfinanzas.com/images/uk/download-8-1.webp",
      date: "3 April 2025",
      category: "creditCards",
    },
    {
      title:
        "Tarjetas de Crédito: Tipos, Beneficios y Claves para la Salud Financiera | Top Finanzas MX",
      slug: "credit-card-types-benefits",
      description:
        "Descubra todo lo que necesita saber sobre las tarjetas de crédito, desde tipos y beneficios hasta consejos para un uso responsable.",
      image:
        "https://media.topfinanzas.com/images/uk/Top_Finanzas_Top_tarjeta_de_credito-1.webp",
      date: "3 April 2025",
      category: "creditCards",
    },
    {
      title: "Guía Práctica para Salir de Deudas | Top Finanzas MX",
      slug: "getting-out-of-debt",
      description:
        "¿Te sientes abrumado por las deudas? Obtén estrategias prácticas para salir de deudas, crear un fondo de emergencia y tomar el control de tus finanzas.",
      image:
        "https://media.topfinanzas.com/images/uk/Top_Finance_how_to_get_out_of_debt.webp",
      date: "3 April 2025",
      category: "debt",
    },
    {
      title: "Mejores Tarjetas de Crédito Sin Anualidad | Top Finanzas MX",
      slug: "no-annual-fee-credit-cards",
      description:
        "Encuentra las mejores tarjetas de crédito sin anualidad con grandes recompensas y beneficios flexibles. Ideal para gestionar gastos ahorrando en comisiones.",
      image:
        "https://media.topfinanzas.com/images/uk/Top_Finance_credit_cards_without_annual_fee.webp",
      date: "3 April 2025",
      category: "creditCards",
    },
    {
      title:
        "Préstamos Personales: Estrategia para Gestionar Deudas | Top Finanzas MX",
      slug: "personal-loans-debt-strategy",
      description:
        "Descubre cómo los préstamos personales pueden ayudarte a consolidar deuda y gestionar tus finanzas de manera eficiente. Aprende a elegir el préstamo adecuado.",
      image:
        "https://media.topfinanzas.com/images/uk/Top-Finances_personal_loans.webp",
      date: "3 April 2025",
      category: "loans",
    },
    {
      title:
        "5 Consejos Esenciales para Elegir un Préstamo en Línea | Top Finanzas MX",
      slug: "tips-for-choosing-an-online-loan",
      description:
        "Navega por el mundo de los préstamos en línea con confianza usando estos consejos esenciales para encontrar las mejores tasas y plazos.",
      image:
        "https://media.topfinanzas.com/images/uk/choosing-online-loan-uk.webp",
      date: "30 March 2025",
      category: "loans",
    },
    {
      title:
        "Mejores Tarjetas con 0% de Interés Introductorio | Top Finanzas MX",
      slug: "top-credit-cards-0-intro-apr",
      description:
        "Compara las mejores tarjetas de crédito que ofrecen 0% de interés introductorio en compras y transferencias de saldo. Ahorra en intereses hoy.",
      image: "https://media.topfinanzas.com/images/uk/APR.webp",
      date: "3 April 2025",
      category: "creditCards",
    },
    {
      title:
        "Entendiendo las Tasas de Interés de Tarjetas de Crédito | Top Finanzas MX",
      slug: "understanding-credit-card-interest-rates",
      description:
        "Aprende cómo funcionan las tasas de interés de las tarjetas de crédito, incluyendo cálculos de CAT, y descubre formas de gestionar tu deuda.",
      image: "https://media.topfinanzas.com/images/uk/download-5-2.webp",
      date: "3 April 2025",
      category: "creditCards",
    },
    {
      title: "¿Qué es la Salud Financiera? Una Guía Rápida | Top Finanzas MX",
      slug: "what-is-financial-health",
      description:
        "Una guía sencilla para revisar tus signos vitales de dinero: flujo de caja, ahorros, préstamos y hábitos. Pasos para mejorar tu salud financiera.",
      image:
        "https://media.topfinanzas.com/images/uk/what-is-financial-health.webp",
      date: "13 August 2025",
      category: "guide",
    },
    {
      title:
        "Gestión de Dinero para Principiantes: ¿Dónde Empiezo? | Top Finanzas MX",
      slug: "money-management-for-beginners",
      description:
        "¿Nuevo en finanzas personales? Aprende pasos sencillos para presupuestar, ahorrar, gestionar deudas y crear hábitos de dinero duraderos.",
      image:
        "https://media.topfinanzas.com/images/uk/money-management-for-beginners.webp",
      date: "13 August 2025",
      category: "guide",
    },
    {
      title:
        "Estableciendo Metas Financieras: Guía para Principiantes | Top Finanzas MX",
      slug: "setting-financial-goals",
      description:
        "Aprende cómo establecer metas financieras SMART, alinear tu presupuesto y crear hábitos que funcionen. Guía sencilla de finanzas personales.",
      image:
        "https://media.topfinanzas.com/images/uk/setting-financial-goals.webp",
      date: "15 August 2025",
      category: "guide",
    },
    {
      title:
        "¿Side Hustle o Segundo Trabajo? Cómo Elegir el Impulsor de Ingresos Adecuado",
      slug: "side-hustle-or-second-job",
      description:
        "Con el aumento del costo de vida, muchos buscan formas de aumentar sus ingresos. Ya sea un segundo trabajo tradicional o un emprendimiento paralelo, elegir correctamente es clave.",
      image: "https://media.topfinanzas.com/images/side-hustle-second-job.webp",
      date: "27 August 2025",
      category: "guide",
    },
    {
      title:
        "Crea un Presupuesto de Finanzas Personales que Realmente Funcione | Top Finanzas MX",
      slug: "creating-a-budget-youll-actually-stick-to",
      description:
        "Una guía de presupuesto moderna que cubre la regla 50/30/20, presupuesto base cero y herramientas digitales para ayudarte a mantenerlo.",
      image: "https://media.topfinanzas.com/images/uk/modern-budget-guide.webp",
      date: "4 September 2025",
      category: "guide",
    },
    {
      title:
        "¿Qué es la 'Inflación del Estilo de Vida' y Cómo está Drenando tu Cartera en Silencio? | Top Finanzas MX",
      slug: "what-is-lifestyle-creep",
      description:
        "Descubra cómo el aumento gradual de sus gastos al ganar más dinero puede sabotear sus metas financieras y aprenda estrategias para evitarlo.",
      image:
        "https://media.topfinanzas.com/images/lifestyle-creep-finanzas-personales.webp",
      date: "9 October 2025",
      category: "guide",
    },
    {
      title:
        "Desvinculación Financiera: Una Guía Compasiva para Separar Finanzas durante una Ruptura | Top Finanzas MX",
      slug: "financial-uncoupling-separating-finances-during-breakup",
      description:
        "Guía práctica sobre cómo separar cuentas conjuntas, gestionar deudas compartidas y proteger su crédito después de una relación.",
      image:
        "https://media.topfinanzas.com/images/uk/financial-uncoupling-separating-finances-during-breakup.webp",
      date: "23 October 2025",
      category: "guide",
    },
    // Add other posts here as needed
  ];

  // Date parsing utility function
  const parseDate = (dateString: string): number => {
    if (!dateString) return 0;
    const value = dateString.trim();
    const patterns = [
      /^(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})$/,
      /^([A-Za-z]+)\s+(\d{1,2}),?\s+(\d{4})$/,
      /^(\d{4})-(\d{2})-(\d{2})$/,
    ];
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    for (const pattern of patterns) {
      const match = value.match(pattern);
      if (match) {
        let day: number, month: number, year: number;
        if (pattern === patterns[0]) {
          day = parseInt(match[1], 10);
          month = monthNames.findIndex(
            (m) => m.toLowerCase() === match[2].toLowerCase(),
          );
          year = parseInt(match[3], 10);
        } else if (pattern === patterns[1]) {
          month = monthNames.findIndex(
            (m) => m.toLowerCase() === match[1].toLowerCase(),
          );
          day = parseInt(match[2], 10);
          year = parseInt(match[3], 10);
        } else {
          year = parseInt(match[1], 10);
          month = parseInt(match[2], 10) - 1;
          day = parseInt(match[3], 10);
        }
        if (month !== -1 && !isNaN(day) && !isNaN(year)) {
          return Date.UTC(year, month, day);
        }
      }
    }
    const t = Date.parse(value);
    return isNaN(t) ? 0 : t;
  };

  // Sort posts by date (newest first)
  const sortedPosts = [...allPosts].sort(
    (a, b) => parseDate(b.date || "") - parseDate(a.date || ""),
  );

  // Filter posts based on the selected category
  const filteredPosts =
    activeCategory === "all"
      ? sortedPosts
      : sortedPosts.filter((post) => post.category === activeCategory);

  const content = (
    <div data-category="finanzas-personales">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">
        Guías de Finanzas Personales
      </h1>
      <p className="text-lg text-gray-700 mb-8 leading-tight">
        Explora nuestras guías sobre tarjetas de crédito, préstamos, gestión de
        deudas y otros temas de finanzas personales para ayudarte a tomar
        decisiones informadas.
      </p>

      {/* Category filter buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        {Object.entries(categories).map(([key, value]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
              activeCategory === key
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {value}
          </button>
        ))}
      </div>

      {/* Grid of filtered posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col relative"
            >
              <div
                className="relative h-48 w-full"
                style={{ position: "relative" }}
              >
                <Image
                  src={post.image}
                  alt={post.title.split("|")[0].trim()} // Cleaner alt text
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Basic responsive sizes
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://media.topfinanzas.com/images/placeholder-image.webp";
                  }} // Fallback image
                  priority={false}
                  fetchPriority="high"
                  quality={85}
                  loading="eager"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                {post.date && (
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                )}
                <Link
                  href={`/finanzas-personales/${post.slug}`}
                  className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors mb-2"
                >
                  {post.title.split("|")[0].trim()} {/* Show cleaner title */}
                </Link>
                <p className="text-sm text-gray-600 mb-4 flex-grow">
                  {post.description}
                </p>
                <div className="mt-auto">
                  <Link
                    href={`/finanzas-personales/${post.slug}`}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                  >
                    Leer más →
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-left py-12">
            <p className="text-gray-500">
              No se encontraron artículos en esta categoría.
            </p>
          </div>
        )}
      </div>
    </div>
  );

  // Metadata for the archive page itself
  const pageMetadata = {
    title: "Guías de Finanzas Personales | TopFinanzas MX",
    description:
      "Explora guías sobre tarjetas de crédito, préstamos, gestión de deudas y otros temas de finanzas personales en México.",
  };

  return <BlogLayout metadata={pageMetadata}>{content}</BlogLayout>;
}
