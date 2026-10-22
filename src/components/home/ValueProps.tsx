import React from "react";
import { TrendingUp, Scissors, Store, Tag } from "lucide-react";

export const ValueProps: React.FC = () => {
  const values = [
    {
      icon: TrendingUp,
      title: "Latest Styles",
      desc: "Weekly refreshed catalogue of trending cargo shirts, textural waffle knits, and resort collars.",
    },
    {
      icon: Scissors,
      title: "Slim-Fit Range",
      desc: "Carefully calibrated proportions tailored specifically for modern athletic and slim silhouettes.",
    },
    {
      icon: Store,
      title: "Try In Store",
      desc: "Dedicated trial rooms in Kavoor, Mangaluru. Reserve online and test your exact fit in person.",
    },
    {
      icon: Tag,
      title: "Fair Pricing",
      desc: "Direct-to-consumer value without retail markups. Premium fabrics starting from ₹899.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs uppercase tracking-[0.25em] font-mono text-neutral-500 font-semibold">
          Why AB Collections
        </span>
        <h2 className="editorial-headline text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950 mt-2">
          The Kavoor Men&apos;s Standard
        </h2>
        <p className="text-xs sm:text-sm text-neutral-600 mt-2">
          Focused exclusively on men&apos;s clothing with high standards of fabric density and fitting.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((v, i) => {
          const Icon = v.icon;
          return (
            <div
              key={i}
              className="p-6 rounded-3xl bg-neutral-50 border border-neutral-200/90 flex flex-col justify-between hover:-translate-y-1 transition-all duration-200 shadow-2xs hover:shadow-md"
            >
              <div>
                <div className="w-10 h-10 rounded-2xl bg-neutral-950 text-white flex items-center justify-center mb-4 shadow-xs">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-neutral-950 mb-2">
                  {v.title}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {v.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-neutral-200/60 text-[11px] font-mono text-neutral-500 font-medium">
                0{i + 1} // STANDARD
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
