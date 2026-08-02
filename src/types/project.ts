export interface ProjectLinks {
  figma: string;
  web: string;
  github: string;
}

export interface Project {
  id: string;
  title: string;
  featured: boolean;
  colorBG: string[];
  description: string;
  skills: string[];
  links: ProjectLinks;
  success: string[];
  challenges: string[];
}

export interface Experience {
  date: string;
  title: string;
  company: string;
  description: string;
  /** Clave en EXPERIENCE_IMAGES (nombre del archivo en src/assets/experience) */
  certificate?: string;
}

export type CertificateIcon =
  | "Astro"
  | "React"
  | "JavaScript"
  | "TailwindCSS"
  | "ClaudeCode";

export interface Certificate {
  title: string;
  transmitter: string;
  date: string;
  /** Clave en CERTIFICATE_IMAGES (nombre del archivo en src/assets/certificates) */
  image: string;
  icon: CertificateIcon;
}
