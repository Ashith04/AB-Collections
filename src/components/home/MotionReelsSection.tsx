"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import Link from "next/link";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
  Film,
  Store,
  MessageCircle,
  ShoppingBag,
  Heart,
  ArrowUpRight,
  Eye,
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

  // Combine the outfit motion lookbooks and the store walkthrough tour reel into 3 interactive reels
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
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const [autoAdvance, setAutoAdvance] = useState<boolean>(true);
  const [justReserved, setJustReserved] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  const activeReel = reels[activeIndex] || reels[0];
  const isFavorited = activeReel ? isInWishlist(activeReel.id) : false;
  const isReserved = activeReel ? reserveItems.some((r) => r.product.id === activeReel.id) : false;

  // Handle video playback changes when active reel changes
  useEffect(() => {
    setProgress(0);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      if (isPlaying) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            setIsPlaying(false);
          });
        }
      }
    }
  }, [activeIndex]);

  // Track live video playback progress
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const { currentTime, duration } = videoRef.current;
    if (duration > 0) {
      setProgress((currentTime / duration) * 100);
    }
  };

  // When video reaches end: auto-move to the next video reel
  const handleVideoEnded = () => {
    if (!autoAdvance) return;
    setActiveIndex((prev) => (prev + 1) % reels.length);
  };

  // Toggle Play / Pause
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  // Toggle Mute / Sound
  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % reels.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + reels.length) % reels.length);
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

    try {
      await copyImageToClipboard(activeReel.mediaUrl);
    } catch {
      // Non-blocking
    }

    const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
  };

  if (!reels || reels.length === 0) return null;

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 text-xs font-mono font-semibold uppercase tracking-wider mb-3 border border-neutral-200 dark:border-neutral-800">
            <Film className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-300" />
            <span>Showroom Reels • 3 Motion Edits</span>
          </div>
          <h2 className="editorial-headline text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-neutral-950 dark:text-white">
            Wardrobe In Motion
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-2 max-w-xl leading-relaxed">
            Authentic silhouettes, fabric drape, and dynamic styling recorded live in our Kavoor showroom.
            Each video transitions automatically once played.
          </p>
        </div>

        {/* Global Controls & Status */}
        <div className="flex items-center gap-3">
          {/* Auto-Advance Pill */}
          <button suppressHydrationWarning
            onClick={() => setAutoAdvance(!autoAdvance)}
            className={`px-3 py-1.5 rounded-full text-xs font-mono font-medium flex items-center gap-2 transition-all cursor-pointer border ${
              autoAdvance
                ? "bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 border-neutral-950 dark:border-white"
                : "bg-neutral-100 dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400"
            }`}
            title={autoAdvance ? "Auto-advance enabled" : "Auto-advance paused"}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${autoAdvance ? "bg-emerald-400" : "bg-neutral-400"}`} />
            <span>{autoAdvance ? "Auto-Play: ON" : "Auto-Play: PAUSED"}</span>
          </button>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-1.5 bg-neutral-100 dark:bg-neutral-800 p-1 rounded-full border border-neutral-200 dark:border-neutral-700">
            <button suppressHydrationWarning
              onClick={handlePrev}
              aria-label="Previous reel"
              className="p-1.5 rounded-full hover:bg-white dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-[11px] font-mono font-semibold px-2 text-neutral-600 dark:text-neutral-300">
              0{activeIndex + 1} / 0{reels.length}
            </span>
            <button suppressHydrationWarning
              onClick={handleNext}
              aria-label="Next reel"
              className="p-1.5 rounded-full hover:bg-white dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Container Card */}
      <div className="relative rounded-[28px] sm:rounded-[36px] bg-[#0c0c0c] text-white border border-neutral-800 p-5 sm:p-8 lg:p-10 shadow-2xl overflow-hidden">
        {/* 1. Top Story-Style Segmented Progress Bars */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6 sm:mb-8">
          {reels.map((reel, idx) => {
            const isCurrent = idx === activeIndex;
            const isPast = idx < activeIndex;
            return (
              <button suppressHydrationWarning
                key={reel.id}
                onClick={() => setActiveIndex(idx)}
                className="group relative h-1.5 rounded-full bg-white/20 overflow-hidden text-left cursor-pointer transition-all hover:h-2"
                title={`Jump to Reel 0${idx + 1}: ${reel.name}`}
              >
                <div
                  className="h-full bg-white transition-all duration-150 ease-linear rounded-full"
                  style={{
                    width: isPast ? "100%" : isCurrent ? `${progress}%` : "0%",
                  }}
                />
              </button>
            );
          })}
        </div>

        {/* 2. Interactive 3-Reel Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Side: Editorial Details & Action Hub */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-between space-y-5">
            <div>
              {/* Category & Code Pills */}
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-white/10 text-neutral-200 border border-white/15">
                  {activeReel.category}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-neutral-800 text-neutral-200 border border-neutral-700">
                  {activeReel.badge || "In-Store Motion"}
                </span>
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider ml-auto">
                  {activeReel.code}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                {activeReel.name}
              </h3>

              <p className="mt-3 text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                {activeReel.description}
              </p>

              {/* Specifications Card */}
              <div className="mt-5 grid grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-neutral-400 block text-[10px] uppercase font-mono tracking-wider font-semibold">
                    Fit Profile
                  </span>
                  <span className="font-bold text-white mt-0.5 block">
                    {activeReel.fit}
                  </span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-neutral-400 block text-[10px] uppercase font-mono tracking-wider font-semibold">
                    Fabric &amp; Weave
                  </span>
                  <span className="font-bold text-white mt-0.5 block truncate">
                    {activeReel.fabric}
                  </span>
                </div>
              </div>

              {/* Style Tags */}
              {activeReel.tags && activeReel.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {activeReel.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/5 text-neutral-400 border border-white/5"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Reserved Confirmation Toast */}
            {justReserved && (
              <div className="p-3.5 rounded-2xl bg-white text-neutral-950 text-xs font-semibold flex items-center justify-between gap-3 animate-in fade-in duration-200 shadow-xl">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Added to your In-Store Reserve List on this device!</span>
                </div>
                <Link
                  href="/reserve"
                  className="underline font-bold text-neutral-950 hover:text-neutral-700 shrink-0"
                >
                  View List →
                </Link>
              </div>
            )}

            {/* Actions Bar */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* WhatsApp Inquiry */}
              <button suppressHydrationWarning
                onClick={handleWhatsApp}
                className="flex-1 group flex items-center justify-between py-2.5 pl-6 pr-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm shadow-md transition-all hover:scale-[1.01] active:scale-[0.98] cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                  <span>Inquire on WhatsApp</span>
                </div>
                <span className="w-8 h-8 rounded-full bg-emerald-950 text-white flex items-center justify-center shrink-0">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </button>

              {/* Hold for In-Store Trial (Reserve) */}
              <button suppressHydrationWarning
                onClick={handleAddToReserve}
                className={`px-4 py-2.5 rounded-full text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer border ${
                  isReserved || justReserved
                    ? "bg-white text-neutral-950 border-white"
                    : "bg-white/10 hover:bg-white/20 text-white border-white/15"
                }`}
                title="Hold this outfit for in-store trial at Kavoor"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>{justReserved ? "Reserved!" : isReserved ? "In Reserve" : "Hold for Trial"}</span>
              </button>

              {/* Wishlist Heart */}
              <button suppressHydrationWarning
                onClick={() => toggleWishlist(catalogItemToProduct(activeReel))}
                aria-label={isFavorited ? "Saved in Favorites" : "Save to Favorites"}
                className={`p-2.5 rounded-full border transition-all cursor-pointer flex items-center justify-center shrink-0 ${
                  isFavorited
                    ? "bg-white text-red-500 border-white"
                    : "bg-white/10 hover:bg-white/20 border-white/15 text-neutral-300 hover:text-white"
                }`}
                title={isFavorited ? "Saved in Favorites" : "Save to Favorites"}
              >
                <Heart className={`w-4 h-4 ${isFavorited ? "fill-red-500 text-red-500" : ""}`} />
              </button>

              {/* Quick View Full Modal */}
              {onQuickView && (
                <button suppressHydrationWarning
                  onClick={() => onQuickView(activeReel)}
                  aria-label="Quick View full modal"
                  className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-neutral-300 hover:text-white transition-all cursor-pointer hidden sm:flex items-center justify-center shrink-0"
                  title="Quick View full details"
                >
                  <Eye className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Right Side: Active Reel Video Player + 2 Side Previews */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
              {/* Main Featured Video (Center - 9:16 Portrait Reel Frame) */}
              <div className="sm:col-span-8 relative aspect-9/16 sm:aspect-4/5 max-h-[520px] rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-700 shadow-2xl flex items-center justify-center group">
                <video
                  ref={videoRef}
                  src={activeReel.mediaUrl}
                  playsInline
                  autoPlay
                  muted={isMuted}
                  onTimeUpdate={handleTimeUpdate}
                  onEnded={handleVideoEnded}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={togglePlay}
                />

                {/* Top Overlay: Reel Badge & Live Audio Indicator */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-20">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-white text-[11px] font-mono border border-white/15">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    <span>Reel 0{activeIndex + 1} / 0{reels.length}</span>
                  </div>

                  <div className="pointer-events-auto flex items-center gap-1.5">
                    {/* Sound Toggle Button */}
                    <button suppressHydrationWarning
                      onClick={toggleMute}
                      aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                      className="p-2 rounded-full bg-black/80 hover:bg-black backdrop-blur-md text-white transition-all hover:scale-110 cursor-pointer border border-white/15"
                      title={isMuted ? "Tap to unmute" : "Tap to mute"}
                    >
                      {isMuted ? (
                        <VolumeX className="w-3.5 h-3.5 text-neutral-400" />
                      ) : (
                        <Volume2 className="w-3.5 h-3.5 text-white" />
                      )}
                    </button>

                    {/* Play/Pause Button */}
                    <button suppressHydrationWarning
                      onClick={togglePlay}
                      aria-label={isPlaying ? "Pause reel" : "Play reel"}
                      className="p-2 rounded-full bg-black/80 hover:bg-black backdrop-blur-md text-white transition-all hover:scale-110 cursor-pointer border border-white/15"
                    >
                      {isPlaying ? (
                        <Pause className="w-3.5 h-3.5" />
                      ) : (
                        <Play className="w-3.5 h-3.5 fill-white" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Big Center Play Indicator when Paused */}
                {!isPlaying && (
                  <button suppressHydrationWarning
                    onClick={togglePlay}
                    aria-label="Play video"
                    className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-xs z-10 cursor-pointer"
                  >
                    <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center shadow-2xl transition-transform hover:scale-110">
                      <Play className="w-7 h-7 fill-black ml-1" />
                    </div>
                  </button>
                )}

                {/* Bottom Scrim with Outfit Tag Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none z-10 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-semibold block">
                      Now Playing
                    </span>
                    <p className="text-xs font-bold text-white line-clamp-1">
                      {activeReel.name}
                    </p>
                  </div>

                  <span className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-mono text-neutral-200">
                    {activeReel.code}
                  </span>
                </div>
              </div>

              {/* Two Side Thumbnail Previews (Right on desktop) */}
              <div className="sm:col-span-4 flex sm:flex-col gap-3 h-full justify-between">
                {reels.map((reel, idx) => {
                  if (idx === activeIndex) return null;
                  return (
                    <button suppressHydrationWarning
                      key={reel.id}
                      onClick={() => setActiveIndex(idx)}
                      className="group relative flex-1 min-h-[140px] sm:min-h-[190px] rounded-2xl overflow-hidden bg-neutral-900 border border-white/15 hover:border-white/50 transition-all text-left cursor-pointer hover:scale-[1.01] shadow-lg"
                      title={`Switch to Reel 0${idx + 1}`}
                    >
                      <video
                        src={reel.mediaUrl}
                        muted
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-85 transition-opacity"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                      {/* Header */}
                      <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                        <span className="px-2 py-0.5 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-mono text-neutral-300 border border-white/10">
                          Reel 0{idx + 1}
                        </span>
                        <div className="w-6 h-6 rounded-full bg-white/20 group-hover:bg-white group-hover:text-black text-white flex items-center justify-center transition-colors">
                          <Play className="w-3 h-3 fill-current ml-0.5" />
                        </div>
                      </div>

                      {/* Details */}
                      <div className="absolute bottom-2.5 left-2.5 right-2.5">
                        <span className="text-[10px] font-mono uppercase text-neutral-400 font-semibold block">
                          Up Next
                        </span>
                        <h4 className="text-xs font-bold text-white line-clamp-1 group-hover:underline">
                          {reel.name}
                        </h4>
                        <span className="text-[10px] font-mono text-neutral-400">
                          {reel.code}
                        </span>
                      </div>
                    </button>
                  );
                })}

                {/* Showroom Walk-in Info Card (Standard Clean Architecture) */}
                <div className="hidden sm:flex flex-col justify-center p-3.5 rounded-2xl bg-white/5 border border-white/10 text-xs text-neutral-300 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-white">
                    <Store className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Kavoor Trial Lounge</span>
                  </div>
                  <p className="text-[11px] text-neutral-400 leading-tight">
                    All 3 motion outfits are steamed and in-stock for walk-in fittings at Kavoor showroom.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
