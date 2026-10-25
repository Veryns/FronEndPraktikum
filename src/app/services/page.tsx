import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

export const metadata: Metadata = { title: "Layanan" };

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Layanan"
        subtitle="Solusi digital yang kami tawarkan untuk membantu bisnis Anda."
      />
      <section className="section">
        <div className="container grid">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>
    </>
  );
}