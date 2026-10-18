"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Play, Pause, Eye, MessageCircle, Heart, Sparkles, Tag, Film } from "lucide-react";
import { CatalogItem } from "@/data/catalog";

interface CatalogCardProps {
  item: CatalogItem;
  onQuickView: (item: CatalogItem) => void;
}

export const CatalogCard: React.FC<CatalogCardProps> = ({ item, onQuickView }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideoPlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const openWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    const phone = "917760468902";
    const text = `Hello AB Collections Kavoor! I would like to inquire about "${item.name}" (Code: ${item.code}, Category: ${item.category}). Could you share available sizes and in-store details?`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, "_blank");
  };

  const getCategoryTheme = (category: string) => {
    switch (category) {
      case "T-Shirts":
        return "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20";
      case "Shirts":
        return "bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20";
      case "Full Outfits":
        return "bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-500/20";
      default:
        return "bg-neutral-500/10 text-neutral-700 dark:text-neutral-300 border-neutral-500/20";
    }
  };

  return (
    <div
      onClick={() => onQuickView(item)}
      className="group relative flex flex-col rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"
    >
      {/* Prominent Media Container */}
      <div className="relative w-full aspect-4/5 bg-neutral-100 dark:bg-neutral-950 overflow-hidden">
        {item.mediaType === "video" ? (
          <div className="relative w-full h-full">
            <video
              ref={videoRef}
              src={item.mediaUrl}
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
              onMouseEnter={() => {
                if (videoRef.current) {
                  videoRef.current.play();
                  setIsPlaying(true);
                }
              }}
              onMouseLeave={() => {
                if (videoRef.current) {
                  videoRef.current.pause();
                  setIsPlaying(false);
                }
              }}
            />
            {/* Video overlay controls */}
            <button
              onClick={toggleVideoPlay}
              aria-label={isPlaying ? "Pause video" : "Play video"}
              className="absolute bottom-3 left-3 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-semibold hover:bg-black/80 transition-colors"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 fill-white" /> : <Play className="w-3.5 h-3.5 fill-white" />}
              <span>{isPlaying ? "Playing" : "Play Reel"}</span>
            </button>
            <div className="absolute top-3 right-3 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-[11px] font-medium">
              <Film className="w-3 h-3 text-amber-400" />
              <span>Video</span>
            </div>
          </div>
        ) : (
          <div className="relative w-full h-full">
            <Image
              src={item.mediaUrl}
              alt={item.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
          </div>
        )}

        {/* Top Badges & Actions Overlay */}
        <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between pointer-events-none">
          {/* Category Badge */}
          <span
            className={`pointer-events-auto px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider backdrop-blur-md border ${getCategoryTheme(
              item.category
            )}`}
          >
            {item.category}
          </span>

          <div className="flex items-center gap-1.5 pointer-events-auto">
            {/* Quick View Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onQuickView(item);
              }}
              aria-label="Quick View"
              className="w-8 h-8 rounded-full bg-white/90 dark:bg-neutral-900/90 hover:bg-white dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 flex items-center justify-center backdrop-blur-md shadow-sm transition-transform hover:scale-110"
              title="Quick View"
            >
              <Eye className="w-3.5 h-3.5" />
            </button>

            {/* Like Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsLiked(!isLiked);
              }}
              aria-label="Favorite item"
              className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md shadow-sm transition-transform hover:scale-110 ${
                isLiked
                  ? "bg-red-50 text-red-500 dark:bg-red-950/80"
                  : "bg-white/90 dark:bg-neutral-900/90 text-neutral-700 dark:text-neutral-200 hover:text-red-500"
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${isLiked ? "fill-red-500" : ""}`} />
            </button>
          </div>
        </div>

        {/* Feature Badge if available */}
        {item.badge && item.mediaType !== "video" && (
          <div className="absolute bottom-3 left-3 z-10 pointer-events-none">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/75 dark:bg-white/90 text-white dark:text-black text-[10px] font-extrabold tracking-wide uppercase shadow-sm backdrop-blur-xs">
              <Sparkles className="w-2.5 h-2.5 text-amber-400 dark:text-amber-600" />
              {item.badge}
            </span>
          </div>
        )}
      </div>

      {/* Card Content & Elegant Description */}
      <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow bg-white dark:bg-neutral-900">
        <div>
          <div className="flex items-center justify-between gap-2 mb-1">
            <span className="text-[10px] font-mono tracking-wider uppercase text-neutral-400">
              {item.code}
            </span>
            <span className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400">
              {item.fit}
            </span>
          </div>

          <h3 className="font-bold text-sm sm:text-base text-neutral-900 dark:text-neutral-100 group-hover:text-amber-500 transition-colors line-clamp-1">
            {item.name}
          </h3>

          {/* Short, Elegant English Description (1–2 lines) */}
          <p className="mt-1.5 text-xs text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* Bottom Details (Fabric, WhatsApp Inquiry Action, NO Price) */}
        <div className="pt-3 mt-3 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1 text-[11px] text-neutral-500 dark:text-neutral-400 truncate">
            <Tag className="w-3 h-3 text-neutral-400 shrink-0" />
            <span className="truncate">{item.fabric}</span>
          </div>

          <button
            onClick={openWhatsApp}
            title="Inquire on WhatsApp"
            className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/60 dark:hover:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 text-xs font-semibold transition-all hover:scale-105"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Inquire</span>
          </button>
        </div>
      </div>
    </div>
  );
};
