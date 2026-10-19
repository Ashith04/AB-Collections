"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, MessageCircle, ArrowUpRight, Copy, Check, MapPin, Tag, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";

export interface InquiryItem {
  id: string;
  name: string;
  code: string;
  category: string;
  fabric?: string;
  fit?: string;
  mediaUrl: string;
  price?: number;
}

interface InquiryModalProps {
  item: InquiryItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ item, isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !item) return null;

  // Build the absolute photo URL so WhatsApp can unfurl the image preview
  const origin = typeof window !== "undefined" ? window.location.origin : siteConfig.url;
  const fullPhotoUrl = item.mediaUrl.startsWith("http")
    ? item.mediaUrl
    : `${origin}${item.mediaUrl}`;

  // Formatted WhatsApp message including item details & direct photo link
  const formattedMessage =
    `Hello AB Collections Kavoor!\n\n` +
    `I would like to inquire about this shirt / outfit:\n` +
    `• Item: "${item.name}"\n` +
    `• Item Code: ${item.code}\n` +
    `• Category: ${item.category}\n` +
    (item.fit ? `• Fit: ${item.fit}\n` : "") +
    (item.fabric ? `• Fabric: ${item.fabric}\n` : "") +
    (item.price ? `• Price: ₹${item.price.toLocaleString("en-IN")}\n` : "") +
    `• Photo Preview: ${fullPhotoUrl}\n\n` +
    `Could you please share available sizes, in-store trial details, and current stock at your Kavoor showroom?`;

  const handleOpenWhatsApp = () => {
    const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
      formattedMessage
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      {/* Background click to dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      <div
        className="relative z-10 w-full max-w-lg bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 pulse-dot" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-900 dark:text-white">
              WhatsApp Outfit Inquiry
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close inquiry"
            className="p-1.5 rounded-full text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {/* Shirt Photo Preview Container */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200/80 dark:border-neutral-700/60">
            <div className="relative w-20 h-24 sm:w-24 sm:h-28 rounded-xl overflow-hidden bg-neutral-200 dark:bg-neutral-900 shrink-0 shadow-sm">
              <Image
                src={item.mediaUrl}
                alt={item.name}
                fill
                className="object-cover"
                sizes="96px"
              />
            </div>

            <div className="flex-1 min-w-0">
              <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">
                Code: {item.code}
              </span>
              <h4 className="text-base font-extrabold text-neutral-900 dark:text-white truncate mt-0.5">
                {item.name}
              </h4>
              <div className="flex items-center gap-2 text-xs text-neutral-500 mt-1 flex-wrap">
                <span className="px-2 py-0.5 rounded-md bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 font-mono text-[10px]">
                  {item.category}
                </span>
                {item.fit && <span>{item.fit}</span>}
              </div>
              {item.fabric && (
                <p className="text-xs text-neutral-600 dark:text-neutral-400 truncate mt-1">
                  Fabric: {item.fabric}
                </p>
              )}
            </div>
          </div>

          {/* Formatted Message Payload Preview */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs font-mono font-semibold text-neutral-500 uppercase tracking-wider">
              <span>Message Payload (With Photo Link)</span>
              <button
                onClick={handleCopy}
                className="text-xs font-semibold text-neutral-900 dark:text-white hover:underline flex items-center gap-1 cursor-pointer"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>

            <div className="p-3.5 rounded-2xl bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-700 dark:text-neutral-300 whitespace-pre-line leading-relaxed max-h-36 overflow-y-auto">
              {formattedMessage}
            </div>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-neutral-500">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
            <span>Includes direct high-res image link so WhatsApp shows rich shirt preview.</span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-5 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/50 flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={handleOpenWhatsApp}
            className="w-full sm:flex-1 group flex items-center justify-between py-2.5 pl-6 pr-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm shadow-md transition-all hover:scale-[1.01] active:scale-[0.98] cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
              <span>Send to WhatsApp with Photo</span>
            </div>
            <span className="w-8 h-8 rounded-full bg-emerald-950 text-white flex items-center justify-center shrink-0">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </button>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-neutral-300 dark:border-neutral-700 text-xs font-semibold hover:border-black dark:hover:border-white transition-colors cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
