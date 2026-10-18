import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface PillButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "accent" | "dark" | "outline-dark";
  size?: "sm" | "md" | "lg";
  withArrow?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export const PillButton: React.FC<PillButtonProps> = ({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  withArrow = true,
  className = "",
  type = "button",
  disabled = false,
}) => {
  const sizeClasses = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-7 py-3.5 text-base gap-2.5 font-medium",
  }[size];

  const variantClasses = {
    primary:
      "bg-black text-white hover:bg-neutral-800 shadow-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]",
    secondary:
      "bg-white text-black border border-neutral-300 hover:border-black transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]",
    accent:
      "bg-amber-500 text-black hover:bg-amber-400 font-semibold shadow-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]",
    dark:
      "bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/15 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]",
    "outline-dark":
      "border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300",
  }[variant];

  const arrowBgClasses = {
    primary: "bg-white text-black",
    secondary: "bg-black text-white",
    accent: "bg-black text-white",
    dark: "bg-white text-black",
    "outline-dark": "bg-white text-black",
  }[variant];

  const content = (
    <>
      <span className="tracking-tight">{children}</span>
      {withArrow && (
        <span
          className={`flex items-center justify-center rounded-full p-0.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
            size === "sm" ? "w-4 h-4" : size === "lg" ? "w-5 h-5" : "w-4 h-4"
          } ${arrowBgClasses}`}
        >
          <ArrowUpRight className={size === "sm" ? "w-3 h-3" : "w-3.5 h-3.5"} />
        </span>
      )}
    </>
  );

  const baseClasses = `group inline-flex items-center justify-center rounded-full font-medium cursor-pointer select-none transition-all ${sizeClasses} ${variantClasses} ${
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
    <button type={type} onClick={onClick} disabled={disabled} className={baseClasses}>
      {content}
    </button>
  );
};
