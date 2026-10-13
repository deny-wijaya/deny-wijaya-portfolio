import Image from "next/image";

interface ProjectVisualProps {
  image: string | null;
  alt: string;
  title: string;
  subtitle: string;
  ariaLabel: string;
  warm?: boolean;
  aspect: string;
  sizes: string;
  className?: string;
}

export default function ProjectVisual({
  image,
  alt,
  title,
  subtitle,
  ariaLabel,
  warm = false,
  aspect,
  sizes,
  className = "",
}: ProjectVisualProps) {
  if (image) {
    return (
      <div className={`relative overflow-hidden ${className}`} style={{ aspectRatio: aspect }}>
        <Image src={image} alt={alt} fill sizes={sizes} className="object-cover" />
      </div>
    );
  }

  return (
    <div
      className={`ph ${warm ? "ph-warm" : ""} ${className}`}
      style={{ aspectRatio: aspect }}
      role="img"
      aria-label={ariaLabel}
    >
      <span className="max-w-[80%] rounded-[8px] border border-line bg-paper px-[14px] py-[10px] text-center font-mono text-[12px] leading-[1.5]">
        <span className="block tracking-[0.1em] text-ink uppercase">{title}</span>
        <span className="block tracking-[0.02em] text-muted">{subtitle}</span>
      </span>
    </div>
  );
}
