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
  link?: string;
}

export type CertificateIcon = "Astro" | "React" | "JavaScript" | "TailwindCSS";

export interface Certificate {
  title: string;
  transmitter: string;
  date: string;
  link: string;
  icon: CertificateIcon;
}
