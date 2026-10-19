"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, MessageCircle, MapPin, Share2, Film, ArrowUpRight } from "lucide-react";
import { CatalogItem } from "@/data/catalog";
import { copyImageToClipboard } from "@/utils/whatsappImage";

interface CatalogModalProps {
  item: CatalogItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CatalogModal: React.FC<CatalogModalProps> = ({ item, isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !item) return null;

  const handleWhatsApp = async () => {
    const phone = "917760468902";

    const text =
      `Hello AB Collections Kavoor!\n\n` +
      `I am inquiring about this outfit:\n` +
      `• Item: "${item.name}"\n` +
      `• Item Code: ${item.code}\n` +
      `• Category: ${item.category}\n` +
      (item.fit ? `• Fit: ${item.fit}\n` : "") +
      (item.fabric ? `• Fabric: ${item.fabric}\n` : "") +
      `\nCould you please share available sizes, in-store trial details, and current stock at your Kavoor showroom?`;

    // Pre-copy image to clipboard so user can press Ctrl+V in WhatsApp Web
    try {
      await copyImageToClipboard(item.mediaUrl);
    } catch {
      // Non-blocking
    }

    // Directly open WhatsApp chat with AB Collections (+91 77604 68902)
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, "_blank");
  };

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      alert("Outfit link copied to clipboard!");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/80 backdrop-blur-md animate-fade-in">
      {/* Background click to dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-4xl bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center backdrop-blur-md transition-all hover:scale-105 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Container (Prominent Display) */}
        <div className="relative w-full md:w-1/2 aspect-4/5 md:aspect-auto md:min-h-[460px] bg-neutral-100 dark:bg-neutral-950 flex items-center justify-center overflow-hidden">
          {item.mediaType === "video" ? (
            <video
              src={item.mediaUrl}
              controls
              autoPlay
              loop
              playsInline
              className="w-full h-full object-contain max-h-[70vh] bg-black"
            />
          ) : (
            <div className="relative w-full h-full min-h-[380px]">
              <Image
                src={item.mediaUrl}
                alt={item.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover md:object-contain p-2"
              />
            </div>
          )}

          {/* Media type indicator */}
          <div className="absolute bottom-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-white text-xs font-mono">
            {item.mediaType === "video" ? (
              <>
                <Film className="w-3.5 h-3.5 text-neutral-300" />
                <span>Video Reel Showcase</span>
              </>
            ) : (
              <span>High Resolution Photo</span>
            )}
          </div>
        </div>

        {/* Item Details (NO Prices) */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            {/* Category & Badge */}
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
                {item.category}
              </span>
              {item.badge && (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-neutral-900 text-white dark:bg-white dark:text-black">
                  {item.badge}
                </span>
              )}
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold text-neutral-900 dark:text-neutral-50 tracking-tight">
              {item.name}
            </h2>
            <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider mt-1">
              Code: {item.code}
            </p>

            {/* Description */}
            <div className="mt-4 p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-100 dark:border-neutral-800">
              <h4 className="text-[10px] uppercase tracking-widest font-mono font-bold text-neutral-400 mb-1">
                Style &amp; Appeal
              </h4>
              <p className="text-sm text-neutral-800 dark:text-neutral-200 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>

            {/* Specifications */}
            <div className="mt-5 grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/40">
                <span className="text-neutral-400 block text-[10px] uppercase font-mono tracking-wider font-semibold">
                  Fit Profile
                </span>
                <span className="font-bold text-neutral-800 dark:text-neutral-200 mt-0.5 block">
                  {item.fit}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/40">
                <span className="text-neutral-400 block text-[10px] uppercase font-mono tracking-wider font-semibold">
                  Fabric &amp; Weave
                </span>
                <span className="font-bold text-neutral-800 dark:text-neutral-200 mt-0.5 block truncate">
                  {item.fabric}
                </span>
              </div>
            </div>

            {/* Style Tags */}
            {item.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Store Location Info */}
            <div className="mt-5 flex items-start gap-2 text-xs text-neutral-600 dark:text-neutral-400">
              <MapPin className="w-4 h-4 text-neutral-700 dark:text-neutral-300 shrink-0 mt-0.5" />
              <span>
                Available for in-store trial at <strong>AB Collections</strong>, Kavoor Tower, Above Union Bank, Kavoor, Mangaluru.
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center gap-3">
            <button
              onClick={handleWhatsApp}
              className="flex-1 group flex items-center justify-between py-2.5 pl-6 pr-2.5 rounded-full bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 font-semibold text-xs sm:text-sm shadow-md transition-all hover:scale-[1.01] active:scale-[0.98] cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Inquire on WhatsApp</span>
              </div>
              <span className="w-8 h-8 rounded-full bg-white dark:bg-neutral-950 text-neutral-950 dark:text-white flex items-center justify-center shrink-0">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </button>

            <button
              onClick={handleShare}
              aria-label="Share Look"
              className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-200 transition-colors cursor-pointer"
              title="Share look"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
