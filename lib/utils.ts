import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Returns the appropriate text class based on type and variant
 * @param type The type of text element (h1, h2, etc.)
 * @param variant Optional size variant
 * @returns The class name string
 */
export function getTextClass(
  type: "h1" | "h2" | "h3" | "body" | "meta" | "link" | "list",
  variant?: "default" | "large" | "small",
): string {
  const baseClass = `text-${type}`;

  if (!variant || variant === "default") {
    return baseClass;
  }

  if (variant === "large") {
    // Apply larger text variant while maintaining consistency
    return `${baseClass} text-[calc(100%+2px)]`;
  }

  if (variant === "small") {
    // Apply smaller text variant while maintaining consistency
    return `${baseClass} text-[calc(100%-1px)]`;
  }

  return baseClass;
}

/**
 * Formats a date object to DD/MM/YYYY HH:MM:SS format
 * This format matches the TopFinanzas MX Google Sheets timestamp standard
 * Prefixes with single quote to force Google Sheets text formatting
 * @param date The date to format (defaults to current date/time)
 * @returns Formatted timestamp string in DD/MM/YYYY HH:MM:SS format
 */
export function formatTimestampForSheets(date: Date = new Date()): string {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  // Prefix with single quote to force text formatting in Google Sheets
  return `'${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}
