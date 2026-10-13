import Image from "next/image";
import { about, profile } from "@/content/site";
import SectionHeading from "@/components/SectionHeading";
import ProjectVisual from "@/components/ProjectVisual";

export default function About() {
  return (
    <section id="about" className="sec wrap" aria-labelledby="about-title">
      <SectionHeading id="about-title" num="03." title={about.title} />

      <div className="grid-12 gap-y-12">
        <figure className="col-start-1 col-end-4 m-0 max-md:max-w-[280px]">
          {profile.aboutPhoto ? (
            <div className="relative aspect-[3/4] overflow-hidden rounded-[14px] border border-line">
              <Image src={profile.aboutPhoto} alt={`Portrait of ${profile.name}`} fill sizes="280px" className="object-cover" />
            </div>
          ) : (
            <ProjectVisual
              image={null}
              alt=""
              title="Portrait"
              subtitle="Optional, 3:4"
              ariaLabel="Placeholder for a portrait of Deny Wijaya"
              warm
              aspect="3 / 4"
              sizes="280px"
              className="rounded-[14px] border border-line"
            />
          )}
          <figcaption className="eyebrow mt-3 text-muted">{about.caption}</figcaption>
          <dl className="m-0 mt-7 border-t border-line">
            {about.facts.map((fact) => (
              <div key={fact.label} className="border-b border-line py-3">
                <dt className="eyebrow text-muted">{fact.label}</dt>
                {fact.values.map((value) => (
                  <dd key={value} className="m-0 mt-1 text-[14px] leading-[1.5]">
                    {value}
                  </dd>
                ))}
              </div>
            ))}
          </dl>
        </figure>

        <div className="col-start-5 col-end-10 flex flex-col gap-[22px]">
          {about.paragraphs.map((text, i) =>
            i === 0 ? (
              <p key={i} className="m-0 text-[18px] leading-[1.45] tracking-[-0.015em] text-ink md:text-[23px]">
                {text}
              </p>
            ) : (
              <p key={i} className="m-0 text-[18px] leading-[1.6] tracking-[-0.005em] text-soft md:text-[19px]">
                {text}
              </p>
            ),
          )}
        </div>

        <ul
          className="col-start-5 col-end-13 m-0 mt-6 grid list-none grid-cols-1 gap-x-10 border-t border-line p-0 md:grid-cols-2"
          aria-label="How I work"
        >
          {about.principles.map((p, i) => (
            <li key={p.title} className="grid grid-cols-[40px_1fr] gap-2 border-b border-line py-5">
              <span className="font-mono text-[12px] tracking-[0.1em] text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <strong className="block text-[17px] font-medium">{p.title}</strong>
                <span className="text-[15px] text-muted">{p.body}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
