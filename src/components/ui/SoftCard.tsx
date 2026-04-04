import type { ElementType, ReactNode } from "react";

type SoftCardProps = {
  as?: ElementType;
  href?: string;
  target?: string;
  rel?: string;
  children?: ReactNode;
  className?: string;
  hoverable?: boolean;
  padded?: boolean;
};

const base =
  "rounded-[1.75rem] border-2 border-line bg-card text-ink shadow-soft transition-interactive md:rounded-[2rem]";

const hoverStyles =
  "hover:-translate-y-1 hover:border-brand hover:shadow-soft-hover";

const SoftCard = ({
  as: Tag = "div",
  href,
  target,
  rel,
  children,
  className = "",
  hoverable = false,
  padded = true,
}: SoftCardProps) => {
  const pad = padded ? "p-5 sm:p-6 md:p-7" : "";
  const h = hoverable ? hoverStyles : "";
  const cls = `${base} ${h} ${pad} ${className}`.trim();
  const focusRing =
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={`block ${cls} ${focusRing}`.trim()}
      >
        {children}
      </a>
    );
  }

  return <Tag className={cls}>{children}</Tag>;
};

export default SoftCard;
