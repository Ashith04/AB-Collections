"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, X, ArrowUpRight, Clock, Flame, Film } from "lucide-react";
import { catalogItems, CatalogItem } from "@/data/catalog";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const POPULAR_SEARCHES = ["T-Shirts", "Casual Shirts", "Full Outfits", "Linen", "Denim", "Polo Knit"];

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

  const results: CatalogItem[] = normalizedQuery
    ? catalogItems.filter((item) => {
        const nameMatch = item.name.toLowerCase().includes(normalizedQuery);
        const catMatch = item.category.toLowerCase().includes(normalizedQuery);
        const codeMatch = item.code.toLowerCase().includes(normalizedQuery);
        const fabricMatch = item.fabric.toLowerCase().includes(normalizedQuery);
        const fitMatch = item.fit.toLowerCase().includes(normalizedQuery);
        const descMatch = item.description.toLowerCase().includes(normalizedQuery);
        const tagMatch = item.tags.some((t) => t.toLowerCase().includes(normalizedQuery));
        return nameMatch || catMatch || codeMatch || fabricMatch || fitMatch || descMatch || tagMatch;
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
              placeholder="Search T-Shirts, Shirts, Full Outfits, linen, denim, codes..."
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
            {["T-Shirts", "Shirts", "Full Outfits", "Linen", "Denim", "Polo"].map((cat) => (
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
                <span className="text-xs text-neutral-400">All 142 items indexed</span>
              </div>

              {results.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {results.slice(0, 20).map((item) => (
                    <div
                      key={item.id}
                      onClick={() => {
                        saveRecentSearch(query);
                        onClose();
                        window.location.href = `/shop?category=${encodeURIComponent(item.category)}`;
                      }}
                      className="group flex items-center gap-4 p-3 rounded-2xl bg-neutral-50 dark:bg-neutral-800/60 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all border border-neutral-200/60 dark:border-neutral-700/40 cursor-pointer"
                    >
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-neutral-200 dark:bg-neutral-700 shrink-0">
                        {item.mediaType === "video" ? (
                          <div className="w-full h-full bg-black flex items-center justify-center">
                            <Film className="w-5 h-5 text-amber-400" />
                          </div>
                        ) : (
                          <Image
                            src={item.mediaUrl}
                            alt={item.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform"
                            sizes="64px"
                          />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono uppercase text-neutral-500 tracking-wider">
                            {item.code}
                          </span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold">
                            {item.category}
                          </span>
                        </div>
                        <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 truncate mt-0.5">
                          {item.name}
                        </h4>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 truncate mt-0.5">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-base text-neutral-600 dark:text-neutral-300 font-medium">
                    No exact fits found for &ldquo;{query}&rdquo;
                  </p>
                  <p className="text-xs text-neutral-400 mt-1">
                    Try searching by category such as &ldquo;T-Shirts&rdquo;, &ldquo;Shirts&rdquo;, or &ldquo;Full Outfits&rdquo;.
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
                  <Flame className="w-3.5 h-3.5 text-amber-500" />
                  <span>Popular Searches</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {POPULAR_SEARCHES.map((term) => (
                    <button
                      key={term}
                      onClick={() => {
                        setQuery(term);
                        saveRecentSearch(term);
                      }}
                      className="px-3 py-1.5 rounded-full text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
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
                    <Clock className="w-3.5 h-3.5" />
                    <span>Recent Searches</span>
                  </div>
                  {recentSearches.length > 0 && (
                    <button
                      onClick={clearRecentSearches}
                      className="text-[10px] text-neutral-400 hover:text-black dark:hover:text-white"
                    >
                      Clear All
                    </button>
                  )}
                </div>
                {recentSearches.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {recentSearches.map((term) => (
                      <button
                        key={term}
                        onClick={() => setQuery(term)}
                        className="px-3 py-1.5 rounded-full text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-neutral-400">No recent searches yet</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
