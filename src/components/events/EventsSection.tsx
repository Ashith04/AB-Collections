"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Tag, Calendar, MapPin, Play, MessageSquare, ArrowUpRight, CheckCircle2, Maximize2, X } from "lucide-react";
import { eventItems, eventStats, EventItem } from "@/data/events";
import { siteConfig } from "@/config/site";
import { PillButton } from "@/components/ui/PillButton";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export const EventsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<"all" | "poster" | "showroom" | "video">("all");
  const [activeModalEvent, setActiveModalEvent] = useState<EventItem | null>(null);

  const filteredEvents = eventItems.filter((item) => {
    if (activeFilter === "all") return true;
    return item.type === activeFilter;
  });

  return (
    <section id="events" className="py-20 bg-neutral-950 text-white relative overflow-hidden">
      {/* Decorative festive golden gradient glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <RevealOnScroll direction="up" delayMs={50}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-mono font-semibold uppercase tracking-wider mb-4 shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Special Events &amp; Festive Campaigns</span>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delayMs={100}>
            <h2 className="editorial-headline text-3xl sm:text-5xl font-black tracking-tight text-white">
              Festive Posters &amp; Store Milestones
            </h2>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delayMs={150}>
            <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed max-w-2xl mx-auto">
              Exclusive announcements, festival offers including our famous Diwali Big Sale (40% Off on Shirt &amp; Pant), and flagship Kavoor showroom showcases.
            </p>
          </RevealOnScroll>

          {/* Filter Pills */}
          <RevealOnScroll direction="up" delayMs={200}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  activeFilter === "all"
                    ? "bg-amber-400 text-neutral-950 shadow-md font-bold"
                    : "bg-neutral-900 text-neutral-300 hover:bg-neutral-800 border border-neutral-800"
                }`}
              >
                All Events &amp; Showcase ({eventStats.total})
              </button>
              <button
                onClick={() => setActiveFilter("poster")}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  activeFilter === "poster"
                    ? "bg-amber-400 text-neutral-950 shadow-md font-bold"
                    : "bg-neutral-900 text-neutral-300 hover:bg-neutral-800 border border-neutral-800"
                }`}
              >
                Festive Posters ({eventStats.posters})
              </button>
              <button
                onClick={() => setActiveFilter("showroom")}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  activeFilter === "showroom"
                    ? "bg-amber-400 text-neutral-950 shadow-md font-bold"
                    : "bg-neutral-900 text-neutral-300 hover:bg-neutral-800 border border-neutral-800"
                }`}
              >
                Store Interior ({eventStats.showrooms})
              </button>
              <button
                onClick={() => setActiveFilter("video")}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  activeFilter === "video"
                    ? "bg-amber-400 text-neutral-950 shadow-md font-bold"
                    : "bg-neutral-900 text-neutral-300 hover:bg-neutral-800 border border-neutral-800"
                }`}
              >
                Video Walkthrough ({eventStats.videos})
              </button>
            </div>
          </RevealOnScroll>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, idx) => (
            <RevealOnScroll key={event.id} direction="up" delayMs={Math.min(idx * 80, 240)}>
              <div className="group relative bg-neutral-900/90 rounded-3xl border border-neutral-800/90 overflow-hidden hover:border-amber-500/50 transition-all duration-300 shadow-xl flex flex-col h-full hover:-translate-y-1">
                {/* Media Container */}
                <div className="relative aspect-[4/5] sm:aspect-[3/4] bg-neutral-950 overflow-hidden">
                  {event.mediaType === "video" ? (
                    <video
                      src={event.mediaUrl}
                      controls
                      playsInline
                      poster="/images/store/store_interior.jpg"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <>
                      <Image
                        src={event.mediaUrl}
                        alt={event.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Zoom Trigger Overlay */}
                      <button
                        onClick={() => setActiveModalEvent(event)}
                        aria-label={`View full poster for ${event.title}`}
                        className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
                      >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/70 backdrop-blur-md text-white text-xs font-semibold tracking-wide border border-white/20 shadow-lg">
                          <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                          <span>View Full Poster</span>
                        </span>
                      </button>
                    </>
                  )}

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-950/80 backdrop-blur-md text-amber-300 text-[11px] font-mono font-bold tracking-wide border border-amber-500/30">
                      <Tag className="w-3 h-3 text-amber-400" />
                      <span>{event.badge}</span>
                    </span>
                  </div>

                  {/* Date Badge */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-neutral-300 text-[10px] font-medium border border-white/10">
                      <Calendar className="w-2.5 h-2.5 text-neutral-400" />
                      <span>{event.date}</span>
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-mono text-neutral-400 font-semibold">
                      {event.category}
                    </span>
                    <h3 className="editorial-headline text-lg sm:text-xl font-bold text-white mt-1 group-hover:text-amber-300 transition-colors">
                      {event.title}
                    </h3>
                    <p className="mt-2.5 text-xs text-neutral-300 leading-relaxed line-clamp-3">
                      {event.description}
                    </p>

                    {/* Highlights Badges */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {event.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-neutral-800 text-neutral-300 text-[10px] font-medium border border-neutral-700/60"
                        >
                          <CheckCircle2 className="w-2.5 h-2.5 text-amber-400" />
                          <span>{h}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-between gap-3">
                    <a
                      href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                        `Hi AB Collections, I am inquiring regarding the "${event.title}" (${event.badge}) at your Kavoor store.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs transition-colors shadow-md"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Inquire on WhatsApp</span>
                    </a>

                    {event.mediaType !== "video" && (
                      <button
                        onClick={() => setActiveModalEvent(event)}
                        aria-label="View large preview"
                        className="p-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors border border-neutral-700/60 cursor-pointer"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Bottom Banner with Link to Full Events Page */}
        <RevealOnScroll direction="up" delayMs={100}>
          <div className="mt-16 text-center">
            <Link
              href="/events"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-xs sm:text-sm font-semibold text-neutral-200 hover:text-white transition-all shadow-md group"
            >
              <span>Explore Dedicated Events &amp; Showroom Archive</span>
              <ArrowUpRight className="w-4 h-4 text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </RevealOnScroll>
      </div>

      {/* Lightbox Modal for High-Resolution Poster Viewing */}
      {activeModalEvent && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveModalEvent(null)}
        >
          <div
            className="relative max-w-2xl w-full max-h-[90vh] bg-neutral-900 rounded-3xl border border-neutral-800 overflow-hidden flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 flex items-center justify-between border-b border-neutral-800 bg-neutral-950">
              <div>
                <span className="text-[10px] font-mono uppercase text-amber-400 font-bold tracking-wider">
                  {activeModalEvent.badge}
                </span>
                <h4 className="text-sm sm:text-base font-bold text-white">
                  {activeModalEvent.title}
                </h4>
              </div>
              <button
                onClick={() => setActiveModalEvent(null)}
                className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative aspect-[3/4] sm:aspect-square w-full max-h-[60vh] bg-neutral-950">
              <Image
                src={activeModalEvent.mediaUrl}
                alt={activeModalEvent.title}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-contain"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 bg-neutral-900 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-xs text-neutral-300 leading-relaxed max-w-md">
                {activeModalEvent.description}
              </p>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                  `Hi AB Collections, I'm inquiring about the "${activeModalEvent.title}" from your events showcase.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs transition-colors shrink-0 shadow-md"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Contact Store</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
