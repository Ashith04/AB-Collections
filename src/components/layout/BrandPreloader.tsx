"use client";

import { useEffect, useState } from "react";

export function BrandPreloader() {
  const [phase, setPhase] = useState<"dropping" | "revealing" | "complete" | "exiting" | "done">("dropping");
  const [progress, setProgress] = useState(0);

  const letters = ["C", "O", "L", "L", "E", "C", "T", "I", "O", "N", "S"];

  useEffect(() => {
    // Prevent scrolling while preloader is active
    document.body.style.overflow = "hidden";

    // Progress bar ticker
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 5;
      });
    }, 45);

    // Choreographed animation timeline
    // 0ms: AB drops and bounces
    // 600ms: Letters of COLLECTIONS start staggering in
    const revealTimer = setTimeout(() => {
      setPhase("revealing");
    }, 600);

    // 1450ms: All letters settled, complete branding lockup visible
    const completeTimer = setTimeout(() => {
      setPhase("complete");
      setProgress(100);
    }, 1450);

    // 2150ms: Curtain slides upward smoothly
    const exitTimer = setTimeout(() => {
      setPhase("exiting");
    }, 2150);

    // 2850ms: Unmount completely from DOM and unlock scroll
    const cleanupTimer = setTimeout(() => {
      setPhase("done");
      document.body.style.overflow = "";
    }, 2850);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(revealTimer);
      clearTimeout(completeTimer);
      clearTimeout(exitTimer);
      clearTimeout(cleanupTimer);
      document.body.style.overflow = "";
    };
  }, []);

  const handleSkip = () => {
    setPhase("exiting");
    setTimeout(() => {
      setPhase("done");
      document.body.style.overflow = "";
    }, 600);
  };

  if (phase === "done") {
    return null;
  }

  const isExiting = phase === "exiting";
  const hasRevealedLetters = phase === "revealing" || phase === "complete" || phase === "exiting";

  return (
    <div
      aria-label="Loading AB Collections"
      role="status"
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#070709] transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
        isExiting ? "-translate-y-full" : "translate-y-0"
      }`}
      style={{
        backgroundImage: `
          radial-gradient(circle at 50% 45%, rgba(255, 255, 255, 0.07) 0%, rgba(7, 7, 9, 0.98) 65%),
          radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: "100% 100%, 28px 28px",
      }}
    >
      {/* Quick skip button */}
      <button
        onClick={handleSkip}
        type="button"
        className="absolute top-6 right-6 z-20 text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 hover:text-white px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md transition-all hover:border-white/30 cursor-pointer"
      >
        Skip ✕
      </button>

      {/* Center Stage Brand Showcase */}
      <div className="relative flex flex-col items-center justify-center select-none px-6">
        {/* Ambient halo glow behind AB */}
        <div className="absolute -inset-10 bg-gradient-to-r from-amber-500/10 via-white/10 to-amber-500/10 blur-3xl rounded-full opacity-60 pointer-events-none" />

        {/* 1. "AB" Monogram Container - Drops from above & bounces back to middle */}
        <div className="relative mb-4 sm:mb-6 animate-drop-bounce">
          <div className="relative inline-flex items-center justify-center px-6 py-3.5 sm:px-12 sm:py-7 rounded-2xl sm:rounded-3xl bg-neutral-900/90 border border-white/15 backdrop-blur-2xl shadow-[0_30px_70px_-15px_rgba(0,0,0,0.9),0_0_30px_rgba(255,255,255,0.05)]">
            {/* Corner accent marks for luxury couture feel */}
            <span className="absolute top-2 left-2.5 w-1.5 h-1.5 rounded-full bg-white/30" />
            <span className="absolute top-2 right-2.5 w-1.5 h-1.5 rounded-full bg-white/30" />
            <span className="absolute bottom-2 left-2.5 w-1.5 h-1.5 rounded-full bg-white/30" />
            <span className="absolute bottom-2 right-2.5 w-1.5 h-1.5 rounded-full bg-white/30" />

            {/* AB Letters */}
            <h1 className="text-5xl sm:text-8xl md:text-9xl font-black tracking-tighter text-white leading-none">
              AB
            </h1>
          </div>
        </div>

        {/* 2. "COLLECTIONS" - Each word/letter pops and animates in sequentially */}
        <div className="flex items-center justify-center gap-1 sm:gap-2.5 my-2 min-h-[28px] max-w-full px-2">
          {letters.map((letter, index) => (
            <span
              key={`${letter}-${index}`}
              style={{
                animationDelay: `${index * 55}ms`,
              }}
              className={`inline-block text-[11px] sm:text-sm md:text-base font-extrabold uppercase tracking-[0.16em] sm:tracking-[0.25em] text-neutral-200 transition-opacity ${
                hasRevealedLetters ? "animate-letter-reveal" : "opacity-0"
              }`}
            >
              {letter}
            </span>
          ))}
        </div>

        {/* 3. Subline & Location */}
        <p
          className={`mt-2 text-[9px] sm:text-[11px] font-mono uppercase tracking-[0.2em] sm:tracking-[0.28em] text-neutral-400 text-center px-4 max-w-xs sm:max-w-none transition-all duration-700 ${
            phase === "complete" || phase === "exiting"
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2"
          }`}
        >
          Exclusive Men&apos;s Store • Kavoor, Mangaluru
        </p>

        {/* 4. Sleek Minimalist Progress Hairline */}
        <div className="w-32 sm:w-48 h-[2px] bg-white/10 rounded-full overflow-hidden mt-5 sm:mt-6">
          <div
            className="h-full bg-gradient-to-r from-neutral-500 via-white to-neutral-300 rounded-full transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
