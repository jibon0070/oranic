"use client";

import { useState } from "react";
import ChevronDown from "@/icons/chevron-down";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SelectProps {
  options: { label: string; value: string }[];
  placeholder?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export default function Select({
  options,
  placeholder = "Select option",
  defaultValue,
  onChange,
  className,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(
    defaultValue ? options.find((o) => o.value === defaultValue) : null
  );

  const handleSelect = (option: { label: string; value: string }) => {
    setSelected(option);
    setIsOpen(false);
    onChange?.(option.value);
  };

  return (
    <div className={cn("relative inline-block w-full max-w-[240px]", className)}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-3 bg-white border border-border rounded-full text-caption text-dark hover:border-primary transition-colors cursor-pointer"
      >
        <span>{selected ? selected.label : placeholder}</span>
        <ChevronDown className={cn("w-4 h-4 ml-2 transition-transform duration-200", isOpen && "rotate-180")} />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-2 bg-white border border-border rounded-xl shadow-lg overflow-hidden">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleSelect(option)}
              className="w-full text-left px-6 py-3 text-caption text-dark hover:bg-background hover:text-primary transition-colors cursor-pointer"
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
