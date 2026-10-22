"use client";

import React from "react";
import { Search, X, Film, Image as ImageIcon } from "lucide-react";
import { catalogStats } from "@/data/catalog";

interface CatalogFilterBarProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  selectedMediaType: "all" | "image" | "video";
  onSelectMediaType: (type: "all" | "image" | "video") => void;
  selectedFit: string;
  onSelectFit: (fit: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  totalFiltered: number;
  onReset: () => void;
}

export const CatalogFilterBar: React.FC<CatalogFilterBarProps> = ({
  selectedCategory,
  onSelectCategory,
  selectedMediaType,
  onSelectMediaType,
  selectedFit,
  onSelectFit,
  searchQuery,
  onSearchChange,
  totalFiltered,
  onReset,
}) => {
  const categories = [
    { name: "All", count: catalogStats.total },
    { name: "T-Shirts", count: catalogStats.tShirts },
    { name: "Shirts", count: catalogStats.shirts },
    { name: "Outfits", count: catalogStats.outfits },
  ];

  const fits = ["All Fits", "Slim Fit", "Regular Fit", "Relaxed Fit", "Oversized"];

  const hasActiveFilters =
    selectedCategory !== "All" ||
    selectedMediaType !== "all" ||
    selectedFit !== "All Fits" ||
    searchQuery.trim().length > 0;

  return (
    <div className="w-full mb-10 flex flex-col gap-6">
      {/* Category Pills Header */}
      <div className="flex items-center justify-between flex-wrap gap-4 border-b border-neutral-200/80 pb-5">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none w-full sm:w-auto">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => onSelectCategory(cat.name)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? "bg-neutral-950 text-white shadow-md scale-105"
                    : "bg-neutral-100 hover:bg-neutral-200/80 text-neutral-800 border border-neutral-200/80"
                }`}
              >
                <span>{cat.name}</span>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full font-mono ${
                    isSelected
                      ? "bg-white/20 text-white"
                      : "bg-black/5 text-neutral-600 font-semibold"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Media Type Filter (Photos / Videos) */}
        <div className="flex items-center gap-1.5 p-1 bg-neutral-100 rounded-full border border-neutral-200/80">
          <button
            onClick={() => onSelectMediaType("all")}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              selectedMediaType === "all"
                ? "bg-white text-neutral-950 shadow-xs"
                : "text-neutral-600 hover:text-neutral-950"
            }`}
          >
            All Media ({catalogStats.total})
          </button>
          <button
            onClick={() => onSelectMediaType("image")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              selectedMediaType === "image"
                ? "bg-white text-neutral-950 shadow-xs"
                : "text-neutral-600 hover:text-neutral-950"
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Photos ({catalogStats.images})</span>
          </button>
          <button
            onClick={() => onSelectMediaType("video")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              selectedMediaType === "video"
                ? "bg-white text-neutral-950 shadow-xs"
                : "text-neutral-600 hover:text-neutral-950"
            }`}
          >
            <Film className="w-3.5 h-3.5" />
            <span>Reels ({catalogStats.videos})</span>
          </button>
        </div>
      </div>

      {/* Search & Sub-filters Row */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative w-full sm:max-w-md">
          <Search className="w-4 h-4 text-neutral-500 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search shirts, tees, outfits, fabrics..."
            className="w-full pl-11 pr-10 py-2.5 rounded-full bg-neutral-100/90 border border-neutral-200 focus:border-neutral-950 focus:bg-white text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-500 outline-none transition-all shadow-2xs"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange("")}
              aria-label="Clear search"
              className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-neutral-400 hover:text-neutral-800"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Fit Selector & Reset */}
        <div className="flex items-center justify-between w-full sm:w-auto gap-3">
          <div className="flex items-center gap-1.5 overflow-x-auto">
            {fits.map((fit) => {
              const isSelected = selectedFit === fit;
              return (
                <button
                  key={fit}
                  onClick={() => onSelectFit(fit)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                    isSelected
                      ? "bg-neutral-950 text-white shadow-xs font-semibold"
                      : "bg-white hover:bg-neutral-100 text-neutral-800 border border-neutral-200/90 shadow-2xs"
                  }`}
                >
                  {fit}
                </button>
              );
            })}
          </div>

          {hasActiveFilters && (
            <button
              onClick={onReset}
              className="text-xs font-semibold text-neutral-600 hover:text-neutral-950 underline underline-offset-4 shrink-0 transition-colors ml-2 cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Results Header Count */}
      <div className="flex items-center justify-between text-xs text-neutral-700 px-1 font-medium">
        <span>
          Showing <strong className="text-neutral-950 font-bold">{totalFiltered}</strong> menswear pieces
          {selectedCategory !== "All" && ` in ${selectedCategory}`}
          {selectedMediaType !== "all" && ` (${selectedMediaType === "video" ? "Videos only" : "Photos only"})`}
        </span>

        <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full border border-neutral-200/90 font-semibold shadow-2xs">
          In-Store Exclusive • Kavoor, Mangalore
        </span>
      </div>
    </div>
  );
};
