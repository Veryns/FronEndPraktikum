import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import { company, stats } from "@/data/company";
import { services } from "@/data/services";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>{company.tagline}</h1>
          <p>{company.description}</p>
          <div className="hero-actions">
            <Link href="/services" className="btn">
              Lihat Layanan
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container stats">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Layanan Kami</h2>
          <div className="grid">
            {services.slice(0, 3).map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}