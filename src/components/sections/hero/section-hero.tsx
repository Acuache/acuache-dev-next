import Image from "next/image";
import { Github, LinkedIn } from "@/components/icons";
import fotoAcuache from "@/assets/images/Acuache.webp";
import { SkillsMarquee } from "./skills-marquee";

export function SectionHero() {
  return (
    <>
      <section
        id="inicio"
        className="flex flex-col gap-2 sm:flex-row sm:items-center my-20 mt-25 scroll-mt-24"
      >
        <div className="flex flex-col gap-2 sm:basis-1/5 md:basis-1/2">
          <h1 className="text-5xl text-st xs:text-6xl lg:text-7xl">
            MICHAEL <br /> ACUACHE
          </h1>
          <span className="text-xl xs:text-2xl">Desarrollador Web</span>
          <p className="text-sm text-balance xs:text-base">
            Soy estudiante de Ingeniería de Sistemas y actualmente estoy
            profundizando en el desarrollo web con Next.js. Me interesa crear
            productos digitales bien diseñados, funcionales y centrados en el
            usuario. Me caracterizo por cuidar tanto la experiencia como la
            calidad del código, y por mantener un aprendizaje constante para
            seguir creciendo profesionalmente.
          </p>
          <div className="flex gap-4 items-center">
            <a
              aria-label="Ir al Github de Michael Acuache"
              href="https://github.com/Acuache"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 p-2 hover:border-st/80 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(0,255,153,0.35)]"
            >
              <Github className="relative size-6" />
            </a>
            <a
              aria-label="Ir al LinkedIn de Michael Acuache"
              href="https://www.linkedin.com/in/acuache/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 p-2 hover:border-st/80 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(0,255,153,0.35)]"
            >
              <LinkedIn className="size-6" />
            </a>
            <a
              href="https://drive.google.com/file/d/1q--lcZl7UIwoSzVv6BZxOTHvKzeN22oi/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 px-5 relative group transition-colors duration-300 hover:text-st hover:[text-shadow:0_0_8px_var(--color-st)]"
            >
              <span className="absolute top-0 left-0 w-2 h-2 border-st border-t-2 border-l-2 transition-all duration-300 ease-out motion-reduce:transition-none group-hover:w-full group-hover:h-full" />
              <span className="absolute right-0 bottom-0 w-2 h-2 border-st border-b-2 border-r-2 transition-all duration-300 ease-out motion-reduce:transition-none group-hover:w-full group-hover:h-full" />
              Ver CV
            </a>
          </div>
        </div>
        <div className="max-w-85 mx-auto sm:basis-4/5 md:max-w-100 md:basis-1/2">
          <Image
            src={fotoAcuache}
            alt="Foto de perfil Michael Acuache"
            priority
            sizes="(min-width: 768px) 400px, 85vw"
            className="w-full h-auto inset-shadow-2xl inset-shadow-red-700"
          />
        </div>
      </section>
      <SkillsMarquee />
    </>
  );
}
