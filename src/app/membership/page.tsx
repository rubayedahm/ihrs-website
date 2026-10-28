import type { Metadata } from "next";
import Image from "next/image";
import { departments, structure, waysToHelp } from "@/content/data";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { Accent, Button, Reveal, SectionHeading } from "@/components/ui";
import { Icon } from "@/components/Icon";
import { StructureTabs } from "@/components/StructureTabs";

export const metadata: Metadata = {
  title: "Membership",
  description: "Join IHRS — become a member through the Students’ Union or apply to join one of our committee departments.",
};

export default function MembershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Membership"
        title={
          <>
            Join a community committed to <Accent>justice</Accent>
          </>
        }
        intro="Dialogue, advocacy and human rights — there is a place for you at IHRS, whatever your background or course."
      />

      {/* Join options */}
      <section className="relative -mt-12 pb-8">
        <div className="container-x grid gap-5 md:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col rounded-3xl bg-white p-8 shadow-xl shadow-navy-900/10 ring-1 ring-navy-900/8 md:p-10">
              <span className="flex size-14 items-center justify-center rounded-2xl bg-gold-500 text-navy-900">
                <Icon name="UserPlus" className="size-6" />
              </span>
              <h2 className="mt-6 text-2xl font-extrabold text-navy-900">Become a member</h2>
              <p className="mt-3 flex-1 leading-relaxed text-muted">
                Sign up through the Students’ Union to join IHRS, get updates and take part in our events, campaigns
                and discussions.
              </p>
              <div className="mt-8">
                <Button href={site.links.studentUnionJoin} external>
                  Join via the Students’ Union
                </Button>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="flex h-full flex-col rounded-3xl bg-navy-900 p-8 text-white shadow-xl shadow-navy-900/20 md:p-10">
              <span className="flex size-14 items-center justify-center rounded-2xl bg-white/10 text-gold-500">
                <Icon name="Users" className="size-6" />
              </span>
              <h2 className="mt-6 text-2xl font-extrabold">Join the committee</h2>
              <p className="mt-3 flex-1 leading-relaxed text-white/75">
                Want to lead? Apply for a role in one of our five departments and help shape the future of IHRS.
              </p>
              <div className="mt-8">
                <Button href={site.links.committeeForm} external>
                  Apply for committee membership
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Ways to help */}
      <section className="py-24 md:py-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="How to help us"
              title={
                <>
                  Every voice <Accent>strengthens</Accent> the cause
                </>
              }
            />
            <ul className="mt-10 space-y-6">
              {waysToHelp.map((w, i) => (
                <Reveal key={w.title} delay={i * 0.08}>
                  <li className="flex gap-5">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-navy-100 text-navy-900">
                      <Icon name={w.icon} className="size-5" />
                    </span>
                    <div>
                      <h3 className="font-bold text-navy-900">{w.title}</h3>
                      <p className="mt-1 leading-relaxed text-muted">{w.text}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal delay={0.1} className="grid grid-cols-2 gap-4">
            <Image
              src="/images/events/recruitment-greenwich.jpg"
              alt="IHRS recruitment stall at Greenwich campus"
              width={590}
              height={590}
              className="aspect-[3/4] w-full rounded-3xl object-cover"
            />
            <Image
              src="/images/events/recruitment-day-2.jpg"
              alt="Students signing up on day two of IHRS recruitment"
              width={590}
              height={590}
              className="mt-12 aspect-[3/4] w-full rounded-3xl object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Structure */}
      <section className="bg-navy-50 py-24 md:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our structure"
            title={
              <>
                Understanding the <Accent>structure</Accent> of IHRS
              </>
            }
            intro="One Executive Committee, campus-based General Committees and a Founding Members Committee that guards our legacy."
          />
          <div className="mt-12">
            <StructureTabs items={structure} />
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-24 md:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Departments of the EC"
            title={
              <>
                Five teams, <Accent>one</Accent> mission
              </>
            }
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((d, i) => (
              <Reveal key={d.title} delay={(i % 3) * 0.08}>
                <div className="group h-full rounded-3xl bg-white p-7 ring-1 ring-navy-900/8 transition hover:bg-navy-900">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-gold-100 text-navy-900 transition group-hover:bg-gold-500">
                    <Icon name={d.icon} className="size-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-navy-900 transition group-hover:text-white">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted transition group-hover:text-white/75">{d.text}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.16}>
              <div className="flex h-full flex-col justify-center rounded-3xl bg-gold-500 p-7">
                <h3 className="text-lg font-extrabold text-navy-900">Find your department</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-900/80">
                  Tell us where your skills fit and we’ll be in touch.
                </p>
                <div className="mt-5">
                  <Button href={site.links.committeeForm} external variant="navy">
                    Apply now
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
