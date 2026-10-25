"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  MessageCircle,
  ShieldCheck,
  Store,
  ArrowUpRight,
} from "lucide-react";
import { useReserve } from "@/context/ReserveContext";
import { PillButton } from "@/components/ui/PillButton";

export default function ReservePage() {
  const {
    items,
    removeFromReserve,
    updateQuantity,
    clearReserve,
    count,
    totalEstimatedPrice,
    generateWhatsAppUrl,
  } = useReserve();

  const [customerName, setCustomerName] = useState("");
  const [customerNote, setCustomerNote] = useState("");

  const handleWhatsAppReserve = () => {
    const url = generateWhatsAppUrl(customerName, customerNote);
    window.open(url, "_blank");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 min-h-[75vh]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-neutral-200 dark:border-neutral-800">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] font-mono text-neutral-500 dark:text-neutral-400 font-semibold">
            In-Store Hold // Zero Online Payment
          </span>
          <h1 className="editorial-headline text-4xl sm:text-5xl font-black uppercase tracking-tight text-neutral-900 dark:text-neutral-50 mt-1">
            In-Store Reserve List ({count})
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 mt-2 max-w-xl">
            Selected outfits are packaged into a unified WhatsApp reservation so our Kavoor team can steam and hold your exact sizes for trial.
          </p>
        </div>

        {count > 0 && (
          <button suppressHydrationWarning
            onClick={clearReserve}
            className="flex items-center gap-1.5 text-xs text-red-500 hover:text-red-600 font-semibold underline underline-offset-4 cursor-pointer"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear List</span>
          </button>
        )}
      </div>

      {count > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-10 items-start">
          {/* Left: Selected Items List */}
          <div className="lg:col-span-7 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="p-4 sm:p-6 rounded-3xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6"
              >
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-white dark:bg-neutral-800 shrink-0">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      className="object-contain p-2"
                    />
                  </div>

                  <div>
                    <span className="text-[10px] font-mono uppercase text-neutral-400">
                      Code: {item.product.code}
                    </span>
                    <Link href={`/product/${item.product.slug}`}>
                      <h3 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-neutral-100 hover:underline transition-colors">
                        {item.product.name}
                      </h3>
                    </Link>
                    <div className="flex items-center gap-2 text-xs text-neutral-500 mt-1">
                      <span>Size: <strong className="text-neutral-900 dark:text-neutral-100">{item.size}</strong></span>
                      <span>•</span>
                      <span>Color: <strong className="text-neutral-900 dark:text-neutral-100">{item.color}</strong></span>
                    </div>
                    <span className="text-sm font-extrabold text-neutral-900 dark:text-neutral-50 block mt-2">
                      ₹{item.product.price.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>

                {/* Quantity Controls & Delete */}
                <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
                  <div className="flex items-center gap-2 bg-white dark:bg-neutral-800 rounded-full px-2 py-1 border border-neutral-200 dark:border-neutral-700 shadow-xs">
                    <button suppressHydrationWarning
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 rounded-full text-neutral-500 hover:text-black dark:hover:text-white cursor-pointer"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-xs font-bold w-6 text-center text-neutral-900 dark:text-neutral-100">
                      {item.quantity}
                    </span>
                    <button suppressHydrationWarning
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 rounded-full text-neutral-500 hover:text-black dark:hover:text-white cursor-pointer"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <button suppressHydrationWarning
                    onClick={() => removeFromReserve(item.id)}
                    className="p-2 text-neutral-400 hover:text-red-500 transition-colors cursor-pointer"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}

            <div className="p-4 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs text-neutral-700 dark:text-neutral-300 flex items-center gap-3">
              <Store className="w-4 h-4 text-neutral-700 dark:text-neutral-300 shrink-0" />
              <span>
                <strong>48-Hour In-Store Hold:</strong> We hold all reserved sizes exclusively under your name at our Kavoor showroom for 48 hours without upfront fee.
              </span>
            </div>
          </div>

          {/* Right: Summary & WhatsApp Dispatch */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xl space-y-6">
              <h2 className="editorial-headline text-2xl font-extrabold text-neutral-900 dark:text-neutral-100">
                Reservation Summary
              </h2>

              <div className="space-y-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                <div className="flex justify-between">
                  <span>Total Articles</span>
                  <span className="font-bold text-neutral-900 dark:text-neutral-100">{count} pieces</span>
                </div>
                <div className="flex justify-between">
                  <span>Trial Fitting Fee</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">FREE (Kavoor Store)</span>
                </div>
                <div className="flex justify-between">
                  <span>Advance Online Payment</span>
                  <span className="text-neutral-400">₹0 (Pay after trial)</span>
                </div>
                <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800 flex justify-between text-base font-extrabold text-neutral-950 dark:text-neutral-50">
                  <span>Estimated Total Value</span>
                  <span>₹{totalEstimatedPrice.toLocaleString("en-IN")}</span>
                </div>
              </div>

              {/* Customer Inputs for WhatsApp Payload */}
              <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 space-y-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-500 mb-1">
                    Your Name (Optional)
                  </label>
                  <input suppressHydrationWarning
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Rahul"
                    className="w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl px-3.5 py-2.5 text-xs text-neutral-900 dark:text-neutral-100 focus:outline-none focus:border-black"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-500 mb-1">
                    Visiting Note (Optional)
                  </label>
                  <input suppressHydrationWarning
                    type="text"
                    value={customerNote}
                    onChange={(e) => setCustomerNote(e.target.value)}
                    placeholder="e.g. Visiting today around 5 PM"
                    className="w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl px-3.5 py-2.5 text-xs text-neutral-900 dark:text-neutral-100 focus:outline-none focus:border-black"
                  />
                </div>
              </div>

              {/* Primary Action Button using Signature PillButton */}
              <button suppressHydrationWarning
                onClick={handleWhatsAppReserve}
                className="w-full group flex items-center justify-between py-3 pl-6 pr-2.5 rounded-full bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 font-semibold text-xs sm:text-sm shadow-md transition-all hover:scale-[1.01] active:scale-[0.98] cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-emerald-400" />
                  <span>Dispatch WhatsApp Hold</span>
                </div>
                <span className="w-8 h-8 rounded-full bg-white dark:bg-neutral-950 text-neutral-950 dark:text-white flex items-center justify-center shrink-0">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-400 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>Generates prefilled message with names, codes &amp; sizes</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-24 max-w-md mx-auto">
          <div className="w-16 h-16 rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-400 flex items-center justify-center mx-auto mb-4">
            <ShoppingBag className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
            No Outfits in Your Reserve List
          </h2>
          <p className="text-xs text-neutral-500 mt-2 leading-relaxed">
            Browse our catalogue, choose your sizes, and add them here to generate a unified hold order on WhatsApp.
          </p>
          <div className="mt-6 flex justify-center">
            <PillButton href="/shop" variant="dark" size="lg">
              Explore Outfits
            </PillButton>
          </div>
        </div>
      )}
    </div>
  );
}
