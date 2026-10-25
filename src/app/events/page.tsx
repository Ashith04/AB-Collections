import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { EventsSection } from "@/components/events/EventsSection";

export const metadata: Metadata = {
  title: "Events & Festive Promotions | AB Collections Kavoor",
  description: "Browse festival campaigns, Diwali Big Sale posters (40% Off on Shirt & Pant), store milestones, and video tours at AB Collections Kavoor, Mangaluru.",
  openGraph: {
    title: "Events & Festive Promotions | AB Collections Kavoor",
    description: "Festive announcements, sale posters, and showroom tours at AB Collections Kavoor.",
  },
};

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* Top Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home Catalog</span>
        </Link>
      </div>

      {/* Main Events Component */}
      <EventsSection />
    </main>
  );
}
