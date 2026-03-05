"use client";

import { useState, createContext, useContext, ReactNode } from "react";
import { cn } from "@/lib/utils";
import ChevronDown from "@/icons/chevron-down";

interface AccordionContextType {
  activeIndex: number | null;
  toggleIndex: (index: number) => void;
}

const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined,
);

export function Accordion({
  children,
  className,
  defaultIndex = 0,
}: {
  children: ReactNode;
  className?: string;
  defaultIndex?: number | null;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(defaultIndex);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <AccordionContext.Provider value={{ activeIndex, toggleIndex }}>
      <div className={cn("flex flex-col gap-1", className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({
  children,
  index,
  question,
  className,
  activeClassName,
  inactiveClassName,
}: {
  children: ReactNode;
  index: number;
  question: string;
  className?: string;
  activeClassName?: string;
  inactiveClassName?: string;
}) {
  const context = useContext(AccordionContext);
  if (!context) throw new Error("AccordionItem must be used within Accordion");

  const { activeIndex, toggleIndex } = context;
  const isActive = activeIndex === index;

  return (
    <div
      className={cn(
        "rounded-2xl transition-all duration-300 overflow-hidden",
        className,
        isActive ? activeClassName : inactiveClassName,
      )}
    >
      <button
        onClick={() => toggleIndex(index)}
        className="w-full flex items-center justify-between text-left group cursor-pointer"
      >
        <span className={cn("text-body-1 lg:text-title-4 font-medium")}>
          {question}
        </span>
        <div
          className={cn(
            "transition-transform duration-300",
            isActive ? "rotate-180" : "",
          )}
        >
          <ChevronDown className="w-4 h-4 text-dark" />
        </div>
      </button>

      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isActive
            ? "grid-rows-[1fr] mt-4 opacity-100"
            : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <div className="pb-2">{children}</div>
        </div>
      </div>
    </div>
  );
}
