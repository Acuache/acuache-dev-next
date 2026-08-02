import { Title } from "@/components/ui/title";
import { experience } from "@/data/experience";
import { ExperienceItem } from "./experience-item";

export function SectionExperience() {
  return (
    <section id="experiencia" className="scroll-mt-24">
      <Title>EXPERIENCIA LABORAL</Title>
      <ol className="relative mt-16">
        {experience.map((item) => (
          <li key={item.title}>
            <ExperienceItem {...item} />
          </li>
        ))}
      </ol>
    </section>
  );
}
