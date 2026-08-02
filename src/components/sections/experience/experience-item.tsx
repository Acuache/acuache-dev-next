import { ChevronRight } from "lucide-react";
import type { Experience } from "@/types/project";
import { ImageDialog } from "@/components/ui/image-dialog";
import { EXPERIENCE_IMAGES } from "./experience-images";

export function ExperienceItem({
  title,
  company,
  description,
  certificate,
  date,
}: Experience) {
  const certificateImage = certificate
    ? EXPERIENCE_IMAGES[certificate]
    : undefined;

  return (
    <div className="relative mx-12 pb-12 grid md:grid-cols-5 md:gap-10 md:space-x-4">
      <div className="absolute left-[-35px] block h-full w-0 border-l-2 border-white/15" />

      <div className="relative pb-12 md:col-span-2">
        <div className="sticky top-0">
          <span className="text-st -left-[41px] absolute rounded-full text-5xl">
            &bull;
          </span>
          <p className="text-xl font-bold text-st">{title}</p>
          <p className="font-heading font-semibold text-base text-white">
            {company}
          </p>
          {/^\d{4}$/.test(date) ? (
            <time dateTime={date} className="p-0 m-0 text-sm text-white/80">
              {date}
            </time>
          ) : (
            <span className="p-0 m-0 text-sm text-white/80">{date}</span>
          )}
        </div>
      </div>
      <div className="relative flex flex-col gap-2 pb-4 text-gray-300 md:col-span-3">
        {description}
        {certificateImage && (
          <ImageDialog
            image={certificateImage}
            alt={`Certificado de ${title} — ${company}`}
            title={title}
            description={company}
            triggerLabel={`Ver el certificado de ${title}`}
            triggerClassName="group flex gap-2 w-fit items-center cursor-pointer transition-colors duration-300 hover:text-st"
          >
            Saber más
            <ChevronRight className="w-5 transition-transform duration-300 ease-out motion-reduce:transition-none group-hover:translate-x-1" />
          </ImageDialog>
        )}
      </div>
    </div>
  );
}
