import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container detail" style={{ textAlign: "center" }}>
        <h1>404</h1>
        <p>Halaman yang kamu cari tidak ditemukan.</p>
        <div className="hero-actions" style={{ justifyContent: "center" }}>
          <Link href="/" className="btn">
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </section>
  );
}