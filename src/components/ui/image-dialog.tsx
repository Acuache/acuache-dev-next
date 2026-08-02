"use client";

import type { ReactNode } from "react";
import Image, { type StaticImageData } from "next/image";
import { DownloadIcon } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ImageDialogProps {
  image: StaticImageData;
  alt: string;
  title: string;
  description?: ReactNode;
  /**
   * Archivo a descargar. La ruta debe existir en /public (lo de src/assets
   * no se sirve por HTTP). Si se omite, no se muestra el botón.
   */
  download?: {
    href: string;
    fileName?: string;
    label?: string;
  };
  /** aria-label del botón que abre el modal */
  triggerLabel: string;
  triggerClassName?: string;
  /** Contenido visible del botón que abre el modal */
  children: ReactNode;
}

export function ImageDialog({
  image,
  alt,
  title,
  description,
  download,
  triggerLabel,
  triggerClassName,
  children,
}: ImageDialogProps) {
  return (
    <Dialog>
      <DialogTrigger aria-label={triggerLabel} className={triggerClassName}>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl border-st/40">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        {/* min-h-0 deja que el contenedor encoja dentro del flex y active el scroll
            propio, así la cabecera y el botón de descarga quedan siempre visibles */}
        <div className="min-h-0 overflow-y-auto rounded-lg border border-white/10">
          <Image
            src={image}
            alt={alt}
            sizes="(max-width: 768px) 100vw, 56rem"
            placeholder="blur"
            className="w-full h-auto"
          />
        </div>
        {download && (
          <a
            href={download.href}
            download={download.fileName}
            className="group/dl self-end inline-flex items-center gap-2 rounded-lg border border-st/50 px-4 py-2 text-sm font-medium text-st transition-all duration-300 ease-out motion-reduce:transition-none hover:bg-st/10 hover:shadow-[0_0_20px_rgba(0,255,153,0.35)]"
          >
            <DownloadIcon className="size-4 transition-transform duration-300 ease-out motion-reduce:transition-none group-hover/dl:translate-y-0.5" />
            {download.label ?? "Descargar PDF"}
          </a>
        )}
      </DialogContent>
    </Dialog>
  );
}
