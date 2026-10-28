"use client";

import { useState } from "react";
import { Check, Link2 } from "lucide-react";
import { FaLinkedinIn, FaWhatsapp, FaXTwitter } from "react-icons/fa6";

export function ShareButtons({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);
  const links = [
    { label: "Share on LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`, Icon: FaLinkedinIn },
    { label: "Share on X", href: `https://twitter.com/intent/tweet?url=${u}&text=${t}`, Icon: FaXTwitter },
    { label: "Share on WhatsApp", href: `https://wa.me/?text=${t}%20${u}`, Icon: FaWhatsapp },
  ];
  const cls =
    "inline-flex size-10 items-center justify-center rounded-full bg-navy-900 text-white transition hover:bg-gold-500 hover:text-navy-900";

  return (
    <div className="flex gap-2">
      {links.map(({ label, href, Icon }) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={cls}>
          <Icon className="size-4" aria-hidden />
        </a>
      ))}
      <button
        type="button"
        className={cls}
        aria-label={copied ? "Link copied" : "Copy link"}
        onClick={async () => {
          await navigator.clipboard.writeText(url);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }}
      >
        {copied ? <Check className="size-4" aria-hidden /> : <Link2 className="size-4" aria-hidden />}
      </button>
    </div>
  );
}
