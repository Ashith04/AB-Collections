"use client";

import React, { useState } from "react";
import { ChevronDown, MessageCircle, HelpCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { PillButton } from "@/components/ui/PillButton";

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "How does the 'Reserve on WhatsApp' feature work?",
      a: "Our website allows you to browse the complete real-time catalogue without needing an online payment gateway. When you add items to your Reserve List or click 'Direct WhatsApp Inquiry', our system formats a clear message with the outfit names, product codes, selected sizes, and links. Send this message to our store number, and our team will steam the outfits and hold them under your name in Kavoor for 48 hours.",
    },
    {
      q: "Can I try clothes in-store before purchasing?",
      a: "Yes, absolutely! We have dedicated, air-conditioned trial rooms in our Kavoor showroom. We actively encourage trying multiple sizes so you leave with the exact fit that complements your physique.",
    },
    {
      q: "Where is the physical store located in Mangaluru?",
      a: `We are located on Airport Road near Kavoor Junction, Mangaluru, Karnataka 575015. You can get instant driving directions through Google Maps from our Visit Us or Contact pages.`,
    },
    {
      q: "What payment methods are accepted in-store?",
      a: "We accept all UPI applications (Google Pay, PhonePe, Paytm), Credit & Debit cards, and cash at our counter.",
    },
    {
      q: "What is your in-store exchange policy?",
      a: "We offer hassle-free exchanges within 7 days of purchase. Simply bring the garment to our Kavoor outlet in unwashed, unused condition with the original tags intact.",
    },
    {
      q: "Do you offer alterations or custom tailoring?",
      a: "We provide basic trouser length alteration and waist tightening assistance directly through our local tailoring partners in Kavoor upon request.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 min-h-[70vh]">
      <div className="text-center mb-16">
        <span className="text-xs uppercase tracking-[0.25em] text-amber-500 font-bold">
          Customer Guidance // Sizing &amp; Policies
        </span>
        <h1 className="editorial-headline text-4xl sm:text-5xl font-black uppercase tracking-tight text-neutral-900 dark:text-neutral-50 mt-2">
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <p className="text-xs sm:text-sm text-neutral-500 mt-3 max-w-md mx-auto">
          Everything you need to know about our Kavoor store, fit reservations, and shopping experience.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="rounded-3xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60 overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-neutral-900 dark:text-neutral-100 hover:text-amber-500 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-neutral-400 shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-amber-500" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-0 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed border-t border-neutral-200/40 dark:border-neutral-800/60 mt-2">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Still Have Questions Box */}
      <div className="mt-16 p-8 rounded-3xl bg-neutral-100 dark:bg-neutral-900 text-center space-y-4 border border-neutral-200 dark:border-neutral-800">
        <HelpCircle className="w-8 h-8 text-amber-500 mx-auto" />
        <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
          Still Have Questions on Fit or Availability?
        </h3>
        <p className="text-xs text-neutral-500 max-w-sm mx-auto">
          Message our store associates directly on WhatsApp. We typically respond within 15 minutes during store hours.
        </p>
        <div className="pt-2">
          <a
            href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold transition-all shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat with Kavoor Store</span>
          </a>
        </div>
      </div>
    </div>
  );
}
