"use client";

import React from "react";
import Link from "next/link";
import { Heart, Trash2, ArrowUpRight, ShoppingBag, Share2 } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";
import { ProductCard } from "@/components/product/ProductCard";
import { PillButton } from "@/components/ui/PillButton";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, clearWishlist, count } = useWishlist();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 min-h-[70vh]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-neutral-200 dark:border-neutral-800">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] font-mono text-neutral-500 dark:text-neutral-400 font-semibold">
            Saved Articles // Personal Shortlist
          </span>
          <h1 className="editorial-headline text-4xl sm:text-5xl font-black uppercase tracking-tight text-neutral-900 dark:text-neutral-50 mt-1">
            My Wishlist ({count})
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 mt-2">
            Items saved here are stored on your device for fast review and in-store trials.
          </p>
        </div>

        {count > 0 && (
          <button suppressHydrationWarning
            onClick={clearWishlist}
            className="flex items-center gap-1.5 text-xs text-red-500 hover:text-red-600 font-semibold underline underline-offset-4"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear Wishlist</span>
          </button>
        )}
      </div>

      {count > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {wishlist.map((product) => (
            <div key={product.id} className="relative group">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-24 max-w-md mx-auto">
          <div className="w-16 h-16 rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-400 flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
            Your Wishlist is Empty
          </h2>
          <p className="text-xs text-neutral-500 mt-2 leading-relaxed">
            Tap the heart icon on any cargo shirt, tonal check, or linen trouser to save it here for later.
          </p>
          <div className="mt-6">
            <PillButton href="/shop" variant="primary" size="lg">
              Explore Collection
            </PillButton>
          </div>
        </div>
      )}
    </div>
  );
}
