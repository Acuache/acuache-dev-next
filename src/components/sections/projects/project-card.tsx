import Image from "next/image";
import Link from "next/link";
import { Globe } from "lucide-react";
import { Figma, Github } from "@/components/icons";
import { SKILL_ICONS } from "@/data/skills";
import type { Project } from "@/types/project";
import { PROJECT_IMAGES } from "./project-images";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { id, title, description, skills, links, colorBG } = project;
  const image = PROJECT_IMAGES[id];

  return (
    <article className="flex flex-col h-full border group overflow-hidden rounded-lg">
      <div
        className="relative w-full aspect-9/4 overflow-hidden p-5"
        style={{
          background: `linear-gradient(to right, ${colorBG[0]}, ${colorBG[1]})`,
        }}
      >
        {image && (
          <Image
            src={image}
            alt={`Imagen del proyecto ${title}`}
            className="w-full h-full object-contain object-center"
          />
        )}
      </div>
      <div className="p-5 flex flex-col gap-3 justify-between flex-1 flex-wrap">
        <h3 className="text-2xl">{title}</h3>
        <p className="line-clamp-4">{description}</p>
        <div className="flex gap-6 justify-end xs:items-center xs:justify-between xs:ml-4">
          <div className="hidden xs:flex mt-2 items-end">
            {skills.slice(0, 4).map((skill, skillIndex) => {
              const Icon = SKILL_ICONS[skill];
              if (!Icon) return null;
              return (
                <Icon
                  key={skill}
                  aria-label={skill}
                  className="size-10 p-2 rounded-full border -ml-4 relative bg-[#101010]"
                  style={{ zIndex: skillIndex }}
                />
              );
            })}
            {skills.length > 4 && (
              <div className="ml-1 flex gap-1.5" aria-hidden="true">
                <div className="size-2 bg-white rounded-full relative group-hover:bg-st/80" />
                <div className="size-2 bg-white rounded-full relative group-hover:bg-st/80" />
                <div className="size-2 bg-white rounded-full relative group-hover:bg-st/80" />
              </div>
            )}
          </div>
          <div className="flex gap-5 items-center justify-center">
            <div className="flex items-center justify-center gap-3">
              {links.figma.length !== 0 && (
                <a
                  href={links.figma}
                  className="block md:hidden lg:block group/icon relative"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ir al figma del proyecto ${title}`}
                >
                  <Figma className="size-6 group-hover/icon:filter-[drop-shadow(0_0_5px_rgb(255_255_255))]" />
                </a>
              )}
              {links.github.length !== 0 && (
                <a
                  href={links.github}
                  className="group/icon relative"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ir al github del proyecto ${title}`}
                >
                  <Github className="size-6 group-hover/icon:filter-[drop-shadow(0_0_5px_rgb(255_255_255))]" />
                </a>
              )}
              {links.web.length !== 0 && (
                <a
                  href={links.web}
                  className="group/icon relative"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ir al sitio web del proyecto ${title}`}
                >
                  <Globe className="size-6 group-hover/icon:filter-[drop-shadow(0_0_5px_rgb(255_255_255))]" />
                </a>
              )}
            </div>
            <Link
              href={`/proyectos/${id}`}
              className="relative px-5 py-2 font-bold group/btn"
              aria-label={`Ver más sobre el proyecto ${title}`}
            >
              <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-st transition-all duration-300 ease-out motion-reduce:transition-none group-hover/btn:w-full group-hover/btn:h-full" />
              <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-st transition-all duration-300 ease-out motion-reduce:transition-none group-hover/btn:w-full group-hover/btn:h-full" />
              <span className="font-heading relative z-10 transition-colors duration-300 group-hover/btn:text-st group-hover/btn:[text-shadow:0_0_8px_var(--color-st)]">
                VER
              </span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
