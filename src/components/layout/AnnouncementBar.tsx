"use client";

import React, { useState } from "react";
import Link from "next/link";
import { X, Sparkles, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export const AnnouncementBar: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);

  if (!siteConfig.announcement.enabled || dismissed) {
    return null;
  }

  return (
    <div className="relative bg-black text-white text-xs py-2 px-4 border-b border-neutral-800 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-3 text-center pr-6 sm:pr-0">
        <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0 animate-pulse" />
        <span className="font-normal text-neutral-300 tracking-tight">
          {siteConfig.announcement.text}
        </span>
        {siteConfig.announcement.linkUrl && (
          <Link
            href={siteConfig.announcement.linkUrl}
            className="inline-flex items-center gap-1 font-semibold text-white underline underline-offset-4 hover:text-amber-400 transition-colors shrink-0"
          >
            <span>{siteConfig.announcement.linkText}</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        )}
      </div>

      <button
        onClick={() => setDismissed(true)}
        aria-label="Dismiss announcement"
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-neutral-400 hover:text-white transition-colors"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
