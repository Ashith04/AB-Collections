"use client";

import React, { useState, useMemo } from "react";
import { catalogItems, CatalogItem } from "@/data/catalog";
import { HeroSection } from "@/components/home/HeroSection";
import { CatalogCard } from "@/components/catalog/CatalogCard";
import { CatalogModal } from "@/components/catalog/CatalogModal";
import { CatalogFilterBar } from "@/components/catalog/CatalogFilterBar";
import { DarkBentoSection } from "@/components/home/DarkBentoSection";
import { MarqueeStrip } from "@/components/home/MarqueeStrip";
import { ValueProps } from "@/components/home/ValueProps";
import { VisitStoreSection } from "@/components/home/VisitStoreSection";
import { Sparkles, MessageCircle, ArrowRight } from "lucide-react";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedMediaType, setSelectedMediaType] = useState<"all" | "image" | "video">("all");
  const [selectedFit, setSelectedFit] = useState<string>("All Fits");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [visibleCount, setVisibleCount] = useState<number>(24);
  const [modalItem, setModalItem] = useState<CatalogItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const resetFilters = () => {
    setSelectedCategory("All");
    setSelectedMediaType("all");
    setSelectedFit("All Fits");
    setSearchQuery("");
    setVisibleCount(24);
  };

  // Filter items based on Category (T-Shirts, Shirts, Full Outfits), Media Type, Fit, and Search Query
  const filteredItems = useMemo(() => {
    return catalogItems.filter((item) => {
      // 1. Category Filter
      if (selectedCategory !== "All" && item.category !== selectedCategory) {
        return false;
      }

      // 2. Media Type Filter
      if (selectedMediaType !== "all" && item.mediaType !== selectedMediaType) {
        return false;
      }

      // 3. Fit Filter
      if (selectedFit !== "All Fits" && item.fit !== selectedFit) {
        return false;
      }

      // 4. Search Filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matches =
          item.name.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q) ||
          item.code.toLowerCase().includes(q) ||
          item.fabric.toLowerCase().includes(q) ||
          item.tags.some((t) => t.toLowerCase().includes(q));
        if (!matches) return false;
      }

      return true;
    });
  }, [selectedCategory, selectedMediaType, selectedFit, searchQuery]);

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
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <HeroSection onSelectCategory={(cat) => setSelectedCategory(cat)} />

      {/* 2. Marquee Strip */}
      <MarqueeStrip />

      {/* 3. Main Catalog Gallery Section */}
      <section id="catalog-section" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Gallery Title & Context */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Complete Showroom Collection • 142 Items</span>
          </div>

          <h2 className="editorial-headline text-3xl sm:text-5xl font-black text-neutral-900 dark:text-neutral-50 tracking-tight">
            Curated Men&apos;s Wardrobe
          </h2>

          <p className="mt-3 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Every garment in our Kavoor store is captured and categorized below. Browse our relaxed-fit tees, tailored button-downs, and coordinated ensembles with prominent visual previews.
          </p>
        </div>

        {/* Filter Bar */}
        <CatalogFilterBar
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => {
            setSelectedCategory(cat);
            setVisibleCount(24);
          }}
          selectedMediaType={selectedMediaType}
          onSelectMediaType={(type) => {
            setSelectedMediaType(type);
            setVisibleCount(24);
          }}
          selectedFit={selectedFit}
          onSelectFit={(fit) => {
            setSelectedFit(fit);
            setVisibleCount(24);
          }}
          searchQuery={searchQuery}
          onSearchChange={(q) => {
            setSearchQuery(q);
            setVisibleCount(24);
          }}
          totalFiltered={filteredItems.length}
          onReset={resetFilters}
        />

        {/* Prominent Grid of Items */}
        {filteredItems.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-7">
              {displayedItems.map((item) => (
                <CatalogCard
                  key={item.id}
                  item={item}
                  onQuickView={handleOpenModal}
                />
              ))}
            </div>

            {/* Load More Button if remaining */}
            {visibleCount < filteredItems.length && (
              <div className="mt-14 text-center">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 24)}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-black text-white dark:bg-white dark:text-black font-extrabold text-xs uppercase tracking-wider hover:opacity-90 transition-all hover:scale-105 shadow-md"
                >
                  <span>Load More Pieces</span>
                  <span className="opacity-70">
                    ({displayedItems.length} of {filteredItems.length})
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </>
        ) : (
          /* Empty State */
          <div className="text-center py-20 bg-neutral-50 dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 p-8 max-w-xl mx-auto">
            <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
              No matching pieces found
            </h3>
            <p className="text-xs text-neutral-500 mt-2 leading-relaxed">
              We couldn&apos;t find any items matching &ldquo;{searchQuery}&rdquo;. Try another search keyword or clear your active filters.
            </p>
            <button
              onClick={resetFilters}
              className="mt-6 px-6 py-2.5 rounded-full bg-black text-white dark:bg-white dark:text-black text-xs font-bold uppercase tracking-wider"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </section>

      {/* 4. Value Propositions Strip */}
      <ValueProps />

      {/* 5. Dark Bento Section */}
      <DarkBentoSection />

      {/* 6. Visit Store Section with Live Map & Hours */}
      <VisitStoreSection />

      {/* 7. Quick View Full Modal */}
      <CatalogModal
        item={modalItem}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
