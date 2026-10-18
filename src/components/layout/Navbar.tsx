"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Heart, ShoppingBag, Menu, X, ArrowUpRight, MapPin } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";
import { useReserve } from "@/context/ReserveContext";
import { SearchOverlay } from "@/components/product/SearchOverlay";
import { isStoreCurrentlyOpen } from "@/config/site";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { count: wishlistCount } = useWishlist();
  const { count: reserveCount } = useReserve();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
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

  // Close mobile menu on page transition
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Shop", href: "/shop" },
    { label: "Lookbook", href: "/lookbook" },
    { label: "About", href: "/about" },
    { label: "Visit Store", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 dark:bg-black/85 backdrop-blur-md shadow-sm border-b border-black/5 dark:border-white/10 py-3"
            : "bg-[#FBFBFB] dark:bg-black py-4 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* LEFT: Nav Links (Desktop) */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.slice(0, 2).map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-xs uppercase tracking-widest font-semibold transition-colors ${
                      active
                        ? "text-black dark:text-white"
                        : "text-neutral-500 hover:text-black dark:hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                className="p-2 rounded-full text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setSearchOpen(true)}
                aria-label="Search"
                className="p-2 rounded-full text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>

            {/* CENTER: Editorial Wordmark */}
            <div className="flex flex-col items-center justify-center">
              <Link href="/" className="group flex flex-col items-center">
                <span className="editorial-headline text-xl sm:text-2xl md:text-3xl text-black dark:text-white font-extrabold tracking-tighter">
                  AB COLLECTIONS
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-neutral-400 group-hover:text-amber-500 transition-colors -mt-1 font-medium">
                  Kavoor • Mangaluru
                </span>
              </Link>
            </div>

            {/* RIGHT: Actions (Search, Wishlist, Reserve List) */}
            <div className="flex items-center gap-3 sm:gap-5">
              {/* Live Open / Closed Pill */}
              <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-neutral-100 dark:bg-neutral-900 border border-black/5 dark:border-white/10">
                <span
                  className={`w-2 h-2 rounded-full ${
                    storeStatus.isOpen ? "bg-emerald-500 pulse-dot" : "bg-neutral-400"
                  }`}
                />
                <span className="text-neutral-600 dark:text-neutral-300">
                  {storeStatus.isOpen ? "Store Open" : "Store Closed"}
                </span>
              </div>

              {/* Desktop Search Button */}
              <button
                onClick={() => setSearchOpen(true)}
                aria-label="Search collection"
                className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs text-neutral-500 hover:text-black dark:hover:text-white bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
              >
                <Search className="w-3.5 h-3.5" />
                <span className="font-medium">Search</span>
                <kbd className="text-[10px] bg-white dark:bg-black px-1.5 py-0.5 rounded shadow-xs text-neutral-400">
                  ⌘K
                </kbd>
              </button>

              {/* Wishlist Link */}
              <Link
                href="/wishlist"
                aria-label={`Wishlist (${wishlistCount})`}
                className="relative p-2 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
              >
                <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-amber-500 text-black text-[10px] font-bold rounded-full flex items-center justify-center animate-in zoom-in-50">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* Reserve List (Cart equivalent) */}
              <Link
                href="/reserve"
                aria-label={`Reserve List (${reserveCount})`}
                className="group flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-transform active:scale-95"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Reserve</span>
                <span className="bg-amber-400 text-black px-1.5 py-0.2 rounded-full text-[11px] font-bold min-w-4 text-center">
                  {reserveCount}
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-neutral-200 dark:border-neutral-800 bg-[#FBFBFB] dark:bg-neutral-950 px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-semibold text-neutral-900 dark:text-neutral-100 hover:text-amber-500 flex items-center justify-between py-1"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400" />
                </Link>
              ))}
              <Link
                href="/faq"
                className="text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-white py-1"
              >
                FAQ & Fitting Guidelines
              </Link>
              <Link
                href="/privacy"
                className="text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-white py-1"
              >
                Exchange & Store Policies
              </Link>
            </div>

            <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-neutral-500">
                <MapPin className="w-3.5 h-3.5 text-amber-500" />
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
