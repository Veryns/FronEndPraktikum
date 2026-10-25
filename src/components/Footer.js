import Link from "next/link";
import { company, navLinks } from "@/data/company";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>{company.name}</h3>
          <p>{company.tagline}</p>
        </div>
        <div>
          <h4>Menu</h4>
          <ul>
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Kontak</h4>
          <ul>
            <li>{company.email}</li>
            <li>{company.phone}</li>
            <li>{company.address}</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} {company.name}.
      </div>
    </footer>
  );
}