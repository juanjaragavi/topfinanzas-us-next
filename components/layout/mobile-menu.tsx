"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ChevronDown, ChevronRight } from "lucide-react";
import { useMobileMenu } from "@/components/providers/mobile-menu-context";
import { logos } from "@/lib/images/logos";

export function MobileMenu() {
  const { isMobileMenuOpen, closeMobileMenu } = useMobileMenu();
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  // Archive months data
  const archiveMonths = [
    "October 2025",
    "September 2025",
    "August 2025",
    "July 2025",
    "June 2025",
    "May 2025",
    "February 2025",
    "January 2025",
    "December 2024",
    "September 2024",
    "August 2024",
    "July 2024",
    "January 2024",
    "December 2023",
    "November 2023",
  ];

  return (
    <div
      className={`md:hidden fixed top-0 bottom-0 left-0 w-[300px] bg-white z-50 h-full overflow-y-auto border-r border-gray-200 transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      aria-hidden={!isMobileMenuOpen}
    >
      <div className="flex flex-col h-full">
        {/* Menu Header: Close Button & Logo */}
        <div className="flex items-center p-4 border-b border-gray-100">
          <button
            onClick={closeMobileMenu}
            className="bg-blue-600 text-white rounded-full p-1 mr-4 hover:bg-blue-700 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="w-32">
            <Link href="/" onClick={closeMobileMenu}>
              <Image
                src={logos.colorLogo.url}
                alt={logos.colorLogo.alt}
                width={logos.colorLogo.width}
                height={logos.colorLogo.height}
                className="w-full h-auto object-contain"
              />
            </Link>
          </div>
        </div>

        {/* Menu Items */}
        <div className="flex-1 py-4">
          {/* CATEGORÍAS */}
          <div>
            <button
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
              className="flex items-center justify-between w-full px-6 py-3 text-left"
            >
              <span className="font-bold text-gray-800 uppercase tracking-wide">
                CATEGORIES
              </span>
              <ChevronDown
                className={`w-5 h-5 text-gray-400 transition-transform ${isCategoriesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isCategoriesOpen && (
              <div className="bg-gray-50 px-6 py-2 space-y-2">
                {/* Categories based on reference localized for US */}
                <Link
                  href="/financial-solutions"
                  className="flex items-center text-gray-600 py-1 hover:text-primary transition-colors"
                  onClick={closeMobileMenu}
                >
                  <ChevronRight className="w-4 h-4 mr-2 text-gray-300" />
                  <span>Financial Solutions</span>
                </Link>
                <Link
                  href="/personal-finance"
                  className="flex items-center text-gray-600 py-1 hover:text-primary transition-colors"
                  onClick={closeMobileMenu}
                >
                  <ChevronRight className="w-4 h-4 mr-2 text-gray-300" />
                  <span>Personal Finance</span>
                </Link>
                <Link
                  href="/credit-cards"
                  className="flex items-center text-gray-600 py-1 hover:text-primary transition-colors"
                  onClick={closeMobileMenu}
                >
                  <ChevronRight className="w-4 h-4 mr-2 text-gray-300" />
                  <span>Cards</span>
                </Link>
                <Link
                  href="/loans"
                  className="flex items-center text-gray-600 py-1 hover:text-primary transition-colors"
                  onClick={closeMobileMenu}
                >
                  <ChevronRight className="w-4 h-4 mr-2 text-gray-300" />
                  <span>Loans</span>
                </Link>
              </div>
            )}
          </div>

          <div className="border-t border-gray-100 my-2"></div>

          {/* LOANS */}
          <Link
            href="/loans"
            className="block px-6 py-3 font-bold text-gray-800 uppercase tracking-wide hover:bg-gray-50"
            onClick={closeMobileMenu}
          >
            LOANS
          </Link>

          <div className="border-t border-gray-100 my-2"></div>

          {/* CREDIT CARDS */}
          <Link
            href="/credit-cards"
            className="block px-6 py-3 font-bold text-gray-800 uppercase tracking-wide hover:bg-gray-50"
            onClick={closeMobileMenu}
          >
            CREDIT CARDS
          </Link>

          <div className="border-t border-gray-100 my-2"></div>

          {/* Archives */}
          <div className="px-6 py-4">
            <h3 className="font-bold text-gray-700 text-lg mb-4 flex items-center">
              Archives
            </h3>
            <div className="space-y-3">
              {archiveMonths.map((month, idx) => (
                <div key={idx} className="flex items-center text-gray-600">
                  <ChevronRight className="w-3 h-3 mr-3 text-gray-300" />
                  <span className="text-base">{month}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
