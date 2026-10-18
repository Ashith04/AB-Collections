"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles, MapPin, ShieldCheck, Film } from "lucide-react";
import { PillButton } from "@/components/ui/PillButton";

export const HeroSection: React.FC<{ onSelectCategory?: (category: string) => void }> = ({
  onSelectCategory,
}) => {
  // Mini highlight cards for the 3 core categories (NO prices)
  const categoryHighlights = [
    {
      category: "T-Shirts",
      title: "Retro Knit & Graphic Tees",
      subtitle: "Relaxed fit tees with clean, versatile looks",
      image: "/catalog/ab_collections_kavoor_2025-01-22_15-10-37_3551055606905124760_55023169382_1.jpg",
      tag: "16 Curated Designs",
    },
    {
      category: "Shirts",
      title: "Tailored & Oxford Button-Downs",
      subtitle: "Classic button-downs crafted for timeless sophistication",
      image: "/catalog/ab_collections_kavoor_2022-08-26_22-58-20_2913488366529835596_55023169382.jpg",
      tag: "66 Exclusive Cuts",
    },
    {
      category: "Outfits",
      title: "Curated Shirt & Trouser Sets",
      subtitle: "Coordinated ensembles blending comfort with sharp tailoring",
      image: "/catalog/ab_collections_kavoor_2026-07-29_19-46-58_3951992887380927302_55023169382.jpg",
      tag: "60 Complete Looks",
    },
  ];

  const handleCategoryClick = (cat: string) => {
    if (onSelectCategory) {
      onSelectCategory(cat);
      const el = document.getElementById("catalog-section");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-6 sm:pt-10 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* 1. Giant Headline Across the Full Width */}
      <div className="flex flex-col items-center justify-center text-center select-none">
        <h1 className="editorial-headline text-[16vw] sm:text-[13vw] md:text-[12vw] lg:text-[11vw] font-black uppercase text-black dark:text-white tracking-tighter leading-[0.85] w-full text-center">
          AB COLLECTIONS
        </h1>

        {/* Left and Right Supporting Copy */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 mt-4 sm:mt-6 text-xs text-neutral-500 font-medium px-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0 animate-pulse" />
            <p className="tracking-tight text-center sm:text-left max-w-xs font-semibold text-neutral-700 dark:text-neutral-300">
              Modern Men&apos;s Fashion Destination • Kavoor, Mangaluru
            </p>
          </div>

          <div className="flex items-center gap-3 text-[11px] uppercase tracking-wider font-semibold text-neutral-400">
            <span>T-Shirts</span>
            <span>•</span>
            <span>Shirts</span>
            <span>•</span>
            <span>Outfits</span>
            <span>•</span>
            <span className="text-black dark:text-white font-bold">142 Showcase Items</span>
          </div>
        </div>
      </div>

      {/* 2. Big Rounded Hero Panel in Accent Colour */}
      <div className="relative mt-8 sm:mt-10 rounded-[28px] sm:rounded-[36px] overflow-hidden bg-gradient-to-br from-[#E68A00] via-[#F59E0B] to-[#D97706] text-black p-6 sm:p-12 min-h-[460px] sm:min-h-[500px] flex flex-col justify-between shadow-2xl">
        {/* Subtle patterned overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/20 via-transparent to-black/15 pointer-events-none" />

        {/* Top bar inside the hero panel */}
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/15 backdrop-blur-md border border-black/10 text-xs font-bold tracking-wider uppercase text-neutral-950">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete 2026 Collection Released</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-neutral-900 bg-white/30 backdrop-blur-md px-3.5 py-1.5 rounded-full">
            <MapPin className="w-3.5 h-3.5" />
            <span>Kavoor Tower, Above Union Bank, Mangaluru</span>
          </div>
        </div>

        {/* Main Content inside Hero Panel */}
        <div className="relative z-10 max-w-xl my-6 sm:my-auto">
          <span className="text-xs uppercase tracking-[0.2em] font-extrabold text-neutral-950/80">
            Men&apos;s Wear Exclusive
          </span>
          <h2 className="editorial-headline text-3xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-950 tracking-tight mt-2 leading-[0.95]">
            Effortless Style. Sharp Tailoring.
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-neutral-950/80 font-medium max-w-md leading-relaxed">
            Discover our entire range of casual shirts, vintage-knit tees, and coordinated ensembles designed for comfortable distinction and everyday confidence.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#catalog-section"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-black text-white font-bold text-xs uppercase tracking-wider hover:bg-neutral-800 transition-transform hover:scale-105 shadow-md"
            >
              Browse 142 Pieces
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-white/90 hover:bg-white text-black font-bold text-xs uppercase tracking-wider transition-transform hover:scale-105 shadow-sm"
            >
              Store Location &amp; Hours
            </Link>
          </div>
        </div>

        {/* Bottom 3 Category Mini Cards (NO prices) */}
        <div className="relative z-10 flex flex-col sm:flex-row items-end sm:items-center justify-between gap-6 pt-6 border-t border-black/10">
          <div className="flex items-center gap-2 text-xs font-bold text-neutral-900">
            <ShieldCheck className="w-4 h-4" />
            <span>Try Before You Buy • Walk-in Trial Rooms Available</span>
          </div>

          {/* 3 Mini Product Cards for T-Shirts, Shirts, Outfits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full sm:w-auto">
            {categoryHighlights.map((card) => (
              <button
                key={card.category}
                onClick={() => handleCategoryClick(card.category)}
                className="group relative flex items-center gap-3 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md p-2.5 rounded-2xl shadow-lg border border-black/5 hover:scale-105 transition-all duration-200 text-left"
              >
                <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 shrink-0">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform"
                    sizes="48px"
                  />
                </div>
                <div className="flex flex-col pr-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                    {card.category}
                  </span>
                  <span className="text-xs font-extrabold text-neutral-900 dark:text-neutral-100 line-clamp-1">
                    {card.title}
                  </span>
                  <span className="text-[10px] font-medium text-amber-600 dark:text-amber-400">
                    {card.tag}
                  </span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-black dark:group-hover:text-white shrink-0 ml-auto" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
