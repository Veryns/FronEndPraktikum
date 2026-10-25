import Link from "next/link";

export default function ServiceCard({ service }) {
  return (
    <article className="card">
      <div className="card-icon">{service.icon}</div>
      <h3>{service.title}</h3>
      <p>{service.summary}</p>
      <Link href={`/services/${service.slug}`} className="card-link">
        Lihat detail
      </Link>
    </article>
  );
}