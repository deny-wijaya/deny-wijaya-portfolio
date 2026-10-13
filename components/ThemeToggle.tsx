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

/**
 * 8-bit bulb, 16x20 cells. Each letter is a color role; the colors come from
 * the --bulb-* tokens, so the same drawing is lit in light mode and unlit in dark.
 * O outline, G glass, L inner glow, H highlight, S shade, F filament,
 * W/B/D base (light, mid, dark), T tip.
 */
const BULB = [
  "....OOOOOOOO....",
  "..OOGGGGGGGGOO..",
  ".OGGHHGGGGGGGSO.",
  ".OGHHGGGGGGGGSO.",
  "OGGHGGLLLLGGGGSO",
  "OGGHGLLLLLLGGGSO",
  "OGGGGLLLLLLGGGSO",
  "OGGGGFLFFLFGGGSO",
  "OGGGGLFLLFLGGGSO",
  ".OGGGGFGGFGGGSO.",
  ".OGGGGFGGFGGGSO.",
  "..OGGGFGGFGGSO..",
  "...OGGFGGFGSO...",
  "...OOOOOOOOOO...",
  "....WBBBBBBD....",
  "....DDDDDDDD....",
  "....WBBBBBBD....",
  "....DDDDDDDD....",
  ".....TTTTTT.....",
  "......TTTT......",
];

const FILL: Record<string, string> = {
  O: "var(--bulb-outline)",
  G: "var(--bulb-glass)",
  L: "var(--bulb-glow)",
  H: "var(--bulb-highlight)",
  S: "var(--bulb-shade)",
  F: "var(--bulb-filament)",
  W: "#C9CACE",
  B: "#9A9BA1",
  D: "#6C6D73",
  T: "#47484D",
};

// Merge same-color runs on each row so the SVG stays small.
const PIXELS = BULB.flatMap((row, y) => {
  const runs: { x: number; y: number; w: number; c: string }[] = [];
  for (let x = 0; x < row.length; x++) {
    const c = row[x];
    if (c === ".") continue;
    const last = runs[runs.length - 1];
    if (last && last.c === c && last.x + last.w === x) last.w++;
    else runs.push({ x, y, w: 1, c });
  }
  return runs;
});

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
      <svg
        className="lamp-bulb"
        width="32"
        height="40"
        viewBox="0 0 16 20"
        shapeRendering="crispEdges"
        aria-hidden="true"
      >
        {PIXELS.map((p) => (
          <rect key={`${p.x}-${p.y}`} x={p.x} y={p.y} width={p.w} height={1} fill={FILL[p.c]} />
        ))}
      </svg>
    </button>
  );
}
