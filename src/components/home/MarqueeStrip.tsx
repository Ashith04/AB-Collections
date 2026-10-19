import React from "react";

const MARQUEE_ITEMS = [
  "T-Shirts",
  "Tailored Shirts",
  "Outfits",
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
    <div className="w-full bg-neutral-950 text-neutral-300 py-3.5 overflow-hidden select-none border-y border-neutral-800/80">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap font-mono uppercase text-xs tracking-[0.2em]">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
          <div key={idx} className="flex items-center gap-8 shrink-0">
            <span className="font-semibold text-neutral-200">{item}</span>
            <span className="w-1 h-1 rounded-full bg-neutral-600 shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};
