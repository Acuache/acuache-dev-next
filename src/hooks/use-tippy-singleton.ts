"use client";

import { useEffect, useRef } from "react";
import tippy, {
  createSingleton,
  type CreateSingletonProps,
} from "tippy.js";

import "tippy.js/dist/tippy.css";

/**
 * Monta un único tooltip compartido (createSingleton) para todos los elementos
 * con `data-tippy-content` que haya dentro del contenedor devuelto.
 *
 * En vez de crear un popper por botón, tippy reutiliza uno solo y lo desliza
 * entre las referencias (`moveTransition`), que es lo que hace que la barra de
 * filtros se sienta fluida al pasar el mouse de un icono a otro.
 *
 * Las opciones se leen una sola vez al montar: la lista de filtros es estática,
 * así que no hace falta recrear las instancias en cada render.
 */
export function useTippySingleton<T extends HTMLElement = HTMLElement>(
  options?: Partial<CreateSingletonProps>
) {
  const containerRef = useRef<T>(null);
  // Se congela en el primer render: el singleton solo se crea al montar.
  const optionsRef = useRef(options);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const targets = Array.from(
      container.querySelectorAll<HTMLElement>("[data-tippy-content]")
    );
    if (targets.length === 0) return;

    const instances = tippy(targets);
    const singleton = createSingleton(instances, {
      theme: "acuache",
      placement: "top",
      delay: [150, 0],
      moveTransition: "transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)",
      // Los botones ya llevan aria-label, no hace falta el aria-describedby.
      aria: { content: null, expanded: false },
      ...optionsRef.current,
    });

    return () => {
      singleton.destroy();
      instances.forEach((instance) => instance.destroy());
    };
  }, []);

  return containerRef;
}
