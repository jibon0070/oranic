import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

const variants = {
  default: "bg-primary text-white hover:bg-primary-dark hover:shadow-lg",
  outline:
    "border border-primary text-primary hover:bg-primary hover:text-white hover:shadow-md",
  ghost: "bg-transparent text-primary hover:bg-primary/5",
  gray: "bg-gray-200 text-gray-900 hover:bg-gray-300 font-semibold",
};

const sizes = {
  default: "px-[32px] py-[16px] text-[20px] leading-[30px] font-semibold",
  sm: "px-[24px] py-[12px] text-[16px] leading-[24px]",
  icon: "size-[60px] flex items-center justify-center",
  "icon-sm": "size-[40px] flex items-center justify-center",
};

export default function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
} & ComponentProps<"button">) {
  return (
    <button
      className={cn(
        "rounded-full items-center gap-2 cursor-pointer inline-flex transition-all duration-300 ease-in-out active:scale-95",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}
