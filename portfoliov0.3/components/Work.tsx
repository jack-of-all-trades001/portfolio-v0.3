import Link from "next/link";
import type { Project, PState } from "@/content/projects";
import { concepts } from "@/content/concepts";
import { proof } from "@/content/proof";
import { milestones } from "@/content/journey";
const cls = (s: string) => s.toLowerCase().replace(/\W+/g, "");
export const Chip = ({ s }: { s: PState | string }) => <span className={`badge s-${cls(s)}`}><i aria-hidden />{s}</span>;
const L = ({ t, items }: { t: string; items: string[] }) => items.length ? <div><h4>{t}</h4><ul>{items.map(i => <li key={i}>{i}</li>)}</ul></div> : null;
export function StatusBlock({ p }: { p: Project }) {
  const s = p.implementationStage;
  return <div className="status3"><L t="Implemented" items={s.implemented} /><L t="Currently building" items={s.building} /><L t="Next" items={s.exploring} /></div>;
}
export function WalletFeature({ p }: { p: Project }) {
  const txt = { implemented: "Implemented", building: "Currently building", planned: "Planned" };
  return (
    <div className="feat">
      <span className="lab" data-reveal>{p.label}</span>
      <h2 data-reveal>{p.title}</h2>
      <p className="lead" data-reveal>{p.shortDescription}</p>
      {p.nodes && <ol className="chain" aria-label="Parts of the wallet and where each stands">{p.nodes.map(n => <li key={n.label} className={`n-${n.state}`}><b>{n.label}</b><span>{txt[n.state]}</span></li>)}</ol>}
      <StatusBlock p={p} />
      <Link className="btn cta1" href={`/projects/${p.slug}`}>Explore Wallet <span aria-hidden>→</span></Link>
    </div>
  );
}
export function Concepts() {
  return <div className="grid3">{concepts.map(c => (
    <article className="concept" key={c.title} data-reveal>
      <Chip s={c.status} /><h3>{c.title}</h3><p>{c.what}</p>
      <p className="meta"><b>Why:</b> {c.why}</p><p className="meta"><b>Explores:</b> {c.explores}</p>
    </article>))}</div>;
}
export function Proof() {
  return <div className="proof">{proof.map(g => (
    <div key={g.group} data-reveal><h3>{g.group}</h3><ul>{g.items.map(i => <li key={i.t}><span>{i.t}</span><Chip s={i.s} /></li>)}</ul></div>))}</div>;
}
export function Milestones() {
  return <ol className="miles">{milestones.map(m => <li key={m.when} data-reveal><span className="when">{m.when}</span><h3>{m.title}</h3><p>{m.text}</p></li>)}</ol>;
}
