import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import Avatar from "@/components/Avatar";
import { team, getMemberById } from "@/data/team";

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return team.map((m) => ({ id: m.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const member = getMemberById(id);
  return { title: member ? member.name : "Anggota tidak ditemukan" };
}

export default async function TeamDetailPage({ params }: Props) {
  const { id } = await params;
  const member = getMemberById(id);

  if (!member) notFound();

  return (
    <>
      <PageHeader title={member.name} subtitle={member.role} />
      <section className="section">
        <div className="container detail">
          <Avatar member={member} large />
          <p>{member.bio}</p>

          <h3>Keahlian</h3>
          <div className="tags">
            {member.skills.map((s) => (
              <span key={s} className="tag">
                {s}
              </span>
            ))}
          </div>

          <div className="hero-actions">
            <Link href="/team" className="btn btn-outline">
              Semua Anggota Tim
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}