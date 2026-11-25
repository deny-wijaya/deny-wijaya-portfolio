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
    { key: "also", value: '["Vue.js", "Flutter"]' },
    { key: "experience", value: '"4+ years"' },
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
      "An operations platform for appointment-based service businesses (barbershops, salons, spas and beauty clinics), from a single outlet to multi-outlet chains. Released and now used by 3 businesses across 9 outlets.",
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
    image: "/images/karna-showcase.jpg",
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
        body: "Owners and managers work in the web admin, the front desk uses the Flutter app for bookings and POS, and stylists and therapists use the provider web app.",
      },
      {
        title: "Mobile app · Flutter",
        body: "Appointment booking and cashier (POS) operations at the front desk. Stylists and therapists use a separate provider web app for schedules, visit details, customer notes and earnings.",
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
        body: "Taken from early development to a full commercial release, now used by 3 businesses across 9 outlets. Commission and stock tracking that outlets used to do by hand is now automated.",
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
      "Race info and accommodation pages",
      "SEO, social sharing, responsive and accessible",
    ],
    pointsLabel: "What the site covers",
    tags: ["Next.js", "Event site"],
    tagsLabel: "Stack",
    link: { label: "balicoasttrail.com", href: "https://balicoasttrail.com" },
    image: "/images/bali-coast-trail-showcase-v2.jpg",
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
      "A registration platform serving multiple trail running events in Bali, handling around 6,000 registrations per event.",
    points: [
      "Event listings and participant sign-up",
      "Race category selection and ticketing",
      "Online payment, including bank-specific promos",
    ],
    pointsLabel: "What the platform covers",
    tags: ["Web platform", "Registration", "Payments"],
    tagsLabel: "Type",
    link: { label: "app.balitrailrunning.com", href: "https://app.balitrailrunning.com" },
    image: "/images/bali-trail-running-showcase-v3.jpg",
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
    image: "/images/bali-bird-park-showcase.jpg",
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
        "Admin dashboard for a high-volume gold trading app: real-time user and transaction statistics, live gold-price updates, member management and transaction monitoring.",
      tags: ["React", "TypeScript", "Tailwind"],
    },
    {
      name: "MS Glow Aesthetic Clinic",
      kind: "Web POS",
      summary: "Digitized the clinic's manual flow: patient registration, barcode-based treatment tracking from front office to doctor's room, and multi-role pricing for medication and products.",
      tags: ["React", "Next.js", "Tailwind", "REST API"],
    },
    {
      name: "Luks Pet",
      kind: "Web POS",
      summary:
        "POS with online booking for pet grooming, synced to customer and pet records, with state management optimized to handle concurrent bookings reliably.",
      tags: ["Vue.js", "Vuetify"],
    },
  ] satisfies OtherProject[],
};

export const experience = {
  title: "Where I’ve worked",
  intro: "Four-plus years building business-critical web and mobile software in Bali.",
  jobs: [
    {
      tab: "Karna",
      role: "Software Developer (Mobile & Web Admin)",
      company: "PT Karna Pangkal Kaya",
      period: "2023 — Present",
      points: [
        "Built the Vue.js admin dashboard end to end: booking and staff scheduling, POS, automatic commission and tip calculation, recipe-based inventory deduction, memberships, role-based access and 30+ business reports.",
        "Developed the Flutter app for appointment booking and cashier (POS) operations used at the front desk, plus the provider web app stylists and therapists use for schedules, visit details, customer notes and earnings.",
        "Took the product from early development to a full commercial release, now used by 3 businesses across 9 outlets.",
        "Automated commission and stock tracking that outlets previously handled by hand, reducing manual work for outlet staff and owners.",
      ],
      tags: ["Flutter", "Vue.js"],
    },
    {
      tab: "Urban Beauty",
      role: "Front-End Developer",
      company: "Urban Beauty Indonesia",
      period: "Aug 2019 — Dec 2026 · Denpasar",
      points: [
        "Led front-end development of the Urban Distribution System, a semi-ERP for sales, purchasing, inventory, bundling, discounts and partner management, used daily by accounting, warehouse, purchasing and sales teams (React).",
        "Built the MS Glow Product Security traceability platform, generating 1M+ QR codes per batch with background processing and real-time progress so users keep working without waiting (Vue.js).",
        "Delivered multi-level QR aggregation for packing and distribution, with real-time validation that blocks unauthorized codes during packing (React, TypeScript, Material UI).",
        "Built product activation and distribution tracking, giving management end-to-end visibility of each item's location.",
        "Ran user interviews with internal teams and used the findings to simplify complex multi-role workflows.",
      ],
      tags: ["React", "TypeScript", "Vue.js", "Material UI"],
    },
    {
      tab: "Destar Studio",
      role: "Front-End & WordPress Developer",
      company: "Destar Studio",
      period: "Feb 2018 — Jul 2019 · Denpasar",
      points: [
        "Built client web front-ends in Vue.js integrated with REST APIs.",
        "Delivered e-commerce sites and company profiles on WordPress, including custom themes.",
      ],
      tags: ["Vue.js", "WordPress", "REST API"],
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
        "Bachelor of Information Systems, Institut Teknologi dan Bisnis STIKOM Bali, 2018",
        "Diploma in Information Management, Politeknik Negeri Bali, 2016",
      ],
    },
    { label: "Languages", values: ["Indonesian (native), English (professional working proficiency)"] },
  ],
  paragraphs: [
    "Most of my work sits between a design file and a production codebase. I care about getting that translation right: spacing that matches the spec, states nobody drew, and layouts that hold up at every width, not just the two in the mockup.",
    "Much of what I’ve built replaces a manual process: clinic registrations, warehouse distribution, salon commissions. That means working directly with business owners and end users, running interviews, and asking what a feature is for before deciding how to build it.",
    "I build interfaces as small, typed, reusable components with clear boundaries, and I use AI-assisted development with Claude Code every day to move faster while keeping code clean, tested and maintainable.",
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
    { group: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "Vue.js", "Tailwind CSS", "Material UI", "Vuetify", "HTML & CSS"] },
    { group: "Mobile", items: ["Flutter", "Dart", "Bloc"] },
    { group: "Back-end & data", items: ["Node.js", "Express.js", "REST APIs", "Firebase", "PostgreSQL (basic)"] },
    { group: "Tools", items: ["Git & GitHub", "Vercel", "Storybook", "Widgetbook", "Webpack", "Figma", "WordPress"] },
    { group: "Practices", items: ["AI-assisted dev (Claude Code)", "Code review", "User research", "Testing with Vitest"] },
  ] satisfies SkillGroup[],
};

export const contact = {
  kicker: "04. What’s next?",
  title: "Let’s build something.",
  copy: "I’m open to remote roles and freelance projects. Whether you have a product to build or a question, my inbox is open.",
  cta: "Say hello",
  footerNote: "Designed and built with care in Bali.",
};
