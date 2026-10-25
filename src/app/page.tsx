"use client";

import React, { useState, useMemo } from "react";
import { catalogItems, catalogStats, CatalogItem } from "@/data/catalog";
import { HeroSection } from "@/components/home/HeroSection";
import { CatalogCard } from "@/components/catalog/CatalogCard";
import { CatalogModal } from "@/components/catalog/CatalogModal";
import { CatalogFilterBar } from "@/components/catalog/CatalogFilterBar";
import { DarkBentoSection } from "@/components/home/DarkBentoSection";
import { EventsSection } from "@/components/events/EventsSection";
import { MarqueeStrip } from "@/components/home/MarqueeStrip";
import { MotionReelsSection } from "@/components/home/MotionReelsSection";
import { ValueProps } from "@/components/home/ValueProps";
import { VisitStoreSection } from "@/components/home/VisitStoreSection";
import { PillButton } from "@/components/ui/PillButton";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

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

  // Filter items based on Category (T-Shirts, Shirts, Outfits), Media Type, Fit, and Search Query
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
      {/* 1. Hero Section with Entry Animation */}
      <RevealOnScroll direction="up" delayMs={50}>
        <HeroSection onSelectCategory={(cat) => setSelectedCategory(cat)} />
      </RevealOnScroll>

      {/* 2. Marquee Strip */}
      <MarqueeStrip />

      {/* 3. In-Motion Studio Video Reels (3 Auto-advancing reels with sound, reserve & inquiry) */}
      <RevealOnScroll direction="up" delayMs={80}>
        <MotionReelsSection onQuickView={handleOpenModal} />
      </RevealOnScroll>

      {/* 4. Main Catalog Gallery Section */}
      <section id="catalog-section" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Gallery Title & Context */}
        <RevealOnScroll direction="up" delayMs={100}>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-100 text-neutral-800 text-xs font-mono font-semibold uppercase tracking-wider mb-3 border border-neutral-200/90 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Showroom Collection • {catalogStats.total} Menswear Pieces</span>
            </div>

            <h2 className="editorial-headline text-3xl sm:text-5xl font-black text-neutral-950 tracking-tight">
              Curated Men&apos;s Wardrobe
            </h2>

            <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto">
              Every garment in our Kavoor store is strictly organized below into T-Shirts, Shirts, Pants, and Outfits. Browse crisp button-downs, premium denim &amp; chinos, relaxed tees, and styled sets with prominent visual previews.
            </p>
          </div>
        </RevealOnScroll>

        {/* Filter Bar */}
        <RevealOnScroll direction="up" delayMs={150}>
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
        </RevealOnScroll>

        {/* Prominent Grid of Items */}
        {filteredItems.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-7">
              {displayedItems.map((item, idx) => (
                <RevealOnScroll
                  key={item.id}
                  direction="up"
                  delayMs={Math.min((idx % 4) * 80, 240)}
                >
                  <CatalogCard
                    item={item}
                    onQuickView={handleOpenModal}
                  />
                </RevealOnScroll>
              ))}
            </div>

            {/* Load More Button using signature PillButton */}
            {visibleCount < filteredItems.length && (
              <RevealOnScroll direction="up" delayMs={100} className="mt-14 text-center">
                <PillButton
                  onClick={() => setVisibleCount((prev) => prev + 24)}
                  variant="dark"
                  size="lg"
                >
                  Load More Pieces ({displayedItems.length} of {filteredItems.length})
                </PillButton>
              </RevealOnScroll>
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
            <div className="mt-6">
              <PillButton onClick={resetFilters} variant="dark" size="md">
                Reset All Filters
              </PillButton>
            </div>
          </div>
        )}
      </section>

      {/* 5. Value Propositions Strip with Scroll Reveal */}
      <RevealOnScroll direction="up" delayMs={100}>
        <ValueProps />
      </RevealOnScroll>

      {/* 6. Dark Bento Section with Scroll Reveal */}
      <RevealOnScroll direction="up" delayMs={100}>
        <DarkBentoSection />
      </RevealOnScroll>

      {/* 6. Dedicated Events, Festival Campaigns & Showroom Section */}
      <EventsSection />
      {/* 7. Visit Store Section with Live Map & Hours */}
      <RevealOnScroll direction="up" delayMs={100}>
        <VisitStoreSection />
      </RevealOnScroll>

      {/* 8. Quick View Full Modal */}
      <CatalogModal
        item={modalItem}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
