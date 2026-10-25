"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { ArrowUpRight, Heart } from "lucide-react";
import { catalogItems, CatalogItem } from "@/data/catalog";
import { useWishlist } from "@/context/WishlistContext";
import { catalogItemToProduct } from "@/utils/catalogAdapter";

interface ProductPhotoTickerProps {
  onQuickView?: (item: CatalogItem) => void;
}

export const ProductPhotoTicker: React.FC<ProductPhotoTickerProps> = ({ onQuickView }) => {
  const { isInWishlist, toggleWishlist } = useWishlist();

  // Curate 16 standout high-res shirts, tees, and outfits for the slow auto-moving ribbon
  const tickerItems = useMemo(() => {
    const selectedIds = [
      "ab-001", "ab-003", "ab-005", "ab-007",
      "ab-009", "ab-012", "ab-015", "ab-018",
      "ab-020", "ab-023", "ab-025", "ab-028",
      "ab-030", "ab-035", "ab-040", "ab-045",
    ];
    const picked = catalogItems.filter(
      (item) => selectedIds.includes(item.id) && item.mediaType === "image"
    );
    return picked.length >= 8
      ? picked
      : catalogItems.filter((i) => i.mediaType === "image").slice(0, 16);
  }, []);

  return (
    <section className="w-full bg-[#0a0a0a] py-5 overflow-hidden select-none border-b border-neutral-800 relative">
      {/* Scoped CSS animation to guarantee immediate auto-moving playback */}
      <style>{`
        @keyframes abPhotoScroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .ab-ticker-track {
          display: flex;
          width: max-content;
          animation: abPhotoScroll 36s linear infinite;
          will-change: transform;
        }
        .ab-ticker-track:hover {
          animation-play-state: paused !important;
        }
      `}</style>

      {/* Header Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-3 flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-white shadow-xs" />
          <span className="uppercase tracking-widest font-bold text-white text-[11px] sm:text-xs">
            Trending In Kavoor Showroom
          </span>
          <span className="px-2 py-0.5 rounded-full bg-neutral-900 border border-neutral-700 text-neutral-300 text-[10px] hidden sm:inline">
            Live Stream
          </span>
        </div>

        <div className="flex items-center gap-3 text-neutral-400 text-[11px]">
          <span className="hidden sm:inline">
            Auto-sliding • Hover to freeze
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 font-semibold">
            16 Showcase Looks
          </span>
        </div>
      </div>

      {/* Infinite Auto-Moving Product Photo Ribbon (Flipkart / Amazon Style) */}
      <div className="ab-ticker-track flex gap-4 pl-4">
        {/* Render twice for continuous, seamless infinite loop */}
        {[...tickerItems, ...tickerItems].map((item, idx) => {
          const isLiked = isInWishlist(item.id);
          return (
            <div
              key={`${item.id}-${idx}`}
              onClick={() => onQuickView && onQuickView(item)}
              className="relative w-48 sm:w-56 flex-shrink-0 bg-[#121212] rounded-2xl border border-neutral-800/90 p-2.5 hover:border-neutral-500 transition-all duration-300 cursor-pointer shadow-lg group/card flex flex-col justify-between hover:scale-[1.02]"
            >
              {/* Image Container */}
              <div className="relative aspect-3/4 rounded-xl overflow-hidden bg-neutral-950 mb-2.5 border border-neutral-800">
                <Image
                  src={item.mediaUrl}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 192px, 224px"
                  className="object-cover group-hover/card:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Category Pill */}
                <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md text-white text-[9px] font-mono uppercase tracking-wider font-semibold border border-white/10 shadow-xs">
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
                  className={`absolute top-2 right-2 w-7 h-7 rounded-full flex items-center justify-center backdrop-blur-md transition-all hover:scale-110 cursor-pointer shadow-md ${
                    isLiked
                      ? "bg-white text-red-500"
                      : "bg-black/70 text-white hover:text-red-400"
                  }`}
                  title={isLiked ? "Saved in Favorites" : "Save to Favorites"}
                >
                  <Heart className={`w-3.5 h-3.5 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
                </button>
              </div>

              {/* Item Info */}
              <div className="px-1">
                <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 mb-1">
                  <span className="font-semibold text-neutral-300">{item.code}</span>
                  <span className="text-neutral-400">{item.fit}</span>
                </div>
                <h4 className="text-xs font-bold text-white line-clamp-1 group-hover/card:text-neutral-200 transition-colors">
                  {item.name}
                </h4>

                <div className="mt-2.5 pt-2 border-t border-neutral-800 flex items-center justify-between text-[10px] text-neutral-400">
                  <span className="truncate max-w-[120px] font-medium text-neutral-400">{item.fabric}</span>
                  <span className="inline-flex items-center gap-0.5 text-white font-semibold group-hover/card:translate-x-0.5 transition-transform">
                    <span>Inspect</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
