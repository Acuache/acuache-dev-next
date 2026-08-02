# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Comandos

Bun es el package manager (`bun.lock`).

```bash
bun install          # instalar dependencias
bun dev              # servidor de desarrollo (http://localhost:3000)
bun run build        # build de producción (también valida tipos)
bun run lint         # ESLint — `next lint` fue removido en Next 16, el script corre `eslint` directo
bunx tsc --noEmit    # typecheck aislado
```

No hay suite de tests ni test runner configurado.

## Qué es

Portafolio personal estático de Michael Acuache (frontend, Lima). Home de una sola página con secciones (hero, proyectos, habilidades, experiencia, certificados, sobre mí) + páginas de detalle por proyecto en `/proyectos/[id]`, prerenderizadas con `generateStaticParams`. Deploy en Vercel desde `master`.

## Arquitectura

**El contenido vive en `src/data/`, no en los componentes.** `projects.ts`, `skills.ts`, `experience.ts`, `certificates.ts` son arrays tipados con `satisfies` contra las interfaces de `src/types/project.ts`. Las secciones solo renderizan; para cambiar contenido se edita `src/data/`.

**Las imágenes se referencian por clave, no por ruta.** Los objetos de datos guardan un string (`project.id`, `certificate.image`, `experience.certificate`) que se resuelve contra un `Record<string, StaticImageData>` colocado junto a la sección que lo consume:

- `src/components/sections/projects/project-images.ts`
- `src/components/sections/certificates/certificate-images.ts`
- `src/components/sections/experience/experience-images.ts`

Esto mantiene `src/data/` libre de imports de assets y permite `placeholder="blur"` con imports estáticos. **Agregar contenido con imagen siempre son dos pasos: la entrada en `src/data/` y el mapeo en el `*-images.ts` correspondiente.** Nada de `src/assets/` se sirve por HTTP; lo descargable (el CV) va en `public/`.

**`src/data/skills.ts` es la fuente única de habilidades.** Cada `Skill` lleva su icono, colores y los flags `inMarquee` / `inFilters`; de ahí derivan `SKILL_ICONS` (mapa label → icono, usado por cards, filtros y detalle de proyecto), `MARQUEE_SKILLS` y `FILTER_SKILLS`. Los strings de `project.skills[]` deben coincidir exactamente con `Skill.label` o el icono no se resuelve.

Los certificados son la excepción deliberada: usan `certificate-icons.ts` con un `Record<CertificateIcon, SkillIcon>` porque hay temas (Claude Code) que no son habilidades listadas. El `Record` tipado obliga a cubrir todo el union `CertificateIcon` — si agregas un valor al tipo y olvidas el icono, falla el build.

**Los SVG de `src/components/icons/` son componentes React**, no assets. SVGR corre como regla de Turbopack en `next.config.ts` con dos ajustes que no se deben quitar: `removeViewBox: false` (para que escalen con `size-*`) y `prefixIds` (sin él, varios iconos inlineados en la misma página colisionan en sus `url(#id)` y los degradados salen mal). El tipo del import viene de `src/types/svg.d.ts`. Todo icono nuevo se exporta desde `src/components/icons/index.ts`.

**Server components por defecto.** Solo lleva `"use client"` lo que necesita estado o efectos: `projects-explorer` (filtros), `certificates-pager` (paginación), `navbar`, `background-art`, `back-button` y los primitivos de `src/components/ui/`. Las secciones son server components que envuelven a esos islotes.

**SEO.** `src/lib/site.ts` exporta `SITE_URL` (desde `NEXT_PUBLIC_SITE_URL`) y alimenta `metadataBase`, `sitemap.ts` y `robots.ts`. `src/app/opengraph-image.tsx` genera la imagen OG; las páginas de proyecto generan su propia metadata con la imagen del proyecto.

## Estilos

Tailwind v4 configurado por CSS en `src/app/globals.css` (no hay `tailwind.config`). Ahí conviven tres capas: los tokens de shadcn/Base UI (`--color-*` en `@theme inline`), el token propio del portafolio `--color-st` (`#00ff99`, el verde de acento — se usa como `text-st`, `border-st`, `bg-st`) y el CSS de identidad al final del archivo: scrollbar, `.marquee`, tema `acuache` de tippy y el borde `conic-gradient` animado de `.skill-card`.

El sitio es dark-only: `<html>` lleva `className="dark"` fijo en `layout.tsx`, sin toggle de tema. Fuentes locales vía `next/font/local`: Nebula para headings, Montserrat para el resto.

Componentes UI en `src/components/ui/` vienen del registry de shadcn con estilo `base-nova` sobre Base UI (ver `components.json`); `image-dialog.tsx` es un wrapper propio sobre `dialog` que se reutiliza para certificados, experiencia y CV.

Los tooltips de la barra de filtros usan `useTippySingleton` (`src/hooks/`): un único popper compartido que se desliza entre referencias en vez de una instancia por botón. Lee sus opciones solo al montar.

## Convenciones

- Contenido, comentarios y textos de UI en español; los nombres de código en inglés.
- Archivos y componentes en kebab-case (`section-projects.tsx`, `certificate-item.tsx`); los SVG de iconos en PascalCase.
- Imports con alias `@/*` → `src/*`.
- Las transiciones llevan `motion-reduce:transition-none` y las animaciones CSS respetan `prefers-reduced-motion`.

## Variables de entorno

Copiar `.env.example` a `.env.local`. `NEXT_PUBLIC_SITE_URL` (dominio público, con fallback en `site.ts`) y `NEXT_PUBLIC_GA_ID` (Google Analytics; si falta, el script no se carga). Se inyectan en build — en Vercel hay que redeployar tras cambiarlas.
