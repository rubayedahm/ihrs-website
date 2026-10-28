import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { nav, site } from "@/lib/site";
import { SocialIcon, type SocialKey } from "./SocialIcon";

export function Footer() {
  const socials = (Object.entries(site.social) as [SocialKey, string][]).filter(([, url]) => url);
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white/75">
      <div className="container-x grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Link href="/" className="inline-flex items-center gap-3 text-white">
            <Image src="/brand/mark-white.png" alt="" width={58} height={40} className="h-10 w-auto" />
            <span className="text-lg font-extrabold tracking-[0.14em]">IHRS</span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            A student-led society advancing human rights through legal awareness, critical discussion and real
            accountability — from campus concerns to broader questions of justice.
          </p>
          {socials.length > 0 && (
            <ul className="mt-6 flex gap-2">
              {socials.map(([key, url]) => (
                <li key={key}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={key}
                    className="inline-flex size-10 items-center justify-center rounded-full bg-white/5 text-white transition hover:bg-gold-500 hover:text-navy-900"
                  >
                    <SocialIcon name={key} />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="md:col-span-3">
          <h2 className="text-sm font-bold uppercase tracking-widest text-white">Explore</h2>
          <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-sm md:grid-cols-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-gold-500">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/donate/" className="transition hover:text-gold-500">
                Support us
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h2 className="text-sm font-bold uppercase tracking-widest text-white">Get in touch</h2>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold-500" aria-hidden />
              {site.location}
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-gold-500" aria-hidden />
              <a href={`mailto:${site.email}`} className="hover:text-gold-500">
                {site.email}
              </a>
            </li>
            {site.phone && (
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-gold-500" aria-hidden />
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-gold-500">
                  {site.phone}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-3 py-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
            {site.charityNumber && ` Registered charity no. ${site.charityNumber} (England & Wales).`}
          </p>
          <ul className="flex gap-5">
            <li>
              <Link href="/privacy/" className="hover:text-white">
                Privacy &amp; cookies
              </Link>
            </li>
            <li>
              <Link href="/contact/" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
