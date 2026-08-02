import {
  Astroo,
  ClaudeCode,
  JavaScript,
  React as ReactIcon,
  TailwindCSS,
} from "@/components/icons";
import type { SkillIcon } from "@/data/skills";
import type { CertificateIcon } from "@/types/project";

/**
 * Los iconos de certificados NO salen de SKILL_ICONS: ese mapa se arma con los
 * `label` de SKILLS y hay temas de certificado (Claude Code) que no son
 * habilidades listadas, así que ahí no existen.
 *
 * Tipar el Record con CertificateIcon obliga a cubrir todos los valores: si
 * agregas uno nuevo al tipo y olvidas el icono, falla el build en vez de
 * romper en runtime.
 */
export const CERTIFICATE_ICONS: Record<CertificateIcon, SkillIcon> = {
  Astro: Astroo,
  ClaudeCode: ClaudeCode,
  JavaScript: JavaScript,
  React: ReactIcon,
  TailwindCSS: TailwindCSS,
};
