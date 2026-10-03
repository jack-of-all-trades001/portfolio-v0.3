import type { Project } from "@/content/projects";
import StatusBadge from "./StatusBadge";
import { Chip, StatusBlock } from "./Work";
const ok = (v: string) => v && v !== "PLACEHOLDER";
export default function ProjectDetail({ p }: { p: Project }) {
  return (
    <article className="detail">
      <span className="lab">{p.label}</span>
      <h1>{p.title}</h1>
      <p className="lead">{p.shortDescription}</p>
      <p><StatusBadge status={p.status} /></p>
      <p className="links">{ok(p.githubUrl) && <a href={p.githubUrl}>GitHub</a>}{ok(p.liveUrl) && <a href={p.liveUrl}>Live demo</a>}</p>
      {p.flow && <ol className="flowstrip" aria-label="How each exercise works">{p.flow.map(f => <li key={f}>{f}</li>)}</ol>}
      {!p.caseStudy && <p>{p.longDescription}</p>}
      {p.problem && <section><h2>Why I built it</h2><p>{p.problem}</p></section>}
      {p.approach && <section><h2>Approach</h2><p>{p.approach}</p></section>}
      {p.topics && <section><h2>What it contains</h2><ul className="chips">{p.topics.map(t => <li key={t}>{t}</li>)}</ul></section>}
      {p.caseStudy?.map(c => (
        <section className="csec" key={c.title}>
          <h2>{c.title}</h2>
          <div>
            {c.state && <Chip s={c.state} />}
            {c.body && <p>{c.body}</p>}
            {c.image ? <img className="shot" src={c.image} alt={c.diagram ?? c.title} /> : c.diagram && <div className="ph">{c.diagram} to be added</div>}
          </div>
        </section>
      ))}
      {p.caseStudy && <section><h2>Current state</h2><StatusBlock p={p} /></section>}
      {p.whatILearned.length > 0 && <section><h2>What I learned</h2><ul>{p.whatILearned.map(i => <li key={i}>{i}</li>)}</ul></section>}
      {p.technologies.length > 0 && <section><h2>Technologies</h2><p>{p.technologies.join(", ")}</p></section>}
      {p.screenshots.map(x => <img key={x.src} src={x.src} alt={x.alt} className="shot" />)}
    </article>
  );
}
