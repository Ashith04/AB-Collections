"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Product, ReserveItem } from "@/types";
import { siteConfig } from "@/config/site";

interface ReserveContextType {
  items: ReserveItem[];
  addToReserve: (product: Product, size: string, color: string, quantity?: number) => void;
  removeFromReserve: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearReserve: () => void;
  count: number;
  totalEstimatedPrice: number;
  generateWhatsAppUrl: (customerName?: string, customerNote?: string) => string;
}

const ReserveContext = createContext<ReserveContextType | undefined>(undefined);

const STORAGE_KEY = "ab_collections_reserve_list";

export const ReserveProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [items, setItems] = useState<ReserveItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setItems(JSON.parse(stored));
      }
    } catch {
      // ignore
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items, hydrated]);

  const addToReserve = (
    product: Product,
    size: string,
    color: string,
    quantity: number = 1
  ) => {
    const itemId = `${product.id}-${size}-${color}`;
    setItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.id === itemId);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [
          ...prev,
          {
            id: itemId,
            product,
            size,
            color,
            quantity,
            addedAt: Date.now(),
          },
        ];
      }
    });
  };

  const removeFromReserve = (itemId: string) => {
    setItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromReserve(itemId);
      return;
    }
    setItems((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, quantity } : item))
    );
  };

  const clearReserve = () => {
    setItems([]);
  };

  const totalEstimatedPrice = items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  const generateWhatsAppUrl = (customerName?: string, customerNote?: string): string => {
    if (items.length === 0) {
      const generalMsg = encodeURIComponent(
        `Hello AB Collections! I am interested in exploring your latest men's collection at your Kavoor store.`
      );
      return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${generalMsg}`;
    }

    let text = `*NEW RESERVATION / IN-STORE HOLD INQUIRY*\n`;
    text += `*Store:* AB Collections, Kavoor, Mangaluru\n`;
    if (customerName && customerName.trim()) {
      text += `*Customer:* ${customerName.trim()}\n`;
    }
    text += `------------------------------------\n`;
    text += `*Selected Outfits (${items.reduce((s, i) => s + i.quantity, 0)} items):*\n\n`;

    const origin = typeof window !== "undefined" ? window.location.origin : siteConfig.url;

    items.forEach((item, index) => {
      text += `${index + 1}. *${item.product.name}*\n`;
      text += `   • Code: ${item.product.code}\n`;
      text += `   • Size: ${item.size} | Color: ${item.color}\n`;
      text += `   • Qty: ${item.quantity} × ₹${item.product.price.toLocaleString("en-IN")}\n`;
      text += `   • Link: ${origin}/product/${item.product.slug}\n\n`;
    });

    text += `------------------------------------\n`;
    text += `*Estimated Total:* ₹${totalEstimatedPrice.toLocaleString("en-IN")}\n`;
    if (customerNote && customerNote.trim()) {
      text += `*Note:* ${customerNote.trim()}\n`;
    }
    text += `\nPlease confirm if these sizes are ready to try in store today. Thank you!`;

    return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <ReserveContext.Provider
      value={{
        items,
        addToReserve,
        removeFromReserve,
        updateQuantity,
        clearReserve,
        count: items.reduce((sum, item) => sum + item.quantity, 0),
        totalEstimatedPrice,
        generateWhatsAppUrl,
      }}
    >
      {children}
    </ReserveContext.Provider>
  );
};

export const useReserve = () => {
  const context = useContext(ReserveContext);
  if (!context) {
    throw new Error("useReserve must be used within a ReserveProvider");
  }
  return context;
};
