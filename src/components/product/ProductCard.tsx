"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Heart, Eye, Star } from "lucide-react";
import { Product } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { useWishlist } from "@/context/WishlistContext";
import { QuickViewModal } from "./QuickViewModal";

interface ProductCardProps {
  product: Product;
  colorTintClass?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  colorTintClass = "bg-[#f4f4f4] dark:bg-neutral-900/90",
}) => {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isFavorited = isInWishlist(product.id);

  // Derive size range display e.g. "S – XXL"
  const sizeRange =
    product.sizes.length > 1
      ? `${product.sizes[0]} – ${product.sizes[product.sizes.length - 1]}`
      : product.sizes[0] || "Standard";

  return (
    <>
      <div className="group relative flex flex-col rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800">
        {/* Card Canvas with Soft Tint & Flat-lay Presentation */}
        <div
          className={`relative w-full aspect-4/5 rounded-t-3xl overflow-hidden p-6 flex flex-col items-center justify-center transition-colors ${colorTintClass}`}
        >
          {/* Top Badges & Actions */}
          <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
            {product.badge ? (
              <Badge type={product.badge} />
            ) : (
              <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 bg-white/80 dark:bg-black/60 px-2 py-0.5 rounded-full border border-neutral-200/60 dark:border-neutral-800">
                {product.code}
              </span>
            )}

            <div className="flex items-center gap-1.5">
              {/* Quick View Button */}
              <button suppressHydrationWarning
                onClick={() => setQuickViewOpen(true)}
                aria-label="Quick View"
                className="w-8 h-8 rounded-full bg-white/90 dark:bg-black/90 hover:bg-white dark:hover:bg-black text-neutral-700 dark:text-neutral-200 flex items-center justify-center backdrop-blur-md shadow-xs opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-105 cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
              </button>

              {/* Wishlist Button */}
              <button suppressHydrationWarning
                onClick={() => toggleWishlist(product)}
                aria-label="Save to Wishlist"
                className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md shadow-xs transition-all duration-200 hover:scale-105 cursor-pointer ${
                  isFavorited
                    ? "bg-red-50 text-red-500 shadow-sm"
                    : "bg-white/90 dark:bg-black/90 text-neutral-700 dark:text-neutral-200 hover:text-red-500"
                }`}
              >
                <Heart className={`w-3.5 h-3.5 ${isFavorited ? "fill-red-500" : ""}`} />
              </button>
            </div>
          </div>

          {/* Flat-lay Apparel Image Container */}
          <Link
            href={`/product/${product.slug}`}
            className="relative w-full h-full flex items-center justify-center cursor-pointer"
          >
            <div className="relative w-full h-full max-h-[280px]">
              <Image
                src={product.images[currentImageIndex] || product.images[0]}
                alt={product.name}
                fill
                className="object-contain p-2 drop-shadow-md transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </Link>

          {/* Signature Capsule Disc Arrow Button */}
          <Link
            href={`/product/${product.slug}`}
            aria-label={`View ${product.name}`}
            className="absolute bottom-4 right-4 z-10 w-9 h-9 rounded-full bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          >
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          {/* Color variant dots (if multiple) */}
          {product.colors.length > 1 && (
            <div className="absolute bottom-4 left-4 z-10 flex items-center gap-1.5 bg-white/80 dark:bg-black/80 backdrop-blur-md px-2 py-1 rounded-full border border-black/5 dark:border-white/10">
              {product.colors.map((color) => (
                <button suppressHydrationWarning
                  key={color.name}
                  onClick={(e) => {
                    e.preventDefault();
                    if (color.image) {
                      const foundIdx = product.images.indexOf(color.image);
                      if (foundIdx >= 0) setCurrentImageIndex(foundIdx);
                    }
                  }}
                  title={color.name}
                  className="w-3 h-3 rounded-full border border-black/20 hover:scale-125 transition-transform cursor-pointer"
                  style={{ backgroundColor: color.hex }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Info Bar at the Bottom */}
        <div className="bg-white dark:bg-neutral-950 p-4 border-t border-neutral-100 dark:border-neutral-800 rounded-b-3xl flex flex-col justify-between gap-2 shadow-xs">
          <div className="flex items-start justify-between gap-2">
            <div>
              <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-neutral-400">
                {product.category}
              </span>
              <Link href={`/product/${product.slug}`}>
                <h3 className="text-sm font-bold text-neutral-900 dark:text-neutral-100 hover:underline transition-colors line-clamp-1 mt-0.5">
                  {product.name}
                </h3>
              </Link>
            </div>

            <div className="flex items-center gap-1 text-[11px] font-bold text-neutral-800 dark:text-neutral-200 shrink-0">
              <Star className="w-3 h-3 fill-neutral-900 dark:fill-white text-neutral-900 dark:text-white" />
              <span>{product.rating}</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-1 border-t border-neutral-50 dark:border-neutral-900">
            <span className="text-xs text-neutral-400 font-medium">
              Sizes {sizeRange}
            </span>

            <div className="flex items-baseline gap-1.5">
              <span className="text-sm font-extrabold text-neutral-950 dark:text-neutral-50">
                ₹{product.price.toLocaleString("en-IN")}
              </span>
              {product.originalPrice && (
                <span className="text-[11px] text-neutral-400 line-through">
                  ₹{product.originalPrice.toLocaleString("en-IN")}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <QuickViewModal
        product={product}
        isOpen={quickViewOpen}
        onClose={() => setQuickViewOpen(false)}
      />
    </>
  );
};
