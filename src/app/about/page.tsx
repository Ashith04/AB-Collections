import React from "react";
import Image from "next/image";
import { CheckCircle, ArrowUpRight, Scissors } from "lucide-react";
import { siteConfig } from "@/config/site";
import { PillButton } from "@/components/ui/PillButton";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      {/* Editorial Header */}
      <div className="max-w-3xl mb-16">
        <span className="text-xs uppercase tracking-[0.25em] font-mono text-neutral-500 dark:text-neutral-400 font-semibold">
          Our Story // Kavoor, Mangaluru
        </span>
        <h1 className="editorial-headline text-4xl sm:text-6xl font-black uppercase tracking-tight text-neutral-900 dark:text-neutral-50 mt-2">
          TAILORED FOR MEN. ROOTED IN KAVOOR.
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-4 leading-relaxed">
          AB Collections was founded on a singular premise: men deserve a dedicated, unhurried space with meticulously curated fits that withstand coastal climates without compromising modern edge.
        </p>
      </div>

      {/* Hero Showcase Image of Store Interior */}
      <div className="relative w-full aspect-16/9 max-h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800 mb-20">
        <Image
          src="/images/store/store_interior.jpg"
          alt="AB Collections Store Interior Kavoor Mangaluru"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-neutral-300 font-mono">
              PHYSICAL ATELIER
            </span>
            <h2 className="text-2xl font-bold mt-1">
              Airport Road, Kavoor, Mangaluru
            </h2>
          </div>
          <PillButton
            href={siteConfig.contact.googleMapsDirectionsUrl}
            variant="white"
            size="sm"
          >
            Visit Showroom
          </PillButton>
        </div>
      </div>

      {/* Story Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
        <div className="space-y-6 text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-500">
            <Scissors className="w-4 h-4" />
            <span>The Men&apos;s Exclusive Philosophy</span>
          </div>
          <h2 className="editorial-headline text-3xl font-extrabold text-neutral-900 dark:text-neutral-50 tracking-tight">
            Why Men-Only Focus Matters
          </h2>
          <p>
            General multi-brand outlets often treat menswear as an afterthought, stocking generic boxy silhouettes that fail to flatter athletic or slender frames. At AB Collections, every single rack is selected for men who appreciate structured shoulders, anti-crease collars, and functional pocket assemblies.
          </p>
          <p>
            From tactical cargo double-pockets built with heavyweight combed twills to soft-touch windowpanes and French linen blends, we test every sample against Mangaluru&apos;s humidity before it enters our inventory.
          </p>
        </div>

        <div className="p-8 sm:p-10 rounded-3xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 space-y-6">
          <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
            What Sets Our Kavoor Store Apart
          </h3>

          <div className="space-y-4 text-xs sm:text-sm">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-neutral-900 dark:text-white shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-neutral-900 dark:text-neutral-100 block">
                  Zero Guesses On Fit
                </span>
                <span>
                  Reserve online, walk in, and try your pieces in air-conditioned fitting rooms with full-length mirror views.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-neutral-900 dark:text-white shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-neutral-900 dark:text-neutral-100 block">
                  Weekly Fresh Drops
                </span>
                <span>
                  Limited-run releases ensuring you won&apos;t see every second person in town wearing the exact same shirt.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-neutral-900 dark:text-white shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-neutral-900 dark:text-neutral-100 block">
                  Fair Price Architecture
                </span>
                <span>
                  Premium garments starting from ₹899 up to ₹2,199 — providing accessible luxury right in your neighborhood.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Box */}
      <div className="p-8 sm:p-12 rounded-3xl bg-neutral-950 text-white text-center flex flex-col items-center justify-center space-y-4 border border-neutral-800 shadow-xl">
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
          Ready to Upgrade Your Fit?
        </span>
        <h2 className="editorial-headline text-3xl sm:text-4xl font-extrabold max-w-xl">
          Visit Us Today or Reserve on WhatsApp
        </h2>
        <p className="text-xs sm:text-sm text-neutral-400 max-w-md">
          Open 7 days a week from 10:00 AM to 9:30 PM near Kavoor Junction.
        </p>
        <div className="pt-4 flex flex-wrap gap-4 justify-center">
          <PillButton href="/shop" variant="white" size="lg">
            Browse Catalogue
          </PillButton>
          <PillButton href="/contact" variant="dark" size="lg">
            Store Directions
          </PillButton>
        </div>
      </div>
    </div>
  );
}
