"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  MessageCircle,
  ArrowUpRight,
  Copy,
  Check,
  Download,
  Image as ImageIcon,
  CheckCircle2,
  Heart,
  ShoppingBag,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import {
  copyImageToClipboard,
  downloadProductImage,
} from "@/utils/whatsappImage";
import { useWishlist } from "@/context/WishlistContext";
import { useReserve } from "@/context/ReserveContext";
import { catalogItemToProduct, AdaptableCatalogItem } from "@/utils/catalogAdapter";

export interface InquiryItem extends AdaptableCatalogItem {
  id: string;
  name: string;
  code: string;
  category: string;
  fabric?: string;
  fit?: string;
  mediaUrl: string;
  price?: number;
}

interface InquiryModalProps {
  item: InquiryItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ item, isOpen, onClose }) => {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { items: reserveItems, addToReserve } = useReserve();

  const [copiedText, setCopiedText] = useState(false);
  const [copiedPhoto, setCopiedPhoto] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showPasteTip, setShowPasteTip] = useState(false);
  const [justReserved, setJustReserved] = useState(false);

  if (!isOpen || !item) return null;

  const product = catalogItemToProduct(item);
  const isFavorited = isInWishlist(item.id);
  const isReserved = reserveItems.some((r) => r.product.id === item.id);

  // Clean, professional WhatsApp message WITHOUT raw file links or localhost URLs
  const formattedMessage =
    `Hello AB Collections Kavoor!\n\n` +
    `I would like to inquire about this outfit / shirt:\n` +
    `• Item: "${item.name}"\n` +
    `• Code: ${item.code}\n` +
    `• Category: ${item.category}\n` +
    (item.fit ? `• Fit: ${item.fit}\n` : "") +
    (item.fabric ? `• Fabric: ${item.fabric}\n` : "") +
    (item.price ? `• Price: ₹${item.price.toLocaleString("en-IN")}\n` : "") +
    `\nCould you please share available sizes, in-store trial details, and current stock at your Kavoor showroom?`;

  const handleCopyText = () => {
    navigator.clipboard.writeText(formattedMessage);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2200);
  };

  const handleCopyPhoto = async () => {
    setIsProcessing(true);
    const success = await copyImageToClipboard(item.mediaUrl);
    setIsProcessing(false);
    if (success) {
      setCopiedPhoto(true);
      setShowPasteTip(true);
      setTimeout(() => setCopiedPhoto(false), 3500);
    } else {
      downloadProductImage(item.mediaUrl, `${item.code}.jpg`);
      alert("Image downloaded! You can drag it directly into your WhatsApp chat.");
    }
  };

  const handleDownload = () => {
    downloadProductImage(item.mediaUrl, `${item.code}.jpg`);
  };

  const handleAddToReserve = () => {
    addToReserve(product, item.fit || "Standard", "Default", 1);
    setJustReserved(true);
    setTimeout(() => setJustReserved(false), 3000);
  };

  const handleSendToWhatsApp = async () => {
    setIsProcessing(true);

    // Pre-copy the shirt photo to clipboard for instant Ctrl+V pasting in WhatsApp
    try {
      await copyImageToClipboard(item.mediaUrl);
      setCopiedPhoto(true);
      setShowPasteTip(true);
    } catch {
      // Non-blocking
    }

    setIsProcessing(false);

    // Open DIRECTLY into WhatsApp chat with AB Collections (+91 98456 74374)
    const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
      formattedMessage
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      <div
        className="relative z-10 w-full max-w-lg bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between bg-neutral-50/70 dark:bg-neutral-900/70">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 pulse-dot" />
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-900 dark:text-white">
              Outfit Details &amp; Inquiry
            </h3>
          </div>
          <div className="flex items-center gap-1.5">
            {/* Wishlist / Favorite Heart Toggle */}
            <button suppressHydrationWarning
              type="button"
              onClick={() => toggleWishlist(product)}
              aria-label={isFavorited ? "Saved in Favorites" : "Add to Favorites"}
              className={`p-2 rounded-full transition-all cursor-pointer ${
                isFavorited
                  ? "bg-red-50 text-red-500 dark:bg-red-950/60"
                  : "text-neutral-400 hover:text-red-500 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              }`}
              title={isFavorited ? "Saved in Favorites (Click to remove)" : "Save to Favorites"}
            >
              <Heart className={`w-4 h-4 ${isFavorited ? "fill-red-500 text-red-500" : ""}`} />
            </button>
            <button suppressHydrationWarning
              onClick={onClose}
              aria-label="Close inquiry"
              className="p-1.5 rounded-full text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 sm:space-y-5">
          {/* Shirt Photo & Info Card */}
          <div className="p-3 sm:p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200/80 dark:border-neutral-700/60 flex flex-row gap-3 sm:gap-4 items-center">
            {/* Real Shirt Image */}
            <div className="relative w-20 h-24 sm:w-28 sm:h-32 rounded-xl overflow-hidden bg-neutral-200 dark:bg-neutral-950 shrink-0 shadow-sm border border-neutral-200 dark:border-neutral-700">
              <Image
                src={item.mediaUrl}
                alt={item.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 80px, 112px"
              />
            </div>

            {/* Info Query Details */}
            <div className="flex-1 min-w-0 space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block font-semibold">
                Code: {item.code}
              </span>
              <h4 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white leading-snug line-clamp-2">
                {item.name}
              </h4>
              <div className="flex items-center gap-2 text-xs text-neutral-500 mt-1 flex-wrap">
                <span className="px-2 py-0.5 rounded-md bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 font-mono text-[10px] font-semibold">
                  {item.category}
                </span>
                {item.fit && (
                  <span className="text-neutral-600 dark:text-neutral-300 font-medium">
                    {item.fit}
                  </span>
                )}
              </div>
              {item.fabric && (
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-tight">
                  <span className="font-semibold text-neutral-700 dark:text-neutral-300">Fabric:</span>{" "}
                  {item.fabric}
                </p>
              )}

              {/* Direct Photo & Reserve Actions */}
              <div className="flex items-center gap-2 pt-1 flex-wrap">
                <button suppressHydrationWarning
                  type="button"
                  onClick={handleCopyPhoto}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold transition-all cursor-pointer ${
                    copiedPhoto
                      ? "bg-emerald-600 text-white"
                      : "bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-600 text-neutral-800 dark:text-neutral-200"
                  }`}
                >
                  {copiedPhoto ? <Check className="w-3 h-3" /> : <ImageIcon className="w-3 h-3" />}
                  <span>{copiedPhoto ? "Photo Copied!" : "Copy Photo"}</span>
                </button>

                <button suppressHydrationWarning
                  type="button"
                  onClick={handleDownload}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white bg-transparent border border-neutral-300 dark:border-neutral-600 transition-colors cursor-pointer"
                  title="Download shirt photo"
                >
                  <Download className="w-3 h-3" />
                  <span>Save</span>
                </button>

                {/* Hold / Reserve button */}
                <button suppressHydrationWarning
                  type="button"
                  onClick={handleAddToReserve}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold transition-all cursor-pointer ${
                    justReserved || isReserved
                      ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                      : "bg-neutral-100 hover:bg-neutral-200 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                  }`}
                  title="Hold for in-store trial at Kavoor showroom"
                >
                  <ShoppingBag className="w-3 h-3" />
                  <span>{justReserved ? "Reserved!" : isReserved ? "In Reserve List" : "Hold for Trial"}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Toast / Banner for Reserve or Photo */}
          {justReserved && (
            <div className="p-3 rounded-xl bg-neutral-900 text-white text-xs flex items-center justify-between gap-2 animate-in fade-in duration-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Added to your In-Store Reserve List (stored on your device)!</span>
              </div>
              <Link
                href="/reserve"
                onClick={onClose}
                className="underline font-bold text-emerald-300 hover:text-emerald-200 shrink-0"
              >
                View Reserve List →
              </Link>
            </div>
          )}

          {showPasteTip && (
            <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-800 text-xs text-emerald-900 dark:text-emerald-200 flex items-start gap-2.5 animate-in fade-in duration-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Actual Shirt Photo copied to clipboard!</p>
                <p className="text-[11px] text-emerald-700 dark:text-emerald-300 mt-0.5">
                  In WhatsApp chat, simply press <kbd className="px-1 py-0.5 rounded bg-emerald-200 dark:bg-emerald-800 font-mono font-bold">Ctrl + V</kbd> to paste the shirt image right alongside your inquiry!
                </p>
              </div>
            </div>
          )}

          {/* Formatted Message Payload Preview */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs font-mono font-semibold text-neutral-500 uppercase tracking-wider">
              <span>Inquiry Message Query</span>
              <button suppressHydrationWarning
                onClick={handleCopyText}
                className="text-xs font-semibold text-neutral-900 dark:text-white hover:underline flex items-center gap-1 cursor-pointer"
              >
                {copiedText ? (
                  <Check className="w-3 h-3 text-emerald-500" />
                ) : (
                  <Copy className="w-3 h-3" />
                )}
                <span>{copiedText ? "Copied" : "Copy Query"}</span>
              </button>
            </div>

            <div className="p-3.5 rounded-2xl bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-800 dark:text-neutral-200 whitespace-pre-line leading-relaxed max-h-36 overflow-y-auto select-all">
              {formattedMessage}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/50 flex flex-col sm:flex-row items-center gap-3">
          <button suppressHydrationWarning
            onClick={handleSendToWhatsApp}
            disabled={isProcessing}
            className="w-full sm:flex-1 group flex items-center justify-between py-2.5 pl-6 pr-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm shadow-md transition-all hover:scale-[1.01] active:scale-[0.98] cursor-pointer disabled:opacity-75"
          >
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
              <span>Send Inquiry to WhatsApp</span>
            </div>
            <span className="w-8 h-8 rounded-full bg-emerald-950 text-white flex items-center justify-center shrink-0">
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </button>

          <button suppressHydrationWarning
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-neutral-300 dark:border-neutral-700 text-xs font-semibold hover:border-black dark:hover:border-white transition-colors cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
