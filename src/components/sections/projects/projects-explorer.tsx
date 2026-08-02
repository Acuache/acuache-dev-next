"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { projects } from "@/data/projects";
import { FILTER_SKILLS } from "@/data/skills";
import { useTippySingleton } from "@/hooks/use-tippy-singleton";
import { Button } from "@/components/ui/button";
import { SkillFilter } from "./skill-filter";
import { ProjectCard } from "./project-card";

export function ProjectsExplorer() {
  const [featuredOnly, setFeaturedOnly] = useState(true);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const filtersRef = useTippySingleton<HTMLElement>();

  const filteredProjects = projects.filter(
    (project) =>
      (!featuredOnly || project.featured) &&
      selectedSkills.every((skill) => project.skills.includes(skill))
  );

  const toggleSkill = (label: string) => {
    setSelectedSkills((prev) =>
      prev.includes(label)
        ? prev.filter((skill) => skill !== label)
        : [...prev, label]
    );
  };

  return (
    <>
      <section
        ref={filtersRef}
        aria-label="Filtros de proyectos por tecnología"
        className="flex flex-wrap items-center justify-center gap-6 max-w-2xl mx-auto my-5"
      >
        <SkillFilter
          label="Destacados"
          active={featuredOnly}
          onToggle={() => setFeaturedOnly((prev) => !prev)}
        >
          <Star className="size-6" />
        </SkillFilter>
        {FILTER_SKILLS.map((skill) => (
          <SkillFilter
            key={skill.label}
            label={skill.label}
            active={selectedSkills.includes(skill.label)}
            onToggle={() => toggleSkill(skill.label)}
          >
            <skill.icon className="size-6" />
          </SkillFilter>
        ))}
      </section>

      {filteredProjects.length === 0 ? (
        <div className="mx-auto max-w-xl text-center border border-dashed border-st/60 rounded-2xl p-8 flex flex-col items-center gap-4">
          <h3 className="text-2xl">Sin resultados</h3>
          <p className="opacity-80 max-w-md">
            No hay proyectos que coincidan con esas tecnologías. Ajusta los
            filtros o vuelve a verlos todos.
          </p>
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              setSelectedSkills([]);
              setFeaturedOnly(false);
            }}
            aria-label="Limpiar filtros"
            className="rounded-full border-st bg-transparent text-white hover:bg-st hover:text-black cursor-pointer"
          >
            Limpiar filtros
          </Button>
        </div>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </section>
      )}
    </>
  );
}
