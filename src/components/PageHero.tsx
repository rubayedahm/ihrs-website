import Image from "next/image";
import type { ReactNode } from "react";
import { Eyebrow, Reveal } from "./ui";

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: ReactNode; intro?: ReactNode }) {
  return (
    <section className="grain relative overflow-hidden bg-navy-900 pt-36 pb-20 md:pt-44 md:pb-28">
      <Image
        src="/brand/mark-white.png"
        alt=""
        width={368}
        height={254}
        className="pointer-events-none absolute -right-16 bottom-0 w-[28rem] max-w-[70vw] opacity-[0.05]"
        aria-hidden
      />
      <div className="container-x relative">
        <Reveal className="max-w-3xl">
          <Eyebrow light>{eyebrow}</Eyebrow>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-balance text-white md:text-6xl md:leading-[1.05]">
            {title}
          </h1>
          {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-white/75">{intro}</p>}
        </Reveal>
      </div>
    </section>
  );
}
