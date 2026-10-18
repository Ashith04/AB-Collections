import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PillButton } from "@/components/ui/PillButton";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-24 text-center">
      <span className="text-xs uppercase tracking-[0.25em] text-amber-500 font-bold">
        Error 404 // Out of Range
      </span>
      <h1 className="editorial-headline text-6xl sm:text-8xl font-black uppercase tracking-tight text-neutral-900 dark:text-neutral-50 mt-3">
        PIECE NOT FOUND
      </h1>
      <p className="text-xs sm:text-sm text-neutral-500 max-w-sm mx-auto mt-4 leading-relaxed">
        The outfit or collection page you are looking for has been moved or archived from our current drop.
      </p>

      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        <PillButton href="/" variant="primary" size="lg">
          Return to Home
        </PillButton>
        <PillButton href="/shop" variant="secondary" size="lg">
          Browse Active Catalogue
        </PillButton>
      </div>
    </div>
  );
}
