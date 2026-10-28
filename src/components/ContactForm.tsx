"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { site } from "@/lib/site";

const topics = ["General enquiry", "Membership", "Committee roles", "Events & collaboration", "Student support", "Media & press", "Supporting IHRS"];

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "mt-2 block w-full rounded-xl border-0 bg-navy-50 px-4 py-3.5 text-ink ring-1 ring-navy-900/10 transition placeholder:text-muted/60 focus:bg-white focus:ring-2 focus:ring-navy-700 focus:outline-none";
const label = "text-sm font-semibold text-navy-900";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("company")) return; // honeypot: bots fill hidden fields

    if (!site.formEndpoint) {
      // No form service configured yet — hand off to the visitor's email app.
      const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone") || "-"}\n\n${data.get("message")}`;
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        `[${data.get("topic")}] Website enquiry`,
      )}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(site.formEndpoint, { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="flex flex-col items-center rounded-2xl bg-navy-50 p-10 text-center">
        <CheckCircle2 className="size-12 text-gold-600" aria-hidden />
        <h3 className="mt-4 text-xl font-bold text-navy-900">Thank you — message sent</h3>
        <p className="mt-2 text-muted">A member of the team will get back to you soon.</p>
        <button type="button" onClick={() => setStatus("idle")} className="mt-6 text-sm font-bold text-navy-700 underline">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="name" className={label}>Full name</label>
        <input id="name" name="name" required autoComplete="name" className={field} />
      </div>
      <div>
        <label htmlFor="email" className={label}>Email address</label>
        <input id="email" name="email" type="email" required autoComplete="email" className={field} />
      </div>
      <div>
        <label htmlFor="phone" className={label}>
          Phone <span className="font-normal text-muted">(optional)</span>
        </label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" className={field} />
      </div>
      <div>
        <label htmlFor="topic" className={label}>Topic</label>
        <select id="topic" name="topic" className={field} defaultValue={topics[0]}>
          {topics.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className={label}>Message</label>
        <textarea id="message" name="message" required rows={6} className={field} />
      </div>
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <div className="flex items-start gap-3 sm:col-span-2">
        <input id="consent" name="consent" type="checkbox" required className="mt-1 size-4 accent-navy-900" />
        <label htmlFor="consent" className="text-sm text-muted">
          I agree to IHRS using these details to respond to my enquiry, as set out in the{" "}
          <Link href="/privacy/" className="font-semibold text-navy-700 underline">privacy notice</Link>.
        </label>
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy-900 px-8 py-4 font-bold text-white transition hover:bg-navy-800 disabled:opacity-60 sm:w-auto"
        >
          {status === "sending" ? <Loader2 className="size-4 animate-spin" aria-hidden /> : <Send className="size-4" aria-hidden />}
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        {status === "error" && (
          <p role="alert" className="mt-4 text-sm font-semibold text-red-700">
            Sorry, something went wrong. Please try again or email us at {site.email}.
          </p>
        )}
      </div>
    </form>
  );
}
