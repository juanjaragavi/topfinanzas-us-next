"use client";

import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { searchContent, SearchResult } from "@/lib/search";
import Link from "next/link";

interface SearchBarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchBar({ isOpen, onClose }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setResults(searchContent(value));
  };

  const clearSearch = () => {
    setQuery("");
    setResults([]);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 w-full z-40 bg-white border-b border-gray-100 shadow-md flex flex-col"
        >
          {/* Header Area of Search Overlay */}
          <div className="container mx-auto px-4 h-16 flex items-center gap-4">
            <div className="flex-1 relative">
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={handleSearch}
                placeholder="Search..."
                className="w-full h-10 pl-4 pr-10 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {query && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            <button
              onClick={() => {
                // Search action or just close if purely client side filter
                if (results.length > 0) {
                  // Typically navigate to a search page, but for now we show results inline
                }
              }}
              className="text-sm font-bold text-gray-700 hover:text-blue-600 uppercase tracking-wide hidden md:block"
            >
              Search
            </button>
            <button
              onClick={onClose}
              className="p-2 -mr-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100"
              aria-label="Close search"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Search Results Dropdown (if any) */}
          {query && (
            <div className="absolute top-16 left-0 w-full bg-white shadow-lg border-t border-gray-100 max-h-[calc(100vh-64px)] overflow-y-auto">
              <div className="container mx-auto px-4 py-6">
                {results.length > 0 ? (
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {results.map((result, idx) => (
                      <Link
                        key={idx}
                        href={result.url}
                        onClick={onClose}
                        className="group block p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100 hover:border-blue-100"
                      >
                        <span className="text-xs font-semibold text-blue-600 mb-1 block">
                          {result.category}
                        </span>
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 mb-2">
                          {result.title}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {result.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 text-gray-500">
                    <p>No results found for &quot;{query}&quot;</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
