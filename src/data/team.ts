export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  skills: string[];
};

export const team: TeamMember[] = [
  {
    id: "zero-two",
    name: "Zero Two",
    role: "CEO & Co-founder",
    bio: "Zero Two memimpin arah strategi perusahaan. Berpengalaman lebih dari 10 tahun di industri software dan manajemen produk.",
    skills: ["Strategi Bisnis", "Product Management", "Kepemimpinan"],
  },
  {
    id: "shu-ouma",
    name: "Shu Ouma",
    role: "CTO & Co-founder",
    bio: "Shu bertanggung jawab atas arsitektur teknologi dan kualitas engineering di seluruh proyek.",
    skills: ["Arsitektur Sistem", "Next.js", "Cloud"],
  },
  {
    id: "inori-yuzuriha",
    name: "Inori Yuzuriha",
    role: "Lead UI/UX Designer",
    bio: "Inori memimpin tim desain dan memastikan setiap produk nyaman dipakai serta konsisten secara visual.",
    skills: ["Figma", "User Research", "Design System"],
  },
  {
    id: "kazuto-kirigaya",
    name: "Kazuto Kirigaya",
    role: "DevOps Engineer",
    bio: "Kirito mengurus infrastruktur, otomasi deployment, dan memastikan semua layanan berjalan stabil.",
    skills: ["Docker", "CI/CD", "Monitoring"],
  },
];

export function getMemberById(id: string): TeamMember | undefined {
  return team.find((m) => m.id === id);
}