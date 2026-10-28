/**
 * Reads the CMS-managed content in /content at build time.
 * Edit it through Pages CMS (see .pages.yml) or directly in the files.
 */
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const root = path.join(process.cwd(), "content");

const readJson = <T>(file: string): T => JSON.parse(fs.readFileSync(path.join(root, file), "utf8"));

const listFiles = (dir: string, ext: string) =>
  fs
    .readdirSync(path.join(root, dir))
    .filter((f) => f.endsWith(ext))
    .map((f) => ({ slug: f.slice(0, -ext.length), file: path.join(dir, f) }));

// Dates may be saved as "2026-01-28" or a full timestamp; keep the day only.
const toDay = (d: unknown) => (d instanceof Date ? d.toISOString() : String(d ?? "")).slice(0, 10);

export type EventItem = {
  slug: string;
  title: string;
  date: string;
  campus?: string;
  image: string;
  summary: string;
};

export function getEvents(): EventItem[] {
  return listFiles("events", ".json")
    .map(({ slug, file }) => {
      const e = readJson<Omit<EventItem, "slug">>(file);
      return { ...e, slug, date: toDay(e.date), campus: e.campus || undefined };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export type JournalMeta = { slug: string; title: string; date: string; excerpt: string; author?: string; image?: string };
export type JournalPost = JournalMeta & { html: string };

function readPost(slug: string, file: string): JournalPost {
  const { data, content } = matter(fs.readFileSync(path.join(root, file), "utf8"));
  // Root-relative links/images inside the body need the base path (e.g. GitHub Pages sub-folder).
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const html = content.trim().replace(/(src|href)="\/(?!\/)/g, `$1="${base}/`);
  const text = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  return {
    slug,
    title: data.title ?? slug,
    date: toDay(data.date),
    author: data.author || undefined,
    image: data.image || undefined,
    excerpt: data.excerpt || (text.length > 220 ? text.slice(0, 220).trimEnd() + "…" : text),
    html,
  };
}

export function getJournal(): JournalPost[] {
  return listFiles("journal", ".md")
    .map(({ slug, file }) => readPost(slug, file))
    .sort((a, b) => b.date.localeCompare(a.date));
}

export type Person = { name: string; role: string; photo?: string; vacant?: boolean };

export function getTeam(): Person[] {
  return readJson<{ members: Person[] }>("team.json").members.map((p) => ({ ...p, photo: p.photo || undefined }));
}

export function getStory(): { heading: string; paragraphs: string[] } {
  return readJson("about.json");
}

export function getGallery(): { src: string; alt: string }[] {
  const extra = readJson<{ photos: { image: string; caption?: string }[] }>("gallery.json").photos;
  return [
    ...extra.map((p) => ({ src: p.image, alt: p.caption || "IHRS event photo" })),
    ...getEvents().map((e) => ({ src: e.image, alt: e.title })),
  ];
}
