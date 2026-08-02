import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { PROJECT_IMAGES } from "@/components/sections/projects/project-images";
import { SKILL_ICONS } from "@/data/skills";
import { Figma, Github } from "@/components/icons";
import { Globe } from "lucide-react";
import { BackButton } from "./back-button";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) {
    return {
      title: "Proyecto no encontrado",
      robots: { index: false, follow: false },
    };
  }

  const image = PROJECT_IMAGES[project.id];

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `/proyectos/${project.id}`,
    },
    openGraph: {
      title: project.title,
      description: project.description,
      locale: "es_PE",
      type: "website",
      url: `/proyectos/${project.id}`,
      images: image
        ? [{ url: image.src, width: image.width, height: image.height }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: image ? [image.src] : undefined,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  const image = PROJECT_IMAGES[project.id];
  const skills = project.skills;

  return (
    <>
      <BackButton />
      <main className="flex flex-col gap-5 md:flex-row sm:mt-5">
        <div className="flex-1/2">
          <h1 className="text-4xl text-st mb-5 sm:text-5xl text-balance">
            {project.title}
          </h1>
          <p>{project.description}</p>

          <div className="mt-5 w-fit flex gap-1">
            {project.links.figma.length !== 0 && (
              <a
                href={project.links.figma}
                className="inline-flex p-2 rounded-lg border border-transparent transition-all duration-300 ease-out motion-reduce:transition-none hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/5"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ir al figma del proyecto ${project.title}`}
              >
                <Figma className="size-6" />
              </a>
            )}
            {project.links.github.length !== 0 && (
              <a
                href={project.links.github}
                className="inline-flex p-2 rounded-lg border border-transparent transition-all duration-300 ease-out motion-reduce:transition-none hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/5"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ir al github del proyecto ${project.title}`}
              >
                <Github className="size-6" />
              </a>
            )}
            {project.links.web.length !== 0 && (
              <a
                href={project.links.web}
                className="inline-flex p-2 rounded-lg border border-transparent transition-all duration-300 ease-out motion-reduce:transition-none hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/5"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ir al sitio web del proyecto ${project.title}`}
              >
                <Globe className="size-6" />
              </a>
            )}
          </div>

          <div className="flex flex-col mt-5 gap-2">
            <h3 className="text-xl">SKILLS</h3>
            <section className="flex flex-wrap gap-3">
              {skills.map((skill) => {
                const Icon = SKILL_ICONS[skill];
                return Icon ? (
                  <article
                    key={skill}
                    className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/3 px-4 py-2 text-sm text-white/70 transition-all duration-300 ease-out motion-reduce:transition-none hover:-translate-y-0.5 hover:border-st/60 hover:bg-white/8 hover:text-white hover:shadow-[0_0_20px_rgba(0,255,153,0.35)]"
                  >
                    <Icon className="size-4 transition-transform duration-300 ease-out motion-reduce:transition-none group-hover:scale-110" />
                    <span className="font-medium tracking-wide">{skill}</span>
                  </article>
                ) : (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-full border border-white/10 px-4 py-2 text-sm text-white/70"
                  >
                    {skill}
                  </span>
                );
              })}
            </section>
          </div>
        </div>
        <div className="flex justify-center items-center mx-auto max-w-120 md:max-w-none md:flex-1/2">
          {image && (
            <Image
              src={image}
              alt={`Imagen del proyecto ${project.title}`}
              priority
              className="w-full h-auto"
            />
          )}
        </div>
      </main>
      <div className="flex flex-col gap-5 mt-5 md:flex-row md:mt-10 pb-20">
        <div className="flex gap-2 flex-col">
          <h3 className="text-xl">LO QUE APRENDÍ</h3>
          <ul className="flex flex-col gap-3">
            {project.success.map((good) => (
              <li
                key={good}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition-all duration-300 ease-out motion-reduce:transition-none hover:-translate-y-0.5 hover:border-st/70 hover:bg-white/10 hover:shadow-[0_0_18px_rgba(0,255,153,0.25)]"
              >
                <p className="text-sm leading-relaxed text-white/75">{good}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-2 flex-col">
          <h3 className="text-xl">RETOS ENFRENTADOS</h3>
          <ul className="flex flex-col gap-3">
            {project.challenges.map((challenge) => (
              <li
                key={challenge}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition-all duration-300 ease-out motion-reduce:transition-none hover:-translate-y-0.5 hover:border-st/70 hover:bg-white/10 hover:shadow-[0_0_18px_rgba(0,255,153,0.25)]"
              >
                <p className="text-sm leading-relaxed text-white/75">
                  {challenge}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
