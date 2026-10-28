import type { Metadata } from "next";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy & cookies",
  description: "How the International Human Rights Society handles personal data under UK GDPR.",
};

// A plain-English starting point. Have the committee review it before launch.
export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy & cookies" intro="How we look after your personal information." />
      <section className="py-20">
        <div className="container-x max-w-3xl">
          <div className="prose prose-lg max-w-none prose-headings:text-navy-900 prose-a:text-navy-700">
            <p>
              The {site.name} (“IHRS”, “we”) respects your privacy. This notice explains what personal data we collect
              through this website, why, and your rights under the UK General Data Protection Regulation (UK GDPR) and
              the Data Protection Act 2018.
            </p>
            <h2>What we collect</h2>
            <p>
              When you use our contact form we collect your name, email address, optional phone number and the content
              of your message. Membership sign-ups happen on the Students’ Union website and committee applications on
              Google Forms; those services have their own privacy notices.
            </p>
            <h2>Why we use it</h2>
            <p>
              We use your details only to respond to your enquiry (lawful basis: your consent and our legitimate
              interest in replying). We never sell your data or use it for unrelated marketing.
            </p>
            <h2>How long we keep it</h2>
            <p>We keep enquiry messages for no longer than 12 months unless an ongoing matter requires otherwise.</p>
            <h2>Cookies</h2>
            <p>
              This website does not set advertising or tracking cookies. If we add privacy-friendly analytics in the
              future, we will update this notice.
            </p>
            <h2>Your rights</h2>
            <p>
              You can ask to access, correct or delete your personal data, or withdraw consent at any time, by emailing{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>. If you are unhappy with how we handle your data, you can
              complain to the Information Commissioner’s Office at <a href="https://ico.org.uk">ico.org.uk</a>.
            </p>
            <p className="text-sm text-muted">Last updated: October 2026</p>
          </div>
        </div>
      </section>
    </>
  );
}
