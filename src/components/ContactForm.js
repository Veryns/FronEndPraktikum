"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    e.target.reset();
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        Nama
        <input type="text" name="name" required placeholder="Nama lengkap" />
      </label>
      <label>
        Email
        <input type="email" name="email" required placeholder="nama@email.com" />
      </label>
      <label>
        Pesan
        <textarea name="message" rows={5} required placeholder="Tulis pesan Anda..." />
      </label>
      <button type="submit" className="btn">
        Kirim Pesan
      </button>
      {sent && <p className="success">Terima kasih! Pesan Anda sudah kami terima.</p>}
    </form>
  );
}