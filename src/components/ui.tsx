"use client";

import Link from "next/link";
import { motion, type HTMLMotionProps } from "motion/react";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

/** Fades and lifts its children into view once, as they scroll on screen. */
export function Reveal({ delay = 0, className, children, ...rest }: HTMLMotionProps<"div"> & { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p
      className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] ${
        light ? "text-gold-500" : "text-navy-700"
      }`}
    >
      <span className={`h-px w-8 ${light ? "bg-gold-500" : "bg-gold-600"}`} aria-hidden />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  light = false,
  center = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <Reveal className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2
        className={`mt-4 text-3xl font-extrabold tracking-tight text-balance md:text-[2.75rem] md:leading-[1.1] ${
          light ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 text-lg leading-relaxed text-pretty ${light ? "text-white/75" : "text-muted"}`}>{intro}</p>
      )}
    </Reveal>
  );
}

/** Serif italic accent used inside headings, e.g. <Accent>fearless</Accent>. */
export function Accent({ children }: { children: ReactNode }) {
  return <em className="font-serif font-normal italic text-gold-500">{children}</em>;
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "gold" | "navy" | "ghost-light" | "ghost";
  external?: boolean;
  arrow?: boolean;
};

const variants = {
  gold: "bg-gold-500 text-navy-900 hover:bg-gold-400",
  navy: "bg-navy-900 text-white hover:bg-navy-800",
  "ghost-light": "text-white ring-1 ring-white/30 hover:bg-white/10",
  ghost: "text-navy-900 ring-1 ring-navy-900/20 hover:bg-navy-900/5",
};

export function Button({ href, children, variant = "gold", external, arrow = true }: ButtonProps) {
  const cls = `group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition ${variants[variant]}`;
  const inner = (
    <>
      {children}
      {arrow && <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />}
    </>
  );
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
