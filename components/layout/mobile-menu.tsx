"use client";

import Link from "next/link";
import Image from "next/image";
import { X, ChevronRight } from "lucide-react";
import { useMobileMenu } from "@/components/providers/mobile-menu-context";
import { logos } from "@/lib/images/logos";

export function MobileMenu() {
  const { isMobileMenuOpen, closeMobileMenu } = useMobileMenu();

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
          {/* FINANCIAL SOLUTIONS */}
          <Link
            href="/financial-solutions"
            className="block px-6 py-3 font-bold text-gray-800 uppercase tracking-wide hover:bg-gray-50"
            onClick={closeMobileMenu}
          >
            FINANCIAL SOLUTIONS
          </Link>

          <div className="border-t border-gray-100 my-2"></div>

          {/* PERSONAL FINANCE */}
          <Link
            href="/personal-finance"
            className="block px-6 py-3 font-bold text-gray-800 uppercase tracking-wide hover:bg-gray-50"
            onClick={closeMobileMenu}
          >
            PERSONAL FINANCE
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
