"use client";

import React, { useState } from "react";
import { colorStories, products } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { PillButton } from "@/components/ui/PillButton";

export const ColorStorySection: React.FC = () => {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const currentStory = colorStories[activeStoryIndex] || colorStories[0];

  // Get matching products for this story
  const storyProducts = products.filter((p) =>
    currentStory.featuredProductSlugs.includes(p.slug)
  );

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Top Header & Tab Navigation */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-neutral-200 dark:border-neutral-800">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-mono text-neutral-500 dark:text-neutral-400 font-semibold mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white" />
            <span>Seasonal Palettes</span>
          </div>
          <h2 className="editorial-headline text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-neutral-900 dark:text-neutral-50">
            Curated Colour Stories
          </h2>
        </div>

        {/* Tab switcher buttons */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          {colorStories.map((story, idx) => (
            <button suppressHydrationWarning
              key={story.id}
              onClick={() => setActiveStoryIndex(idx)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${
                activeStoryIndex === idx
                  ? "bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 shadow-md scale-105"
                  : "bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200"
              }`}
            >
              <span className="font-mono text-[10px] opacity-70">{story.index}</span>
              <span>{story.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Story Content Canvas */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Editorial Story Showcase */}
        <div
          className={`lg:col-span-4 rounded-3xl p-8 sm:p-10 flex flex-col justify-between min-h-[460px] border transition-all duration-500 ${currentStory.bgTint}`}
        >
          <div>
            <div className="flex items-center justify-between">
              <span className="font-mono text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-neutral-100">
                {currentStory.index}
              </span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/70 dark:bg-black/60 backdrop-blur-md text-neutral-800 dark:text-neutral-200">
                {currentStory.badge}
              </span>
            </div>

            <h3 className="editorial-headline text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950 dark:text-white mt-6 leading-tight">
              {currentStory.name}
            </h3>

            <p className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mt-1">
              {currentStory.subtitle}
            </p>

            <p className="text-sm text-neutral-700 dark:text-neutral-300 font-normal leading-relaxed mt-4">
              {currentStory.description}
            </p>
          </div>

          <div className="pt-8 border-t border-black/10 dark:border-white/10 flex flex-col gap-3">
            <span className="text-xs font-mono font-medium text-neutral-600 dark:text-neutral-400">
              Palette: {currentStory.tag}
            </span>
            <PillButton
              href={`/shop?story=${currentStory.id}`}
              variant="dark"
              size="md"
            >
              Explore {currentStory.name}
            </PillButton>
          </div>
        </div>

        {/* Right Column: 3 Large Curated Product Cards */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {storyProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              colorTintClass="bg-white/60 dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
