"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { siteConfig } from "@/config/site";

export const WhatsAppFloating: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMsg = encodeURIComponent(
    "Hi AB Collections! I am browsing your online catalog and would like to ask about outfit availability in your Kavoor store."
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 group">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-neutral-900 text-white text-xs px-3.5 py-2 rounded-2xl shadow-xl border border-neutral-800 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot shrink-0" />
          <span className="font-medium">Need sizing or trial help? Chat with Kavoor team</span>
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Close tooltip"
            className="text-neutral-400 hover:text-white p-0.5 ml-1"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${defaultMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <MessageCircle className="w-7 h-7 fill-white text-emerald-500" />
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-amber-400 border-2 border-white rounded-full" />
      </a>
    </div>
  );
};
