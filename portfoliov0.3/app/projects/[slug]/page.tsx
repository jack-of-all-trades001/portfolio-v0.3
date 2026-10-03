import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/content/projects";
import ProjectDetail from "@/components/ProjectDetail";
export const generateStaticParams = () => projects.map(p => ({ slug: p.slug }));
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = projects.find(x => x.slug === params.slug);
  return p ? { title: p.title, description: p.shortDescription, openGraph: { title: p.title, description: p.shortDescription } } : {};
}
export default function Page({ params }: { params: { slug: string } }) {
  const p = projects.find(x => x.slug === params.slug);
  if (!p) notFound();
  return <main className="w"><p><Link href="/#projects">Back to projects</Link></p><ProjectDetail p={p} /></main>;
}
