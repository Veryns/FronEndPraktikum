import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { company } from "@/data/company";

export const metadata = {
  title: {
    default: `${company.name} - ${company.tagline}`,
    template: `%s | ${company.name}`,
  },
  description: company.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}