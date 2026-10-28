import type { Metadata } from "next";
import Image from "next/image";
import { values } from "@/content/data";
import { getStory, getTeam } from "@/lib/content";
import { PageHero } from "@/components/PageHero";
import { Accent, Reveal, SectionHeading } from "@/components/ui";
import { PersonCard } from "@/components/cards";
import { JoinBand } from "@/components/JoinBand";

export const metadata: Metadata = {
  title: "About us",
  description:
    "How six students from different backgrounds founded the International Human Rights Society — and the people leading it today.",
};

export default function AboutPage() {
  const story = getStory();
  const leadership = getTeam();
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={
          <>
            Turning awareness into <Accent>impact</Accent>
          </>
        }
        intro="Advancing human rights through advocacy, legal awareness, and meaningful dialogue within diverse student and global communities."
      />

      <section className="py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal className="lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-[2rem] shadow-xl shadow-navy-900/15">
                <Image
                  src="/images/team-banner.jpg"
                  alt="IHRS members at a society event"
                  width={960}
                  height={540}
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Welcome to IHRS" title={story.heading} />
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted">
              {story.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <p className={i === 0 ? "text-xl font-medium text-navy-900" : ""}>{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy-900 py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            light
            eyebrow="What we stand for"
            title={
              <>
                Our mission & <Accent>values</Accent>
              </>
            }
            intro="To advance human rights through knowledge, action and fearless legal advocacy — so that every student and community we reach knows their rights and can use them."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="h-full rounded-3xl bg-white/5 p-7 ring-1 ring-white/10">
                  <span className="font-serif text-4xl text-gold-500">0{i + 1}</span>
                  <h3 className="mt-4 text-lg font-bold text-white">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="Leadership"
            title={
              <>
                Meet our <Accent>leadership</Accent>
              </>
            }
            intro="The Executive Committee guiding IHRS across our campuses."
          />
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {leadership.map((p, i) => (
              <Reveal key={p.name + p.role} delay={(i % 5) * 0.05}>
                <PersonCard person={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <JoinBand />
    </>
  );
}
