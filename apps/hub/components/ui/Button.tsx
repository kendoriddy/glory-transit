import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-accent text-canvas border border-accent hover:bg-accent/90 hover:border-accent/90 shadow-gold",
  secondary:
    "bg-transparent text-ink border border-accent-border glass-surface hover:border-accent hover:bg-accent-soft",
  ghost:
    "bg-transparent text-muted border border-transparent hover:text-accent hover:border-line",
};

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  download?: boolean;
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  external,
  download,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center min-h-[52px] px-7 text-[13px] font-extrabold uppercase tracking-[0.04em] transition-all duration-300 ease-smooth";

  if (external || download) {
    return (
      <a
        href={href}
        className={`${base} ${styles[variant]} ${className}`}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        download={download || undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}
