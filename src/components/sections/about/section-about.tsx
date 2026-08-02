import Image from "next/image";
import { Title } from "@/components/ui/title";
import fotoAcuache from "@/assets/images/Acuache.webp";

export function SectionAbout() {
  return (
    <section id="sobre-mi" className="scroll-mt-24">
      <Title>SOBRE MI</Title>
      <div className="flex flex-col gap-5 md:flex-row">
        <div className="md:flex-1 md:text-lg flex flex-col gap-2">
          <p>
            Soy autodidacta y estoy en los últimos ciclos de Ingeniería de
            Sistemas. Me dedico al frontend porque es donde el diseño y el
            código se juntan: me importa que una interfaz se vea bien, pero
            sobre todo que se entienda y no le estorbe a quien la usa.
          </p>
          <p>
            En el último año le he metido bastante IA a mi forma de trabajar.
            Uso distintas herramientas según lo que necesite, y lo que más me ha
            servido es aprender a dar buen contexto y dejar la especificación
            clara antes de codear. Lo que se genera lo leo y lo corrijo igual
            que si lo hubiera escrito yo.
          </p>
          <p>
            Estoy empezando como freelance. Por ahora tomo proyectos pequeños,
            que es donde más aprendo, y de ahí voy subiendo de nivel.
          </p>
        </div>
        <div className="w-full max-w-100 mx-auto md:flex-1">
          <Image
            src={fotoAcuache}
            alt="Foto de Michael Acuache"
            sizes="(min-width: 768px) 400px, 85vw"
            className="w-full h-full object-cover md:h-85"
          />
        </div>
      </div>
    </section>
  );
}
