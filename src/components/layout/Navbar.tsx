"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Heart, ShoppingBag, Menu, X, ArrowUpRight, MapPin, Clock } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";
import { useReserve } from "@/context/ReserveContext";
import { SearchOverlay } from "@/components/product/SearchOverlay";
import { isStoreCurrentlyOpen, siteConfig } from "@/config/site";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { count: wishlistCount } = useWishlist();
  const { count: reserveCount } = useReserve();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [showStatusTooltip, setShowStatusTooltip] = useState(false);
  const [storeStatus, setStoreStatus] = useState({
    isOpen: true,
    statusText: "Open Today 10:00 AM – 9:30 PM",
  });

  useEffect(() => {
    setStoreStatus(isStoreCurrentlyOpen());
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard shortcut listener: Cmd+K or Ctrl+K opens search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "All Items", href: "/shop" },
    { label: "T-Shirts", href: "/shop?category=T-Shirts" },
    { label: "Shirts", href: "/shop?category=Shirts" },
    { label: "Outfits", href: "/shop?category=Outfits" },
    { label: "Lookbook", href: "/lookbook" },
    { label: "Visit Store", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/85 dark:bg-black/85 backdrop-blur-xl shadow-xs border-b border-neutral-200/80 dark:border-neutral-800/80 py-2.5 sm:py-3"
            : "bg-[#FBFBFB] dark:bg-black py-3.5 sm:py-4 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* LEFT: Nav Links (Desktop) */}
            <nav className="hidden md:flex items-center gap-1.5 lg:gap-2" aria-label="Main Navigation">
              {navLinks.slice(0, 4).map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`text-[11px] lg:text-xs uppercase tracking-widest font-semibold px-3 py-1.5 rounded-full transition-all duration-200 relative ${
                      active
                        ? "bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 shadow-xs"
                        : "text-neutral-600 hover:text-neutral-950 hover:bg-black/5 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-0.5 sm:gap-1 md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                className="p-1.5 sm:p-2 rounded-full text-neutral-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setSearchOpen(true)}
                aria-label="Search"
                className="p-1.5 sm:p-2 rounded-full text-neutral-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>

            {/* CENTER: Editorial Wordmark with hover glow */}
            <div className="flex flex-col items-center justify-center text-center px-1">
              <Link href="/" className="group flex flex-col items-center">
                <span className="editorial-headline text-base sm:text-2xl md:text-3xl text-neutral-950 dark:text-white font-extrabold tracking-tight sm:tracking-tighter transition-transform duration-300 group-hover:scale-[1.01] whitespace-nowrap">
                  AB COLLECTIONS
                </span>
                <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] sm:tracking-[0.28em] text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-neutral-200 transition-colors -mt-0.5 sm:-mt-1 font-semibold whitespace-nowrap">
                  Kavoor • Mangaluru
                </span>
              </Link>
            </div>

            {/* RIGHT: Actions (Search, Wishlist, Reserve List) */}
            <div className="flex items-center gap-1.5 sm:gap-4">
              {/* Live Open / Closed Pill with Hover Tooltip */}
              <div
                className="relative hidden lg:block"
                onMouseEnter={() => setShowStatusTooltip(true)}
                onMouseLeave={() => setShowStatusTooltip(false)}
              >
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-medium bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 cursor-pointer hover:border-neutral-400 transition-colors">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      storeStatus.isOpen ? "bg-emerald-500 pulse-dot" : "bg-neutral-400"
                    }`}
                  />
                  <span className="text-neutral-700 dark:text-neutral-300">
                    {storeStatus.isOpen ? "Store Open" : "Store Closed"}
                  </span>
                </div>

                {/* Status Hover Popover */}
                {showStatusTooltip && (
                  <div className="absolute right-0 top-full mt-2 w-64 p-3 bg-neutral-950 text-white rounded-2xl shadow-xl border border-neutral-800 text-xs space-y-1.5 z-50 animate-in fade-in duration-200">
                    <div className="flex items-center gap-2 font-semibold text-emerald-400">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{siteConfig.businessHours.display}</span>
                    </div>
                    <p className="text-[11px] text-neutral-400 leading-relaxed">
                      Kavoor Tower, Airport Road. Walk-in trials available all 7 days.
                    </p>
                  </div>
                )}
              </div>

              {/* Desktop Search Button */}
              <button
                onClick={() => setSearchOpen(true)}
                aria-label="Search collection"
                className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 border border-neutral-200/70 dark:border-neutral-800 transition-all cursor-pointer hover:scale-105"
              >
                <Search className="w-3.5 h-3.5 text-neutral-400" />
                <span className="font-medium">Search</span>
                <kbd className="text-[10px] font-mono bg-white dark:bg-neutral-800 px-1.5 py-0.5 rounded border border-neutral-200 dark:border-neutral-700 text-neutral-500">
                  ⌘K
                </kbd>
              </button>

              {/* Wishlist Link */}
              <Link
                href="/wishlist"
                aria-label={`Wishlist (${wishlistCount})`}
                className="relative p-2 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white transition-transform hover:scale-110"
              >
                <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 text-[10px] font-bold rounded-full flex items-center justify-center animate-in zoom-in-50">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* Reserve List (Cart equivalent) */}
              <Link
                href="/reserve"
                aria-label={`Reserve List (${reserveCount})`}
                className="group flex items-center gap-2 bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 pl-3.5 pr-2 py-1.5 rounded-full text-xs font-semibold hover:bg-black dark:hover:bg-neutral-100 transition-all hover:scale-105 active:scale-95 shadow-xs"
              >
                <ShoppingBag className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
                <span className="hidden sm:inline">Reserve</span>
                <span className="bg-white/20 dark:bg-black/15 text-white dark:text-neutral-950 px-2 py-0.5 rounded-full text-[11px] font-mono font-bold min-w-4 text-center">
                  {reserveCount}
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-neutral-200 dark:border-neutral-800 bg-[#FBFBFB] dark:bg-neutral-950 px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-semibold text-neutral-900 dark:text-neutral-100 hover:text-neutral-500 flex items-center justify-between py-2 border-b border-neutral-100 dark:border-neutral-900"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400" />
                </Link>
              ))}
              <div className="pt-2 flex flex-col space-y-2">
                <Link
                  href="/faq"
                  className="text-xs font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-white py-1"
                >
                  FAQ &amp; Fitting Guidelines
                </Link>
                <Link
                  href="/privacy"
                  className="text-xs font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-white py-1"
                >
                  Exchange &amp; Store Policies
                </Link>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-neutral-500">
                <MapPin className="w-3.5 h-3.5 text-neutral-700 dark:text-neutral-300" />
                <span>Kavoor, Mangaluru</span>
              </div>
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                {storeStatus.statusText}
              </span>
            </div>
          </div>
        )}
      </header>

      {/* Instant Search Overlay */}
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};
