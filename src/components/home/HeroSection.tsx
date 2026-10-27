"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, ShieldCheck } from "lucide-react";
import { PillButton } from "@/components/ui/PillButton";
import { catalogStats } from "@/data/catalog";

export const HeroSection: React.FC<{ onSelectCategory?: (category: string) => void }> = ({
  onSelectCategory,
}) => {
  // Mini highlight cards for the 4 core categories (NO prices)
  const categoryHighlights = [
    {
      category: "T-Shirts",
      title: "Retro Knit & Graphic Tees",
      subtitle: "Relaxed fit tees with clean, versatile looks",
      image: "/catalog/ab_collections_kavoor_2025-01-22_15-10-37_3551055606905124760_55023169382_1.jpg",
      tag: `${catalogStats.tShirts} Curated Tees`,
    },
    {
      category: "Shirts",
      title: "Tailored & Oxford Button-Downs",
      subtitle: "Classic button-downs crafted for timeless sophistication",
      image: "/catalog/ab_collections_kavoor_2022-08-26_22-58-20_2913488366529835596_55023169382.jpg",
      tag: `${catalogStats.shirts} Exclusive Cuts`,
    },
    {
      category: "Pants",
      title: "Tactical Cargos, Chinos & Denim",
      subtitle: "Engineered bottomwear with mobility stretch & pristine drape",
      image: "/catalog/ab_collections_kavoor_2022-08-22_20-47-12_2910523262228507796_55023169382.jpg",
      tag: `${catalogStats.pants} Tailored Bottoms`,
    },
    {
      category: "Outfits",
      title: "Curated Shirt & Trouser Sets",
      subtitle: "Coordinated ensembles blending comfort with sharp tailoring",
      image: "/catalog/ab_collections_kavoor_2026-07-29_19-46-58_3951992887380927302_55023169382.jpg",
      tag: `${catalogStats.outfits} Complete Looks`,
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
        <h1 className="editorial-headline text-[10vw] sm:text-[12vw] md:text-[12vw] lg:text-[11vw] font-black uppercase text-neutral-950 tracking-tight sm:tracking-tighter leading-[0.85] w-full text-center">
          AB COLLECTIONS
        </h1>

        {/* Left and Right Supporting Copy */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 mt-4 sm:mt-6 text-xs text-neutral-600 font-medium px-1 sm:px-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 shadow-xs" />
            <p className="tracking-tight text-center sm:text-left max-w-xs font-semibold text-neutral-800 text-[11px] sm:text-xs">
              Modern Men&apos;s Fashion Destination • Kavoor, Mangaluru
            </p>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold text-neutral-600 flex-wrap justify-center sm:justify-end">
            <span>T-Shirts</span>
            <span className="text-neutral-400">•</span>
            <span>Shirts</span>
            <span className="text-neutral-400">•</span>
            <span>Pants</span>
            <span className="text-neutral-400">•</span>
            <span>Outfits</span>
            <span className="text-neutral-400">•</span>
            <span className="text-neutral-950 font-bold bg-neutral-100 px-2 py-0.5 rounded-full border border-neutral-200/80">
              136 Active Designs
            </span>
          </div>
        </div>
      </div>

      {/* 2. Editorial Hero Panel with Rich Vibrant Full-Color Store Interior */}
      <div className="relative mt-8 sm:mt-10 rounded-[28px] sm:rounded-[36px] overflow-hidden bg-neutral-950 text-white p-6 sm:p-12 min-h-[480px] sm:min-h-[540px] flex flex-col justify-between shadow-2xl border border-neutral-800/80">
        {/* Full-Color Store Interior Photo (Vibrant & Warm, without mix-blend-luminosity) */}
        <Image
          src="/images/store/store_interior.jpg"
          alt="AB Collections Kavoor Showroom"
          fill
          priority
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-cover opacity-75 sm:opacity-80 scale-100 transition-transform duration-1000 ease-out hover:scale-105 pointer-events-none"
        />

        {/* Directional Scrim: Dark on the left for crisp typography readability, transparent on right to showcase real colors */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/25 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-black/35 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top bar inside hero panel */}
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-xs font-mono font-medium tracking-wider uppercase text-neutral-200 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>2026 Collection Released</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-neutral-200 bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span>Kavoor Tower, Above Union Bank, Mangaluru</span>
          </div>
        </div>

        {/* Main Content inside Hero Panel */}
        <div className="relative z-10 max-w-xl my-8 sm:my-auto">
          <span className="text-xs uppercase tracking-[0.25em] font-mono font-semibold text-neutral-300 drop-shadow-xs">
            Men&apos;s Wear Exclusive
          </span>
          <h2 className="editorial-headline text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mt-3 leading-[0.95] drop-shadow-md">
            Effortless Style. Sharp Tailoring.
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-neutral-200 font-normal max-w-md leading-relaxed drop-shadow-xs">
            Discover our entire range of casual shirts, vintage-knit tees, and coordinated ensembles designed for comfortable distinction and everyday confidence.
          </p>

          {/* Action Buttons using signature PillButton */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <PillButton
              href="#catalog-section"
              variant="white"
              size="lg"
            >
              Browse 142 Pieces
            </PillButton>

            <PillButton
              href="/contact"
              variant="dark"
              size="lg"
            >
              Store Location &amp; Hours
            </PillButton>
          </div>
        </div>

        {/* Bottom 3 Category Mini Cards (Glassmorphism over vibrant colored background) */}
        <div className="relative z-10 flex flex-col sm:flex-row items-end sm:items-center justify-between gap-6 pt-6 border-t border-white/15">
          <div className="flex items-center gap-2 text-xs font-medium text-neutral-200">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Try Before You Buy • Walk-in Trial Rooms Available</span>
          </div>

          {/* 4 Mini Product Cards for T-Shirts, Shirts, Pants, Outfits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 w-full sm:w-auto">
            {categoryHighlights.map((card) => (
              <button
                suppressHydrationWarning
                key={card.category}
                onClick={() => handleCategoryClick(card.category)}
                className="group relative flex items-center gap-3 bg-black/60 hover:bg-black/75 backdrop-blur-md p-2.5 rounded-2xl border border-white/15 hover:border-white/30 transition-all duration-200 text-left cursor-pointer shadow-md"
              >
                <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-neutral-900 shrink-0 border border-white/10">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="48px"
                  />
                </div>
                <div className="flex flex-col pr-2 min-w-0">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-semibold truncate">
                    {card.category}
                  </span>
                  <span className="text-xs font-bold text-white line-clamp-1">
                    {card.title}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-300">
                    {card.tag}
                  </span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white shrink-0 ml-auto transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
