"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useRef } from "react";

/** Counts up from 0 to `to` the first time it scrolls into view. */
export function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const node = ref.current;
    const controls = animate(0, to, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => (node.textContent = Math.round(v).toString()),
    });
    return () => controls.stop();
  }, [inView, to]);

  return <span ref={ref}>{to}</span>;
}
