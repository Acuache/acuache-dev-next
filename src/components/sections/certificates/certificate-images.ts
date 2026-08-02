import type { StaticImageData } from "next/image";
import cienProyectos from "@/assets/certificates/100proyectos-de-desarrollo-web-con-html-ccs-y-javaScript.jpg";
import codingLatamCeroAReact from "@/assets/certificates/codingLatam-curso-de-cero-a-react.jpg";
import devTallesReact from "@/assets/certificates/devTalles-react-de-cero-a-experto.jpg";
import devTallesTailwind from "@/assets/certificates/devTalles-tailwindCS-para-desarrolladores-de-software.jpg";
import masterCss3 from "@/assets/certificates/master-en-css3-avanzado-maqueta-3-sitios-web-profesionales.jpg";
import react19Supabase from "@/assets/certificates/react19-de-cero-a-avanzado-con-supabase-full-stack.jpg";

export const CERTIFICATE_IMAGES: Record<string, StaticImageData> = {
  "100proyectos-de-desarrollo-web-con-html-ccs-y-javaScript": cienProyectos,
  "codingLatam-curso-de-cero-a-react": codingLatamCeroAReact,
  "devTalles-react-de-cero-a-experto": devTallesReact,
  "devTalles-tailwindCS-para-desarrolladores-de-software": devTallesTailwind,
  "master-en-css3-avanzado-maqueta-3-sitios-web-profesionales": masterCss3,
  "react19-de-cero-a-avanzado-con-supabase-full-stack": react19Supabase,
};
