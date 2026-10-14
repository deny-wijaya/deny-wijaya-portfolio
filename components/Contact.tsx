import { contact, profile } from "@/content/site";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, external: false },
  { label: "LinkedIn", value: "in/denywijaya14 ↗", href: profile.linkedin, external: true },
  ...(profile.resumeUrl
    ? [{ label: "Resume", value: "Download CV (PDF) ↗", href: profile.resumeUrl, external: true }]
    : []),
];

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <section
      id="contact"
      className="contact relative mt-[104px] overflow-hidden border-t border-line bg-transparent text-center md:mt-40"
      aria-labelledby="contact-title"
    >
      <div className="wrap relative pt-20 pb-14 md:pt-[120px]">
        <div className="mx-auto flex max-w-[720px] flex-col items-center gap-[22px]">
          <span className="font-mono text-[16px] text-accent">{contact.kicker}</span>
          <h2
            id="contact-title"
            className="m-0 text-[clamp(44px,6.4vw,88px)] leading-[0.98] font-medium tracking-[-0.045em]"
          >
            {contact.title}
          </h2>
          <p className="m-0 text-[18px] leading-[1.5] text-[var(--contact-copy)] md:text-[20px]">{contact.copy}</p>
          <a
            className="btn-talk mt-3 inline-flex min-h-16 items-center gap-[14px] rounded-[8px] border border-accent bg-transparent px-8 font-mono text-[16px] font-medium text-accent max-md:w-full max-md:justify-between"
            href={`mailto:${profile.email}`}
          >
            {contact.cta} <span className="arr" aria-hidden="true">→</span>
          </a>
        </div>

        <ul
          className={`m-0 mt-16 grid list-none grid-cols-1 border-t border-line p-0 text-left md:mt-24 ${
            channels.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"
          }`}
        >
          {channels.map((c, i) => (
            <li key={c.label} className={i > 0 ? "max-md:border-t max-md:border-line md:border-l md:border-line" : ""}>
              <a
                className={`channel flex flex-col gap-2 py-[18px] md:min-h-[120px] md:pt-6 md:pr-6 md:pb-7 ${
                  i > 0 ? "md:pl-6" : ""
                }`}
                href={c.href}
                {...(c.external ? { target: "_blank", rel: "noopener" } : {})}
              >
                <span className="eyebrow text-muted">{c.label}</span>
                <span className="v text-[17px] break-words text-ink transition-colors duration-200">{c.value}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <footer className="border-t border-line">
        <div className="wrap flex flex-wrap items-center justify-between gap-4 pt-7 pb-9 text-[14px] md:pb-24 text-muted">
          <span>
            © {year} {profile.name}
          </span>
          <span>{contact.footerNote}</span>
          <nav className="flex gap-1" aria-label="Social">
            <a className="inline-flex min-h-11 items-center p-[10px] hover:text-accent" href={profile.linkedin} target="_blank" rel="noopener">
              LinkedIn
            </a>
            <a className="inline-flex min-h-11 items-center p-[10px] hover:text-accent" href="#top">
              Top ↑
            </a>
          </nav>
        </div>
      </footer>
    </section>
  );
}
