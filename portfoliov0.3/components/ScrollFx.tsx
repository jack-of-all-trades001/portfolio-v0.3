"use client";
import { useEffect } from "react";
export default function ScrollFx() {
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach(el => el.getBoundingClientRect().top < innerHeight ? el.classList.add("in") : io.observe(el));
    document.documentElement.classList.add("js");
    const links = [...document.querySelectorAll<HTMLAnchorElement>("nav[aria-label=Primary] a[href^='#']")];
    const so = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) links.forEach(a => a.toggleAttribute("aria-current", a.getAttribute("href") === "#" + e.target.id)); }), { rootMargin: "-45% 0px -50% 0px" });
    links.forEach(a => { const s = document.querySelector(a.getAttribute("href")!); if (s) so.observe(s); });
    return () => { io.disconnect(); so.disconnect(); };
  }, []);
  return null;
}
