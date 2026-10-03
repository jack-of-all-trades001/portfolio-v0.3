import Link from "next/link";
import { site } from "@/content/site";
import { projects } from "@/content/projects";
import { nav, closing } from "@/content/journey";
import ProjectCard from "@/components/ProjectCard";
import { WalletFeature, Concepts, Proof, Milestones } from "@/components/Work";
import ScrollFx from "@/components/ScrollFx";
const ok = (v: string) => v !== "PLACEHOLDER";
const flow: [string, string][] = [["Request", "a client asks"], ["API", "contracts, auth"], ["Domain", "rules"], ["Database", "integrity"], ["Response", "including failures"]];
export default function Home() {
  const wallet = projects.find(p => p.tier === "featured")!;
  const rest = projects.filter(p => p.tier !== "featured");
  const links = [ok(site.github) && ["GitHub", site.github], ok(site.linkedin) && ["LinkedIn", site.linkedin], ok(site.email) && ["Email", `mailto:${site.email}`], ["Resume", site.resumeUrl]].filter(Boolean) as [string, string][];
  const a = site.about;
  return (
    <>
      <ScrollFx />
      <a className="skip" href="#main">Skip to content</a>
      <header className="bar"><div className="w nav">
        <Link href="/" className="brand">{site.name}</Link>
        <nav aria-label="Primary">{nav.map(n => <a key={n.href} href={n.href}>{n.label}</a>)}</nav>
      </div></header>
      <main id="main">
        <section className="w hero" aria-label="Introduction">
          <h1>{site.headline}</h1>
          <p className="lead">{site.intro}</p>
          <p className="cta"><Link className="btn solid" href={`/projects/${wallet.slug}`}>Explore Wallet <span aria-hidden>→</span></Link>
            {ok(site.github) && <a href={site.github}>GitHub</a>}<a href={site.resumeUrl}>Resume</a></p>
          <ol className="flow" aria-label="A request moving through a backend system">
            {flow.map(([t, d], i) => <li key={t} style={{ "--i": i } as React.CSSProperties}><b>{t}</b><span>{d}</span></li>)}
          </ol>
        </section>

        <section id="work" className="dark pad"><div className="w"><WalletFeature p={wallet} /></div></section>

        <section className="w pad">
          <div className="grid2">{rest.map(p => <ProjectCard key={p.slug} p={p} big={p.tier === "selected"} />)}</div>
          <h3 className="sub" data-reveal>Concepts &amp; ideas</h3>
          <p className="meta" data-reveal>Not built. Ideas and designs I&apos;m exploring.</p>
          <Concepts />
        </section>

        <section className="w pad" id="proof">
          <h2 data-reveal>Engineering proof</h2>
          <p className="meta" data-reveal>What exists in the Digital Wallet code today, and what does not yet.</p>
          <Proof />
        </section>

        <section className="w pad" id="journey"><h2 data-reveal>Journey</h2><Milestones /></section>

        <section className="w pad quiet" id="about">
          <h2 data-reveal>About</h2>
          <dl className="about" data-reveal>
            <div><dt>Role</dt><dd>{a.role}</dd></div>
            <div><dt>Education</dt><dd>{a.education}</dd></div>
            <div><dt>Core stack</dt><dd>{a.stack.join(", ")}</dd></div>
            <div><dt>Current focus</dt><dd>{a.focus.join(", ")}</dd></div>
          </dl>
        </section>
      </main>
      <footer className="dark pad end" id="contact">
        <div className="w">
          <h2 className="big2">{closing}</h2>
          <p className="cta">{links.map(([l, h]) => <a key={l} href={h} className={l === "Resume" ? "btn" : ""}>{l}</a>)}
            {!ok(site.email) && <span className="meta">Add email in content/site.ts</span>}{!ok(site.linkedin) && <span className="meta">Add LinkedIn in content/site.ts</span>}</p>
        </div>
      </footer>
    </>
  );
}
