import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Quote } from "lucide-react";
import { pillars, departments, structure } from "@/content/data";
import { getEvents, getGallery, getJournal, getStory } from "@/lib/content";
import { Accent, Button, Eyebrow, Reveal, SectionHeading } from "@/components/ui";
import { EventCard, JournalCard } from "@/components/cards";
import { Icon } from "@/components/Icon";
import { Counter } from "@/components/Counter";
import { JoinBand } from "@/components/JoinBand";

const marqueeWords = ["Equality", "Justice", "Accountability", "Legal awareness", "Dialogue", "Student empowerment", "Dignity", "Solidarity"];

export default function Home() {
  const events = getEvents();
  const journal = getJournal();
  const gallery = getGallery();
  const story = getStory();
  const facts = [
    { value: 6, label: "Founders from different backgrounds, faiths and perspectives" },
    { value: structure[2].points.length, label: "Campus-based General Committees in London" },
    { value: departments.length, label: "Departments driving our day-to-day work" },
    { value: events.length, suffix: "+", label: "Campaigns & events since June 2025" },
  ];

  return (
    <>
      {/* HERO */}
      <section className="grain relative overflow-hidden bg-navy-900 pt-32 pb-20 md:pt-40 md:pb-28">
        <Image
          src="/brand/mark-white.png"
          alt=""
          width={368}
          height={254}
          priority
          className="pointer-events-none absolute -left-24 top-24 w-[34rem] max-w-[90vw] opacity-[0.04]"
          aria-hidden
        />
        <div className="container-x relative grid items-center gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <Eyebrow light>International Human Rights Society · London</Eyebrow>
            <h1 className="mt-6 text-[2.6rem] font-extrabold leading-[1.05] tracking-tight text-balance text-white sm:text-6xl xl:text-7xl">
              Advancing human rights through <Accent>knowledge, action</Accent> and fearless legal advocacy
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/75">
              Bring the change you deserve. We are a student-led society turning awareness into impact — and
              principles into real protection for those who need it.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/membership/">Become a member</Button>
              <Button href="/about/" variant="ghost-light" arrow={false}>
                Our story
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="relative lg:col-span-6">
            <div className="relative overflow-hidden rounded-[2rem] ring-1 ring-white/15 shadow-2xl shadow-navy-950/50">
              <Image
                src="/images/team-banner.jpg"
                alt="IHRS members smiling together at a society event"
                width={960}
                height={540}
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent" aria-hidden />
            </div>
            <div className="absolute -bottom-6 left-4 right-4 flex items-center gap-4 rounded-2xl bg-white p-4 shadow-xl sm:left-auto sm:-left-6 sm:right-auto sm:max-w-xs">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gold-100 text-navy-900">
                <Icon name="Scale" className="size-6" />
              </span>
              <p className="text-sm font-semibold leading-snug text-navy-900">
                “Rights only matter when they are actively protected.”
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden border-y border-navy-900/10 bg-gold-500 py-4" aria-hidden>
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
          {[...marqueeWords, ...marqueeWords].map((w, i) => (
            <span key={i} className="flex items-center gap-10 text-lg font-extrabold uppercase tracking-wider text-navy-900">
              {w}
              <span className="size-2 rotate-45 bg-navy-900" />
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section className="py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="About us"
              title={
                <>
                  A small beginning, now advancing <Accent>real</Accent> change
                </>
              }
            />
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-muted">{story.paragraphs[0]}</p>
              <p className="mt-4 leading-relaxed text-muted">
                We believe diversity of thought strengthens advocacy — our goal is not to speak for people, but to
                ensure their voices are heard and taken seriously.
              </p>
              <div className="mt-8">
                <Button href="/about/" variant="navy">
                  Read our story
                </Button>
              </div>
            </Reveal>
          </div>
          <div className="grid gap-5 sm:grid-cols-3 lg:col-span-7 lg:grid-cols-1">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="flex h-full flex-col gap-4 rounded-3xl bg-white p-7 ring-1 ring-navy-900/8 lg:flex-row lg:items-start lg:gap-6">
                  <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-navy-900 text-gold-500">
                    <Icon name={p.icon} className="size-6" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-navy-900">{p.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted">{p.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FACTS */}
      <section className="bg-navy-900 py-20">
        <div className="container-x grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((f, i) => (
            <Reveal key={f.label} delay={i * 0.08} className="border-l-2 border-gold-500 pl-6">
              <p className="text-5xl font-extrabold text-white md:text-6xl">
                <Counter to={f.value} />
                {f.suffix}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{f.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* EVENTS */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Events & campaigns"
              title={
                <>
                  What we <Accent>do</Accent>, together
                </>
              }
              intro="From awareness campaigns to cultural celebrations — every event builds a community that knows its rights."
            />
            <Reveal>
              <Button href="/events/" variant="ghost">
                All events
              </Button>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {events.slice(0, 3).map((e, i) => (
              <Reveal key={e.slug} delay={i * 0.08}>
                <EventCard event={e} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="relative overflow-hidden bg-gold-100 py-24">
        <div className="container-x">
          <Reveal className="mx-auto max-w-4xl text-center">
            <Quote className="mx-auto size-10 text-gold-600" aria-hidden />
            <blockquote className="mt-6 font-serif text-3xl leading-snug text-navy-900 text-balance md:text-5xl">
              “Diversity of thought is not a weakness — it is the foundation of stronger, more balanced advocacy.”
            </blockquote>
            <p className="mt-6 text-sm font-bold uppercase tracking-widest text-navy-700">The IHRS founding belief</p>
          </Reveal>
        </div>
      </section>

      {/* JOURNAL */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Journal"
              title={
                <>
                  Research, ideas & <Accent>critical</Accent> perspectives
                </>
              }
              intro="Long-form writing from our members on human rights law, policy and everyday life in the UK and beyond."
            />
            <Reveal>
              <Button href="/journal/" variant="ghost">
                Read the journal
              </Button>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {journal.slice(0, 2).map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.08}>
                <JournalCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section aria-labelledby="moments" className="pb-24 md:pb-32">
        <div className="container-x">
          <div className="flex items-end justify-between gap-6">
            <h2 id="moments" className="text-2xl font-extrabold text-navy-900 md:text-3xl">
              Moments from our community
            </h2>
            <Link href="/gallery/" className="inline-flex items-center gap-1 text-sm font-bold text-navy-900 hover:text-gold-600">
              Gallery <ArrowUpRight className="size-4" aria-hidden />
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-2">
            {gallery.slice(0, 5).map((g, i) => (
              <Reveal
                key={g.src}
                delay={i * 0.05}
                className={`relative overflow-hidden rounded-2xl bg-navy-100 ${
                  i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto" : "aspect-square"
                }`}
              >
                <Image src={g.src} alt={g.alt} fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover transition duration-700 hover:scale-105" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <JoinBand />
    </>
  );
}
