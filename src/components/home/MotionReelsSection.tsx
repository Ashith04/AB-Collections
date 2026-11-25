"use client";

import React, { useState, useRef, useEffect, useMemo, useCallback } from "react";
import Link from "next/link";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
  Film,
  MessageCircle,
  ShoppingBag,
  Heart,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { catalogItems, CatalogItem } from "@/data/catalog";
import { eventItems } from "@/data/events";
import { useWishlist } from "@/context/WishlistContext";
import { useReserve } from "@/context/ReserveContext";
import { catalogItemToProduct } from "@/utils/catalogAdapter";
import { copyImageToClipboard } from "@/utils/whatsappImage";
import { siteConfig } from "@/config/site";

interface MotionReelsSectionProps {
  onQuickView?: (item: CatalogItem) => void;
}

export const MotionReelsSection: React.FC<MotionReelsSectionProps> = ({ onQuickView }) => {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { items: reserveItems, addToReserve } = useReserve();

  const reels: CatalogItem[] = useMemo(() => {
    const outfitVideos = catalogItems.filter((item) => item.mediaType === "video");
    const videoEvent = eventItems.find((e) => e.mediaType === "video");
    if (videoEvent) {
      const tourReel: CatalogItem = {
        id: videoEvent.id,
        slug: videoEvent.slug,
        name: videoEvent.title,
        category: "Outfits",
        categorySlug: "outfits",
        mediaType: "video",
        mediaUrl: videoEvent.mediaUrl,
        description: videoEvent.description,
        badge: videoEvent.badge || "Store Tour",
        fit: "Showroom Tour",
        fabric: "Curated Menswear",
        code: "ABC-TOUR-01",
        inStock: true,
        tags: videoEvent.highlights,
      };
      return [...outfitVideos, tourReel];
    }
    return outfitVideos;
  }, []);

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [mutedIndex, setMutedIndex] = useState<number | null>(null);
  const [justReserved, setJustReserved] = useState<boolean>(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const activeReel = reels[activeIndex] || reels[0];
  const isFavorited = activeReel ? isInWishlist(activeReel.id) : false;
  const isReserved = activeReel ? reserveItems.some((r) => r.product.id === activeReel.id) : false;

  // Scroll active card into view
  const scrollToIndex = useCallback((idx: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.children[idx] as HTMLElement;
    if (!card) return;
    const containerLeft = container.getBoundingClientRect().left;
    const cardLeft = card.getBoundingClientRect().left;
    const offset = cardLeft - containerLeft - (container.clientWidth / 2 - card.clientWidth / 2);
    container.scrollBy({ left: offset, behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToIndex(activeIndex);
  }, [activeIndex, scrollToIndex]);

  const handleSelectReel = (idx: number) => {
    // Pause previous
    if (playingIndex !== null && playingIndex !== idx) {
      videoRefs.current[playingIndex]?.pause();
    }
    setActiveIndex(idx);
    setPlayingIndex(idx);
    const vid = videoRefs.current[idx];
    if (vid) {
      vid.currentTime = 0;
      vid.play().catch(() => {});
    }
  };

  const togglePlay = (idx: number) => {
    const vid = videoRefs.current[idx];
    if (!vid) return;
    if (playingIndex === idx) {
      vid.pause();
      setPlayingIndex(null);
    } else {
      videoRefs.current.forEach((v, i) => { if (i !== idx) v?.pause(); });
      vid.play().catch(() => {});
      setPlayingIndex(idx);
    }
  };

  const toggleMute = (idx: number) => {
    const vid = videoRefs.current[idx];
    if (!vid) return;
    vid.muted = !vid.muted;
    setMutedIndex(vid.muted ? null : idx);
  };

  const handleVideoEnded = (idx: number) => {
    setPlayingIndex(null);
    const next = (idx + 1) % reels.length;
    setActiveIndex(next);
    setTimeout(() => handleSelectReel(next), 300);
  };

  const handleAddToReserve = () => {
    if (!activeReel) return;
    addToReserve(catalogItemToProduct(activeReel), activeReel.fit || "Standard", "Default", 1);
    setJustReserved(true);
    setTimeout(() => setJustReserved(false), 3000);
  };

  const handleWhatsApp = async () => {
    if (!activeReel) return;
    const text =
      `Hello AB Collections Kavoor!\n\n` +
      `I am inquiring about this motion showcase outfit:\n` +
      `• Item: "${activeReel.name}"\n` +
      `• Code: ${activeReel.code}\n` +
      `• Category: ${activeReel.category}\n` +
      (activeReel.fit ? `• Fit: ${activeReel.fit}\n` : "") +
      (activeReel.fabric ? `• Fabric: ${activeReel.fabric}\n` : "") +
      `\nCould you please share available sizes and in-store trial details at your Kavoor showroom?`;
    try { await copyImageToClipboard(activeReel.mediaUrl); } catch { /* non-blocking */ }
    window.open(`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank");
  };

  const handlePrev = () => setActiveIndex((p) => (p - 1 + reels.length) % reels.length);
  const handleNext = () => setActiveIndex((p) => (p + 1) % reels.length);

  if (!reels || reels.length === 0) return null;

  return (
    <section className="py-12 sm:py-16 w-full overflow-hidden">
      {/* Header */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-100 text-neutral-800 text-xs font-mono font-semibold uppercase tracking-wider mb-3 border border-neutral-200">
            <Film className="w-3.5 h-3.5 text-neutral-600" />
            <span>Showroom Reels • {reels.length} Motion Edits</span>
          </div>
          <h2 className="editorial-headline text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-neutral-950">
            Wardrobe In Motion
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 mt-2 max-w-lg leading-relaxed">
            Scroll through all reels. Tap any to play. Swipe or use arrows to navigate.
          </p>
        </div>

        {/* Arrow nav */}
        <div className="flex items-center gap-2 shrink-0">
          <button suppressHydrationWarning onClick={handlePrev}
            className="w-9 h-9 rounded-full border border-neutral-200 bg-white hover:bg-neutral-950 hover:text-white hover:border-neutral-950 flex items-center justify-center transition-all cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-xs font-mono font-semibold text-neutral-500 w-14 text-center">
            {String(activeIndex + 1).padStart(2, "0")} / {String(reels.length).padStart(2, "0")}
          </span>
          <button suppressHydrationWarning onClick={handleNext}
            className="w-9 h-9 rounded-full border border-neutral-200 bg-white hover:bg-neutral-950 hover:text-white hover:border-neutral-950 flex items-center justify-center transition-all cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Reel Strip */}
      <div className="relative">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent z-10" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth px-[calc(50vw-140px)] sm:px-[calc(50vw-160px)] pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {reels.map((reel, idx) => {
            const isActive = idx === activeIndex;
            const isPlaying = playingIndex === idx;
            const isMuted = mutedIndex !== idx;

            return (
              <div
                key={reel.id}
                onClick={() => handleSelectReel(idx)}
                className={`relative shrink-0 rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 bg-neutral-900 border shadow-xl
                  ${isActive
                    ? "w-[280px] sm:w-[320px] h-[480px] sm:h-[540px] border-neutral-700 scale-100 opacity-100"
                    : "w-[200px] sm:w-[230px] h-[380px] sm:h-[420px] border-neutral-800 scale-95 opacity-60 hover:opacity-80 hover:scale-[0.97]"
                  }`}
              >
                <video
                  ref={(el) => { videoRefs.current[idx] = el; }}
                  src={reel.mediaUrl}
                  playsInline
                  muted={isMuted}
                  preload="metadata"
                  onEnded={() => handleVideoEnded(idx)}
                  className="w-full h-full object-cover"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

                {/* Top controls — only on active */}
                {isActive && (
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20">
                    <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-mono text-white border border-white/15">
                      {reel.badge || "Motion Reel"}
                    </span>
                    <div className="flex gap-1.5 pointer-events-auto">
                      <button suppressHydrationWarning
                        onClick={(e) => { e.stopPropagation(); toggleMute(idx); }}
                        className="w-7 h-7 rounded-full bg-black/70 backdrop-blur-md border border-white/15 flex items-center justify-center text-white hover:bg-black transition-all cursor-pointer"
                      >
                        {isMuted ? <VolumeX className="w-3 h-3 text-neutral-400" /> : <Volume2 className="w-3 h-3" />}
                      </button>
                      <button suppressHydrationWarning
                        onClick={(e) => { e.stopPropagation(); togglePlay(idx); }}
                        className="w-7 h-7 rounded-full bg-black/70 backdrop-blur-md border border-white/15 flex items-center justify-center text-white hover:bg-black transition-all cursor-pointer"
                      >
                        {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 fill-white" />}
                      </button>
                    </div>
                  </div>
                )}

                {/* Center play icon when not active or paused */}
                {(!isPlaying) && (
                  <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                    <div className={`rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all ${isActive ? "w-14 h-14" : "w-10 h-10"}`}>
                      <Play className={`fill-white text-white ml-0.5 ${isActive ? "w-6 h-6" : "w-4 h-4"}`} />
                    </div>
                  </div>
                )}

                {/* Bottom info */}
                <div className="absolute bottom-0 inset-x-0 p-4 z-20 pointer-events-none">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-semibold block">
                    Reel {String(idx + 1).padStart(2, "0")}
                  </span>
                  <p className={`font-bold text-white line-clamp-1 mt-0.5 ${isActive ? "text-sm" : "text-xs"}`}>
                    {reel.name}
                  </p>
                  {isActive && (
                    <span className="text-[10px] font-mono text-neutral-400 mt-0.5 block">{reel.code}</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Active Reel Detail Panel */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-8">
        <div className="rounded-[24px] bg-[#0c0c0c] text-white border border-neutral-800 p-5 sm:p-8 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-start gap-6">
            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-white/10 text-neutral-200 border border-white/15">
                  {activeReel.category}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-neutral-800 text-neutral-200 border border-neutral-700">
                  {activeReel.badge || "In-Store Motion"}
                </span>
                <span className="text-xs font-mono text-neutral-500 ml-auto">{activeReel.code}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
                {activeReel.name}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                {activeReel.description}
              </p>

              <div className="mt-4 grid grid-cols-2 gap-3 text-xs max-w-sm">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-neutral-500 block text-[10px] uppercase font-mono tracking-wider font-semibold">Fit</span>
                  <span className="font-bold text-white mt-0.5 block">{activeReel.fit}</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-neutral-500 block text-[10px] uppercase font-mono tracking-wider font-semibold">Fabric</span>
                  <span className="font-bold text-white mt-0.5 block truncate">{activeReel.fabric}</span>
                </div>
              </div>

              {activeReel.tags && activeReel.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {activeReel.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/5 text-neutral-400 border border-white/5">
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3 sm:min-w-[220px]">
              {justReserved && (
                <div className="p-3 rounded-2xl bg-white text-neutral-950 text-xs font-semibold flex items-center justify-between gap-2 shadow-xl">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Added to Reserve!</span>
                  </div>
                  <Link href="/reserve" className="underline font-bold shrink-0">View →</Link>
                </div>
              )}

              <button suppressHydrationWarning onClick={handleWhatsApp}
                className="group flex items-center justify-between py-2.5 pl-5 pr-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md transition-all hover:scale-[1.01] cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                  <span>Inquire on WhatsApp</span>
                </div>
                <span className="w-8 h-8 rounded-full bg-emerald-950 flex items-center justify-center shrink-0">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </button>

              <div className="flex gap-2">
                <button suppressHydrationWarning onClick={handleAddToReserve}
                  className={`flex-1 px-4 py-2.5 rounded-full text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer border ${
                    isReserved || justReserved
                      ? "bg-white text-neutral-950 border-white"
                      : "bg-white/10 hover:bg-white/20 text-white border-white/15"
                  }`}
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>{justReserved ? "Reserved!" : isReserved ? "In Reserve" : "Hold for Trial"}</span>
                </button>

                <button suppressHydrationWarning
                  onClick={() => toggleWishlist(catalogItemToProduct(activeReel))}
                  className={`p-2.5 rounded-full border transition-all cursor-pointer flex items-center justify-center shrink-0 ${
                    isFavorited ? "bg-white text-red-500 border-white" : "bg-white/10 hover:bg-white/20 border-white/15 text-neutral-300"
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isFavorited ? "fill-red-500 text-red-500" : ""}`} />
                </button>

                {onQuickView && (
                  <button suppressHydrationWarning
                    onClick={() => onQuickView(activeReel)}
                    className="hidden sm:flex p-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-neutral-300 transition-all cursor-pointer items-center justify-center shrink-0"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
