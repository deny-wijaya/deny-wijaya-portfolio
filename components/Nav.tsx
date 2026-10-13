"use client";

import { useEffect, useRef, useState } from "react";
import { nav, profile } from "@/content/site";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );
    nav.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (open) menuRef.current?.querySelector("a")?.focus();
  }, [open]);

  function onMenuKey(e: React.KeyboardEvent) {
    if (e.key === "Escape") {
      setOpen(false);
      buttonRef.current?.focus();
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-[var(--nav-bg)] backdrop-blur-[8px] backdrop-saturate-[1.2]">
      <div className="wrap flex h-[60px] items-center justify-between gap-6 md:h-[68px]">
        <a
          className="wordmark flex min-h-11 items-center gap-px font-mono text-[17px]"
          href="#top"
          aria-label="Deny Wijaya — back to top"
        >
          <span className="wm-tag" aria-hidden="true">
            &lt;
          </span>
          <span className="font-medium tracking-[-0.01em] text-ink">{profile.shortName}</span>
          <span className="wm-tag" aria-hidden="true">
            /&gt;
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.id}
              className="nav-link px-[14px] py-3 font-mono text-[13px] text-muted"
              href={`#${item.id}`}
              aria-current={active === item.id ? "true" : undefined}
            >
              <span className="mr-[6px] text-accent">{item.num}.</span>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {profile.resumeUrl && (
            <a
              className="hidden min-h-10 items-center gap-2 rounded-[6px] border border-accent px-4 font-mono text-[13px] font-medium text-accent transition-colors duration-200 hover:bg-accent/14 md:inline-flex"
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener"
            >
              Resume <span aria-hidden="true">↗</span>
            </a>
          )}
          <button
            ref={buttonRef}
            type="button"
            className="menu-btn inline-flex size-11 cursor-pointer flex-col items-center justify-center gap-[6px] rounded-[8px] border border-line bg-transparent p-0 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      {open && (
        <nav
          ref={menuRef}
          id="mobile-menu"
          className="drop-menu border-t border-line bg-paper px-5 pt-2 pb-6 md:hidden"
          aria-label="Mobile"
          onKeyDown={onMenuKey}
        >
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="flex min-h-14 items-center justify-between border-b border-line text-[22px] tracking-[-0.01em]"
            >
              {item.label} <span className="eyebrow text-muted">{item.num}</span>
            </a>
          ))}
          {profile.resumeUrl && (
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener"
              onClick={() => setOpen(false)}
              className="flex min-h-14 items-center justify-between border-b border-line text-[22px] tracking-[-0.01em]"
            >
              Resume <span className="eyebrow text-muted">PDF ↗</span>
            </a>
          )}
        </nav>
      )}
    </header>
  );
}
