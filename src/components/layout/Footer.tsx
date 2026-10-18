import React from "react";
import Link from "next/link";
import { ArrowUpRight, MapPin, Phone, Clock, MessageSquare } from "lucide-react";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { siteConfig } from "@/config/site";
import { productCategories } from "@/data/products";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-12 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-neutral-800">
          {/* Brand & Store Bio */}
          <div className="lg:col-span-2 space-y-5">
            <div>
              <span className="editorial-headline text-3xl sm:text-4xl font-extrabold tracking-tighter text-white">
                AB COLLECTIONS
              </span>
              <p className="text-xs uppercase tracking-[0.2em] text-amber-500 font-semibold mt-1">
                Men&apos;s Exclusive Clothing • Kavoor, Mangaluru
              </p>
            </div>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              Curated for the modern gentleman. Specializing in high-density utility cargo shirts, tailored windowpane checks, evening satin jacquards, and coastal linen trousers.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs font-medium text-neutral-200 hover:text-white transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-pink-500" />
                <span>{siteConfig.instagram.handle}</span>
                <ArrowUpRight className="w-3 h-3 text-neutral-500" />
              </a>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-800/40 text-xs font-medium text-emerald-300 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp Store</span>
              </a>
            </div>
          </div>

          {/* Quick Categories */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-4">
              Categories
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-300">
              {productCategories.slice(1, 7).map((cat) => (
                <li key={cat}>
                  <Link
                    href={`/shop?category=${encodeURIComponent(cat)}`}
                    className="hover:text-amber-400 transition-colors"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/shop" className="text-amber-400 font-medium hover:underline">
                  View All Outfits →
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer & Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-4">
              Explore & Support
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-300">
              <li>
                <Link href="/lookbook" className="hover:text-white transition-colors">
                  Lookbook & Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Our Kavoor Atelier
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="hover:text-white transition-colors">
                  My Saved Outfits
                </Link>
              </li>
              <li>
                <Link href="/reserve" className="hover:text-white transition-colors">
                  Hold / Reserve List
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  Fit & Sizing FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  In-Store Exchange Policy
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-neutral-500 hover:text-neutral-400 transition-colors">
                  Staff Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Kavoor Store Info */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-4">
              Kavoor Store
            </h4>
            <div className="space-y-3 text-xs text-neutral-400 leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-neutral-400 shrink-0" />
                <span>{siteConfig.businessHours.display}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-neutral-400 shrink-0" />
                <span>{siteConfig.contact.phoneDisplay}</span>
              </div>
              <div className="pt-2">
                <a
                  href={siteConfig.contact.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-white hover:text-amber-400 underline underline-offset-4"
                >
                  <span>Get Driving Directions</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Giant Watermark & Bottom Bar */}
        <div className="pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-neutral-500 text-center md:text-left">
            © 2026 AB Collections. All rights reserved. Kavoor, Mangaluru, Karnataka.
          </p>

          <div className="flex items-center gap-6 text-xs text-neutral-400">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy & Guidelines
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Store Directions
            </Link>
            <span className="text-neutral-600">•</span>
            <span className="text-amber-500/80 font-medium">Men&apos;s Exclusive</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
