import PageHeader from "@/components/PageHeader";
import { company, timeline } from "@/data/company";

export const metadata = { title: "Tentang Kami" };

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="Tentang Kami"
        subtitle={`Berdiri sejak ${company.founded}, kami fokus membangun produk digital yang berdampak.`}
      />

      <section className="section">
        <div className="container grid grid-2">
          <div className="card">
            <h3>Visi</h3>
            <p>
              Menjadi mitra teknologi terpercaya yang membantu bisnis di Indonesia
              tumbuh melalui solusi digital yang sederhana dan andal.
            </p>
          </div>
          <div className="card">
            <h3>Misi</h3>
            <p>
              Menghadirkan produk berkualitas, membangun hubungan jangka panjang
              dengan klien, dan terus mengembangkan kemampuan tim.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Perjalanan Kami</h2>
          <ul className="timeline">
            {timeline.map((t) => (
              <li key={t.year}>
                <strong>{t.year}</strong>
                <span>{t.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}