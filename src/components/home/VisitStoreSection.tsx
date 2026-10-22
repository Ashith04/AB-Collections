"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MapPin, Phone, MessageCircle, Clock, Navigation } from "lucide-react";
import { siteConfig, isStoreCurrentlyOpen } from "@/config/site";
import { PillButton } from "@/components/ui/PillButton";

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
      <div className="bg-[#f8fafc] rounded-[36px] overflow-hidden border border-neutral-200/90 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Left Column: Store Details & Contact Actions */}
          <div className="lg:col-span-5 p-5 sm:p-8 md:p-12 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-neutral-200 mb-4 shadow-2xs">
                <span
                  className={`w-2 h-2 rounded-full ${
                    storeStatus.isOpen ? "bg-emerald-500 pulse-dot" : "bg-neutral-400"
                  }`}
                />
                <span className="text-neutral-800 font-medium">
                  {storeStatus.statusText}
                </span>
              </div>

              <h2 className="editorial-headline text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950">
                Visit Us in Kavoor, Mangaluru
              </h2>

              <p className="text-xs sm:text-sm text-neutral-600 mt-3 leading-relaxed">
                Step inside our physical store on Airport Road. Experience fabric textures firsthand, try on tailored cuts in our dedicated dressing spaces, and consult with our stylists.
              </p>

              <div className="mt-8 space-y-4 text-xs sm:text-sm text-neutral-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-neutral-950 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-neutral-950 block">
                      Address
                    </span>
                    <span className="text-neutral-600">{siteConfig.contact.address.full}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-neutral-950 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-neutral-950 block">
                      Operating Hours
                    </span>
                    <span className="text-neutral-600">{siteConfig.businessHours.display}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-neutral-950 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-neutral-950 block">
                      Call Store
                    </span>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="hover:underline font-semibold text-neutral-950"
                    >
                      {siteConfig.contact.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-10 pt-6 border-t border-neutral-200 flex flex-wrap items-center gap-3">
              <PillButton
                href={siteConfig.contact.googleMapsDirectionsUrl}
                variant="dark"
                size="md"
              >
                Get Directions
              </PillButton>

              <PillButton
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                variant="emerald"
                size="md"
                icon={<MessageCircle className="w-4 h-4 mr-1 text-white" />}
              >
                WhatsApp Store
              </PillButton>
            </div>
          </div>

          {/* Right Column: Google Maps Embed & Store Interior Preview */}
          <div className="lg:col-span-7 flex flex-col h-full min-h-[420px] bg-neutral-200 relative">
            <iframe
              src={siteConfig.contact.googleMapsEmbedUrl}
              title="AB Collections Kavoor Location Map"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "380px" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale contrast-125"
            />

            {/* Overlay store interior preview badge */}
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-neutral-200 flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0">
                <Image
                  src="/images/store/store_interior.jpg"
                  alt="AB Collections Kavoor"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left pr-2">
                <span className="text-[10px] uppercase tracking-wider font-mono text-neutral-500 font-bold block">
                  Kavoor Atelier
                </span>
                <span className="text-xs font-bold text-neutral-950">
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
