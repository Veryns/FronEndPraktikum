import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { company } from "@/data/company";

export const metadata = { title: "Kontak" };

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Hubungi Kami" subtitle="Ceritakan kebutuhan Anda, kami siap membantu." />
      <section className="section">
        <div className="container grid grid-2">
          <div className="card">
            <h3>Informasi Kontak</h3>
            <p>📍 {company.address}</p>
            <p>✉️ {company.email}</p>
            <p>📞 {company.phone}</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}