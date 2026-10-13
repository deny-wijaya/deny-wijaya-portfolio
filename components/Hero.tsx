import Image from "next/image";
import { hero, profile } from "@/content/site";

export default function Hero() {
  return (
    <section
      id="top"
      className="wrap relative flex flex-col justify-center pt-14 pb-[72px] md:min-h-[calc(100vh-68px)] md:pt-[72px]"
      aria-labelledby="hero-title"
    >
      <div className="hero-orb" aria-hidden="true" />

      <div className="flex flex-wrap items-center justify-between gap-4 pb-7 md:pb-10">
        <p className="eyebrow m-0 text-muted">{hero.eyebrow}</p>
        {profile.available && (
          <p className="glass m-0 inline-flex items-center gap-[10px] rounded-full border border-line px-[14px] py-[7px] font-mono text-[12.5px]">
            <span className="status-dot size-2 rounded-full bg-[var(--ok)]" aria-hidden="true" />
            {profile.availabilityLabel}
          </p>
        )}
      </div>

      <div className="rise grid grid-cols-[auto_minmax(0,1fr)] items-end gap-x-4 gap-y-6 md:flex md:items-start md:gap-[clamp(16px,3vw,40px)]">
        <figure className="avatar">
          <Image
            src={profile.portrait.src}
            alt={profile.portrait.alt}
            fill
            priority
            sizes="(max-width: 859px) 240px, 322px"
          />
        </figure>
        {/* Phone: avatar + greeting share row 1, the H1 takes the full width below. */}
        <div className="contents md:block md:min-w-0 md:flex-1">
          <p className="m-0 mb-1 self-end font-mono text-[13px] tracking-[0.02em] text-accent md:mb-[22px] md:text-[15px]">
            {hero.hello}
          </p>
          <h1
            id="hero-title"
            className="col-span-2 m-0 text-[clamp(40px,6.6vw,95px)] max-md:text-balance leading-[0.98] font-medium tracking-[-0.045em]"
          >
            {hero.line1}
            <span className="block text-muted">
              {hero.line2}
              <span className="caret" aria-hidden="true" />
            </span>
          </h1>
        </div>
      </div>

      <div className="grid-12 rise-delay mt-8 gap-y-10 md:mt-14">
        <div className="col-span-6">
          <p className="m-0 max-w-[34ch] text-[18px] leading-[1.5] tracking-[-0.01em] md:text-[21px]">
            {hero.lede}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a className="btn btn-primary max-md:flex-auto" href="#work">
              View selected work <span className="arr" aria-hidden="true">↓</span>
            </a>
            <a className="btn btn-ghost max-md:flex-auto" href="#contact">
              Get in touch
            </a>
          </div>
        </div>

        <div
          className="col-start-7 col-end-13 self-end overflow-hidden rounded-[14px] border border-line bg-glass shadow-[var(--shadow-term)] backdrop-blur-[14px] max-md:mt-2 lg:col-start-8"
          role="group"
          aria-label="At a glance"
        >
          <div className="flex items-center gap-[7px] border-b border-line px-4 py-3">
            <i className="size-[10px] rounded-full bg-[var(--dot)]" />
            <i className="size-[10px] rounded-full bg-[var(--dot)]" />
            <i className="size-[10px] rounded-full bg-[var(--dot)]" />
            <span className="ml-auto font-mono text-[12px] tracking-[0.02em] text-muted">deny.config.ts</span>
          </div>
          <dl className="term-body m-0 px-5 pt-[18px] pb-5 font-mono text-[13.5px] leading-[1.9]">
            {hero.terminal.map((row) => (
              <div key={row.key} className="flex gap-[10px]">
                <dt className="text-accent">{row.key}</dt>
                <dd className="m-0 text-ink">{row.value}</dd>
              </div>
            ))}
            {profile.available && (
              <div className="flex gap-[10px]">
                <dt className="text-muted">{hero.statusLine.key}</dt>
                <dd className="m-0 text-ink">{hero.statusLine.value}</dd>
              </div>
            )}
          </dl>
        </div>
      </div>

      <p className="scroll-cue eyebrow mt-[72px] mb-0 flex items-center gap-[14px] text-muted">Scroll to explore</p>
    </section>
  );
}
