"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Play, Pause, Eye, MessageCircle, Heart, Tag, Film, ArrowUpRight } from "lucide-react";
import { CatalogItem } from "@/data/catalog";
import { InquiryModal } from "./InquiryModal";
import { useWishlist } from "@/context/WishlistContext";
import { catalogItemToProduct } from "@/utils/catalogAdapter";

interface CatalogCardProps {
  item: CatalogItem;
  onQuickView: (item: CatalogItem) => void;
}

export const CatalogCard: React.FC<CatalogCardProps> = ({ item, onQuickView }) => {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [isPlaying, setIsPlaying] = useState(false);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const isLiked = isInWishlist(item.id);

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

  const handleOpenInquiry = (e: React.MouseEvent) => {
    e.stopPropagation();
    setInquiryOpen(true);
  };

  return (
    <>
      <div
        onClick={() => onQuickView(item)}
        className="group relative flex flex-col rounded-3xl bg-white border border-neutral-200/90 overflow-hidden shadow-2xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"
      >
        {/* Prominent Media Container */}
        <div className="relative w-full aspect-4/5 bg-neutral-100 overflow-hidden">
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
                className="absolute bottom-3 left-3 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-white text-xs font-semibold hover:bg-black transition-colors"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5 fill-white" /> : <Play className="w-3.5 h-3.5 fill-white" />}
                <span>{isPlaying ? "Playing" : "Play Reel"}</span>
              </button>
              <div className="absolute top-3 right-3 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-[11px] font-mono">
                <Film className="w-3 h-3 text-neutral-300" />
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
            <span className="pointer-events-auto px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider backdrop-blur-md bg-neutral-950/85 text-white border border-white/15 shadow-xs">
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
                className="w-8 h-8 rounded-full bg-white/95 hover:bg-white text-neutral-800 flex items-center justify-center backdrop-blur-md shadow-sm transition-transform hover:scale-110 cursor-pointer"
                title="Quick View"
              >
                <Eye className="w-3.5 h-3.5" />
              </button>

              {/* Like / Wishlist Button (Persisted to localStorage) */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleWishlist(catalogItemToProduct(item));
                }}
                aria-label={isLiked ? "Remove from favorites" : "Save to favorites"}
                className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md shadow-sm transition-transform hover:scale-110 cursor-pointer ${
                  isLiked
                    ? "bg-red-50 text-red-500 shadow-xs"
                    : "bg-white/95 text-neutral-700 hover:text-red-500"
                }`}
                title={isLiked ? "Saved in Favorites" : "Save to Favorites"}
              >
                <Heart className={`w-3.5 h-3.5 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
              </button>
            </div>
          </div>

          {/* Feature Badge if available */}
          {item.badge && item.mediaType !== "video" && (
            <div className="absolute bottom-3 left-3 z-10 pointer-events-none">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/85 text-white text-[10px] font-mono font-bold tracking-wider uppercase shadow-sm backdrop-blur-xs">
                {item.badge}
              </span>
            </div>
          )}
        </div>

        {/* Card Content & Description */}
        <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow bg-white">
          <div>
            <div className="flex items-center justify-between gap-2 mb-1">
              <span className="text-[10px] font-mono tracking-wider uppercase text-neutral-500 font-medium">
                {item.code}
              </span>
              <span className="text-[11px] font-semibold text-neutral-700">
                {item.fit}
              </span>
            </div>

            <h3 className="font-bold text-sm sm:text-base text-neutral-950 group-hover:text-neutral-700 transition-colors line-clamp-1">
              {item.name}
            </h3>

            <p className="mt-1.5 text-xs text-neutral-600 line-clamp-2 leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Bottom Details (Fabric & Action) */}
          <div className="pt-3 mt-3 border-t border-neutral-100 flex items-center justify-between gap-2">
            <div className="flex items-center gap-1 text-[11px] text-neutral-600 truncate">
              <Tag className="w-3 h-3 text-neutral-500 shrink-0" />
              <span className="truncate">{item.fabric}</span>
            </div>

            <button
              onClick={handleOpenInquiry}
              title="Inquire with Shirt Photo"
              className="shrink-0 group/btn inline-flex items-center gap-2 pl-3 pr-1 py-1 rounded-full bg-neutral-950 text-white text-xs font-semibold hover:bg-black transition-all hover:scale-105 cursor-pointer shadow-xs"
            >
              <span>Inquire</span>
              <span className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center shrink-0">
                <ArrowUpRight className="w-3 h-3" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Instant WhatsApp Inquiry Modal with Shirt Photo & Full Details */}
      <InquiryModal
        item={item}
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
      />
    </>
  );
};
