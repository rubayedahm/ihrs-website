/**
 * Site-wide settings. Update the values here and they flow through every page.
 * Anything marked TODO still needs a real value from the IHRS team.
 */
export const site = {
  name: "International Human Rights Society",
  shortName: "IHRS",
  tagline: "Advancing human rights through knowledge, action, and fearless legal advocacy.",
  description:
    "The International Human Rights Society (IHRS) is a student-led human rights organisation in London, UK — advancing legal awareness, critical dialogue and real accountability.",
  // TODO: change to your live domain once it is connected.
  url: "https://ihrsglobal.org",
  location: "Dagenham, London, United Kingdom",
  // TODO: replace with the official IHRS inbox.
  email: "info@ihrsglobal.org",
  // Leave empty to hide. Example: "+44 20 0000 0000"
  phone: "",
  // Leave empty unless IHRS is a registered charity, e.g. "1234567"
  charityNumber: "",
  links: {
    studentUnionJoin: "https://www.yoursu.org/get-involved/societies/join/23879/",
    committeeForm: "https://forms.gle/QudKX4j2vZEzm4L47",
    // TODO: paste a donation page (Stripe Payment Link, JustGiving, PayPal, Enthuse…).
    donate: "",
  },
  // Only filled-in profiles are shown in the footer.
  social: {
    instagram: "",
    facebook: "",
    linkedin: "",
    x: "",
    youtube: "",
    whatsapp: "",
  },
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
