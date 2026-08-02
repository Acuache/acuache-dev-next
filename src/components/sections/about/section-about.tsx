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
            Soy autodidacta y estudio los últimos ciclos de Ingeniería de
            Sistemas. Estoy construyendo mi camino en el desarrollo frontend,
            avanzando proyecto a proyecto, aprendiendo nuevas herramientas y
            refinando mi forma de trabajar. Me interesa unir diseño, UX/UI y
            código para crear experiencias claras y cuidadas.
          </p>
          <p>
            Estoy dando mis primeros pasos como freelancer, con una mentalidad
            enfocada en aprender y mejorar cada día. Me gusta asumir pequeños
            retos que impulsen mi crecimiento y me permitan fortalecer mi forma
            de trabajar como desarrollador.
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
