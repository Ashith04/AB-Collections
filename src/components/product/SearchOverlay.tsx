"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, X, ArrowUpRight, Clock, Flame } from "lucide-react";
import { products, productCategories } from "@/data/products";
import { Product } from "@/types";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const POPULAR_SEARCHES = ["Cargo Shirts", "Linen Trousers", "Satin Tonal", "Slim Fit Denim", "240 GSM Tee"];

export const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      try {
        const stored = localStorage.getItem("ab_recent_searches");
        if (stored) setRecentSearches(JSON.parse(stored));
      } catch {
        // ignore
      }
    } else {
      setQuery("");
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const saveRecentSearch = (term: string) => {
    try {
      const updated = [term, ...recentSearches.filter((s) => s.toLowerCase() !== term.toLowerCase())].slice(0, 5);
      setRecentSearches(updated);
      localStorage.setItem("ab_recent_searches", JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem("ab_recent_searches");
  };

  const normalizedQuery = query.trim().toLowerCase();

  const results: Product[] = normalizedQuery
    ? products.filter((p) => {
        const nameMatch = p.name.toLowerCase().includes(normalizedQuery);
        const catMatch = p.category.toLowerCase().includes(normalizedQuery);
        const codeMatch = p.code.toLowerCase().includes(normalizedQuery);
        const fabricMatch = p.fabric.toLowerCase().includes(normalizedQuery);
        const fitMatch = p.fit.toLowerCase().includes(normalizedQuery);
        const descMatch = p.description.toLowerCase().includes(normalizedQuery);
        return nameMatch || catMatch || codeMatch || fabricMatch || fitMatch || descMatch;
      })
    : [];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black/60 backdrop-blur-md transition-all">
      <div className="w-full bg-white dark:bg-neutral-950 shadow-2xl border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex items-center gap-3">
            <Search className="w-5 h-5 text-neutral-400 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search cargo shirts, satin, slim fit jeans, linen, code..."
              className="w-full bg-transparent text-lg sm:text-xl font-medium tracking-tight text-neutral-900 dark:text-neutral-50 placeholder-neutral-400 focus:outline-none"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="p-1 rounded-full text-neutral-400 hover:text-black dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            )}
            <button
              onClick={onClose}
              className="ml-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 transition-colors"
            >
              ESC
            </button>
          </div>

          {/* Quick Categories Bar */}
          <div className="flex items-center gap-2 mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-900 overflow-x-auto no-scrollbar text-xs">
            <span className="text-neutral-400 font-medium shrink-0">Explore:</span>
            {productCategories.slice(1, 7).map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setQuery(cat);
                  saveRecentSearch(cat);
                }}
                className="px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors shrink-0"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results / Default State Area */}
      <div
        className="flex-1 overflow-y-auto px-4 sm:px-6 py-8"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <div className="max-w-4xl mx-auto bg-white dark:bg-neutral-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-neutral-200 dark:border-neutral-800">
          {query ? (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold tracking-wider uppercase text-neutral-500">
                  Search Results ({results.length})
                </h3>
                <span className="text-xs text-neutral-400">Press item to view fit details</span>
              </div>

              {results.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {results.map((product) => (
                    <Link
                      key={product.id}
                      href={`/product/${product.slug}`}
                      onClick={() => {
                        saveRecentSearch(query);
                        onClose();
                      }}
                      className="group flex items-center gap-4 p-3 rounded-2xl bg-neutral-50 dark:bg-neutral-800/60 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all border border-neutral-200/60 dark:border-neutral-700/40"
                    >
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-neutral-200 dark:bg-neutral-700 shrink-0">
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          fill
                          className="object-contain p-1 group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono uppercase text-neutral-500 tracking-wider">
                            {product.code}
                          </span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold">
                            {product.fit}
                          </span>
                        </div>
                        <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 truncate mt-0.5">
                          {product.name}
                        </h4>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-xs font-semibold text-neutral-900 dark:text-neutral-100">
                            ₹{product.price.toLocaleString("en-IN")}
                          </span>
                          <span className="text-xs text-neutral-400 flex items-center gap-0.5 group-hover:text-amber-500 transition-colors">
                            View
                            <ArrowUpRight className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-base text-neutral-600 dark:text-neutral-300 font-medium">
                    No exact fits found for &ldquo;{query}&rdquo;
                  </p>
                  <p className="text-xs text-neutral-400 mt-1">
                    Try searching by category such as &ldquo;Cargo&rdquo;, &ldquo;Denim&rdquo;, &ldquo;Satin&rdquo;, or &ldquo;Linen&rdquo;.
                  </p>
                  <button
                    onClick={() => setQuery("")}
                    className="mt-4 px-4 py-2 rounded-full text-xs font-medium bg-black text-white dark:bg-white dark:text-black"
                  >
                    Clear Search
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Popular Searches */}
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">
                  <Flame className="w-4 h-4 text-amber-500" />
                  <span>Trending In Kavoor</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {POPULAR_SEARCHES.map((term) => (
                    <button
                      key={term}
                      onClick={() => {
                        setQuery(term);
                        saveRecentSearch(term);
                      }}
                      className="px-3 py-1.5 rounded-full text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-amber-500 hover:text-black transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>

              {/* Recent Searches */}
              <div>
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>Recent Searches</span>
                  </div>
                  {recentSearches.length > 0 && (
                    <button
                      onClick={clearRecentSearches}
                      className="text-[11px] text-neutral-400 hover:text-red-500 transition-colors"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {recentSearches.length > 0 ? (
                  <div className="space-y-1">
                    {recentSearches.map((term) => (
                      <button
                        key={term}
                        onClick={() => setQuery(term)}
                        className="w-full text-left px-3 py-1.5 rounded-xl text-xs text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center justify-between group"
                      >
                        <span>{term}</span>
                        <ArrowUpRight className="w-3 h-3 text-neutral-400 group-hover:text-black dark:group-hover:text-white" />
                      </button>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-neutral-400 italic">No recent searches yet.</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
