"use client";

import { useRef, useSyncExternalStore } from "react";

type Theme = "light" | "dark";

function readTheme(): Theme {
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

/** Floating light bulb: on = light theme, off = dark theme. */
export default function ThemeToggle() {
  const theme = useSyncExternalStore<Theme | null>(subscribe, readTheme, () => null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  function toggle() {
    const next: Theme = readTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}

    // Restart the swing/flicker animation on every tap.
    const el = buttonRef.current;
    if (el) {
      el.classList.remove("is-switching");
      void el.offsetWidth;
      el.classList.add("is-switching");
    }
  }

  const label = theme === "light" ? "Turn the light off (dark theme)" : "Turn the light on (light theme)";

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={toggle}
      onAnimationEnd={(e) => {
        if (e.target === e.currentTarget) e.currentTarget.classList.remove("is-switching");
      }}
      aria-label={label}
      title={label}
      className="lamp"
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <g className="lamp-rays" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d="M16 1.5v1.75M5.4 4.9l1.25 1.25M26.6 4.9l-1.25 1.25M1.75 13.5h1.75M28.5 13.5h1.75" />
        </g>
        <path
          className="lamp-glass"
          d="M16 5.5a8 8 0 0 0-5 14.25c.95.85 1.6 1.9 1.6 3.25h6.8c0-1.35.65-2.4 1.6-3.25A8 8 0 0 0 16 5.5z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          className="lamp-filament"
          d="M14 23v-5.25l-1-1.5M18 23v-5.25l1-1.5M13 16.25l1.5 1.5 1.5-1.5 1.5 1.5 1.5-1.5"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M12.75 25.5h6.5M13.75 28h4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </button>
  );
}
