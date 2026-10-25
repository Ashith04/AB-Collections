"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, CheckCircle2 } from "lucide-react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { PillButton } from "@/components/ui/PillButton";

const DARK_TABS = [
  { label: "All Fits", category: "All" },
  { label: "Cargo Shirts", category: "Cargo Shirts" },
  { label: "T-Shirts", category: "T-Shirts" },
  { label: "Jeans", category: "Jeans" },
  { label: "Cargo Trousers", category: "Cargo Trousers" },
  { label: "Jackets", category: "Jackets" },
];

export const DarkBentoSection: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("All");

  const filteredProducts =
    selectedTab === "All"
      ? products.slice(0, 4)
      : products.filter((p) => p.category === selectedTab);

  return (
    <section className="relative w-full bg-[#0a0a0a] text-white py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-white/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Giant Headline */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-mono font-medium uppercase tracking-widest text-neutral-300 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span>Kavoor Exclusive Atelier</span>
          </div>

          <h2 className="editorial-headline text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight bg-gradient-to-b from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent leading-[0.95]">
            THE FIT OF EVERYDAY STYLE
          </h2>

          <p className="mt-6 text-sm sm:text-base text-neutral-400 max-w-xl mx-auto font-normal leading-relaxed">
            Engineered silhouettes built with durable ripstop twills, high-twist combed cotton, and precision tailoring for real everyday movements.
          </p>
        </div>

        {/* Bento Grid: Lifestyle / Flat-lays & Store Interior */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-20">
          {/* Card 1: Store Interior (Large) */}
          <div className="md:col-span-7 rounded-3xl overflow-hidden relative group min-h-[380px] bg-neutral-900 border border-white/10 shadow-2xl">
            <Image
              src="/images/store/store_interior.jpg"
              alt="AB Collections Store Interior Kavoor"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-neutral-300 font-mono font-semibold">
                  The Experience
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  Atelier &amp; Trial Rooms in Kavoor
                </h3>
                <p className="text-xs text-neutral-300 max-w-md mt-1">
                  Explore full racks, test real textures, and get expert sizing consultations directly in-store.
                </p>
              </div>

              <PillButton
                href="/about"
                variant="white"
                size="sm"
              >
                Store Tour
              </PillButton>
            </div>
          </div>

          {/* Card 2: Tactical Cargo Highlight */}
          <div className="md:col-span-5 rounded-3xl overflow-hidden relative group min-h-[380px] bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/10 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-neutral-400 uppercase">
                  DROP HIGHLIGHT
                </span>
                <span className="text-[10px] px-2.5 py-1 rounded-full bg-white/10 text-neutral-200 font-mono font-semibold">
                  100% Breathable
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mt-4">
                Structured Cargo Pants &amp; Utility Twills
              </h3>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                6-pocket tactical construction with reinforced knees and adjustable bungee leg cords.
              </p>
            </div>

            <div className="relative w-full aspect-video rounded-2xl overflow-hidden my-4 bg-black/40 border border-white/5">
              <Image
                src="/images/products/trousers_cargo_collection.jpg"
                alt="Cargo trousers collection"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-sm font-bold text-neutral-200">Starting at ₹1,699</span>
              <PillButton
                href="/shop?category=Cargo+Trousers"
                variant="white"
                size="sm"
              >
                View Cargos
              </PillButton>
            </div>
          </div>
        </div>

        {/* Filter Pill Tabs (Active White Pill) */}
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar max-w-full p-1.5 rounded-full bg-neutral-900/90 border border-white/10 backdrop-blur-xl">
            {DARK_TABS.map((tab) => {
              const active = selectedTab === tab.category;
              return (
                <button suppressHydrationWarning
                  key={tab.label}
                  onClick={() => setSelectedTab(tab.category)}
                  className={`px-5 py-2 rounded-full text-xs font-semibold transition-all shrink-0 cursor-pointer ${
                    active
                      ? "bg-white text-black shadow-lg scale-105"
                      : "text-neutral-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Product Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              colorTintClass="bg-neutral-900/90 border border-white/10"
            />
          ))}
        </div>

        {/* Explore Full Shop CTA */}
        <div className="text-center mt-16 flex justify-center">
          <PillButton
            href="/shop"
            variant="white"
            size="lg"
          >
            Explore Entire Men&apos;s Catalogue
          </PillButton>
        </div>
      </div>
    </section>
  );
};
