"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ChevronRight, ChevronDown } from "lucide-react";
import { useMobileMenu } from "@/components/providers/mobile-menu-context";
import { logos } from "@/lib/images/logos";

export function MobileMenu() {
  const { isMobileMenuOpen, closeMobileMenu } = useMobileMenu();
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  // Archive months matching WordPress US site
  const archiveMonths = [
    "October 2025",
    "September 2025",
    "August 2025",
    "July 2025",
    "June 2025",
    "May 2025",
    "April 2025",
    "February 2025",
    "January 2025",
    "December 2024",
    "November 2024",
  ];

  // Categories matching WordPress US sidebar
  const categories = [
    { text: "Choose Your Card", href: "/choose-the-perfect-card-for-you-1" },
    { text: "Finances for Everyone", href: "/personal-finance" },
    { text: "Financial Solutions", href: "/financial-solutions" },
    { text: "Loans and Credits", href: "/financial-solutions" },
    { text: "Personal Finance", href: "/personal-finance" },
    { text: "Student Finances", href: "/personal-finance" },
  ];

  return (
    <>
      {/* Backdrop overlay — blocks touch scrolling on the page behind */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/40 z-40"
          style={{ touchAction: "none" }}
          onClick={closeMobileMenu}
          onTouchMove={(e) => e.preventDefault()}
          aria-hidden="true"
        />
      )}

      <div
        className={`md:hidden fixed top-0 bottom-0 left-0 w-[300px] bg-white z-50 h-full border-r border-gray-200 transition-transform duration-300 ease-in-out overscroll-contain ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!isMobileMenuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div className="flex flex-col h-full">
          {/* Menu Header: Close Button & Logo — fixed at top, does not scroll */}
          <div className="sticky top-0 z-10 flex items-center p-4 border-b border-gray-100 bg-white">
            <button
              onClick={closeMobileMenu}
              className="bg-blue-600 text-white rounded-full p-1.5 mr-4 hover:bg-blue-700 transition-colors flex-shrink-0"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
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

          {/* Navigation Items — scrollable content below fixed header */}
          <div className="flex-1 overflow-y-auto py-2">
            {/* CATEGORIES dropdown (accordion) */}
            <button
              onClick={() => setIsCategoriesOpen((prev) => !prev)}
              className="flex items-center justify-between w-full px-6 py-3 font-bold text-gray-800 uppercase tracking-wide hover:bg-gray-50 text-left"
              aria-expanded={isCategoriesOpen}
            >
              <span>Categories</span>
              <ChevronDown
                className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                  isCategoriesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isCategoriesOpen && (
              <div className="bg-gray-50 border-y border-gray-100">
                {categories.map((cat) => (
                  <Link
                    key={cat.text}
                    href={cat.href}
                    className="block px-10 py-2.5 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                    onClick={closeMobileMenu}
                  >
                    {cat.text}
                  </Link>
                ))}
              </div>
            )}

            <div className="border-t border-gray-100"></div>

            {/* LOANS */}
            <Link
              href="/financial-solutions"
              className="block px-6 py-3 font-bold text-gray-800 uppercase tracking-wide hover:bg-gray-50"
              onClick={closeMobileMenu}
            >
              Loans
            </Link>

            <div className="border-t border-gray-100"></div>

            {/* CREDIT CARDS */}
            <Link
              href="/financial-solutions"
              className="block px-6 py-3 font-bold text-gray-800 uppercase tracking-wide hover:bg-gray-50"
              onClick={closeMobileMenu}
            >
              Credit Cards
            </Link>

            <div className="border-t border-gray-100 my-2"></div>

            {/* Archive section */}
            <div className="px-6 py-4">
              <h3 className="font-bold text-gray-700 text-lg mb-4">Archive</h3>
              <div className="space-y-3">
                {archiveMonths.map((month, idx) => (
                  <div key={idx} className="flex items-center text-gray-600">
                    <ChevronRight className="w-3 h-3 mr-3 text-gray-400 flex-shrink-0" />
                    <span className="text-sm">{month}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-100 my-2"></div>

            {/* Categories section (bottom list — mirrors WordPress sidebar) */}
            <div className="px-6 py-4">
              <h3 className="font-bold text-gray-700 text-lg mb-4">
                Categories
              </h3>
              <div className="space-y-3">
                {categories.map((cat) => (
                  <Link
                    key={cat.text}
                    href={cat.href}
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={closeMobileMenu}
                  >
                    <ChevronRight className="w-3 h-3 mr-3 text-gray-400 flex-shrink-0" />
                    <span className="text-sm">{cat.text}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
