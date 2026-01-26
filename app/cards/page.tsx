"use client";

import { BlogLayout } from "@/components/mdx/blog-layout"; // Assuming BlogLayout is suitable
import { FeaturedPostCard } from "@/components/ui/featured-post-card"; // Reusing card component
import { useState, useEffect } from "react"; // Keep state hooks for consistency, though filtering is static now

// Define the structure for each post item (can be imported if shared)
interface PostItem {
  title: string;
  slug: string;
  description: string;
  image: string;
  date?: string;
  type?: string; // Keep type if used by FeaturedPostCard
}

export default function TarjetasArchivePage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Complete list of credit card content (synchronized with financial-solutions/page.tsx)
  const creditCardsContent: PostItem[] = [
    // Latest Products (October 2025)
    {
      title: "RBS Purchase & Balance Transfer Card",
      slug: "rbs-purchase-balance-transfer-card",
      description:
        "The RBS Purchase & Balance Transfer card offers 0% interest on purchases for up to 20 months and 0% on balance transfers for up to 18 months. No annual fee.",
      image:
        "https://media.topfinanzas.com/images/uk/rbs-purchase-balance-transfer-card.webp",
      date: "24 October 2025",
      type: "traditional",
    },
    {
      title: "Bank of Scotland Credit Cards",
      slug: "bank-of-scotland-credit-cards",
      description:
        "Bank of Scotland offers cards for everyday spending, balance transfers, and credit building. Check your eligibility without affecting your credit score.",
      image:
        "https://media.topfinanzas.com/images/uk/bank-of-scotland-credit-cards.webp",
      date: "24 October 2025",
      type: "traditional",
    },
    {
      title: "First Direct Credit Card",
      slug: "first-direct-credit-card",
      description:
        "The First Direct 1st card offers 0% interest on purchases for 12 months, competitive rates with no annual fee, and award-winning 24/7 customer service.",
      image:
        "https://media.topfinanzas.com/images/uk/first-direct-credit-card.webp",
      date: "24 October 2025",
      type: "traditional",
    },
    {
      title: "The Co-operative Bank Credit Card",
      slug: "the-co-operative-bank-credit-card",
      description:
        "The Co-operative Members card offers 0.5% cashback at Co-op stores and 0.3% everywhere else, with no annual fee.",
      image:
        "https://media.topfinanzas.com/images/uk/the-co-operative-bank-credit-card.webp",
      date: "24 October 2025",
      type: "traditional",
    },
    {
      title: "M&S Rewards Credit Card",
      slug: "ms-rewards-credit-card",
      description:
        "The M&S Rewards card offers points on all your M&S spending and beyond, exclusive member benefits, and competitive rates.",
      image:
        "https://media.topfinanzas.com/images/uk/ms-rewards-credit-card.webp",
      date: "24 October 2025",
      type: "traditional",
    },
    {
      title: "Tesco Bank Clubcard Credit Cards",
      slug: "tesco-bank-clubcard-credit-cards",
      description:
        "Discover Tesco Bank Clubcard cards with 0% rates, low APR options, and Clubcard points on your everyday spending.",
      image:
        "https://media.topfinanzas.com/images/uk/tesco-bank-clubcard-credit-cards.webp",
      date: "24 October 2025",
      type: "traditional",
    },
    {
      title: "American Express Preferred Rewards Gold",
      slug: "american-express-preferred-rewards-gold-credit-card",
      description:
        "The American Express Gold card offers premium Membership Rewards points, comprehensive travel insurance, and exclusive lifestyle benefits.",
      image:
        "https://media.topfinanzas.com/images/uk/american-express-preferred-rewards-gold-credit-card.webp",
      date: "24 October 2025",
      type: "traditional",
    },
    {
      title: "Nationwide Building Society Credit Card",
      slug: "nationwide-building-society-credit-card",
      description:
        "The Nationwide Member card offers two 0% options: up to 24 months on balance transfers or 15 months on purchases.",
      image:
        "https://media.topfinanzas.com/images/uk/nationwide-building-society-credit-card.webp",
      date: "24 October 2025",
      type: "traditional",
    },
    {
      title: "HSBC Rewards Credit Card",
      slug: "hsbc-rewards-credit-card",
      description:
        "The HSBC Rewards card offers points on your everyday spending, 0% interest on purchases for 6 months, and a welcome bonus.",
      image:
        "https://media.topfinanzas.com/images/uk/hsbc-rewards-credit-card.webp",
      date: "24 October 2025",
      type: "traditional",
    },
    {
      title: "Ocean Credit Card",
      slug: "ocean-credit-card",
      description:
        "The Ocean card offers flexible credit limits with no annual fee. Check your eligibility quickly without affecting your credit score.",
      image: "https://media.topfinanzas.com/images/uk/ocean-credit-card.webp",
      date: "23 October 2025",
      type: "fintech",
    },
    {
      title: "Fluid Credit Card",
      slug: "fluid-credit-card",
      description:
        "The Fluid card offers 0% interest on balance transfers for 9 months, helping you save and pay off debt faster.",
      image: "https://media.topfinanzas.com/images/uk/fluid-credit-card.webp",
      date: "23 October 2025",
      type: "fintech",
    },
    {
      title: "John Lewis Partnership Card",
      slug: "john-lewis-partnership-card",
      description:
        "The John Lewis Partnership card lets you earn valuable points on your everyday purchases at John Lewis, Waitrose, and beyond.",
      image:
        "https://media.topfinanzas.com/images/uk/john-lewis-partnership-card.webp",
      date: "23 October 2025",
      type: "traditional",
    },
    {
      title: "118 118 Money Credit Card",
      slug: "118-118-money-credit-card",
      description:
        "The 118 118 Money card offers personalized limits and clear terms to help you build or improve your credit history.",
      image:
        "https://media.topfinanzas.com/images/uk/118-118-money-credit-card.webp",
      date: "23 October 2025",
      type: "fintech",
    },
    {
      title: "Vanquis Credit Card",
      slug: "vanquis-credit-card",
      description:
        "Vanquis cards offer personalized limits and award-winning features for building credit, ideal for improving your profile.",
      image: "https://media.topfinanzas.com/images/uk/vanquis-credit-card.webp",
      date: "23 October 2025",
      type: "traditional",
    },
    {
      title: "Capital One Classic Credit Card",
      slug: "capital-one-uk-credit-card",
      description:
        "The Capital One Classic card helps you improve your credit with a manageable initial limit, flexible payments, and no annual fee.",
      image:
        "https://media.topfinanzas.com/images/uk/capital-one-uk-credit-card.webp",
      date: "23 October 2025",
      type: "traditional",
    },
    {
      title: "Marbles Credit Card",
      slug: "marbles-credit-card",
      description:
        "The Marbles card helps you manage your finances with a manageable limit, quick eligibility checker, and flexible tools.",
      image: "https://media.topfinanzas.com/images/uk/marbles-credit-card.webp",
      date: "23 October 2025",
      type: "fintech",
    },
    {
      title: "Aqua Credit Card",
      slug: "aqua-credit-card",
      description:
        "The Aqua card offers personalized limits and 24/7 fraud protection to help you build credit with complete confidence.",
      image: "https://media.topfinanzas.com/images/uk/aqua-credit-card.webp",
      date: "23 October 2025",
      type: "fintech",
    },
    {
      title: "Bip Credit Card",
      slug: "bip-credit-card",
      description:
        "Discover the Bip card: a digital credit solution with no physical card, no hidden fees, and total control from your phone.",
      image: "https://media.topfinanzas.com/images/uk/bip-credit-card.webp",
      date: "23 October 2025",
      type: "fintech",
    },
    {
      title: "Barclaycard Avios Plus Card",
      slug: "barclaycard-avios-plus",
      description:
        "The Barclaycard Avios Plus card offers premium travel benefits and generous Avios points to enhance your experience.",
      image: "https://media.topfinanzas.com/images/barclaycard-avios-plus.webp",
      date: "23 October 2025",
      type: "traditional",
    },
    // Traditional Bank Cards
    {
      title: "Lloyds Bank Credit Card",
      slug: "lloyds-bank-credit-card",
      description:
        "Explore the Lloyds Bank card with competitive rates, no annual fee, and a daily cashback offers program.",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/719906900-top_prestamos-y-tarjetas-uk_v1-16.webp",
      date: "2 April 2025",
      type: "traditional",
    },
    {
      title: "NatWest Credit Card",
      slug: "natwest-credit-card",
      description:
        "Discover the NatWest card with MyRewards program, mobile integration, and flexible payment options for your spending.",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/718644866-top_prestamos-y-tarjetas-uk_v1_mesa-de-trabajo-1-copia.webp",
      date: "2 April 2025",
      type: "traditional",
    },
    {
      title: "Santander UK Credit Card",
      slug: "santander-uk-credit-card",
      description:
        "Discover the Santander UK card with All in One cashback, no foreign transaction fees, and balance transfer options.",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/718644935-top_prestamos-y-tarjetas-uk_v1-03.webp",
      date: "2 April 2025",
      type: "traditional",
    },
    {
      title: "TSB Credit Card",
      slug: "tsb-credit-card",
      description:
        "Explore the TSB card with everyday value, low fees, and full integration with TSB banking platforms.",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/718645155-top_prestamos-y-tarjetas-uk_v1-06.webp",
      date: "2 April 2025",
      type: "traditional",
    },
    {
      title: "Virgin Money Credit Card",
      slug: "virgin-money-credit-card",
      description:
        "Discover the Virgin Money card with exclusive rewards, Virgin Points, and offers across the Virgin ecosystem.",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/718645561-top_prestamos-y-tarjetas-uk_v1-08.webp",
      date: "2 April 2025",
      type: "traditional",
    },
    {
      title: "Halifax World Elite MasterCard",
      slug: "halifax-world-elite-mastercard",
      description:
        "Explore the Halifax World Elite MasterCard, offering premium travel benefits, comprehensive insurance, and exclusive rewards.",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/719906760-top_prestamos-y-tarjetas-uk_v1-14.webp",
      date: "4 April 2025",
      type: "traditional",
    },
    // Neobank Cards
    {
      title: "Monzo Credit Card",
      slug: "monzo-credit-card",
      description:
        "Discover the Monzo card with real-time spending notifications, budgeting tools, and 100% digital management.",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/719907302-top_prestamos-y-tarjetas-uk_v1-18.webp",
      date: "2 April 2025",
      type: "neobank",
    },
    {
      title: "Starling Bank Credit Card",
      slug: "starling-bank-credit-card",
      description:
        "Discover the Starling Bank card with transparent pricing, ethical banking, and advanced digital features for your money.",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/719907598-top_prestamos-y-tarjetas-uk_v1-20.webp",
      date: "2 April 2025",
      type: "neobank",
    },
    // Fintech Cards
    {
      title: "Revolut Credit Card",
      slug: "revolut-credit-card",
      description:
        "Explore the Revolut card with multi-currency capabilities, competitive rates, and total control for international lifestyles.",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/718645626-top_prestamos-y-tarjetas-uk_v1-10.webp",
      date: "2 April 2025",
      type: "fintech",
    },
    {
      title: "Curve Credit Card",
      slug: "curve-credit-card",
      description:
        "Discover the innovative Curve card that consolidates all your cards into one with smart features and rewards.",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/719907701-top_prestamos-y-tarjetas-uk_v1-22.webp",
      date: "2 April 2025",
      type: "fintech",
    },
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
  const sortedCreditCards = [...creditCardsContent].sort(
    (a, b) => parseDate(b.date || "") - parseDate(a.date || ""),
  );

  // No filtering needed, just display the sorted credit card content
  const filteredPosts = sortedCreditCards;

  // Avoid rendering until client-side code is running
  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        {/* Basic loading skeleton */}
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
    <div data-category="cards">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Credit Cards</h1>
      <p className="text-lg text-gray-700 mb-8 leading-tight">
        Explore detailed guides and reviews of the best credit cards available.
        Find the right card based on rewards, fees, and your financial needs.
      </p>

      {/* Grid of credit card posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredPosts.map((post: PostItem) => (
          <div
            key={post.slug}
            className="relative"
            style={{ position: "relative" }} // Needed for FeaturedPostCard image positioning
          >
            <FeaturedPostCard
              title={post.title}
              description={post.description}
              image={post.image}
              // Posts are located under /financial-solutions/
              slug={post.slug}
              category="Credit Cards" // Static category for this page
              categorySlug="/financial-solutions" // Base path for these posts
              date={post.date}
              type={post.type}
              showBadge={true} // Show type badge if desired
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <BlogLayout
      metadata={{
        title: "Credit Cards: Reviews and Guides | TopFinance US",
        description:
          "Compare the best credit cards. Find reviews, guides, and comparisons for rewards, cashback, travel, and low-interest cards.",
      }}
    >
      {pageContent}
    </BlogLayout>
  );
}
