"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MapPin, Phone, MessageCircle, Clock, ArrowUpRight, Navigation, Store } from "lucide-react";
import { siteConfig, isStoreCurrentlyOpen } from "@/config/site";

export const VisitStoreSection: React.FC = () => {
  const [storeStatus, setStoreStatus] = useState({
    isOpen: true,
    statusText: "Open Today 10:00 AM – 9:30 PM",
  });

  useEffect(() => {
    setStoreStatus(isStoreCurrentlyOpen());
  }, []);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-[#f6f6f6] dark:bg-neutral-900 rounded-[36px] overflow-hidden border border-neutral-200/80 dark:border-neutral-800 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Left Column: Store Details & Contact Actions */}
          <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white dark:bg-black border border-black/5 dark:border-white/10 mb-4">
                <span
                  className={`w-2 h-2 rounded-full ${
                    storeStatus.isOpen ? "bg-emerald-500 pulse-dot" : "bg-neutral-400"
                  }`}
                />
                <span className="text-neutral-800 dark:text-neutral-200">
                  {storeStatus.statusText}
                </span>
              </div>

              <h2 className="editorial-headline text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
                Visit Us in Kavoor, Mangaluru
              </h2>

              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-3 leading-relaxed">
                Step inside our physical store on Airport Road. Experience fabric textures firsthand, try on tailored cuts in our dedicated dressing spaces, and consult with our stylists.
              </p>

              <div className="mt-8 space-y-4 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-neutral-900 dark:text-neutral-100 block">
                      Address
                    </span>
                    <span>{siteConfig.contact.address.full}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-neutral-900 dark:text-neutral-100 block">
                      Operating Hours
                    </span>
                    <span>{siteConfig.businessHours.display}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-neutral-900 dark:text-neutral-100 block">
                      Call Store
                    </span>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="hover:text-amber-500 font-semibold"
                    >
                      {siteConfig.contact.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-10 pt-6 border-t border-neutral-200 dark:border-neutral-800 flex flex-wrap gap-3">
              <a
                href={siteConfig.contact.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black text-xs font-bold hover:scale-105 transition-all shadow-sm"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold hover:scale-105 transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Store</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed & Store Interior Preview */}
          <div className="lg:col-span-7 flex flex-col h-full min-h-[420px] bg-neutral-200 dark:bg-neutral-800 relative">
            <iframe
              src={siteConfig.contact.googleMapsEmbedUrl}
              title="AB Collections Kavoor Location Map"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "380px" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale contrast-125 dark:invert dark:hue-rotate-180"
            />

            {/* Overlay store interior preview badge */}
            <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/90 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-black/5 dark:border-white/10 flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0">
                <Image
                  src="/images/store/store_interior.jpg"
                  alt="AB Collections Kavoor"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left pr-2">
                <span className="text-[10px] uppercase tracking-wider text-amber-500 font-bold block">
                  Kavoor Atelier
                </span>
                <span className="text-xs font-bold text-neutral-900 dark:text-neutral-100">
                  Ready for In-Store Trials
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
