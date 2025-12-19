/**
 * Advertisement management system for TopFinanzas
 * This file centralizes ad content, allowing for programmatic editing without changing component structure
 */

// Define interface for advertisements
export interface Advertisement {
  id: string;
  name: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  link: string;
  format: "square" | "portrait" | "horizontal" | "skyscraper";
  active: boolean;
}

// Collection of all advertisements
export const advertisements: Advertisement[] = [
  {
    id: "ad1",
    name: "Financial Management Ad",
    image: {
      src: "https://media.topfinanzas.com/images/advertisement.webp",
      alt: "Financial management advertisement",
      width: 350,
      height: 300,
    },
    link: "/personal-finance/best-personal-loans", // Updated link
    format: "square",
    active: true,
  },
  {
    id: "ad2",
    name: "Credit Card Blog Ad",
    image: {
      src: "https://media.topfinanzas.com/images/Top-Blog-Credit-Cards.webp",
      alt: "Credit cards blog advertisement",
      width: 320,
      height: 620,
    },
    link: "/personal-finance/credit-card-types-benefits", // Updated link
    format: "portrait",
    active: true,
  },
];

/**
 * Get advertisements by format
 * @param format The advertisement format to filter by
 * @returns Array of advertisements matching the format
 */
export function getAdsByFormat(
  format: Advertisement["format"],
): Advertisement[] {
  return advertisements.filter((ad) => ad.format === format && ad.active);
}

/**
 * Get a random advertisement by format
 * This can be used to display a different ad each time a page loads
 * @param format The advertisement format to filter by
 * @returns A random advertisement matching the format, or undefined if none found
 */
export function getRandomAd(
  format: Advertisement["format"],
): Advertisement | undefined {
  const ads = getAdsByFormat(format);
  if (ads.length === 0) return undefined;

  const randomIndex = Math.floor(Math.random() * ads.length);
  return ads[randomIndex];
}

/**
 * Get an advertisement by ID
 * @param id The advertisement ID
 * @returns The advertisement with the matching ID, or undefined if not found
 */
export function getAdById(id: string): Advertisement | undefined {
  return advertisements.find((ad) => ad.id === id && ad.active);
}
