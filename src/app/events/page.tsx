import type { Metadata } from "next";
import { getEvents } from "@/lib/content";
import { PageHero } from "@/components/PageHero";
import { Accent, Reveal } from "@/components/ui";
import { EventCard } from "@/components/cards";
import { JoinBand } from "@/components/JoinBand";

export const metadata: Metadata = {
  title: "Events",
  description: "Campaigns, recruitment drives and community events run by the International Human Rights Society.",
};

export default function EventsPage() {
  const events = getEvents();
  const byYear = Object.entries(
    events.reduce<Record<string, typeof events>>((acc, e) => {
      const y = e.date.slice(0, 4);
      (acc[y] ??= []).push(e);
      return acc;
    }, {}),
  ).sort(([a], [b]) => b.localeCompare(a));

  return (
    <>
      <PageHero
        eyebrow="Events & campaigns"
        title={
          <>
            Where awareness becomes <Accent>action</Accent>
          </>
        }
        intro="Seminars, awareness drives, cultural celebrations and recruitment — the initiatives we run to address crucial social challenges on campus and beyond."
      />

      <section className="py-24 md:py-28">
        <div className="container-x space-y-20">
          {byYear.map(([year, list]) => (
            <div key={year}>
              <Reveal className="flex items-center gap-6">
                <h2 className="text-4xl font-extrabold text-navy-900">{year}</h2>
                <span className="h-px flex-1 bg-navy-900/10" aria-hidden />
                <span className="text-sm font-semibold text-muted">
                  {list.length} {list.length === 1 ? "event" : "events"}
                </span>
              </Reveal>
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((e, i) => (
                  <Reveal key={e.slug} delay={(i % 3) * 0.08}>
                    <EventCard event={e} />
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <JoinBand />
    </>
  );
}
