import type { Metadata } from "next";
import { HandHeart, Megaphone, Users } from "lucide-react";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { Accent, Button, Reveal } from "@/components/ui";

export const metadata: Metadata = {
  title: "Support us",
  description: "Support the International Human Rights Society — donate, volunteer, partner with us or share our work.",
};

const options = [
  {
    Icon: HandHeart,
    title: "Make a donation",
    text: "Your gift funds awareness campaigns, events, printed materials and student support.",
  },
  {
    Icon: Users,
    title: "Partner with us",
    text: "Societies, legal professionals and organisations can collaborate on events, talks and research.",
  },
  {
    Icon: Megaphone,
    title: "Amplify our message",
    text: "Share our journal and events across your networks — awareness is where protection begins.",
  },
];

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Support us"
        title={
          <>
            Help turn principles into <Accent>protection</Accent>
          </>
        }
        intro="Every contribution helps IHRS run campaigns, host events and support students who need to know their rights."
      />
      <section className="py-20 md:py-28">
        <div className="container-x grid gap-6 md:grid-cols-3">
          {options.map(({ Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <div className="h-full rounded-3xl bg-white p-8 ring-1 ring-navy-900/8">
                <span className="flex size-14 items-center justify-center rounded-2xl bg-navy-900 text-gold-500">
                  <Icon className="size-6" aria-hidden />
                </span>
                <h2 className="mt-6 text-xl font-extrabold text-navy-900">{title}</h2>
                <p className="mt-2 leading-relaxed text-muted">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="container-x mt-10">
          <div className="grain flex flex-col items-start justify-between gap-8 rounded-[2rem] bg-navy-900 p-8 md:flex-row md:items-center md:p-12">
            <div className="max-w-xl">
              <h2 className="text-2xl font-extrabold text-white md:text-3xl">
                {site.links.donate ? "Ready to give?" : "Want to support IHRS?"}
              </h2>
              <p className="mt-3 text-white/75">
                {site.links.donate
                  ? "Donations are processed securely by our payment partner. Thank you for standing with us."
                  : "Get in touch and we’ll share how you can donate, sponsor an event or partner with us."}
              </p>
            </div>
            {site.links.donate ? (
              <Button href={site.links.donate} external>
                Donate securely
              </Button>
            ) : (
              <Button href="/contact/">Contact the team</Button>
            )}
          </div>
        </Reveal>
      </section>
    </>
  );
}
