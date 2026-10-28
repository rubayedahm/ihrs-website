import type { Metadata } from "next";
import { getJournal } from "@/lib/content";
import { PageHero } from "@/components/PageHero";
import { Accent, Reveal } from "@/components/ui";
import { JournalCard } from "@/components/cards";

export const metadata: Metadata = {
  title: "Journal",
  description: "Research, ideas and critical perspectives on human rights law and everyday life from IHRS members.",
};

export default function JournalPage() {
  const [featured, ...rest] = getJournal();
  return (
    <>
      <PageHero
        eyebrow="Journal"
        title={
          <>
            Research, ideas & <Accent>critical</Accent> perspectives
          </>
        }
        intro="A space for research, ideas, and critical perspectives on human rights and lives."
      />
      <section className="py-20 md:py-28">
        <div className="container-x space-y-6">
          {featured && (
            <Reveal>
              <JournalCard post={featured} large />
            </Reveal>
          )}
          <div className="grid gap-6 md:grid-cols-2">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.08}>
                <JournalCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
