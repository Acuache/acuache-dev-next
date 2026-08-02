import { SKILL_ICONS } from "@/data/skills";
import type { Certificate } from "@/types/project";

interface CertificateItemProps extends Certificate {
  num: number;
}

export function CertificateItem({
  title,
  transmitter,
  date,
  link,
  icon,
  num,
}: CertificateItemProps) {
  const Icon = SKILL_ICONS[icon];

  return (
    <article className="relative flex gap-2 items-center border justify-center p-2 max-w-110 w-full h-full md:max-w-200 lg:p-3 mx-auto md:mx-0">
      <div className="absolute bottom-2 right-2 bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shadow-lg">
        {num}
      </div>
      <div className="p-3">
        <Icon className="size-15" />
      </div>
      <div className="flex flex-col flex-1 justify-between h-full">
        <h3 className="line-clamp-2 min-h-8">{title}</h3>
        <p>
          <span className="text-st">Emisor: </span>
          {transmitter}
        </p>
        <p>{date}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit relative font-medium transition-colors duration-300 hover:text-st before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-st before:transition-all before:duration-300 before:ease-out motion-reduce:before:transition-none hover:before:w-full"
        >
          Ver certificado
        </a>
      </div>
    </article>
  );
}
