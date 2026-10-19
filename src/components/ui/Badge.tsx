import React from "react";
import { ProductBadge } from "@/types";

interface BadgeProps {
  type: ProductBadge | "In Store" | "Trial Available";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ type, className = "" }) => {
  const styles: Record<string, string> = {
    New: "bg-neutral-950 text-white",
    Sale: "bg-red-600 text-white",
    "Few left": "bg-neutral-900 text-white",
    Bestseller: "bg-neutral-900 text-white border border-neutral-700",
    "In Store": "bg-neutral-900/90 text-white backdrop-blur-md border border-white/20",
    "Trial Available": "bg-neutral-800 text-white",
  };

  const currentStyle = styles[type] || "bg-neutral-950 text-white";

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium tracking-wider uppercase shadow-xs ${currentStyle} ${className}`}
    >
      {type}
    </span>
  );
};
