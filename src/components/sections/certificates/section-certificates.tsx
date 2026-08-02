import { Title } from "@/components/ui/title";
import { certificates } from "@/data/certificates";
import { CertificateItem } from "./certificate-item";

export function SectionCertificates() {
  return (
    <section id="certificados">
      <Title>CERTIFICADOS</Title>
      <div className="grid gap-5 md:grid-cols-2 grid-flow-row-auto">
        {certificates.map((certificate, index) => (
          <CertificateItem
            key={certificate.title}
            {...certificate}
            num={index + 1}
          />
        ))}
      </div>
    </section>
  );
}
