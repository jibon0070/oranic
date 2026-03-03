"use client";

import { useState } from "react";
import Plus from "@/icons/plus";
import Minus from "@/icons/minus";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface QuantitySelectorProps {
  initialQuantity?: number;
  min?: number;
  max?: number;
  onChange?: (quantity: number) => void;
  className?: string;
}

export default function QuantitySelector({
  initialQuantity = 1,
  min = 1,
  max,
  onChange,
  className,
}: QuantitySelectorProps) {
  const [quantity, setQuantity] = useState(initialQuantity);

  const increment = () => {
    if (max === undefined || quantity < max) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      onChange?.(newQuantity);
    }
  };

  const decrement = () => {
    if (quantity > min) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onChange?.(newQuantity);
    }
  };

  return (
    <div className={cn("inline-flex items-center space-x-4 bg-background px-4 py-3 rounded-full border border-border", className)}>
      <button
        onClick={decrement}
        className="text-primary hover:text-primary/70 transition-colors cursor-pointer"
        disabled={quantity <= min}
      >
        <Minus className="w-4 h-4" />
      </button>
      <span className="text-body-3 font-medium min-w-[20px] text-center">
        {quantity}
      </span>
      <button
        onClick={increment}
        className="text-primary hover:text-primary/70 transition-colors cursor-pointer"
        disabled={max !== undefined && quantity >= max}
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
  );
}
