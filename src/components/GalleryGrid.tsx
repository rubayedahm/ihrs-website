"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type Img = { src: string; alt: string };

export function GalleryGrid({ images }: { images: Img[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (d: number) => setIndex((i) => (i === null ? i : (i + d + images.length) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, close, step]);

  return (
    <>
      <ul className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>li]:mb-4">
        {images.map((img, i) => (
          <li key={img.src} className="break-inside-avoid">
            <button
              type="button"
              onClick={() => setIndex(i)}
              className="group relative block w-full overflow-hidden rounded-2xl bg-navy-100"
              aria-label={`Open photo: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={800}
                height={800}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="h-auto w-full transition duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/80 to-transparent p-4 pt-12 text-left text-sm font-semibold text-white opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
                {img.alt}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {index !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={images[index].alt}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-950/95 p-4 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.figure
              key={index}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative max-h-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[index].src}
                alt={images[index].alt}
                width={1400}
                height={1400}
                className="max-h-[80vh] w-auto rounded-xl object-contain"
              />
              <figcaption className="mt-4 text-center text-sm text-white/80">{images[index].alt}</figcaption>
            </motion.figure>
            <button
              type="button"
              onClick={close}
              className="absolute right-4 top-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
              aria-label="Close"
              autoFocus
            >
              <X className="size-5" />
            </button>
            <button
              type="button"
              onClick={(e) => (e.stopPropagation(), step(-1))}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 md:left-6"
              aria-label="Previous photo"
            >
              <ChevronLeft className="size-6" />
            </button>
            <button
              type="button"
              onClick={(e) => (e.stopPropagation(), step(1))}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 md:right-6"
              aria-label="Next photo"
            >
              <ChevronRight className="size-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
