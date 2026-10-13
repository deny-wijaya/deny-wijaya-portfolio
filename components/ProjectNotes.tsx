"use client";

import { useState } from "react";
import type { ProjectNote } from "@/content/site";

interface ProjectNotesProps {
  id: string;
  notes: ProjectNote[];
}

export default function ProjectNotes({ id, notes }: ProjectNotesProps) {
  const [open, setOpen] = useState(false);
  const panelId = `${id}-notes`;

  return (
    <div className="col-span-full mt-7 flex flex-col gap-5">
      <button
        type="button"
        className="inline-flex min-h-11 cursor-pointer items-center gap-3 self-start border-0 border-b border-accent bg-transparent p-0 font-mono text-[13px] text-ink transition-colors duration-200 hover:text-accent"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="inline-block w-[14px] text-center" aria-hidden="true">
          {open ? "−" : "+"}
        </span>
        {open ? "Hide project notes" : "Read project notes"}
      </button>
      {open && (
        <div id={panelId} className="drop-notes grid grid-cols-1 gap-x-10 border-t border-line md:grid-cols-2">
          {notes.map((note) => (
            <div key={note.title} className="border-b border-line py-5">
              <h4 className="eyebrow m-0 mb-[6px] font-medium text-accent">{note.title}</h4>
              <p className="m-0 text-[15px]">{note.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
