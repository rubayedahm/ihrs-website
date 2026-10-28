import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import type { EventItem, JournalMeta, Person } from "@/content/data";
import { journalImages } from "@/content/data";
import { formatDate } from "@/lib/format";

export function EventCard({ event, priority = false }: { event: EventItem; priority?: boolean }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-navy-900/8 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/10">
      <div className="relative aspect-square overflow-hidden bg-navy-100">
        <Image
          src={event.image}
          alt=""
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 rounded-2xl bg-white/95 px-3 py-2 text-center leading-none shadow-sm backdrop-blur">
          <span className="block text-xl font-extrabold text-navy-900">{new Date(event.date).getUTCDate()}</span>
          <span className="mt-1 block text-[0.65rem] font-bold uppercase tracking-wider text-gold-600">
            {new Date(event.date).toLocaleString("en-GB", { month: "short", timeZone: "UTC" })}
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-medium text-muted">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="size-3.5" aria-hidden />
            <time dateTime={event.date}>{formatDate(event.date)}</time>
          </span>
          {event.campus && (
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-3.5" aria-hidden />
              {event.campus}
            </span>
          )}
        </div>
        <h3 className="mt-3 text-lg font-bold leading-snug text-navy-900">{event.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{event.summary}</p>
      </div>
    </article>
  );
}

export function JournalCard({ post, large = false }: { post: JournalMeta; large?: boolean }) {
  const img = journalImages[post.slug];
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-navy-900/8 transition hover:shadow-xl hover:shadow-navy-900/10 ${
        large ? "md:flex-row" : ""
      }`}
    >
      <div className={`relative overflow-hidden bg-navy-900 ${large ? "aspect-[16/10] md:aspect-auto md:w-1/2" : "aspect-[16/9]"}`}>
        {img ? (
          <Image
            src={img}
            alt=""
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="grain absolute inset-0 flex items-center justify-center">
            <Image src="/brand/mark-white.png" alt="" width={368} height={254} className="w-1/3 opacity-25" />
          </div>
        )}
      </div>
      <div className={`flex flex-1 flex-col p-6 md:p-8 ${large ? "md:justify-center" : ""}`}>
        <p className="text-xs font-bold uppercase tracking-widest text-gold-600">
          Journal · <time dateTime={post.date}>{formatDate(post.date)}</time>
        </p>
        <h3 className={`mt-3 font-bold leading-snug text-navy-900 ${large ? "text-2xl md:text-3xl" : "text-xl"}`}>
          <Link href={`/journal/${post.slug}/`} className="after:absolute after:inset-0">
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">{post.excerpt}</p>
        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-navy-900">
          Read article
          <ArrowUpRight className="size-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
        </span>
      </div>
    </article>
  );
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function PersonCard({ person }: { person: Person }) {
  return (
    <div className="group flex flex-col items-center rounded-3xl bg-white p-6 text-center ring-1 ring-navy-900/8 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-navy-900/10">
      {person.photo ? (
        <Image src={person.photo} alt="" width={112} height={112} className="size-24 rounded-full object-cover" />
      ) : (
        <div
          className={`flex size-24 items-center justify-center rounded-full text-2xl font-extrabold ${
            person.vacant
              ? "border-2 border-dashed border-navy-900/25 text-navy-900/40"
              : "bg-navy-900 text-gold-500 transition group-hover:bg-navy-800"
          }`}
          aria-hidden
        >
          {person.vacant ? "+" : initials(person.name)}
        </div>
      )}
      <h3 className={`mt-5 font-bold ${person.vacant ? "text-muted" : "text-navy-900"}`}>{person.name}</h3>
      <p className="mt-1 text-sm text-muted">{person.role}</p>
    </div>
  );
}
