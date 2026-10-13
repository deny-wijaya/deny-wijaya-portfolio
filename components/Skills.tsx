import { expertise } from "@/content/site";
import SectionHeading from "@/components/SectionHeading";

export default function Skills() {
  return (
    <section id="expertise" className="sec wrap" aria-labelledby="skills-title">
      <SectionHeading id="skills-title" num="03.1" title={expertise.title} intro={expertise.intro} />

      <div className="grid grid-cols-2 gap-x-4 gap-y-8 max-[420px]:grid-cols-1 md:grid-cols-3 md:gap-6 lg:grid-cols-5">
        {expertise.groups.map((g) => (
          <dl key={g.group} className="m-0 rounded-[14px] border border-line bg-surface p-5">
            <dt className="eyebrow mb-[14px] text-accent">{g.group}</dt>
            {g.items.map((item) => (
              <dd key={item} className="tri m-0 py-[5px] text-[15px] text-soft">
                {item}
              </dd>
            ))}
          </dl>
        ))}
      </div>
    </section>
  );
}
