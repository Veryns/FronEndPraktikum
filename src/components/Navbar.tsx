"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { company, navLinks } from "@/data/company";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">N</span>
          {company.name}
        </Link>

        <button
          className="menu-toggle"
          aria-label="Buka menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={isActive(link.href) ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}