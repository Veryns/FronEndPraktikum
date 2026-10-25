export const services = [
  {
    slug: "web-development",
    icon: "🌐",
    title: "Web Development",
    summary: "Website company profile, toko online, dan aplikasi web yang cepat serta mudah dikelola.",
    description:
      "Kami membangun website modern dengan performa tinggi, SEO-friendly, dan tampil rapi di semua ukuran layar. Mulai dari company profile sederhana sampai aplikasi web yang kompleks.",
    features: [
      "Desain responsif untuk mobile, tablet, dan desktop",
      "Optimasi kecepatan dan SEO dasar",
      "Panel admin untuk mengelola konten",
      "Integrasi pembayaran dan API pihak ketiga",
    ],
    duration: "3 - 8 minggu",
  },
  {
    slug: "mobile-app",
    icon: "📱",
    title: "Mobile App",
    summary: "Aplikasi Android dan iOS dengan pengalaman pengguna yang halus.",
    description:
      "Tim kami mengembangkan aplikasi mobile lintas platform dengan antarmuka yang intuitif, sehingga pengguna nyaman dan bisnis Anda lebih dekat dengan pelanggan.",
    features: [
      "Satu basis kode untuk Android dan iOS",
      "Notifikasi push dan mode offline",
      "Publikasi ke Play Store dan App Store",
      "Pemeliharaan dan update berkala",
    ],
    duration: "6 - 14 minggu",
  },
  {
    slug: "ui-ux-design",
    icon: "🎨",
    title: "UI/UX Design",
    summary: "Riset pengguna, wireframe, hingga prototipe interaktif yang siap dikembangkan.",
    description:
      "Desain yang baik dimulai dari memahami pengguna. Kami membantu memetakan kebutuhan, menyusun alur, lalu menerjemahkannya menjadi tampilan yang konsisten dan mudah dipakai.",
    features: [
      "Riset pengguna dan analisis kompetitor",
      "Wireframe dan prototipe interaktif",
      "Design system yang konsisten",
      "Uji kegunaan (usability testing)",
    ],
    duration: "2 - 5 minggu",
  },
  {
    slug: "cloud-devops",
    icon: "☁️",
    title: "Cloud & DevOps",
    summary: "Infrastruktur cloud yang aman, hemat biaya, dan mudah dikembangkan.",
    description:
      "Kami menyiapkan infrastruktur, pipeline CI/CD, dan monitoring agar aplikasi Anda berjalan stabil dan rilis fitur baru bisa dilakukan dengan cepat dan aman.",
    features: [
      "Migrasi dan setup infrastruktur cloud",
      "Pipeline CI/CD otomatis",
      "Monitoring, logging, dan alert",
      "Optimasi biaya cloud",
    ],
    duration: "2 - 6 minggu",
  },
];

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug);
}