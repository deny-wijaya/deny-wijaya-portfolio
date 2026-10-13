"use client";

import { useRef, useState } from "react";
import { experience } from "@/content/site";
import SectionHeading from "@/components/SectionHeading";

export default function Experience() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const jobs = experience.jobs;
  const job = jobs[active];

  function focusTab(i: number) {
    setActive(i);
    tabRefs.current[i]?.focus();
  }

  function onKeyDown(e: React.KeyboardEvent) {
    const last = jobs.length - 1;
    let next: number | null = null;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = active === last ? 0 : active + 1;
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = active === 0 ? last : active - 1;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = last;
    if (next !== null) {
      e.preventDefault();
      focusTab(next);
    }
  }

  return (
    <section id="experience" className="sec wrap" aria-labelledby="exp-title">
      <SectionHeading id="exp-title" num="02." title={experience.title} intro={experience.intro} />

      <div className="grid max-w-[980px] grid-cols-1 gap-6 md:grid-cols-[240px_minmax(0,1fr)] md:gap-10">
        <div
          className="flex flex-row overflow-x-auto border-b border-line md:flex-col md:overflow-visible md:border-b-0 md:border-l"
          role="tablist"
          aria-label="Companies"
          aria-orientation="vertical"
          onKeyDown={onKeyDown}
        >
          {jobs.map((j, i) => (
            <button
              key={j.tab}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`tab-${i}`}
              aria-selected={active === i}
              aria-controls={`panel-${i}`}
              tabIndex={active === i ? 0 : -1}
              onClick={() => setActive(i)}
              className="tab relative min-h-12 cursor-pointer border-0 bg-transparent px-5 text-left font-mono text-[13.5px] whitespace-nowrap text-muted md:whitespace-normal"
            >
              {j.tab}
            </button>
          ))}
        </div>

        <div
          key={active}
          id={`panel-${active}`}
          className="rise-fast"
          role="tabpanel"
          aria-labelledby={`tab-${active}`}
          tabIndex={0}
        >
          <h3 className="m-0 text-[24px] font-medium tracking-[-0.02em]">
            {job.role} <span className="text-accent">@ {job.company}</span>
          </h3>
          <p className="eyebrow m-0 mt-[6px] text-muted">{job.period}</p>
          <ul className="job-points m-0 mt-[22px] grid list-none gap-x-4 gap-y-3 p-0 text-[16px] text-soft">
            {job.points.map((point) => (
              <li key={point} className="grid grid-cols-[20px_1fr]">
                {point}
              </li>
            ))}
          </ul>
          <ul
            className="m-0 mt-[22px] flex list-none flex-wrap gap-x-[18px] gap-y-[6px] p-0 font-mono text-[13px] text-muted"
            aria-label="Stack"
          >
            {job.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
