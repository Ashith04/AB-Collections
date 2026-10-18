"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/data/products";
import { HeroSection } from "@/components/home/HeroSection";
import { LiveFilterBar } from "@/components/home/LiveFilterBar";
import { ProductCard } from "@/components/product/ProductCard";
import { ColorStorySection } from "@/components/home/ColorStorySection";
import { DarkBentoSection } from "@/components/home/DarkBentoSection";
import { MarqueeStrip } from "@/components/home/MarqueeStrip";
import { ValueProps } from "@/components/home/ValueProps";
import { InstagramGrid } from "@/components/home/InstagramGrid";
import { VisitStoreSection } from "@/components/home/VisitStoreSection";

export default function HomePage() {
  // Live filter state for the home page catalog
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSize, setSelectedSize] = useState("All");
  const [selectedColor, setSelectedColor] = useState("All");
  const [maxPrice, setMaxPrice] = useState(3000);
  const [searchQuery, setSearchQuery] = useState("");

  const resetFilters = () => {
    setSelectedCategory("All");
    setSelectedSize("All");
    setSelectedColor("All");
    setMaxPrice(3000);
    setSearchQuery("");
  };

  // Filter products live
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Category filter
      if (selectedCategory !== "All" && p.category !== selectedCategory) {
        return false;
      }
      // Size filter
      if (selectedSize !== "All" && !p.sizes.includes(selectedSize as any)) {
        return false;
      }
      // Color filter
      if (selectedColor !== "All") {
        const hasColor = p.colors.some((c) =>
          c.name.toLowerCase().includes(selectedColor.toLowerCase())
        );
        if (!hasColor) return false;
      }
      // Price filter
      if (p.price > maxPrice) {
        return false;
      }
      // Search Query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matches =
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.code.toLowerCase().includes(q) ||
          p.fabric.toLowerCase().includes(q);
        if (!matches) return false;
      }
      return true;
    });
  }, [selectedCategory, selectedSize, selectedColor, maxPrice, searchQuery]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Interactive Live Filter Bar & Live Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <LiveFilterBar
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          selectedSize={selectedSize}
          onSelectSize={setSelectedSize}
          selectedColor={selectedColor}
          onSelectColor={setSelectedColor}
          maxPrice={maxPrice}
          onSelectMaxPrice={setMaxPrice}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          totalResults={filteredProducts.length}
          onReset={resetFilters}
        />

        {/* Live Filtered Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-neutral-50 dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 p-8">
            <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
              No outfits match your exact filter criteria
            </h3>
            <p className="text-xs text-neutral-500 mt-1 max-w-sm mx-auto">
              Try adjusting your price range or clearing selected category and color chips.
            </p>
            <button
              onClick={resetFilters}
              className="mt-4 px-5 py-2.5 rounded-full text-xs font-bold bg-black text-white dark:bg-white dark:text-black hover:scale-105 transition-all"
            >
              Reset All Filters
            </button>
          </div>
        )}

        <div className="flex justify-center mt-12">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-black dark:border-white text-xs font-bold uppercase tracking-wider hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
          >
            <span>View Full Catalog &amp; Filter Drawer</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 3. Colour-Story Showcase */}
      <ColorStorySection />

      {/* 4. Full-Bleed Dark Obsidian Bento Section */}
      <DarkBentoSection />

      {/* 5. Continuous Marquee Ticker */}
      <MarqueeStrip />

      {/* 6. Four Value Pillars */}
      <ValueProps />

      {/* 7. Instagram Grid */}
      <InstagramGrid />

      {/* 8. Visit Us in Kavoor Section */}
      <VisitStoreSection />
    </div>
  );
}
