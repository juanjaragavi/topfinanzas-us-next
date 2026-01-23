/**
 * Generate placeholder URLs for optimized image loading
 */

import { logger } from "@/lib/logger";

/**
 * Generate a tiny placeholder image URL for fast loading
 * @param originalSrc Original image URL
 * @param width Width of the tiny placeholder
 * @param quality Quality of the tiny placeholder
 * @returns URL of the tiny placeholder
 */
export function generateTinyPlaceholder(
  originalSrc: string,
  width: number = 20,
  quality: number = 10,
): string {
  // Check if URL is valid and has all parts needed for manipulation
  try {
    const url = new URL(originalSrc);

    // If URL already has query parameters, append the width and quality
    if (url.search) {
      return `${originalSrc}&w=${width}&q=${quality}`;
    }

    // Otherwise add them as new query parameters
    return `${originalSrc}?w=${width}&q=${quality}`;
  } catch (error) {
    // If the URL is invalid, return the original
    logger.warn("Invalid URL for placeholder generation:", {
      originalSrc,
      error,
    });
    return originalSrc;
  }
}

/**
 * Generate a base64 blur placeholder SVG
 * This is a fallback method that doesn't require generating actual images
 * @param width Width of SVG
 * @param height Height of SVG
 * @param color Background color of SVG (defaults to light grey)
 * @returns Base64 encoded blur SVG
 */
export function generateBlurSvg(
  width: number = 100,
  height: number = 100,
  color: string = "#f3f4f6",
): string {
  // Create a simple SVG with a blurred rectangle
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${color}"/>
      <filter id="b" x="0" y="0" width="100%" height="100%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="4"/>
      </filter>
      <rect x="10%" y="10%" width="80%" height="80%" fill="#ffffff" filter="url(#b)"/>
    </svg>
  `;

  // Convert to base64
  const base64 = Buffer.from(svg).toString("base64");
  return `data:image/svg+xml;base64,${base64}`;
}

/**
 * Generate a CSS RGB blur data URL
 * This is the fastest way to generate a blur placeholder
 * @param rgbColor RGB color values [r,g,b]
 * @returns Data URL with RGB values
 */
export function generateColorBlurDataUrl(
  rgbColor: [number, number, number] = [243, 244, 246],
): string {
  const [r, g, b] = rgbColor;
  return `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8${Buffer.from(
    String.fromCharCode(r, g, b),
  ).toString("base64")}/APC+AAAAASUVORK5CYII=`;
}
