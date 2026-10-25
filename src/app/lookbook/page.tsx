"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, X, Play, Maximize2 } from "lucide-react";
import { lookbookItems, LookbookEntry } from "@/data/lookbook";
import { PillButton } from "@/components/ui/PillButton";

export default function LookbookPage() {
  const [activeLightbox, setActiveLightbox] = useState<LookbookEntry | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs uppercase tracking-[0.25em] font-mono text-neutral-500 dark:text-neutral-400 font-semibold">
          Visual Archive // Kavoor Edition
        </span>
        <h1 className="editorial-headline text-4xl sm:text-6xl font-black uppercase tracking-tight text-neutral-900 dark:text-neutral-50 mt-2">
          LOOKBOOK &amp; ATELIER
        </h1>
        <p className="text-xs sm:text-sm text-neutral-500 mt-4 max-w-xl mx-auto leading-relaxed">
          Explore curated seasonal silhouettes, fabric movement, and styling pairings developed specifically for coastal confidence.
        </p>
      </div>

      {/* Video & Campaign Banner Section */}
      <div className="mb-20 rounded-3xl overflow-hidden bg-neutral-950 text-white relative group border border-neutral-800 shadow-2xl">
        <div className="relative w-full h-[360px] sm:h-[460px]">
          <Image
            src="/images/store/store_interior.jpg"
            alt="AB Collections Kavoor Campaign"
            fill
            className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

          {/* Central Play Indicator */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white mb-4 hover:scale-110 transition-transform">
              <Play className="w-6 h-6 fill-white ml-1" />
            </div>
            <span className="text-xs uppercase tracking-widest font-mono text-neutral-300 font-semibold">
              Autumn / Winter Campaign Film
            </span>
            <h2 className="editorial-headline text-2xl sm:text-4xl font-extrabold uppercase mt-1 max-w-lg">
              Everyday Movement in Mangaluru
            </h2>
            <p className="text-xs text-neutral-300 mt-2 max-w-md">
              Muted looped visuals capturing raw cotton drapes, tactical pockets, and store fittings.
            </p>
          </div>
        </div>
      </div>

      {/* Masonry Editorial Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {lookbookItems.map((item) => (
          <div
            key={item.id}
            className={`group rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 flex flex-col justify-between ${
              item.aspect === "tall" ? "md:row-span-2" : ""
            }`}
          >
            {/* Visual Frame */}
            <div
              onClick={() => setActiveLightbox(item)}
              className="relative w-full aspect-4/5 overflow-hidden cursor-pointer bg-neutral-200 dark:bg-neutral-800"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>
              <div className="absolute bottom-4 left-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/90 dark:bg-black/90 backdrop-blur-md text-neutral-900 dark:text-neutral-100">
                  {item.season}
                </span>
              </div>
            </div>

            {/* Editorial Caption & Outfits */}
            <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
              <div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono font-semibold text-neutral-500 uppercase tracking-wider bg-black/5 dark:bg-white/5 px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="editorial-headline text-2xl font-bold text-neutral-900 dark:text-neutral-50">
                  {item.title}
                </h3>

                <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
                  {item.concept}
                </p>

                {/* Styling Tips */}
                <div className="mt-4 p-3.5 rounded-2xl bg-neutral-200/50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700 text-xs text-neutral-800 dark:text-neutral-200">
                  <span className="font-bold text-neutral-900 dark:text-white block mb-0.5 font-mono text-[11px] uppercase tracking-wider">
                    Stylist Directive:
                  </span>
                  {item.stylingTips}
                </div>
              </div>

              {/* Linked Outfits */}
              <div className="pt-6 mt-6 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider">
                  Featured in Look
                </span>
                <Link
                  href="/shop"
                  className="text-xs font-semibold text-neutral-900 dark:text-neutral-100 hover:underline flex items-center gap-1"
                >
                  <span>Explore Outfits</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeLightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setActiveLightbox(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] bg-neutral-950 rounded-3xl overflow-hidden border border-neutral-800 p-6 flex flex-col md:flex-row gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button suppressHydrationWarning
              onClick={() => setActiveLightbox(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/20 text-white hover:bg-white/40 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative w-full md:w-1/2 aspect-4/5 rounded-2xl overflow-hidden bg-neutral-900">
              <Image
                src={activeLightbox.image}
                alt={activeLightbox.title}
                fill
                className="object-contain"
              />
            </div>

            <div className="w-full md:w-1/2 flex flex-col justify-between text-white p-2">
              <div>
                <span className="text-xs text-neutral-400 font-mono uppercase tracking-wider">
                  {activeLightbox.season}
                </span>
                <h3 className="editorial-headline text-3xl font-extrabold mt-1">
                  {activeLightbox.title}
                </h3>
                <p className="text-xs text-neutral-400 mt-3 leading-relaxed">
                  {activeLightbox.concept}
                </p>
                <div className="mt-4 p-4 rounded-2xl bg-neutral-900 border border-neutral-800 text-xs text-neutral-300">
                  <span className="font-bold text-white block mb-1 font-mono uppercase tracking-wider text-[10px]">Styling Tip:</span>
                  {activeLightbox.stylingTips}
                </div>
              </div>

              <div className="pt-6 border-t border-neutral-800 flex justify-center">
                <PillButton
                  href="/shop"
                  onClick={() => setActiveLightbox(null)}
                  variant="white"
                  size="md"
                  className="w-full"
                >
                  Shop Featured Articles
                </PillButton>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
