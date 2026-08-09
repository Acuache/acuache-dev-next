import {
  ClaudeCode,
  JavaScript,
  OpenCode,
  React as ReactIcon,
  TailwindCSS,
} from "@/components/icons";
import type { SkillIcon } from "@/data/skills";
import type { CertificateIcon } from "@/types/project";

/**
 * Los iconos de certificados NO salen de SKILL_ICONS: ese mapa se arma con los
 * `label` de SKILLS y un certificado puede tratar un tema que no esté listado
 * como habilidad, así que ahí no siempre existe.
 *
 * Tipar el Record con CertificateIcon obliga a cubrir todos los valores: si
 * agregas uno nuevo al tipo y olvidas el icono, falla el build en vez de
 * romper en runtime.
 */
export const CERTIFICATE_ICONS: Record<CertificateIcon, SkillIcon> = {
  ClaudeCode: ClaudeCode,
  JavaScript: JavaScript,
  OpenCode: OpenCode,
  React: ReactIcon,
  TailwindCSS: TailwindCSS,
};
