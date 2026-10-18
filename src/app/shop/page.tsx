"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Filter,
  Grid,
  List,
  SlidersHorizontal,
  X,
  RotateCcw,
  Star,
  Check,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";
import { products, productCategories } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { Product, ProductFit } from "@/types";

const FITS: ProductFit[] = ["Slim Fit", "Regular Fit", "Relaxed Fit", "Oversized"];
const SIZES = ["S", "M", "L", "XL", "XXL"];
const COLORS = [
  { name: "Black", hex: "#171717" },
  { name: "Olive", hex: "#4b5320" },
  { name: "Maroon", hex: "#7f1d1d" },
  { name: "Amber", hex: "#d97706" },
  { name: "Sand", hex: "#d4b996" },
  { name: "Navy", hex: "#1e3a8a" },
];

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";
  const initialStory = searchParams.get("story") || "";

  const [category, setCategory] = useState<string>(initialCategory);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedFits, setSelectedFits] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState<number>(3000);
  const [sortBy, setSortBy] = useState<string>("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [mobileFilterOpen, setMobileFilterOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const resetAllFilters = () => {
    setCategory("All");
    setSelectedSizes([]);
    setSelectedColors([]);
    setSelectedFits([]);
    setMaxPrice(3000);
    setSearchQuery("");
    setSortBy("featured");
  };

  const toggleSize = (sz: string) => {
    setSelectedSizes((prev) =>
      prev.includes(sz) ? prev.filter((s) => s !== sz) : [...prev, sz]
    );
  };

  const toggleColor = (clr: string) => {
    setSelectedColors((prev) =>
      prev.includes(clr) ? prev.filter((c) => c !== clr) : [...prev, clr]
    );
  };

  const toggleFit = (fit: string) => {
    setSelectedFits((prev) =>
      prev.includes(fit) ? prev.filter((f) => f !== fit) : [...prev, fit]
    );
  };

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    let result = products.filter((p) => {
      // Story filter (if navigated from color story)
      if (initialStory && p.colorStory !== initialStory) {
        // Only if category is not overridden
        if (category === "All") return false;
      }
      // Category filter
      if (category !== "All" && p.category !== category) {
        return false;
      }
      // Size filter
      if (selectedSizes.length > 0) {
        const matchesSize = selectedSizes.some((s) => p.sizes.includes(s as any));
        if (!matchesSize) return false;
      }
      // Color filter
      if (selectedColors.length > 0) {
        const matchesColor = selectedColors.some((selected) =>
          p.colors.some((c) => c.name.toLowerCase().includes(selected.toLowerCase()))
        );
        if (!matchesColor) return false;
      }
      // Fit filter
      if (selectedFits.length > 0 && !selectedFits.includes(p.fit)) {
        return false;
      }
      // Price filter
      if (p.price > maxPrice) {
        return false;
      }
      // Search
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

    // Sorting
    if (sortBy === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "newest") {
      result.sort((a, b) => (b.badge === "New" ? 1 : 0) - (a.badge === "New" ? 1 : 0));
    }

    return result;
  }, [
    category,
    selectedSizes,
    selectedColors,
    selectedFits,
    maxPrice,
    searchQuery,
    sortBy,
    initialStory,
  ]);

  const activeFiltersCount =
    (category !== "All" ? 1 : 0) +
    selectedSizes.length +
    selectedColors.length +
    selectedFits.length +
    (maxPrice < 3000 ? 1 : 0) +
    (searchQuery ? 1 : 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-neutral-200 dark:border-neutral-800">
        <div>
          <span className="text-xs uppercase tracking-widest text-amber-500 font-bold">
            Catalogue // Men&apos;s Exclusive
          </span>
          <h1 className="editorial-headline text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-neutral-900 dark:text-neutral-50 mt-1">
            The Kavoor Wardrobe
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 mt-2 max-w-lg">
            Showing all current in-store articles available for physical trial and WhatsApp holds at our Kavoor showroom.
          </p>
        </div>

        {/* View Mode & Mobile Filter Trigger */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileFilterOpen(true)}
            className="md:hidden flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black text-xs font-bold"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Filters ({activeFiltersCount})</span>
          </button>

          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 text-xs font-semibold px-4 py-2.5 pr-8 rounded-full border border-neutral-200 dark:border-neutral-800 focus:outline-none cursor-pointer"
            >
              <option value="featured">Sort: Featured</option>
              <option value="newest">Sort: Newest First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-neutral-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          {/* Grid / List View Toggle */}
          <div className="hidden sm:flex items-center bg-neutral-100 dark:bg-neutral-900 rounded-full p-1 border border-neutral-200 dark:border-neutral-800">
            <button
              onClick={() => setViewMode("grid")}
              aria-label="Grid View"
              className={`p-1.5 rounded-full transition-colors ${
                viewMode === "grid"
                  ? "bg-white dark:bg-black text-black dark:text-white shadow-xs"
                  : "text-neutral-400 hover:text-black dark:hover:text-white"
              }`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              aria-label="List View"
              className={`p-1.5 rounded-full transition-colors ${
                viewMode === "list"
                  ? "bg-white dark:bg-black text-black dark:text-white shadow-xs"
                  : "text-neutral-400 hover:text-black dark:hover:text-white"
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Body: Desktop Sidebar + Product Results */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-10">
        {/* Desktop Filter Sidebar */}
        <aside className="hidden md:block md:col-span-3 space-y-8 pr-4">
          <div className="flex items-center justify-between pb-3 border-b border-neutral-200 dark:border-neutral-800">
            <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
              <Filter className="w-4 h-4 text-amber-500" />
              <span>Filters</span>
            </h2>
            {activeFiltersCount > 0 && (
              <button
                onClick={resetAllFilters}
                className="text-xs text-amber-600 hover:text-amber-700 font-semibold underline"
              >
                Clear all ({activeFiltersCount})
              </button>
            )}
          </div>

          {/* Category Filter */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
              Categories
            </h3>
            <div className="space-y-1.5 text-xs">
              {productCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`w-full text-left px-3 py-1.5 rounded-xl font-medium transition-colors flex items-center justify-between ${
                    category === cat
                      ? "bg-black text-white dark:bg-white dark:text-black font-bold"
                      : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  }`}
                >
                  <span>{cat}</span>
                  {category === cat && <Check className="w-3.5 h-3.5" />}
                </button>
              ))}
            </div>
          </div>

          {/* Fit Filter */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
              Silhouette / Fit
            </h3>
            <div className="space-y-1.5 text-xs">
              {FITS.map((fit) => {
                const active = selectedFits.includes(fit);
                return (
                  <button
                    key={fit}
                    onClick={() => toggleFit(fit)}
                    className={`w-full text-left px-3 py-1.5 rounded-xl font-medium transition-colors flex items-center justify-between ${
                      active
                        ? "bg-amber-500/20 text-amber-700 dark:text-amber-300 font-bold"
                        : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                    }`}
                  >
                    <span>{fit}</span>
                    {active && <Check className="w-3.5 h-3.5 text-amber-600" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Size Filter */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
              Size
            </h3>
            <div className="flex flex-wrap gap-2">
              {SIZES.map((sz) => {
                const active = selectedSizes.includes(sz);
                return (
                  <button
                    key={sz}
                    onClick={() => toggleSize(sz)}
                    className={`w-10 h-10 rounded-xl text-xs font-bold transition-all border ${
                      active
                        ? "bg-black text-white dark:bg-white dark:text-black border-transparent shadow-xs"
                        : "border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:border-black"
                    }`}
                  >
                    {sz}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Color Filter */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
              Colour Family
            </h3>
            <div className="flex flex-wrap gap-2">
              {COLORS.map((clr) => {
                const active = selectedColors.includes(clr.name);
                return (
                  <button
                    key={clr.name}
                    onClick={() => toggleColor(clr.name)}
                    className={`relative w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                      active
                        ? "ring-2 ring-black dark:ring-white scale-110"
                        : "border-neutral-300 dark:border-neutral-700 opacity-80 hover:opacity-100"
                    }`}
                    style={{ backgroundColor: clr.hex }}
                    title={clr.name}
                  >
                    {active && (
                      <Check
                        className={`w-4 h-4 ${
                          clr.name === "Sand" ? "text-black" : "text-white"
                        }`}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Max Price Range */}
          <div>
            <div className="flex justify-between items-center text-xs font-bold mb-2">
              <span className="uppercase text-neutral-400">Max Budget</span>
              <span className="text-black dark:text-white">₹{maxPrice.toLocaleString("en-IN")}</span>
            </div>
            <input
              type="range"
              min="800"
              max="3000"
              step="100"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer"
            />
          </div>
        </aside>

        {/* Right Area: Results Grid / List */}
        <main className="md:col-span-9">
          {/* Active Filter Chips Bar */}
          <div className="flex flex-wrap items-center gap-2 mb-6 text-xs">
            <span className="text-neutral-400 font-semibold mr-1">
              Showing {filteredProducts.length} results:
            </span>

            {category !== "All" && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
                <span>Category: {category}</span>
                <button onClick={() => setCategory("All")}>
                  <X className="w-3 h-3 hover:text-red-500" />
                </button>
              </span>
            )}

            {selectedSizes.map((sz) => (
              <span
                key={sz}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200"
              >
                <span>Size: {sz}</span>
                <button onClick={() => toggleSize(sz)}>
                  <X className="w-3 h-3 hover:text-red-500" />
                </button>
              </span>
            ))}

            {selectedColors.map((clr) => (
              <span
                key={clr}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200"
              >
                <span>Color: {clr}</span>
                <button onClick={() => toggleColor(clr)}>
                  <X className="w-3 h-3 hover:text-red-500" />
                </button>
              </span>
            ))}

            {selectedFits.map((fit) => (
              <span
                key={fit}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200"
              >
                <span>{fit}</span>
                <button onClick={() => toggleFit(fit)}>
                  <X className="w-3 h-3 hover:text-red-500" />
                </button>
              </span>
            ))}

            {maxPrice < 3000 && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
                <span>≤ ₹{maxPrice}</span>
                <button onClick={() => setMaxPrice(3000)}>
                  <X className="w-3 h-3 hover:text-red-500" />
                </button>
              </span>
            )}

            {activeFiltersCount > 0 && (
              <button
                onClick={resetAllFilters}
                className="text-xs text-amber-600 hover:text-amber-700 font-semibold underline ml-2"
              >
                Reset all
              </button>
            )}
          </div>

          {/* Product View */}
          {filteredProducts.length > 0 ? (
            viewMode === "grid" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              /* List View */
              <div className="space-y-4">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="p-4 sm:p-6 rounded-3xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-4 w-full sm:w-auto">
                      <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-white dark:bg-neutral-800 shrink-0">
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono uppercase text-neutral-400">
                            {product.code}
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold">
                            {product.fit}
                          </span>
                        </div>
                        <Link href={`/product/${product.slug}`}>
                          <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100 hover:text-amber-500 transition-colors">
                            {product.name}
                          </h3>
                        </Link>
                        <p className="text-xs text-neutral-500 mt-1 line-clamp-1">
                          {product.fabric}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
                      <div className="text-right">
                        <span className="text-lg font-extrabold text-neutral-900 dark:text-neutral-100 block">
                          ₹{product.price.toLocaleString("en-IN")}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-amber-500">
                          <Star className="w-3 h-3 fill-amber-500" />
                          <span>{product.rating}</span>
                        </div>
                      </div>

                      <Link
                        href={`/product/${product.slug}`}
                        className="px-5 py-2.5 rounded-full bg-black text-white dark:bg-white dark:text-black text-xs font-bold hover:scale-105 transition-transform flex items-center gap-1"
                      >
                        <span>Reserve</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )
          ) : (
            <div className="text-center py-20 bg-neutral-50 dark:bg-neutral-900 rounded-3xl p-8 border border-neutral-200 dark:border-neutral-800">
              <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
                No matching articles found
              </h3>
              <p className="text-xs text-neutral-500 mt-1 max-w-sm mx-auto">
                Try loosening your filter parameters or exploring other categories.
              </p>
              <button
                onClick={resetAllFilters}
                className="mt-4 px-6 py-2.5 rounded-full text-xs font-bold bg-black text-white dark:bg-white dark:text-black"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </main>
      </div>

      {/* Mobile Filter Drawer Modal */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-sm sm:items-center">
          <div className="w-full max-w-md bg-white dark:bg-neutral-900 rounded-t-3xl sm:rounded-3xl p-6 max-h-[85vh] overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-100 dark:border-neutral-800">
              <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
                Filter Outfits
              </h3>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="p-1 rounded-full text-neutral-400 hover:text-black dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 space-y-6">
              {/* Category */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                  Category
                </h4>
                <div className="flex flex-wrap gap-2">
                  {productCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setCategory(cat)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                        category === cat
                          ? "bg-black text-white dark:bg-white dark:text-black"
                          : "bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                  Size
                </h4>
                <div className="flex gap-2">
                  {SIZES.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => toggleSize(sz)}
                      className={`w-10 h-10 rounded-xl text-xs font-bold border ${
                        selectedSizes.includes(sz)
                          ? "bg-black text-white dark:bg-white dark:text-black"
                          : "border-neutral-300 dark:border-neutral-700"
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex gap-3">
              <button
                onClick={resetAllFilters}
                className="flex-1 py-3 rounded-full text-xs font-bold border border-neutral-300 dark:border-neutral-700"
              >
                Reset
              </button>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="flex-1 py-3 rounded-full text-xs font-bold bg-black text-white dark:bg-white dark:text-black"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-xs text-neutral-400">Loading shop catalogue...</div>}>
      <ShopContent />
    </Suspense>
  );
}
