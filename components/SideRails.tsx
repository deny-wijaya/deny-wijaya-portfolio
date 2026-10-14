import { profile } from "@/content/site";

const railClass =
  "rail fixed z-40 hidden flex-col items-center gap-[18px] min-[1500px]:flex";
const linkClass =
  "p-[6px] font-mono text-[12px] tracking-[0.12em] text-muted hover:text-accent";

export default function SideRails() {
  return (
    <>
      <aside className={`${railClass} rail-l bottom-0 left-9`} aria-label="Social links">
        <a className={linkClass} href={profile.linkedin} target="_blank" rel="noopener">
          LinkedIn
        </a>
      </aside>
      <aside className={`${railClass} rail-r right-9 bottom-20`} aria-label="Email">
        <a className={linkClass} href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
      </aside>
    </>
  );
}
