import { ReactNode } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const variants = {
  primary: "bg-primary text-white! hover:bg-primary/90 border-transparent",
  secondary: "bg-primary-dark text-white! hover:bg-primary-dark/90 border-transparent",
  outline: "bg-transparent border-primary text-primary! hover:bg-primary/5",
  ghost: "bg-transparent border-transparent text-primary! hover:bg-primary/5",
  circle: "bg-primary text-white! rounded-full flex items-center justify-center p-0",
  "circle-outline": "bg-transparent border-primary text-primary! rounded-full flex items-center justify-center p-0",
};

const sizes = {
  sm: "px-4 py-1.5 text-caption rounded-full",
  md: "px-6 py-2.5 text-body-3 rounded-full font-medium",
  lg: "px-8 py-3.5 text-body-2 rounded-full font-medium",
  icon: "w-10 h-10",
};


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  children?: ReactNode;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  icon,
  iconPosition = "right",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center transition-colors border focus:outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer font-sans";

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
    </button>
  );
}
