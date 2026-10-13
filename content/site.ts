export type ProjectNote = { title: string; body: string };

export type FeaturedProject = {
  id: string;
  name: string;
  summary: string;
  points: string[];
  pointsLabel: string;
  tags: string[];
  tagsLabel: string;
  link: { label: string; href: string } | null;
  image: string | null;
  placeholder: { title: string; subtitle: string; ariaLabel: string; warm: boolean };
  reversed: boolean;
  notes?: ProjectNote[];
};

export type OtherProject = {
  name: string;
  kind: string;
  summary: string;
  tags: string[];
};

export type Job = {
  tab: string;
  role: string;
  company: string;
  period: string;
  points: string[];
  tags: string[];
};

export type SkillGroup = { group: string; items: string[] };

export const profile = {
  name: "Deny Wijaya",
  shortName: "dw",
  title: "Front-End & Mobile Developer",
  location: "Denpasar, Bali, Indonesia",
  timezone: "GMT+8",
  email: "denyekayana@gmail.com",
  github: "https://github.com/deny-wijaya",
  linkedin: "https://www.linkedin.com/in/denywijaya14/",
  available: true,
  availabilityLabel: "Open to remote roles",
  resumeUrl: "/cv/CV-Deny-Wijaya-2026.pdf" as string | null,
  portrait: {
    src: "/images/dw-pixel.png",
    alt: "Pixel-art portrait of Deny Wijaya, smiling, in a white shirt against a blue sky",
  },
  aboutPhoto: null as string | null,
};

export const site = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://denywijaya.com",
  title: "Deny Wijaya — Front-End & Mobile Developer",
  description:
    "Deny Wijaya is a front-end and mobile developer in Bali building business-critical web and mobile products with React, TypeScript, Next.js and Flutter.",
};

export const nav = [
  { id: "work", label: "Work", num: "01" },
  { id: "experience", label: "Experience", num: "02" },
  { id: "about", label: "About", num: "03" },
  { id: "contact", label: "Contact", num: "04" },
];

export const hero = {
  eyebrow: "Front-End & Mobile Developer · Bali, Indonesia",
  hello: "> Hi, my name is",
  line1: "Deny Wijaya.",
  line2: "I build software businesses run on",
  lede: "Front-end and mobile developer turning manual operations into reliable products, from POS and booking systems to ERP and supply-chain platforms. React, TypeScript, Next.js and Flutter.",
  terminal: [
    { key: "focus", value: '"front-end & mobile"' },
    { key: "core", value: '["React", "TypeScript", "Next.js"]' },
    { key: "also", value: '["Vue.js", "Flutter", "Go"]' },
    { key: "experience", value: '"5+ years"' },
    { key: "based", value: '"Denpasar, Bali · GMT+8"' },
  ],
  statusLine: { key: "status", value: '"open_to_remote"' },
};

export const work = {
  title: "Selected work",
  intro: "Business-critical products, chosen for the problems behind them rather than the volume.",
};

export const featuredProjects: FeaturedProject[] = [
  {
    id: "karna",
    name: "Karna",
    summary:
      "An operations platform for appointment-based service businesses (barbershops, salons, spas and beauty clinics), from a single outlet to multi-outlet chains. Released and in its sales phase.",
    points: [
      "Booking and staff scheduling",
      "POS with automatic commissions and tips",
      "Inventory with recipe-based stock deduction",
      "Memberships, role-based access, 30+ reports",
    ],
    pointsLabel: "Product scope",
    tags: ["Flutter", "Vue.js", "Mobile app", "Web admin"],
    tagsLabel: "Stack",
    link: { label: "karna.pro", href: "https://karna.pro" },
    image: null,
    placeholder: {
      title: "Karna — web admin & staff app",
      subtitle: "Replace with real screenshots from karna.pro",
      ariaLabel: "Placeholder for a Karna product screenshot",
      warm: false,
    },
    reversed: false,
    notes: [
      {
        title: "Context",
        body: "Appointment-based businesses need bookings, staff, sales and stock to work as one system, whether they run one outlet or a chain.",
      },
      {
        title: "Users",
        body: "Owners and managers work in the web admin; stylists and therapists use the mobile app day to day.",
      },
      {
        title: "Mobile app · Flutter",
        body: "Schedules, visit details, customer notes and earnings for stylists and therapists.",
      },
      {
        title: "Web admin · Vue.js",
        body: "Booking and staff scheduling, POS, automatic commissions and tips, recipe-based inventory, memberships, role-based access and 30+ business reports.",
      },
      {
        title: "Constraints",
        body: "One product serving both single outlets and multi-outlet chains, with different roles seeing different data.",
      },
      {
        title: "Outcome",
        body: "Taken from development to a fully featured release, now in its sales phase, kept stable with ongoing fixes.",
      },
    ],
  },
  {
    id: "bali-coast-trail",
    name: "Bali Coast Trail",
    summary:
      "The event site for an international trail race in East Bali, listed on the UTMB Index and ITRA.",
    points: [
      "Four race categories with local and foreign pricing",
      "Race info, rules, gear and accommodation pages",
      "SEO, social sharing, responsive and accessible",
    ],
    pointsLabel: "What the site covers",
    tags: ["Next.js", "Event site"],
    tagsLabel: "Stack",
    link: { label: "balicoasttrail.com", href: "https://balicoasttrail.com" },
    image: "/images/bali-coast-trail.jpg",
    placeholder: {
      title: "Bali Coast Trail — hero section",
      subtitle: "Replace with a real crop of balicoasttrail.com",
      ariaLabel: "Placeholder for Bali Coast Trail website imagery",
      warm: true,
    },
    reversed: true,
  },
  {
    id: "bali-trail-running",
    name: "Bali Trail Running",
    summary:
      "A registration platform serving multiple trail running events in Bali, from browsing events to paying for a race slot.",
    points: [
      "Event listings and participant sign-up",
      "Race category selection and ticketing",
      "Online payment, including bank-specific promos",
    ],
    pointsLabel: "What the platform covers",
    tags: ["Web platform", "Registration", "Payments"],
    tagsLabel: "Type",
    link: { label: "app.balitrailrunning.com", href: "https://app.balitrailrunning.com" },
    image: "/images/bali-trail-running.jpg",
    placeholder: {
      title: "Bali Trail Running — registration flow",
      subtitle: "Replace with a real screenshot of app.balitrailrunning.com",
      ariaLabel: "Placeholder for a Bali Trail Running registration screenshot",
      warm: false,
    },
    reversed: false,
  },
  {
    id: "bali-bird-park",
    name: "Bali Bird Park",
    summary:
      "A mobile rewards app for the tour guides who bring visitors to Bali Bird Park: scan a barcode ticket to award or redeem guide points.",
    points: [
      "Barcode ticket scanning to award points",
      "Point redemption for guides",
      "Built for fast, accurate scanning at peak visitor times",
    ],
    pointsLabel: "What the app does",
    tags: ["Flutter", "REST API", "Mobile"],
    tagsLabel: "Stack",
    link: null,
    image: null,
    placeholder: {
      title: "Bali Bird Park — guide rewards app",
      subtitle: "Replace with real phone screenshots",
      ariaLabel: "Placeholder for a Bali Bird Park app screenshot",
      warm: true,
    },
    reversed: true,
  },
];

export const otherProjects = {
  title: "Other noteworthy projects",
  sub: "Client & product work",
  items: [
    {
      name: "Dinaran Gold",
      kind: "Web admin",
      summary:
        "Admin dashboard for a gold trading app: real-time statistics, live gold prices, member and transaction monitoring.",
      tags: ["React", "TypeScript", "Tailwind"],
    },
    {
      name: "MS Glow Aesthetic Clinic",
      kind: "Web POS",
      summary: "Digitized patient registration, barcode treatment tracking and pricing across roles.",
      tags: ["React", "Next.js", "Tailwind"],
    },
    {
      name: "Luks Pet",
      kind: "Web POS",
      summary:
        "POS and online booking for pet grooming, built for concurrent bookings; plus the company site.",
      tags: ["Vue.js", "Vuetify", "Laravel"],
    },
  ] satisfies OtherProject[],
};

export const experience = {
  title: "Where I’ve worked",
  intro: "Five-plus years building business-critical web and mobile software in Bali.",
  jobs: [
    {
      tab: "Karna",
      role: "Software Developer, Mobile & Web Admin",
      company: "PT Karna Pangkal Kaya",
      period: "2023 — Present",
      points: [
        "Built the Flutter app stylists and therapists use for schedules, visit details, customer notes and earnings.",
        "Built the Vue.js web admin: booking, staff scheduling, POS, commissions, inventory, memberships and 30+ reports.",
        "Took Karna from development to a fully featured release, now in its sales phase.",
      ],
      tags: ["Flutter", "Vue.js"],
    },
    {
      tab: "Urban Beauty",
      role: "Front-End Developer",
      company: "Urban Beauty Indonesia",
      period: "Aug 2019 — Present · Denpasar",
      points: [
        "Led front-end development of the Urban Distribution System, a semi-ERP used by accounting, warehouse, purchasing and sales teams.",
        "Built the MS Glow product traceability platform, including QR generation for 1M+ codes per batch.",
        "Ran user interviews with internal teams to improve complex, multi-role workflows.",
      ],
      tags: ["React", "TypeScript", "Vue.js", "Material UI", "Go"],
    },
    {
      tab: "Destar Studio",
      role: "Front-End & WordPress Developer",
      company: "Destar Studio",
      period: "Feb 2018 — Jul 2019 · Denpasar",
      points: [
        "Built client websites and front-ends with Vue.js, integrated with REST APIs.",
        "Delivered e-commerce sites and company profiles on WordPress, including custom themes.",
      ],
      tags: ["Vue.js", "WordPress"],
    },
  ] satisfies Job[],
};

export const about = {
  title: "Engineering with an eye for detail.",
  caption: "Deny Wijaya · Denpasar, Bali",
  facts: [
    {
      label: "Education",
      values: [
        "Bachelor of Information Systems, ITB STIKOM Bali",
        "Diploma in Information Management, Politeknik Negeri Bali",
      ],
    },
    { label: "Languages", values: ["Indonesian (native), English (professional working)"] },
  ],
  paragraphs: [
    "Most of my work sits between a design file and a production codebase. I care about getting that translation right: spacing that matches the spec, states nobody drew, and layouts that hold up at every width, not just the two in the mockup.",
    "Much of what I’ve built replaces a manual process: clinic registrations, warehouse distribution, salon commissions. That means working directly with business owners and end users, running interviews, and asking what a feature is for before deciding how to build it.",
    "I build interfaces as small, typed, reusable components with clear boundaries, and I use AI-assisted development with Claude every day to move faster while keeping code clean, tested and maintainable.",
  ],
  principles: [
    { title: "Design fidelity", body: "Accurate to the spec, considered where the spec is silent." },
    { title: "Component architecture", body: "Reusable building blocks with predictable APIs." },
    { title: "Responsive by default", body: "Designed for touch, keyboard and every width between." },
    { title: "Product context", body: "Features shaped by the business problem they solve." },
  ],
};

export const expertise = {
  title: "Tools I reach for",
  intro: "Curated to what I use in production work. The projects above are the evidence.",
  groups: [
    { group: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "Vue.js", "HTML & CSS"] },
    { group: "UI systems", items: ["Tailwind CSS", "Material UI", "Vuetify", "Storybook", "Responsive design"] },
    { group: "Mobile", items: ["Flutter", "Dart", "Bloc", "Widgetbook"] },
    { group: "Back-end & data", items: ["REST APIs", "Node.js", "Go (working)", "Laravel", "Firebase"] },
    { group: "Workflow", items: ["Git & GitHub", "Vercel", "Webpack", "Figma", "AI-assisted dev (Claude)"] },
  ] satisfies SkillGroup[],
};

export const contact = {
  kicker: "04. What’s next?",
  title: "Let’s build something.",
  copy: "I’m open to remote roles and freelance projects. Whether you have a product to build or a question, my inbox is open.",
  cta: "Say hello",
  footerNote: "Designed and built with care in Bali.",
};
