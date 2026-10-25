import React from "react";
import Link from "next/link";
import { ArrowUpRight, MapPin, Phone, Clock, MessageSquare, ArrowRight } from "lucide-react";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { siteConfig } from "@/config/site";
import { productCategories } from "@/data/products";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 text-white pt-20 pb-12 border-t border-neutral-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-neutral-800/80">
          {/* Brand & Store Bio */}
          <div className="lg:col-span-2 space-y-5">
            <div>
              <span className="editorial-headline text-3xl sm:text-4xl font-extrabold tracking-tighter text-white">
                AB COLLECTIONS
              </span>
              <p className="text-xs uppercase tracking-[0.25em] font-mono text-neutral-400 font-semibold mt-1">
                Men&apos;s Exclusive Clothing • Kavoor, Mangaluru
              </p>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed">
              Curated for modern masculine silhouettes. High-density utility cargo shirts, tailored windowpane checks, and coastal linen trousers.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={siteConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs font-medium text-neutral-200 hover:text-white transition-all duration-300 hover:translate-x-1.5"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-neutral-300 group-hover:scale-110 transition-transform" />
                <span>{siteConfig.instagram.handle}</span>
                <ArrowUpRight className="w-3 h-3 text-neutral-500 group-hover:text-white transition-colors" />
              </a>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs font-medium text-neutral-200 hover:text-white transition-all duration-300 hover:translate-x-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>WhatsApp Store</span>
              </a>
            </div>
          </div>

          {/* Quick Categories with Interactive Glide Hover */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-mono text-neutral-400 font-semibold mb-4">
              Categories
            </h4>
            <ul className="space-y-2.5 text-xs">
              {productCategories.slice(1, 7).map((cat) => (
                <li key={cat}>
                  <Link
                    href={`/shop?category=${encodeURIComponent(cat)}`}
                    className="group inline-flex items-center text-neutral-400 hover:text-white transition-all duration-300 ease-out hover:translate-x-2.5"
                  >
                    <span className="w-0 group-hover:w-3.5 overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out text-neutral-400 font-mono text-[11px] shrink-0">
                      →
                    </span>
                    <span className="transition-colors">
                      {cat}
                    </span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/shop"
                  className="group inline-flex items-center gap-1 text-neutral-300 hover:text-white font-medium transition-all duration-300 ease-out hover:translate-x-2.5 mt-1"
                >
                  <span className="w-0 group-hover:w-3.5 overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out text-neutral-400 font-mono text-[11px] shrink-0">
                    →
                  </span>
                  <span>View All Outfits</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-400 group-hover:text-white" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer & Navigation with Interactive Glide Hover */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-mono text-neutral-400 font-semibold mb-4">
              Explore &amp; Support
            </h4>
            <ul className="space-y-2.5 text-xs">
              {[
                { label: "Events & Festive Offers", href: "/events" },
                { label: "Lookbook & Archive", href: "/lookbook" },
                { label: "Our Kavoor Atelier", href: "/about" },
                { label: "Saved Outfits", href: "/wishlist" },
                { label: "In-Store Hold List", href: "/reserve" },
                { label: "Fit & Sizing Guidelines", href: "/faq" },
                { label: "In-Store Exchange Policy", href: "/privacy" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center text-neutral-400 hover:text-white transition-all duration-300 ease-out hover:translate-x-2.5"
                  >
                    <span className="w-0 group-hover:w-3.5 overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out text-neutral-400 font-mono text-[11px] shrink-0">
                      →
                    </span>
                    <span className="transition-colors">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kavoor Store Info with Interactive Hover */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-mono text-neutral-400 font-semibold mb-4">
              Kavoor Store
            </h4>
            <div className="space-y-3.5 text-xs text-neutral-400 leading-relaxed">
              <div className="flex items-start gap-2.5 group transition-transform duration-300 ease-out hover:translate-x-2 cursor-pointer">
                <MapPin className="w-4 h-4 text-neutral-300 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-white transition-colors">{siteConfig.contact.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5 group transition-transform duration-300 ease-out hover:translate-x-2 cursor-pointer">
                <Clock className="w-4 h-4 text-neutral-400 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-white transition-colors">{siteConfig.businessHours.display}</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2.5 group transition-transform duration-300 ease-out hover:translate-x-2 cursor-pointer">
                  <Phone className="w-4 h-4 text-neutral-400 shrink-0 group-hover:scale-110 transition-transform" />
                  <a href={`https://wa.me/${siteConfig.contact.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="hover:underline font-medium group-hover:text-white transition-colors">
                    {siteConfig.contact.whatsappDisplay} <span className="text-[10px] text-neutral-400 font-mono">(WhatsApp)</span>
                  </a>
                </div>
                {siteConfig.contact.secondaryPhone && (
                  <div className="flex items-center gap-2.5 pl-6 group transition-transform duration-300 ease-out hover:translate-x-2 cursor-pointer">
                    <a href={`tel:${siteConfig.contact.secondaryPhone}`} className="hover:underline font-medium text-neutral-400 group-hover:text-white transition-colors">
                      {siteConfig.contact.secondaryPhoneDisplay} <span className="text-[10px] text-neutral-400 font-mono">(Calls)</span>
                    </a>
                  </div>
                )}
              </div>
              <div className="pt-2">
                <a
                  href={siteConfig.contact.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-neutral-300 underline underline-offset-4 transition-all duration-300 ease-out hover:translate-x-2.5"
                >
                  <span className="w-0 group-hover:w-3.5 overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out text-neutral-400 font-mono text-[11px] shrink-0">
                    →
                  </span>
                  <span>Driving Directions</span>
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Operational Bar & Bottom Bar with Glide Interactions */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-xs text-neutral-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 pulse-dot" />
            <span>Showroom Operational • 10:00 AM – 9:30 PM (All 7 Days)</span>
          </div>

          <div className="flex items-center gap-6 text-xs text-neutral-400">
            <Link
              href="/privacy"
              className="hover:text-white transition-all duration-300 hover:translate-x-1"
            >
              Privacy &amp; Policies
            </Link>
            <Link
              href="/contact"
              className="hover:text-white transition-all duration-300 hover:translate-x-1"
            >
              Store Directions
            </Link>
            <span className="text-neutral-700">•</span>
            <span className="font-mono text-neutral-400">Men&apos;s Exclusive</span>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-neutral-900 text-center md:text-left text-[11px] text-neutral-500 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p>© 2026 AB Collections. All rights reserved. Kavoor Tower, Airport Road, Kavoor, Mangaluru, Karnataka 575015.</p>
          <span className="font-mono text-[10px] text-neutral-600 uppercase tracking-widest">
            Kavoor Flagship Atelier
          </span>
        </div>
      </div>
    </footer>
  );
};
