"use client";

import { BlogLayout } from "@/components/mdx/blog-layout";
import { FeaturedPostCard } from "@/components/ui/featured-post-card";
import { useState, useEffect } from "react";

interface PostItem {
  title: string;
  slug: string;
  description: string;
  image: string;
  date?: string;
  type?: string;
}

export default function PrestamosArchivePage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const loansContent: PostItem[] = [
    {
      title: "HSBC Personal Loan",
      slug: "hsbc-personal-loan",
      description:
        "Discover HSBC personal loans with competitive rates, flexible repayment terms, and a quick application process.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718135900-fotosprestamo1hsbc-uk.webp",
      date: "4 April 2025",
      type: "personal",
    },
    {
      title: "Barclays Personal Loan",
      slug: "barclays-personal-loan",
      description:
        "Explore Barclays personal loans with competitive rates, flexible terms, and a streamlined application process.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718136012-fotosprestamo-barclays2uk.webp",
      date: "4 April 2025",
      type: "personal",
    },
    {
      title: "Funding Circle Business Loan",
      slug: "funding-circle-personal-loan",
      description:
        "Funding Circle offers flexible business loans with quick decisions and competitive rates for small businesses.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718136824-fotosprestamo-fundingcircle1uk.webp",
      date: "4 April 2025",
      type: "sme_fintech",
    },
    {
      title: "Zopa Personal Loan",
      slug: "zopa-personal-loan",
      description:
        "Explore Zopa personal loans with personalized rates, no hidden fees, and a quick online process.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718136611-fotosprestamo-zopa1uk.webp",
      date: "4 April 2025",
      type: "neobank",
    },
    {
      title: "Lloyds Bank Personal Loan",
      slug: "lloyds-bank-personal-loan",
      description:
        "Explore Lloyds Bank personal loans with competitive rates, flexible repayment options, and reliable service.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718136057-fotosprestamo-lloyds1uk.webp",
      date: "4 April 2025",
      type: "personal",
    },
    {
      title: "NatWest Personal Loan",
      slug: "natwest-personal-loan",
      description:
        "Explore NatWest personal loans with competitive rates, flexible repayment terms, and a simple process.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718136156-fotosprestamo-nawest1uk.webp",
      date: "4 April 2025",
      type: "personal",
    },
    {
      title: "Santander UK Personal Loan",
      slug: "santander-uk-personal-loan",
      description:
        "Explore Santander UK personal loans with competitive rates, flexible repayment terms, and exclusive benefits.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718136214-fotosprestamo-santander1uk.webp",
      date: "4 April 2025",
      type: "personal",
    },
    {
      title: "TSB Personal Loan",
      slug: "tsb-personal-loan",
      description:
        "Explore TSB personal loans with competitive rates, flexible repayment options, and clear, simple banking.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718136271-fotosprestamo-tbs1uk.webp",
      date: "4 April 2025",
      type: "personal",
    },
    {
      title: "Préstamo Personal Virgin Money",
      slug: "virgin-money-personal-loan",
      description:
        "Explore los préstamos personales de Virgin Money con tasas competitivas, plazos flexibles y beneficios exclusivos.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718136330-fotosprestamo-virginmoney1uk.webp",
      date: "4 April 2025",
      type: "personal",
    },
    {
      title: "Préstamo Personal Halifax",
      slug: "halifax-personal-loan",
      description:
        "Explore los préstamos personales de Halifax con tasas competitivas, opciones de pago flexibles y servicio confiable.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718136403-fotosprestamo-halifax1uk.webp",
      date: "4 April 2025",
      type: "personal",
    },
  ];

  const parseDate = (dateString: string): number => {
    if (!dateString) return 0;
    const value = dateString.trim();
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

    const patterns = [
      /^(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})$/,
      /^([A-Za-z]+)\s+(\d{1,2}),?\s+(\d{4})$/,
      /^(\d{4})-(\d{2})-(\d{2})$/,
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

  const sortedLoans = [...loansContent].sort(
    (a, b) => parseDate(b.date || "") - parseDate(a.date || ""),
  );

  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse bg-gray-200 rounded-xl p-8 w-full max-w-4xl">
          <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2 mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-40 bg-gray-300 rounded"></div>
            <div className="h-40 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  const pageContent = (
    <div data-category="prestamos">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">
        Préstamos Personales
      </h1>
      <p className="text-lg text-gray-700 mb-8 leading-tight">
        Explora las mejores opciones de préstamos personales y financiamiento.
        Compara tasas, plazos y requisitos para encontrar la solución que mejor
        se adapte a tus necesidades.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sortedLoans.map((post: PostItem) => (
          <div
            key={post.slug}
            className="relative"
            style={{ position: "relative" }}
          >
            <FeaturedPostCard
              title={post.title}
              description={post.description}
              image={post.image}
              slug={post.slug}
              category="Préstamos Personales"
              categorySlug="/financial-solutions"
              date={post.date}
              type={post.type}
              showBadge={true}
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <BlogLayout
      metadata={{
        title: "Préstamos Personales: Guías y Comparativas | TopFinanzas MX",
        description:
          "Encuentra los mejores préstamos personales en México. Compara opciones de bancos tradicionales, neobancos y plataformas fintech para obtener el mejor financiamiento.",
      }}
    >
      {pageContent}
    </BlogLayout>
  );
}
