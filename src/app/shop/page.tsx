"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Film,
  Image as ImageIcon,
  X,
} from "lucide-react";
import { catalogItems, catalogStats, CatalogItem } from "@/data/catalog";
import { CatalogCard } from "@/components/catalog/CatalogCard";
import { CatalogModal } from "@/components/catalog/CatalogModal";
import { PillButton } from "@/components/ui/PillButton";

const FITS = ["All Fits", "Slim Fit", "Regular Fit", "Relaxed Fit", "Oversized"];

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategoryParam = searchParams.get("category");
  
  // Normalise category from URL if query is provided
  const initialCategory = useMemo(() => {
    if (!initialCategoryParam) return "All";
    const lower = initialCategoryParam.toLowerCase();
    if (lower.includes("t-shirt") || lower.includes("tee")) return "T-Shirts";
    if (lower.includes("shirt")) return "Shirts";
    if (lower.includes("outfit")) return "Outfits";
    return "All";
  }, [initialCategoryParam]);

  const [category, setCategory] = useState<string>(initialCategory);
  const [selectedFit, setSelectedFit] = useState<string>("All Fits");
  const [selectedMediaType, setSelectedMediaType] = useState<"all" | "image" | "video">("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [modalItem, setModalItem] = useState<CatalogItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [visibleCount, setVisibleCount] = useState<number>(32);

  const categories = [
    { name: "All", count: catalogStats.total },
    { name: "T-Shirts", count: catalogStats.tShirts },
    { name: "Shirts", count: catalogStats.shirts },
    { name: "Outfits", count: catalogStats.outfits },
  ];

  const resetAllFilters = () => {
    setCategory("All");
    setSelectedFit("All Fits");
    setSelectedMediaType("all");
    setSearchQuery("");
    setVisibleCount(32);
  };

  // Filter Logic
  const filteredItems = useMemo(() => {
    return catalogItems.filter((item) => {
      // Category filter
      if (category !== "All" && item.category !== category) {
        return false;
      }
      // Media type filter
      if (selectedMediaType !== "all" && item.mediaType !== selectedMediaType) {
        return false;
      }
      // Fit filter
      if (selectedFit !== "All Fits" && item.fit !== selectedFit) {
        return false;
      }
      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matches =
          item.name.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.code.toLowerCase().includes(q) ||
          item.fabric.toLowerCase().includes(q) ||
          item.tags.some((t) => t.toLowerCase().includes(q));
        if (!matches) return false;
      }
      return true;
    });
  }, [category, selectedMediaType, selectedFit, searchQuery]);

  const displayedItems = useMemo(() => {
    return filteredItems.slice(0, visibleCount);
  }, [filteredItems, visibleCount]);

  const handleOpenModal = (item: CatalogItem) => {
    setModalItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalItem(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-neutral-200 dark:border-neutral-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-xs font-mono font-semibold uppercase tracking-wider mb-2 border border-neutral-200 dark:border-neutral-700">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white" />
            <span>The Complete Collection</span>
          </div>
          <h1 className="editorial-headline text-3xl sm:text-5xl font-black text-black dark:text-white tracking-tight">
            Men&apos;s Clothing Showcase
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-neutral-500 max-w-xl leading-relaxed">
            Discover all 142 prominent pieces from AB Collections Kavoor. Clean styling, premium cotton &amp; linen textures, and tailored silhouettes without distractions.
          </p>
        </div>

        {/* Live In-Store Tag */}
        <div className="shrink-0 flex items-center gap-2 px-4 py-2 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800 text-xs font-medium text-neutral-700 dark:text-neutral-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>Walk-In Trials • Kavoor Tower, Mangaluru</span>
        </div>
      </div>

      {/* Category Pills & Media Filter Row */}
      <div className="my-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none w-full md:w-auto">
          {categories.map((cat) => {
            const isSelected = category === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => {
                  setCategory(cat.name);
                  setVisibleCount(32);
                }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? "bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 shadow-md scale-105"
                    : "bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300"
                }`}
              >
                <span>{cat.name}</span>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full font-mono ${
                    isSelected
                      ? "bg-white/20 dark:bg-black/20 text-white dark:text-neutral-950"
                      : "bg-black/5 dark:bg-white/10 text-neutral-500 dark:text-neutral-400"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Photos vs Video Reels */}
        <div className="flex items-center gap-1.5 p-1 bg-neutral-100 dark:bg-neutral-800 rounded-full border border-neutral-200/50 dark:border-neutral-700/50 shrink-0">
          <button
            onClick={() => setSelectedMediaType("all")}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              selectedMediaType === "all"
                ? "bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-xs"
                : "text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200"
            }`}
          >
            All Media
          </button>
          <button
            onClick={() => setSelectedMediaType("image")}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              selectedMediaType === "image"
                ? "bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-xs"
                : "text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200"
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Photos</span>
          </button>
          <button
            onClick={() => setSelectedMediaType("video")}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              selectedMediaType === "video"
                ? "bg-white dark:bg-neutral-900 text-neutral-950 dark:text-white shadow-xs"
                : "text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200"
            }`}
          >
            <Film className="w-3.5 h-3.5" />
            <span>Video Reels</span>
          </button>
        </div>
      </div>

      {/* Sub Filter: Search & Fits */}
      <div className="mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-3xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200/80 dark:border-neutral-800">
        <div className="relative w-full sm:max-w-xs">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setVisibleCount(32);
            }}
            placeholder="Search fabrics, codes, fits..."
            className="w-full pl-4 pr-9 py-2 text-xs rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 outline-none focus:border-black dark:focus:border-white"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto">
          {FITS.map((fit) => (
            <button
              key={fit}
              onClick={() => {
                setSelectedFit(fit);
                setVisibleCount(32);
              }}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                selectedFit === fit
                  ? "bg-neutral-950 text-white dark:bg-neutral-100 dark:text-neutral-950"
                  : "bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700"
              }`}
            >
              {fit}
            </button>
          ))}
          {(category !== "All" || selectedFit !== "All Fits" || selectedMediaType !== "all" || searchQuery) && (
            <button
              onClick={resetAllFilters}
              className="text-xs font-bold text-neutral-500 hover:text-black dark:hover:text-white underline ml-2 cursor-pointer"
            >
              Reset
            </button>
          )}
        </div>
      </div>

      {/* Prominent Grid Cards */}
      {filteredItems.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-7">
            {displayedItems.map((item) => (
              <CatalogCard key={item.id} item={item} onQuickView={handleOpenModal} />
            ))}
          </div>

          {visibleCount < filteredItems.length && (
            <div className="mt-14 text-center">
              <PillButton
                onClick={() => setVisibleCount((prev) => prev + 32)}
                variant="dark"
                size="lg"
              >
                Load More ({displayedItems.length} of {filteredItems.length})
              </PillButton>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-20 bg-neutral-50 dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 p-8 max-w-md mx-auto">
          <p className="text-sm font-bold text-neutral-800 dark:text-neutral-200">
            No items found in this selection
          </p>
          <div className="mt-4">
            <PillButton onClick={resetAllFilters} variant="dark" size="md">
              Clear Filters
            </PillButton>
          </div>
        </div>
      )}

      {/* Quick View Full Modal */}
      <CatalogModal
        item={modalItem}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="min-h-screen py-20 text-center font-mono text-xs text-neutral-400">Loading collection...</div>}>
      <ShopContent />
    </Suspense>
  );
}
