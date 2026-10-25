import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: {
    default: `${company.name} - ${company.tagline}`,
    template: `%s | ${company.name}`,
  },
  description: company.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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