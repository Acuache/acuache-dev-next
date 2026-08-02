import type { CSSProperties, ReactNode } from "react";

interface CardSkillProps {
  color: string;
  label: string;
  borderColor: string;
  children: ReactNode;
}

export function CardSkill({
  color,
  label,
  borderColor,
  children,
}: CardSkillProps) {
  return (
    <article
      className="skill-card flex gap-2 items-center py-2 px-5 rounded-xl bg-[#1e1e1e] relative"
      style={{ "--skill-border-color": borderColor } as CSSProperties}
    >
      <div className="p-2 rounded-xl" style={{ backgroundColor: color }}>
        {children}
      </div>
      <p>{label}</p>
    </article>
  );
}
