"use client";

import React, { useState } from "react";
import { Filter, Search, X, Check, ChevronDown, RotateCcw } from "lucide-react";
import { productCategories } from "@/data/products";

interface LiveFilterBarProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  selectedSize: string;
  onSelectSize: (size: string) => void;
  selectedColor: string;
  onSelectColor: (color: string) => void;
  maxPrice: number;
  onSelectMaxPrice: (price: number) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalResults: number;
  onReset: () => void;
}

const AVAILABLE_SIZES = ["All", "S", "M", "L", "XL", "XXL"];

const COLOR_CHIPS = [
  { name: "All", hex: "#ffffff" },
  { name: "Black", hex: "#171717" },
  { name: "Olive", hex: "#4b5320" },
  { name: "Maroon", hex: "#7f1d1d" },
  { name: "Amber", hex: "#d97706" },
  { name: "Sand", hex: "#d4b996" },
  { name: "Navy", hex: "#1e3a8a" },
];

export const LiveFilterBar: React.FC<LiveFilterBarProps> = ({
  selectedCategory,
  onSelectCategory,
  selectedSize,
  onSelectSize,
  selectedColor,
  onSelectColor,
  maxPrice,
  onSelectMaxPrice,
  searchQuery,
  onSearchChange,
  totalResults,
  onReset,
}) => {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [sizeOpen, setSizeOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);

  const hasActiveFilters =
    selectedCategory !== "All" ||
    selectedSize !== "All" ||
    selectedColor !== "All" ||
    maxPrice < 3000 ||
    searchQuery !== "";

  return (
    <div className="w-full bg-[#f8f8f8] dark:bg-neutral-900/60 rounded-3xl p-4 sm:p-6 border border-neutral-200/80 dark:border-neutral-800 shadow-xs mb-10">
      {/* Top Header Row: "Filter by" at Left, "Search" at Right */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200 dark:border-neutral-800">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-neutral-800 dark:text-neutral-200" />
            <h2 className="editorial-headline text-lg sm:text-xl font-bold uppercase tracking-tight text-neutral-900 dark:text-neutral-100">
              Filter by
            </h2>
          </div>
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
            {totalResults} {totalResults === 1 ? "Outfit" : "Outfits"}
          </span>

          {hasActiveFilters && (
            <button suppressHydrationWarning
              onClick={onReset}
              className="flex items-center gap-1 text-xs text-neutral-900 dark:text-neutral-100 font-semibold underline underline-offset-4 ml-2 cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          )}
        </div>

        {/* Search Input on the Right */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input suppressHydrationWarning
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Live search by name, code..."
            className="w-full bg-white dark:bg-neutral-800 pl-9 pr-8 py-2 rounded-full text-xs font-medium text-neutral-900 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-700 focus:outline-none focus:border-black dark:focus:border-white shadow-xs"
          />
          {searchQuery && (
            <button suppressHydrationWarning
              onClick={() => onSearchChange("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Row of Filter Dropdown Pills */}
      <div className="flex flex-wrap items-center gap-3 pt-4">
        {/* Category Pill Dropdown */}
        <div className="relative">
          <button suppressHydrationWarning
            onClick={() => {
              setCategoryOpen(!categoryOpen);
              setSizeOpen(false);
              setPriceOpen(false);
            }}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all border ${
              selectedCategory !== "All"
                ? "bg-black text-white dark:bg-white dark:text-black border-transparent"
                : "bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border-neutral-200 dark:border-neutral-700 hover:border-black"
            }`}
          >
            <span>Category: {selectedCategory}</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </button>

          {categoryOpen && (
            <div className="absolute left-0 mt-2 z-30 w-56 bg-white dark:bg-neutral-900 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-800 p-2 max-h-64 overflow-y-auto">
              {productCategories.map((cat) => (
                <button suppressHydrationWarning
                  key={cat}
                  onClick={() => {
                    onSelectCategory(cat);
                    setCategoryOpen(false);
                  }}
                  className={`w-full text-left px-3 py-1.5 rounded-xl text-xs font-medium flex items-center justify-between ${
                    selectedCategory === cat
                      ? "bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white font-bold"
                      : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
                  }`}
                >
                  <span>{cat}</span>
                  {selectedCategory === cat && <Check className="w-3.5 h-3.5 text-neutral-900 dark:text-white" />}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Size Pill Dropdown */}
        <div className="relative">
          <button suppressHydrationWarning
            onClick={() => {
              setSizeOpen(!sizeOpen);
              setCategoryOpen(false);
              setPriceOpen(false);
            }}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all border ${
              selectedSize !== "All"
                ? "bg-black text-white dark:bg-white dark:text-black border-transparent"
                : "bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border-neutral-200 dark:border-neutral-700 hover:border-black"
            }`}
          >
            <span>Size: {selectedSize}</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </button>

          {sizeOpen && (
            <div className="absolute left-0 mt-2 z-30 w-36 bg-white dark:bg-neutral-900 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-800 p-2">
              {AVAILABLE_SIZES.map((size) => (
                <button suppressHydrationWarning
                  key={size}
                  onClick={() => {
                    onSelectSize(size);
                    setSizeOpen(false);
                  }}
                  className={`w-full text-left px-3 py-1.5 rounded-xl text-xs font-medium flex items-center justify-between ${
                    selectedSize === size
                      ? "bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white font-bold"
                      : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
                  }`}
                >
                  <span>{size}</span>
                  {selectedSize === size && <Check className="w-3.5 h-3.5 text-neutral-900 dark:text-white" />}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Price Filter Pill */}
        <div className="relative">
          <button suppressHydrationWarning
            onClick={() => {
              setPriceOpen(!priceOpen);
              setCategoryOpen(false);
              setSizeOpen(false);
            }}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all border ${
              maxPrice < 3000
                ? "bg-black text-white dark:bg-white dark:text-black border-transparent"
                : "bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border-neutral-200 dark:border-neutral-700 hover:border-black"
            }`}
          >
            <span>Under ₹{maxPrice.toLocaleString("en-IN")}</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </button>

          {priceOpen && (
            <div className="absolute left-0 mt-2 z-30 w-64 bg-white dark:bg-neutral-900 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-800 p-4">
              <div className="flex justify-between items-center text-xs font-semibold mb-2">
                <span className="text-neutral-500">Max Budget:</span>
                <span className="text-black dark:text-white">₹{maxPrice.toLocaleString("en-IN")}</span>
              </div>
              <input suppressHydrationWarning
                type="range"
                min="800"
                max="3000"
                step="100"
                value={maxPrice}
                onChange={(e) => onSelectMaxPrice(Number(e.target.value))}
                className="w-full accent-neutral-900 dark:accent-white cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-neutral-400 mt-1">
                <span>₹800</span>
                <span>₹3,000+</span>
              </div>
            </div>
          )}
        </div>

        {/* Color Chips with ✓ Indicator */}
        <div className="flex items-center gap-1.5 ml-auto overflow-x-auto py-1">
          <span className="text-xs font-medium text-neutral-400 mr-1 hidden sm:inline">
            Colour:
          </span>
          {COLOR_CHIPS.map((chip) => {
            const isSelected = selectedColor.toLowerCase() === chip.name.toLowerCase();
            return (
              <button suppressHydrationWarning
                key={chip.name}
                onClick={() => onSelectColor(isSelected ? "All" : chip.name)}
                title={chip.name}
                className={`relative w-7 h-7 rounded-full flex items-center justify-center border transition-all ${
                  isSelected
                    ? "ring-2 ring-black dark:ring-white scale-110 shadow-sm"
                    : "opacity-80 hover:opacity-100 border-neutral-300 dark:border-neutral-700"
                }`}
                style={{
                  backgroundColor: chip.hex,
                }}
              >
                {isSelected && (
                  <Check
                    className={`w-3.5 h-3.5 ${
                      chip.name === "All" || chip.name === "Sand" ? "text-black" : "text-white"
                    }`}
                  />
                )}
                {chip.name === "All" && !isSelected && (
                  <span className="text-[9px] font-bold text-neutral-600">All</span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
