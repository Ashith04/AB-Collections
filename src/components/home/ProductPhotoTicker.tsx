"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { ArrowUpRight, Heart, ShoppingBag } from "lucide-react";
import { catalogItems, CatalogItem } from "@/data/catalog";
import { useWishlist } from "@/context/WishlistContext";
import { useReserve } from "@/context/ReserveContext";
import { catalogItemToProduct } from "@/utils/catalogAdapter";

interface ProductPhotoTickerProps {
  onQuickView?: (item: CatalogItem) => void;
}

export const ProductPhotoTicker: React.FC<ProductPhotoTickerProps> = ({ onQuickView }) => {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToReserve } = useReserve();

  // Curate 12 standout, high-quality shirts and outfits for the slow auto-moving ribbon
  const tickerItems = useMemo(() => {
    const selected = [
      "ab-001",
      "ab-005",
      "ab-009",
      "ab-015",
      "ab-020",
      "ab-025",
      "ab-030",
      "ab-035",
      "ab-040",
      "ab-045",
      "ab-050",
      "ab-055",
    ];
    const found = catalogItems.filter((item) => selected.includes(item.id) && item.mediaType === "image");
    return found.length >= 8 ? found : catalogItems.filter((i) => i.mediaType === "image").slice(0, 12);
  }, []);

  return (
    <div className="w-full bg-neutral-950 py-4 overflow-hidden select-none border-b border-neutral-900 group/ticker">
      {/* Top subtle label */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-2.5 flex items-center justify-between text-[11px] font-mono text-neutral-400">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          <span className="uppercase tracking-widest font-semibold text-neutral-300">
            Trending In Kavoor Showroom
          </span>
        </div>
        <span className="text-[10px] text-neutral-400 hidden sm:inline">
          Auto-sliding • Hover to pause
        </span>
      </div>

      {/* Infinite Slow Auto-Moving Carousel Track (Flipkart / Amazon Style) */}
      <div className="flex w-max animate-ticker gap-4 hover:[animation-play-state:paused]">
        {/* Render twice for continuous, seamless infinite loop */}
        {[...tickerItems, ...tickerItems].map((item, idx) => {
          const isLiked = isInWishlist(item.id);
          return (
            <div
              key={`${item.id}-${idx}`}
              onClick={() => onQuickView && onQuickView(item)}
              className="relative w-44 sm:w-52 flex-shrink-0 bg-neutral-900/90 rounded-2xl border border-neutral-800/90 p-2.5 hover:border-neutral-700 transition-all duration-300 cursor-pointer shadow-md group/card flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative aspect-3/4 rounded-xl overflow-hidden bg-neutral-950 mb-2">
                <Image
                  src={item.mediaUrl}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 176px, 208px"
                  className="object-cover group-hover/card:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Category Pill */}
                <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-black/75 backdrop-blur-md text-white text-[9px] font-mono uppercase tracking-wider font-semibold border border-white/10">
                  {item.category}
                </span>

                {/* Quick Like Action */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(catalogItemToProduct(item));
                  }}
                  aria-label={isLiked ? "Saved in Favorites" : "Save to Favorites"}
                  className={`absolute top-2 right-2 w-7 h-7 rounded-full flex items-center justify-center backdrop-blur-md transition-transform hover:scale-110 cursor-pointer ${
                    isLiked
                      ? "bg-white text-red-500 shadow-sm"
                      : "bg-black/60 text-white hover:text-red-400"
                  }`}
                  title={isLiked ? "Saved in Favorites" : "Save to Favorites"}
                >
                  <Heart className={`w-3.5 h-3.5 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
                </button>
              </div>

              {/* Item Info */}
              <div className="px-1 pt-1">
                <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 mb-0.5">
                  <span>{item.code}</span>
                  <span className="text-neutral-300 font-medium">{item.fit}</span>
                </div>
                <h4 className="text-xs font-bold text-white line-clamp-1 group-hover/card:text-neutral-200 transition-colors">
                  {item.name}
                </h4>

                <div className="mt-2 pt-2 border-t border-neutral-800/80 flex items-center justify-between text-[10px] text-neutral-400">
                  <span className="truncate max-w-[120px]">{item.fabric}</span>
                  <span className="inline-flex items-center gap-0.5 text-white font-semibold group-hover/card:translate-x-0.5 transition-transform">
                    <span>Inspect</span>
                    <ArrowUpRight className="w-2.5 h-2.5" />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
