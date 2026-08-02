import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SectionHero } from "@/components/sections/hero/section-hero";
import { SectionProjects } from "@/components/sections/projects/section-projects";
import { SectionSkills } from "@/components/sections/skills/section-skills";
import { SectionExperience } from "@/components/sections/experience/section-experience";
import { SectionCertificates } from "@/components/sections/certificates/section-certificates";
import { SectionAbout } from "@/components/sections/about/section-about";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <SectionHero />
      <SectionProjects />
      <SectionSkills />
      <SectionExperience />
      <SectionCertificates />
      <SectionAbout />
      <Footer />
    </>
  );
}
