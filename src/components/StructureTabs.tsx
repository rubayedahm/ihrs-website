"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check } from "lucide-react";

type Item = { key: string; title: string; summary: string; body: string[]; points: string[] };

export function StructureTabs({ items }: { items: Item[] }) {
  const [active, setActive] = useState(items[1]?.key ?? items[0].key);
  const id = useId();
  const current = items.find((i) => i.key === active)!;

  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <div role="tablist" aria-label="IHRS structure" className="flex gap-2 overflow-x-auto lg:col-span-4 lg:flex-col">
        {items.map((item) => {
          const selected = item.key === active;
          return (
            <button
              key={item.key}
              role="tab"
              id={`${id}-tab-${item.key}`}
              aria-selected={selected}
              aria-controls={`${id}-panel`}
              onClick={() => setActive(item.key)}
              className={`shrink-0 rounded-2xl px-5 py-4 text-left transition lg:px-6 lg:py-5 ${
                selected ? "bg-navy-900 text-white shadow-lg" : "bg-white text-navy-900 hover:bg-white/70"
              }`}
            >
              <span className="block font-bold">{item.title}</span>
              <span className={`mt-1 hidden text-sm lg:block ${selected ? "text-white/70" : "text-muted"}`}>
                {item.summary}
              </span>
            </button>
          );
        })}
      </div>
      <div
        role="tabpanel"
        id={`${id}-panel`}
        aria-labelledby={`${id}-tab-${active}`}
        className="rounded-3xl bg-white p-8 ring-1 ring-navy-900/8 md:p-10 lg:col-span-8"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <h3 className="text-2xl font-extrabold text-navy-900">{current.title}</h3>
            {current.body.map((p, i) => (
              <p key={i} className="mt-4 leading-relaxed text-muted">
                {p}
              </p>
            ))}
            {current.points.length > 0 && (
              <ul className="mt-6 space-y-3">
                {current.points.map((pt) => (
                  <li key={pt} className="flex gap-3">
                    <Check className="mt-0.5 size-5 shrink-0 text-gold-600" aria-hidden />
                    <span className="text-ink">{pt}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
