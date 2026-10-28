/**
 * Content that rarely changes (values, structure, departments).
 * Events, journal, team, gallery and the About story are edited in the CMS —
 * see /content and src/lib/content.ts.
 */

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
