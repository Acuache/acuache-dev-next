import { MARQUEE_SKILLS } from "@/data/skills";

const SKILLS_X3 = [...MARQUEE_SKILLS, ...MARQUEE_SKILLS, ...MARQUEE_SKILLS];

export function SkillsMarquee() {
  return (
    <section
      className="marquee overflow-hidden my-10"
      aria-label="Tecnologías que manejo"
    >
      <div className="marquee-track flex gap-15">
        {SKILLS_X3.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <article
              key={`${skill.label}-${index}`}
              className="flex gap-1.5 items-center"
              aria-hidden={index >= MARQUEE_SKILLS.length || undefined}
            >
              <Icon className="size-9" aria-hidden="true" />
              <p>{skill.label}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
