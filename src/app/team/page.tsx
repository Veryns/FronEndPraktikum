import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import TeamCard from "@/components/TeamCard";
import { team } from "@/data/team";

export const metadata: Metadata = { title: "Tim" };

export default function TeamPage() {
  return (
    <>
      <PageHeader title="Tim Kami" subtitle="Orang-orang di balik setiap proyek." />
      <section className="section">
        <div className="container grid">
          {team.map((m) => (
            <TeamCard key={m.id} member={m} />
          ))}
        </div>
      </section>
    </>
  );
}