import Link from "next/link";
import type { Project } from "@/content/projects";
import StatusBadge from "./StatusBadge";
export default function ProjectCard({ p, big = false }: { p: Project; big?: boolean }) {
  return (
    <Link href={`/projects/${p.slug}`} className={`pcard${big ? " big" : ""}`} data-reveal>
      <span className="lab">{p.label}</span>
      <h3>{p.title}</h3>
      <p>{p.shortDescription}</p>
      {big && p.topics && <ul className="chips" aria-label="Topics covered">{p.topics.map(t => <li key={t}>{t}</li>)}</ul>}
      {p.technologies.length > 0 && !big && <p className="meta">{p.technologies.join(", ")}</p>}
      <StatusBadge status={p.status} />
      <span className="more" aria-hidden>View Project →</span>
    </Link>
  );
}
