import type { FC, SVGProps } from "react";
import {
  Astroo,
  CSS,
  Figma,
  Git,
  Github,
  HTML,
  JavaScript,
  PostgreSQL,
  React as ReactIcon,
  ReactRouter,
  Supabase,
  TailwindCSS,
  TanStack,
  TypeScript,
  Zod,
  Zustand,
} from "@/components/icons";

export type SkillIcon = FC<SVGProps<SVGSVGElement>>;

export interface Skill {
  /** Nombre canónico, coincide con skills[] de projects.ts */
  label: string;
  icon: SkillIcon;
  /** Tinte de fondo del card de habilidades */
  color: string;
  /** Color del borde animado del card de habilidades */
  borderColor: string;
  /** Aparece en el marquee del hero */
  inMarquee?: boolean;
  /** Aparece en la barra de filtros de proyectos */
  inFilters?: boolean;
}

export const SKILLS: Skill[] = [
  {
    label: "Astro",
    icon: Astroo,
    color: "rgba(231, 65, 173, 0.1)",
    borderColor: "rgb(231, 65, 173)",
    inMarquee: true,
    inFilters: true,
  },
  {
    label: "React",
    icon: ReactIcon,
    color: "rgba(102, 219, 251, 0.1)",
    borderColor: "rgb(102, 219, 251)",
    inMarquee: true,
    inFilters: true,
  },
  {
    label: "Zod",
    icon: Zod,
    color: "rgba(54, 108, 185, 0.1)",
    borderColor: "rgb(54, 108, 185)",
    inMarquee: true,
    inFilters: true,
  },
  {
    label: "HTML",
    icon: HTML,
    color: "rgba(228, 84, 43, 0.1)",
    borderColor: "rgb(228, 84, 4)",
    inFilters: true,
  },
  {
    label: "CSS",
    icon: CSS,
    color: "rgba(45, 83, 229, 0.2)",
    borderColor: "rgb(45, 83, 229)",
    inFilters: true,
  },
  {
    label: "React Router",
    icon: ReactRouter,
    color: "rgba(244, 72, 85, 0.1)",
    borderColor: "rgb(244, 72, 85)",
    inFilters: true,
  },
  {
    label: "Supabase",
    icon: Supabase,
    color: "rgba(62, 207, 142, 0.1)",
    borderColor: "rgb(62, 207, 142)",
    inMarquee: true,
    inFilters: true,
  },
  {
    label: "Figma",
    icon: Figma,
    color: "rgba(255, 255, 255, 0.1)",
    borderColor: "rgb(255, 255, 255)",
    inMarquee: true,
    inFilters: true,
  },
  {
    label: "Git",
    icon: Git,
    color: "rgba(222, 76, 54, 0.1)",
    borderColor: "rgb(222, 76, 54)",
  },
  {
    label: "Github",
    icon: Github,
    color: "rgba(255, 255, 255, 0.1)",
    borderColor: "rgb(255, 255, 255)",
  },
  {
    label: "TailwindCSS",
    icon: TailwindCSS,
    color: "rgba(62, 191, 248, 0.1)",
    borderColor: "rgb(62, 191, 248)",
    inMarquee: true,
    inFilters: true,
  },
  {
    label: "JavaScript",
    icon: JavaScript,
    color: "rgba(240, 219, 79, 0.1)",
    borderColor: "rgb(240, 219, 79)",
    inMarquee: true,
    inFilters: true,
  },
  {
    label: "PostgreSQL",
    icon: PostgreSQL,
    color: "rgba(51, 103, 145, 0.15)",
    borderColor: "rgb(51, 103, 145)",
    inMarquee: true,
    inFilters: true,
  },
  {
    label: "TanStack Query",
    icon: TanStack,
    color: "rgba(81, 126, 0, 0.1)",
    borderColor: "rgb(81, 126, 0)",
    inFilters: true,
  },
  {
    label: "TypeScript",
    icon: TypeScript,
    color: "rgba(49, 120, 198, 0.15)",
    borderColor: "rgb(49, 120, 198)",
    inMarquee: true,
    inFilters: true,
  },
  {
    label: "Zustand",
    icon: Zustand,
    color: "rgba(68, 62, 56, 0.2)",
    borderColor: "rgb(68, 62, 56)",
    inMarquee: true,
    inFilters: true,
  },
];

/** Mapa skill → icono, compartido por cards, filtros y página de detalle */
export const SKILL_ICONS: Record<string, SkillIcon> = Object.fromEntries(
  SKILLS.map((skill) => [skill.label, skill.icon])
);

export const MARQUEE_SKILLS = SKILLS.filter((skill) => skill.inMarquee);
export const FILTER_SKILLS = SKILLS.filter((skill) => skill.inFilters);
