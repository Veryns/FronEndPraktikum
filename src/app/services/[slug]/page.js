import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import { services, getServiceBySlug } from "@/data/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  return { title: service ? service.title : "Layanan tidak ditemukan" };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  return (
    <>
      <PageHeader title={`${service.icon} ${service.title}`} subtitle={service.summary} />

      <section className="section">
        <div className="container detail">
          <p>{service.description}</p>

          <h3>Yang Anda dapatkan</h3>
          <ul className="check-list">
            {service.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>

          <p className="muted">Estimasi pengerjaan: {service.duration}</p>

          <div className="hero-actions">
            <Link href="/contact" className="btn">
              Konsultasi Sekarang
            </Link>
            <Link href="/services" className="btn btn-outline">
              Semua Layanan
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}