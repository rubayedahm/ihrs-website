/**
 * Site-wide settings. Contact details and links come from content/settings.json,
 * which is editable in the CMS ("Site settings").
 */
import settings from "../../content/settings.json";

export const site = {
  name: "International Human Rights Society",
  shortName: "IHRS",
  tagline: "Advancing human rights through knowledge, action, and fearless legal advocacy.",
  description:
    "The International Human Rights Society (IHRS) is a student-led human rights organisation in London, UK — advancing legal awareness, critical dialogue and real accountability.",
  // Public address of the site (no trailing slash). Set NEXT_PUBLIC_SITE_URL at build time.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ihrsglobal.org",
  location: settings.location,
  email: settings.email,
  phone: settings.phone,
  charityNumber: settings.charityNumber,
  links: {
    studentUnionJoin: settings.studentUnionJoin,
    committeeForm: settings.committeeForm,
    donate: settings.donate,
  },
  // Only filled-in profiles are shown in the footer.
  social: settings.social,
  // Contact form delivery. Set NEXT_PUBLIC_FORM_ENDPOINT to a Formspree / Basin /
  // Getform URL. Without it the form falls back to opening the visitor's email app.
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "",
};

export const nav = [
  { href: "/about/", label: "About" },
  { href: "/events/", label: "Events" },
  { href: "/journal/", label: "Journal" },
  { href: "/gallery/", label: "Gallery" },
  { href: "/membership/", label: "Membership" },
  { href: "/contact/", label: "Contact" },
] as const;
