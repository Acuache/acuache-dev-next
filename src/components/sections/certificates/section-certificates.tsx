import { Title } from "@/components/ui/title";
import { CertificatesPager } from "./certificates-pager";

export function SectionCertificates() {
  return (
    <section id="certificados" className="scroll-mt-24">
      <Title>CERTIFICADOS</Title>
      <CertificatesPager />
    </section>
  );
}
