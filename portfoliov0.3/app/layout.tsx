import type { Metadata } from "next";
import { site } from "@/content/site";
import "./globals.css";
const description = site.intro;
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name}: Java & backend engineer`, template: `%s | ${site.name}` },
  description,
  openGraph: { title: site.name, description, type: "website" },
  twitter: { card: "summary", title: site.name, description },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
