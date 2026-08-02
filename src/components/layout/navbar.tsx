"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "INICIO", to: "#inicio" },
  { label: "PROYECTOS", to: "#proyectos" },
  { label: "HABILIDADES", to: "#habilidades" },
  { label: "EXPERIENCIA", to: "#experiencia" },
  { label: "CERTIFICADOS", to: "#certificados" },
  { label: "SOBRE MI", to: "#sobre-mi" },
];

const LAST_NAME = ["A", "C", "U", "A", "C", "H", "E"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 z-20 w-full p-7 py-4 pb-5 sm:py-3 flex items-center justify-between transition-colors duration-300 motion-reduce:transition-none",
        scrolled
          ? "bg-[#080808]/85 border-b border-white/10 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="max-w-5xl w-full mx-auto flex items-center justify-between">
        <a className="flex gap-1 group select-none" href="#inicio">
          {LAST_NAME.map((letter, i) => (
            <span
              key={i}
              className="font-heading inline-block text-2xl font-semibold tracking-wide group-hover:text-st group-hover:drop-shadow-[0_0_10px_rgba(248,113,113,0.6)]"
            >
              {letter}
            </span>
          ))}
        </a>

        {/* Los seis links no entran antes de lg: piden 707px y el contenedor
            recién ahí da el ancho. Hasta lg va el menú lateral. */}
        <nav className="hidden lg:block">
          <ul className="flex gap-6">
            {LINKS.map((link) => (
              <li key={link.to} className="w-max text-sm">
                <a href={link.to} className="relative group hover:text-st">
                  <span className="font-heading">{link.label}</span>
                  <span className="absolute w-0 h-[2px] bottom-0 left-0 group-hover:w-full bg-st transition-all duration-300 ease-out motion-reduce:transition-none" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger aria-label="Abrir menú de navegación">
              <Menu className="size-8 cursor-pointer" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-75 bg-[#101010] border-white/10 p-5 text-[#d8d8d8]"
            >
              <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
              <ul className="flex flex-col gap-5 mt-10">
                {LINKS.map((link) => (
                  <li key={link.to}>
                    <a href={link.to} onClick={() => setOpen(false)}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}
