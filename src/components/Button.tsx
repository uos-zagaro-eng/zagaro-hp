import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "accent" | "outline";
  className?: string;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseClasses =
    "inline-block px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white";

  const variants = {
    primary:
      "bg-primary text-slate-900 hover:bg-primary-light focus:ring-primary shadow-lg shadow-primary/40 hover:shadow-xl hover:shadow-primary/50 font-bold",
    accent:
      "bg-accent text-white hover:bg-accent-light focus:ring-accent shadow-lg shadow-accent/40 hover:shadow-xl hover:shadow-accent/50 font-bold",
    outline:
      "border-2 border-white text-white hover:bg-white/20 hover:border-white/80 focus:ring-white bg-white/10 backdrop-blur-md font-bold",
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
