"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isActive = (href: string) => pathname?.startsWith(href.replace(/\/$/, ""));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy-900/90 shadow-lg shadow-navy-950/20 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-18 items-center justify-between gap-6 py-3">
        <Link href="/" className="flex items-center gap-3 text-white" aria-label={`${site.name} — home`}>
          <Image src="/brand/mark-white.png" alt="" width={46} height={32} priority className="h-8 w-auto" />
          <span className="leading-none">
            <span className="block text-[0.95rem] font-extrabold tracking-[0.14em]">IHRS</span>
            <span className="hidden text-[0.68rem] font-medium tracking-wide text-white/70 sm:block">
              International Human Rights Society
            </span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href) ? "text-gold-500" : "text-white/85 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/membership/"
            className="hidden items-center gap-1.5 rounded-full bg-gold-500 px-5 py-2.5 text-sm font-bold text-navy-900 transition hover:bg-gold-400 sm:inline-flex"
          >
            Join IHRS <ArrowUpRight className="size-4" aria-hidden />
          </Link>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full text-white hover:bg-white/10 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-18 bottom-0 overflow-y-auto bg-navy-900 lg:hidden"
          >
            <nav aria-label="Mobile" className="container-x flex flex-col gap-1 py-6">
              <Link href="/" className="rounded-xl px-4 py-3 text-lg font-semibold text-white hover:bg-white/5">
                Home
              </Link>
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`rounded-xl px-4 py-3 text-lg font-semibold hover:bg-white/5 ${
                    isActive(item.href) ? "text-gold-500" : "text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/donate/"
                className="rounded-xl px-4 py-3 text-lg font-semibold text-white hover:bg-white/5"
              >
                Support us
              </Link>
              <Link
                href="/membership/"
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 font-bold text-navy-900"
              >
                Join IHRS <ArrowUpRight className="size-5" aria-hidden />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
