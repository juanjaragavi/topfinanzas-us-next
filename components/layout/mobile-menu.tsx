"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ChevronDown } from "lucide-react";
import { useMobileMenu } from "@/components/providers/mobile-menu-context";
import { logos } from "@/lib/images/logos";
import { headerNavigation } from "@/lib/navigation/headerNavigation";

export function MobileMenu() {
  const { isMobileMenuOpen, closeMobileMenu } = useMobileMenu();
  const [openStates, setOpenStates] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (id: string) => {
    setOpenStates((prev) => ({ ...prev, [id]: !prev[id] }));
  };

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
            {headerNavigation.mainNavItems.map((item) => (
              <div key={item.id}>
                <div className="flex items-center justify-between w-full hover:bg-gray-50">
                  <Link
                    href={item.href}
                    className="flex-1 px-6 py-3 font-bold text-gray-800 uppercase tracking-wide text-left"
                    onClick={closeMobileMenu}
                  >
                    {item.text}
                  </Link>
                  <button
                    onClick={() => toggleSection(item.id)}
                    className="px-6 py-3"
                    aria-expanded={openStates[item.id]}
                    aria-label={`Toggle ${item.text} menu`}
                  >
                    <ChevronDown
                      className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                        openStates[item.id] ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                {openStates[item.id] && (
                  <div className="bg-gray-50 border-y border-gray-100 py-2">
                    {item.megaMenu.columns.map((col, colIdx) => (
                      <div key={colIdx} className="mb-4 last:mb-0 mt-2">
                        <h4 className="px-8 py-1 text-xs font-bold text-gray-500 uppercase tracking-wider">
                          {col.title}
                        </h4>
                        {col.items.map((subItem, subIdx) => (
                          <Link
                            key={subIdx}
                            href={subItem.href}
                            className={`block px-10 py-2.5 text-sm transition-colors ${
                              subItem.isEmphasis
                                ? "text-blue-600 font-semibold hover:text-blue-800"
                                : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                            }`}
                            onClick={closeMobileMenu}
                          >
                            {subItem.text}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
                <div className="border-t border-gray-100"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
