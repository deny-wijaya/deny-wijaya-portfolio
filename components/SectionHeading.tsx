interface SectionHeadingProps {
  id: string;
  num: string;
  title: string;
  intro?: string;
}

export default function SectionHeading({ id, num, title, intro }: SectionHeadingProps) {
  return (
    <div className="sec-head flex flex-wrap items-center gap-x-[18px] gap-y-3 pb-9 md:pb-14">
      <span className="font-mono text-[clamp(16px,1.6vw,20px)] text-accent">{num}</span>
      <h2
        id={id}
        className="m-0 flex-[0_1_auto] text-[clamp(30px,3.6vw,46px)] leading-[1.02] font-medium tracking-[-0.035em]"
      >
        {title}
      </h2>
      {intro && (
        <p className="order-3 m-0 basis-full text-[16px] leading-[1.6] text-muted">
          <span className="block max-w-[60ch]">{intro}</span>
        </p>
      )}
    </div>
  );
}
