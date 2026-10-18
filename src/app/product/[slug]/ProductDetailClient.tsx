"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  ShoppingBag,
  MessageCircle,
  Share2,
  Star,
  Ruler,
  ShieldCheck,
  Check,
  ChevronDown,
  ArrowUpRight,
  Store,
} from "lucide-react";
import { products } from "@/data/products";
import { Product } from "@/types";
import { useWishlist } from "@/context/WishlistContext";
import { useReserve } from "@/context/ReserveContext";
import { siteConfig } from "@/config/site";
import { SizeGuideModal } from "@/components/product/SizeGuideModal";
import { ProductCard } from "@/components/product/ProductCard";

interface ProductDetailClientProps {
  product: Product;
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addToReserve } = useReserve();

  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || "M");
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0]?.name || "Standard");
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [addedToast, setAddedToast] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);

  // Accordion open states
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({
    details: true,
    care: false,
    store: true,
  });

  const toggleAccordion = (key: string) => {
    setOpenAccordions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const isFavorited = isInWishlist(product.id);

  const handleAddReserve = () => {
    addToReserve(product, selectedSize, selectedColor);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2500);
  };

  const shareProduct = () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      navigator.share({
        title: product.name,
        text: `Check out ${product.name} at AB Collections Kavoor!`,
        url: window.location.href,
      });
    } else if (typeof navigator !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2000);
    }
  };

  // Prefilled WhatsApp Inquiry
  const directWhatsAppUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    `Hello AB Collections Kavoor! I would like to reserve this outfit for trial:\n\n*${product.name}*\n• Code: ${product.code}\n• Size: ${selectedSize}\n• Color: ${selectedColor}\n• Price: ₹${product.price}\n• Page: ${siteConfig.url}/product/${product.slug}\n\nPlease let me know if it's available in store today!`
  )}`;

  // Related products
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const fallbackRelated =
    related.length > 0 ? related : products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-neutral-400 mb-8 font-medium">
        <Link href="/" className="hover:text-black dark:hover:text-white">
          Home
        </Link>
        <span>/</span>
        <Link href="/shop" className="hover:text-black dark:hover:text-white">
          Shop
        </Link>
        <span>/</span>
        <Link
          href={`/shop?category=${encodeURIComponent(product.category)}`}
          className="hover:text-black dark:hover:text-white"
        >
          {product.category}
        </Link>
        <span>/</span>
        <span className="text-neutral-900 dark:text-neutral-100 truncate max-w-xs">
          {product.name}
        </span>
      </nav>

      {/* Main Product Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Image Presentation Gallery */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative w-full aspect-4/5 rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 flex items-center justify-center p-8 shadow-sm">
            <div className="relative w-full h-full max-h-[500px]">
              <Image
                src={product.images[activeImage] || product.images[0]}
                alt={product.name}
                fill
                priority
                className="object-contain p-4 drop-shadow-lg transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>

            {/* In-store badge overlay */}
            <div className="absolute top-6 left-6 flex items-center gap-2 bg-white/90 dark:bg-black/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-black/5 text-xs font-bold shadow-xs">
              <Store className="w-3.5 h-3.5 text-amber-500" />
              <span>Available in Kavoor Store</span>
            </div>

            {/* Product Code */}
            <div className="absolute bottom-6 left-6 font-mono text-[11px] uppercase tracking-wider text-neutral-500 bg-white/80 dark:bg-black/80 px-2.5 py-1 rounded-full">
              Code: {product.code}
            </div>
          </div>

          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative w-20 h-20 rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 border-2 transition-all ${
                    activeImage === idx
                      ? "border-black dark:border-white scale-105"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image src={img} alt="thumbnail" fill className="object-contain p-1" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Product Info & Actions */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-amber-500 font-bold">
                {product.category}
              </span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-semibold">
                {product.fit}
              </span>
            </div>

            <h1 className="editorial-headline text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 mt-2">
              {product.name}
            </h1>

            {/* Ratings & Price */}
            <div className="flex items-center gap-4 mt-3">
              <span className="text-3xl font-black text-neutral-950 dark:text-neutral-50">
                ₹{product.price.toLocaleString("en-IN")}
              </span>
              {product.originalPrice && (
                <span className="text-base text-neutral-400 line-through">
                  ₹{product.originalPrice.toLocaleString("en-IN")}
                </span>
              )}

              <div className="flex items-center gap-1.5 bg-amber-500/10 px-3 py-1 rounded-full text-xs font-bold text-amber-600 dark:text-amber-400 ml-auto">
                <Star className="w-3.5 h-3.5 fill-amber-500" />
                <span>{product.rating}</span>
                <span className="text-neutral-400 font-normal">({product.reviewsCount} reviews)</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-4 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Color Variants */}
          <div className="pt-2">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 block mb-2">
              Select Color: <span className="text-black dark:text-white">{selectedColor}</span>
            </span>
            <div className="flex items-center gap-2.5">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  title={color.name}
                  className={`w-8 h-8 rounded-full border-2 transition-transform ${
                    selectedColor === color.name
                      ? "border-black dark:border-white scale-110 shadow-sm"
                      : "border-transparent opacity-80 hover:opacity-100"
                  }`}
                  style={{ backgroundColor: color.hex }}
                />
              ))}
            </div>
          </div>

          {/* Size Selector & Guide */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                Select Size: <span className="text-black dark:text-white">{selectedSize}</span>
              </span>
              <button
                onClick={() => setSizeGuideOpen(true)}
                className="text-xs text-neutral-500 hover:text-black dark:hover:text-white underline flex items-center gap-1"
              >
                <Ruler className="w-3.5 h-3.5" />
                <span>Size &amp; Fit Guide</span>
              </button>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  className={`min-w-12 h-11 px-4 rounded-2xl text-xs font-bold transition-all border ${
                    selectedSize === s
                      ? "bg-black text-white dark:bg-white dark:text-black border-transparent shadow-xs scale-105"
                      : "border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:border-black"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Reserve / WhatsApp Action Suite */}
          <div className="pt-4 space-y-3">
            {addedToast && (
              <div className="text-center text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 py-2 rounded-2xl animate-in fade-in">
                ✓ Added to your Reserve List! View from top bar.
              </div>
            )}

            <div className="flex items-center gap-3">
              <button
                onClick={handleAddReserve}
                className="flex-1 flex items-center justify-center gap-2.5 bg-black dark:bg-white text-white dark:text-black py-4 rounded-full text-xs sm:text-sm font-extrabold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all hover:scale-[1.01] active:scale-[0.98] shadow-md"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Hold for In-Store Trial</span>
              </button>

              <button
                onClick={() => toggleWishlist(product)}
                aria-label="Save to Wishlist"
                className={`p-4 rounded-full border transition-colors ${
                  isFavorited
                    ? "border-red-500 text-red-500 bg-red-50 dark:bg-red-950/40"
                    : "border-neutral-300 dark:border-neutral-700 text-neutral-600 hover:border-black"
                }`}
              >
                <Heart className={`w-5 h-5 ${isFavorited ? "fill-red-500" : ""}`} />
              </button>

              <button
                onClick={shareProduct}
                aria-label="Share outfit"
                className="p-4 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-600 hover:border-black transition-colors"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            {/* Direct WhatsApp Instant Hold */}
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-xs sm:text-sm font-bold transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Direct WhatsApp Inquiry / Instant Hold</span>
            </a>

            {copiedShare && (
              <div className="text-center text-[11px] text-amber-600 font-semibold animate-in fade-in">
                Link copied to clipboard!
              </div>
            )}
          </div>

          {/* Accordion Modules */}
          <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800 space-y-3">
            {/* 1. Fabric & Specifications */}
            <div className="border border-neutral-200/80 dark:border-neutral-800 rounded-2xl overflow-hidden">
              <button
                onClick={() => toggleAccordion("details")}
                className="w-full flex items-center justify-between p-4 text-xs font-bold uppercase tracking-wider text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
              >
                <span>Fabric &amp; Architecture Details</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    openAccordions.details ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openAccordions.details && (
                <div className="p-4 pt-0 text-xs text-neutral-600 dark:text-neutral-400 space-y-2">
                  <p className="font-semibold text-neutral-900 dark:text-neutral-100">
                    Fabric: {product.fabric}
                  </p>
                  <ul className="list-disc pl-4 space-y-1">
                    {product.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* 2. Care Guide */}
            <div className="border border-neutral-200/80 dark:border-neutral-800 rounded-2xl overflow-hidden">
              <button
                onClick={() => toggleAccordion("care")}
                className="w-full flex items-center justify-between p-4 text-xs font-bold uppercase tracking-wider text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
              >
                <span>Wash &amp; Care Recommendations</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    openAccordions.care ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openAccordions.care && (
                <div className="p-4 pt-0 text-xs text-neutral-600 dark:text-neutral-400 space-y-1.5">
                  {product.care.map((c, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 3. In-Store Trial Policy */}
            <div className="border border-neutral-200/80 dark:border-neutral-800 rounded-2xl overflow-hidden">
              <button
                onClick={() => toggleAccordion("store")}
                className="w-full flex items-center justify-between p-4 text-xs font-bold uppercase tracking-wider text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
              >
                <span>Kavoor Showroom &amp; Exchange Policy</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    openAccordions.store ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openAccordions.store && (
                <div className="p-4 pt-0 text-xs text-neutral-600 dark:text-neutral-400 space-y-2">
                  <p>
                    All items reserved online are set aside at our Kavoor store for up to 48 hours for you to try in person.
                  </p>
                  <p>
                    In-store exchanges are honored within 7 days of purchase with original tags intact.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="mt-24 pt-16 border-t border-neutral-200 dark:border-neutral-800">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-amber-500 font-bold">
              Complete The Look
            </span>
            <h2 className="editorial-headline text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 mt-1">
              You May Also Like
            </h2>
          </div>
          <Link
            href="/shop"
            className="text-xs font-semibold text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white flex items-center gap-1"
          >
            <span>View All</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fallbackRelated.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>

      {/* Size Guide Modal */}
      <SizeGuideModal
        isOpen={sizeGuideOpen}
        onClose={() => setSizeGuideOpen(false)}
        category={product.category}
      />
    </div>
  );
}
