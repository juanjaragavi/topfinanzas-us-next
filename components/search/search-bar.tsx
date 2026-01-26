"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { X, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { searchContent, SearchResult } from "@/lib/search";
import Link from "next/link";
import Image from "next/image";

interface SearchBarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchBar({ isOpen, onClose }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      // Small delay to ensure animation has started
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Close on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Debounced search
  const handleSearch = useCallback((value: string) => {
    setQuery(value);
    setIsSearching(true);

    // Debounce the actual search
    const timer = setTimeout(() => {
      const searchResults = searchContent(value, 9);
      setResults(searchResults);
      setIsSearching(false);
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  const clearSearch = () => {
    setQuery("");
    setResults([]);
    inputRef.current?.focus();
  };

  const handleResultClick = () => {
    setQuery("");
    setResults([]);
    onClose();
  };

  // Get icon for result type
  const getTypeLabel = (type: SearchResult["type"]) => {
    switch (type) {
      case "credit-card":
        return "Credit Card";
      case "loan":
        return "Loan";
      case "article":
        return "Article";
      case "page":
        return "Page";
      default:
        return "Content";
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 z-40"
            onClick={onClose}
          />

          {/* Search container */}
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 bg-white shadow-2xl"
          >
            {/* Search Header */}
            <div className="border-b border-gray-100">
              <div className="container mx-auto px-4">
                <div className="flex items-center h-16 md:h-20 gap-4">
                  {/* Search Icon */}
                  <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />

                  {/* Search Input */}
                  <div className="flex-1 relative">
                    <input
                      ref={inputRef}
                      type="text"
                      value={query}
                      onChange={(e) => handleSearch(e.target.value)}
                      placeholder="Search for credit cards, loans, articles..."
                      className="w-full h-12 px-0 bg-transparent text-lg focus:outline-none placeholder:text-gray-400"
                      autoComplete="off"
                    />
                    {query && (
                      <button
                        onClick={clearSearch}
                        className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-gray-600 transition-colors"
                        aria-label="Clear search"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  {/* Search Button */}
                  <button
                    onClick={() => {
                      if (query) {
                        handleSearch(query);
                      }
                    }}
                    className="hidden md:flex items-center justify-center px-6 py-2.5 bg-blue-600 text-white font-semibold text-sm uppercase tracking-wide rounded hover:bg-blue-700 transition-colors"
                  >
                    Search
                  </button>

                  {/* Close Button */}
                  <button
                    onClick={onClose}
                    className="flex items-center justify-center w-10 h-10 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
                    aria-label="Close search"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>

            {/* Search Results */}
            <AnimatePresence mode="wait">
              {query && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="max-h-[calc(100vh-80px)] overflow-y-auto"
                >
                  <div className="container mx-auto px-4 py-6">
                    {isSearching ? (
                      <div className="flex items-center justify-center py-12">
                        <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                      </div>
                    ) : results.length > 0 ? (
                      <>
                        <p className="text-sm text-gray-500 mb-4">
                          {results.length} result
                          {results.length !== 1 ? "s" : ""} for &quot;{query}
                          &quot;
                        </p>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                          {results.map((result, idx) => (
                            <motion.div
                              key={result.url}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.05 }}
                            >
                              <Link
                                href={result.url}
                                onClick={handleResultClick}
                                className="group flex gap-4 p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-200"
                              >
                                {/* Thumbnail */}
                                {result.image && (
                                  <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-gray-100">
                                    <Image
                                      src={result.image}
                                      alt={result.title}
                                      width={80}
                                      height={80}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                )}

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                  <span className="inline-block px-2 py-0.5 text-xs font-semibold text-blue-600 bg-blue-100 rounded mb-2">
                                    {getTypeLabel(result.type)}
                                  </span>
                                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-700 line-clamp-2 transition-colors">
                                    {result.title}
                                  </h3>
                                  <p className="text-sm text-gray-500 line-clamp-2 mt-1">
                                    {result.description}
                                  </p>
                                </div>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </>
                    ) : (
                      <div className="text-center py-12">
                        <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                        <p className="text-gray-500 text-lg">
                          No results found for &quot;{query}&quot;
                        </p>
                        <p className="text-gray-400 text-sm mt-2">
                          Try different keywords or browse our categories
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Quick Links (when no query) */}
            {!query && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="border-t border-gray-100"
              >
                <div className="container mx-auto px-4 py-6">
                  <p className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
                    Popular Searches
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Credit Cards",
                      "Personal Loans",
                      "Cashback",
                      "0% APR",
                      "Balance Transfer",
                      "Travel Rewards",
                      "Debt",
                      "Budget",
                    ].map((term) => (
                      <button
                        key={term}
                        onClick={() => handleSearch(term)}
                        className="px-4 py-2 text-sm bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 rounded-full transition-colors"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
