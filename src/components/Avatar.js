"use client";

import { useState } from "react";

export function getInitials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
}

export default function Avatar({ member, large = false }) {
  const [failed, setFailed] = useState(false);
  const cls = `avatar ${large ? "avatar-lg" : ""}`;

  if (failed) {
    return <div className={cls}>{getInitials(member.name)}</div>;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/team/${member.id}.jpg`}
      alt={`Foto ${member.name}`}
      className={`${cls} avatar-img`}
      onError={() => setFailed(true)}
    />
  );
}