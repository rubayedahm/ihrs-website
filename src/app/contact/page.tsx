import type { Metadata } from "next";
import { Mail, MapPin, Phone, UserPlus } from "lucide-react";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { Accent, Reveal } from "@/components/ui";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the International Human Rights Society — to join, collaborate, support our cause or ask about our work.",
};

export default function ContactPage() {
  const details = [
    { Icon: MapPin, label: "Find us", value: site.location },
    { Icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    ...(site.phone ? [{ Icon: Phone, label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` }] : []),
    { Icon: UserPlus, label: "Membership", value: "Join via the Students’ Union", href: site.links.studentUnionJoin },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let’s hear from <Accent>you</Accent>
          </>
        }
        intro="Get in touch to join hands, support our cause, or ask about our work — together, we can make a difference."
      />
      <section className="py-20 md:py-28">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="rounded-3xl bg-white p-6 ring-1 ring-navy-900/8 sm:p-10">
              <h2 className="text-2xl font-extrabold text-navy-900">Send us a message</h2>
              <p className="mt-2 text-muted">We usually reply within a few working days.</p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="grain h-full rounded-3xl bg-navy-900 p-8 text-white sm:p-10">
              <h2 className="text-2xl font-extrabold">Other ways to reach us</h2>
              <ul className="mt-8 space-y-6">
                {details.map(({ Icon, label, value, href }) => (
                  <li key={label} className="flex gap-4">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-gold-500">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-white/55">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          className="mt-1 block font-semibold hover:text-gold-500"
                          {...(href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="mt-1 font-semibold">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
