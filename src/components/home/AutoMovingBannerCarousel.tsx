"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowUpRight, Tag, ShieldCheck, MapPin } from "lucide-react";
import { PillButton } from "@/components/ui/PillButton";

interface BannerSlide {
  id: string;
  badge: string;
  headline: string;
  subtext: string;
  image: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  categoryTag: string;
}

const BANNER_SLIDES: BannerSlide[] = [
  {
    id: "slide-1",
    badge: "New Season Drop",
    headline: "Tactical Cargo & Tailored Linen Shirts",
    subtext: "Engineered for breathable comfort and sharp lines. Browse 66 exclusive cuts available for walk-in fittings at Kavoor.",
    image: "/images/products/shirts_black_charcoal.jpg",
    primaryCtaText: "Explore 66 Shirts",
    primaryCtaHref: "/shop?category=Shirts",
    secondaryCtaText: "Hold for Trial",
    secondaryCtaHref: "/shop?category=Shirts",
    categoryTag: "Shirts Collection",
  },
  {
    id: "slide-2",
    badge: "Festive Exclusive",
    headline: "Festive Combo: 40% Off on Shirt & Pant",
    subtext: "Celebrate the season with our flagship Diwali and festival promotion. Pair any premium casual shirt with tailored trousers.",
    image: "/catalog/ab_collections_kavoor_2022-10-18_22-36-00_2951890246771202031_55023169382.jpg",
    primaryCtaText: "View Festive Campaign",
    primaryCtaHref: "/events",
    secondaryCtaText: "Inquire Offer",
    secondaryCtaHref: "https://wa.me/917760468902?text=Hi%20AB%20Collections,%20I'm%20inquiring%20about%20the%2040%%20Off%20Shirt%20&%20Pant%20Festive%20Offer.",
    categoryTag: "Diwali Special",
  },
  {
    id: "slide-3",
    badge: "Signature Outfits",
    headline: "Coordinated Ensembles & Relaxed Linens",
    subtext: "Matching shirt and trouser pairings blending easy sophistication with effortless modern drape. Steamed and ready for trial.",
    image: "/images/products/trousers_cargo_collection.jpg",
    primaryCtaText: "Browse 60 Outfits",
    primaryCtaHref: "/shop?category=Outfits",
    secondaryCtaText: "Lookbook",
    secondaryCtaHref: "/lookbook",
    categoryTag: "Complete Ensembles",
  },
  {
    id: "slide-4",
    badge: "Kavoor Flagship",
    headline: "Try Before You Buy • Walk-in Trial Lounge",
    subtext: "No online prepayment required. Shortlist your favorite pieces online, then walk into Kavoor Tower to try your exact sizes.",
    image: "/images/store/store_interior.jpg",
    primaryCtaText: "Showroom Hours & Map",
    primaryCtaHref: "/contact",
    secondaryCtaText: "View Reserve List",
    secondaryCtaHref: "/reserve",
    categoryTag: "In-Store Experience",
  },
];

export const AutoMovingBannerCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-move slide every 5 seconds (just like Flipkart & Amazon)
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % BANNER_SLIDES.length);
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + BANNER_SLIDES.length) % BANNER_SLIDES.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % BANNER_SLIDES.length);
  };

  const slide = BANNER_SLIDES[currentSlide];

  return (
    <section
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden bg-neutral-950 text-white border border-neutral-800 shadow-2xl min-h-[380px] sm:min-h-[440px] flex flex-col justify-between p-6 sm:p-10 lg:p-12">
        {/* Background Image with Smooth Cross-Fade Transition */}
        {BANNER_SLIDES.map((item, idx) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-75 z-0" : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={item.image}
              alt={item.headline}
              fill
              priority={idx === 0}
              className="object-cover scale-100 transition-transform duration-7000 ease-out"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
        ))}

        {/* Directional Gradient Scrim: Dark on left for high contrast readability, open on right for imagery */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/30 pointer-events-none z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40 pointer-events-none z-10" />

        {/* Top Header: Badge, Category Tag, and Navigation Arrows */}
        <div className="relative z-20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-[11px] font-mono font-semibold uppercase tracking-wider border border-white/15">
              {slide.badge}
            </span>
            <span className="hidden sm:inline text-xs font-mono text-neutral-300">
              {slide.categoryTag}
            </span>
          </div>

          <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md p-1 rounded-full border border-white/15">
            <button
              onClick={handlePrev}
              aria-label="Previous banner"
              className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-[11px] font-mono px-2 text-neutral-300">
              0{currentSlide + 1} / 0{BANNER_SLIDES.length}
            </span>
            <button
              onClick={handleNext}
              aria-label="Next banner"
              className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-20 max-w-xl my-6 sm:my-auto">
          <h3 className="editorial-headline text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.05] drop-shadow-md">
            {slide.headline}
          </h3>
          <p className="mt-3 text-xs sm:text-sm text-neutral-200 font-normal leading-relaxed max-w-lg drop-shadow-xs">
            {slide.subtext}
          </p>

          {/* Action CTAs */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <PillButton href={slide.primaryCtaHref} variant="white" size="md">
              <span>{slide.primaryCtaText}</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
            </PillButton>

            {slide.secondaryCtaText && slide.secondaryCtaHref && (
              <PillButton href={slide.secondaryCtaHref} variant="dark" size="md">
                {slide.secondaryCtaText}
              </PillButton>
            )}
          </div>
        </div>

        {/* Bottom Segmented Progress Dots (Flipkart / Amazon Ecommerce Style) */}
        <div className="relative z-20 flex items-center justify-between pt-4 border-t border-white/15">
          <div className="flex items-center gap-2">
            {BANNER_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Jump to slide ${idx + 1}`}
                className={`transition-all duration-300 h-1.5 rounded-full cursor-pointer ${
                  idx === currentSlide
                    ? "w-8 bg-white"
                    : "w-2 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          <span className="text-[10px] font-mono text-neutral-400">
            {isPaused ? "Paused (hovering)" : "Auto-sliding • 5s"}
          </span>
        </div>
      </div>
    </section>
  );
};
