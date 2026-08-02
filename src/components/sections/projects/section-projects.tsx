import { Title } from "@/components/ui/title";
import { ProjectsExplorer } from "./projects-explorer";

export function SectionProjects() {
  return (
    <section id="proyectos" className="scroll-mt-24">
      <Title>Proyectos</Title>
      <ProjectsExplorer />
    </section>
  );
}
