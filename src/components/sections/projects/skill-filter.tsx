"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SkillFilterProps {
  label: string;
  active: boolean;
  onToggle: () => void;
  children: ReactNode;
}

export function SkillFilter({
  label,
  active,
  onToggle,
  children,
}: SkillFilterProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={active}
      aria-label={`Filtrar por ${label}`}
      // Lo lee el singleton de tippy montado en ProjectsExplorer
      data-tippy-content={label}
      className={cn(
        "p-2.5 rounded-full border cursor-pointer select-none",
        active
          ? "shadow-[0_0_20px_rgba(0,255,153,0.35)] border-emerald-500 ring-1 ring-emerald-300"
          : "grayscale opacity-80 hover:opacity-100 hover:grayscale-0"
      )}
    >
      <div className="relative">
        {children}
        {active && (
          <span
            className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-emerald-500 ring-2 ring-white"
            aria-hidden="true"
          />
        )}
      </div>
    </button>
  );
}
