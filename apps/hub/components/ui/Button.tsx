import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-ink text-canvas border border-ink hover:bg-accent hover:border-accent shadow-soft hover:shadow-lift hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "bg-transparent text-ink border border-line-strong hover:border-accent/50 hover:bg-accent/[0.04] hover:-translate-y-0.5",
  ghost:
    "bg-transparent text-ink border border-transparent hover:text-accent",
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
    "inline-flex items-center justify-center px-6 py-3 text-sm font-medium tracking-tight transition-all duration-300 ease-smooth";

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
