import type { ReactNode } from "react";

type SectionHeaderProps = {
  label: string;
  title: string;
  description?: string;
  aside?: ReactNode;
  className?: string;
  introClassName?: string;
  titleAs?: "h2" | "h3";
};

const SectionHeader = ({
  label,
  title,
  description,
  aside,
  className = "",
  introClassName = "",
  titleAs: TitleTag = "h2",
}: SectionHeaderProps) => {
  return (
    <div
      className={`mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between ${className}`.trim()}
    >
      <div className={`max-w-2xl ${introClassName}`.trim()}>
        <p className="inline-flex rounded-full bg-chip px-4 py-1.5 font-display text-sm font-extrabold text-chip-ink ring-2 ring-chip-ring/55">
          {label}
        </p>
        <TitleTag className="font-display mt-4 text-3xl font-extrabold tracking-tight text-ink md:text-[2.75rem] md:leading-tight">
          {title}
        </TitleTag>
        {description ? (
          <p className="mt-5 max-w-prose text-lg font-medium leading-relaxed text-ink-secondary md:text-xl">
            {description}
          </p>
        ) : null}
      </div>
      {aside ? <div className="shrink-0">{aside}</div> : null}
    </div>
  );
};

export default SectionHeader;
