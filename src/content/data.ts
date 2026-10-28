/**
 * All editable page content lives here. Text is taken from the original
 * IHRS website; edit freely — no code changes needed elsewhere.
 */
import journalIndex from "./journal/index.json";

export type EventItem = {
  slug: string;
  title: string;
  date: string; // ISO date
  campus?: string;
  image: string;
  summary: string;
};

// Years for 2025 events are inferred from the original listing order.
export const events: EventItem[] = [
  {
    slug: "recruitment-liverpool-street",
    title: "Recruitment — Liverpool Street Campus",
    date: "2026-01-28",
    campus: "Liverpool Street",
    image: "/images/events/recruitment-liverpool-street.jpg",
    summary: "Meeting new students at Liverpool Street and welcoming them into the IHRS community.",
  },
  {
    slug: "recruitment-greenwich",
    title: "Recruitment — Greenwich Campus",
    date: "2026-01-26",
    campus: "Greenwich",
    image: "/images/events/recruitment-greenwich.jpg",
    summary: "Our Greenwich General Committee on the ground, signing up members for the new term.",
  },
  {
    slug: "recruitment-day-2",
    title: "Recruitment — Day 2",
    date: "2026-01-21",
    image: "/images/events/recruitment-day-2.jpg",
    summary: "A second day of conversations, sign-ups and introductions to our departments.",
  },
  {
    slug: "membership-recruitment",
    title: "Membership & Recruitment Campaign",
    date: "2026-01-19",
    image: "/images/events/membership-recruitment.jpg",
    summary: "Launching our January drive to grow IHRS and bring new voices into the society.",
  },
  {
    slug: "bollywood-night",
    title: "Bollywood Night",
    date: "2025-11-27",
    image: "/images/events/bollywood-night.jpg",
    summary: "An evening of music, dance and community celebrating culture across our membership.",
  },
  {
    slug: "solidarity-nepal",
    title: "Standing in Solidarity with the Youth of Nepal",
    date: "2025-09-12",
    image: "/images/events/solidarity-nepal.jpg",
    summary: "Members gathered to stand with young people in Nepal and their call for accountability.",
  },
  {
    slug: "cultural-exchange-day",
    title: "Cultural Exchange Day",
    date: "2025-07-29",
    image: "/images/events/cultural-exchange-day.jpg",
    summary: "Sharing food, dress and traditions — because diversity of thought starts with knowing each other.",
  },
  {
    slug: "harassment-awareness",
    title: "Harassment Awareness Campaign",
    date: "2025-07-21",
    image: "/images/events/harassment-awareness.jpg",
    summary: "Helping students recognise harassment, understand their rights and find the right support.",
  },
  {
    slug: "pool-week",
    title: "Pool Week",
    date: "2025-07-03",
    image: "/images/events/pool-week.jpg",
    summary: "A relaxed week of games and conversation building connections between members.",
  },
  {
    slug: "hygiene-awareness",
    title: "Personal Hygiene Awareness Campaign",
    date: "2025-06-12",
    image: "/images/events/hygiene-awareness.jpg",
    summary: "A practical wellbeing campaign promoting dignity, health and care on campus.",
  },
  {
    slug: "membership-campaign-2025",
    title: "IHRS Membership Campaign 2025",
    date: "2025-06-04",
    image: "/images/events/membership-campaign-2025.jpg",
    summary: "Our first major membership campaign — where IHRS began to grow beyond its founders.",
  },
];

export const story = {
  heading: "A small beginning, now advancing real human rights change",
  paragraphs: [
    "The International Human Rights Society (IHRS) began with just six individuals—each from different backgrounds, religions, and perspectives—brought together by one shared belief: that rights only matter when they are actively protected.",
    "What started as a small group addressing student concerns quickly grew into something more structured. We began by helping students navigate issues around fairness, representation, and access to their rights within the university environment. Over time, that work expanded into broader conversations about justice, accountability, and human rights in practice.",
    "IHRS is built on the idea that diversity of thought is not a weakness—it is the foundation of stronger, more balanced advocacy. We do not aim to speak for people; we aim to create a platform where voices are heard, challenged, and taken seriously.",
    "Today, IHRS continues to grow as a space for legal awareness, critical discussion, and practical action. Whether through events, advocacy, or collaboration, our focus remains the same: turning awareness into impact, and principles into real protection for those who need it.",
  ],
};

export const pillars = [
  {
    icon: "Scale",
    title: "Legal awareness",
    text: "Helping students understand their rights — at university, at work and in wider society — and where to turn when those rights are ignored.",
  },
  {
    icon: "MessagesSquare",
    title: "Critical dialogue",
    text: "Debates, seminars and our journal create space where ideas are heard, challenged and taken seriously.",
  },
  {
    icon: "ShieldCheck",
    title: "Real accountability",
    text: "Turning principles into protection by raising concerns, supporting students and pushing for fair treatment.",
  },
] as const;

export const values = [
  { title: "Equality", text: "Every person deserves the same dignity, voice and protection." },
  { title: "Justice", text: "Rights only matter when they are actively protected." },
  { title: "Student empowerment", text: "We build the confidence and knowledge to stand up for yourself and others." },
  { title: "Diversity of thought", text: "Different backgrounds and perspectives make our advocacy stronger." },
] as const;

export type Person = { name: string; role: string; photo?: string; vacant?: boolean };

// Add `photo: "/images/team/name.jpg"` to show a headshot instead of initials.
export const leadership: Person[] = [
  { name: "Muhammad Bilal", role: "President" },
  { name: "Tufale Ahmed", role: "Vice President" },
  { name: "Ashima Saini", role: "Head of Operations" },
  { name: "Deeza Singh Dahal", role: "Treasurer" },
  { name: "Dihan Ahmed Mahi", role: "Head of Student Affairs" },
  { name: "Bhojraj Ghimire", role: "Head of Events" },
  { name: "Rahul", role: "General Secretary" },
  { name: "Nabin Singh Goyala", role: "Joint Secretary" },
  { name: "Rubayed Ahmed", role: "Head of IT" },
  { name: "Open position", role: "Student Ambassador", vacant: true },
];

export const structure = [
  {
    key: "founding",
    title: "Founding Members Committee",
    summary: "The heart and heritage of IHRS.",
    body: [
      "The Founding Members Committee is made up of the individuals who took the first step to create and establish the International Human Rights Society — those who transformed the idea into a functioning organisation.",
      "Their contribution is not just administrative; it is symbolic and historical. They are recognised as mentors, vision-bearers, and guardians of the legacy of IHRS. Although they do not engage in day-to-day decision-making, their opinions hold significant moral weight and serve as guidance when needed.",
    ],
    points: [] as string[],
  },
  {
    key: "executive",
    title: "Executive Committee",
    summary: "The brain and backbone of IHRS.",
    body: [
      "The central decision-making body that leads, governs, and directs the organisation’s overall activities and strategies. Members are selected based on their leadership, experience, and proven ability to handle responsibility.",
    ],
    points: [
      "Decision-making — approving major projects, collaborations, campaigns and policies.",
      "Internal & external affairs — managing communication between campuses, departments, university unions and partners.",
      "Oversight & guidance — supervising all General Committees so every campus follows IHRS principles.",
      "Conflict resolution — handling internal, disciplinary or structural issues.",
      "Maintenance of values — ensuring every decision aligns with equality, justice and student empowerment.",
    ],
  },
  {
    key: "general",
    title: "General Committees",
    summary: "Campus-based teams working directly with students.",
    body: [
      "Each campus has its own General Committee to carry out activities locally — collecting feedback, organising events, raising awareness and running outreach. They operate under the direction of a single Executive Committee to ensure unity and proper direction.",
    ],
    points: ["IHRS General Committee — Greenwich Campus", "IHRS General Committee — Dagenham Campus"],
  },
];

export const departments = [
  {
    icon: "Megaphone",
    title: "PR, Marketing & IT",
    text: "Manages our public image, social media, design and digital tools — making sure the IHRS message reaches people clearly and professionally.",
  },
  {
    icon: "CalendarDays",
    title: "Events & Engagements",
    text: "Plans seminars, workshops, debates, awareness drives and charity campaigns, and builds collaborations with other societies.",
  },
  {
    icon: "HeartHandshake",
    title: "Student Affairs",
    text: "Supports student welfare, raises awareness of student rights and connects people to the right channels for help.",
  },
  {
    icon: "Settings2",
    title: "Operations",
    text: "The ground force — logistics, schedules, materials and on-site management so every plan becomes reality.",
  },
  {
    icon: "UserPlus",
    title: "Membership & Recruitment",
    text: "Runs membership drives, processes applications and welcomes every new member with induction sessions.",
  },
] as const;

export const waysToHelp = [
  {
    icon: "UserPlus",
    title: "Become a member",
    text: "Join through the Students’ Union and take part in events, campaigns and discussions.",
  },
  {
    icon: "Users",
    title: "Join the committee",
    text: "Bring your time and skills to one of our five departments and help lead IHRS.",
  },
  {
    icon: "Share2",
    title: "Share our work",
    text: "Amplify our message by sharing stories, events and journal articles across your networks.",
  },
] as const;

export type JournalMeta = { slug: string; title: string; date: string; excerpt: string };
export const journal: JournalMeta[] = [...journalIndex].sort((a, b) => b.date.localeCompare(a.date));

export const journalImages: Record<string, string> = {
  "equality-vulnerability-and-informal-labour-rethinking-workplace-rights-in-the-united-kingdom":
    "/images/journal/workplace-rights.jpg",
};

// Real photos only — gallery is built from event imagery plus the team banner.
export const gallery = [
  { src: "/images/team-banner.jpg", alt: "IHRS members together at a society event" },
  ...events.map((e) => ({ src: e.image, alt: e.title })),
];
