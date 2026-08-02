"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { certificates } from "@/data/certificates";
import { cn } from "@/lib/utils";
import { CertificateItem } from "./certificate-item";

const PAGE_SIZE = 6;

export function CertificatesPager() {
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(certificates.length / PAGE_SIZE);
  const start = page * PAGE_SIZE;
  const visible = certificates.slice(start, start + PAGE_SIZE);

  return (
    <>
      <div className="grid gap-5 md:grid-cols-2 grid-flow-row-auto">
        {visible.map((certificate, index) => (
          <CertificateItem
            key={certificate.title}
            {...certificate}
            // Numeración global, no por página
            num={start + index + 1}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <nav
          aria-label="Paginación de certificados"
          className="mt-5 flex items-center justify-end gap-2"
        >
          <button
            type="button"
            onClick={() => setPage(Math.max(0, page - 1))}
            disabled={page === 0}
            aria-label="Página anterior"
            className="flex size-9 cursor-pointer items-center justify-center rounded-lg border border-white/10 text-white/70 transition-all duration-300 ease-out motion-reduce:transition-none hover:border-st/60 hover:text-st disabled:pointer-events-none disabled:opacity-30"
          >
            <ChevronLeft className="size-4" />
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setPage(index)}
              aria-label={`Ir a la página ${index + 1}`}
              aria-current={index === page ? "page" : undefined}
              className={cn(
                "size-9 cursor-pointer rounded-lg border text-sm transition-all duration-300 ease-out motion-reduce:transition-none",
                index === page
                  ? "border-st text-st shadow-[0_0_15px_rgba(0,255,153,0.25)]"
                  : "border-white/10 text-white/70 hover:border-st/60 hover:text-st"
              )}
            >
              {index + 1}
            </button>
          ))}

          <button
            type="button"
            onClick={() => setPage(Math.min(totalPages - 1, page + 1))}
            disabled={page === totalPages - 1}
            aria-label="Página siguiente"
            className="flex size-9 cursor-pointer items-center justify-center rounded-lg border border-white/10 text-white/70 transition-all duration-300 ease-out motion-reduce:transition-none hover:border-st/60 hover:text-st disabled:pointer-events-none disabled:opacity-30"
          >
            <ChevronRight className="size-4" />
          </button>
        </nav>
      )}
    </>
  );
}
