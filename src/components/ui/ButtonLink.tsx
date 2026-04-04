import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonLinkProps = {
  href: string;
  variant: ButtonVariant;
  className?: string;
  children?: ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">;

const variants: Record<ButtonVariant, string> = {
  primary:
    "inline-flex items-center justify-center gap-2 rounded-2xl bg-brand px-8 py-4 text-base font-bold text-on-brand shadow-sticker ring-2 ring-pop-ring ring-offset-2 ring-offset-page hover:bg-brand-hover hover:shadow-soft-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-active",
  secondary:
    "inline-flex items-center justify-center rounded-2xl border-2 border-line bg-card px-8 py-4 text-base font-bold text-ink shadow-soft hover:border-brand hover:bg-brand-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
  ghost:
    "inline-flex items-center justify-center rounded-2xl border-2 border-line-faint bg-card px-5 py-3 text-sm font-bold text-ink-secondary hover:border-line hover:bg-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
};

const ButtonLink = ({
  href,
  variant,
  className = "",
  children,
  ...rest
}: ButtonLinkProps) => {
  return (
    <a
      href={href}
      className={`${variants[variant]} transition-interactive ${className}`.trim()}
      {...rest}
    >
      {children}
    </a>
  );
};

export default ButtonLink;
