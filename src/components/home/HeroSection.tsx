"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles, MapPin, ShieldCheck } from "lucide-react";
import { PillButton } from "@/components/ui/PillButton";
import { products } from "@/data/products";

export const HeroSection: React.FC = () => {
  // Mini cards for the 3 featured items
  const miniCards = [
    {
      category: "Cargo Shirts",
      name: "Tactical Pocket Dual-Flap",
      price: "₹1,399",
      image: "/images/products/shirts_black_charcoal.jpg",
      colors: ["#171717", "#374151", "#4b5320"],
      href: "/product/tactical-cargo-pocket-utility-shirt",
    },
    {
      category: "Tailored Checks",
      name: "Crimson Windowpane",
      price: "₹1,299",
      image: "/images/products/shirts_maroon_white.jpg",
      colors: ["#7f1d1d", "#f3f4f6", "#1e3a8a"],
      href: "/product/heritage-crimson-windowpane-checked-shirt",
    },
    {
      category: "Cargo Trousers",
      name: "Heavy Twill 6-Pocket",
      price: "₹1,699",
      image: "/images/products/trousers_cargo_collection.jpg",
      colors: ["#d4b996", "#556b2f", "#1f2937"],
      href: "/product/tactical-6-pocket-heavy-twill-cargo-pants",
    },
  ];

  return (
    <section className="relative pt-6 sm:pt-10 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* 1. Giant Headline Across the Full Width */}
      <div className="flex flex-col items-center justify-center text-center select-none">
        <h1 className="editorial-headline text-[17vw] sm:text-[14vw] md:text-[13vw] lg:text-[12.5vw] font-black uppercase text-black dark:text-white tracking-tighter leading-[0.85] w-full text-center">
          DRESSED.
        </h1>

        {/* Left and Right Supporting Copy (12-13px) */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 mt-4 sm:mt-6 text-xs text-neutral-500 font-medium px-2">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
            <p className="tracking-tight text-center sm:text-left max-w-xs">
              A curated men&apos;s exclusive fashion destination located in Kavoor, Mangaluru.
            </p>
          </div>

          <div className="flex items-center gap-4 text-[11px] uppercase tracking-wider font-semibold text-neutral-400">
            <span>Autumn / Winter Drop</span>
            <span>•</span>
            <span className="text-black dark:text-white">Strictly In-Store & WhatsApp Reserve</span>
          </div>
        </div>
      </div>

      {/* 2. Big Rounded Hero Panel in Accent Colour */}
      <div className="relative mt-8 sm:mt-12 rounded-[28px] sm:rounded-[36px] overflow-hidden bg-gradient-to-br from-[#E68A00] via-[#F59E0B] to-[#D97706] text-black p-6 sm:p-12 min-h-[480px] sm:min-h-[540px] flex flex-col justify-between shadow-2xl">
        {/* Subtle patterned overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/20 via-transparent to-black/15 pointer-events-none" />

        {/* Top bar inside the hero panel */}
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/15 backdrop-blur-md border border-black/10 text-xs font-bold tracking-wider uppercase text-neutral-950">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kavoor Exclusive Wardrobe</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-neutral-900 bg-white/30 backdrop-blur-md px-3.5 py-1.5 rounded-full">
            <MapPin className="w-3.5 h-3.5" />
            <span>Airport Road, Kavoor, Mangaluru</span>
          </div>
        </div>

        {/* Main Content inside Hero Panel */}
        <div className="relative z-10 max-w-xl my-8 sm:my-auto">
          <span className="text-xs uppercase tracking-[0.2em] font-extrabold text-neutral-900/80">
            New In Stock
          </span>
          <h2 className="editorial-headline text-3xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-950 tracking-tight mt-2 leading-[0.95]">
            Structured Utility &amp; Refined Tailoring.
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-neutral-900/80 font-medium max-w-md leading-relaxed">
            From double-pocket cargo twills to combed poplin windowpanes, experience premium fits crafted for coastal temperatures and everyday confidence.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <PillButton href="/shop" variant="primary" size="lg">
              Explore Collection
            </PillButton>
            <PillButton href="/about" variant="secondary" size="lg">
              The Kavoor Story
            </PillButton>
          </div>
        </div>

        {/* Bottom Right Floating Mini Cards */}
        <div className="relative z-10 flex flex-col sm:flex-row items-end sm:items-center justify-between gap-6 pt-6 border-t border-black/10">
          <div className="flex items-center gap-2 text-xs font-bold text-neutral-900">
            <ShieldCheck className="w-4 h-4" />
            <span>Try Before You Buy • Walk-in Trial Rooms Available</span>
          </div>

          {/* 3 Mini Product Cards Overlapping / Grouped */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full sm:w-auto">
            {miniCards.map((card) => (
              <Link
                key={card.name}
                href={card.href}
                className="group relative flex items-center gap-3 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md p-2.5 rounded-2xl shadow-lg border border-black/5 hover:scale-105 transition-all duration-200"
              >
                <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 shrink-0">
                  <Image
                    src={card.image}
                    alt={card.name}
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div className="min-w-0 pr-2">
                  <span className="text-[9px] uppercase tracking-wider font-semibold text-neutral-500 block">
                    {card.category}
                  </span>
                  <h4 className="text-xs font-bold text-neutral-900 dark:text-neutral-100 truncate">
                    {card.name}
                  </h4>
                  <div className="flex items-center justify-between gap-2 mt-0.5">
                    <span className="text-xs font-extrabold text-amber-600 dark:text-amber-400">
                      {card.price}
                    </span>
                    <div className="flex gap-1">
                      {card.colors.map((c, i) => (
                        <span
                          key={i}
                          className="w-2 h-2 rounded-full border border-black/10"
                          style={{ backgroundColor: c }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
