# Portafolio — Michael Acuache

Portafolio personal de Michael Acuache, desarrollador frontend (Lima, Perú). Sitio estático con página principal (hero, proyectos con filtros por tecnología, habilidades, experiencia, certificados y sobre mí) y páginas de detalle por proyecto.

**Producción:** https://acuache-dev.vercel.app

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- React 19
- Tailwind CSS v4
- [Base UI](https://base-ui.com) + primitivas de shadcn
- SVGR para iconos SVG como componentes
- Bun como package manager

## Desarrollo

```bash
bun install      # instalar dependencias
bun dev          # servidor de desarrollo (http://localhost:3000)
bun run build    # build de producción
bun run lint     # ESLint (next lint fue removido en Next 16; el script corre eslint directo)
```

## Variables de entorno

Copiar `.env.example` a `.env.local` y completar:

| Variable | Descripción |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Dominio público del sitio. Alimenta `metadataBase`, `sitemap.xml` y `robots.txt`. |
| `NEXT_PUBLIC_GA_ID` | ID de medición de Google Analytics (`G-XXXXXXXXXX`). Si no se define, Analytics no se carga. |

Ambas se inyectan en build; en Vercel hay que redeployar tras cambiarlas.

## Estructura

- `src/app/` — rutas (App Router): home, `proyectos/[id]`, `opengraph-image.tsx`, `not-found.tsx`, `sitemap.ts`, `robots.ts`
- `src/data/` — contenido: `projects.ts`, `skills.ts` (fuente única de skills/iconos), `experience.ts`, `certificates.ts`
- `src/components/` — secciones, layout e iconos SVG
- `src/fonts/` — fuentes locales (Nebula para títulos, Montserrat para texto)

Para agregar un proyecto: añadir la entrada en `src/data/projects.ts`, su imagen WebP en `src/assets/images/projects/` y mapearla en `src/components/sections/projects/project-images.ts`.

## Deploy

Desplegado en [Vercel](https://vercel.com). Cada push a `master` genera un deploy.
