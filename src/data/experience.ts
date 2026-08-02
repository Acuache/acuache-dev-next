import type { Experience } from "@/types/project";

export const experience = [
  {
    date: "Mayo 2026 – Actualidad",
    title: "MUNICIPALIDAD PROVINCIAL DE ICA",
    company: "Desarrollador de software",
    description:
      "Desarrollo sistemas internos para las áreas operativas de la municipalidad, desde el levantamiento de requerimientos hasta el despliegue. Construí un sistema de tickets para soporte técnico —registro, asignación y seguimiento de incidencias por área— y un sistema de kardex para el control de almacén, con entradas, salidas, stock e historial de movimientos. Ambos con Next.js, TypeScript y Supabase (PostgreSQL), con autenticación y roles de acceso. Es el primer sitio donde lo que escribo lo usa gente todos los días y un error no se ve feo, se convierte en datos malos: por eso el modelado de la base de datos y las reglas de negocio los decido y los valido yo.",
  },
  {
    date: "Actualmente...",
    title: "FREELANCER",
    company: "Independiente",
    description:
      "Desarrollo interfaces modernas y optimizadas para clientes de distintos rubros, aplicando buenas prácticas, diseño modular (Atomic Design) y experiencia en React, TypeScript, Next.js y Tailwind. Trabajo con IA dentro de mi flujo: especifico antes de codear (spec driven development), armo agentes y skills propios para lo repetitivo, y valido los puntos críticos antes de integrar. Enfocado en rendimiento, SEO y creación de experiencias fluidas.",
  },
  {
    date: "2025",
    title: "PROYECTO ROBBUILD (ONG)",
    company: "Robbuild, Lima – Proyecto contratado",
    description:
      "Desarrollé la plataforma oficial de la organización, integrando un sistema de donaciones con PayPal y partiendo desde prototipos que diseñé en Figma. Implementé animaciones, optimizaciones de carga y una estructura visual coherente enfocada en claridad y confianza. Mantuvimos comunicación constante para alinear requerimientos con la visión de la ONG.",
    certificate: "certificado-robbuild",
  },
] satisfies Experience[];
