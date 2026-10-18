import React from "react";
import { ProductBadge } from "@/types";

interface BadgeProps {
  type: ProductBadge | "In Store" | "Trial Available";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ type, className = "" }) => {
  const styles: Record<string, string> = {
    New: "bg-black text-white",
    Sale: "bg-red-600 text-white",
    "Few left": "bg-amber-500 text-black font-semibold",
    Bestseller: "bg-emerald-600 text-white",
    "In Store": "bg-neutral-900/80 text-white backdrop-blur-md border border-white/20",
    "Trial Available": "bg-blue-600 text-white",
  };

  const currentStyle = styles[type] || "bg-black text-white";

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium tracking-wide uppercase shadow-sm ${currentStyle} ${className}`}
    >
      {type}
    </span>
  );
};
