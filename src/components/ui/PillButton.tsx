import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export interface PillButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "white" | "dark" | "outline" | "accent" | "emerald";
  size?: "sm" | "md" | "lg";
  withArrow?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  icon?: React.ReactNode;
}

export const PillButton: React.FC<PillButtonProps> = ({
  children,
  href,
  onClick,
  variant = "white",
  size = "md",
  withArrow = true,
  className = "",
  type = "button",
  disabled = false,
  icon,
}) => {
  // Padding calibrated to allow the circular badge to sit comfortably inside the capsule
  const sizeClasses = {
    sm: "pl-4 pr-1.5 py-1 text-xs gap-2 font-medium min-h-[34px]",
    md: "pl-5 pr-2 py-1.5 text-xs sm:text-sm gap-3 font-medium min-h-[42px]",
    lg: "pl-6 pr-2.5 py-2 text-sm sm:text-base gap-3.5 font-semibold min-h-[50px]",
  }[size];

  const discSizeClasses = {
    sm: "w-6 h-6",
    md: "w-7 h-7 sm:w-8 sm:h-8",
    lg: "w-8 h-8 sm:w-9 sm:h-9",
  }[size];

  const arrowIconSizeClasses = {
    sm: "w-3 h-3",
    md: "w-3.5 h-3.5 sm:w-4 sm:h-4",
    lg: "w-4 h-4 sm:w-4.5 sm:h-4.5",
  }[size];

  // Normalized variant handling
  const normalizedVariant =
    variant === "primary" ? "dark" : variant === "accent" ? "white" : variant;

  const variantClasses = {
    white:
      "bg-white text-neutral-950 hover:bg-neutral-100 border border-neutral-200/90 shadow-sm",
    dark:
      "bg-neutral-950 text-white hover:bg-black border border-neutral-800 shadow-sm",
    secondary:
      "bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800",
    outline:
      "bg-transparent text-neutral-900 dark:text-neutral-100 border border-neutral-300 dark:border-neutral-700 hover:border-neutral-950 dark:hover:border-white",
    emerald:
      "bg-emerald-600 text-white hover:bg-emerald-500 shadow-sm border border-emerald-500",
  }[normalizedVariant] || "bg-white text-neutral-950 border border-neutral-200/90 shadow-sm";

  const discBgClasses = {
    white: "bg-black text-white",
    dark: "bg-white text-black",
    secondary: "bg-black dark:bg-white text-white dark:text-black",
    outline: "bg-neutral-900 dark:bg-white text-white dark:text-black",
    emerald: "bg-emerald-950 text-white",
  }[normalizedVariant] || "bg-black text-white";

  const content = (
    <>
      {icon && <span className="shrink-0">{icon}</span>}
      <span className="tracking-tight whitespace-nowrap">{children}</span>
      {withArrow && (
        <span
          className={`flex items-center justify-center rounded-full shrink-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-105 shadow-xs ${discSizeClasses} ${discBgClasses}`}
        >
          <ArrowUpRight className={arrowIconSizeClasses} strokeWidth={2.2} />
        </span>
      )}
    </>
  );

  const baseClasses = `group inline-flex items-center justify-between rounded-full cursor-pointer select-none transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${sizeClasses} ${variantClasses} ${
    disabled ? "opacity-50 pointer-events-none" : ""
  } ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button
      suppressHydrationWarning
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {content}
    </button>
  );
};
