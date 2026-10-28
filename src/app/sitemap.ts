import type { MetadataRoute } from "next";
import { getJournal } from "@/lib/content";
import { nav, site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", ...nav.map((n) => n.href), "/donate/", "/privacy/"].map((p) => ({ url: `${site.url}${p}` }));
  const posts = getJournal().map((p) => ({ url: `${site.url}/journal/${p.slug}/`, lastModified: p.date }));
  return [...pages, ...posts];
}
