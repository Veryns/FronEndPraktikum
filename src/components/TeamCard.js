import Link from "next/link";
import Avatar from "./Avatar";

export default function TeamCard({ member }) {
  return (
    <article className="card team-card">
      <Avatar member={member} />
      <h3>{member.name}</h3>
      <p className="muted">{member.role}</p>
      <Link href={`/team/${member.id}`} className="card-link">
        Lihat profil
      </Link>
    </article>
  );
}