import React from "react";
import { Sparkles } from "lucide-react";

const MARQUEE_ITEMS = [
  "T-Shirts",
  "Tailored Shirts",
  "Full Outfits",
  "142 Men's Styles",
  "Kavoor Tower Exclusive",
  "Vintage Knit Polos",
  "Classic Button-Downs",
  "Coordinated Ensembles",
  "In-Store Trial Rooms",
  "Mangaluru Men's Wear",
];

export const MarqueeStrip: React.FC = () => {
  return (
    <div className="w-full bg-amber-500 text-black py-4 overflow-hidden select-none border-y border-amber-600/30">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap font-black uppercase text-xs sm:text-sm tracking-widest">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
          <div key={idx} className="flex items-center gap-8 shrink-0">
            <span>{item}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};
