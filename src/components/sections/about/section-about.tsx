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
            Trabajo sobre todo con Claude Code: creo mis propios skills,
            comandos y hooks, y cuando la tarea lo pide levanto varios agentes
            en paralelo con uno que orquesta y reparte. Pero lo que más me ha
            servido no es la herramienta sino el hábito: dejar la
            especificación clara antes de codear y avanzar en pasos chicos,
            para que cada cambio siga siendo algo que puedo leer y entender.
          </p>
          <p>
            Desde mayo de 2026 desarrollo software en la Municipalidad
            Provincial de Ica, donde hice un sistema de tickets para soporte
            técnico y un kardex para almacén. Es la primera vez que lo que
            escribo lo usa gente todos los días, y eso me cambió las
            prioridades: ahora reviso primero lo que puede romper datos. En
            paralelo tomo proyectos pequeños como freelance, que es donde más
            aprendo.
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
