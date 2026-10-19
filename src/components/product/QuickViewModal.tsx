"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Heart, ShoppingBag, ArrowUpRight, MessageCircle, Star, ShieldCheck, Ruler } from "lucide-react";
import { Product } from "@/types";
import { useWishlist } from "@/context/WishlistContext";
import { useReserve } from "@/context/ReserveContext";
import { siteConfig } from "@/config/site";
import { SizeGuideModal } from "./SizeGuideModal";

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  isOpen,
  onClose,
}) => {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addToReserve } = useReserve();
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [addedNotice, setAddedNotice] = useState(false);

  // Initialize selected size and color when product opens
  React.useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes[0] || "M");
      setSelectedColor(product.colors[0]?.name || "Standard");
      setSelectedImage(0);
      setAddedNotice(false);
    }
  }, [product]);

  if (!isOpen || !product) return null;

  const isFavorited = isInWishlist(product.id);

  const handleAddReserve = () => {
    addToReserve(product, selectedSize, selectedColor);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2500);
  };

  const origin = typeof window !== "undefined" ? window.location.origin : siteConfig.url;
  const activePhoto = product.images[selectedImage] || product.images[0];
  const photoUrl = activePhoto?.startsWith("http") ? activePhoto : `${origin}${activePhoto}`;

  const directWhatsAppUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    `Hello AB Collections Kavoor!\n\n` +
    `I want to check availability and reserve this piece:\n` +
    `• Item: "${product.name}"\n` +
    `• Code: ${product.code}\n` +
    `• Size: ${selectedSize}\n` +
    `• Color: ${selectedColor}\n` +
    `• Price: ₹${product.price.toLocaleString("en-IN")}\n` +
    `• Link: ${origin}/product/${product.slug}\n\n` +
    `Could you please let me know if this is available for trial at Kavoor?`
  )}`;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
        <div
          className="relative w-full max-w-3xl bg-white dark:bg-neutral-900 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row max-h-[92vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close preview"
            className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 p-2 rounded-full bg-white/80 dark:bg-black/80 hover:bg-white dark:hover:bg-black text-neutral-800 dark:text-neutral-200 shadow-sm transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left: Product Image Gallery */}
          <div className="w-full md:w-1/2 bg-neutral-100 dark:bg-neutral-800 p-4 sm:p-6 flex flex-col items-center justify-center relative">
            <div className="relative w-full aspect-square max-h-[240px] sm:max-h-[340px] rounded-xl sm:rounded-2xl overflow-hidden">
              <Image
                src={product.images[selectedImage] || product.images[0]}
                alt={product.name}
                fill
                className="object-contain p-4 drop-shadow-md"
              />
            </div>

            {/* Thumbnail switcher if multi images */}
            {product.images.length > 1 && (
              <div className="flex gap-2 mt-4">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative w-12 h-12 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                      selectedImage === idx
                        ? "border-black dark:border-white scale-105"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image src={img} alt="thumbnail" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Info & Actions */}
          <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase text-neutral-500 tracking-wider">
                  {product.code}
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 font-semibold font-mono">
                  {product.fit}
                </span>
              </div>

              <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-50 mt-1">
                {product.name}
              </h3>

              {/* Price & Rating */}
              <div className="flex items-center gap-3 mt-2">
                <span className="text-2xl font-extrabold text-neutral-900 dark:text-neutral-50">
                  ₹{product.price.toLocaleString("en-IN")}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-neutral-400 line-through">
                    ₹{product.originalPrice.toLocaleString("en-IN")}
                  </span>
                )}
                <div className="flex items-center gap-1 text-xs text-neutral-700 dark:text-neutral-300 font-bold ml-auto">
                  <Star className="w-3.5 h-3.5 fill-neutral-900 dark:fill-white text-neutral-900 dark:text-white" />
                  <span>{product.rating}</span>
                  <span className="text-neutral-400 font-normal">({product.reviewsCount})</span>
                </div>
              </div>

              <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-3 line-clamp-2 leading-relaxed">
                {product.description}
              </p>

              {/* Color Swatches */}
              <div className="mt-4">
                <div className="flex items-center justify-between text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                  <span>Color: {selectedColor}</span>
                </div>
                <div className="flex items-center gap-2">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      title={c.name}
                      className={`w-6 h-6 rounded-full border-2 transition-transform cursor-pointer ${
                        selectedColor === c.name
                          ? "border-black dark:border-white scale-110 shadow-xs"
                          : "border-transparent opacity-80 hover:opacity-100"
                      }`}
                      style={{ backgroundColor: c.hex }}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selector */}
              <div className="mt-4">
                <div className="flex items-center justify-between text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                  <span>Size: {selectedSize}</span>
                  <button
                    onClick={() => setSizeGuideOpen(true)}
                    className="text-neutral-500 hover:text-black dark:hover:text-white flex items-center gap-1 font-normal underline cursor-pointer"
                  >
                    <Ruler className="w-3 h-3" />
                    Size Guide
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`min-w-10 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                        selectedSize === s
                          ? "bg-black text-white dark:bg-white dark:text-black shadow-xs scale-105"
                          : "bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800 space-y-2.5">
              {addedNotice && (
                <div className="text-center text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 py-1.5 rounded-xl animate-in fade-in">
                  ✓ Added to your Reserve List!
                </div>
              )}

              <div className="flex items-center gap-2">
                <button
                  onClick={handleAddReserve}
                  className="flex-1 group flex items-center justify-between pl-5 pr-1.5 py-1.5 rounded-full bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 font-medium text-xs hover:bg-black dark:hover:bg-neutral-100 transition-all active:scale-[0.98] cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Hold for Trial</span>
                  </div>
                  <span className="w-7 h-7 rounded-full bg-white dark:bg-neutral-950 text-neutral-950 dark:text-white flex items-center justify-center shrink-0">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </button>

                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-900 dark:text-white text-xs font-medium border border-neutral-200 dark:border-neutral-700 transition-all shrink-0"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-500" />
                  <span className="hidden sm:inline">WhatsApp</span>
                </a>

                <button
                  onClick={() => toggleWishlist(product)}
                  aria-label="Wishlist"
                  className={`p-2.5 rounded-full border transition-colors cursor-pointer ${
                    isFavorited
                      ? "border-red-500 text-red-500 bg-red-50 dark:bg-red-950/30"
                      : "border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 hover:border-black"
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isFavorited ? "fill-red-500" : ""}`} />
                </button>
              </div>

              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-1.5 text-[11px] text-neutral-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span>In-store trial ready in Kavoor</span>
                </div>
                <Link
                  href={`/product/${product.slug}`}
                  onClick={onClose}
                  className="text-xs font-semibold text-neutral-900 dark:text-neutral-100 hover:underline flex items-center gap-1"
                >
                  <span>Full Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SizeGuideModal
        isOpen={sizeGuideOpen}
        onClose={() => setSizeGuideOpen(false)}
        category={product.category}
      />
    </>
  );
};
