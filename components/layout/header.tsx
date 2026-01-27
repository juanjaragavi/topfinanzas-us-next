"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { logger } from "@/lib/logger";
import { Menu, X, ChevronDown, Search, ChevronRight } from "lucide-react";
import { SearchBar } from "@/components/search/search-bar"; // Import SearchBar
// Removed Input, SearchResults, useDebouncedCallback
import { useMobileMenu } from "@/components/providers/mobile-menu-context";
// Import content from lib directory
import { logos } from "@/lib/images/logos";
import { headerNavigation } from "@/lib/navigation/headerNavigation";
import { headerContent } from "@/lib/texts/header/content";
// Removed AdZepCentralizedHandler - activation now handled by AdZepSPABridge
// Removed searchIndex, SearchItem

export function Header() {
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } =
    useMobileMenu();
  const [isSearchOpen, setIsSearchOpen] = useState(false); // Add search state
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false); // Mobile accordion state

  // Scroll Aware Header State
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const megaMenuRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const menuButtonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>(
    {},
  );

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

  // Scroll Handler Effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Enhance user experience by only hiding after a threshold
      // and checking scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Hide on scroll down
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
                  width={240}
                  height={65}
                  className="h-10 md:h-12 w-auto object-contain" // Refined to h-10 mobile / h-12 desktop matching reference
                  priority={true}
                  loading="eager"
                  sizes="(max-width: 768px) 180px, 220px"
                  quality={95}
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 ml-6 flex-1 justify-end">
              {/* Categories Dropdown */}
              <div className="relative">
                <button
                  ref={(el) => {
                    setMenuButtonRef(el, "categories");
                  }}
                  className="text-link hover:text-primary flex items-center space-x-1 text-sm"
                  onClick={(e) => {
                    // Prevent default browser action but DON'T stop propagation
                    e.preventDefault();
                    toggleMegaMenu("categories");
                  }}
                  // Keep onKeyDown for accessibility
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
                    className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"
                  >
                    <div className="py-1">
                      {headerNavigation.categoryDropdown.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-2 text-body hover:bg-gray-100"
                          onClick={() => setActiveMegaMenu(null)}
                        >
                          {item.text}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Blog Menu Item with Mega Menu */}
              <div className="relative">
                <button
                  ref={(el) => {
                    setMenuButtonRef(el, "blog");
                  }}
                  className="text-link hover:text-primary flex items-center space-x-1 text-sm"
                  onClick={(e) => {
                    // Prevent default browser action but DON'T stop propagation
                    e.preventDefault();
                    toggleMegaMenu("blog");
                  }}
                  // Keep onKeyDown for accessibility
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleMegaMenu("blog");
                    }
                  }}
                  aria-expanded={activeMegaMenu === "blog"}
                  aria-haspopup="true"
                  role="button"
                  tabIndex={0}
                >
                  <span>{headerNavigation.blogMegaMenu.title}</span>
                  <ChevronDown
                    className={`size-4 transition-transform ${
                      activeMegaMenu === "blog" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {activeMegaMenu === "blog" && (
                  <div
                    ref={(el) => {
                      setMegaMenuRef(el, "blog");
                    }}
                    className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-auto max-w-4xl rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10" // Centered
                    style={{
                      width: "calc(min(90vw, 900px))", // Kept width constraint
                      maxHeight: "calc(100vh - 100px)",
                      overflowY: "auto",
                    }}
                  >
                    {/* Refactored grid to 4 columns: 3 for links, 1 for featured */}
                    <div className="p-4 grid grid-cols-4 gap-4">
                      {" "}
                      {/* Changed to grid-cols-4 */}
                      {/* Map link columns directly into the grid */}
                      {headerNavigation.blogMegaMenu.columns.map(
                        (column, idx) => (
                          // Each link column gets its own grid space (col-span-1 implicitly)
                          <div key={idx} className="col-span-1">
                            {" "}
                            {/* Explicitly col-span-1 */}
                            <h3 className="text-h3 uppercase tracking-wide mb-3">
                              {column.title}
                            </h3>
                            <ul className="space-y-1">
                              {" "}
                              {/* Reduced space-y */}
                              {column.items.map((item, itemIdx) => (
                                <li key={itemIdx}>
                                  <Link
                                    href={item.href}
                                    className={
                                      item.isEmphasis
                                        ? "inline-block bg-gray-100 hover:bg-gray-200 text-blue-700 underline underline-offset-2 font-medium text-sm py-1 px-3 rounded-full transition-colors" // Button-like style
                                        : "text-body hover:text-primary block py-1" // Original style
                                    }
                                    onClick={() => setActiveMegaMenu(null)}
                                  >
                                    {item.text}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ),
                      )}
                      {/* Featured Posts Column */}
                      {headerNavigation.blogMegaMenu.featuredPosts && (
                        // Ensure this is also col-span-1 in the 4-col grid
                        <div className="col-span-1">
                          <h3 className="text-h3 uppercase tracking-wide mb-3">
                            {headerNavigation.blogMegaMenu.featuredPosts.title}
                          </h3>
                          {/* Changed internal grid to single column */}
                          <div className="grid grid-cols-1 gapx-2 relative">
                            {" "}
                            {/* Reduced gap */}
                            {headerNavigation.blogMegaMenu.featuredPosts.posts.map(
                              (post, idx) => (
                                <Link
                                  key={idx}
                                  href={post.href}
                                  className="group flex space-x-4 items-center" // Use flexbox for row layout
                                  onClick={() => setActiveMegaMenu(null)}
                                >
                                  {/* Text Content Div */}
                                  <div className="flex-grow">
                                    <span className="inline-block bg-blue-600 text-white px-2 py-0.5 rounded text-meta mb-1">
                                      {post.category}
                                    </span>
                                    <h4 className="text-h3 group-hover:text-primary transition-colors line-clampx-2">
                                      {" "}
                                      {/* Limit title lines */}
                                      {post.title}
                                    </h4>
                                  </div>
                                  {/* Image Content Div */}
                                  <div className="flex-shrink-0 w-24 h-16 relative text-blue-700 underline underline-offset-2 rounded-md overflow-hidden">
                                    {" "}
                                    {/* Fixed size image container */}
                                    <Image
                                      src={post.image}
                                      alt={post.title}
                                      fill
                                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                                      sizes="96px" // Match width
                                      priority={false}
                                      loading="lazy"
                                      quality={75}
                                      placeholder="blur"
                                      blurDataURL="data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAAQAAAACQAAAwAAQUxQSBcAAAABD9D/ERFCyDa37d+ICPgXqjgjoqA+qgAAVlA4IDYAAACQAQCdASoKAAQAAkA4JZwAAPrHQAD++5AK1AA="
                                    />
                                  </div>
                                </Link>
                              ),
                            )}
                          </div>
                          <div className="mt-4 text-right">
                            <Link
                              href="/blog"
                              className="text-link font-medium inline-flex items-center text-blue-700 underline underline-offset-2"
                              onClick={() => setActiveMegaMenu(null)}
                            >
                              {headerContent.blogMegaMenu.viewAllText}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 ml-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Other Nav Items */}
              {headerNavigation.mainNavItems
                .filter((item) => item.text !== "BLOG")
                .map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-link hover:text-primary text-sm" // text-sm already applied here, confirming
                  >
                    {item.text}
                  </Link>
                ))}

              {/* Desktop Search Button (Restored) */}
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

      {/* New Mobile Menu "Push" Drawer
          Since SiteWrapper transforms the parent container, this fixed element 
          positioned at left-[-300px] will slide into view (0px) when parent moves right.
          MOVED OUTSIDE HEADER to avoid 'transform' breaking 'fixed' positioning.
      */}
      <div
        className="md:hidden fixed top-0 bottom-0 w-[300px] bg-white z-40 h-full overflow-y-auto border-r border-gray-200"
        style={{
          left: "-300px",
          // When context open is true, SiteWrapper moves +300px.
          // So this element moves from visual -300 to 0.
        }}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header: Close Button & Logo */}
          <div className="flex items-center p-4 border-b border-gray-100">
            <button
              onClick={closeMobileMenu}
              className="bg-blue-600 text-white rounded-full p-1 mr-4 hover:bg-blue-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="w-32">
              <Image
                src={logos.colorLogo.url}
                alt={logos.colorLogo.alt}
                width={logos.colorLogo.width}
                height={logos.colorLogo.height}
                className="w-full h-auto object-contain"
              />
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

      {/* Search Bar Overlay */}
      <SearchBar isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
