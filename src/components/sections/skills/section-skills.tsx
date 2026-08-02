import { Title } from "@/components/ui/title";
import { SKILLS } from "@/data/skills";
import { CardSkill } from "./card-skill";

export function SectionSkills() {
  return (
    <section id="habilidades">
      <Title>Habilidades</Title>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {SKILLS.map((skill) => {
          const Icon = skill.icon
          return (
            <CardSkill
              key={skill.label}
              color={skill.color}
              label={skill.label}
              borderColor={skill.borderColor}
            >
              <Icon className="size-7" />
            </CardSkill>
          )
        })}
      </div>
    </section>
  );
}
