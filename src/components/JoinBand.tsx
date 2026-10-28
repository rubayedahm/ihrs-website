import Image from "next/image";
import { site } from "@/lib/site";
import { Accent, Button, Reveal } from "./ui";

export function JoinBand() {
  return (
    <section className="px-4 pb-24 md:pb-32">
      <Reveal className="grain relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-navy-900 px-6 py-16 text-center md:px-16 md:py-20">
        <Image
          src="/brand/mark-white.png"
          alt=""
          width={368}
          height={254}
          className="pointer-events-none absolute -right-10 -bottom-10 w-80 opacity-[0.06]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-white text-balance md:text-5xl">
            Want to be a member of <Accent>IHRS</Accent>?
          </h2>
          <p className="mt-5 text-lg text-white/75">
            Join a community committed to justice, dialogue and human rights. Sign up through the Students’ Union,
            or apply to help lead one of our departments.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button href={site.links.studentUnionJoin} external>
              Become a member
            </Button>
            <Button href={site.links.committeeForm} external variant="ghost-light">
              Apply for the committee
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
