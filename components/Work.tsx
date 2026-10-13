import { featuredProjects, otherProjects, work, type FeaturedProject } from "@/content/site";
import SectionHeading from "@/components/SectionHeading";
import ProjectVisual from "@/components/ProjectVisual";
import ProjectNotes from "@/components/ProjectNotes";

function Featured({ project, index }: { project: FeaturedProject; index: number }) {
  const rev = project.reversed;
  const titleId = `${project.id}-title`;

  return (
    <article
      id={project.id}
      className={`feat grid grid-cols-1 items-center gap-x-6 md:grid-cols-12 ${index > 0 ? "mt-[120px]" : ""}`}
      aria-labelledby={titleId}
    >
      <div
        className={`feat-visual relative row-start-1 overflow-hidden rounded-[14px] md:row-start-1 ${
          rev ? "md:col-start-5 md:col-end-13" : "md:col-start-1 md:col-end-9"
        }`}
      >
        <ProjectVisual
          image={project.image}
          alt={`${project.name} screenshot`}
          title={project.placeholder.title}
          subtitle={project.placeholder.subtitle}
          ariaLabel={project.placeholder.ariaLabel}
          warm={project.placeholder.warm}
          aspect="16 / 10"
          sizes="(max-width: 859px) 100vw, 840px"
          className="rounded-[14px] border border-line"
        />
      </div>

      <div
        className={`z-[2] row-start-2 -mt-12 flex flex-col items-start gap-[14px] px-3 text-left md:row-start-1 md:mt-0 md:px-0 ${
          rev
            ? "md:col-start-1 md:col-end-7"
            : "md:col-start-7 md:col-end-13 md:items-end md:text-right"
        }`}
      >
        <p className="m-0 font-mono text-[13px] text-accent">
          Featured project · {String(index + 1).padStart(2, "0")}
        </p>
        <h3 id={titleId} className="m-0 text-[clamp(30px,3.4vw,44px)] leading-[1.05] font-medium tracking-[-0.03em]">
          {project.name}
        </h3>
        <div className="feat-panel glass rounded-[14px] border border-line px-[26px] py-6 text-left text-[16px] leading-[1.6]">
          <p className="m-0">{project.summary}</p>
          <ul
            className="m-0 mt-[14px] grid list-none gap-[6px] p-0 text-[14.5px] text-muted"
            aria-label={project.pointsLabel}
          >
            {project.points.map((point) => (
              <li key={point} className="tri">
                {point}
              </li>
            ))}
          </ul>
        </div>
        <ul
          className={`m-0 flex list-none flex-wrap justify-start gap-x-[18px] gap-y-[6px] p-0 font-mono text-[13px] text-muted ${
            rev ? "" : "md:justify-end"
          }`}
          aria-label={project.tagsLabel}
        >
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        {project.link && (
          <a
            className="min-h-8 border-b border-accent py-[6px] font-mono text-[13px] text-ink transition-colors duration-200 hover:text-accent"
            href={project.link.href}
            target="_blank"
            rel="noopener"
          >
            {project.link.label} ↗
          </a>
        )}
      </div>

      {project.notes && <ProjectNotes id={project.id} notes={project.notes} />}
    </article>
  );
}

function FolderIcon() {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    </svg>
  );
}

export default function Work() {
  return (
    <section id="work" className="sec wrap" aria-labelledby="work-title">
      <SectionHeading id="work-title" num="01." title={work.title} intro={work.intro} />

      {featuredProjects.map((project, i) => (
        <Featured key={project.id} project={project} index={i} />
      ))}

      <div className="mt-[88px] md:mt-[140px]">
        <h3 className="m-0 mb-2 text-center text-[clamp(24px,2.4vw,32px)] font-medium tracking-[-0.02em]">
          {otherProjects.title}
        </h3>
        <p className="eyebrow m-0 mb-10 text-center text-muted">{otherProjects.sub}</p>
        <ul className="m-0 grid list-none grid-cols-1 gap-4 p-0 md:grid-cols-2 lg:grid-cols-3">
          {otherProjects.items.map((item) => (
            <li key={item.name}>
              <div className="card flex h-full flex-col gap-[14px] rounded-[14px] border border-line bg-surface px-6 py-[26px]">
                <div className="flex items-center justify-between text-accent">
                  <FolderIcon />
                  <span className="eyebrow text-muted">{item.kind}</span>
                </div>
                <h4 className="m-0 text-[19px] font-medium tracking-[-0.01em]">{item.name}</h4>
                <p className="m-0 flex-1 text-[14.5px] text-muted">{item.summary}</p>
                <ul className="m-0 flex list-none flex-wrap gap-x-3 gap-y-1 p-0 font-mono text-[12px] text-muted">
                  {item.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
