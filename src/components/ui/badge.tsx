import { ReactNode } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface BadgeProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export default function Badge({
  children,
  variant = "primary",
  className,
}: BadgeProps) {
  const variants = {
    primary: "bg-primary text-white border-transparent",
    secondary: "bg-primary-dark text-white border-transparent",
    outline: "bg-transparent border-primary text-primary",
  };

  const baseStyles =
    "inline-flex items-center px-4 py-2 rounded-full text-caption font-medium border transition-colors";

  return (
    <span className={cn(baseStyles, variants[variant], className)}>
      {children}
    </span>
  );
}
