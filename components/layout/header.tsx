"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { logger } from "@/lib/logger";
import { ChevronDown, Search, Menu } from "lucide-react";
import dynamic from "next/dynamic";

const SearchBar = dynamic(
  () => import("@/components/search/search-bar").then((mod) => mod.SearchBar),
  { ssr: false },
);
// Removed Input, SearchResults, useDebouncedCallback
import { useMobileMenu } from "@/components/providers/mobile-menu-context";
// Import content from lib directory
import { logos } from "@/lib/images/logos";
import { headerNavigation } from "@/lib/navigation/headerNavigation";
// Removed AdZepCentralizedHandler - activation now handled by AdZepSPABridge
// Removed searchIndex, SearchItem

export function Header() {
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } =
    useMobileMenu();
  const [isSearchOpen, setIsSearchOpen] = useState(false); // Add search state
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  // Scroll Aware Header State
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const megaMenuRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const menuButtonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>(
    {},
  );
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Mega menu hover handlers with delay
  const handleMegaMenuEnter = (menuId: string) => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current);
      megaMenuTimeoutRef.current = null;
    }
    setActiveMegaMenu(menuId);
  };

  const handleMegaMenuLeave = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 150); // 150ms delay before closing
  };

  // Removed Search State and Refs
  // Removed Debounced search function
  // Removed Handle search input change

  // Close mega menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (activeMegaMenu) {
        const megaMenuRef = megaMenuRefs.current[activeMegaMenu];
        const menuButtonRef = menuButtonRefs.current[activeMegaMenu];
        if (
          megaMenuRef &&
          menuButtonRef &&
          !megaMenuRef.contains(event.target as Node) &&
          !menuButtonRef.contains(event.target as Node)
        ) {
          setActiveMegaMenu(null);
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeMegaMenu]);

  // ESC key handler to close menus
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (activeMegaMenu) setActiveMegaMenu(null);
        if (isSearchOpen) setIsSearchOpen(false); // Close search on ESC
        if (isMobileMenuOpen) closeMobileMenu();
      }
    };

    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [activeMegaMenu, isSearchOpen, isMobileMenuOpen, closeMobileMenu]);

  // Function to toggle mega menu
  const toggleMegaMenu = (menuId: string) => {
    logger.info(`Toggling mega menu: ${menuId}`);
    setActiveMegaMenu((prevMenu) => (prevMenu === menuId ? null : menuId));
  };

  // Removed toggleSearch function

  // Function to toggle mobile menu
  // const toggleMobileMenu = () => {
  //   logger.info("Toggling mobile menu");
  //   setIsOpen((prev) => !prev);
  // };

  const setMenuButtonRef = (el: HTMLButtonElement | null, key: string) => {
    menuButtonRefs.current[key] = el;
  };

  const setMegaMenuRef = (el: HTMLDivElement | null, key: string) => {
    megaMenuRefs.current[key] = el;
  };

  // Scroll Handler Effect — only hide on scroll down for desktop
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isMobile = window.innerWidth < 768;

      // On mobile, always keep header visible (sticky behavior)
      if (isMobile) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Hide on scroll down (desktop only)
      } else {
        setIsVisible(true); // Show on scroll up
      }

      setLastScrollY(currentScrollY);
    };

    // Throttle via requestAnimationFrame for performance
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* AdZep activation now handled exclusively by AdZepSPABridge */}
      <header
        className={`sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center h-16 relative">
            {/* Mobile: Hamburger Menu (Left) */}
            <div className="flex md:hidden flex-none w-12 items-center justify-start z-20">
              {/* Only show Hamburger if menu is CLOSED. If Open, the menu itself has the close button. 
                   Actually, usually the hamburger acts as a toggle. 
                   But in "Push" menus, the hamburger is often on the main content, 
                   and the "Close" is on the drawer. 
               */}
              {!isMobileMenuOpen && (
                <button
                  type="button"
                  onClick={toggleMobileMenu}
                  className="p-2 -ml-2 rounded-md hover:bg-gray-100 focus:outline-none text-black"
                  aria-label="Open main menu"
                >
                  <Menu className="w-6 h-6" />
                </button>
              )}
            </div>

            {/* Logo - Center on Mobile (Flex-1), Left on Desktop */}
            <div className="flex-1 md:flex-none flex justify-center md:justify-start z-10 w-full md:w-auto absolute left-0 md:relative md:left-auto pointer-events-none md:pointer-events-auto items-center h-full">
              <Link href="/" className="flex-shrink-0 pointer-events-auto">
                <Image
                  src={logos.colorLogo.url}
                  alt={logos.colorLogo.alt}
                  width={276}
                  height={75}
                  className="h-12 md:h-14 w-auto object-contain"
                  priority={true}
                  loading="eager"
                  sizes="(max-width: 768px) 210px, 255px"
                  quality={95}
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 ml-6 flex-1 justify-end">
              {/* Categories Mega Menu - Matching WordPress US Layout */}
              <div
                className="relative"
                onMouseEnter={() => handleMegaMenuEnter("categories")}
                onMouseLeave={handleMegaMenuLeave}
              >
                <button
                  ref={(el) => {
                    setMenuButtonRef(el, "categories");
                  }}
                  className="text-blue-600 hover:text-blue-800 font-semibold flex items-center space-x-1 text-sm uppercase tracking-wide"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleMegaMenu("categories");
                    }
                  }}
                  aria-expanded={activeMegaMenu === "categories"}
                  aria-haspopup="true"
                  role="button"
                  tabIndex={0}
                >
                  <span>{headerNavigation.categoryDropdown.text}</span>
                  <ChevronDown
                    className={`size-4 transition-transform ${
                      activeMegaMenu === "categories" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {activeMegaMenu === "categories" && (
                  <div
                    ref={(el) => {
                      setMegaMenuRef(el, "categories");
                    }}
                    className="fixed left-0 right-0 mx-auto mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                    style={{ width: "950px", maxWidth: "95vw", top: "64px" }}
                    onMouseEnter={() => handleMegaMenuEnter("categories")}
                    onMouseLeave={handleMegaMenuLeave}
                  >
                    <div className="p-6 flex gap-8">
                      {/* Categories List - Left Side */}
                      <div className="w-48 flex-shrink-0">
                        <ul className="space-y-3">
                          {headerNavigation.categoryDropdown.items.map(
                            (item) => (
                              <li key={item.href}>
                                <Link
                                  href={item.href}
                                  className="text-blue-600 hover:text-blue-800 font-medium text-sm uppercase tracking-wide"
                                  onClick={() => setActiveMegaMenu(null)}
                                >
                                  {item.text}
                                </Link>
                              </li>
                            ),
                          )}
                        </ul>
                      </div>

                      {/* Featured Articles Grid - Right Side */}
                      {headerNavigation.categoryDropdown.featuredArticles && (
                        <div className="flex-1 grid grid-cols-4 gap-4">
                          {headerNavigation.categoryDropdown.featuredArticles.map(
                            (article, idx) => (
                              <Link
                                key={idx}
                                href={article.href}
                                className="group block"
                                onClick={() => setActiveMegaMenu(null)}
                              >
                                <div className="relative aspect-[4/3] rounded overflow-hidden mb-2">
                                  <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    sizes="140px"
                                    loading="lazy"
                                  />
                                </div>
                                <h4 className="text-xs font-medium text-gray-700 group-hover:text-blue-600 line-clamp-2 text-center leading-tight">
                                  {article.title}
                                </h4>
                              </Link>
                            ),
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Main Nav Items (LOANS, CREDIT CARDS) */}
              {headerNavigation.mainNavItems.map((item) => (
                <Link
                  key={item.href + item.text}
                  href={item.href}
                  className="text-blue-600 hover:text-blue-800 font-semibold text-sm uppercase tracking-wide"
                >
                  {item.text}
                </Link>
              ))}

              {/* Desktop Search Button */}
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-black hover:text-primary"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
            </nav>

            {/* Mobile: Search Icon (Right) */}
            <div className="flex md:hidden flex-none items-center justify-end z-20 ml-auto">
              {" "}
              {/* Added ml-auto */}
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)} // Toggle search
                className="p-2 text-black hover:text-primary" // Removed negative margins to clean up alignment
                aria-label="Search"
              >
                <Search className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Removed Search Bar and Results Section */}
        </div>
      </header>

      {/* Search Bar Overlay */}
      <SearchBar isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
