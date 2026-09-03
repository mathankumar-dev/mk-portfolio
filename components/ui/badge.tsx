import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "accent" | "success";
  size?: "sm" | "md";
}

export function Badge({
  className,
  variant = "default",
  size = "md",
  children,
  ...props
}: BadgeProps) {
  const baseStyles = "inline-flex items-center font-mono font-medium rounded-full transition-colors";
  
  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-xs",
    md: "px-3 py-1 text-xs sm:text-sm",
  };

  const variantStyles = {
    default: "bg-slate-800/80 text-slate-300 border border-slate-700/60",
    outline: "bg-transparent text-slate-400 border border-slate-700/50 hover:border-slate-500",
    accent: "bg-cyan-950/40 text-cyan-400 border border-cyan-800/50",
    success: "bg-emerald-950/40 text-emerald-400 border border-emerald-800/50",
  };

  return (
    <span
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {children}
    </span>
  );
}
