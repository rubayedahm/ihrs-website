import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getJournal } from "@/lib/content";
import { formatDate } from "@/lib/format";
import { site } from "@/lib/site";
import { JournalCard } from "@/components/cards";
import { ShareButtons } from "@/components/ShareButtons";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getJournal().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getJournal().find((p) => p.slug === slug);
  if (!post) return {};
  const img = post.image;
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      ...(img && { images: [img] }),
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const journal = getJournal();
  const post = journal.find((p) => p.slug === slug);
  if (!post) notFound();

  // Article bodies are HTML written in the CMS rich-text editor (trusted editors only).
  const { html, image: img } = post;
  const others = journal.filter((p) => p.slug !== slug).slice(0, 2);
  const minutes = Math.max(1, Math.round(html.replace(/<[^>]+>/g, " ").split(/\s+/).length / 220));
  const url = `${site.url}/journal/${slug}/`;

  return (
    <article>
      <header className="grain bg-navy-900 pt-36 pb-16 md:pt-44 md:pb-20">
        <div className="container-x max-w-4xl">
          <Link href="/journal/" className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-gold-500">
            <ArrowLeft className="size-4" aria-hidden /> All articles
          </Link>
          <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-gold-500">
            <time dateTime={post.date}>{formatDate(post.date)}</time> · {minutes} min read
            {post.author && <> · By {post.author}</>}
          </p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-balance text-white md:text-5xl">
            {post.title}
          </h1>
        </div>
      </header>

      {img && (
        <div className="container-x -mb-4 max-w-5xl pt-10">
          <Image src={img} alt="" width={1360} height={760} priority className="w-full rounded-3xl" />
        </div>
      )}

      <div className="container-x max-w-3xl py-14 md:py-20">
        <div
          className="prose prose-lg max-w-none prose-headings:font-extrabold prose-headings:text-navy-900 prose-h2:mt-14 prose-p:leading-relaxed prose-p:text-ink/85 prose-a:text-navy-700 prose-a:decoration-gold-500 prose-a:underline-offset-4 prose-strong:text-navy-900 prose-hr:border-navy-900/10"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <div className="mt-14 flex flex-col gap-4 border-t border-navy-900/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-semibold text-navy-900">Share this article</p>
          <ShareButtons url={url} title={post.title} />
        </div>
      </div>

      {others.length > 0 && (
        <section className="bg-navy-50 py-20">
          <div className="container-x">
            <h2 className="text-2xl font-extrabold text-navy-900">Keep reading</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {others.map((p) => (
                <JournalCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
